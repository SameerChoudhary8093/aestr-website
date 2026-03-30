'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CourseraPartnership = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#571AD0] text-white">
            {/* Ambient subtle shapes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
            </div>

            <div className="container-boxed w-full max-w-[1224px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
                >
                    {/* Left side: Text Content */}
                    <div className="flex-[1.2] space-y-8">
                        <div className="space-y-4">
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6 }}
                                className="font-orbitron font-medium text-lg uppercase tracking-wider text-white/80"
                            >
                                Join
                            </motion.p>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-3xl md:text-5xl font-orbitron font-bold leading-tight"
                            >
                                Suresh Gyan Vihar University
                            </motion.h2>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex items-center gap-3 flex-wrap"
                            >
                                <span className="text-2xl md:text-4xl text-white/90 font-medium">
                                    & Get Free Access to
                                </span>
                                <div className="bg-white px-5 py-2 rounded-xl inline-flex items-center justify-center -rotate-2 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                                    <Image src="/Other/Coursera.png" alt="Coursera" width={160} height={40} className="w-auto h-6 md:h-8 object-contain" />
                                </div>
                            </motion.div>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-6 pt-4"
                        >
                            <h3 className="text-xl font-orbitron font-bold text-accent">Key Benefits For SGVU Students</h3>
                            <ul className="space-y-4">
                                {[
                                    "Full access to thousands of courses (tech, business, data science, etc.)",
                                    "Skills-based short courses integrated into regular curriculum",
                                    "Courses from top tech companies, focusing on practical and in-demand skills",
                                    "Blended learning model to boost academic and job readiness"
                                ].map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0 shadow-[0_0_8px_rgba(216,246,2,0.8)]" />
                                        <span className="text-white/90 text-lg md:text-[20px] leading-relaxed font-medium">
                                            {benefit}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Right side: Cards and Logos */}
                    <div className="flex-1 space-y-10 w-full">
                        {/* 3800+ Courses Box */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-[#6BBDF3] p-10 rounded-3xl shadow-2xl relative overflow-hidden"
                        >
                            {/* Blue box style matching image */}
                            <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-2 text-black">
                                <h3 className="text-6xl md:text-7xl font-black tracking-tight" style={{ fontFamily: 'sans-serif' }}>3,800+</h3>
                                <p className="text-xl md:text-2xl font-bold">Coursera Courses</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <h4 className="text-lg font-orbitron font-medium text-white/80">Offerings from</h4>
                            <div className="inline-flex items-center gap-4 md:gap-6 bg-white/5 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-white/10 flex-wrap justify-center sm:justify-start">
                                {/* Google */}
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.5 }}
                                    className="bg-white px-4 py-3 rounded-lg flex items-center justify-center h-[60px]"
                                >
                                    <Image src="/Other/Google.png" alt="Google" width={100} height={30} className="w-auto h-8 object-contain" />
                                </motion.div>
                                {/* IBM */}
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.6 }}
                                    className="bg-white px-4 py-3 rounded-lg flex items-center justify-center h-[60px]"
                                >
                                    <Image src="/Other/IBM.png" alt="IBM" width={80} height={30} className="w-auto h-6 object-contain" />
                                </motion.div>
                                {/* AWS */}
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.7 }}
                                    className="bg-white px-4 py-3 rounded-lg flex items-center justify-center h-[60px]"
                                >
                                    <Image src="/Other/AWS.png" alt="AWS" width={80} height={30} className="w-auto h-8 object-contain" />
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CourseraPartnership;
