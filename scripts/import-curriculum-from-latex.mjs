import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const rootDir = process.cwd();
const defaultMainTexPath = path.join(rootDir, 'public', 'Curriculum', 'main.tex');
const defaultSyllabusDir = path.join(rootDir, 'public', 'Curriculum', 'syllabus');
const defaultCoursesPath = path.join(rootDir, 'src', 'data', 'courses.json');
const defaultTracksPath = path.join(rootDir, 'src', 'data', 'tracks.json');
const defaultStructurePath = path.join(rootDir, 'src', 'data', 'curriculum-structure.json');
const defaultReportPath = path.join(rootDir, 'src', 'data', 'curriculum-import-report.json');

const majorTrackCatalog = [
  {
    id: 'software-cloud',
    title: 'Software & Cloud Engineering',
    aliases: ['SCE', 'Software and Cloud Engineering', 'Software & Cloud Engineering'],
    description: 'Focuses on software architecture, cloud computing, distributed systems, DevOps, and scalable service development.',
    folderNames: ['se', 'elec_se'],
    codePrefixes: ['SE'],
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    aliases: ['Artificial Intelligence'],
    description: 'Covers machine learning, deep learning, generative AI, natural language processing, computer vision, and intelligent systems.',
    folderNames: ['ml', 'elec_ml'],
    codePrefixes: ['ML'],
  },
  {
    id: 'data-science',
    title: 'Data Science',
    aliases: ['Data Science'],
    description: 'Focuses on statistics, databases, analytics engineering, big data systems, and predictive modeling.',
    folderNames: ['ds', 'elec_ds'],
    codePrefixes: ['DS'],
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    aliases: ['Cyber Security', 'Cybersecurity'],
    description: 'Focuses on information security, cryptography, network defense, digital forensics, and secure application engineering.',
    folderNames: ['cyber', 'elec_cyber'],
    codePrefixes: ['CY'],
  },
  {
    id: 'robotics',
    title: 'Robotics',
    aliases: ['Robotics'],
    description: 'Focuses on robotics mechanics, embedded systems, perception, control systems, autonomous navigation, and ROS.',
    folderNames: ['robotics', 'elec_robotics'],
    codePrefixes: ['RB'],
  },
];

const minorTrackCatalog = [
  {
    id: 'bioinformatics',
    title: 'Bioinformatics',
    aliases: ['Bioinformatics'],
    description: 'Applies computation, algorithms, and data analysis to genomics, biological systems, and molecular data.',
    folderNames: ['mn-bio', 'mn-bio-a'],
    codePrefixes: ['MN-BIO'],
  },
  {
    id: 'biomedical',
    title: 'Biomedical',
    aliases: ['Biomedical'],
    description: 'Covers biomedical signals, systems, sensors, and medical image analysis through a computing lens.',
    folderNames: ['mn-med', 'mn-med-a'],
    codePrefixes: ['MN-MED'],
  },
  {
    id: 'product-design',
    title: 'Product Design',
    aliases: ['Product Design'],
    description: 'Focuses on HCI, spatial computing, immersive experiences, and interaction-centered product development.',
    folderNames: ['mn-des', 'mn-des-a'],
    codePrefixes: ['MN-DES'],
  },
  {
    id: 'smart-manufacturing',
    title: 'Smart Manufacturing',
    aliases: ['Smart Manufacturing'],
    description: 'Focuses on industrial IoT, digital twins, automation, and cyber-physical production systems.',
    folderNames: ['mn-mfg', 'mn-mfg-a'],
    codePrefixes: ['MN-MFG'],
  },
  {
    id: 'nanomaterials',
    title: 'Nanomaterials',
    aliases: ['Nanomaterials'],
    description: 'Connects computational modeling, material science, and data-driven analysis for advanced materials.',
    folderNames: ['mn-mat', 'mn-mat-a'],
    codePrefixes: ['MN-MAT'],
  },
  {
    id: 'fintech',
    title: 'FinTech',
    aliases: ['FinTech'],
    description: 'Covers algorithmic finance, market systems, blockchain, DeFi architectures, and financial computation.',
    folderNames: ['mn-fin', 'mn-fin-a'],
    codePrefixes: ['MN-FIN'],
  },
  {
    id: 'semiconductor-risc-v',
    title: 'Semiconductor & RISC-V',
    aliases: ['Semiconductor & RISC-V', 'Semiconductor and RISC-V'],
    description: 'Focuses on digital design, SoC architecture, semiconductor systems, verification, and RISC-V platforms.',
    folderNames: ['mn-sem', 'mn-sem-a'],
    codePrefixes: ['MN-SEM'],
  },
  {
    id: 'geoinformatics',
    title: 'Geoinformatics',
    aliases: ['Geoinformatics'],
    description: 'Focuses on GIS, spatial analysis, geospatial data systems, and geospatial AI.',
    folderNames: ['mn-geo', 'mn-geo-a'],
    codePrefixes: ['MN-GEO'],
  },
  {
    id: 'smart-cities',
    title: 'Smart Cities',
    aliases: ['Smart Cities'],
    description: 'Covers urban informatics, connected infrastructure, sensing systems, and data-driven urban platforms.',
    folderNames: ['mn-civ', 'mn-civ-a'],
    codePrefixes: ['MN-CIV'],
  },
  {
    id: 'mechatronics',
    title: 'Mechatronics in EV',
    aliases: ['Mechatronics in EV'],
    description: 'Focuses on automotive embedded systems, EV mechatronics, and autonomous vehicle intelligence.',
    folderNames: ['mn-evm', 'mn-evm-a'],
    codePrefixes: ['MN-EVM'],
  },
];

