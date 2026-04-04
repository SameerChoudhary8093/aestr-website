'use client';

import React, { useState } from 'react';
import { BookOpen, Award, Clock, CheckCircle2, Layout, Smartphone } from 'lucide-react';
import type { CurriculumCourse } from '@/lib/curriculum';

interface CourseTabsProps {
  course: CurriculumCourse;
}

export default function CourseTabs({ course }: CourseTabsProps) {
  const [activeTab, setActiveTab] = useState<'syllabus' | 'practicals'>('syllabus');
  
  const isInnovationLab = course.type === 'Innovation Lab';
  
  // Custom labels for Innovation Labs
  const tab1Label = isInnovationLab ? 'Web' : 'Syllabus';
  const tab2Label = isInnovationLab ? 'App' : 'Practicals';
  
  // Icons
  const Tab1Icon = isInnovationLab ? Layout : BookOpen;
  const Tab2Icon = isInnovationLab ? Smartphone : CheckCircle2;

  // Data splitting for Innovation Labs
  const webUnits = isInnovationLab ? course.units.slice(0, 10) : course.units;
  const appUnits = isInnovationLab ? course.units.slice(10, 20) : [];

  return (
    <div className="flex flex-col lg:flex-row gap-10 items-start">
      {/* Left Column: Main Content (Tabs) */}
      <div className="flex-1 w-full lg:max-w-[calc(100%-380px)] space-y-8">
        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`flex items-center gap-2 pb-4 -mb-4 border-b-2 transition-all ${activeTab === 'syllabus'
              ? 'border-accent text-white'
              : 'border-transparent text-white/50 hover:text-white/80'
              }`}
          >
            <Tab1Icon className="h-5 w-5" />
            <span className="text-xl font-orbitron font-bold">{tab1Label}</span>
          </button>

          <button
            onClick={() => setActiveTab('practicals')}
            className={`flex items-center gap-2 pb-4 -mb-4 border-b-2 transition-all ${activeTab === 'practicals'
              ? 'border-accent text-white'
              : 'border-transparent text-white/50 hover:text-white/80'
              }`}
          >
            <Tab2Icon className="h-5 w-5" />
            <span className="text-xl font-orbitron font-bold">{tab2Label}</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-8 transition-all duration-300">
          {activeTab === 'syllabus' && (
            <div className="bg-[#D7F601] rounded-3xl p-6 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {webUnits.length > 0 ? (
                webUnits.map((unit, index) => (
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
                  {isInnovationLab ? "No Web track modules defined." : "This course does not define theory units separately in the imported syllabus."}
                </div>
              )}
            </div>
          )}

          {activeTab === 'practicals' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {isInnovationLab ? (
                <div className="bg-[#D7F601] rounded-3xl p-6 space-y-4">
                  {appUnits.length > 0 ? (
                    appUnits.map((unit, index) => (
                      <div key={unit.title} className="bg-black/90 backdrop-blur p-6 rounded-xl border border-white/20">
                        <div className="mb-3 flex items-start gap-3">
                          <span className="text-sm font-orbitron text-white">{String(index + 11).padStart(2, '0')}</span>
                          <h3 className="text-lg font-orbitron font-bold text-white">{unit.title}</h3>
                        </div>
                        <p className="pl-8 text-sm leading-relaxed text-white/80">
                          {unit.content}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="bg-black/90 backdrop-blur p-6 rounded-xl border border-white/20 text-sm leading-relaxed text-white/80">
                      No App track modules defined.
                    </div>
                  )}
                </div>
              ) : (
                <>
                  {course.labs.length > 0 ? (
                    <div className="bg-[#D7F601] rounded-[2.5rem] p-4 sm:p-6 lg:p-8 space-y-4">
                      {course.labs.map((lab, index) => (
                        <div key={lab} className="bg-black p-6 rounded-2xl border border-white/10 shadow-xl group transition-all hover:border-accent/30">
                          <div className="flex gap-4">
                            <span className="text-accent font-orbitron text-sm font-bold opacity-50">{String(index + 1).padStart(2, '0')}</span>
                            <p className="text-white/90 text-sm leading-relaxed font-medium">
                              {lab}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-[#181818] rounded-3xl p-8 border border-white/10 text-center">
                      <p className="text-white/40 font-orbitron text-sm uppercase tracking-widest">No Practical labs defined for this course</p>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Right Column: Sidebar (Skills & Structure) */}
      <div className="w-full lg:w-[340px] space-y-6 lg:pt-11 pt-8">
        {/* Top Skills */}
        <div className="bg-[#111111]/80 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
          <div className="mb-6 flex items-center gap-3">
            <Award className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-orbitron font-bold text-white tracking-tight">Top skills</h2>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {course.skills.map((skill) => (
              <span key={skill} className="rounded-lg border border-accent/20 bg-accent/5 px-2 py-1.5 text-[9px] font-orbitron font-medium uppercase tracking-wider text-accent text-center flex items-center justify-center min-h-[32px]">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Pathway Summary / Structure */}
        <div className="bg-[#111111]/80 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
          <div className="mb-6 flex items-center gap-3">
            <Clock className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-orbitron font-bold text-white tracking-tight">Structure</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-white/50 text-xs font-orbitron uppercase tracking-widest">Semester</span>
              <span className="text-white font-bold">{course.semester}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-white/50 text-xs font-orbitron uppercase tracking-widest">Credits</span>
              <span className="text-white font-bold">{course.credits}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-white/50 text-xs font-orbitron uppercase tracking-widest">Category</span>
              <span className="text-white font-bold">{course.type}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
