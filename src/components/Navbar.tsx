'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = window.scrollY > 20;
            if (scrollValue !== scrolled) setScrolled(scrollValue);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'B.tech AI With Shodh AI', href: '/btech-ai-shodh-ai' },
        { name: 'Collaborations', href: '/collaborations' },
        { name: 'Alumni', href: '/alumni' },
        { name: 'Blogs', href: '/blogs' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-4 py-6 pointer-events-none flex justify-center">
            <motion.div 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full max-w-[1400px] pointer-events-auto transition-all duration-500 rounded-xl border border-black/10 shadow-[0_15px_50px_-15px_rgba(216,246,2,0.3)] bg-accent relative overflow-hidden group/nav ${
                    scrolled ? 'py-2 px-8 scale-[0.99]' : 'py-2.5 px-10'
                }`}
            >
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                
                <div className="flex items-center justify-between relative z-10 w-full">
                    
                    {/* Left: AESTR Logo (Black Filter) */}
                    <Link href="/" className="flex items-center group/logo flex-shrink-0">
                        <div className="w-[150px] relative h-8 transition-all duration-300 group-hover/logo:scale-105">
                            <Image
                                src="/Herosection/aestr-logo.svg"
                                alt="Aestr Logo"
                                fill
                                className="object-contain brightness-0"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Center: Nav Links */}
                    <div className="hidden xl:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[11px] font-orbitron font-black text-black/80 hover:text-black transition-all duration-300 tracking-[0.15em] uppercase relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2.5px] after:bg-black after:transition-all hover:after:w-full"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right: SGVU Logo (Black Filter) */}
                    <div className="hidden md:flex items-center flex-shrink-0">
                        <div className="relative h-10 w-[260px] lg:w-[320px] transition-transform duration-300 hover:scale-105">
                            <Image 
                                src="/Herosection/SGVU-NIRF-NAAC.webp" 
                                alt="SGVU Partners" 
                                fill
                                className="object-contain brightness-0 grayscale opacity-90"
                                priority
                            />
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="xl:hidden p-2 text-black hover:scale-110 transition-transform focus:outline-none"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-black rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-3/4 h-0.5 bg-black rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 bg-black rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 10 }}
                        className="fixed inset-4 bg-accent rounded-2xl z-[100] p-10 xl:hidden pointer-events-auto shadow-[0_0_100px_rgba(216,246,2,0.6)] border border-black/10 flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <div className="w-[130px] relative h-8">
                                <Image src="/Herosection/aestr-logo.svg" alt="Aestr Logo" fill className="object-contain brightness-0" />
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="text-black text-4xl font-light hover:rotate-90 transition-transform"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="flex flex-col items-center space-y-8 flex-grow justify-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-orbitron font-black text-black hover:opacity-70 transition-all uppercase text-center tracking-wider"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="pt-10 flex justify-center border-t border-black/10">
                            <div className="relative h-12 w-full max-w-[280px]">
                                <Image src="/Herosection/SGVU-NIRF-NAAC.webp" alt="SGVU" fill className="object-contain brightness-0 grayscale" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
