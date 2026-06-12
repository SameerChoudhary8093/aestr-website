'use client';

import React from 'react';
import Image from 'next/image';
import Link from '@/components/AppLink';
import { motion } from 'framer-motion';
import StickyAdmissionsBar from '@/components/StickyAdmissionsBar';
import { blogPosts } from '@/data/blogs';

const BlogsPage = () => {
    // Featured post is the first one
    const featuredPost = blogPosts[0];
    // Remaining posts for the grid
    const feedPosts = blogPosts.slice(1);

    return (
        <>
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
                            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-orbitron mx-auto text-center mb-0">
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
                        >
                            <Link href={`/blogs/${featuredPost.slug}`} className="group block">
                                <div className="bg-black/50 backdrop-blur-sm border border-black/20 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                                    <div className="flex flex-col lg:flex-row">
                                        <div className="lg:w-1/2 h-64 lg:h-auto relative">
                                            <Image 
                                                src={featuredPost.image} 
                                                alt={featuredPost.title} 
                                                fill 
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center gap-4 mb-4">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${featuredPost.categoryColor}`}>
                                                        {featuredPost.category}
                                                    </span>
                                                    <span className="text-sm text-white/70">{featuredPost.date}</span>
                                                </div>
                                                <h2 className="text-2xl md:text-3xl font-orbitron font-black text-white mb-4 leading-tight group-hover:text-accent transition-colors">
                                                    {featuredPost.title}
                                                </h2>
                                                <p className="text-white/80 leading-relaxed mb-6 font-orbitron">
                                                    {featuredPost.excerpt}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                                                        <span className="text-accent font-semibold text-sm">
                                                            {featuredPost.author.split(' ').map(n => n[0]).join('')}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-white font-orbitron">{featuredPost.author}</p>
                                                        <p className="text-xs text-white/70 font-orbitron">Thought Leader</p>
                                                    </div>
                                                </div>
                                                <span className="text-accent text-xl group-hover:translate-x-2 transition-transform inline-block">
                                                    →
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Main Blog Feed - Grid Layout - Neon Background */}
                <section className="py-16 px-4 bg-[#D7F601]">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {feedPosts.map((post, index) => (
                                <motion.article
                                    key={post.slug}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                >
                                    <Link href={`/blogs/${post.slug}`} className="group block h-full">
                                        <div className="bg-black border border-white/5 rounded-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(215,246,1,0.15)] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col group/card">
                                            <div className="h-60 relative overflow-hidden">
                                                <Image 
                                                    src={post.image} 
                                                    alt={post.title} 
                                                    fill 
                                                    className="object-cover group-hover/card:scale-110 transition-transform duration-1000 ease-out"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                                <div className="absolute top-4 left-4">
                                                    <span className={`px-3 py-1.5 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold border ${post.categoryColor} backdrop-blur-xl bg-black/40`}>
                                                        {post.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-8 flex flex-col flex-grow bg-black relative">
                                                {/* Decorative Accent Line */}
                                                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
                                                
                                                <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-4 font-orbitron font-black">{post.date}</div>
                                                <h3 className="text-xl md:text-2xl font-orbitron font-black text-white mb-4 leading-[1.2] group-hover:text-accent transition-colors duration-300">
                                                    {post.title}
                                                </h3>
                                                <p className="text-white/80 text-sm leading-relaxed mb-8 flex-grow font-orbitron font-medium line-clamp-3">
                                                    {post.excerpt}
                                                </p>
                                                
                                                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20 group-hover/card:border-accent/50 transition-colors">
                                                            <span className="text-[10px] text-accent font-black">
                                                                {post.author.split(' ').map(n => n[0]).join('')}
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-[9px] uppercase tracking-widest text-white/40 font-orbitron font-bold">Written By</span>
                                                            <span className="text-[11px] uppercase tracking-wider text-white font-orbitron font-black">{post.author}</span>
                                                        </div>
                                                    </div>
                                                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/card:border-accent/50 group-hover/card:bg-accent/5 transition-all duration-300">
                                                        <span className="text-accent text-xl group-hover:translate-x-1 transition-transform inline-block">
                                                            →
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>


            </main>
        </>
    );
};

export default BlogsPage;
