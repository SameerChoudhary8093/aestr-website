'use client';

import Image from 'next/image';
import ParticleEffect from './ParticleEffect';
import RegistrationForm from './RegistrationForm';
import { scrollToRegistrationForm } from '@/utils/navigation';
import { motion } from 'framer-motion';


const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
            {/* The global 3D background handles the visuals */}
            <ParticleEffect />

            {/* Glowing Orbs - Neon Green accents */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0" />

            <div id="registration-form" className="container-boxed relative z-10 w-full pt-32 pb-12 md:py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">

                    {/* Left Column: Text & CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6 md:space-y-8 lg:col-span-7"
                    >
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black tracking-tighter leading-none">
                                <span className="text-foreground block">The b.tech</span>
                                <span className="text-foreground block">is dead</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-foreground font-bold max-w-2xl leading-tight">
                                The AESTR Solution: <span className="text-accent underline decoration-accent/30 underline-offset-4">The 4-Year Engineering Residency.</span>
                            </p>
                            <p className="text-lg text-foreground/80 font-medium max-w-xl leading-relaxed">
                                AESTR by Gyan Vihar is built on a single, uncompromising premise: Stop studying. Start building. We are not a college; we are a Silicon Valley-style incubator.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <button
                                onClick={scrollToRegistrationForm}
                                className="btn-aestr flex items-center gap-3 group cursor-pointer !bg-accent !text-black text-lg py-4 px-10"
                            >
                                Apply Now
                                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                            </button>
                        </motion.div>

                        {/* Monochromatic Partner Logos Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap items-center gap-8 md:gap-12 pt-8 border-t border-white/5"
                        >
                            <div className="flex items-center">
                                <Image src="/Herosection/Container.svg" alt="SGVU" width={140} height={35} className="h-6 md:h-8 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-500" />
                            </div>
                            <div className="flex items-center">
                                <Image src="/Herosection/Nirf white.png" alt="NIRF" width={50} height={50} className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-500" />
                            </div>
                            <div className="flex items-center">
                                <Image src="/Herosection/naac white  .png" alt="NAAC" width={50} height={50} className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-500" />
                            </div>
                            <div className="flex items-center">
                                <Image src="/Herosection/Microsoft.webp" alt="Microsoft" width={110} height={28} className="h-6 md:h-7 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-500" />
                            </div>
                            <div className="flex items-center">
                                <Image src="/Herosection/University of cambridge.webp" alt="Cambridge" width={130} height={32} className="h-6 md:h-8 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-500" />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Registration Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-5 lg:ml-auto"
                    >
                        <RegistrationForm />
                    </motion.div>



                </div>
            </div>
        </section>
    );
};

export default Hero;
