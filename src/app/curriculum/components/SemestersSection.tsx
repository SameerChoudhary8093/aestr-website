'use client';

import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { curriculumStructure } from '@/lib/curriculum';

function getItemPillClasses(itemType: string, courseType: string | null) {
  if (itemType === 'major_requirement') {
    return 'border-accent/20 bg-accent/10 text-accent';
  }

  if (itemType === 'minor_requirement') {
    return 'border-purple/30 bg-purple/10 text-white';
  }

  if (itemType === 'open_elective') {
    return 'border-white/10 bg-white/5 text-foreground/70';
  }

  if (courseType === 'Lab' || courseType === 'Innovation Lab') {
    return 'border-blue-400/20 bg-blue-400/10 text-blue-200';
  }

  if (courseType === 'Elective') {
    return 'border-purple/30 bg-purple/10 text-white';
  }

  if (courseType === 'Major' || courseType === 'Minor') {
    return 'border-accent/20 bg-accent/10 text-accent';
  }

  return 'border-white/10 bg-white/5 text-foreground/70';
}

export default function SemestersSection() {
  return (
    <section className="py-20" id="semesters">
      <div className="mb-12 space-y-4 text-center">
        <h2 className="text-h2 text-foreground">
          Semester <span className="text-accent italic">scheme</span>
        </h2>
        <p className="mx-auto max-w-3xl text-body text-foreground/70">
          Every row below comes from the official semester scheme. Expand a semester to see course pages, labs, major requirements, minor requirements, and elective placeholders in one readable view.
        </p>
      </div>

      <div className="mx-auto max-w-6xl">
        <Accordion.Root type="single" collapsible className="space-y-4">
          {curriculumStructure.semesters.map((sem) => (
            <Accordion.Item
              key={sem.semester}
              value={`item-${sem.semester}`}
              className="glass overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-white/[0.03]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/20 bg-accent/10 font-orbitron text-sm text-accent">
                      {sem.semester}
                    </div>
                    <div>
                      <div className="font-orbitron text-xl font-bold text-foreground">{sem.title}</div>
                      <div className="mt-1 text-sm text-foreground/60">{sem.description}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden text-right md:block">
                      <div className="text-xs font-orbitron uppercase tracking-[0.18em] text-foreground/45">Total credits</div>
                      <div className="mt-1 text-lg font-orbitron text-foreground">{sem.totalCredits}</div>
                    </div>
                    <ChevronDown className="h-5 w-5 text-foreground/45 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                <div className="border-t border-white/8 p-6 pt-0">
                  <div className="overflow-x-auto">
                    <table className="min-w-[760px] w-full border-collapse text-left">
                      <thead>
                        <tr className="border-b border-white/8 text-xs font-orbitron uppercase tracking-[0.16em] text-foreground/45">
                          <th className="py-4 px-4">Code</th>
                          <th className="py-4 px-4">Title</th>
                          <th className="py-4 px-4">Category</th>
                          <th className="py-4 px-4 text-center">Credits</th>
                          <th className="py-4 px-4 text-center">L-T-P</th>
                          <th className="py-4 px-4 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sem.items.map((item) => (
                          <tr 
                            key={`${sem.semester}-${item.code}`} 
                            className="group border-b border-white/6 transition-colors hover:bg-white/[0.03]"
                          >
                            <td className="px-4 py-4 font-orbitron text-sm text-accent">{item.code}</td>
                            <td className="px-4 py-4 text-sm font-semibold text-foreground">
                              {item.courseId ? (
                                <Link href={`/curriculum/courses/${item.courseId}`} className="transition-colors hover:text-accent">
                                  {item.title}
                                </Link>
                              ) : (
                                <span>{item.title}</span>
                              )}
                            </td>
                            <td className="px-4 py-4">
                              <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-orbitron uppercase tracking-[0.14em] ${
                                getItemPillClasses(item.itemType, item.courseType)
                              }`}>
                                {item.courseType || item.itemType.replace(/_/g, ' ')}
                              </span>
                            </td>
                            <td className="px-4 py-4 text-center text-sm text-foreground/70">{item.credits}</td>
                            <td className="px-4 py-4 text-center text-sm text-foreground/55">{item.ltp}</td>
                            <td className="px-4 py-4 text-right">
                              {item.courseId ? (
                                <Link 
                                  href={`/curriculum/courses/${item.courseId}`}
                                  className="inline-flex items-center gap-2 text-sm font-orbitron uppercase tracking-[0.14em] text-accent"
                                >
                                  View <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                              ) : (
                                <span className="text-sm text-foreground/45">Scheme item</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
