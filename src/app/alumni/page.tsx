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
            icon: <Users className="w-8 h-8 text-accent" />, 
            desc: 'Guide the next generation of engineers by sharing your industry experience and career insights.' 
        },
        { 
            title: 'Guest Lectures & Workshops', 
            icon: <Presentation className="w-8 h-8 text-accent" />, 
            desc: 'Host specialized sessions to help students bridge the gap between academia and professional life.' 
        },
        { 
            title: 'Placement Opportunities', 
            icon: <Briefcase className="w-8 h-8 text-accent" />, 
            desc: 'Support fellow Aesta-ians by providing referrals/internships within your organization.' 
        },
        { 
            title: 'Collaborate on Projects', 
            icon: <Network className="w-8 h-8 text-accent" />, 
            desc: 'Work together with current students and labs on cutting-edge research and product development.' 
        },
    ];

    return (
        <main className="bg-background min-h-screen text-foreground font-orbitron overflow-x-hidden selection:bg-accent selection:text-black">
            
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/Other/future-faculty-2.webp" 
                        alt="Campus" 
                        fill 
                        className="object-cover opacity-20 filter grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center space-y-10 animate-in fade-in slide-in-from-bottom duration-1000">
                    <div className="inline-block px-6 py-2 rounded-full bg-accent/5 border border-accent/20 text-accent text-[10px] font-black tracking-[0.3em] uppercase mb-4">
                        The Global AESTR Network
                    </div>
                        <h1 className="text-hero text-black">
                            Where our students <br />
                            <span className="opacity-70">are working today</span>
                        </h1>
                    <p className="text-body text-foreground/50 max-w-4xl mx-auto font-bold tracking-tight">
                        The innovators, leaders, and problem-solvers who have passed through our doors are the true testament to the power of future-safe education.
                    </p>
                </div>
            </section>

            {/* Alumni Spotlights Grid */}
            <section className="py-32 relative overflow-hidden px-6 bg-background-alt/20 border-y border-foreground/5">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center mb-24 text-center space-y-6">
                        <span className="text-[10rem] font-black text-foreground/5 absolute top-0 leading-none select-none">ELITE</span>
                        <h2 className="text-4xl md:text-7xl font-black text-foreground uppercase tracking-tighter relative z-10">
                            Alumni <span className="text-accent italic">Spotlights.</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-accent rounded-full relative z-10" />
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-20">
                        {alumniSpotlights.map((alumni, i) => (
                            <div 
                                key={i} 
                                className="glass p-8 rounded-[2.5rem] bg-foreground/5 border border-foreground/5 hover:border-accent/40 hover:bg-accent/5 transition-all duration-700 group flex flex-col items-center text-center space-y-6 cursor-default"
                            >
                                <div className="relative w-28 h-28 md:w-40 md:h-40 mb-2">
                                    <div className="absolute inset-0 rounded-full border-4 border-foreground/5 group-hover:border-accent transition-all duration-700 p-2">
                                        <div className="w-full h-full rounded-full overflow-hidden bg-background relative">
                                            <Image 
                                                src={alumni.image} 
                                                alt={alumni.name} 
                                                fill 
                                                className="object-cover brightness-110 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = `https://ui-avatars.com/api/?name=${alumni.name}&background=111111&color=D8F602&font-size=0.33&bold=true`;
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-h3 text-black">
                                        {alumni.name}
                                    </h3>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/70">{alumni.role}</p>
                                    <div className="pt-4 mt-4 border-t border-foreground/5 w-full">
                                        <p className="text-[11px] text-foreground/30 uppercase tracking-[0.15em] font-black">{alumni.company}</p>
                                        <p className="text-[9px] text-foreground/20 uppercase tracking-widest mt-1">Batch of {alumni.batch}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alumni Engagement Section */}
            <section className="py-40 relative bg-background px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(var(--accent)_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.02]" />
                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col items-center mb-24 text-center space-y-6">

                        <h2 className="text-h2 text-foreground uppercase tracking-tighter">
                            Alumni <span className="text-accent italic">Engagement.</span>
                        </h2>
                        <p className="text-body text-foreground/40 font-bold uppercase tracking-[0.3em]">Build the Ecosystem</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {engagementOpportunities.map((opportunity, i) => (
                            <div 
                                key={i} 
                                className="glass p-12 rounded-[3rem] bg-foreground/5 border border-foreground/5 hover:bg-accent/5 hover:border-accent/30 transition-all duration-700 group flex flex-col items-center text-center"
                            >
                                <div className="mb-10 p-5 rounded-2xl bg-accent/5 border border-accent/10 transition-transform duration-700 group-hover:scale-110 shadow-xl group-hover:shadow-accent/20">
                                    {opportunity.icon}
                                </div>
                                <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tighter leading-none group-hover:text-accent transition-colors">
                                    {opportunity.title}
                                </h3>
                                    <p className="text-body text-black/60">
                                        {opportunity.desc}
                                    </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <BottomCTA />

            {/* Aesthetic footer signature */}
            <footer className="py-20 border-t border-foreground/5 px-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12 opacity-30">
                    <div className="flex items-center gap-8">
                        <span className="text-[10px] font-black tracking-[0.4em] uppercase">The Legacy of AESTR Engineers © 2026</span>
                    </div>
                    <div className="flex gap-12">
                        <Link href="/" className="text-[9px] font-black hover:text-accent transition-colors uppercase tracking-[0.4em]">Directory</Link>
                        <Link href="/" className="text-[9px] font-black hover:text-accent transition-colors uppercase tracking-[0.4em]">Events</Link>
                        <Link href="/" className="text-[9px] font-black hover:text-accent transition-colors uppercase tracking-[0.4em]">Support</Link>
                    </div>
                </div>
            </footer>

        </main>
    );
};

export default AlumniPage;
