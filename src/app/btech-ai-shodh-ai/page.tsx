'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Reusable Lab Data (Same as home page)
const labs = [
    {
        name: 'Apple Ecosystem',
        image: '/Other/lab-5.webp',
        description: 'Master the art of building world-class applications within the premium Apple environment. From deep dives into Swift and SwiftUI to exploring advanced architectures for macOS, iOS, and the revolutionary VisionOS.',
        icon: 'apple'
    },
    {
        name: 'NVIDIA Pipeline',
        image: '/Other/lab-4.webp',
        description: 'Harness the massive power of GPU-accelerated computing in our high-performance NVIDIA lab. Master CUDA programming, TensorRT optimization, and the foundational software stacks.',
        icon: 'nvidia'
    },
    {
        name: 'RISC-V Lab',
        image: '/Other/lab-3.webp',
        description: 'Take your place at the forefront of India\'s semiconductor sovereignty in our pioneering RISC-V hardware lab. Students engage in the complete lifecycle of chip design.',
        icon: 'chip'
    },
    {
        name: 'Embodied Brain Lab',
        image: '/Other/lab-2.webp',
        description: 'Experience the convergence of neural intelligence and physical machines in our robotics and autonomous systems lab using NVIDIA Jetson platform and ROS.',
        icon: 'robotics'
    }
];

