'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Pathways = () => {
    const pathwaysData = [
        { title: 'Btech AI with Shodh AI', subtitle: '35LPA+ jobs', borderColor: 'border-accent/40' },
        { title: 'Global Opportunities', subtitle: '2+2, 3+1 Programs', borderColor: 'border-accent/30' },
        { title: 'Industry Partner Training', subtitle: '& Direct Placements', borderColor: 'border-accent/20' },
        { title: 'Nurturing Entrepreneurs', subtitle: 'Silicon Valley of AI', borderColor: 'border-accent/30' },
    ];

    return (
        <section className="relative py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Header Area */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24 space-y-8"
                >
                    <div className="flex justify-center">
                        <div className="w-16 h-16 rounded-full border border-accent/20 flex items-center justify-center text-3xl font-orbitron font-bold text-accent bg-accent/5">
                            7
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground leading-tight uppercase tracking-tighter">
                            AESTR Quality Assurance <span className="text-accent italic">Pathways</span>
                        </h2>
                        <p className="text-lg text-foreground/50 max-w-2xl mx-auto leading-relaxed font-semibold">
                            We provide clear, ambitious pathways to ensure your career takes off.
                        </p>
                    </div>
                </motion.div>

                {/* Flowchart/Grid Section */}
                <div className="relative mb-20">
                    {/* Connecting Line */}
                    <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-foreground/10 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:pt-12">
                        {pathwaysData.map((item, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative group"
                            >
                                {/* Vertical Drop Line */}
                                <div className="absolute -top-12 left-1/2 w-px h-12 bg-foreground/10 hidden md:block group-hover:bg-accent transition-colors duration-500" />

                                <div className={`glass p-10 rounded-2xl border-t-4 ${item.borderColor} flex flex-col items-center text-center transition-all duration-500 group-hover:transform group-hover:-translate-y-2 hover:bg-accent/5`}>
                                    <h3 className="text-xl font-orbitron font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-foreground/40 font-black uppercase tracking-[0.2em] text-[10px]">
                                        {item.subtitle}
                                    </p>

                                    {/* Decorative element */}
                                    <div className="mt-8 w-10 h-1.5 bg-foreground/5 rounded-full group-hover:w-20 group-hover:bg-accent transition-all duration-700" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Action */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <button className="btn-aestr flex items-center gap-2 group">
                        Unlock More
                        <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                    </button>
                </motion.div>

            </div>

            {/* Background Decorative Globs */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
        </section>
    );
};

export default Pathways;
