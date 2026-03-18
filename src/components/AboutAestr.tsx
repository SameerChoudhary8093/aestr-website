'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


const AboutAestr = () => {
    return (
        <div className="flex flex-col">
            {/* Section 1: B.Tech for The top 1% */}
            <section className="relative py-24 bg-background overflow-hidden">
                {/* Ambient subtle shapes - Neon accents */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
                </div>

                <div className="container-boxed relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="space-y-4">
                                <h2 className="text-h2 font-orbitron leading-tight flex flex-wrap items-center gap-3 text-foreground">
                                    B.Tech for <span className="text-accent">the top 1%</span>
                                </h2>
                                <p className="text-body text-foreground/80 max-w-2xl">
                                    Blend of deep CS knowledge with expertise in healthcare, nanotech, robotics, and material science.
                                </p>
                            </div>
                            <Link href="/btech-ai-shodh-ai" className="btn-aestr group whitespace-nowrap self-start md:self-end">
                                Btech AI with Shodh AI
                                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2">↗</span>
                            </Link>
                        </div>

                        {/* Specialization Card */}
                        <div className="glass p-6 md:p-8 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center overflow-hidden">
                            {/* Left: Video Placeholder */}
                            <div className="aspect-video bg-black/40 rounded-2xl border border-foreground/10 flex items-center justify-center relative group cursor-pointer overflow-hidden backdrop-blur-lg">
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(216,246,2,0.4)] group-hover:scale-110 transition-transform duration-500 z-10 text-black">
                                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <span className="absolute bottom-4 left-4 text-[10px] font-orbitron uppercase tracking-widest text-foreground/40 font-bold">Watch Concept Video</span>
                            </div>

                            {/* Right: Specializations */}
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-h3 font-orbitron text-foreground">B.Tech Computer Science & Engineering</h3>

                                    <div className="space-y-4 md:space-y-6">
                                        <h4 className="text-[11px] md:text-xs font-orbitron tracking-[0.2em] text-foreground/40 font-bold uppercase">Major specialization</h4>
                                        <div className="flex flex-wrap gap-2 md:gap-3">
                                            {[
                                                { name: "Software engineering", href: "/software-engineering" },
                                                { name: "Cloud engineering", href: "/btech-cloud-engineering" },
                                                { name: "Data science", href: "/data-science" },
                                                { name: "AI & ML", href: "/ai-ml" },
                                                { name: "Cyber security", href: "/cyber-security" }
                                            ].map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="px-4 py-2 text-xs md:text-sm bg-accent/10 text-accent border border-accent/20 rounded-full font-bold tracking-tight hover:bg-accent/20 transition-all cursor-pointer"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4 md:space-y-6">
                                        <h4 className="text-[11px] md:text-xs font-orbitron tracking-[0.2em] text-foreground/40 font-bold text-white/40">Minor specialization...</h4>
                                        <div className="flex flex-wrap gap-2 md:gap-3">
                                            {["Robotics", "Bioinformatics", "Industry & manufacturing", "Design", "Fintech", "Nanotechnology", "Geoinformatics", "Chip & semiconductor", "Smart cities"].map((item) => (
                                                <span key={item} className="px-4 py-2 text-xs md:text-sm bg-foreground/5 border border-foreground/10 rounded-full text-foreground/70 hover:border-accent/40 hover:text-accent transition-all cursor-default font-bold tracking-tight">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 2: Why to Join AESTR? */}
            <section className="relative py-24 bg-background-alt overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="container-boxed relative z-10"
                >
                    <div className="text-center space-y-4 mb-20">
                        <h2 className="text-h2 font-orbitron tracking-tight flex items-center justify-center gap-4 text-foreground">
                            Why to <span className="text-accent">join</span> Aestr?
                        </h2>
                    </div>

                    {/* Point 1 */}
                    <div className="space-y-12 mb-20">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center text-3xl font-orbitron font-bold text-accent bg-accent/5">
                                1
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-h3 font-orbitron text-foreground">CSE 2030: Computer Science Won't Be Same Ever Again</h3>
                                <p className="text-foreground/70 text-body max-w-4xl">
                                    The world of Computer Science is transforming by 2030, and AESTR is already there! Traditional roles are evolving, and new opportunities are emerging. We’re not just preparing you for a job; we’re equipping you to define the future.


                                </p>
                            </div>
                        </div>

                        {/* Middle Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {[
                                { title: 'Future-Proof Your Career', desc: 'Future-Proof Your Career' },
                                { title: 'Beyond Traditional Tech', desc: 'Forget outdated job titles. Think specialized AI roles across diverse industries. We anticipate the shift, so you lead it.' },
                                { title: 'Engineered By Experts, For Experts-To-Be', desc: 'Our curriculum is designed and delivered by practicing AI engineers who are actively shaping the industry and know exactly what skills you’ll need. They’re not just teachers; they’re your future colleagues and potential employers.' }
                            ].map((card, i) => (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="glass p-8 rounded-2xl group hover:-translate-y-1 transition-transform duration-300"
                                >
                                    <h4 className="text-lg font-orbitron font-bold text-foreground group-hover:text-accent transition-colors mb-4">{card.title}</h4>
                                    <p className="text-sm text-foreground/60 leading-relaxed font-normal">{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Unified Flexibility & Experience Section */}
                        <div className="mt-16 md:mt-24 space-y-6">
                            <div className="glass p-8 md:p-14 rounded-[2.5rem] border border-foreground/5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                                {/* Decorative background glow */}
                                <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 blur-[100px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-accent/10" />

                                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                                    <div className="lg:col-span-12 space-y-12">
                                        <div className="space-y-4 text-center">
                                            <h3 className="text-h2 font-orbitron text-foreground leading-tight tracking-tight">
                                                Unparalleled flexibility & <br className="hidden md:block" />
                                                <span className="text-accent">cutting-edge curriculum</span>
                                            </h3>
                                            <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
                                        </div>

                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                                            {/* Left half: Learn by Doing */}
                                            <div className="bg-foreground/5 p-8 rounded-3xl border border-foreground/10 group-hover:border-accent/30 transition-colors">
                                                <h4 className="text-xl md:text-2xl font-orbitron font-bold text-accent mb-6 leading-tight">Learn by Doing, Excel by Creating:</h4>
                                                <ul className="space-y-5">
                                                    {[
                                                        'Project-Powered Progress: Get graded on your real-world projects and software solutions, not just exams. Solve a problem, build the software, and master the subject.',
                                                        'The Engineer’s Dream Education: Our courses are crafted the way seasoned engineers wish they had been taught – practical, innovative, and deeply engaging.'
                                                    ].map((item) => (
                                                        <li key={item} className="flex items-start gap-4 text-sm md:text-base text-foreground/70 font-normal">
                                                            <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(216,246,2,0.6)]" />
                                                            <span className="leading-relaxed">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Right half: 4 Key Points */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
                                                {[
                                                    "Choose from 5 industry-focused Majors and 9 specialized Minors to tailor your unique expertise.",
                                                    "Dive into 5 revolutionary Innovation Labs, unlike any in the world.",
                                                    "Gain exclusive Apple Swift Application Development training directly from Apple.",
                                                    "Learn from global master teachers, experts in defense technologies, robotics, exo-robotics, computer vision, and engine building."
                                                ].map((point, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                        className="flex items-start gap-5 group/item"
                                                    >
                                                        <div className="flex-shrink-0 w-10 h-10 rounded-full border border-accent/30 bg-accent/5 flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-black transition-all duration-300 shadow-[0_0_15px_rgba(216,246,2,0.1)]">
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                        <p className="text-sm md:text-lg text-foreground/80 leading-relaxed font-bold group-hover/item:text-foreground transition-colors">
                                                            {point}
                                                        </p>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Point 2 */}
                    <div className="space-y-12">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center text-3xl font-orbitron font-bold text-accent bg-accent/5">
                                2
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-h3 font-orbitron text-foreground">Built By AI Engineers</h3>
                                <p className="text-foreground/70 text-body max-w-4xl">
                                    Learn from the architects of tomorrow’s AI. AESTR is the brainchild of leading AI engineers dedicated to cultivating the next generation of tech innovators.
                                </p>
                            </div>
                        </div>

                        {/* Grid of 4 Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: 'Visionary Leadership', accent: 'border-foreground/10', desc: 'Founded by experts like Dr. Arastu Sharma (PhD, University of Cambridge; ex-scientist, Microsoft Research Cambridge).' },
                                { title: 'Mentorship from Active Industry Professionals', accent: 'border-accent/30', desc: 'Our faculty aren\'t just academics; they are full-time engineers from our integrated software engineering labs and leading companies like Shodh AI (USA).' },
                                { title: 'Learn From The Best:', accent: 'border-accent/20', desc: 'Gain insights from Apple trainers, Google Cloud experts, and professionals from other tech giants.' },
                                { title: 'Young, Agile, And Connected', accent: 'border-foreground/10', desc: 'We are real engineers, deeply embedded in the industry. We speak your language & are committed to transforming you into our colleague within four years.' }
                            ].map((card) => (
                                <div key={card.title} className={`glass p-8 rounded-2xl border-t-2 ${card.accent} hover:-translate-y-1 transition-transform duration-300 group`}>
                                    <h4 className="text-base font-orbitron font-bold text-foreground mb-4 leading-tight group-hover:text-accent transition-colors">{card.title}</h4>
                                    <p className="text-xs text-foreground/50 leading-relaxed font-normal">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutAestr;
