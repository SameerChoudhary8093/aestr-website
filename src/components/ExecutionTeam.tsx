'use client';

import React from 'react';
import Image from 'next/image';

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
        <section className="relative py-24 bg-[#020617] overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Header Area */}
                <div className="text-center mb-20 space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white leading-tight">
                        Execution <span className="text-accent italic">Team</span>
                    </h2>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                        Choose your path to excellence with our diverse program offerings designed to match your ambitions.
                    </p>
                </div>

                {/* Team Members List */}
                <div className="space-y-16">
                    {teamData.map((member, idx) => (
                        <div
                            key={member.name}
                            className={`flex flex-col md:items-center gap-8 md:gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                        >
                            {/* Image Placeholder */}
                            <div className="w-full md:w-1/3 relative group">
                                <div className="h-[400px] w-full bg-black/40 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_30px_rgba(204,255,0,0.05)] relative">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-2/3 flex flex-col justify-center space-y-4">
                                <div className="space-y-1">
                                    <h3 className="text-3xl font-orbitron font-bold text-white tracking-wide">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm font-orbitron uppercase tracking-widest text-accent font-semibold">
                                        {member.role}
                                    </p>
                                </div>

                                <p className="text-lg text-white/50 leading-relaxed">
                                    {member.desc}
                                </p>

                                {/* Special Stats for Dr. Arastu */}
                                {member.specialStats && (
                                    <div className="flex flex-wrap items-center gap-4 py-2">
                                        <div className="glass px-4 py-2 rounded-lg border-white/10 bg-white/5 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                                            <span className="text-xs font-orbitron text-white/80 uppercase tracking-wider">PhD Cambridge University</span>
                                        </div>
                                        <div className="glass px-4 py-2 rounded-lg border-white/10 bg-white/5 flex items-center gap-2">
                                            <span className="text-accent">✦</span>
                                            <span className="text-xs font-orbitron text-white/80 uppercase tracking-wider">75+ Patents in AI</span>
                                        </div>
                                    </div>
                                )}

                                {/* Quote Box */}
                                <div className="relative glass bg-white/5 border-l-4 border-accent p-6 rounded-r-xl mt-4 overflow-hidden">
                                    <div className="absolute -top-6 -left-2 text-white/5 font-serif text-[120px] leading-none select-none pointer-events-none">
                                        "
                                    </div>
                                    <p className="relative z-10 text-white/60 italic leading-relaxed">
                                        "{member.quote}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default ExecutionTeam;
