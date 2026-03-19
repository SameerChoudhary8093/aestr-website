'use client';

import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="w-full">
            {/* Top CTA Section - Dark Theme */}
            <section className="bg-background-alt py-24 relative overflow-hidden border-t border-white/5">
                <div className="container-boxed relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-3/5 space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-orbitron font-bold text-foreground leading-tight max-w-2xl">
                                Only at Aestr <span className="whitespace-nowrap">you are trained for</span> <br />
                                <span className="text-accent font-orbitron">future safe professions</span>
                            </h2>
                            <p className="subheading-font text-foreground/60">
                                Browse further to know more about our courses
                            </p>
                        </div>


                    </div>

                    {/* Robot Image */}
                    <div className="lg:w-2/5 relative">
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full aspect-square max-w-[450px] mx-auto drop-shadow-[0_0_50px_rgba(215,246,1,0.2)]"
                        >
                            <Image
                                src="/Other/Robo.webp"
                                alt="AESTR Future Robot"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Decorative glow */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple/10 blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            </section>

            {/* Bottom Branding Section - Deeper Black */}
            <section className="bg-background text-white py-20 relative overflow-hidden border-t border-white/5">
                <div className="container-boxed relative z-10 flex flex-col items-center text-center space-y-16">
                    {/* University Branding */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative w-64 h-20 lg:w-80 lg:h-28"
                        >
                            <Image
                                src="/Herosection/sgvu-logo.png"
                                alt="Suresh Gyan Vihar University"
                                fill
                                className="object-contain brightness-110"
                            />
                        </motion.div>
                        <div className="flex items-center justify-center gap-6 md:gap-10">
                            <div className="relative h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28 transition-all duration-500 hover:scale-110 flex items-center justify-center">
                                <Image
                                    src="/Herosection/Nirf white.png"
                                    alt="NIRF"
                                    fill
                                    sizes="120px"
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28 transition-all duration-500 hover:scale-110 flex items-center justify-center">
                                <Image
                                    src="/Herosection/naac white  .png"
                                    alt="NAAC A+"
                                    fill
                                    sizes="120px"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact & Copyright */}
                    <div className="w-full pt-12 border-t border-white/5 space-y-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60 px-4 md:px-8">
                            <div className="flex flex-col md:flex-row items-center gap-2">
                                <span>Reach out to us:</span>
                                <a href="tel:18003094545" className="font-orbitron font-semibold text-foreground hover:text-accent transition-colors">
                                    1800 - 309 - 4545
                                </a>
                            </div>

                            <div className="text-foreground/40 tracking-wider">
                                AESTR ALPHA © 2026
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Grid Structure */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
            </section>
        </footer>
    );
};

export default Footer;
