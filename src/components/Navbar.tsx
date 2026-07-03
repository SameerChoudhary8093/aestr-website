'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from '@/components/AppLink';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticEffect from './MagneticEffect';
import { isHomePath, withBasePath } from '@/lib/site';
import aestrLogo from '../../public/Herosection/by-gyan-vihar-2-neon.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
        { name: 'Home', href: 'https://www.gyanvihar.org/aestr/' },
        { name: 'Program Offered', href: '#', dropdownKey: 'programs' },
        { name: 'Aestr Alpha', href: 'https://aestralpha.com', external: true },
        { name: 'Sovereign AI', href: '/sovereign-ai-initiative' },
        { name: 'Outliers', href: '#', dropdownKey: 'outliers' },
        { name: 'Curriculum', href: '/curriculum' },
    ];

    const programLinks = [
        { name: 'B.Tech. Artificial Intelligence with Shodh AI', href: '/btech-ai-shodh-ai' },
        { name: 'B.Tech. CSE - Major Specializations in AI & Machine Learning', href: '/ai-ml' },
        { name: 'B.Tech. CSE - Major Specializations in Data Engineering', href: '/data-engineering' },
        { name: 'B.Tech. CSE - Major Specializations in Software & Cloud Engineering', href: '/software-cloud-engineering' },
        { name: 'B.Tech. CSE - Major Specializations in Robotics', href: '/robotics' },
        { name: 'B.Tech. CSE - Major Specializations in Cyber Security', href: '/cyber-security' },
    ];

    const outlierLinks = [
        { name: 'Alumni', href: '/alumni' },
        { name: 'Blogs', href: '/blogs' },
    ];

    const dropdownItems: Record<string, { name: string; href: string }[]> = {
        programs: programLinks,
        outliers: outlierLinks,
    };

    const dropdownWidths: Record<string, string> = {
        programs: 'w-[520px]',
        outliers: 'w-[220px]',
    };

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!isHomePath(pathname) && !isHomePath(window.location.pathname)) {
            setIsOpen(false);
            return;
        }

        e.preventDefault();

        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (window.location.hash !== '#hero') {
                window.history.replaceState(null, '', withBasePath('/#hero'));
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
                className={`w-[92%] max-w-[1500px] mx-auto pointer-events-auto transition-all duration-500 rounded-2xl border border-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] backdrop-blur-md relative group/nav ${scrolled ? 'py-1 bg-black/80 scale-[0.98]' : 'py-2 bg-black/40'
                    }`}
            >
                {/* Futuristic Scanning Line Overlay */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                    <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
                        className="w-1/3 h-full bg-gradient-to-r from-transparent via-accent/5 to-transparent skew-x-12"
                    />
                </div>

                {/* Navbar Content */}
                <div className="flex items-center justify-between w-full h-[65px] lg:h-[72px] xl:h-[80px] 2xl:h-[90px] px-4 lg:px-5 xl:px-6 overflow-visible">
                    {/* Left: AESTR Logo */}
                    <Link href="/#hero" onClick={handleHomeClick} className="flex-none h-[70%] lg:h-[75%] xl:h-[80%] 2xl:h-[90%]" aria-label="Aestr Home Logo">
                        <Image
                            src={aestrLogo}
                            alt="Aestr Logo"
                            width={350}
                            height={110}
                            className="w-auto h-full object-contain brightness-[1.1] scale-[1.1] md:scale-[1.15] 2xl:scale-[1.25] origin-left"
                            priority
                        />
                    </Link>

                    {/* Center: Nav Links */}
                    <div className="hidden lg:flex flex-1 justify-start pl-4 lg:pl-6 xl:pl-10 2xl:pl-20">
                        <div className="flex items-center gap-0 lg:gap-1 xl:gap-2 2xl:gap-3">
                            {navLinks.map((link) => {
                                if (link.dropdownKey) {
                                    const items = dropdownItems[link.dropdownKey];
                                    const isOpen = openDropdown === link.dropdownKey;
                                    const widthClass = dropdownWidths[link.dropdownKey] || 'w-[280px]';
                                    return (
                                        <div
                                            key={link.name}
                                            className="relative group/dropdown"
                                            onMouseEnter={() => setOpenDropdown(link.dropdownKey!)}
                                            onMouseLeave={() => setOpenDropdown(null)}
                                        >
                                            <button className="relative px-1.5 lg:px-2 xl:px-3 py-2 group/btn flex items-center gap-1">
                                                <MagneticEffect strength={0.3}>
                                                    <span className="text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] font-orbitron font-extrabold text-[#EAF0BD]/80 tracking-wide lg:tracking-wider xl:tracking-widest group-hover/dropdown:text-accent transition-colors whitespace-nowrap flex items-center gap-1.5">
                                                        {link.name}
                                                        <svg className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </span>
                                                </MagneticEffect>
                                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent transition-all duration-300 group-hover/dropdown:w-1/3 shadow-[0_0_8px_#D7F601]" />
                                            </button>

                                            {/* Dropdown Menu */}
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                                        transition={{ duration: 0.2, ease: 'easeOut' }}
                                                        className={`absolute top-full left-0 mt-2 ${widthClass} border border-white/10 rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.9)] overflow-hidden z-50`}
                                                        style={{ backgroundColor: '#111111' }}
                                                    >
                                                        <div className="p-2">
                                                            {items.map((item) => (
                                                                <Link
                                                                    key={item.href}
                                                                    href={item.href}
                                                                    onClick={() => setOpenDropdown(null)}
                                                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-[11px] font-orbitron font-bold text-white/80 hover:text-accent hover:bg-white/5 transition-all duration-200 group/item"
                                                                >
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover/item:bg-accent group-hover/item:shadow-[0_0_8px_rgba(215,246,1,0.6)] transition-all shrink-0" />
                                                                    <span className="tracking-wider">{item.name}</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                }

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={link.name === 'Home' ? handleHomeClick : link.external ? undefined : handlePageLinkClick(link.href)}
                                        target={link.external ? '_blank' : undefined}
                                        rel={link.external ? 'noopener noreferrer' : undefined}
                                        className="relative px-1.5 lg:px-2 xl:px-3 py-2 group/btn"
                                    >
                                        <MagneticEffect strength={0.3}>
                                            <span className="text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] font-orbitron font-extrabold text-[#EAF0BD]/80 tracking-wide lg:tracking-wider xl:tracking-widest group-hover/btn:text-accent transition-colors whitespace-nowrap">
                                                {link.name}
                                            </span>
                                        </MagneticEffect>
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent transition-all duration-300 group-hover/btn:w-1/3 shadow-[0_0_8px_#D7F601]" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Partner Logos & Mobile Menu */}
                    <div className="flex items-center justify-end h-[60%] lg:h-[65%] xl:h-[70%] 2xl:h-[75%] flex-none shrink-0">
                        
                        <div className="hidden lg:flex items-center h-full gap-1 lg:gap-2 2xl:gap-3">
                            <Image
                                src="/Herosection/Container.svg"
                                alt="Gyan Vihar"
                                width={130}
                                height={40}
                                className="w-auto h-[60%] lg:h-[65%] xl:h-[70%] object-contain brightness-0 invert"
                                priority
                            />

                            <div className="flex items-center h-full gap-1 xl:gap-2 2xl:gap-3 border-l border-white/10 pl-1 lg:pl-2 xl:pl-3">
                                <Image
                                    src="/Herosection/Nirf white.png"
                                    alt="NIRF"
                                    width={80}
                                    height={50}
                                    className="w-auto h-[60%] lg:h-[65%] xl:h-[70%] object-contain px-0.5"
                                    priority
                                />

                                <Image
                                    src="/Herosection/naac white  .png"
                                    alt="NAAC A+"
                                    width={90}
                                    height={55}
                                    className="w-auto h-[60%] lg:h-[65%] xl:h-[70%] object-contain px-1"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden ml-4">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-3 text-accent hover:bg-white/5 rounded-xl transition-all focus:outline-none border border-white/5"
                                aria-label="Toggle navigation menu"
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
                        className="fixed inset-0 bg-background/95 z-[100] p-6 lg:hidden pointer-events-auto flex flex-col overflow-y-auto overflow-x-hidden scrollbar-hide pt-10 pb-20"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <Link href="/#hero" onClick={handleHomeClick} className="w-[130px] relative h-8" aria-label="Aestr Home Logo">
                                <Image src={aestrLogo} alt="Aestr Logo" fill sizes="(max-width: 768px) 130px, 130px" className="object-contain" />
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-accent text-3xl font-light p-2"
                                aria-label="Close navigation menu"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="flex flex-col space-y-6 md:space-y-8 flex-grow justify-start items-center py-10">
                            {navLinks.map((link, idx) => {
                                if (link.dropdownKey) {
                                    const items = dropdownItems[link.dropdownKey];
                                    const isDropOpen = openDropdown === link.dropdownKey;
                                    return (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="text-center w-full max-w-md"
                                        >
                                            <button
                                                onClick={() => setOpenDropdown(isDropOpen ? null : link.dropdownKey!)}
                                                className="text-[32px] md:text-[48px] font-orbitron font-extrabold text-foreground hover:text-accent transition-colors duration-300 flex items-center justify-center gap-3 w-full"
                                            >
                                                {link.name}
                                                <svg className={`w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 ${isDropOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <AnimatePresence>
                                                {isDropOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="flex flex-col gap-3 mt-4 px-4">
                                                            {items.map((item) => (
                                                                <Link
                                                                    key={item.href}
                                                                    href={item.href}
                                                                    onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                                                                    className="text-[14px] md:text-[18px] font-orbitron font-bold text-white/70 hover:text-accent transition-colors py-2 border-b border-white/5 last:border-0"
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    );
                                }

                                return (
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
                                );
                            })}
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
