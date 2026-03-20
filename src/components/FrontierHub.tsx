
'use client';

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FrontierHub = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const videoContainerRef = useRef<HTMLDivElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

    useEffect(() => {
        const el = videoContainerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry?.isIntersecting) {
                    setShouldLoadVideo(true);
                    observer.disconnect();
                }
            },
            { root: null, threshold: 0.2 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const toggleVideoPlayback = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            void video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const scrollToNextSection = () => {
        const el = document.getElementById("about-top-one-percent");
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const openAlphaSite = () => {
        window.open("https://www.aestralpha.com/", "_blank", "noopener,noreferrer");
    };

    return (
        <section className="relative min-h-[calc(100svh-4rem)] py-20 md:py-24 bg-background overflow-hidden">
            {/* Neural Network Background - Keeping the existing particles if needed, but the new design focus is on the branded blocks */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-gradient-to-b from-purple/5 to-transparent" />

            <div className="container-boxed relative z-10">
                {/* Main Branded Header Block */}
                <div className="bg-[#D8F602] rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden mb-16">
                    {/* Top Bar inside Lime Block */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 lg:mb-12">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center">
                                <svg className="w-full h-full text-purple" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                                    <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M20 2L20 38M2 20H38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <circle cx="20" cy="20" r="3" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="text-purple font-orbitron font-black text-sm md:text-base tracking-[0.2em] uppercase">
                                Welcome to the frontier:
                            </h3>
                        </div>

                        <div className="bg-black px-6 py-4 rounded-3xl shadow-lg self-end md:self-auto border-2 border-white/20 lg:translate-x-4">
                            <div className="w-48 md:w-64 relative h-12 md:h-16">
                                <Image
                                    src="/Herosection/by gyan vihar 2 neon.png"
                                    alt="AESTR Logo"
                                    fill
                                    className="object-contain brightness-150 contrast-125"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
                        <div className="lg:col-span-5">
                            {/* Main Heading */}
                            <h2 className="text-[48px] font-orbitron font-black text-black leading-none tracking-tight whitespace-nowrap -mt-9">
                                INDIA'S SOVEREIGN AI HUB
                            </h2>

                            {/* B.Tech AI Powered by Shodh AI Card */}
                            <div className="glass !bg-[#000000] p-8 md:p-10 rounded-[2.5rem] border border-white/5 inline-block max-w-lg shadow-2xl mt-16" style={{ height: '440px' }}>
                                <h4 className="text-[24px] font-orbitron font-black text-[#D8F602] mb-5">
                                    B.Tech AI
                                </h4>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-white text-2xl font-orbitron font-extrabold">Powered by</span>
                                    <div className="relative w-36 h-9">
                                        <Image
                                            src="/ProgramPartners/Shodh-ai.svg"
                                            alt="Shodh AI"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <p className="text-white/80 text-[16px] leading-relaxed font-medium">
                                    This course is started by Dr. Arastu, CEO of Shodh AI, to
                                    prepare the AI engineers that India needs to lead the world.
                                    The premier Elite 60 program is highly selective and is built
                                    for engineers of 2030.
                                    <br /><br />
                                    The cohort students will work with senior engineers at
                                    Shodh, build data pipelines, create model architectures, and
                                    spend years in the toil and hard work of building the depth of
                                    mathematics that is required to build the future of AI itself.
                                </p>
                            </div>
                        </div>

                        {/* Interactive Media Section */}
                        <div className="lg:col-span-7 relative group flex items-start">
                            <div ref={videoContainerRef} className="relative rounded-[2.5rem] overflow-hidden border-2 border-gray-300 shadow-lg mt-19">
                                <div
                                    className="relative"
                                    style={{ height: '440px' }}
                                >
                                    <video
                                        className="w-full h-full object-cover"
                                        style={{ height: '440px' }}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        controls
                                    >
                                        <source src="/pm-video.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Level: Narrative Paragraph with Image - New Design */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-15xl mb-24 px-4 mx-auto"
                >
                    <div className="relative">
                        {/* Background decorative elements */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple/20 rounded-full blur-3xl"></div>

                        {/* Main content container */}
                        <div className="relative bg-[#5B1DD6] backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl">

                            {/* Main content grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                                {/* Left side - Text content */}
                                <div className="lg:col-span-7 space-y-8">
                                    <div className="relative">
                                        <p className="text-[48px] font-orbitron font-black text-white leading-tight mb-8 relative z-10 whitespace-nowrap">
                                            The B.Tech is dead
                                        </p>
                                        <p className="text-[16px] text-white/90 leading-relaxed relative z-10 max-w-3xl">
                                            The AESTR Solution: The 4-Year Engineering Residency AESTR by Gyan Vihar is built on a single, uncompromising premise: Stop studying. Start building. We are not a college we are a Silicon Valley-style incubator.
                                        </p>
                                    </div>

                                    <div className="relative">
                                        <p className="text-[16px] text-white/90 leading-relaxed md:leading-loose">
                                            At the core of this ecosystem is <a href="https://shodh.ai/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-4 py-1.5 mx-1 bg-white text-[#5B1DD6] text-sm md:text-base font-orbitron font-extrabold rounded-full hover:bg-accent hover:text-black transition-colors shadow-lg align-middle translate-y-[-2px]">Shodh AI ↗</a>India's premier frontier AI company. As one of the 12 companies handpicked for the <span className="text-accent font-semibold">INDIA AI Mission</span>, they are building the nation's sovereign foundational models and the world's first large Physics Model to solve massive, future-defining problems.
                                        </p>
                                    </div>
                                </div>

                                {/* Right side - Enhanced image */}
                                <div className="lg:col-span-5">
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative group"
                                    >
                                        {/* Glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 via-purple/30 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                                        {/* Image frame */}
                                        <div className="relative bg-black/30 rounded-2xl overflow-hidden border border-white/20">
                                            <Image
                                                src="/modi.jpeg"
                                                alt="PM Modi with Shodh AI CEO"
                                                width={600}
                                                height={400}
                                                className="w-full h-auto object-cover"
                                            />

                                            {/* Overlay gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                            {/* Floating badges */}
                                            <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                                                <span className="text-black font-orbitron font-bold text-xs">INDIA AI MISSION</span>
                                            </div>

                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[92%] bg-white py-1 md:py-2 px-4 md:px-6 rounded-xl shadow-2xl flex items-center justify-center border-2 border-black/10">
                                                <p className="text-black font-orbitron font-black text-[16px] text-center leading-tight tracking-wide flex items-center justify-center gap-2">
                                                    <span>B.Tech AI is the</span>
                                                    <span className="inline-flex items-center justify-center bg-[#5B1DD6] px-3 py-1 rounded-full shadow-sm">
                                                        <Image
                                                            src="/Herosection/india-ai-logo-white.png"
                                                            alt="INDIAai logo"
                                                            width={120}
                                                            height={28}
                                                            className="h-6 md:h-7 w-auto object-contain"
                                                        />
                                                    </span>
                                                    <span>company</span>
                                                </p>
                                            </div>
                                        </div>

                                        {/* Decorative corner */}
                                        <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-accent rounded-tr-lg"></div>
                                        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-accent rounded-bl-lg"></div>
                                    </motion.div>
                                </div>
                            </div>


                            {/* Third Level: Strike Forces */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 mb-8">
                                {/* AESTR ALPHA */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="glass p-8 md:p-12 space-y-6 border border-accent/10 hover:border-accent/30 transition-all duration-500 bg-white/5 rounded-[2.5rem]"
                                >
                                    <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-orbitron text-xs font-bold tracking-widest uppercase">
                                        6-Month Career Residency
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-orbitron font-extrabold text-foreground">Aestr Alpha</h3>
                                    <p className="text-foreground/80 leading-relaxed text-lg">
                                        Fast-tracks ambitious graduates into high-paying Enterprise Cloud, Data, and Backend roles at global tech giants.
                                    </p>
                                    <button onClick={openAlphaSite} className="btn-aestr flex items-center gap-3">
                                        Apply for Alpha
                                        <span className="text-xl">↗</span>
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default FrontierHub;
