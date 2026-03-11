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
                className="container mx-auto px-6 relative z-10"
            >

                {/* Part 1: Founding Team & Video */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <p className="text-xl text-foreground/80 leading-relaxed flex items-start gap-3">
                                Our founding team includes engineers from Shodh AI (USA) and other global tech leaders...
                            </p>
                            <div className="glass p-8 rounded-2xl border-l-4 border-accent shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px]">
                                <p className="text-2xl font-orbitron font-bold text-foreground leading-tight">
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
                        className="relative group cursor-pointer"
                    >
                        <div className="aspect-video bg-black/40 rounded-3xl border border-foreground/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_50px_rgba(216,246,2,0.1)]">
                            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:10px_10px] opacity-20" />
                            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(216,246,2,0.3)] transition-transform duration-500 group-hover:scale-110 z-10 text-black">
                                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Part 2: Program Partners Section */}
                <div className="text-center space-y-12 mb-40">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground flex items-center justify-center gap-4 uppercase tracking-tighter">
                            Our Engineering <span className="text-accent italic">Teachers</span> From
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="inline-block mt-8"
                    >
                        <div className="px-8 py-3 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-orbitron tracking-[0.2em] text-accent flex items-center gap-3 uppercase font-bold">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            Run Software Lab at SGVU
                        </div>
                    </motion.div>
                </div>

                {/* Part 3: Point 3 - Targeting In-Demand Careers */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
                                        Targeting <span className="text-accent italic">In-Demand Careers</span> Of 2030
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
                        <div className="relative group cursor-pointer lg:max-w-md mx-auto">
                            <div className="aspect-[3/4] bg-black/40 rounded-[2rem] border border-foreground/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_80px_rgba(216,246,2,0.1)] relative">
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

            </motion.div>
        </section>
    );
};

export default ProgramFeatures;
