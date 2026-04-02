import React from 'react';
import type { Metadata } from 'next';
import TracksSection from './components/TracksSection';
import InnovationLabsSection from './components/InnovationLabsSection';
import SemestersSection from './components/SemestersSection';
import ExpandableSearch from '@/components/ui/ExpandableSearch';
import { Download, BookOpen, Layers3, GraduationCap } from 'lucide-react';
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
    title: 'Intensive Semesters',
    value: `${curriculumStructure.semesters.length}`,
    description: 'A carefully sequenced progression from foundational computing to advanced engineering systems.',
    icon: BookOpen,
  },
  {
    title: 'Specialization Pathways',
    value: `${tracksData.length}`,
    description: 'Choose 1 Major and up to 4 Minors to build a highly specialized, cross-disciplinary degree.',
    icon: Layers3,
  },
  {
    title: 'Deep-Tech Courses',
    value: `${coursesData.length}+`,
    description: 'Covering everything from Quantum Mechanics to LLMs, Web3, and Autonomous Robotics.',
    icon: GraduationCap,
  },
];

export default function CurriculumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(curriculumSchema) }}
      />
      
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="/Curriculum.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-aestr shadow-[0_16px_40px_rgba(215,246,1,0.22)]"
        >
          <Download className="w-5 h-5" />
          <span>Download PDF</span>
        </a>
      </div>

      <div className="min-h-screen bg-background text-foreground pt-48 pb-16 overflow-hidden">
        <div className="container-boxed relative">
          <div className="absolute top-10 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/8 blur-[120px] pointer-events-none" />

          <div className="relative z-10 space-y-10">
            <div className="bg-[#5B1DD6] rounded-3xl p-8 md:p-12 space-y-10">
              <ExpandableSearch />
              
              <section className="grid gap-8 lg:grid-cols-[1.25fr_0.95fr] lg:items-end">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-orbitron uppercase tracking-[0.2em] text-accent">
                  Official curriculum system
                </div>
                <h1 className="text-hero max-w-4xl text-foreground">
                  The <span className="text-accent italic">Curriculum</span>
                </h1>
                <p className="text-body max-w-3xl text-foreground/75">
                  A radical departure from traditional engineering. Our curriculum is a living ecosystem of deep-tech courses, hands-on innovation labs, and customizable tracks. Explore the 8-semester roadmap and build a degree as unique as your ambitions.
                </p>
              </div>

              <div className="glass p-6 md:p-8 space-y-4">
                <p className="font-orbitron text-sm uppercase tracking-[0.18em] text-accent">Degree Architecture</p>
                <div className="space-y-3 text-sm text-foreground/75">
                  <p><span className="font-bold text-accent">Progressive Mastery:</span> Start with foundations, scale to advanced systems through a carefully sequenced 8-semester progression.</p>
                  <p><span className="font-bold text-accent">Unprecedented Customization:</span> Choose 1 Major + up to 4 Minors to build a highly specialized, cross-disciplinary degree.</p>
                  <p><span className="font-bold text-accent">Build from Day One:</span> Innovation Labs begin in Semester 1, with real-world projects and studio-style execution.</p>
                </div>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
              {overviewCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="glass p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="font-orbitron text-xs uppercase tracking-[0.18em] text-foreground/55">{card.title}</p>
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <p className="text-4xl font-orbitron font-bold text-foreground">{card.value}</p>
                    <p className="text-sm leading-relaxed text-foreground/65">{card.description}</p>
                  </div>
                );
              })}
            </section>
            </div>

            <TracksSection />
          
            <InnovationLabsSection />
          
            <SemestersSection />
          </div>
        </div>
      </div>
    </>
  );
}
