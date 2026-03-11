'use client';

import React from 'react';
import Image from 'next/image';

const careerData = [
    {
        title: 'Autonomous Systems Engineer',
        sub: '3x growth expected in deep-tech and climate-focused sectors.',
        major: 'AI/ML',
        minor: 'Robotics',
        lab: 'Embodied Brain lab',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'AI-Powered Cybersecurity Analyst',
        sub: 'An Ethical AI Engineer ensures AI systems are fair, transparent, and aligned with human values.',
        major: 'Cybersecurity',
        minor: '',
        lab: 'Soft Brain lab',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Bio-AI Specialist',
        sub: 'A Bio-AI Specialist uses AI to analyze and solve complex problems in biology and healthcare.',
        major: 'AI/ML',
        minor: 'bio-informatics',
        lab: 'Embodied Brain lab',
        image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Robotics AI Specialist',
        sub: 'Develops intelligent systems that enable robots to perceive, learn, and act autonomously.',
        major: 'AI/ML',
        minor: 'Robotics',
        lab: 'Embodied Brain lab',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Multi-Modal AI Model Trainer',
        sub: 'Builds AI models that learn from text, images, and more.',
        major: 'AI/ML',
        minor: 'Robotics',
        lab: 'Embodied Brain, Soft Brain Lab',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'AI Materials Innovation Engineer',
        sub: 'Applies AI to discover and optimize new materials faster.',
        major: 'AI/ML',
        minor: 'Nanotech',
        lab: 'Foundation Model Lab',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Fintech AI Engineer',
        sub: 'From fraud detection to smart loans—at the heart of Indias $150B fintech revolution.',
        major: 'Data Science',
        minor: 'Fintech',
        lab: 'Foundational Model Lab',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Cloud AI Infrastructure Architect',
        sub: '3x growth expected in deep-tech and climate-focused sectors.',
        major: 'Cloud Engineering',
        minor: 'Robotics',
        lab: 'Soft Brain Lab',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Edge AI Engineer',
        sub: '3x growth expected in deep-tech and climate-focused sectors.',
        major: 'Cloud Engineering',
        minor: 'Robotics',
        lab: 'Augmented Human Lab',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'AI Computer Systems Integrator',
        sub: '3x growth expected in deep-tech and climate-focused sectors.',
        major: 'AI/ML',
        minor: 'Chip & Semiconductor',
        lab: 'RISC V System Lab',
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80'
    },
];

const CareerCarousel = () => {
    // Duplicate the data to create a seamless loop
    const displayData = [...careerData, ...careerData];

    return (
        <section className="relative py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-6 mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground leading-tight uppercase tracking-tighter">
                            Future <span className="text-accent italic">Careers</span>
                        </h2>
                        <p className="text-lg text-foreground/50 max-w-2xl leading-relaxed font-semibold">
                            Engineered for high-impact roles powering the industries of 2030 and beyond.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-container {
                    display: flex;
                    width: max-content;
                    animation: marquee 80s linear infinite;
                }
                .marquee-container:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="relative">
                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="marquee-container flex gap-10 px-6">
                    {displayData.map((card, idx) => (
                        <div
                            key={`${card.title}-${idx}`}
                            className="w-[380px] glass rounded-[2.5rem] overflow-hidden group border-foreground/5 hover:border-accent/40 transition-all duration-700 hover:bg-accent/5"
                        >
                            {/* Card Image */}
                            <div className="h-56 bg-black/40 relative overflow-hidden flex items-center justify-center">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    unoptimized
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                                <div className="absolute top-6 right-6 animate-pulse z-10">
                                    <div className="w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_15px_rgba(216,246,2,0.8)]" />
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-8 space-y-6">
                                <h3 className="text-xl font-orbitron font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-foreground/50 leading-relaxed min-h-[60px] font-medium">
                                    {card.sub}
                                </p>

                                <div className="space-y-4 pt-4 border-t border-foreground/10">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-orbitron uppercase tracking-widest text-foreground/20 font-bold">Major</span>
                                        <span className="bg-accent/10 text-accent border border-accent/20 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                                            {card.major}
                                        </span>
                                    </div>

                                    {card.minor && (
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-orbitron uppercase tracking-widest text-foreground/20 font-bold">Minor</span>
                                            <span className="text-foreground/60 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider border border-foreground/10">
                                                {card.minor}
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-orbitron uppercase tracking-widest text-foreground/20 font-bold">Lab</span>
                                        <span className="text-accent/80 text-[10px] font-black uppercase tracking-widest">
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
