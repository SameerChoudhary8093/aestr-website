'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const FutureFaculty = () => {
    return (
        <section className="relative py-24 bg-background overflow-hidden">
            {/* Ambient subtle shapes - Neon Green accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px]" />
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-6 relative z-10"
            >

                {/* Top Half: Content & Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center text-3xl font-orbitron font-bold text-accent bg-accent/5">
                                6
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground leading-tight flex flex-col items-start gap-2">
                                    <span className="flex items-center gap-4">
                                        Future Faculty
                                    </span>
                                    <span className="text-accent italic">AI & Robotics.</span>
                                </h2>
                                <div className="space-y-4">
                                    <h3 className="text-xl text-foreground font-bold leading-relaxed">
                                        At AESTR, we don't just use technology we teach through it.
                                    </h3>
                                    <p className="text-lg text-foreground/70 leading-relaxed">
                                        We are proud to be the first institution in the world to deploy AI-powered virtual teachers and humanoid robots as part of the core academic experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative group"
                    >
                        <div className="aspect-[4/3] bg-black/60 rounded-[2.5rem] border border-foreground/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_80px_rgba(216,246,2,0.1)] relative">
                            <Image
                                src="/Other/Future-Faculty.png"
                                alt="AI & Robotics Faculty"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Inner Decorative Glow */}
                            <div className="absolute inset-4 border border-foreground/5 rounded-[2.2rem] pointer-events-none z-10" />
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Half: 2-Column Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass p-10 rounded-2xl border-foreground/10 group hover:border-accent/30 transition-all duration-500 hover:bg-accent/5 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:15px_15px] opacity-20 pointer-events-none" />
                        <div className="relative z-10">
                            <h4 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3 group-hover:text-accent transition-colors">
                                 AI Teachers
                            </h4>
                            <p className="text-foreground/70 leading-relaxed font-medium">
                                Trained on the world’s best textbooks, industry manuals, open research, and real-world case studies, our AI teachers can explain complex topics in simple language — tailored to your pace, level, and interests.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass p-10 rounded-2xl border-foreground/10 group hover:border-accent/30 transition-all duration-500 hover:bg-accent/5 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:15px_15px] opacity-20 pointer-events-none" />
                        <div className="relative z-10">
                            <h4 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3 group-hover:text-accent transition-colors">
                                 Humanoid Robot Teachers
                            </h4>
                            <p className="text-foreground/70 leading-relaxed font-medium">
                                These physical AI-powered robots teach in labs, interact in real time, and even read your facial cues to adjust their delivery.
                            </p>
                        </div>
                    </motion.div>
                </div>

            </motion.div>
        </section>
    );
};

export default FutureFaculty;
