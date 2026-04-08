'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticEffect from './MagneticEffect';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = window.scrollY > 20;
            if (scrollValue !== scrolled) setScrolled(scrollValue);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const navLinks = [
        { name: 'Home', href: '/#hero' },
        { name: 'B.Tech AI', href: '/btech-ai-shodh-ai' },
        { name: 'Aestr Alpha', href: 'https://aestralpha.com', external: true },
        { name: 'Sovereign AI', href: '/sovereign-ai-initiative' },
        { name: 'Alumni', href: '/alumni' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Curriculum', href: '/curriculum' },
    ];

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname !== '/') {
            setIsOpen(false);
            return;
        }

        e.preventDefault();

        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (window.location.hash !== '#hero') {
                window.history.replaceState(null, '', '/#hero');
            }
        } else {
            window.location.hash = 'hero';
        }

        setIsOpen(false);
    };

    const handlePageLinkClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname !== href) {
            setIsOpen(false);
            return;
        }

        e.preventDefault();

        const firstSection = document.querySelector('main section');
        if (firstSection instanceof HTMLElement) {
            firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 py-6 pointer-events-none flex justify-center">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`w-[92%] max-w-[1500px] mx-auto pointer-events-auto transition-all duration-500 rounded-2xl border border-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] backdrop-blur-md relative overflow-hidden group/nav ${scrolled ? 'py-1 bg-black/80 scale-[0.98]' : 'py-2 bg-black/40'
                    }`}
            >
                {/* Futuristic Scanning Line Overlay */}
                <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
                    className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-accent/5 to-transparent skew-x-12 pointer-events-none"
                />

                {/* Navbar Content */}
                <div className="flex items-center justify-between w-full h-[70px] lg:h-[90px] px-4 lg:px-6">
                    {/* Left: AESTR Logo */}
                    <Link href="/#hero" onClick={handleHomeClick} className="flex-none h-[75%] lg:h-[90%]">
                        <Image
                            src="/Herosection/by gyan vihar 2 neon.png"
                            alt="Aestr Logo"
                            width={350}
                            height={110}
                            className="w-auto h-full object-contain brightness-[1.1] scale-[1.15] lg:scale-[1.25] origin-left"
                            priority
                        />
                    </Link>

                    {/* Center: Nav Links */}
                    <div className="hidden lg:flex flex-1 justify-start pl-12 xl:pl-20">
                        <div className="flex items-center gap-1 xl:gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={link.name === 'Home' ? handleHomeClick : link.external ? undefined : handlePageLinkClick(link.href)}
                                    target={link.external ? '_blank' : undefined}
                                    rel={link.external ? 'noopener noreferrer' : undefined}
                                    className="relative px-3 py-2 group/btn"
                                >
                                    <MagneticEffect strength={0.3}>
                                        <span className="text-[13px] xl:text-[14px] font-orbitron font-extrabold text-[#EAF0BD]/80 tracking-widest group-hover/btn:text-accent transition-colors whitespace-nowrap">
                                            {link.name}
                                        </span>
                                    </MagneticEffect>
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent transition-all duration-300 group-hover/btn:w-1/3 shadow-[0_0_8px_#D7F601]" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right: Partner Logos & Mobile Menu */}
                    <div className="flex items-center justify-end h-[50%] lg:h-[60%] flex-none shrink-0">
                        
                        <div className="hidden lg:flex items-center h-full gap-2 xl:gap-3">
                            <Image
                                src="/Herosection/Container.svg"
                                alt="Gyan Vihar"
                                width={240}
                                height={75}
                                className="w-auto h-full object-contain brightness-0 invert"
                                priority
                            />

                            <div className="flex items-center h-full gap-2 xl:gap-3 border-l border-white/10 pl-2 xl:pl-3">
                                <Image
                                    src="/Herosection/Nirf white.png"
                                    alt="NIRF"
                                    width={140}
                                    height={90}
                                    className="w-auto h-[140%] object-contain"
                                    priority
                                />

                                <Image
                                    src="/Herosection/naac white  .png"
                                    alt="NAAC A+"
                                    width={160}
                                    height={100}
                                    className="w-auto h-[160%] object-contain"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden ml-4">
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
                            <Link href="/#hero" onClick={handleHomeClick} className="w-[130px] relative h-8">
                                <Image src="/Herosection/by gyan vihar 2 neon.png" alt="Aestr Logo" fill className="object-contain" />
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
                                        onClick={link.name === 'Home' ? handleHomeClick : link.external ? undefined : handlePageLinkClick(link.href)}
                                        target={link.external ? '_blank' : undefined}
                                        rel={link.external ? 'noopener noreferrer' : undefined}
                                        className="text-[32px] md:text-[48px] font-orbitron font-extrabold text-foreground hover:text-accent transition-colors duration-300"
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
