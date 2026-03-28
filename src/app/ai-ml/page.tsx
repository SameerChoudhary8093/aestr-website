'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import StickyAdmissionsBar from '@/components/StickyAdmissionsBar';
import { scrollToRegistrationForm } from '@/utils/navigation';


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
                    "AI & ML Foundations: Statistics & Search Algorithms",
                    "Python for AI Programming Studio"
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
                    "Machine Learning Foundations: Supervised Learning",
                    "Machine Learning Studio -> Building Predictive Models",
                    "Data Structures and Algorithms Lab",
                    "Field Project/Field Visit-3 -> Innovation Lab Project I: AI System Design",
                    "Digital Systems & Logic Engineering"
                ],
            },
            {
                name: 'Semester 4',
                subjects: [
                    "Employability Skills-II",
                    "Proficiency and Co-Curricular Activities-IV",
                    "AI & Machine Learning",
                    "Discrete Mathematics and Graph Theory",
                    "Core Java",
                    "Industrial oriented Core Java Project Lab",
                    "Design Practice with UML Lab",
                    "Neural Networks & Deep Learning: Foundational Architectures",
                    "Deep Learning Studio -> Training Multi-layer Perceptrons & CNNs",
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
                    "Computer Architectures for AI",
                    "Natural Language Processing: Text Analytics & Modeling",
                    "NLP Studio -> Building Chatbots & Language Models",
                    "Innovation Lab Project III: Real-world AI Deployment",
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
                    "Reinforcement Learning: Sequential Decision Making",
                    "RL Studio -> Training Autonomous Agents",
                    "Innovation Lab Project IV: AI Product Realization",
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
                    "AI Ethics, Policy & Governance",
                    "Operating Systems",
                    "Computer Vision: Image Processing & Object Detection",
                    "Generative AI & LLM Architectures",
                    "Generative AI Studio -> Fine-tuning Foundational Models",
                    "Major Project Stage-I -> Innovation Lab Grand Challenge Seminar I (AI Major)"
                ],
            },
            {
                name: 'Semester 8',
                subjects: [
                    "Group Discussion, Aptitude & Reasoning-II",
                    "Intellectual Property Rights",
                    "Seminar",
                    "Major Project-II -> Innovation Lab Grand Challenge Showcase (AI Major)",
                    "Real Time AI Systems",
                    "Distributed AI Systems",
                    "Compiler Construction",
                    "Robotics & Embodied AI Lab",
                    "AI in Edge Devices",
                    "Advance Computer Architectures for ML"
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
            <Image
                src="/Other/lab-2.webp"
                alt={title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
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

const AIMLSpecializationPage = () => {
    const [activeYear, setActiveYear] = useState(0);

    return (
        <main className="bg-background-alt min-h-screen text-foreground selection:bg-accent selection:text-black">
            <StickyAdmissionsBar />
            {/* Hero Section - AI & ML Focus */}
            <section className="pt-44 pb-20 bg-[#5B1DD6] relative overflow-hidden">
                {/* Ambient Background Glows - Neon accents */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0" />
                
                <div className="container-boxed w-full max-w-[1224px] mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <h2 className="text-sm md:text-base font-orbitron font-bold text-white/90 tracking-[0.2em] uppercase">
                                    B.Tech Computer Science & Engineering with
                                </h2>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-orbitron font-black text-white leading-tight">
                                    AI & <span className="text-accent italic">Machine Learning</span>
                                </h1>
                            </div>

                            <div className="space-y-4">
                                {/* Info Row 1 - Eligibility */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent border border-white/20">
                                        <BookOpen className="w-5 h-5" />
                                    </div>
                                    <p className="text-sm md:text-base font-medium text-white/90">
                                        Eligibility: SGVUEEE/JEE/CUET UG
                                    </p>
                                </div>

                                {/* Info Row 2 - Duration */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent border border-white/20">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <p className="text-sm md:text-base font-medium text-white/90">
                                        Duration: 4 Years (8 Semesters)
                                    </p>
                                </div>
                            </div>

                            {/* Apply Now Button - Directs to Home Hero Form */}
                            <Link href="/#hero">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="mt-6 inline-flex items-center gap-3 px-8 py-4 bg-accent text-black rounded-xl shadow-[0_0_30px_rgba(216,246,2,0.3)] hover:shadow-[0_0_40px_rgba(216,246,2,0.5)] transition-all duration-300 font-orbitron font-black uppercase tracking-wider text-sm"
                                >
                                    Apply Now
                                    <ArrowRight className="w-4 h-4" />
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* Right Column - Video Thumbnail - Pushed Down */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 30 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative mt-12 lg:mt-24"
                        >
                            <div className="aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 bg-black/40 backdrop-blur-md">
                                <Image
                                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                                    alt="AI & Machine Learning"
                                    fill
                                    className="object-cover opacity-80"
                                />
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-all duration-300 cursor-pointer group">
                                    <div className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-8 h-8 text-white ml-1"
                                        >
                                            <path d="M8 5v14l11-7-11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What Is Section - Centered */}
            <section className="py-24 relative overflow-hidden" style={{backgroundColor: '#571AD0'}}>
                <div className="container-boxed w-full max-w-[1224px] mx-auto relative z-10 text-center flex flex-col items-center">
                    <div className="max-w-4xl space-y-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-orbitron font-black text-white"
                        >
                            What is <span className="text-accent italic">AI & Machine Learning</span>?
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-black/20 p-8 md:p-14 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-xl"
                        >
                            <p className="text-lg md:text-2xl text-white/90 leading-[1.6] font-medium text-center">
                                AI & Machine Learning is the systematic application of <strong className="text-accent font-orbitron font-bold">computer science</strong>, <strong className="text-accent font-orbitron font-bold">mathematics</strong>, and <strong className="text-accent font-orbitron font-bold">statistical principles</strong> to create intelligent systems that can learn from data, make predictions, and automate decision-making processes. It encompasses machine learning algorithms, neural networks, deep learning architectures, and data processing techniques that enable computers to perform tasks that typically require human intelligence, from image recognition and natural language processing to autonomous decision-making and predictive analytics.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-24 bg-background-alt relative overflow-hidden">
                {/* Ambient Background Glows */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none z-0" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple/10 blur-[150px] rounded-full pointer-events-none z-0" />
                
                <div className="container-boxed relative z-10 w-full max-w-[1224px] mx-auto">
                    <div className="space-y-16">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-foreground tracking-tight">Curriculum</h2>
                            <h3 className="text-2xl text-foreground/60 font-orbitron font-bold">Curriculum Highlights</h3>
                        </div>

                        <div className="flex flex-nowrap gap-2 overflow-x-auto pb-4 no-scrollbar">
                            {[
                                "1. Neural Networks & Deep Learning",
                                "2. Computer Vision & NLP",
                                "3. Robotics & Embodied AI",
                                "4. Reinforcement Learning",
                                "5. Generative AI & LLMs",
                                "6. AI Ethics & Governance"
                            ].map((tag, i) => (
                                <motion.span
                                    key={tag}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground/70 font-orbitron font-bold hover:border-accent/30 hover:text-accent transition-all cursor-default text-[10px] uppercase tracking-wider whitespace-nowrap shadow-sm"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>

                        <div className="h-px w-full bg-white/5" />

                        <div className="space-y-12 p-12 lg:p-16 rounded-[3rem]" style={{ backgroundColor: '#D8F602' }}>
                            <h3 className="text-5xl md:text-7xl font-orbitron font-black text-black tracking-tighter">
                                Programme <span className="opacity-40">&</span> <br />
                                <span className="text-accent italic drop-shadow-sm brightness-50">Curriculum</span>
                            </h3>

                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 lg:w-48 shrink-0 no-scrollbar">
                                    {yearData.map((y, i) => (
                                        <button
                                            key={y.year}
                                            onClick={() => setActiveYear(i)}
                                            className={`px-6 py-4 rounded-xl font-orbitron font-black text-xs uppercase tracking-widest transition-all duration-300 whitespace-nowrap text-left border ${activeYear === i
                                                ? 'bg-black text-accent border-black'
                                                : 'bg-black/5 text-black/50 border-black/10 hover:border-black/30'
                                                }`}
                                        >
                                            {y.year}
                                        </button>
                                    ))}
                                </div>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeYear}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8"
                                    >
                                        {yearData[activeYear].semesters.map((sem) => (
                                            <div key={sem.name} className="bg-background-alt p-8 rounded-3xl border border-white/5 shadow-2xl space-y-6 group hover:border-accent/20 transition-all">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-1 h-8 bg-accent rounded-full" />
                                                    <h4 className="text-2xl font-bold text-foreground">{sem.name}</h4>
                                                </div>
                                                <ul className="space-y-3">
                                                    {sem.subjects.map((s, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                                                            <span className="text-foreground/60 leading-relaxed font-medium group-hover:text-foreground/90 transition-colors">{s}</span>
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
            </section>

            {/* Applications Section - PURPLE */}
            <section className="py-24 relative overflow-hidden" style={{backgroundColor: '#571AD0'}}>
                <div className="container-boxed w-full max-w-[1224px] mx-auto relative z-10">
                    <div className="space-y-20">
                        <div className="text-center space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl lg:text-8xl font-orbitron font-black text-white tracking-tighter"
                            >
                                Career <span className="text-accent italic">Impact</span>
                            </motion.h2>
                            <p className="text-white/60 font-orbitron text-lg tracking-[0.2em] uppercase">Applications of AI & ML</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "ML Ops Engineer",
                                    desc: "Architecting the infrastructure that scales AI models from local experiments to global production environments.",
                                    image: "/Other/_DSC0612.jpg",
                                    major: "Neural Systems",
                                    lab: "NVIDIA Pipeline"
                                },
                                {
                                    title: "Deep Learning Researcher",
                                    desc: "Pushing the boundaries of neural architectures to solve complex reasoning and perception challenges.",
                                    image: "/Other/DSC01997.jpg",
                                    major: "Core Intelligence",
                                    lab: "Shodh AI Research"
                                },
                                {
                                    title: "Computer Vision Lead",
                                    desc: "Developing next-gen perception systems for autonomous vehicles, medical imaging, and smart surveillance.",
                                    image: "/Other/DSC08333.jpg.jpeg",
                                    major: "Visual Intelligence",
                                    lab: "Embodied Brain Lab"
                                },
                                {
                                    title: "AI Ethics Architect",
                                    desc: "Designing governance frameworks ensuring transparency, safety, and unbiased performance in AI systems.",
                                    image: "/Other/image.jpeg",
                                    major: "System Governance",
                                    lab: "Policy Hub"
                                }
                            ].map((app, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-black rounded-3xl overflow-hidden border border-white/10 hover:border-accent/40 transition-all group flex flex-col shadow-2xl"
                                >
                                    <div className="aspect-[4/5] relative overflow-hidden">
                                        <Image
                                            src={app.image}
                                            alt={app.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                    </div>

                                    <div className="p-8 space-y-5 flex-1 flex flex-col -mt-20 relative z-10 bg-black/60 backdrop-blur-md">
                                        <h4 className="text-2xl font-orbitron font-black text-accent leading-tight">{app.title}</h4>
                                        <p className="text-sm text-white/70 leading-relaxed font-medium line-clamp-4">
                                            {app.desc}
                                        </p>

                                        <div className="mt-auto pt-6 space-y-3 border-t border-white/10">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] font-orbitron font-bold text-white/40 uppercase tracking-widest">Major Segment</span>
                                                <span className="text-accent text-[10px] font-black uppercase tracking-wider">{app.major}</span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] font-orbitron font-bold text-white/40 uppercase tracking-widest">Strategic Lab</span>
                                                <span className="text-white text-[10px] font-black uppercase tracking-wider">{app.lab}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Fees Structure Section - NEON */}
            <section className="py-32 relative overflow-hidden" style={{backgroundColor: '#D8F602'}}>
                <div className="container-boxed relative z-10 w-full max-w-[1224px] mx-auto">
                    <div className="space-y-16">
                        <div className="space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-8xl font-orbitron font-black text-black tracking-tighter"
                            >
                                Fees <span className="opacity-30">Structure</span>
                            </motion.h2>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="overflow-x-auto rounded-[3rem] bg-black shadow-[0_40px_100px_rgba(0,0,0,0.3)] border border-black/5"
                        >
                            <table className="w-full text-left border-collapse min-w-[1000px]">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="p-10 text-xs font-orbitron font-black text-accent uppercase tracking-[0.2em] border-r border-white/5 w-1/3 text-center">Specialization Architecture</th>
                                        <th className="p-10 text-xs font-orbitron font-black text-accent uppercase tracking-[0.2em] border-r border-white/5 w-1/12 text-center">Duration</th>
                                        <th className="p-10 text-xs font-orbitron font-black text-accent uppercase tracking-[0.2em] border-r border-white/5 w-1/6 text-center">Annual Investment</th>
                                        <th className="p-10 text-xs font-orbitron font-black text-accent uppercase tracking-[0.2em] w-1/3 text-center">Entry Threshold</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="group">
                                        <td className="p-12 border-r border-white/5 align-top space-y-10">
                                            <div className="space-y-6">
                                                <p className="text-white/40 font-orbitron text-[10px] uppercase tracking-widest">Major Specialization</p>
                                                <h4 className="text-2xl font-orbitron font-black text-white leading-tight">
                                                    Artificial Intelligence & <br/>
                                                    <span className="text-accent italic">Machine Learning</span>
                                                </h4>
                                                <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg">
                                                    <span className="text-accent font-bold text-xs uppercase tracking-wider">Primary Track: AI Research & Engineering</span>
                                                </div>
                                            </div>

                                            <div className="space-y-6 pt-6 border-t border-white/5">
                                                <p className="text-white/40 font-orbitron text-[10px] uppercase tracking-widest">Minor Specializations (Select One)</p>
                                                <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                                                    {["Robotics", "Semiconductor & RISC-V", "Cloud Architecture", "Fintech", "Nano Technology", "Computer Vision", "Bio-Informatics", "AI Ethics"].map((item) => (
                                                        <li key={item} className="flex items-center gap-3 text-white/70 text-sm font-medium">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </td>

                                        <td className="p-12 border-r border-white/5 text-center align-middle">
                                            <span className="text-4xl font-orbitron font-black text-white">04</span>
                                            <p className="text-[10px] font-orbitron font-bold text-white/30 uppercase mt-2">Years</p>
                                        </td>

                                        <td className="p-12 border-r border-white/5 text-center align-middle">
                                            <div className="space-y-2">
                                                <span className="text-4xl font-orbitron font-black text-accent">₹2.0L</span>
                                                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">(Per Annum)</p>
                                            </div>
                                        </td>

                                        <td className="p-12 align-top">
                                            <div className="space-y-10 text-white/70 leading-relaxed">
                                                <div className="space-y-4">
                                                    <p className="text-white/40 font-orbitron text-[10px] uppercase tracking-widest">Eligibility Criteria</p>
                                                    <p className="text-lg font-medium leading-normal">
                                                        10+2 with <span className="text-white font-bold">Physics & Math</span> (Compulsory) + Chem/CS/Bio.
                                                    </p>
                                                </div>
                                                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 shadow-inner">
                                                    <p className="text-accent font-orbitron font-black text-4xl">70%</p>
                                                    <p className="text-xs font-bold text-white/50 uppercase tracking-widest mt-2">Aggregrate Minimum</p>
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
            
            {/* Emerging Trends Section - NEON */}
            <section className="py-24 relative overflow-hidden" style={{backgroundColor: '#D8F602'}}>
                <div className="container-boxed relative z-10 w-full max-w-[1224px] mx-auto">
                    <div className="space-y-16">
                        <div className="space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-7xl font-orbitron font-black text-black tracking-tighter"
                            >
                                Emerging <span className="opacity-30">Trends</span>
                            </motion.h2>
                            <p className="text-black/40 font-orbitron text-xs uppercase tracking-[0.3em]">The Horizon of AI</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 bg-black rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/5">
                            {[
                                { id: "01", title: "Neuro-\nSymbolic AI" },
                                { id: "02", title: "Embodied\nSystems" },
                                { id: "03", title: "Liquid\nNeural Nets" },
                                { id: "04", title: "Diffusion\nArchitectures" },
                                { id: "05", title: "Edge\nIntelligence" }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-10 min-h-[220px] flex flex-col justify-between border-r border-white/5 last:border-r-0 hover:bg-white/20 transition-all group"
                                >
                                    <span className="text-2xl font-orbitron font-black text-accent opacity-40 group-hover:opacity-100 transition-opacity">
                                        {item.id}
                                    </span>
                                    <p className="text-lg leading-tight font-orbitron font-black text-white whitespace-pre-line group-hover:scale-105 transition-transform origin-left">
                                        {item.title}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>            {/* Prospective Placement Partners Section - BLACK */}
            <section className="bg-black py-24 text-white relative overflow-hidden">
                <div className="container-boxed text-center relative z-10 w-full max-w-[1300px] mx-auto">
                    <div className="space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white tracking-widest uppercase">
                                Global <span className="text-accent italic">Networks</span>
                            </h2>
                            <p className="text-white/30 font-orbitron text-xs uppercase tracking-[0.4em]">Placement Partners</p>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
                            {[
                                { name: "Google", src: "/ProgramPartners/google.webp" },
                                { name: "Microsoft", src: "/ProgramPartners/micro.webp" },
                                { name: "Amazon", src: "/Other/amazon.png" },
                                { name: "Meta", src: "/Other/meta.png" },
                                { name: "Infosys", src: "/Other/infosys.png" },
                                { name: "TCS", src: "/Other/tcs.png" },
                                { name: "Wipro", src: "/Other/wipro.png" },
                                { name: "Accenture", src: "/Other/accenture.png" },
                                { name: "Zerodha", src: "/Other/zerodha.png" },
                                { name: "CRED", src: "/Other/cred.png" },
                                { name: "Swiggy", src: "/Other/swiggy.png" },
                                { name: "Adobe", src: "/Other/adobe.png" }
                            ].map((partner, idx) => (
                                <motion.div
                                    key={partner.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white/5 h-[140px] rounded-2xl flex items-center justify-center p-8 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all group"
                                >
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                            src={partner.src}
                                            alt={partner.name}
                                            fill
                                            className="object-contain transition-all duration-500 group-hover:scale-125"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* An Overview Section - PURPLE */}
            <section className="py-24 relative overflow-hidden bg-[#571AD0]">
                <div className="container-boxed relative z-10 w-full max-w-[1224px] mx-auto">
                    <div className="space-y-20">
                        <div className="text-center space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-7xl font-orbitron font-black text-white tracking-widest uppercase"
                            >
                                Institutional <span className="text-accent italic">Edge</span>
                            </motion.h2>
                            <p className="text-white/40 font-orbitron text-xs uppercase tracking-[0.4em]">An Overview</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { value: "10,000+", label: "Academic Minds" },
                                { value: "125+", label: "Industry Alliances" },
                                { value: "40K+", label: "Global Alumni Network" },
                                { value: "340+", label: "Strategic Placements" },
                                { value: "42 LPA", label: "Peak Opportunity" },
                                { value: "4.1 LPA", label: "Mean Trajectory" },
                                { value: "45 Acre", label: "Smart Infrastructure" },
                                { value: "10,000", label: "Innovation Lab (Sq Ft)" }
                            ].map((stat, idx) => (
                                <motion.div
                                    key={`stat-${idx}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-black/40 backdrop-blur-xl p-10 flex flex-col justify-start border border-white/10 hover:border-accent/40 transition-all rounded-[2rem] shadow-2xl group"
                                >
                                    <div className="border-b-[1.5px] border-white/5 pb-6 mb-6">
                                        <h3 className="text-4xl font-orbitron font-black text-accent group-hover:scale-110 transition-transform origin-left">
                                            {stat.value}
                                        </h3>
                                    </div>
                                    <p className="text-xs leading-relaxed text-white/60 font-orbitron font-bold uppercase tracking-widest">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* AESTR @Advantages Section - NEON */}
            <section className="py-24 relative overflow-hidden" style={{backgroundColor: '#D8F602'}}>
                <div className="container-boxed relative z-10 w-full max-w-[1224px] mx-auto">
                    <div className="space-y-16">
                        <div className="space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-7xl font-orbitron font-black text-black tracking-tighter"
                            >
                                AESTR <span className="opacity-30">@Advantages</span>
                            </motion.h2>
                            <p className="text-black/60 font-orbitron text-sm max-w-4xl font-bold uppercase tracking-[0.2em] leading-relaxed">
                                Train for roles powering the next generation of banking, robotics, healthcare, and more—with real-world impact and future security.
                            </p>
                        </div>

                        {/* Top Row - 3 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { num: "1", text: "Student awarded as First\nGoogle Ambassador." },
                                { num: "2", text: "Recipient of I.GAUGE E-\nLEAD CERTIFICATE" },
                                { num: "3", text: "Benefit from credit transfer-\ndegree programmes" }
                            ].map((card, idx) => (
                                <motion.div
                                    key={`adv-${idx}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-black p-10 flex flex-col gap-8 rounded-[3rem] shadow-2xl group hover:scale-[1.02] transition-transform"
                                >
                                    <span className="text-7xl font-orbitron font-black text-accent drop-shadow-[0_0_10px_rgba(216,246,2,0.3)]">
                                        {card.num}
                                    </span>
                                    <p className="text-lg leading-snug text-white/80 font-orbitron font-bold whitespace-pre-line">
                                        {card.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom Full Width Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-black p-12 flex flex-col md:flex-row items-center justify-between gap-10 rounded-[3rem] shadow-2xl"
                        >
                            <p className="text-2xl md:text-3xl font-orbitron font-black text-white max-w-4xl leading-tight">
                                Student chapters of Professional Bodies <span className="text-accent underline underline-offset-8">IEEE, CSI, NPTEL, ICT, IETE, SAE, IAESTE, etc.</span>
                            </p>
                            
                            <Link href="/#hero">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-accent text-black px-12 py-5 rounded-2xl flex items-center gap-4 hover:shadow-[0_0_50px_rgba(216,246,2,0.4)] transition-all font-orbitron font-black uppercase tracking-widest text-sm"
                                >
                                    Apply Now
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>            {/* Future Scope Section - PURPLE */}
            <section className="py-24 bg-[#571AD0] text-white relative overflow-hidden">
                <div className="container-boxed relative z-10 w-full max-w-[1224px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white leading-tight">
                                    Future Scope of <br/>
                                    <span className="text-accent italic">AI Engineering</span>
                                </h2>
                                <p className="text-white/40 font-orbitron text-xs uppercase tracking-[0.3em]">Next-Gen Intelligence</p>
                            </div>

                            <div className="space-y-6 text-lg text-white/80 leading-relaxed font-medium">
                                <p>The shift towards Artificial Intelligence and Machine Learning represents the most significant transformation in human history. As every industry—from medicine to finance—integrates intelligent agents, the demand for specialized engineers is projected to grow by <span className="text-accent font-bold">45% YoY</span>.</p>
                                <p>Specializing in AI/ML at AESTR equips you with the fundamental architectures and ethical frameworks needed to shape the future of <span className="text-white font-bold">Autonomous Systems, Generative Models, and Cognitive Computing</span>.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative lg:absolute lg:right-0 lg:w-1/2 h-[500px]"
                        >
                            <div className="relative w-full h-full rounded-l-[5rem] overflow-hidden border-4 border-white/10 shadow-3xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1579546683335-5e8c11bd221b?auto=format&fit=crop&w=1200&q=80"
                                    alt="Future Scope"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Innovation Labs of 2030 Section - BLACK */}
            <section className="py-32 relative overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple/5 pointer-events-none" />
                <div className="container-boxed relative z-10 w-full max-w-[1224px] mx-auto">
                    <div className="space-y-20">
                        <div className="text-center space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-7xl font-orbitron font-black text-white tracking-widest"
                            >
                                Innovation <span className="text-accent italic">Labs</span>
                            </motion.h2>
                            <p className="text-white/30 font-orbitron text-xs uppercase tracking-[0.4em]">The 2030 Roadmap</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    id: "01",
                                    title: "Neural Pipeline Lab",
                                    desc: "Focus on industrial-scale model training and deployment architectures."
                                },
                                {
                                    id: "02",
                                    title: "Vision Systems HQ",
                                    desc: "Developing next-gen perception for autonomous mobility and healthcare."
                                },
                                {
                                    id: "03",
                                    title: "LLM Research Centre",
                                    desc: "Pushing the boundaries of natural language reasoning and safety."
                                },
                                {
                                    id: "04",
                                    title: "Robotics Forge",
                                    desc: "Bridging digital intelligence with physical world interaction and kinetic AI."
                                }
                            ].map((lab, idx) => (
                                <motion.div
                                    key={lab.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-10 bg-white/5 border border-white/10 rounded-[3rem] space-y-6 hover:bg-accent/5 hover:border-accent/40 transition-all group shadow-2xl"
                                >
                                    <span className="text-6xl font-orbitron font-black text-white/5 group-hover:text-accent/20 transition-colors">{lab.id}</span>
                                    <h4 className="text-2xl font-orbitron font-black text-white">{lab.title}</h4>
                                    <p className="text-white/60 leading-relaxed font-medium">{lab.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Aestr Quality Assurance Pathways - BLACK */}
            <section className="py-24 relative overflow-hidden bg-black border-t border-white/5">
                <div className="container-boxed relative z-10 w-full max-w-[1224px] mx-auto">
                    <div className="space-y-16">
                        <div className="space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-orbitron font-black text-white tracking-tighter"
                            >
                                Quality <span className="text-accent italic">Assurance</span>
                            </motion.h2>
                            <p className="text-white/40 font-orbitron text-xs uppercase tracking-[0.3em]">Your Pathway to Success</p>
                        </div>

                        <div className="bg-white/5 rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
                            {[
                                { step: "Pathway 01", title: "Core Competency Mapping", desc: "Individual skill auditing to align academic path with personal strengths." },
                                { step: "Pathway 02", title: "Project Incubation", desc: "Venture-grade project development under mentorship of Shodh AI researchers." },
                                { step: "Pathway 03", title: "Professional Readiness", desc: "Intensive training in technical communication and global workplace dynamics." }
                            ].map((row, idx) => (
                                <div key={idx} className="p-12 border-b border-white/5 last:border-0 flex flex-col md:flex-row gap-8 items-start hover:bg-white/[0.02] transition-colors">
                                    <span className="shrink-0 font-orbitron font-black text-accent text-xs uppercase tracking-widest pt-2">{row.step}</span>
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-orbitron font-black text-white">{row.title}</h4>
                                        <p className="text-white/60 text-lg font-medium">{row.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-32 relative overflow-hidden bg-[#0A0A0A] border-t border-white/5">
                {/* Background Accents */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple/10 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="absolute top-0 w-full px-4 pt-10">
                    <div className="container-boxed mx-auto">
                        <div className="glass border-white/10 bg-black/60 backdrop-blur-xl rounded-full px-8 py-3.5 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <div className="flex items-center gap-4">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                                </span>
                                <p className="text-white font-orbitron font-bold text-sm tracking-tight uppercase">
                                    Admissions Open at <span className="text-accent underline underline-offset-4 decoration-accent/30 italic">SGVU</span> for 2026-2027
                                </p>
                            </div>
                            <Link href="/#hero" className="px-10 py-2.5 bg-accent text-black font-orbitron font-black text-xs uppercase rounded-full hover:scale-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(216,246,2,0.4)]">
                                Apply Now ↗
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container-boxed relative z-10 w-full max-w-[1224px] mx-auto pt-24">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 space-y-10">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-7xl font-orbitron font-black text-white leading-tight"
                            >
                                Don't be shy, <br/>
                                <span className="text-accent italic drop-shadow-[0_0_15px_rgba(216,246,2,0.2)]">Take the First Step.</span>
                            </motion.h2>

                            <Link href="/#hero">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-accent text-black px-12 py-5 rounded-2xl flex items-center gap-4 hover:shadow-[0_0_40px_rgba(216,246,2,0.4)] transition-all font-orbitron font-black uppercase tracking-widest text-lg"
                                >
                                    Apply Now
                                    <ArrowRight className="w-6 h-6" />
                                </motion.button>
                            </Link>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-[500px] aspect-square"
                        >
                            <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden border-[15px] border-white/5 shadow-3xl bg-black">
                                <Image
                                    src="/b.tech-ai-with/robo.jpg"
                                    alt="Robo Assistant"
                                    fill
                                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple rounded-full flex items-center justify-center p-8 text-center rotate-12 shadow-[0_20px_50px_rgba(87,26,208,0.4)] border-4 border-white/10">
                                <p className="text-white font-orbitron font-black text-sm uppercase leading-tight">Join the Elite 1%</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AIMLSpecializationPage;
