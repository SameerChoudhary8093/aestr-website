'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProgramPartners = () => {
    // Premium SVG equivalents where image logos are missing
    const BigDataLogo = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#00E5FF] drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
    );

    const ECCouncilLogo = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#FF3366] drop-shadow-[0_0_15px_rgba(255,51,102,0.4)]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
    );

    const partnersData = [
        {
            title: (
                <div className="flex flex-col items-center justify-center">
                    <span className="whitespace-nowrap">AI &</span>
                    <span className="whitespace-nowrap">Machine Learning</span>
                </div>
            ),
            subtitle: 'AI with SHODH AI',
            logo: '/ProgramPartners/Shodh-ai.svg',
            color: 'from-[#5B1DD6]/40 via-transparent to-transparent',
            borderColor: 'group-hover:border-[#5B1DD6]/40'
        },

        {
            title: (
                <div className="flex flex-col items-center justify-center">
                    <span className="whitespace-nowrap">Cloud & Infrastructure</span>
                    <span className="whitespace-nowrap">Engineering</span>
                </div>
            ),
            subtitle: 'Learning Centre With Google',
            logo: '/ProgramPartners/google.webp',
            color: 'from-green-500/30 via-transparent to-transparent',
            borderColor: 'group-hover:border-green-500/40'
        },
        {
            title: (
                <div className="flex flex-col items-center justify-center">
                    <span className="whitespace-nowrap">Software Engineering &</span>
                    <span className="whitespace-nowrap">AI Architecture</span>
                </div>
            ),
            subtitle: 'Apple Authorized Training Centre',
            logo: '/Other/apple-authorized-training-center-edu.avif',
            color: 'from-gray-400/30 via-transparent to-transparent',
            borderColor: 'group-hover:border-white/40'
        },
        {
            title: (
                <div className="flex flex-col items-center justify-center">
                    <span className="whitespace-nowrap">Cyber Security &</span>
                    <span className="whitespace-nowrap">Blue Teaming</span>
                </div>
            ),
            subtitle: 'EC-Council Academia',
            logo: '/Other/ECC-Academia-C2SI-Logo.webp',
            color: 'from-[#FF3366]/30 via-transparent to-transparent',
            borderColor: 'group-hover:border-[#FF3366]/40'
        }
    ];

    return (
        <section className="relative py-32 bg-background-alt overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-20 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-purple/10 blur-[150px] rounded-full pointer-events-none z-0" />

            <div className="container-boxed relative z-10">
                <div className="space-y-20">
                    <div className="space-y-6 text-center max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl md:text-6xl font-orbitron font-bold text-foreground text-center tracking-tight leading-tight"
                        >
                            Program Partners With Us
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-foreground/70 leading-relaxed font-semibold max-w-2xl mx-auto"
                        >
                            The Core Residencies <br />
                            <span className="text-foreground/40 font-medium">B.Tech Degrees & Official Accreditations</span>
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-[90rem] mx-auto">
                        {partnersData.map((item, idx) => (
                            <motion.div
                                key={`${item.title}-${item.subtitle}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`group relative glass rounded-[2rem] p-6 lg:p-8 border border-white/5 ${item.borderColor} overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-black/50 bg-black/40 flex flex-col items-center justify-between text-center min-h-[300px] z-10`}
                            >
                                {/* Dynamic Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[80px] group-hover:bg-white/10 transition-colors pointer-events-none" />

                                {/* Logo Presentation exactly as requested (enlarged significantly) */}
                                <div className="w-full flex items-center justify-center relative z-10 py-6 h-[180px] shrink-0">
                                    <div className="w-32 h-32 md:w-36 md:h-36 relative flex items-center justify-center transform group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-700 ease-out">
                                        {item.logo ? (
                                            <Image
                                                src={item.logo}
                                                alt={item.subtitle}
                                                fill
                                                className="object-contain"
                                            />
                                        ) : (
                                            <div className="w-24 h-24 md:w-28 md:h-28">
                                                {item.logoNode}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col relative z-10 w-full pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors h-full justify-between">
                                    <h3 className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-orbitron font-bold text-white tracking-wide mb-auto">
                                        {item.title}
                                    </h3>
                                    <div className="flex flex-row items-center justify-center gap-2 mt-4 shrink-0">
                                        <span className="text-[#D8F602] animate-pulse text-lg mb-0.5">★</span>
                                        <p className="text-xs sm:text-sm md:text-[13px] font-medium text-white/80 uppercase tracking-widest leading-relaxed">
                                            {item.subtitle}
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
}

export default ProgramPartners;
