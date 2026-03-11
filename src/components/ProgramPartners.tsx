'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProgramPartners = () => {
    return (
        <section className="relative py-24 bg-background overflow-hidden">
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center space-y-12 mb-24 md:mb-40">
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-foreground flex items-center justify-center gap-4 tracking-tight">
                            Program Partners with us
                        </h2>
                        <p className="text-base md:text-lg text-foreground/80 max-w-2xl leading-relaxed mx-auto text-center">
                            Our Engineering Teachers from
                        </p>
                    </div>

                    {/* Mobile: 2 on top, 3 on bottom | Desktop: 5 in a row */}
                    <div className="flex flex-wrap justify-center gap-4 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-6">
                        {[
                            { name: 'Shodh AI', logo: '/ProgramPartners/Shodh-ai.svg', mobileWidth: 'w-[calc(50%-0.5rem)]' },
                            { name: 'Apple', logo: '/ProgramPartners/Apple-logo.png', mobileWidth: 'w-[calc(50%-0.5rem)]' },
                            { name: 'Microsoft', logo: '/ProgramPartners/micro.webp', mobileWidth: 'w-[calc(33.33%-0.75rem)]' },
                            { name: 'Google', logo: '/ProgramPartners/google.webp', mobileWidth: 'w-[calc(33.33%-0.75rem)]' },
                            { name: 'DRDO', logo: '/ProgramPartners/DRDO.webp', mobileWidth: 'w-[calc(33.33%-0.75rem)]' }
                        ].map((partner, i) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`glass aspect-[4/3] rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-3 md:gap-4 transition-all duration-500 hover:scale-105 hover:bg-white/[0.05] hover:border-accent/30 cursor-default group relative overflow-hidden p-4 ${partner.mobileWidth} md:w-full`}
                            >
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-0" />
                                <div className="z-10 w-full h-10 sm:h-12 md:h-20 flex items-center justify-center relative">
                                    <Image src={partner.logo} alt={partner.name} fill className="object-contain brightness-[1.2] group-hover:brightness-[1.5] transition-all duration-300" />
                                </div>
                                <span className="z-10 text-[7px] sm:text-[8px] md:text-[10px] font-orbitron uppercase tracking-widest text-foreground/40 group-hover:text-accent transition-colors font-bold">
                                    {partner.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-20 max-w-3xl mx-auto"
                    >
                        <div className="relative group/box">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 rounded-2xl blur-xl opacity-0 group-hover/box:opacity-100 transition-all duration-700" />

                            <div className="relative glass p-8 md:p-10 rounded-2xl border border-white/5 bg-black/40 flex flex-col md:flex-row items-center gap-10 overflow-hidden backdrop-blur-2xl transition-all duration-500 hover:border-accent/30 group-hover/box:bg-black/60">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full" />

                                <div className="flex-shrink-0">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-lg animate-pulse" />
                                        <div className="relative w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center shadow-inner">
                                            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-accent" stroke="currentColor" strokeWidth="2">
                                                <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center md:text-left space-y-3">
                                    <div className="flex items-center justify-center md:justify-start gap-2">
                                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                                        <span className="text-[10px] font-orbitron uppercase tracking-[0.4em] text-accent font-black">Active Partnership</span>
                                    </div>
                                    <h3 className="text-1xl md:text-2xl font-orbitron font-bold text-foreground leading-tight tracking-tight">
                                        Running integrated software lab at SGVU
                                    </h3>
                                    <p className="text-xs text-foreground/50 font-medium tracking-wide leading-relaxed max-w-2xl">
                                        Delivering industry-standard engineering training and active software development directly on the university campus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProgramPartners;
