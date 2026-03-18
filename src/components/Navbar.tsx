'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticEffect from './MagneticEffect';


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
        <nav className="fixed top-0 left-0 w-full z-50 py-6 pointer-events-none flex justify-center">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full max-w-[1600px] mx-auto pointer-events-auto transition-all duration-500 rounded-2xl border border-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] backdrop-blur-md relative overflow-hidden group/nav ${scrolled ? 'py-1 bg-black/80 scale-[0.98]' : 'py-2 bg-black/40'
                    }`}
            >
                {/* Futuristic Scanning Line Overlay */}
                <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
                    className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-accent/5 to-transparent skew-x-12 pointer-events-none"
                />

                {/* Navbar Content */}
                <div className="flex items-center justify-between relative z-10 w-full px-3">
                    {/* Left: AESTR Logo */}
                    <div className="flex-1 flex justify-start">
                        <Link href="/#hero" className="flex items-center group/logo">
                            <div className="w-[140px] md:w-[200px] relative h-8 md:h-10 transition-all duration-500 group-hover/logo:scale-105">
                                <Image
                                    src="/Herosection/AESTR.webp"
                                    alt="Aestr Logo"
                                    fill
                                    className="object-contain brightness-[1.1]"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Center: Nav Links with Magnetic Effect */}
                    <div className="hidden lg:flex flex-[2] justify-center">
                        <div className="flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-5 py-4 group/btn"
                                >
                                    <MagneticEffect strength={0.3}>
                                        <span className="text-[14px] xl:text-[16px] font-orbitron font-extrabold text-[#EAF0BD]/80 tracking-wider group-hover/btn:text-accent transition-colors whitespace-nowrap">
                                            {link.name}
                                        </span>
                                    </MagneticEffect>
                                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent transition-all duration-300 group-hover/btn:w-1/3 shadow-[0_0_8px_#D7F601]" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 flex items-center justify-end">
                        <div className="hidden xl:flex items-center gap-4">
                            <div className="relative h-12 w-48 transition-all duration-500 hover:scale-105">
                                <Image
                                    src="/Herosection/Container.svg"
                                    alt="SGVU Logo"
                                    fill
                                    sizes="192px"
                                    className="object-contain brightness-0 invert"
                                    priority
                                />
                            </div>
                            <div className="flex items-center gap-3 border-l border-white/10 pl-4">
                                <div className="relative h-16 w-16 transition-all duration-500 hover:scale-110 flex items-center justify-center">
                                    <Image
                                        src="/Herosection/Nirf white.png"
                                        alt="NIRF"
                                        fill
                                        sizes="64px"
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                                <div className="relative h-16 w-16 transition-all duration-500 hover:scale-110 flex items-center justify-center">
                                    <Image
                                        src="/Herosection/naac white  .png"
                                        alt="NAAC A+"
                                        fill
                                        sizes="64px"
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-3 text-accent hover:bg-white/5 rounded-xl transition-all focus:outline-none border border-white/5"
                            >
                                <div className="w-6 h-5 relative flex flex-col justify-between">
                                    <span className={`w-full h-0.5 bg-accent rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                    <span className={`w-3/4 h-0.5 bg-accent rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'ml-auto'}`} />
                                    <span className={`w-full h-0.5 bg-accent rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        className="fixed inset-0 bg-background/95 z-[100] p-6 lg:hidden pointer-events-auto flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <Link href="/#hero" onClick={() => setIsOpen(false)} className="w-[130px] relative h-8">
                                <Image src="/Herosection/aestr-logo.svg" alt="Aestr Logo" fill className="object-contain" />
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-accent text-3xl font-light p-2"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="flex flex-col space-y-8 flex-grow justify-center items-center">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="text-center"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-3xl md:text-4xl font-orbitron font-extrabold text-[#EAF0BD] hover:text-accent transition-all block"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-10 pt-10 border-t border-white/10 flex flex-col items-center gap-6">

                            <p className="text-[10px] font-orbitron font-medium text-white/30 uppercase tracking-[0.4em]">
                                AESTR &copy; 2026
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
