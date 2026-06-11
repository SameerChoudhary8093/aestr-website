'use client';

import { motion } from 'framer-motion';
import Link from '@/components/AppLink';

export default function ThankYouPage() {
    return (
        <div className="min-h-screen bg-[#111111] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            {/* Main Content Card */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                className="relative bg-[#0a0a0a] border border-accent/20 rounded-2xl p-8 md:p-12 max-w-lg w-full shadow-[0_0_50px_rgba(var(--accent-rgb),0.15)] text-center z-10"
            >
                {/* Success Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', damping: 12 }}
                    className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-accent/30 shadow-[0_0_30px_rgba(var(--accent-rgb),0.2)]"
                >
                    <svg
                        className="w-12 h-12 text-accent"
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

                <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6 tracking-tight">
                    THANK YOU!
                </h1>
                
                <p className="text-gray-400 font-outfit text-lg md:text-xl mb-10 leading-relaxed">
                    Your registration has been received successfully. <br />
                    Our team will contact you shortly to guide you through the next steps.
                </p>

                <Link href="/" className="block w-full">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-5 bg-accent text-black font-orbitron font-bold rounded-xl hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(var(--accent-rgb),0.3)] uppercase tracking-wider text-lg"
                    >
                        BACK TO HOME
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
}
