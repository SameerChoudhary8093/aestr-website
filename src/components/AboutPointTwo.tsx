'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutPointTwo = () => {
    return (
        <section className="relative py-24 bg-background-alt overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="container-boxed relative z-10"
            >
                <div className="space-y-12">
                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
                        <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-accent/30 flex items-center justify-center text-2xl md:text-3xl font-orbitron font-bold text-accent bg-accent/5">
                            2
                        </div>
                        <div className="space-y-6 text-left">
                                <h3 className="text-h2 text-foreground">
                                    Built By <span className="opacity-90 ml-2">AI Engineers</span>
                                </h3>
                            <p className="text-body text-foreground/90 font-bold">
                                Learn from the architects of tomorrow’s AI. AESTR is the brainchild of leading AI engineers dedicated to cultivating the next generation of tech innovators.
                            </p>
                        </div>
                    </div>

                    {/* Grid of 4 Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { title: 'Visionary Leadership', accent: 'border-foreground/10', desc: 'Founded by experts like Dr. Arastu Sharma (PhD, University of Cambridge; ex-scientist, Microsoft Research Cambridge).' },
                            { title: 'Mentorship from Active Industry Professionals', accent: 'border-accent/30', desc: 'Our faculty aren\'t just academics; they are full-time engineers from our integrated software engineering labs and leading companies like Shodh AI (USA).' },
                            { title: 'Learn From The Best:', accent: 'border-accent/20', desc: 'Gain insights from Apple trainers, Google Cloud experts, and professionals from other tech giants.' },
                            { title: 'Young, Agile, And Connected', accent: 'border-foreground/10', desc: 'We are real engineers, deeply embedded in the industry. We speak your language & are committed to transforming you into our colleague within four years.' }
                        ].map((card) => (
                            <div key={card.title} className={`glass p-8 rounded-2xl border-t-2 ${card.accent} hover:-translate-y-1 transition-transform duration-300 group text-left`}>
                                <h4 className="text-h3 text-foreground mb-4 leading-tight group-hover:text-accent transition-colors">{card.title}</h4>
                                <p className="text-body text-foreground/80 font-bold">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutPointTwo;
