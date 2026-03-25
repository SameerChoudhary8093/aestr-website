'use client';

import React from 'react';
import { ArrowRight, Layers3 } from 'lucide-react';
import Link from 'next/link';
import { getMajorTracks, getMinorTracks } from '@/lib/curriculum';

const majorTracks = getMajorTracks();
const minorTracks = getMinorTracks();

export default function TracksSection() {
  return (
    <section className="py-20" id="tracks">
      <div className="mb-12 space-y-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-orbitron uppercase tracking-[0.18em] text-accent">
          <Layers3 className="h-4 w-4" />
          Specialization pathways
        </div>
        <h2 className="text-h2 text-foreground">
          Major and <span className="text-accent italic">minor</span> tracks
        </h2>
        <p className="mx-auto max-w-3xl text-body text-foreground/70">
          The curriculum supports one major pathway, a structured advanced elective pool, and multiple minor domains that evolve from exploratory to advanced stages.
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-h3 text-foreground">Majors</h3>
              <p className="mt-2 text-sm text-foreground/65">Six required specialization courses plus four advanced electives from the same track.</p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {majorTracks.map((track) => (
              <Link href={`/curriculum/tracks/${track.id}`} key={track.id} className="glass group block p-6 transition-all duration-300 hover:border-accent/25 hover:bg-white/[0.06]">
                <div className="flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-orbitron uppercase tracking-[0.16em] text-accent">
                      Major
                    </span>
                    <span className="text-sm text-foreground/50">{track.requiredCourseCodes.length} core + {track.electiveCourseCodes.length} elective</span>
                  </div>
                  <h4 className="text-xl font-orbitron font-bold text-foreground transition-colors group-hover:text-accent">{track.title}</h4>
                  <p className="text-sm leading-relaxed text-foreground/65">{track.description}</p>
                  <div className="mt-auto inline-flex items-center gap-2 text-sm font-orbitron uppercase tracking-[0.14em] text-accent">
                    View pathway <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-h3 text-foreground">Minors</h3>
              <p className="mt-2 text-sm text-foreground/65">Explore four domains in Semesters 3-6, then continue two of them as advanced minors in Semesters 7-8.</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {minorTracks.map((track) => (
              <Link href={`/curriculum/tracks/${track.id}`} key={track.id} className="glass group block p-5 transition-all duration-300 hover:border-accent/25 hover:bg-white/[0.06]">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-orbitron uppercase tracking-[0.16em] text-foreground/65">
                      Minor
                    </span>
                    <h4 className="text-lg font-orbitron font-bold text-foreground transition-colors group-hover:text-accent">{track.title}</h4>
                    <p className="text-sm leading-relaxed text-foreground/65">{track.description}</p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-accent" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
