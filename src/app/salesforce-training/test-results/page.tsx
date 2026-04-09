import React from 'react';
import Navbar from '@/components/Navbar';

export default function TestResultsPage() {
    return (
        <main className="min-h-screen bg-black relative flex flex-col font-sans selection:bg-accent selection:text-black">
            <Navbar />
            
            {/* Header Section (Black) */}
            <section className="pt-40 lg:pt-52 pb-24 px-6 md:px-12 lg:px-24 bg-black">
                <div className="max-w-[1400px] mx-auto w-full">
                    <p className="text-accent font-orbitron text-[10px] font-bold tracking-[0.3em] uppercase mb-4 sm:mb-6">Section 4</p>
                    <div className="flex flex-col lg:flex-row gap-12 items-end justify-between">
                        <h1 className="font-orbitron font-black text-4xl sm:text-6xl lg:text-7xl xl:text-[90px] leading-[0.95] capitalize tracking-[-0.02em] flex flex-col gap-1 lg:gap-2">
                            <span className="text-white">Batch</span>
                            <span className="text-accent drop-shadow-[0_0_20px_rgba(216,246,2,0.3)]">Performance</span>
                        </h1>
                        <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm max-w-[400px]">
                            <p className="text-white font-bold text-sm leading-relaxed opacity-70 italic">"The true measure of a developer isn't just their logic, but their consistency."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1. Assessment Metrics (Neon) */}
            <section className="bg-accent text-black py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1200px] mx-auto w-full">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="font-orbitron font-black text-3xl lg:text-4xl uppercase tracking-widest mb-6 border-b-2 border-black pb-4 inline-block">Report Introduction</h2>
                            <p className="text-black font-semibold text-sm md:text-base leading-relaxed mb-10">
                                This assessment was conducted to evaluate each trainee's grasp of Salesforce Administration, Development (Apex), and LWC concepts. The results reflect both theoretical knowledge and practical debugging capabilities.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-black p-6 border-2 border-black">
                                    <p className="text-accent font-black text-4xl mb-1">31/31</p>
                                    <p className="text-white font-orbitron text-[8px] uppercase tracking-widest font-bold">Appearances</p>
                                </div>
                                <div className="bg-black p-6 border-2 border-black">
                                    <p className="text-accent font-black text-4xl mb-1">100%</p>
                                    <p className="text-white font-orbitron text-[8px] uppercase tracking-widest font-bold">Completion Rate</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 aspect-video rounded-3xl overflow-hidden border-8 border-black shadow-[20px_20px_0px_#222] group">
                            <img src="/saleforce-training/image-8.jpg" alt="Achievement Group" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Score Summary (Purple) */}
            <section className="bg-purple text-white py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1200px] mx-auto w-full">
                    <h2 className="font-orbitron font-black text-3xl lg:text-5xl uppercase tracking-widest mb-16 text-center text-accent">Performance Metrics</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="bg-black/30 border-t-8 border-accent p-12 flex flex-col justify-center">
                            <p className="text-accent font-orbitron font-bold text-xs uppercase tracking-[0.3em] mb-4">Batch Average</p>
                            <h3 className="font-black text-8xl md:text-9xl leading-none tracking-tighter mb-4 italic">87.21%</h3>
                            <div className="w-full h-4 bg-white/10 relative overflow-hidden">
                                <div className="absolute top-0 left-0 h-full bg-accent" style={{ width: '87.21%' }}></div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 leading-none">
                            <div className="bg-black/40 border border-white/10 p-8 flex flex-col items-center justify-center text-center">
                                <p className="text-accent font-black text-5xl mb-2">98.0%</p>
                                <p className="text-white/40 font-orbitron text-[9px] uppercase tracking-widest">Highest Score</p>
                            </div>
                            <div className="bg-black/40 border border-white/10 p-8 flex flex-col items-center justify-center text-center">
                                <p className="text-accent font-black text-5xl mb-2">74.0%</p>
                                <p className="text-white/40 font-orbitron text-[9px] uppercase tracking-widest">Entry Benchmark</p>
                            </div>
                            <div className="bg-black/40 border border-white/10 p-8 col-span-1 sm:col-span-2 text-center">
                                <h4 className="font-orbitron font-black text-accent text-sm mb-4 uppercase tracking-widest">Graduation Stats</h4>
                                <div className="flex justify-around items-center">
                                    <div>
                                        <p className="text-white font-black text-3xl mb-1">28</p>
                                        <p className="text-white/30 text-[8px] uppercase tracking-widest">Passed Final</p>
                                    </div>
                                    <div className="h-10 w-[1px] bg-white/10"></div>
                                    <div>
                                        <p className="text-white font-black text-3xl mb-1">03</p>
                                        <p className="text-white/30 text-[8px] uppercase tracking-widest">Conditional</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certification Glimpse (Neon) */}
            <section className="bg-accent text-black py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1200px] mx-auto w-full">
                    <div className="flex items-center gap-4 mb-16">
                        <h2 className="font-orbitron font-black text-3xl lg:text-5xl uppercase tracking-widest">Certification Glimpse</h2>
                        <div className="flex-grow h-2 bg-black"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { src: "image-4.jpg", alt: "Ceremony 1" },
                            { src: "image-5.jpg", alt: "Achievement 2" },
                            { src: "image-6.jpg", alt: "Graduation 3" }
                        ].map((img, i) => (
                            <div key={i} className="aspect-[4/3] bg-black border-4 border-black rounded-2xl overflow-hidden group shadow-[15px_15px_0px_#000]">
                                <img src={`/saleforce-training/${img.src}`} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Conclusion (Purple) */}
            <section className="bg-purple text-white py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1200px] mx-auto w-full">
                    <div className="bg-black/40 border border-white/10 p-12 md:p-20 relative overflow-hidden rounded-[3rem] shadow-2xl">
                        <div className="relative z-10">
                            <h2 className="font-orbitron font-black text-4xl lg:text-6xl uppercase tracking-tighter mb-10 text-accent italic">The Benchmark</h2>
                            <p className="text-white font-bold text-lg md:text-xl leading-relaxed mb-12 uppercase tracking-wide opacity-90">
                                The test results indicate that the training program has successfully built a solid foundation in Salesforce fundamentals among the participants. 
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
                                <div>
                                    <h4 className="text-accent font-orbitron font-black text-sm uppercase tracking-widest mb-4">Core Strengths</h4>
                                    <ul className="space-y-4">
                                        {["Admin Basics Mastery", "Object Security Logic", "Workflow Configuration"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-4 font-black text-xs md:text-sm uppercase">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-accent font-orbitron font-black text-sm uppercase tracking-widest mb-4">Focus Areas</h4>
                                    <ul className="space-y-4">
                                        {["Complex Apex Triggers", "LWC Event Propagation", "Asynchronous Logic"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-4 font-black text-xs md:text-sm uppercase text-white/60 line-through decoration-accent/50">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 p-4">
                            <div className="w-32 h-32 border-4 border-accent border-dashed rounded-full animate-spin-slow opacity-20"></div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-black py-12 text-center border-t border-white/10">
                <p className="text-white/30 font-orbitron text-[10px] tracking-widest uppercase">© 2026 Skill Horizon / Final Batch Assessment</p>
            </footer>
        </main>
    );
}
