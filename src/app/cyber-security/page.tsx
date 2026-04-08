'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
                    "Network Defense & countermeasures",
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
                    "Applied Cryptography & PKI",
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
                    "Ethical Hacking & Penetration Testing",
                    "Intrusion Detection & Prevention Systems",
                    "Exploratory Minor",
                    "Innovation Lab IV"
                ]
            },
            {
                title: "Semester: 6",
                subjects: [
                    "Software Engineering",
                    "Database Management Systems",
                    "Digital Forensics & Incident Response",
                    "Cyber Risk Management & GRC",
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
                    "Malware Analysis & Reverse Engineering",
                    "Cloud & Infrastructure Security",
                    "Advanced Minor Selection",
                    "Open Elective I & II",
                    "Technical Seminar"
                ]
            },
            {
                title: "Semester: 8",
                subjects: [
                    "SOC Operations & Threat Intelligence",
                    "Blockchain Security",
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

export default function CyberSecuritySpecializationPage() {
    const [activeYear, setActiveYear] = useState(0);

    return (
        <main className="bg-background-alt min-h-screen text-foreground selection:bg-accent selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-44 pb-20 bg-[#5B1DD6] relative overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />
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
                                    Cyber <span className="text-accent">Security</span>
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
                                <YouTubePlayer videoId="U_O1QKQCsGs" title="Cyber Security at AESTR" />
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
                            What is <span className="text-accent">Cyber Security</span>?
                        </motion.h2>
                        <motion.div className="bg-black/20 p-6 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                <div className="space-y-4">
                                    <p className="text-lg md:text-xl text-white/90 leading-[1.5] font-medium">
                                        Cyber Security is the practice of <strong className="text-accent font-orbitron font-bold">protecting</strong> systems, networks, and programs from digital attacks aimed at accessing, changing, or destroying sensitive information.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-lg md:text-xl text-white/90 leading-[1.5] font-medium">
                                        It encompasses ethical hacking, forensics, malware analysis, and the implementation of robust cryptographic frameworks to ensure data integrity and privacy in an increasingly connected world.
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
                                "1. Ethical Hacking & VAPT",
                                "2. Digital Forensics & IR",
                                "3. Cloud & Network Security",
                                "4. Applied Cryptography",
                                "5. SOC Operations & SIEM",
                                "6. Malware Analysis & RE"
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
                            <p className="text-white/60 font-orbitron text-lg tracking-[0.2em] uppercase">Pathways for Cyber Experts</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Ethical Hacker", image: "/Other/_DSC0612.jpg", major: "Vulnerability Research", lab: "NVIDIA Pipeline" },
                                { title: "Forensics Analyst", image: "/Other/DSC01997.jpg", major: "Digital Crime Lab", lab: "Shodh AI Research" },
                                { title: "Security Architect", image: "/Other/DSC08333.jpg.jpeg", major: "Infra Hardening", lab: "Embodied Brain Lab" },
                                { title: "Threat Intel Lead", image: "/Other/image.jpeg", major: "Strategic Defense", lab: "Policy Hub" }
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
                        <div className="overflow-x-auto rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.3)] border border-white/5" style={{backgroundColor: '#571AD0'}}>
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
                                                <h4 className="text-2xl font-orbitron font-black text-white">Cyber <span className="text-accent">Security</span></h4>
                                            </div>
                                            <div className="space-y-6 pt-6 border-t border-white/5">
                                                <p className="text-white/40 font-orbitron text-[10px] uppercase tracking-widest">Minor Specializations</p>
                                                <ul className="grid grid-cols-2 gap-4">
                                                    {["Robotics", "Data Engineering", "Software & Cloud", "AI", "Blockchain"].map((item) => (
                                                        <li key={item} className="flex items-center gap-3 text-white/70 text-sm font-medium">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />{item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </td>
                                        <td className="p-12 border-r border-white/5 text-center">04 <p className="text-[10px] font-bold text-white/30 truncate">YEARS</p></td>
                                        <td className="p-12 border-r border-white/5 text-center"><span className="text-accent font-black text-2xl">₹2.0L</span></td>
                                        <td className="p-12">70% Aggregate Minimum</td>
                                    </tr>
                                </tbody>
                            </table>
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
                                { title: "RISC-V Architectures", image: "/Other/DSC08333.jpg.jpeg" },
                                { title: "Shodh AI", image: "/Other/DSC01997.jpg" }
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
