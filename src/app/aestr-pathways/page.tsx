'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const proTrackFeatures = [
    { num: '01', title: 'Tailored for Global Tech Giants', desc: 'Students receive specialized training to crack jobs at Google, Meta, Microsoft, Amazon, OpenAI, etc.' },
    { num: '02', title: 'Target Salary: ₹35 LPA +', desc: 'Starting packages, positioning students with global top talent.' },
    { num: '03', title: 'Mentorship', desc: 'Led by ex-Cambridge/Microsoft/NVIDIA faculty and industry professionals.' },
    { num: '04', title: 'Project Work', desc: 'Hands-on in AI systems, LLMs, robotics, and more.' },
    { num: '05', title: 'Real-time coaching', desc: 'For interviews, product case rounds, system design, and research presentations.' },
];

const globalFeatures = [
    { num: '01', title: 'Global 3+1 & 2+2 Models', desc: 'Spend 1 year abroad at top universities after 2-3 years at Aestr. 25+ partner universities.' },
    { num: '02', title: 'Full Coverage', desc: 'Tuition + travel + accommodation fully financed (through Aestr\'s "Future Pays for You" model).' },
    { num: '03', title: 'Scholarships', desc: 'Available for high-achievers to support global education.' },
    { num: '04', title: 'Professional Networks', desc: 'Build global connections and resume credentials at top-tier international institutions.' },
];

const internationalBenefits = [
    { num: '1', title: 'Access To Research Labs', desc: 'Faculty, And Startups Abroad.' },
    { num: '2', title: 'Real-World Global Internships', desc: 'And Corporate Exposure.' },
    { num: '3', title: 'Competitive Edge For Global', desc: 'MS/PhD Admissions Or Employment.' },
];

const industryFeatures = [
    { num: '01', title: '50+ Corporate Partners', desc: 'Google, Microsoft, Meta, Amazon, DRDO, and more.' },
    { num: '02', title: 'Bootcamps by Industry Experts', desc: 'Hands-on modules in Edge AI, Robotics, RISC-V, cybersecurity, etc.' },
    { num: '03', title: 'Guaranteed Internships & Jobs', desc: 'Industry-aligned curriculum from day one. Median placement goal: ₹10 LPA +.' },
    { num: '04', title: 'Expert Mentorship', desc: 'Real-time exposure to tech stacks used by startups & global firms.' },
];

const learningApproach = [
    { num: '1', title: 'Courses Start With', desc: 'Real-World Problems.' },
    { num: '2', title: 'Labs Designed', desc: 'By Industry.' },
    { num: '3', title: 'Live Projects', desc: 'Students Work On Current Briefs From Partners.' },
];

const entrepreneurshipKeyFeatures = [
    { 
        num: '01', 
        title: 'Incubation Support:', 
        points: [
            'Dedicated Aestr Startup Studio.',
            '₹1 crore seed funding pool.',
            'Real-world mentorship from founders, VCs, and IP attorneys.'
        ]
    },
    { 
        num: '02', 
        title: 'Simulated Startup Environment:', 
        points: [
            'iSeed round pitching, business planning, MVP development.',
            'Legal, IP, compliance support for scaling ventures.'
        ]
    },
    { 
        num: '03', 
        title: 'Cross-disciplinary Innovation:', 
        points: [
            'Combine AI + humanities, sustainability, law, etc., to build purposeful solutions.'
        ]
    },
];

const facilities = [
    { num: '1', desc: 'Maker Labs, Rapid Prototyping Spaces, VR/AR, 3D Printing Tools.' },
    { num: '2', desc: 'Access To DRDO-Backed AI Research, Deep AI Compute, And Patent Mentorship.' },
];

