'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BottomCTA from '@/components/BottomCTA';


const CollaborationsPage = () => {
    return (
        <main className="bg-background min-h-screen text-foreground font-orbitron overflow-x-hidden selection:bg-accent selection:text-black">
            
            {/* Hero Section */}
            <section className="relative pt-48 pb-24 lg:pt-64 lg:pb-32 overflow-hidden px-6 bg-[#5B1DD6]">
                <div className="container-boxed relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-[55%] space-y-8 animate-in fade-in slide-in-from-left duration-1000 text-left">
                            <h1 className="text-hero font-black leading-tight uppercase tracking-tight text-white">
                                Your Global Engineering <br />
                                <span className="text-accent">Journey Starts Here</span>
                            </h1>
                            <div className="space-y-6">
                                <h3 className="text-h3 font-bold text-white/80 italic font-playfair">
                                    A Partnership Built for Your Future
                                </h3>
                                <p className="text-lg text-white/70 max-w-2xl leading-relaxed font-outfit">
                                    Imagine a world-class engineering education that takes you from India to the USA. That's exactly what the new AESTR x Roosevelt University, USA collaboration offers! We're teaming up to give aspiring engineers like you unparalleled global learning, amazing career opportunities, and exposure to cutting-edge industries.
                                </p>
                            </div>
                        </div>
                        
                        <div className="w-full lg:w-[45%] relative group animate-in fade-in slide-in-from-right duration-1000">
                            <div className="aspect-[4/3] bg-black/60 rounded-3xl border border-white/20 overflow-hidden relative shadow-[0_32px_80px_rgba(0,0,0,0.8)] transition-all duration-700 hover:border-accent/60 group-hover:shadow-[0_32px_80px_rgba(0,0,0,0.95)]">
                                <Image 
                                    src="/Other/lab-5.webp" 
                                    alt="Roosevelt University Campus" 
                                    fill 
                                    className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transition-transform duration-500 group-hover:scale-110">
                                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative background blur */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/30 rounded-full blur-[110px] -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Path to Dual Degree */}
            <section className="py-24 relative overflow-hidden bg-white text-black">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="mb-16 space-y-4">
                        <h2 className="text-h2 font-black uppercase tracking-tight font-orbitron">
                            Your Path to a Dual Degree
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto font-outfit">
                            For too long, the story of engineering in India has been a paradox. We produce millions of engineers, yet industries lament a scarcity of "hirable" talent.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Card 1 */}
                        <div className="rounded-[2.5rem] bg-[#F3E8FF] border border-purple-100 overflow-hidden text-left flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                            <div className="aspect-[16/9] relative">
                                <Image src="/Other/future-faculty-1.webp" alt="Global Classroom" fill className="object-cover" />
                            </div>
                            <div className="p-8 md:p-10 space-y-6 flex-grow">
                                <h3 className="text-h3 font-black uppercase tracking-tight font-orbitron">Your Path to a Dual Degree</h3>
                                <div className="space-y-4 font-outfit">
                                    <p className="text-sm leading-relaxed">
                                        <span className="font-bold">Years 1 & 2:</span> You'll start strong at AESTR right here in India, building a solid foundation in engineering.
                                    </p>
                                    <p className="text-sm leading-relaxed">
                                        <span className="font-bold">Years 3 & 4:</span> Then, you'll jet off to Roosevelt University in the U.S. to complete your degree.
                                    </p>
                                    <p className="text-sm leading-relaxed">
                                        <span className="font-bold underline decoration-accent decoration-2 underline-offset-4 italic">Result:</span> You graduate with a globally recognized degree and incredible international experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-[2.5rem] bg-[#F3E8FF] border border-purple-100 overflow-hidden text-left flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                            <div className="aspect-[16/9] relative">
                                <Image src="/Other/lab-3.webp" alt="Innovation Lab" fill className="object-cover" />
                            </div>
                            <div className="p-8 md:p-10 space-y-6 flex-grow">
                                <h3 className="text-h3 font-black uppercase tracking-tight font-orbitron">The "3+1" Immersion:</h3>
                                <div className="space-y-4 font-outfit">
                                    <p className="text-sm leading-relaxed">
                                        <span className="font-bold">Years 1-3:</span> You'll get comprehensive knowledge and skills during your studies at AESTR.
                                    </p>
                                    <p className="text-sm leading-relaxed">
                                        <span className="font-bold">Years 4:</span> Your final year will be spent at Roosevelt University in the U.S., diving deep into advanced research, innovation labs, and expanding your professional network.
                                    </p>
                                    <p className="text-sm leading-relaxed">
                                        <span className="font-bold underline decoration-accent decoration-2 underline-offset-4 italic">Ideal for:</span> Students who want an intensive international capstone year.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Smooth Sailing Section */}
            <section className="py-24 relative overflow-hidden bg-white text-black border-t border-gray-100">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-h2 font-black uppercase tracking-tight font-orbitron">
                            Smooth Sailing to the USA
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-outfit">
                            We know moving abroad can be daunting, so we're making it easy:
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto border border-gray-100 rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center gap-16 shadow-sm">
                        {/* Visa */}
                        <div className="flex-1 flex flex-col items-center text-center space-y-8">
                            <div className="w-48 h-48 relative">
                                {/* Use an illustrative icon or emoji if image path is unknown, but here I'll use a placeholder representing the visa icon */}
                                <div className="w-full h-full bg-blue-50 rounded-full flex items-center justify-center text-8xl">🛂</div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-h3 font-black uppercase tracking-tight font-orbitron italic">Hassle-Free Visa:</h3>
                                <p className="text-gray-600 leading-relaxed font-outfit">
                                    Our dedicated team works directly with U.S. immigration experts to guide you through every step of your visa application. No stress, just clear guidance.
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-64 bg-gray-100" />

                        {/* Financial */}
                        <div className="flex-1 flex flex-col items-center text-center space-y-8">
                            <div className="w-48 h-48 relative">
                                <div className="w-full h-full bg-green-50 rounded-full flex items-center justify-center text-8xl">💰</div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-h3 font-black uppercase tracking-tight font-orbitron italic">No Financial Worries:</h3>
                                <p className="text-gray-600 leading-relaxed font-outfit">
                                    We're partnering with financial institutions to offer collateral-free educational loans. This means financial barriers won't stop you from chasing your global dreams.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Launch Your Global Career Section */}
            <section className="py-24 relative overflow-hidden bg-white text-black">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-h2 font-black uppercase tracking-tight font-orbitron">
                            Launch Your Global Career
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto font-outfit">
                            Studying at Roosevelt University isn't just about academics; it's about opening doors to your future:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {[
                            { 
                                icon: '🎓', 
                                title: 'Amazing Internships', 
                                desc: 'Access a wide network for global internships and get dedicated support for job placement.',
                                highlight: false
                            },
                            { 
                                icon: '💻', 
                                title: 'Stay & Work in the U.S', 
                                desc: 'As a STEM graduate, you\'re eligible for the STEM OPT extension, allowing you to stay and work in the U.S. for up to 3 years after you graduate.',
                                highlight: false
                            },
                            { 
                                icon: '🎧', 
                                title: 'Industry Connections', 
                                desc: 'Get direct exposure to top international industry leaders, bustling research parks, and dynamic tech communities.',
                                highlight: true
                            },
                            { 
                                icon: '📜', 
                                title: 'Build Your Network', 
                                desc: 'Connect with a vast global alumni community and experienced mentors who can guide your career.',
                                highlight: false
                            }
                        ].map((item, i) => (
                            <div key={i} className={`p-8 rounded-[2rem] border ${item.highlight ? 'bg-[#C084FC] border-purple-400 text-white' : 'bg-white border-gray-100 text-black'} shadow-sm flex flex-col items-center text-center space-y-6 h-full transition-transform hover:-translate-y-2`}>
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl ${item.highlight ? 'bg-white/20' : 'bg-gray-50'}`}>
                                    {item.icon}
                                </div>
                                <h4 className="text-h3 font-black uppercase tracking-tight font-orbitron leading-tight">{item.title}</h4>
                                <p className={`text-sm font-outfit ${item.highlight ? 'text-white/90' : 'text-gray-600'}`}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Campus Life Section - Special Grid */}
            <section className="py-24 relative overflow-hidden bg-white text-black border-t border-gray-100">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-h2 font-black uppercase tracking-tight font-orbitron">
                            Campus Life
                        </h2>
                    </div>
                    
                    <div className="max-w-7xl mx-auto space-y-8">
                        {/* Top Two Large Images with Icon Junction */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative items-center">
                            <div className="aspect-[16/10] rounded-[2rem] overflow-hidden relative shadow-lg">
                                <Image src="/Other/future-faculty-2.webp" alt="Campus View 1" fill className="object-cover" />
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Center Icon Junction */}
                            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 items-center justify-center">
                                <div className="w-12 h-12 bg-[#D8F602] rotate-45 flex items-center justify-center rounded-lg shadow-xl shadow-accent/20 border-4 border-white">
                                    <div className="w-6 h-6 border-l-4 border-t-4 border-black -rotate-45 translate-x-1 translate-y-1" />
                                    <div className="w-6 h-6 border-r-4 border-b-4 border-black -rotate-45 -translate-x-1 -translate-y-1 absolute" />
                                </div>
                            </div>

                            <div className="aspect-[16/10] rounded-[2rem] overflow-hidden relative shadow-lg">
                                <Image src="/Other/lab-4.webp" alt="Campus View 2" fill className="object-cover" />
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-right">
                                    <div className="ml-auto w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Four Small Images */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-square rounded-2xl overflow-hidden relative shadow-md group">
                                    <Image 
                                        src={`/Other/lab-${i}.webp`} 
                                        alt={`Campus Thumbnail ${i}`} 
                                        fill 
                                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 px-6 bg-[#5B1DD6] text-black">
                <div className="container mx-auto max-w-6xl">
                    <div className="bg-white p-12 md:p-24 rounded-[4rem] border border-white/20 flex flex-col items-center justify-center text-center gap-12 relative overflow-hidden group shadow-[0_24px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_28px_70px_rgba(0,0,0,0.7)]">
                        <div className="space-y-6 relative z-10">
                            <h2 className="text-h2 font-black uppercase tracking-tight font-orbitron">
                                Ready to Take the <br />
                                <span className="text-[#C084FC]">Next Step?</span>
                            </h2>
                            <p className="text-lg text-gray-600 font-outfit max-w-2xl mx-auto">
                                Join the next cohort of global engineering pioneers and build your future without borders.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Shared Bottom CTA + Footer for consistency */}
            <BottomCTA />
        </main>
    );
};

export default CollaborationsPage;
