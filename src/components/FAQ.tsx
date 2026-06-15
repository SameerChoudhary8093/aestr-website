'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '@/data/faqs';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative py-20 md:py-28 px-4 overflow-hidden" style={{ backgroundColor: '#5B1DD6' }}>
            {/* Background glow effects */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-black/10 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-2 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <p className="text-accent text-xs font-orbitron font-bold tracking-[0.4em] uppercase mb-4">
                        — Got Questions? —
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-black tracking-tight">
                        <span className="text-white">Frequently Asked </span><span className="text-accent">Questions</span>
                    </h2>
                    <p className="mt-4 text-white/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        Everything a student should know before joining the AESTR 4-Year Engineering Residency.
                    </p>
                </motion.div>

                {/* FAQ 2-Column Grid: balanced split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 items-start">
                    {(() => {
                        const mid = Math.ceil(faqs.length / 2);
                        return [{ group: faqs.slice(0, mid), offset: 0 }, { group: faqs.slice(mid), offset: mid }];
                    })().map(({ group, offset }, colIdx) => (
                        <div key={colIdx} className="flex flex-col gap-3">
                            {group.map((faq, j) => {
                                const i = offset + j;
                                const isOpen = openIndex === i;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-40px' }}
                                        transition={{ duration: 0.5, delay: j * 0.06 }}
                                    >
                                        <div
                                            className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${isOpen
                                                ? 'border-black/20 shadow-[0_8px_40px_-5px_rgba(0,0,0,0.3)]'
                                                : 'border-black/10 hover:border-black/25 hover:shadow-[0_4px_20px_-5px_rgba(0,0,0,0.2)]'
                                                }`}
                                            style={{ backgroundColor: isOpen ? '#c8e800' : '#D7F601' }}
                                            onClick={() => setOpenIndex(isOpen ? null : i)}
                                        >
                                            {/* Question Row */}
                                            <div className="flex items-center justify-between gap-3 px-4 md:px-5 py-4 min-h-[60px]">
                                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                                    {/* Number badge */}
                                                    <span className={`flex-none text-[10px] font-orbitron font-black w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-black/20 text-black' : 'bg-black/10 text-black/60'
                                                        }`}>
                                                        {String(i + 1).padStart(2, '0')}
                                                    </span>
                                                    <span className="text-[12px] md:text-[14px] lg:text-[13px] xl:text-[14px] font-orbitron font-bold leading-tight text-black">
                                                        {faq.q}
                                                    </span>
                                                </div>
                                                {/* Chevron */}
                                                <motion.div
                                                    animate={{ rotate: isOpen ? 45 : 0 }}
                                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                                    className="flex-none w-6 h-6 rounded-full border border-black/20 bg-black/10 flex items-center justify-center shrink-0"
                                                >
                                                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="stroke-black/60">
                                                        <path d="M6 1V11M1 6H11" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </motion.div>
                                            </div>

                                            {/* Answer */}
                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                                    >
                                                        <div className="px-4 md:px-5 pb-5 pt-1 border-t border-black/15">
                                                            <p className="text-black/75 text-[12px] md:text-[13px] leading-relaxed pl-9">
                                                                {faq.a}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-14 text-center"
                >
                    <p className="text-white/60 text-sm font-orbitron mb-5">
                        Still have questions? Talk to our admissions team directly.
                    </p>
                    <a
                        href="#registration-form"
                        className="btn-aestr inline-flex items-center gap-2"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Apply Now
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="stroke-current">
                            <path d="M2 7H12M8 3L12 7L8 11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
