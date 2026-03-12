'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const highlights = [
    {
        title: "AESTR and Shodh AI are working with DRDO to train fine-tuned Material Science LLMs",
        image: "/ProgramPartners/DRDO.webp",
        accentColor: "text-blue-400"
    },
    {
        title: "B.Tech. with 3+1 degrees abroad for TOP 10% of our students with scholarships and offers",
        image: "/Herosection/University of cambridge.webp",
        accentColor: "text-accent",
        badge: "+25 Education partners in US, UK and Europe"
    },
    {
        title: "First engineering college in India with self trained Robot teachers",
        image: "/Other/Robo.webp",
        accentColor: "text-purple-400"
    }
];

const HighlightCarousel = () => {
    const [current, setCurrent] = React.useState(0);
    const total = highlights.length;

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % total);
        }, 5000);
        return () => clearInterval(timer);
    }, [total]);

    return (
        <div className="relative w-full rounded-[2rem] overflow-hidden bg-black border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            {/* Slides */}
            <div className="relative min-h-[360px] md:min-h-[320px]">
                {highlights.map((item, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 flex flex-col md:flex-row transition-opacity duration-700 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                    >
                        {/* Left: Content */}
                        <div className="flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-16 space-y-5 relative z-10">
                            {/* Title */}
                            <h3 className={`text-lg md:text-2xl lg:text-3xl font-orbitron font-extrabold leading-snug tracking-tight ${item.accentColor}`}>
                                {item.title}
                            </h3>

                            {/* Badge */}
                            {item.badge && (
                                <div className="inline-flex w-fit items-center gap-2 bg-accent/10 py-2 px-4 rounded-full border border-accent/20">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                    <p className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-widest">{item.badge}</p>
                                </div>
                            )}

                            {/* Footer tag */}
                            <div className="flex items-center gap-2 pt-2">
                                <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_8px_#D7F601]" />
                                <span className="text-[9px] md:text-[10px] font-orbitron font-black uppercase tracking-[0.4em] text-white/30">AESTR Global Excellence</span>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="hidden md:block flex-1 relative bg-black/60">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-contain p-8"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Progress Dots + Counter */}
            <div className="relative z-20 flex items-center justify-between px-8 md:px-12 lg:px-16 pb-6 pt-2 border-t border-white/5">
                <div className="flex gap-2">
                    {highlights.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${current === i ? 'bg-accent w-10' : 'bg-white/15 w-4 hover:bg-white/30'}`}
                        />
                    ))}
                </div>
                <span className="text-[10px] font-orbitron font-black text-white/20 uppercase tracking-[0.3em]">
                    {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </span>
            </div>
        </div>
    );
};

const Pathways = () => {
    const pathwaysData = [
        { title: 'Btech AI with Shodh AI', subtitle: '35LPA+ jobs', borderColor: 'border-accent/40' },
        { title: 'Global Opportunities', subtitle: '2+2, 3+1 Programs', borderColor: 'border-accent/30' },
        { title: 'Industry Partner Training', subtitle: '& Direct Placements', borderColor: 'border-accent/20' },
        { title: 'Nurturing Entrepreneurs', subtitle: 'Silicon Valley of AI', borderColor: 'border-accent/30' },
    ];

    return (
        <section className="relative py-32 bg-accent overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Header Area */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-24 space-y-6 md:space-y-8"
                >
                    <div className="flex justify-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black/30 flex items-center justify-center text-2xl md:text-3xl font-orbitron font-bold text-black bg-black/5">
                            7
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-black leading-tight tracking-tight px-4">
                            AESTR quality assurance <span className="text-black italic underline decoration-black/20 underline-offset-8">pathways</span>
                        </h2>
                        <p className="text-base md:text-lg text-black/60 max-w-2xl mx-auto leading-relaxed font-bold px-4">
                            We provide clear, ambitious pathways to ensure your career takes off.
                        </p>
                    </div>
                </motion.div>

                {/* Flowchart/Grid Section */}
                <div className="relative mb-20 px-4">
                    {/* Connecting Line */}
                    <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-black/10 hidden lg:block" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:pt-12 items-stretch">
                        {pathwaysData.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative group flex"
                            >
                                {/* Vertical Drop Line */}
                                <div className="absolute -top-12 left-1/2 w-px h-12 bg-black/10 hidden lg:block group-hover:bg-black transition-colors duration-500" />

                                <div className={`glass !bg-black/80 !border-black/5 p-8 md:p-10 rounded-2xl border-t-4 ${item.borderColor} flex flex-col items-center text-center transition-all duration-500 group-hover:transform group-hover:-translate-y-2 hover:!bg-black w-full min-h-[200px] md:min-h-[250px]`}>
                                    <h3 className="text-lg md:text-xl font-orbitron font-bold text-white mb-4 group-hover:text-accent transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/40 font-black uppercase tracking-[0.2em] text-[10px] mt-auto">
                                        {item.subtitle}
                                    </p>

                                    {/* Decorative element */}
                                    <div className="mt-8 w-10 h-1.5 bg-white/5 rounded-full group-hover:w-20 group-hover:bg-accent transition-all duration-700" />
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
                        <button className="px-10 py-4 bg-black text-accent font-orbitron font-black text-sm uppercase rounded-lg hover:scale-105 transition-all flex items-center gap-2 group shadow-xl">
                            Read More
                            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                        </button>
                    </motion.div>

                    {/* Auto-Swiping Highlights Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                         <HighlightCarousel />
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
