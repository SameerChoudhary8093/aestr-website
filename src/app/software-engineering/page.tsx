'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Data ────────────────────────────────────────────────────────────────────

const curriculumHighlights = [
    '1. Programming Languages – C, C++, Java, Python',
    '2. Software Development Methodologies',
    '3. Advanced Software Engineering Topics',
    '4. Tools & Technologies like Version Control (Git/GitHub) etc',
    '5. Capstone Projects & Industry Exposure',
];

const yearData = [
    {
        year: 'Year: I',
        semesters: [
            {
                name: 'Semester 1',
                subjects: [
                    'Professional Development & Innovation Mindset I',
                    'Technical & Persuasive Communication Studio I',
                    'Sustainable Systems & Environmental Intelligence',
                    'Program Core',
                    'Foundational Physics for Engineering Systems I',
                    'Engineering Mathematics I: Calculus & Linear Systems',
                    'Applied Physics & Experimental Design Lab I',
                    'Innovation Catalyst I: Exploring Grand Challenges & Lab Immersion',
                    'Foundation of AI & Data Engineering',
                    'AI and Data Engineering Studio 1',
                    'Principles of Cyber Defence & Digital Trust',
                    'Cyber Defence Operation Lab I',
                    'Minor Specialization Foundations I',
                ],
            },
            {
                name: 'Semester 2',
                subjects: [
                    'Professional Development & Innovation Mindset II',
                    'Advanced Technical Communication & Collaborative Presentation Studio',
                    'Indian Heritage & Culture',
                    'Engineering Mathematics II: Differential Equations & Probabilistic Models',
                    'Foundational Physics for Engineering Systems II: Electromagnetism & Modern Physics',
                    'Applied Physics & Experimental Design Lab II',
                    'Innovation Catalyst II: Foundational Skills & Lab Project Prototyping',
                    'Cloud Systems & Infrastructure Essentials',
                    'Cloud Systems Deployment Studio',
                    'Software Design & Development Lifecycles',
                    'Agile Software Development Workshop',
                    'Minor Specialization Foundations II',
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
                    'Employability Skills-I',
                    'Proficiency and Co-Curricular Activities-III',
                    'Economics and Social Sciences',
                    'Data Structures and Algorithms',
                    'Principles of Programming Languages',
                    'Software Engineering Principles – OOAD Principles',
                    'Software Engineering Principles Lab – Object-Oriented Design & Modeling Studio',
                    'Data Structures and Algorithms Lab',
                    'Innovation Lab Project I: Software Requirements Engineering & Architectural Blueprint',
                    'Digital Systems & Logic Engineering',
                    'Digital Systems Design & Implementation Lab',
                    'Mobile Application Engineering: Android Foundations',
                    'Android Application Development Studio I',
                    'Digital Commerce Platforms & Growth Strategies',
                    'FutureSkills Prime: Specialized Tech Module I (Modern Programming Language Focus)',
                    'Minor Specialization Applied Project I',
                ],
            },
            {
                name: 'Semester 4',
                subjects: [
                    'Employability Skills-II',
                    'Proficiency and Co-Curricular Activities-IV',
                    'Software Engineering – Advanced Software Engineering Methodologies & Practices',
                    'Discrete Mathematics and Graph Theory',
                    'Core Java',
                    'Industrial Oriented Core Java Project Lab',
                    'Design Practice with UML Lab',
                    'Software Design and Architecture – Software Architecture Patterns & System Design',
                    'Software Design and Architecture Lab – Architectural Design & Prototyping Studio',
                    'Innovation Lab Project II: Core Module Development & Integration Testing',
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
                    'Employability Skills-III',
                    'Proficiency and Co-Curricular Activities-V',
                    'Database Management System',
                    'Logical & Functional Programming',
                    'Software Testing & QA – Advanced Software Testing, Automation & Quality Engineering',
                    'Software Testing & QA Lab – Test Automation & Quality Assurance Engineering Studio',
                    'Computer Architectures',
                    'Computer Architectures Lab',
                    'Database Management System Lab',
                    'Industrial Training Seminar',
                    'Innovation Lab Project III: Feature Enhancement & Refactoring for Scalability',
                    'Advanced Data Structures',
                    'Advanced Data Structures Lab',
                    'Advance Android-I',
                    'Project Advance Android-I (Lab)',
                    'Microprocessor & Interface',
                    'FutureSkills Prime: Advanced Tech Specialization I (Cloud-Native or Secure Software Development)',
                    'Minor Specialization Capstone Project Design',
                ],
            },
            {
                name: 'Semester 6',
                subjects: [
                    'Employability Skills IV',
                    'Proficiency and Co-Curricular Activities-VI',
                    'Design & Analysis of Algorithms',
                    'Theory of Computation',
                    'Computer Network',
                    'Software Project Management – Agile Project Management & DevOps Leadership',
                    'Software Project Management Lab – Agile Project Simulation & DevOps Toolchain Workshop',
                    'Computer Network Lab',
                    'Innovation Lab Project IV: System Integration, User Acceptance Testing & Deployment Preparation',
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
                    'Group Discussion, Aptitude & Reasoning-I',
                    'Proficiency and Co-Curricular Activities-VII',
                    'Network Security & Cryptography Fundamentals – Secure Software Design & Applied Cryptography',
                    'Operating Systems – Advanced OS Concepts for Software Engineers',
                    'Distributed Systems & Microservices Architecture',
                    'Agile & Testing – Advanced Agile Methodologies & Continuous Testing Strategies',
                    'Agile & Testing Lab – BDD/TDD Implementation & Continuous Testing Pipeline Studio',
                    'Innovation Lab Grand Challenge Seminar I: Software System Architecture Review & Scalability Ethics',
                    'Industrial Training Seminar',
                    'Innovation Lab Grand Challenge Realization: Alpha Software System Build & Integration',
                    'Intro to Data Mining & Warehousing',
                    'Digital Image Processing',
                    'X-Windows Lab – UX Design & Human-Computer Interaction Studio',
                    'Future Skills Prime: Emerging Tech Mastery I (AI in SE or Quantum Computing Software)',
                    'Minor Specialization Advanced Topics & Integration Seminar',
                ],
            },
            {
                name: 'Semester 8',
                subjects: [
                    'Strategic Problem Solving & Advanced Placement Preparation',
                    'Intellectual Property Rights',
                    'Seminar',
                    'Innovation Lab Grand Challenge Showcase: Software System Beta Release, Performance Metrics & Maintainability Report',
                    'Real Time Systems',
                    'Distributed Systems',
                    'Compiler Construction',
                    'Compiler Construction Lab',
                    'Embedded Systems',
                    'Advance Computer Architectures',
                    'Advance Computer Architectures Lab',
                    'CAD for VLSI',
                    'CAD for VLSI Lab',
                ],
            },
        ],
    },
];

