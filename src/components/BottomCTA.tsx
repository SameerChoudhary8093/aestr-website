'use client';

import React from 'react';
import Image from 'next/image';
import MagneticEffect from './MagneticEffect';

const BottomCTA = () => {
    return (
        <>
            <section className="relative py-24 bg-black overflow-hidden">
                <div className="container-boxed relative z-20">

                    {/* Wide Glassmorphism Container */}
                    <div className="glass !bg-purple/10 p-8 md:p-16 rounded-[2rem] md:rounded-[3.5rem] border-white/5 relative overflow-hidden group">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-accent/10 transition-all duration-700" />
                        
                        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 relative z-10">
                            {/* Left Side (Content) */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 md:space-y-10 text-left">
                                <div className="space-y-4 md:space-y-6">
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-extrabold text-white leading-[1.15] tracking-tight">
                                        Only at <span className="text-accent italic">AESTR</span> you are trained for future safe professions
                                    </h2>
                                    <p className="text-white/40 font-orbitron text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
                                        Browse further to know more about our courses
                                    </p>
                                </div>

                                {/* Action Box */}
                                <div className="bg-white/5 p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 md:gap-8 border border-white/5 group/cta hover:border-accent/30 transition-all duration-500">
                                    <p className="text-white/70 text-[10px] md:text-xs flex-1 text-center sm:text-left font-bold leading-relaxed uppercase tracking-wider">
                                        Don't be shy. We enjoy connecting with students and parents.
                                    </p>
                                    <div className="w-full sm:w-auto h-12">
                                        <MagneticEffect strength={0.4}>
                                            <button className="bg-accent hover:bg-white text-black px-10 py-3 rounded-xl font-orbitron font-black text-[10px] md:text-xs uppercase flex items-center justify-center gap-2 group/btn transition-all duration-300 shadow-[0_0_20px_rgba(216,246,2,0.2)] h-full w-full">
                                                Apply Now
                                                <span className="group-hover/btn:translate-x-1 transition-transform">↗</span>
                                            </button>
                                        </MagneticEffect>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side (Image Area) */}
                            <div className="w-full lg:w-1/2">
                                <div className="aspect-square md:aspect-[4/3] w-full bg-black/40 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 relative group/img overflow-hidden flex items-center justify-center p-4">
                                    <Image
                                        src="/Other/Robo.webp"
                                        alt="Robotics Training"
                                        fill
                                        className="object-contain transition-transform duration-1000 group-hover/img:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SGVU Rankings Section */}
            <section className="bg-black py-4 md:py-6 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center space-y-2">
                        <div className="relative w-24 md:w-32 h-8 md:h-12">
                            <Image 
                                src="/Herosection/SGVU-NIRF-NAAC.webp" 
                                alt="SGVU Rankings" 
                                fill 
                                className="object-contain brightness-[1.2]"
                            />
                        </div>
                        <div className="flex items-center gap-4 text-white/60">
                            <h3 className="text-[10px] md:text-xs font-orbitron font-extrabold tracking-[0.2em] text-white">NAAC A+</h3>
                            <div className="w-1 h-1 bg-white/20 rounded-full" />
                            <p className="text-[10px] md:text-xs font-orbitron font-medium tracking-[0.1em]">NIRF Ranked 101-150</p>
                        </div>
                        <div className="pt-2 border-t border-white/10 w-full max-w-[200px]">
                            <p className="text-[8px] md:text-[9px] font-medium text-white/30 tracking-[0.4em] font-orbitron uppercase">
                                AESTR &copy; 2026
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admissions Bar */}
            <div className="relative w-full bg-background border-t border-foreground/10 py-5 md:py-6 z-10 admissions-bar-footer">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                    <p className="text-xs sm:text-sm md:text-base font-orbitron font-bold text-foreground uppercase tracking-[0.1em] text-center md:text-left flex flex-col md:flex-row items-center gap-2 md:gap-3">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent rounded-full animate-ping inline-block" />
                        Admissions Open at Suresh Gyan Vihar University for 2026-2027
                    </p>
                    <button className="btn-aestr font-black tracking-[0.2em] uppercase py-2 md:py-3 px-6 md:px-10 w-full md:w-auto text-center text-xs md:text-sm">
                        Apply Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default BottomCTA;
