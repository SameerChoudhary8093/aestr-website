'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StickyAdmissionsBar from '@/components/StickyAdmissionsBar';

const BlogsPage = () => {
    const blogPosts = [
        {
            title: "The Rise of Agentic AI: Why it’s the next Frontier",
            excerpt: "Understanding how autonomous agents are redefining software engineering and industry workflows.",
            author: "Dr. Arastu Sharma",
            date: "Mar 10, 2026",
            category: "Artificial Intelligence",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "RISC-V: India's Path to Semiconductor Sovereignty",
            excerpt: "Why AESTR is betting big on open-source hardware and the future of Indian processors.",
            author: "Kanishk Sharma",
            date: "Feb 28, 2026",
            category: "Hardware",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Embodied Intelligence: Machines that Feel",
            excerpt: "A deep dive into the Robotics lab and how we are building machines that interact with the physical world.",
            author: "Team AESTR",
            date: "Feb 15, 2026",
            category: "Robotics",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "The Ethical Dilemma of Generative Systems",
            excerpt: "How AESTR students are leading the conversation on responsible AI development.",
            author: "Prof. MP Poonia",
            date: "Jan 30, 2026",
            category: "Ethics",
            image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <main className="bg-background min-h-screen text-foreground font-orbitron overflow-x-hidden selection:bg-accent selection:text-black">
            <StickyAdmissionsBar />
            
            {/* Hero Section */}
            <section className="relative pt-32 sm:pt-40 pb-16 lg:pt-64 lg:pb-32 overflow-hidden px-4 sm:px-6 bg-[#D7F601]">
                <div className="container mx-auto relative z-10 text-center">
                    <div className="inline-block px-4 sm:px-6 py-2 rounded-full bg-black text-[#D7F601] text-[8px] sm:text-[10px] font-black tracking-[0.3em] uppercase mb-6 sm:mb-10">
                        Insights & Intelligence
                    </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-hero text-black font-orbitron font-black leading-tight">
                            Insights from <br />
                            <span className="opacity-70">industry experts</span>
                        </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 max-w-4xl mx-auto leading-relaxed font-bold tracking-tight px-4">
                        Explore the latest research, tech breakthroughs, and pedagogical shifts from the architects of India's AI future.
                    </p>
                </div>
                {/* Background pulse */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1200px] lg:h-[1200px] bg-black/10 rounded-full blur-[120px] sm:blur-[180px] pointer-events-none" />
            </section>

            {/* Featured Post */}
            <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative">
                <div className="container mx-auto">
                    <div className="glass rounded-[2rem] sm:rounded-[3rem] lg:rounded-[3.5rem] bg-foreground/5 border border-foreground/5 overflow-hidden flex flex-col lg:flex-row relative group hover:border-accent/40 transition-all duration-700">
                        <div className="w-full lg:w-3/5 h-[300px] sm:h-[350px] lg:h-auto relative">
                            <Image 
                                src={blogPosts[0].image} 
                                alt="Featured Post" 
                                fill 
                                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-60" />
                        </div>
                        <div className="w-full lg:w-2/5 p-6 sm:p-8 md:p-12 lg:p-20 flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8 relative z-10 bg-background/40 backdrop-blur-3xl">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <span className="bg-accent text-black text-[8px] sm:text-[9px] font-black uppercase px-2 sm:px-3 py-1 rounded-full tracking-widest">{blogPosts[0].category}</span>
                                <span className="text-[8px] sm:text-[10px] text-foreground/30 font-black uppercase tracking-widest">{blogPosts[0].date}</span>
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-foreground uppercase tracking-tighter leading-none group-hover:text-accent transition-colors">
                                {blogPosts[0].title}
                            </h2>
                            <p className="text-body text-foreground/50 font-semibold text-sm sm:text-base">
                                {blogPosts[0].excerpt}
                            </p>
                            <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center font-black text-accent text-xs">A</div>
                                <div>
                                    <p className="text-xs font-black text-foreground uppercase tracking-widest">{blogPosts[0].author}</p>
                                    <p className="text-[8px] sm:text-[10px] text-foreground/30 uppercase tracking-widest mt-1">Founding Member</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-background-alt/20 border-y border-foreground/5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                        {blogPosts.slice(1).map((post, i) => (
                            <div key={i} className="glass rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] bg-foreground/5 border border-foreground/5 overflow-hidden group hover:border-accent/40 transition-all duration-700 flex flex-col h-full">
                                <div className="h-48 sm:h-56 lg:h-64 relative overflow-hidden">
                                    <Image 
                                        src={post.image} 
                                        alt={post.title} 
                                        fill 
                                        className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                                        <span className="bg-background-alt/80 backdrop-blur-md text-accent text-[8px] sm:text-[9px] font-black uppercase px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-accent/20 tracking-widest">{post.category}</span>
                                    </div>
                                </div>
                                <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-grow space-y-4 sm:space-y-6">
                                    <div className="text-[8px] sm:text-[10px] text-foreground/30 font-black uppercase tracking-widest">{post.date}</div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-h3 text-black font-orbitron font-bold leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-foreground/50 leading-relaxed font-bold flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="pt-6 sm:pt-8 border-t border-foreground/5 flex items-center justify-between">
                                        <p className="text-[8px] sm:text-[10px] font-black text-foreground/40 uppercase tracking-widest">{post.author}</p>
                                        <span className="text-accent text-lg sm:text-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">→</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 sm:mt-20 lg:mt-24 flex justify-center">
                        <button className="btn-aestr !px-8 sm:!px-10 lg:!px-12 !py-4 sm:!py-5 border-white group text-sm sm:text-base">
                            Load More Intelligence
                            <span className="ml-2 sm:ml-3 group-hover:rotate-90 transition-transform inline-block text-lg sm:text-xl">⊕</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent)_1px,transparent_1px)] bg-[size:40px_40px sm:bg-[size:60px_60px] opacity-[0.03]" />
                <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-8 sm:space-y-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black text-foreground uppercase tracking-tighter leading-tight">
                        Stay Ahead <br /><span className="text-accent italic">Of The Curve.</span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-foreground/50 font-black tracking-tight uppercase px-4">Get the latest AI breakthroughs delivered to your inbox.</p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto">
                        <input 
                            type="email" 
                            placeholder="YOUR@PROFESSIONAL.EMAIL" 
                            className="flex-1 bg-foreground/5 border border-foreground/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 text-xs sm:text-sm font-black tracking-widest uppercase focus:outline-none focus:border-accent/40 transition-colors"
                        />
                        <button className="btn-aestr bg-accent text-black !px-6 sm:!px-8 lg:!px-10 !py-3 sm:!py-4 lg:!py-5 font-black uppercase tracking-[0.2em] text-sm sm:text-base">Subscribe</button>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default BlogsPage;
