'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll to change navbar opacity/glow
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Btech AI with Shodh AI', href: '/btech-ai-shodh-ai' },
        { name: 'Collaborations', href: '/collaborations', hasDropdown: true },
        { name: 'Alumni', href: '/alumni' },
        { name: 'Blogs', href: '/blogs' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-blue-950/50 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">

                {/* Left: Logo */}
                <Link href="/" className="flex-shrink-0 flex items-center">
                    <div className="w-[150px] relative h-10 group overflow-visible">
                        {/* If the image is missing, we show a styled text-based logo placeholder */}
                        <Image
                            src="/Herosection/aestr-logo.svg"
                            alt="Aestr Logo"
                            width={150}
                            height={40}
                            className="object-contain transform transition-transform duration-300 drop-shadow-[0_0_8px_rgba(91,29,214,0.6)] hover:drop-shadow-[0_0_12px_rgba(204,255,0,0.8)]"
                            onError={(e) => {
                                // If image fails, hide it and the parent will show text or stay empty
                                (e.target as any).style.display = 'none';
                            }}
                        />
                    </div>
                </Link>

                {/* Center: Nav Links (Desktop) */}
                <div className="hidden lg:flex items-center space-x-10 h-full">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group py-6">
                            <Link
                                href={link.href}
                                className="flex items-center text-sm font-orbitron font-medium text-white/70 hover:text-accent transition-colors duration-300 tracking-wide"
                            >
                                {link.name}
                                {link.hasDropdown && (
                                    <svg
                                        className="ml-1.5 w-3 h-3 group-hover:translate-y-0.5 transition-transform duration-300 text-white/40 group-hover:text-accent"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </Link>

                            {link.hasDropdown && (
                                <div className="absolute top-[80%] left-0 w-72 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-300 z-[60]">
                                    <div className="glass p-3 rounded-2xl bg-[#0A1128]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                        <div className="px-4 py-2 mb-2">
                                            <p className="text-[10px] font-orbitron font-bold text-white/30 uppercase tracking-[0.3em]">Global Partnerships</p>
                                        </div>
                                        <Link 
                                            href="/collaborations" 
                                            className="flex flex-col px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 hover:bg-white/10 text-white transition-all group/item shadow-xl"
                                        >
                                            <span className="text-accent text-[10px] font-orbitron font-bold uppercase tracking-widest mb-1">Elite Engineering Program</span>
                                            <span className="text-base font-orbitron font-bold group-hover/item:translate-x-1 transition-transform">AESTR x Roosevelt</span>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right: Partner Logos & Mobile Menu Trigger */}
                <div className="flex items-center space-x-8">
                    {/* Partner Logos (Desktop Only) */}
                    <div className="hidden md:flex items-center space-x-6 opacity-90 transition-opacity duration-300">
                        <Image src="/Herosection/SGVU-NIRF-NAAC.webp" alt="SGVU" width={240} height={200} className="object-contain transition-transform duration-300 cursor-pointer hover:scale-105" />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-white hover:text-accent transition-colors focus:outline-none"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-3/4 h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 top-[60px] bg-blue-950/95 backdrop-blur-2xl z-40 lg:hidden transform transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-10 px-6 py-10 overflow-y-auto">
                    {navLinks.map((link) => (
                        <div key={link.name} className="flex flex-col items-center">
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-orbitron font-bold text-white hover:text-accent transition-colors flex items-center"
                            >
                                {link.name}
                                {link.hasDropdown && <span className="ml-2 text-accent/50 text-xs tracking-widest animate-pulse font-light">PRO</span>}
                            </Link>
                            {link.name === 'Collaborations' && (
                                <Link 
                                    href="/collaborations"
                                    onClick={() => setIsOpen(false)}
                                    className="text-accent text-[10px] font-orbitron tracking-[0.2em] mt-2 uppercase opacity-60 hover:opacity-100 transition-opacity"
                                >
                                    AESTR x Roosevelt
                                </Link>
                            )}
                        </div>
                    ))}

                    <div className="pt-10 flex flex-wrap justify-center gap-8 border-t border-white/10 w-full opacity-60">
                        <Image src="/sgvu-logo.png" alt="SGVU" width={80} height={80} className="object-contain" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
