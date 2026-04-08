'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const teamData = [
    {
        name: 'Kanishk Sharma',
        role: 'Director SGVU',
        image: '/ExecutionTeam/Kanishk.webp',
        linkedin: 'https://www.linkedin.com/in/kanishk-sharma-195aa2178/',
        desc: 'Kanishk Sharma is a leading socio-entrepreneur and educationist in India. He has built massive institutions from the ground up and leads tech-driven education platforms with over 100,000 students. His strategic vision has been the driving force behind AESTR’s mission to modernize engineering studies with real-world impact.',
        quote: 'AI education is not just about technology, it\'s about creating responsible innovators for tomorrow'
    },
    {
        name: 'Dr. Arastu Sharma',
        role: 'CEO AESTR',
        image: '/ExecutionTeam/Arastu.jpeg',
        linkedin: 'https://www.linkedin.com/in/drarastu/',
        desc: "Dr. Arastu Sharma's journey spans Cambridge, Columbia, and Microsoft Research. As a serial AI entrepreneur, his pioneering healthcare patent was acquired by the global giant GSK. Today, as CEO of Shodh AI and AESTR, he leverages his deep industry expertise to mentor the next generation of top-tier software and AI engineers.",
        specialStats: true,
        quote: "AI education is not just about technology, it's about creating responsible innovators for tomorrow."
    },
    {
        name: 'Prof. MP Poonia',
        role: 'Ex-Vice Chairman, AICTE',
        image: '/ExecutionTeam/Poonia.webp',
        linkedin: 'https://www.linkedin.com/in/dr-mp-poonia-75108861/',
        desc: 'Professor MP Poonia is the Ex-Vice Chairman of AICTE and a foremost academic leader in India. His vast background in national education policy and its implementation ensures that AESTR’s technical programs are perfectly aligned with both national standards and the rapidly evolving demands of the global technology industry.',
        quote: 'The future of India\'s technological advancement depends on how we educate and prepare our engineering talent today.'
    },
    {
        name: 'Dr. Amogh Mahadevagowda',
        role: 'Lecturer, University of Cambridge',
        image: '/ExecutionTeam/Amogh.webp',
        desc: 'Dr. Amogh Mahadevagowda is a distinguished scientist at the University of Cambridge and a leader in advanced battery technologies. His pioneering research and global academic expertise help AESTR integrate world-class scientific standards into its curriculum, ensuring that students develop globally recognized skillsets for 2030.',
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
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-white">
                        Execution <span className="text-accent italic">team</span>
                    </h2>
                    <p className="text-body text-white/50 max-w-2xl mx-auto">
                        Choose your path to excellence with our diverse program offerings designed to match your ambitions.
                    </p>
                </motion.div>

                {/* Horizontal Slider Area */}
                <div className="relative -mx-4 px-4 overflow-x-auto pb-12 scrollbar-hide snap-x flex justify-center gap-6 md:gap-8 no-scrollbar scroll-smooth">
                    {teamData.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="flex-shrink-0 w-[280px] md:w-[320px] snap-center glass !bg-black/30 border-white/5 p-6 rounded-3xl flex flex-col space-y-6 group hover:!bg-black/50 transition-all duration-500 overflow-hidden"
                        >
                            {/* Image Side - Smaller, Centered */}
                            <div className="w-full relative group">
                                <div className="aspect-[1/1] w-full bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_30px_rgba(216,246,2,0.1)] relative">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="300px"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                </div>
                            </div>

                            {/* Content Side - More Compact & Aligned */}
                            <div className="flex flex-col flex-grow space-y-4 text-left">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 min-h-[3rem] md:min-h-[3.5rem] items-start">
                                        <h3 className="text-lg md:text-xl font-orbitron font-bold text-white tracking-tight leading-tight">
                                            {member.name}
                                        </h3>
                                        {member.linkedin && (
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white/60 hover:text-accent transition-colors duration-300 mt-1 flex-shrink-0"
                                            >
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                    <div className="min-h-[2.5rem] md:min-h-[2.5rem] flex flex-wrap items-center gap-2">
                                        <p className="text-[10px] md:text-xs font-orbitron uppercase tracking-widest text-accent font-black">
                                            {member.role}
                                        </p>
                                        {member.specialStats && (
                                            <div className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded-full border border-white/10">
                                                <div className="relative w-16 h-3 md:w-20 md:h-4">
                                                    <Image
                                                        src="/Herosection/University of cambridge.webp"
                                                        alt="Cambridge"
                                                        fill
                                                        className="object-contain brightness-[1.5]"
                                                        sizes="100px"
                                                    />
                                                </div>
                                                <span className="text-[7px] md:text-[8px] font-orbitron text-white tracking-widest font-black uppercase">PhD Cambridge</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="min-h-[120px] md:min-h-[140px]">
                                    <p className="text-[11px] md:text-xs text-white/70 font-medium leading-relaxed">
                                        {member.desc}
                                    </p>
                                </div>

                                {/* Compact Quote Box - Pushed to bottom */}
                                <div className="mt-auto pt-4">
                                    <div className="relative glass bg-black/30 border-l-2 border-accent p-3 rounded-r-xl min-h-[4.5rem] flex items-center">
                                        <p className="text-[10px] md:text-[11px] text-white/80 font-medium italic leading-relaxed">
                                            "{member.quote}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 3+1 Global Edge Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-24"
                >
                    <div className="relative rounded-[2rem] border-[4px] border-[#5B1DD6] bg-[#D7F601] px-4 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 shadow-[0_18px_40px_rgba(0,0,0,0.6)] overflow-hidden">
                        {/* Top-left halo decoration, keeping original smooth corner */}
                        <div className="pointer-events-none absolute top-3 left-5 w-10 h-10 text-[#5B1DD6]">
                            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full rotate-12">
                                <ellipse cx="20" cy="18" rx="12" ry="6" stroke="currentColor" strokeWidth="2.2" />
                                <path d="M10 18c2 1.2 5.5 2 10 2s8-0.8 10-2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                <rect x="16" y="10" width="2.3" height="2.3" rx="0.4" fill="currentColor" transform="rotate(18 17.15 11.15)" />
                                <rect x="20" y="8" width="2.3" height="2.3" rx="0.4" fill="currentColor" transform="rotate(18 21.15 9.15)" />
                                <rect x="24" y="10" width="2.3" height="2.3" rx="0.4" fill="currentColor" transform="rotate(18 25.15 11.15)" />
                            </svg>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-8 md:gap-12 items-stretch">
                            {/* Left: Image */}
                            <div className="relative w-full rounded-2xl overflow-hidden min-h-[240px] md:min-h-[300px] lg:min-h-[340px]">
                                <Image
                                    src="/Other/roosevelt-university.jpg"
                                    alt="Roosevelt University City Campus"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Right: Text Content */}
                            <div className="flex flex-col justify-center space-y-5 md:space-y-6 text-left">
                                <h3 className="text-3xl md:text-4xl lg:text-[2.6rem] font-orbitron font-extrabold text-[#5B1DD6] leading-snug">
                                    The 3+1 Global Edge
                                    <span className="block text-base md:text-lg lg:text-2xl font-orbitron font-bold text-[#1A1040]">
                                        (Your International Pipeline)
                                    </span>
                                </h3>
                                <p className="text-[17px] md:text-[19px] lg:text-[20px] leading-relaxed font-medium text-black/90 max-w-2xl">
                                    Don&apos;t just conquer India. Conquer the world. Spend 3 years building your portfolio at the AESTR Jaipur Hub, and 1 year at a premier university in the US, UK, or Europe. We have 25+ global education partners. You get a B.Tech degree, global exposure, and a world-class portfolio.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none z-0" />
        </section>
    );
};

export default ExecutionTeam;
