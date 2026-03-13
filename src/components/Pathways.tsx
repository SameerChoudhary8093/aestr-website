'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const highlights = [
    {
        mainTitle: "B.Tech. with 3+1 degrees abroad for TOP 10% of our students",
        subTitle: "with scholarships and offers",
        image: "/Other/building-global.jpg",
        textColor: "text-white",
        bgColor: "bg-[#181818]",
        hex: "#181818",
        badge: "+25 Education partners in US, UK and Europe",
        hasApply: true
    },
    {
        mainTitle: "First engineering college in India",
        subTitle: "with self trained Robot teachers",
        image: "/Other/robot-class.jpg",
        textColor: "text-white",
        bgColor: "bg-[#181818]",
        hex: "#181818",
        hasApply: false
    },
    {
        mainTitle: "AESTR and Shodh AI are working with",
        subTitle: "with DRDO to train fine-tuned Material Science LLMs",
        image: "/ProgramPartners/DRDO.webp",
        textColor: "text-white",
        bgColor: "bg-[#181818]",
        hex: "#181818",
        hasApply: false
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
        <div className="relative w-full rounded-[3rem] overflow-hidden border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            {/* Main Container */}
            <div className="relative min-h-[620px] md:min-h-[520px]">
                {highlights.map((item, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 flex flex-col md:flex-row transition-opacity duration-700 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'} ${item.bgColor || 'bg-black'}`}
                    >
                        {/* Left: Content */}
                        <div className="flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-20 space-y-10 relative z-10">
                            {/* Title Component */}
                            <div className="space-y-4">
                                <h3 className={`text-3xl md:text-5xl lg:text-5xl font-sans font-black leading-tight tracking-tight ${item.textColor}`}>
                                    {item.mainTitle}
                                </h3>
                                <p className={`text-2xl md:text-4xl lg:text-5xl font-serif italic leading-tight tracking-tight ${item.textColor} opacity-80`}>
                                    {item.subTitle}
                                </p>
                            </div>

                            {/* Special Badge/Apply Now for first slide */}
                            {item.hasApply && (
                                <div className="flex flex-col md:flex-row items-center gap-4">
                                    <div className="bg-black/5 backdrop-blur-sm p-4 md:p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 border border-black/5">
                                        <p className={`text-sm md:text-lg font-bold ${item.textColor} leading-snug max-w-[300px]`}>
                                            {item.badge}
                                        </p>
                                        <Link href="/apply" className="flex-shrink-0">
                                            <button className="bg-black text-white px-10 py-4 rounded-xl font-orbitron font-black text-xs uppercase flex items-center gap-3 hover:scale-105 transition-all shadow-lg">
                                                Apply Now
                                                <span className="text-xl">↗</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right: Image */}
                        <div className="hidden md:block flex-1 relative overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.mainTitle || "Highlight"}
                                fill
                                className="object-cover transition-transform duration-[10000ms] ease-linear scale-100 group-hover:scale-110"
                            />
                            {/* Gradient Overlay using hex from data */}
                            <div 
                                className="absolute inset-0 z-10" 
                                style={{ background: `linear-gradient(to right, ${item.hex} 0%, transparent 60%)` }}
                            />
                        </div>
                    </div>
                ))}

                {/* Navigation Overlay */}
                <div className="absolute bottom-10 left-8 md:left-12 lg:left-20 right-8 md:right-12 lg:right-20 z-20 flex items-center justify-between pointer-events-auto">
                    <div className="flex gap-3">
                        {highlights.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${current === i ? 'bg-accent w-14 shadow-sm' : 'bg-white/20 w-4 hover:bg-white/40'}`}
                            />
                        ))}
                    </div>
                    <span className="text-[10px] font-orbitron font-black text-white/40 uppercase tracking-[0.4em] pointer-events-none">
                        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </span>
                </div>
            </div>
        </div>
    );
};

const Pathways = () => {
    const pathwaysData = [
        { title: 'Btech AI with Shodh AI', subtitle: '35LPA+ jobs', borderColor: 'border-accent/40' },
        { title: 'Global opportunities', subtitle: '2+2, 3+1 programs', borderColor: 'border-accent/30' },
        { title: 'Industry partner training', subtitle: '& direct placements', borderColor: 'border-accent/20' },
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
                        <span className="text-3xl md:text-5xl font-serif italic text-black">7</span>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-orbitron font-bold text-black leading-tight tracking-tight">
                            Aestr quality assurance <span className="font-serif italic opacity-90">pathways</span>
                        </h2>
                        <p className="text-base md:text-lg text-black/80 max-w-2xl mx-auto leading-relaxed font-bold">
                            We provide clear, ambitious pathways to ensure your career takes off.
                        </p>
                    </div>

                    {/* Technical Connector Line Area */}
                    <div className="relative pt-6 w-full flex flex-col items-center">
                        {/* Vertical line from header - increased height to definitely touch the horizontal line */}
                        <div className="relative h-48 w-px bg-black">
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
                                    <h3 className="text-xl md:text-2xl font-orbitron font-bold text-[#EAF0BD] mb-3 transition-colors leading-tight">
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
