'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const VideoPlayer = ({ src }: { src: string }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="relative w-full h-full cursor-pointer group" onClick={togglePlay}>
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                playsInline
            >
                <source src={`${src}#t=32`} type="video/mp4" />
            </video>

            {/* Play Button Overlay */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-500">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110 group-hover:bg-white/20">
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
            )}

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
    );
};

const AboutPointThree = () => {
    return (
        <section className="relative py-24 bg-accent overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="container-boxed relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8 md:space-y-10 order-2 lg:order-1 text-left lg:-translate-y-10"
                    >
                        <div className="flex items-start gap-4 md:gap-8">
                            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-black/30 flex items-center justify-center text-2xl md:text-3xl font-orbitron font-bold text-black bg-black/5">
                                3
                            </div>
                            <div className="space-y-6 text-left">
                                <div className="space-y-1">
                                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-orbitron font-bold text-black leading-tight tracking-tight capitalize">
                                        Targeting <span className="font-serif italic opacity-90">In-Demand Careers Of 2030</span>
                                    </h3>
                                </div>
                                <p className="text-lg md:text-xl text-black/90 leading-relaxed max-w-xl font-bold">
                                    Train for roles powering the next generation of banking, robotics, healthcare, and more—with real-world impact and future security.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative group max-w-[350px] w-full">
                            <div className="aspect-[3/4] bg-black rounded-2xl border border-black/10 overflow-hidden transition-all duration-500 shadow-2xl relative">
                                <VideoPlayer src="AsterAds.mp4" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutPointThree;
