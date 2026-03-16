'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const teamData = [
    {
        name: 'Kanishk Sharma',
        role: 'Director SGVU',
        image: '/ExecutionTeam/Kanishk.webp',
        desc: 'Kanishk Sharma is a leading socio-entrepreneur and educationist of the country. From building institutions from the ground up he is responsible for leadership of leading large ed-tech platforms with over 100,000 students. His vision and strategic direction have been instrumental in shaping AESTR mission and approach.',
        quote: 'AI education is not just about technology, it\'s about creating responsible innovators for tomorrow'
    },
    {
        name: 'Dr. Arastu Sharma',
        role: 'CEO AESTR',
        image: '/ExecutionTeam/Arastu.jpeg',
        desc: 'Dr. Arastu Sharma’s journey spans Cambridge, Columbia, Microsoft Research, and entrepreneurship with multiple AI companies. His pioneering healthcare patent was acquired by global pharmaceutical giant GSK. Today, as CEO of Shodh AI and AESTR, he embodies innovation and industry expertise.',
        specialStats: true,
        quote: 'AI education is not just about technology, it’s about creating responsible innovators for tomorrow.'
    },
    {
        name: 'Prof. MP Poonia',
        role: 'Ex-Vice Chairman, AICTE',
        image: '/ExecutionTeam/Poonia.webp',
        desc: 'Professor MP Poonia is the Vice Chairman of AICTE (All India Council for Technical Education) and a leading academician in the country. His extensive experience in engineering education policy and implementation has been vital in aligning AESTR programs with national education standards and future industry needs.',
        quote: 'The future of India\'s technological advancement depends on how we educate and prepare our engineering talent today.'
    },
    {
        name: 'Dr. Amogh Mahadevagowda',
        role: 'Lecturer, University of Cambridge',
        image: '/ExecutionTeam/Amogh.webp',
        desc: 'Dr. Amogh Mahadevagowda is a leading material science scientist of the world and an entrepreneur in battery technologies. His groundbreaking research in materials science has opened new frontiers in energy storage solutions.',
        quote: 'We\'re building technology that will redefine how AI engineering is taught and practiced.'
    }
];

const ExecutionTeam = () => {
    return (
        <section className="relative py-24 bg-purple overflow-hidden">
            <div className="container-boxed relative z-10">
                {/* Header Area */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20 space-y-4"
                >
                    <h2 className="text-h2 text-white">
                        Execution <span className="text-accent italic">team</span>
                    </h2>
                    <p className="text-body text-white/50 max-w-2xl mx-auto">
                        Choose your path to excellence with our diverse program offerings designed to match your ambitions.
                    </p>
                </motion.div>

                {/* Team Members List */}
                <div className="space-y-16 md:space-y-24">
                    {teamData.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className={`flex flex-col md:items-center gap-8 md:gap-12 lg:gap-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                        >
                            {/* Image Side */}
                            <div className="w-full md:w-5/12 relative group">
                                <div className="aspect-[4/5] w-full bg-black/40 rounded-2xl md:rounded-[2rem] border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_50px_rgba(216,246,2,0.1)] relative">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-7/12 flex flex-col justify-center space-y-6 text-left">
                                <div className="space-y-2">
                                    <h3 className="text-h3 text-white tracking-tight">
                                        {member.name}
                                    </h3>
                                    <p className="text-[10px] md:text-sm font-orbitron uppercase tracking-[0.2em] md:tracking-[0.3em] text-accent font-black">
                                        {member.role}
                                    </p>
                                </div>

                                <p className="text-body text-white/70 font-medium">
                                    {member.desc}
                                </p>

                                {member.specialStats && (
                                    <div className="flex flex-wrap items-center gap-10 md:gap-14 pt-4">
                                        <div className="flex flex-col items-start gap-3 group/stat transition-all">
                                            <div className="relative w-32 h-12 md:w-40 md:h-16 flex-shrink-0">
                                                <Image
                                                    src="/Herosection/University of cambridge.webp"
                                                    alt="Cambridge"
                                                    fill
                                                    className="object-contain brightness-[1.5] group-hover/stat:scale-105 transition-transform"
                                                />
                                            </div>
                                            <span className="text-[10px] md:text-[13px] font-orbitron text-white tracking-widest font-black whitespace-nowrap">PhD Cambridge</span>
                                        </div>
                                        <div className="flex flex-col items-start gap-3 group/stat transition-all">
                                            <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                                                <Image
                                                    src="/Other/patent-ai.png"
                                                    alt="Patents"
                                                    fill
                                                    className="object-contain group-hover/stat:scale-105 transition-transform"
                                                />
                                            </div>
                                            <span className="text-[10px] md:text-[13px] font-orbitron text-accent tracking-widest font-black whitespace-nowrap">75+ Patents in AI</span>
                                        </div>
                                    </div>
                                )}

                                {/* Quote Box - NOT ITALIC */}
                                <div className="relative glass bg-black/30 border-l-4 border-accent p-6 md:p-8 rounded-r-2xl mt-4 group">
                                    <div className="absolute -top-4 -left-2 text-white/5 font-serif text-[60px] md:text-[100px] leading-none select-none pointer-events-none group-hover:text-accent/5 transition-colors">
                                        "
                                    </div>
                                    <p className="relative z-10 text-body text-white/80 font-semibold">
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
