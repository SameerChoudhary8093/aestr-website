'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BottomCTA from '@/components/BottomCTA';


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
            <section className="py-20 px-6 border-b border-white/5">
                <div className="container-boxed max-w-6xl mx-auto">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-hero text-foreground mb-4"
                    >
                        AESTR <span className="text-accent underline decoration-accent/20">Pathways</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-body text-foreground/80 max-w-3xl font-medium"
                    >
                        At AESTR, a typical day blends hands-on innovation with AI-driven learning.
                    </motion.p>
                </div>
            </section>

            {/* Pathway 1: Pro Track */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
                
                <div className="container-boxed max-w-6xl mx-auto space-y-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="w-12 h-12 rounded-full bg-purple/10 border border-purple/20 flex items-center justify-center text-2xl font-orbitron font-bold text-purple-400">1</span>
                            <h2 className="text-2xl md:text-4xl font-orbitron font-bold uppercase tracking-tight">
                                AESTR PRO TRACK <span className="italic font-light text-white/60">Elite Global Careers</span> <span className="bg-accent/10 border border-accent/20 text-accent px-4 py-1 rounded-lg text-xl ml-2 font-bold">(₹35 LPA+)</span>
                            </h2>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold text-foreground">Who is it for?</p>
                            <p className="text-foreground/70 max-w-2xl">Top 5-10% of high-performing students—those aiming for elite roles in tech.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6 space-y-8">
                            <h3 className="text-3xl font-bold">Key Features</h3>
                            <div className="space-y-6">
                                {proTrackFeatures.map((item) => (
                                    <div key={item.num} className="flex gap-6 items-start group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-lg font-bold group-hover:bg-accent group-hover:text-black transition-all">
                                            {item.num}
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-bold text-lg">{item.title}</p>
                                            <p className="text-body text-foreground/60">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2x-strong group">
                                <Image 
                                    src="/pathways/pro-track.png" 
                                    alt="Pro Track"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-[3rem] m-4 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pathway 2: Global Opportunities */}
            <section className="py-24 px-6 bg-accent relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[140px] pointer-events-none" />
                
                <div className="container-boxed max-w-6xl mx-auto space-y-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="w-12 h-12 rounded-full bg-black/10 border border-black/20 flex items-center justify-center text-2xl font-orbitron font-bold text-black">2</span>
                            <h2 className="text-2xl md:text-4xl font-orbitron font-bold uppercase tracking-tight text-black">
                                GLOBAL OPPORTUNITIES <span className="italic font-light text-black/60">International</span> <span className="bg-black/5 border border-black/10 text-black px-4 py-1 rounded-lg text-xl ml-2 font-black">3+1 / 2+2 Programs</span>
                            </h2>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold text-black">Who is it for?</p>
                            <p className="text-black/70 max-w-3xl font-bold">Opportunity to study abroad for one full academic year at top global universities (US, UK, Europe).</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6 order-2 lg:order-1">
                             <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden border border-black/5 shadow-2x-strong group">
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
                            <h3 className="text-3xl font-bold text-black">Key Features</h3>
                            <div className="space-y-8">
                                {globalFeatures.map((item) => (
                                    <div key={item.num} className="flex gap-6 items-start group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-lg font-bold group-hover:bg-black group-hover:text-accent transition-all">
                                            {item.num}
                                        </div>
                                        <div className="space-y-2">
                                            <p className="font-bold text-lg leading-tight text-black">{item.title}</p>
                                            <ul className="space-y-2">
                                                {item.desc.split('. ').map((point, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-black/70 leading-relaxed font-semibold">
                                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black/40 flex-shrink-0" />
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
                        <h3 className="text-4xl font-orbitron font-bold text-black">International <span className="italic font-light">Benefits</span></h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {internationalBenefits.map((benefit) => (
                                <div key={benefit.num} className="glass p-8 rounded-2xl bg-black/5 border-black/5 flex gap-6 items-center">
                                    <span className="text-5xl font-orbitron font-bold text-black/20">{benefit.num}</span>
                                    <div>
                                        <p className="font-bold text-black leading-snug">{benefit.title}</p>
                                        <p className="text-black/70 text-sm font-bold">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pathway 3: Industry Partner Training */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="container-boxed max-w-6xl mx-auto space-y-16">
                    <div className="space-y-6 text-left">
                        <div className="flex items-center gap-4">
                            <span className="w-12 h-12 rounded-full bg-purple/10 border border-purple/20 flex items-center justify-center text-2xl font-orbitron font-bold text-purple-400">3</span>
                            <h2 className="text-2xl md:text-4xl font-orbitron font-bold uppercase tracking-tight">
                                INDUSTRY PARTNER TRAINING <span className="italic font-light text-white/60">& Direct Placement</span> <span className="bg-accent/10 border border-accent/20 text-accent px-4 py-1 rounded-lg text-xl ml-2 font-bold">(₹10 LPA)</span>
                            </h2>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold text-foreground">Who is it for?</p>
                            <p className="text-foreground/70 max-w-3xl">From Day 1, students are embedded in live industry environments with guaranteed placement pipelines.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-12">
                             <h3 className="text-3xl font-bold mb-10">Key Features</h3>
                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="space-y-8">
                                    {industryFeatures.map((item) => (
                                        <div key={item.num} className="flex gap-6 items-start group">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-lg font-bold group-hover:bg-accent group-hover:text-black transition-all">
                                                {item.num}
                                            </div>
                                            <div className="space-y-1">
                                                <p className="font-bold text-lg">{item.title}</p>
                                                <p className="text-foreground/60 leading-relaxed whitespace-pre-line">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/5 shadow-2x-strong group">
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
                        <h3 className="text-4xl font-orbitron font-bold">Learning <span className="italic font-light">Approach</span></h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {learningApproach.map((item) => (
                                <div key={item.num} className="glass p-8 rounded-2xl bg-accent/5 border-white/5 flex gap-6 items-center group hover:bg-accent/10 transition-all">
                                    <span className="text-5xl font-orbitron font-bold text-accent/20 group-hover:text-accent/40 transition-colors">{item.num}</span>
                                    <div>
                                        <p className="font-bold text-foreground leading-snug">{item.title}</p>
                                        <p className="text-foreground/70 text-sm font-bold">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pathway 4: Entrepreneurship Track */}
            <section className="py-24 px-6 bg-background-alt relative overflow-hidden">
                <div className="container-boxed max-w-6xl mx-auto space-y-12">
                     <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="w-12 h-12 rounded-full bg-purple/10 border border-purple/20 flex items-center justify-center text-2xl font-orbitron font-bold text-purple-400">4</span>
                            <h2 className="text-2xl md:text-4xl font-orbitron font-bold uppercase tracking-tight">
                                ENTREPRENEURSHIP TRACK <span className="italic font-light text-white/60">₹1 Cr Start-up Funding +</span> <span className="bg-accent/10 border border-accent/20 text-accent px-4 py-1 rounded-lg text-xl ml-2 font-black">Incubation</span>
                            </h2>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold text-foreground">Who is it for?</p>
                            <p className="text-foreground/70 max-w-3xl font-bold">Students with startup ambitions—those who want to build products and ventures, not just work for one.</p>
                        </div>
                    </div>

                    <div className="glass p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-purple/10 to-accent/5 border-white/5 text-center space-y-8">
                        <h3 className="text-3xl md:text-5xl font-orbitron font-extrabold uppercase leading-tight">Build the <span className="text-accent underline decoration-accent/20">Next Big Thing</span></h3>
                        <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-bold">Access mentorship from Silicon Valley veterans, seed funding up to ₹1 Crore, and shared lab access to turn your code into a company.</p>
                        <div className="flex flex-wrap justify-center gap-6 pt-4">
                            <div className="px-8 py-4 rounded-2xl bg-black/40 border border-white/10">
                                <p className="text-sm uppercase tracking-widest text-white/40 mb-1">Max Funding</p>
                                <p className="text-2xl font-bold text-accent">₹1 Crore</p>
                            </div>
                            <div className="px-8 py-4 rounded-2xl bg-black/40 border border-white/10">
                                <p className="text-sm uppercase tracking-widest text-white/40 mb-1">Equity</p>
                                <p className="text-2xl font-bold text-accent">Student-First</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Entrepreneurship Key Features */}
            <section className="py-24 px-6 bg-background relative overflow-hidden">
                <div className="container-boxed max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-6 space-y-12">
                            <h2 className="text-h2 text-foreground">Key Features</h2>
                            <div className="space-y-10">
                                {entrepreneurshipKeyFeatures.map((item) => (
                                    <div key={item.num} className="flex gap-8 items-start group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-xl font-orbitron font-bold text-accent group-hover:bg-accent group-hover:text-black transition-all">
                                            {item.num}
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-body text-foreground">{item.title}</p>
                                            <ul className="space-y-3">
                                                {item.points.map((point, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-foreground/60 leading-relaxed font-bold">
                                                        <span className="mt-2 w-2 h-2 rounded-full bg-accent/40 flex-shrink-0" />
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
                            <div className="relative aspect-square md:aspect-[5/6] rounded-[4rem] overflow-hidden border border-white/5 shadow-2x-strong group">
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
            <section className="py-24 px-6 bg-accent relative overflow-hidden">
                <div className="container-boxed max-w-6xl mx-auto space-y-16">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-black text-left">Facilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {facilities.map((item) => (
                            <div key={item.num} className="glass p-10 rounded-2xl bg-black/5 border-black/10 flex gap-8 items-center group hover:bg-black/10 transition-all">
                                <span className="text-6xl font-orbitron font-bold text-black/20 group-hover:text-black/40 transition-colors">{item.num}</span>
                                <p className="text-xl md:text-2xl text-black font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <BottomCTA />
        </main>
    );
}
