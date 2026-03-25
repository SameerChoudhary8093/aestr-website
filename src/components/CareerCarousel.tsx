'use client';

import React from 'react';
import Image from 'next/image';

const careerData = [
    {
        title: 'Autonomous Systems Engineer',
        sub: '3x growth expected in deep-tech and climate-focused sectors.',
        major: 'AI & Machine Learning',
        minor: 'Robotics',
        lab: 'Apple Ecosystem',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'AI Computer Systems Integrator',
        sub: '3x growth expected in deep-tech and climate-focused sectors',
        major: 'AI & Machine Learning',
        minor: 'Semiconductor & RISC-V',
        lab: 'NVIDIA Pipeline',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Edge AI Engineer',
        sub: '3x growth expected in deep-tech and climate-focused sectors',
        major: 'Software & Cloud Engineering',
        minor: 'Robotics',
        lab: 'RISC-V Lab',
        image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Cloud AI Infrastructure Architect',
        sub: '3x growth expected in deep-tech and climate-focused sectors',
        major: 'Software & Cloud Engineering',
        minor: 'Cloud Architecture',
        lab: 'Apple Ecosystem',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Fintech AI Engineer',
        sub: 'From fraud detection to smart loans—this role is at the heart of India’s $150B fintech revolution.',
        major: 'Data Engineering',
        minor: 'Fintech',
        lab: 'NVIDIA Pipeline',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'AI Materials Innovation Engineer',
        sub: 'An AI Materials Innovation Engineer applies AI to discover and optimize new materials faster.',
        major: 'AI & Machine Learning',
        minor: 'Nano Technology',
        lab: 'NVIDIA Pipeline',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Multi-Modal AI Model Trainer',
        sub: 'A Multi-Modal AI Model Trainer builds AI models that learn from text, images, and more.',
        major: 'AI & Machine Learning',
        minor: 'Robotics',
        lab: 'Embodied Brain Lab',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Robotics AI Specialist',
        sub: 'A Robotics AI Specialist develops intelligent systems that enable robots to perceive, learn, and act autonomously.',
        major: 'AI & Machine Learning',
        minor: 'Computer Vision',
        lab: 'Embodied Brain Lab',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Bio-AI Specialist',
        sub: 'A Bio-AI Specialist uses AI to analyze and solve complex problems in biology and healthcare.',
        major: 'AI & Machine Learning',
        minor: 'Bio-Informatics',
        lab: 'NVIDIA Pipeline',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'AI-Powered Cybersecurity Analyst',
        sub: 'An Ethical AI Engineer ensures AI systems are fair, transparent, and aligned with human values.',
        major: 'Cyber Security',
        minor: 'AI Ethics',
        lab: 'Apple Ecosystem',
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80'
    },
];

const CareerCarousel = () => {
    // Duplicate the data to create a seamless loop
    const displayData = [...careerData, ...careerData];

    return (
        <section className="relative pt-8 md:pt-16 pb-24 bg-[#5B1DD6] overflow-hidden">
            <div className="container-boxed mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4 text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-white leading-tight uppercase tracking-tighter">
                            Future <span className="text-accent italic">Careers</span>
                        </h2>
                        <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed font-semibold">
                            Engineered for high-impact roles powering the industries of 2030 and beyond.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 20px)); }
                }
                .marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 60s linear infinite;
                    gap: 40px;
                }
                /* Mobile optimization */
                @media (max-width: 768px) {
                    .marquee {
                        animation-duration: 40s;
                        gap: 24px;
                    }
                }
            `}</style>
            
            <div className="relative overflow-hidden group py-10">
                <div className="marquee px-4">
                    {displayData.map((card, idx) => (
                        <div
                            key={`${card.title}-${idx}`}
                            className="w-[300px] md:w-[380px] glass rounded-2xl md:rounded-[2.5rem] overflow-hidden group border-foreground/5 hover:border-accent/40 transition-all duration-700 hover:bg-accent/5 flex-shrink-0 flex flex-col h-[520px] md:h-[580px]"
                        >
                            {/* Card Image */}
                            <div className="h-48 md:h-56 bg-black/40 relative overflow-hidden flex items-center justify-center">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    unoptimized
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute top-4 right-4 md:top-6 md:right-6 animate-pulse z-10">
                                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-accent rounded-full shadow-[0_0_15px_rgba(216,246,2,0.8)]" />
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 md:p-8 flex flex-col flex-grow text-left bg-black">
                                <div className="flex-grow space-y-3 md:space-y-4">
                                    <h3 className="text-lg md:text-xl font-orbitron font-bold text-white group-hover:text-accent transition-colors duration-300 line-clamp-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-white/80 leading-relaxed font-medium line-clamp-3">
                                        {card.sub}
                                    </p>
                                </div>

                                <div className="space-y-3 md:space-y-4 pt-4 border-t border-white/20 h-[110px] md:h-[130px]">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[8px] md:text-[10px] font-orbitron uppercase tracking-widest text-white/90 font-bold">Major</span>
                                        <span className="bg-accent text-black border border-accent/20 rounded-full px-2.5 py-1 text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                                            {card.major}
                                        </span>
                                    </div>

                                    {card.minor && (
                                        <div className="flex items-center justify-between">
                                            <span className="text-[8px] md:text-[10px] font-orbitron uppercase tracking-widest text-white/90 font-bold">Minor</span>
                                            <span className="text-white bg-white/10 rounded-full px-2.5 py-1 text-[8px] md:text-[10px] font-bold uppercase tracking-wider border border-white/20">
                                                {card.minor}
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between">
                                        <span className="text-[8px] md:text-[10px] font-orbitron uppercase tracking-widest text-white/90 font-bold">Lab</span>
                                        <span className="text-accent text-[8px] md:text-[10px] font-black uppercase tracking-widest text-right max-w-[60%] line-clamp-1">
                                            {card.lab}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareerCarousel;
