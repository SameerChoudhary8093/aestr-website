'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, GraduationCap, Briefcase, Network, MessageSquare, Award, Presentation, Heart } from 'lucide-react';
import BottomCTA from '@/components/BottomCTA';

const AlumniPage = () => {
    const alumniSpotlights = [
        { name: 'Aditya Verma', role: 'Senior AI Engineer', company: 'Google', batch: '2021', image: '/Alumni/Alumni-1.png' },
        { name: 'Suhani Sharma', role: 'Robotics Researcher', company: 'NVIDIA', batch: '2020', image: '/Alumni/Alumni-2.png' },
        { name: 'Rohan Gupta', role: 'Founding Engineer', company: 'Shodh AI', batch: '2022', image: '/Alumni/Alumni-3.png' },
        { name: 'Ishita Kapoor', role: 'Machine Learning Lead', company: 'Microsoft', batch: '2019', image: '/Alumni/Alumni-4.png' },
        { name: 'Kabir Singh', role: 'Cloud Architect', company: 'Amazon', batch: '2021', image: '/Alumni/Alumni-5.png' },
        { name: 'Ananya Roy', role: 'Product Manager', company: 'Tesla', batch: '2020', image: '/Alumni/Alumni-6.png' },
        { name: 'Vikram Mehta', role: 'Cybersecurity Expert', company: 'CrowdStrike', batch: '2018', image: '/Alumni/Alumni-7.png' },
        { name: 'Prisha Das', role: 'Data Scientist', company: 'Apple', batch: '2022', image: '/Alumni/Alumni-8.png' },
    ];

    const engagementOpportunities = [
        { 
            title: 'Mentorship Program', 
            icon: <Users className="w-8 h-8 text-[#FFD700]" />, 
            desc: 'Guide the next generation of engineers by sharing your industry experience and career insights.' 
        },
        { 
            title: 'Guest Lectures & Workshops', 
            icon: <Presentation className="w-8 h-8 text-[#FFD700]" />, 
            desc: 'Host specialized sessions to help students bridge the gap between academia and professional life.' 
        },
        { 
            title: 'Placement Opportunities', 
            icon: <Briefcase className="w-8 h-8 text-[#FFD700]" />, 
            desc: 'Support fellow Aesta-ians by providing referrals/internships within your oraganization.' 
        },
        { 
            title: 'Collaborate on Projects', 
            icon: <Network className="w-8 h-8 text-[#FFD700]" />, 
            desc: 'Work together with current students and labs on cutting-edge research and product development.' 
        },
    ];

    return (
        <main className="bg-[#0A1128] min-h-screen text-white font-roboto overflow-x-hidden selection:bg-[#FFD700] selection:text-black">
            
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/Other/future-faculty-2.webp" 
                        alt="Campus" 
                        fill 
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/80 via-[#0A1128]/60 to-[#0A1128]" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FFD700] text-xs font-orbitron tracking-widest uppercase mb-4">
                        The Global AESTR Network
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-orbitron font-bold leading-tight uppercase tracking-tighter">
                        Our Alumni, <br />
                        <span className="text-[#FFD700] italic">Our Legacy.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed font-light">
                        The innovators, leaders, and problem-solvers who have passed through our doors are the true testament to the power of future-safe education.
                    </p>
                </div>
            </section>

            {/* Alumni Spotlights Grid */}
            <section className="py-24 relative overflow-hidden px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center mb-20 text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-widest">
                            Alumni <span className="text-[#FFD700]">Spotlights</span>
                        </h2>
                        <p className="text-white/40 font-orbitron uppercase text-xs tracking-[0.5em]">Where Innovation Takes Flight</p>
                        <div className="h-1 w-24 bg-[#FFD700] rounded-full mt-4" />
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {alumniSpotlights.map((alumni, i) => (
                            <div 
                                key={i} 
                                className="glass p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFD700]/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.1)] transition-all duration-500 group flex flex-col items-center text-center space-y-4 cursor-default"
                            >
                                <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
                                    <div className="absolute inset-0 rounded-full border-2 border-[#FFD700]/20 group-hover:border-[#FFD700] group-hover:scale-110 transition-all duration-500" />
                                    <div className="absolute inset-2 rounded-full overflow-hidden bg-white/10">
                                        {/* Using a placeholder if image doesn't exist */}
                                        <Image 
                                            src={alumni.image} 
                                            alt={alumni.name} 
                                            fill 
                                            className="object-cover brightness-110 grayscale hover:grayscale-0 transition-all duration-500"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = `https://ui-avatars.com/api/?name=${alumni.name}&background=0A1128&color=FFD700&font-size=0.33`;
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg md:text-xl font-orbitron font-bold text-white group-hover:text-[#FFD700] transition-colors">{alumni.name}</h3>
                                    <p className="text-xs font-orbitron uppercase tracking-widest text-[#FFD700]/70">{alumni.role}</p>
                                    <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">{alumni.company} • Batch {alumni.batch}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alumni Engagement Section */}
            <section className="py-32 relative bg-black/40 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center mb-20 text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-widest">
                            Alumni <span className="text-[#FFD700]">Engagement</span>
                        </h2>
                        <p className="text-white/40 font-orbitron uppercase text-xs tracking-[0.5em]">Give Back & Grow</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {engagementOpportunities.map((opportunity, i) => (
                            <div 
                                key={i} 
                                className="glass p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-[#FFD700]/30 transition-all duration-500 group"
                            >
                                <div className="mb-8 p-4 w-fit rounded-2xl bg-[#FFD700]/5 border border-[#FFD700]/10 transition-transform duration-500 group-hover:scale-110">
                                    {opportunity.icon}
                                </div>
                                <h3 className="text-xl font-orbitron font-bold text-white mb-4 uppercase tracking-widest leading-tight group-hover:text-[#FFD700] transition-colors">
                                    {opportunity.title}
                                </h3>
                                <p className="text-sm text-white/50 leading-relaxed italic">
                                    {opportunity.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <BottomCTA />

            {/* Aesthetic footer signature (custom for this page) */}
            <div className="pt-0 pb-12 opacity-30 mt-[-40px]">
                <div className="container mx-auto px-6 flex flex-col items-center">
                    <div className="h-px w-full bg-white/10 mb-8" />
                    <p className="text-[10px] font-orbitron tracking-[0.5em] text-white/60 uppercase">The Legacy of AESTR Engineers</p>
                </div>
            </div>

        </main>
    );
};

export default AlumniPage;
