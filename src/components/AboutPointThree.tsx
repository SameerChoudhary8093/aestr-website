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
        <section className="relative pt-24 pb-8 bg-[#5B1DD6] overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="container-boxed relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        className="space-y-8 md:space-y-10 order-2 lg:order-1 text-left lg:-translate-y-10"
                    >
                        <div className="flex items-start gap-4 md:gap-8">
                            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#D7F601] flex items-center justify-center text-3xl md:text-4xl font-orbitron font-black text-black bg-[#D7F601] shadow-[0_0_20px_rgba(215,246,1,0.5)]">
                                3
                            </div>
                            <div className="space-y-6 text-left">
                                <motion.div 
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                    }}
                                    className="space-y-1"
                                >
                                    <h3 className="text-h2 text-white capitalize font-black">
                                        Targeting <span className="opacity-95 text-accent">In-Demand Careers Of 2030</span>
                                    </h3>
                                </motion.div>
                                <motion.p 
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                    }}
                                    className="text-body text-white/90 font-bold max-w-xl text-[16px] md:text-[18px]"
                                >
                                    Train for roles powering the next generation of banking, robotics, healthcare, and more—with real-world impact and future security.
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="order-1 lg:order-2 w-full flex justify-center"
                    >
                        <div className="relative group w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[380px] xl:max-w-[420px] mx-auto shadow-2xl rounded-[2rem] overflow-hidden flex items-center justify-center border-2 border-white/10 bg-black aspect-[9/16]">
                            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    controls
                                >
                                    <source src="/Other/Reel.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutPointThree;
