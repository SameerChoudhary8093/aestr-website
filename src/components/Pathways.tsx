'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


const Pathways = () => {
    const pathwaysData = [
        { title: 'B.Tech AI with Shodh AI', subtitle: '35 LPA+ Jobs', borderColor: 'border-accent/40' },
        { title: 'Global opportunities', subtitle: '3+1 Programs', borderColor: 'border-accent/30' },
        { title: 'Industry partner training', subtitle: '& Direct Placements', borderColor: 'border-accent/20' },
        { title: 'Nurturing entrepreneurs', subtitle: 'Silicon Valley of AI', borderColor: 'border-accent/30' },
    ];

    return (
        <section className="relative py-32 bg-accent overflow-hidden">
            <div className="container-boxed relative z-10">

                {/* Centered Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center space-y-8"
                >
                    {/* Number Circle - Styled to match others */}
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-black/30 flex items-center justify-center bg-black/5">
                        <span className="text-3xl md:text-5xl font-orbitron font-bold text-black">7</span>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-h2 text-black">
                            Aestr quality assurance <span className="text-black">pathways</span>
                        </h2>
                        <p className="text-body text-black/80 max-w-2xl mx-auto font-bold">
                            We provide clear, ambitious pathways to ensure your career takes off.
                        </p>
                    </div>

                    {/* Technical Connector Line Area */}
                    <div className="relative pt-6 w-full flex flex-col items-center">
                        {/* Vertical line from header - shortened as requested */}
                        <div className="relative h-24 w-px bg-black">
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
                        </div>
                    </div>
                </motion.div>

                {/* Flowchart/Grid Section */}
                <div className="relative mb-20 px-4 -mt-px pt-24 lg:pt-0">
                    {/* Horizontal Connecting Line with Diamond in center */}
                    <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-black hidden lg:block">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black rotate-45" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch pt-12">
                        {pathwaysData.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative group flex"
                            >
                                {/* Vertical Drop Line connecting to horizontal */}
                                <div className="absolute -top-12 left-1/2 w-px h-12 bg-black hidden lg:block">
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
                                </div>

                                <div className={`glass !bg-black/80 !border-black/5 p-6 md:p-8 rounded-2xl border-t-4 ${item.borderColor} flex flex-col items-center text-center transition-all duration-500 group-hover:transform group-hover:-translate-y-2 hover:!bg-black w-full min-h-[160px] md:min-h-[180px]`}>
                                    <h3 className="text-h3 text-[#EAF0BD] mb-3 transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#EAF0BD]/60 font-bold tracking-widest text-[11px] md:text-[13px] mt-auto">
                                        {item.subtitle}
                                    </p>

                                    {/* Decorative element */}
                                    <div className="mt-6 w-10 h-1 bg-white/5 rounded-full group-hover:w-20 group-hover:bg-accent transition-all duration-700" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Action */}
                <div className="space-y-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex justify-center"
                    >
                        <Link href="/aestr-pathways">
                            <button className="px-10 py-4 bg-black text-accent font-orbitron font-black text-sm uppercase rounded-lg hover:scale-105 transition-all flex items-center gap-2 group shadow-xl">
                                Read More
                                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                            </button>
                        </Link>
                    </motion.div>

                </div>

            </div>

            {/* Background Decorative Globs */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-black/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black/5 rounded-full blur-[140px] pointer-events-none" />
        </section>
    );
};

export default Pathways;
