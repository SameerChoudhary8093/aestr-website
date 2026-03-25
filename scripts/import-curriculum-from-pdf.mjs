import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import pdfParse from 'pdf-parse';

const rootDir = process.cwd();
const defaultPdfPath = path.join(rootDir, 'public', 'Curriculum_2.pdf');
const defaultCoursesPath = path.join(rootDir, 'src', 'data', 'courses.json');
const defaultTracksPath = path.join(rootDir, 'src', 'data', 'tracks.json');
const defaultReportPath = path.join(rootDir, 'src', 'data', 'curriculum-import-report.json');
const defaultModel = process.env.GEMINI_MODEL || 'gemini-3.1-flash-lite-preview';
const apiKey = process.env.GEMINI_API_KEY;

function parseArgs(argv) {
  const args = {
    pdf: defaultPdfPath,
    coursesOut: defaultCoursesPath,
    tracksOut: defaultTracksPath,
    reportOut: defaultReportPath,
    model: defaultModel,
    chunkChars: 18000,
    overlapParagraphs: 2,
    dryRun: false,
  };

  for (let index = 2; index < argv.length; index += 1) {
    const value = argv[index];

    if (value === '--dry-run') {
      args.dryRun = true;
      continue;
    }

    const nextValue = argv[index + 1];

    if (!nextValue) {
      continue;
    }

    if (value === '--pdf') {
      args.pdf = path.resolve(rootDir, nextValue);
      index += 1;
      continue;
    }

    if (value === '--courses-out') {
      args.coursesOut = path.resolve(rootDir, nextValue);
      index += 1;
      continue;
    }

    if (value === '--tracks-out') {
      args.tracksOut = path.resolve(rootDir, nextValue);
      index += 1;
      continue;
    }

    if (value === '--report-out') {
      args.reportOut = path.resolve(rootDir, nextValue);
      index += 1;
      continue;
    }

    if (value === '--model') {
      args.model = nextValue;
      index += 1;
      continue;
    }

    if (value === '--chunk-chars') {
      args.chunkChars = Number(nextValue) || args.chunkChars;
      index += 1;
      continue;
    }

    if (value === '--overlap-paragraphs') {
      args.overlapParagraphs = Number(nextValue) || args.overlapParagraphs;
      index += 1;
    }
  }

  return args;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function normalizeWhitespace(value) {
  return String(value || '')
    .replace(/\r/g, '\n')
    .replace(/\u0000/g, '')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function splitIntoParagraphs(text) {
  return normalizeWhitespace(text)
    .split(/\n\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function chunkParagraphs(paragraphs, targetChars, overlapParagraphs) {
  const chunks = [];
  let index = 0;

  while (index < paragraphs.length) {
    const chunkParagraphs = [];
    let charCount = 0;
    let cursor = index;

    while (cursor < paragraphs.length) {
      const nextParagraph = paragraphs[cursor];
      const nextLength = nextParagraph.length + 2;

      if (chunkParagraphs.length > 0 && charCount + nextLength > targetChars) {
        break;
      }

      chunkParagraphs.push(nextParagraph);
      charCount += nextLength;
      cursor += 1;
    }

    chunks.push({
      index: chunks.length,
      text: chunkParagraphs.join('\n\n'),
    });

    if (cursor >= paragraphs.length) {
      break;
    }

    index = Math.max(cursor - overlapParagraphs, index + 1);
  }

  return chunks;
}

async function ensureParentDirectory(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function readJsonFile(filePath, fallbackValue) {
  try {
    const file = await fs.readFile(filePath, 'utf8');
    return JSON.parse(file);
  } catch {
    return fallbackValue;
  }
}

function extractJson(text) {
  const trimmed = text.trim();

  if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
    return JSON.parse(trimmed);
  }

  const fencedMatch = trimmed.match(/```json\s*([\s\S]*?)```/i);
  if (fencedMatch) {
    return JSON.parse(fencedMatch[1]);
  }

  const firstBrace = trimmed.indexOf('{');
  const lastBrace = trimmed.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    return JSON.parse(trimmed.slice(firstBrace, lastBrace + 1));
  }

  const firstBracket = trimmed.indexOf('[');
  const lastBracket = trimmed.lastIndexOf(']');
  if (firstBracket !== -1 && lastBracket !== -1 && lastBracket > firstBracket) {
    return JSON.parse(trimmed.slice(firstBracket, lastBracket + 1));
  }

  throw new Error('Gemini response did not contain valid JSON.');
}

async function callGemini({ model, systemInstruction, userPrompt, retryCount = 3 }) {
  if (!apiKey) {
    throw new Error('Missing GEMINI_API_KEY in the environment.');
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  for (let attempt = 1; attempt <= retryCount; attempt += 1) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: systemInstruction }],
        },
        contents: [
          {
            role: 'user',
            parts: [{ text: userPrompt }],
          },
        ],
        generationConfig: {
          temperature: 0.15,
          responseMimeType: 'application/json',
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (attempt === retryCount) {
        throw new Error(`Gemini API error (${response.status}): ${errorText}`);
      }
      await new Promise((resolve) => setTimeout(resolve, attempt * 1500));
      continue;
    }

    const payload = await response.json();
    const text = payload?.candidates?.[0]?.content?.parts?.map((part) => part.text || '').join('') || '';

    if (!text.trim()) {
      if (attempt === retryCount) {
        throw new Error('Gemini returned an empty response.');
      }
      await new Promise((resolve) => setTimeout(resolve, attempt * 1500));
      continue;
    }

    return extractJson(text);
  }

  throw new Error('Gemini request failed after retries.');
}

