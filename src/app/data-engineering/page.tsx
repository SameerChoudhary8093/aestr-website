'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from '@/components/AppLink';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

const yearData = [
    {
        year: "Year: I",
        semesters: [
            {
                title: "Semester: 1",
                subjects: [
                    "Calculus",
                    "Physics",
                    "Introduction to Programming",
                    "English Communication",
                    "Innovation Lab I",
                    "Yoga Education & Practices"
                ]
            },
            {
                title: "Semester: 2",
                subjects: [
                    "Probability & Statistics",
                    "EE Fundamentals",
                    "Data Structures",
                    "Professional Communication",
                    "Innovation Lab I",
                    "Environment Studies"
                ]
            }
        ]
    },
    {
        year: "Year: II",
        semesters: [
            {
                title: "Semester: 3",
                subjects: [
                    "Discrete Mathematical Structures",
                    "Digital Logic Design",
                    "Design & Analysis of Algorithms",
                    "Theory of Computation",
                    "Advanced Statistics for Data Science",
                    "Innovation Lab II"
                ]
            },
            {
                title: "Semester: 4",
                subjects: [
                    "Linear Algebra & Optimization",
                    "Computer Organization & Architecture",
                    "Operating Systems",
                    "Programming Methodology",
                    "Advanced SQL & NoSQL Databases",
                    "Innovation Lab III"
                ]
            }
        ]
    },
    {
        year: "Year: III",
        semesters: [
            {
                title: "Semester: 5",
                subjects: [
                    "Computer Networks",
                    "Compiler Design",
                    "Data Visualization & Storytelling",
                    "Big Data Technologies",
                    "Exploratory Minor",
                    "Innovation Lab IV"
                ]
            },
            {
                title: "Semester: 6",
                subjects: [
                    "Software Engineering",
                    "Database Management Systems",
                    "Predictive Modeling & Analytics",
                    "Time Series Analysis & Forecasting",
                    "Exploratory Minor",
                    "Innovation Lab IV"
                ]
            }
        ]
    },
    {
        year: "Year: IV",
        semesters: [
            {
                title: "Semester: 7",
                subjects: [
                    "High-Dimensional Data Analysis",
                    "Business Intelligence & Data Warehousing",
                    "Advanced Minor Selection",
                    "Open Elective I & II",
                    "Technical Seminar"
                ]
            },
            {
                title: "Semester: 8",
                subjects: [
                    "Mining Massive Datasets",
                    "Data Governance, Privacy & Ethics",
                    "Advanced Minor Selection",
                    "Open Elective III & IV",
                    "Major Project (Capstone)"
                ]
            }
        ]
    }
];

