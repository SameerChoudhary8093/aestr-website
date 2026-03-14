'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [currentImage, setCurrentImage] = useState(0);
    const heroImages = ['/Other/hero-campus.png', '/Other/hero-lab.png'];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-accent selection:text-black">
            
            {/* Hero Section */}
            <section className="relative w-full h-[884px] overflow-hidden flex items-center">
                {/* Background Slider */}
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImage}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image 
                                src={heroImages[currentImage]}
                                alt="AESTR Environment"
                                fill
                                className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>
                    
                    {/* Dark Gradient Overlay consistent with user's code */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />
                </div>

                {/* Content Container Integrated with container-boxed for consistency */}
                <div className="container-boxed relative z-20 flex flex-col justify-end h-full pb-24 md:pb-32">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="max-w-4xl space-y-6"
                    >
                        <h1 className="text-white text-[55px] font-orbitron font-bold max-w-[900px] leading-[65px] tracking-tight">
                            This Isn't College. It's A <br />
                            4-Year Internship
                        </h1>
                        <p className="text-white subheading-font max-w-2xl opacity-100 leading-relaxed">
                            At AESTR Pro, every student becomes an intern from day one. Learn by doing. Lead by innovating.
                        </p>
                        
                        <div className="pt-4">
                            <button className="btn-aestr !px-12 !py-5">
                                APPLY FOR 2026 INTAKE
                                <span className="ml-3 transition-transform group-hover:translate-x-1 duration-300">↗</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>            {/* Section 1: The Crisis */}
            <section className="py-24 relative overflow-hidden bg-background text-foreground">
                {/* Subtle Background 'A' or shapes */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-[0.03] flex items-center justify-center">
                    <span className="text-[60rem] font-orbitron font-black select-none">A</span>
                </div>

                <div className="container-boxed relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-6">
                                {/* Numbered Circle - Dark Theme */}
                                <div className="w-20 h-20 rounded-full bg-purple/20 backdrop-blur-sm flex items-center justify-center text-4xl font-orbitron font-bold text-purple shadow-lg border border-purple/30">
                                    1
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-foreground leading-tight tracking-tight">
                                    The Crisis Of Indian Engineering
                                </h2>
                                <h3 className="subheading-font italic text-foreground/80">
                                    A Generation of "Un-hirable" Talent
                                </h3>
                                <div className="space-y-6 text-lg text-foreground/70 leading-relaxed font-medium">
                                    <p>
                                        For too long, the story of engineering in India has been a paradox. We produce millions of engineers, yet industries lament a scarcity of "hirable" talent.
                                    </p>
                                    <p>
                                        The truth is, our traditional engineering education system, built for a bygone era, has created a generation of graduates who are armed with theoretical knowledge but lack the practical skills to make a real-world impact.
                                    </p>
                                    <p>
                                        They are often unequipped to tackle the complex challenges of the modern world, leaving them struggling to find their place in a competitive global landscape. This disconnect between what is taught and what is needed has led to a crisis of confidence, not just in our engineers, but in our ability to innovate and build a better future for India.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            <div className="bg-[#181818] p-2 rounded-xl shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500 border border-white/5">
                                <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
                                    <Image 
                                        src="/Other/patent-ai.png" 
                                        alt="IIT Placement News 1"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                             <div className="bg-[#181818] p-2 rounded-xl shadow-2xl rotate-[2deg] hover:rotate-0 transition-transform duration-500 border border-white/5 sm:translate-y-8">
                                <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
                                    <Image 
                                        src="/Other/AI-faculty.png" 
                                        alt="IIT Placement News 2"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: Introducing */}
            <section className="py-24 relative overflow-hidden bg-background-alt">
                {/* Blurred Background Elements */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#5B1DD6] rounded-full blur-[120px] opacity-20" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#D7F601] rounded-full blur-[120px] opacity-10" />
                    <Image 
                        src="/Other/lab-2.webp"
                        alt="Background"
                        fill
                        className="object-cover opacity-20 blur-sm"
                    />
                </div>

                <div className="container-boxed relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-6">
                                {/* Numbered Circle - Purple */}
                                <div className="w-20 h-20 rounded-full bg-[#E8E2FF]/20 backdrop-blur-md flex items-center justify-center text-4xl font-orbitron font-bold text-white border border-white/10 shadow-xl">
                                    2
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-5xl font-orbitron font-bold text-white leading-tight tracking-tight">
                                    Introducing B.TECH AESTR PRO:
                                </h2>
                                <h3 className="subheading-font italic text-white/90">
                                    Your 4-Year Internship Starts Now
                                </h3>
                                <div className="space-y-6 text-lg text-white/80 leading-relaxed font-medium">
                                    <p>
                                        AESTR PRO eliminates the gap between education and industry. From day one, you are a full-time engineering intern at our AI research partner, Shodh AI.
                                    </p>
                                    <p>
                                        Your schedule is 9-to-5. Your mentors are senior engineers. Your projects are real.
                                    </p>
                                    <p>
                                        Your deliverable in four years? A B.Tech. degree and a portfolio that proves you are already a Senior Engineer, ready to lead.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative flex justify-center lg:justify-end"
                        >
                            {/* Student Image with Arch */}
                            <div className="relative w-full max-w-[450px]">
                                {/* Yellow Arch Frame */}
                                <div className="absolute inset-[-15px] border-4 border-accent rounded-t-full pointer-events-none z-10 opacity-60" />
                                <div className="relative aspect-[4/5] rounded-t-full overflow-hidden border-4 border-white/10 shadow-2xl">
                                    <Image 
                                        src="/Other/Bootcamp.webp" 
                                        alt="Student Success"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {/* Floating Particles/Dots Effect like in image */}
                                <div className="absolute top-10 right-10 w-20 h-20 bg-white/20 rounded-full blur-2xl animate-pulse" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: Heart of AESTR PRO (Labs) */}
            <section className="py-24 relative overflow-hidden bg-background text-foreground">
                <div className="container-boxed relative z-10">
                    <div className="flex flex-col items-start mb-16 space-y-6">
                        {/* Numbered Circle - Dark Theme */}
                        <div className="w-20 h-20 rounded-full bg-purple/20 backdrop-blur-sm flex items-center justify-center text-4xl font-orbitron font-bold text-purple shadow-lg border border-purple/30">
                            3
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold text-foreground leading-none tracking-tight">
                                B.Tech AI with <br />
                                <span className="text-accent">Shodh AI</span>
                            </h1>
                            <h3 className="subheading-font italic text-foreground/80">
                                Our Innovation Labs, Powered by Shodh AI
                            </h3>
                            <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed font-medium">
                                The engine of the AESTR PRO experience is our state-of-the-art Innovation Labs, run by our industry partner, Shodh AI.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
                        {labs.map((lab, i) => (
                            <motion.div
                                key={lab.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="aspect-[16/10] relative overflow-hidden rounded-xl mb-6 shadow-xl border border-black/5">
                                    <Image
                                        src={lab.image}
                                        alt={lab.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <h2 className="text-2xl md:text-4xl font-orbitron font-bold text-foreground tracking-tight">{lab.name}</h2>
                                    <h3 className="subheading-font italic text-foreground/60">{lab.tag}</h3>
                                    <p className="text-sm text-foreground/60 leading-relaxed font-medium">
                                        {lab.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Descriptive Boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-background-alt p-8 md:p-10 rounded-2xl border border-white/5"
                        >
                            <p className="text-base text-foreground/70 leading-relaxed font-medium">
                                These are not your typical college labs. They are dynamic, professional environments where you will spend your four years as an intern, working on cutting-edge projects that are shaping the future of technology.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-background-alt p-8 md:p-10 rounded-2xl border border-white/5"
                        >
                            <p className="text-base text-foreground/70 leading-relaxed font-medium">
                                Each lab is a hub of innovation, led by senior engineers and researchers from Shodh AI and other leading tech companies. Here, you'll get your hands dirty, experiment with the latest technologies, and contribute to real-world solutions that have the potential to make a global impact.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 4: The Job We're Training You For */}
            <section className="py-24 relative overflow-hidden bg-background-alt text-foreground">
                <div className="container-boxed relative z-10">
                    <div className="flex flex-col items-start mb-16 space-y-6">
                        {/* Numbered Circle - Dark Theme */}
                        <div className="w-20 h-20 rounded-full bg-purple/20 backdrop-blur-sm flex items-center justify-center text-4xl font-orbitron font-bold text-purple shadow-lg border border-purple/30">
                            4
                        </div>
                        <div className="space-y-4 max-w-4xl">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-foreground leading-tight tracking-tight">
                                The Job We're Training You For
                            </h2>
                            <h3 className="subheading-font italic text-foreground/80">
                                From Intern to Innovator
                            </h3>
                            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed font-medium">
                                <p>
                                    The entire AESTR PRO curriculum is reverse-engineered from the demands of elite AI research roles in the industry. We prepare you for the job of tomorrow by giving you that job today. A day in the life of an AESTR PRO student is the life of a Machine Learning Engineer at Shodh AI, our AI Research Division.
                                </p>
                                <p className="font-bold text-accent text-xl">
                                    Your Future Job Description: Machine Learning Engineer, Applied AI Research
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mission Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-1 border-[1.5px] border-accent/20 rounded-lg group hover:border-accent/50 transition-colors"
                        >
                            <div className="h-full p-8 border-[1.5px] border-accent/20 rounded-sm space-y-4 bg-background">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-outfit font-bold uppercase tracking-wide text-foreground">The Mission:</h4>
                                <p className="text-foreground/70 leading-relaxed">
                                    Bridge the chasm between foundational research and real-world impact. You will be part of the engine that drives the company's expansion into the next frontier of artificial intelligence.
                                </p>
                            </div>
                        </motion.div>

                        {/* Role Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-1 border-[1.5px] border-accent/20 rounded-lg group hover:border-accent/50 transition-colors"
                        >
                            <div className="h-full p-8 border-[1.5px] border-accent/20 rounded-sm space-y-4 bg-background">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-outfit font-bold uppercase tracking-wide text-foreground">The Role:</h4>
                                <p className="text-foreground/70 leading-relaxed">
                                    A unique blend of scientist, inventor, and engineer where you will architect the next generation of intelligent systems from the ground up.
                                </p>
                            </div>
                        </motion.div>

                        {/* Domains Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-1 border-[1.5px] border-accent/20 rounded-lg group hover:border-accent/50 transition-colors"
                        >
                            <div className="h-full p-8 border-[1.5px] border-accent/20 rounded-sm space-y-4 bg-background">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.996 1.389l-.498 1.494a2 2 0 01-1.125 1.258l-1.509.604a2 2 0 01-1.442 0l-1.509-.604a2 2 0 01-1.125-1.258l-.498-1.494a2 2 0 00-1.996-1.389l-2.387.477a2 2 0 00-1.022.547l-1.162 1.162a2 2 0 01-2.828 0l-1.162-1.162a2 2 0 010-2.828l1.162-1.162a2 2 0 00.547-1.022l.477-2.387a2 2 0 00-1.389-1.996l-1.494-.498a2 2 0 01-1.258-1.125l-.604-1.509a2 2 0 010-1.442l.604-1.509a2 2 0 011.258-1.125l1.494-.498a2 2 0 001.389-1.996l-.477-2.387a2 2 0 00-.547-1.022l-1.162-1.162a2 2 0 010-2.828l1.162-1.162a2 2 0 012.828 0l1.162 1.162a2 2 0 001.022.547l2.387.477a2 2 0 001.996-1.389l.498-1.494a2 2 0 011.125-1.258l1.509-.604a2 2 0 011.442 0l1.509.604a2 2 0 011.125 1.258l.498 1.494a2 2 0 001.996 1.389l2.387-.477a2 2 0 001.022-.547l1.162-1.162a2 2 0 012.828 0l1.162 1.162a2 2 0 010 2.828l-1.162 1.162a2 2 0 00-.547 1.022l-.477 2.387a2 2 0 001.389 1.996l1.494.498a2 2 0 011.258 1.125l.604 1.509a2 2 0 010 1.442l-.604-1.509a2 2 0 01-1.258 1.125l-1.494.498a2 2 0 00-1.389 1.996l.477 2.387a2 2 0 00.547 1.022l1.162 1.162a2 2 0 010 2.828l-1.162 1.162a2 2 0 01-2.828 0l-1.162-1.162z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-outfit font-bold uppercase tracking-wide text-foreground">The Core Domains:</h4>
                                <ul className="space-y-2 text-foreground/70 list-disc pl-5">
                                    <li><span className="font-bold text-accent">Robotics & Embodied AI:</span> Build intelligent agents that can perceive, reason, and physically interact with the world.</li>
                                    <li><span className="font-bold text-accent">Large Language Models & Agentic Systems:</span> Architect autonomous agents and sophisticated applications that leverage the power of LLMs.</li>
                                    <li><span className="font-bold text-accent">Custom Silicon:</span> Design the next generation of chipsets purpose-built for AI workloads.</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Mindset Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-1 border-[1.5px] border-accent/20 rounded-lg group hover:border-accent/50 transition-colors"
                        >
                            <div className="h-full p-8 border-[1.5px] border-accent/20 rounded-sm space-y-4 bg-background">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-outfit font-bold uppercase tracking-wide text-foreground">The Mindset:</h4>
                                <p className="text-foreground/70 leading-relaxed">
                                    We are looking for those with a "builder's mindset," driven by a deep curiosity to create and implement new things. Your personal research interests are not just welcome; they are a critical part of our strategy.
                                </p>
                            </div>
                        </motion.div>
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

            {/* Section 5: The Outcome */}
            <section className="py-24 relative overflow-hidden bg-background text-foreground">
                <div className="container-boxed relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-6">
                                {/* Numbered Circle - Dark Theme */}
                                <div className="w-20 h-20 rounded-full bg-purple/20 backdrop-blur-sm flex items-center justify-center text-4xl font-orbitron font-bold text-purple shadow-lg border border-purple/30">
                                    5
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-5xl font-orbitron font-bold text-foreground leading-tight tracking-tight">
                                    Graduate As A Senior Engineer
                                </h2>
                                <h3 className="subheading-font italic text-foreground/80">
                                    Ready to Lead the Future
                                </h3>
                                <div className="space-y-6 text-lg text-foreground/70 leading-relaxed font-medium">
                                    <p>
                                        The outcome of the AESTR PRO program is a new breed of engineer – an engineer who is not just "hirable", but is a leader, an innovator, and a problem-solver. After four years of intensive, hands-on experience in our Innovation Labs, you will graduate as a senior engineer, with a portfolio of real-world projects and a deep understanding of the latest technologies.
                                    </p>
                                    <p>
                                        You will be equipped with the skills, the confidence, and the experience to make an immediate impact in any organization you join. You will be a part of a new generation of Indian engineers who are not just ready for the future, but are actively shaping it.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            <div className="aspect-[4/3] rounded-sm overflow-hidden border border-black/10 shadow-2xl relative">
                                <Image
                                    src="/Other/robot-class.jpg"
                                    alt="Graduate Success"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative accent */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#5B1DD6]/10 rounded-full blur-2xl pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section: Degree Structure */}
            <section className="py-24 relative bg-background overflow-hidden">
                <div className="container-boxed relative z-10 text-center space-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Majors */}
                        <div className="bg-purple/10 backdrop-blur-md p-10 rounded-xl space-y-8 flex flex-col items-center border border-purple/20 shadow-2xl">
                            <h3 className="text-xl font-outfit font-bold text-foreground">B. Tech. Majors:</h3>
                            <div className="space-y-3 w-full">
                                {[
                                    'B. Tech. Artificial Intelligence & Machine Learning',
                                    'B. Tech. Data Science',
                                    'B. Tech. Cloud Engineering',
                                    'B. Tech. Software Engineering',
                                    'B. Tech. Cyber Security'
                                ].map(item => (
                                    <div key={item} className="bg-background-alt px-4 py-2.5 rounded-lg text-sm font-bold text-foreground/80 border border-white/5 shadow-inner transition-all text-left hover:border-accent/30">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Minors */}
                        <div className="bg-purple/10 backdrop-blur-md p-10 rounded-xl space-y-8 flex flex-col items-center border border-purple/20 shadow-2xl">
                            <h3 className="text-xl font-outfit font-bold text-foreground">With one Minor:</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {[
                                    'Robotics', 'Bio-Informatics',
                                    'Industry & Manufacturing',
                                    'Design', 'Fintech',
                                    'Nanotechnology', 'Smart Cities',
                                    'Chip & Semiconductor', 'Geoinformatics'
                                ].map(item => (
                                    <div key={item} className="bg-background-alt px-3 py-2 rounded-lg text-xs font-bold text-foreground/80 border border-white/5 shadow-inner transition-all hover:border-accent/30">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Labs */}
                        <div className="bg-purple/10 backdrop-blur-md p-10 rounded-xl space-y-8 flex flex-col items-center border border-purple/20 shadow-2xl">
                            <h3 className="text-xl font-outfit font-bold text-foreground">Labs:</h3>
                            <div className="space-y-3 w-full">
                                {[
                                    'Foundation Model Lab',
                                    'Embodied Brain Lab',
                                    'Soft "Brain" Lab',
                                    'RISC-V Systems Lab',
                                    'Augmented Human Lab'
                                ].map(item => (
                                    <div key={item} className="bg-background-alt px-4 py-2.5 rounded-lg text-sm font-bold text-foreground/80 border border-white/5 shadow-inner transition-all text-left hover:border-accent/30">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="pt-10 flex flex-col items-center space-y-8">
                        {/* Connector lines */}
                        <div className="w-full max-w-4xl relative h-20 hidden md:block">
                            <svg className="w-full h-full" viewBox="0 0 1000 100">
                                <path d="M166 20 V50 H834 V20" stroke="currentColor" className="text-foreground" strokeWidth="2" fill="none" opacity="0.3" />
                                <path d="M500 50 V100" stroke="currentColor" className="text-foreground" strokeWidth="2" fill="none" opacity="0.3" />
                                <circle cx="166" cy="20" r="3" fill="currentColor" className="text-foreground" opacity="0.3" />
                                <circle cx="500" cy="20" r="3" fill="currentColor" className="text-foreground" opacity="0.3" />
                                <circle cx="834" cy="20" r="3" fill="currentColor" className="text-foreground" opacity="0.3" />
                                <circle cx="500" cy="100" r="3" fill="currentColor" className="text-foreground" opacity="0.3" />
                            </svg>
                        </div>
                        <div className="md:hidden w-px h-12 bg-foreground opacity-20" />

                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-orbitron font-bold text-foreground underline decoration-accent decoration-[3px] underline-offset-[12px]">
                            Make Your Own Degree By Yourself
                        </h2>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default BtechAIShodhAI;
