"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function SalesforceTrainingPage() {
    const [showAllTrainees, setShowAllTrainees] = useState(false);
    const [expandedAdmin, setExpandedAdmin] = useState<number | null>(null);
    const [expandedDev, setExpandedDev] = useState<number | null>(null);
    return (
        <main className="min-h-screen bg-black relative flex flex-col font-sans selection:bg-accent selection:text-black">
            <Navbar />

            {/* 1. HEADER SECTION (Black) */}
            <section className="pt-40 lg:pt-52 pb-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1400px] mx-auto w-full">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-16">
                        <div className="w-full lg:w-1/2">
                            <p className="text-accent font-orbitron text-[10px] font-bold tracking-[0.3em] uppercase mb-4 sm:mb-6">SGVU Presents</p>
                            <h1 className="font-orbitron font-black text-[10vw] sm:text-6xl lg:text-7xl xl:text-[90px] leading-[0.95] capitalize tracking-[-0.02em] flex flex-col gap-1 lg:gap-2">
                                <span className="text-white">Salesforce</span>
                                <span className="text-accent drop-shadow-[0_0_20px_rgba(216,246,2,0.3)]">Developer</span>
                                <span className="text-white">Training</span>
                            </h1>
                        </div>
                        <div className="w-full lg:w-1/2 relative aspect-[4/3] lg:aspect-video bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden group">
                            <img src="/saleforce-training/image-22.jpeg" alt="Salesforce Developer Training Hero" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
                        </div>
                    </div>

                    {/* Trainer & Info Cards (Neon) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-16">
                        {/* Card 1 */}
                        <div className="bg-accent rounded-2xl p-6 lg:p-8 relative group hover:-translate-y-1 transition-transform shadow-[0_0_20px_rgba(216,246,2,0.2)]">
                            <p className="text-black/60 text-[9px] font-orbitron uppercase tracking-widest mb-4 font-black">Lead Architect</p>
                            <h3 className="text-black font-orbitron font-black text-lg lg:text-xl uppercase mb-1.5 align-middle flex items-center gap-3">
                                Sanjay Gupta
                                <a href="https://www.linkedin.com/in/sanjay-gupta-bb2a79bb/" target="_blank" rel="noopener noreferrer" className="text-black/50 hover:text-black transition-colors shrink-0">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </h3>
                            <p className="text-black/80 text-[10px] lg:text-xs font-bold">Expert Salesforce Trainer & MVP</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-accent rounded-2xl p-6 lg:p-8 relative group hover:-translate-y-1 transition-transform shadow-[0_0_20px_rgba(216,246,2,0.2)]">
                            <p className="text-black/60 text-[9px] font-orbitron uppercase tracking-widest mb-4 font-black">Technical Specialist</p>
                            <h3 className="text-black font-orbitron font-black text-lg lg:text-xl uppercase mb-1.5 align-middle flex items-center gap-3">
                                Umesh Vyas
                                <a href="https://www.linkedin.com/in/umesh-vyas-a63145273/" target="_blank" rel="noopener noreferrer" className="text-black/50 hover:text-black transition-colors shrink-0">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </h3>
                            <p className="text-black/80 text-[10px] lg:text-xs font-bold">Development Operations Lead</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-accent rounded-2xl p-6 lg:p-8 relative group hover:-translate-y-1 transition-transform shadow-[0_0_20px_rgba(216,246,2,0.2)]">
                            <p className="text-black/60 text-[9px] font-orbitron uppercase tracking-widest mb-4 font-black">Career Strategist</p>
                            <h3 className="text-black font-orbitron font-black text-lg lg:text-xl uppercase mb-1.5 align-middle flex items-center gap-3">
                                Shipra Ojha
                                <a href="https://www.linkedin.com/in/shipraojha/" target="_blank" rel="noopener noreferrer" className="text-black/50 hover:text-black transition-colors shrink-0">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </h3>
                            <p className="text-black/80 text-[10px] lg:text-xs font-bold">Soft Skills & HR Consultant</p>
                        </div>
                        {/* Card 4: Date Info */}
                        <div className="bg-accent rounded-2xl p-6 lg:p-8 relative group hover:-translate-y-1 transition-transform shadow-[0_0_20px_rgba(216,246,2,0.2)] flex flex-col justify-center">
                            <p className="text-black/60 text-[9px] font-orbitron uppercase tracking-widest mb-4 font-black">Program Timeline</p>
                            <h3 className="text-black font-orbitron font-black text-lg lg:text-xl uppercase mb-1.5">Jan—March 2026</h3>
                            <p className="text-black/80 text-[10px] lg:text-xs font-bold">Conducted by Skill Horizon</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1.5 INTRODUCTION & GLIMPSE (Purple Section) */}
            <section className="bg-purple text-white py-20 lg:py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-10 lg:pt-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-sans tracking-tight">1. Introduction</h2>
                            <p className="text-[15px] md:text-base leading-[1.8] text-white/90 font-medium">
                                This report presents a comprehensive overview of the Salesforce Training Program conducted by Skill Horizon for students of Suresh Gyan Vihar University. The program was designed to bridge the gap between academic learning and industry requirements by integrating technical expertise, soft skills development, and placement readiness.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-5 font-sans tracking-tight">2. Program Objectives</h2>
                            <ul className="list-disc pl-5 space-y-3 text-[15px] md:text-base text-white/90 font-medium">
                                <li>To build strong technical knowledge in Salesforce Administration & Development</li>
                                <li>To enhance communication, confidence, and interview skills</li>
                                <li>To prepare students for real-world job roles</li>
                                <li>To provide placement opportunities with leading IT companies</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Images (Glimpse Grid) */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold font-sans tracking-tight mb-2">Glimpse:</h2>
                        </div>

                        {/* Top Large Image */}
                        <div className="w-full aspect-[16/9] bg-white/10 rounded-md relative overflow-hidden flex items-center justify-center shadow-md group">
                            <img src="/saleforce-training/image-34.jpeg" alt="Laptop Screen Focus" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
                        </div>
                        {/* Bottom Two Images */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="w-full aspect-[4/3] bg-white/10 rounded-md relative overflow-hidden hidden lg:flex items-center justify-center shadow-md group">
                                <img src="/saleforce-training/image-22.jpeg" alt="Classroom Presentation" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
                            </div>
                            <div className="w-full aspect-[4/3] bg-white/10 rounded-md relative overflow-hidden flex items-center justify-center shadow-md group">
                                <img src="/saleforce-training/image-24.jpeg" alt="Student Group Photo" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 2. CORE PROGRAM OBJECTIVES & SECTIONS (Neon) */}
            <section className="bg-accent text-black py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1400px] mx-auto w-full">

                    {/* Horizontal Heading */}
                    <div className="mb-12 w-full text-center">
                        <h2 className="font-orbitron font-black text-4xl sm:text-5xl lg:text-[56px] capitalize leading-[1.1] tracking-tighter text-black w-full">
                            Core Program Objectives
                        </h2>
                    </div>

                    {/* 4 Cards horizontally (animated) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

                        {/* Card 1 */}
                        <a href="/salesforce-training/technical-training" className="group bg-black rounded-3xl p-6 lg:p-8 flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:-translate-y-3 hover:scale-[1.02] transform transition-all duration-500 ease-out cursor-pointer relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-full aspect-[10/10] bg-white/5 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-white/5 group-hover:border-accent/30 transition-colors duration-500 relative z-10">
                                <div className="absolute inset-0 bg-accent/20 scale-0 group-hover:scale-100 transition-transform duration-700 ease-out rounded-full blur-3xl z-10 pointer-events-none" />
                                <img src="/saleforce-training/image-33.jpeg" alt="Technical Training" className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                            </div>
                            <div className="relative z-10 flex flex-col gap-4">
                                <div>
                                    <h3 className="font-orbitron font-black text-white text-lg lg:text-xl uppercase tracking-widest mb-1 group-hover:text-accent transition-colors duration-300">Section 1</h3>
                                    <p className="text-accent text-[11px] lg:text-xs font-bold uppercase break-words lg:min-h-[2.5rem]">Technical Training</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300 group-hover:rotate-45 shrink-0 self-start">
                                    <svg className="w-4 h-4 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                </div>
                            </div>
                        </a>

                        {/* Card 2 */}
                        <a href="/salesforce-training/soft-skills" className="group bg-black rounded-3xl p-6 lg:p-8 flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:-translate-y-3 hover:scale-[1.02] transform transition-all duration-500 ease-out cursor-pointer relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-full aspect-[10/10] bg-white/5 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-white/5 group-hover:border-accent/30 transition-colors duration-500 relative z-10">
                                <div className="absolute inset-0 bg-accent/20 scale-0 group-hover:scale-100 transition-transform duration-700 ease-out rounded-full blur-3xl z-10 pointer-events-none" />
                                <img src="/saleforce-training/image-1.jpg" alt="Soft Skill" className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                            </div>
                            <div className="relative z-10 flex flex-col gap-4">
                                <div>
                                    <h3 className="font-orbitron font-black text-white text-lg lg:text-xl uppercase tracking-widest mb-1 group-hover:text-accent transition-colors duration-300">Section 2</h3>
                                    <p className="text-accent text-[11px] lg:text-xs font-bold uppercase break-words lg:min-h-[2.5rem]">Soft Skill & Interview Prep</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300 group-hover:rotate-45 shrink-0 self-start">
                                    <svg className="w-4 h-4 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                </div>
                            </div>
                        </a>

                        {/* Card 3 */}
                        <a href="/salesforce-training/placement-support" className="group bg-black rounded-3xl p-6 lg:p-8 flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:-translate-y-3 hover:scale-[1.02] transform transition-all duration-500 ease-out cursor-pointer relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-full aspect-[10/10] bg-white/5 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-white/5 group-hover:border-accent/30 transition-colors duration-500 relative z-10">
                                <div className="absolute inset-0 bg-accent/20 scale-0 group-hover:scale-100 transition-transform duration-700 ease-out rounded-full blur-3xl z-10 pointer-events-none" />
                                <img src="/saleforce-training/image-2.jpg" alt="Placement Training" className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                            </div>
                            <div className="relative z-10 flex flex-col gap-4">
                                <div>
                                    <h3 className="font-orbitron font-black text-white text-lg lg:text-xl uppercase tracking-widest mb-1 group-hover:text-accent transition-colors duration-300">Section 3</h3>
                                    <p className="text-accent text-[11px] lg:text-xs font-bold uppercase break-words lg:min-h-[2.5rem]">Placement Training Support</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300 group-hover:rotate-45 shrink-0 self-start">
                                    <svg className="w-4 h-4 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                </div>
                            </div>
                        </a>

                        {/* Card 4 */}
                        <a href="/salesforce-training/test-results" className="group bg-black rounded-3xl p-6 lg:p-8 flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:-translate-y-3 hover:scale-[1.02] transform transition-all duration-500 ease-out cursor-pointer relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-full aspect-[10/10] bg-white/5 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-white/5 group-hover:border-accent/30 transition-colors duration-500 relative z-10">
                                <div className="absolute inset-0 bg-accent/20 scale-0 group-hover:scale-100 transition-transform duration-700 ease-out rounded-full blur-3xl z-10 pointer-events-none" />
                                <img src="/saleforce-training/image-4.jpg" alt="Test Result" className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                            </div>
                            <div className="relative z-10 flex flex-col gap-4">
                                <div>
                                    <h3 className="font-orbitron font-black text-white text-lg lg:text-xl uppercase tracking-widest mb-1 group-hover:text-accent transition-colors duration-300">Section 4</h3>
                                    <p className="text-accent text-[11px] lg:text-xs font-bold uppercase break-words lg:min-h-[2.5rem]">Test Result Summary</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300 group-hover:rotate-45 shrink-0 self-start">
                                    <svg className="w-4 h-4 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Objectives List text blocks below */}
                    <div className="lg:w-full max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 lg:gap-x-24 items-start pt-8">

                        {/* Left Side: 01 and 02 */}
                        <div className="flex flex-col gap-10">
                            <div className="flex gap-4 lg:gap-6 items-start">
                                <span className="font-orbitron font-black text-xl lg:text-3xl mt-0 md:-mt-1 text-black/30">01</span>
                                <p className="font-black text-xs md:text-[13px] lg:text-sm uppercase tracking-wider leading-relaxed pt-1 lg:pt-0 w-full">
                                    Master Salesforce administration & CRM ecosystem fundamentals for enterprise scale.
                                </p>
                            </div>
                            <div className="flex gap-4 lg:gap-6 items-start">
                                <span className="font-orbitron font-black text-xl lg:text-3xl mt-0 md:-mt-1 text-black/30">02</span>
                                <p className="font-black text-xs md:text-[13px] lg:text-sm uppercase tracking-wider leading-relaxed pt-1 lg:pt-0 w-full">
                                    Implement complex business logic using apex programming and lightning web components.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: 03 and 04 */}
                        <div className="flex flex-col gap-10">
                            <div className="flex gap-4 lg:gap-6 items-start">
                                <span className="font-orbitron font-black text-xl lg:text-3xl mt-0 md:-mt-1 text-black/30">03</span>
                                <p className="font-black text-xs md:text-[13px] lg:text-sm uppercase tracking-wider leading-relaxed pt-1 lg:pt-0 w-full">
                                    Bridge the gap between technical expertise and<br className="hidden sm:block" />corporate communication through intensive soft skills.
                                </p>
                            </div>
                            <div className="flex gap-4 lg:gap-6 items-start">
                                <span className="font-orbitron font-black text-xl lg:text-3xl mt-0 md:-mt-1 text-black/30">04</span>
                                <p className="font-black text-xs md:text-[13px] lg:text-sm uppercase tracking-wider leading-relaxed pt-1 lg:pt-0 w-full">
                                    Direct industry placement with elite technology partners upon certification.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. TECHNICAL CURRICULUM (Black) */}
            <section className="bg-[#111] text-white py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1400px] mx-auto w-full">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6">
                        <h2 className="font-orbitron font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.1em] flex items-center gap-3 shrink-0">
                            <span className="text-white">Technical</span>
                            <span className="text-accent">Curriculum</span>
                        </h2>
                        <div className="flex-grow h-[1px] bg-white/10 mx-6 hidden lg:block"></div>
                        <p className="text-white/30 text-[9px] font-orbitron tracking-[0.3em] font-black uppercase whitespace-nowrap hidden md:block">200 Hours Total</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Salesforce Admin Module */}
                        <div className="border border-white/10 p-8 lg:p-14 transition-colors bg-purple group">
                            <div className="mb-10 lg:mb-16">
                                <div className="w-12 h-12 border border-accent flex items-center justify-center rounded-lg mb-6 text-accent bg-black/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="font-orbitron font-black text-xl lg:text-3xl tracking-[0.1em] uppercase text-white drop-shadow-md">Salesforce Admin</h3>
                            </div>

                            <ul className="space-y-0">
                                {[
                                    { title: "Data Modeling", desc: "Architectured for scale using standard and custom objects with complex relationship types." },
                                    { title: "Security & Access Control", desc: "Granular control using OWD, Profiles, Permission Sets, and Role Hierarchy." },
                                    { title: "Process Automation (Flows)", desc: "Declarative logic implementation for complex business requirements." },
                                    { title: "Reports & Dashboards", desc: "Analytical insights through high-fidelity visualization and matrix formatting." }
                                ].map((item, idx) => (
                                    <li key={idx} className="border-b border-white/20 last:border-0 uppercase group-hover:text-white transition-colors py-2">
                                        <div
                                            className="flex justify-between items-center py-4 lg:py-5 cursor-pointer"
                                            onClick={() => setExpandedAdmin(expandedAdmin === idx ? null : idx)}
                                        >
                                            <span className="text-[10px] md:text-sm font-bold tracking-widest text-white/80 transition-colors uppercase flex items-center gap-3">
                                                <span className="text-accent text-lg font-black">{expandedAdmin === idx ? '-' : '+'}</span>
                                                {item.title}
                                            </span>
                                            <span className="text-accent font-orbitron opacity-100 flex items-center justify-center shrink-0 w-5 h-5 border border-accent rounded-sm text-[10px] bg-black/20">✔</span>
                                        </div>
                                        {expandedAdmin === idx && (
                                            <p className="text-[9px] md:text-[11px] text-white/60 font-medium normal-case tracking-normal pb-6 pl-8 leading-relaxed italic">
                                                {item.desc}
                                            </p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Salesforce Dev Module */}
                        <div className="border border-white/10 p-8 lg:p-14 transition-colors bg-purple group">
                            <div className="mb-10 lg:mb-16">
                                <div className="w-12 h-12 border border-accent flex items-center justify-center rounded-lg mb-6 text-accent bg-black/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h3 className="font-orbitron font-black text-xl lg:text-3xl tracking-[0.1em] uppercase text-white drop-shadow-md">Salesforce Dev</h3>
                            </div>

                            <ul className="space-y-0">
                                {[
                                    { title: "Apex Programming (SOQL)", desc: "Enterprise-grade backend logic with efficient database querying." },
                                    { title: "Apex Triggers & Testing", desc: "Asynchronous processing and 90%+ code coverage unit testing." },
                                    { title: "Lightning Web Components (LWC)", desc: "Modern, reactive UI components built on standard web standards." },
                                    { title: "Integration (REST/SOAP)", desc: "Seamless cross-platform communication and API lifecycle management." }
                                ].map((item, idx) => (
                                    <li key={idx} className="border-b border-white/20 last:border-0 uppercase group-hover:text-white transition-colors py-2">
                                        <div
                                            className="flex justify-between items-center py-4 lg:py-5 cursor-pointer"
                                            onClick={() => setExpandedDev(expandedDev === idx ? null : idx)}
                                        >
                                            <span className="text-[10px] md:text-sm font-bold tracking-widest text-white/80 transition-colors uppercase flex items-center gap-3">
                                                <span className="text-accent text-lg font-black">{expandedDev === idx ? '-' : '+'}</span>
                                                {item.title}
                                            </span>
                                            <span className="text-accent font-orbitron opacity-100 flex items-center justify-center shrink-0 w-5 h-5 border border-accent rounded-sm text-[10px] bg-black/20">✔</span>
                                        </div>
                                        {expandedDev === idx && (
                                            <p className="text-[9px] md:text-[11px] text-white/60 font-medium normal-case tracking-normal pb-6 pl-8 leading-relaxed italic">
                                                {item.desc}
                                            </p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ELITE SOFT SKILLS (Neon) */}
            <section className="bg-accent text-black py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1400px] mx-auto w-full">
                    <div className="text-center mb-20 lg:mb-24">
                        <h2 className="font-orbitron font-black text-3xl md:text-5xl lg:text-[56px] uppercase tracking-widest text-black">
                            Elite Soft Skills
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 h-full items-stretch">
                        <div className="border-[3px] border-black bg-black p-8 lg:p-12 flex flex-col min-h-[350px] transition-transform group">
                            <div className="w-full aspect-[10/10] bg-white/5 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-white/5 group-hover:border-accent/30 transition-colors duration-500 relative z-10">
                                <img src="/saleforce-training/image-19.jpeg" alt="Articulation" className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                            </div>
                            <h3 className="font-orbitron font-black text-2xl lg:text-3xl leading-tight lg:leading-[1.1] mb-auto text-white">Articulation <br /> & presence</h3>
                            <p className="text-[9px] md:text-[10px] font-black uppercase mt-16 leading-relaxed tracking-widest text-[#ccc]">Mastering the art of vocal clarity and technical explanation during stakeholder meetings.</p>
                        </div>

                        <div className="border-[3px] border-black bg-black p-8 lg:p-12 flex flex-col min-h-[350px] transition-transform group">
                            <div className="w-full aspect-[10/10] bg-white/5 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-white/5 group-hover:border-accent/30 transition-colors duration-500 relative z-10">
                                <img src="/saleforce-training/image-29.jpeg" alt="Corporate Strategy" className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                            </div>
                            <h3 className="font-orbitron font-black text-2xl lg:text-3xl leading-tight lg:leading-[1.1] mb-auto text-accent">Corporate <br /> strategy</h3>
                            <p className="text-[9px] md:text-[10px] font-black uppercase mt-16 leading-relaxed tracking-widest text-accent">Understanding enterprise workflows and long-term product roadmapping.</p>
                        </div>

                        <div className="border-[3px] border-black bg-black p-8 lg:p-12 flex flex-col min-h-[350px] transition-transform group">
                            <div className="w-full aspect-[10/10] bg-white/5 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-white/5 group-hover:border-accent/30 transition-colors duration-500 relative z-10">
                                <img src="/saleforce-training/image-32.jpeg" alt="Behavioral Psychology" className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                            </div>
                            <h3 className="font-orbitron font-black text-2xl lg:text-3xl leading-tight lg:leading-[1.1] mb-auto text-white">Behavioral <br /> psychology</h3>
                            <p className="text-[9px] md:text-[10px] font-black uppercase mt-16 leading-relaxed tracking-widest text-[#ccc]">Advanced interview techniques and emotional intelligence for leadership roles.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PLACEMENT PARTNERS (Black) */}
            <section className="bg-[#111] text-white py-24 lg:py-32 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1400px] mx-auto w-full">
                    <div className="text-center mb-20">
                        <h2 className="font-orbitron font-black text-2xl md:text-4xl lg:text-5xl uppercase tracking-[0.2em] flex flex-col md:flex-row justify-center gap-2 md:gap-5">
                            <span className="text-accent">Placement</span>
                            <span className="text-white">Partners</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                        {[
                            "/saleforce-training/softshalaBlackLogo.png",
                            "/saleforce-training/fexle-services.webp",
                            "/saleforce-training/untangleit-logo.png",
                            "/saleforce-training/Binario-Logo.webp",
                            "/saleforce-training/Delta-cx-logo.png"
                        ].map((imgSrc, idx) => (
                            <div key={idx} className="bg-white aspect-square flex items-center justify-center p-6 lg:p-8 hover:scale-105 transition-transform rounded-xl md:rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] border-4 border-white/10">
                                <img src={imgSrc} alt={`Placement Partner ${idx + 1}`} className={`w-full h-full object-contain ${imgSrc.includes('White') ? 'invert brightness-0' : ''}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. BATCH PERFORMANCE (Neon) */}
            <section className="bg-accent text-black p-6 md:p-12 lg:px-24 lg:py-16">
                <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-12 lg:gap-24">
                    <div className="text-center md:text-left flex-grow space-y-4">
                        <p className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em]">Batch Performance</p>
                        <h2 className="font-black text-7xl md:text-8xl lg:text-[140px] tracking-tighter leading-none block">87.21%</h2>
                        <p className="text-[10px] lg:text-xs font-orbitron font-bold tracking-[0.3em] lg:tracking-[0.5em] uppercase text-black/60 pt-2 lg:pt-4">Average Assessment Score</p>
                    </div>

                    <div className="bg-black text-center p-12 lg:p-16 w-full md:w-auto flex flex-col justify-center items-center shrink-0">
                        <h3 className="text-accent font-black text-5xl md:text-6xl lg:text-7xl mb-4 leading-none">31/31</h3>
                        <p className="text-accent text-[8px] lg:text-[10px] tracking-[0.3em] uppercase font-bold">Students Certified</p>
                    </div>
                </div>
            </section>

            {/* 7. TRAINEE ROSTER (Neon) */}
            <section className="bg-accent text-black py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1400px] mx-auto w-full">
                    <div className="mb-12">
                        <h2 className="font-orbitron font-black text-3xl md:text-5xl lg:text-6xl uppercase tracking-widest flex gap-3 lg:gap-4 text-black">
                            <span className="text-black/30">Trainee</span>
                            <span className="text-black">Roster</span>
                        </h2>
                        <p className="text-black/60 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mt-4">B-2026 / Salesforce Developer Cohort</p>
                    </div>

                    {/* Desktop/Tablet Table */}
                    <div className="w-full border-2 border-black rounded-lg overflow-x-auto shadow-[10px_10px_0px_#000]">
                        <div className="min-w-[800px] bg-white">
                            {/* Table Header */}
                            <div className="grid grid-cols-12 bg-black text-accent p-6 border-b-2 border-black text-[10px] md:text-[11px] font-black tracking-widest uppercase">
                                <div className="col-span-1">Sr.</div>
                                <div className="col-span-3">Student Name</div>
                                <div className="col-span-3">Domain</div>
                                <div className="col-span-3">Score</div>
                                <div className="col-span-2 text-right">Status</div>
                            </div>

                            {/* Table Rows DYNAMIC */}
                            {(showAllTrainees ? [
                                { id: '1', name: 'Aditya Kumar Mishra', spec: 'Salesforce Dev / Admin', marks: '94', status: 'Active' },
                                { id: '2', name: 'ADITYA MISHRA', spec: 'Salesforce Dev / Admin', marks: '96', status: 'Active' },
                                { id: '3', name: 'Aditya singh', spec: 'Salesforce Dev / Admin', marks: '94', status: 'Active' },
                                { id: '4', name: 'Anish Ali', spec: 'Salesforce Dev / Admin', marks: '78', status: 'Active' },
                                { id: '5', name: 'Ankit kumar', spec: 'Salesforce Dev / Admin', marks: '84', status: 'Active' },
                                { id: '6', name: 'Ashutosh Kumar jha', spec: 'Salesforce Dev / Admin', marks: '94', status: 'Active' },
                                { id: '7', name: 'Badre Alam', spec: 'Salesforce Dev / Admin', marks: '98', status: 'Active' },
                                { id: '8', name: 'Govind kumar', spec: 'Salesforce Dev / Admin', marks: '78', status: 'Active' },
                                { id: '9', name: 'Jitu Kumar', spec: 'Salesforce Dev / Admin', marks: '94', status: 'Active' },
                                { id: '10', name: 'Ketan Bhaskar', spec: 'Salesforce Dev / Admin', marks: '76', status: 'Active' },
                                { id: '11', name: 'kundan kumar tiwari', spec: 'Salesforce Dev / Admin', marks: '82', status: 'Active' },
                                { id: '12', name: 'Madhu kumari', spec: 'Salesforce Dev / Admin', marks: '96', status: 'Active' },
                                { id: '13', name: 'Md Mustufa Ansari', spec: 'Salesforce Dev / Admin', marks: '90', status: 'Active' },
                                { id: '14', name: 'Nikhil Kumar', spec: 'Salesforce Dev / Admin', marks: '86', status: 'Active' },
                                { id: '15', name: 'Nikita', spec: 'Salesforce Dev / Admin', marks: '94', status: 'Active' },
                                { id: '16', name: 'Preety Kumari', spec: 'Salesforce Dev / Admin', marks: '94', status: 'Active' },
                                { id: '17', name: 'Priyanka Kumari', spec: 'Salesforce Dev / Admin', marks: '78', status: 'Active' },
                                { id: '18', name: 'Sahil Raja', spec: 'Salesforce Dev / Admin', marks: '82', status: 'Active' },
                                { id: '19', name: 'Samir Srinath', spec: 'Salesforce Dev / Admin', marks: '94', status: 'Active' },
                                { id: '20', name: 'Sanjeet Kumar', spec: 'Salesforce Dev / Admin', marks: '80', status: 'Active' },
                                { id: '21', name: 'Satyam kumar', spec: 'Salesforce Dev / Admin', marks: '82', status: 'Active' },
                                { id: '22', name: 'Shivam Kumar Singh', spec: 'Salesforce Dev / Admin', marks: '74', status: 'Active' },
                                { id: '23', name: 'Shivani Sharma', spec: 'Salesforce Dev / Admin', marks: '88', status: 'Active' },
                                { id: '24', name: 'Sulman khan', spec: 'Salesforce Dev / Admin', marks: '88', status: 'Active' },
                                { id: '25', name: 'Uma Shankar Pandey', spec: 'Salesforce Dev / Admin', marks: '76', status: 'Active' },
                                { id: '26', name: 'Wasim Khan', spec: 'Salesforce Dev / Admin', marks: '98', status: 'Active' },
                                { id: '27', name: 'Youraj Kumar', spec: 'Salesforce Dev / Admin', marks: '94', status: 'Active' },
                                { id: '28', name: 'yuvraj Kumar Yadav', spec: 'Salesforce Dev / Admin', marks: '80', status: 'Active' },
                                { id: '29', name: 'Vikash Kumar', spec: 'N/A', marks: 'N/A', status: 'Inactive' },
                                { id: '30', name: 'Shubham Kumar', spec: 'N/A', marks: 'N/A', status: 'Inactive' },
                                { id: '31', name: 'Utsav Raj', spec: 'N/A', marks: 'N/A', status: 'Inactive' }
                            ] : [
                                { id: '1', name: 'Aditya Kumar Mishra', spec: 'Salesforce Dev / Admin', marks: '94', status: 'Active' },
                                { id: '2', name: 'ADITYA MISHRA', spec: 'Salesforce Dev / Admin', marks: '96', status: 'Active' },
                                { id: '3', name: 'Aditya singh', spec: 'Salesforce Dev / Admin', marks: '94', status: 'Active' },
                                { id: '4', name: 'Anish Ali', spec: 'Salesforce Dev / Admin', marks: '78', status: 'Active' },
                                { id: '5', name: 'Ankit kumar', spec: 'Salesforce Dev / Admin', marks: '84', status: 'Active' }
                            ]).map((student, idx) => (
                                <div key={idx} className="grid grid-cols-12 bg-black hover:bg-[#111] p-4 md:p-5 border-b border-white/10 transition-colors items-center text-[10px] md:text-xs font-black uppercase tracking-widest text-white">
                                    <div className="col-span-1 text-white/50">{student.id}</div>
                                    <div className="col-span-3 text-white truncate pr-4">{student.name}</div>
                                    <div className="col-span-3 text-accent">{student.spec}</div>
                                    <div className="col-span-3 text-white/70">{student.marks} {student.marks !== 'N/A' && '%'}</div>
                                    <div className="col-span-2 flex justify-end">
                                        {student.status === 'Active' ? (
                                            <span className="bg-accent text-black px-4 py-1.5 text-[8px] md:text-[9px] font-black tracking-widest rounded-sm border border-accent shadow-[2px_2px_0px_rgba(255,255,255,0.2)]">QUALIFIED</span>
                                        ) : (
                                            <span className="bg-white/10 text-white/50 px-4 py-1.5 text-[8px] md:text-[9px] font-black tracking-widest rounded-sm border border-white/20">NOT APPEARED</span>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {/* Table Footer */}
                            <div className="bg-[#181818] p-5 md:p-6 items-center text-[10px] md:text-[11px] font-black uppercase tracking-widest flex justify-between gap-4">
                                <span className="italic normal-case tracking-normal font-medium text-white/50">Showing {showAllTrainees ? '31' : '5'} of 31 Students</span>
                                <span className="text-accent">28 Qualified Candidates</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-col items-center gap-6">
                        {!showAllTrainees ? (
                            <button onClick={() => setShowAllTrainees(true)} className="group flex items-center gap-3 text-black font-orbitron font-black text-sm uppercase tracking-widest cursor-pointer hover:scale-105 transition-transform duration-300 outline-none">
                                View Full Roster
                                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-accent transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                        ) : (
                            <button onClick={() => setShowAllTrainees(false)} className="group flex items-center gap-3 text-black font-orbitron font-black text-sm uppercase tracking-widest cursor-pointer hover:scale-105 transition-transform duration-300 outline-none">
                                View Less Roster
                                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-accent transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                                    </svg>
                                </div>
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
