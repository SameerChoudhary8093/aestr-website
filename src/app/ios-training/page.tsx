"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import {
    Search, Award, CheckCircle, Calendar, Clock, ArrowUpRight,
    ChevronDown, ChevronUp, BookOpen, Cpu, Layers, Database,
    Code, Sparkles, MapPin, TrendingUp, UserCheck, Check,
    ExternalLink, BookOpenCheck, ShieldAlert
} from 'lucide-react';

export default function IosTrainingPage() {
    // States for interactive components
    const [expandedModule, setExpandedModule] = useState<number | null>(null);
    const [showAllTrainees, setShowAllTrainees] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedTrainee, setExpandedTrainee] = useState<number | null>(null);
    const [selectedTeam, setSelectedTeam] = useState<string>('All');

    // Course modules
    const modules = [
        {
            title: "Swift Programming Fundamentals",
            hours: "60 Hours",
            topics: [
                { name: "Variables & Constants", desc: "Type safety, type inference, and basic structures." },
                { name: "Control Flow", desc: "If-else statements, switch statements, and loop variations." },
                { name: "Functions & Closures", desc: "Parameters, return types, nested functions, and inline blocks." },
                { name: "Structures & Classes", desc: "Value types versus reference types, inheritance, and initializers." },
                { name: "Optionals & Error Handling", desc: "Safe unwrapping, guard statements, throwing functions, and try-catch." }
            ]
        },
        {
            title: "Xcode & Apple Developer Ecosystem",
            hours: "40 Hours",
            topics: [
                { name: "Xcode Interface", desc: "Navigator, editor area, inspector pane, and canvas interface." },
                { name: "Simulator Environment", desc: "Multi-touch testing, device conditions, and coordinate systems." },
                { name: "Project Setup & Structuring", desc: "Configuration schemes, bundle identifiers, and assets cataloguing." },
                { name: "Apple Ecosystem Tools", desc: "Debugging tools, view debugger, and instruments integration." }
            ]
        },
        {
            title: "SwiftUI Basics",
            hours: "60 Hours",
            topics: [
                { name: "Views & Modifiers", desc: "Declarative building blocks and layout styling systems." },
                { name: "Layout Containers", desc: "Organizing components using VStack, HStack, and ZStack." },
                { name: "Navigation & Transitions", desc: "NavigationStack, sheets, popovers, and default transitions." },
                { name: "Standard Controls", desc: "Button, TextField, Toggle, Picker, and multi-format text renderers." }
            ]
        },
        {
            title: "Advanced SwiftUI & State",
            hours: "80 Hours",
            topics: [
                { name: "State Management", desc: "Understanding @State, @Binding, and modern state architectures." },
                { name: "Lists & Dynamic Collections", desc: "Optimized scroll views, tables, and swipe-action bindings." },
                { name: "Gestures & Micro-animations", desc: "Drag, tap, magnification gestures, and smooth spring physics." },
                { name: "API & Data Integration", desc: "Async/await networking, JSON decoding, and URLSession pipelines." }
            ]
        },
        {
            title: "App Development Practices",
            hours: "50 Hours",
            topics: [
                { name: "Apple Human Interface Guidelines", desc: "UI/UX design principles, responsive spacing, and accessibility (A11y)." },
                { name: "Debugging & Console Testing", desc: "Breakpoints, memory leak inspection, and Xcode logger diagnostics." },
                { name: "Performance Optimization", desc: "View rendering optimizations, list caching, and execution profiling." }
            ]
        },
        {
            title: "Project Work & Deployment",
            hours: "46 Hours",
            topics: [
                { name: "Real-world App Design", desc: "Modular architecture, repository patterns, and loose coupling." },
                { name: "Firebase Backend Hookup", desc: "Cloud firestore, real-time database listener, and Firebase Auth." },
                { name: "Testing & Archive Preparation", desc: "Unit testing, UI tests, and App Store Connect archiving." }
            ]
        }
    ];

    // Trainee Roster Data (30 students)
    const trainees = [
        { id: 1, name: "K. Sachin", score: 78, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Code Optimization & Clean Coding, UI/UX Enhancement, API Handling & Error Management", team: "Restaurant App" },
        { id: 2, name: "M. Satish", score: 75, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Code Optimization & Clean Coding, UI/UX Enhancement, API Handling & Error Management", team: "Restaurant App" },
        { id: 3, name: "Sumit Prakash", score: 95, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Testing & Quality Assurance, Advanced Swift Concepts, Security Practices", team: "Trip Expense App" },
        { id: 4, name: "Ritika Kumari", score: 85, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Consistency in Code Quality, Architecture Implementation, Error Handling & Edge Cases", team: "Trip Expense App" },
        { id: 5, name: "Ayekpam Prithviraj", score: 88, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Consistency in Code Quality, Architecture Implementation, Error Handling & Edge Cases", team: "Trip Expense App" },
        { id: 6, name: "Rajneesh Meena", score: 77, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Code Optimization & Clean Coding, UI/UX Enhancement, API Handling & Error Management", team: "SGVU Connect" },
        { id: 7, name: "Sonu Kumar", score: 80, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Consistency in Code Quality, Architecture Implementation, Error Handling & Edge Cases", team: "SGVU Connect" },
        { id: 8, name: "Sumit Tak", score: 95, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Testing & Quality Assurance, Advanced Swift Concepts, Security Practices", team: "Restaurant App" },
        { id: 9, name: "Somendra Yadav", score: 85, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Consistency in Code Quality, Architecture Implementation, Error Handling & Edge Cases", team: "Restaurant App" },
        { id: 10, name: "Siddharth Singh", score: 85, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Consistency in Code Quality, Architecture Implementation, Error Handling & Edge Cases", team: "SGVU Connect" },
        { id: 11, name: "Shaik Karimulla", score: 82, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Consistency in Code Quality, Architecture Implementation, Error Handling & Edge Cases", team: "Trip Expense App" },
        { id: 12, name: "Ankit Kumar", score: 77, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Swift, Understanding of Lifecycle, Debugging & Testing Skills", improvement: "Code Optimization & Clean Coding, UI/UX Enhancement, API Handling & Error Management", team: "Trip Expense App" },
        { id: 13, name: "Sachin Pareek", score: 76, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Swift, Understanding of Lifecycle, Debugging & Testing Skills", improvement: "Code Optimization & Clean Coding, UI/UX Enhancement, API Handling & Error Management", team: "Trip Expense App" },
        { id: 14, name: "Jyotish Kumar", score: 75, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Swift, Understanding of Lifecycle, Debugging & Testing Skills", improvement: "Code Optimization & Clean Coding, UI/UX Enhancement, API Handling & Error Management", team: "Restaurant App" },
        { id: 15, name: "Ayush Kumar", score: 85, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Consistency in Code Quality, Architecture Implementation, Error Handling & Edge Cases", team: "SGVU Connect" },
        { id: 16, name: "Sagar", score: 75, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Code Optimization & Clean Coding, UI/UX Enhancement, API Handling & Error Management", team: "Restaurant App" },
        { id: 17, name: "Vivek Yadav", score: 75, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Swift, Understanding of Lifecycle, Debugging & Testing Skills", improvement: "Code Optimization & Clean Coding, UI/UX Enhancement, API Handling & Error Management", team: "SGVU Connect" },
        { id: 18, name: "Shivdatt Singh", score: 78, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Swift, Understanding of Lifecycle, Debugging & Testing Skills", improvement: "Code Optimization & Clean Coding, UI/UX Enhancement, API Handling & Error Management", team: "Trip Expense App" },
        { id: 19, name: "Khushi", score: 80, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Consistency in Code Quality, Architecture Implementation, Error Handling & Edge Cases", team: "SGVU Connect" },
        { id: 20, name: "Gayatri", score: 76, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Swift, Understanding of Lifecycle, Debugging & Testing Skills", improvement: "Code Optimization & Clean Coding, UI/UX Enhancement, API Handling & Error Management", team: "Restaurant App" },
        { id: 21, name: "J Lakshman", score: 76, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Swift, Understanding of Lifecycle, Debugging & Testing Skills", improvement: "Code Optimization & Clean Coding, UI/UX Enhancement, API Handling & Error Management", team: "SGVU Connect" },
        { id: 22, name: "Lakshay Yadav", score: 80, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Consistency in Code Quality, Architecture Implementation, Error Handling & Edge Cases", team: "Restaurant App" },
        { id: 23, name: "Shambhawi", score: 87, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Consistency in Code Quality, Architecture Implementation, Error Handling & Edge Cases", team: "SGVU Connect" },
        { id: 24, name: "Sehaa Naz Rahman", score: 88, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Consistency in Code Quality, Architecture Implementation, Error Handling & Edge Cases", team: "Trip Expense App" },
        { id: 25, name: "Kavya Bansal", score: 87, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Consistency in Code Quality, Architecture Implementation, Error Handling & Edge Cases", team: "SGVU Connect" },
        { id: 26, name: "Kunal Jangid", score: 78, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Swift, Understanding of Lifecycle, Debugging & Testing Skills", improvement: "Code Optimization & Clean Coding, UI/UX Enhancement, API Handling & Error Management", team: "Restaurant App" },
        { id: 27, name: "Gopal Kumar", score: 79, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Swift, Understanding of Lifecycle, Debugging & Testing Skills", improvement: "Code Optimization & Clean Coding, UI/UX Enhancement, API Handling & Error Management", team: "SGVU Connect" },
        { id: 28, name: "Sakshi Khanchandani", score: 86, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Consistency in Code Quality, Architecture Implementation, Error Handling & Edge Cases", team: "Trip Expense App" },
        { id: 29, name: "Mihir Joshi", score: 80, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Consistency in Code Quality, Architecture Implementation, Error Handling & Edge Cases", team: "Trip Expense App" },
        { id: 30, name: "Shivagya Mathur", score: 80, strength: "Strong iOS Development Skills, Modern UI/UX Design Thinking, solid command of App Lifecycle, Debugging & Testing Skills", improvement: "Consistency in Code Quality, Architecture Implementation, Error Handling & Edge Cases", team: "Restaurant App" }
    ];

    // Smooth scrolling logic
    const scrollToSection = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Filter and Search Logic
    const filteredTrainees = useMemo(() => {
        return trainees.filter(t => {
            const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTeam = selectedTeam === 'All' || t.team === selectedTeam;
            return matchesSearch && matchesTeam;
        });
    }, [searchQuery, selectedTeam]);

    const displayedTrainees = useMemo(() => {
        if (showAllTrainees) return filteredTrainees;
        return filteredTrainees.slice(0, 6);
    }, [filteredTrainees, showAllTrainees]);

    return (
        <main className="min-h-screen bg-black relative flex flex-col font-sans selection:bg-accent selection:text-black text-[#EAF0BD]">
            <Navbar />

            {/* 1. HERO SECTION (Apple Dark-Premium style) */}
            <section className="pt-36 lg:pt-48 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-purple/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-[1400px] mx-auto w-full relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20">
                        {/* Hero Text */}
                        <div className="w-full lg:w-[55%] space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                <p className="text-[10px] font-orbitron font-extrabold uppercase tracking-widest text-[#EAF0BD]/85">AATCE Partnership</p>
                            </div>

                            <h1 className="font-orbitron font-black text-[9vw] sm:text-5xl lg:text-6xl xl:text-[80px] leading-[1] tracking-tight">
                                <span className="text-white block">iOS App</span>
                                <span className="text-accent drop-shadow-[0_0_20px_rgba(215,246,1,0.25)] block">Development</span>
                                <span className="text-white/60 block text-[5vw] sm:text-3xl lg:text-4xl xl:text-5xl mt-1 tracking-wide font-normal">With SwiftUI</span>
                            </h1>

                            <p className="text-[14px] md:text-[16px] leading-[1.8] text-white/70 font-medium max-w-xl">
                                An elite developer cohort training conducted under the Apple Authorized Training Centre For Education. Empowering students with cutting-edge mobile architectural skills using Swift, SwiftUI, Xcode, and Firebase.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="#curriculum"
                                    onClick={scrollToSection('curriculum')}
                                    className="btn-aestr font-bold text-xs"
                                >
                                    Explore Modules <span className="ml-2">↓</span>
                                </a>
                                <a
                                    href="#roster"
                                    onClick={scrollToSection('roster')}
                                    className="px-6 py-3 border border-white/20 rounded-[1.25rem] text-white font-orbitron font-bold text-xs uppercase tracking-wider hover:bg-white/5 hover:border-white/40 transition-all flex items-center gap-2"
                                >
                                    View Performance <ArrowUpRight className="w-4 h-4 text-accent" />
                                </a>
                            </div>
                        </div>

                        {/* Interactive Premium Simulator Mockup */}
                        <div className="w-full lg:w-[45%] relative">
                            <div className="relative aspect-video w-full rounded-2xl border border-white/10 bg-white/5 shadow-2xl overflow-hidden group flex items-center justify-center p-4">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-radial-gradient from-accent/10 via-transparent to-transparent opacity-50 group-hover:scale-110 transition-transform duration-1000 pointer-events-none" />

                                <div className="relative z-20 flex gap-4 w-full h-full items-center">
                                    {/* SwiftUI Code Editor mockup */}
                                    <div className="hidden sm:block flex-1 bg-[#181818]/90 border border-white/5 rounded-lg p-3 font-mono text-[10px] space-y-1.5 shadow-xl text-left overflow-hidden h-[90%]">
                                        <div className="flex gap-1.5 pb-2 border-b border-white/5">
                                            <span className="w-2 h-2 rounded-full bg-red-500" />
                                            <span className="w-2 h-2 rounded-full bg-yellow-500" />
                                            <span className="w-2 h-2 rounded-full bg-green-500" />
                                        </div>
                                        <p className="text-purple-400">import <span className="text-white">SwiftUI</span></p>
                                        <p className="text-purple-400">struct <span className="text-blue-400">MainView</span>: <span className="text-[#D7F601]">View</span> &#123;</p>
                                        <p className="text-[#888] pl-3">@State private var items = []</p>
                                        <p className="text-purple-400 pl-3">var <span className="text-blue-400">body</span>: some <span className="text-[#D7F601]">View</span> &#123;</p>
                                        <p className="text-blue-400 pl-6">VStack(alignment: .leading) &#123;</p>
                                        <p className="text-white pl-9">Text(<span className="text-green-300">"SGVU Connect"</span>)</p>
                                        <p className="text-blue-300 pl-12">.font(.largeTitle)</p>
                                        <p className="text-blue-300 pl-12">.bold()</p>
                                        <p className="text-white pl-9">Text(<span className="text-green-300">"Even Semester 2026"</span>)</p>
                                        <p className="text-[#888] pl-12">.foregroundColor(.secondary)</p>
                                        <p className="text-blue-400 pl-6">&#125;</p>
                                        <p className="text-blue-300 pl-6">.padding()</p>
                                        <p className="text-purple-400 pl-3">&#125;</p>
                                        <p className="text-purple-400">&#125;</p>
                                    </div>

                                    {/* iPhone Device Simulator mockup */}
                                    <div className="w-[130px] sm:w-[150px] aspect-[9/19] bg-[#0c0c0c] border-[3px] border-[#333] rounded-[24px] shadow-2xl p-1.5 relative flex flex-col overflow-hidden shrink-0 mx-auto">
                                        <div className="w-16 h-3 bg-[#333] rounded-full mx-auto mb-2 shrink-0 flex items-center justify-center">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
                                        </div>
                                        <div className="flex-grow rounded-[18px] bg-black/90 p-2.5 flex flex-col justify-between border border-white/5">
                                            <div className="space-y-1 text-left">
                                                <div className="flex justify-between items-center text-[7px] text-white/40">
                                                    <span>9:41 AM</span>
                                                    <span>AATCE 5G</span>
                                                </div>
                                                <div className="pt-3">
                                                    <span className="text-[6px] font-orbitron uppercase text-[#D7F601] tracking-widest font-black">SAVE₹ App</span>
                                                    <h4 className="text-[9px] font-black text-white leading-tight">Total Travel split</h4>
                                                </div>
                                            </div>
                                            <div className="bg-[#181818] border border-white/5 rounded-lg p-2 space-y-1.5 text-left">
                                                <p className="text-[7px] text-white/50">Spent on Trips</p>
                                                <h3 className="text-xs font-orbitron font-black text-[#D7F601]">₹24,430</h3>
                                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                                    <div className="h-full bg-accent w-[81%]" />
                                                </div>
                                            </div>
                                            <div className="bg-accent text-black rounded-lg p-1.5 text-center text-[7px] font-orbitron font-extrabold uppercase tracking-wide">
                                                Split Expense
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trainer & Info Cards (Neon Accent grid) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-8">
                        {/* Card 1: Apple Certified Trainer */}
                        <div className="bg-accent rounded-2xl p-6 relative group hover:-translate-y-1.5 transition-transform shadow-[0_0_20px_rgba(215,246,1,0.15)] flex flex-col justify-between min-h-[160px]">
                            <div>
                                <div className="flex justify-between items-start">
                                    <p className="text-black/60 text-[9px] font-orbitron uppercase tracking-widest font-black mb-3">Lead Instructor</p>
                                    <Award className="w-5 h-5 text-black/60" />
                                </div>
                                <h3 className="text-black font-orbitron font-black text-lg xl:text-xl uppercase mb-1 flex items-center gap-2">
                                    Himanshu Varshney
                                </h3>
                                <p className="text-black/80 text-[10px] xl:text-xs font-bold leading-normal">
                                    Apple Certified Trainer
                                </p>
                            </div>
                            <span className="text-black/40 text-[9px] font-orbitron tracking-widest uppercase font-extrabold pt-4 border-t border-black/10">Apple Certified</span>
                        </div>

                        {/* Card 2: Hours Metric */}
                        <div className="bg-accent rounded-2xl p-6 relative group hover:-translate-y-1.5 transition-transform shadow-[0_0_20px_rgba(215,246,1,0.15)] flex flex-col justify-between min-h-[160px]">
                            <div>
                                <div className="flex justify-between items-start">
                                    <p className="text-black/60 text-[9px] font-orbitron uppercase tracking-widest font-black mb-3">Academic Timeline</p>
                                    <Clock className="w-5 h-5 text-black/60" />
                                </div>
                                <h3 className="text-black font-orbitron font-black text-2xl xl:text-3xl uppercase mb-1">
                                    336 Hours
                                </h3>
                                <p className="text-black/80 text-[10px] xl:text-xs font-bold leading-normal">
                                    Rigorous Practical Coding Labs
                                </p>
                            </div>
                            <span className="text-black/40 text-[9px] font-orbitron tracking-widest uppercase font-extrabold pt-4 border-t border-black/10">Hands-on Labs</span>
                        </div>

                        {/* Card 3: Semester */}
                        <div className="bg-accent rounded-2xl p-6 relative group hover:-translate-y-1.5 transition-transform shadow-[0_0_20px_rgba(215,246,1,0.15)] flex flex-col justify-between min-h-[160px]">
                            <div>
                                <div className="flex justify-between items-start">
                                    <p className="text-black/60 text-[9px] font-orbitron uppercase tracking-widest font-black mb-3">Cohort Term</p>
                                    <Calendar className="w-5 h-5 text-black/60" />
                                </div>
                                <h3 className="text-black font-orbitron font-black text-lg xl:text-xl uppercase mb-1">
                                    Even Semester
                                </h3>
                                <p className="text-black/80 text-[10px] xl:text-xs font-bold leading-normal">
                                    Academic Cycle (2025-2026)
                                </p>
                            </div>
                            <span className="text-black/40 text-[9px] font-orbitron tracking-widest uppercase font-extrabold pt-4 border-t border-black/10">SGVU Campus</span>
                        </div>

                        {/* Card 4: Ecosystem Hook */}
                        <div className="bg-accent rounded-2xl p-6 relative group hover:-translate-y-1.5 transition-transform shadow-[0_0_20px_rgba(215,246,1,0.15)] flex flex-col justify-between min-h-[160px]">
                            <div>
                                <div className="flex justify-between items-start">
                                    <p className="text-black/60 text-[9px] font-orbitron uppercase tracking-widest font-black mb-3">Authorized Center</p>
                                    <Layers className="w-5 h-5 text-black/60" />
                                </div>
                                <h3 className="text-black font-orbitron font-black text-lg xl:text-xl uppercase mb-1">
                                    AATCE Setup
                                </h3>
                                <p className="text-black/80 text-[10px] xl:text-xs font-bold leading-normal">
                                    Apple Authorized Training Centre For Education
                                </p>
                            </div>
                            <span className="text-black/40 text-[9px] font-orbitron tracking-widest uppercase font-extrabold pt-4 border-t border-black/10">Academic Excellence</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. ABOUT THE PROGRAM (Purple Section) */}
            <section className="bg-purple text-white py-20 lg:py-28 px-6 md:px-12 lg:px-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient from-black/20 via-transparent to-transparent pointer-events-none" />
                <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left content description */}
                    <div className="space-y-10 lg:pt-4">
                        <div>
                            <div className="flex items-center gap-3 text-accent font-orbitron text-xs font-extrabold uppercase tracking-widest mb-3">
                                <span>01</span>
                                <span className="w-8 h-[2px] bg-accent" />
                                <span>Academic Scope</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-orbitron font-bold leading-[1.1] text-white">
                                Bridge Academic Concepts with Premium Ecosystems
                            </h2>
                        </div>

                        <div className="space-y-6 text-white/90 text-[15px] sm:text-base leading-[1.8] font-medium font-sans">
                            <p>
                                In today’s digital era, mobile applications have become essential tools for communication, finance, and institutional interaction. For AI/ML students, understanding mobile frontend development is crucial, as it serves as the primary interface for user interaction and data collection.
                            </p>
                            <p>
                                The iOS ecosystem, known for its leading security, performance, and premium user experience, provides an ideal platform for building scalable applications using tools like Swift and Xcode. This program bridges theoretical knowledge with practical skills like API integration, state management, and user-centric design.
                            </p>
                        </div>

                        {/* Interactive methodology summary */}
                        <div className="bg-black/15 border border-white/10 rounded-2xl p-6 space-y-4">
                            <h4 className="font-orbitron font-extrabold uppercase tracking-wider text-xs text-accent">Active Training Methodology</h4>
                            <div className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-wider text-white/95">
                                <div className="flex items-center gap-2.5">
                                    <span className="w-2 h-2 rounded-full bg-accent" />
                                    <span>Swift Concepts</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <span className="w-2 h-2 rounded-full bg-accent" />
                                    <span>Hands-on Sessions</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <span className="w-2 h-2 rounded-full bg-accent" />
                                    <span>Assignments & Tasks</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <span className="w-2 h-2 rounded-full bg-accent" />
                                    <span>Team Mini Projects</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right graphics (Apple Ecosystem / Glimpse grid) */}
                    <div className="space-y-6 flex flex-col">
                        <div className="flex items-end justify-between border-b border-white/10 pb-4 mb-2">
                            <h3 className="font-orbitron font-black text-xl uppercase tracking-widest text-white">Center Glimpse</h3>
                            <span className="text-white/40 text-[10px] font-orbitron tracking-widest font-black uppercase">Apple Authorized Labs</span>
                        </div>

                        {/* Top Large Video/Image */}
                        <div className="w-full aspect-[16/9] bg-black/40 rounded-2xl border border-white/10 relative overflow-hidden flex items-center justify-center shadow-2xl group">
                            <video
                                src="/ios-training/C0014.MP4"
                                autoPlay muted loop playsInline
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                        {/* Bottom Two Images */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="w-full aspect-[4/3] bg-white/10 rounded-2xl border border-white/10 relative overflow-hidden flex items-center justify-center shadow-xl group">
                                <Image src="/ios-training/_DSC6530.JPG" alt="Students learning" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
                            </div>
                            <div className="w-full aspect-[4/3] bg-white/10 rounded-2xl border border-white/10 relative overflow-hidden flex items-center justify-center shadow-xl group">
                                <Image src="/ios-training/WhatsApp Image 2026-04-10 at 20.59.26.jpeg" alt="Trainee team" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TRAINING OBJECTIVES (Neon Section) */}
            <section className="bg-accent text-black py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto w-full">

                    {/* Section Header */}
                    <div className="mb-16 text-center max-w-3xl mx-auto space-y-3">
                        <p className="font-orbitron font-extrabold text-[10px] tracking-[0.3em] uppercase text-black/60">Program Purpose</p>
                        <h2 className="font-orbitron font-black text-3xl sm:text-4xl lg:text-[52px] capitalize leading-[1.05] tracking-tight">
                            Core Training Objectives
                        </h2>
                        <div className="w-20 h-[3px] bg-black mx-auto mt-6" />
                    </div>

                    {/* Objectives Interactive Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {[
                            { index: "01", title: "iOS App Fundamentals", desc: "Introduce students to mobile architecture, modular views, and the core iOS application lifecycle.", icon: Cpu },
                            { index: "02", title: "Swift Programming Language", desc: "Provide in-depth conceptual & practical knowledge of the Swift programming language, data types, and functions.", icon: Code },
                            { index: "03", title: "UI Layouts with SwiftUI", desc: "Develop clean, interactive user interfaces using SwiftUI's declarative modifiers, containers, and gestures.", icon: Layers },
                            { index: "04", title: "Apple Developer Ecosystem", desc: "Gain functional proficiency in Xcode utilities, hardware simulator operations, and interface canvas debuggers.", icon: Sparkles },
                            { index: "05", title: "Scalable Full-stack Apps", desc: "Implement secure user authentication, CRUD data storage, and backend real-time sync with Firebase.", icon: Database },
                            { index: "06", title: "Architectural & Logic Skills", desc: "Enhance logical problem-solving, UI/UX optimization, and mobile software design patterns.", icon: TrendingUp }
                        ].map((obj, idx) => {
                            const IconComponent = obj.icon;
                            return (
                                <div key={idx} className="group bg-black rounded-3xl p-8 flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:scale-[1.01] transform transition-all duration-500 cursor-default relative overflow-hidden min-h-[250px]">
                                    <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="flex justify-between items-start relative z-10">
                                        <span className="font-orbitron font-black text-2xl text-accent/30 group-hover:text-accent transition-colors">{obj.index}</span>
                                        <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-lg text-accent bg-white/5 group-hover:bg-accent group-hover:text-black transition-colors">
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <div className="relative z-10 space-y-3 pt-8">
                                        <h3 className="font-orbitron font-extrabold text-white text-[15px] uppercase tracking-wider group-hover:text-accent transition-colors">{obj.title}</h3>
                                        <p className="text-[#ccc] text-xs leading-relaxed font-semibold italic">{obj.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. COURSE CURRICULUM / MODULES (Black Section with Expandable Accordions) */}
            <section id="curriculum" className="bg-[#111] text-white py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-[1400px] mx-auto w-full">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-center md:items-center justify-between mb-16 gap-6 text-center md:text-left">
                        <div className="space-y-2 flex flex-col items-center md:items-start w-full">
                            <p className="text-accent font-orbitron text-[9px] tracking-[0.3em] font-black uppercase">Structured Syllabus</p>
                            <h2 className="font-orbitron font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.1em] flex flex-wrap justify-center md:justify-start items-center gap-x-3 gap-y-1 w-full">
                                <span className="text-white">Technical</span>
                                <span className="text-accent">Curriculum</span>
                            </h2>
                        </div>
                        <div className="flex-grow h-[1px] bg-white/10 mx-6 hidden lg:block" />
                        <p className="text-white/30 text-[9px] font-orbitron tracking-[0.3em] font-black uppercase whitespace-nowrap hidden md:block">336 Hours Total Syllabus</p>
                    </div>

                    {/* Expandable Accordion Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Summary panel */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-purple p-8 border border-white/10 rounded-2xl space-y-6 shadow-xl">
                                <h3 className="font-orbitron font-extrabold text-xl text-white uppercase tracking-wider">Curriculum Roadmap</h3>
                                <p className="text-xs text-white/80 leading-relaxed font-medium">
                                    The technical curriculum was carefully split into six specialized educational modules. Moving iteratively from fundamental compile rules to full-stack integration protocols.
                                </p>

                                <div className="space-y-4 pt-4 border-t border-white/20">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-white/70 uppercase tracking-wider">Lectures & Conceptual Labs</span>
                                        <span className="text-accent font-orbitron font-black">180 Hours</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-white/70 uppercase tracking-wider">Capstone Implementation</span>
                                        <span className="text-accent font-orbitron font-black">156 Hours</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs border-t border-white/20 pt-3">
                                        <span className="text-white uppercase font-black tracking-wider">Total Certified Time</span>
                                        <span className="text-accent font-orbitron font-black text-sm">336 Hours</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Accordion List */}
                        <div className="lg:col-span-8 space-y-4">
                            {modules.map((mod, idx) => (
                                <div key={idx} className="border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 bg-purple shadow-lg">
                                    <button
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-black/15 transition-colors focus:outline-none"
                                        onClick={() => setExpandedModule(expandedModule === idx ? null : idx)}
                                    >
                                        <div className="flex gap-4 items-center">
                                            <span className="w-8 h-8 rounded-lg border border-accent/20 bg-accent/5 flex items-center justify-center font-orbitron font-black text-accent text-xs shrink-0">
                                                0{idx + 1}
                                            </span>
                                            <div>
                                                <h3 className="font-orbitron font-bold text-sm sm:text-base uppercase tracking-wider text-white">
                                                    {mod.title}
                                                </h3>
                                                <span className="text-[10px] text-accent font-bold uppercase tracking-wider">{mod.hours}</span>
                                            </div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                                            {expandedModule === idx ? (
                                                <ChevronUp className="w-4 h-4 text-accent" />
                                            ) : (
                                                <ChevronDown className="w-4 h-4 text-white/50" />
                                            )}
                                        </div>
                                    </button>

                                    {expandedModule === idx && (
                                        <div className="p-6 pt-0 border-t border-white/10 bg-black/15">
                                            <ul className="space-y-4 pt-6">
                                                {mod.topics.map((topic, j) => (
                                                    <li key={j} className="flex gap-4 items-start border-b border-white/5 last:border-b-0 pb-4 last:pb-0">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 animate-pulse" />
                                                        <div>
                                                            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white/90">{topic.name}</h4>
                                                            <p className="text-[11px] text-white/60 font-medium leading-relaxed pt-1">{topic.desc}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TOOLS & TECHNOLOGIES (Purple Grid) */}
            <section className="bg-purple text-white py-20 lg:py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto w-full space-y-16">
                    <div className="text-center space-y-3 max-w-2xl mx-auto">
                        <p className="font-orbitron font-extrabold text-[10px] tracking-[0.3em] uppercase text-accent">Apple Tech Stack</p>
                        <h2 className="font-orbitron font-black text-3xl md:text-4xl lg:text-[46px] uppercase tracking-tight text-white leading-none">
                            Tools & Technologies
                        </h2>
                        <div className="w-16 h-[3px] bg-accent mx-auto mt-4" />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            { name: "Swift", desc: "Core Language", tag: "v5.10" },
                            { name: "SwiftUI", desc: "Declarative UI", tag: "Native UI" },
                            { name: "Xcode", desc: "Development IDE", tag: "v15.4+" },
                            { name: "Firebase", desc: "Backend Cloud", tag: "Auth / DB" },
                            { name: "iOS SDK", desc: "Apple Core APIs", tag: "System APIs" },
                            { name: "JSON APIs", desc: "Data Pipelines", tag: "URLSession" }
                        ].map((tech, idx) => (
                            <div key={idx} className="bg-black/25 border border-white/10 rounded-2xl p-6 flex flex-col justify-between items-center text-center group hover:scale-[1.03] hover:border-accent/40 transition-all duration-300 relative shadow-lg min-h-[160px]">
                                <div className="absolute top-0 right-0 w-[50px] h-[50px] bg-accent/5 rounded-full blur-[30px] pointer-events-none" />
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                                    <span className="font-orbitron font-extrabold text-xs text-accent group-hover:text-black transition-colors duration-300">0{idx + 1}</span>
                                </div>
                                <div>
                                    <h4 className="font-orbitron font-black text-sm uppercase text-white leading-tight">{tech.name}</h4>
                                    <p className="text-[10px] text-white/50 leading-normal pt-1 font-medium">{tech.desc}</p>
                                </div>
                                <span className="mt-4 inline-block bg-white/5 border border-white/10 rounded px-2.5 py-0.5 text-[8px] font-orbitron font-bold uppercase tracking-wider text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-300">{tech.tag}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CAPSTONE PROJECTS (Neon Showcase Section) */}
            <section className="bg-accent text-black py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto w-full">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
                        <div className="space-y-2 text-center md:text-left">
                            <p className="font-orbitron font-black text-[10px] tracking-[0.3em] uppercase text-black/60">Student Projects</p>
                            <h2 className="font-orbitron font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter">
                                Capstone Showcase
                            </h2>
                        </div>
                        <div className="bg-black text-accent px-6 py-3 border-2 border-black rounded-[1.25rem] text-[10px] font-orbitron font-black uppercase tracking-wider shadow-[4px_4px_0px_rgba(255,255,255,0.4)]">
                            3 Teams / 30 Trainees
                        </div>
                    </div>

                    {/* Grid of Capstone Projects */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <div className="border-3 border-black bg-black text-white p-8 rounded-3xl flex flex-col justify-between min-h-[460px] transition-all group hover:scale-[1.01] hover:shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="space-y-6 relative z-10">
                                <div className="flex justify-between items-start">
                                    <span className="font-orbitron font-black text-accent text-xs">PROJECT 01</span>
                                    <span className="text-[10px] font-orbitron font-extrabold uppercase tracking-widest text-[#ccc] bg-white/5 px-2.5 py-0.5 rounded border border-white/10">10 Students</span>
                                </div>
                                <h3 className="font-orbitron font-black text-2xl lg:text-3xl text-white group-hover:text-accent transition-colors leading-tight">
                                    Trip Expense split<br />(SAVE₹ App)
                                </h3>
                                <div className="relative w-full h-64 rounded-xl overflow-hidden mt-4 group-hover:scale-[1.02] transition-transform duration-500">
                                    <Image src="/ios-training/Expensesplitter.png" alt="Trip Expense Mockup" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain" />
                                </div>
                                <p className="text-xs text-white/70 leading-relaxed font-semibold italic">
                                    Developed to help users manage and track travel expenses dynamically. Allows users to add, categorize, and monitor shared expense structures in real time during tours.
                                </p>
                            </div>

                            <div className="space-y-4 pt-10 border-t border-white/10 relative z-10">
                                <h4 className="text-[9px] uppercase font-orbitron font-black text-[#D7F601] tracking-widest">Key Platform Highlights</h4>
                                <div className="flex flex-wrap gap-2 text-[9px] font-black uppercase tracking-wider">
                                    <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded">SwiftUI Modules</span>
                                    <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded">State management</span>
                                    <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded">Data Persistence</span>
                                </div>
                                <div className="pt-2">
                                    <p className="text-[10px] text-white/50 leading-relaxed font-bold">Result: prototype delivered stable off-line local state rendering with perfect spring physics animations.</p>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="border-3 border-black bg-black text-white p-8 rounded-3xl flex flex-col justify-between min-h-[460px] transition-all group hover:scale-[1.01] hover:shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="space-y-6 relative z-10">
                                <div className="flex justify-between items-start">
                                    <span className="font-orbitron font-black text-accent text-xs">PROJECT 02</span>
                                    <span className="text-[10px] font-orbitron font-extrabold uppercase tracking-widest text-[#ccc] bg-white/5 px-2.5 py-0.5 rounded border border-white/10">10 Students</span>
                                </div>
                                <h3 className="font-orbitron font-black text-2xl lg:text-3xl text-accent leading-tight">
                                    SGVU CONNECT<br />Event System
                                </h3>
                                <div className="relative w-full h-64 rounded-xl overflow-hidden mt-4 group-hover:scale-[1.02] transition-transform duration-500">
                                    <Image src="/ios-training/SGVU-project-image.png" alt="SGVU Connect Mockup" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain" />
                                </div>
                                <p className="text-xs text-white/70 leading-relaxed font-semibold italic">
                                    Streamlined event operations on university campus. Unified platform for organizing registrations, role-based controls, dashboard analytics, and push updates.
                                </p>
                            </div>

                            <div className="space-y-4 pt-10 border-t border-white/10 relative z-10">
                                <h4 className="text-[9px] uppercase font-orbitron font-black text-accent tracking-widest">Key Platform Highlights</h4>
                                <div className="flex flex-wrap gap-2 text-[9px] font-black uppercase tracking-wider">
                                    <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded text-accent">Real-time sync</span>
                                    <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded">Role Dashboard</span>
                                    <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded">Firebase Auth</span>
                                </div>
                                <div className="pt-2">
                                    <p className="text-[10px] text-accent/70 leading-relaxed font-bold">Result: Successfully handled concurrent registrations showing zero latency in data syncing between platforms.</p>
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="border-3 border-black bg-black text-white p-8 rounded-3xl flex flex-col justify-between min-h-[460px] transition-all group hover:scale-[1.01] hover:shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="space-y-6 relative z-10">
                                <div className="flex justify-between items-start">
                                    <span className="font-orbitron font-black text-accent text-xs">PROJECT 03</span>
                                    <span className="text-[10px] font-orbitron font-extrabold uppercase tracking-widest text-[#ccc] bg-white/5 px-2.5 py-0.5 rounded border border-white/10">10 Students</span>
                                </div>
                                <h3 className="font-orbitron font-black text-2xl lg:text-3xl text-white group-hover:text-accent transition-colors leading-tight">
                                    Digital Restaurant<br />Dining Solution
                                </h3>
                                <div className="relative w-full h-64 rounded-xl overflow-hidden mt-4 group-hover:scale-[1.02] transition-transform duration-500">
                                    <Image src="/ios-training/restaurant-project.png" alt="Dining Solution Mockup" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain" />
                                </div>
                                <p className="text-xs text-white/70 leading-relaxed font-semibold italic">
                                    Enables diners to browse menus dynamically with structured categories, manage order baskets locally, explore pricing, and manage secure profiles.
                                </p>
                            </div>

                            <div className="space-y-4 pt-10 border-t border-white/10 relative z-10">
                                <h4 className="text-[9px] uppercase font-orbitron font-black text-[#D7F601] tracking-widest">Key Platform Highlights</h4>
                                <div className="flex flex-wrap gap-2 text-[9px] font-black uppercase tracking-wider">
                                    <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded">Menu Searching</span>
                                    <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded">Cart Management</span>
                                    <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded">Profile Auth</span>
                                </div>
                                <div className="pt-2">
                                    <p className="text-[10px] text-white/50 leading-relaxed font-bold">Result: Clean responsive UI built on SwiftUI matching advanced architectural design standards.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* 8. TRAINING GALLERY (Apple Minimalist Gallery placeholder elements) */}
            <section className="bg-accent text-black py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto w-full space-y-16">
                    <div className="flex items-center gap-4 mb-2">
                        <h2 className="font-orbitron font-black text-2xl md:text-4xl lg:text-5xl uppercase tracking-widest">Training Glimpse</h2>
                        <div className="flex-grow h-2 bg-black" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            "/ios-training/_DSC5523.JPG",
                            "/ios-training/2d00fc0d-3500-49cd-8f90-8b40ea8daeaf.JPG",
                            "/ios-training/90de21b6-3018-4b90-87ec-d4f716606523.JPG",
                            "/ios-training/IMG_2686 (1).JPG",
                            "/ios-training/IMG_2705.JPG",
                            "/ios-training/IMG_2710.jpg",
                            "/ios-training/IMG_2895.JPG",
                            "/ios-training/IMG_2903.JPG"
                        ].map((src, i) => (
                            <div key={i} className="aspect-[4/3] bg-black border-4 border-black rounded-2xl overflow-hidden group shadow-[10px_10px_0px_rgba(0,0,0,0.8)] relative">
                                <Image src={src} alt={`Training Image ${i + 1}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. STUDENT LEARNING OUTCOMES (Purple Checklist) */}
            <section className="bg-[#111] text-white py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left content panel */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-3">
                            <p className="font-orbitron font-extrabold text-[10px] tracking-[0.3em] uppercase text-accent">Career Assessment</p>
                            <h2 className="font-orbitron font-black text-3xl sm:text-4xl uppercase leading-none tracking-tight">
                                Student Learning Outcomes
                            </h2>
                        </div>
                        <p className="text-xs text-white/60 leading-relaxed font-semibold">
                            By the end of this 336-hour cohort program, participants successfully compiled, verified, and demonstrated professional competence in these core domains:
                        </p>

                        <div className="bg-white/5 border border-white/5 rounded-2xl p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[50px] h-[50px] bg-accent/5 rounded-full blur-[20px]" />
                            <h5 className="font-orbitron font-extrabold uppercase text-[10px] tracking-wider text-accent mb-2">Program Integrity</h5>
                            <p className="text-[11px] text-[#ccc] leading-normal font-semibold">Our pedagogical model integrates rigorous assessment filters ensuring students achieve strong operational readiness prior to corporate placement selections.</p>
                        </div>
                    </div>

                    {/* Right Checklist */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { t: "Swift UI Coding Frameworks", d: "Instantly build dynamic, scalable frontend layouts using reactive views." },
                            { t: "Swift Core Programming Concepts", d: "In-depth knowledge of functional options, types, generics, and errors." },
                            { t: "Interface Usability Principles", d: "Produce Apple Human Interface compliant components and fluid transitions." },
                            { t: "API Integration Methods", d: "Robust REST data communication and JSON decoding mapping methods." },
                            { t: "System Debugging & Profiling", d: "Troubleshoot latency, memory profiles, and coordinate leaks successfully." },
                            { t: "Enterprise Data Connections", d: "Connect live database environments, persistent memory, and security." }
                        ].map((out, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-3 text-left group hover:border-accent/30 transition-all">
                                <div className="flex justify-between items-center">
                                    <Check className="w-5 h-5 text-accent" />
                                    <span className="font-orbitron text-[9px] text-white/40">✓ PASS</span>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">{out.t}</h4>
                                    <p className="text-[10px] text-white/50 leading-relaxed pt-0.5">{out.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Gallery Strip */}
                <div className="max-w-[1400px] mx-auto w-full mt-20">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            "/ios-training/IMG_2961 (1).JPG",
                            "/ios-training/IMG_3087.JPG",
                            "/ios-training/IMG_4961.jpg",
                            "/ios-training/WhatsApp Image 2026-01-31 at 10.48.42.jpeg",
                            "/ios-training/WhatsApp Image 2026-04-10 at 20.58.41.jpeg"
                        ].map((src, idx) => (
                            <div key={idx} className="aspect-[4/3] bg-black border border-white/10 rounded-xl overflow-hidden group shadow-lg relative">
                                <Image src={src} alt={`Learning Outcome ${idx + 1}`} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. TESTIMONIALS / PERFORMANCE INSIGHTS (Neon Stats & searchable/expandable roster) */}
            <section id="roster" className="bg-accent text-black py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto w-full space-y-16">

                    {/* Performance aggregate dashboard widget */}
                    <div className="flex flex-col lg:flex-row justify-between items-stretch gap-12">

                        <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-8">
                            <div className="space-y-4">
                                <p className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-black/60">Cohort Analytics</p>
                                <h2 className="font-orbitron font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter">
                                    Batch Performance
                                </h2>
                                <p className="text-xs text-black/80 font-bold leading-relaxed max-w-lg pt-2">
                                    We analyzed the assessment data of all thirty students who completed the Apple Authorized cohort program. The results reflect high skill dedication and excellent readiness.
                                </p>
                            </div>

                            {/* Aggregates representation */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-black text-white p-6 rounded-2xl flex flex-col justify-between min-h-[140px] text-left">
                                    <p className="text-[9px] uppercase font-orbitron tracking-widest text-[#D7F601] font-bold">Average Grade</p>
                                    <h3 className="text-4xl font-orbitron font-black text-[#D7F601]">81.43%</h3>
                                    <span className="text-[8px] text-white/50 uppercase font-black">Cohort Assessment</span>
                                </div>
                                <div className="bg-black text-white p-6 rounded-2xl flex flex-col justify-between min-h-[140px] text-left">
                                    <p className="text-[9px] uppercase font-orbitron tracking-widest text-[#D7F601] font-bold">Certified Rate</p>
                                    <h3 className="text-4xl font-orbitron font-black text-white">30/30</h3>
                                    <span className="text-[8px] text-white/50 uppercase font-black">Qualified Trainees</span>
                                </div>
                            </div>
                        </div>

                        {/* Visual assessment scale bar graphic representation */}
                        <div className="w-full lg:w-1/2 bg-black text-white p-8 rounded-3xl flex flex-col justify-between border-2 border-black shadow-[10px_10px_0px_#fff]">
                            <h4 className="font-orbitron font-black text-sm uppercase text-accent tracking-widest mb-6">Cohort Score Breakdown</h4>

                            <div className="space-y-6">
                                {/* Score range A */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-white/80">
                                        <span>Elite (90% - 100%)</span>
                                        <span className="text-accent">2 Students</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-accent" style={{ width: '6.7%' }} />
                                    </div>
                                </div>

                                {/* Score range B */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-white/80">
                                        <span>Honors (80% - 89%)</span>
                                        <span className="text-accent">15 Students</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-accent" style={{ width: '50%' }} />
                                    </div>
                                </div>

                                {/* Score range C */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-white/80">
                                        <span>Qualified (70% - 79%)</span>
                                        <span className="text-accent">13 Students</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#aaa]" style={{ width: '43.3%' }} />
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-white/15 pt-6 mt-8 flex justify-between items-center text-[10px] font-orbitron font-black uppercase tracking-wider">
                                <span className="text-white/50">Minimum threshold: 70%</span>
                                <span className="text-accent">100% Success Metric</span>
                            </div>
                        </div>
                    </div>

                    {/* TRAINEE ROSTER TABLE */}
                    <div className="pt-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                            <div>
                                <h2 className="font-orbitron font-black text-2xl md:text-4xl uppercase tracking-widest flex gap-3 text-black">
                                    <span className="text-black/35">Trainee</span>
                                    <span>Roster</span>
                                </h2>
                                <p className="text-black/60 text-[9px] md:text-[10px] font-black tracking-widest uppercase mt-1">B-2026 / iOS cohort under AATCE</p>
                            </div>

                            {/* Roster Controls */}
                            <div className="flex flex-wrap gap-3 items-center w-full md:w-auto">
                                {/* Search input */}
                                <div className="relative flex-grow md:flex-grow-0">
                                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-black/50" />
                                    <input
                                        type="text"
                                        placeholder="Search trainee name..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-9 pr-4 py-2 border-2 border-black bg-white rounded-lg text-xs font-bold text-black focus:outline-none focus:ring-1 focus:ring-black w-full md:w-[220px]"
                                    />
                                </div>

                                {/* Team filter dropdown */}
                                <select
                                    value={selectedTeam}
                                    onChange={(e) => setSelectedTeam(e.target.value)}
                                    className="border-2 border-black bg-white px-3 py-2 rounded-lg text-xs font-bold text-black focus:outline-none"
                                >
                                    <option value="All">All Projects</option>
                                    <option value="Trip Expense App">Trip Expense App</option>
                                    <option value="SGVU Connect">SGVU Connect</option>
                                    <option value="Restaurant App">Restaurant App</option>
                                </select>
                            </div>
                        </div>

                        {/* Desktop Table container */}
                        <div className="w-full border-2 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_#000] bg-white">
                            <div className="min-w-[800px] flex flex-col">
                                {/* Table header */}
                                <div className="grid grid-cols-12 bg-black text-accent p-5 border-b-2 border-black text-[10px] font-orbitron font-black tracking-widest uppercase">
                                    <div className="col-span-1">Sr.</div>
                                    <div className="col-span-3">Trainee Name</div>
                                    <div className="col-span-3">Capstone App Team</div>
                                    <div className="col-span-2">Assessed Grade</div>
                                    <div className="col-span-3 text-right">Certificate status</div>
                                </div>

                                {/* Table rows */}
                                {displayedTrainees.length > 0 ? (
                                    displayedTrainees.map((st, idx) => (
                                        <div key={idx} className="flex flex-col border-b border-black/10 last:border-0">
                                            {/* Main Row */}
                                            <div
                                                onClick={() => setExpandedTrainee(expandedTrainee === idx ? null : idx)}
                                                className={`grid grid-cols-12 p-4 md:p-5 items-center text-[10px] md:text-xs font-bold uppercase tracking-wider text-black cursor-pointer hover:bg-black/5 transition-colors ${expandedTrainee === idx ? 'bg-black/5' : 'bg-white'}`}
                                            >
                                                <div className="col-span-1 text-black/50 font-orbitron font-extrabold">{st.id}</div>
                                                <div className="col-span-3 text-black font-extrabold flex items-center gap-1.5">
                                                    {st.name}
                                                </div>
                                                <div className="col-span-3 text-purple font-extrabold">{st.team}</div>
                                                <div className="col-span-2 text-black/80 font-orbitron font-extrabold">{st.score}%</div>
                                                <div className="col-span-3 flex justify-end items-center gap-3">
                                                    <span className="bg-black text-accent px-3 py-1 text-[8px] md:text-[9px] font-orbitron font-black tracking-widest rounded shadow-[2px_2px_0px_rgba(0,0,0,0.15)] flex items-center gap-1 shrink-0">
                                                        QUALIFIED
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Expanded detail drawer */}
                                            {expandedTrainee === idx && (
                                                <div className="bg-[#f9f9f9] border-t border-black/5 p-6 text-left text-xs text-black/90 font-medium space-y-4">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div className="space-y-2">
                                                            <h5 className="font-orbitron font-black uppercase text-[10px] text-black tracking-widest flex items-center gap-1.5">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                                Trainee Strength Indicators
                                                            </h5>
                                                            <p className="text-black/70 pl-3 leading-relaxed border-l-2 border-green-500/30 italic">
                                                                "{st.strength}"
                                                            </p>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <h5 className="font-orbitron font-black uppercase text-[10px] text-black tracking-widest flex items-center gap-1.5">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                                                Areas of Targeted Improvement
                                                            </h5>
                                                            <p className="text-black/70 pl-3 leading-relaxed border-l-2 border-amber-500/30 italic">
                                                                "{st.improvement}"
                                                            </p>
                                                        </div>
                                                    </div>


                                                </div>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <div className="bg-white p-8 text-center text-xs font-bold text-black/50 uppercase tracking-widest">
                                        No trainees matched your current filters.
                                    </div>
                                )}

                                {/* Table footer */}
                                <div className="bg-black/5 p-5 border-t border-black/10 text-[10px] font-orbitron font-black uppercase tracking-widest flex justify-between gap-4">
                                    <span className="italic normal-case tracking-normal font-medium text-black/50">Showing {displayedTrainees.length} of {filteredTrainees.length} Students</span>
                                    <span className="text-black">30 Qualified Candidates certified under AATCE</span>
                                </div>
                            </div>
                        </div>

                        {/* View all button toggle */}
                        {filteredTrainees.length > 6 && (
                            <div className="mt-12 flex flex-col items-center">
                                <button
                                    onClick={() => setShowAllTrainees(!showAllTrainees)}
                                    className="group flex items-center gap-3 text-black font-orbitron font-black text-sm uppercase tracking-widest cursor-pointer hover:scale-105 transition-transform duration-300 outline-none"
                                >
                                    {showAllTrainees ? 'View Less Roster' : 'View Full Roster'}
                                    <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-accent transition-colors">
                                        {showAllTrainees ? (
                                            <ChevronUp className="w-4 h-4 shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 shrink-0" />
                                        )}
                                    </div>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
