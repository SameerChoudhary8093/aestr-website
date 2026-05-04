'use client';

import { motion } from 'framer-motion';

const differentiators = [
    {
        title: "High-Package Career Pathways",
        points: ["30 LPA+ potential for top-tier roles", "Global placements & structured pathways", "Exposure to Google, NVIDIA & Amazon", "Build skills that command top offers"],
        actionText: "35 LPA+ CAREER PATH"
    },
    {
        title: "Future-Proof AI Careers",
        points: ["Designed for the next-decade roles", "AI across Fintech, Robotics & Health", "Dominate the jobs of tomorrow", "Train for roles that don't exist yet"],
        actionText: "AI JOBS OF 2030"
    },
    {
        title: "Don't Study AI — Build It",
        points: ["Stop studying, start building from Day 1", "No more boring theory-only classes", "Build real data pipelines & models", "Solve real-world AI problems daily"],
        actionText: "BUILD FROM DAY 1"
    },
    {
        title: "Shodh AI Collaboration",
        points: ["Industry-inside-campus model", "Program designed by Shodh AI CEO", "Work alongside real-world AI engineers", "Learn from the people actually building AI"],
        actionText: "LEARN FROM BUILDERS"
    },
    {
        title: "Silicon Valley Incubator",
        points: ["Not just a student, be a Resident", "Build your own Startup IP from Day 1", "Access to venture funding & mentorship", "Founders from Cambridge & Microsoft"],
        actionText: "FOUNDER TRACK ACTIVE"
    }
];

const AestrDifferentiators = () => {
    return (
        <section className="relative py-24 bg-[#5B1DD6] overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-boxed relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-20"
                >
                    <p className="text-accent text-xs font-orbitron font-bold tracking-[0.4em] uppercase mb-4">
                        — The AESTR Advantage —
                    </p>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-orbitron font-black text-white mb-6 uppercase tracking-tight">
                        Major Discussion <span className="text-accent">Points</span>
                    </h2>
                    <p className="text-white/70 font-outfit text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Expanding brand positioning to clearly communicate why AESTR is distinct from traditional B.Tech programs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {differentiators.map((item, idx) => {
                        const isNeon = idx % 2 === 0; // 0, 2, 4 are Neon
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`relative group p-8 rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 ${
                                    isNeon ? 'bg-accent border-accent' : 'bg-black border-white/10'
                                }`}
                            >
                                {/* Card Glow (Only for black cards for contrast) */}
                                {!isNeon && <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/40 transition-all duration-500" />}
                                
                                <div className="relative z-10">
                                    <h3 className={`text-xl md:text-2xl font-orbitron font-bold mb-8 md:mb-10 leading-tight transition-colors min-h-[60px] ${
                                        isNeon ? 'text-black' : 'text-white group-hover:text-accent'
                                    }`}>
                                        {item.title}
                                    </h3>
                                    
                                    <ul className="space-y-5">
                                        {item.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex items-start gap-3">
                                                <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 shadow-[0_0_8px_rgba(215,246,1,0.6)] ${
                                                    isNeon ? 'bg-black' : 'bg-accent'
                                                }`} />
                                                <span className={`font-outfit text-sm md:text-base leading-snug ${
                                                    isNeon ? 'text-black/80 font-bold' : 'text-white/80'
                                                }`}>
                                                    {point}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                {/* Action Link Decor - Visible but highlighted on hover */}
                                <div className={`mt-8 pt-6 border-t transition-all duration-300 ${
                                    isNeon ? 'border-black/10' : 'border-white/5'
                                }`}>
                                    <span className={`text-[10px] font-orbitron font-black tracking-widest uppercase transition-all duration-300 ${
                                        isNeon 
                                            ? 'text-black/40 group-hover:text-black group-hover:scale-105' 
                                            : 'text-accent/30 group-hover:text-accent group-hover:scale-105 shadow-[0_0_10px_rgba(var(--accent-rgb),0.3)]'
                                    } inline-block`}>
                                        {item.actionText}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Special Final Action Item Card (Kept unique as the "Main" CTA) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 relative p-8 rounded-3xl bg-black border border-accent/30 flex flex-col justify-center text-white shadow-[0_0_40px_rgba(215,246,1,0.1)]"
                    >
                        <h3 className="text-2xl font-orbitron font-black mb-4 uppercase leading-tight text-accent">
                            Future Career <br /> Alignment
                        </h3>
                        <p className="text-white/80 font-medium font-outfit mb-8 leading-tight">
                            Engineered for high-impact roles powering the industries of 2030 and beyond.
                        </p>
                        <a 
                            href="#registration-form"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-accent text-black font-orbitron font-bold py-4 rounded-xl text-center hover:bg-white transition-all flex items-center justify-center gap-2"
                        >
                            SECURE YOUR SPOT
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AestrDifferentiators;
