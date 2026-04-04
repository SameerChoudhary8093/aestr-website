'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FoundingTeamVideo from '@/components/FoundingTeamVideo';


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
        <main className="bg-black overflow-hidden font-sans">
            {/* Purple Section: Hero Title/Subtitle center-aligned single line */}
            <div className="bg-[#5B1DD6] pt-64 pb-24 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 blur-[150px] -translate-y-1/2 translate-x-1/4 rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 blur-[120px] translate-y-1/2 -translate-x-1/4 rounded-full pointer-events-none" />

                <div className="container-boxed max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="space-y-8 flex flex-col items-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-h1 lg:text-[5.5rem] leading-[1] text-white font-black font-orbitron whitespace-nowrap"
                        >
                            Day of <span className="text-accent">AESTR Student</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-white/90 font-medium whitespace-nowrap"
                        >
                            Experience the intense, focused, and rewarding life of an AI engineering student at India's most innovative institution.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Black Section: Description + Main Image + Grid */}
            <div className="bg-black py-24 relative overflow-hidden">
                <div className="container-boxed max-w-7xl mx-auto px-6 relative z-10 space-y-20">
                    {/* Content Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <p className="text-lg md:text-xl text-white leading-relaxed font-normal font-sans text-center lg:text-left">
                                At AESTR, a typical day blends hands-on innovation with AI-driven learning. By 9 AM, students dive into immersive bootcamps like “How to Build a Humanoid Robot,” where theory meets real-world creation. In labs, they design, code, and train robots not rote exams, just functional prototypes as proof of learning. Over lunch, conversations revolve around sensors, models, and routes not marks. By afternoon, feedback sessions turn into mentoring moments, refining both tech and thinking. By 4 PM, robots deliver across campus, showcasing not just knowledge but industry-ready execution. At AESTR, students don’t just study, they build, test, and launch.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.4)]"
                        >
                            <Image
                                src="/Other/AI-faculty.png"
                                alt="AESTR Student Life"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </motion.div>
                    </div>

                    {/* 4-Image Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {[1, 2, 3, 4].map((i, index) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative aspect-square rounded-3xl overflow-hidden border-2 border-white/10 shadow-xl group cursor-pointer"
                            >
                                <Image
                                    src={`/Other/lab-${i}.webp`}
                                    alt={`AESTR Student Work ${i}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Purple Comparison Section */}
            <section className="bg-[#1a0b3b] py-24 md:py-32 overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#5B1DD6] via-transparent to-transparent" />
                
                <div className="container-boxed max-w-7xl mx-auto px-6 space-y-24 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-4"
                    >
                        <h2 className="text-h2 md:text-[5rem] text-white font-black uppercase tracking-tighter font-orbitron">
                            TRADITIONAL <span className="text-accent underline decoration-accent/30 underline-offset-8">vs</span> AESTR
                        </h2>
                    </motion.div>

                    <div className="space-y-8">
                        {comparisons.map((row, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {/* Traditional Side */}
                                <div className="bg-[#2d1266]/40 backdrop-blur-md p-8 md:p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden rounded-[2.5rem] border border-white/10 hover:bg-[#2d1266]/60 transition-all shadow-xl">
                                    <div className="space-y-4 relative z-10 w-full">
                                        <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-[0.6rem] uppercase tracking-[0.2em] text-white/50 font-bold font-orbitron border border-white/10">
                                            Traditional Engineering
                                        </span>
                                        <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed">
                                            {row.traditional}
                                        </p>
                                    </div>
                                </div>

                                {/* AESTR Side */}
                                <div className="bg-[#2d1266] p-8 md:p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden rounded-[2.5rem] border border-accent/20 hover:bg-[#3d1a85] transition-all shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
                                    {/* Subtle Glow */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[60px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />
                                    
                                    <div className="space-y-4 relative z-10 w-full">
                                        <span className="inline-block px-3 py-1 bg-accent/20 rounded-full text-[0.6rem] uppercase tracking-[0.2em] text-accent font-bold font-orbitron border border-accent/20 shadow-sm">
                                            The AESTR Way
                                        </span>
                                        <p className="text-xl md:text-2xl text-white font-black leading-snug">
                                            {row.aestr}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founding Team Section */}
            <div className="bg-black">
                <FoundingTeamVideo />
            </div>
        </main>
    );
}
