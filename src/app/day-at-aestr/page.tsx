'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FoundingTeamVideo from '@/components/FoundingTeamVideo';
import BottomCTA from '@/components/BottomCTA';
import StickyAdmissionsBar from '@/components/StickyAdmissionsBar';

const comparisons = [
    {
        traditional: "Long, passive lectures every day, few labs",
        aestr: "AI-powered bootcamps that start with real-world problems"
    },
    {
        traditional: "Written exams & memory tests determine grades",
        aestr: "Project-based evaluations - your working robot is your grade"
    },
    {
        traditional: "Wait 3-4 years to build anything meaningful",
        aestr: "Build humanoids, LLMs, and AI tools from Semester 1"
    },
    {
        traditional: "Teachers lecture from textbooks",
        aestr: "Mentors from Microsoft, NVIDIA, DRDO guide you hands-on"
    },
    {
        traditional: "Students memorize. Forget. Repeat.",
        aestr: "Students build, test, iterate, launch."
    },
    {
        traditional: "One-size-fits-all degree structure",
        aestr: "You craft your degree with electives in AI, policy, robotics, & startups"
    },
    {
        traditional: "No support for entrepreneurial ideas",
        aestr: "Up to ₹1 Cr seed funding for student startups"
    }
];

export default function DayAtAestr() {
    return (
        <main className="pt-32 pb-0 bg-background overflow-hidden">
            <StickyAdmissionsBar />
            {/* Section 1: Day of AESTR Student */}
            <section className="relative py-20 px-6">
                <div className="container-boxed max-w-6xl mx-auto space-y-16">
                    <div className="space-y-4">
                        <h1 className="text-hero text-foreground">
                            Day of <span className="text-accent underline decoration-accent/20">AESTR Student</span>
                        </h1>
                        <p className="text-body text-white/80 max-w-2xl mx-auto">
                            Experience the intense, focused, and rewarding life of an AI engineering student at India's most innovative institution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
                        <div className="lg:col-span-6 space-y-6">
                            <p className="text-base md:text-lg text-foreground/90 leading-relaxed font-bold">
                                At AESTR, a typical day blends hands-on innovation with AI-driven learning. By 9 AM, students dive into immersive bootcamps like “How to Build a Humanoid Robot,” where theory meets real-world creation. In labs, they design, code, and train robots not rote exams, just functional prototypes as proof of learning. Over lunch, conversations revolve around sensors, models, and routes not marks. By afternoon, feedback sessions turn into mentoring moments, refining both tech and thinking. By 4 PM, robots deliver across campus, showcasing not just knowledge but industry-ready execution. At AESTR, students don’t just study, they build, test, and launch.
                            </p>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                                <Image
                                    src="/Other/AI-faculty.png"
                                    alt="AESTR Student Life"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                        </div>
                    </div>

                    {/* Small Images Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group shadow-lg">
                                <Image
                                    src={`/Other/lab-${i}.webp`}
                                    alt={`AESTR Lab ${i}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: TRADITIONAL vs AESTR */}
            <section className="relative py-24 bg-background-alt">
                <div className="container-boxed max-w-6xl mx-auto space-y-16">
                    <h2 className="text-h2 text-center text-foreground uppercase">
                        TRADITIONAL <span className="text-accent italic">vs</span> AESTR
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                            <thead>
                                <tr className="bg-purple/10">
                                    <th className="p-6 md:p-10 text-lg md:text-2xl font-orbitron font-bold text-white border-b border-white/5 w-1/2">
                                        Traditional Engineering
                                    </th>
                                    <th className="p-6 md:p-10 text-lg md:text-2xl font-orbitron font-bold text-accent border-b border-white/5 w-1/2">
                                        AESTR Model
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisons.map((row, idx) => (
                                    <tr key={idx} className="group hover:bg-white/5 transition-colors">
                                        <td className="p-6 md:p-8 text-sm md:text-base text-white/60 font-medium border-b border-white/5 border-r border-white/5">
                                            {row.traditional}
                                        </td>
                                        <td className="p-6 md:p-8 text-sm md:text-base text-[#EAF0BD] font-bold border-b border-white/5">
                                            {row.aestr}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Section 3: Founding Team */}
            <FoundingTeamVideo />

            {/* Section 4: Footer sections in BottomCTA */}
            <BottomCTA />
        </main>
    );
}
