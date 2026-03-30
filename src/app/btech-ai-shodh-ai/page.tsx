'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import StickyAdmissionsBar from '@/components/StickyAdmissionsBar';

// B.Tech AI with Shodh AI Page


// Reusable Lab Data (Same as home page)
const labs = [
    { 
        name: 'Apple Ecosystem', 
        image: '/Other/apple-lab.png', 
        description: 'Master the art of building world-class applications within the premium Apple environment. From deep dives into Swift and SwiftUI to exploring advanced architectures for macOS, iOS, and the revolutionary VisionOS, you will gain hands-on experience with the tools that power the most elegant user experiences. This lab provides a unique opportunity to understand the synergy between high-end hardware and intuitive software design, preparing you for elite development roles worldwide.', 
        icon: 'apple' 
    },
    { 
        name: 'NVIDIA Pipeline', 
        image: '/Other/Nvidia-Image.jpeg', 
        description: 'Harness the massive power of GPU-accelerated computing in our high-performance NVIDIA lab. Master CUDA programming, TensorRT optimization, and the foundational software stacks that drive today\'s generative AI and deep learning breakthroughs. You will build the data-intensive intelligence that moves the modern cloud and data center, positioning yourself at the core of the infrastructure revolution. By bridging the gap between raw compute power and algorithmic excellence, you become an architect of the AI-driven future.', 
        icon: 'nvidia' 
    },
    { 
        name: 'RISC-V Lab', 
        image: '/Other/DSC08333.jpg.jpeg', 
        description: 'Take your place at the forefront of India\'s semiconductor sovereignty in our pioneering RISC-V hardware lab. Students engage in the complete lifecycle of chip design, from RTL development to physical implementation of custom silicon for AI-specific workloads. By mastering open-source hardware architectures, you will be prepared to engineer the systems that define the next generation of global computing. This hands-on experience with silicon logic ensures you understand the fundamental building blocks of modern digital civilization.', 
        icon: 'chip' 
    },
    { 
        name: 'Embodied Brain Lab', 
        image: '/Other/lab-2.webp', 
        description: 'Experience the convergence of neural intelligence and physical machines in our robotics and autonomous systems lab. Using the NVIDIA Jetson platform and ROS, you will build robots that can perceive, reason, and react to real-time environments with machine precision. This lab focuses on creating advanced exoskeletons and smart robotics that will redefine the future of healthcare, logistics, and industrial automation. You will learn to breathe life into metal and silicon, mastering the complex interplay of computer vision and mechanical control.', 
        icon: 'robotics' 
    }
];

