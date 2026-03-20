'use client';

import React from 'react';
import Image from 'next/image';
import MagneticEffect from './MagneticEffect';


const BottomCTA = () => {
    return (
        <>
            {/* Hidden Section - Only at Aestr you are trained for future safe professions */}
            {/*
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
                                        <span className="block">
                                            Only at <span className="text-accent italic">AESTR</span>{' '}
                                            <span className="whitespace-nowrap">you are trained for</span>
                                        </span>
                                        <span className="block">future safe professions</span>
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
            */}

            {/* SGVU Rankings Section */}
            <section className="bg-black py-4 md:py-6 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="container-boxed relative z-10">
                    <div className="flex flex-col items-center text-center space-y-8 py-12">
                        {/* SGVU Logo */}
                        <div className="relative w-64 h-16 transition-all duration-500 hover:scale-105 mb-4">
                            <Image
                                src="/Herosection/sgvu-logo.png"
                                alt="SGVU Logo"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>

                        {/* Ranking Text */}
                        <div className="space-y-4">
                            <h3 className="text-3xl md:text-5xl subheading-font text-white font-medium tracking-tight">
                                NAAC A+
                            </h3>
                            <p className="text-3xl md:text-6xl subheading-font text-white font-medium tracking-tight">
                                NIRF Ranked 101-150
                            </p>
                        </div>

                        {/* Divider & Copyright */}
                        <div className="w-full pt-12 border-t border-white/20 flex flex-col items-center gap-12">
                            {/* Contact Section - Toll Free Number */}
                            <div className="flex flex-col items-center gap-2 group/phone cursor-pointer">
                                <p className="text-xs font-orbitron font-medium text-white/30 uppercase tracking-[0.3em]">Contact</p>
                                <div className="flex items-center gap-3 text-accent group-hover/phone:text-white transition-colors duration-300">
                                    <span className="text-sm md:text-lg font-semibold tracking-widest font-orbitron">Toll free number - 1800 - 309 - 4545</span>
                                </div>
                            </div>
                            
                            <p className="text-2xl md:text-4xl subheading-font text-white font-medium tracking-tight">
                                AESTR &copy; 2026
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default BottomCTA;
