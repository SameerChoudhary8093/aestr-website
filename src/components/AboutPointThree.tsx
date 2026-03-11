'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutPointThree = () => {
    return (
        <section className="relative py-24 bg-background-alt overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8 md:space-y-10 order-2 lg:order-1 text-left"
                    >
                        <div className="flex items-start gap-4 md:gap-8">
                            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-accent/20 flex items-center justify-center text-2xl md:text-3xl font-orbitron font-bold text-accent bg-accent/5">
                                3
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-4xl font-orbitron font-bold text-foreground leading-tight">
                                    Targeting <span className="text-accent italic">In-Demand Careers</span> Of 2030
                                </h3>
                                <p className="text-base md:text-xl text-foreground/60 leading-relaxed max-w-xl">
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
            </div>
        </section>
    );
};

export default AboutPointThree;
