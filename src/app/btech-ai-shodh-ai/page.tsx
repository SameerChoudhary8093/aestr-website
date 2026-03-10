'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SparkleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
    </svg>
);

const BtechAIShodhAI = () => {
    return (
        <main className="bg-[#0A1128] min-h-screen text-white font-roboto overflow-x-hidden selection:bg-[#FFD700] selection:text-black">

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-6 border-b border-white/5 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.05),transparent_50%)]">
                <div className="container mx-auto max-w-5xl space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FFD700] text-xs font-orbitron tracking-widest uppercase mb-4">
                        AESTR AI + SHODH AI (USA)
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold leading-tight">
                        This Isn’t College. <br />
                        <span className="text-[#FFD700] italic">It’s A 4-Year Internship.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                        AESTR AI + Shodh AI: The most advanced Tech degree in the world. Engineered by the architects of the future.
                    </p>
                    <div className="pt-6">
                        <button className="px-10 py-4 bg-[#FFD700] text-black font-orbitron font-bold rounded-lg border border-[#FFD700] transition-all hover:bg-transparent hover:text-[#FFD700] group shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-none">
                            Apply Now
                            <span className="ml-2 inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                        </button>
                    </div>
                </div>
                {/* Visual Backdrop */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
            </section>

            {/* Section 1: The Crisis */}
            <section className="py-24 relative overflow-hidden bg-black/20">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-start gap-12">
                        <div className="relative">
                            <span className="text-[12rem] font-orbitron font-black text-white/5 absolute -top-24 -left-12 leading-none select-none">1</span>
                            <div className="mt-8 space-y-6">
                                <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white leading-tight max-w-md">
                                    The Crisis Of <span className="text-[#FFD700]">Indian Engineering</span>
                                </h2>
                                <p className="text-lg text-white/50 max-w-lg leading-relaxed">
                                    Obsolete curriculums, theoretical learning, and a massive gap between graduation and employment. We aren't just changing the classroom; we're replacing it.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1 mt-12 md:mt-0">
                            {[1, 2].map((i) => (
                                <div key={i} className="glass p-6 rounded-2xl border border-white/10 bg-white/5 aspect-[4/5] relative group overflow-hidden shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:15px_15px] opacity-20" />
                                    <div className="absolute bottom-6 left-6 right-6 z-20 space-y-3">
                                        <div className="h-4 w-24 bg-red-600/80 rounded" />
                                        <div className="h-6 w-full bg-white/20 rounded" />
                                        <div className="h-4 w-3/4 bg-white/10 rounded" />
                                    </div>
                                    <span className="absolute top-6 right-6 text-[10px] font-orbitron font-bold text-white/30 uppercase tracking-widest transform rotate-90 origin-right transition-all group-hover:text-[#FFD700]">Article Archive Vol: 0{i}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Introducing */}
            <section className="py-32 relative overflow-hidden bg-gradient-to-br from-blue-900/10 to-transparent">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
                        <div className="relative w-full lg:w-1/2">
                            <span className="text-[12rem] font-orbitron font-black text-white/5 absolute -top-24 -right-12 leading-none select-none">2</span>
                            <div className="mt-8 space-y-8 animate-in fade-in slide-in-from-right duration-1000">
                                <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white leading-tight">
                                    Introducing <br />
                                    <span className="text-[#FFD700]">B.Tech AI with Shodh AI</span>
                                </h2>
                                <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
                                    Engineered in collaboration with <span className="text-white font-bold">Shodh AI (USA)</span>, this program bypasses traditional academic gatekeeping. We focus on producing senior AI engineers ready to lead global teams on Day 1.
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-full border border-[#FFD700]/30 flex items-center justify-center bg-[#FFD700]/5">
                                        <SparkleIcon className="w-6 h-6 text-[#FFD700]" />
                                    </div>
                                    <p className="text-sm font-orbitron font-bold text-white tracking-widest uppercase">Validated by Silicon Valley Standards</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 relative group">
                            <div className="aspect-[16/10] bg-black/40 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                                <Image
                                    src="/Other/lab-2.webp"
                                    alt="Student Lab"
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent opacity-60" />
                                <div className="absolute inset-0 border-[10px] border-[#0A1128] rounded-3xl" />
                                <div className="z-10 text-center animate-pulse">
                                    <span className="text-[10px] font-orbitron text-[#FFD700] uppercase tracking-[0.6em] font-bold">Real-World Application</span>
                                </div>
                            </div>
                            {/* Decorative frame */}
                            <div className="absolute -inset-4 border border-[#FFD700]/10 rounded-[2.5rem] -z-10 group-hover:border-[#FFD700]/30 transition-colors duration-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Heart of AESTR */}
            <section className="py-32 relative bg-black/40">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center mb-24 space-y-6">
                        <span className="text-8xl font-orbitron font-black text-white/5 select-none leading-none">3</span>
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white tracking-widest">
                            THE <span className="text-[#FFD700]">HEART</span> OF AESTR
                        </h2>
                        <div className="h-1 w-24 bg-[#FFD700] rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {[
                            { name: 'Foundation Lab', desc: 'Core CS & Logic Mastery.' },
                            { name: 'Embedded AI', desc: 'Silicon & Hardware Intelligence.' },
                            { name: 'Soft Brain Lab', desc: 'Neural Architecture Design.' },
                            { name: 'RISC-V Lab', desc: 'National Processor Engineering.' },
                            { name: 'Augmented Human', desc: 'Interface & Haptics Research.' }
                        ].map((lab, i) => (
                            <div key={i} className="glass p-8 rounded-2xl bg-white/5 border-t-2 border-[#FFD700]/20 hover:border-[#FFD700] transition-all duration-500 group flex flex-col justify-between h-[280px]">
                                <div className="space-y-4">
                                    <h4 className="text-lg font-orbitron font-bold text-white group-hover:text-[#FFD700] transition-colors">{lab.name}</h4>
                                    <p className="text-sm text-white/50 leading-relaxed font-light">{lab.desc}</p>
                                </div>
                                <div className="flex justify-between items-end">
                                    <span className="text-4xl font-black text-white/10">{i + 1}</span>
                                    <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <SparkleIcon className="w-4 h-4 text-[#FFD700]" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Jobs/Training */}
            <section className="py-32 relative overflow-hidden bg-[radial-gradient(circle_at_right,rgba(255,215,0,0.03),transparent_40%)]">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-start mb-20 space-y-6">
                        <span className="text-8xl font-orbitron font-black text-white/5 select-none leading-none">4</span>
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white leading-tight">
                            The Job We're <br /> <span className="text-[#FFD700]">Training You For.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'The Vision', desc: 'Transforming learners into industry leaders who architect the future of AI.' },
                            { title: 'The Focus', desc: 'Deep-dive projects that solve critical engineering problems globally.' },
                            { title: 'The Core Objective', desc: '100% employability with profiles validated by Tier-1 tech giants.' },
                            { title: 'The Methodology', desc: 'Immersive bootcamps, 1:1 mentorship from Stanford & Microsoft alumni.' }
                        ].map((item, i) => (
                            <div key={i} className="glass p-10 rounded-3xl bg-blue-900/10 border border-white/5 hover:border-[#FFD700]/40 transition-all duration-500 group relative">
                                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-[#FFD700] flex items-center justify-center text-black font-orbitron font-black shadow-lg">0{i + 1}</div>
                                <h3 className="text-xl font-orbitron font-bold text-white mb-6 group-hover:text-[#FFD700] transition-colors pt-4">{item.title}</h3>
                                <p className="text-base text-white/60 leading-relaxed font-light">{item.desc}</p>
                                <div className="mt-8 pt-8 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] font-orbitron text-[#FFD700] tracking-widest uppercase">Quality Standard 2030</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Graduation */}
            <section className="py-32 relative bg-gradient-to-t from-black to-transparent">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center mb-20 space-y-6">
                        <span className="text-8xl font-orbitron font-black text-white/5 select-none leading-none">5</span>
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white">
                            Graduate As A <br /> <span className="text-[#FFD700] italic">Senior Engineer.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative">
                        {/* Major */}
                        <div className="glass p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center min-h-[450px] transition-all hover:border-[#FFD700]/30">
                            <h3 className="text-lg font-orbitron font-bold text-[#FFD700] mb-10 text-center tracking-widest border-b border-[#FFD700]/20 pb-4 w-full uppercase">B. Tech. Majors:</h3>
                            <div className="flex flex-col gap-4 w-full">
                                {[
                                    'B. Tech. Artificial Intelligence & Machine Learning',
                                    'B. Tech. Data Science',
                                    'B. Tech. Cloud Engineering',
                                    'B. Tech. Software Engineering',
                                    'B. Tech. Cyber Security'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-blue-900/20 text-white/70 px-4 py-2.5 rounded-lg text-[13px] font-orbitron font-medium border border-white/5 hover:bg-blue-900/40 hover:text-[#FFD700] transition-all shadow-lg self-start">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Minor */}
                        <div className="glass p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center min-h-[450px] transition-all hover:border-[#FFD700]/30">
                            <h3 className="text-lg font-orbitron font-bold text-[#FFD700] mb-10 text-center tracking-widest border-b border-[#FFD700]/20 pb-4 w-full uppercase">With one Minor:</h3>
                            <div className="flex flex-wrap gap-2.5 justify-center">
                                {[
                                    'Robotics', 'Bio-Informatics',
                                    'Industry & Manufacturing',
                                    'Design', 'Fintech',
                                    'Nanotechnology', 'Smart Cities',
                                    'Chip & Semiconductor', 'Geoinformatics'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-blue-900/20 text-white/70 px-4 py-2.5 rounded-lg text-[12px] font-orbitron font-medium border border-white/5 hover:bg-blue-900/40 hover:text-[#FFD700] transition-all shadow-lg">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Labs */}
                        <div className="glass p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center min-h-[450px] transition-all hover:border-[#FFD700]/30">
                            <h3 className="text-lg font-orbitron font-bold text-[#FFD700] mb-10 text-center tracking-widest border-b border-[#FFD700]/20 pb-4 w-full uppercase">Labs:</h3>
                            <div className="flex flex-col gap-4 w-full">
                                {[
                                    'Foundation Model Lab',
                                    'Embodied Brain Lab',
                                    'Soft "Brain" Lab',
                                    'RISC-V Systems Lab',
                                    'Augmented Human Lab'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-blue-900/20 text-white/70 px-4 py-2.5 rounded-lg text-[13px] font-orbitron font-medium border border-white/5 hover:bg-blue-900/40 hover:text-[#FFD700] transition-all shadow-lg self-start">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center mb-16 px-4">
                        <div className="w-full max-w-4xl h-24 mb-4 hidden md:block">
                            <svg className="w-full h-full" viewBox="0 0 800 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Vertical lines from cards */}
                                <path d="M133 0 V40" stroke="#FFD700" strokeWidth="2" strokeOpacity="0.4" />
                                <path d="M400 0 V40" stroke="#FFD700" strokeWidth="2" strokeOpacity="0.4" />
                                <path d="M667 0 V40" stroke="#FFD700" strokeWidth="2" strokeOpacity="0.4" />
                                
                                {/* Horizontal connection */}
                                <path d="M133 40 H667" stroke="#FFD700" strokeWidth="2" strokeOpacity="0.4" />
                                
                                {/* Center down line */}
                                <path d="M400 40 V80" stroke="#FFD700" strokeWidth="2" strokeOpacity="0.4" />
                                
                                {/* Diamonds */}
                                <g fill="#FFD700" stroke="#FFD700" strokeWidth="1">
                                    <rect x="129" y="-4" width="8" height="8" transform="rotate(45 133 0)" />
                                    <rect x="396" y="-4" width="8" height="8" transform="rotate(45 400 0)" />
                                    <rect x="663" y="-4" width="8" height="8" transform="rotate(45 667 0)" />
                                    <rect x="396" y="36" width="8" height="8" transform="rotate(45 400 40)" />
                                    <rect x="396" y="76" width="8" height="8" transform="rotate(45 400 80)" />
                                </g>
                            </svg>
                        </div>
                        <div className="md:hidden w-px h-12 bg-[#FFD700]/40 mb-4" />
                        
                        <Link href="/" className="text-2xl md:text-5xl font-orbitron font-bold text-white border-b-4 border-white pb-2 hover:text-[#FFD700] hover:border-[#FFD700] transition-all text-center uppercase">
                            MAKE YOUR OWN DEGREE BY YOURSELF
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="relative py-24 bg-[#0A1128] overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 animate-in fade-in slide-in-from-bottom duration-700">
                    <div className="glass rounded-[3rem] p-8 md:p-16 border border-white/10 bg-gradient-to-br from-white/5 to-blue-900/30 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
                        {/* Background subtle texture */}
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] bg-[size:30px:30px]" />

                        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                            {/* Content */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-white leading-tight">
                                    Future Safe <br /> <span className="text-[#FFD700] italic">Professions.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
                                    Only at AESTR you are trained for professions that remain secure even in the wake of AI disruption. Start your journey with the pioneers of AI.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                                    <button className="btn-aestr flex items-center gap-3 group px-10 bg-[#FFD700] text-black hover:bg-transparent hover:text-[#FFD700] border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-none">
                                        Join The 1%
                                        <span className="group-hover:translate-x-1 transition-transform">↗</span>
                                    </button>
                                    <span className="text-xs font-orbitron text-white/30 tracking-[0.3em] uppercase">Limited Intake for 2026</span>
                                </div>
                            </div>

                            {/* Robot Image Placeholder */}
                            <div className="w-full lg:w-1/2 relative">
                                <div className="aspect-square w-full lg:w-[450px] mx-auto bg-black/40 rounded-full border border-[#FFD700]/10 relative group overflow-hidden flex items-center justify-center p-12 transition-all duration-700 hover:border-[#FFD700]/40">
                                    <Image
                                        src="/Other/Robo.webp"
                                        alt="AESTR AI Robotics"
                                        width={400}
                                        height={400}
                                        className="object-contain drop-shadow-[0_0_50px_rgba(255,215,0,0.1)] group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Radial pulse */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                {/* Floating elements */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/10 rounded-full blur-3xl" />
                                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#FFD700]/5 rounded-full blur-3xl" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Aesthetic footer signature */}
                <div className="mt-20 border-t border-white/5 py-12">
                    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
                        <p className="text-xs font-orbitron tracking-widest text-white/60">AESTR AI SPECIALIZATION PROGRAM © 2025</p>
                        <div className="flex gap-8">
                            <Link href="/" className="text-[10px] font-orbitron hover:text-[#FFD700] transition-colors uppercase tracking-widest leading-none">Privacy</Link>
                            <Link href="/" className="text-[10px] font-orbitron hover:text-[#FFD700] transition-colors uppercase tracking-widest leading-none">Terms</Link>
                            <Link href="/" className="text-[10px] font-orbitron hover:text-[#FFD700] transition-colors uppercase tracking-widest leading-none">Partnerships</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BtechAIShodhAI;
