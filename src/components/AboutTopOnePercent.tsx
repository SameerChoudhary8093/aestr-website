'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const YouTubePlayer = ({ videoId, title }: { videoId: string; title: string }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    if (isPlaying) {
        return (
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        );
    }

    return (
        <div
            className="relative w-full h-full cursor-pointer group"
            onClick={() => setIsPlaying(true)}
        >
            <Image
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Transparent Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-500">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                    >
                        <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

const AboutTopOnePercent = () => {
    return (
        <section className="relative py-24 bg-background-alt overflow-hidden">
            {/* Ambient subtle shapes - Neon accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
            </div>

            <div className="container-boxed relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-4 text-left">
                            <h2 className="text-h2 font-orbitron leading-tight flex flex-wrap items-center gap-2 md:gap-3 text-foreground">
                                B.Tech for <span className="text-accent">the top 1%</span>
                            </h2>
                            <p className="text-body text-foreground/80 max-w-2xl leading-relaxed">
                                Blend of deep CS knowledge with expertise in healthcare, nanotech, robotics, and material science.
                            </p>
                        </div>
                        <Link href="/btech-ai-shodh-ai" className="btn-aestr group whitespace-nowrap self-start">
                            Btech AI with Shodh AI
                            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2">↗</span>
                        </Link>
                    </div>

                    {/* Specialization Card */}
                    <div className="glass p-5 md:p-8 rounded-2xl md:rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center overflow-hidden">
                        {/* Left: Video Embed */}
                        <div className="aspect-video w-full rounded-xl md:rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative group bg-black">
                            <YouTubePlayer
                                videoId="mA3Z2VYMNXo"
                                title="B.Tech for The top 1%"
                            />
                        </div>

                        {/* Right: Specializations */}
                        <div className="space-y-6 md:space-y-8 text-left">
                            <div className="space-y-4">
                                <h3 className="text-h3 font-orbitron text-foreground leading-tight">B.Tech Computer Science & Engineering</h3>

                                <div className="space-y-4 md:space-y-6">
                                    <h4 className="subheading-font text-white font-medium uppercase tracking-widest">Major specialization</h4>
                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        {[
                                            { name: "Software Engineering", href: "/software-engineering" },
                                            { name: "Cloud Engineering", href: "/btech-cloud-engineering" },
                                            { name: "Data Science", href: "/data-science" },
                                            { name: "Artificial Intelligence & Machine Learning", href: "/ai-ml" },
                                            { name: "Cyber Security", href: "/cyber-security" }
                                        ].map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="px-5 py-2.5 text-sm md:text-base bg-foreground/5 border border-foreground/10 text-foreground/80 rounded-lg font-medium transition-all cursor-pointer hover:border-accent/40 hover:text-accent hover:bg-accent/5 backdrop-blur-sm shadow-sm"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4 md:space-y-6 pt-4">
                                    <h4 className="subheading-font text-white font-medium uppercase tracking-widest">Minor specialization along with one major</h4>
                                    <div className="flex flex-wrap gap-2 md:gap-2.5">
                                        {["Robotics", "Bioinformatics", "Industry & Manufacturing", "Design", "Fintech", "Nanotechnology", "Geoinformatics", "Chip & Semiconductor", "Smart Cities"].map((item) => (
                                            <span key={item} className="px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm bg-foreground/5 border border-foreground/10 text-foreground/80 rounded-lg font-medium transition-all cursor-default hover:border-accent/40 hover:text-accent whitespace-nowrap">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutTopOnePercent;
