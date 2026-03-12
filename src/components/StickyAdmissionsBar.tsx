'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StickyAdmissionsBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Get the footer element (BottomCTA's admissions bar part)
            const footerElement = document.querySelector('footer') || document.querySelector('.admissions-bar-footer');
            if (footerElement) {
                const rect = footerElement.getBoundingClientRect();
                // If the top of the footer is visible on screen, hide the sticky bar
                if (rect.top < window.innerHeight) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            } else {
                // Fallback: use scroll position if element not found
                const scrollHeight = document.documentElement.scrollHeight;
                const scrollPos = window.innerHeight + window.scrollY;
                if (scrollHeight - scrollPos < 400) { // Near bottom
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 w-full z-[100] px-4 pb-4 pointer-events-none"
                >
                    <div className="container-boxed pointer-events-auto">
                        <div className="glass border-accent/20 bg-black/80 backdrop-blur-xl rounded-2xl md:rounded-full px-4 md:px-6 py-2.5 md:py-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                            <div className="flex items-center gap-2 md:gap-3 text-center sm:text-left">
                                <span className="relative flex h-2 w-2 md:h-3 md:w-3 flex-shrink-0">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-accent"></span>
                                </span>
                                <p className="text-[10px] md:text-sm font-orbitron font-bold text-foreground tracking-tight leading-tight uppercase">
                                    Admissions Open at <span className="text-accent underline underline-offset-4 decoration-accent/30">SGVU</span> for 2026-2027
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-6 md:px-8 py-2 md:py-2.5 bg-accent text-black font-orbitron font-black text-[10px] md:text-xs uppercase rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(216,246,2,0.3)]">
                                    Apply Now ↗
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyAdmissionsBar;