function normalizeTrack(track, fallbackType) {
  const title = normalizeWhitespace(track?.title);
  const type = track?.type === 'major' || track?.type === 'minor' ? track.type : fallbackType;
  return {
    id: normalizeWhitespace(track?.id) || slugify(title),
    title,
    description: normalizeWhitespace(track?.description),
    type,
  };
}

function normalizeUnit(unit, index) {
  const title = normalizeWhitespace(unit?.title) || `Unit ${index + 1}`;
  const content = normalizeWhitespace(unit?.content);
  return {
    title,
    content,
  };
}

function dedupeStrings(values) {
  const seen = new Set();
  const output = [];

  for (const rawValue of values) {
    const value = normalizeWhitespace(rawValue);
    const key = value.toLowerCase();

    if (!value || seen.has(key)) {
      continue;
    }

    seen.add(key);
    output.push(value);
  }

  return output;
}

function normalizeCourse(course, allowedMajorTrackIds, allowedMinorTrackIds) {
  const code = normalizeWhitespace(course?.code).toUpperCase();
  const title = normalizeWhitespace(course?.title);
  const id = normalizeWhitespace(course?.id) || slugify(code || title);
  const semester = Number(course?.semester) || 0;
  const units = Array.isArray(course?.units) ? course.units.map(normalizeUnit).filter((unit) => unit.title || unit.content) : [];
  const labs = Array.isArray(course?.labs) ? dedupeStrings(course.labs) : [];
  const skills = Array.isArray(course?.skills) ? dedupeStrings(course.skills) : [];
  const majorTracks = Array.isArray(course?.majorTracks) ? dedupeStrings(course.majorTracks).filter((trackId) => allowedMajorTrackIds.has(trackId)) : [];
  const minorTracks = Array.isArray(course?.minorTracks) ? dedupeStrings(course.minorTracks).filter((trackId) => allowedMinorTrackIds.has(trackId)) : [];

  return {
    id,
    code,
    title,
    semester,
    credits: normalizeWhitespace(course?.credits),
    type: normalizeWhitespace(course?.type) || 'Core',
    description: normalizeWhitespace(course?.description),
    units,
    labs,
    skills,
    majorTracks,
    minorTracks,
  };
}

function mergeUnits(firstUnits, secondUnits) {
  const merged = [...firstUnits];
  const seen = new Set(firstUnits.map((unit) => `${unit.title.toLowerCase()}::${unit.content.toLowerCase()}`));

  for (const unit of secondUnits) {
    const key = `${unit.title.toLowerCase()}::${unit.content.toLowerCase()}`;
    if (!seen.has(key)) {
      seen.add(key);
      merged.push(unit);
    }
  }

  return merged;
}

function pickLongerString(first, second) {
  return normalizeWhitespace(second).length > normalizeWhitespace(first).length ? normalizeWhitespace(second) : normalizeWhitespace(first);
}