const YouTubePlayer = ({ videoId, title }: { videoId: string; title: string }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    if (isPlaying) {
        return (
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={title}
                className="w-full h-full rounded-3xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        );
    }

    return (
        <div
            className="relative w-full h-full cursor-pointer group rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(215,246,1,0.1)] border border-white/5"
            onClick={() => setIsPlaying(true)}
        >
            <Image
                src="/Other/Data.png"
                alt={title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />

        </div>
    );
};

export default function DataEngineeringSpecializationPage() {
    const [activeYear, setActiveYear] = useState(0);

    return (
        <main className="bg-background-alt min-h-screen text-foreground selection:bg-accent selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-44 pb-20 bg-[#5B1DD6] relative overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-full max-w-[500px] aspect-square bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />
                <div className="container-boxed w-full max-w-[1224px] mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <h2 className="text-sm md:text-base font-orbitron font-bold text-white/90 tracking-[0.2em] uppercase">
                                    B.Tech Computer Science & Engineering with
                                </h2>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-orbitron font-black text-white leading-tight">
                                    Data <span className="text-accent">Engineering</span>
                                </h1>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent border border-white/20">
                                        <BookOpen className="w-5 h-5" />
                                    </div>
                                    <p className="text-sm md:text-base font-medium text-white/90">Eligibility: SGVUEEE/JEE/CUET UG</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent border border-white/20">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <p className="text-sm md:text-base font-medium text-white/90">Duration: 4 Years (8 Semesters)</p>
                                </div>
                            </div>

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

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 30 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            className="relative mt-24"
                        >
                            <div className="aspect-[16/9] w-full">
                                <YouTubePlayer videoId="Y8rB6r2B19s" title="Data Engineering at AESTR" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What Is Section */}
            <section className="py-24 relative overflow-hidden" style={{backgroundColor: '#571AD0'}}>
                <div className="container-boxed w-full max-w-[1224px] mx-auto relative z-10 text-center flex flex-col items-center">
                    <div className="max-w-6xl space-y-8">
                        <motion.h2 className="text-3xl md:text-5xl font-orbitron font-black text-white">
                            What is <span className="text-accent">Data Engineering</span>?
                        </motion.h2>
                        <motion.div className="bg-black/20 p-6 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                <div className="space-y-4">
                                    <p className="text-lg md:text-xl text-white/90 leading-[1.5] font-medium">
                                        Data Engineering is the systematic application of <strong className="text-accent font-orbitron font-bold">software engineering</strong>, <strong className="text-accent font-orbitron font-bold">database systems</strong>, and <strong className="text-accent font-orbitron font-bold">distributed computing</strong> to create robust data pipelines and infrastructure.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-lg md:text-xl text-white/90 leading-[1.5] font-medium">
                                        It encompasses architectures for massive scale global data, ETL processes, real-time streaming, and building the pipelines that power global AI intelligence.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Curriculum Highlights */}
            <section className="py-24 bg-background-alt relative overflow-hidden">
                <div className="container-boxed relative z-10 w-full max-w-[1224px] mx-auto">
                    <div className="space-y-16">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-foreground tracking-tight">Curriculum</h2>
                            <h3 className="text-2xl text-foreground/60 font-orbitron font-bold">Curriculum Highlights</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                "1. Big Data Systems & NoSQL",
                                "2. Data Mining & Knowledge Discovery",
                                "3. MLOps & Data Pipelines",
                                "4. Information Retrieval",
                                "5. Data Visualization",
                                "6. Distributed Database Systems"
                            ].map((tag, i) => (
                                <motion.span
                                    key={tag}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-foreground/80 font-orbitron font-bold hover:border-accent/40 hover:text-accent hover:bg-white/10 transition-all text-xs md:text-sm uppercase tracking-widest text-center shadow-xl backdrop-blur-md border-l-4 border-l-accent/20"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>

                        <div className="h-px w-full bg-white/5" />

                        <div className="space-y-12 p-12 lg:p-16 rounded-[3rem]" style={{ backgroundColor: '#D8F602' }}>
                            <h3 className="text-5xl md:text-7xl font-orbitron font-black text-black tracking-tighter">Programme & Curriculum</h3>

                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-col gap-3 pb-4 lg:pb-0 lg:w-48 shrink-0">
                                    {yearData.map((y, i) => (
                                        <button
                                            key={y.year}
                                            onClick={() => setActiveYear(i)}
                                            className={`px-4 py-4 rounded-xl font-orbitron font-black text-xs uppercase tracking-widest transition-all duration-300 whitespace-nowrap text-center lg:text-left border ${activeYear === i
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
                                            <div key={sem.title} className="bg-background-alt p-8 rounded-3xl border border-white/5 shadow-2xl space-y-6 group hover:border-accent/20 transition-all">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-1 h-8 bg-accent rounded-full" />
                                                    <h4 className="text-2xl font-bold text-foreground">{sem.title}</h4>
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

            {/* Career Impact */}
            <section className="py-24 relative overflow-hidden" style={{backgroundColor: '#571AD0'}}>
                <div className="container-boxed w-full max-w-[1224px] mx-auto relative z-10">
                    <div className="space-y-20">
                        <div className="text-center space-y-4">
                            <motion.h2 className="text-4xl md:text-6xl lg:text-8xl font-orbitron font-black text-white tracking-tighter">
                                Career <span className="text-accent">Impact</span>
                            </motion.h2>
                            <p className="text-white/60 font-orbitron text-lg tracking-[0.2em] uppercase">Pathways for Data Engineers</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Data Architect", image: "/Other/_DSC0612.jpg", major: "Data Architecture", lab: "NVIDIA Pipeline" },
                                { title: "Big Data Engineer", image: "/Other/DSC01997.jpg", major: "Big Data Systems", lab: "Shodh AI Research" },
                                { title: "Cloud Data Engineer", image: "/Other/DSC08333.jpg.jpeg", major: "Cloud Computing", lab: "Embodied Brain Lab" },
                                { title: "MLOps Engineer", image: "/Other/image.jpeg", major: "MLOps Systems", lab: "Policy Hub" }
                            ].map((app, idx) => (
                                <motion.div key={idx} className="bg-black rounded-3xl overflow-hidden border border-white/10 hover:border-accent/40 transition-all group flex flex-col shadow-2xl">
                                    <div className="aspect-[4/5] relative overflow-hidden">
                                        <Image src={app.image} alt={app.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                    </div>
                                    <div className="p-8 space-y-5 -mt-20 relative z-10 bg-black/60 backdrop-blur-md">
                                        <h4 className="text-2xl font-orbitron font-black text-accent leading-tight">{app.title}</h4>
                                        <div className="pt-6 space-y-3 border-t border-white/10">
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

            {/* Fees Structure */}
            <section className="py-32 relative overflow-hidden" style={{backgroundColor: '#D8F602'}}>
                <div className="container-boxed relative z-10 w-full max-w-[1224px] mx-auto">
                    <div className="space-y-16">
                        <h2 className="text-5xl md:text-8xl font-orbitron font-black text-black tracking-tighter">Fees <span className="opacity-30">Structure</span></h2>
                        <div className="rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.3)] border border-white/5 overflow-hidden" style={{ backgroundColor: '#571AD0' }}>
                            <div className="hidden lg:grid grid-cols-12 bg-white/5 border-b border-white/5">
                                <div className="col-span-4 p-10 text-xs font-orbitron font-black text-accent uppercase tracking-[0.2em] border-r border-white/5 text-center">Specialization Architecture</div>
                                <div className="col-span-2 p-10 text-xs font-orbitron font-black text-accent uppercase tracking-[0.2em] border-r border-white/5 text-center">Duration</div>
                                <div className="col-span-3 p-10 text-xs font-orbitron font-black text-accent uppercase tracking-[0.2em] border-r border-white/5 text-center">Annual Investment</div>
                                <div className="col-span-3 p-10 text-xs font-orbitron font-black text-accent uppercase tracking-[0.2em] text-center">Entry Threshold</div>
                            </div>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-12 group">
                                <div className="col-span-1 lg:col-span-4 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5 align-top space-y-10">
                                    <div className="space-y-6">
                                        <p className="text-white/40 font-orbitron text-[10px] uppercase tracking-widest">Major Specialization</p>
                                        <h4 className="text-2xl font-orbitron font-black text-white">Data <span className="text-accent">Engineering</span></h4>
                                    </div>
                                    <div className="space-y-6 pt-6 border-t border-white/5">
                                        <p className="text-white/40 font-orbitron text-[10px] uppercase tracking-widest">Minor Specializations</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {["Robotics", "Cloud", "Cyber Security", "AI", "Blockchain"].map((item) => (
                                                <li key={item} className="flex items-center gap-3 text-white/70 text-sm font-medium">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />{item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="col-span-1 lg:col-span-2 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col items-center justify-center text-center">
                                    <span className="lg:hidden text-accent font-orbitron text-xs uppercase tracking-widest mb-2 font-bold">Duration</span>
                                    <div className="flex flex-col items-center">
                                        <span className="text-2xl font-orbitron font-black text-white">04</span>
                                        <p className="text-[10px] font-bold text-white/30 truncate mt-1">YEARS</p>
                                    </div>
                                </div>
                                
                                <div className="col-span-1 lg:col-span-3 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col items-center justify-center text-center">
                                    <span className="lg:hidden text-accent font-orbitron text-xs uppercase tracking-widest mb-2 font-bold">Annual Investment</span>
                                    <span className="text-accent font-black text-2xl lg:text-3xl">₹2.0L</span>
                                </div>
                                
                                <div className="col-span-1 lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center items-center lg:items-start">
                                    <span className="lg:hidden text-accent font-orbitron text-xs uppercase tracking-widest mb-4 font-bold text-center">Entry Threshold</span>
                                    <div className="text-white/80 font-medium text-center lg:text-left">
                                        70% Aggregate Minimum
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Innovation Labs */}
            <section className="py-32 relative overflow-hidden bg-black">
                <div className="container-boxed relative z-10 w-full max-w-[1224px] mx-auto">
                    <div className="space-y-20 text-center">
                        <h2 className="text-4xl md:text-7xl font-orbitron font-black text-white tracking-widest">Innovation <span className="text-accent">Labs</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Apple Ecosystem", image: "/Other/apple-lab.png" },
                                { title: "NVIDIA Pipeline", image: "/Other/Nvidia-Image.jpeg" },
                                { title: "RISC-V Lab", image: "/Other/DSC08333.jpg.jpeg" },
                                { title: "Embodied Brain Lab", image: "/Other/DSC01997.jpg" }
                            ].map((lab, idx) => (
                                <motion.div key={idx} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-accent transition-all group">
                                    <div className="aspect-video relative overflow-hidden">
                                        <Image src={lab.image} alt={lab.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <h4 className="p-6 text-xl font-orbitron font-black text-white">{lab.title}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
