'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UrgencyPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPastDeadline, setIsPastDeadline] = useState(false);

    useEffect(() => {
        // Define deadline: 31st May 2026
        const deadline = new Date('2026-05-31T23:59:59');
        const now = new Date();
        
        if (now > deadline) {
            setIsPastDeadline(true);
        }

        // Show popup after 0.5 seconds for better visibility
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        setIsOpen(false);
        sessionStorage.setItem('urgency-popup-dismissed', 'true');
    };

    const handleAction = () => {
        handleDismiss();
        // Scroll to form after a small delay to let the modal exit animation finish
        setTimeout(() => {
            const formElement = document.getElementById('registration-form');
            if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleDismiss}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative bg-[#0a0a0a] border-2 border-accent/30 rounded-3xl p-8 max-w-md w-full shadow-[0_0_60px_rgba(var(--accent-rgb),0.3)] overflow-hidden text-center"
                    >
                        {/* Glowing Background Element */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" />

                        <div className="relative z-10">
                            {/* Alert Icon */}
                            <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-orbitron font-black text-white mb-4 tracking-tight leading-tight">
                                {isPastDeadline ? "ADMISSIONS CLOSED!" : "HURRY! LIMITED SEATS LEFT"}
                            </h2>

                            <p className="text-gray-400 font-outfit text-base md:text-lg mb-8 leading-relaxed">
                                {isPastDeadline ? (
                                    <>You are late! <span className="text-white font-bold">31st May</span> was the last date to submit applications.</>
                                ) : (
                                    <>
                                        The last date to submit your application is <span className="text-accent font-bold">31st May</span>. 
                                        We currently have only <span className="text-white font-bold">60 exclusive seats</span> left. 
                                        Apply now before they are gone!
                                    </>
                                )}
                            </p>

                            <button
                                onClick={handleAction}
                                className="w-full py-4 bg-accent text-black font-orbitron font-extrabold rounded-xl hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(var(--accent-rgb),0.4)]"
                            >
                                {isPastDeadline ? "CLOSE" : "I'M INTERESTED - LET'S GO"}
                            </button>
                        </div>

                        {/* Close Icon (Top Right) */}
                        <button 
                            onClick={handleDismiss}
                            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default UrgencyPopup;
