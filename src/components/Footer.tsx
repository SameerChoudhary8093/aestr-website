'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
                                Only At AESTR You Are Trained For <br />
                                <span className="text-accent font-orbitron">Future Safe Professions</span>
                            </h2>
                            <p className="subheading-font text-foreground/60">
                                Browse further to know more about our courses
                            </p>
                        </div>

                        {/* Apply Box - Glassmorphism */}
                        <div className="bg-white/5 backdrop-blur-xl p-2 rounded-2xl flex flex-col sm:flex-row items-center justify-between border border-white/10 max-w-xl group shadow-2xl">
                            <p className="px-6 py-4 subheading-font font-bold text-foreground/80 text-center sm:text-left leading-relaxed">
                                Don't be shy. We enjoy connecting with students and parents.
                            </p>
                            <Link 
                                href="/apply"
                                className="btn-aestr !rounded-xl !py-4 transition-all duration-500 whitespace-nowrap m-1 text-center w-full sm:w-auto"
                            >
                                Apply Now
                            </Link>
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
                    <div className="space-y-10">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative w-80 h-28 mx-auto"
                        >
                            <Image 
                                src="/Herosection/sgvu-logo.png" 
                                alt="Suresh Gyan Vihar University"
                                fill
                                className="object-contain brightness-110"
                            />
                        </motion.div>
                        <div className="space-y-4">
                            <h3 className="text-4xl md:text-6xl font-orbitron font-bold tracking-tighter text-foreground">NAAC A+</h3>
                            <p className="text-2xl md:text-3xl subheading-font font-medium text-foreground/40 tracking-tight">NIRF Ranked 101-150</p>
                        </div>
                    </div>

                    {/* Contact & Copyright */}
                    <div className="w-full pt-16 border-t border-white/5 flex flex-col items-center gap-12">
                        <div className="flex flex-col items-center gap-4">
                            <span className="text-[10px] subheading-font font-extrabold text-accent uppercase tracking-[0.6em]">Reach Out To Us</span>
                            <a href="tel:18003094545" className="text-3xl md:text-5xl font-orbitron font-bold text-foreground hover:text-accent transition-all duration-300 transform hover:scale-105">
                                1800 - 309 - 4545
                            </a>
                        </div>
                        
                        <div className="flex flex-col items-center gap-4 py-6 px-12 border border-white/5 rounded-full bg-white/2">
                            <p className="text-[10px] subheading-font font-black tracking-[0.7em] text-foreground/40 uppercase">AESTR ALPHA © 2025</p>
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
