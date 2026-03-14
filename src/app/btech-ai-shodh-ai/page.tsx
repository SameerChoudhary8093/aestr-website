'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const labs = [
    {
        name: 'Apple Ecosystem',
        tag: "India's Only Apple Certified Engineering Center",
        desc: 'MacBooks + Vision Pros for spatial computing. Build world-class apps for iOS, macOS, and the revolutionary VisionOS.',
        image: '/Other/lab-5.webp',
    },
    {
        name: 'NVIDIA Pipeline',
        tag: 'Dedicated GPU Hours — Train Your Own Models',
        desc: 'Dedicated GPU hours on NVIDIA Hopper. Fine-tune LLMs, master CUDA, and run real inference pipelines.',
        image: '/Other/lab-4.webp',
    },
    {
        name: 'RISC-V Lab',
        tag: "Design Custom AI Chips for India's Semiconductor Edge",
        desc: "Take your place at the forefront of India's semiconductor sovereignty. Complete lifecycle of chip design from RTL to tapeout.",
        image: '/Other/lab-3.webp',
    },
    {
        name: 'Embodied Brain Lab',
        tag: 'Deploy AI Into Robots, Exoskeletons & ROS Systems',
        desc: '3D-printed robots, exoskeletons, and NVIDIA Jetson-powered ROS systems. Where AI meets the physical world.',
        image: '/Other/lab-2.webp',
    },
];

const selectionSteps = [
    {
        num: '01',
        title: 'Show Us Your "Proof of Work"',
        desc: 'Have a GitHub link? Wired an Arduino? Launched a website? Drop the link. Give us anything real you\'ve done outside an exam hall.',
    },
    {
        num: '02',
        title: 'The Peer Interview',
        desc: "Senior student-engineers will interview you. If you don't have the grit, logic, and hunger, the team will reject you—no matter how high your JEE score is.",
    },
];

const minimumSteps = [
    { step: 'Step 1', desc: '75% Boards + 75th Percentile SAT/JEE/CUET (exception cases maybe considered).' },
    { step: 'Step 2', desc: 'Portfolio: Code, project, or hardware link.' },
    { step: 'Step 3', desc: 'Peer Interview: Prove your hunger.' },
];

