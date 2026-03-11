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

const BootcampsAndLabs = () => {
    return (
        <div className="flex flex-col">
            {/* Section 4: Bootcamp, Bootcamp, Bootcamp */}
            <section className="relative py-24 bg-background-alt overflow-hidden">
                {/* Ambient Background Glows */}
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />


                <div className="container mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-20"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="space-y-8"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center text-3xl font-orbitron font-bold text-accent bg-accent/5">
                                        4
                                    </div>
                                    <div className="space-y-6">
                                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground leading-tight flex items-start gap-3">
                                            <div>
                                                Bootcamp, Bootcamp, <span className="text-accent italic">Bootcamp.</span>
                                            </div>
                                        </h2>
                                        <div className="space-y-4">
                                            <p className="text-lg text-foreground font-bold leading-relaxed">
                                                At AESTR, theory is just the beginning. We believe the best way to learn engineering is by building real things.
                                            </p>
                                            <p className="text-lg text-foreground/60 leading-relaxed font-medium">
                                                That's why every semester includes immersive AI bootcamps, right on campus — fully integrated into your curriculum.
                                            </p>
                                        </div>
                                        <button className="btn-aestr flex items-center gap-2 group">
                                            Read More
                                            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2">↗</span>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="relative group cursor-pointer"
                            >
                                <div className="aspect-[16/10] bg-black/40 rounded-[2rem] border border-foreground/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_80px_rgba(216,246,2,0.1)] relative">
                                    <Image
                                        src="/Other/Bootcamp.webp"
                                        alt="Engineering Bootcamp"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <div className="w-20 h-20 bg-accent/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-accent/30 group-hover:scale-110 transition-transform">
                                            <div className="w-10 h-10 border-2 border-accent rounded-full animate-ping" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Grid of cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: 'No compulsory written exams', desc: 'We don\'t test memory, we evaluate your ability to solve real problems. Your marks are based on live projects, products, and prototypes.' },
                                { title: 'Your Work, Your Grade', desc: 'Evaluation is based on your projects, problem-solving, and contributions - not just exam scores.' },
                                { title: 'Become a Senior Engineer, Faster', desc: 'Our practical methodology empowers you to develop senior-level engineering skills during your degree.' },
                                { title: 'Craft Your Degree', desc: 'Unprecedented flexibility allows you to shape your educational journey to match your passions and career aspirations.' }
                            ].map((card, i) => (
                                <motion.div 
                                    key={card.title} 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="glass p-10 rounded-2xl group border-foreground/10 hover:border-accent/30 transition-all duration-500 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:15px_15px] opacity-20 pointer-events-none" />
                                    <div className="relative z-10">
                                        <h4 className="text-xl font-orbitron font-bold text-foreground mb-4 group-hover:text-accent transition-colors flex items-center gap-2">
                                            {card.title}
                                        </h4>
                                        <p className="text-foreground/60 text-sm leading-relaxed font-medium">{card.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 5: Innovation Labs Of 2030 */}
            <section className="relative py-32 bg-background overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="space-y-24">
                        <div className="space-y-12">
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="flex items-start gap-6"
                            >
                                <div className="flex-shrink-0 w-16 h-16 rounded-full border border-accent/20 flex items-center justify-center text-3xl font-orbitron font-bold text-accent bg-accent/5">
                                    5
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground flex items-center gap-4">
                                        Innovation Labs Of 2030
                                    </h2>
                                    <p className="text-lg text-foreground/50 max-w-3xl leading-relaxed">
                                        Learn from the architects of tomorrow's AI. AESTR is the brainchild of leading AI engineers dedicated to cultivating the next generation of tech innovators.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    { title: 'Exclusive Designs', desc: 'Co-created with insights from our work with DRDO and top-tier labs.' },
                                    { title: 'Become a Domain Champion', desc: 'Engage with at least three labs or achieve PhD-level expertise in one.' },
                                    { title: 'Expert-Guided Product Development', desc: 'Each lab has dedicated experts to help you transform your innovative ideas.' }
                                ].map((card, i) => (
                                    <motion.div 
                                        key={card.title} 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="glass p-8 rounded-2xl border-foreground/5 group hover:bg-accent/5 hover:border-accent/30 transition-all duration-300"
                                    >
                                        <h4 className="text-base font-orbitron font-bold text-accent mb-4 leading-tight group-hover:text-accent-secondary transition-colors uppercase tracking-widest">{card.title}</h4>
                                        <p className="text-sm text-foreground/50 leading-relaxed font-semibold">{card.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Labs Alternating Grid */}
                        <div className="space-y-32">
                            {labs.map((lab, idx) => (
                                <motion.div
                                    key={lab.name}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className={`flex flex-col md:items-center gap-12 lg:gap-20 ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                                >
                                    {/* Image Side */}
                                    <div className="flex-1 relative group cursor-pointer w-full">
                                        <div className="aspect-[16/9] w-full bg-black/40 rounded-[2.5rem] border border-foreground/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_80px_rgba(216,246,2,0.1)] relative">
                                            <Image
                                                src={lab.image}
                                                alt={lab.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="absolute top-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                                                <span className="text-[10px] font-orbitron uppercase tracking-[0.4em] font-black text-black bg-accent px-5 py-2.5 rounded-full shadow-xl">System 0{idx + 1}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="flex-1 space-y-8">
                                        <div className="space-y-4">
                                            <h3 className="text-3xl lg:text-4xl font-orbitron font-bold text-foreground group-hover:text-accent transition-colors">
                                                {lab.name}
                                            </h3>
                                            <p className="text-xl text-foreground/50 leading-relaxed font-medium">
                                                {lab.description}
                                            </p>
                                        </div>
                                        <button className="flex items-center gap-3 group text-accent font-orbitron uppercase tracking-[0.25em] text-[10px] font-black hover:text-foreground transition-all duration-300 py-2">
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
        </div>
    );
};

export default BootcampsAndLabs;
