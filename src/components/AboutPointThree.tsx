'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';


const AboutPointThree = () => {
    return (
        <section className="relative py-24 bg-[#5B1DD6] overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="container-boxed relative z-10">
                <div className="flex flex-col items-center space-y-16">
                    {/* Header Area */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-6 w-full max-w-6xl px-4"
                    >
                        <h3 className="text-h2 text-white capitalize font-black lg:whitespace-nowrap">
                            Targeting <span className="opacity-95 text-accent">In-Demand Careers Of 2030</span>
                        </h3>
                        <p className="text-body text-white/90 font-bold lg:whitespace-nowrap">
                            Train for roles powering the next generation of banking, robotics, healthcare, and more—with real-world impact and future security.
                        </p>
                    </motion.div>

                    {/* Zoomed Out Media Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full max-w-6xl px-4">
                        {/* Left Side: Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative group w-full"
                        >
                            <div className="aspect-video w-full bg-black/80 rounded-[2rem] md:rounded-[3rem] border-2 border-white/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_100px_rgba(216,246,2,0.15)] relative">
                                <Image
                                    src="/Other/image.jpeg"
                                    alt="Future Technology"
                                    fill
                                    priority
                                    className="object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                            </div>
                        </motion.div>
 
                        {/* Right Side: Video */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative group w-full"
                        >
                            <div className="aspect-video w-full bg-black/80 rounded-[2rem] md:rounded-[3rem] border-2 border-white/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_100px_rgba(216,246,2,0.15)] relative">
                                <iframe
                                    src="https://www.youtube.com/embed/gGh2HYhMSy8?rel=0&modestbranding=1&start=2"
                                    title="In-Demand Careers of 2030"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPointThree;
