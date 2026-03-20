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
                        <p className="text-[16px] text-foreground/70 max-w-2xl leading-relaxed mx-auto font-bold">
                            Our Engineering Teachers from
                        </p>
                    </div>

                    <div className="w-full max-w-4xl mx-auto">
                        {/* Core Residencies */}
                        <div className="glass !bg-black/40 !border-foreground/5 p-6 md:p-8 rounded-2xl md:rounded-3xl">
                            <h3 className="text-2xl md:text-3xl font-bold leading-relaxed text-center md:text-left text-white mb-6">
                                The Core Residencies
                                <span className="block text-sm md:text-base font-semibold text-white/70">(B.Tech Degrees)</span>
                            </h3>

                            <div className="space-y-3">
                                {[ 
                                    { title: 'AI with SHODH AI', subtitle: '', logo: '/ProgramPartners/Shodh-ai.svg' },
                                    { title: 'AI & Machine Learning', subtitle: '★ Advanced AI Systems', logo: '/Herosection/india-ai-logo-white.png' },
                                    { title: 'Data Engineering', subtitle: '★ Big Data Analytics', logo: '/ProgramPartners/micro.webp' },
                                    { title: 'Software & Cloud Engineering', subtitle: '★ Learning Centre With Google', logo: '/ProgramPartners/google.webp' },
                                    { title: 'Software & Cloud Engineering', subtitle: '★ Apple Authorized Training Centre Education', logo: '/ProgramPartners/micro.webp' },
                                    { title: 'Cyber Security', subtitle: '★ EC-Council Academia', logo: '/ProgramPartners/DRDO.webp' }
                                ].map((item) => (
                                    <div
                                        key={`${item.title}-${item.subtitle}`}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10"
                                    >
                                        <div className="flex-1 space-y-0.5">
                                            <p className="text-base md:text-lg font-orbitron font-semibold tracking-tight text-white">
                                                {item.title}
                                            </p>
                                            {item.subtitle && (
                                                <p className="text-xs md:text-sm font-semibold text-white/65">
                                                    {item.subtitle}
                                                </p>
                                            )}
                                        </div>
                                        {item.logo && (
                                            <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-lg p-2">
                                                <Image
                                                    src={item.logo}
                                                    alt={item.title}
                                                    width={64}
                                                    height={64}
                                                    className="w-16 h-16 object-contain"
                                                    style={{ maxHeight: '64px', maxWidth: '64px' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramPartners;