function mergeCourseRecords(existingCourse, incomingCourse) {
  return {
    id: existingCourse.id || incomingCourse.id,
    code: existingCourse.code || incomingCourse.code,
    title: pickLongerString(existingCourse.title, incomingCourse.title),
    semester: existingCourse.semester || incomingCourse.semester,
    credits: pickLongerString(existingCourse.credits, incomingCourse.credits),
    type: pickLongerString(existingCourse.type, incomingCourse.type),
    description: pickLongerString(existingCourse.description, incomingCourse.description),
    units: mergeUnits(existingCourse.units, incomingCourse.units),
    labs: dedupeStrings([...existingCourse.labs, ...incomingCourse.labs]),
    skills: dedupeStrings([...existingCourse.skills, ...incomingCourse.skills]),
    majorTracks: dedupeStrings([...existingCourse.majorTracks, ...incomingCourse.majorTracks]),
    minorTracks: dedupeStrings([...existingCourse.minorTracks, ...incomingCourse.minorTracks]),
  };
}

function getCourseKey(course) {
  return course.code || course.id || slugify(course.title);
}

function summarizeCourseForMapping(course) {
  return {
    code: course.code,
    title: course.title,
    semester: course.semester,
    credits: course.credits,
    type: course.type,
    description: course.description,
    skills: course.skills,
    unitTitles: course.units.slice(0, 8).map((unit) => unit.title),
    currentMajorTracks: course.majorTracks,
    currentMinorTracks: course.minorTracks,
  };
}

async function extractTracksFromPdf({ model, text }) {
  const systemInstruction = [
    'You extract specialization track catalogs from curriculum text.',
    'Return only valid JSON.',
    'Capture explicit track names and whether they are major or minor.',
    'Do not invent tracks that are not supported by the text.',
  ].join(' ');

  const userPrompt = [
    'Extract the specialization track catalog from this curriculum text.',
    'Return this exact JSON shape:',
    JSON.stringify({
      majors: [
        {
          title: 'Software & Cloud Engineering',
          description: 'Short description from the text',
        },
      ],
      minors: [
        {
          title: 'FinTech',
          description: 'Short description from the text',
        },
      ],
      notes: ['string'],
    }, null, 2),
    'Curriculum text:',
    text,
  ].join('\n\n');

  return callGemini({ model, systemInstruction, userPrompt });
}

function normalizeExtractedTracks(extractedTracks) {
  const majors = Array.isArray(extractedTracks?.majors)
    ? extractedTracks.majors.map((track) => normalizeTrack(track, 'major')).filter((track) => track.title)
    : [];
  const minors = Array.isArray(extractedTracks?.minors)
    ? extractedTracks.minors.map((track) => normalizeTrack(track, 'minor')).filter((track) => track.title)
    : [];

  return {
    majors,
    minors,
    notes: Array.isArray(extractedTracks?.notes) ? dedupeStrings(extractedTracks.notes) : [],
  };
}

function enrichTracks(canonicalTracks, extractedTracks) {
  const extractedBySlug = new Map(
    [...extractedTracks.majors, ...extractedTracks.minors].map((track) => [slugify(track.title), track])
  );

  if (!canonicalTracks.length) {
    return dedupeTrackList([...extractedTracks.majors, ...extractedTracks.minors]);
  }

  return canonicalTracks.map((track) => {
    const matchedTrack = extractedBySlug.get(slugify(track.title));

    if (!matchedTrack) {
      return track;
    }

    return {
      ...track,
      description: pickLongerString(track.description, matchedTrack.description),
      type: track.type,
    };
  });
}

function dedupeTrackList(tracks) {
  const seen = new Set();
  const output = [];

  for (const track of tracks) {
    const key = `${track.type}::${slugify(track.title)}`;
    if (!track.title || seen.has(key)) {
      continue;
    }

    seen.add(key);
    output.push(track);
  }

  return output;
}

