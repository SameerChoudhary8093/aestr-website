'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const teamData = [
    {
        name: 'Kanishk Sharma',
        role: 'Director SGVU',
        image: '/ExecutionTeam/Kanishk.webp',
        desc: 'Kanishk Sharma is a leading socio-entrepreneur and educationist of the country...',
        quote: 'Big things are built with grit and courage. Engineers of India need to be instilled with a mindset of innovation...'
    },
    {
        name: 'Dr. Arastu Sharma',
        role: 'CEO AESTR',
        image: '/ExecutionTeam/Arastu.png',
        desc: 'Dr. Arastu Sharma’s journey spans Cambridge, Columbia, Microsoft Research...',
        specialStats: true,
        quote: 'AI education is not just about technology, it’s about creating responsible innovators for tomorrow.'
    },
    {
        name: 'Prof. MP Poonia',
        role: 'Ex-Vice Chairman, AICTE',
        image: '/ExecutionTeam/Poonia.webp',
        desc: 'Professor MP Poonia is the Vice Chairman of AICTE...',
        quote: 'The future of India’s technological advancement depends on how we educate and prepare our engineering talent today.'
    },
    {
        name: 'Dr. Ahsan MM',
        role: 'Patent Attorney & Entrepreneur',
        image: '/ExecutionTeam/Ahsan.webp',
        desc: 'Dr. Ahsan MM is a patent attorney in several countries...',
        quote: 'The intersection of societal value and technological innovation is where true value is created...'
    },
    {
        name: 'Dr. Amogh Mahadevagowda',
        role: 'Lecturer, University of Cambridge',
        image: '/ExecutionTeam/Amogh.webp',
        desc: 'Dr. Amogh is a leading material science scientist of the world...',
        quote: 'We’re building technology that will redefine how AI engineering is taught and practiced.'
    }
];

const ExecutionTeam = () => {
    return (
        <section className="relative py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Header Area */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground leading-tight">
                        Execution <span className="text-accent italic">Team</span>
                    </h2>
                    <p className="text-lg text-foreground/50 max-w-2xl mx-auto leading-relaxed">
                        Learn from the architects of tomorrow's AI. Our mentors don't just teach from books; they bring years of experience from Tier-1 tech giants.
                    </p>
                </motion.div>

                {/* Team Members List */}
                <div className="space-y-24">
                    {teamData.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className={`flex flex-col md:items-center gap-10 md:gap-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                        >
                            {/* Image Side */}
                            <div className="w-full md:w-5/12 relative group">
                                <div className="aspect-[4/5] w-full bg-black/40 rounded-[2rem] border border-foreground/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_50px_rgba(216,246,2,0.1)] relative">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-7/12 flex flex-col justify-center space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground tracking-tight">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm font-orbitron uppercase tracking-[0.3em] text-accent font-black">
                                        {member.role}
                                    </p>
                                </div>

                                <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                                    {member.desc}
                                </p>

                                {/* Special Stats for Dr. Arastu */}
                                {member.specialStats && (
                                    <div className="flex flex-wrap items-center gap-4 pt-2">
                                        <div className="px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                                            <span className="text-[10px] font-orbitron text-foreground uppercase tracking-widest font-bold">PhD Cambridge University</span>
                                        </div>
                                        <div className="px-4 py-2 rounded-full border border-accent/20 bg-accent/5 flex items-center gap-2">
                                            <span className="text-accent">✦</span>
                                            <span className="text-[10px] font-orbitron text-accent uppercase tracking-widest font-bold">75+ Patents in AI</span>
                                        </div>
                                    </div>
                                )}

                                {/* Quote Box - NOT ITALIC */}
                                <div className="relative glass bg-foreground/5 border-l-4 border-accent p-8 rounded-r-2xl mt-4 group">
                                    <div className="absolute -top-4 -left-2 text-foreground/5 font-serif text-[100px] leading-none select-none pointer-events-none group-hover:text-accent/5 transition-colors">
                                        "
                                    </div>
                                    <p className="relative z-10 text-foreground/80 leading-relaxed font-semibold font-orbitron text-sm md:text-base italic-none">
                                        "{member.quote}"
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none z-0" />
        </section>
    );
};

export default ExecutionTeam;