const allTrackCatalog = [...majorTrackCatalog, ...minorTrackCatalog];

const semesterTitles = {
  1: 'Semester 1',
  2: 'Semester 2',
  3: 'Semester 3',
  4: 'Semester 4',
  5: 'Semester 5',
  6: 'Semester 6',
  7: 'Semester 7',
  8: 'Semester 8',
};

const semesterDescriptions = {
  1: 'Foundations in mathematics, sciences, programming, communication, and the first innovation lab.',
  2: 'Core engineering foundations with data structures, communication, environmental studies, and labs.',
  3: 'Transition into core computer science with the first major and exploratory minor choices.',
  4: 'Systems, methodology, and continued specialization across majors and exploratory minors.',
  5: 'Networks, compilers, innovation lab work, and deeper specialization through major and minor pathways.',
  6: 'Software engineering, data systems, and the final common specialization stages before advanced electives.',
  7: 'Advanced electives, advanced minor selections, open electives, and technical seminar work.',
  8: 'Capstone completion with advanced electives, advanced minors, open electives, and the major project.',
};

const skillPatterns = [
  ['C++', /c\+\+/i],
  ['Python', /\bpython\b/i],
  ['Java', /\bjava\b/i],
  ['JavaScript', /\bjavascript\b|\bjs\b/i],
  ['TypeScript', /\btypescript\b/i],
  ['React', /\breact\b/i],
  ['Next.js', /next\.js|nextjs/i],
  ['Node.js', /node\.js|nodejs/i],
  ['Express', /\bexpress\b/i],
  ['MongoDB', /mongodb/i],
  ['PostgreSQL', /postgres/i],
  ['SQL', /\bsql\b/i],
  ['NoSQL', /nosql/i],
  ['Data Structures', /data structures?|linked list|stack|queue|tree|graph/i],
  ['Algorithms', /algorithms?|dynamic programming|greedy|backtracking/i],
  ['Operating Systems', /operating systems?|process scheduling|memory management/i],
  ['Computer Networks', /computer networks?|tcp|udp|routing|network/i],
  ['Compiler Design', /compiler|lexical analysis|parsing/i],
  ['Machine Learning', /machine learning/i],
  ['Deep Learning', /deep learning|neural networks?/i],
  ['NLP', /natural language processing|\bnlp\b/i],
  ['Computer Vision', /computer vision/i],
  ['Statistics', /statistics?|probability|regression/i],
  ['Data Visualization', /data visualization|storytelling/i],
  ['Big Data', /big data|hadoop|spark|massive datasets/i],
  ['Cyber Security', /security|cryptography|penetration testing|forensics|malware/i],
  ['Cloud Computing', /cloud|distributed systems|serverless|microservices/i],
  ['DevOps', /devops|ci\/cd|gitops|terraform|ansible|sre/i],
  ['Databases', /database|dbms|normalization|transactions/i],
  ['Robotics', /robotics|robot|ros|motion planning|autonomous/i],
  ['Embedded Systems', /embedded|microcontroller|iot/i],
  ['Blockchain', /blockchain|defi|smart contracts?/i],
  ['GIS', /gis|geospatial|spatial/i],
  ['AR/VR', /ar\/vr|spatial computing|virtual reality|augmented reality/i],
  ['HCI', /human-computer interaction|\bhci\b/i],
  ['Semiconductor Design', /risc-v|soc|verification|semiconductor/i],
  ['Material Informatics', /materials?|nanomaterials?/i],
  ['Biomedical Systems', /biomedical|medical image|signals? and systems/i],
  ['Bioinformatics', /bioinformatics|genomic/i],
  ['FinTech', /financial|trading|portfolio|market|fintech/i],
  ['Communication Skills', /communication|presentation|seminar/i],
];

