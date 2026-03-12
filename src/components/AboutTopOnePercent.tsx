'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AboutTopOnePercent = () => {
    return (
        <section className="relative py-24 bg-background-alt overflow-hidden">
            {/* Ambient subtle shapes - Neon accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
            </div>

            <div className="container-boxed relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-4 text-left">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold leading-tight flex flex-wrap items-center gap-2 md:gap-3 text-foreground">
                                B.Tech for <span className="italic font-light text-accent">The top 1%</span>
                            </h2>
                            <p className="text-base md:text-lg text-foreground/80 max-w-2xl leading-relaxed">
                                Blend of deep CS knowledge with expertise in healthcare, nanotech, robotics, and material science.
                            </p>
                        </div>
                        <Link href="/btech-ai-shodh-ai" className="btn-aestr group whitespace-nowrap self-start">
                            Btech AI with Shodh AI
                            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2">↗</span>
                        </Link>
                    </div>

                    {/* Specialization Card */}
                    <div className="glass p-5 md:p-8 rounded-2xl md:rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center overflow-hidden">
                        {/* Left: Video Embed */}
                        <div className="aspect-video w-full rounded-xl md:rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative group bg-black">
                            <iframe
                                src="https://www.youtube.com/embed/mA3Z2VYMNXo?rel=0&modestbranding=1"
                                title="B.Tech for The top 1%"
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Right: Specializations */}
                        <div className="space-y-6 md:space-y-8 text-left">
                            <div className="space-y-4">
                                <h3 className="text-xl md:text-2xl font-orbitron font-bold text-foreground leading-tight">B.Tech Computer Science & Engineering</h3>

                                <div className="space-y-4 md:space-y-6">
                                    <h4 className="text-[11px] md:text-xs font-orbitron tracking-[0.2em] text-foreground/40 font-bold uppercase">Major specialization</h4>
                                    <div className="flex flex-wrap gap-2 md:gap-4">
                                        {["Software engineering", "Cloud engineering", "Data science", "AI & ML", "Cyber security"].map((item) => (
                                            <span key={item} className="px-6 py-3 text-sm md:text-base bg-accent/10 text-accent border border-accent/20 rounded-full font-bold tracking-tight hover:bg-accent/20 transition-all cursor-default">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4 md:space-y-6">
                                    <h4 className="text-[11px] md:text-xs font-orbitron tracking-[0.2em] text-foreground/40 font-bold italic text-white/40">Minor specialization...</h4>
                                    <div className="flex flex-wrap gap-2 md:gap-4">
                                        {["Robotics", "Bioinformatics", "Industry & manufacturing", "Design", "Fintech", "Nanotechnology", "Geoinformatics", "Chip & semiconductor", "Smart cities"].map((item) => (
                                            <span key={item} className="px-6 py-3 text-sm md:text-base bg-foreground/5 border border-foreground/10 rounded-full text-foreground/70 hover:border-accent/40 hover:text-accent transition-all cursor-default font-bold tracking-tight">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutTopOnePercent;
