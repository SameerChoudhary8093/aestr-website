'use client';

import React from 'react';
import Link from 'next/link';

const SparkleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
    </svg>
);

const AboutAestr = () => {
    return (
        <div className="flex flex-col">
            {/* Section 1: B.Tech for The top 1% */}
            <section className="relative py-24 bg-[#020617] overflow-hidden text-white">
                {/* Ambient subtle shapes */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
                    <SparkleIcon className="absolute top-20 right-20 w-8 h-8 text-accent" />
                    <SparkleIcon className="absolute bottom-40 left-10 w-12 h-12 text-accent" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-orbitron font-bold leading-tight flex items-center gap-3">
                                    <SparkleIcon className="w-8 h-8 text-accent" />
                                    B.Tech for <span className="italic font-light text-accent">The top 1%</span>
                                </h2>
                                <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
                                    Blend of deep CS knowledge with expertise in healthcare, nanotech, robotics, and material science.
                                </p>
                            </div>
                            <Link href="/btech-ai-shodh-ai" className="btn-aestr flex items-center gap-2 group whitespace-nowrap self-start md:self-end text-center">
                                Btech AI with Shodh AI
                                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                            </Link>
                        </div>

                        {/* Specialization Card */}
                        <div className="glass p-8 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden">
                            {/* Left: Video Placeholder */}
                            <div className="aspect-video bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center relative group cursor-pointer overflow-hidden backdrop-blur-lg">
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.4)] group-hover:scale-110 transition-transform duration-500 z-10">
                                    <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <span className="absolute bottom-4 left-4 text-xs font-orbitron uppercase tracking-widest text-white/50 font-bold">Watch Concept Video</span>
                            </div>

                            {/* Right: Specializations */}
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-orbitron font-bold text-white">B.Tech Computer Science & Engineering</h3>

                                    <div className="space-y-3">
                                        <h4 className="text-xs font-orbitron uppercase tracking-widest text-white/50 font-bold">Major Specialization</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Software Engineering", "Cloud Engineering", "Data Science", "Artificial Intelligence & Machine Learning", "Cyber Security"].map((item) => (
                                                <span key={item} className="px-3 py-1.5 text-xs bg-white/10 text-white border border-transparent rounded-full hover:bg-white/20 transition-all cursor-default font-semibold">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-xs font-orbitron uppercase tracking-widest text-white/40 font-bold italic">Minor specialization...</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Robotics", "Bioinformatics", "Industry & Manufacturing", "Design", "Fintech", "Nanotechnology", "Geoinformatics", "Chip & Semiconductor", "Smart Cities"].map((item) => (
                                                <span key={item} className="px-3 py-1.5 text-xs bg-black/30 border border-white/10 rounded-full text-white/70 hover:border-white/30 transition-all cursor-default font-medium">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Why to Join AESTR? */}
            <section className="relative py-24 bg-[#3b0764] overflow-hidden text-white">
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
                <SparkleIcon className="absolute top-40 left-20 w-8 h-8 text-accent animate-pulse" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center space-y-4 mb-20">
                        <h2 className="text-4xl md:text-6xl font-orbitron font-bold tracking-tight flex items-center justify-center gap-4">
                            <SparkleIcon className="w-10 h-10 text-accent" />
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
                                <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white">CSE 2030: Computer Science Won't Be Same Ever Again</h3>
                                <p className="text-white/70 text-lg leading-relaxed max-w-4xl">
                                    The world of Computer Science is transforming by 2030, and our curriculum is built for that future. We move away from obsolete theories to architecting real-world AI systems.
                                </p>
                            </div>
                        </div>

                        {/* Grid of 5 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: 'Future-Proof Your Career', desc: 'Curriculum updated every 6 months to match rapid tech shifts.' },
                                { title: 'Beyond Traditional Tech', desc: 'Integration of deep domain knowledge with advanced computation.' },
                                { title: 'Engineered By Experts, For Experts-To-Be', desc: 'Designed by people who have actually built industry-scale products.' }
                            ].map((card) => (
                                <div key={card.title} className="glass p-8 rounded-2xl group hover:-translate-y-1 transition-transform duration-300">
                                    <h4 className="text-lg font-orbitron font-bold text-white group-hover:text-accent transition-colors mb-4">{card.title}</h4>
                                    <p className="text-sm text-white/70 leading-relaxed">{card.desc}</p>
                                </div>
                            ))}

                            <div className="glass p-8 rounded-2xl md:col-span-2 lg:col-span-2 group hover:-translate-y-1 transition-transform duration-300">
                                <h4 className="text-xl font-orbitron font-bold text-white group-hover:text-accent mb-6">Unparalleled Flexibility & Cutting-Edge Curriculum</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                    {['AI-First Programming', 'Quantum Computing Intro', 'DeFi & Web3 Architectures', 'Edge Computing Mastery'].map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-white/70 font-medium whitespace-nowrap">
                                            <span className="w-1.5 h-1.5 bg-accent rounded-full" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="glass p-8 rounded-2xl lg:col-span-1 group hover:-translate-y-1 transition-transform duration-300">
                                <h4 className="text-xl font-orbitron font-bold text-white group-hover:text-accent mb-6">Learn By Doing</h4>
                                <ul className="space-y-3">
                                    {['Industry Live Projects', 'Patent Filing Support', 'Startup Incubation'].map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-white/70 font-medium">
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
                                <h3 className="text-2xl md:text-3xl font-orbitron font-bold">Built By AI Engineers</h3>
                                <p className="text-white/70 text-lg leading-relaxed max-w-4xl">
                                    Learn from the architects of tomorrow’s AI. Our mentors don't just teach from books; they bring years of experience from Tier-1 tech giants.
                                </p>
                            </div>
                        </div>

                        {/* Grid of 4 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'Visionary Leadership', accent: 'border-white/20', desc: 'Guidance from founders who witnessed the evolution of AI at Microsoft.' },
                                { title: 'Mentorship From Active Pros', accent: 'border-accent/40', desc: 'Direct access to engineers currently working on cutting-edge systems.' },
                                { title: 'Learn From The Best', accent: 'border-blue-500/40', desc: 'Regular sessions with Cambridge researchers and industry pioneers.' },
                                { title: 'Young, Agile, And Connected', accent: 'border-pink-500/40', desc: 'A curriculum that evolves as fast as the tech industry does.' }
                            ].map((card) => (
                                <div key={card.title} className={`glass p-8 rounded-2xl border-t-4 ${card.accent} hover:-translate-y-1 transition-transform duration-300`}>
                                    <h4 className="text-base font-orbitron font-bold text-white mb-4 leading-tight">{card.title}</h4>
                                    <p className="text-xs text-white/60 leading-relaxed italic">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutAestr;
