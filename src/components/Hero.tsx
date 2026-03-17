'use client';

import Image from 'next/image';
import ParticleEffect from './ParticleEffect';


import { motion } from 'framer-motion';


const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
            {/* The global 3D background handles the visuals */}
            <ParticleEffect />

            {/* Glowing Orbs - Neon Green accents */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0" />

            <div className="container-boxed relative z-10 w-full py-20">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">

                    {/* Left Column: Text & CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6 md:space-y-8 lg:col-span-7"
                    >
                        <div className="space-y-4">
                            <h1 className="text-hero font-orbitron tracking-tighter text-foreground">
                                Built by a team of <br className="hidden sm:block" />
                                <span className="text-accent">
                                    AI Engineers.
                                </span>
                            </h1>
                            <p className="text-body text-foreground font-medium opacity-80 max-w-xl">
                                Founders are former Microsoft Engineers and Cambridge Researchers
                            </p>
                        </div>

                        {/* Company Logos */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-10 py-4 opacity-90 transition-all duration-500">
                            <div className="flex flex-col items-start">
                                <Image
                                    src="/Herosection/Microsoft.webp"
                                    alt="Microsoft"
                                    width={120}
                                    height={30}
                                    className="h-8 md:h-10 w-auto object-contain brightness-[1.5] contrast-[1.2]"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col items-start sm:border-l sm:border-foreground/10 sm:pl-10">
                                <Image
                                    src="/Herosection/University of cambridge.webp"
                                    alt="University of Cambridge"
                                    width={140}
                                    height={35}
                                    className="h-8 md:h-10 w-auto object-contain brightness-[1.5] contrast-[1.2]"
                                    priority
                                />
                            </div>
                        </div>


                    </motion.div>



                </div>
            </div>
        </section>
    );
};

export default Hero;
