'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import RegistrationForm from './RegistrationForm';
import { scrollToRegistrationForm } from '@/utils/navigation';
import { motion } from 'framer-motion';

const ParticleEffect = dynamic(() => import('./ParticleEffect'), {
    ssr: false,
});


const Hero = () => {
    const [showParticles, setShowParticles] = useState(false);

    useEffect(() => {
        const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );
        const conn = (navigator as any).connection;
        const isSlowConnection = conn && (conn.saveData || ['slow-2g', '2g', '3g'].includes(conn.effectiveType));

        setShowParticles(window.innerWidth >= 1024 && !isMobileDevice && !isSlowConnection);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-start lg:items-center justify-center overflow-hidden bg-transparent">
            {/* The global 3D background handles the visuals */}
            {showParticles && <ParticleEffect />}

            {/* Glowing Orbs - Neon Green accents */}
            <div className="absolute top-1/4 left-1/4 w-full max-w-[500px] aspect-square bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-full max-w-[400px] aspect-square bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0" />

            <div id="registration-form" className="container-boxed relative z-10 w-full pt-24 pb-16 md:pt-40 md:pb-24 lg:pt-28 lg:pb-20 xl:pt-28 xl:pb-20 2xl:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-10 items-center max-w-7xl mx-auto">

                    {/* Left Column: Text & CTA (xl:col-span-7) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        className="space-y-4 md:space-y-6 lg:col-span-7 order-2 lg:order-1 lg:pt-10"
                    >
                        <div className="space-y-4 md:space-y-5 text-left">
                            <motion.h1
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                }}
                                className="text-[28px] min-[360px]:text-[30px] min-[390px]:text-[32px] sm:text-[44px] md:text-[52px] lg:text-[38px] xl:text-[46px] 2xl:text-[58px] font-orbitron font-black tracking-tighter leading-[1.2] w-full text-left"
                            >
                                The B.Tech Computer <br /> Science & Engineering <br /> (CSE) is Dead.
                            </motion.h1>
                            <motion.p
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                }}
                                className="text-[16px] sm:text-[18px] lg:text-[13px] xl:text-[16px] 2xl:text-[24px] text-foreground font-bold leading-snug tracking-tight w-full mt-2 border-b-0 lg:whitespace-nowrap text-left"
                            >
                                The AESTR Solution: <span className="text-accent">The 4-Year Engineering Residency.</span>
                            </motion.p>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                }}
                                className="text-[14px] sm:text-[15px] lg:text-[11px] xl:text-[12px] text-foreground/80 font-medium w-full leading-relaxed flex flex-col gap-2 mt-4 text-left"
                            >
                                <span className="block font-bold">AESTR by Gyan Vihar is built on a single, uncompromising premise to deliver the best B.Tech CSE in Jaipur:</span>
                                <span className="block font-bold">Stop studying. Start building. We are not a traditional engineering college; we are a Silicon Valley-style incubator offering an advanced, AI-driven B.Tech Computer Science & Engineering (CSE) program. Our students build production-grade applications, launch scalable tech startups, and receive direct mentorship from top industry leaders to secure elite global placements.</span>
                                <span className="block font-bold text-foreground/70">Designed in collaboration with elite tech partners, the residency model replaces passive listening with 2000+ hours of hands-on coding, product shipping, and real startups. Graduates leave with a portfolio of shipped products and direct access to high-growth global opportunities.</span>
                            </motion.div>
                        </div>

                        {/* Logo Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex justify-start w-full pt-4 md:pt-6 ml-0 sm:-ml-8"
                        >
                            <div className="relative group origin-left w-full sm:w-max max-w-full">
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple/20 via-blue/20 to-accent/20 rounded-[1.5rem] blur-xl group-hover:blur-2xl transition-all duration-700 opacity-60"></div>

                                {/* Main container - Flexible and clean */}
                                <div className="relative flex flex-col items-start gap-3 px-5 sm:pl-8 sm:pr-8 2xl:pr-10 py-5 sm:py-3 2xl:py-4 rounded-[1.5rem] bg-black/40 backdrop-blur-xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-500 w-full max-w-[calc(100vw-2.5rem)] sm:w-max z-20">

                                    <div className="flex items-center gap-3 pt-2">
                                        <span className="w-6 sm:w-8 h-[2px] bg-accent rounded-full shrink-0"></span>
                                        <p className="text-white/80 font-orbitron font-bold tracking-[0.15em] uppercase text-xs sm:text-sm whitespace-nowrap">
                                            Founders From:
                                        </p>
                                    </div>

                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-50px" }}
                                        variants={{
                                            hidden: { opacity: 0 },
                                            visible: {
                                                opacity: 1,
                                                transition: { staggerChildren: 0.15 }
                                            }
                                        }}
                                        className="flex flex-row flex-nowrap items-center justify-between sm:justify-start gap-2 sm:gap-6 md:gap-8 2xl:gap-8 w-full mb-1"
                                    >
                                        {[
                                            { src: '/Herosection/University of cambridge.webp', alt: 'Cambridge' },
                                            { src: '/Herosection/India-ai.png', alt: 'INDIAai' },
                                            { src: '/Herosection/Microsoft.webp', alt: 'Microsoft' },
                                            { src: '/ProgramPartners/Shodh-ai.svg', alt: 'Shodh AI' },
                                            { src: '/Herosection/DRDO.png', alt: 'DRDO' }
                                        ].map((logo) => (
                                            <motion.div
                                                variants={{
                                                    hidden: { opacity: 0, scale: 0.8 },
                                                    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
                                                }}
                                                key={logo.alt}
                                                className="relative h-[22px] sm:h-8 md:h-10 xl:h-11 2xl:h-14 flex items-center justify-start shrink sm:shrink-0"
                                            >
                                                <Image
                                                    src={logo.src}
                                                    alt={logo.alt}
                                                    width={150}
                                                    height={70}
                                                    className="max-h-full w-auto max-w-[60px] sm:max-w-[100px] xl:max-w-[120px] 2xl:max-w-[155px] object-contain transition-opacity duration-300"
                                                />
                                            </motion.div>
                                        ))}
                                    </motion.div>
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
                        className="lg:col-span-5 lg:ml-auto order-1 lg:order-2"
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
