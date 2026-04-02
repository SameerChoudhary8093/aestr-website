'use client';

import React from 'react';
import { ArrowRight, Layers3 } from 'lucide-react';
import Link from 'next/link';
import { getMajorTracks, getMinorTracks } from '@/lib/curriculum';

const majorTracks = getMajorTracks();
const minorTracks = getMinorTracks();

export default function TracksSection() {
  return (
    <section className="py-20 bg-[#D7F601] rounded-3xl" id="tracks">
      <div className="px-8 md:px-12">
      <div className="mb-12 space-y-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/10 px-4 py-2 text-xs font-orbitron uppercase tracking-[0.18em] text-black">
          <Layers3 className="h-4 w-4" />
          Specialization pathways
        </div>
        <h2 className="text-h2 text-black">
          Major and <span className="text-black font-bold">minor</span> tracks
        </h2>
        <p className="mx-auto max-w-3xl text-body text-black/80">
          The curriculum supports one major pathway, a structured advanced elective pool, and multiple minor domains that evolve from exploratory to advanced stages.
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-black/20 pb-4">
            <div>
              <h3 className="text-h3 text-black">Majors</h3>
              <p className="mt-2 text-sm text-black/70">Six required specialization courses plus four advanced electives from the same track.</p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {majorTracks.map((track) => (
              <Link href={`/curriculum/tracks/${track.id}`} key={track.id} className="bg-black/90 backdrop-blur group block p-6 transition-all duration-300 hover:border-yellow-400/60 hover:shadow-2xl hover:shadow-black/30 hover:scale-105 hover:-translate-y-1 rounded-xl border border-white/20 transform-gpu">
                <div className="flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-xl font-orbitron font-bold text-[#EAF0BD] flex-1 min-w-0">{track.title}</h4>
                    <span className="text-sm text-[#EAF0BD] font-medium whitespace-nowrap flex-shrink-0">{track.requiredCourseCodes.length} core + {track.electiveCourseCodes.length} elective</span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/80">{track.description}</p>
                  <div className="mt-auto inline-flex items-center gap-2 text-sm font-orbitron uppercase tracking-[0.14em] text-[#EAF0BD] font-semibold">
                    View pathway <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-black/20 pb-4">
            <div>
              <h3 className="text-h3 text-black">Minors</h3>
              <p className="mt-2 text-sm text-black/70">Explore four domains in Semesters 3-6, then continue two of them as advanced minors in Semesters 7-8.</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {minorTracks.map((track) => (
              <Link href={`/curriculum/tracks/${track.id}`} key={track.id} className="bg-black/90 backdrop-blur group block p-5 transition-all duration-300 hover:border-yellow-400/60 hover:shadow-2xl hover:shadow-black/30 hover:scale-105 hover:-translate-y-1 rounded-xl border border-white/20 transform-gpu">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <h4 className="text-lg font-orbitron font-bold text-[#EAF0BD]">{track.title}</h4>
                    <p className="text-sm leading-relaxed text-white/80">{track.description}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#EAF0BD]" />
                    <span className="text-xs text-[#EAF0BD] font-medium whitespace-nowrap">View pathway</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
