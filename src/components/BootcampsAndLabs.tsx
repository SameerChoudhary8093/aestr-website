'use client';

import React from 'react';
import Image from 'next/image';

const SparkleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
    </svg>
);

const labs = [
    { name: 'Apple Ecosystem', image: '/Other/lab-5.webp', description: 'Master cutting-edge development inside the Apple environment. Work with iOS, macOS, and VisionOS architectures.', icon: 'apple' },
    { name: 'NVIDIA Pipeline', image: '/Other/lab-4.webp', description: 'Dive deep into GPU-accelerated computing and CUDA. Build the hardware intelligence that moves the modern data center.', icon: 'nvidia' },
    { name: 'RISC-V Lab', image: '/Other/lab-3.webp', description: 'Engineer the future with India\'s pioneering semiconductor technology. Design chips and low-level systems for the AI era.', icon: 'chip' },
    { name: 'Embodied Brain Lab', image: '/Other/lab-2.webp', description: 'Dive into Robotics, Exoskeletons, and ROS on Nvidia Jetson. Build physical intelligence that moves and interacts with the real world.', icon: 'robotics' }
];

const BootcampsAndLabs = () => {
    return (
        <div className="flex flex-col">
            {/* Section 4: Bootcamp, Bootcamp, Bootcamp */}
            <section className="relative py-24 bg-[#3b0764] overflow-hidden">
                {/* Ambient Background Glows */}
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

                <SparkleIcon className="absolute top-20 left-1/4 w-7 h-7 text-accent" />
                <SparkleIcon className="absolute bottom-40 right-10 w-10 h-10 text-accent" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="space-y-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center text-3xl font-orbitron font-bold text-accent bg-accent/5">
                                        4
                                    </div>
                                    <div className="space-y-6">
                                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white leading-tight flex items-start gap-3">
                                            <SparkleIcon className="w-8 h-8 text-accent mt-1" />
                                            <div>
                                                Bootcamp, Bootcamp, <span className="text-accent italic">Bootcamp.</span>
                                            </div>
                                        </h2>
                                        <div className="space-y-4">
                                            <p className="text-lg text-white font-semibold leading-relaxed">
                                                At AESTR, theory is just the beginning. We believe the best way to learn engineering is by building real things.
                                            </p>
                                            <p className="text-lg text-white/60 leading-relaxed">
                                                That's why every semester includes immersive AI bootcamps, right on campus — fully integrated into your curriculum.
                                            </p>
                                        </div>
                                        <button className="btn-aestr flex items-center gap-2 group">
                                            Read More
                                            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group cursor-pointer">
                                <div className="aspect-[16/10] bg-black/40 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_50px_rgba(204,255,0,0.1)] relative">
                                    <Image
                                        src="/Other/Bootcamp.webp"
                                        alt="Engineering Bootcamp"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="text-center space-y-4 z-10">
                                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl mx-auto flex items-center justify-center border border-white/20 text-accent group-hover:scale-110 transition-transform">
                                            <SparkleIcon className="w-10 h-10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2x2 Grid of cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: 'No compulsory written exams', desc: 'We don\'t test memory, we evaluate your ability to solve real problems. Your marks are based on live projects, products, and prototypes.' },
                                { title: 'Your Work, Your Grade', desc: 'Evaluation is based on your projects, problem-solving, and contributions - not just exam scores.' },
                                { title: 'Become a Senior Engineer, Faster', desc: 'Our practical methodology empowers you to develop senior-level engineering skills during your degree.' },
                                { title: 'Craft Your Degree', desc: 'Unprecedented flexibility allows you to shape your educational journey to match your passions and career aspirations.' }
                            ].map((card) => (
                                <div key={card.title} className="glass p-8 rounded-2xl group hover:border-accent/40 transition-all duration-300 relative overflow-hidden bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:20px_20px]">
                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors z-0" />
                                    <div className="relative z-10">
                                        <h4 className="text-xl font-orbitron font-bold text-white mb-4 group-hover:text-accent transition-colors flex items-center gap-2">
                                            <SparkleIcon className="w-5 h-5 text-accent" />
                                            {card.title}
                                        </h4>
                                        <p className="text-white/60 text-sm leading-relaxed">{card.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Innovation Labs Of 2030 */}
            <section className="relative py-32 bg-transparent overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="space-y-24">
                        <div className="space-y-12">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 rounded-full border border-blue-500/30 flex items-center justify-center text-3xl font-orbitron font-bold text-blue-400 bg-blue-500/5">
                                    5
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white flex items-center gap-4">
                                        <SparkleIcon className="w-10 h-10 text-accent" />
                                        Innovation Labs Of 2030
                                    </h2>
                                    <p className="text-lg text-white/50 max-w-3xl leading-relaxed">
                                        Learn from the architects of tomorrow's AI. AESTR is the brainchild of leading AI engineers dedicated to cultivating the next generation of tech innovators.
                                    </p>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { title: 'Exclusive Designs', desc: 'Co-created with insights from our work with DRDO and top-tier labs.' },
                                    { title: 'Become a Domain Champion', desc: 'Engage with at least three labs or achieve PhD-level expertise in one.' },
                                    { title: 'Expert-Guided Product Development', desc: 'Each lab has dedicated experts to help you transform your innovative ideas.' }
                                ].map((card) => (
                                    <div key={card.title} className="glass p-8 rounded-2xl border-white/5 group hover:bg-white/[0.08] transition-all duration-300">
                                        <h4 className="text-base font-orbitron font-bold text-accent mb-4 leading-tight group-hover:text-accent-secondary transition-colors">{card.title}</h4>
                                        <p className="text-sm text-white/50 leading-relaxed italic">{card.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Labs Alternating Grid */}
                        <div className="space-y-24">
                            {labs.map((lab, idx) => (
                                <div
                                    key={lab.name}
                                    className={`flex flex-col md:items-center gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                                >
                                    {/* Left/Right: Image Placeholder */}
                                    <div className="flex-1 relative group cursor-pointer w-full">
                                        <div className="aspect-[16/9] w-full bg-black/40 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_50px_rgba(204,255,0,0.05)] relative">
                                            <Image
                                                src={lab.image}
                                                alt={lab.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="absolute bottom-6 left-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                                <span className="text-[10px] font-orbitron uppercase tracking-[0.3em] font-bold text-accent bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-accent/20">Laboratory System {idx + 1}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right/Left: Text Content */}
                                    <div className="flex-1 space-y-6">
                                        <div className="space-y-2">
                                            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white group-hover:text-accent transition-colors flex items-center gap-3">
                                                <SparkleIcon className="w-6 h-6 text-accent group-hover:text-accent" />
                                                {lab.name}
                                            </h3>
                                            <p className="text-lg text-white/50 leading-relaxed">
                                                {lab.description}
                                            </p>
                                        </div>
                                        <button className="flex items-center gap-2 group text-accent font-orbitron uppercase tracking-widest text-xs font-bold hover:text-white transition-colors duration-300">
                                            Read More
                                            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BootcampsAndLabs;