function parseArgs(argv) {
  const args = {
    mainTex: defaultMainTexPath,
    syllabusDir: defaultSyllabusDir,
    coursesOut: defaultCoursesPath,
    tracksOut: defaultTracksPath,
    structureOut: defaultStructurePath,
    reportOut: defaultReportPath,
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

    if (value === '--main-tex') {
      args.mainTex = path.resolve(rootDir, nextValue);
      index += 1;
      continue;
    }

    if (value === '--syllabus-dir') {
      args.syllabusDir = path.resolve(rootDir, nextValue);
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

    if (value === '--structure-out') {
      args.structureOut = path.resolve(rootDir, nextValue);
      index += 1;
      continue;
    }

    if (value === '--report-out') {
      args.reportOut = path.resolve(rootDir, nextValue);
      index += 1;
    }
  }

  return args;
}

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function normalizeWhitespace(value) {
  return String(value || '')
    .replace(/\r/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function cleanLatex(value) {
  return normalizeWhitespace(
    String(value || '')
      .replace(/\\hyperref\[[^\]]+\]\{([^}]*)\}/g, '$1')
      .replace(/\\(?:textbf|textit|emph|small|large|Large|huge|Huge)\{([^}]*)\}/g, '$1')
      .replace(/\\label\{[^}]*\}/g, '')
      .replace(/\\phantomsection/g, '')
      .replace(/\\rhead\{[^}]*\}/g, '')
      .replace(/\\lhead\{[^}]*\}/g, '')
      .replace(/\\cfoot\{[^}]*\}/g, '')
      .replace(/\\vspace\*?\{[^}]*\}/g, ' ')
      .replace(/\\hrule/g, ' ')
      .replace(/\\newpage/g, ' ')
      .replace(/\\noindent/g, ' ')
      .replace(/\\leftarrow/g, '←')
      .replace(/\\&/g, '&')
      .replace(/\\%/g, '%')
      .replace(/\\_/g, '_')
      .replace(/\\,/g, ' ')
      .replace(/\\\(/g, '(')
      .replace(/\\\)/g, ')')
      .replace(/\\\[/g, '[')
      .replace(/\\\]/g, ']')
      .replace(/\$(.*?)\$/g, '$1')
      .replace(/\\[A-Za-z]+\*?(?:\[[^\]]*\])?/g, ' ')
      .replace(/[{}]/g, '')
      .replace(/\\/g, ' ')
  );
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

async function ensureParentDirectory(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function collectTexFiles(directoryPath) {
  const entries = await fs.readdir(directoryPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directoryPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectTexFiles(absolutePath)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.tex') && entry.name !== 'scheme.tex') {
      files.push(absolutePath);
    }
  }

  return files.sort();
}