const applications = [
    {
        title: 'Frontend Developer',
        description:
            'A Frontend Developer builds the visual and interactive parts of a website or app—the parts users see and use.',
        major: 'Software Engineering',
        lab: 'Augmented Human Lab',
        image: '/Other/lab-5.webp',
    },
    {
        title: 'Backend Developer',
        description:
            "A Backend Developer works on the server-side of a website or app—the part users don't see. They make sure everything runs behind the scenes.",
        major: 'Software Engineering',
        lab: 'Soft "Brain" Lab',
        image: '/Other/lab-4.webp',
    },
    {
        title: 'Full-Stack Developer',
        description:
            'A Full-Stack Developer is a professional who can work on both the frontend (client-side) and backend (server-side) of a web application.',
        major: 'Software Engineering',
        lab: 'Augmented Human Lab',
        image: '/Other/lab-1.webp',
    },
    {
        title: 'Software Architect',
        description:
            'A Software Architect designs the high-level structure of software systems to ensure they are scalable, efficient, and maintainable.',
        major: 'Software Engineering',
        lab: 'Soft "Brain" Lab',
        image: '/Other/lab-2.webp',
    },
];

const careerProspects = [
    'Software Developer / Engineer',
    'Full Stack Developer',
    'Front-end / Back-end Developer',
    'DevOps & Data Engineer',
    'Machine Learning Engineer',
    'Quality Assurance (QA) Engineer',
    'Mobile App Developer',
    'Cybersecurity Analyst',
];

