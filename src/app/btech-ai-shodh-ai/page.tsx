'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const BtechAIShodhAI = () => {
    return (
        <main className="bg-background min-h-screen text-foreground font-orbitron overflow-x-hidden selection:bg-accent selection:text-black">

            {/* Hero Section */}
            <section className="relative pt-48 pb-24 lg:pt-64 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-6 border-b border-foreground/5 bg-[radial-gradient(circle_at_top,rgba(216,246,2,0.05),transparent_50%)]">
                <div className="container mx-auto max-w-5xl space-y-10 animate-in fade-in slide-in-from-bottom duration-1000 relative z-10">
                    <div className="inline-block px-6 py-2 rounded-full bg-accent/5 border border-accent/20 text-accent text-[10px] font-black tracking-[0.3em] uppercase mb-4">
                        AESTR AI + SHODH AI (USA)
                    </div>
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[0.9] uppercase tracking-tighter">
                        This Isn’t College. <br />
                        <span className="text-accent italic">It’s A 4-Year Internship.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/50 max-w-2xl mx-auto leading-relaxed font-semibold">
                        AESTR AI + Shodh AI: The most advanced Tech degree in the world. Engineered by the architects of the future.
                    </p>
                    <div className="pt-6">
                        <button className="btn-aestr !px-12 !py-5 bg-accent text-black font-black uppercase tracking-widest shadow-[0_0_50px_rgba(216,246,2,0.2)] hover:shadow-none transition-all">
                            Apply for 2026 Intake
                            <span className="ml-3 inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                        </button>
                    </div>
                </div>
                {/* Visual Backdrop */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[160px] pointer-events-none z-0 rotate-12" />
            </section>

            {/* Section 1: The Crisis */}
            <section className="py-32 relative overflow-hidden bg-background-alt/30">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-20">
                        <div className="relative w-full md:w-1/2">
                            <span className="text-[15rem] font-black text-foreground/5 absolute -top-32 -left-20 leading-none select-none">01</span>
                            <div className="relative z-10 space-y-8">
                                <h2 className="text-4xl md:text-6xl font-black text-foreground leading-tight uppercase tracking-tighter">
                                    The Crisis Of <br /><span className="text-accent">Indian Engineering.</span>
                                </h2>
                                <p className="text-xl text-foreground/60 leading-relaxed font-medium">
                                    Obsolete curriculums, theoretical learning, and a massive gap between graduation and employment. We aren't just changing the classroom; we're replacing it.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full md:w-1/2">
                            {[1, 2].map((i) => (
                                <div key={i} className="glass p-1 rounded-[2.5rem] border border-foreground/5 bg-foreground/5 aspect-[4/5] relative group overflow-hidden">
                                    <div className="h-full w-full bg-black/40 rounded-[2.3rem] overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-80" />
                                        <div className="absolute bottom-10 left-8 right-8 z-20 space-y-4">
                                            <div className="h-1.5 w-16 bg-accent rounded-full" />
                                            <div className="h-4 w-full bg-foreground/10 rounded-full" />
                                            <div className="h-4 w-3/4 bg-foreground/5 rounded-full" />
                                        </div>
                                        <span className="absolute top-10 right-10 text-[9px] font-black text-foreground/20 uppercase tracking-[0.4em] transform rotate-90 origin-right transition-all group-hover:text-accent">ARCHIVE VOL: 0{i}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Introducing */}
            <section className="py-40 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
                        <div className="relative w-full lg:w-1/2">
                            <span className="text-[15rem] font-black text-foreground/5 absolute -top-32 -right-20 leading-none select-none">02</span>
                            <div className="relative z-10 space-y-10">
                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight uppercase tracking-tighter">
                                    Introducing <br />
                                    <span className="text-accent">B.Tech AI with <br />Shodh AI.</span>
                                </h2>
                                <p className="text-xl text-foreground/60 leading-relaxed font-semibold">
                                    Engineered in collaboration with <span className="text-foreground font-black border-b-2 border-accent/30">Shodh AI (USA)</span>, this program bypasses traditional academic gatekeeping. We focus on producing senior AI engineers ready to lead global teams on Day 1.
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-1 px-0 bg-accent rounded-full" />
                                    <p className="text-xs font-black text-foreground uppercase tracking-[0.3em]">Validated by Silicon Valley Standards</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 relative group">
                            <div className="aspect-[4/3] bg-black/40 rounded-[3rem] border border-foreground/10 flex items-center justify-center overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:border-accent/30">
                                <Image
                                    src="/Other/lab-2.webp"
                                    alt="Student Lab"
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                                <div className="absolute inset-8 border border-foreground/5 rounded-[2.5rem] pointer-events-none" />
                                <div className="absolute bottom-12 left-12 z-20">
                                    <span className="text-[10px] font-black text-accent uppercase tracking-[0.5em] bg-black/60 px-6 py-3 rounded-full backdrop-blur-md border border-accent/20">System Live</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Heart of AESTR */}
            <section className="py-40 relative bg-background-alt/40 border-y border-foreground/5">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center mb-32 space-y-8">
                        <span className="text-9xl font-black text-foreground/5 select-none leading-none">03</span>
                        <h2 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter">
                            THE <span className="text-accent italic">HEART</span> OF AESTR
                        </h2>
                        <div className="h-2 w-32 bg-accent rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                        {[
                            { name: 'Foundation Lab', desc: 'Core CS & Logic Mastery. Building the base for complex thinking.' },
                            { name: 'Embedded AI', desc: 'Silicon & Hardware Intelligence. Bridge between code and matter.' },
                            { name: 'Soft Brain Lab', desc: 'Neural Architecture Design. The essence of generative systems.' },
                            { name: 'RISC-V Lab', desc: 'National Processor Engineering. Strategic chip design for India.' },
                            { name: 'Augmented Human', desc: 'Interface & Haptics Research. Redefining human-machine interaction.' }
                        ].map((lab, i) => (
                            <div key={i} className="glass p-10 rounded-3xl bg-foreground/5 border-t-4 border-accent/20 hover:border-accent transition-all duration-700 group hover:bg-accent/5 flex flex-col justify-between h-[320px]">
                                <div className="space-y-6">
                                    <h4 className="text-xl font-black text-foreground group-hover:text-accent transition-colors uppercase tracking-tight">{lab.name}</h4>
                                    <p className="text-sm text-foreground/50 leading-relaxed font-bold">{lab.desc}</p>
                                </div>
                                <div className="flex justify-between items-end">
                                    <span className="text-5xl font-black text-foreground/5 group-hover:text-accent/10 transition-colors">0{i + 1}</span>
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-accent text-sm">→</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Jobs/Training */}
            <section className="py-40 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-start mb-24 space-y-8">
                        <span className="text-9xl font-black text-foreground/5 select-none leading-none">04</span>
                        <h2 className="text-5xl md:text-7xl font-black text-foreground leading-[0.8] uppercase tracking-tighter">
                            The Job We're <br /> <span className="text-accent">Training You For.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { title: 'The Vision', desc: 'Transforming learners into industry leaders who architect the future of AI paradigms.' },
                            { title: 'The Focus', desc: 'Deep-dive projects that solve critical engineering problems globally across sectors.' },
                            { title: 'The Core Objective', desc: '100% employability with profiles validated by Tier-1 tech giants in Silicon Valley.' },
                            { title: 'The Methodology', desc: 'Immersive bootcamps, 1:1 mentorship from Stanford & Microsoft Research alumni.' }
                        ].map((item, i) => (
                            <div key={i} className="glass p-12 rounded-[2.5rem] bg-foreground/5 border border-foreground/5 hover:border-accent/40 transition-all duration-700 group relative">
                                <div className="absolute -top-6 -left-6 w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-black font-black text-xl shadow-[0_0_30px_rgba(216,246,2,0.3)]">0{i + 1}</div>
                                <h3 className="text-2xl font-black text-foreground mb-8 group-hover:text-accent transition-colors pt-6 uppercase tracking-tighter">{item.title}</h3>
                                <p className="text-base text-foreground/60 leading-relaxed font-semibold">{item.desc}</p>
                                <div className="mt-10 pt-10 border-t border-foreground/10 opacity-30 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] font-black text-accent tracking-[0.4em] uppercase">SYSTEMS 2030 CERTIFIED</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Graduation */}
            <section className="py-40 relative bg-background-alt/20">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center mb-32 space-y-10">
                        <span className="text-9xl font-black text-foreground/5 select-none leading-none">05</span>
                        <h2 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter">
                            Graduate As A <br /> <span className="text-accent italic">Senior Engineer.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32 relative">
                        {/* Major */}
                        <div className="glass p-10 rounded-[2.5rem] bg-foreground/5 border border-foreground/10 flex flex-col items-center min-h-[550px] transition-all hover:border-accent/30 group">
                            <h3 className="text-xl font-black text-accent mb-12 text-center tracking-[0.2em] border-b border-accent/20 pb-6 w-full uppercase">B. Tech. Majors</h3>
                            <div className="flex flex-col gap-5 w-full">
                                {[
                                    'Artificial Intelligence & ML',
                                    'Data Science',
                                    'Cloud Engineering',
                                    'Software Engineering',
                                    'Cyber Security'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-background-alt p-5 rounded-2xl text-[14px] font-black text-foreground/70 border border-foreground/5 hover:bg-accent/10 hover:text-accent transition-all uppercase tracking-widest shadow-xl flex items-center justify-between group/item">
                                        {item}
                                        <span className="opacity-0 group-hover/item:opacity-100 transition-opacity">+</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Minor */}
                        <div className="glass p-10 rounded-[2.5rem] bg-foreground/5 border border-foreground/10 flex flex-col items-center min-h-[550px] transition-all hover:border-accent/30">
                            <h3 className="text-xl font-black text-accent mb-12 text-center tracking-[0.2em] border-b border-accent/20 pb-6 w-full uppercase">With one Minor</h3>
                            <div className="flex flex-wrap gap-3.5 justify-center">
                                {[
                                    'Robotics', 'Bio-Informatics',
                                    'Manufacturing',
                                    'Design', 'Fintech',
                                    'Nanotechnology', 'Smart Cities',
                                    'Semiconductor', 'Geoinformatics'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-background-alt px-5 py-3 rounded-xl text-[12px] font-black text-foreground/70 border border-foreground/5 hover:bg-black hover:text-accent hover:border-accent/30 transition-all uppercase tracking-widest shadow-lg">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Labs */}
                        <div className="glass p-10 rounded-[2.5rem] bg-foreground/5 border border-foreground/10 flex flex-col items-center min-h-[550px] transition-all hover:border-accent/30">
                            <h3 className="text-xl font-black text-accent mb-12 text-center tracking-[0.2em] border-b border-accent/20 pb-6 w-full uppercase">Required Labs</h3>
                            <div className="flex flex-col gap-5 w-full">
                                {[
                                    'Foundation Model Lab',
                                    'Embodied Brain Lab',
                                    'Soft "Brain" Lab',
                                    'RISC-V Systems Lab',
                                    'Augmented Human Lab'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-background-alt p-5 rounded-2xl text-[14px] font-black text-foreground/70 border border-foreground/5 hover:bg-accent/10 hover:text-accent transition-all uppercase tracking-widest shadow-xl flex items-center justify-between">
                                        {item}
                                        <span className="w-2 h-2 bg-accent/40 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center mb-16 px-4">
                        <div className="w-full max-w-5xl h-32 mb-10 hidden md:block">
                            <svg className="w-full h-full" viewBox="0 0 1000 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M166 0 V50 H834 V0" stroke="var(--accent)" strokeWidth="3" strokeOpacity="0.4" />
                                <path d="M500 50 V100" stroke="var(--accent)" strokeWidth="3" strokeOpacity="0.4" />
                                <g fill="var(--accent)" filter="drop-shadow(0 0 10px rgba(216,246,2,0.4))">
                                    <circle cx="166" cy="0" r="6" />
                                    <circle cx="500" cy="0" r="6" />
                                    <circle cx="834" cy="0" r="6" />
                                    <circle cx="500" cy="50" r="6" />
                                    <circle cx="500" cy="100" r="10" />
                                </g>
                            </svg>
                        </div>
                        <div className="md:hidden w-px h-16 bg-accent/40 mb-8" />
                        
                        <Link href="/" className="text-3xl md:text-6xl font-black text-foreground border-b-[8px] border-accent pb-6 hover:text-accent transition-all text-center uppercase tracking-tighter max-w-4xl leading-none">
                            MAKE YOUR OWN DEGREE BY YOURSELF
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="relative py-40 bg-background overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="glass rounded-[4rem] p-12 md:p-24 border border-foreground/5 bg-gradient-to-br from-foreground/5 via-transparent to-transparent shadow-[0_0_100px_rgba(0,0,0,0.5)] relative overflow-hidden backdrop-blur-3xl">
                        <div className="absolute inset-0 bg-[radial-gradient(var(--accent)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03]" />

                        <div className="flex flex-col lg:flex-row items-center gap-24 relative z-10">
                            {/* Content */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-10 text-center lg:text-left">
                                <h2 className="text-4xl md:text-7xl font-black text-foreground leading-[0.8] uppercase tracking-tighter">
                                    Future Safe <br /> <span className="text-accent italic">Professions.</span>
                                </h2>
                                <p className="text-xl text-foreground/50 leading-relaxed font-bold">
                                    Only at AESTR you are trained for professions that remain secure even in the wake of AI disruption. Start your journey with the pioneers of AI.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-8 pt-6">
                                    <button className="btn-aestr !px-16 !py-6 bg-accent text-black font-black uppercase tracking-[0.2em] shadow-[0_0_50px_rgba(216,246,2,0.2)] hover:shadow-none">
                                        Join The 1%
                                        <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
                                    </button>
                                    <span className="text-[10px] font-black text-foreground/20 tracking-[0.5em] uppercase">Limited Intake for 2026</span>
                                </div>
                            </div>

                            {/* Robot Image */}
                            <div className="w-full lg:w-1/2 relative">
                                <div className="aspect-square w-full lg:w-[500px] mx-auto bg-black/40 rounded-full border border-foreground/5 relative group overflow-hidden flex items-center justify-center p-16 transition-all duration-1000 hover:border-accent/40">
                                    <Image
                                        src="/Other/Robo.webp"
                                        alt="AESTR AI Robotics"
                                        width={400}
                                        height={400}
                                        className="object-contain filter brightness-125 group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,246,2,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-[100px]" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-[100px]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Aesthetic footer signature */}
                <div className="mt-40 border-t border-foreground/5 py-16">
                    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30">
                        <p className="text-[10px] font-black tracking-[0.5em] text-foreground uppercase">AESTR AI SPECIALIZATION PROGRAM © 2026</p>
                        <div className="flex gap-12">
                            <Link href="/" className="text-[9px] font-black hover:text-accent transition-colors uppercase tracking-[0.4em]">Privacy</Link>
                            <Link href="/" className="text-[9px] font-black hover:text-accent transition-colors uppercase tracking-[0.4em]">Terms</Link>
                            <Link href="/" className="text-[9px] font-black hover:text-accent transition-colors uppercase tracking-[0.4em]">Partnerships</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BtechAIShodhAI;
