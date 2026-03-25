import React from 'react';
import type { Metadata } from 'next';
import TracksSection from './components/TracksSection';
import InnovationLabsSection from './components/InnovationLabsSection';
import SemestersSection from './components/SemestersSection';
import CurriculumSearch from './components/CurriculumSearch';
import { Download, BookOpen, Layers3, Search, ArrowRight } from 'lucide-react';
import { coursesData, curriculumStructure, tracksData } from '@/lib/curriculum';

export const metadata: Metadata = {
  title: 'B.Tech Curriculum | Aestr',
  description: 'Explore the official Aestr curriculum with all semesters, course pages, innovation labs, majors, minors, and track pathways generated from the LaTeX syllabus source.',
  keywords: 'Aestr curriculum, B.Tech curriculum, semesters, majors, minors, innovation labs, course pages',
};

const curriculumSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  "name": "B.Tech in Computer Science and Engineering",
  "description": "A structured engineering curriculum with eight semesters, innovation labs, major specializations, minor tracks, advanced electives, and project-based learning.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Aestr",
    "sameAs": "https://aestr.com"
  },
  "numberOfCredits": curriculumStructure.semesters.reduce((sum, semester) => sum + Number(semester.totalCredits || 0), 0),
  "hasCourse": coursesData.slice(0, 24).map((course) => ({
    "@type": "Course",
    "name": course.title,
    "courseCode": course.code,
    "description": course.description
  }))
};

const overviewCards = [
  {
    title: 'Full semester map',
    value: `${curriculumStructure.semesters.length}`,
    description: 'Eight structured semesters with the official scheme, credits, and progression.',
    icon: BookOpen,
  },
  {
    title: 'Track architecture',
    value: `${tracksData.length}`,
    description: 'Major and minor pathways derived from the syllabus and linked to course detail pages.',
    icon: Layers3,
  },
  {
    title: 'Course index',
    value: `${coursesData.length}`,
    description: 'Theory courses, labs, innovation labs, electives, minors, seminar, and project pages.',
    icon: Search,
  },
];

export default function CurriculumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(curriculumSchema) }}
      />

      <div className="min-h-screen bg-background text-foreground pt-32 pb-16 overflow-hidden">
        <div className="container-boxed relative">
          <div className="absolute top-10 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/8 blur-[120px] pointer-events-none" />
          <div className="absolute top-20 right-0 h-[320px] w-[320px] rounded-full bg-purple/12 blur-[120px] pointer-events-none" />

          <div className="relative z-10 space-y-10">
            <section className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-accent">
                  Official curriculum system
                </div>
                <h1 className="text-hero max-w-4xl text-foreground">
                  The <span className="text-accent italic">Curriculum</span>
                </h1>
                <p className="text-body max-w-3xl text-foreground/75">
                  This hub now reads from the official LaTeX syllabus source. Browse the semester plan, search the full course index, open every course page, and explore major and minor pathways through a simpler, readable interface.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="/Curriculum_2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-5 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/15"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download full PDF</span>
                  </a>
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple/25 bg-purple/10 px-5 py-3 text-sm font-medium text-foreground/80">
                    <span className="h-2 w-2 rounded-full bg-purple" />
                    LaTeX-synced dataset
                  </div>
                </div>
              </div>

              <div className="glass p-6 md:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-purple">How to use this hub</p>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/72">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <p>Use search to jump to any course, code, or concept.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple" />
                    <p>Open a semester to see the official scheme, credits, labs, major requirements, minor requirements, and electives.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <p>Use track pages to understand required major courses, advanced electives, and minor progression.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
              {overviewCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="glass p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/55">{card.title}</p>
                      <Icon className={`h-5 w-5 ${card.title === 'Track architecture' ? 'text-purple' : 'text-accent'}`} />
                    </div>
                    <div className="flex items-end justify-between gap-3">
                      <p className="text-4xl font-semibold text-foreground">{card.value}</p>
                      <ArrowRight className={`h-4 w-4 ${card.title === 'Track architecture' ? 'text-purple/70' : 'text-accent/70'}`} />
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/65">{card.description}</p>
                  </div>
                );
              })}
            </section>

            <CurriculumSearch />

            <TracksSection />
          
            <InnovationLabsSection />
          
            <SemestersSection />
          </div>
        </div>
      </div>
    </>
  );
}
