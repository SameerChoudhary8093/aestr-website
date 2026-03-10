'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BottomCTA from '@/components/BottomCTA';

const SparkleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
    </svg>
);

const CollaborationsPage = () => {
    return (
        <main className="bg-[#0A1128] min-h-screen text-white font-roboto overflow-x-hidden selection:bg-[#FFD700] selection:text-black">
            
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FFD700] text-xs font-orbitron tracking-widest uppercase">
                                Global Academic Excellence
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold leading-tight">
                                A Partnership <br />
                                <span className="text-[#FFD700] italic">Built For The Future.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
                                Global exposure, world-class curriculum, and industry-leading mentors. We bridge the gap between Indian engineering and global standards.
                            </p>
                            <div className="pt-4">
                                <button className="px-10 py-4 bg-[#FFD700] text-black font-orbitron font-bold rounded-lg border border-[#FFD700] transition-all hover:bg-transparent hover:text-[#FFD700] group shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                                    Explore Partnerships
                                    <span className="ml-2 inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                                </button>
                            </div>
                        </div>
                        
                        <div className="w-full lg:w-1/2 relative group animate-in fade-in slide-in-from-right duration-1000">
                            <div className="aspect-video bg-black/40 rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl transition-all duration-700 hover:border-[#FFD700]/30 group-hover:shadow-[0_0_50px_rgba(255,215,0,0.1)]">
                                <div className="absolute inset-0 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
                                <Image 
                                    src="/Other/lab-5.webp" 
                                    alt="Global Campus" 
                                    fill 
                                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110">
                                        <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -z-10" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FFD700]/10 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Path to Dual Degree */}
            <section className="py-24 relative overflow-hidden bg-black/20">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-widest">
                            Your Path To A <span className="text-[#FFD700]">Dual Degree</span>
                        </h2>
                        <div className="h-1 w-20 bg-[#FFD700] mx-auto rounded-full" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="glass p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FFD700]/30 transition-all duration-500 group">
                            <div className="w-14 h-14 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#FFD700]/20">
                                <SparkleIcon className="text-[#FFD700] w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-orbitron font-bold text-white mb-6 uppercase tracking-wider group-hover:text-[#FFD700] transition-colors">Phase 1: Foundation</h3>
                            <p className="text-lg text-white/50 leading-relaxed font-light">
                                Start your journey in India with AESTR. Build a rock-solid foundation in AI, Robotics, and core computer science while working on real-world projects from day one.
                            </p>
                        </div>
                        <div className="glass p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FFD700]/30 transition-all duration-500 group">
                            <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-600/20">
                                <span className="text-blue-400 text-3xl">✈</span>
                            </div>
                            <h3 className="text-2xl font-orbitron font-bold text-white mb-6 uppercase tracking-wider group-hover:text-blue-400 transition-colors">Phase 2: Global Transition</h3>
                            <p className="text-lg text-white/50 leading-relaxed font-light">
                                Complete your final years at our partner universities in the USA. Gain global credits, participate in international hackathons, and graduate with a globally recognized dual degree.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Smooth Sailing Section */}
            <section className="py-32 relative bg-gradient-to-br from-blue-900/10 to-transparent">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20 space-y-6">
                        <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white">
                            Smooth Sailing <span className="text-[#FFD700]">To The USA</span>
                        </h2>
                        <p className="text-lg text-white/40 max-w-2xl mx-auto">We handle the complexity, you focus on your engineering future.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="glass p-12 rounded-[2.5rem] bg-indigo-950/20 border border-white/5 flex flex-col items-center text-center group hover:bg-indigo-950/40 transition-all duration-500">
                            <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500">🛂</div>
                            <h3 className="text-2xl font-orbitron font-bold text-white mb-4 uppercase">Hassle Free Visa</h3>
                            <p className="text-white/60 leading-relaxed italic">
                                Our dedicated immigration specialists guide you through the entire F-1 visa process—from documentation to mock interviews.
                            </p>
                        </div>
                        <div className="glass p-12 rounded-[2.5rem] bg-indigo-950/20 border border-white/5 flex flex-col items-center text-center group hover:bg-indigo-950/40 transition-all duration-500">
                            <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500">💰</div>
                            <h3 className="text-2xl font-orbitron font-bold text-white mb-4 uppercase">No Financial Worries</h3>
                            <p className="text-white/60 leading-relaxed italic">
                                Access to exclusive education loans at lower interest rates and merit-based scholarship assistance for the U.S. leg of your degree.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-32 relative overflow-hidden px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: '💼', title: 'Amazing Internships', desc: 'Secure high-paying internships with U.S.-based tech giants.' },
                            { icon: '🗽', title: 'Stay & Work in the U.S.', desc: 'Pathways for OPT and subsequent work authorization (H-1B).' },
                            { icon: '🤝', title: 'Industry Connections', desc: 'Direct networking with leaders from Silicon Valley.' },
                            { icon: '🌍', title: 'Build Your Network', desc: 'Join an elite alumni base spanning across the globe.' }
                        ].map((item, i) => (
                            <div key={i} className="glass p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFD700]/40 hover:-translate-y-2 transition-all duration-500 text-center">
                                <div className="text-5xl mb-6">{item.icon}</div>
                                <h4 className="text-lg font-orbitron font-bold text-[#FFD700] mb-4 uppercase tracking-tighter">{item.title}</h4>
                                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why This Matters */}
            <section className="py-32 relative bg-black/40">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white leading-tight">
                                Why This <br /><span className="text-[#FFD700]">Matters For You.</span>
                            </h2>
                            <p className="text-lg text-white/60 leading-relaxed font-light">
                                In a world dominated by AI, a global profile is your biggest asset. Our collaborations aren't just for a certificate; they are for providing you the perspective and connections required to lead in the global tech hierarchy.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    'Global Exposure through Semester Exchanges',
                                    'Exposure to International Patent Law & R&D',
                                    'Access to $100k+ starting salary opportunities'
                                ].map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-4 text-white/80 group">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-[#FFD700] group-hover:scale-150 transition-transform" />
                                        <span className="text-base font-orbitron text-sm uppercase tracking-widest leading-none mt-0.5">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="aspect-video bg-indigo-950/40 rounded-3xl border border-white/20 overflow-hidden relative shadow-2xl group cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                                <Image src="/Other/future-faculty-2.webp" alt="Global Classroom" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 border-[15px] border-[#0A1128] rounded-3xl" />
                                <div className="z-10 absolute bottom-8 left-8">
                                    <span className="text-[10px] font-orbitron text-[#FFD700] uppercase tracking-[0.5em] font-bold">Innovation Beyond Borders</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campus Life Gallery */}
            <section className="py-32 relative bg-gradient-to-t from-black to-transparent px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-widest">
                            Campus <span className="text-[#FFD700]">Life</span>
                        </h2>
                        <p className="text-lg text-white/40 max-w-xl">Experience the vibrant ecosystem across our partner locations.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="glass aspect-video md:aspect-[16/10] rounded-2xl bg-white/5 border border-white/10 relative group overflow-hidden transition-all duration-700 hover:border-[#FFD700]/30 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(255,215,0,0.05)]">
                                <Image 
                                    src={`/Other/lab-${i === 1 ? '4' : i === 2 ? '3' : i === 3 ? '2' : '1'}.webp`} 
                                    alt={`Campus Gallery ${i}`} 
                                    fill 
                                    className="object-cover opacity-50 group-hover:opacity-80 transition-all duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-6 left-6 z-10 transition-transform duration-500 group-hover:translate-x-2">
                                    <span className="text-xs font-orbitron text-white/60 tracking-widest uppercase">Global Center 0{i}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-12 px-6">
                <div className="container mx-auto max-w-5xl">
                    <div className="bg-gradient-to-r from-emerald-600/40 to-yellow-600/40 p-12 md:p-16 rounded-[3rem] border border-white/10 backdrop-blur-3xl flex flex-col md:flex-row items-center justify-between gap-12 group hover:shadow-[0_0_80px_rgba(52,211,153,0.1)] transition-all duration-700">
                        <div className="text-center md:text-left space-y-4">
                            <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white">Found Your <br /><span className="text-[#FFD700]">Program?</span></h2>
                            <p className="text-lg text-white/60 font-light">Join the next cohort of global AI pioneers.</p>
                        </div>
                        <button className="px-12 py-5 bg-[#FFD700] text-black font-orbitron font-bold rounded-2xl hover:scale-110 active:scale-95 transition-all shadow-2xl hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] whitespace-nowrap">
                            Apply Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Bottom Banner with Robot illustration (shared with main site style) */}
            <BottomCTA />

        </main>
    );
};

export default CollaborationsPage;
