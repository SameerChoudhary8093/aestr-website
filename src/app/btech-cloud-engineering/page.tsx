'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import RegistrationForm from '@/components/RegistrationForm';

const yearData = [
    {
        year: 'Year: I',
        semesters: [
            {
                name: 'Semester 1',
                subjects: [
                    "Professional Development & Innovation Mindset I",
                    "Technical & Persuasive Communication Studio I",
                    "Sustainable Systems & Environmental Intelligence",
                    "Program Core",
                    "Foundational Physics for Engineering Systems I",
                    "Engineering Mathematics I: Calculus & Linear Systems",
                    "Applied Physics & Experimental Design Lab I",
                    "Innovation Catalyst I: Exploring Grand Challenges & Lab Immersion",
                    "Foundation of AI & Data Engineering",
                    "AI and Data Engineering Studio 1",
                    "Principles of Cyber Defence & Digital Trust",
                    "Cyber Defence Operation Lab I"
                ],
            },
            {
                name: 'Semester 2',
                subjects: [
                    "Professional Development & Innovation Mindset II",
                    "Advanced Technical Communication & Collaborative Presentation Studio",
                    "Indian Heritage & Culture",
                    "Engineering Mathematics II: Differential Equations & Probabilistic Models",
                    "Foundational Physics for Engineering Systems II: Electromagnetism & Modern Physics",
                    "Applied Physics & Experimental Design Lab II",
                    "Innovation Catalyst II: Foundational Skills & Lab Project Prototyping",
                    "Cloud Systems & Infrastructure Essentials",
                    "Cloud Systems Deployment Studio"
                ],
            },
        ],
    },
    {
        year: 'Year: II',
        semesters: [
            {
                name: 'Semester 3',
                subjects: [
                    "Employability Skills-I",
                    "Proficiency and Co-Curricular Activities-III",
                    "Economics and Social Sciences",
                    "Data Structures and Algorithms",
                    "Principles of Programming Languages",
                    "Cloud Computing Architecture",
                    "Cloud Computing Architecture Lab) -> Designing Scalable Cloud Architectures",
                    "Data Structures and Algorithms Lab",
                    "Field Project/Field Visit-3 -> Innovation Lab Project I: Cloud System Design & Core Service Development",
                    "Digital Systems & Logic Engineering"
                ],
            },
            {
                name: 'Semester 4',
                subjects: [
                    "Employability Skills-II",
                    "Proficiency and Co-Curricular Activities-IV",
                    "Software Engineering",
                    "Discrete Mathematics and Graph Theory",
                    "Core Java",
                    "Industrial oriented Core Java Project Lab",
                    "Design Practice with UML Lab",
                    "Cloud Computing Deployment Models -> Cloud Service & Deployment Strategies (Public, Private, Hybrid, Multi-Cloud)",
                    "Cloud Computing Deployment Models Lab -> Multi-Cloud Deployment & Management Studio",
                    "Internship/Project-4 -> Innovation Lab Project II"
                ],
            },
        ],
    },
    {
        year: 'Year: III',
        semesters: [
            {
                name: 'Semester 5',
                subjects: [
                    "Employability Skills-III",
                    "Proficiency and Co-Curricular Activities-V",
                    "Database Management System",
                    "Logical & Functional Programming",
                    "Software Testing & QA",
                    "Computer Architectures",
                    "Cloud Security Fundamentals",
                    "Innovation Lab Project III: Cloud Optimization & Scalability",
                    "Advanced Data Structures",
                    "Minor Specialization Capstone Project Design"
                ],
            },
            {
                name: 'Semester 6',
                subjects: [
                    "Employability Skills IV",
                    "Proficiency and Co-Curricular Activities-VI",
                    "Design & Analysis of Algorithms",
                    "Theory of Computation",
                    "Computer Network",
                    "Cloud orchestration and Automation (DevOps)",
                    "Innovation Lab Project IV: Multi-Cloud Integration & Deployment",
                    "Minor Specialization Mastery"
                ],
            },
        ],
    },
    {
        year: 'Year: IV',
        semesters: [
            {
                name: 'Semester 7',
                subjects: [
                    "Group Discussion, Aptitude & Reasoning-I",
                    "Proficiency and Co-Curricular Activities-VII",
                    "Network Security & Cryptography Fundamentals (NSCF)",
                    "Operating Systems",
                    "Asynchronous Transfer Mode -> Advanced Cloud Networking & Content Delivery",
                    "Cloud Application Development -> Serverless & Microservices Architectures for Cloud Applications",
                    "Cloud Application Development Lab -> Serverless & Microservices Development Studio",
                    "Major Project Stage-I -> PE403 Innovation Lab Grand Challenge Seminar I (Cloud Major): Cloud System Architecture Review & Ethics"
                ],
            },
            {
                name: 'Semester 8',
                subjects: [
                    "Group Discussion, Aptitude & Reasoning-II",
                    "Intellectual Property Rights",
                    "Seminar",
                    "Major Project-II -> PE404 Innovation Lab Grand Challenge Showcase (Cloud Major): Cloud Platform Beta Release, Impact & Scalability Analysis",
                    "Real Time Systems",
                    "Distributed Systems",
                    "Compiler Construction",
                    "Compiler Construction Lab",
                    "Embedded Systems",
                    "Advance Computer Architectures",
                    "Advance Computer Architectures Lab"
                ],
            },
        ],
    },
];

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
    const [activeYear, setActiveYear] = useState(0);

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
                                <h1 className="text-hero font-orbitron text-foreground tracking-tight">
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
                                    Apply now
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
                                    title="Cloud Engineering overview"
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
                            className="text-h2 font-orbitron text-foreground"
                        >
                            What is <span className=" text-accent">Cloud Engineering?</span>
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

            {/* Why Aestr Section (Image 1) */}
            <section className="py-24 bg-[#F8F9FB] relative overflow-hidden">
                <div className="container-boxed">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div className="space-y-6">
                                <h2 className="text-h2 font-orbitron text-black">
                                    Why Aestr ?
                                </h2>
                                <p className="text-xl md:text-2xl subheading-font text-black/70 leading-relaxed font-medium">
                                    The only engineering school where AI teaches you, and the future hires you.
                                </p>
                            </div>

                            <div className="space-y-6 pt-4">
                                <div className="space-y-2">
                                    <h3 className="text-h3 font-outfit text-black">
                                        Intensive Bootcamps
                                    </h3>
                                    <p className="text-lg text-black/60 font-medium leading-relaxed max-w-xl">
                                        Taught by senior industry Engineers, offering hands on real-world learning experiences.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Arastu Sharma Thumbnail */}
                            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl relative border-4 border-white group bg-gray-200">
                                <Image 
                                    src="/ExecutionTeam/Arastu.jpeg" 
                                    alt="Arastu Sharma, PhD"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all pointer-events-none" />
                                
                                {/* Labels like in image */}
                                <div className="absolute top-6 left-6 z-10 bg-black/60 backdrop-blur-md px-5 py-3 rounded-lg border border-white/20">
                                    <h4 className="text-white font-bold text-xl leading-none">Arastu Sharma, PhD.</h4>
                                    <p className="text-white/70 text-sm mt-1">University of Cambridge</p>
                                </div>

                                {/* Sureshg Gyan Vihar University Logo on top right as in image */}
                                <div className="absolute top-6 right-6 z-10 opacity-80">
                                    <p className="text-black font-black text-[10px] leading-tight text-right uppercase tracking-tighter">Suresh<br/><span className="text-sm">Gyan Vihar</span><br/>University</p>
                                </div>

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-xl group-hover:scale-110 transition-transform">
                                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Subtitle at bottom */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white/90 text-[10px] md:text-sm font-medium w-full px-10">
                                    from Cambridge. <br className="md:hidden" /> I have led
                                </div>
                            </div>
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
                            <h2 className="text-h2 font-orbitron text-foreground tracking-tight">Curriculum</h2>
                            <h3 className=" text-h3 text-foreground/60 ">Curriculum Highlights</h3>
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
                            <h3 className="text-h2 font-orbitron font-bold text-foreground">
                                Programme <span className=" text-foreground/60 ">Curriculum</span>
                            </h3>

                            <div className="flex flex-col lg:flex-row gap-8 items-start">
                                {/* Year Tabs */}
                                <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-48 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                                    {yearData.map((y, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveYear(idx)}
                                            className={`px-8 py-4 rounded-xl text-left subheading-font font-bold text-lg transition-all flex items-center justify-between min-w-[140px] lg:w-full border shadow-lg ${
                                                activeYear === idx 
                                                ? "bg-accent/15 border-accent/50 text-accent shadow-[0_0_20px_rgba(215,246,1,0.12)]" 
                                                : "bg-background-alt/50 text-foreground/40 border-white/5 hover:border-white/10"
                                            }`}
                                        >
                                            {y.year}
                                            <span className={`hidden lg:block transition-transform duration-300 ${activeYear === idx ? "translate-x-1" : ""}`}>→</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Semester Grid */}
                                <AnimatePresence mode="wait">
                                    <motion.div 
                                        key={activeYear}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
                                    >
                                        {yearData[activeYear].semesters.map((sem, sIdx) => (
                                            <div 
                                                key={sem.name}
                                                className="bg-purple/5 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-purple/10 space-y-8 hover:border-accent/20 transition-all duration-300"
                                            >
                                                <h4 className="text-2xl subheading-font font-bold text-foreground border-b border-purple/10 pb-4 flex items-center gap-3">
                                                    <div className="w-1.5 h-6 bg-accent rounded-full" />
                                                    {sem.name}
                                                </h4>
                                                <ul className="space-y-4">
                                                    {sem.subjects.map((course, idx) => (
                                                        <li key={idx} className="flex gap-3 text-foreground/70 text-sm md:text-base leading-snug group/item">
                                                            <span className="text-accent/50 mt-1 flex-shrink-0 group-hover/item:text-accent transition-colors">•</span>
                                                            <span className="group-hover/item:text-foreground transition-colors">{course}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Visual decoration */}
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
            </section>

            {/* pathways Tree Section (Image 2) */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container-boxed text-center space-y-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-h2 font-orbitron text-black tracking-tight">
                            Aestr Quality Assurance <span className=" text-black ">pathways</span>
                        </h2>
                        <p className="text-lg md:text-xl text-black/60 font-medium subheading-font">
                            We provide clear, ambitious pathways to ensure your career takes off.
                        </p>
                    </motion.div>

                    {/* The Tree Diagram */}
                    <div className="relative pt-12 pb-20">
                        {/* Central vertical stem */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-black hidden lg:block">
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
                        </div>

                        {/* Horizontal branch */}
                        <div className="absolute top-16 left-[12.5%] right-[12.5%] h-px bg-black hidden lg:block">
                             <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
                        </div>

                        {/* Four boxes */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
                            {[
                                { title: "Aestr Pro Track", sub: "35LPA+ jobs", color: "bg-[#FFC9E3] border-[#FF99C8]" },
                                { title: "Global Opportunities", sub: "2+2, 3+1 Programs", color: "bg-[#E3D4FF] border-[#C3AAFF]" },
                                { title: "Industry Partner Training", sub: "& Direct Placements", color: "bg-[#C9F6FF] border-[#99E8FF]" },
                                { title: "Nurturing Entrepreneurs", sub: "Silicon Valley of AI", color: "bg-[#FFC9FF] border-[#FF99FF]" }
                            ].map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative flex flex-col items-center"
                                >
                                    {/* Vertical branch to box */}
                                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-px h-16 bg-black hidden lg:block">
                                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
                                    </div>
                                    
                                    <div className={`${item.color} w-full p-8 rounded-none border-b-[6px] border-black border-r-2 shadow-sm transition-transform hover:-translate-y-2 text-center flex flex-col justify-center min-h-[160px]`}>
                                        <h4 className="text-h3 font-orbitron text-black leading-tight border-b-2 border-black/10 pb-4 mb-4">
                                            {item.title}
                                        </h4>
                                        <p className="text-black font-bold tracking-tight text-sm md:text-lg">
                                            {item.sub}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Future-Ready Tech Labs Section */}
            <section className="py-28 bg-background relative overflow-hidden">
                <div className="container-boxed">
                    <div className="flex flex-col items-center text-center space-y-8 mb-20">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-h2 font-orbitron text-foreground"
                        >
                            Future-Ready <span className=" text-accent">Tech Labs</span>
                        </motion.h2>
                        <p className="max-w-3xl text-lg text-foreground/60 subheading-font">
                            Our state-of-the-art facilities provide a hands-on learning environment where theory meets production-grade infrastructure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Sovereign Cloud Lab", desc: "Build and manage private cloud infrastructures with absolute control.", img: "/Other/lab-1.webp" },
                            { name: "Edge Computing Hub", desc: "Deploy Low-latency applications for the next generation of IoT.", img: "/Other/lab-2.webp" },
                            { name: "Cloud Security Studio", desc: "Pentest and secure distributed systems against modern threats.", img: "/Other/lab-3.webp" }
                        ].map((lab, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-background-alt rounded-[2rem] overflow-hidden border border-white/5 hover:border-accent/30 transition-all"
                            >
                                <div className="aspect-[16/10] relative overflow-hidden">
                                    <Image src={lab.img} alt={lab.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8 space-y-3">
                                    <h4 className="text-xl font-bold font-orbitron text-foreground group-hover:text-accent transition-colors">{lab.name}</h4>
                                    <p className="text-sm text-foreground/60 leading-relaxed">{lab.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Emerging trends Section (Image 1) */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container-boxed">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-orbitron font-bold text-black mb-16"
                    >
                        Emerging <span className=" text-black ">trends</span>
                        <div className="h-1 w-24 bg-purple/20 mt-2 relative">
                            <div className="absolute inset-0 bg-purple/10 skew-x-12 translate-y-2 opacity-50" />
                        </div>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {[
                            { num: "01", title: "AI-Integrated Cloud Services", color: "bg-pink-50 border-pink-200" },
                            { num: "02", title: "Multi-Cloud and Hybrid Cloud Adoption", color: "bg-blue-50 border-blue-200 shadow-blue-100" },
                            { num: "03", title: "Cloud-Native Development", color: "bg-purple-50 border-purple-200" },
                            { num: "04", title: "Quantum Computing as a Cloud Service", color: "bg-pink-50 border-pink-200" },
                            { num: "05", title: "Cloud Automation & Platform Engineering", color: "bg-purple-50 border-purple-300" }
                        ].map((trend, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`${trend.color} p-8 rounded-none border-b-8 border-black flex flex-col gap-6 shadow-sm min-h-[220px] group hover:scale-[1.02] transition-all`}
                            >
                                <span className={`text-4xl font-playfair  font-bold ${
                                    idx === 0 ? "text-pink-400" : idx === 1 ? "text-blue-400" : idx === 2 ? "text-purple-400" : idx === 3 ? "text-pink-400" : "text-purple-400"
                                }`}>
                                    {trend.num}
                                </span>
                                <h4 className="text-lg font-bold text-gray-800 leading-tight">
                                    {trend.title}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Prospective Placement Partners (Image 2) */}
            <section className="py-24 bg-[#E8E2FF]/30 relative overflow-hidden">
                <div className="container-boxed">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-orbitron font-bold text-black mb-16"
                    >
                        Prospective Placement <span className=" text-black ">Partners</span>
                    </motion.h2>

                    <div className="space-y-6">
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            {[
                                { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
                                { name: "Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
                                { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_Logo.svg" },
                                { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
                                { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
                                { name: "VMware", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg" }
                            ].map((partner) => (
                                <div key={partner.name} className="bg-white p-6 h-24 w-48 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                                    <Image src={partner.logo} alt={partner.name} width={120} height={40} className="max-h-12 w-auto object-contain" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            {[
                                { name: "Red Hat", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg" },
                                { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
                                { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
                                { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
                                { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" }
                            ].map((partner) => (
                                <div key={partner.name} className="bg-white p-6 h-24 w-48 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                                    <Image src={partner.logo} alt={partner.name} width={120} height={40} className="max-h-12 w-auto object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* An overview (Image 3) */}
            <section className="py-24 bg-[#E6A0B0]/40 relative overflow-hidden">
                <div className="container-boxed">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-orbitron font-bold text-black mb-16"
                    >
                        An <span className=" text-black ">overview</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: "Current students in various courses", value: "10,000 +" },
                            { label: "Industry tie-ups for skill development", value: "125 +" },
                            { label: "Alumni working worldwide in MNCs", value: "40 K" },
                            { label: "Placement offers in Batch-2024", value: "340 +" },
                            { label: "Highest package offered in 2024", value: "42 LPA" },
                            { label: "Average package in batch-2022", value: "4.1 LPA" },
                            { label: "Lush green campus with hostel", value: "45 Acre" },
                            { label: "Sq. ft. Innovation lab for projects", value: "10,000" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-pink-50/60 p-10 rounded-none shadow-sm space-y-4 border border-pink-100 hover:bg-pink-100/80 transition-all group"
                            >
                                <div className="space-y-1">
                                    <span className="text-4xl font-bold text-black group-hover:scale-110 transition-transform block">
                                        {stat.value}
                                    </span>
                                    <div className="w-16 h-1 bg-black/5 group-hover:w-full transition-all duration-500" />
                                </div>
                                <p className="text-sm font-medium text-gray-600 leading-snug">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Aestr @advantages (Image 4) */}
            <section className="py-24 bg-white relative overflow-hidden text-black">
                <div className="container-boxed">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-h2 font-orbitron text-black mb-6"
                    >
                        Aestr <span className=" text-black ">@advantages</span>
                    </motion.h2>
                    <p className="max-w-3xl text-lg font-medium text-gray-700 mb-16 leading-relaxed">
                        Train for roles powering the next generation of banking, robotics, healthcare, and more—with real-world impact and future security.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative mb-16">
                        {[
                            { num: "1", text: "Student Awarded As First Google Ambassador." },
                            { num: "2", text: "Recipient Of I.GAUGE E-LEAD CERTIFICATE" },
                            { num: "3", text: "Benefit From Credit Transfer-Degree Programmes" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-6 relative group">
                                <span className="text-7xl font-orbitron font-black text-gray-100 group-hover:text-purple/5 transition-colors absolute -left-4 -top-4 -z-10">
                                    A
                                </span>
                                <span className="text-6xl font-playfair  font-bold text-black">
                                    {item.num}
                                </span>
                                <p className="text-xl font-bold leading-tight">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 flex flex-col md:flex-row items-center gap-8 bg-[#E8E2FF]/40 p-1 md:p-12 rounded-none">
                        <div className="flex-1 text-2xl font-bold leading-relaxed px-4 md:px-0">
                            Student chapters of Professional Bodies IEEE, CSI, NPTEL, ICT, IETE, SAE, IAESTE, etc.
                        </div>
                        <button className="bg-black text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors flex items-center gap-3">
                            Apply Now <span>↗</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Future Scope Of Cloud Engineering (Image 5) */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="container-boxed">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="space-y-4">
                                <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-foreground leading-[1.1]">
                                    Future Scope Of <span className=" text-foreground/60 ">Cloud Engineering</span>
                                </h2>
                                <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                                    Cloud Computing is a technology that enables on-demand access to computing resources—such as servers, storage, databases, and software—over the internet.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-2xl font-bold font-orbitron text-foreground">Massive Growth</h4>
                                <ul className="space-y-4">
                                    {[
                                        "The cloud market in India is growing at >30% annually.",
                                        "Government and private sectors are shifting completely to cloud infra."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 group">
                                            <span className="w-2 h-2 rounded-full bg-accent mt-2 group-hover:scale-150 transition-transform shrink-0" />
                                            <p className="text-lg text-foreground/80 font-medium leading-snug">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Decorative curved background behind robot */}
                            <div className="absolute bottom-0 right-0 w-full h-[60%] bg-purple/20 rounded-l-[10rem] -z-10 translate-y-10" />
                            <div className="relative aspect-square w-full max-w-[600px] ml-auto">
                                <Image 
                                    src="/Other/cloud-robot.png" 
                                    alt="Future Cloud Robotics" 
                                    fill 
                                    className="object-contain drop-shadow-[0_20px_50px_rgba(215,246,1,0.2)]" 
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
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
                            Applications of <span className=" text-accent">Cloud Engineering</span>
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
                                                            <span className="text-[10px] font-black  text-[#4285F4]">G</span>
                                                            <span className="text-[10px] font-black  text-[#EA4335]">o</span>
                                                            <span className="text-[10px] font-black  text-[#FBBC05]">o</span>
                                                            <span className="text-[10px] font-black  text-[#4285F4]">g</span>
                                                            <span className="text-[10px] font-black  text-[#34A853]">l</span>
                                                            <span className="text-[10px] font-black  text-[#EA4335]">e</span>
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
                            Fees <span className=" text-foreground/60 ">Structure</span>
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
                                                <p className="">along with one of the following:</p>
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
            </section>

            <RegistrationForm />
        </main>
    );
};

export default BtechCloudEngineering;
