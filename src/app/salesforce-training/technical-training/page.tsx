import React from 'react';
import Navbar from '@/components/Navbar';

export default function TechnicalTrainingPage() {
    return (
        <main className="min-h-screen bg-black relative flex flex-col font-sans selection:bg-accent selection:text-black pb-24">
            <Navbar />
            
            {/* Header Section */}
            <section className="pt-40 lg:pt-52 pb-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1000px] mx-auto w-full">
                    <p className="text-accent font-orbitron text-[10px] font-bold tracking-[0.3em] uppercase mb-4 sm:mb-6">Section 1</p>
                    <h1 className="font-orbitron font-black text-4xl sm:text-6xl lg:text-7xl xl:text-[90px] leading-[0.95] capitalize tracking-[-0.02em] flex flex-col gap-1 lg:gap-2 mb-16">
                        <span className="text-white">Technical</span>
                        <span className="text-accent drop-shadow-[0_0_20px_rgba(216,246,2,0.3)]">Training</span>
                    </h1>

                    <div className="space-y-16">
                        
                        {/* 1. Introduction */}
                        <div className="bg-[#111] border border-white/10 p-8 md:p-12">
                            <h2 className="font-orbitron font-black text-2xl lg:text-3xl uppercase tracking-widest text-white mb-6">1. Introduction</h2>
                            <p className="text-white/70 text-sm md:text-base leading-relaxed">
                                This report summarizes the topics covered during the Salesforce training program conducted for freshers. The training was designed to provide a strong foundation in both Salesforce Administration and Salesforce Development, enabling participants to understand platform capabilities, configure business processes, and build custom solutions.
                            </p>
                        </div>

                        {/* 2. Training Objective */}
                        <div className="bg-purple border-l-4 border-accent p-8 md:p-12">
                            <h2 className="font-orbitron font-black text-2xl lg:text-3xl uppercase tracking-widest text-white mb-6 drop-shadow-md">2. Training Objective</h2>
                            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">The primary objectives of this training were:</p>
                            <ul className="space-y-4">
                                {[
                                    "To introduce core Salesforce platform concepts",
                                    "To build hands-on skills in configuration and customization",
                                    "To provide foundational knowledge of Apex and Lightning Web Components",
                                    "To prepare participants for real-world project scenarios"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-4 items-start">
                                        <span className="text-accent font-orbitron font-black mt-1">→</span>
                                        <span className="text-white font-medium text-sm md:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 3. Salesforce Administration Topics Covered */}
                        <div>
                            <h2 className="font-orbitron font-black text-3xl lg:text-4xl uppercase tracking-widest text-accent mb-10 pb-4 border-b border-white/20">
                                3. Salesforce Administration Topics Covered
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pl-0 md:pl-6">
                                
                                <div className="space-y-4">
                                    <h3 className="font-orbitron font-black text-xl text-white tracking-widest">3.1 Data Modeling</h3>
                                    <p className="text-white/60 text-xs uppercase tracking-wider mb-4 border-b border-white/10 pb-4">Participants were introduced to the core building blocks of Salesforce data architecture:</p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {["Applications (Apps)", "Tabs", "Objects", "Fields", "Page Layouts", "Lightning Pages", "Record Types"].map((pill, i) => (
                                            <span key={i} className="bg-white/5 border border-white/10 text-white/80 px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold">
                                                {pill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-orbitron font-black text-xl text-white tracking-widest">3.2 Data Security</h3>
                                    <p className="text-white/60 text-xs uppercase tracking-wider mb-4 border-b border-white/10 pb-4">Comprehensive coverage of Salesforce's security model:</p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {["Organization-Level Security", "Object-Level Security", "Field-Level Security", "Record-Level Security"].map((pill, i) => (
                                            <span key={i} className="bg-white/5 border border-white/10 text-white/80 px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold">
                                                {pill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-orbitron font-black text-xl text-white tracking-widest">3.3 Data Analytics</h3>
                                    <p className="text-white/60 text-xs uppercase tracking-wider mb-4 border-b border-white/10 pb-4">Participants learned how to analyze and visualize data:</p>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 text-sm text-white/80"><span className="text-accent px-2 bg-accent/10 font-bold border border-accent/20">Reports</span> Tabular, Summary, Matrix, Joined reports</li>
                                        <li className="flex gap-3 text-sm text-white/80"><span className="text-accent px-2 bg-accent/10 font-bold border border-accent/20">Dashboards</span> Visual representation of reports, Components like charts, metrics, and tables</li>
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-orbitron font-black text-xl text-white tracking-widest">3.4 Admin Features</h3>
                                    <p className="text-white/60 text-xs uppercase tracking-wider mb-4 border-b border-white/10 pb-4">Key features:</p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {["Validation Rules", "Formula Fields", "List Views", "Feed Tracking", "Field History Tracking", "Duplicate and Matching Rule", "Activities"].map((pill, i) => (
                                            <span key={i} className="bg-white/5 border border-white/10 text-white/80 px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold">
                                                {pill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            <div className="mt-12 bg-[#181818] p-8 md:p-10 border border-white/10">
                                <h3 className="font-orbitron font-black text-xl text-white tracking-widest mb-4">3.5 Automation Using Flows</h3>
                                <p className="text-white/70 text-sm leading-relaxed mb-6">
                                    Participants were introduced to Salesforce Flow, a powerful declarative automation tool used to streamline business processes without writing code. The following types of flows were covered:
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {["Record-Triggered Flows", "Screen Flows", "Scheduled Flows"].map((flow, i) => (
                                        <span key={i} className="bg-accent text-black px-4 py-2 text-xs uppercase tracking-widest font-black shadow-[4px_4px_0_#fff]">
                                            {flow}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 4. Salesforce Development Topics Covered */}
                        <div>
                            <h2 className="font-orbitron font-black text-3xl lg:text-4xl uppercase tracking-widest text-accent mb-10 pb-4 border-b border-white/20">
                                4. Salesforce Development Topics Covered
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pl-0 md:pl-6">
                                <div className="bg-white/5 border border-white/10 p-6 md:p-8">
                                    <h3 className="font-orbitron font-black text-lg text-white tracking-widest mb-6">Core Apex</h3>
                                    <ul className="space-y-4">
                                        {["Apex Basics", "Triggers", "Asynchronous Apex", "Test Classes"].map((item, idx) => (
                                            <li key={idx} className="flex gap-4 items-center">
                                                <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_rgba(216,246,2,0.8)]"></div>
                                                <span className="text-white/80 font-medium text-sm md:text-base uppercase tracking-wider">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6 md:p-8">
                                    <h3 className="font-orbitron font-black text-lg text-white tracking-widest mb-6 flex flex-col">
                                        <span>Lightning Web</span>
                                        <span className="text-accent text-xs mt-1">Components (LWC)</span>
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Component Basics and Event Handling",
                                            "Interactive Components and Business Logic",
                                            "Reactivity and Rendering",
                                            "Component Communication",
                                            "Lightning Data Service (LDS)",
                                            "CRUD Operations and Apex Integration",
                                            "UI Design and Data Presentation",
                                            "Lifecycle Hooks and Advanced Features",
                                            "Practice, Debugging, and Doubt Resolution"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3 items-start">
                                                <span className="text-white/30 text-[10px] font-orbitron mt-1">{(idx + 1).toString().padStart(2, '0')}</span>
                                                <span className="text-white/70 font-medium text-xs md:text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 5. Key Learning Outcomes & Conclusion */}
                        <div className="bg-accent text-black p-8 md:p-12 relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="font-orbitron font-black text-2xl lg:text-3xl uppercase tracking-widest mb-8">5. Key Learning Outcomes</h2>
                                <ul className="space-y-5 mb-12 border-l-4 border-black pl-6">
                                    {[
                                        "Understand Salesforce data architecture and security model",
                                        "Configure applications and automate business processes",
                                        "Create reports and dashboards for data insights",
                                        "Write basic Apex code and triggers",
                                        "Develop interactive UI using Lightning Web Components",
                                        "Understand best practices for scalable and secure development"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-4 items-start">
                                            <span className="font-black text-xs md:text-sm uppercase tracking-wider text-black w-full">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-8 border-t-[3px] border-black border-dashed">
                                    <h2 className="font-orbitron font-black text-2xl lg:text-3xl uppercase tracking-widest mb-6">Conclusion</h2>
                                    <p className="text-black font-semibold text-sm md:text-base leading-relaxed max-w-3xl">
                                        The training successfully covered essential Salesforce Administration and Development concepts required for beginners. Participants now have a solid foundation to work on real-world Salesforce implementations and further enhance their expertise in advanced topics.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
