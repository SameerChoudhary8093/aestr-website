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
                        <div className="space-y-4 md:space-y-5">
                            <h1 className="text-[42px] sm:text-[56px] md:text-[64px] lg:text-[84px] font-orbitron font-black tracking-tighter leading-[1.05] lg:leading-none lg:whitespace-nowrap break-words w-full">
                                The B.Tech is dead
                            </h1>
                            <p className="text-[20px] sm:text-[24px] md:text-[28px] text-foreground font-bold max-w-2xl leading-snug lg:leading-tight lg:whitespace-nowrap break-words w-full mt-2">
                                The AESTR Solution: <br className="lg:hidden" /> <span className="text-accent">The 4-Year Engineering Residency.</span>
                            </p>
                            <div className="text-[15px] sm:text-[16px] text-foreground/80 font-medium w-full leading-relaxed flex flex-col gap-2 mt-4 max-w-lg lg:max-w-none">
                                <span className="block">AESTR by Gyan Vihar is built on a single, uncompromising premise:</span>
                                <span className="block">Stop studying. Start building. We are not a college we are a Silicon Valley-style incubator.</span>
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

                                {/* Main container */}
                                <div className="relative flex flex-col items-start gap-4 p-4 sm:p-5 md:p-6 lg:p-7 rounded-[1.5rem] bg-black/40 backdrop-blur-xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(215,246,1,0.3)] transition-all duration-500 w-full">
                                    
                                    <div className="flex items-center gap-3">
                                        <span className="w-6 sm:w-8 h-[2px] bg-accent rounded-full shrink-0"></span>
                                        <p className="text-white/80 font-orbitron font-bold tracking-[0.1em] sm:tracking-[0.15em] uppercase text-xs sm:text-sm md:text-base whitespace-nowrap">
                                            Founders From:
                                        </p>
                                    </div>

                                    <div className="flex flex-row flex-nowrap items-center justify-between w-full pb-1 gap-2 md:gap-4 lg:gap-6">

                                    {/* Logo items with individual animations */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex items-center justify-center shrink-0 w-[15%]"
                                    >
                                        <div className="relative flex items-center justify-center w-full">
                                            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-lg blur-md"></div>
                                            <Image src="/Herosection/Microsoft.webp" alt="Microsoft" width={180} height={45} className="relative w-full h-auto max-h-[14px] sm:max-h-[24px] md:max-h-[30px] lg:max-h-[40px] object-contain opacity-90 hover:opacity-100 transition-all duration-300 filter drop-shadow-lg" />
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                        className="flex items-center justify-center shrink-0 w-[16%]"
                                    >
                                        <div className="relative flex items-center justify-center w-full">
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg blur-md"></div>
                                            <Image src="/Herosection/University of cambridge.webp" alt="Cambridge" width={180} height={50} className="relative w-full h-auto max-h-[16px] sm:max-h-[26px] md:max-h-[34px] lg:max-h-[46px] object-contain opacity-90 hover:opacity-100 transition-all duration-300 filter drop-shadow-lg" />
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.15, y: -3 }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                        className="flex items-center justify-center shrink-0 w-[18%]"
                                    >
                                        <div className="relative flex items-center justify-center w-full">
                                            <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-purple/30 rounded-lg blur-md animate-pulse"></div>
                                            <Image src="/Herosection/india-ai-logo-white.png" alt="INDIAai" width={200} height={60} className="relative w-full h-auto max-h-[20px] sm:max-h-[32px] md:max-h-[42px] lg:max-h-[56px] object-contain opacity-95 hover:opacity-100 transition-all duration-300 filter drop-shadow-xl" />
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        transition={{ duration: 0.3, delay: 0.3 }}
                                        className="flex items-center justify-center shrink-0 w-[15%]"
                                    >
                                        <div className="relative flex items-center justify-center w-full">
                                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-lg blur-md"></div>
                                            <Image src="/ProgramPartners/Shodh-ai.svg" alt="Shodh AI" width={180} height={45} className="relative w-full h-auto max-h-[14px] sm:max-h-[22px] md:max-h-[30px] lg:max-h-[46px] object-contain opacity-90 hover:opacity-100 transition-all duration-300 filter drop-shadow-lg" />
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        transition={{ duration: 0.3, delay: 0.4 }}
                                        className="flex items-center justify-center shrink-0 w-[14%]"
                                    >
                                        <div className="relative flex items-center justify-center w-full">
                                        <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-yellow-400/20 rounded-lg blur-md"></div>
                                            <Image src="/ProgramPartners/DRDO.webp" alt="DRDO" width={80} height={80} className="relative w-full h-auto max-h-[22px] sm:max-h-[34px] md:max-h-[44px] lg:max-h-[56px] object-contain opacity-90 hover:opacity-100 transition-all duration-300 filter drop-shadow-lg" />
                                        </div>
                                    </motion.div>
                                    </div>

                                    {/* Subtle animated border */}
                                    <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
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
            {/* Add inline styles inside Hero component to hide webkit scrollbar specifically for logos container */}
            <style dangerouslySetInnerHTML={{__html: `
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}} />
        </section>
    );
};

export default Hero;
