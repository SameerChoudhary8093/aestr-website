'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutPointOne = () => {
    return (
        <section className="relative py-24 bg-accent overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-6 relative z-10"
            >
                <div className="text-center space-y-4 mb-16 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-orbitron font-bold tracking-tight flex flex-wrap items-center justify-center gap-2 md:gap-4 text-black">
                        Why to <span className="text-black italic underline decoration-black/20">join</span> AESTR ?
                    </h2>
                </div>

                <div className="space-y-12">
                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                        <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-black/30 flex items-center justify-center text-2xl md:text-3xl font-orbitron font-bold text-black bg-black/5">
                            1
                        </div>
                        <div className="space-y-2 text-left">
                            <h3 className="text-xl md:text-3xl font-orbitron font-bold text-black/90">CSE 2030: Computer Science Won't Be Same Ever Again</h3>
                            <p className="text-black/70 text-base md:text-lg leading-relaxed max-w-4xl font-bold">
                                The world of Computer Science is transforming by 2030, and AESTR is already there! Traditional roles are evolving, and new opportunities are emerging. We’re not just preparing you for a job; we’re equipping you to define the future.
                            </p>
                        </div>
                    </div>

                    {/* Middle Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {[
                            { title: 'Future-Proof Your Career', desc: 'The AI job market is exploding, and old institutional models can’t keep up. AESTR is built for the 2030 job landscape, focusing on roles that will dominate the next decade.' },
                            { title: 'Beyond Traditional Tech', desc: 'Forget outdated job titles. Think specialized AI roles across diverse industries. We anticipate the shift, so you lead it.' },
                            { title: 'Engineered By Experts, For Experts-To-Be', desc: 'Our curriculum is designed and delivered by practicing AI engineers who are actively shaping the industry and know exactly what skills you’ll need.' }
                        ].map((card, i) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass !bg-black/80 !border-black/5 p-6 md:p-8 rounded-2xl group hover:-translate-y-1 transition-transform duration-300 text-left"
                            >
                                <h4 className="text-base md:text-lg font-orbitron font-bold text-white group-hover:text-accent transition-colors mb-4">{card.title}</h4>
                                <p className="text-xs md:text-sm text-white/60 leading-relaxed font-normal">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Unified Flexibility & Experience Section */}
                    <div className="mt-16 md:mt-24 space-y-6">
                        <div className="glass !bg-black/95 p-8 md:p-14 rounded-[2.5rem] border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                            {/* Decorative background glow */}
                            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 blur-[100px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-accent/10" />
                            
                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
                                {/* Left side: Heading and Points */}
                                <div className="lg:col-span-12 space-y-12">
                                    <div className="space-y-4 text-center">
                                        <h3 className="text-2xl md:text-5xl font-orbitron font-extrabold text-white leading-tight tracking-tight">
                                            Unparalleled Flexibility & <br className="hidden md:block" />
                                            <span className="text-accent italic">Cutting-Edge Curriculum</span>
                                        </h3>
                                        <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
                                    </div>
                                    
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
                                        {/* Left Side: Learn by Doing Header */}
                                        <div className="lg:col-span-5 space-y-6">
                                            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 group-hover:border-accent/30 transition-all duration-500 h-full flex flex-col justify-center text-left">
                                                <h4 className="text-2xl md:text-4xl font-orbitron font-bold text-accent mb-6 leading-tight">Learn by Doing, Excel by Creating:</h4>
                                                <div className="space-y-4">
                                                    <p className="text-white/70 text-sm md:text-base leading-relaxed">
                                                        Project-Powered Progress: Get graded on your real-world projects and software solutions, not just exams.
                                                    </p>
                                                    <p className="text-white/70 text-sm md:text-base leading-relaxed">
                                                        The Engineer’s Dream Education: Practical, innovative, and deeply engaging courses.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Side: 4 Key Points Grid */}
                                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                                            {[
                                                "Choose from 5 industry-focused Majors and 9 specialized Minors to tailor your unique expertise.",
                                                "Dive into 5 revolutionary Innovation Labs, unlike any in the world.",
                                                "Gain exclusive Apple Swift Application Development training directly from Apple.",
                                                "Learn from global master teachers, experts in defense technologies, robotics, and more."
                                            ].map((point, idx) => (
                                                <motion.div 
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                    className="glass !bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group/item flex flex-col gap-4 text-left"
                                                >
                                                    <div className="w-10 h-10 rounded-full border border-accent/20 bg-accent/5 flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-black transition-all duration-300">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <p className="text-sm md:text-base text-white/80 leading-relaxed font-bold group-hover/item:text-white transition-colors">
                                                        {point}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutPointOne;
