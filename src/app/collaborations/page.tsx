'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BottomCTA from '@/components/BottomCTA';


const CollaborationsPage = () => {
    return (
        <main className="bg-background min-h-screen text-foreground font-orbitron overflow-x-hidden selection:bg-accent selection:text-black">
            
            {/* Hero Section */}
            <section className="relative pt-48 pb-24 lg:pt-64 lg:pb-32 overflow-hidden px-6 bg-[radial-gradient(circle_at_top,rgba(216,246,2,0.05),transparent_50%)]">
                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2 space-y-10 animate-in fade-in slide-in-from-left duration-1000">
                            <div className="inline-block px-6 py-2 rounded-full bg-accent/5 border border-accent/20 text-accent text-[10px] font-black tracking-[0.3em] uppercase">
                                Global Academic Excellence
                            </div>
                            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[0.85] uppercase tracking-tighter">
                                A Partnership <br />
                                <span className="text-accent italic">Built For The Future.</span>
                            </h1>
                            <p className="text-xl text-foreground/50 max-w-2xl leading-relaxed font-semibold">
                                Global exposure, world-class curriculum, and industry-leading mentors. We bridge the gap between Indian engineering and global standards.
                            </p>
                            <div className="pt-4">
                                <button className="btn-aestr !px-12 !py-5 bg-accent text-black font-black uppercase tracking-widest shadow-[0_0_50px_rgba(216,246,2,0.2)] hover:shadow-none transition-all">
                                    Explore Partnerships
                                    <span className="ml-3 inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                                </button>
                            </div>
                        </div>
                        
                        <div className="w-full lg:w-1/2 relative group animate-in fade-in slide-in-from-right duration-1000">
                            <div className="aspect-video bg-black/40 rounded-[3rem] border border-foreground/10 overflow-hidden relative shadow-[0_0_100px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-accent/40 group-hover:shadow-[0_0_80px_rgba(216,246,2,0.1)]">
                                <Image 
                                    src="/Other/lab-5.webp" 
                                    alt="Global Campus" 
                                    fill 
                                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110 shadow-accent/20">
                                        <svg className="w-10 h-10 text-black ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-[100px] -z-10" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-[100px] -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Path to Dual Degree */}
            <section className="py-32 relative overflow-hidden bg-background-alt/30 border-y border-foreground/5">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="mb-24 space-y-6">
                        <span className="text-[12rem] font-black text-foreground/5 absolute top-0 left-1/2 -translate-x-1/2 leading-none select-none">DUAL</span>
                        <h2 className="text-4xl md:text-7xl font-black text-foreground uppercase tracking-tighter relative z-10">
                            Your Path To A <span className="text-accent italic">Dual Degree.</span>
                        </h2>
                        <div className="h-2 w-32 bg-accent mx-auto rounded-full relative z-10" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
                        <div className="glass p-12 rounded-[2.5rem] bg-foreground/5 border border-foreground/10 hover:border-accent/30 transition-all duration-700 group hover:bg-accent/5 text-left">
                            <div className="text-accent mb-10 flex items-center gap-4">
                                <span className="text-sm font-black uppercase tracking-[0.4em]">PHASE 01</span>
                                <div className="h-px flex-1 bg-accent/20" />
                            </div>
                            <h3 className="text-3xl font-black text-foreground mb-8 uppercase tracking-tighter group-hover:text-accent transition-colors">Foundation Mastery</h3>
                            <p className="text-xl text-foreground/50 leading-relaxed font-semibold">
                                Start your journey in India with AESTR. Build a rock-solid foundation in AI, Robotics, and core computer science while working on real-world projects from day one.
                            </p>
                        </div>
                        <div className="glass p-12 rounded-[2.5rem] bg-foreground/5 border border-foreground/10 hover:border-accent/30 transition-all duration-700 group hover:bg-accent/5 text-left">
                            <div className="text-accent mb-10 flex items-center gap-4">
                                <span className="text-sm font-black uppercase tracking-[0.4em]">PHASE 02</span>
                                <div className="h-px flex-1 bg-accent/20" />
                                <span className="text-2xl">✈</span>
                            </div>
                            <h3 className="text-3xl font-black text-foreground mb-8 uppercase tracking-tighter group-hover:text-accent transition-colors">Global Transition</h3>
                            <p className="text-xl text-foreground/50 leading-relaxed font-semibold">
                                Complete your final years at our partner universities in the USA. Gain global credits, participate in international hackathons, and graduate with a globally recognized dual degree.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Smooth Sailing Section */}
            <section className="py-40 relative overflow-hidden bg-[radial-gradient(circle_at_right,rgba(216,246,2,0.03),transparent_40%)]">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24 space-y-8">
                        <h2 className="text-4xl md:text-7xl font-black text-foreground uppercase tracking-tighter">
                            Smooth Sailing <br /><span className="text-accent italic">To The USA.</span>
                        </h2>
                        <p className="text-xl text-foreground/40 max-w-2xl mx-auto font-bold tracking-tight">We handle the complexity, you focus on your engineering future.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        <div className="glass p-14 rounded-[3rem] bg-foreground/5 border border-foreground/5 flex flex-col items-center text-center group hover:bg-accent/5 hover:border-accent/20 transition-all duration-700">
                            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center text-5xl mb-10 group-hover:scale-110 transition-transform duration-700">🛂</div>
                            <h3 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tight">Hassle Free Visa</h3>
                            <p className="text-foreground/50 leading-relaxed font-semibold">
                                Our dedicated immigration specialists guide you through the entire F-1 visa process—from documentation to mock interviews.
                            </p>
                        </div>
                        <div className="glass p-14 rounded-[3rem] bg-foreground/5 border border-foreground/5 flex flex-col items-center text-center group hover:bg-accent/5 hover:border-accent/20 transition-all duration-700">
                            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center text-5xl mb-10 group-hover:scale-110 transition-transform duration-700">💰</div>
                            <h3 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tight">Financial Support</h3>
                            <p className="text-foreground/50 leading-relaxed font-semibold">
                                Access to exclusive education loans at competitive rates and merit-based scholarship assistance for the U.S. leg of your degree.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-40 relative overflow-hidden border-t border-foreground/5 bg-background-alt/10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: '💼', title: 'Silicon Internships', desc: 'Secure high-paying internships with U.S.-based tech giants and startups.' },
                            { icon: '🗽', title: 'OPT Pathways', desc: 'Expert guidance for OPT and subsequent work authorization in the United States.' },
                            { icon: '🤝', title: 'Global Connections', desc: 'Direct networking with leaders from Silicon Valley tech ecosystem.' },
                            { icon: '🌍', title: 'Elite Network', desc: 'Join a selective alumni base spanning across the world\'s top tech hubs.' }
                        ].map((item, i) => (
                            <div key={i} className="glass p-10 rounded-3xl bg-foreground/5 border border-foreground/5 hover:border-accent/40 hover:-translate-y-3 transition-all duration-700 text-center flex flex-col items-center">
                                <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:bg-accent/10 transition-colors">{item.icon}</div>
                                <h4 className="text-xl font-black text-accent mb-4 uppercase tracking-tighter">{item.title}</h4>
                                <p className="text-sm text-foreground/50 leading-relaxed font-bold">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why This Matters */}
            <section className="py-40 relative bg-background border-y border-foreground/5">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-24">
                        <div className="w-full lg:w-1/2 space-y-10">
                            <h2 className="text-4xl md:text-7xl font-black text-foreground leading-[0.85] uppercase tracking-tighter">
                                Why This <br /><span className="text-accent">Matters For You.</span>
                            </h2>
                            <p className="text-xl text-foreground/50 leading-relaxed font-bold">
                                In a world dominated by AI, a global profile is your biggest asset. Our collaborations aren't just for a certificate; they are for providing you the perspective and connections required to lead in the global tech hierarchy.
                            </p>
                            <ul className="space-y-6 pt-6">
                                {[
                                    'Global Exposure through Semester Exchanges',
                                    'Exposure to International Patent Law & R&D',
                                    'Access to $100k+ starting salary opportunities'
                                ].map((bullet, i) => (
                                    <li key={i} className="flex items-center gap-6 group">
                                        <div className="w-4 h-4 rounded-full border-2 border-accent group-hover:bg-accent transition-all duration-500" />
                                        <span className="text-sm font-black text-foreground uppercase tracking-[0.4em] leading-none transition-transform group-hover:translate-x-2">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="aspect-video bg-black/40 rounded-[3rem] border border-foreground/10 overflow-hidden relative shadow-[0_0_100px_rgba(0,0,0,0.5)] group">
                                <Image src="/Other/future-faculty-2.webp" alt="Global Classroom" fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                                <div className="absolute inset-10 border border-foreground/5 rounded-[2rem] pointer-events-none" />
                                <div className="absolute bottom-12 left-12 z-20">
                                    <span className="text-[10px] font-black text-accent uppercase tracking-[0.5em] bg-black/60 px-6 py-3 rounded-full backdrop-blur-md border border-accent/20">Innovation Beyond Borders</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campus Gallery */}
            <section className="py-40 relative px-6 bg-background-alt/10">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center mb-24 space-y-6">
                        <h2 className="text-4xl md:text-7xl font-black text-foreground uppercase tracking-tighter">
                            Campus <span className="text-accent italic">Life.</span>
                        </h2>
                        <p className="text-xl text-foreground/40 max-w-xl font-bold tracking-tight">Experience the vibrant ecosystem across our partner locations.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="glass aspect-video md:aspect-[16/10] rounded-[3rem] bg-foreground/5 border border-foreground/5 relative group overflow-hidden transition-all duration-700 hover:border-accent/40 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(216,246,2,0.1)]">
                                <Image 
                                    src={`/Other/lab-${i === 1 ? '4' : i === 2 ? '3' : i === 3 ? '2' : '1'}.webp`} 
                                    alt={`Campus Gallery ${i}`} 
                                    fill 
                                    className="object-cover opacity-50 group-hover:opacity-100 transition-all duration-1000" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-10 left-10 z-10 transition-transform duration-500 group-hover:translate-x-3">
                                    <span className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.5em] group-hover:text-accent transition-colors">Global Learning Center 0{i}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="bg-gradient-to-br from-accent/20 to-transparent p-16 md:p-24 rounded-[4rem] border border-accent/10 backdrop-blur-3xl flex flex-col md:flex-row items-center justify-between gap-16 relative overflow-hidden group hover:border-accent/30 transition-all duration-700">
                        <div className="absolute inset-0 bg-[radial-gradient(var(--accent)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05]" />
                        <div className="text-center md:text-left space-y-8 relative z-10">
                            <h2 className="text-4xl md:text-7xl font-black text-foreground leading-[0.85] uppercase tracking-tighter">Found Your <br /><span className="text-accent italic">Program?</span></h2>
                            <p className="text-xl text-foreground/50 font-black tracking-tight uppercase">Join the next cohort of global AI pioneers.</p>
                        </div>
                        <button className="btn-aestr !px-16 !py-6 bg-accent text-black font-black uppercase tracking-[0.2em] shadow-[0_0_50px_rgba(216,246,2,0.3)] hover:scale-105 transition-all relative z-10">
                            Apply for 2026
                        </button>
                    </div>
                </div>
            </section>

            {/* Bottom Banner with Robot illustration */}
            <BottomCTA />

            {/* Minimalist Footer */}
            <footer className="py-20 border-t border-foreground/5 px-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12 opacity-30">
                    <div className="flex items-center gap-8">
                        <span className="text-[10px] font-black tracking-[0.4em] uppercase">AESTR GLOBAL © 2026</span>
                    </div>
                    <div className="flex gap-12">
                        <Link href="/" className="text-[9px] font-black hover:text-accent transition-colors uppercase tracking-[0.4em]">Privacy</Link>
                        <Link href="/" className="text-[9px] font-black hover:text-accent transition-colors uppercase tracking-[0.4em]">Governance</Link>
                        <Link href="/" className="text-[9px] font-black hover:text-accent transition-colors uppercase tracking-[0.4em]">Contact</Link>
                    </div>
                </div>
            </footer>

        </main>
    );
};

export default CollaborationsPage;