const emergingTrends = [
    'Software Engineering for AI Systems',
    'DevOps and Continuous Everything',
    'Quantum Software Engineering',
    'AI-Driven Software Engineering',
    'Full Stack Development',
];

const partners = [
    { name: 'Google', logo: '/ProgramPartners/google.webp' },
    { name: 'Amazon', logo: '/placement/amazon.webp' },
    { name: 'NVIDIA', logo: '/placement/nvidia.webp' },
    { name: 'Accenture', logo: '/placement/accenture.webp' },
    { name: 'Deloitte', logo: '/placement/deloitte.webp' },
    { name: 'Bank of America', logo: '/placement/bankofamerica.webp' },
    { name: 'Jio', logo: '/placement/jio.webp' },
    { name: 'TCS', logo: '/placement/tcs.webp' },
    { name: 'Tech Mahindra', logo: '/placement/techmahednra.webp' },
    { name: 'Goldman Sachs', logo: '/placement/goldman.webp' },
    { name: 'Oracle', logo: '/placement/oracle.webp' },
    { name: 'Samsung', logo: '/placement/samsung.webp' },
    { name: 'Wipro', logo: '/placement/wipro.webp' },
    { name: 'Capgemini', logo: '/placement/capgemini.webp' },
    { name: 'HCL', logo: '/placement/hcl.webp' },
    { name: 'Cognizant', logo: '/placement/cognizant.webp' },
];

