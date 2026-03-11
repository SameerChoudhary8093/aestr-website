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
                                        <h4 className="text-[10px] font-orbitron uppercase tracking-widest text-foreground/40 font-bold">Major Specialization</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Software Engineering", "Cloud Engineering", "Data Science", "Artificial Intelligence & Machine Learning", "Cyber Security"].map((item) => (
                                                <span key={item} className="px-3 py-1.5 text-[10px] bg-accent/10 text-accent border border-accent/20 rounded-full hover:bg-accent hover:text-black transition-all cursor-default font-bold uppercase tracking-wider">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-[10px] font-orbitron uppercase tracking-widest text-foreground/40 font-bold italic">Minor specialization...</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Robotics", "Bioinformatics", "Industry & Manufacturing", "Design", "Fintech", "Nanotechnology", "Geoinformatics", "Chip & Semiconductor", "Smart Cities"].map((item) => (
                                                <span key={item} className="px-3 py-1.5 text-[10px] bg-foreground/5 border border-foreground/10 rounded-full text-foreground/60 hover:border-accent/40 hover:text-accent transition-all cursor-default font-medium uppercase tracking-tight">
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
                            Why to <span className="text-accent italic">Join</span> AESTR?
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
                                <p className="text-foreground/70 text-lg leading-relaxed max-w-4xl">
                                    The world of Computer Science is transforming by 2030, and our curriculum is built for that future. We move away from obsolete theories to architecting real-world AI systems.
                                </p>
                            </div>
                        </div>

                        {/* Grid of Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: 'Future-Proof Your Career', desc: 'Curriculum updated every 6 months to match rapid tech shifts.' },
                                { title: 'Beyond Traditional Tech', desc: 'Integration of deep domain knowledge with advanced computation.' },
                                { title: 'Engineered By Experts, For Experts-To-Be', desc: 'Designed by people who have actually built industry-scale products.' }
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
                                    <p className="text-sm text-foreground/60 leading-relaxed">{card.desc}</p>
                                </motion.div>
                            ))}

                            <div className="glass p-8 rounded-2xl md:col-span-2 lg:col-span-2 group hover:-translate-y-1 transition-transform duration-300">
                                <h4 className="text-xl font-orbitron font-bold text-foreground group-hover:text-accent mb-6">Unparalleled Flexibility & Cutting-Edge Curriculum</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                    {['AI-First Programming', 'Quantum Computing Intro', 'DeFi & Web3 Architectures', 'Edge Computing Mastery'].map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-foreground/70 font-medium whitespace-nowrap">
                                            <span className="w-1.5 h-1.5 bg-accent rounded-full" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="glass p-8 rounded-2xl lg:col-span-1 group hover:-translate-y-1 transition-transform duration-300">
                                <h4 className="text-xl font-orbitron font-bold text-foreground group-hover:text-accent mb-6">Learn By Doing</h4>
                                <ul className="space-y-3">
                                    {['Industry Live Projects', 'Patent Filing Support', 'Startup Incubation'].map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-foreground/70 font-medium">
                                            <span className="w-1.5 h-1.5 bg-accent rounded-full" /> {item}
                                        </li>
                                    ))}
                                </ul>
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
                                <p className="text-foreground/70 text-lg leading-relaxed max-w-4xl">
                                    Learn from the architects of tomorrow’s AI. Our mentors don't just teach from books; they bring years of experience from Tier-1 tech giants.
                                </p>
                            </div>
                        </div>

                        {/* Grid of 4 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'Visionary Leadership', accent: 'border-foreground/10', desc: 'Guidance from founders who witnessed the evolution of AI at Microsoft.' },
                                { title: 'Mentorship From Active Pros', accent: 'border-accent/30', desc: 'Direct access to engineers currently working on cutting-edge systems.' },
                                { title: 'Learn From The Best', accent: 'border-accent/20', desc: 'Regular sessions with Cambridge researchers and industry pioneers.' },
                                { title: 'Young, Agile, And Connected', accent: 'border-foreground/10', desc: 'A curriculum that evolves as fast as the tech industry does.' }
                            ].map((card) => (
                                <div key={card.title} className={`glass p-8 rounded-2xl border-t-2 ${card.accent} hover:-translate-y-1 transition-transform duration-300`}>
                                    <h4 className="text-base font-orbitron font-bold text-foreground mb-4 leading-tight group-hover:text-accent transition-colors">{card.title}</h4>
                                    <p className="text-xs text-foreground/50 leading-relaxed italic">{card.desc}</p>
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
