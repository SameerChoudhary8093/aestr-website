'use client';

import React from 'react';
import Image from 'next/image';

const SparkleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
    </svg>
);

const ProgramFeatures = () => {
    return (
        <section id="program-features" className="relative py-24 bg-transparent overflow-hidden">
            {/* Futuristic Ambient Glows */}
            <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

            {/* Floating Stars */}
            <SparkleIcon className="absolute top-40 right-1/4 w-8 h-8 text-accent animate-pulse" />
            <SparkleIcon className="absolute bottom-1/3 left-10 w-6 h-6 text-accent animate-pulse" />
            <SparkleIcon className="absolute top-1/2 left-1/3 w-10 h-10 text-accent" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Part 1: Founding Team & Video */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
                        <div className="space-y-4">
                            <p className="text-xl text-white/60 leading-relaxed flex items-start gap-3">
                                <SparkleIcon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                Our founding team includes engineers from Shodh AI (USA) and other global tech leaders...
                            </p>
                            <div className="glass p-8 rounded-2xl border-l-4 border-accent shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:20px_20px]">
                                <p className="text-2xl font-orbitron font-bold text-white leading-tight">
                                    "We believe only those who build the future can truly teach it."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative group cursor-pointer animate-in fade-in slide-in-from-right duration-700">
                        <div className="aspect-video bg-black/40 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_50px_rgba(204,255,0,0.1)]">
                            <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:10px_10px] opacity-20" />
                            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(204,255,0,0.3)] transition-transform duration-500 group-hover:scale-110 z-10">
                                <svg className="w-8 h-8 text-background ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Part 2: Program Partners Section */}
                <div className="text-center space-y-12 mb-40">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white flex items-center justify-center gap-4">
                            <SparkleIcon className="w-10 h-10 text-accent" />
                            Program Partners <span className="text-accent italic">with us</span>
                        </h2>
                        <p className="text-lg text-white/40 uppercase tracking-widest">
                            Our Engineering Teachers from
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { name: 'Shodh AI', logo: '/ProgramPartners/Shodh-ai.svg' },
                            { name: 'Apple', logo: '/ProgramPartners/Apple-logo.png' },
                            { name: 'Microsoft', logo: '/ProgramPartners/micro.webp' },
                            { name: 'Google', logo: '/ProgramPartners/google.webp' },
                            { name: 'DRDO', logo: '/ProgramPartners/DRDO.webp' }
                        ].map((partner) => (
                            <div key={partner.name} className="glass aspect-[4/3] rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:scale-105 hover:bg-white/[0.08] hover:border-accent/30 cursor-default group relative overflow-hidden bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:20px_20px]">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-0" />
                                <div className="z-10 w-44 h-32 flex items-center justify-center relative">
                                    <Image src={partner.logo} alt={partner.name} fill className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-300" />
                                </div>
                                <span className="z-10 text-[10px] font-orbitron uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="inline-block mt-8">
                        <div className="px-6 py-2 bg-blue-900/20 border border-white/10 rounded-full text-xs font-orbitron tracking-widest text-accent flex items-center gap-3">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            Run Software Lab at GV
                        </div>
                    </div>
                </div>

                {/* Part 3: Point 3 - Targeting In-Demand Careers */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10 order-2 lg:order-1">
                        <div className="flex items-start gap-8">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center text-3xl font-orbitron font-bold text-accent bg-accent/5 shadow-[0_0_20px_rgba(204,255,0,0.1)]">
                                3
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-white leading-tight flex items-start gap-3">
                                    <SparkleIcon className="w-8 h-8 text-accent mt-1" />
                                    <div>
                                        Targeting <span className="text-accent italic">In-Demand Careers</span> Of 2030
                                    </div>
                                </h3>
                                <p className="text-xl text-white/60 leading-relaxed">
                                    Train for roles powering the next generation of banking, robotics, healthcare, and more—with real-world impact and future security.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="relative group cursor-pointer lg:max-w-md mx-auto">
                            <div className="aspect-[3/4] bg-black/40 rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_80px_rgba(204,255,0,0.15)] relative">
                                <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:15px_15px] opacity-30" />
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Inner Sleek Glow */}
                                <div className="absolute inset-4 border border-white/5 rounded-[2.5rem] pointer-events-none" />

                                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(204,255,0,0.4)] transition-transform duration-700 group-hover:scale-110 z-10">
                                    <svg className="w-10 h-10 text-background ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>

                                <div className="absolute bottom-10 left-0 w-full text-center z-10">
                                    <span className="text-xs font-orbitron uppercase tracking-[0.5em] text-white/50">The Future of Education</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProgramFeatures;
