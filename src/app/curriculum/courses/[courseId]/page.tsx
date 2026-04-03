import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { coursesData, getCourseById, type CurriculumCourse } from '@/lib/curriculum';
import CourseTabs from '../../components/CourseTabs';

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

          <div className="mt-8">
            <CourseTabs course={course} />
          </div>
        </div>
      </div>
    </>
  );
}
