'use client';

import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import Image from "next/image";

const FrontierHub = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesOptions: ISourceOptions = useMemo(
        () => ({
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            particles: {
                color: { value: "#D7F601" },
                links: {
                    color: "#D7F601",
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                move: { enable: true, speed: 0.6 },
                number: { value: 80, density: { enable: true, area: 800 } },
                opacity: { value: 0.3 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 2 } },
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "grab" },
                },
                modes: {
                    grab: { distance: 200, links: { opacity: 0.5 } },
                },
            },
            detectRetina: true,
        }),
        []
    );

    return (
        <section className="relative min-h-screen py-24 bg-gradient-to-b from-[#1a1c4b] to-[#0a1118] overflow-hidden">
            {/* Neural Network Background */}
            {init && (
                <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                    <Particles id="frontier-particles" options={particlesOptions} className="h-full w-full" />
                </div>
            )}

            <div className="container-boxed relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-8 mb-20"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-orbitron font-black text-foreground leading-tight tracking-tight">
                        <span className="text-accent">✦</span> Welcome to the frontier: <br />
                        Aestr is India&apos;s <span className="text-accent underline decoration-accent/30 underline-offset-8">sovereign AI hub</span> <span className="text-accent">✦</span>
                    </h2>

                    <p className="text-lg md:text-xl text-foreground font-medium max-w-4xl mx-auto leading-relaxed opacity-90">
                        Traditional education is dead. Aestr is a unified tech incubator designed to accelerate India’s emergence as a global AI superpower. We don’t follow a curriculum; we execute a technical residency. In an era where AI is redefining every industry, our mission is simple: to produce the best 1% of engineers who will build the future of sovereign AI for science, defense, and healthcare. AESTR is the place where engineering meets intense research-driven development.
                    </p>
                </motion.div>

                {/* Alpha & B.Tech Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
                    {/* AESTR ALPHA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 space-y-6 border border-accent/10 hover:border-accent/30 transition-all duration-500 bg-white/5"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-orbitron text-xs font-bold tracking-widest uppercase">
                            6-Month Career Residency
                        </div>
                        <h3 className="text-3xl md:text-4xl font-orbitron font-extrabold text-foreground">Aestr alpha</h3>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            An intensive, outcome-driven residency for final-year students and early-career engineers. Move beyond textbooks and master full-stack AI orchestration, infrastructure, and deployment.
                        </p>
                        <button className="btn-aestr flex items-center gap-3">
                            Apply for Alpha
                            <span className="text-xl">↗</span>
                        </button>
                    </motion.div>

                    {/* AESTR B.TECH */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 space-y-6 border border-accent/10 hover:border-accent/30 transition-all duration-500 bg-white/5"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-orbitron text-xs font-bold tracking-widest uppercase">
                            4-Year Engineering Residency
                        </div>
                        <h3 className="text-3xl md:text-4xl font-orbitron font-extrabold text-[#D4AF37]">Aestr b.tech</h3>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            A radical departure from the 4-year degree. Spend four years building sovereign AI models, working with industry leaders, and treating engineering as a craft. India&apos;s most elite technical hub.
                        </p>
                        <button className="btn-aestr flex items-center gap-3 bg-accent text-black">
                            Explore Residency
                            <span className="text-xl">↗</span>
                        </button>
                    </motion.div>
                </div>

                {/* Detailed B.Tech Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-16"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Text Content */}
                        <div className="lg:col-span-7 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-orbitron font-black text-[#D4AF37] leading-tight">
                                B.Tech in Artificial Intelligence <br />
                                <span className="text-foreground/60 text-2xl md:text-3xl">| Powered by Shodh AI</span>
                            </h2>
                            <p className="text-xl text-foreground/80 leading-relaxed font-medium">
                                This program is how Shodh AI hires. Designed by Dr. Arastu Sharma and led by former Microsoft engineers and Cambridge researchers, it is a 4-year residency aimed at building India&apos;s sovereign AI for science. You don&apos;t just learn AI; you contribute to models that define national technical assets.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="btn-aestr !bg-accent !text-black px-8 py-3">Apply Now</button>
                                <button className="px-8 py-3 border border-white/10 rounded-lg font-orbitron font-bold text-sm tracking-widest hover:bg-white/5 transition-all">Syllabus PDF</button>
                            </div>
                        </div>

                        {/* Media Stack */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="aspect-video glass rounded-2xl overflow-hidden relative group border border-white/10 shadow-2xl">
                                <iframe
                                    src="/pm-video.mp4"
                                    title="Aestr AI Residency"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="aspect-[3/2] glass rounded-2xl overflow-hidden relative border border-white/10 shadow-xl group">
                                <Image
                                    src="/modi.jpeg"
                                    alt="Shodh AI Lab"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-[10px] font-orbitron text-accent uppercase tracking-widest">Shodh AI Integration</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FrontierHub;
