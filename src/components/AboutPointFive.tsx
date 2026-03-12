'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const labs = [
    { name: 'Apple Ecosystem', image: '/Other/lab-5.webp', description: 'Master cutting-edge development inside the Apple environment. Work with iOS, macOS, and VisionOS architectures.', icon: 'apple' },
    { name: 'NVIDIA Pipeline', image: '/Other/lab-4.webp', description: 'Dive deep into GPU-accelerated computing and CUDA. Build the hardware intelligence that moves the modern data center.', icon: 'nvidia' },
    { name: 'RISC-V Lab', image: '/Other/lab-3.webp', description: 'Engineer the future with India\'s pioneering semiconductor technology. Design chips and low-level systems for the AI era.', icon: 'chip' },
    { name: 'Embodied Brain Lab', image: '/Other/lab-2.webp', description: 'Dive into Robotics, Exoskeletons, and ROS on Nvidia Jetson. Build physical intelligence that moves and interacts with the real world.', icon: 'robotics' }
];

const AboutPointFive = () => {
    return (
        <section className="relative py-32 bg-purple overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="space-y-16 md:space-y-24">
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="flex flex-col md:flex-row items-start gap-4 md:gap-6"
                        >
                            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-accent/20 flex items-center justify-center text-2xl md:text-3xl font-orbitron font-bold text-accent bg-accent/5">
                                5
                            </div>
                            <div className="space-y-4 text-left">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-white">
                                    Innovation labs of 2030
                                </h2>
                                <p className="text-base md:text-lg text-white/50 max-w-3xl leading-relaxed">
                                    Learn from the architects of tomorrow's AI. AESTR is the brainchild of leading AI engineers dedicated to cultivating the next generation of tech innovators.
                                </p>
                            </div>
                        </motion.div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[
                                { title: 'Exclusive Designs', desc: 'Co-created with insights from our work with DRDO, Silicon Valley startups, and our US-based company, Shodh AI (a top 1% AI startup).' },
                                { title: 'Become a Domain Champion', desc: 'Engage with at least three labs or achieve PhD-level expertise by dedicating your four years to a single lab.' },
                                { title: 'Expert-Guided Product Development', desc: 'Each lab has dedicated experts to help you transform your innovative ideas into real-world products.' }
                            ].map((card, i) => (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="glass !bg-black/40 !border-white/5 p-6 md:p-8 rounded-2xl group hover:bg-black/60 hover:border-accent/30 transition-all duration-300 text-left"
                                >
                                    <h4 className="text-xs md:text-base font-orbitron font-bold text-accent mb-4 leading-tight group-hover:text-accent transition-colors uppercase tracking-widest">{card.title}</h4>
                                    <p className="text-xs md:text-sm text-white/50 leading-relaxed font-semibold">{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Labs Alternating Grid - Refactored for more Depth */}
                    <div className="space-y-32 md:space-y-48">
                        {labs.map((lab, idx) => (
                            <motion.div
                                key={lab.name}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1 }}
                                className={`flex flex-col gap-10 md:gap-16 lg:gap-24 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                            >
                                {/* Image Side with Enhanced Glow */}
                                <div className="flex-1 relative group w-full">
                                    <div className="absolute -inset-4 bg-accent/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="relative aspect-[16/10] w-full bg-black/40 rounded-3xl md:rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:border-accent/40 group-hover:shadow-[0_0_100px_rgba(216,246,2,0.05)]">
                                        <Image
                                            src={lab.image}
                                            alt={lab.name}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                                        
                                        {/* Futuristic Overlay Elements */}
                                        <div className="absolute inset-0 border-[0.5px] border-white/5 rounded-[2.5rem] pointer-events-none" />
                                        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
                                            <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                                                <span className="text-[10px] font-orbitron font-black text-white/70 uppercase tracking-widest">Lab {String(idx + 1).padStart(2, '0')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="flex-1 space-y-6 md:space-y-10 text-left">
                                    <div className="space-y-6">
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                                            <span className="text-[10px] font-orbitron font-black text-accent uppercase tracking-[0.3em]">Advanced Research Lab</span>
                                        </div>
                                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-orbitron font-extrabold text-white leading-tight tracking-tight uppercase">
                                            {lab.name}
                                        </h3>
                                        <p className="text-lg md:text-2xl text-white/50 leading-relaxed font-bold max-w-xl">
                                            {lab.description}
                                        </p>
                                    </div>

                                    {/* Lab Meta Stats */}
                                    <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                                        <div className="space-y-1">
                                            <p className="text-[10px] text-white/30 uppercase font-black tracking-widest">Level</p>
                                            <p className="text-sm text-white font-orbitron font-bold">Tier 1 Elite</p>
                                        </div>
                                        <div className="w-px h-10 bg-white/10 mx-2" />
                                        <div className="space-y-1">
                                            <p className="text-[10px] text-white/30 uppercase font-black tracking-widest">Access</p>
                                            <p className="text-sm text-white font-orbitron font-bold">24/7 Dedicated</p>
                                        </div>
                                    </div>

                                    <button className="flex items-center gap-4 group text-accent font-orbitron uppercase tracking-[0.3em] text-[10px] md:text-xs font-black transition-all duration-300 py-4 px-8 border border-accent/20 rounded-xl bg-accent/5 hover:bg-accent hover:text-black hover:border-accent">
                                        <span>View Documentation</span>
                                        <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPointFive;
