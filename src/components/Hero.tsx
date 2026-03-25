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
                        <div className="space-y-4 md:space-y-5 text-left">
                            <h1 className="text-[42px] sm:text-[56px] md:text-[64px] lg:text-[84px] font-orbitron font-black tracking-tighter leading-[1.05] lg:leading-none lg:whitespace-nowrap break-words w-full">
                                The B.Tech is dead
                            </h1>
                            <p className="text-[21px] sm:text-[24px] lg:text-[32.8px] text-foreground font-bold leading-snug lg:leading-tight lg:whitespace-nowrap tracking-tight lg:tracking-[-0.04em] w-fit mt-2 border-b-0">
                                The AESTR Solution: <span className="text-accent">The 4-Year Engineering Residency.</span>
                            </p>
                            <div className="text-[16px] sm:text-[18px] text-foreground/80 font-medium w-full leading-relaxed flex flex-col gap-2 mt-4 max-w-lg lg:max-w-none">
                                <span className="block lg:whitespace-nowrap font-bold">AESTR by Gyan Vihar is built on a single, uncompromising premise:</span>
                                <span className="block lg:whitespace-nowrap font-bold">Stop studying. Start building. We are not a college we are a Silicon Valley-style incubator.</span>
                            </div>
                        </div>

                        {/* Logo Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex justify-start w-full pt-4 md:pt-6"
                        >
                            <div className="relative group origin-left max-w-full lg:max-w-max w-full">
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple/20 via-blue/20 to-accent/20 rounded-[1.5rem] blur-xl group-hover:blur-2xl transition-all duration-700 opacity-60"></div>

                                {/* Main container - Flexible and clean */}
                                <div className="relative flex flex-col items-start gap-6 p-6 sm:p-8 rounded-[1.5rem] bg-black/40 backdrop-blur-xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-500 w-full">

                                    <div className="flex items-center gap-3">
                                        <span className="w-6 sm:w-8 h-[2px] bg-accent rounded-full shrink-0"></span>
                                        <p className="text-white/80 font-orbitron font-bold tracking-[0.15em] uppercase text-xs sm:text-sm whitespace-nowrap">
                                            Founders From:
                                        </p>
                                    </div>

                                    {/* Responsive Logo Grid: Exactly 5 Logos */}
                                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                                        {[
                                            { src: '/Herosection/University of cambridge.webp', alt: 'Cambridge', width: 140 },
                                            { src: '/Herosection/india-ai-logo-white.png', alt: 'INDIAai', width: 160 },
                                            { src: '/Herosection/Microsoft.webp', alt: 'Microsoft', width: 140 },
                                            { src: '/ProgramPartners/Shodh-ai.svg', alt: 'Shodh AI', width: 140 },
                                            { src: '/ProgramPartners/DRDO.webp', alt: 'DRDO', width: 100 }
                                        ].map((logo, idx) => (
                                            <motion.div
                                                key={logo.alt}
                                                whileHover={{ scale: 1.05 }}
                                                className="relative flex items-center justify-center"
                                            >
                                                <Image
                                                    src={logo.src}
                                                    alt={logo.alt}
                                                    width={logo.width}
                                                    height={100}
                                                    className={`w-auto max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity ${logo.alt === 'DRDO'
                                                        ? 'h-14 md:h-20 lg:h-24 translate-y-1'
                                                        : 'h-10 md:h-14 lg:h-18'
                                                        }`}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
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

            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}} />
        </section>
    );
};

export default Hero;