export default function AestrPathways() {
    return (
        <main className="bg-background pt-32 overflow-hidden">


            {/* Header section */}
            <section className="pt-48 pb-16 px-4 sm:px-6 border-b border-white/5 text-center">
                <div className="container mx-auto max-w-6xl flex flex-col items-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-hero text-foreground mb-10 font-orbitron font-black"
                    >
                        AESTR <span className="text-accent decoration-accent/20">Pathways</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-body bg-[#5B1DD6] text-white px-8 py-4 rounded-2xl max-w-3xl font-bold text-base sm:text-lg inline-block"
                    >
                        At AESTR, a typical day blends hands-on innovation with AI-driven learning.
                    </motion.p>
                </div>
            </section>

            {/* Pathway 1: Pro Track */}
            <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#D7F601] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-black/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
                
                <div className="container mx-auto max-w-6xl space-y-12 sm:space-y-16">
                    <div className="space-y-4 sm:space-y-6">
                        <div className="flex flex-col items-start gap-4">
                            <span className="w-12 h-12 rounded-full bg-black/10 border border-black/20 flex items-center justify-center text-2xl font-orbitron font-bold text-black shrink-0">1</span>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-orbitron font-black uppercase tracking-tight leading-tight text-black flex flex-wrap items-center gap-3">
                                <span>B.Tech AI With Shodh AI TRACK</span>
                                <span className="font-light text-black/60">Elite Global Careers</span>
                                <span className="bg-black/10 border border-black/20 text-black px-4 py-1.5 rounded-xl text-xl font-black whitespace-nowrap">(₹35 LPA+)</span>
                            </h2>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold text-black text-sm sm:text-base">Who is it for?</p>
                            <p className="text-black/70 max-w-2xl text-sm sm:text-base font-bold">Top 5-10% of high-performing students—those aiming for elite roles in tech.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-black">
                        <div className="lg:col-span-6 space-y-6 sm:space-y-8">
                            <h3 className="text-2xl sm:text-3xl font-bold">Key Features</h3>
                            <div className="space-y-4 sm:space-y-6">
                                {proTrackFeatures.map((item) => (
                                    <div key={item.num} className="flex gap-4 sm:gap-6 items-start group">
                                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-sm sm:text-lg font-bold group-hover:bg-black group-hover:text-accent transition-all">
                                            {item.num}
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-bold text-base sm:text-lg">{item.title}</p>
                                            <p className="text-black/70 text-sm sm:text-base font-bold">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="relative aspect-square sm:aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-black/10 shadow-2x-strong group">
                                <Image 
                                    src="/pathways/pro-track.png" 
                                    alt="Pro Track"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-[2rem] sm:rounded-[3rem] m-3 sm:m-4 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pathway 2: Global Opportunities */}
            <section className="py-24 px-4 sm:px-6 bg-[#181818] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[140px] pointer-events-none" />
                
                <div className="container mx-auto max-w-6xl space-y-16">
                    <div className="space-y-6">
                        <div className="flex flex-col items-start gap-4">
                            <span className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-2xl font-orbitron font-bold text-white shrink-0">2</span>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-orbitron font-black uppercase tracking-tight text-white flex flex-wrap items-center gap-3">
                                <span>GLOBAL OPPORTUNITIES</span> 
                                <span className="font-light text-white/60">International</span> 
                                <span className="bg-white/5 border border-white/10 text-white px-4 py-1.5 rounded-xl text-xl font-black whitespace-nowrap">3+1 / 2+2 Programs</span>
                            </h2>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold text-white">Who is it for?</p>
                            <p className="text-white/70 max-w-3xl font-bold">Opportunity to study abroad for one full academic year at top global universities (US, UK, Europe).</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6 order-2 lg:order-1">
                             <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2x-strong group">
                                <Image 
                                    src="/pathways/global-pathway.png" 
                                    alt="Global Opportunities"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-[3rem] m-4 pointer-events-none" />
                            </div>
                        </div>
                        <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
                            <h3 className="text-3xl font-bold text-white">Key Features</h3>
                            <div className="space-y-8">
                                {globalFeatures.map((item) => (
                                    <div key={item.num} className="flex gap-6 items-start group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg font-bold group-hover:bg-accent group-hover:text-black transition-all">
                                            {item.num}
                                        </div>
                                        <div className="space-y-2">
                                            <p className="font-bold text-lg leading-tight text-white">{item.title}</p>
                                            <ul className="space-y-2">
                                                {item.desc.split('. ').map((point, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-white/70 leading-relaxed font-semibold">
                                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                                                        {point}{idx === 0 && item.desc.includes('.') ? '.' : ''}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* International Benefits Grid */}
                    <div className="pt-24 space-y-12">
                        <h3 className="text-4xl font-orbitron font-bold text-white">International <span className="font-light">Benefits</span></h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {internationalBenefits.map((benefit) => (
                                <div key={benefit.num} className="glass p-8 rounded-2xl bg-white/10 border-white/20 flex gap-6 items-center group hover:border-accent/50 hover:bg-white/15 transition-all duration-300">
                                    <span className="text-5xl font-orbitron font-bold text-accent/20 group-hover:text-accent/40 transition-colors">{benefit.num}</span>
                                    <div>
                                        <p className="font-bold text-white leading-snug">{benefit.title}</p>
                                        <p className="text-white/80 text-sm font-bold">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pathway 3: Industry Partner Training */}
            <section className="py-24 px-4 sm:px-6 bg-[#5B1DD6] relative overflow-hidden">
                <div className="container mx-auto max-w-6xl space-y-16">
                    <div className="space-y-6 text-left">
                        <div className="flex flex-col items-start gap-4">
                            <span className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-2xl font-orbitron font-bold text-white shrink-0">3</span>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-orbitron font-black uppercase tracking-tight text-white flex flex-wrap items-center gap-3">
                                <span>INDUSTRY PARTNER TRAINING</span> 
                                <span className="font-light text-white/60">& Direct Placement</span> 
                                <span className="bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-xl text-xl font-black whitespace-nowrap">(₹10 LPA)</span>
                            </h2>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold text-white">Who is it for?</p>
                            <p className="text-white/70 max-w-3xl font-bold">From Day 1, students are embedded in live industry environments with guaranteed placement pipelines.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-12">
                             <h3 className="text-3xl font-bold mb-10 text-white">Key Features</h3>
                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="space-y-8">
                                    {industryFeatures.map((item) => (
                                        <div key={item.num} className="flex gap-6 items-start group">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg font-bold group-hover:bg-accent group-hover:text-black transition-all">
                                                {item.num}
                                            </div>
                                            <div className="space-y-1">
                                                <p className="font-bold text-lg text-white">{item.title}</p>
                                                <p className="text-white/60 leading-relaxed whitespace-pre-line font-bold">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-2x-strong group">
                                    <Image 
                                        src="/pathways/industry-partners.png" 
                                        alt="Industry Partners"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* Learning Approach Grid */}
                    <div className="pt-24 space-y-12">
                        <h3 className="text-4xl font-orbitron font-bold text-white">Learning <span className="font-light">Approach</span></h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {learningApproach.map((item) => (
                                <div key={item.num} className="glass p-8 rounded-2xl bg-white/5 border-white/5 flex gap-6 items-center group hover:bg-accent/10 transition-all">
                                    <span className="text-5xl font-orbitron font-bold text-white/20 group-hover:text-accent/40 transition-colors">{item.num}</span>
                                    <div>
                                        <p className="font-bold text-white leading-snug">{item.title}</p>
                                        <p className="text-white/70 text-sm font-bold">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pathway 4: Entrepreneurship Track */}
            <section className="py-24 px-4 sm:px-6 bg-[#181818] relative overflow-hidden">
                <div className="container mx-auto max-w-6xl space-y-12">
                     <div className="space-y-6">
                        <div className="flex flex-col items-start gap-4">
                            <span className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-2xl font-orbitron font-bold text-white shrink-0">4</span>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-orbitron font-black uppercase tracking-tight text-white flex flex-wrap items-center gap-3">
                                <span>ENTREPRENEURSHIP TRACK</span> 
                                <span className="font-light text-white/60">₹1 Cr Start-up Funding +</span> 
                                <span className="bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-xl text-xl font-black whitespace-nowrap">Incubation</span>
                            </h2>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold text-white">Who is it for?</p>
                            <p className="text-white/70 max-w-3xl font-bold">Students with startup ambitions—those who want to build products and ventures, not just work for one.</p>
                        </div>
                    </div>

                    <div className="p-10 md:p-16 rounded-[3rem] bg-[#5B1DD6] border-white/10 shadow-2xl space-y-8 relative overflow-hidden text-center">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
                        <h3 className="text-3xl md:text-5xl font-orbitron font-black uppercase leading-tight text-white relative z-10">Build the <span className="text-accent underline decoration-accent/40">Next Big Thing</span></h3>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto font-bold relative z-10">Access mentorship from Silicon Valley veterans, seed funding up to ₹1 Crore, and shared lab access to turn your code into a company.</p>
                        <div className="flex flex-wrap justify-center gap-6 pt-4 relative z-10">
                            <div className="px-8 py-4 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-sm">
                                <p className="text-sm uppercase tracking-widest text-white/60 mb-1 font-bold">Max Funding</p>
                                <p className="text-2xl font-black text-accent">₹1 Crore</p>
                            </div>
                            <div className="px-8 py-4 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-sm">
                                <p className="text-sm uppercase tracking-widest text-white/60 mb-1 font-bold">Equity</p>
                                <p className="text-2xl font-black text-accent">Student-First</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Entrepreneurship Key Features */}
            <section className="py-24 px-4 sm:px-6 bg-[#D7F601] relative overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-6 space-y-12">
                            <h2 className="text-h2 text-black">Key Features</h2>
                            <div className="space-y-10">
                                {entrepreneurshipKeyFeatures.map((item) => (
                                    <div key={item.num} className="flex gap-8 items-start group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black/10 border border-black/20 flex items-center justify-center text-xl font-orbitron font-bold text-black group-hover:bg-black group-hover:text-accent transition-all">
                                            {item.num}
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-body text-black font-bold">{item.title}</p>
                                            <ul className="space-y-3">
                                                {item.points.map((point, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-black/70 leading-relaxed font-bold">
                                                        <span className="mt-2 w-2 h-2 rounded-full bg-black/40 flex-shrink-0" />
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="relative aspect-square md:aspect-[5/6] rounded-[4rem] overflow-hidden border border-black/10 shadow-2x-strong group">
                                <Image 
                                    src="/pathways/entrepreneurship-globe.png" 
                                    alt="Entrepreneurship Globe"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute inset-x-8 bottom-12 z-10 text-center">
                                    <span className="text-[10px] font-orbitron uppercase tracking-[0.5em] text-white/40 font-bold">Innovation Ecosystem</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities Section */}
            <section className="py-24 px-4 sm:px-6 bg-[#5B1DD6] relative overflow-hidden">
                <div className="container mx-auto max-w-6xl space-y-16">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white text-left">Facilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {facilities.map((item) => (
                            <div key={item.num} className="glass p-10 rounded-2xl bg-white/5 border-white/10 flex gap-8 items-center group hover:bg-white/10 transition-all">
                                <span className="text-6xl font-orbitron font-bold text-white/20 group-hover:text-white/40 transition-colors">{item.num}</span>
                                <p className="text-xl md:text-2xl text-white font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
