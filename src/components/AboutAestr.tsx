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

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-orbitron font-bold leading-tight flex items-center gap-3 text-foreground">
                                    B.Tech for <span className="italic font-light text-accent">The top 1%</span>
                                </h2>
                                <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
                                    Blend of deep CS knowledge with expertise in healthcare, nanotech, robotics, and material science.
                                </p>
                            </div>
                            <Link href="/btech-ai-shodh-ai" className="btn-aestr group whitespace-nowrap self-start md:self-end">
                                Btech AI with Shodh AI
                                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2">↗</span>
                            </Link>
                        </div>

                        {/* Specialization Card */}
                        <div className="glass p-8 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden">
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
                                    <h3 className="text-2xl font-orbitron font-bold text-foreground">B.Tech Computer Science & Engineering</h3>

                                    <div className="space-y-3">
                                        <h4 className="text-[10px] font-orbitron tracking-widest text-foreground/40 font-bold">Major specialization</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Software engineering", "Cloud engineering", "Data science", "Artificial intelligence & machine learning", "Cyber security"].map((item) => (
                                                <span key={item} className="px-3 py-1.5 text-[10px] bg-accent/10 text-accent border border-accent/20 rounded-full hover:bg-accent/20 hover:border-accent/40 transition-all cursor-default font-bold tracking-tight">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-[10px] font-orbitron tracking-widest text-foreground/40 font-bold italic text-white/40">Minor specialization...</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Robotics", "Bioinformatics", "Industry & manufacturing", "Design", "Fintech", "Nanotechnology", "Geoinformatics", "Chip & semiconductor", "Smart cities"].map((item) => (
                                                <span key={item} className="px-3 py-1.5 text-[10px] bg-foreground/5 border border-foreground/10 rounded-full text-foreground/60 hover:border-accent/40 hover:text-accent transition-all cursor-default font-medium tracking-tight">
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
                    className="container mx-auto px-6 relative z-10"
                >
                    <div className="text-center space-y-4 mb-20">
                        <h2 className="text-4xl md:text-6xl font-orbitron font-bold tracking-tight flex items-center justify-center gap-4 text-foreground">
                            Why to <span className="text-accent italic">join</span> AESTR ?
                        </h2>
                    </div>

                    {/* Point 1 */}
                    <div className="space-y-12 mb-20">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center text-3xl font-orbitron font-bold text-accent bg-accent/5">
                                1
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground">CSE 2030: Computer Science Won't Be Same Ever Again</h3>
                                <p className="text-foreground/70 text-lg leading-relaxed max-w-4xl font-normal">
                                    The world of Computer Science is transforming by 2030, and our curriculum is built for that future. We move away from obsolete theories to architecting real-world AI systems.
                                </p>
                            </div>
                        </div>

                        {/* Middle Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: 'Future-Proof Your Career', desc: 'The AI job market is exploding, and old institutional models can’t keep up. AESTR is built for the 2030 job landscape, focusing on roles that will dominate the next decade.' },
                                { title: 'Beyond Traditional Tech', desc: 'Forget outdated job titles. Think specialized AI roles across diverse industries. We anticipate the shift, so you lead it.' },
                                { title: 'Engineered By Experts, For Experts-To-Be', desc: 'Our curriculum is designed and delivered by practicing AI engineers who are actively shaping the industry and know exactly what skills you’ll need.' }
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

                        {/* Redefined Flexibility Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                            {[
                                { 
                                    title: 'Unique Expertise', 
                                    desc: 'Choose from 5 industry-focused Majors and 9 specialized Minors to tailor your skills.',
                                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                                },
                                { 
                                    title: 'Innovation Labs', 
                                    desc: 'Dive into 5 revolutionary Innovation Labs, unlike any other labs in the world.',
                                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86 7.717l.542 1.708a2 2 0 001.022.547l2.387.477a6 6 0 003.86-7.717l-.542-1.708zM12 13V4M7 14H5L16 3h2L7 14z" /></svg>
                                },
                                { 
                                    title: 'Apple Ecosystem', 
                                    desc: 'Gain exclusive Swift Application Development training directly from the source.',
                                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                },
                                { 
                                    title: 'Global Mentors', 
                                    desc: 'Learn from experts in defense tech, robotics, computer vision, and building engines.',
                                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                                }
                            ].map((item, idx) => (
                                <motion.div 
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                                    className="glass p-6 rounded-2xl flex flex-col gap-4 border-t-2 border-accent/20 hover:border-accent transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-base font-orbitron font-bold text-foreground group-hover:text-accent transition-colors">{item.title}</h4>
                                        <p className="text-xs text-foreground/60 leading-relaxed font-normal">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom Full-Width Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                            <div className="glass p-8 rounded-2xl group hover:-translate-y-1 transition-all duration-300 border-l-4 border-accent">
                                <h4 className="text-xl font-orbitron font-bold text-foreground group-hover:text-accent mb-6 leading-tight">Learn by Doing, Excel by Creating:</h4>
                                <ul className="space-y-4">
                                    {[
                                        'Project-Powered Progress: Get graded on your real-world projects and software solutions, not just exams. Solve a problem, build the software, and master the subject.',
                                        'The Engineer’s Dream Education: Our courses are crafted the way seasoned engineers wish they had been taught – practical, innovative, and deeply engaging.'
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-foreground/70 font-normal">
                                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(216,246,2,0.6)]" /> 
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="glass p-8 rounded-2xl bg-accent/5 flex items-center justify-center text-center overflow-hidden relative">
                                <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
                                <p className="relative z-10 text-2xl md:text-3xl font-orbitron font-light text-foreground/40 italic">
                                    Craft your <span className="text-accent font-bold not-italic">future</span> with precision.
                                </p>
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
                                <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground">Built By AI Engineers</h3>
                                <p className="text-foreground/70 text-lg leading-relaxed max-w-4xl font-normal">
                                    Learn from the architects of tomorrow’s AI. AESTR is the brainchild of leading AI engineers dedicated to cultivating the next generation of tech innovators.
                                </p>
                            </div>
                        </div>

                        {/* Grid of 4 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
