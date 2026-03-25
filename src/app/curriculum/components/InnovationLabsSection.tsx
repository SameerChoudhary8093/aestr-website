'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { getInnovationLabs } from '@/lib/curriculum';

const labs = getInnovationLabs();

export default function InnovationLabsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="mb-12 space-y-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-orbitron uppercase tracking-[0.18em] text-accent">
          <Zap className="h-4 w-4" />
          Innovation labs
        </div>
        <h2 className="text-h2 text-foreground">
          Build from <span className="text-accent italic">day one</span>
        </h2>
        <p className="mx-auto max-w-3xl text-body text-foreground/70">
          These studio-style labs are a defining part of the curriculum. Each one blends guided tasks, build-heavy execution, and modern engineering tools from the official syllabus.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {labs.map((lab) => (
          <div key={lab.id} className="glass flex h-full flex-col p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-orbitron uppercase tracking-[0.16em] text-accent">
                Semester {lab.semester}
              </span>
              <span className="text-sm font-orbitron text-foreground/50">{lab.code}</span>
            </div>

            <h3 className="text-xl font-orbitron font-bold text-foreground">{lab.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/65">{lab.description}</p>

            <div className="mt-6 space-y-3">
              <p className="text-xs font-orbitron uppercase tracking-[0.18em] text-foreground/45">Sample modules</p>
              <div className="space-y-2">
                {lab.units.slice(0, 3).map((unit) => (
                  <div key={unit.title} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-foreground/70">
                    {unit.title}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {lab.skills.slice(0, 5).map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/60">
                  {skill}
                </span>
              ))}
            </div>

            <Link
              href={`/curriculum/courses/${lab.id}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-orbitron uppercase tracking-[0.14em] text-accent"
            >
              Open lab page <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
