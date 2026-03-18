'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const FutureFaculty = () => {
    return (
        <section className="relative py-24 bg-background-alt overflow-hidden">
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
                className="container-boxed relative z-10"
            >

                {/* Top Half: Content & Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-12 md:mb-16">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6 md:space-y-8 text-left"
                    >
                        <div className="flex flex-wrap md:flex-nowrap items-start gap-4 md:gap-6">
                            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-accent/30 flex items-center justify-center text-2xl md:text-3xl font-orbitron font-bold text-accent bg-accent/5">
                                6
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-h2 text-foreground flex flex-col items-start gap-2">
                                    <span className="flex items-center gap-4">
                                        Future faculty
                                    </span>
                                    <span className="text-accent italic">Ai & robotics.</span>
                                </h2>
                                <div className="space-y-4">
                                    <h3 className="text-h3 text-foreground font-black leading-relaxed">
                                        At Aestr, we don&apos;t just use technology we teach through it.
                                    </h3>
                                    <p className="text-body text-foreground/90 font-bold">
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
                        className="relative group w-full"
                    >
                        <div className="aspect-[16/10] md:aspect-[4/3] bg-black/60 rounded-2xl md:rounded-[2.5rem] border border-foreground/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_80px_rgba(216,246,2,0.1)] relative">
                            <Image
                                src="/Other/AI-faculty.png"
                                alt="AI & Robotics Faculty"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Half: 2-Column Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass p-8 md:p-10 rounded-2xl border-foreground/10 group hover:border-accent/30 transition-all duration-500 hover:bg-accent/5 relative overflow-hidden text-left"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:15px_15px] opacity-20 pointer-events-none" />
                        <div className="relative z-10">
                            <h4 className="text-h3 text-foreground mb-4 md:mb-6 flex items-center gap-3 group-hover:text-accent transition-colors">
                                 <span className="w-2 h-2 rounded-full bg-accent" />
                                 Ai teachers
                            </h4>
                            <p className="text-body text-foreground/90 font-bold">
                                Trained on the world’s best textbooks, industry manuals, open research, and real-world case studies, our AI teachers can explain complex topics in simple language — tailored to your pace, level, and interests.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass p-8 md:p-10 rounded-2xl border-foreground/10 group hover:border-accent/30 transition-all duration-500 hover:bg-accent/5 relative overflow-hidden text-left"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:15px_15px] opacity-20 pointer-events-none" />
                        <div className="relative z-10">
                            <h4 className="text-h3 text-foreground mb-4 md:mb-6 flex items-center gap-3 group-hover:text-accent transition-colors">
                                 <span className="w-2 h-2 rounded-full bg-accent" />
                                 Humanoid robot teachers
                            </h4>
                            <p className="text-body text-foreground/90 font-bold">
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