const stats = [
    { value: '10,000', suffix: '+', label: 'Current students in various courses' },
    { value: '125', suffix: '+', label: 'Industry tie-ups for skill development' },
    { value: '40', suffix: 'K', label: 'Alumni working worldwide in MNCs' },
    { value: '340', suffix: '+', label: 'Placement offers in Batch-2024' },
    { value: '42', suffix: 'LPA', label: 'Highest package offered in 2024' },
    { value: '4.1', suffix: 'LPA', label: 'Average package in batch-2022' },
    { value: '45', suffix: 'Acre', label: 'Lush green campus with hostel' },
    { value: '10,000', suffix: 'sq.ft', label: 'Innovation lab for projects' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const SoftwareEngineeringPage = () => {
    const [activeYear, setActiveYear] = useState(0);

    return (
        <main className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-accent selection:text-black">

            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Other/lab-1.webp"
                        alt="Software Engineering Lab"
                        fill
                        className="object-cover brightness-[0.25]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
                </div>

                {/* Ambient glows */}
                <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[130px] pointer-events-none z-0" />
                <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-purple/10 rounded-full blur-[100px] pointer-events-none z-0" />

                <div className="container-boxed relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-4xl space-y-8"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/25 text-accent text-[10px] font-orbitron font-black tracking-[0.3em] uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            B.Tech Major Specialization
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-black leading-[0.9] tracking-tighter">
                            B.Tech Computer Science<br className="hidden md:block" />
                            &amp; Engineering with<br className="hidden md:block" />
                            <span className="text-accent italic">Software Engineering</span>
                        </h1>

                        {/* Meta pills */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            {[
                                { label: 'Eligibility', value: 'SGVUEEE / JEE / CUET UG' },
                                { label: 'Duration', value: '4 Years (8 Semesters)' },
                            ].map(({ label, value }) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-3 px-5 py-3 bg-foreground/5 border border-foreground/10 rounded-xl backdrop-blur-sm"
                                >
                                    <span className="text-[10px] font-orbitron font-black text-accent uppercase tracking-[0.2em]">{label}</span>
                                    <div className="w-px h-4 bg-foreground/20" />
                                    <span className="text-sm font-bold text-foreground/90">{value}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <button className="btn-aestr flex items-center gap-2 group">
                                Apply Now
                                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </section>

            {/* ── WHAT IS SOFTWARE ENGINEERING ────────────────────────── */}
            <section className="py-28 relative bg-background-alt/30 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />
                <div className="container-boxed relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left – text */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-3">
                                <h2 className="text-4xl md:text-5xl font-orbitron font-black text-foreground leading-tight">
                                    What is<br />
                                    <span className="text-accent italic">Software Engineering?</span>
                                </h2>
                                <div className="h-1 w-16 bg-accent rounded-full" />
                            </div>
                            <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                                Software Engineering is the structured design, development, testing, and maintenance of software
                                systems. It combines computer science, mathematics, and engineering principles to build scalable,
                                secure, and reliable software.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: '⚡', label: 'Scalable Systems' },
                                    { icon: '🔒', label: 'Secure Software' },
                                    { icon: '🧪', label: 'Tested & Reliable' },
                                    { icon: '🛠️', label: 'Engineering Principles' },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex items-center gap-3 bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3.5 hover:border-accent/30 hover:bg-accent/5 transition-all"
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                        <span className="text-sm font-bold text-foreground/80">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right – image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            <div className="aspect-[4/3] bg-black/40 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl relative">
                                <Image
                                    src="/Other/Bootcamp.webp"
                                    alt="Software Engineering in action"
                                    fill
                                    className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/20 blur-[80px] rounded-full pointer-events-none opacity-60" />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 bg-accent text-black px-5 py-3 rounded-2xl font-orbitron font-black text-xs uppercase tracking-wider shadow-xl">
                                4-Year Program
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── CURRICULUM ───────────────────────────────────────────── */}
            <section className="py-28 relative bg-background overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="container-boxed relative z-10 space-y-16">

                    {/* — Highlights — */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-orbitron font-black text-foreground">Curriculum</h2>
                            <p className="text-2xl md:text-3xl font-orbitron font-light italic text-foreground/50 mt-1">
                                Curriculum <span className="text-accent">Highlights</span>
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {curriculumHighlights.map((h, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: i * 0.07 }}
                                    className="px-5 py-2.5 text-sm border border-foreground/15 text-foreground/70 rounded-lg font-medium bg-foreground/5 hover:border-accent/40 hover:text-accent transition-all cursor-default"
                                >
                                    {h}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Divider */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

                    {/* — Programme Curriculum — */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-orbitron font-black text-foreground">Programme</h2>
                            <p className="text-2xl md:text-3xl font-orbitron font-light italic text-foreground/50 mt-1">
                                <span className="text-accent">Curriculum</span>
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Year selector */}
                            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 shrink-0 lg:w-52">
                                {yearData.map((y, i) => (
                                    <button
                                        key={y.year}
                                        onClick={() => setActiveYear(i)}
                                        className={`flex items-center justify-between px-5 py-4 rounded-xl font-orbitron font-bold text-sm tracking-wide transition-all duration-300 whitespace-nowrap border ${
                                            activeYear === i
                                                ? 'bg-accent/15 border-accent/50 text-accent shadow-[0_0_20px_rgba(215,246,1,0.12)]'
                                                : 'bg-foreground/5 border-foreground/10 text-foreground/45 hover:text-foreground/80 hover:border-foreground/25'
                                        }`}
                                    >
                                        {y.year}
                                        <motion.span
                                            animate={{ opacity: activeYear === i ? 1 : 0, x: activeYear === i ? 0 : -6 }}
                                            transition={{ duration: 0.2 }}
                                        >→</motion.span>
                                    </button>
                                ))}
                            </div>

                            {/* Semester cards */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeYear}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -16 }}
                                    transition={{ duration: 0.35 }}
                                    className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
                                >
                                    {yearData[activeYear].semesters.map((sem) => (
                                        <div
                                            key={sem.name}
                                            className="glass rounded-2xl p-6 space-y-4 hover:border-accent/20 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-3 pb-3 border-b border-foreground/10">
                                                <div className="w-1.5 h-6 bg-accent rounded-full" />
                                                <h4 className="text-base font-orbitron font-bold text-foreground">{sem.name}</h4>
                                            </div>
                                            <ul className="space-y-2.5">
                                                {sem.subjects.map((s, si) => (
                                                    <li key={si} className="flex items-start gap-2.5">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-[7px] shrink-0" />
                                                        <span className="text-sm text-foreground/60 leading-relaxed font-medium">{s}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── APPLICATIONS OF SOFTWARE ENGINEERING ─────────────────── */}
            <section className="py-28 relative bg-background-alt/30 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container-boxed relative z-10 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-orbitron font-black text-foreground">
                            Applications of{' '}
                            <span className="text-accent italic">Software Engineering</span>
                        </h2>
                        <div className="h-1 w-16 bg-accent rounded-full mt-4" />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {applications.map((app, i) => (
                            <motion.div
                                key={app.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass group hover:border-accent/30 transition-all duration-500 overflow-hidden flex flex-col"
                            >
                                {/* Image */}
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <Image
                                        src={app.image}
                                        alt={app.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4 flex-1 flex flex-col">
                                    <h3 className="text-lg font-orbitron font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                                        {app.title}
                                    </h3>
                                    <p className="text-sm text-foreground/55 leading-relaxed font-medium flex-1">
                                        {app.description}
                                    </p>
                                    <div className="space-y-2 pt-2 border-t border-foreground/8">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] text-foreground/35 font-orbitron uppercase tracking-wider min-w-[2.5rem]">Major</span>
                                            <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-bold rounded-md">
                                                {app.major}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] text-foreground/35 font-orbitron uppercase tracking-wider min-w-[2.5rem]">Lab</span>
                                            <span className="px-3 py-1 bg-foreground/5 border border-foreground/10 text-foreground/65 text-xs font-bold rounded-md">
                                                {app.lab}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FEES STRUCTURE ───────────────────────────────────────── */}
            <section className="py-28 relative bg-background overflow-hidden">
                <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="container-boxed relative z-10 space-y-10">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-orbitron font-black text-foreground">
                            Fees <span className="text-accent italic">Structure</span>
                        </h2>
                        <div className="h-1 w-16 bg-accent rounded-full mt-4" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="overflow-x-auto"
                    >
                        <table className="w-full min-w-[700px] border-collapse">
                            <thead>
                                <tr>
                                    {['Program Name', 'Duration', 'Annual Fee (INR)', 'Qualification'].map((h) => (
                                        <th
                                            key={h}
                                            className="bg-accent/10 border border-accent/20 px-6 py-4 text-left text-sm font-orbitron font-bold text-foreground"
                                        >
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* Program name */}
                                    <td className="border border-foreground/10 px-6 py-8 align-top">
                                        <p className="text-sm text-foreground/55 mb-4">
                                            B.Tech. (with one Major &amp; one Minor Specialization pattern)
                                        </p>
                                        <p className="text-sm font-bold text-foreground mb-3">
                                            Computer Science &amp; Engineering with any one Major Specialization in
                                        </p>
                                        <ul className="space-y-1.5 mb-5">
                                            {['Cloud Engineering', 'Software Engineering', 'Artificial Intelligence & Machine Learning', 'Data Science', 'Cyber Security'].map(
                                                (item) => (
                                                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/65">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                                        {item}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <p className="text-sm font-bold text-foreground mb-3">
                                            Minor Specialization (Choose any one Minor):
                                        </p>
                                        <ul className="space-y-1.5">
                                            {['Robotics', 'Bioinformatics', 'Industry & Manufacturing', 'Nanotechnology', 'Geoinformatics', 'Chip & Semiconductor', 'Smart Cities', 'Design', 'Fintech'].map(
                                                (item) => (
                                                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/55">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-foreground/25 shrink-0" />
                                                        {item}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </td>

                                    {/* Duration */}
                                    <td className="border border-foreground/10 px-6 py-8 text-center align-middle bg-accent/5">
                                        <span className="text-xl font-orbitron font-black text-foreground">4 Years</span>
                                    </td>

                                    {/* Fee */}
                                    <td className="border border-foreground/10 px-6 py-8 text-center align-middle bg-accent/5">
                                        <span className="text-2xl font-orbitron font-black text-accent">₹ 2,00,000</span>
                                    </td>

                                    {/* Qualification */}
                                    <td className="border border-foreground/10 px-6 py-8 align-top">
                                        <p className="text-sm text-foreground/65 leading-relaxed mb-4">
                                            Passed 10+2 from any government recognized board with Physics and Mathematics as
                                            compulsory subjects, along with one of the following:
                                        </p>
                                        <p className="text-sm font-bold text-foreground">
                                            Chemistry / Biotechnology / Computer Science / Biology
                                        </p>
                                        <p className="text-sm text-foreground/55 mt-2">with at least 70%.</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>

            {/* ── CAREER PROSPECTS + EMERGING TRENDS ───────────────────── */}
            <section className="py-28 relative bg-background-alt/30 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple/8 rounded-full blur-[150px] pointer-events-none" />
                <div className="container-boxed relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

                        {/* Career Prospects */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-4xl md:text-5xl font-orbitron font-black text-foreground leading-tight">
                                    Top Engineering<br />
                                    <span className="text-accent italic">Career Prospects</span>
                                </h2>
                                <div className="h-1 w-16 bg-accent rounded-full mt-4" />
                            </div>
                            <div className="space-y-3">
                                {careerProspects.map((career, i) => (
                                    <motion.div
                                        key={career}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.06 }}
                                        className="flex items-center gap-5 p-4 bg-foreground/5 border border-foreground/10 rounded-xl hover:border-accent/30 hover:bg-accent/5 transition-all group cursor-default"
                                    >
                                        <span className="text-2xl font-orbitron font-black text-accent/25 group-hover:text-accent/70 transition-colors min-w-[3rem] text-right tabular-nums">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <div className="w-px h-5 bg-foreground/15 group-hover:bg-accent/30 transition-colors" />
                                        <span className="text-sm font-bold text-foreground/75 group-hover:text-foreground transition-colors">
                                            {career}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Emerging Trends */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-4xl md:text-5xl font-orbitron font-black text-foreground leading-tight">
                                    Emerging<br />
                                    <span className="text-accent italic">Trends</span>
                                </h2>
                                <div className="h-1 w-16 bg-accent rounded-full mt-4" />
                            </div>
                            <div className="space-y-5">
                                {emergingTrends.map((trend, i) => (
                                    <motion.div
                                        key={trend}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        className="glass p-6 rounded-2xl flex items-center gap-6 group hover:border-accent/30 transition-all duration-300 cursor-default"
                                    >
                                        <div className="text-3xl font-orbitron font-black text-accent/20 group-hover:text-accent/60 transition-colors min-w-[3rem] text-center tabular-nums">
                                            {String(i + 1).padStart(2, '0')}
                                        </div>
                                        <div className="w-px h-10 bg-foreground/10 group-hover:bg-accent/30 transition-colors" />
                                        <span className="text-base font-bold text-foreground/75 group-hover:text-foreground transition-colors leading-snug">
                                            {trend}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── PLACEMENT PARTNERS ───────────────────────────────────── */}
            <section className="py-28 relative bg-background overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[150px] pointer-events-none" />
                <div className="container-boxed relative z-10 space-y-12">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-orbitron font-black text-foreground">
                            Prospective{' '}
                            <span className="text-accent italic">Placement Partners</span>
                        </h2>
                        <div className="h-1 w-16 bg-accent rounded-full mt-4" />
                    </motion.div>

                    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                        {partners.map((partner, i) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
                                className="h-20 w-full bg-white rounded-xl flex items-center justify-center transition-all duration-400 hover:scale-105 shadow-sm relative overflow-hidden p-1.5 group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none" />
                                <div className="relative w-full h-full">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain mix-blend-multiply p-1 transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <span className="sr-only">{partner.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── STATS / OVERVIEW ─────────────────────────────────────── */}
            <section className="py-28 relative bg-background-alt overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/4 rounded-full blur-[200px] pointer-events-none" />
                <div className="container-boxed relative z-10 space-y-14">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-orbitron font-black text-foreground">
                            An <span className="text-accent italic">Overview</span>
                        </h2>
                        <div className="h-1 w-16 bg-accent rounded-full mt-4" />
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.06 }}
                                className="glass p-6 rounded-2xl space-y-3 group hover:border-accent/30 transition-all duration-300"
                            >
                                <div className="flex items-end gap-1.5">
                                    <span className="text-3xl md:text-4xl font-orbitron font-black text-accent leading-none">
                                        {stat.value}
                                    </span>
                                    <span className="text-base font-orbitron font-black text-foreground/40 pb-0.5">
                                        {stat.suffix}
                                    </span>
                                </div>
                                <p className="text-xs text-foreground/45 font-medium leading-snug">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ────────────────────────────────────────────── */}
            <section className="py-28 relative bg-background overflow-hidden">
                <div className="container-boxed relative z-10">
                    <div className="glass p-12 md:p-20 rounded-[4rem] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[130px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple/10 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1 space-y-8">
                                <h2 className="text-4xl md:text-6xl font-orbitron font-black leading-[0.9] uppercase tracking-tighter">
                                    Build The Future<br />
                                    <span className="text-accent italic">With Software</span>
                                </h2>
                                <p className="text-lg text-foreground/60 leading-relaxed font-bold max-w-xl">
                                    Join B.Tech Computer Science &amp; Engineering with Software Engineering specialization
                                    and become the architect of tomorrow&apos;s digital world.
                                </p>
                                <div className="flex flex-col sm:flex-row items-start gap-6 pt-2">
                                    <button className="btn-aestr !px-12 !py-5 group">
                                        APPLY FOR 2026 INTAKE
                                        <span className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                                    </button>
                                    <div className="flex items-center gap-3 self-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        <span className="text-xs font-orbitron font-bold text-foreground/35 tracking-[0.3em] uppercase">
                                            Limited Seats · 2026
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating robot */}
                            <div className="shrink-0 relative">
                                <motion.div
                                    animate={{ y: [0, -14, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                    className="relative w-56 h-56 md:w-80 md:h-80"
                                >
                                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-[80px] opacity-25" />
                                    <Image
                                        src="/Other/Robo.webp"
                                        alt="AESTR Robot"
                                        fill
                                        className="object-contain brightness-110"
                                    />
                                </motion.div>
                            </div>
                        </div>
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
                        <p className="text-[10px] font-orbitron font-black tracking-[0.4em] uppercase">
                            AESTR · Software Engineering © 2026
                        </p>
                    </div>
                    <div className="flex gap-10">
                        {['Privacy', 'Terms', 'Strategic Partners'].map((item) => (
                            <Link
                                key={item}
                                href="/"
                                className="text-[9px] font-orbitron font-black text-white hover:text-accent transition-colors uppercase tracking-[0.3em]"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default SoftwareEngineeringPage;
