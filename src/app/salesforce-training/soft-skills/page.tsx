import React from 'react';
import Navbar from '@/components/Navbar';

export default function SoftSkillsPage() {
    return (
        <main className="min-h-screen bg-black relative flex flex-col font-sans selection:bg-accent selection:text-black">
            <Navbar />
            
            {/* Header Section (Black) */}
            <section className="pt-40 lg:pt-52 pb-24 px-6 md:px-12 lg:px-24 bg-black">
                <div className="max-w-[1400px] mx-auto w-full">
                    <p className="text-accent font-orbitron text-[10px] font-bold tracking-[0.3em] uppercase mb-4 sm:mb-6">Section 2</p>
                    <h1 className="font-orbitron font-black text-4xl sm:text-6xl lg:text-7xl xl:text-[90px] leading-[0.95] capitalize tracking-[-0.02em] flex flex-col gap-1 lg:gap-2">
                        <span className="text-white">Soft Skill &</span>
                        <span className="text-accent drop-shadow-[0_0_20px_rgba(216,246,2,0.3)]">Interview Prep</span>
                    </h1>
                </div>
            </section>

            {/* 1. Introduction (Neon) */}
            <section className="bg-accent text-black py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1200px] mx-auto w-full">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="w-full lg:w-3/5">
                            <h2 className="font-orbitron font-black text-3xl lg:text-4xl uppercase tracking-widest mb-6 border-b-2 border-black pb-4 inline-block">1. Introduction</h2>
                            <p className="text-black/80 font-semibold text-sm md:text-base leading-relaxed">
                                The Gyan Vihar training module was an immersive professional development program designed to bridge the gap between academic theory and corporate reality. The mission was to transform students into high-impact candidates through rigorous practice, psychological conditioning, and refined communication strategies.
                            </p>
                        </div>
                        <div className="w-full lg:w-2/5 aspect-[16/10] rounded-2xl overflow-hidden border-4 border-black shadow-[10px_10px_0px_#000] group">
                            <img src="/saleforce-training/image-19.jpeg" alt="Soft Skills Workshop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Topics Covered (Purple) */}
            <section className="bg-purple text-white py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1200px] mx-auto w-full">
                    <h2 className="font-orbitron font-black text-3xl lg:text-5xl uppercase tracking-widest text-accent mb-8">
                        2. Topics Covered
                    </h2>
                    <p className="text-white/80 mb-12 text-sm md:text-base tracking-wide border-l-4 border-accent pl-6 font-bold">
                        The curriculum was divided into three core pillars: <span className="text-accent">Articulation</span>, <span className="text-accent">Strategy</span>, and <span className="text-accent">Psychology</span>.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                        <div className="aspect-video rounded-2xl overflow-hidden border-2 border-accent group relative">
                            <img src="/saleforce-training/image-20.jpeg" alt="Strategic Thinking" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                            <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-6 border-l-4 border-accent">
                                <p className="text-accent font-orbitron font-black text-[10px] uppercase tracking-widest mb-1">Pillar 01</p>
                                <h4 className="text-white font-orbitron font-black text-lg uppercase">Behavioral Strategy</h4>
                            </div>
                        </div>
                        <div className="aspect-video rounded-2xl overflow-hidden border-2 border-accent group relative">
                            <img src="/saleforce-training/image-22.jpeg" alt="Psychological Prep" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                            <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-6 border-l-4 border-accent">
                                <p className="text-accent font-orbitron font-black text-[10px] uppercase tracking-widest mb-1">Pillar 02</p>
                                <h4 className="text-white font-orbitron font-black text-lg uppercase">Conditioning</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-8">
                        {[
                            { title: "Foundation", desc: "Mastering the Process & Types of Communication; Effective Articulation and Active Listening." },
                            { title: "Intro Lab", desc: "A high-intensity 'Stand-Speak-Refine-Repeat' cycle focused on identifying recruiter selection triggers." },
                            { title: "STAR Method", desc: "Real-time implementation of the Situation, Task, Action, Result framework for structured storytelling." },
                            { title: "GD Strategy", desc: "Group Discussion (GD) Structure, Entry, Exit, and live topic practice sessions." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-black/20 border-l-4 border-accent p-8 hover:bg-black/40 transition-colors">
                                <h3 className="font-orbitron font-black text-xl text-accent tracking-widest mb-2 uppercase">{item.title}</h3>
                                <p className="text-white/80 text-sm md:text-base leading-relaxed font-semibold">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Session Glimpse (Neon) */}
            <section className="bg-accent text-black py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1200px] mx-auto w-full">
                    <div className="flex items-center gap-4 mb-16">
                        <h2 className="font-orbitron font-black text-3xl lg:text-5xl uppercase tracking-widest">Session Glimpse</h2>
                        <div className="flex-grow h-2 bg-black"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { src: "image-19.jpeg", alt: "Glimpse 1" },
                            { src: "image-20.jpeg", alt: "Glimpse 2" },
                            { src: "image-22.jpeg", alt: "Glimpse 3" }
                        ].map((img, i) => (
                            <div key={i} className="aspect-[4/5] bg-black border-4 border-black rounded-2xl overflow-hidden group shadow-[15px_15px_0px_#000]">
                                <img src={`/saleforce-training/${img.src}`} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Student Improvements (Purple) */}
            <section className="bg-purple text-white py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1200px] mx-auto w-full">
                    <h2 className="font-orbitron font-black text-3xl lg:text-4xl uppercase tracking-widest mb-12 drop-shadow-md">3. Student Improvements</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        {[
                            { label: "Structured Narrative", text: "Students transitioned from rambling answers to concise, STAR-based responses." },
                            { label: "Confidence", text: "Marked increase in vocal projection and eye contact noted during simulations." },
                            { label: "Resilience", text: "Improved composure during 'Rapid Fire' pressure tests, moving away from panic responses." },
                            { label: "Professionalism", text: "Significant improvement in grooming standards and body language alignment." },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-black/30 p-8 border-r-4 border-accent text-right">
                                <h4 className="font-orbitron font-black text-accent tracking-widest uppercase mb-4 text-sm">{item.label}</h4>
                                <p className="text-white font-bold text-xs md:text-sm leading-relaxed uppercase">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="h-[300px] rounded-2xl overflow-hidden border-4 border-accent shadow-[15px_15px_0px_rgba(216,246,2,0.1)]">
                            <img src="/saleforce-training/image-30.jpeg" alt="Student Progress" className="w-full h-full object-cover" />
                        </div>
                        <div className="h-[300px] rounded-2xl overflow-hidden border-4 border-accent shadow-[15px_15px_0px_rgba(216,246,2,0.1)]">
                            <img src="/saleforce-training/image-28.jpeg" alt="Presentation Workshop" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion (Neon) */}
            <section className="bg-accent text-black py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1000px] mx-auto w-full text-center">
                    <h2 className="font-orbitron font-black text-4xl lg:text-5xl uppercase tracking-tighter mb-8 italic border-b-8 border-black pb-4 inline-block">Conclusion</h2>
                    <p className="text-black font-black text-xl md:text-2xl uppercase tracking-widest leading-none mb-12">
                        The program successfully prepared a cohort of students who are now <span className="bg-black text-accent px-4 py-1 inline-block rotate-1">"Industry Ready"</span>
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { val: "95%", lab: "Pitch Success" },
                            { val: "100%", lab: "GD Entry Ready" },
                            { val: "A+", lab: "Recruiter Align" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-black p-8 border-4 border-black group hover:shadow-[10px_10px_0px_rgba(255,255,255,0.2)] transition-all">
                                <p className="text-accent font-black text-4xl mb-2">{stat.val}</p>
                                <p className="text-white font-orbitron text-[10px] tracking-[0.3em] uppercase">{stat.lab}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="bg-black py-12 text-center border-t border-white/10">
                <p className="text-white/30 font-orbitron text-[10px] tracking-widest uppercase">© 2026 Skill Horizon / Soft Skills Portfolio</p>
            </footer>
        </main>
    );
}
