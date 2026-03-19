'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProgramPartners = () => {
    return (
        <section className="relative py-24 bg-background-alt overflow-hidden">
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0" />
            
            <div className="container-boxed relative z-10">
                <div className="space-y-12 mb-24 md:mb-40">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-foreground flex items-center justify-center gap-4 tracking-tight">
                            Program Partners with us
                        </h2>
                        <p className="text-base md:text-lg text-foreground/70 max-w-2xl leading-relaxed mx-auto font-bold">
                            Our Engineering Teachers from
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] gap-12 lg:gap-20 items-start">
                        {/* Left: Partner logos */}
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            {[
                                { name: 'Shodh AI', logo: '/ProgramPartners/Shodh-ai.svg' },
                                { name: 'India AI', logo: '/Herosection/india-ai-logo-white.png' },
                                { name: 'Microsoft', logo: '/ProgramPartners/micro.webp' },
                                { name: 'Google', logo: '/ProgramPartners/google.webp' },
                                { name: 'DRDO', logo: '/ProgramPartners/DRDO.webp' }
                            ].map((partner, i) => (
                                <motion.div
                                    key={partner.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className={`glass !bg-black/40 !border-foreground/5 aspect-[4/3] rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-3 md:gap-4 transition-all duration-500 hover:scale-105 hover:!bg-black/60 cursor-default group relative overflow-hidden p-4 ${i === 4 ? 'col-span-2 w-full max-w-[220px] md:max-w-[260px] justify-self-center' : 'w-full'}`}
                                >
                                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
                                    <div className="z-10 w-full h-16 md:h-24 flex items-center justify-center relative px-4">
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            fill
                                            className="object-contain brightness-[1.2] group-hover:brightness-[1.5] transition-all duration-300 pointer-events-none"
                                        />
                                    </div>
                                    <span className="z-10 text-[7px] sm:text-[8px] md:text-[10px] font-orbitron uppercase tracking-widest text-foreground/40 group-hover:text-accent transition-colors font-bold">
                                        {partner.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right: Core Residencies & Edge Minors */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative group/box"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-b from-accent/0 via-accent/30 to-accent/0 rounded-[2rem] blur-xl opacity-0 group-hover/box:opacity-100 transition-all duration-700" />

                            <div className="relative rounded-[2rem] px-6 py-8 md:px-10 md:py-10 shadow-[0_22px_60px_rgba(0,0,0,0.55)] border border-[#D7F601]/30 space-y-8 text-white bg-[radial-gradient(circle_at_top_right,rgba(215,246,1,0.18),transparent_45%),linear-gradient(140deg,rgba(15,15,20,0.96)_0%,rgba(44,12,102,0.95)_52%,rgba(8,8,12,0.98)_100%)]">
                                <div className="space-y-3">
                                    <h3 className="text-2xl md:text-3xl font-bold leading-relaxed text-center md:text-left text-white">
                                        The Core Residencies
                                        <span className="block text-sm md:text-base font-semibold text-white/70">(B.Tech Degrees)</span>
                                    </h3>

                                    <div className="mt-4 space-y-3">
                                        {[ 
                                            { title: 'AI with SHODH AI', subtitle: '★ The Elite 60' },
                                            { title: 'AI & Machine Learning', subtitle: '' },
                                            { title: 'Data Engineering', subtitle: '' },
                                            { title: 'Cloud & Infrastructure Engineering', subtitle: '★ Learning Centre With Google' },
                                            { title: 'Software Engineering & AI Architecture', subtitle: '★ Apple Authorized Training Centre Education' },
                                            { title: 'Cyber Security & Blue Teaming', subtitle: '★ EC-Council Academia' }
                                        ].map((item) => (
                                            <div
                                                key={item.title}
                                                className="flex items-start gap-3 px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10"
                                            >
                                                <div className="mt-1 h-2 w-2 rounded-full bg-[#D7F601] shadow-[0_0_12px_rgba(215,246,1,0.7)] flex-shrink-0" />
                                                <div className="space-y-0.5">
                                                    <p className="text-base md:text-lg font-orbitron font-semibold tracking-tight text-white">
                                                        {item.title}
                                                    </p>
                                                    {item.subtitle && (
                                                        <p className="text-xs md:text-sm font-semibold text-white/65">
                                                            {item.subtitle}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-white/10 space-y-3">
                                    <h4 className="text-sm md:text-base font-orbitron font-black tracking-tight text-white">
                                        The "Edge" Minors
                                        <span className="block text-[11px] md:text-xs font-semibold text-white/60">(Cross-Train for Dominance)</span>
                                    </h4>
                                    <p className="text-[11px] md:text-xs font-medium text-white/70">
                                        Pair your core degree with a minor to become a "One-Person Unicorn":
                                    </p>
                                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] md:text-xs font-semibold text-white/80">
                                        <span>Data Engineering</span>
                                        <span>Robotics</span>
                                        <span>Fintech</span>
                                        <span>Cloud &amp; Infrastructure Engineering</span>
                                        <span>Software Engineering &amp; AI Architecture</span>
                                        <span>Chip &amp; Semiconductor</span>
                                        <span>Bio-Informatics</span>
                                        <span>Cyber Security &amp; Blue Teaming</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramPartners;
