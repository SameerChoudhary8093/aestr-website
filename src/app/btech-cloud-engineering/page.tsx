'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const YouTubePlayer = ({ videoId, title }: { videoId: string; title: string }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    if (isPlaying) {
        return (
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        );
    }

    return (
        <div 
            className="relative w-full h-full cursor-pointer group"
            onClick={() => setIsPlaying(true)}
        >
            {/* Using a high-quality robot/cloud related placeholder if exact is not available */}
            <Image 
                src="/Other/lab-2.webp" 
                alt={title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Transparent Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-500">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 text-white ml-1"
                    >
                        <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

const BtechCloudEngineering = () => {
    return (
        <main className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-black">
            {/* Hero / Header Section */}
            <section className="pt-32 pb-24 relative overflow-hidden">
                {/* Decorative background effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4" />

                <div className="container-boxed relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-10"
                        >
                            <div className="space-y-6">
                                <h2 className="subheading-font font-medium text-foreground/80 tracking-wide">
                                    B.Tech Computer Science & Engineering with
                                </h2>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold text-foreground leading-none tracking-tight">
                                    Cloud <br />
                                    <span className="text-accent">Engineering</span>
                                </h1>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-lg bg-purple/20 flex items-center justify-center text-purple border border-purple/30 group-hover:bg-purple/30 transition-colors">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <p className="subheading-font font-semibold text-foreground/90">
                                        Eligibility: <span className="underline decoration-purple/50 decoration-2 underline-offset-4 decoration-dashed group-hover:decoration-solid transition-all cursor-help">SGVUEEE/JEE/CUET UG</span>
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent border border-accent/20 group-hover:bg-accent/30 transition-colors">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p className="subheading-font font-semibold text-foreground/90">
                                        Duration: 4 Years (8 Semesters)
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button className="btn-aestr !px-12 !py-5 text-base shadow-xl hover:shadow-accent/20">
                                    APPLY NOW
                                    <span className="ml-3 transition-transform group-hover:translate-x-2 duration-300">→</span>
                                </button>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, x: 30 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-3xl bg-background-alt group">
                                <YouTubePlayer 
                                    videoId="mA3Z2VYMNXo" 
                                    title="Cloud Engineering Overview"
                                />
                            </div>
                            {/* Decorative Frame Element */}
                            <div className="absolute -inset-4 border border-white/5 rounded-[2rem] -z-10 pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What is Section */}
            <section className="py-24 bg-background-alt/50 border-t border-white/5">
                <div className="container-boxed">
                    <div className="max-w-5xl space-y-12">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-foreground"
                        >
                            What is <span className="font-orbitron italic text-accent">Cloud Engineering?</span>
                        </motion.h2>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-background-alt p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden group"
                        >
                            {/* Inner Glow */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                            
                            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-medium">
                                <strong className="text-foreground">Cloud Engineering</strong> is the study of internet-based computing that helps students design, deploy, and manage scalable applications and systems without depending on local infrastructure, preparing them for modern tech careers. It allows <span className="text-foreground font-bold">on-demand access to computing resources</span> such as servers, storage, databases, software, and networks, without needing to own the hardware.
                            </p>

                            {/* Background Pattern */}
                            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:30px_30px] opacity-40 pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="container-boxed relative z-10">
                    <div className="space-y-16">
                        {/* Header */}
                        <div className="space-y-4">
                            <h2 className="text-5xl md:text-7xl font-orbitron font-bold text-foreground tracking-tight">Curriculum</h2>
                            <h3 className="subheading-font italic text-foreground/60">Curriculum Highlights</h3>
                        </div>

                        {/* Highlights Tags */}
                        <div className="flex flex-wrap gap-3 md:gap-4">
                            {[
                                "1. Cloud Platforms & Services",
                                "2. Cloud Architecture & Design",
                                "3. Security & Compliance",
                                "4. Cloud Cost Management",
                                "5. Cloud Networking",
                                "6. DevOps & Automation in Cloud",
                                "7. Capstone Projects & Industry Integration"
                            ].map((highlight, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="px-6 py-3 bg-purple/10 border border-purple/20 text-foreground/90 rounded-full subheading-font font-medium text-sm md:text-base hover:bg-purple/20 transition-all cursor-default"
                                >
                                    {highlight}
                                </motion.div>
                            ))}
                        </div>

                        {/* Programme Curriculum */}
                        <div className="pt-12 space-y-10">
                            <h3 className="text-3xl md:text-5xl font-orbitron font-bold text-foreground">
                                Programme <span className="subheading-font italic text-foreground/60">Curriculum</span>
                            </h3>

                            <div className="flex flex-col lg:flex-row gap-8 items-start">
                                {/* Year Tabs */}
                                <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-48 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                                    {["Year: I", "Year: II", "Year: III", "Year: IV"].map((year, idx) => (
                                        <button
                                            key={idx}
                                            className={`px-8 py-4 rounded-xl text-left subheading-font font-bold text-lg transition-all flex items-center justify-between min-w-[140px] lg:w-full border shadow-lg ${
                                                idx === 0 
                                                ? "bg-purple text-white border-purple/30" 
                                                : "bg-background-alt/50 text-foreground/40 border-white/5 hover:border-white/10"
                                            }`}
                                        >
                                            {year}
                                            <span className="hidden lg:block">→</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Semester Grid */}
                                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                    {/* Semester 1 */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-purple/5 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-purple/10 space-y-8"
                                    >
                                        <h4 className="text-2xl subheading-font font-bold text-foreground border-b border-purple/10 pb-4">Semester 1</h4>
                                        <ul className="space-y-4">
                                            {[
                                                "Professional Development & Innovation Mindset I",
                                                "Technical & Persuasive Communication Studio I",
                                                "Sustainable Systems & Environmental Intelligence",
                                                "Program Core",
                                                "Foundational Physics for Engineering Systems I",
                                                "Engineering Mathematics I: Calculus & Linear Systems",
                                                "Applied Physics & Experimental Design Lab I",
                                                "Innovation Catalyst I: Exploring Grand Challenges & Lab Immersion",
                                                "Foundation of AI & Data Engineering",
                                                "Ai and Data Engineering Studio 1",
                                                "Principles of Cyber Defence & Digital Trust",
                                                "Cyber Defence Operation Lab I"
                                            ].map((course, idx) => (
                                                <li key={idx} className="flex gap-3 text-foreground/70 text-sm md:text-base leading-snug">
                                                    <span className="text-purple mt-1 flex-shrink-0">•</span>
                                                    {course}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    {/* Semester 2 */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="bg-purple/5 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-purple/10 space-y-8"
                                    >
                                        <h4 className="text-2xl subheading-font font-bold text-foreground border-b border-purple/10 pb-4">Semester 2</h4>
                                        <ul className="space-y-4">
                                            {[
                                                "Professional Development & Innovation Mindset II",
                                                "Advanced Technical Communication & Collaborative Presentation Studio",
                                                "Indian Heritage & Culture",
                                                "Engineering Mathematics II: Differential Equations & Probabilistic Models",
                                                "Foundational Physics for Engineering Systems II: Electromagnetism & Modern Physics",
                                                "Applied Physics & Experimental Design Lab II",
                                                "Innovation Catalyst II: Foundational Skills & Lab Project Prototyping",
                                                "Cloud Systems & Infrastructure Essentials",
                                                "Cloud Systems Deployment Studio"
                                            ].map((course, idx) => (
                                                <li key={idx} className="flex gap-3 text-foreground/70 text-sm md:text-base leading-snug">
                                                    <span className="text-purple mt-1 flex-shrink-0">•</span>
                                                    {course}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Visual decoration */}
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
            </section>
            {/* Applications Section */}
            <section className="py-24 bg-background-alt/30 border-t border-white/5">
                <div className="container-boxed">
                    <div className="space-y-16">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-foreground"
                        >
                            Applications of <span className="font-orbitron italic text-accent">Cloud Engineering</span>
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Cloud Engineer",
                                    desc: "From fraud detection to smart loans—this role is at the heart of India's $150B fintech revolution.",
                                    image: "/Other/app-cloud.jpg",
                                    major: "Cloud Engineering",
                                    lab: "Soft \"Brain\" Lab"
                                },
                                {
                                    title: "DevOps Engineer",
                                    desc: "An AI Materials Innovation Engineer applies AI to discover and optimize new materials faster.",
                                    image: "/Other/app-devops.jpg",
                                    major: "Cloud Engineering",
                                    lab: "Soft \"Brain\" Lab",
                                    partner: "/Herosection/google-logo.png" // Using an existing logo path if available, or placeholder
                                },
                                {
                                    title: "Cloud Security Engineer",
                                    desc: "A Multi-Modal AI Model Trainer builds AI models that learn from text, images, and more.",
                                    image: "/Other/app-security.jpg",
                                    major: "Cloud Engineering",
                                    lab: "Soft \"Brain\" Lab"
                                },
                                {
                                    title: "Cloud Solutions Architect",
                                    desc: "A Robotics AI Specialist develops intelligent systems that enable robots to perceive, learn, and act autonomously.",
                                    image: "/Other/app-architect.jpg",
                                    major: "Cloud Engineering",
                                    lab: "Soft \"Brain\" Lab"
                                }
                            ].map((app, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-background border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-all group flex flex-col"
                                >
                                    <div className="aspect-[4/3] relative overflow-hidden">
                                        <Image 
                                            src={app.image} 
                                            alt={app.title} 
                                            fill 
                                            className="object-cover transition-transform duration-700 group-hover:scale-110" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    
                                    <div className="p-6 space-y-4 flex-1 flex flex-col">
                                        <h4 className="text-xl subheading-font font-bold text-foreground">{app.title}</h4>
                                        <p className="text-sm text-foreground/60 leading-relaxed line-clamp-3">
                                            {app.desc}
                                        </p>
                                        
                                        <div className="mt-auto pt-6 space-y-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Major</span>
                                                    <span className="px-3 py-1 bg-purple/10 border border-purple/20 text-purple text-[10px] font-bold rounded-md uppercase">
                                                        {app.major}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Lab</span>
                                                    <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold rounded-md uppercase">
                                                        {app.lab}
                                                    </span>
                                                </div>
                                                {app.partner && (
                                                    <div className="relative w-16 h-6 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                                                         {/* Google logo placeholder or actual if exists */}
                                                         <div className="flex items-center gap-1">
                                                            <span className="text-[10px] font-black italic text-[#4285F4]">G</span>
                                                            <span className="text-[10px] font-black italic text-[#EA4335]">o</span>
                                                            <span className="text-[10px] font-black italic text-[#FBBC05]">o</span>
                                                            <span className="text-[10px] font-black italic text-[#4285F4]">g</span>
                                                            <span className="text-[10px] font-black italic text-[#34A853]">l</span>
                                                            <span className="text-[10px] font-black italic text-[#EA4335]">e</span>
                                                         </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Fees Structure Section */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="container-boxed relative z-10">
                    <div className="space-y-12">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-foreground"
                        >
                            Fees <span className="subheading-font italic text-foreground/60">Structure</span>
                        </motion.h2>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="overflow-x-auto rounded-[2rem] border border-white/5 shadow-2xl"
                        >
                            <table className="w-full text-left border-collapse min-w-[1000px]">
                                <thead>
                                    <tr className="bg-purple/10">
                                        <th className="p-8 text-lg subheading-font font-bold text-foreground border-r border-white/5 w-1/3 text-center">Program Name</th>
                                        <th className="p-8 text-lg subheading-font font-bold text-foreground border-r border-white/5 w-1/12 text-center">Duration</th>
                                        <th className="p-8 text-lg subheading-font font-bold text-foreground border-r border-white/5 w-1/6 text-center">Annual Fee (INR)</th>
                                        <th className="p-8 text-lg subheading-font font-bold text-foreground w-1/3 text-center">Qualification</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-background-alt/30 group">
                                        {/* Program Name */}
                                        <td className="p-10 border-r border-white/5 align-top space-y-8">
                                            <div className="space-y-4">
                                                <p className="text-foreground/60 font-medium">B.Tech. (with one Major & one Minor Specialization pattern)</p>
                                                <h4 className="text-xl subheading-font font-bold text-foreground leading-snug">
                                                    Computer Science & Engineering with any one Major Specialization in
                                                </h4>
                                                <ul className="grid grid-cols-1 gap-2">
                                                    {["Cloud Engineering", "Software Engineering", "Artificial Intelligence & Machine Learning", "Data Science", "Cyber Security"].map((item) => (
                                                        <li key={item} className="flex items-center gap-3 text-foreground/70">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="space-y-4 pt-4">
                                                <h4 className="text-xl subheading-font font-bold text-foreground leading-snug">
                                                    Minor Specialization (Choose any one Minor):
                                                </h4>
                                                <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                                                    {["Robotics", "Bioinformatics", "Industry & Manufacturing", "Nanotechnology", "Geoinformatics", "Chip & Semiconductor", "Smart Cities", "Design", "Fintech"].map((item) => (
                                                        <li key={item} className="flex items-center gap-3 text-foreground/70">
                                                            <span className="w-1 h-1 rounded-full bg-purple" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </td>

                                        {/* Duration */}
                                        <td className="p-10 border-r border-white/5 text-center align-middle">
                                            <span className="text-2xl subheading-font font-bold text-foreground">4 Years</span>
                                        </td>

                                        {/* Annual Fee */}
                                        <td className="p-10 border-r border-white/5 text-center align-middle">
                                            <div className="space-y-1">
                                                <span className="text-3xl subheading-font font-bold text-accent">₹ 2,00,000</span>
                                                <p className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest leading-none">Per Annum</p>
                                            </div>
                                        </td>

                                        {/* Qualification */}
                                        <td className="p-10 align-top">
                                            <div className="space-y-6 text-foreground/70 leading-relaxed font-medium">
                                                <p>
                                                    Passed 10+2 from any government recognized board with <span className="text-foreground font-bold">Physics and Mathematics</span> as compulsory subjects,
                                                </p>
                                                <p className="italic">along with one of the following:</p>
                                                <div className="bg-purple/10 p-6 rounded-2xl border border-purple/20">
                                                    <p className="text-foreground font-bold">
                                                        Chemistry / Biotechnology / Computer Science / Biology
                                                    </p>
                                                    <p className="mt-2">with at least <span className="text-accent font-black text-xl">70%.</span></p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </motion.div>
                    </div>
                </div>
                
                {/* Background Glow */}
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple/5 blur-[180px] rounded-full pointer-events-none" />
            </section>
            {/* Career Prospects Section */}
            <section className="py-24 bg-background-alt/50 relative overflow-hidden">
                <div className="container-boxed relative z-10">
                    <div className="space-y-20">
                        <motion.h2 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-foreground"
                        >
                            Top Engineering <span className="subheading-font italic text-foreground/60">Career Prospects</span>
                        </motion.h2>

                        {/* Career Pathway Grid */}
                        <div className="relative">
                            {/* Desktop Pathway Line (Dashed) */}
                            <div className="absolute top-1/2 left-0 w-full h-px hidden lg:block -translate-y-1/2">
                                <svg className="w-full h-24 absolute -top-12" viewBox="0 0 1200 100" fill="none" preserveAspectRatio="none">
                                    <path 
                                        d="M0 50 H1200" 
                                        stroke="currentColor" 
                                        className="text-foreground/10" 
                                        strokeWidth="2" 
                                        strokeDasharray="8 8" 
                                    />
                                    {/* Curved connection for the right end if it was a snake, but user image shows 2 rows */}
                                </svg>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative z-10">
                                {[
                                    { num: "01", title: "Cloud Engineer", color: "from-pink-500/10 to-transparent" },
                                    { num: "02", title: "DevOps Engineer", color: "from-cyan-500/10 to-transparent" },
                                    { num: "03", title: "Site Reliability Engineer (SRE)", color: "from-purple-500/10 to-transparent" },
                                    { num: "04", title: "Cloud Architect", color: "from-pink-500/10 to-transparent" },
                                    { num: "05", title: "Cloud Security Engineer", color: "from-purple-500/10 to-transparent" },
                                    { num: "06", title: "Platform Engineer", color: "from-pink-500/10 to-transparent" },
                                    { num: "07", title: "Cloud Support Specialist", color: "from-cyan-500/10 to-transparent" },
                                    { num: "08", title: "Infrastructure Engineer", color: "from-pink-500/10 to-transparent" }
                                ].map((career, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className={`relative group bg-background-alt border border-white/5 p-6 rounded-2xl h-24 flex items-center gap-6 overflow-hidden hover:border-accent/30 transition-all`}
                                    >
                                        {/* Background Gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${career.color} opacity-40 group-hover:opacity-70 transition-opacity`} />
                                        
                                        <span className={`text-2xl subheading-font font-bold relative z-10 ${
                                            idx % 3 === 0 ? "text-pink-400" : idx % 3 === 1 ? "text-cyan-400" : "text-purple-400"
                                        }`}>
                                            {career.num}
                                        </span>
                                        <h4 className="text-base md:text-lg subheading-font font-bold text-foreground/90 relative z-10 leading-tight">
                                            {career.title}
                                        </h4>

                                        {/* Decorative Icon Overlay */}
                                        <div className="absolute right-2 -bottom-2 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform">
                                            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                            </svg>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Dots and Connector (As seen in image) */}
                <div className="absolute top-1/2 left-8 md:left-24 w-4 h-4 bg-pink-500/40 rounded-full blur-sm -translate-y-[100px] hidden lg:block" />
                <div className="absolute top-1/2 right-8 md:right-24 w-4 h-4 bg-pink-500/40 rounded-full blur-sm translate-y-[100px] hidden lg:block" />
            </section>
        </main>
    );
};

export default BtechCloudEngineering;
