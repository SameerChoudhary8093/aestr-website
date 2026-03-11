'use client';

import React from 'react';
import Image from 'next/image';

const BottomCTA = () => {
    return (
        <>
            <section className="relative py-24 bg-background-alt overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">

                    {/* Wide Glassmorphism Container */}
                    <div className="glass rounded-[2rem] p-6 md:p-14 border border-foreground/5 bg-gradient-to-br from-foreground/5 to-transparent shadow-2xl">
                        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">

                            {/* Left Side (Content) */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 md:space-y-8 text-left">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-foreground leading-tight tracking-tight">
                                    Only at <span className="text-accent italic">AESTR</span> you are trained for future safe professions
                                </h2>
                                <p className="text-base md:text-xl text-foreground/50 leading-relaxed font-semibold">
                                    Browse further to know more about our courses
                                </p>

                                {/* Action Box */}
                                <div className="mt-8 bg-black/40 p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 md:gap-8 border border-foreground/5">
                                    <p className="text-foreground/70 text-xs md:text-sm flex-1 text-center sm:text-left font-medium">
                                        Don't be shy. We enjoy connecting with students and parents.
                                    </p>
                                    <button className="btn-aestr group whitespace-nowrap self-stretch sm:self-auto text-center">
                                        Apply Now
                                        <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2">↗</span>
                                    </button>
                                </div>
                            </div>

                            {/* Right Side (Image Placeholder) */}
                            <div className="w-full lg:w-1/2">
                                <div className="aspect-square w-full bg-black/20 rounded-2xl md:rounded-3xl border border-foreground/10 relative group overflow-hidden flex items-center justify-center p-4 md:p-8">
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

            {/* Admissions Bar */}
            <div className="relative w-full bg-background border-t border-foreground/10 py-8 md:py-10 z-10 admissions-bar-footer">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                    <p className="text-sm sm:text-base md:text-lg font-orbitron font-bold text-foreground uppercase tracking-[0.1em] text-center md:text-left flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <span className="w-2 h-2 md:w-3 md:h-3 bg-accent rounded-full animate-ping inline-block" />
                        Admissions Open at Suresh Gyan Vihar University for 2026-2027
                    </p>
                    <button className="btn-aestr font-black tracking-[0.2em] uppercase py-3 md:py-4 px-8 md:px-12 w-full md:w-auto text-center">
                        Apply Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default BottomCTA;
