'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutPointThree = () => {
    return (
        <section className="relative py-24 bg-accent overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="container-boxed relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8 md:space-y-10 order-2 lg:order-1 text-left"
                    >
                        <div className="flex items-start gap-4 md:gap-8">
                            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-black/30 flex items-center justify-center text-2xl md:text-3xl font-orbitron font-bold text-black bg-black/5">
                                3
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-4xl font-orbitron font-bold text-black leading-tight">
                                    Targeting <span className="text-black italic underline decoration-black/20">In-Demand Careers</span> Of 2030
                                </h3>
                                <p className="text-lg md:text-xl text-black/90 leading-relaxed max-w-xl font-bold">
                                    Train for roles powering the next generation of banking, robotics, healthcare, and more—with real-world impact and future security.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative group">
                            <div className="aspect-video bg-black rounded-3xl border border-black/10 overflow-hidden transition-all duration-500 shadow-2xl">
                                <iframe
                                    src="https://www.instagram.com/aestr.gyanvihar/reel/DHYPi9QJIT-/"
                                    title="Targeting In-Demand Careers"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutPointThree;
