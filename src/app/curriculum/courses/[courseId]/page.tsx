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

      <div className="min-h-screen bg-background text-foreground pt-48 pb-24 relative overflow-hidden">
        <div className="absolute top-16 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/8 blur-[120px] pointer-events-none" />

        <div className="container-boxed relative z-10 max-w-6xl">
          <Link 
            href="/curriculum" 
            className="mb-10 inline-flex items-center gap-2 text-sm font-orbitron uppercase tracking-[0.18em] text-foreground/55 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Full Curriculum
          </Link>

          <div className="bg-[#5B1DD6] rounded-3xl p-8 md:p-10">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              {metaPills.map((pill) => (
                <span key={pill} className="rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-orbitron uppercase tracking-[0.18em] text-white">
                  {pill}
                </span>
              ))}
            </div>

            <h1 className="text-hero max-w-4xl leading-[1.08] text-white">
              {course.title}
            </h1>
            
            <p className="mt-5 max-w-4xl text-body text-white/90">
              {course.description}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.95fr]">
            <section className="space-y-6 mt-8">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-black" />
                <h2 className="text-h3 text-black font-bold">Syllabus</h2>
              </div>

              <div className="bg-[#D7F601] rounded-3xl p-6 space-y-4">
                {course.units.length > 0 ? (
                  course.units.map((unit, index) => (
                    <div key={unit.title} className="bg-black/90 backdrop-blur p-6 rounded-xl border border-white/20">
                      <div className="mb-3 flex items-start gap-3">
                        <span className="text-sm font-orbitron text-white">{String(index + 1).padStart(2, '0')}</span>
                        <h3 className="text-lg font-orbitron font-bold text-white">{unit.title}</h3>
                      </div>
                      <p className="pl-8 text-sm leading-relaxed text-white/80">
                        {unit.content}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="bg-black/90 backdrop-blur p-6 rounded-xl border border-white/20 text-sm leading-relaxed text-white/80">
                    This course does not define theory units separately in the imported syllabus.
                  </div>
                )}
              </div>
            </section>

            <aside className="space-y-6 mt-12">
              <div className="bg-[#D7F601] rounded-3xl p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Award className="h-5 w-5 text-black" />
                  <h2 className="text-xl font-orbitron font-bold text-black">Skills</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-black/30 bg-black/20 px-3 py-1 text-xs text-black">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#D7F601] rounded-3xl p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Clock className="h-5 w-5 text-black" />
                  <h2 className="text-xl font-orbitron font-bold text-black">Structure</h2>
                </div>
                <div className="space-y-3 text-sm text-black/80">
                  <p>Semester: {course.semester}</p>
                  <p>Credits: {course.credits}</p>
                  <p>Category: {course.type}</p>
                </div>
              </div>

              {course.labs.length > 0 && (
                <div className="bg-[#D7F601] rounded-3xl p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black" />
                    <h2 className="text-xl font-orbitron font-bold text-black">Practicals</h2>
                  </div>
                  <ul className="space-y-3">
                    {course.labs.map((lab) => (
                      <li key={lab} className="bg-black/90 backdrop-blur rounded-xl border border-white/20 px-4 py-3 text-sm leading-relaxed text-white/80">
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
