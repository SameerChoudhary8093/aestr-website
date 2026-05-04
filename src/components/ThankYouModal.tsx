'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface ThankYouModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ThankYouModal = ({ isOpen, onClose }: ThankYouModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative bg-[#0a0a0a] border border-accent/20 rounded-2xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(var(--accent-rgb),0.2)] overflow-hidden"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

                        <div className="relative z-10 text-center">
                            {/* Success Icon */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring', damping: 12 }}
                                className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-accent/30"
                            >
                                <svg
                                    className="w-10 h-10 text-accent"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={3}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </motion.div>

                            <h2 className="text-3xl font-orbitron font-bold text-white mb-4 tracking-tight">
                                THANK YOU!
                            </h2>
                            <p className="text-gray-400 font-outfit text-lg mb-8">
                                Your registration has been received successfully. Our team will contact you shortly to guide you through the next steps.
                            </p>

                            <button
                                onClick={onClose}
                                className="w-full py-4 bg-accent text-black font-orbitron font-bold rounded-xl hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(var(--accent-rgb),0.4)]"
                            >
                                CLOSE
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ThankYouModal;
