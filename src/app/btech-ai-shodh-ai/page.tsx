'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';


// Reusable Lab Data (Same as home page)
const labs = [
    {
        name: 'Foundation Model Lab',
        image: '/Other/lab-4.webp',
        description: 'Master cutting-edge AI by fine-tuning models for material science (with Microsoft\'s MatterGen), drug discovery, and more. Outcome: Become a leading AI Engineer, Foundation Model Engineer, or Data Engineer.',
        icon: 'nvidia'
    },
    {
        name: 'Embodied Brain Lab',
        image: '/Other/lab-2.webp',
        description: 'Dive into Robotics, Exoskeletons, and ROS on Nvidia Jetson. Build 3D printed humanoids and leverage our patented multi-agentic \'brain\' system - your key to becoming a top 1% AI engineer.',
        icon: 'robotics'
    },
    {
        name: 'RISC-V Systems Lab',
        image: '/Other/lab-3.webp',
        description: 'Engineer the future with India\'s pioneering semiconductor technology, building essential systems and chips for tomorrow.',
        icon: 'chip'
    },
    {
        name: 'Augmented Human Lab',
        image: '/Other/lab-5.webp',
        description: 'Explore the frontiers of Human-AI interaction - from Apple Vision Pro and holography to AI filmmaking, UX design, and future communication.',
        icon: 'apple'
    }
];