async function extractChunkData({ model, chunkText, chunkIndex, tracks }) {
  const systemInstruction = [
    'You extract academic curriculum data from PDF text.',
    'Return only valid JSON.',
    'Normalize any enumerated syllabus sections such as Unit 1, Task 1, Module 1, Experiment 1, or Topic 1 into the units array.',
    'Preserve the original section wording inside each unit title when possible.',
    'Use labs only for hands-on practical items, exercises, experiments, implementation tasks, studio work, or project prompts.',
    'If a course page is incomplete inside the chunk, still extract the partial course but never invent missing values.',
    'Use only the provided canonical track ids for majorTracks and minorTracks.',
  ].join(' ');

  const trackReference = tracks
    .map((track) => `${track.id} | ${track.type} | ${track.title} | ${track.description}`)
    .join('\n');

  const userPrompt = [
    'Extract every course that appears in this curriculum chunk.',
    'If the text contains track definitions or track hints, use them to improve mapping but keep the output constrained to the canonical track ids below.',
    'Do not hallucinate courses that are not supported by the text.',
    'Return this exact JSON shape:',
    JSON.stringify({
      courses: [
        {
          id: 'course-id',
          code: 'CS101',
          title: 'Course Title',
          semester: 1,
          credits: '4 (3-0-2)',
          type: 'Core',
          description: 'One concise summary sentence.',
          units: [{ title: 'Unit 1: ...', content: '...' }],
          labs: ['...'],
          skills: ['...'],
          majorTracks: ['software-cloud'],
          minorTracks: ['fintech'],
        },
      ],
      warnings: ['string'],
    }, null, 2),
    'Canonical tracks:',
    trackReference,
    `Chunk index: ${chunkIndex}`,
    'Chunk text:',
    chunkText,
  ].join('\n\n');

  return callGemini({ model, systemInstruction, userPrompt });
}

async function reconcileTrackMappings({ model, courses, tracks }) {
  const systemInstruction = [
    'You are validating curriculum track mappings.',
    'Return only valid JSON.',
    'Use only the canonical track ids supplied.',
    'Prefer precision over recall: only map a course to a track when the title, description, units, labs, or skills strongly support it.',
    'Foundation courses can remain unmapped.',
  ].join(' ');

  const trackReference = tracks
    .map((track) => `${track.id} | ${track.type} | ${track.title} | ${track.description}`)
    .join('\n');

  const mappingBatches = [];
  const batchSize = 20;

  for (let index = 0; index < courses.length; index += batchSize) {
    mappingBatches.push(courses.slice(index, index + batchSize));
  }

  const mergedMappings = new Map();

  for (const [batchIndex, batch] of mappingBatches.entries()) {
    const userPrompt = [
      'Review the following normalized course summaries and return only the best-supported track mappings.',
      'Return this exact JSON shape:',
      JSON.stringify({
        mappings: [
          {
            code: 'CS101',
            majorTracks: ['software-cloud'],
            minorTracks: ['fintech'],
          },
        ],
      }, null, 2),
      'Canonical tracks:',
      trackReference,
      `Batch index: ${batchIndex}`,
      'Course summaries:',
      JSON.stringify(batch.map(summarizeCourseForMapping), null, 2),
    ].join('\n\n');

    const response = await callGemini({ model, systemInstruction, userPrompt });
    const mappings = Array.isArray(response?.mappings) ? response.mappings : [];

    for (const mapping of mappings) {
      const code = normalizeWhitespace(mapping?.code).toUpperCase();
      if (!code) {
        continue;
      }
      mergedMappings.set(code, {
        majorTracks: Array.isArray(mapping?.majorTracks) ? dedupeStrings(mapping.majorTracks) : [],
        minorTracks: Array.isArray(mapping?.minorTracks) ? dedupeStrings(mapping.minorTracks) : [],
      });
    }
  }

  return mergedMappings;
}

function validateCourse(course) {
  return Boolean(
    course.id &&
      course.code &&
      course.title &&
      course.semester > 0 &&
      course.credits &&
      course.type &&
      course.description
  );
}

