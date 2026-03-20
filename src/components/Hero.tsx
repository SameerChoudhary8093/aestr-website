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
                            <h1 className="text-[84px] font-orbitron font-black tracking-tighter leading-none whitespace-nowrap">
                                The B.Tech is dead
                            </h1>
                            <p className="text-[28px] text-foreground font-bold max-w-2xl leading-tight whitespace-nowrap">
                                The AESTR Solution: <span className="text-accent">The 4-Year Engineering Residency.</span>
                            </p>
                            <p className="text-[16px] text-foreground/80 font-medium max-w-xl leading-relaxed">
                                The AESTR Solution: The 4-Year Engineering Residency
                                AESTR by Gyan Vihar is built on a single, uncompromising premise: Stop studying. Start building. We are not a college we are a Silicon Valley-style incubator.
                            </p>
                        </div>

                        {/* Logo Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex justify-start"
                        >
                            <div className="relative group">
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple/20 via-blue/20 to-accent/20 rounded-[1rem] blur-xl group-hover:blur-2xl transition-all duration-700 opacity-60"></div>

                                {/* Main container */}
                                <div className="relative inline-flex items-center gap-3 md:gap-6 p-4 md:p-6 rounded-[1.5rem] bg-black/40 backdrop-blur-xl border border-white/30 shadow-2xl mt-8 overflow-hidden hover:shadow-[0_0_40px_rgba(215,246,1,0.3)] transition-all duration-500">

                                    {/* Logo items with individual animations */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex items-center"
                                    >
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-lg blur-md"></div>
                                            <Image src="/Herosection/Microsoft.webp" alt="Microsoft" width={180} height={45} className="relative h-8 md:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 filter drop-shadow-lg" />
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                        className="flex items-center"
                                    >
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg blur-md"></div>
                                            <Image src="/Herosection/University of cambridge.webp" alt="Cambridge" width={180} height={50} className="relative h-12 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 filter drop-shadow-lg" />
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.15, y: -3 }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                        className="flex items-center"
                                    >
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-purple/30 rounded-lg blur-md animate-pulse"></div>
                                            <Image src="/Herosection/india-ai-logo-white.png" alt="INDIAai" width={200} height={60} className="relative h-14 md:h-16 w-auto object-contain opacity-95 hover:opacity-100 transition-all duration-300 filter drop-shadow-xl" />
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        transition={{ duration: 0.3, delay: 0.3 }}
                                        className="flex items-center"
                                    >
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-lg blur-md"></div>
                                            <Image src="/ProgramPartners/Shodh-ai.svg" alt="Shodh AI" width={180} height={45} className="relative h-12 md:h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 filter drop-shadow-lg" />
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        transition={{ duration: 0.3, delay: 0.4 }}
                                        className="flex items-center"
                                    >
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-yellow-400/20 rounded-lg blur-md"></div>
                                            <Image src="/ProgramPartners/DRDO.webp" alt="DRDO" width={80} height={80} className="relative h-14 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 filter drop-shadow-lg" />
                                        </div>
                                    </motion.div>

                                    {/* Subtle animated border */}
                                    <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
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
        </section>
    );
};

export default Hero;