const BtechAIShodhAIPage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const heroImages = ['/b.tech-ai-with/DSC08261.jpg'];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [heroImages.length]);

    return (
        <main className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-accent selection:text-black">


            {/* Hero Section Redesigned (Brochure Style) */}
            <section className="relative w-full min-h-[90vh] lg:h-[800px] overflow-hidden flex items-center bg-[#5B1DD6] pt-32 lg:pt-24 pb-20 lg:pb-0">
                <div className="container-boxed relative z-20 flex flex-col lg:flex-row items-center justify-between h-full gap-12 lg:gap-16">
                    
                    {/* Left: Text Content */}
                    <div className="lg:w-[55%] flex flex-col justify-center space-y-8 text-left z-10 w-full pt-10 lg:pt-0">
                        <div className="space-y-1 relative">
                            {/* Decorative graphical element like the brochure circles */}
                            <div className="absolute -left-20 -top-20 opacity-20 pointer-events-none">
                                <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="#D7F601" strokeWidth="2">
                                    <circle cx="50" cy="50" r="40" />
                                    <path d="M50 0 V100 M0 50 H100" opacity="0.3" strokeDasharray="4 4" />
                                </svg>
                            </div>
                            
                            <h1 className="text-[#D7F601] text-[2.5rem] sm:text-[3.2rem] lg:text-[4.1rem] font-orbitron font-black leading-[1.05] tracking-tighter">
                                This isn't college.
                            </h1>
                            <h2 className="text-[#D7F601] text-[1.8rem] sm:text-[2.5rem] lg:text-[3.2rem] font-orbitron font-black leading-[1.05] tracking-tighter">
                                It's a 4-year internship
                            </h2>
                        </div>
                        
                        <div className="pt-2">
                            <h3 className="text-white text-[1.4rem] sm:text-[1.8rem] lg:text-[2.2rem] font-orbitron font-extrabold tracking-tight">
                                B.tech ai with shodh ai
                            </h3>
                        </div>

                        {/* Brochure style context box */}
                        <div className="bg-[#181818] p-6 lg:p-8 rounded-2xl shadow-2xl max-w-xl border-l-[6px] border-[#D7F601] mt-4 relative overflow-hidden">
                            {/* subtle internal glow/texture */}
                            <div className="absolute right-0 top-0 w-32 h-32 bg-[#D7F601]/5 blur-3xl rounded-full"></div>
                            <p className="text-white text-lg lg:text-[19px] font-medium leading-relaxed relative z-10">
                                At B.Tech AI with Shodh AI, every student becomes an intern from day one.
                                <span className="text-[#D7F601] font-bold tracking-wide mt-2 block">Stop studying. Start building.</span>
                            </p>
                        </div>
                    </div>

                    {/* Right: Image Slider with Chamfered/Angled cut like Brochure */}
                    <div className="lg:w-[45%] w-full h-[45vh] min-h-[350px] lg:h-[600px] relative">
                         {/* Clip-path for the cool tech-y brochure shape */}
                         <div className="absolute inset-0 z-10 bg-black overflow-hidden shadow-2xl border-[4px] border-[#D7F601]/30" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)' }}>
                            <img 
                                src="/b.tech-ai-with/DSC08261.jpg"
                                alt="AESTR Environment"
                                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            {/* subtle overlay to ensure content feels integrated */}
                            <div className="absolute inset-0 bg-purple/10 pointer-events-none"></div>
                         </div>
                         
                         {/* Decorative Background Offset Box (Solid Lime Green) */}
                         <div className="absolute -right-4 -bottom-4 lg:-right-6 lg:-bottom-6 w-[95%] h-[95%] z-0 bg-[#D7F601] opacity-60" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)' }}/>
                    </div>

                </div>
            </section>

            {/* Purple Cards Section */}
            <section className="py-20 relative overflow-hidden bg-[#5B1DD6]">
                <div className="container-boxed relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-stretch">

                    {/* Card 1 */}
                    <div className="bg-white rounded-[2rem] p-6 pb-8 flex flex-col gap-6 lg:w-1/3 shadow-2xl hover:-translate-y-2 transition-transform duration-300 border-2 border-black/5">
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative border border-black/10">
                            <Image src="/b.tech-ai-with/robo.jpg" alt="Lab robot" fill className="object-cover" />
                        </div>
                        <div className="flex justify-between items-start gap-4">
                            <h3 className="text-3xl lg:text-4xl font-bold font-orbitron text-[#5B1DD6] leading-tight tracking-tight">
                                B.Tech AI <br />with Shodh AI
                            </h3>
                            <div className="shrink-0 mt-1">
                                <svg className="w-10 h-10 text-[#5B1DD6]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-black font-bold text-lg leading-snug tracking-tight opacity-90">
                            Shodh AI leads AI in India. Intern with the elite team. Be ready for the 2030 AI world.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-[2rem] p-6 pb-8 flex flex-col gap-6 lg:w-1/3 shadow-2xl hover:-translate-y-2 transition-transform duration-300 border-2 border-black/5">
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative border border-black/10 bg-[#0b0e14] p-8 flex items-center justify-center">
                            <Image src="/b.tech-ai-with/shodh.png" alt="Shodh AI" fill className="object-contain p-4" />
                        </div>
                        <div className="flex justify-between items-start gap-4">
                            <h3 className="text-3xl lg:text-4xl font-bold font-orbitron text-[#5B1DD6] leading-tight tracking-tight flex-1">
                                Built With
                                <div className="flex items-center gap-4 mt-6">
                                    <Image src="/ProgramPartners/google.webp" alt="Google" width={80} height={26} className="object-contain" />
                                    <Image src="/placement/nvidia.webp" alt="NVIDIA" width={100} height={32} className="object-contain" />
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
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-[2rem] p-6 pb-8 flex flex-col gap-6 lg:w-1/3 shadow-2xl hover:-translate-y-2 transition-transform duration-300 border-2 border-black/5">
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative border border-black/10">
                            <Image src="/b.tech-ai-with/lab.JPG" alt="Class" fill className="object-cover" />
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
                    </div>

                </div>
            </section>


            {/* New Founder Section */}
            <section className="py-24 relative overflow-hidden bg-[#D7F601] text-black">
                <div className="container-boxed relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto space-y-12">

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-orbitron font-black leading-[1.1] tracking-tighter">
                        From Shodh AI to <br/>Aestr
                    </h2>

                    <div className="space-y-8 text-lg md:text-xl lg:text-[20px] font-medium leading-relaxed max-w-4xl text-black/90">
                        <p>
                            <span className="font-bold">Arastu Sharma</span> is the Founder & CEO of Aestr and the Founder of <span className="font-bold">Shodh AI</span>, a deep-tech AI company building <span className="font-bold">India's Sovereign "AI for Science" Foundation Model.</span>
                        </p>

                        <p>
                            Through Shodh AI, Arastu leads national-scale AI systems backed by IndiaAI, with access to <span className="font-bold">1.2M+ GPU hours</span> and partnerships with NVIDIA, Yotta, and Amazon Web Services.
                        </p>

                        <p>
                            He was recently invited to meet <span className="font-bold">Prime Minister Narendra Modi</span> and was highlighted among the key contributors shaping India's AI future.
                        </p>

                        <p className="pt-4">
                            B.Tech AI with Shodh AI exists to transfer this real-world AI engineering experience to the next generation of builders.
                        </p>
                    </div>

                    {/* Logos Area - Pyramid Layout */}
                    <div className="pt-16 pb-12 flex flex-col items-center justify-center gap-12 w-full max-w-4xl mx-auto">
                        <div className="grid grid-cols-2 gap-12 md:gap-24 items-center justify-center">
                            {/* NVIDIA */}
                            <div className="relative h-20 md:h-28 w-40 md:w-56 mix-blend-multiply">
                                <Image src="/b.tech-ai-with/nvidia.svg" alt="NVIDIA" fill className="object-contain" />
                            </div>
                            {/* YOTTA */}
                            <div className="relative h-20 md:h-28 w-40 md:w-56 mix-blend-multiply">
                                <Image src="/b.tech-ai-with/yotta.svg" alt="YOTTA" fill className="object-contain" />
                            </div>
                        </div>
                        {/* AWS */}
                        <div className="relative h-24 md:h-32 w-56 md:w-72 mix-blend-multiply flex justify-center">
                            <Image src="/b.tech-ai-with/aws.svg" alt="AWS" fill className="object-contain" />
                        </div>
                    </div>

                </div>
            </section>

            {/* Section 3: Heart of B.Tech AI (Labs) */}
            <section className="py-24 relative overflow-hidden bg-background text-foreground">
                <div className="container-boxed relative z-10">
                    <div className="flex flex-col items-start mb-16 space-y-6">
                        {/* Numbered Circle - Dark Theme */}
                        <div className="w-20 h-20 rounded-full bg-purple/20 backdrop-blur-sm flex items-center justify-center text-4xl font-serif italic text-purple shadow-lg border border-purple/30">
                            3
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-h2 text-foreground">
                                The Heart Of B.Tech AI With Shodh AI:
                            </h2>
                            <h3 className="text-h3 text-foreground/80">
                                Our Innovation Labs, Powered by Shodh AI
                            </h3>
                            <p className="text-body text-foreground/70 max-w-3xl font-medium">
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
                                    <h4 className="text-h3 text-foreground">{lab.name}</h4>
                                    <p className="text-sm text-foreground/60 leading-relaxed font-medium">
                                        {lab.description}
                                    </p>
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
                        {/* Numbered Circle - Dark Theme */}
                        <div className="w-20 h-20 rounded-full bg-purple/20 backdrop-blur-sm flex items-center justify-center text-4xl font-serif italic text-purple shadow-lg border border-purple/30">
                            4
                        </div>
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
            <section className="py-24 relative overflow-hidden bg-background text-foreground">
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
                                {/* Numbered Circle - Dark Theme */}
                                <div className="w-20 h-20 rounded-full bg-purple/20 backdrop-blur-sm flex items-center justify-center text-4xl font-serif italic text-purple shadow-lg border border-purple/30">
                                    5
                                </div>
                                <h2 className="text-h2 text-foreground">
                                    Graduate As A Senior Engineer
                                </h2>
                                <h3 className="text-h3 text-foreground/80 italic">
                                    Ready to Lead the Future
                                </h3>
                                <div className="space-y-6 text-body text-foreground/70 font-medium">
                                    <p>
                                        The outcome of the AESTR PRO program is a new breed of engineer – an engineer who is not just "hirable", but is a leader, an innovator, and a problem-solver. After four years of intensive, hands-on experience in our Innovation Labs, you will graduate as a senior engineer, with a portfolio of real-world projects and a deep understanding of the latest technologies.
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
                            <div className="aspect-[4/3] rounded-sm overflow-hidden border border-black/10 shadow-2xl relative">
                                <Image
                                    src="/Other/robot-class.jpg"
                                    alt="Graduate Success"
                                    fill
                                    className="object-cover"
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