function extractMetadata(content) {
  const titleMatch = content.match(/\\section\*\{([\s\S]+)\s+\(([^()]+)\)\}/);
  const creditsMatch = content.match(/\\textbf\{Credits:\}\s*([^\n]+)/);
  const rheadMatch = content.match(/\\rhead\{([^:}]+):\s*([^}]*)\}/);

  if (!titleMatch) {
    return null;
  }

  return {
    title: cleanLatex(titleMatch[1]),
    code: cleanLatex(titleMatch[2]).toUpperCase(),
    credits: cleanLatex(creditsMatch?.[1] || ''),
    runningHeaderCode: cleanLatex(rheadMatch?.[1] || '').toUpperCase(),
    runningHeaderTitle: cleanLatex(rheadMatch?.[2] || ''),
  };
}

function extractContentAfterCredits(content) {
  const creditsIndex = content.search(/\\textbf\{Credits:\}/);
  if (creditsIndex === -1) {
    return content;
  }

  const nextLineIndex = content.indexOf('\n', creditsIndex);
  if (nextLineIndex === -1) {
    return '';
  }

  return content.slice(nextLineIndex + 1);
}

function extractTrackSections(content) {
  const matches = [...content.matchAll(/\\section\*\{(Track [A-Z]:[^}]*)\}([\s\S]*?)(?=(?:\\section\*\{Track [A-Z]:)|\\newpage|$)/g)];
  return matches.map((match) => ({
    title: cleanLatex(match[1]),
    content: match[2],
  }));
}

