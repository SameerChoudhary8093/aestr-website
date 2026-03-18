'use client';

import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import Image from "next/image";

const FrontierHub = () => {
    return (
        <section className="relative min-h-screen py-24 bg-background overflow-hidden">
            {/* Neural Network Background - Keeping the existing particles if needed, but the new design focus is on the branded blocks */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-gradient-to-b from-purple/5 to-transparent" />

            <div className="container-boxed relative z-10">
                {/* Main Branded Header Block */}
                <div className="bg-[#D8F602] rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden mb-16">
                    {/* Top Bar inside Lime Block */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 lg:mb-12">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center">
                                <svg className="w-full h-full text-purple" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                                    <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M20 2L20 38M2 20H38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <circle cx="20" cy="20" r="3" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="text-purple font-orbitron font-black text-sm md:text-base tracking-[0.2em] uppercase">
                                Welcome to the frontier:
                            </h3>
                        </div>

                        <div className="bg-black px-6 py-4 rounded-3xl shadow-lg self-end md:self-auto border-2 border-white/20">
                            <div className="w-32 md:w-40 relative h-8 md:h-10">
                                <Image
                                    src="/Herosection/AESTR.webp"
                                    alt="AESTR Logo"
                                    fill
                                    className="object-contain brightness-150 contrast-125"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
                        <div className="lg:col-span-7 space-y-12">
                            {/* Main Heading */}
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-black leading-none tracking-tight">
                                <div className="block">INDIA'S SOVEREIGN</div>
                                <div className="block">AI HUB</div>
                            </h2>

                            {/* B.Tech AI Powered by Shodh AI Card */}
                            <div className="glass !bg-[#000000] p-8 md:p-10 rounded-[2.5rem] border border-white/5 inline-block max-w-lg shadow-2xl">
                                <h4 className="text-3xl md:text-4xl font-orbitron font-black text-[#D8F602] mb-1">
                                    B.Tech AI
                                </h4>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-white text-2xl font-orbitron font-extrabold">Powered by</span>
                                    <div className="relative w-36 h-9">
                                        <Image
                                            src="/ProgramPartners/Shodh-ai.svg"
                                            alt="Shodh AI"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <p className="text-white/80 text-[14px] leading-relaxed font-medium">
                                    This course is started by Dr. Arastu, CEO of Shodh AI, to
                                    prepare the AI engineers that India needs to lead the world.
                                    The premier Elite 60 program is highly selective and is built
                                    for engineers of 2030.
                                    <br /><br />
                                    The cohort students will work with senior engineers at
                                    Shodh, build data pipelines, create model architectures, and
                                    spend years in the toil and hard work of building the depth of
                                    mathematics that is required to build the future of AI itself.
                                </p>
                            </div>
                        </div>

                        {/* Interactive Media Section */}
                        <div className="lg:col-span-5 relative group">
                            <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-white/20 shadow-[-30px_30px_60px_rgba(0,0,0,0.4)] bg-purple/10 backdrop-blur-sm">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.8 }}
                                    className="aspect-[4/5] relative"
                                >
                                    <Image
                                        src="/modi.jpeg"
                                        alt="PM Modi with Shodh AI CEO"
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Shodh AI Banner Overlay */}
                                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[92%] bg-white py-6 px-8 rounded-xl shadow-2xl flex items-center justify-center border-2 border-black/10">
                                        <p className="text-black font-orbitron font-black text-[11px] md:text-[13px] text-center leading-tight tracking-wide">
                                            Shodh AI is an <span className="font-black text-purple">IND<span className="text-red-600">I</span>A<span className="text-purple italic">ai</span></span> mission company
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Video Play Button Overlay / Minimal Video Trigger */}
                            <div className="absolute top-6 right-6 z-20">
                                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-purple fill-current" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Level: Narrative Paragraph with Image - New Design */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-15xl mb-24 px-4 mx-auto"
                >
                    <div className="relative">
                        {/* Background decorative elements */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple/20 rounded-full blur-3xl"></div>
                        
                        {/* Main content container */}
                        <div className="relative bg-gradient-to-br from-black/40 via-black/20 to-transparent backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl">
                                               
                            {/* Main content grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                                
                                {/* Left side - Text content */}
                                <div className="lg:col-span-7 space-y-8">
                                    <div className="relative">
                                        {/* Quote marks decoration */}
                                        <div className="absolute -top-4 -left-4 text-6xl text-accent/20 font-serif">"</div>
                                        
                                        <p className="text-2xl md:text-3xl font-bold text-white leading-tight mb-8 relative z-10">
                                            <span className="text-accent">Traditional education is dead.</span> Aestr is a unified tech incubator built for one reason: to train the engineers who will architect AI, rather than be replaced by it.
                                        </p>
                                    </div>
                                    
                                    <div className="relative pl-6 border-l-2 border-accent/30">
                                        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                                            At the core of this ecosystem is <span className="text-accent font-semibold">Shodh AI</span>—India's premier frontier AI company. As one of the 12 companies handpicked for the <span className="text-accent font-semibold">INDIA AI Mission</span>, they are building the nation's sovereign foundational models and the world's first large Physics Model to solve massive, future-defining problems.
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Right side - Enhanced image */}
                                <div className="lg:col-span-5">
                                    <motion.div 
                                        whileHover={{ scale: 1.02, y: -5 }} 
                                        transition={{ duration: 0.5 }}
                                        className="relative group"
                                    >
                                        {/* Glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 via-purple/30 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                        
                                        {/* Image frame */}
                                        <div className="relative bg-black/30 rounded-2xl overflow-hidden border border-white/20">
                                            <Image
                                                src="/modi.jpeg"
                                                alt="PM Modi with Shodh AI CEO"
                                                width={600}
                                                height={400}
                                                className="w-full h-auto object-cover"
                                            />
                                            
                                            {/* Overlay gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                            
                                            {/* Floating badges */}
                                            <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                                                <span className="text-black font-orbitron font-bold text-xs">INDIA AI MISSION</span>
                                            </div>
                                            
                                            <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                                                <span className="text-white font-orbitron font-semibold text-xs">Founding Partner</span>
                                            </div>
                                            
                                            {/* Play button */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/40 hover:bg-white/30 transition-all duration-300"
                                                >
                                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z"/>
                                                    </svg>
                                                </motion.button>
                                            </div>
                                        </div>
                                        
                                        {/* Decorative corner */}
                                        <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-accent rounded-tr-lg"></div>
                                        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-accent rounded-bl-lg"></div>
                                    </motion.div>
                                </div>
                            </div>
                            
                            {/* Bottom accent line */}
                            <div className="mt-8 flex items-center justify-between">
                                <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                <div className="px-4">
                                    <span className="text-white/60 text-sm font-orbitron">Building Tomorrow's AI Today</span>
                                </div>
                                <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Third Level: Strike Forces */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* AESTR ALPHA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 space-y-6 border border-accent/10 hover:border-accent/30 transition-all duration-500 bg-white/5 rounded-[2.5rem]"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-orbitron text-xs font-bold tracking-widest uppercase">
                            6-Month Career Residency
                        </div>
                        <h3 className="text-3xl md:text-4xl font-orbitron font-extrabold text-foreground">Aestr Alpha</h3>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            Fast-tracks ambitious graduates into high-paying Enterprise Cloud, Data, and Backend roles at global tech giants.
                        </p>
                        <button className="btn-aestr flex items-center gap-3">
                            Apply for Alpha
                            <span className="text-xl">↗</span>
                        </button>
                    </motion.div>

                    {/* AESTR B.TECH */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 space-y-6 border border-accent/10 hover:border-accent/30 transition-all duration-500 bg-white/5 rounded-[2.5rem]"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-orbitron text-xs font-bold tracking-widest uppercase">
                            4-Year Engineering Residency
                        </div>
                        <h3 className="text-3xl md:text-4xl font-orbitron font-extrabold text-foreground">Aestr B.Tech</h3>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            A hardcore undergraduate incubator forging the deep-tech scientists who will invent the intelligence of tomorrow.
                        </p>
                        <button className="btn-aestr flex items-center gap-3 bg-accent text-black">
                            Explore Residency
                            <span className="text-xl">↗</span>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FrontierHub;
