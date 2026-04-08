"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function TestResultsPage() {
    const [showAllTrainees, setShowAllTrainees] = useState(false);
    return (
        <main className="min-h-screen bg-black relative flex flex-col font-sans selection:bg-accent selection:text-black pb-24">
            <Navbar />
            
            {/* Header Section */}
            <section className="pt-40 lg:pt-52 pb-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1400px] mx-auto w-full">
                    <p className="text-accent font-orbitron text-[10px] font-bold tracking-[0.3em] uppercase mb-4 sm:mb-6">Section 4</p>
                    <h1 className="font-orbitron font-black text-4xl sm:text-6xl lg:text-7xl xl:text-[90px] leading-[0.95] capitalize tracking-[-0.02em] flex flex-col gap-1 lg:gap-2 mb-16">
                        <span className="text-white">Test Result</span>
                        <span className="text-accent drop-shadow-[0_0_20px_rgba(216,246,2,0.3)]">Summary</span>
                    </h1>

                    <div className="space-y-16">
                        
                        {/* Intro grid: Coverage & Insights & Stats */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pl-0">
                            
                            <div className="space-y-8">
                                {/* Test Coverage */}
                                <div className="bg-[#111] border border-white/10 p-8">
                                    <h2 className="font-orbitron font-black text-xl lg:text-2xl uppercase tracking-widest text-white mb-6">Test Coverage</h2>
                                    <ul className="text-white/70 text-sm leading-relaxed space-y-3">
                                        <li><span className="text-accent font-black mr-2">/</span> Salesforce Administration (Data Modeling, Security, Automation)</li>
                                        <li><span className="text-accent font-black mr-2">/</span> Apex Programming Fundamentals</li>
                                        <li><span className="text-accent font-black mr-2">/</span> Lightning Web Components (LWC)</li>
                                        <li><span className="text-accent font-black mr-2">/</span> Scenario-based and problem-solving questions</li>
                                    </ul>
                                </div>

                                {/* Performance Insights */}
                                <div className="bg-purple border-l-4 border-accent p-8">
                                    <h2 className="font-orbitron font-black text-xl lg:text-2xl uppercase tracking-widest text-white mb-6">Performance Insights</h2>
                                    <ul className="text-white/80 text-sm leading-relaxed space-y-4">
                                        <li className="flex gap-3"><span className="text-accent mt-0.5">●</span> Students demonstrated strong understanding of core Salesforce Administration concepts such as data modeling, security, and automation.</li>
                                        <li className="flex gap-3"><span className="text-accent mt-0.5">●</span> Moderate performance was observed in development areas, particularly in Apex and Lightning Web Components.</li>
                                        <li className="flex gap-3"><span className="text-accent mt-0.5">●</span> Some students faced challenges in scenario-based questions and real-time problem-solving.</li>
                                        <li className="flex gap-3"><span className="text-accent mt-0.5">●</span> A gap was identified in applying theoretical knowledge to practical use cases.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Overall Performance Stats */}
                            <div className="bg-accent text-black p-8 md:p-12 flex flex-col justify-center">
                                <h2 className="font-orbitron font-black text-2xl lg:text-3xl uppercase tracking-widest mb-10 border-b-2 border-black pb-4">Overall Performance</h2>
                                
                                <div className="grid grid-cols-2 gap-x-6 gap-y-10">
                                    <div>
                                        <p className="text-[10px] uppercase font-bold tracking-widest text-black/60 mb-1">Enrolled</p>
                                        <p className="font-orbitron font-black text-5xl">31</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-bold tracking-widest text-black/60 mb-1">Appeared / Qualified</p>
                                        <p className="font-orbitron font-black text-5xl">28</p>
                                    </div>
                                    <div className="col-span-2 mt-4 pt-4 border-t border-black/10">
                                        <div className="flex flex-col md:flex-row gap-10">
                                            <div>
                                                <p className="text-[10px] uppercase font-bold tracking-widest text-black/60 mb-1">Average Score</p>
                                                <div className="flex items-baseline gap-1">
                                                    <p className="font-orbitron font-black text-7xl md:text-[80px] leading-none tracking-tighter">87.21</p>
                                                    <span className="font-orbitron font-black text-2xl">%</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase font-bold tracking-widest text-black/60 mb-1">Highest Score</p>
                                                <div className="flex items-baseline gap-1">
                                                    <p className="font-orbitron font-black text-4xl leading-none tracking-tighter text-black/40">98.00</p>
                                                    <span className="font-orbitron font-black text-xl text-black/40">%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Detailed Table Matrix */}
                        <div className="pt-10">
                            <h2 className="font-orbitron font-black text-3xl lg:text-4xl uppercase tracking-widest text-accent mb-10 pb-4 border-b border-white/20">
                                Students' One-to-One Mapping
                            </h2>
                            
                            <div className="w-full border-2 border-black rounded-lg overflow-x-auto shadow-[10px_10px_0px_rgba(216,246,2,0.1)]">
                                <div className="min-w-[1000px] bg-white">
                                    {/* Table Header */}
                                    <div className="grid grid-cols-12 bg-[#111] text-accent p-6 border-b border-white/10 text-[10px] md:text-[11px] font-black tracking-widest uppercase items-center">
                                        <div className="col-span-1 border-r border-white/10">Sr.</div>
                                        <div className="col-span-2 pl-4 border-r border-white/10">Student Name</div>
                                        <div className="col-span-1 text-center border-r border-white/10">Marks</div>
                                        <div className="col-span-5 pl-4 border-r border-white/10">Strengths</div>
                                        <div className="col-span-3 pl-4">Areas of Improvement</div>
                                    </div>

                                    {/* Table Rows DYNAMIC */}
                                    {(showAllTrainees ? [
                                        { id: '1', name: 'Aditya Kumar Mishra', marks: '94', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '2', name: 'ADITYA MISHRA', marks: '96', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '3', name: 'Aditya singh', marks: '94', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '4', name: 'Anish Ali', marks: '78', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Advanced Admin Features, Triggers, Test Classes, Advanced LWC Concepts' },
                                        { id: '5', name: 'Ankit kumar', marks: '84', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers, Test Classes and Advanced LWC Concepts' },
                                        { id: '6', name: 'Ashutosh Kumar jha', marks: '94', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '7', name: 'Badre Alam', marks: '98', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '8', name: 'Govind kumar', marks: '78', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Advanced Admin Features, Triggers, Test Classes, Advanced LWC Concepts' },
                                        { id: '9', name: 'Jitu Kumar', marks: '94', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '10', name: 'Ketan Bhaskar', marks: '76', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Advanced Admin Features, Triggers, Test Classes, Advanced LWC Concepts' },
                                        { id: '11', name: 'kundan kumar tiwari', marks: '82', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers, Test Classes and Advanced LWC Concepts' },
                                        { id: '12', name: 'Madhu kumari', marks: '96', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '13', name: 'Md Mustufa Ansari', marks: '90', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '14', name: 'Nikhil Kumar', marks: '86', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers, Test Classes and Advanced LWC Concepts' },
                                        { id: '15', name: 'Nikita', marks: '94', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '16', name: 'Preety Kumari', marks: '94', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '17', name: 'Priyanka Kumari', marks: '78', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Advanced Admin Features, Triggers, Test Classes, Advanced LWC Concepts' },
                                        { id: '18', name: 'Sahil Raja', marks: '82', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers, Test Classes and Advanced LWC Concepts' },
                                        { id: '19', name: 'Samir Srinath', marks: '94', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '20', name: 'Sanjeet Kumar', marks: '80', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers, Test Classes and Advanced LWC Concepts' },
                                        { id: '21', name: 'Satyam kumar', marks: '82', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers, Test Classes and Advanced LWC Concepts' },
                                        { id: '22', name: 'Shivam Kumar Singh', marks: '74', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Advanced Admin Features, Triggers, Test Classes, Advanced LWC Concepts' },
                                        { id: '23', name: 'Shivani Sharma', marks: '88', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers, Test Classes and Advanced LWC Concepts' },
                                        { id: '24', name: 'Sulman khan', marks: '88', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers, Test Classes and Advanced LWC Concepts' },
                                        { id: '25', name: 'Uma Shankar Pandey', marks: '76', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Advanced Admin Features, Triggers, Test Classes, Advanced LWC Concepts' },
                                        { id: '26', name: 'Wasim Khan', marks: '98', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '27', name: 'Youraj Kumar', marks: '94', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '28', name: 'yuvraj Kumar Yadav', marks: '80', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Advanced Admin Features, Triggers, Test Classes, Advanced LWC Concepts' },
                                        { id: '29', name: 'Vikash Kumar', marks: 'N/A', s: 'Not Appeared', i: 'N/A' },
                                        { id: '30', name: 'Shubham Kumar', marks: 'N/A', s: 'Not Appeared', i: 'N/A' },
                                        { id: '31', name: 'Utsav Raj', marks: 'N/A', s: 'Not Appeared', i: 'N/A' }
                                    ] : [
                                        { id: '1', name: 'Aditya Kumar Mishra', marks: '94', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '2', name: 'ADITYA MISHRA', marks: '96', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '3', name: 'Aditya singh', marks: '94', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '4', name: 'Anish Ali', marks: '78', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Advanced Admin Features, Triggers, Test Classes, Advanced LWC Concepts' },
                                        { id: '5', name: 'Ankit kumar', marks: '84', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers, Test Classes and Advanced LWC Concepts' },
                                        { id: '6', name: 'Ashutosh Kumar jha', marks: '94', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '7', name: 'Badre Alam', marks: '98', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '8', name: 'Govind kumar', marks: '78', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Advanced Admin Features, Triggers, Test Classes, Advanced LWC Concepts' },
                                        { id: '9', name: 'Jitu Kumar', marks: '94', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '10', name: 'Ketan Bhaskar', marks: '76', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Advanced Admin Features, Triggers, Test Classes, Advanced LWC Concepts' },
                                        { id: '11', name: 'kundan kumar tiwari', marks: '82', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers, Test Classes and Advanced LWC Concepts' },
                                        { id: '12', name: 'Madhu kumari', marks: '96', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '13', name: 'Md Mustufa Ansari', marks: '90', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' },
                                        { id: '14', name: 'Nikhil Kumar', marks: '86', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers, Test Classes and Advanced LWC Concepts' },
                                        { id: '15', name: 'Nikita', marks: '94', s: 'Admin Fundamentals, Apex Fundamentals, Asynchronous Apex, Lightning Web Components', i: 'Triggers and Test Classes' }
                                    ]).map((student, idx) => (
                                        <div key={idx} className="grid grid-cols-12 bg-white hover:bg-black/5 p-4 md:p-5 border-b border-black/10 transition-colors items-center text-[10px] md:text-xs font-black uppercase tracking-widest text-[#222]">
                                            <div className="col-span-1 text-black/50 pr-4">{student.id}</div>
                                            <div className="col-span-2 text-black pr-4">{student.name}</div>
                                            
                                            <div className="col-span-1 text-center font-orbitron font-black text-sm md:text-base border-x border-black/10 mx-2">
                                                {student.marks === 'N/A' ? <span className="text-black/30">N/A</span> : student.marks}
                                            </div>
                                            
                                            <div className="col-span-5 px-4">
                                                {student.marks !== 'N/A' ? (
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {student.s.split(', ').map((pill, pIdx) => (
                                                            <span key={pIdx} className="bg-black text-white px-2 py-1 text-[8px] leading-tight tracking-wider">{pill}</span>
                                                        ))}
                                                    </div>
                                                ) : <span className="text-black/30 bg-black/5 px-2 py-1 text-[8px]">{student.s}</span>}
                                            </div>
                                            
                                            <div className="col-span-3 px-4 text-accent mix-blend-difference font-bold text-[9px] md:text-[10px] leading-relaxed">
                                                {student.i}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {!showAllTrainees ? (
                                <div className="mt-10 flex justify-center w-full">
                                    <button onClick={() => setShowAllTrainees(true)} className="group flex items-center gap-3 text-accent font-orbitron font-black text-sm uppercase tracking-widest cursor-pointer hover:scale-105 transition-transform duration-300 outline-none">
                                        View Full Mapping Details
                                        <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            ) : (
                                <div className="mt-10 flex justify-center w-full">
                                    <button onClick={() => setShowAllTrainees(false)} className="group flex items-center gap-3 text-accent font-orbitron font-black text-sm uppercase tracking-widest cursor-pointer hover:scale-105 transition-transform duration-300 outline-none">
                                        View Less Mapping Details
                                        <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Conclusion */}
                        <div className="bg-[#111] border border-white/10 p-8 md:p-12">
                            <h2 className="font-orbitron font-black text-2xl lg:text-3xl uppercase tracking-widest text-white mb-6">Conclusion</h2>
                            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                                The test results indicate that the training program has successfully built a solid foundation in Salesforce fundamentals among the participants. At the same time, the assessment highlighted key areas for improvement, especially in advanced development and practical implementation skills.
                            </p>
                            <p className="text-white/70 text-sm md:text-base leading-relaxed">
                                These insights will help in refining future training strategies, with increased focus on hands-on practice, real-time scenarios, and technical depth. Overall, the results serve as a valuable benchmark for student readiness and will support better preparation for upcoming placement opportunities.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
