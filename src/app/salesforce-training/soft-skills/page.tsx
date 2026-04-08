import React from 'react';
import Navbar from '@/components/Navbar';

export default function SoftSkillsPage() {
    return (
        <main className="min-h-screen bg-black relative flex flex-col font-sans selection:bg-accent selection:text-black pb-24">
            <Navbar />
            
            {/* Header Section */}
            <section className="pt-40 lg:pt-52 pb-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1000px] mx-auto w-full">
                    <p className="text-accent font-orbitron text-[10px] font-bold tracking-[0.3em] uppercase mb-4 sm:mb-6">Section 2</p>
                    <h1 className="font-orbitron font-black text-4xl sm:text-6xl lg:text-7xl xl:text-[90px] leading-[0.95] capitalize tracking-[-0.02em] flex flex-col gap-1 lg:gap-2 mb-16">
                        <span className="text-white">Soft Skill &</span>
                        <span className="text-accent drop-shadow-[0_0_20px_rgba(216,246,2,0.3)]">Interview Prep</span>
                    </h1>

                    <div className="space-y-16">
                        
                        {/* 1. Introduction */}
                        <div className="bg-[#111] border border-white/10 p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full"></div>
                            <h2 className="font-orbitron font-black text-2xl lg:text-3xl uppercase tracking-widest text-white mb-6 relative z-10">1. Introduction</h2>
                            <p className="text-white/70 text-sm md:text-base leading-relaxed relative z-10">
                                The Gyan Vihar training module was an immersive professional development program designed to bridge the gap between academic theory and corporate reality. The mission was to transform students into high-impact candidates through rigorous practice, psychological conditioning, and refined communication strategies. The "Lab" methodology was employed to ensure students didn't just learn—they performed.
                            </p>
                        </div>

                        {/* 2. Topics Covered */}
                        <div>
                            <h2 className="font-orbitron font-black text-3xl lg:text-4xl uppercase tracking-widest text-accent mb-6">
                                2. Topics Covered
                            </h2>
                            <p className="text-white/60 mb-10 text-sm md:text-base tracking-wide border-l-4 border-accent pl-4">
                                The curriculum was divided into three core pillars: <span className="text-white font-bold">Articulation</span>, <span className="text-white font-bold">Strategy</span>, and <span className="text-white font-bold">Psychology</span>.
                            </p>
                            
                            <div className="grid grid-cols-1 gap-6 pl-0 md:pl-6">
                                {[
                                    { title: "Foundation", desc: "Mastering the Process & Types of Communication; Effective Articulation and Active Listening." },
                                    { title: "The Introduction Mastery Lab", desc: "A high-intensity 'Stand-Speak-Refine-Repeat' cycle focused on self-branding and identifying recruiter selection triggers." },
                                    { title: "Behavioral Frameworks", desc: "Real-time implementation of the STAR Method (Situation, Task, Action, Result) for structured storytelling." },
                                    { title: "Group Dynamics", desc: "Group Discussion (GD) Strategy—Structure, Entry, Exit, and live topic practice sessions." },
                                    { title: "Professional Image", desc: "Interview Psychology, Mind Conditioning, Body Language, Grooming, and Image Management for workplace behavior." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
                                        <h3 className="font-orbitron font-black text-lg text-white tracking-widest w-full md:w-1/3 shrink-0">{item.title}</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}

                                {/* Special nested item for Interview Simulations */}
                                <div className="bg-white/5 border border-white/10 p-6 flex flex-col md:flex-row gap-6 items-start">
                                    <h3 className="font-orbitron font-black text-lg text-white tracking-widest w-full md:w-1/3 shrink-0">Interview<br/>Simulations</h3>
                                    <ul className="text-white/60 text-sm leading-relaxed space-y-3 w-full border-l border-white/10 pl-6">
                                        <li className="flex gap-3"><span className="text-accent">•</span> Rapid Fire Interview Simulation (Pressure Handling).</li>
                                        <li className="flex gap-3"><span className="text-accent">•</span> HR & Culture Fit Round Practical Sessions.</li>
                                        <li className="flex gap-3"><span className="text-accent">•</span> Decoding Smart & Tricky Questions.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3. Student Improvements */}
                        <div className="bg-purple border border-white/10 p-8 md:p-12 relative overflow-hidden group">
                            <h2 className="font-orbitron font-black text-2xl lg:text-3xl uppercase tracking-widest text-white mb-6 drop-shadow-md">3. Student Improvements</h2>
                            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-10">Throughout the module, the following transformations were documented:</p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
                                {[
                                    { label: "Structured Narrative", text: "Students transitioned from rambling answers to concise, STAR-based responses." },
                                    { label: "Confidence Levels", text: "A marked increase in vocal projection and eye contact was noted during the 'Introduction Mastery' sessions." },
                                    { label: "Resilience", text: "Participants showed improved composure during 'Rapid Fire' simulations, moving away from 'panic-responses' to thoughtful, calm articulation." },
                                    { label: "Self-Presentation", text: "Significant improvement in grooming standards and professional body language alignment." },
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-black/30 p-6 border-l-2 border-accent hover:bg-black/50 transition-colors">
                                        <h4 className="font-orbitron font-black text-accent tracking-widest uppercase mb-3 text-sm">{item.label}</h4>
                                        <p className="text-white/80 text-xs md:text-sm leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Conclusion */}
                        <div className="bg-accent text-black p-8 md:p-12 relative overflow-hidden border-4 border-black shadow-[10px_10px_0px_#222]">
                            <div className="relative z-10">
                                <h2 className="font-orbitron font-black text-2xl lg:text-3xl uppercase tracking-widest mb-6 border-b-2 border-black pb-4 inline-block w-full">Conclusion</h2>
                                <p className="text-black font-black text-base md:text-lg uppercase tracking-widest leading-relaxed mb-8">
                                    The program successfully prepared a cohort of students who are now <span className="bg-black text-accent px-2 py-1">"Industry Ready."</span>
                                </p>
                                
                                <ul className="space-y-6 pl-4 border-l-4 border-black">
                                    {[
                                        { title: "95% Success Rate", text: "in crafting a unique, professional 'Elevator Pitch.'" },
                                        { title: "Strategic Capability", text: "Students are now equipped to navigate Group Discussions with specific entry and exit strategies rather than passive participation." },
                                        { title: "Recruiter Alignment", text: "Participants have gained a deep understanding of company expectations and the psychology behind HR questioning, positioning them as top-tier candidates for upcoming placements." }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                                            <span className="font-black text-xs md:text-sm uppercase tracking-wider text-black bg-white/40 px-2 py-1 whitespace-nowrap">{item.title}</span>
                                            <span className="font-bold text-xs md:text-sm text-black/80 leading-relaxed max-w-2xl mt-1 md:mt-0 px-2 md:px-0">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
