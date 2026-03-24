'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import StickyAdmissionsBar from '@/components/StickyAdmissionsBar';

const BlogsPage = () => {
    const blogPosts = [
        {
            title: "The Rise of Agentic AI: Why it's the next Frontier",
            excerpt: "Understanding how autonomous agents are redefining software engineering and industry workflows.",
            author: "Dr. Arastu Sharma",
            date: "Mar 10, 2026",
            category: "Artificial Intelligence",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
            categoryColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
        },
        {
            title: "RISC-V: India's Path to Semiconductor Sovereignty",
            excerpt: "Why AESTR is betting big on open-source hardware and the future of Indian processors.",
            author: "Kanishk Sharma",
            date: "Feb 28, 2026",
            category: "Hardware",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
            categoryColor: "bg-orange-500/10 text-orange-400 border-orange-500/20"
        },
        {
            title: "Embodied Intelligence: Machines that Feel",
            excerpt: "A deep dive into the Robotics lab and how we are building machines that interact with the physical world.",
            author: "Team AESTR",
            date: "Feb 15, 2026",
            category: "Robotics",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
            categoryColor: "bg-green-500/10 text-green-400 border-green-500/20"
        },
        {
            title: "The Ethical Dilemma of Generative Systems",
            excerpt: "How AESTR students are leading the conversation on responsible AI development.",
            author: "Prof. MP Poonia",
            date: "Jan 30, 2026",
            category: "Ethics",
            image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
            categoryColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
        }
    ];

    return (
        <>
            <meta name="description" content="Explore the latest research, tech breakthroughs, and pedagogical shifts from the architects of India's AI future at AESTR's Insights & Intelligence blog." />
            
            <main className="bg-background min-h-screen text-foreground font-orbitron overflow-x-hidden selection:bg-accent selection:text-black">
                <StickyAdmissionsBar />
                
                {/* Hero Section - The Hook - Purple Background */}
                <section className="relative pt-40 pb-0 px-4 bg-[#5B1DD6]">
                    <div className="container mx-auto max-w-7xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center justify-center w-full"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black text-white mb-4 leading-tight mx-auto">
                                Insights &amp; Intelligence
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-orbitron whitespace-nowrap mx-auto text-center mb-0">
                                Exploring the latest research, tech breakthroughs, and pedagogical shifts from the architects of India's AI future.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Featured Post - The Spotlight - Purple Background */}
                <section className="py-16 px-4 bg-[#5B1DD6]">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="bg-black/50 backdrop-blur-sm border border-black/20 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="lg:w-1/2 h-64 lg:h-auto relative">
                                        <Image 
                                            src={blogPosts[0].image} 
                                            alt="Featured Post" 
                                            fill 
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${blogPosts[0].categoryColor}`}>
                                                    {blogPosts[0].category}
                                                </span>
                                                <span className="text-sm text-white/70">{blogPosts[0].date}</span>
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-orbitron font-black text-white mb-4 leading-tight group-hover:text-accent transition-colors">
                                                {blogPosts[0].title}
                                            </h2>
                                            <p className="text-white/80 leading-relaxed mb-6 font-orbitron">
                                                {blogPosts[0].excerpt}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                                                    <span className="text-accent font-semibold text-sm">AS</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-white font-orbitron">{blogPosts[0].author}</p>
                                                    <p className="text-xs text-white/70 font-orbitron">Founding Member</p>
                                                </div>
                                            </div>
                                            <span className="text-accent text-xl group-hover:translate-x-2 transition-transform inline-block">
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Main Blog Feed - Grid Layout - Neon Background */}
                <section className="py-16 px-4 bg-[#D7F601]">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.slice(1).map((post, index) => (
                                <motion.article
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                    className="group cursor-pointer"
                                >
                                    <div className="bg-black/50 backdrop-blur-sm border border-black/20 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                                        <div className="h-48 relative">
                                            <Image 
                                                src={post.image} 
                                                alt={post.title} 
                                                fill 
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${post.categoryColor}`}>
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="text-sm text-white/70 mb-3 font-orbitron">{post.date}</div>
                                            <h3 className="text-xl font-orbitron font-black text-white mb-3 leading-tight group-hover:text-accent transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-white/60 leading-relaxed mb-6 flex-grow font-orbitron">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between pt-4 border-t border-black/20">
                                                <span className="text-sm text-white/70 font-orbitron">{post.author}</span>
                                                <span className="text-accent text-lg group-hover:translate-x-2 transition-transform inline-block opacity-0 group-hover:opacity-100">
                                                    →
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter/Call to Action - The Retention - Continue Neon Theme */}
                <section className="py-24 px-4 bg-[#D7F601]">
                    <div className="container mx-auto max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-orbitron font-black text-black mb-4">
                                Stay Ahead of the Curve
                            </h2>
                            <p className="text-black/70 mb-8 max-w-2xl mx-auto font-orbitron">
                                Get the latest AI breakthroughs, research insights, and tech trends delivered directly to your inbox.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="flex-1 px-4 py-3 bg-black/50 border border-black/20 rounded-xl focus:outline-none focus:border-accent/50 transition-colors text-black placeholder-black/50 font-orbitron"
                                    required
                                />
                                <button 
                                    type="submit"
                                    className="px-6 py-3 bg-black text-[#D7F601] font-orbitron font-semibold rounded-xl hover:bg-black/90 transition-colors focus:outline-none focus:ring-2 focus:ring-black/50"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <p className="text-xs text-black/60 mt-4 font-orbitron">
                                Join 10,000+ professionals getting weekly AI insights. No spam, ever.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default BlogsPage;
