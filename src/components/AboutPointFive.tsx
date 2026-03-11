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
        <section className="relative py-32 bg-background-alt overflow-hidden">
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
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-foreground">
                                    Innovation labs of 2030
                                </h2>
                                <p className="text-base md:text-lg text-foreground/50 max-w-3xl leading-relaxed">
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
                                    className="glass p-6 md:p-8 rounded-2xl border-foreground/5 group hover:bg-accent/5 hover:border-accent/30 transition-all duration-300 text-left"
                                >
                                    <h4 className="text-xs md:text-base font-orbitron font-bold text-accent mb-4 leading-tight group-hover:text-accent-secondary transition-colors uppercase tracking-widest">{card.title}</h4>
                                    <p className="text-xs md:text-sm text-foreground/50 leading-relaxed font-semibold">{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Labs Alternating Grid */}
                    <div className="space-y-20 md:space-y-32">
                        {labs.map((lab, idx) => (
                            <motion.div
                                key={lab.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col md:items-center gap-8 md:gap-12 lg:gap-20 ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                            >
                                {/* Image Side */}
                                <div className="flex-1 relative group cursor-pointer w-full">
                                    <div className="aspect-[16/9] w-full bg-black/40 rounded-2xl md:rounded-[2.5rem] border border-foreground/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_80px_rgba(216,246,2,0.1)] relative">
                                        <Image
                                            src={lab.image}
                                            alt={lab.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                                            <span className="text-[8px] md:text-[10px] font-orbitron uppercase tracking-[0.4em] font-black text-black bg-accent px-3 py-1.5 md:px-5 md:py-2.5 rounded-full shadow-xl">System 0{idx + 1}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="flex-1 space-y-4 md:space-y-8 text-left">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-orbitron font-bold text-foreground group-hover:text-accent transition-colors">
                                            {lab.name}
                                        </h3>
                                        <p className="text-base md:text-xl text-foreground/50 leading-relaxed font-medium">
                                            {lab.description}
                                        </p>
                                    </div>
                                    <button className="flex items-center gap-3 group text-accent font-orbitron uppercase tracking-[0.25em] text-[8px] md:text-[10px] font-black hover:text-foreground transition-all duration-300 py-2">
                                        <span>Explore Documentation</span>
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
