'use client';

import React from 'react';
import Image from 'next/image';

const BottomCTA = () => {
    return (
        <>
            <section className="relative py-24 bg-[#3b0764] overflow-hidden pb-12">
                <div className="container mx-auto px-6 relative z-10 animate-in fade-in slide-in-from-bottom duration-700">

                    {/* Wide Glassmorphism Container */}
                    <div className="glass rounded-3xl p-8 md:p-12 border border-white/10 bg-gradient-to-br from-white/5 to-blue-900/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                        <div className="flex flex-col lg:flex-row items-center gap-12">

                            {/* Left Side (Content) */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white leading-tight">
                                    Only At <span className="text-accent italic">AESTR</span> You Are Trained For Future Safe Professions
                                </h2>
                                <p className="text-lg text-white/50 leading-relaxed">
                                    Browse further to know more about our courses
                                </p>

                                {/* Action Box */}
                                <div className="mt-8 bg-black/30 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 border border-white/5">
                                    <p className="text-white/80 text-sm flex-1 text-center sm:text-left">
                                        Don't be shy. We enjoy connecting with students and parents.
                                    </p>
                                    <button className="btn-aestr flex items-center gap-2 group whitespace-nowrap">
                                        Apply Now
                                        <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                                    </button>
                                </div>
                            </div>

                            {/* Right Side (Image Placeholder) */}
                            <div className="w-full lg:w-1/2">
                                <div className="h-[350px] w-full bg-black/20 rounded-2xl border border-white/10 relative group overflow-hidden flex items-center justify-center p-4">
                                    <Image
                                        src="/Other/Robo.webp"
                                        alt="Robotics Training"
                                        fill
                                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Admissions Bar (Now Static/Footer Style) */}
            <div className="relative w-full bg-[#0A1128] border-t border-white/10 p-6 z-10">
                <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm font-orbitron font-semibold text-white uppercase tracking-widest text-center sm:text-left flex items-center gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse inline-block" />
                        Admissions Open at Suresh Gyan Vihar University for 2026-2027
                    </p>
                    <button className="btn-aestr text-xs tracking-widest uppercase py-3 px-8">
                        Apply Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default BottomCTA;
