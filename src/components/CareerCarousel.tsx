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
        <section className="relative py-20 bg-[#3b0764] overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white leading-tight">
                            Future <span className="text-accent underline decoration-accent/20 underline-offset-8 italic">Careers</span>
                        </h2>
                        <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
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
                    animation: marquee 60s linear infinite;
                }
                .marquee-container:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="relative">
                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="marquee-container flex gap-6 px-6">
                    {displayData.map((card, idx) => (
                        <div
                            key={`${card.title}-${idx}`}
                            className="w-[350px] glass rounded-3xl overflow-hidden group hover:border-accent/30 transition-all duration-500"
                        >
                            {/* Card Image */}
                            <div className="h-48 bg-blue-950/40 relative overflow-hidden flex items-center justify-center">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    unoptimized
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent" />
                                <div className="absolute top-4 right-4 animate-pulse z-10">
                                    <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 space-y-4">
                                <h3 className="text-lg font-orbitron font-bold text-white group-hover:text-accent transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-white/50 leading-relaxed min-h-[60px]">
                                    {card.sub}
                                </p>

                                <div className="space-y-3 pt-2">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-orbitron uppercase tracking-widest text-white/20">Major:</span>
                                        <span className="bg-blue-900/40 text-blue-200 border border-blue-700/50 rounded-md px-2 py-1 text-[10px] leading-none font-medium">
                                            {card.major}
                                        </span>
                                    </div>

                                    {card.minor && (
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] font-orbitron uppercase tracking-widest text-white/20">Minor:</span>
                                            <span className="bg-blue-900/20 text-blue-300/60 border border-blue-700/30 rounded-md px-2 py-1 text-[10px] leading-none">
                                                {card.minor}
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex items-start gap-3">
                                        <span className="text-[10px] font-orbitron uppercase tracking-widest text-white/20 mt-1.5">Lab:</span>
                                        <span className="bg-blue-900/10 text-accent/60 border border-accent/10 rounded-md px-2 py-1 text-[10px] leading-tight flex-1">
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