const BtechAIShodhAIPage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [expandedLabs, setExpandedLabs] = useState<{ [key: string]: boolean }>({});
    const heroImages = ['/b.tech-ai-with/DSC08261.jpg'];

    const toggleLabExpansion = (labName: string) => {
        setExpandedLabs(prev => ({
            ...prev,
            [labName]: !prev[labName]
        }));
    };

    const truncateText = (text: string, labName: string, lines: number = 2) => {
        const words = text.split(' ');
        const wordsPerLine = 8; // Reduced words per line for shorter initial text
        const maxWords = lines * wordsPerLine;
        
        // Special handling for Embodied Brain Lab
        if (labName === 'Embodied Brain Lab') {
            const wordsToShow = 12; // Show fewer words for this lab due to long heading
            const truncated = words.length > wordsToShow ? words.slice(0, wordsToShow).join(' ') + '...' : text;
            return truncated.replace('autonomous systems lab...', ''); // Hide the specific phrase
        }
        
        return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : text;
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [heroImages.length]);

    return (
        <main className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-accent selection:text-black">


            <StickyAdmissionsBar />


            {/* Hero Section Redesigned (Brochure Style) */}
            <section className="relative w-full min-h-[80vh] lg:h-[800px] overflow-hidden flex items-center bg-[#5B1DD6] pt-24 sm:pt-28 lg:pt-24 pb-16 lg:pb-0">
                <div className="container mx-auto px-4 sm:px-6 relative z-20 flex flex-col lg:flex-row items-center justify-between h-full gap-8 lg:gap-16">
                    
                    {/* Left: Text Content */}
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        className="lg:w-[55%] flex flex-col justify-center space-y-6 lg:space-y-8 text-left z-10 w-full pt-8 lg:pt-0"
                    >
                        <div className="space-y-2 lg:space-y-4 relative">
                            {/* Decorative graphical element like the brochure circles */}
                            <motion.div 
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { opacity: 0.2, scale: 1, transition: { duration: 1, ease: "easeOut" } }
                                }}
                                className="absolute -left-12 -top-12 lg:-left-20 lg:-top-20 pointer-events-none hidden sm:block"
                            >
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#D7F601" strokeWidth="2">
                                    <circle cx="50" cy="50" r="40" />
                                    <path d="M50 0 V100 M0 50 H100" opacity="0.3" strokeDasharray="4 4" />
                                </svg>
                            </motion.div>
                            
                            <motion.h1 
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                }}
                                className="text-[#D7F601] text-2xl sm:text-3xl md:text-4xl lg:text-[4.1rem] font-orbitron font-black leading-[1.05] tracking-tighter"
                            >
                                This isn't college.
                            </motion.h1>
                            <motion.h2 
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                }}
                                className="text-[#D7F601] text-xl sm:text-2xl md:text-3xl lg:text-[3.2rem] font-orbitron font-black leading-[1.05] tracking-tighter"
                            >
                                It's a 4-year internship
                            </motion.h2>
                        </div>
                        
                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="pt-2"
                        >
                            <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-[2.2rem] font-orbitron font-extrabold tracking-tight">
                                B.Tech AI With Shodh AI
                            </h3>
                        </motion.div>

                        {/* Brochure style context box */}
                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="bg-[#181818] p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl max-w-lg lg:max-w-xl border-l-[4px] lg:border-l-[6px] border-[#D7F601] mt-4 relative overflow-hidden"
                        >
                            {/* subtle internal glow/texture */}
                            <div className="absolute right-0 top-0 w-24 h-24 lg:w-32 lg:h-32 bg-[#D7F601]/5 blur-3xl rounded-full"></div>
                            <p className="text-white text-base lg:text-lg lg:text-[19px] font-medium leading-relaxed relative z-10">
                            Every student becomes an intern from day one.
                                <span className="text-[#D7F601] font-bold tracking-wide mt-2 block">Stop studying. Start building.</span>
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Image Slider with Chamfered/Angled cut like Brochure */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="lg:w-[45%] w-full h-[40vh] min-h-[300px] sm:h-[45vh] sm:min-h-[350px] lg:h-[600px] relative"
                    >
                         {/* Clip-path for the cool tech-y brochure shape */}
                         <div className="absolute inset-0 z-10 bg-black overflow-hidden shadow-2xl border-[2px] lg:border-[4px] border-[#D7F601]/30" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)' }}>
                            <img 
                                src="/b.tech-ai-with/DSC08261.jpg"
                                alt="AESTR Environment"
                                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            {/* subtle overlay to ensure content feels integrated */}
                            <div className="absolute inset-0 bg-purple/10 pointer-events-none"></div>
                         </div>
                         
                         {/* Decorative Background Offset Box (Solid Lime Green) */}
                         <div className="absolute -right-2 -bottom-2 sm:-right-3 sm:-bottom-3 lg:-right-6 lg:-bottom-6 w-[95%] h-[95%] z-0 bg-[#D7F601] opacity-60" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)' }}/>
                    </motion.div>
                </div>
            </section>

            {/* Purple Cards Section */}
            <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-[#5B1DD6]">
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
                    className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-stretch"
                >

                    {/* Card 1: B.Tech AI with Shodh AI */}
                    <motion.div 
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 pb-6 sm:pb-8 flex flex-col gap-4 sm:gap-6 lg:w-1/3 shadow-2xl hover:-translate-y-2 transition-transform duration-300 border-2 border-black/5"
                    >
                        <div className="w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden relative border border-black/10">
                            <Image src="/b.tech-ai-with/robo.jpg" alt="B.Tech AI with Shodh AI" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                        </div>
                        <div className="flex justify-between items-start gap-2 sm:gap-4">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-orbitron text-[#5B1DD6] leading-tight tracking-tight">
                                B.Tech AI <br />with Shodh AI
                            </h3>
                            <div className="shrink-0 mt-1">
                                <svg className="w-8 h-8 text-[#5B1DD6]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-black font-bold text-lg leading-snug tracking-tight opacity-90">
                            Shodh AI leads AI in India. Intern with the elite team. Be ready for the 2030 AI world.
                        </p>
                    </motion.div>

                    {/* Card 2: Built With */}
                    <motion.div 
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 pb-6 sm:pb-8 flex flex-col gap-4 sm:gap-6 lg:w-1/3 shadow-2xl hover:-translate-y-2 transition-transform duration-300 border-2 border-black/5"
                    >
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative border border-black/10 bg-[#000042] flex items-center justify-center">
                            <Image src="/b.tech-ai-with/shodh.png" alt="Built With" fill className="object-cover scale-90" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                        </div>
                        <div className="flex justify-between items-start gap-4">
                            <h3 className="text-3xl lg:text-4xl font-bold font-orbitron text-[#5B1DD6] leading-tight tracking-tight flex-1">
                                Built With
                                <div className="flex items-center gap-4 mt-6">
                                    <Image src="/ProgramPartners/google.webp" alt="Google" width={80} height={26} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                                    <Image src="/placement/nvidia.webp" alt="NVIDIA" width={100} height={32} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                                </div>
                            </h3>
                            <div className="shrink-0 mt-1">
                                <svg className="w-8 h-8 text-[#5B1DD6]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-black font-bold text-lg leading-snug tracking-tight opacity-90 mt-auto">
                            Indian Govt mandate to build AI for science. Shodh AI released the world's first Large Physics Model.
                        </p>
                    </motion.div>

                    {/* Card 3: Brutally Selective */}
                    <motion.div 
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 pb-6 sm:pb-8 flex flex-col gap-4 sm:gap-6 lg:w-1/3 shadow-2xl hover:-translate-y-2 transition-transform duration-300 border-2 border-black/5"
                    >
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative border border-black/10">
                            <Image src="/b.tech-ai-with/lab.JPG" alt="Brutally Selective" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                        </div>
                        <div className="flex justify-between items-start gap-4">
                            <h3 className="text-3xl lg:text-4xl font-bold font-orbitron text-[#5B1DD6] leading-tight tracking-tight">
                                Brutally <br />Selective
                            </h3>
                            <div className="shrink-0 mt-1 text-[#5B1DD6]">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-black font-bold text-lg leading-snug tracking-tight opacity-90">
                            Only 60 seats. While others code "Hello World," you fine-tune LLMs on NVIDIA Hopper GPUs.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Reality Check Section */}
            <section className="py-28 relative overflow-hidden bg-[#D7F601] text-black">
                <div className="container-boxed relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto space-y-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-5xl"
                    >
                        <div className="bg-[#181818] text-white rounded-[1.9rem] p-8 md:p-12 shadow-[0_28px_70px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden relative">
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#5B1DD6]/30 blur-3xl rounded-full pointer-events-none"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/40 blur-3xl rounded-full pointer-events-none"></div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                                <div className="lg:col-span-8 space-y-5 text-left">
                                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#D7F601] text-black font-orbitron font-black text-[11px] tracking-[0.25em] uppercase">
                                        Reality Check
                                    </div>

                                    <p className="text-[18px] md:text-[19px] font-semibold leading-relaxed text-white/90">
                                        Look at the tech industry today. AI agents are writing production-level code, debugging in seconds, and deploying servers. The "Junior IT Developer" who just types syntax on a keyboard is obsolete. By 2030, standard coding will be fully Automated.
                                    </p>

                                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                                    <p className="text-[15px] md:text-[17px] leading-relaxed text-white/75">
                                        If your college is teaching you to memorize algorithms on a whiteboard, they are preparing you for a job that vanished in 2024.
                                    </p>
                                </div>

                                <div className="lg:col-span-4">
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                                        <Image
                                            src="/Other/DSC01997.jpg"
                                            alt="AI building in action"
                                            fill
                                            className="object-cover scale-125"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            <section className="py-24 relative overflow-hidden bg-[#0E0F10] text-white">
                <div className="container-boxed relative z-10">
                    <div className="max-w-5xl mx-auto text-center space-y-10">
                        <p className="text-[#D7F601] font-orbitron font-bold tracking-wide text-xs md:text-sm">
                            Designed for Today. Relevant for Tomorrow. Built with the Industry.
                        </p>

                        <h2 className="w-full text-[#EAF0BD] font-orbitron font-bold leading-[120%] text-[40px] md:text-[44px] lg:text-[48px] tracking-tight">
                            We don’t teach subjects. We
                            <br />
                            simulate a workplace.
                        </h2>

                        <p className="w-full text-[#EAF0BD] font-normal leading-[150%] text-[18px] max-w-3xl mx-auto mt-2">
                            Aestr Alpha is built like a modern Tech Ashram — structured, immersive, and designed for deep transformation. You check in, lock in, and spend six months building real systems with real accountability.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 max-w-6xl mx-auto">
                        <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="text-center space-y-4 cursor-default">
                            <motion.div whileHover={{ rotate: 2, scale: 1.08 }} transition={{ duration: 0.3 }} className="w-16 h-16 mx-auto flex items-center justify-center">
                                <Image src="/b.tech-ai-with/Vector1.svg" alt="Real Industry Projects" width={56} height={56} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                            </motion.div>
                            <h3 className="text-[#D7F601] font-orbitron font-black text-lg md:text-xl">
                                Real Industry Projects
                            </h3>
                            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xs mx-auto font-medium">
                                Work on actual use-cases inspired by real companies and teams.
                            </p>
                        </motion.div>

                        <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="text-center space-y-4 cursor-default">
                            <motion.div whileHover={{ rotate: -2, scale: 1.08 }} transition={{ duration: 0.3 }} className="w-16 h-16 mx-auto flex items-center justify-center">
                                <Image src="/b.tech-ai-with/Vector2.svg" alt="Mentor-Led Learning" width={56} height={56} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                            </motion.div>
                            <h3 className="text-[#D7F601] font-orbitron font-black text-lg md:text-xl">
                                Mentor-Led Learning
                            </h3>
                            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xs mx-auto font-medium">
                                Learn from practitioners working in Salesforce, UI/UX, AI, Data, and more.
                            </p>
                        </motion.div>

                        <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="text-center space-y-4 cursor-default">
                            <motion.div whileHover={{ rotate: 2, scale: 1.08 }} transition={{ duration: 0.3 }} className="w-16 h-16 mx-auto flex items-center justify-center">
                                <Image src="/b.tech-ai-with/Vector3.svg" alt="Career-Driven Outcomes" width={56} height={56} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                            </motion.div>
                            <h3 className="text-[#D7F601] font-orbitron font-black text-lg md:text-xl">
                                Career-Driven Outcomes
                            </h3>
                            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xs mx-auto font-medium">
                                <span className="block whitespace-nowrap">
                                    Portfolio, LinkedIn, interviews, and communication
                                </span>
                                <span className="block whitespace-nowrap">
                                    covered as part of the journey.
                                </span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 relative overflow-hidden bg-[#5B1DD6] text-black">
                <div className="container-boxed relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
                        <h3 className="w-full text-[#EAF0BD] font-orbitron font-bold leading-[130%] text-[24px] sm:text-[26px] md:text-[28px] tracking-tight">
                            Portfolio, LinkedIn, interviews, and communication — all covered as part of the journey.
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="rounded-[1.75rem] bg-[#D7F601] border-[3px] border-[#5B1DD6] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.6)] flex flex-col"
                        >
                            <div className="relative w-full aspect-[4/3] overflow-hidden">
                                <Image
                                    src="/b.tech-ai-with/lab.JPG"
                                    alt="Real Industry Projects"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-5 md:p-6 flex flex-col gap-2">
                                <h4 className="text-[18px] md:text-[20px] font-orbitron font-extrabold text-[#1A1040]">
                                    No Classrooms.
                                </h4>
                                <p className="text-[13px] md:text-[14px] leading-relaxed font-medium text-black/90">
                                    Office hours apply. Entire
cohort builds to learn how real
cross-functional teams ship.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="rounded-[1.75rem] bg-[#D7F601] border-[3px] border-[#5B1DD6] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.6)] flex flex-col"
                        >
                            <div className="relative w-full aspect-[4/3] overflow-hidden">
                                <Image
                                    src="/Other/WhatsApp Image 2026-03-24 at 11.24.53 AM.jpeg"
                                    alt="No Homework"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-5 md:p-6 flex flex-col gap-2">
                                <h4 className="text-[18px] md:text-[20px] font-orbitron font-extrabold text-[#1A1040]">
                                    No Homework.
                                </h4>
                                <p className="text-[13px] md:text-[14px] leading-relaxed font-medium text-black/90">
                                    You push code, clear Jira tickets,and deploy to AWS/NVIDIA servers.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="rounded-[1.75rem] bg-[#D7F601] border-[3px] border-[#5B1DD6] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.6)] flex flex-col"
                        >
                            <div className="relative w-full aspect-[4/3] overflow-hidden">
                                <Image
                                    src="/Other/WhatsApp Image 2026-03-24 at 11.24.46 AM.jpeg"
                                    alt="No Teachers"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-5 md:p-6 flex flex-col gap-2">
                                <h4 className="text-[18px] md:text-[20px] font-orbitron font-extrabold text-[#1A1040]">
                                    No Teachers.
                                </h4>
                                <p className="text-[13px] md:text-[14px] leading-relaxed font-medium text-black/90">
                                    You are mentored by Senior Engineers who have built systems at Cambridge and Microsoft Research.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Selection Process Section */}
            <section className="py-24 relative overflow-hidden bg-black text-black">
                <div className="container-boxed relative z-10">
                    <div className="rounded-[2.25rem] bg-[#D7F601] border-[3px] border-[#10063A] px-6 md:px-10 lg:px-14 py-10 md:py-12 lg:py-14 shadow-[0_22px_60px_rgba(0,0,0,0.55)]">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                            {/* Left column: intro text */}
                            <div className="lg:col-span-4 space-y-4">
                                <h2 className="text-2xl sm:text-3xl font-orbitron font-black text-[#5B1DD6]">
                                    The Selection Protocol.
                                </h2>
                                <p className="text-[13px] md:text-[14px] leading-relaxed font-medium text-[#10063A]/90">
                                    We don’t care how well you memorize. We care what you can build. You cannot just pay a fee to get into AESTR. We don’t have an admissions office, we have a Technical Draft.
                                </p>
                                <p className="text-[13px] md:text-[14px] leading-relaxed font-medium text-[#10063A]/90">
                                    Future India will not be built by crammers. It will be built by creators with dirt on their hands and code on their screens.
                                </p>
                            </div>

                            {/* Right column: steps row */}
                            <div className="lg:col-span-8">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-6 lg:gap-8 mb-10">
                                    {/* Step 1 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4 }}
                                        whileHover={{ y: -4 }}
                                        className="space-y-3 text-left"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#5B1DD6] flex items-center justify-center text-white font-orbitron font-bold text-sm">
                                                1
                                            </div>
                                            <h3 className="text-[16px] md:text-[17px] font-orbitron font-extrabold text-[#5B1DD6] flex items-center gap-2">
                                                Show Us Your "Proof of Work"
                                                <span className="inline-flex items-center justify-center">
                                                    <svg
                                                        className="w-6 h-6 text-[#5B1DD6]"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <ellipse
                                                            cx="12"
                                                            cy="12"
                                                            rx="7"
                                                            ry="3.5"
                                                            stroke="currentColor"
                                                            strokeWidth="1.6"
                                                            transform="rotate(-15 12 12)"
                                                        />
                                                    </svg>
                                                </span>
                                            </h3>
                                        </div>
                                        <p className="text-[12px] md:text-[13px] leading-relaxed text-[#10063A]/90">
                                            Have a GitHub link? Wired an Arduino? Launched a website? Drop the link. Give us anything real you’ve done outside an exam hall.
                                        </p>
                                    </motion.div>

                                    {/* Step 2 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.05 }}
                                        whileHover={{ y: -4 }}
                                        className="space-y-3 text-left"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#5B1DD6] flex items-center justify-center text-white font-orbitron font-bold text-sm">
                                                2
                                            </div>
                                            <h3 className="text-[16px] md:text-[17px] font-orbitron font-extrabold text-[#5B1DD6] flex items-center gap-2">
                                                The Peer Interview
                                                <span className="inline-flex items-center justify-center">
                                                    <svg
                                                        className="w-6 h-6 text-[#5B1DD6]"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="4.5"
                                                            stroke="currentColor"
                                                            strokeWidth="1.6"
                                                        />
                                                        <path
                                                            d="M2 12H6M18 12H22M12 2V6M12 18V22"
                                                            stroke="currentColor"
                                                            strokeWidth="1.4"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </h3>
                                        </div>
                                        <p className="text-[12px] md:text-[13px] leading-relaxed text-[#10063A]/90">
                                            Senior student‑engineers will interview you. If you don’t have the grit, logic, and hunger, the team will reject you – no matter how high your JEE score is.
                                        </p>
                                    </motion.div>

                                    {/* Step 3 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.1 }}
                                        whileHover={{ y: -4 }}
                                        className="space-y-3 text-left"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#5B1DD6] flex items-center justify-center text-white font-orbitron font-bold text-sm">
                                                3
                                            </div>
                                            <h3 className="text-[16px] md:text-[17px] font-orbitron font-extrabold text-[#5B1DD6]">
                                                Minimum Baseline
                                            </h3>
                                        </div>
                                        <p className="text-[12px] md:text-[13px] leading-relaxed text-[#10063A]/90">
                                            75% Boards + 75th Percentile SAT/JEE/CUET. Exceptional builders can bypass the baseline – proof of work matters more than marks.
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Bottom strip */}
                                <div className="border-t border-[#10063A]/30 pt-6 mt-2 grid grid-cols-1 md:grid-cols-4 gap-6 text-left text-black text-[12px] md:text-[13px] leading-relaxed">
                                    <div className="font-orbitron font-extrabold text-[14px] md:text-[15px] text-[#5B1DD6]">
                                        Minimum to Enter:
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-orbitron font-bold text-[#5B1DD6]">Step 1</span>
                                            <div className="hidden md:block h-px w-10 bg-[#5B1DD6]" />
                                        </div>
                                        75% Boards + 75th Percentile SAT/JEE/CUET (exceptional cases may be considered).
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-orbitron font-bold text-[#5B1DD6]">Step 2</span>
                                            <div className="hidden md:block h-px w-10 bg-[#5B1DD6]" />
                                        </div>
                                        Portfolio: code, project, or hardware link.
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-orbitron font-bold text-[#5B1DD6]">Step 3</span>
                                            <div className="hidden md:block h-px w-10 bg-[#5B1DD6]" />
                                        </div>
                                        Peer interview: prove your hunger.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Heart of B.Tech AI (Labs) */}
            <section className="py-24 relative overflow-hidden bg-[#D7F601] text-black">
                <div className="container-boxed relative z-10">
                    <div className="flex flex-col items-start mb-16 space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-h2 text-black">
                                The Heart Of B.Tech AI With Shodh AI:
                            </h2>
                            <h3 className="text-h3 text-black/80">
                                Our Innovation Labs, Powered by Shodh AI
                            </h3>
                            <p className="text-body text-black/80 max-w-3xl font-medium">
                                The engine of the B.Tech AI with Shodh AI experience is our state-of-the-art Innovation Labs, run by our industry partner, Shodh AI.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
                        {labs.map((lab, i) => (
                            <motion.div
                                key={lab.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="aspect-[16/10] relative overflow-hidden rounded-xl mb-6 shadow-xl border border-black/5">
                                    <Image
                                        src={lab.image}
                                        alt={lab.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-h3 text-black">
                                        {lab.name}
                                    </h4>
                                    <p className="text-sm text-black/80 leading-relaxed font-medium text-left">
                                        {expandedLabs[lab.name] ? lab.description : truncateText(lab.description, lab.name)}
                                    </p>
                                    <div className="text-left">
                                        {lab.description.length > 40 && (
                                            <button
                                                onClick={() => toggleLabExpansion(lab.name)}
                                                className="text-xs text-[#5B1DD6] font-orbitron font-semibold hover:text-black transition-colors underline"
                                            >
                                                {expandedLabs[lab.name] ? 'Read Less' : 'Read More'}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Descriptive Boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-background-alt p-8 md:p-10 rounded-2xl border border-white/5"
                        >
                            <p className="text-base text-foreground/70 leading-relaxed font-medium">
                                These are not your typical college labs. They are dynamic, professional environments where you will spend your four years as an intern, working on cutting-edge projects that are shaping the future of technology.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-background-alt p-8 md:p-10 rounded-2xl border border-white/5"
                        >
                            <p className="text-base text-foreground/70 leading-relaxed font-medium">
                                Each lab is a hub of innovation, led by senior engineers and researchers from Shodh AI and other leading tech companies. Here, you'll get your hands dirty, experiment with the latest technologies, and contribute to real-world solutions that have the potential to make a global impact.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 4: The Job We're Training You For */}
            <section className="py-24 relative overflow-hidden bg-background-alt text-foreground">
                <div className="container-boxed relative z-10">
                    <div className="flex flex-col items-start mb-16 space-y-6">
                        <div className="space-y-4 max-w-4xl">
                            <h2 className="text-h2 text-foreground">
                                The Job We're Training You For
                            </h2>
                            <h3 className="text-h3 text-foreground/80 italic">
                                From Intern to Innovator
                            </h3>
                            <div className="space-y-6 text-body text-foreground/70 font-medium">
                                <p>
                                    The entire curriculum is reverse-engineered from the demands of elite AI research roles in the industry. We prepare you for the job of tomorrow by giving you that job today. A day in the life of a B.Tech AI with Shodh AI student is the life of a Machine Learning Engineer at Shodh AI, our AI Research Division.
                                </p>
                                <p className="font-bold text-accent">
                                    Your Future Job Description: Machine Learning Engineer, Applied AI Research
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-1 border-[1.5px] border-accent/20 rounded-lg group hover:border-accent/50 transition-colors"
                        >
                            <div className="h-full p-8 border-[1.5px] border-accent/20 rounded-sm space-y-4 bg-background">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h4 className="text-h3 uppercase tracking-wide text-foreground">The Mission:</h4>
                                <p className="text-body text-foreground/70">
                                    Bridge the chasm between foundational research and real-world impact. You will be part of the engine that drives the company's expansion into the next frontier of artificial intelligence.
                                </p>
                            </div>
                        </motion.div>

                        {/* Role Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-1 border-[1.5px] border-accent/20 rounded-lg group hover:border-accent/50 transition-colors"
                        >
                            <div className="h-full p-8 border-[1.5px] border-accent/20 rounded-sm space-y-4 bg-background">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-h3 uppercase tracking-wide text-foreground">The Role:</h4>
                                <p className="text-body text-foreground/70">
                                    A unique blend of scientist, inventor, and engineer where you will architect the next generation of intelligent systems from the ground up.
                                </p>
                            </div>
                        </motion.div>

                        {/* Domains Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-1 border-[1.5px] border-accent/20 rounded-lg group hover:border-accent/50 transition-colors"
                        >
                            <div className="h-full p-8 border-[1.5px] border-accent/20 rounded-sm space-y-4 bg-background">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.996 1.389l-.498 1.494a2 2 0 01-1.125 1.258l-1.509.604a2 2 0 01-1.442 0l-1.509-.604a2 2 0 01-1.125-1.258l-.498-1.494a2 2 0 00-1.996-1.389l-2.387.477a2 2 0 00-1.022.547l-1.162 1.162a2 2 0 01-2.828 0l-1.162-1.162a2 2 0 010-2.828l1.162-1.162a2 2 0 00.547-1.022l.477-2.387a2 2 0 00-1.389-1.996l-1.494-.498a2 2 0 01-1.258-1.125l-.604-1.509a2 2 0 010-1.442l.604-1.509a2 2 0 011.258-1.125l1.494-.498a2 2 0 001.389-1.996l-.477-2.387a2 2 0 00-.547-1.022l-1.162-1.162a2 2 0 010-2.828l1.162-1.162a2 2 0 012.828 0l1.162 1.162a2 2 0 001.022.547l2.387.477a2 2 0 001.996-1.389l.498-1.494a2 2 0 011.125-1.258l1.509-.604a2 2 0 011.442 0l1.509.604a2 2 0 011.125 1.258l.498 1.494a2 2 0 001.996 1.389l2.387-.477a2 2 0 001.022-.547l1.162-1.162a2 2 0 012.828 0l1.162 1.162a2 2 0 010 2.828l-1.162 1.162a2 2 0 00-.547 1.022l-.477 2.387a2 2 0 001.389 1.996l1.494.498a2 2 0 011.258 1.125l.604 1.509a2 2 0 010 1.442l-.604-1.509a2 2 0 01-1.258 1.125l-1.494.498a2 2 0 00-1.389 1.996l.477 2.387a2 2 0 00.547 1.022l1.162 1.162a2 2 0 010 2.828l-1.162 1.162a2 2 0 01-2.828 0l-1.162-1.162z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-h3 uppercase tracking-wide text-foreground">The Core Domains:</h4>
                                <ul className="space-y-2 text-body text-foreground/70 list-disc pl-5">
                                    <li><span className="font-bold text-accent">Robotics & Embodied AI:</span> Build intelligent agents that can perceive, reason, and physically interact with the world.</li>
                                    <li><span className="font-bold text-accent">Large Language Models & Agentic Systems:</span> Architect autonomous agents and sophisticated applications that leverage the power of LLMs.</li>
                                    <li><span className="font-bold text-accent">Custom Silicon:</span> Design the next generation of chipsets purpose-built for AI workloads.</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Mindset Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-1 border-[1.5px] border-accent/20 rounded-lg group hover:border-accent/50 transition-colors"
                        >
                            <div className="h-full p-8 border-[1.5px] border-accent/20 rounded-sm space-y-4 bg-background">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h4 className="text-h3 uppercase tracking-wide text-foreground">The Mindset:</h4>
                                <p className="text-body text-foreground/70">
                                    We are looking for those with a "builder's mindset," driven by a deep curiosity to create and implement new things. Your personal research interests are not just welcome; they are a critical part of our strategy.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 5: The Outcome */}
            <section className="py-24 relative overflow-hidden bg-[#5B1DD6] text-foreground">
                <div className="container-boxed relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-6">
                                <h2 className="text-h2 text-foreground">
                                    Graduate As A Senior Engineer
                                </h2>
                                <h3 className="text-h3 text-foreground/80 italic">
                                    Ready to Lead the Future
                                </h3>
                                <div className="space-y-6 text-body text-foreground/70 font-medium">
                                    <p>
                                        The outcome of the B.Tech AI With Shodh AI program is a new breed of engineer – an engineer who is not just "hirable", but is a leader, an innovator, and a problem-solver. After four years of intensive, hands-on experience in our Innovation Labs, you will graduate as a senior engineer, with a portfolio of real-world projects and a deep understanding of the latest technologies.
                                    </p>
                                    <p>
                                        You will be equipped with the skills, the confidence, and the experience to make an immediate impact in any organization you join. You will be a part of a new generation of Indian engineers who are not just ready for the future, but are actively shaping it.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 shadow-2xl relative">
                                <Image
                                    src="/Other/Senior-Engineer.jpg"
                                    alt="Graduate Success"
                                    fill
                                    className="object-cover scale-125"
                                />
                            </div>
                            {/* Decorative accent */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#5B1DD6]/10 rounded-full blur-2xl pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default BtechAIShodhAIPage;
