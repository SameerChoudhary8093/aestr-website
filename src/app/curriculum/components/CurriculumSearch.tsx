'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { coursesData, type CurriculumCourse } from '@/lib/curriculum';

export default function CurriculumSearch() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return coursesData.filter((course: CurriculumCourse) => {
      return (
        course.title.toLowerCase().includes(query) ||
        course.code.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.skills.some((skill: string) => skill.toLowerCase().includes(query))
      );
    }).slice(0, 12);
  }, [searchQuery]);

  return (
    <div className="relative z-20 mx-auto mb-20 w-full max-w-5xl">
      <div className="glass p-2 md:p-3">
        <div className="flex items-center gap-3 rounded-[1.2rem] border border-white/8 bg-black/10 px-3 py-2">
          <div className="rounded-full bg-white/5 p-3">
            <Search className="h-5 w-5 text-accent" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by course name, code, skill, or concept..."
            className="flex-1 bg-transparent py-3 pr-2 text-base text-foreground outline-none placeholder:text-foreground/35 md:text-lg"
          />
        </div>
      </div>

      {searchQuery.trim() && (
        <div className="absolute mt-4 max-h-[65vh] w-full overflow-y-auto rounded-[1.5rem] border border-white/10 bg-background-alt/95 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          {filteredCourses.length > 0 ? (
            <div className="p-3">
              <div className="border-b border-white/8 px-4 py-3 text-xs font-orbitron uppercase tracking-[0.18em] text-foreground/45">
                Found {filteredCourses.length} matching courses
              </div>
              <div className="space-y-2 pt-2">
                {filteredCourses.map((course: CurriculumCourse) => (
                  <Link 
                    href={`/curriculum/courses/${course.id}`} 
                    key={course.id}
                    className="group block rounded-2xl border border-transparent px-4 py-4 transition-all hover:border-accent/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-orbitron uppercase tracking-[0.16em] text-accent">
                            {course.type}
                          </span>
                          <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-orbitron uppercase tracking-[0.16em] text-foreground/65">
                            Semester {course.semester}
                          </span>
                          <span className="text-sm font-orbitron text-foreground/55">
                            {course.code}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-orbitron font-bold text-foreground transition-colors group-hover:text-accent">
                            {course.title}
                          </h4>
                          <p className="mt-2 text-sm text-foreground/65">
                            {course.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {course.skills.slice(0, 4).map((skill: string) => (
                            <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/60">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 self-start text-sm font-orbitron uppercase tracking-[0.14em] text-accent">
                        View course
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-10 text-center text-foreground/60">
              <Search className="mx-auto mb-4 h-10 w-10 text-foreground/25" />
              <p className="text-lg font-orbitron font-bold text-foreground">No courses found</p>
              <p className="mt-2 text-sm">Try a different course code, title, or keyword.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
