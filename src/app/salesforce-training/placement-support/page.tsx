import React from 'react';
import Navbar from '@/components/Navbar';

export default function PlacementSupportPage() {
    return (
        <main className="min-h-screen bg-black relative flex flex-col font-sans selection:bg-accent selection:text-black pb-24">
            <Navbar />
            
            {/* Header Section */}
            <section className="pt-40 lg:pt-52 pb-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1000px] mx-auto w-full">
                    <p className="text-accent font-orbitron text-[10px] font-bold tracking-[0.3em] uppercase mb-4 sm:mb-6">Section 3</p>
                    <h1 className="font-orbitron font-black text-4xl sm:text-6xl lg:text-7xl xl:text-[90px] leading-[0.95] capitalize tracking-[-0.02em] flex flex-col gap-1 lg:gap-2 mb-16">
                        <span className="text-white">Placement</span>
                        <span className="text-accent drop-shadow-[0_0_20px_rgba(216,246,2,0.3)]">Training Support</span>
                    </h1>

                    <div className="space-y-16">
                        
                        {/* 1. Introduction */}
                        <div className="bg-[#111] border border-white/10 p-8 md:p-12 relative overflow-hidden">
                            <h2 className="font-orbitron font-black text-2xl lg:text-3xl uppercase tracking-widest text-white mb-6 relative z-10">1. Introduction</h2>
                            <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed relative z-10">
                                <p>Skill Horizon designs the Placement Training Program to equip students for the industry by enhancing their technical skills, soft skills, and overall professional readiness. The program focuses on practical learning through real-time projects, mock interviews, and resume-building sessions, helping students gain hands-on experience and confidence to successfully face recruitment processes.</p>
                                <p>In addition, Skill Horizon provides end-to-end placement support, including interview preparation, resume enhancement, and job referrals. This report presents an overview of the training activities, placement assistance, and company-wise outcomes, highlighting Skill Horizon’s contribution to improving student employability and industry readiness.</p>
                            </div>
                        </div>

                        {/* Company-wise Placement Details */}
                        <div>
                            <h2 className="font-orbitron font-black text-3xl lg:text-4xl uppercase tracking-widest text-accent mb-10 pb-4 border-b border-white/20">
                                Company-wise Placement Details
                            </h2>

                            <div className="space-y-16">
                                
                                {/* Softshala */}
                                <div className="border border-white/10 bg-[#0a0a0a]">
                                    <div className="bg-purple p-6 md:p-10 border-b border-white/10">
                                        <h3 className="font-orbitron font-black text-2xl lg:text-3xl tracking-widest uppercase text-white drop-shadow-md">Softshala Technologies</h3>
                                        <p className="text-white/80 font-black tracking-[0.2em] uppercase text-[10px] mt-2">📍 Jaipur</p>
                                    </div>
                                    <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                                        <div className="space-y-8">
                                            <div>
                                                <h4 className="font-orbitron font-black text-accent text-sm tracking-widest uppercase mb-3">About</h4>
                                                <p className="text-white/60 text-xs leading-relaxed">Softshala Technologies is a Jaipur-based IT organization specializing in enterprise-level solutions, particularly in the Salesforce and ServiceNow domains. It operates in the IT services and consulting industry, focusing on delivering modern digital transformation solutions to businesses.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-orbitron font-black text-accent text-sm tracking-widest uppercase mb-3">Offer Details</h4>
                                                <ul className="text-white/60 text-xs leading-relaxed space-y-2 border-l border-white/10 pl-4">
                                                    <li><span className="text-white">Training:</span> 6 months with fixed stipend of ₹10,000/month.</li>
                                                    <li><span className="text-white">Post-Training Package:</span> ₹3.5 LPA full-time.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 p-6 flex flex-col justify-center shadow-inner">
                                            <h4 className="font-orbitron font-black text-white text-sm tracking-widest uppercase mb-6 text-center">Selection Statistics</h4>
                                            <div className="grid grid-cols-2 gap-4 text-center">
                                                <div className="border border-white/10 p-3 bg-black/40"><p className="text-[10px] uppercase text-white/50 font-bold mb-1">Appeared</p><p className="font-orbitron font-black text-xl text-white">26</p></div>
                                                <div className="border border-white/10 p-3 bg-black/40"><p className="text-[10px] uppercase text-white/50 font-bold mb-1">Cleared Written</p><p className="font-orbitron font-black text-xl text-white">6</p></div>
                                                <div className="border border-white/10 p-3 bg-black/40"><p className="text-[10px] uppercase text-white/50 font-bold mb-1">Tech Shortlist</p><p className="font-orbitron font-black text-xl text-white">6</p></div>
                                                <div className="border border-accent p-3 bg-accent/10"><p className="text-[10px] uppercase text-accent font-bold mb-1">Final Selected</p><p className="font-orbitron font-black text-xl text-accent">1</p></div>
                                            </div>
                                            <div className="mt-6 text-center">
                                                <p className="text-[10px] uppercase text-white/50 font-bold mb-1">Selected Candidate</p>
                                                <p className="font-black text-white text-sm uppercase tracking-widest">Samir Srinath</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* FEXLE */}
                                <div className="border border-white/10 bg-[#0a0a0a]">
                                    <div className="bg-[#181818] p-6 md:p-10 border-b border-white/10">
                                        <h3 className="font-orbitron font-black text-2xl lg:text-3xl tracking-widest uppercase text-white drop-shadow-md">FEXLE Services</h3>
                                        <p className="text-white/80 font-black tracking-[0.2em] uppercase text-[10px] mt-2">📍 Jaipur</p>
                                    </div>
                                    <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                                        <div className="space-y-8">
                                            <div>
                                                <h4 className="font-orbitron font-black text-accent text-sm tracking-widest uppercase mb-3">About</h4>
                                                <p className="text-white/60 text-xs leading-relaxed">FEXLE Services Pvt. Ltd. is a Jaipur-based IT services and consulting company specializing in Salesforce solutions and cloud-based technologies. Recognized as a Salesforce Consulting Partner.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-orbitron font-black text-accent text-sm tracking-widest uppercase mb-3">Offer Details & Process</h4>
                                                <ul className="text-white/60 text-xs leading-relaxed space-y-2 border-l border-white/10 pl-4 mb-4">
                                                    <li><span className="text-white">CTC:</span> ₹3.0 – ₹4.5 LPA</li>
                                                    <li><span className="text-white">Role:</span> Salesforce Developer</li>
                                                </ul>
                                                <div className="flex flex-wrap gap-2">
                                                    {["Virtual Assessment", "Group Discussion", "L1 Tech Interview", "L2 Tech Interview", "HR Round"].map((pill, i) => (
                                                        <span key={i} className="bg-white/5 border border-white/10 text-white/80 px-2 py-1 text-[9px] uppercase tracking-widest font-bold">{pill}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 p-6 flex flex-col justify-center shadow-inner">
                                            <h4 className="font-orbitron font-black text-white text-sm tracking-widest uppercase mb-6 text-center">Selection Statistics</h4>
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                                                <div className="border border-white/10 p-3 bg-black/40"><p className="text-[10px] uppercase text-white/50 font-bold mb-1">Appeared</p><p className="font-orbitron font-black text-lg text-white">29</p></div>
                                                <div className="border border-white/10 p-3 bg-black/40"><p className="text-[10px] uppercase text-white/50 font-bold mb-1">Cleared VA</p><p className="font-orbitron font-black text-lg text-white">16</p></div>
                                                <div className="border border-white/10 p-3 bg-black/40"><p className="text-[10px] uppercase text-white/50 font-bold mb-1">Cleared GD</p><p className="font-orbitron font-black text-lg text-white">2</p></div>
                                                <div className="border border-accent p-3 bg-accent/10"><p className="text-[10px] uppercase text-accent font-bold mb-1">Final Select</p><p className="font-orbitron font-black text-lg text-accent">1</p></div>
                                            </div>
                                            <div className="mt-6 text-center">
                                                <p className="text-[10px] uppercase text-white/50 font-bold mb-1">Selected Candidate</p>
                                                <p className="font-black text-white text-sm uppercase tracking-widest">Samir Srinath <span className="text-[9px] text-white/40 block normal-case mt-1">(2027 Pass-out – Offer deferred)</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* UntangleIT */}
                                <div className="border border-white/10 bg-[#0a0a0a]">
                                    <div className="bg-[#181818] p-6 md:p-10 border-b border-white/10">
                                        <h3 className="font-orbitron font-black text-2xl lg:text-3xl tracking-widest uppercase text-white drop-shadow-md">UntangleIT</h3>
                                        <p className="text-white/80 font-black tracking-[0.2em] uppercase text-[10px] mt-2">📍 Jaipur</p>
                                    </div>
                                    <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                                        <div className="space-y-8">
                                            <div>
                                                <h4 className="font-orbitron font-black text-accent text-sm tracking-widest uppercase mb-3">About & Offer Details</h4>
                                                <p className="text-white/60 text-xs leading-relaxed mb-4">Focuses on delivering cloud-based solutions, CRM services, and modern web technologies, actively supporting freshers.</p>
                                                <ul className="text-white/60 text-xs leading-relaxed space-y-2 border-l border-white/10 pl-4">
                                                    <li><span className="text-white">Role:</span> Software Engineer</li>
                                                    <li><span className="text-white">Training:</span> 6 Months @ ₹15,000/month</li>
                                                    <li><span className="text-white">CTC:</span> ₹5.5 LPA (post-training)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 p-6 flex flex-col justify-center shadow-inner text-center">
                                            <h4 className="font-orbitron font-black text-white text-sm tracking-widest uppercase mb-4">Selection Statistics</h4>
                                            <div className="flex justify-center gap-6 text-center">
                                                <div className="border border-white/10 p-4 px-8 bg-black/40"><p className="text-[10px] uppercase text-white/50 font-bold mb-1">Appeared</p><p className="font-orbitron font-black text-2xl text-white">04</p></div>
                                                <div className="border border-white/10 p-4 px-8 bg-black/40"><p className="text-[10px] uppercase text-white/50 font-bold mb-1">Final Selected</p><p className="font-orbitron font-black text-2xl text-white/30">00</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Binario Research */}
                                <div className="border border-white/10 bg-[#0a0a0a]">
                                    <div className="bg-[#181818] p-6 md:p-10 border-b border-white/10">
                                        <h3 className="font-orbitron font-black text-2xl lg:text-3xl tracking-widest uppercase text-white drop-shadow-md">Binario Research</h3>
                                        <p className="text-white/80 font-black tracking-[0.2em] uppercase text-[10px] mt-2">📍 California</p>
                                    </div>
                                    <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                                        <div className="space-y-8">
                                            <div>
                                                <h4 className="font-orbitron font-black text-accent text-sm tracking-widest uppercase mb-3">About & Offer Details</h4>
                                                <p className="text-white/60 text-xs leading-relaxed mb-4">California-based IT organization specializing in Salesforce-based Health CRM solutions.</p>
                                                <ul className="text-white/60 text-xs leading-relaxed space-y-2 border-l border-white/10 pl-4">
                                                    <li><span className="text-white">Role:</span> Salesforce Developer (Health Cloud)</li>
                                                    <li><span className="text-white">CTC:</span> ₹3.20 LPA (Remote)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 p-6 flex flex-col justify-center shadow-inner text-center">
                                            <h4 className="font-orbitron font-black text-white text-sm tracking-widest uppercase mb-4">Selection Statistics</h4>
                                            <div className="flex flex-wrap justify-center gap-4 text-center">
                                                <div className="border border-white/10 p-3 bg-black/40"><p className="text-[10px] uppercase text-white/50 font-bold mb-1">Females Applied</p><p className="font-orbitron font-black text-xl text-white">04</p></div>
                                                <div className="border border-white/10 p-3 bg-black/40"><p className="text-[10px] uppercase text-white/50 font-bold mb-1">Shortlisted</p><p className="font-orbitron font-black text-xl text-white">04</p></div>
                                                <div className="border border-white/10 p-3 bg-black/40"><p className="text-[10px] uppercase text-white/50 font-bold mb-1">Cleared VA</p><p className="font-orbitron font-black text-xl text-white/30">00</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Opportunities */}
                                <div className="border border-white/10 p-8 md:p-12 text-center bg-[#111]">
                                    <h4 className="font-orbitron font-black text-white text-xl lg:text-2xl tracking-widest uppercase mb-6">Additional Opportunities</h4>
                                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                                        <div className="bg-black/50 border border-white/5 p-6 w-full sm:w-1/2">
                                            <h5 className="font-black text-white uppercase tracking-widest mb-2">DeltaCX Consulting, Jaipur</h5>
                                            <p className="text-white/40 text-xs">Skill Horizon provided an opportunity, however, no candidates appeared for this recruitment drive.</p>
                                        </div>
                                        <div className="bg-black/50 border border-white/5 p-6 w-full sm:w-1/2">
                                            <h5 className="font-black text-white uppercase tracking-widest mb-2">VirtuoWhiz, Jaipur</h5>
                                            <p className="text-white/40 text-xs">Drive organized for March 21, 2026. However, no candidates appeared.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Conclusion */}
                        <div className="bg-accent text-black p-8 md:p-12 relative overflow-hidden border-4 border-black shadow-[10px_10px_0px_#222]">
                            <div className="relative z-10">
                                <h2 className="font-orbitron font-black text-2xl lg:text-3xl uppercase tracking-widest mb-6 border-b-2 border-black pb-4 inline-block w-full">Conclusion</h2>
                                <p className="text-black font-semibold text-sm md:text-base leading-relaxed mb-8">
                                    The placement initiatives conducted by Skill Horizon provided students with valuable opportunities to participate in recruitment drives with multiple organizations. Skill Horizon successfully:
                                </p>
                                
                                <ul className="space-y-4 pl-4 border-l-4 border-black mb-8">
                                    <li className="flex items-center gap-3"><span className="text-black font-black">→</span> <span className="font-bold text-sm tracking-wide">Organized multiple recruitment drives with reputed IT companies.</span></li>
                                    <li className="flex items-center gap-3"><span className="text-black font-black">→</span> <span className="font-bold text-sm tracking-wide">Provided students with exposure to real-time hiring processes.</span></li>
                                    <li className="flex items-center gap-3"><span className="text-black font-black">→</span> <span className="font-bold text-sm tracking-wide">Offered industry-oriented training in Salesforce and related domains.</span></li>
                                </ul>

                                <div className="bg-black text-white p-6 border border-white/10">
                                    <p className="text-accent font-orbitron font-black text-sm tracking-widest uppercase mb-4">Areas for Improvement / Outcomes Analysis</p>
                                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">The overall selection results did not fully meet expectations across all drives due to: Lack of strong basic concepts among some students, specific eligibility criteria constraints (academic percentage, passing year, etc.), and limited preparedness in technical and communication skills during the final interview phases.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