const BtechAIShodhAI = () => {
    return (
        <main className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-accent selection:text-black">

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Other/building-global.jpg" // Using an existing college building image
                        alt="AESTR Campus"
                        fill
                        className="object-cover brightness-[0.4]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
                </div>

                <div className="container-boxed relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl space-y-8"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-orbitron font-black tracking-[0.3em] uppercase">
                            AESTR B.TECH PRO
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black leading-[0.9] uppercase tracking-tighter">
                            This Isn't College. <br />
                            <span className="text-accent italic">It's A 4-Year Internship.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed font-bold">
                            A unique industry-embedded degree designed for the top 1% who want to build the future.
                            Engineered by the architects of the future.
                        </p>
                        <div className="pt-6">
                            <button className="btn-aestr !px-12 !py-5">
                                APPLY FOR 2026 INTAKE
                                <span className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Aesthetic bottom shadow for transition */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
            </section>

            {/* Section 1: The Crisis */}
            <section className="py-24 relative overflow-hidden">
                <div className="container-boxed relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center text-3xl font-orbitron font-black text-accent bg-accent/5">
                                    1
                                </div>
                                <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white leading-tight uppercase tracking-tighter">
                                    The Crisis Of <br /><span className="text-accent">Indian Engineering</span>
                                </h2>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-orbitron font-bold text-white/90">A Generation of Unemployable Talent</h3>
                                <p className="text-lg text-white/60 leading-relaxed font-medium">
                                    Traditional degrees are failing. Only 7% of Indian engineers are truly employable because they are taught theory by people who never worked in the industry.
                                </p>
                                <p className="text-lg text-white/60 leading-relaxed font-medium">
                                    At AESTR, we are bridging this massive gap by placing you inside a high-performance engineering lab from Day 1. You don't just study for exams; you build software that solves world-class problems.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            <div className="glass p-1 rounded-3xl overflow-hidden aspect-[4/5] relative group scale-95 translate-y-4">
                                <Image
                                    src="/Other/patent-ai.png" // Placeholder for newspaper clipping
                                    alt="Crisis Data 1"
                                    fill
                                    className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-xs font-orbitron font-bold text-accent">ARCHIVE VOL: 01</p>
                                </div>
                            </div>
                            <div className="glass p-1 rounded-3xl overflow-hidden aspect-[4/5] relative group">
                                <Image
                                    src="/Other/AI-faculty.png" // Placeholder for newspaper clipping
                                    alt="Crisis Data 2"
                                    fill
                                    className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-xs font-orbitron font-bold text-accent">ARCHIVE VOL: 02</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: Introducing */}
            <section className="py-24 relative bg-background-alt/30 overflow-hidden">
                <div className="container-boxed relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 space-y-8"
                        >
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center text-3xl font-orbitron font-black text-accent bg-accent/5">
                                    2
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black text-white leading-tight uppercase tracking-tighter">
                                    Introducing <br />
                                    <span className="text-accent">B.TECH AESTR PRO :</span>
                                </h2>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-orbitron font-bold text-white/90">Built by the industry, for the industry</h3>
                                <p className="text-lg text-white/60 leading-relaxed font-semibold">
                                    B.Tech AESTR PRO is the most advanced tech degree in the world. Engineered in collaboration with leading US-based tech firms, this program bypasses traditional academic gatekeeping.
                                </p>
                                <p className="text-lg text-white/60 leading-relaxed font-semibold">
                                    We focus on producing senior AI engineers ready to lead global teams on Day 1. Our methodology ensures you're already 4 years ahead of any traditional graduate.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 relative group"
                        >
                            <div className="aspect-[4/3] bg-black/40 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl relative">
                                <Image
                                    src="/Other/lab-1.webp"
                                    alt="BTech Pro Environment"
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/20 blur-[80px] rounded-full pointer-events-none" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: Heart of AESTR PRO (Labs) */}
            <section className="py-24 relative overflow-hidden">
                <div className="container-boxed relative z-10">
                    <div className="flex flex-col items-center text-center mb-20 space-y-6">
                        <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center text-3xl font-orbitron font-black text-accent bg-accent/5">
                            3
                        </div>
                        <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white uppercase tracking-tighter">
                            THE <span className="text-accent italic">HEART</span> OF AESTR PRO:
                        </h2>
                        <p className="text-xl text-white/60 max-w-2xl font-bold">
                            Our innovation labs are where the magic happens.
                            India's first and only university based on industry labs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {labs.map((lab, i) => (
                            <motion.div
                                key={lab.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass group hover:bg-accent/5 hover:border-accent/40 transition-all duration-500 overflow-hidden"
                            >
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <Image
                                        src={lab.image}
                                        alt={lab.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                </div>
                                <div className="p-8 space-y-4">
                                    <h4 className="text-xl font-orbitron font-bold text-accent uppercase tracking-wider">{lab.name}</h4>
                                    <p className="text-sm text-white/50 leading-relaxed line-clamp-3 group-hover:text-white/80 transition-colors">
                                        {lab.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: The Career Arc */}
            <section className="py-24 relative bg-background-alt overflow-hidden">
                <div className="container-boxed relative z-10">
                    <div className="flex flex-col items-start mb-20 space-y-6">
                        <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center text-3xl font-orbitron font-black text-accent bg-accent/5">
                            4
                        </div>
                        <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white leading-[0.9] uppercase tracking-tighter">
                            The Job We're <br /><span className="text-accent">Training You For.</span>
                        </h2>
                        <p className="text-xl text-white/60 font-bold">Transforming Learners into Architects of Tomorrow.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {[
                            { title: 'The Architect', desc: 'Designing complex systems and scalable AI frameworks that power global enterprises.', icon: '📐' },
                            { title: 'The Builder', desc: 'Coding high-performance applications with precision, efficiency, and industrial standards.', icon: '🛠️' },
                            { title: 'The Consultant', desc: 'Advising global industries on AI adoption, digital transformation, and future-readiness.', icon: '💡' },
                            { title: 'The Maverick', desc: 'Innovating beyond limits, building patents, and defining new paradigms in tech.', icon: '🚀' }
                        ].map((role, i) => (
                            <motion.div
                                key={role.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass p-10 flex gap-8 group hover:border-accent/40 transition-all duration-500"
                            >
                                <div className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-500 shrink-0">
                                    {role.icon}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-orbitron font-black text-white group-hover:text-accent transition-colors">
                                        {role.title}
                                    </h3>
                                    <p className="text-white/60 font-medium leading-relaxed group-hover:text-white transition-colors">
                                        {role.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: The Outcome */}
            <section className="py-24 relative overflow-hidden">
                <div className="container-boxed relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 space-y-8"
                        >
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center text-3xl font-orbitron font-black text-accent bg-accent/5">
                                    5
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-7xl font-orbitron font-black text-white uppercase tracking-tighter">
                                    Graduate As A <br /><span className="text-accent italic">Senior Engineer.</span>
                                </h2>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-orbitron font-bold text-white/90">Ready for the world on Day 1</h3>
                                <p className="text-lg text-white/60 leading-relaxed font-semibold">
                                    At AESTR Pro, you don't just leave with a degree; you leave with a portfolio of real-world impact. Our graduates are highly sought after by top-tier tech firms because they have already spent 4 years working as engineers.
                                </p>
                                <div className="grid grid-cols-2 gap-8 pt-4">
                                    <div className="space-y-2">
                                        <p className="text-3xl font-orbitron font-black text-accent">100%</p>
                                        <p className="text-xs uppercase tracking-widest text-white/40 font-bold">Employability Index</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-3xl font-orbitron font-black text-accent">Senior</p>
                                        <p className="text-xs uppercase tracking-widest text-white/40 font-bold">Role Preparedness</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 relative group"
                        >
                            <div className="aspect-[4/3] bg-black/40 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl relative">
                                <Image
                                    src="/Other/robot-class.jpg"
                                    alt="Graduation Success"
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-10 left-10 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center bg-accent/10">
                                        <span className="text-accent font-black">★</span>
                                    </div>
                                    <p className="text-xs font-orbitron font-black text-white tracking-widest bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">INDUSTRY RECOGNIZED</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section: Degree Structure */}
            <section className="py-24 relative bg-background-alt/30 border-y border-white/5 overflow-hidden">
                <div className="container-boxed relative z-10 text-center space-y-16">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-tighter">Tailor Your Path</h2>
                        <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Majors */}
                        <div className="glass p-10 space-y-8 flex flex-col items-center">
                            <h3 className="text-lg font-orbitron font-black text-accent uppercase tracking-[0.2em] border-b border-accent/20 pb-4 w-full">B.Tech Majors</h3>
                            <div className="space-y-4 w-full">
                                {['B.Tech in Computer Science & AI', 'Data Science', 'Cloud Engineering', 'Software Engineering', 'Cyber Security'].map(item => (
                                    <div key={item} className="bg-white/5 p-4 rounded-xl text-sm font-bold border border-white/5 text-white/70 hover:bg-accent/10 hover:text-accent transition-all cursor-default">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Minors */}
                        <div className="glass p-10 space-y-8 flex flex-col items-center">
                            <h3 className="text-lg font-orbitron font-black text-accent uppercase tracking-[0.2em] border-b border-accent/20 pb-4 w-full">AESTR Specialisations</h3>
                            <div className="flex flex-wrap gap-2.5 justify-center">
                                {['Robotics', 'Bio-Informatics', 'Manufacturing', 'Design', 'Fintech', 'Nanotechnology', 'Smart Cities', 'Semiconductor', 'Geoinformatics'].map(item => (
                                    <div key={item} className="bg-white/5 px-3 py-2 rounded-lg text-[11px] font-bold border border-white/5 text-white/70 hover:bg-black hover:text-accent transition-all cursor-default uppercase">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Labs */}
                        <div className="glass p-10 space-y-8 flex flex-col items-center">
                            <h3 className="text-lg font-orbitron font-black text-accent uppercase tracking-[0.2em] border-b border-accent/20 pb-4 w-full">Innovation Labs</h3>
                            <div className="space-y-4 w-full">
                                {['Apple Ecosystem', 'NVIDIA Pipeline', 'RISC-V Lab', 'Embodied Brain Lab'].map(item => (
                                    <div key={item} className="bg-white/5 p-4 rounded-xl text-sm font-bold border border-white/5 text-white/70 hover:bg-accent/10 hover:text-accent transition-all cursor-default flex justify-between items-center group">
                                        {item}
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-40 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="pt-10 space-y-12">
                        <div className="relative inline-block">
                            <svg className="w-full max-w-4xl h-24 hidden md:block opacity-30" viewBox="0 0 1000 100">
                                <path d="M166 0 V40 H834 V0" stroke="var(--accent)" strokeWidth="2" fill="none" />
                                <path d="M500 40 V100" stroke="var(--accent)" strokeWidth="2" fill="none" />
                                <circle cx="500" cy="100" r="5" fill="var(--accent)" />
                            </svg>
                            <div className="md:hidden w-px h-16 bg-accent mx-auto opacity-30" />
                        </div>

                        <Link
                            href="/"
                            className="text-3xl md:text-5xl lg:text-7xl font-orbitron font-black text-white hover:text-accent transition-all border-b-[6px] border-accent pb-4 uppercase tracking-tighter"
                        >
                            Make Your Own Degree By Yourself
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 relative bg-background overflow-hidden">
                <div className="container-boxed relative z-10">
                    <div className="glass p-12 md:p-20 rounded-[4rem] relative overflow-hidden group">
                        {/* Aesthetic Glows */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple/10 blur-[120px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

                        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                            <div className="lg:w-1/2 space-y-10 text-center lg:text-left">
                                <h2 className="text-5xl md:text-7xl font-orbitron font-black text-white leading-[0.85] uppercase tracking-tighter">
                                    ONLY AT AESTR <br />
                                    <span className="text-accent italic">Future Safe Professions</span>
                                </h2>
                                <p className="text-xl text-white/50 leading-relaxed font-bold">
                                    We believe only those who build the future can truly teach it. Start your journey with the pioneers.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-8 pt-6">
                                    <button className="btn-aestr !px-16 !py-6">
                                        JOIN THE 1%
                                        <span className="ml-3 group-hover:translate-x-2 transition-transform duration-500">→</span>
                                    </button>
                                    <span className="text-[10px] font-orbitron font-black text-white/20 tracking-[0.5em] uppercase">Limited Intake for 2026</span>
                                </div>
                            </div>

                            <div className="lg:w-1/2 relative flex justify-center">
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
                                >
                                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-[80px] opacity-20" />
                                    <Image
                                        src="/Other/Robo.webp"
                                        alt="AESTR AI Safety Robot"
                                        fill
                                        className="object-contain filter brightness-110"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Footer for Landing Page */}
            <footer className="py-12 border-t border-white/5 bg-background">
                <div className="container-boxed flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                            <Image src="/Herosection/aestr-logo.svg" alt="Aestr" width={16} height={16} />
                        </div>
                        <p className="text-[10px] font-orbitron font-black tracking-[0.4em] uppercase">AESTR PRO SPECIALIZATION © 2026</p>
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
