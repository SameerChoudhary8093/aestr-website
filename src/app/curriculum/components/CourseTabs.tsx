'use client';

import React, { useState } from 'react';
import { BookOpen, Award, Clock, CheckCircle2 } from 'lucide-react';
import type { CurriculumCourse } from '@/lib/curriculum';

interface CourseTabsProps {
  course: CurriculumCourse;
}

export default function CourseTabs({ course }: CourseTabsProps) {
  const [activeTab, setActiveTab] = useState<'syllabus' | 'skills'>('syllabus');

  return (
    <div className="w-full space-y-8">
      {/* Tabs */}
      <div className="flex items-center gap-4 border-b border-white/10 pb-4">
        <button
          onClick={() => setActiveTab('syllabus')}
          className={`flex items-center gap-2 pb-4 -mb-4 border-b-2 transition-all ${
            activeTab === 'syllabus'
              ? 'border-accent text-[#E8E4F1]'
              : 'border-transparent text-white/50 hover:text-white/80'
          }`}
        >
          <BookOpen className="h-5 w-5" />
          <span className="text-xl font-orbitron font-bold">Syllabus</span>
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`flex items-center gap-2 pb-4 -mb-4 border-b-2 transition-all ${
            activeTab === 'skills'
              ? 'border-accent text-[#E8E4F1]'
              : 'border-transparent text-white/50 hover:text-white/80'
          }`}
        >
          <Award className="h-5 w-5" />
          <span className="text-xl font-orbitron font-bold">Skills</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {activeTab === 'syllabus' && (
          <div className="bg-[#D7F601] rounded-3xl p-6 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
        )}

        {activeTab === 'skills' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
          </div>
        )}
      </div>
    </div>
  );
}
