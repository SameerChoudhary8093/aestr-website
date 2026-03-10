'use client';

import React from 'react';
import Image from 'next/image';

const SparkleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
    </svg>
);

const FutureFaculty = () => {
    return (
        <section className="relative py-24 bg-[#020617] overflow-hidden">
            {/* Ambient subtle shapes - Royal Purple contrasts */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[120px]" />
                <SparkleIcon className="absolute top-20 right-20 w-8 h-8 text-accent animate-pulse" />
                <SparkleIcon className="absolute bottom-40 left-10 w-12 h-12 text-accent animate-pulse" />
                <SparkleIcon className="absolute top-1/2 right-1/3 w-6 h-6 text-accent" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Top Half: Content & Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-3xl font-orbitron font-bold text-white bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                6
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white leading-tight flex flex-col items-start gap-2">
                                    <span className="flex items-center gap-4">
                                        <SparkleIcon className="w-10 h-10 text-accent" />
                                        Future Faculty
                                    </span>
                                    <span className="text-accent italic">AI & Robotics.</span>
                                </h2>
                                <div className="space-y-4">
                                    <h3 className="text-xl text-white font-semibold leading-relaxed">
                                        At AESTR, we don't just use technology we teach through it.
                                    </h3>
                                    <p className="text-lg text-white/80 leading-relaxed">
                                        We are proud to be the first institution in the world to deploy AI-powered virtual teachers and humanoid robots as part of the core academic experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group animate-in fade-in slide-in-from-right duration-700">
                        <div className="aspect-[4/3] bg-black/60 rounded-3xl border border-white/20 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-white/50 group-hover:shadow-[0_0_60px_rgba(255,100,200,0.15)] relative">
                            <Image
                                src="/Other/Future-Faculty.png"
                                alt="AI & Robotics Faculty"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Inner Decorative Glow */}
                            <div className="absolute inset-4 border border-white/10 rounded-2xl pointer-events-none z-10" />
                        </div>
                    </div>
                </div>

                {/* Bottom Half: 2-Column Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass p-10 rounded-2xl border-white/10 group hover:border-white/40 transition-all duration-500 hover:bg-white/[0.1] relative overflow-hidden bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:20px_20px]">
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors z-0" />
                        <div className="relative z-10">
                            <h4 className="text-2xl font-orbitron font-bold text-white mb-6 flex items-center gap-3">
                                <SparkleIcon className="text-accent w-6 h-6" /> AI Teachers
                            </h4>
                            <p className="text-white/80 leading-relaxed italic">
                                Trained on the world’s best textbooks, industry manuals, open research, and real-world case studies, our AI teachers can explain complex topics in simple language — tailored to your pace, level, and interests.
                            </p>
                        </div>
                    </div>

                    <div className="glass p-10 rounded-2xl border-white/10 group hover:border-white/40 transition-all duration-500 hover:bg-white/[0.1] relative overflow-hidden bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:20px_20px]">
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors z-0" />
                        <div className="relative z-10">
                            <h4 className="text-2xl font-orbitron font-bold text-white mb-6 flex items-center gap-3">
                                <SparkleIcon className="text-accent w-6 h-6" /> Humanoid Robot Teachers
                            </h4>
                            <p className="text-white/80 leading-relaxed italic">
                                These physical AI-powered robots teach in labs, interact in real time, and even read your facial cues to adjust their delivery.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FutureFaculty;
