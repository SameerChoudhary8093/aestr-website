import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Layers3, Sparkles } from 'lucide-react';
import {
  getCourseByCode,
  getTrackById,
  getTrackCourses,
  tracksData,
  type CurriculumCourse,
} from '@/lib/curriculum';

export async function generateStaticParams() {
  return tracksData.map((track) => ({
    trackId: track.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ trackId: string }> }): Promise<Metadata> {
  const { trackId } = await params;
  const track = getTrackById(trackId);

  if (!track) {
    return {
      title: 'Track Not Found | Aestr Curriculum',
    };
  }

  const relatedCourses = getTrackCourses(track.id, track.type);
  const skills = relatedCourses.flatMap((course) => course.skills).slice(0, 8);

  return {
    title: `${track.title} | Aestr Curriculum`,
    description: `${track.description} Explore ${track.type} track courses, semesters, skills, and curriculum pathways at Aestr.`,
    keywords: `${track.title}, ${track.type} specialization, ${skills.join(', ')}, Aestr curriculum`,
  };
}

export default async function TrackPage({ params }: { params: Promise<{ trackId: string }> }) {
  const { trackId } = await params;
  const track = getTrackById(trackId);

  if (!track) {
    notFound();
  }

  const relatedCourses = getTrackCourses(track.id, track.type);
  const semestersCovered = Array.from(new Set(relatedCourses.flatMap((course) => course.availabilitySemesters.length > 0 ? course.availabilitySemesters : [course.semester]))).sort((a, b) => a - b);
  const aggregatedSkills = Array.from(new Set(relatedCourses.flatMap((course) => course.skills))).slice(0, 16);
  const requiredCourses = track.requiredCourseCodes
    .map((courseCode: string) => getCourseByCode(courseCode))
    .filter(Boolean) as CurriculumCourse[];
  const electiveCourses = track.electiveCourseCodes
    .map((courseCode: string) => getCourseByCode(courseCode))
    .filter(Boolean) as CurriculumCourse[];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: track.title,
    description: track.description,
    educationalProgramMode: 'Full-time',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Aestr',
      sameAs: 'https://aestr.com',
    },
    hasCourse: relatedCourses.map((course) => ({
      '@type': 'Course',
      name: course.title,
      courseCode: course.code,
      description: course.description,
    })),
  };

  const sections = [
    {
      key: 'required',
      title: track.type === 'major' ? 'Required specialization courses' : 'Minor pathway courses',
      description: track.type === 'major'
        ? 'These are the required courses that define the major specialization journey.'
        : 'These courses define the exploratory and advanced progression for this minor domain.',
      courses: requiredCourses,
    },
    {
      key: 'electives',
      title: 'Advanced elective pool',
      description: 'These electives are available within the same major specialization pathway.',
      courses: electiveCourses,
    },
  ].filter((section) => section.courses.length > 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-background text-foreground pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-16 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/8 blur-[120px] pointer-events-none" />

        <div className="container-boxed relative z-10">
          <Link
            href="/curriculum"
            className="mb-10 inline-flex items-center gap-2 text-sm font-orbitron uppercase tracking-[0.18em] text-foreground/55 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Curriculum
          </Link>

          <div className="glass mb-10 p-8 md:p-10">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-orbitron uppercase tracking-[0.18em] text-accent">
                {track.type} track
              </span>
              <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-orbitron uppercase tracking-[0.18em] text-foreground/60">
                {relatedCourses.length} mapped courses
              </span>
              <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-orbitron uppercase tracking-[0.18em] text-foreground/60">
                {semestersCovered.length > 0 ? `Semesters ${semestersCovered.join(', ')}` : 'More mapping coming soon'}
              </span>
            </div>

            <h1 className="text-hero max-w-4xl leading-[1.08] text-foreground">
              {track.title}
            </h1>

            <p className="mt-5 max-w-4xl text-body text-foreground/75">
              {track.description}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.55fr_0.95fr]">
            <section>
              <div className="mb-6 flex items-center gap-3">
                <Layers3 className="h-5 w-5 text-accent" />
                <h2 className="text-h3 text-foreground">Track structure</h2>
              </div>

              <div className="space-y-8">
                {sections.map((section) => (
                  <div key={section.key} className="space-y-4">
                    <div>
                      <h3 className="text-xl font-orbitron font-bold text-foreground">{section.title}</h3>
                      <p className="mt-2 text-sm text-foreground/65">{section.description}</p>
                    </div>

                    <div className="space-y-4">
                      {section.courses.map((course) => (
                        <Link
                          key={course.id}
                          href={`/curriculum/courses/${course.id}`}
                          className="glass group block p-6 transition-all duration-300 hover:border-accent/25 hover:bg-white/[0.05]"
                        >
                          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                            <div className="flex-1">
                              <div className="mb-3 flex flex-wrap items-center gap-3">
                                <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-orbitron uppercase tracking-[0.16em] text-accent">
                                  {course.code}
                                </span>
                                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-orbitron uppercase tracking-[0.16em] text-foreground/60">
                                  {course.availabilitySemesters.length > 1
                                    ? `Semesters ${course.availabilitySemesters.join(', ')}`
                                    : `Semester ${course.semester}`}
                                </span>
                                <span className="text-sm text-foreground/50">{course.credits}</span>
                              </div>

                              <h4 className="text-xl font-orbitron font-bold text-foreground transition-colors group-hover:text-accent">
                                {course.title}
                              </h4>

                              <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                                {course.description}
                              </p>

                              <div className="mt-4 flex flex-wrap gap-2">
                                {course.skills.slice(0, 5).map((skill) => (
                                  <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/60">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="inline-flex items-center gap-2 text-sm font-orbitron uppercase tracking-[0.14em] text-accent">
                              View course
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <aside className="space-y-6">
              <div className="glass p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-orbitron font-bold text-foreground">Pathway summary</h2>
                </div>
                <p className="text-sm leading-relaxed text-foreground/65">
                  This page brings the track into one place: required courses, advanced electives, and the most repeated skills from the LaTeX-imported syllabus.
                </p>
              </div>

              <div className="glass p-6">
                <h2 className="mb-4 text-xl font-orbitron font-bold text-foreground">Top skills</h2>
                <div className="flex flex-wrap gap-2">
                  {aggregatedSkills.length > 0 ? (
                    aggregatedSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs text-accent"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <p className="text-sm text-foreground/55">Skills will populate automatically as more track courses are added.</p>
                  )}
                </div>
              </div>

              {sections.length === 0 && (
                <div className="glass p-6">
                  <p className="text-sm leading-relaxed text-foreground/60">
                    This track has no linked course pages yet, but the pathway definition is already in place and will populate automatically from the LaTeX curriculum source.
                  </p>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
