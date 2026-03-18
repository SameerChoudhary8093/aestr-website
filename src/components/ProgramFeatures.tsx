'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const ProgramFeatures = () => {
    return (
        <section id="program-features" className="relative py-24 bg-background overflow-hidden">
            {/* Futuristic Ambient Glows - Neon Green */}
            <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0" />


            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="container-boxed relative z-10"
            >

                {/* Part 1: Founding Team & Video */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <p className="text-xl text-foreground/80 leading-relaxed flex items-start gap-3">
                                Our founding team includes engineers from Shodh AI (USA) and other global tech leaders. Here, you won’t be taught by disconnected faculty, you’ll learn from full-time software developers, AI practitioners, and system architects who are shaping the real world.
                            </p>
                            <div className="glass p-8 rounded-2xl border-l-4 border-accent shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px] w-full">
                                <p className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                                    "We believe only those who build the future can truly teach it."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="aspect-video glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                            <iframe
                                src="https://www.youtube.com/embed/mA3Z2VYMNXo?rel=0&modestbranding=1"
                                title="Aestr Founding Team"
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                </div>

                {/* Part 2: Program Partners Section */}
                <div className="text-center space-y-12 mb-24 md:mb-40">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground flex items-center justify-center gap-4 tracking-tight">
                            Program partners with us
                        </h2>
                        <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed mx-auto text-center">
                            Our Engineering Teachers from
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                        {[
                            { name: 'Shodh AI', logo: '/ProgramPartners/Shodh-ai.svg' },
                            { name: 'Apple', logo: '/ProgramPartners/Apple-logo.png' },
                            { name: 'Microsoft', logo: '/ProgramPartners/micro.webp' },
                            { name: 'Google', logo: '/ProgramPartners/google.webp' },
                            { name: 'DRDO', logo: '/ProgramPartners/DRDO.webp' }
                        ].map((partner, i) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass aspect-[4/3] rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:scale-105 hover:bg-white/[0.05] hover:border-accent/30 cursor-default group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-0" />
                                <div className="z-10 w-32 h-20 flex items-center justify-center relative">
                                    <Image src={partner.logo} alt={partner.name} fill className="object-contain brightness-[1.2] group-hover:brightness-[1.5] transition-all duration-300" />
                                </div>
                                <span className="z-10 text-[10px] font-orbitron uppercase tracking-widest text-foreground/40 group-hover:text-accent transition-colors font-bold">
                                    {partner.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-20 max-w-3xl mx-auto"
                    >
                        <div className="relative group/box">
                            {/* Animated Outer Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 rounded-2xl blur-xl opacity-0 group-hover/box:opacity-100 transition-all duration-700" />

                            <div className="relative glass p-8 md:p-10 rounded-2xl border border-white/5 bg-black/40 flex flex-col md:flex-row items-center gap-10 overflow-hidden backdrop-blur-2xl transition-all duration-500 hover:border-accent/30 group-hover/box:bg-black/60">
                                {/* Side Background Flare */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full" />

                                <div className="flex-shrink-0">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-lg animate-pulse" />
                                        <div className="relative w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center shadow-inner">
                                            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-accent" stroke="currentColor" strokeWidth="2">
                                                <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center md:text-left space-y-3">
                                    <div className="flex items-center justify-center md:justify-start gap-2">
                                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                                        <span className="text-[10px] font-orbitron uppercase tracking-[0.4em] text-accent font-black">Active Partnership</span>
                                    </div>
                                    <h3 className="text-1xl md:text-2xl font-orbitron font-bold text-foreground leading-tight tracking-tight">
                                        Running integrated software lab at sgvu
                                    </h3>
                                    <p className="text-xs text-foreground/50 font-medium tracking-wide leading-relaxed max-w-2xl">
                                        Delivering industry-standard engineering training and active software development directly on the university campus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Part 3: Point 3 - Targeting In-Demand Careers */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-10 order-2 lg:order-1"
                    >
                        <div className="flex items-start gap-8">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center text-3xl font-orbitron font-bold text-accent bg-accent/5">
                                3
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground leading-tight flex items-start gap-3">
                                    <div>
                                        Targeting <span className="text-accent italic">In-Demand Careers Of 2030</span>
                                    </div>
                                </h3>
                                <p className="text-xl text-foreground/60 leading-relaxed max-w-xl">
                                    Train for roles powering the next generation of banking, robotics, healthcare, and more—with real-world impact and future security.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative group cursor-pointer w-full max-w-3xl mx-auto">
                            <div className="aspect-[21/9] bg-black/40 rounded-[2rem] border border-foreground/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_80px_rgba(216,246,2,0.1)] relative">
                                <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:15px_15px] opacity-30" />
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Inner Sleek Glow */}
                                <div className="absolute inset-4 border border-foreground/5 rounded-[1.8rem] pointer-events-none" />

                                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(216,246,2,0.4)] transition-transform duration-700 group-hover:scale-110 z-10 text-black">
                                    <svg className="w-10 h-10 ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>

                                <div className="absolute bottom-10 left-0 w-full text-center z-10">
                                    <span className="text-[10px] font-orbitron uppercase tracking-[0.5em] text-foreground/30 font-bold">The Future of Education</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </motion.div >
        </section >
    );
};

export default ProgramFeatures;
