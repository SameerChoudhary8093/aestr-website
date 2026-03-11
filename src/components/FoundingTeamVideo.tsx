'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FoundingTeamVideo = () => {
    return (
        <section className="relative py-24 bg-accent overflow-hidden">
            <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-white/20 blur-[120px] rounded-full pointer-events-none z-0" />
            
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-6 relative z-10"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6 md:space-y-8 text-left"
                    >
                        <div className="space-y-4">
                            <p className="text-lg md:text-xl text-black font-medium leading-relaxed">
                                Our founding team includes engineers from Shodh AI (USA) and other global tech leaders. Here, you won’t be taught by disconnected faculty, you’ll learn from full-time software developers, AI practitioners, and system architects who are shaping the real world.
                            </p>
                            <div className="glass !bg-black/90 p-6 md:p-8 rounded-2xl border-l-4 border-accent shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px] w-full">
                                <p className="text-lg md:text-2xl font-bold text-white leading-tight">
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
                        <div className="aspect-video bg-black/80 rounded-3xl border border-black/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-black/30 group-hover:shadow-[0_0_50px_rgba(0,0,0,0.2)]">
                            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:10px_10px] opacity-20" />
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-110 z-10 text-accent">
                                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default FoundingTeamVideo;
