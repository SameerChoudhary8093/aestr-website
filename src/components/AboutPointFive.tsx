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
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.15 }
                                }
                            }}
                        >
                           <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
                                {/* Number badge removed as requested */}
                            <div className="space-y-6 text-left">
                                <motion.div 
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                    }}
                                    className="space-y-1"
                                >
                                    <h2 className="text-h2 text-white capitalize">
                                        Innovation labs <span className="opacity-90">of 2030</span>
                                    </h2>
                                </motion.div>
                                <motion.p 
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                    }}
                                    className="text-body text-white/90 font-bold"
                                >
                                    Learn from the architects of tomorrow's AI. AESTR is the brainchild of leading AI engineers dedicated to cultivating the next generation of tech innovators.
                                </motion.p>
                            </div>
                        </div></motion.div>

                        {/* Features Grid - Commented out as requested
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
                        */}
                    </div>

                    {/* Innovation Labs Grid - Styled EXACTLY as Team Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-[1400px] mx-auto px-4">
                        {labs.map((lab, idx) => (
                            <motion.div
                                key={lab.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="w-full h-full"
                            >
                                <div className="glass !bg-black/40 !border-white/10 p-6 md:p-8 rounded-[2.5rem] h-full flex flex-col group/lab hover:!bg-black/60 hover:border-accent/30 transition-all duration-500 relative shadow-2xl border border-white/5">
                                    
                                    {/* Top Image (Full Width of Card) */}
                                    <div className="relative aspect-[1/1] w-full bg-black/40 rounded-[1.5rem] overflow-hidden mb-8 border border-white/5 group-hover/lab:border-accent/40 transition-all duration-700">
                                        <Image
                                            src={lab.image}
                                            alt={lab.name}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover/lab:scale-110"
                                            sizes="(max-width: 768px) 100vw, 400px"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-grow space-y-6">
                                        <div className="space-y-3">
                                            <h4 className="text-[1.25rem] md:text-[1.5rem] text-white font-black leading-tight font-orbitron uppercase tracking-normal min-h-[3.5rem] flex items-start">
                                                {lab.name}
                                            </h4>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                                                <span className="text-[9px] md:text-[10px] font-orbitron font-black text-accent tracking-[0.2em] uppercase">LAB {String(idx + 1).padStart(2, '0')} IN-CHARGE</span>
                                            </div>
                                        </div>

                                        <p className="text-[11px] md:text-xs text-white/70 font-medium leading-[1.8] min-h-[160px]">
                                            {lab.description}
                                        </p>
                                    </div>

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
