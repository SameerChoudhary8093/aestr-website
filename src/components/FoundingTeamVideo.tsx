'use client';

import React, { useState } from 'react';
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

const FoundingTeamVideo = () => {
    return (
        <section className="relative py-24 bg-accent overflow-hidden">
            <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-white/20 blur-[120px] rounded-full pointer-events-none z-0" />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="container-boxed relative z-10"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6 md:space-y-8 text-left"
                    >
                        <div className="space-y-4">
                            <p className="text-lg md:text-xl text-black font-bold leading-relaxed max-w-xl">
                                Our founding team includes engineers from Shodh AI (USA) and other global tech leaders. Here, you won’t be taught by disconnected faculty, you’ll learn from full-time software developers, AI practitioners, and system architects who are shaping the real world.
                            </p>
                            <div className="glass !bg-black/95 p-6 md:p-10 rounded-2xl border-l-4 border-accent shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px] max-w-full lg:max-w-2xl">
                                <p className="text-base md:text-2xl font-bold text-white leading-tight">
                                    "We believe only those who build the future can truly teach it."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative group"
                    >
                        <div className="aspect-video bg-black rounded-3xl border border-black/10 overflow-hidden transition-all duration-500 shadow-2xl">
                            <YouTubePlayer
                                videoId="gGh2HYhMSy8"
                                title="Founding Team Message"
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default FoundingTeamVideo;
