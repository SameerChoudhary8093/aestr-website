'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const labs = [
    { 
        name: 'Apple Ecosystem', 
        image: '/Other/apple-lab.png', 
        description: 'Master the art of building world-class applications within the premium Apple environment. From deep dives into Swift and SwiftUI to exploring advanced architectures for macOS, iOS, and the revolutionary VisionOS, you will gain hands-on experience with the tools that power the most elegant user experiences. This lab provides a unique opportunity to understand the synergy between high-end hardware and intuitive software design, preparing you for elite development roles worldwide.', 
        icon: 'apple' 
    },
    { 
        name: 'NVIDIA Pipeline', 
        image: '/Other/Nvidia-Image.jpeg', 
        description: 'Harness the massive power of GPU-accelerated computing in our high-performance NVIDIA lab. Master CUDA programming, TensorRT optimization, and the foundational software stacks that drive today\'s generative AI and deep learning breakthroughs. You will build the data-intensive intelligence that moves the modern cloud and data center, positioning yourself at the core of the infrastructure revolution. By bridging the gap between raw compute power and algorithmic excellence, you become an architect of the AI-driven future.', 
        icon: 'nvidia' 
    },
    { 
        name: 'RISC-V Lab', 
        image: '/Other/DSC08333.jpg.jpeg', 
        description: 'Take your place at the forefront of India\'s semiconductor sovereignty in our pioneering RISC-V hardware lab. Students engage in the complete lifecycle of chip design, from RTL development to physical implementation of custom silicon for AI-specific workloads. By mastering open-source hardware architectures, you will be prepared to engineer the systems that define the next generation of global computing. This hands-on experience with silicon logic ensures you understand the fundamental building blocks of modern digital civilization.', 
        icon: 'chip' 
    },
    { 
        name: 'Embodied Brain Lab', 
        image: '/Other/lab-2.webp', 
        description: 'Experience the convergence of neural intelligence and physical machines in our robotics and autonomous systems lab. Using the NVIDIA Jetson platform and ROS, you will build robots that can perceive, reason, and react to real-time environments with machine precision. This lab focuses on creating advanced exoskeletons and smart robotics that will redefine the future of healthcare, logistics, and industrial automation. You will learn to breathe life into metal and silicon, mastering the complex interplay of computer vision and mechanical control.', 
        icon: 'robotics' 
    }
];

const AboutPointFive = () => {
    return (
        <section className="relative py-32 bg-purple overflow-hidden">
            <div className="container-boxed relative z-10">
                <div className="space-y-16 md:space-y-24">
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                           <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
                            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#D7F601] flex items-center justify-center text-3xl md:text-4xl font-orbitron font-black text-black bg-[#D7F601] shadow-[0_0_20px_rgba(215,246,1,0.5)]">
                                5
                            </div>
                            <div className="space-y-6 text-left">
                                <div className="space-y-1">
                                    <h2 className="text-h2 text-white capitalize">
                                        Innovation labs <span className="opacity-90">of 2030</span>
                                    </h2>
                                </div>
                                <p className="text-body text-white/90 font-bold">
                                    Learn from the architects of tomorrow's AI. AESTR is the brainchild of leading AI engineers dedicated to cultivating the next generation of tech innovators.
                                </p>
                            </div>
                        </div></motion.div>

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
                                    <h4 className="text-h3 text-[#EAF0BD] mb-4 leading-tight transition-colors">{card.title}</h4>
                                    <p className="text-body text-[#EAF0BD] font-normal">{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Labs Alternating Grid - Refactored for more Depth */}
                    <div className="space-y-12">
                        {labs.map((lab, idx) => (
                            <motion.div
                                key={lab.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`glass !bg-black/40 !border-white/5 p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[4rem] flex flex-col gap-10 md:gap-16 lg:gap-20 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} group/lab hover:!bg-black/50 transition-all duration-500`}
                            >
                                {/* Image Side with Enhanced Glow */}
                                <div className="flex-1 relative group w-full">
                                    <div className="absolute -inset-4 bg-accent/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="relative aspect-[16/10] w-full bg-black/40 rounded-3xl md:rounded-[2.5rem] border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:border-accent/40 group-hover:shadow-[0_0_100px_rgba(216,246,2,0.05)]">
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
                                                <span className="text-[10px] font-orbitron font-black text-white/70 tracking-widest">Lab {String(idx + 1).padStart(2, '0')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="flex-1 space-y-6 md:space-y-8 text-left">
                                    <div className="space-y-6">
                                        <h3 className="text-h2 text-white capitalize">
                                            {lab.name}
                                        </h3>
                                        <p className="text-body text-[#EAF0BD] font-normal">
                                            {lab.description}
                                        </p>
                                    </div>

                                    <button className="flex items-center gap-4 group text-accent font-orbitron tracking-[0.3em] text-[10px] md:text-xs font-black transition-all duration-300 py-3 md:py-4 px-6 md:px-8 border border-accent/20 rounded-xl bg-accent/5 hover:bg-accent hover:text-black hover:border-accent">
                                        <span>View More</span>
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
