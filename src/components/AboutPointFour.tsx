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
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="space-y-6 md:space-y-8 text-left"
                        >
                            <div className="flex items-start gap-4 md:gap-6">
                                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-black flex items-center justify-center text-3xl md:text-4xl font-orbitron font-black text-[#D7F601] bg-black shadow-xl">
                                    4
                                </div>
                                <div className="space-y-8 text-left">
                                    <div className="space-y-1">
                                        <h2 className="text-h2 text-black">
                                            Bootcamp, Bootcamp, <span className="opacity-90">Bootcamp.</span>
                                        </h2>
                                    </div>
                                    <p className="text-body text-black/90 font-bold">
                                        At AESTR, theory is just the beginning. We believe the best way to learn engineering is by building real things. That’s why every semester includes immersive AI bootcamps, right on campus — fully integrated into your curriculum.
                                    </p>
                                    <Link href="/day-at-aestr" className="inline-block pt-4">
                                        <button className="px-10 py-4 bg-black text-accent font-orbitron font-black text-sm rounded-lg hover:scale-105 transition-all flex items-center gap-2 group">
                                            Read more
                                            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2">↗</span>
                                        </button>
                                    </Link>
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

                    {/* Grid of cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: 'No compulsory written exams', desc: 'We don\'t test memory, we evaluate your ability to solve real problems. Your marks are based on live projects, products, and prototypes.' },
                            { title: 'Your Work, Your Grade', desc: 'Evaluation is based on your projects, problem-solving, and contributions - not just exam scores.' },
                            { title: 'Become a Senior Engineer, Faster', desc: 'Our practical methodology empowers you to develop senior-level engineering skills during your degree.' },
                            { title: 'Craft Your Degree', desc: 'Unprecedented flexibility allows you to shape your educational journey to match your passions and career aspirations.' }
                        ].map((card, i) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass !bg-black/90 p-10 rounded-2xl group border-foreground/5 hover:border-accent/30 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:15px_15px] opacity-20 pointer-events-none" />
                                <div className="relative z-10">
                                    <h4 className="text-h3 text-[#EAF0BD] mb-4 transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        {card.title}
                                    </h4>
                                    <p className="text-body text-[#EAF0BD] font-normal">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutPointFour;
