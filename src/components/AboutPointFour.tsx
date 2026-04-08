'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AboutPointFour = () => {
    return (
        <section className="relative py-24 bg-accent overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] pointer-events-none" />


            <div className="container-boxed relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-20"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.15 }
                                }
                            }}
                            className="space-y-6 md:space-y-8 text-left"
                        >
                            <div className="flex items-start gap-4 md:gap-6">
                                {/* Number badge removed as requested */}
                                <div className="space-y-8 text-left">
                                    <motion.div 
                                        variants={{
                                            hidden: { opacity: 0, y: 30 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                        }}
                                        className="space-y-1"
                                    >
                                        <h2 className="text-h2 text-black flex flex-col">
                                            <span>Bootcamp, Bootcamp,</span>
                                            <span className="opacity-90">Bootcamp.</span>
                                        </h2>
                                    </motion.div>
                                    <motion.p 
                                        variants={{
                                            hidden: { opacity: 0, y: 30 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                        }}
                                        className="text-body text-black/90 font-bold"
                                    >
                                        At AESTR, theory is just the beginning. We believe the best way to learn engineering is by building real things. That’s why every semester includes immersive AI bootcamps, right on campus — fully integrated into your curriculum.
                                    </motion.p>
                                    <motion.div 
                                        variants={{
                                            hidden: { opacity: 0, y: 30 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                        }}
                                        className="inline-block pt-4"
                                    >
                                        <Link href="/day-at-aestr">
                                            <button className="px-10 py-4 bg-black text-accent font-orbitron font-black text-sm rounded-lg hover:scale-105 transition-all flex items-center gap-2 group">
                                                Read more
                                                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2">↗</span>
                                            </button>
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative group cursor-pointer"
                        >
                            <div className="aspect-[16/10] bg-black/80 rounded-[2rem] border border-black/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-black/30 group-hover:shadow-[0_0_80px_rgba(0,0,0,0.2)] relative">
                                <Image
                                    src="/Other/Bootcamp.jpg"
                                    alt="Engineering Bootcamp"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default AboutPointFour;
