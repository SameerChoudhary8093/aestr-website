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
                className={`w-full max-w-[1550px] pointer-events-auto transition-all duration-500 rounded-lg border border-white/10 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.5)] bg-[#111111] relative overflow-hidden group/nav ${scrolled ? 'py-1 scale-[0.99]' : 'py-1.5'
                    }`}
            >
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                <div className="flex items-center justify-between relative z-10 w-full">
                    {/* Left: AESTR Logo */}
                    <div className="flex-1 flex justify-start pl-4 md:pl-[30px]">
                        <Link href="/" className="flex items-center group/logo">
                            <div className="w-[140px] md:w-[200px] relative h-8 md:h-10 transition-all duration-300 group-hover/logo:scale-105">
                                <Image
                                    src="/Herosection/aestr-logo.svg"
                                    alt="Aestr Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Center: Nav Links as 'Buttons' - Perfectly Centered */}
                    <div className="hidden lg:flex flex-1 justify-center px-0">
                        <div className="flex items-center space-x-1 xl:space-x-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[14px] xl:text-[18px] font-orbitron font-extrabold text-[#EAF0BD] leading-[1.5] px-3 xl:px-6 py-4 hover:text-accent transition-all duration-300 whitespace-nowrap relative group/btn"
                                >
                                    {link.name}
                                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent transition-all duration-300 group-hover/btn:w-1/2" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right: SGVU Logo & Mobile Toggle */}
                    <div className="flex-1 flex items-center justify-end pr-4 md:pr-[30px]">
                        <div className="hidden md:flex items-center">
                            <div className="relative h-10 md:h-14 w-[200px] xl:w-[420px] transition-transform duration-300 hover:scale-105">
                                <Image
                                    src="/Herosection/SGVU-NIRF-NAAC.webp"
                                    alt="SGVU Partners"
                                    fill
                                    className="object-contain object-right"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden ml-4">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-[#EAF0BD] hover:scale-110 transition-transform focus:outline-none"
                            >
                                <div className="w-6 h-5 relative flex flex-col justify-between">
                                    <span className={`w-full h-0.5 bg-[#EAF0BD] rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                    <span className={`w-3/4 h-0.5 bg-[#EAF0BD] rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                                    <span className={`w-full h-0.5 bg-[#EAF0BD] rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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
                            <div className="w-[130px] relative h-8">
                                <Image src="/Herosection/aestr-logo.svg" alt="Aestr Logo" fill className="object-contain" />
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-accent text-3xl font-light p-2"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="flex flex-col space-y-6 flex-grow">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-orbitron font-extrabold text-[#EAF0BD] hover:text-accent transition-all block"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <div className="pt-10 border-t border-white/10 text-left">
                            <div className="relative h-16 w-full max-w-[300px]">
                                <Image src="/Herosection/SGVU-NIRF-NAAC.webp" alt="SGVU" fill className="object-contain object-left" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
