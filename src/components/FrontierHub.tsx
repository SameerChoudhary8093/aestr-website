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

    const openAlphaSite = () => {
        window.open("https://www.aestralpha.com/", "_blank", "noopener,noreferrer");
    };

    return (
        <section className="relative min-h-[calc(100svh-4rem)] py-0 bg-background overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-gradient-to-b from-purple/5 to-transparent" />

            <div className="container-boxed relative z-10">
                {/* 1) SOVEREIGN AI HUB SECTION (Now On Top) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-15xl px-4 mx-auto"
                >
                    <div className="relative">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple/20 rounded-full blur-3xl"></div>

                        <div className="relative bg-[#5B1DD6] backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                                
                                {/* Left side - Text content */}
                                <div className="lg:col-span-7 space-y-6">
                                    <div className="relative">
                                        <p className="text-[40px] md:text-[48px] font-orbitron font-black text-white leading-tight mb-8 relative z-10">
                                            Aestr Is INDIA'S SOVEREIGN AI HUB
                                        </p>
                                    </div>

                                    <div className="relative">
                                        <div className="text-[16px] text-white/90 leading-relaxed md:leading-loose space-y-6">
                                            <p>
                                                Traditional education is dead. Aestr is a unified tech incubator built for one reason: to train the engineers who will architect AI, rather than be replaced by it.
                                                At the core of this ecosystem is <a href="https://shodh.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-1.5 text-black bg-[#D8F602] hover:bg-white rounded-full font-bold transition-colors shadow-lg cursor-pointer mx-1 align-baseline text-[15px] gap-1">Shodh AI <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>—India’s premier frontier AI company. As one of the 12 companies handpicked for the INDIA AI Mission, they are building the nation's sovereign foundational models and the world’s first large Physics Model to solve massive, future-defining problems.
                                                Their aim with this partnership? To forge their own future colleagues and computer scientists from the ground up.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right side - Enhanced image + Strike Forces Block */}
                                <div className="lg:col-span-5 flex flex-col gap-6">
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 via-purple/30 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                                        <div className="relative bg-black/30 rounded-2xl overflow-hidden border border-white/20">
                                            <Image
                                                src="/modi.jpeg"
                                                alt="PM Modi with Shodh AI CEO"
                                                width={600}
                                                height={400}
                                                className="w-full h-auto object-cover"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                            <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                                                <span className="text-black font-orbitron font-bold text-xs">INDIA AI MISSION</span>
                                            </div>

                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-max max-w-[95%] bg-white py-2 md:py-3 px-3 sm:px-4 md:px-6 rounded-xl shadow-2xl flex flex-row items-center justify-center border-2 border-black/10">
                                                <p className="text-black font-orbitron font-black text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] text-center leading-none tracking-wide flex flex-row items-center justify-center gap-[4px] sm:gap-[6px] md:gap-[8px] whitespace-nowrap flex-nowrap">
                                                    <span>Shodh AI is an</span>
                                                    <span className="inline-flex items-center justify-center shrink-0">
                                                        <Image
                                                            src="/Other/india-ai-logo.png"
                                                            alt="INDIAai logo"
                                                            width={90}
                                                            height={24}
                                                            className="h-[14px] sm:h-[18px] md:h-[22px] xl:h-[26px] w-auto object-contain -translate-y-[1px]"
                                                        />
                                                    </span>
                                                    <span>company</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-accent rounded-tr-lg"></div>
                                        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-accent rounded-bl-lg"></div>
                                    </motion.div>

                                </div>
                            </div>
                            
                            {/* Full-width Strike forces moved out of the side column */}
                            <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.2)] mt-10 md:mt-12 w-full">
                                <p className="font-bold text-[#D8F602] mb-5 text-[16px] md:text-xl border-b border-white/10 pb-4 leading-snug">
                                    To build this elite pipeline, the Aestr Hub operates two parallel strike forces:
                                </p>
                                <ul className="space-y-4 pl-2 mt-5 text-[14px] md:text-[15px] lg:text-[15.5px] w-full">
                                    <li className="flex items-start gap-3 md:gap-4 w-full">
                                        <span className="text-[#D8F602] mt-1 text-[12px] tracking-widest shrink-0">■</span>
                                        <span className="leading-snug lg:leading-none w-full lg:whitespace-nowrap overflow-hidden text-ellipsis"><strong className="text-white">AESTR B.TECH (The 4-Year Residency):</strong> A hardcore undergraduate incubator forging the deep-tech scientists who will invent the intelligence of tomorrow.</span>
                                    </li>
                                    <li className="flex items-start gap-3 md:gap-4 w-full">
                                        <span className="text-[#D8F602] mt-1 text-[12px] tracking-widest shrink-0">■</span>
                                        <span className="leading-snug lg:leading-none w-full lg:whitespace-nowrap overflow-hidden text-ellipsis"><strong className="text-white">AESTR ALPHA (The 6-Month Residency):</strong> Fast-tracks ambitious graduates into high-paying Enterprise Cloud, Data, and Backend roles at global tech giants.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>


                {/* 2) WELCOME TO THE FRONTIER SECTION (Now On Bottom) */}
                <div className="bg-[#D8F602] rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden mb-8 mt-8">
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

                        <div className="bg-black px-2 py-1.5 md:px-2 md:py-2 rounded-xl shadow-lg inline-flex items-center justify-center self-end md:self-auto border-2 border-white/20 lg:translate-x-4 shrink-0">
                            <div className="w-32 md:w-40 relative h-8 md:h-10">
                                <Image
                                    src="/Herosection/by gyan vihar 2 neon.png"
                                    alt="AESTR Logo"
                                    fill
                                    className="object-contain brightness-150 contrast-125"
                                    sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
                                />
                            </div>
                        </div>
                    </div>

                    <h2 className="text-[26px] sm:text-[34px] md:text-[40px] xl:text-[48px] font-orbitron font-black text-black leading-tight tracking-tight whitespace-nowrap mb-6 lg:mb-10 w-full overflow-hidden text-ellipsis">
                        B.Tech in Artificial Intelligence
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch h-auto min-h-[440px]">
                        <div className="lg:col-span-5 flex h-full">
                            <div className="glass !bg-[#000000] p-6 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl flex flex-col justify-center w-full h-full">
                                <h4 className="text-[24px] font-orbitron font-black text-[#D8F602] mb-5">
                                    B.Tech AI
                                </h4>
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <span className="text-white text-xl sm:text-2xl font-orbitron font-extrabold">Powered by</span>
                                    <div className="relative w-32 h-8 sm:w-36 sm:h-9">
                                        <Image
                                            src="/ProgramPartners/Shodh-ai.svg"
                                            alt="Shodh AI"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <p className="text-white/80 text-[14px] sm:text-[15px] xl:text-[16px] leading-relaxed font-medium">
                                    This program is how Shodh AI hires. Designed by Dr. Arastu Sharma, CEO of Shodh AI, this flagship "Elite 60" cohort is brutally selective. It is not for the masses; it is built strictly for the engineers of 2030.
                                    Here, you don't study AI, YOU BUILD IT. As a resident, you will work directly alongside senior engineers at Shodh AI. You will build massive data pipelines, design sovereign model architectures, and put in the years of deep mathematical toil required to build the future of Artificial Intelligence itself.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-7 flex h-full w-full">
                            <div ref={videoContainerRef} className="relative rounded-[2.5rem] overflow-hidden border-2 border-gray-300 shadow-lg w-full h-full min-h-[300px] lg:min-h-[440px] aspect-video lg:aspect-auto">
                                <video
                                    className="w-full h-full object-cover absolute inset-0"
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
        </section>
    );
};

export default FrontierHub;
