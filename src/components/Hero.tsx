'use client';

import Image from 'next/image';
import ParticleEffect from './ParticleEffect';
import { motion } from 'framer-motion';


const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
            {/* The global 3D background handles the visuals */}
            <ParticleEffect />

            {/* Glowing Orbs - Neon Green accents */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0" />


            <div className="container mx-auto px-6 relative z-10 py-20">
                <div className="max-w-4xl">

                    {/* Left Column: Text & CTA */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-7xl font-orbitron font-bold leading-tight tracking-tighter text-foreground">
                                Built by a team of <br />
                                <span className="text-accent">
                                    AI Engineers.
                                </span>
                            </h1>
                            <p className="text-xl text-foreground font-medium opacity-80 max-w-xl leading-relaxed">
                                Founders are former Microsoft Engineers and Cambridge Researchers
                            </p>
                        </div>

                        {/* Company Logos */}
                        <div className="flex items-center gap-10 py-4 opacity-90 transition-all duration-500">
                            <div className="flex flex-col items-start">
                                <span className="text-[10px] font-orbitron uppercase tracking-[0.2em] text-foreground/40 mb-3">Former Microsoft Engineers</span>
                                <Image
                                    src="/Herosection/Microsoft.webp"
                                    alt="Microsoft"
                                    width={120}
                                    height={30}
                                    className="h-6 w-auto object-contain brightness-[1.5] contrast-[1.2]"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col items-start border-l border-foreground/10 pl-10">
                                <span className="text-[10px] font-orbitron uppercase tracking-[0.2em] text-foreground/40 mb-3">Cambridge Researchers</span>
                                <Image
                                    src="/Herosection/University of cambridge.webp"
                                    alt="University of Cambridge"
                                    width={140}
                                    height={35}
                                    className="h-8 w-auto object-contain brightness-[1.5] contrast-[1.2]"
                                    priority
                                />
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <button className="btn-aestr flex items-center gap-2 group">
                                Apply Now
                                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                            </button>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