function extractSubsections(content) {
  const matches = [...content.matchAll(/\\subsection\*\{([^}]*)\}([\s\S]*?)(?=(?:\\subsection\*\{|\\section\*\{|\\newpage|$))/g)];
  return matches.map((match) => ({
    title: cleanLatex(match[1]),
    content: match[2],
  }));
}

function extractBoldBlocks(content) {
  const matches = [...content.matchAll(/\\noindent\s*\\textbf\{([^}]*)\}\s*(?:\\\\|\\)?\s*([\s\S]*?)(?=(?:\\vspace\*?\{[^}]*\}\s*)?(?:\\noindent\s*\\textbf\{|\\subsection\*\{|\\section\*\{|\\newpage|$))/g)];
  return matches.map((match) => ({
    rawTitle: match[1],
    rawContent: match[2],
  }));
}

function splitIntroAndBlocks(content) {
  const firstBlockMatch = content.match(/\\noindent\s*\\textbf\{/);
  if (!firstBlockMatch || firstBlockMatch.index === undefined) {
    return {
      intro: cleanLatex(content),
      blocks: [],
    };
  }

  return {
    intro: cleanLatex(content.slice(0, firstBlockMatch.index)),
    blocks: extractBoldBlocks(content.slice(firstBlockMatch.index)),
  };
}

function normalizeBlockTitle(rawTitle, rawContent, prefix) {
  const cleanedTitle = cleanLatex(rawTitle);
  const leadingDescriptorMatch = rawContent.match(/^\s*\\textit\{([^}]*)\}\s*:?\s*([\s\S]*)$/);

  if (leadingDescriptorMatch) {
    const descriptor = cleanLatex(leadingDescriptorMatch[1]).replace(/:$/, '');
    const title = cleanedTitle.includes(':') ? cleanedTitle : `${cleanedTitle}: ${descriptor}`;
    const content = cleanLatex(leadingDescriptorMatch[2]);
    return {
      title: prefix ? `${prefix} · ${title}` : title,
      content,
    };
  }

  return {
    title: prefix ? `${prefix} · ${cleanedTitle}` : cleanedTitle,
    content: cleanLatex(rawContent),
  };
}

function buildDescription(units, labs, fallbackText) {
  const source = units[0]?.content || labs[0] || fallbackText || '';
  const cleaned = normalizeWhitespace(source);
  if (cleaned.length <= 220) {
    return cleaned;
  }
  return `${cleaned.slice(0, 217).trim()}...`;
}

function extractSkills(course) {
  const haystack = [
    course.title,
    course.description,
    ...course.units.map((unit) => `${unit.title} ${unit.content}`),
    ...course.labs,
  ].join(' ');

  const matchedSkills = skillPatterns
    .filter(([, pattern]) => pattern.test(haystack))
    .map(([skill]) => skill);

  if (matchedSkills.length > 0) {
    return dedupeStrings(matchedSkills).slice(0, 10);
  }

  const titleTokens = cleanLatex(course.title)
    .split(/[^A-Za-z0-9+.-]+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 3 && !['with', 'from', 'into', 'the', 'and'].includes(token.toLowerCase()));

  return dedupeStrings(titleTokens).slice(0, 6);
}

function inferTrackMappings(absolutePath, code) {
  const normalizedPath = absolutePath.toLowerCase();
  const majorTracks = [];
  const minorTracks = [];

  for (const track of majorTrackCatalog) {
    const matchesFolder = track.folderNames.some((folderName) => normalizedPath.includes(`/${folderName.toLowerCase()}/`) || normalizedPath.endsWith(`/${folderName.toLowerCase()}.tex`));
    const matchesCode = track.codePrefixes.some((prefix) => code.startsWith(prefix));
    if (matchesFolder || matchesCode) {
      majorTracks.push(track.id);
    }
  }

  for (const track of minorTrackCatalog) {
    const matchesFolder = track.folderNames.some((folderName) => normalizedPath.includes(`/${folderName.toLowerCase()}.tex`) || normalizedPath.includes(`/${folderName.toLowerCase()}/`));
    const matchesCode = track.codePrefixes.some((prefix) => code.startsWith(prefix));
    if (matchesFolder || matchesCode) {
      minorTracks.push(track.id);
    }
  }

  return {
    majorTracks: dedupeStrings(majorTracks),
    minorTracks: dedupeStrings(minorTracks),
  };
}

function inferSemesterInfo(absolutePath) {
  const normalizedPath = absolutePath.replace(/\\/g, '/');
  const semesterMatch = normalizedPath.match(/\/semester(\d+)\//i);

  if (semesterMatch) {
    const semester = Number(semesterMatch[1]);
    return {
      semester,
      availabilitySemesters: [semester],
    };
  }

  if (normalizedPath.includes('/elec_')) {
    return {
      semester: 7,
      availabilitySemesters: [7, 8],
    };
  }

  if (normalizedPath.includes('/minor_exp/')) {
    return {
      semester: 3,
      availabilitySemesters: [3, 4, 5, 6],
    };
  }

  if (normalizedPath.includes('/minor_adv/')) {
    return {
      semester: 7,
      availabilitySemesters: [7, 8],
    };
  }

  return {
    semester: 0,
    availabilitySemesters: [],
  };
}

function isConcreteFileCode(fileCode) {
  return /\d/.test(fileCode) || /^MN-/.test(fileCode) || /-EL/.test(fileCode);
}

function inferCourseType(absolutePath, code, title) {
  const normalizedPath = absolutePath.toLowerCase();
  const lowerTitle = title.toLowerCase();

  if (normalizedPath.includes('/minor_exp/') || normalizedPath.includes('/minor_adv/')) {
    return 'Minor';
  }

  if (normalizedPath.includes('/elec_')) {
    return 'Elective';
  }

  if (/\/major\d+\//i.test(normalizedPath)) {
    return 'Major';
  }

  if (code.startsWith('IX')) {
    return 'Innovation Lab';
  }

  if (code.startsWith('SM')) {
    return 'Seminar';
  }

  if (code.startsWith('PR')) {
    return 'Project';
  }

  if (code.startsWith('CX') || code.startsWith('EX') || code.startsWith('PX') || lowerTitle.includes(' lab')) {
    return 'Lab';
  }

  return 'Core';
}

function parseStandardCourseBody(content) {
  const subsections = extractSubsections(content);
  const units = [];
  const labs = [];

  if (subsections.length === 0) {
    const { intro, blocks } = splitIntroAndBlocks(content);
    if (intro) {
      units.push({ title: 'Overview', content: intro });
    }
    for (const block of blocks) {
      const normalizedBlock = normalizeBlockTitle(block.rawTitle, block.rawContent);
      if (/^lab\b/i.test(normalizedBlock.title)) {
        labs.push(`${normalizedBlock.title}: ${normalizedBlock.content}`);
      } else {
        units.push(normalizedBlock);
      }
    }
    return { units, labs };
  }

  for (const subsection of subsections) {
    const subsectionTitle = subsection.title;
    const { intro, blocks } = splitIntroAndBlocks(subsection.content);
    const isPracticalSection = /laboratory|practical/i.test(subsectionTitle);

    if (intro && !isPracticalSection) {
      units.push({ title: subsectionTitle, content: intro });
    }

    for (const block of blocks) {
      const normalizedBlock = normalizeBlockTitle(block.rawTitle, block.rawContent);
      if (isPracticalSection || /^lab\b/i.test(normalizedBlock.title)) {
        labs.push(`${normalizedBlock.title}: ${normalizedBlock.content}`);
      } else {
        units.push(normalizedBlock);
      }
    }

    if (intro && isPracticalSection) {
      labs.push(`${subsectionTitle}: ${intro}`);
    }
  }

  return { units, labs };
}

function parseInnovationTrackBody(content) {
  const trackSections = extractTrackSections(content);
  const units = [];
  const labs = [];

  for (const trackSection of trackSections) {
    const prefix = trackSection.title;
    const { intro, blocks } = splitIntroAndBlocks(trackSection.content);

    if (intro) {
      units.push({ title: `${prefix} · Overview`, content: intro });
    }

    for (const block of blocks) {
      const normalizedBlock = normalizeBlockTitle(block.rawTitle, block.rawContent, prefix);
      if (/^lab\b/i.test(normalizedBlock.title)) {
        labs.push(`${normalizedBlock.title}: ${normalizedBlock.content}`);
      } else {
        units.push(normalizedBlock);
      }
    }
  }

  return { units, labs };
}

function parseCourseFile(absolutePath, content) {
  const metadata = extractMetadata(content);
  if (!metadata) {
    return null;
  }

  const fileCode = path.basename(absolutePath, '.tex').toUpperCase();
  const canonicalCode = isConcreteFileCode(fileCode)
    ? fileCode
    : metadata.runningHeaderCode || metadata.code;
  const canonicalTitle = metadata.code === canonicalCode
    ? metadata.title
    : metadata.runningHeaderCode === canonicalCode && metadata.runningHeaderTitle
      ? metadata.runningHeaderTitle
      : metadata.title;

  const body = extractContentAfterCredits(content);
  const semesterInfo = inferSemesterInfo(absolutePath);
  const trackMappings = inferTrackMappings(absolutePath, canonicalCode);
  const courseType = inferCourseType(absolutePath, canonicalCode, canonicalTitle);
  const parsedBody = /\\section\*\{Track [A-Z]:/g.test(body)
    ? parseInnovationTrackBody(body)
    : parseStandardCourseBody(body);

  const course = {
    id: slugify(canonicalCode),
    code: canonicalCode,
    title: canonicalTitle,
    semester: semesterInfo.semester,
    availabilitySemesters: semesterInfo.availabilitySemesters,
    credits: metadata.credits,
    type: courseType,
    description: buildDescription(parsedBody.units, parsedBody.labs, canonicalTitle),
    units: parsedBody.units,
    labs: parsedBody.labs,
    skills: [],
    majorTracks: trackMappings.majorTracks,
    minorTracks: trackMappings.minorTracks,
    sourcePath: path.relative(rootDir, absolutePath).replace(/\\/g, '/'),
  };

  return {
    ...course,
    skills: extractSkills(course),
  };
}

function parseSemesterTables(schemeContent, coursesByCode) {
  const semesterMatches = [...schemeContent.matchAll(/\\section\*\{Semester (\d+)\}([\s\S]*?)\\end\{longtable\}/g)];

  return semesterMatches.map((match) => {
    const semester = Number(match[1]);
    const block = match[2];
    const lines = block
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
    const itemLines = lines.filter((line) => /^\d+\s*&/.test(line));
    const totalLine = lines.find((line) => /\\textbf\{Total\}/.test(line));

    const items = itemLines.map((line) => {
      const normalizedLine = line.replace(/\\&/g, '__LATEX_AMP__');
      const cells = normalizedLine
        .split('&')
        .map((cell) => cleanLatex(cell.replace(/__LATEX_AMP__/g, '\\&').replace(/\\\\$/, '')));

      const code = (cells[1] || '').toUpperCase();
      const title = cells[2] || '';
      const credits = cells[3] || '';
      const ltp = cells[4] || '';
      const course = coursesByCode.get(code);
      const itemType = code.startsWith('MJ')
        ? 'major_requirement'
        : code.startsWith('MN')
          ? 'minor_requirement'
          : code.startsWith('OE')
            ? 'open_elective'
            : 'course';

      return {
        code,
        title,
        credits,
        ltp,
        itemType,
        courseId: course?.id || null,
        courseType: course?.type || null,
      };
    });

    const totalCells = totalLine
      ? totalLine
          .replace(/\\&/g, '__LATEX_AMP__')
          .split('&')
          .map((cell) => cleanLatex(cell.replace(/__LATEX_AMP__/g, '\\&').replace(/\\\\$/, '')))
      : [];

    return {
      semester,
      title: semesterTitles[semester] || `Semester ${semester}`,
      description: semesterDescriptions[semester] || '',
      totalCredits: totalCells[3] || '',
      items,
    };
  });
}

function buildTracks(courses) {
  return allTrackCatalog.map((track) => {
    const relatedCourses = courses.filter((course) =>
      track.id === 'software-cloud' || majorTrackCatalog.some((majorTrack) => majorTrack.id === track.id)
        ? course.majorTracks.includes(track.id)
        : course.minorTracks.includes(track.id)
    );

    const requiredCourseCodes = relatedCourses
      .filter((course) => course.type === 'Major' || course.type === 'Minor')
      .map((course) => course.code);
    const electiveCourseCodes = relatedCourses
      .filter((course) => course.type === 'Elective')
      .map((course) => course.code);

    return {
      id: track.id,
      title: track.title,
      description: track.description,
      type: majorTrackCatalog.some((majorTrack) => majorTrack.id === track.id) ? 'major' : 'minor',
      requiredCourseCodes,
      electiveCourseCodes,
    };
  });
}

function buildReport(courses, tracks, structure) {
  return {
    generatedAt: new Date().toISOString(),
    courseCount: courses.length,
    trackCount: tracks.length,
    semesterCount: structure.semesters.length,
    coursesByType: courses.reduce((accumulator, course) => {
      accumulator[course.type] = (accumulator[course.type] || 0) + 1;
      return accumulator;
    }, {}),
  };
}

async function main() {
  const args = parseArgs(process.argv);
  const schemePath = path.join(args.syllabusDir, 'scheme.tex');
  const texFiles = await collectTexFiles(args.syllabusDir);
  const courseFiles = await Promise.all(texFiles.map(async (filePath) => ({
    filePath,
    content: await fs.readFile(filePath, 'utf8'),
  })));

  const courses = courseFiles
    .map(({ filePath, content }) => parseCourseFile(filePath, content))
    .filter(Boolean)
    .sort((first, second) => {
      if (first.semester !== second.semester) {
        return first.semester - second.semester;
      }
      return first.code.localeCompare(second.code);
    });

  const coursesByCode = new Map(courses.map((course) => [course.code, course]));
  const schemeContent = await fs.readFile(schemePath, 'utf8');
  const semesters = parseSemesterTables(schemeContent, coursesByCode);
  const tracks = buildTracks(courses);
  const structure = { semesters };
  const report = buildReport(courses, tracks, structure);

  if (args.dryRun) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }

  await ensureParentDirectory(args.coursesOut);
  await ensureParentDirectory(args.tracksOut);
  await ensureParentDirectory(args.structureOut);
  await ensureParentDirectory(args.reportOut);

  await fs.writeFile(args.coursesOut, `${JSON.stringify(courses, null, 2)}\n`, 'utf8');
  await fs.writeFile(args.tracksOut, `${JSON.stringify(tracks, null, 2)}\n`, 'utf8');
  await fs.writeFile(args.structureOut, `${JSON.stringify(structure, null, 2)}\n`, 'utf8');
  await fs.writeFile(args.reportOut, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

  console.log(`Wrote ${courses.length} courses`);
  console.log(`Wrote ${tracks.length} tracks`);
  console.log(`Wrote ${semesters.length} semester plans`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