async function main() {
  const args = parseArgs(process.argv);
  const existingTracks = await readJsonFile(args.tracksOut, []);
  const canonicalTracks = existingTracks.map((track) => normalizeTrack(track, track?.type === 'minor' ? 'minor' : 'major'));

  const pdfBuffer = await fs.readFile(args.pdf);
  const parsedPdf = await pdfParse(pdfBuffer);
  const rawText = normalizeWhitespace(parsedPdf.text);
  const paragraphs = splitIntoParagraphs(rawText);
  const chunks = chunkParagraphs(paragraphs, args.chunkChars, args.overlapParagraphs);
  const trackCatalogText = paragraphs.slice(0, 120).join('\n\n');
  const extractedTrackCatalog = normalizeExtractedTracks(await extractTracksFromPdf({ model: args.model, text: trackCatalogText }));
  const tracks = enrichTracks(canonicalTracks, extractedTrackCatalog);
  const allowedMajorTrackIds = new Set(tracks.filter((track) => track.type === 'major').map((track) => track.id));
  const allowedMinorTrackIds = new Set(tracks.filter((track) => track.type === 'minor').map((track) => track.id));

  if (!tracks.length) {
    throw new Error(`No tracks could be derived from ${args.pdf}.`);
  }

  console.log(`PDF pages: ${parsedPdf.numpages}`);
  console.log(`Paragraphs: ${paragraphs.length}`);
  console.log(`Chunks: ${chunks.length}`);
  console.log(`Model: ${args.model}`);

  const extractionWarnings = [];
  const mergedCourses = new Map();

  for (const chunk of chunks) {
    console.log(`Extracting chunk ${chunk.index + 1}/${chunks.length}`);
    const extraction = await extractChunkData({
      model: args.model,
      chunkText: chunk.text,
      chunkIndex: chunk.index,
      tracks,
    });

    const extractedCourses = Array.isArray(extraction?.courses) ? extraction.courses : [];
    const warnings = Array.isArray(extraction?.warnings) ? extraction.warnings : [];
    extractionWarnings.push(...warnings.map((warning) => `Chunk ${chunk.index + 1}: ${warning}`));

    for (const rawCourse of extractedCourses) {
      const course = normalizeCourse(rawCourse, allowedMajorTrackIds, allowedMinorTrackIds);
      const courseKey = getCourseKey(course);
      const existingCourse = mergedCourses.get(courseKey);

      if (existingCourse) {
        mergedCourses.set(courseKey, mergeCourseRecords(existingCourse, course));
      } else {
        mergedCourses.set(courseKey, course);
      }
    }
  }

  const courses = Array.from(mergedCourses.values());
  const reconciledMappings = await reconcileTrackMappings({ model: args.model, courses, tracks });

  const finalizedCourses = courses
    .map((course) => {
      const mapping = reconciledMappings.get(course.code);
      return {
        ...course,
        majorTracks: dedupeStrings([...(mapping?.majorTracks || []), ...course.majorTracks]).filter((trackId) => allowedMajorTrackIds.has(trackId)),
        minorTracks: dedupeStrings([...(mapping?.minorTracks || []), ...course.minorTracks]).filter((trackId) => allowedMinorTrackIds.has(trackId)),
      };
    })
    .filter(validateCourse)
    .sort((first, second) => {
      if (first.semester !== second.semester) {
        return first.semester - second.semester;
      }
      return first.code.localeCompare(second.code);
    });

  const invalidCourses = courses.filter((course) => !validateCourse(course)).map((course) => ({
    code: course.code,
    title: course.title,
    semester: course.semester,
  }));

  const report = {
    generatedAt: new Date().toISOString(),
    pdfPath: args.pdf,
    model: args.model,
    pdfPages: parsedPdf.numpages,
    paragraphCount: paragraphs.length,
    chunkCount: chunks.length,
    extractedCourseCount: finalizedCourses.length,
    invalidCourseCount: invalidCourses.length,
    extractedTrackCount: tracks.length,
    trackCatalogNotes: extractedTrackCatalog.notes,
    invalidCourses,
    warnings: extractionWarnings,
  };

  if (args.dryRun) {
    console.log(JSON.stringify(report, null, 2));
    console.log(JSON.stringify(finalizedCourses.slice(0, 3), null, 2));
    return;
  }

  await ensureParentDirectory(args.coursesOut);
  await ensureParentDirectory(args.tracksOut);
  await ensureParentDirectory(args.reportOut);

  await fs.writeFile(args.coursesOut, `${JSON.stringify(finalizedCourses, null, 2)}\n`, 'utf8');
  await fs.writeFile(args.tracksOut, `${JSON.stringify(tracks, null, 2)}\n`, 'utf8');
  await fs.writeFile(args.reportOut, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

  console.log(`Wrote ${finalizedCourses.length} courses to ${args.coursesOut}`);
  console.log(`Wrote ${tracks.length} tracks to ${args.tracksOut}`);
  console.log(`Wrote import report to ${args.reportOut}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
