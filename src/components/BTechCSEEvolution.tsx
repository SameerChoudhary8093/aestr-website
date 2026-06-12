'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BTechCSEEvolution = () => {
    const [activeProfile, setActiveProfile] = useState<'traditional' | 'aestr'>('aestr');

    // Variants for staggered children animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -15 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
        }
    };

    return (
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#4c11b0] via-[#5B1DD6] to-[#2b0870] overflow-hidden border-t border-white/5 scroll-mt-24">
            {/* Blueprints Engineering Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-70 z-0" />

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 blur-[100px] rounded-full pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="space-y-16">
                    {/* Header Area */}
                    <div className="text-center space-y-6 max-w-5xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-[26px] sm:text-[34px] md:text-[44px] lg:text-[48px] font-orbitron font-black text-white leading-tight tracking-wider"
                        >
                            How Traditional <span className="text-[#D7F601]">B.Tech CSE</span> Evolves into <span className="text-[#D7F601]">AESTR</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base sm:text-lg text-white font-outfit font-medium leading-relaxed max-w-3xl mx-auto lg:whitespace-nowrap"
                        >
                            AESTR is the most advanced, industry-ready version of the B.Tech CSE program.
                        </motion.p>
                    </div>

                    {/* Comparison Cards Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-stretch relative">

                        {/* Central Evolution Connector */}
                        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20 pointer-events-none">
                            <div className="relative">
                                {/* Pulsing ring */}
                                <div className="absolute inset-0 rounded-full bg-[#D7F601]/25 animate-ping duration-[1800ms]"></div>
                                {/* Central badge */}
                                <div className="relative w-14 h-14 rounded-full bg-black border-2 border-[#D7F601] flex items-center justify-center shadow-[0_0_35px_rgba(215,246,1,0.3)]">
                                    <svg className="w-6 h-6 text-[#D7F601] animate-pulse" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Traditional B.Tech CSE Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-black/55 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-red-500/25 hover:shadow-[0_0_50px_rgba(239,68,68,0.06)] transition-all duration-500 relative group z-10"
                        >
                            <div className="space-y-8">
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 text-left">
                                    <div className="space-y-2">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-orbitron font-black text-white/55 tracking-wide uppercase">
                                            Traditional B.Tech CSE
                                        </h3>
                                        <p className="text-xs text-white/30 font-outfit font-medium uppercase tracking-[0.2em]">
                                            Standard B.Tech CSE Course structure
                                        </p>
                                    </div>
                                    <div className="bg-red-950/80 text-[#ffccd5] font-orbitron font-bold text-[10px] uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-red-900/30 shrink-0 self-start sm:self-center">
                                        OUTDATED
                                    </div>
                                </div>

                                <motion.ul
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="space-y-4 text-left"
                                >
                                    {[
                                        { title: "Theory-Heavy Curriculum", desc: "Outdated Computer Science Engineering Curriculum focusing on memorizing syntax and drawing diagrams on paper." },
                                        { title: "Passive Lectures", desc: "Taught by academic instructors with zero industry or product-building experience." },
                                        { title: "Fixed Outdated Syllabus", desc: "Stuck in 2010. Misses modern requirements like Large Language Models (LLMs), GPU clusters, and modern DevOps." },
                                        { title: "No Placement Security", desc: "No guaranteed paths. Graduating students are left to compete in saturated job pools alone." }
                                    ].map((item, idx) => (
                                        <motion.li
                                            variants={itemVariants}
                                            key={idx}
                                            className="flex items-start gap-4 hover:bg-red-500/5 px-3 py-2.5 -mx-3 rounded-xl transition-all duration-300 cursor-default"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0 mt-1">
                                                <svg className="w-3.5 h-3.5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg>
                                            </div>
                                            <div className="space-y-1">
                                                <strong className="text-white/80 text-xs sm:text-sm md:text-base font-bold font-orbitron block uppercase">{item.title}</strong>
                                                <p className="text-white/45 text-xs md:text-sm font-outfit leading-relaxed font-medium">{item.desc}</p>
                                            </div>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>
                        </motion.div>

                        {/* AESTR B.Tech CSE Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-black/85 backdrop-blur-md p-8 md:p-12 rounded-3xl border-2 border-[#D7F601] shadow-[0_0_40px_rgba(215,246,1,0.18)] flex flex-col justify-between hover:shadow-[0_0_55px_rgba(215,246,1,0.32)] transition-all duration-500 relative group overflow-hidden z-10"
                            style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(215, 246, 1, 0.04) 0%, transparent 60%)' }}
                        >
                            <div className="space-y-8">
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 text-left">
                                    <div className="space-y-2">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-orbitron font-black text-[#D7F601] tracking-wide uppercase">
                                            AESTR B.Tech CSE
                                        </h3>
                                        <p className="text-xs text-[#D7F601]/75 font-outfit font-medium uppercase tracking-[0.2em]">
                                            Best B.Tech CSE Program version
                                        </p>
                                    </div>
                                    <div className="bg-[#D7F601] text-black font-orbitron font-bold text-[10px] uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(215,246,1,0.3)] shrink-0 self-start sm:self-center">
                                        RECOMMENDED
                                    </div>
                                </div>

                                <motion.ul
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="space-y-4 text-left"
                                >
                                    {[
                                        { title: "100% Practical Lab-Work", desc: "No written tests. Swap exams with continuous sprint reviews, Github commits, and live deployments in high-tech residency labs." },
                                        { title: "Top Industry Mentors", desc: "Taught and guided directly by tech founders, computer scientists, and active engineers from Shodh AI and other tech giants." },
                                        { title: "B.Tech AI and Machine Learning Integrated", desc: "Built for the era of AI. Deep specialization in Generative AI architectures, LLM pipelines, scaling GPUs, and deep-tech models." },
                                        { title: "Incubator Residency Advantage", desc: "We are a Silicon Valley-style incubator. Residents build products and launch startups or step directly into elite deep-tech roles." }
                                    ].map((item, idx) => (
                                        <motion.li
                                            variants={itemVariants}
                                            key={idx}
                                            className="flex items-start gap-4 hover:bg-[#D7F601]/5 px-3 py-2.5 -mx-3 rounded-xl transition-all duration-300 cursor-default"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-[#D7F601]/20 border border-[#D7F601]/40 flex items-center justify-center shrink-0 mt-1 shadow-[0_0_10px_rgba(215,246,1,0.2)]">
                                                <svg className="w-3.5 h-3.5 text-[#D7F601]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                            <div className="space-y-1">
                                                <strong className="text-white text-xs sm:text-sm md:text-base font-semibold font-orbitron block uppercase">{item.title}</strong>
                                                <p className="text-white/85 text-xs md:text-sm font-outfit leading-relaxed font-medium">{item.desc}</p>
                                            </div>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>
                            {/* Inner ambient glow decoration */}
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#D7F601]/5 blur-2xl rounded-full pointer-events-none" />
                        </motion.div>
                    </div>

                    {/* Interactive Profile Simulator widget */}
                    <div className="w-full mt-12 bg-black/45 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-2xl rounded-full pointer-events-none" />

                        <div className="text-center space-y-6 mb-6">
                            <span className="text-[10px] md:text-xs text-accent font-orbitron font-bold tracking-[0.2em] uppercase px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
                                Interactive Simulator
                            </span>
                            <h4 className="text-lg md:text-xl font-orbitron font-black text-white uppercase tracking-wider">
                                Compare Student Outcome Trajectories
                            </h4>
                        </div>

                        {/* Toggle Buttons */}
                        <div className="flex flex-row justify-center gap-6 mb-8">
                            <button
                                onClick={() => setActiveProfile('traditional')}
                                className={`px-4 py-2.5 rounded-xl font-orbitron font-bold text-xs uppercase tracking-wider transition-all duration-300 border ${activeProfile === 'traditional'
                                    ? 'bg-red-950/80 text-[#ffccd5] border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                                    : 'bg-black/35 text-white/40 border-white/10 hover:text-white/80 hover:border-white/20'
                                    }`}
                            >
                                Traditional Graduate
                            </button>
                            <button
                                onClick={() => setActiveProfile('aestr')}
                                className={`px-4 py-2.5 rounded-xl font-orbitron font-bold text-xs uppercase tracking-wider transition-all duration-300 border ${activeProfile === 'aestr'
                                    ? 'bg-[#D7F601] text-black border-[#D7F601] shadow-[0_0_20px_rgba(215,246,1,0.3)]'
                                    : 'bg-black/35 text-white/40 border-white/10 hover:text-white/80 hover:border-white/20'
                                    }`}
                            >
                                AESTR Resident
                            </button>
                        </div>

                        {/* Simulator Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
                            {[
                                {
                                    label: "Coding Experience",
                                    trad: "50 Hours",
                                    aestr: "2,000+ Hours"
                                },
                                {
                                    label: "Live Apps Deployed",
                                    trad: "0 Shipped",
                                    aestr: "5+ Production Apps"
                                },
                                {
                                    label: "Industry Guidance",
                                    trad: "Academic Only",
                                    aestr: "Direct Founders"
                                },
                                {
                                    label: "Placement Trajectory",
                                    trad: "Service-sector Pools",
                                    aestr: "Frontier AI startups"
                                }
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-black/50 p-5 rounded-2xl border border-white/5 space-y-3 hover:border-white/10 transition-colors duration-300 flex flex-col justify-center min-h-[100px]">
                                    <div className="text-[10px] uppercase text-white/40 font-medium tracking-wider">{stat.label}</div>
                                    <motion.div
                                        key={activeProfile}
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className={`font-orbitron font-black text-xs sm:text-sm md:text-base ${activeProfile === 'traditional' ? 'text-red-400' : 'text-[#D7F601]'
                                            }`}
                                    >
                                        {activeProfile === 'traditional' ? stat.trad : stat.aestr}
                                    </motion.div>
                                </div>
                            ))}
                        </div>

                        {/* Technology Stack & Skills */}
                        <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                            <div className="text-[10px] uppercase text-white/40 text-center font-medium tracking-widest">
                                Core Competencies & Skills
                            </div>
                            <motion.div
                                key={activeProfile}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-wrap justify-center gap-2"
                            >
                                {activeProfile === 'traditional' ? (
                                    ["Syllabus Theory", "Java Syntax", "Rote Learning", "No Git/Github", "Dry-runs on paper", "Basic HTML/CSS"].map((skill) => (
                                        <span key={skill} className="px-3 py-1.5 rounded-lg bg-red-950/20 text-red-400 border border-red-500/15 text-[11px] font-outfit font-medium">
                                            {skill}
                                        </span>
                                    ))
                                ) : (
                                    ["Generative AI", "LLM fine-tuning", "Vector DBs", "GPU Compute scaling", "Next.js", "Docker & Kubernetes", "Agentic Workflows"].map((skill) => (
                                        <span key={skill} className="px-3 py-1.5 rounded-lg bg-[#D7F601]/10 text-[#D7F601] border border-[#D7F601]/20 text-[11px] font-outfit font-semibold shadow-[0_0_10px_rgba(215,246,1,0.05)]">
                                            {skill}
                                        </span>
                                    ))
                                )}
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom CTA Message */}
                    <div className="pt-8 text-center border-t border-white/10">
                        <p className="text-xs md:text-sm font-orbitron font-bold text-white/60 uppercase tracking-[0.3em] leading-relaxed">
                            Stop studying. Start building. Choose the <span className="text-[#D7F601]">AESTR Residency</span> path.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BTechCSEEvolution;
