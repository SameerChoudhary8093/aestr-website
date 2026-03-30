'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutPointOne = () => {
    return (
        <section className="relative py-24 bg-accent overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.15 }
                    }
                }}
                className="container-boxed relative z-10"
            >
                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 mb-16 md:mb-20">
                    <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-black flex items-center justify-center text-3xl md:text-4xl font-orbitron font-black text-[#D7F601] bg-black shadow-xl">
                        1
                    </div>
                    <div className="space-y-6 text-left">
                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="space-y-1"
                        >
                            <h2 className="text-h2 text-black">
                                CSE 2030: <span className="opacity-90">Computer Science Won't Be Same Ever Again</span>
                            </h2>
                        </motion.div>
                        <motion.p 
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="text-[16px] text-black/90 font-bold"
                        >
                            The world of Computer Science is transforming by 2030...
                        </motion.p>
                    </div>
                </div>

                <div className="space-y-6 md:space-y-8">
                    {/* Top Row: 3 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { title: 'Future-Proof Your Career', desc: 'The AI job market is exploding, and old institutional models can’t keep up. AESTR is built for the 2030 job landscape, focusing on roles that will dominate the next decade.' },
                            { title: 'Beyond Traditional Tech', desc: 'Forget outdated job titles. Think specialized AI roles across diverse industries. We anticipate the shift, so you lead it.' },
                            { title: 'Engineered By Experts, For Experts-To-Be', desc: 'Our curriculum is designed and delivered by practicing AI engineers who are actively shaping the industry and know exactly what skills you’ll need. They’re not just teachers; they’re your future colleagues and potential employers.' }
                        ].map((card, i) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass !bg-black/85 !border-black/5 p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-500 text-left min-h-[300px] flex flex-col relative overflow-hidden"
                            >
                                <h4 className="text-[28px] text-[#EAF0BD] mb-6 leading-tight transition-colors">{card.title}</h4>
                                <p className="text-[16px] text-[#EAF0BD] font-normal">{card.desc}</p>
                                
                                {/* Decorative corners */}
                                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-accent rounded-tr-lg"></div>
                                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-accent rounded-bl-lg"></div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Row: 2 Large Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                        {/* Card 4: Unparalleled Flexibility */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="glass !bg-black/90 !border-black/5 p-8 md:p-12 rounded-[2.5rem] text-left relative overflow-hidden group"
                        >
                            <div className="relative z-10 space-y-8">
                                <h4 className="text-[28px] text-[#EAF0BD] leading-tight">
                                    Unparalleled Flexibility & <br />
                                    Cutting-Edge Curriculum:
                                </h4>
                                <div className="space-y-6">
                                    { [
                                        "Choose from 5 industry-focused Majors and 9 specialized Minors to tailor your unique expertise.",
                                        "Dive into 5 revolutionary Innovation Labs, unlike any in the world.",
                                        "Gain exclusive Apple Swift Application Development training directly from Apple.",
                                        "Learn from global master teachers, experts in defense technologies, robotics, computer vision, and engine building."
                                    ].map((point, idx) => (
                                        <p key={idx} className="text-[16px] text-[#EAF0BD] font-normal">{point}</p>
                                    ))} 
                                </div>
                            </div>
                            {/* Decorative corners */}
                            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-accent rounded-tr-lg"></div>
                            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-accent rounded-bl-lg"></div>
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/5 blur-2xl rounded-full" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="glass !bg-black/90 !border-black/5 p-8 md:p-12 rounded-[2.5rem] text-left relative overflow-hidden group"
                        >
                            <div className="relative z-10 space-y-10">
                                <h4 className="text-[28px] text-[#EAF0BD] leading-tight">
                                    Learn By Doing, <br />
                                    Excel By Creating:
                                </h4>
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <p className="text-[16px] text-[#EAF0BD] font-bold">
                                            Project-Powered Progress:
                                        </p>
                                        <p className="text-[16px] text-[#EAF0BD] font-normal">
                                            Get graded on your real-world projects and software solutions, not just exams. Solve a problem, build the software, and master the subject.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-[16px] text-[#EAF0BD] font-normal">
                                            The Engineer's Dream Education:
                                        </p>
                                        <div className="space-y-4">
                                            {[
                                                "Our courses are crafted the way seasoned engineers wish they had been taught – practical, innovative, and deeply engaging.",
                                                "Our curriculum is designed to help you build a strong foundation in computer science and software engineering."
                                            ].map((point, idx) => (
                                                <p key={idx} className="text-[16px] text-[#EAF0BD] font-normal">{point}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative corners */}
                            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-accent rounded-tr-lg"></div>
                            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-accent rounded-bl-lg"></div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-2xl rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutPointOne;
