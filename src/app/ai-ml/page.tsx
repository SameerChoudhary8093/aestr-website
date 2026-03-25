'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';


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
            {/* Hero Section - Software Engineering Focus */}
            <section className="pt-44 pb-16 bg-[#5B1DD6] relative overflow-hidden">
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
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <h2 className="text-sm md:text-base font-normal text-white/90 font-bold">
                                    B.Tech Computer Science & Engineering with
                                </h2>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
                                    AI & <span className="text-accent font-serif">Machine Learning</span>
                                </h1>
                            </div>

                            <div className="space-y-4">
                                {/* Info Row 1 - Eligibility */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-black border border-accent/30">
                                        <BookOpen className="w-5 h-5" />
                                    </div>
                                    <p className="text-sm md:text-base font-medium text-white/90">
                                        Eligibility: SGVUEEE/JEE/CUET UG
                                    </p>
                                </div>

                                {/* Info Row 2 - Duration */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-black border border-accent/30">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <p className="text-sm md:text-base font-medium text-white/90">
                                        Duration: 4 Years (8 Semesters)
                                    </p>
                                </div>
                            </div>

                            {/* Apply Now Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black border border-accent/20 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(216,246,2,0.4)] transition-all duration-300 font-black uppercase tracking-tight"
                            >
                                Apply Now
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </motion.div>

                        {/* Right Column - Video Thumbnail */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 30 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-white/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                                    alt="AI & Machine Learning"
                                    fill
                                    className="object-cover"
                                />
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300 cursor-pointer group">
                                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6 text-gray-800 ml-1"
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

            {/* What Is Section - PURPLE */}
            <section className="py-16 relative overflow-hidden" style={{backgroundColor: '#5B1DD6'}}>
                
                <div className="container-boxed w-full max-w-[1224px] mx-auto relative z-10">
                    <div className="max-w-5xl space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
                        >
                            What is <span className="text-white font-serif">AI & Machine Learning</span>?
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-sm backdrop-blur-xl"
                        >
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                                AI & Machine Learning is the systematic application of <strong className="text-accent font-bold">computer science</strong>, <strong className="text-accent font-bold">mathematics</strong>, and <strong className="text-accent font-bold">statistical principles</strong> to create intelligent systems that can learn from data, make predictions, and automate decision-making processes. It encompasses machine learning algorithms, neural networks, deep learning architectures, and data processing techniques that enable computers to perform tasks that typically require human intelligence, from image recognition and natural language processing to autonomous decision-making and predictive analytics.
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
                            <h2 className="text-h2 font-bold text-foreground tracking-tight">Curriculum</h2>
                            <h3 className="text-3xl text-foreground/60 font-bold">Curriculum Highlights</h3>
                        </div>

                        <div className="flex flex-wrap gap-3 md:gap-4">
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
                                    className="px-6 py-3 rounded-xl glass border border-white/5 text-foreground/70 font-semibold hover:border-accent/30 hover:text-accent transition-all cursor-default text-sm md:text-base shadow-lg"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>

                        <div className="h-px w-full bg-white/5" />

                        <div className="space-y-12">
                            <h3 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                                Programme <br />
                                <span className=" text-accent ">Curriculum</span>
                            </h3>

                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 lg:w-48 shrink-0">
                                    {yearData.map((y, i) => (
                                        <button
                                            key={y.year}
                                            onClick={() => setActiveYear(i)}
                                            className={`px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-300 whitespace-nowrap text-left border ${activeYear === i
                                                ? 'bg-accent text-black border-accent'
                                                : 'bg-background-alt text-foreground/40 border-white/5 hover:border-accent/30'
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

            {/* Applications Section - NEON */}
            <section className="py-24 relative overflow-hidden" style={{backgroundColor: '#D8F602'}}>
                
                <div className="container-boxed w-full max-w-[1224px] mx-auto relative z-10">
                    <div className="space-y-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black"
                        >
                            Applications of <span className=" text-black">AI & ML</span>
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Machine Learning Engineer",
                                    desc: "Developing algorithms that allow computers to learn and make decisions from complex data.",
                                    image: "/Other/app-cloud.jpg",
                                    major: "AI & ML",
                                    lab: "NVIDIA Pipeline"
                                },
                                {
                                    title: "Robotics Scientist",
                                    desc: "Designing intelligent systems that enable robots to interact naturally with the human world.",
                                    image: "/Other/app-devops.jpg",
                                    major: "AI & ML",
                                    lab: "Embodied Brain Lab"
                                },
                                {
                                    title: "Computer Vision Expert",
                                    desc: "Building systems that can perceive and interpret visual information like the human eye.",
                                    image: "/Other/app-security.jpg",
                                    major: "AI & ML",
                                    lab: "Augmented Human Lab"
                                },
                                {
                                    title: "Autonomous Systems Lead",
                                    desc: "Architecting self-driving cars, drones, and automated industrial ecosystems.",
                                    image: "/Other/app-architect.jpg",
                                    major: "AI & ML",
                                    lab: "Shodh AI Research"
                                }
                            ].map((app, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="glass border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-all group flex flex-col"
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
                                        <h4 className="text-xl font-bold text-black">{app.title}</h4>
                                        <p className="text-sm text-black/70 leading-relaxed line-clamp-3">
                                            {app.desc}
                                        </p>

                                        <div className="mt-auto pt-6 space-y-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Major</span>
                                                    <span className="px-3 py-1 bg-purple/10 border border-purple/20 text-purple text-[10px] font-bold rounded-md uppercase">
                                                        {app.major}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Lab</span>
                                                    <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold rounded-md uppercase">
                                                        {app.lab}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Fees Structure Section - BLACK */}
            <section className="py-24 bg-black text-white relative overflow-hidden">
                
                <div className="container-boxed relative z-10 w-full max-w-[1224px] mx-auto">
                    <div className="space-y-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                        >
                            Fees <span className=" text-white/60 ">Structure</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="overflow-x-auto rounded-[2rem] glass border border-white/5 shadow-2xl"
                        >
                            <table className="w-full text-left border-collapse min-w-[1000px]">
                                <thead>
                                    <tr className="bg-purple/10">
                                        <th className="p-8 text-lg font-bold text-white border-r border-white/5 w-1/3 text-center">Program Name</th>
                                        <th className="p-8 text-lg font-bold text-white border-r border-white/5 w-1/12 text-center">Duration</th>
                                        <th className="p-8 text-lg font-bold text-white border-r border-white/5 w-1/6 text-center">Annual Fee (INR)</th>
                                        <th className="p-8 text-lg font-bold text-white w-1/3 text-center">Qualification</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="glass/30 group">
                                        <td className="p-10 border-r border-white/5 align-top space-y-8">
                                            <div className="space-y-4">
                                                <p className="text-white/60 font-medium">B.Tech. (with one Major & one Minor Specialization pattern)</p>
                                                <h4 className="text-xl font-bold text-white leading-snug">
                                                    Computer Science & Engineering with any one Major Specialization in
                                                </h4>
                                                <ul className="grid grid-cols-1 gap-2">
                                                    {["Artificial Intelligence & Machine Learning", "Cloud Engineering", "Software Engineering", "Data Engineering", "Cyber Security"].map((item) => (
                                                        <li key={item} className="flex items-center gap-3 text-white/70">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="space-y-4 pt-4">
                                                <h4 className="text-xl font-bold text-white leading-snug">
                                                    Minor Specialization (Choose any one Minor):
                                                </h4>
                                                <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                                                    {["Robotics", "Bioinformatics", "Industry & Manufacturing", "Nanotechnology", "Geoinformatics", "Chip & Semiconductor", "Smart Cities", "Design", "Fintech"].map((item) => (
                                                        <li key={item} className="flex items-center gap-3 text-white/70">
                                                            <span className="w-1 h-1 rounded-full bg-purple" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </td>

                                        <td className="p-10 border-r border-white/5 text-center align-middle">
                                            <span className="text-2xl font-bold text-white">4 Years</span>
                                        </td>

                                        <td className="p-10 border-r border-white/5 text-center align-middle">
                                            <div className="space-y-1">
                                                <span className="text-3xl font-bold text-accent">₹ 2,00,000</span>
                                                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest leading-none">Per Annum</p>
                                            </div>
                                        </td>

                                        <td className="p-10 align-top">
                                            <div className="space-y-6 text-white/70 leading-relaxed font-medium">
                                                <p>
                                                    Passed 10+2 from any government recognized board with <span className="text-white font-bold">Physics and Mathematics</span> as compulsory subjects,
                                                </p>
                                                <p className="">along with one of the following:</p>
                                                <div className="glass p-6 rounded-2xl border border-purple/20">
                                                    <p className="text-white font-bold">
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

            {/* Career Prospects Section - PURPLE */}
            <section className="py-16 relative overflow-hidden" style={{backgroundColor: '#5B1DD6'}}>
                
                <div className="container-boxed relative z-10">
                    <div className="max-w-6xl mx-auto">
                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-white mb-8"
                        >
                            Top Engineering{" "}
                            <span className="text-white font-serif">
                                Career Prospects
                            </span>
                        </motion.h2>

                        {/* Main Container with Ellipse and Snake-like Curved Line */}
                        <div className="relative mx-auto" style={{ width: '1230px', maxWidth: '100%' }}>
                            {/* Ellipse Background */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent/20 rounded-full" style={{ top: '36.93px' }}></div>
                            
                            {/* Snake-like Curved Path SVG */}
                            <svg 
                                className="absolute inset-0 w-full h-full pointer-events-none"
                                style={{ height: '250px', top: '60px' }}
                                viewBox="0 0 1230 250"
                                preserveAspectRatio="none"
                            >
                                {/* Snake-like curved path */}
                                <path
                                    d="M 50 50 
                                       Q 200 30, 350 50 
                                       T 650 50
                                       Q 800 70, 950 50
                                       T 1150 50
                                       L 1150 200
                                       Q 1000 220, 850 200
                                       T 550 200
                                       Q 400 180, 250 200
                                       T 50 200
                                       Z"
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="8"
                                    strokeDasharray="48 12"
                                    strokeLinecap="round"
                                    opacity="0.5"
                                />
                                
                                {/* Gradient definition */}
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="7.31%" stopColor="#D8F602" stopOpacity="0.3" />
                                        <stop offset="96.42%" stopColor="#D8F602" stopOpacity="0.1" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Content Container */}
                            <div className="relative pt-16 pb-8 px-4">
                                {/* Top Row - 4 Cards */}
                                <div className="grid grid-cols-4 gap-8 mb-8">
                                    {[
                                        { id: "01", title: "AI Engineer" },
                                        { id: "02", title: "Full Stack Developer" },
                                        { id: "03", title: "Front-end Developer" },
                                        { id: "04", title: "DevOps Engineer" }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="relative glass rounded-lg shadow-sm border border-white/10 hover:border-accent/30 transition-all"
                                            style={{ height: '92px' }}
                                        >
                                            <div className="flex items-center gap-4 p-4" style={{ gap: '17px' }}>
                                                {/* Number */}
                                                <span 
                                                    className="text-accent font-semibold"
                                                    style={{ 
                                                        width: '25px',
                                                        height: '30px',
                                                        fontFamily: 'Outfit',
                                                        fontWeight: '500',
                                                        fontSize: '24px',
                                                        lineHeight: '100%',
                                                        letterSpacing: '1%'
                                                    }}
                                                >
                                                    {item.id}
                                                </span>

                                                {/* Text */}
                                                <p className="text-white font-medium leading-snug">
                                                    {item.title}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Bottom Row - 4 Cards */}
                                <div className="grid grid-cols-4 gap-8">
                                    {[
                                        { id: "05", title: "Machine Learning Engineer" },
                                        { id: "06", title: "Quality Assurance Engineer" },
                                        { id: "07", title: "Mobile App Developer" },
                                        { id: "08", title: "Cybersecurity Analyst" }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: (index + 4) * 0.1 }}
                                            className="relative bg-white rounded-lg shadow-sm border border-gray-100"
                                            style={{ height: '92px' }}
                                        >
                                            <div className="flex items-center gap-4 p-4" style={{ gap: '17px' }}>
                                                {/* Number */}
                                                <span 
                                                    className="text-purple font-semibold"
                                                    style={{ 
                                                        width: '25px',
                                                        height: '30px',
                                                        fontFamily: 'Outfit',
                                                        fontWeight: '500',
                                                        fontSize: '24px',
                                                        lineHeight: '100%',
                                                        letterSpacing: '1%'
                                                    }}
                                                >
                                                    {item.id}
                                                </span>

                                                {/* Text */}
                                                <p className="text-white font-medium leading-snug">
                                                    {item.title}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emerging Trends Section - NEON */}
            <section className="py-24 relative overflow-hidden" style={{backgroundColor: '#D8F602'}}>
                
                <div className="container-boxed relative z-10">
                    <div className="max-w-[1224px] mx-auto relative">
                        {/* Main Container */}
                        <div className="glass flex flex-col border border-white/10 rounded-3xl shadow-2xl">
                            {/* Heading Area */}
                            <div className="px-8 pt-8 pb-8">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-[32px] font-bold text-black tracking-tight"
                                >
                                    Emerging <span className="text-black font-serif">Trends</span>
                                </motion.h2>
                            </div>

                            {/* 5 Cards Row - Flex container filling full width */}
                            <div className="flex w-full mt-auto">
                                {[
                                    {
                                        id: "01",
                                        title: "Software\nEngineering for AI\nSystems",
                                        bg: "bg-purple/10",
                                        numColor: "text-accent"
                                    },
                                    {
                                        id: "02",
                                        title: "DevOps and\nContinuous\nEverything",
                                        bg: "bg-accent/10",
                                        numColor: "text-purple"
                                    },
                                    {
                                        id: "03",
                                        title: "Quantum\nSoftware\nEngineering",
                                        bg: "bg-purple/5",
                                        numColor: "text-accent"
                                    },
                                    {
                                        id: "04",
                                        title: "AI-Driven\nSoftware\nEngineering",
                                        bg: "bg-accent/5",
                                        numColor: "text-purple"
                                    },
                                    {
                                        id: "05",
                                        title: "Full Stack\nDevelopment",
                                        bg: "bg-purple/10",
                                        numColor: "text-accent"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`flex-1 ${item.bg} p-6 min-h-[160px] flex flex-col gap-4 border-t-[1px] border-black/5`}
                                    >
                                        <span className={`text-[24px] font-medium ${item.numColor}`}>
                                            {item.id}
                                        </span>
                                        <p className="text-[15px] leading-snug font-medium text-black whitespace-pre-line">
                                            {item.title}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Prospective Placement Partners Section - BLACK */}
            <section className="bg-black py-16 text-white relative overflow-hidden">
                
                <div className="container-boxed text-center relative z-10">
                    <div className="max-w-[1224px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16 relative inline-block"
                        >
                            <h2 className="text-[40px] font-bold text-white tracking-tight">
                                Prospective Placement <span className="text-white font-serif">Partners</span>
                            </h2>
                            {/* Simple purple underline curve under 'Partners' */}
                            <svg className="absolute -bottom-4 right-0 w-[200px] h-[12px] text-accent/30" viewBox="0 0 200 12" fill="none">
                                <path d="M2 10C50 4 150 2 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                        </motion.div>

                        {/* Top row of logos */}
                        <div className="flex justify-center gap-6 mb-6 flex-wrap">
                            {[
                                { name: "Google", src: "/ProgramPartners/google.webp", width: "w-[180px]" },
                                { name: "Microsoft", src: "/ProgramPartners/micro.webp", width: "w-[200px]" },
                                { name: "Amazon", src: "/Other/amazon.png", fallback: "amazon", width: "w-[180px]" },
                                { name: "Meta", src: "/Other/meta.png", fallback: "meta", width: "w-[180px]" },
                                { name: "Infosys", src: "/Other/infosys.png", fallback: "infosys", width: "w-[180px]" },
                                { name: "TCS", src: "/Other/tcs.png", fallback: "tcs", width: "w-[160px]" }
                            ].map((partner, idx) => (
                                <motion.div
                                    key={`top-${idx}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`glass h-[90px] ${partner.width} flex items-center justify-center p-6 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all border border-white/10`}
                                >
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                            src={partner.src}
                                            alt={partner.name}
                                            fill
                                            className="object-contain"
                                            onError={(e) => {
                                                // Fallback to text if image not found during dev
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement?.classList.add('text-2xl', 'font-bold', 'text-gray-400');
                                                if (e.currentTarget.parentElement) {
                                                    e.currentTarget.parentElement.innerText = partner.name;
                                                }
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom row of logos */}
                        <div className="flex justify-center gap-6 flex-wrap">
                            {[
                                { name: "Wipro", src: "/Other/wipro.png", fallback: "wipro", width: "w-[180px]" },
                                { name: "Accenture", src: "/Other/accenture.png", fallback: "accenture", width: "w-[200px]" },
                                { name: "Zerodha", src: "/Other/zerodha.png", fallback: "zerodha", width: "w-[180px]" },
                                { name: "CRED", src: "/Other/cred.png", fallback: "cred", width: "w-[160px]" },
                                { name: "Swiggy", src: "/Other/swiggy.png", fallback: "swiggy", width: "w-[180px]" }
                            ].map((partner, idx) => (
                                <motion.div
                                    key={`bottom-${idx}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (idx + 6) * 0.1 }}
                                    className={`glass h-[90px] ${partner.width} flex items-center justify-center p-6 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all border border-white/10`}
                                >
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                            src={partner.src}
                                            alt={partner.name}
                                            fill
                                            className="object-contain"
                                            onError={(e) => {
                                                // Fallback to text if image not found during dev
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement?.classList.add('text-2xl', 'font-bold', 'text-gray-400');
                                                if (e.currentTarget.parentElement) {
                                                    e.currentTarget.parentElement.innerText = partner.name;
                                                }
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* An Overview Section - PURPLE */}
            <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#5B1DD6'}}>
                
                <div className="container-boxed relative z-10">
                    <div className="max-w-[1224px] mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[40px] font-bold text-white tracking-tight mb-12"
                        >
                            An <span className="text-white font-serif">Overview</span>
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { value: "10,000+", label: "Current students in various\ncourses" },
                                { value: "125 +", label: "Industry tie-ups for skill\ndevelopment" },
                                { value: "40 K", label: "Alumni working worldwide in\nMNCs" },
                                { value: "340+", label: "Placement offers in\nBatch-2024" },
                                { value: "42 LPA", label: "Highest package offered in\n2024" },
                                { value: "4.1 LPA", label: "Average package in\nbatch-2022" },
                                { value: "45 Acre", label: "Lush green campus with\nhostel" },
                                { value: "10,000", label: "Sq. ft. Innovation lab for\nprojects" }
                            ].map((stat, idx) => (
                                <motion.div
                                    key={`stat-${idx}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="glass p-8 flex flex-col justify-start border border-white/10 hover:border-accent/30 transition-all"
                                >
                                    <div className="border-b-[1.5px] border-accent/20 pb-4 mb-4">
                                        <h3 className="text-[28px] font-bold text-white">
                                            {stat.value}
                                        </h3>
                                    </div>
                                    <p className="text-[14px] leading-relaxed text-white/80 font-medium whitespace-pre-line">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* AESTR @Advantages Section - NEON */}
            <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#D8F602'}}>
                
                <div className="container-boxed relative z-10">
                    <div className="max-w-[1224px] mx-auto">
                        <div className="mb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative inline-block mb-4"
                            >
                                <h2 className="text-[40px] font-bold text-black tracking-tight">
                                    AESTR <span className="text-black font-serif">@Advantages</span>
                                </h2>
                                {/* Simple purple underline curve under '@Advantages' */}
                                <svg className="absolute -bottom-2 right-0 w-[240px] h-[12px] text-accent/30" viewBox="0 0 240 12" fill="none">
                                    <path d="M2 10C60 4 180 2 238 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </motion.div>
                            
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-[18px] text-black/80 font-medium mt-6 max-w-4xl"
                            >
                                Train for roles powering the next generation of banking, robotics, healthcare, and more—with real-world impact and future security.
                            </motion.p>
                        </div>

                        {/* Top Row - 3 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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
                                    className="glass p-8 flex items-center gap-6 relative overflow-hidden border border-white/10 hover:border-accent/30 transition-all"
                                >
                                    {/* Large background A */}
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[120px] font-black text-purple/20 opacity-50 select-none pointer-events-none z-0">
                                        A
                                    </div>
                                    
                                    <div className="relative z-10 flex items-center gap-6 w-full">
                                        <span className="text-[48px] font-medium text-foreground">
                                            {card.num}
                                        </span>
                                        <p className="text-[16px] leading-snug text-foreground/80 font-medium whitespace-pre-line">
                                            {card.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom Full Width Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="glass p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden border border-white/10"
                        >
                            <p className="text-[24px] md:text-[28px] leading-snug font-medium text-foreground max-w-4xl relative z-10">
                                Student chapters of Professional Bodies IEEE, CSI, NPTEL, ICT, IETE, SAE, IAESTE, etc.
                            </p>
                            
                            <button className="bg-accent text-black px-8 py-4 flex items-center gap-3 hover:bg-accent/90 transition-colors relative z-10 whitespace-nowrap font-black uppercase tracking-tight">
                                <span className="text-[14px] font-medium">Apply Now</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Future Scope Section - BLACK */}
            <section className="py-20 bg-black text-white relative overflow-hidden">
                
                <div className="container-boxed relative z-10">
                    <div className="max-w-[1224px] mx-auto glass rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row relative min-h-[400px] border border-white/10">
                        {/* Left Content Side */}
                        <div className="p-12 md:p-16 flex-1 z-10 relative">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-[40px] leading-tight font-bold text-white mb-8">
                                    Future Scope of<br />
                                    <span className="text-white">Software Engineering</span>
                                </h2>

                                <h3 className="text-[20px] font-bold text-white mb-6">
                                    Growing Demand
                                </h3>

                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="w-[6px] h-[6px] rounded-full bg-white mt-2 flex-shrink-0"></span>
                                        <p className="text-[16px] leading-relaxed text-white/80 font-medium">
                                            Every industry now runs on software: healthcare, finance, education, logistics, etc.
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-[6px] h-[6px] rounded-full bg-white mt-2 flex-shrink-0"></span>
                                        <p className="text-[16px] leading-relaxed text-white/80 font-medium">
                                            Startups and global tech companies are hiring aggressively.
                                        </p>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>

                        {/* Right Image Side */}
                        <div className="flex-1 relative min-h-[300px] md:min-h-full">
                            {/* Purple Background Shape */}
                            <div className="absolute right-0 bottom-0 w-full h-[60%] bg-purple/20 rounded-tl-[100px] z-0"></div>
                            
                            {/* Robot Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="absolute right-0 bottom-0 w-full h-[120%] z-10 flex items-end justify-end translate-y-8"
                            >
                                <div className="relative w-[120%] h-full">
                                    <Image
                                        src="/Other/cloud-robot.png"
                                        alt="Future of Software Engineering Robot"
                                        fill
                                        className="object-contain object-bottom"
                                        onError={(e) => {
                                            // Fallback if cloud-robot.png doesn't exist
                                            e.currentTarget.src = "/Other/future-robot.png";
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Innovation Labs of 2030 Section */}
            <section className="relative py-24 bg-black overflow-hidden text-foreground">
                {/* Ambient Background Glows */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[200px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple/20 rounded-full blur-[150px] pointer-events-none" />
                <div className="container-boxed relative z-10">
                    <div className="space-y-24 max-w-[1224px] mx-auto">
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="flex items-start gap-6"
                            >
                                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#D7F601] flex items-center justify-center text-3xl md:text-4xl font-black text-black bg-[#D7F601] shadow-[0_0_20px_rgba(215,246,1,0.5)]">
                                    5
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white flex flex-wrap items-center gap-4">
                                        Innovation labs <span className="text-[#D7F601] italic">of 2030</span>
                                    </h2>
                                    <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
                                        Learn from the architects of tomorrow's AI. AESTR is the brainchild of leading AI engineers dedicated to cultivating the next generation of tech innovators.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    { title: 'Exclusive designs', desc: 'Co-created with insights from our work with DRDO, Silicon Valley startups, and our US-based company, Shodh AI (a top 1% AI startup).' },
                                    { title: 'Become a domain champion', desc: 'Engage with at least three labs or achieve PhD-level expertise by dedicating your four years to a single lab.' },
                                    { title: 'Expert-guided product development', desc: 'Each lab has dedicated experts to help you transform your innovative ideas into real-world products.' }
                                ].map((card, i) => (
                                    <motion.div
                                        key={card.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 group hover:bg-[#D7F601]/5 hover:border-[#D7F601]/30 transition-all duration-300"
                                    >
                                        <h4 className="text-base font-bold text-[#D7F601] mb-4 leading-tight uppercase tracking-widest">{card.title}</h4>
                                        <p className="text-sm text-white/70 leading-relaxed font-semibold">{card.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Labs Alternating Grid */}
                        <div className="space-y-32">
                            {[
                                { 
                                    name: 'Apple Ecosystem', 
                                    image: '/Other/apple-lab.png', 
                                    description: 'Master the art of building world-class applications within the premium Apple environment. From deep dives into Swift and SwiftUI to exploring advanced architectures for macOS, iOS, and the revolutionary VisionOS, you will gain hands-on experience with the tools that power the most elegant user experiences. This lab provides a unique opportunity to understand the synergy between high-end hardware and intuitive software design, preparing you for elite development roles worldwide.'
                                },
                                { 
                                    name: 'NVIDIA Pipeline', 
                                    image: '/Other/Nvidia-Image.jpeg', 
                                    description: 'Harness the massive power of GPU-accelerated computing in our high-performance NVIDIA lab. Master CUDA programming, TensorRT optimization, and the foundational software stacks that drive today\'s generative AI and deep learning breakthroughs. You will build the data-intensive intelligence that moves the modern cloud and data center, positioning yourself at the core of the infrastructure revolution. By bridging the gap between raw compute power and algorithmic excellence, you become an architect of the AI-driven future.'
                                },
                                { 
                                    name: 'RISC-V Lab', 
                                    image: '/Other/DSC08333.jpg.jpeg', 
                                    description: 'Take your place at the forefront of India\'s semiconductor sovereignty in our pioneering RISC-V hardware lab. Students engage in the complete lifecycle of chip design, from RTL development to physical implementation of custom silicon for AI-specific workloads. By mastering open-source hardware architectures, you will be prepared to engineer the systems that define the next generation of global computing. This hands-on experience with silicon logic ensures you understand the fundamental building blocks of modern digital civilization.'
                                },
                                { 
                                    name: 'Embodied Brain Lab', 
                                    image: '/Other/lab-2.webp', 
                                    description: 'Experience the convergence of neural intelligence and physical machines in our robotics and autonomous systems lab. Using the NVIDIA Jetson platform and ROS, you will build robots that can perceive, reason, and react to real-time environments with machine precision. This lab focuses on creating advanced exoskeletons and smart robotics that will redefine the future of healthcare, logistics, and industrial automation. You will learn to breathe life into metal and silicon, mastering the complex interplay of computer vision and mechanical control.'
                                }
                            ].map((lab, idx) => (
                                <motion.div
                                    key={lab.name}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className={`flex flex-col md:items-center gap-12 lg:gap-20 ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                                >
                                    {/* Image Side */}
                                    <div className="flex-1 relative group cursor-pointer w-full">
                                        <div className="aspect-[16/9] w-full bg-black/40 rounded-[2.5rem] border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-[#D7F601]/30 group-hover:shadow-[0_0_80px_rgba(216,246,2,0.1)] relative">
                                            <Image
                                                src={lab.image}
                                                alt={lab.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                            <div className="absolute top-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                                                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-black bg-[#D7F601] px-5 py-2.5 rounded-full shadow-xl">System 0{idx + 1}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="flex-1 space-y-8">
                                        <div className="space-y-4">
                                            <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-[#D7F601] transition-colors">
                                                {lab.name}
                                            </h3>
                                            <p className="text-xl text-white/70 leading-relaxed font-medium">
                                                {lab.description}
                                            </p>
                                        </div>
                                        <button className="flex items-center gap-3 group text-[#D7F601] uppercase tracking-[0.25em] text-[10px] font-black hover:text-white transition-all duration-300 py-2">
                                            <span>View More</span>
                                            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Aestr Quality Assurance Pathways Section - PURPLE */}
            <section className="py-24 relative overflow-hidden" style={{backgroundColor: '#5B1DD6'}}>
                
                <div className="container-boxed text-center space-y-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Aestr Quality Assurance <span className="text-white">pathways</span>
                        </h2>
                        <p className="text-lg md:text-xl text-white/60 font-medium">
                            We provide clear, ambitious pathways to ensure your career takes off.
                        </p>
                    </motion.div>

                    {/* The Tree Diagram */}
                    <div className="relative pt-12 pb-20 max-w-[1224px] mx-auto">
                        {/* Central vertical stem */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-white hidden lg:block">
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                        </div>

                        {/* Horizontal branch */}
                        <div className="absolute top-16 left-[12.5%] right-[12.5%] h-px bg-white hidden lg:block">
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                        </div>

                        {/* Four boxes */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
                            {[
                                { title: "B.Tech AI With Shodh AI Track", sub: "35LPA+ jobs", color: "bg-accent/10 border-accent/30" },
                                { title: "Global Opportunities", sub: "2+2, 3+1 Programs", color: "bg-purple/10 border-purple/30" },
                                { title: "Industry Partner Training", sub: "& Direct Placements", color: "bg-accent/5 border-accent/20" },
                                { title: "Nurturing Entrepreneurs", sub: "Silicon Valley of AI", color: "bg-purple/5 border-purple/20" }
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
                                        <h4 className="text-xl md:text-2xl font-bold text-black leading-tight border-b-2 border-black/10 pb-4 mb-4">
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

            {/* Future Safe Professions CTA Section - NEON */}
            <section className="py-16 relative overflow-hidden" style={{backgroundColor: '#D8F602'}}>
                
                <div className="container-boxed relative z-10">
                    <div className="max-w-[1224px] mx-auto flex flex-col md:flex-row items-center justify-between relative min-h-[400px]">
                        
                        {/* Left Content Area */}
                        <div className="max-w-[800px] z-10 space-y-12 relative pb-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h2 className="text-[40px] md:text-[54px] leading-[1.1] font-bold text-black">
                                    Only at AESTR you are trained for<br/>
                                    <span className="text-black font-serif">future safe professions</span>
                                </h2>
                                <p className="text-[20px] text-black/80 font-medium tracking-wide">
                                    Browse further to know more about our courses
                                </p>
                            </motion.div>

                            {/* CTA Banner Box */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="glass py-6 px-8 flex flex-col sm:flex-row items-center justify-between gap-8 max-w-[700px] border border-white/10"
                            >
                                <p className="text-[18px] text-black/80 font-medium">
                                    Don't be shy. We enjoy connecting with students and parents.
                                </p>
                                <button className="bg-accent text-black px-8 py-4 flex items-center gap-3 hover:bg-accent/90 transition-colors whitespace-nowrap font-black uppercase tracking-tight">
                                    <span className="text-[14px] font-medium">Apply Now</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </button>
                            </motion.div>
                        </div>

                        {/* Right Robot Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute right-0 bottom-0 md:-bottom-24 w-[500px] md:w-[700px] h-[600px] md:h-[800px] pointer-events-none z-0"
                        >
                            <Image
                                src="/Other/future-robot.png"
                                alt="AESTR AI Robot"
                                fill
                                className="object-contain object-bottom translate-x-20"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default AIMLSpecializationPage;
