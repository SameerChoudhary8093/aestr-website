import React from 'react';
import Navbar from '@/components/Navbar';

export default function PlacementSupportPage() {
    return (
        <main className="min-h-screen bg-black relative flex flex-col font-sans selection:bg-accent selection:text-black">
            <Navbar />
            
            {/* Header Section (Black) */}
            <section className="pt-40 lg:pt-52 pb-24 px-6 md:px-12 lg:px-24 bg-black">
                <div className="max-w-[1400px] mx-auto w-full">
                    <p className="text-accent font-orbitron text-[10px] font-bold tracking-[0.3em] uppercase mb-4 sm:mb-6">Section 3</p>
                    <h1 className="font-orbitron font-black text-4xl sm:text-6xl lg:text-7xl xl:text-[90px] leading-[0.95] capitalize tracking-[-0.02em] flex flex-col gap-1 lg:gap-2">
                        <span className="text-white">Placement</span>
                        <span className="text-accent drop-shadow-[0_0_20px_rgba(216,246,2,0.3)]">Support</span>
                    </h1>
                </div>
            </section>

            {/* 1. Introduction (Neon) */}
            <section className="bg-accent text-black py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1200px] mx-auto w-full">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="w-full lg:w-3/5">
                            <h2 className="font-orbitron font-black text-3xl lg:text-4xl uppercase tracking-widest mb-6 border-b-2 border-black pb-4 inline-block">1. Industry Readiness</h2>
                            <p className="text-black/80 font-bold text-sm md:text-base leading-relaxed">
                                Our placement support program connects high-performing students with leading Salesforce partner companies. Through targeted drives and rigorous screening, we ensure that every trainee is matched with an environment where their technical skills can thrive.
                            </p>
                        </div>
                        <div className="w-full lg:w-2/5 aspect-[16/9] rounded-2xl overflow-hidden border-4 border-black shadow-[12px_12px_0px_#000]">
                            <img src="/saleforce-training/image-9.jpg" alt="Corporate Readiness" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Placement Partners (Purple) */}
            <section className="bg-purple text-white py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1400px] mx-auto w-full">
                    <h2 className="font-orbitron font-black text-3xl lg:text-5xl uppercase tracking-widest mb-16 text-center text-accent drop-shadow-md">
                        2. Placement Partners & Drives
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {[
                            { 
                                name: "Softshala, Jaipur", 
                                logo: "/saleforce-training/softshalaBlackLogo.png", 
                                stats: ["Students Applied: 15", "Shortlisted: 11", "Selections: Pending"],
                                color: "bg-white",
                                invert: false
                            },
                            { 
                                name: "FEXLE Services, Jaipur", 
                                logo: "/saleforce-training/fexle-services.webp", 
                                stats: ["Applied: 10", "F2F Interview: 05", "Selections: 02"],
                                color: "bg-white",
                                invert: false
                            },
                            { 
                                name: "UntangleIT, Noida", 
                                logo: "/saleforce-training/untangleit-logo.png", 
                                stats: ["Applied: 08", "Shortlisted: 01", "Final Result: Nil"],
                                color: "bg-white",
                                invert: false
                            },
                            { 
                                name: "Binario Software, Jaipur", 
                                logo: "/saleforce-training/Binario-Logo.webp", 
                                stats: ["Applied: 04", "Shortlisted: 04", "Cleared VA: 00"],
                                color: "bg-white",
                                invert: false
                            }
                        ].map((partner, i) => (
                            <div key={i} className="bg-black/40 border border-white/10 p-8 flex flex-col items-center hover:bg-black/60 transition-all rounded-3xl">
                                <div className={`${partner.color} p-6 rounded-2xl w-48 aspect-video flex items-center justify-center mb-8 border-4 border-accent`}>
                                    <img src={partner.logo} alt={partner.name} className={`w-full h-full object-contain ${partner.invert ? 'invert' : ''}`} />
                                </div>
                                <h3 className="font-orbitron font-black text-lg text-white mb-6 uppercase tracking-widest text-center">{partner.name}</h3>
                                <div className="w-full space-y-3">
                                    {partner.stats.map((stat, j) => (
                                        <div key={j} className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-[10px] uppercase font-black tracking-widest text-white/40">{stat.split(': ')[0]}</span>
                                            <span className="text-accent font-black text-xs">{stat.split(': ')[1]}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-accent p-12 border-4 border-black text-black">
                        <h3 className="font-orbitron font-black text-2xl uppercase tracking-widest mb-8 border-b-2 border-black pb-4">Additional Opportunities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                                <h4 className="font-black text-lg uppercase mb-2">DeltaCX Consulting</h4>
                                <p className="text-black/70 text-sm font-bold uppercase leading-tight">Opportunity provided; no candidates appeared for recruitment drive.</p>
                            </div>
                            <div>
                                <h4 className="font-black text-lg uppercase mb-2">VirtuoWhiz, Jaipur</h4>
                                <p className="text-black/70 text-sm font-bold uppercase leading-tight">Drive organized for March 2026; no candidates appeared.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Placement Glimpse (Neon) */}
            <section className="bg-accent text-black py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1200px] mx-auto w-full">
                    <div className="flex items-center gap-4 mb-16">
                        <h2 className="font-orbitron font-black text-3xl lg:text-5xl uppercase tracking-widest">Placement Glimpse</h2>
                        <div className="flex-grow h-2 bg-black"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { src: "image-1.jpg", alt: "Interview session" },
                            { src: "image-7.jpg", alt: "Corporate team" },
                            { src: "image-2.jpg", alt: "Office visit" }
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
                    <div className="bg-black/40 border-l-8 border-accent p-10 md:p-16 mb-20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-bl-full group-hover:bg-accent/10 transition-colors"></div>
                        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                            <div className="w-full lg:w-2/3">
                                <h2 className="font-orbitron font-black text-4xl lg:text-5xl uppercase tracking-tighter mb-8 text-accent">Conclusion</h2>
                                <p className="text-white/80 font-bold text-lg leading-relaxed uppercase mb-10">
                                    The placement initiatives conducted by Skill Horizon provided students with valuable opportunities to participate in recruitment drives with multiple organizations.
                                </p>
                                <ul className="space-y-6">
                                    {["Multiple Drives Organized", "Real-time Hiring Exposure", "Industry-Oriented Preparation"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-6">
                                            <div className="w-4 h-4 bg-accent rotate-45"></div>
                                            <span className="font-black text-sm uppercase tracking-[0.2em]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full lg:w-1/3 aspect-square rounded-full overflow-hidden border-8 border-accent flex-shrink-0">
                                <img src="/saleforce-training/image-1.jpg" alt="Team Success" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-accent p-8 md:p-12 text-black">
                        <p className="font-orbitron font-black text-sm tracking-widest uppercase mb-4 opacity-60">Outcomes Analysis</p>
                        <p className="text-black font-black text-xl md:text-2xl leading-tight uppercase">
                            The overall selection results highlighted gaps in fundamental concepts and technical depth, which are being addressed in intensified follow-up modules.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="bg-black py-12 text-center border-t border-white/10">
                <p className="text-white/30 font-orbitron text-[10px] tracking-widest uppercase">© 2026 Skill Horizon / Placement Report</p>
            </footer>
        </main>
    );
}
