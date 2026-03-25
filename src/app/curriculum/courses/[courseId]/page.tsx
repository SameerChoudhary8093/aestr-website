import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, CheckCircle2, Award } from 'lucide-react';
import { coursesData, getCourseById, type CurriculumCourse } from '@/lib/curriculum';

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    courseId: course.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ courseId: string }> }): Promise<Metadata> {
  const { courseId } = await params;
  const course = getCourseById(courseId);
  
  if (!course) {
    return {
      title: 'Course Not Found | Aestr Curriculum'
    };
  }

  return {
    title: `${course.title} (${course.code}) | Aestr Curriculum`,
    description: course.description,
    keywords: `${course.title}, ${course.skills.join(', ')}, B.Tech, Aestr`,
  };
}

export default async function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = getCourseById(courseId) as CurriculumCourse;

  if (!course) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    courseCode: course.code,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Aestr',
      sameAs: 'https://aestr.com'
    },
    educationalCredentialAwarded: "B.Tech Degree Component",
    teaches: course.skills.map(skill => ({
      "@type": "DefinedTerm",
      "name": skill
    }))
  };

  const metaPills = [
    `${course.code}`,
    `Semester ${course.semester}`,
    `${course.credits}`,
    course.type,
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-background text-foreground pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-16 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/8 blur-[120px] pointer-events-none" />

        <div className="container-boxed relative z-10 max-w-6xl">
          <Link 
            href="/curriculum" 
            className="mb-10 inline-flex items-center gap-2 text-sm font-orbitron uppercase tracking-[0.18em] text-foreground/55 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Full Curriculum
          </Link>

          <div className="glass mb-10 p-8 md:p-10">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              {metaPills.map((pill) => (
                <span key={pill} className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-orbitron uppercase tracking-[0.16em] text-foreground/65">
                  {pill}
                </span>
              ))}
            </div>

            <h1 className="text-hero max-w-4xl leading-[1.08] text-foreground">
              {course.title}
            </h1>
            
            <p className="mt-5 max-w-4xl text-body text-foreground/75">
              {course.description}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.95fr]">
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-accent" />
                <h2 className="text-h3 text-foreground">Syllabus</h2>
              </div>

              <div className="space-y-4">
                {course.units.length > 0 ? (
                  course.units.map((unit, index) => (
                    <div key={unit.title} className="glass p-6">
                      <div className="mb-3 flex items-start gap-3">
                        <span className="text-sm font-orbitron text-accent">{String(index + 1).padStart(2, '0')}</span>
                        <h3 className="text-lg font-orbitron font-bold text-foreground">{unit.title}</h3>
                      </div>
                      <p className="pl-8 text-sm leading-relaxed text-foreground/68">
                        {unit.content}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="glass p-6 text-sm leading-relaxed text-foreground/60">
                    This course does not define theory units separately in the imported syllabus.
                  </div>
                )}
              </div>
            </section>

            <aside className="space-y-6">
              <div className="glass p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Award className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-orbitron font-bold text-foreground">Skills</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs text-accent">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-orbitron font-bold text-foreground">Structure</h2>
                </div>
                <div className="space-y-3 text-sm text-foreground/65">
                  <p>Semester: {course.semester}</p>
                  <p>Credits: {course.credits}</p>
                  <p>Category: {course.type}</p>
                </div>
              </div>

              {course.labs.length > 0 && (
                <div className="glass p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <h2 className="text-xl font-orbitron font-bold text-foreground">Practicals</h2>
                  </div>
                  <ul className="space-y-3">
                    {course.labs.map((lab) => (
                      <li key={lab} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-foreground/68">
                        {lab}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