const BtechAIShodhAI = () => {
    return (
        <main className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-accent selection:text-black">

            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section className="relative min-h-screen flex items-center pt-24 pb-0 overflow-hidden" style={{ backgroundColor: '#5B1DD6' }}>
                {/* Purple gradient layers */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #3a0fa8 0%, #5B1DD6 50%, #7b2ff7 100%)' }} />
                    {/* Circuit line art overlay */}
                    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                                <path d="M0 40 H30 M50 40 H80 M40 0 V30 M40 50 V80" stroke="#D8F602" strokeWidth="0.8" fill="none" />
                                <circle cx="40" cy="40" r="4" stroke="#D8F602" strokeWidth="0.8" fill="none" />
                                <circle cx="0" cy="40" r="2" fill="#D8F602" opacity="0.6" />
                                <circle cx="80" cy="40" r="2" fill="#D8F602" opacity="0.6" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#circuit)" />
                    </svg>
                    {/* City silhouette */}
                    <svg className="absolute bottom-0 left-0 w-full opacity-15" viewBox="0 0 1440 300" preserveAspectRatio="none">
                        <path d="M0,300 L0,200 L60,200 L60,150 L120,150 L120,100 L180,100 L180,180 L240,180 L240,120 L300,120 L300,80 L360,80 L360,140 L420,140 L420,160 L480,160 L480,90 L540,90 L540,60 L600,60 L600,130 L660,130 L660,170 L720,170 L720,100 L780,100 L780,140 L840,140 L840,70 L900,70 L900,120 L960,120 L960,160 L1020,160 L1020,100 L1080,100 L1080,80 L1140,80 L1140,150 L1200,150 L1200,180 L1260,180 L1260,120 L1320,120 L1320,200 L1380,200 L1380,180 L1440,180 L1440,300 Z" fill="#D8F602" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
                </div>

                {/* Floating glows */}
                <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full blur-[200px] pointer-events-none z-0" style={{ backgroundColor: 'rgba(216,246,2,0.12)' }} />
                <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[160px] pointer-events-none z-0" style={{ backgroundColor: 'rgba(91,29,214,0.5)' }} />

                <div className="container-boxed relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[85vh] py-16">

                        {/* Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-8"
                        >
                            {/* Badges row */}
                            <div className="flex items-center gap-4 flex-wrap">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                    <span className="text-[10px] font-orbitron font-black text-white/80 tracking-[0.3em] uppercase">AESTR · Gyan Vihar</span>
                                </div>
                                <div className="px-4 py-2 rounded-full border border-accent/40 bg-accent/10">
                                    <span className="text-[10px] font-orbitron font-black text-accent tracking-[0.25em] uppercase">B.Tech AI · Shodh AI</span>
                                </div>
                            </div>

                            {/* Main headline */}
                            <div className="space-y-2">
                                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-orbitron font-black leading-[0.85] uppercase tracking-tighter text-accent">
                                    THE B.TECH<br />IS DEAD.
                                </h1>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-black leading-tight uppercase tracking-tight text-white">
                                    WELCOME TO THE<br />ENGINEERING RESIDENCY.
                                </h2>
                            </div>

                            <p className="text-lg md:text-xl text-white/75 font-bold leading-relaxed max-w-lg">
                                A 4-Year Silicon Valley Incubator.<br />The degree? Just a byproduct.
                            </p>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-5 items-start pt-4">
                                <button className="btn-aestr !px-12 !py-5 group">
                                    APPLY FOR 2026 INTAKE
                                    <span className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                                </button>
                                <div className="flex items-center gap-3 self-center">
                                    <div className="w-1 h-1 rounded-full bg-white/40" />
                                    <span className="text-[10px] font-orbitron font-black text-white/35 tracking-[0.3em] uppercase">Only 60 Seats</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right – VR/AR image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative flex justify-center lg:justify-end"
                        >
                            <div className="relative w-full max-w-sm lg:max-w-none lg:w-[500px] h-[480px] lg:h-[620px]">
                                <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
                                    <Image
                                        src="/Other/Bootcamp.webp"
                                        alt="Engineering Residency"
                                        fill
                                        className="object-cover brightness-90"
                                        priority
                                    />
                                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, #5B1DD6 100%)' }} />
                                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(91,29,214,0.3) 0%, transparent 60%)' }} />
                                </div>
                                {/* Floating stat chip */}
                                <div className="absolute top-8 right-8 bg-accent text-black px-5 py-3 rounded-2xl font-orbitron font-black text-xs uppercase tracking-wider shadow-xl">
                                    Elite 60 Seats
                                </div>
                                <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-black/50 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl">
                                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                    <span className="text-xs font-orbitron font-black text-white tracking-widest uppercase">NVIDIA · Shodh AI</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── BY 2030 ──────────────────────────────────────────────── */}
            <section className="py-28 relative overflow-hidden bg-background">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none" style={{ backgroundColor: 'rgba(91,29,214,0.12)' }} />
                <div className="container-boxed relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9 }}
                            className="relative group"
                        >
                            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/8 relative">
                                <Image src="/Other/lab-1.webp" alt="AI Lab" fill className="object-cover brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple/20" />
                            </div>
                            {/* Floating card */}
                            <div className="absolute -bottom-4 -right-4 glass px-6 py-4 rounded-2xl border-accent/20">
                                <p className="text-[10px] font-orbitron font-black text-accent uppercase tracking-widest mb-1">NIRF · NAAC A+</p>
                                <p className="text-xs text-white/50 font-bold">India Govt Recognized</p>
                            </div>
                        </motion.div>

                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9 }}
                            className="space-y-8"
                        >
                            <div className="p-8 rounded-3xl border border-purple/40 space-y-6" style={{ backgroundColor: 'rgba(91,29,214,0.15)', backdropFilter: 'blur(12px)' }}>
                                <h2 className="text-3xl md:text-4xl font-orbitron font-black text-white leading-tight">
                                    By 2030, AI will code basics, analyze data, and build apps.
                                </h2>
                                <p className="text-base text-white/65 leading-relaxed font-medium">
                                    Traditional IT jobs vanish. Whiteboard syntax? Obsolete. AESTR isn't college—it's a residency.
                                    Join deployment teams, tackle Jira tickets, build deployment history.
                                    No homework, no resumes—just real impact.
                                </p>
                                <div className="flex items-center gap-3 pt-2">
                                    <div className="h-px flex-1 bg-accent/30" />
                                    <span className="text-[10px] font-orbitron font-black text-accent tracking-[0.4em] uppercase">The Residency Model</span>
                                    <div className="h-px flex-1 bg-accent/30" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── CROWN JEWEL: SHODH AI ──────────────────────────────── */}
            <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a3d 0%, #2d0e8a 50%, #3a12b0 100%)' }}>
                <div className="absolute inset-0 opacity-8">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="dots2" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="20" cy="20" r="1" fill="#D8F602" opacity="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dots2)" />
                    </svg>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[150px] pointer-events-none" style={{ backgroundColor: 'rgba(216,246,2,0.08)' }} />

                <div className="container-boxed relative z-10 space-y-14">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/30 bg-accent/10">
                            <span className="text-accent text-lg">♛</span>
                            <span className="text-[10px] font-orbitron font-black text-accent tracking-[0.35em] uppercase">Crown Jewel</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white leading-tight uppercase tracking-tighter">
                            SHODH AI <span className="text-accent italic">"ELITE 60"</span>
                        </h2>
                        <p className="text-lg text-white/60 font-bold max-w-2xl mx-auto">
                            B.Tech in Artificial Intelligence — Powered by SHODH AI & NVIDIA
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: '🇮🇳',
                                title: 'B.Tech AI with Shodh AI',
                                body: 'Shodh AI leads AI in India. Intern with the elite team. Be ready for the 2030 AI world.',
                                tag: 'INDIA AI MISSION',
                            },
                            {
                                icon: '⚡',
                                title: 'Built With Google & NVIDIA',
                                body: 'Indian Govt mandate to build AI for science. Shodh AI released the world\'s first Large Physics Model — Project Skanda.',
                                tag: 'SOVEREIGN AI',
                            },
                            {
                                icon: '🎯',
                                title: 'Brutally Selective',
                                body: 'Only 60 seats. While others code "Hello World," you fine-tune LLMs on NVIDIA Hopper GPUs.',
                                tag: 'ELITE COHORT',
                            },
                        ].map((card, i) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className="relative group rounded-3xl p-8 space-y-5 border border-white/10 hover:border-accent/40 transition-all duration-500 overflow-hidden"
                                style={{ backgroundColor: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)' }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-500" style={{ backgroundColor: 'rgba(216,246,2,0.2)' }} />
                                <div className="text-4xl">{card.icon}</div>
                                <div className="space-y-1">
                                    <p className="text-[9px] font-orbitron font-black text-accent tracking-[0.35em] uppercase">{card.tag}</p>
                                    <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-accent transition-colors">{card.title}</h3>
                                </div>
                                <p className="text-sm text-white/55 leading-relaxed font-medium group-hover:text-white/80 transition-colors">{card.body}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Shodh AI banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-3xl overflow-hidden relative border border-accent/20"
                        style={{ background: 'linear-gradient(90deg, rgba(216,246,2,0.08) 0%, rgba(91,29,214,0.3) 100%)' }}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-8 p-10">
                            <div className="flex-1 space-y-3">
                                <p className="text-[10px] font-orbitron font-black text-accent tracking-[0.4em] uppercase">Led by Dr. Arastu Sharma</p>
                                <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white">
                                    Shodh AI is one of <span className="text-accent">12 handpicked</span> for INDIA AI Mission
                                </h3>
                                <p className="text-base text-white/60 font-medium">
                                    Building Sovereign AI Models and Project Skanda — the world's first Physics Model for materials science.
                                </p>
                            </div>
                            <div className="shrink-0 flex flex-col items-center gap-2">
                                <div className="text-5xl font-orbitron font-black text-accent">12</div>
                                <p className="text-[10px] font-orbitron text-white/50 uppercase tracking-wider text-center">of 12<br />National AI Labs</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── HARDWARE ARSENAL / LABS ──────────────────────────────── */}
            <section className="py-28 relative overflow-hidden bg-background">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px] pointer-events-none" style={{ backgroundColor: 'rgba(91,29,214,0.1)' }} />
                <div className="container-boxed relative z-10 space-y-14">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <p className="text-[10px] font-orbitron font-black text-accent tracking-[0.5em] uppercase">Atoms + Bits</p>
                        <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white uppercase tracking-tighter leading-[0.9]">
                            The <span className="text-accent italic">Hardware</span><br />Arsenal
                        </h2>
                        <p className="text-lg text-white/55 font-bold max-w-xl">
                            Build on elite tools from Day 1. No simulators. No theory-only. Real infrastructure.
                        </p>
                        <div className="h-1 w-16 rounded-full bg-accent" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {labs.map((lab, i) => (
                            <motion.div
                                key={lab.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group overflow-hidden rounded-3xl border border-white/8 hover:border-accent/35 transition-all duration-500 flex flex-col"
                                style={{ backgroundColor: 'rgba(24,24,24,0.6)', backdropFilter: 'blur(10px)' }}
                            >
                                <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                                    <Image src={lab.image} alt={lab.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(91,29,214,0.6), transparent)' }} />
                                </div>
                                <div className="p-6 space-y-3 flex-1">
                                    <h4 className="text-base font-orbitron font-bold text-accent uppercase tracking-wide">{lab.name}</h4>
                                    <p className="text-[11px] font-orbitron font-black text-white/40 uppercase tracking-wider leading-snug">{lab.tag}</p>
                                    <p className="text-xs text-white/50 leading-relaxed group-hover:text-white/75 transition-colors font-medium">{lab.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SELECTION PROTOCOL ───────────────────────────────────── */}
            <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #111111 0%, #1a0a3d 60%, #2d0e8a 100%)' }}>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple/60 to-transparent" />
                <div className="container-boxed relative z-10 space-y-14">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl space-y-5"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5">
                            <span className="text-sm">⚔️</span>
                            <span className="text-[10px] font-orbitron font-black text-white/60 tracking-[0.35em] uppercase">The Builder's Draft</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white uppercase tracking-tighter leading-[0.9]">
                            The Selection<br /><span className="text-accent italic">Protocol</span>
                        </h2>
                        <p className="text-lg text-white/60 font-medium leading-relaxed">
                            We don't care how well you memorize. We care what you can build. You cannot just pay a fee to get into AESTR.
                            We don't have an admissions office; we have a <strong className="text-white">Technical Draft.</strong>
                        </p>
                        <p className="text-base text-white/45 font-medium leading-relaxed">
                            Future India will not be built by crammers. It will be built by creators with dirt on their hands and code on their screens.
                        </p>
                    </motion.div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectionSteps.map((s, i) => (
                            <motion.div
                                key={s.num}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="relative rounded-3xl p-8 space-y-5 border border-white/10 hover:border-accent/40 transition-all duration-500 overflow-hidden group"
                                style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}
                            >
                                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-[40px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: 'rgba(216,246,2,0.25)' }} />
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl border border-accent/30 flex items-center justify-center text-xl font-orbitron font-black text-accent bg-accent/10 shrink-0">
                                        {s.num}
                                    </div>
                                    <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-accent transition-colors leading-snug">{s.title}</h3>
                                </div>
                                <p className="text-base text-white/55 leading-relaxed font-medium pl-16">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Minimum to Enter */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-3xl border border-accent/20 overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, rgba(216,246,2,0.06) 0%, rgba(91,29,214,0.15) 100%)' }}
                    >
                        <div className="p-8 md:p-12 space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="h-px flex-1 bg-accent/20" />
                                <h3 className="text-xl font-orbitron font-black text-white uppercase tracking-widest whitespace-nowrap">Minimum to Enter</h3>
                                <div className="h-px flex-1 bg-accent/20" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {minimumSteps.map((item, i) => (
                                    <div key={item.step} className="flex items-start gap-4 p-5 rounded-2xl border border-white/8 hover:border-accent/25 transition-all" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}>
                                        <div className="w-8 h-8 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                                            <span className="text-xs font-orbitron font-black text-accent">{i + 1}</span>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-orbitron font-black text-accent uppercase tracking-wider">{item.step}</p>
                                            <p className="text-sm text-white/60 font-medium leading-snug">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── FINAL CTA ────────────────────────────────────────────── */}
            <section className="relative overflow-hidden" style={{ backgroundColor: '#5B1DD6' }}>
                <div className="absolute inset-0">
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #3a0fa8 0%, #5B1DD6 100%)' }} />
                    <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full blur-[200px] pointer-events-none" style={{ backgroundColor: 'rgba(216,246,2,0.15)' }} />
                </div>
                <div className="container-boxed relative z-10 py-24">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black uppercase tracking-tighter leading-[0.85]">
                                <span className="text-accent">STOP</span> STUDYING<br />
                                <span className="text-accent">START</span> BUILDING
                            </h2>
                            <div className="flex flex-wrap gap-6 items-center">
                                <button className="btn-aestr !px-14 !py-6 group">
                                    APPLY NOW
                                    <span className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                                </button>
                                <div className="space-y-1">
                                    <p className="text-xs font-orbitron font-black text-white/50 uppercase tracking-wider">aestr.gyanvihar.org</p>
                                    <p className="text-xs font-orbitron font-black text-white/50 uppercase tracking-wider">Toll-Free: 1800 309 4545</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="shrink-0"
                        >
                            <motion.div
                                animate={{ y: [0, -14, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="relative w-60 h-60 md:w-80 md:h-80"
                            >
                                <div className="absolute inset-0 rounded-full blur-[80px] opacity-30" style={{ backgroundColor: '#D8F602' }} />
                                <Image src="/Other/Robo.webp" alt="AESTR AI Robot" fill className="object-contain brightness-110" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ───────────────────────────────────────────────── */}
            <footer className="py-12 border-t border-white/5 bg-background">
                <div className="container-boxed flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center overflow-hidden relative">
                            <Image src="/Herosection/aestr-logo.svg" alt="Aestr" fill className="object-contain p-1" />
                        </div>
                        <p className="text-[10px] font-orbitron font-black tracking-[0.4em] uppercase">AESTR · B.Tech AI Shodh AI © 2026</p>
                    </div>
                    <div className="flex gap-10">
                        {['Privacy', 'Terms', 'Strategic Partners'].map(item => (
                            <Link key={item} href="/" className="text-[9px] font-orbitron font-black text-white hover:text-accent transition-colors uppercase tracking-[0.3em]">{item}</Link>
                        ))}
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default BtechAIShodhAI;
