'use client';

import React from 'react';

const Pathways = () => {
    const pathwaysData = [
        { title: 'Btech AI with Shodh AI', subtitle: '35LPA+ jobs', borderColor: 'border-pink-500/50' },
        { title: 'Global Opportunities', subtitle: '2+2, 3+1 Programs', borderColor: 'border-purple-500/50' },
        { title: 'Industry Partner Training', subtitle: '& Direct Placements', borderColor: 'border-cyan-500/50' },
        { title: 'Nurturing Entrepreneurs', subtitle: 'Silicon Valley of AI', borderColor: 'border-pink-500/50' },
    ];

    return (
        <section className="relative py-32 bg-[#3b0764] overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Header Area */}
                <div className="text-center mb-24 space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
                    <div className="flex justify-center">
                        <div className="w-16 h-16 rounded-full border border-accent/20 flex items-center justify-center text-3xl font-orbitron font-bold text-accent bg-accent/5 shadow-[0_0_15px_rgba(204,255,0,0.05)]">
                            7
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white leading-tight">
                            AESTR Quality Assurance <span className="text-accent italic">Pathways</span>
                        </h2>
                        <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                            We provide clear, ambitious pathways to ensure your career takes off.
                        </p>
                    </div>
                </div>

                {/* Flowchart/Grid Section */}
                <div className="relative mb-20">
                    {/* Desktop Connecting Line */}
                    <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-white/10 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:pt-12">
                        {pathwaysData.map((item, idx) => (
                            <div key={idx} className="relative group">
                                {/* Vertical Drop Line (Desktop only) */}
                                <div className="absolute -top-12 left-1/2 w-px h-12 bg-white/10 hidden md:block group-hover:bg-accent/40 transition-colors duration-500" />

                                <div className={`glass p-8 rounded-2xl border-t-2 ${item.borderColor} flex flex-col items-center text-center transition-all duration-500 group-hover:transform group-hover:-translate-y-2 group-hover:bg-white/[0.08]`}>
                                    <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/60 font-medium uppercase tracking-widest text-xs italic">
                                        {item.subtitle}
                                    </p>

                                    {/* Subtle decorative element */}
                                    <div className="mt-6 w-8 h-1 bg-white/5 rounded-full group-hover:w-16 group-hover:bg-accent/20 transition-all duration-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Action */}
                <div className="flex justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-300">
                    <button className="btn-aestr flex items-center gap-2 group">
                        Read More
                        <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                    </button>
                </div>

            </div>

            {/* Background Decorative Globs */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
};

export default Pathways;
