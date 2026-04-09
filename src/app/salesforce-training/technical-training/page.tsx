import React from 'react';
import Navbar from '@/components/Navbar';

export default function TechnicalTrainingPage() {
    return (
        <main className="min-h-screen bg-black relative flex flex-col font-sans selection:bg-accent selection:text-black">
            <Navbar />

            {/* Header Section (Black) */}
            <section className="pt-40 lg:pt-52 pb-24 px-6 md:px-12 lg:px-24 bg-black">
                <div className="max-w-[1400px] mx-auto w-full">
                    <p className="text-accent font-orbitron text-[10px] font-bold tracking-[0.3em] uppercase mb-4 sm:mb-6">Section 1</p>
                    <h1 className="font-orbitron font-black text-4xl sm:text-6xl lg:text-7xl xl:text-[90px] leading-[0.95] capitalize tracking-[-0.02em] flex flex-col gap-1 lg:gap-2">
                        <span className="text-white">Technical</span>
                        <span className="text-accent drop-shadow-[0_0_20px_rgba(216,246,2,0.3)]">Training</span>
                    </h1>
                </div>
            </section>

            {/* 1. Introduction (Neon) */}
            <section className="bg-accent text-black py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1200px] mx-auto w-full">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="w-full lg:w-3/5">
                            <h2 className="font-orbitron font-black text-3xl lg:text-4xl uppercase tracking-widest mb-6 border-b-2 border-black pb-4 inline-block">1. Introduction</h2>
                            <p className="text-black/80 font-semibold text-sm md:text-base leading-relaxed">
                                This report summarizes the topics covered during the Salesforce training program conducted for freshers. The training was designed to provide a strong foundation in both Salesforce Administration and Salesforce Development, enabling participants to understand platform capabilities, configure business processes, and build custom solutions.
                            </p>
                        </div>
                        <div className="w-full lg:w-2/5 aspect-[4/3] rounded-2xl overflow-hidden border-4 border-black shadow-[10px_10px_0px_#000]">
                            <img src="/saleforce-training/image-31.jpeg" alt="Training Introduction" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Training Objective (Purple) */}
            <section className="bg-purple text-white py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1200px] mx-auto w-full">
                    <div className="border border-white/20 p-8 md:p-12 bg-black/20 backdrop-blur-sm">
                        <h2 className="font-orbitron font-black text-3xl lg:text-4xl uppercase tracking-widest mb-8 drop-shadow-md">2. Training Objective</h2>
                        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">The primary objectives of this training were:</p>
                        <ul className="space-y-6">
                            {[
                                "To introduce core Salesforce platform concepts",
                                "To build hands-on skills in configuration and customization",
                                "To provide foundational knowledge of Apex and Lightning Web Components",
                                "To prepare participants for real-world project scenarios"
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-5 items-start">
                                    <span className="text-accent font-orbitron font-black text-xl">→</span>
                                    <span className="text-white font-black uppercase text-xs md:text-sm tracking-widest">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. Salesforce Administration Topics (Neon) */}
            <section className="bg-accent text-black py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1200px] mx-auto w-full">
                    <h2 className="font-orbitron font-black text-3xl lg:text-5xl uppercase tracking-widest mb-16 border-b-4 border-black pb-6">
                        3. Salesforce Administration
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { title: "3.1 Data Modeling", text: "Apps, Tabs, Objects, Fields, Page Layouts, Record Types", icons: ["Apps", "Tabs", "Objects", "Fields"] },
                            { title: "3.2 Data Security", text: "Comprehensive coverage of Org, Object, Field, and Record-Level security.", icons: ["OWD", "Sharing", "Profiles", "Roles"] },
                            { title: "3.3 Data Analytics", text: "Tabular, Summary, Matrix, and Joined reports along with visual Dashboards.", icons: ["Reports", "Dashboards"] },
                            { title: "3.4 Admin Features", text: "Validation Rules, Formula Fields, List Views, Activities, and Duplicate Rules.", icons: ["Logic", "Rules"] }
                        ].map((box, i) => (
                            <div key={i} className="border-2 border-black p-8 bg-white/5 shadow-[8px_8px_0px_#000]">
                                <h3 className="font-orbitron font-black text-xl mb-4">{box.title}</h3>
                                <p className="text-black/70 text-sm font-bold leading-relaxed mb-6">{box.text}</p>
                                <div className="flex flex-wrap gap-2">
                                    {box.icons.map((tag, j) => (
                                        <span key={j} className="bg-black text-accent px-3 py-1 text-[10px] font-black uppercase tracking-tighter">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-black text-accent p-10 border-4 border-black shadow-[12px_12px_0px_rgba(0,0,0,0.2)]">
                        <h3 className="font-orbitron font-black text-2xl mb-4">3.5 Automation Using Flows</h3>
                        <p className="text-accent/70 text-sm leading-relaxed mb-8 font-bold">
                            Advanced declarative automation including Record-Triggered, Screen, and Scheduled Flows.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {["Record-Triggered", "Screen", "Scheduled"].map((flow, i) => (
                                <span key={i} className="bg-accent text-black px-5 py-2 text-xs uppercase tracking-[0.2em] font-black border-2 border-accent">
                                    {flow}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Salesforce Development Topics (Purple) */}
            <section className="bg-purple text-white py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1200px] mx-auto w-full">
                    <h2 className="font-orbitron font-black text-3xl lg:text-5xl uppercase tracking-widest mb-16 text-center border-accent border-b-2 pb-6 inline-block w-full">
                        4. Salesforce Development
                    </h2>

                    {/* Mid-Curriculum Banner */}
                    <div className="mb-16 w-full h-[400px] rounded-2xl overflow-hidden border-4 border-accent relative group">
                        <img src="/saleforce-training/image-21.jpeg" alt="Technical Workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                        <div className="absolute inset-x-0 bottom-0 bg-black/80 p-8 border-t-2 border-accent">
                            <p className="text-accent font-orbitron font-black text-xs uppercase tracking-[0.3em]">Module 04 TRANSITION</p>
                            <h3 className="text-white font-orbitron font-black text-2xl uppercase tracking-widest">Configuration to Development</h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-black/30 border-t-4 border-accent p-8">
                            <h3 className="font-orbitron font-black text-2xl text-accent mb-8 uppercase tracking-widest">Core Apex</h3>
                            <div className="space-y-6">
                                {["Apex Basics", "Triggers", "Asynchronous Apex", "Test Classes"].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="w-10 h-1 bg-accent group-hover:w-16 transition-all duration-300"></div>
                                        <span className="text-white font-black text-sm md:text-base uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-black/30 border-t-4 border-accent p-8">
                            <h3 className="font-orbitron font-black text-2xl text-accent mb-8 uppercase tracking-widest">LWC (Components)</h3>
                            <ul className="grid grid-cols-1 gap-4">
                                {[
                                    "Component Basics & Event Handling",
                                    "Reactivity & Rendering",
                                    "Lightning Data Service (LDS)",
                                    "Apex Integration & CRUD",
                                    "Advanced Lifecycle Hooks"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-4 items-center">
                                        <span className="text-accent font-black text-xs">[0{idx + 1}]</span>
                                        <span className="text-white/80 font-bold text-xs uppercase tracking-widest">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Training Glimpse (Neon) */}
            <section className="bg-accent text-black py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1200px] mx-auto w-full">
                    <div className="flex items-center gap-4 mb-16">
                        <h2 className="font-orbitron font-black text-3xl lg:text-5xl uppercase tracking-widest">Training Glimpse</h2>
                        <div className="flex-grow h-2 bg-black"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { src: "image-34.jpeg", alt: "Lab session 1" },
                            { src: "image-33.jpeg", alt: "Coding lab 2" },
                            { src: "image-25.jpeg", alt: "Workshop 3" }
                        ].map((img, i) => (
                            <div key={i} className="aspect-[4/3] bg-black border-4 border-black rounded-2xl overflow-hidden group shadow-[15px_15px_0px_#000]">
                                <img src={`/saleforce-training/${img.src}`} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 hover:rotate-2" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Key Learning Outcomes & Conclusion (Purple) */}
            <section className="bg-purple text-white py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1200px] mx-auto w-full">
                    <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
                        <div className="w-full lg:w-1/2">
                            <h2 className="font-orbitron font-black text-3xl lg:text-4xl uppercase tracking-widest mb-10 text-accent">5. Key Learning Outcomes</h2>
                            <div className="space-y-6">
                                {[
                                    "Full comprehension of Salesforce Data & Security",
                                    "Automation Mastery using Screen & Record Flows",
                                    "Robust APEX coding and Trigger implementations",
                                    "Advanced UI development with LWC",
                                    "Solid foundation for real-world implementations"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6 border-b border-white/10 pb-4 group">
                                        <span className="text-accent font-black text-2xl group-hover:translate-x-2 transition-transform italic">#0{idx + 1}</span>
                                        <p className="text-white font-bold text-sm md:text-base uppercase leading-tight mt-1">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 aspect-square rounded-3xl overflow-hidden border-8 border-accent shadow-[20px_20px_0px_rgba(216,246,2,0.1)]">
                            <img src="/saleforce-training/image-25.jpeg" alt="Outcomes Visual" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="pt-16 border-t-[8px] border-accent border-dotted">
                        <div className="max-w-3xl">
                            <h2 className="font-orbitron font-black text-4xl lg:text-5xl uppercase tracking-tighter mb-8 italic">Conclusion</h2>
                            <p className="text-white font-semibold text-lg md:text-xl leading-relaxed">
                                The training successfully covered essential Salesforce Administration and Development concepts. Participants now have a solid foundation to work on real-world implementations and further enhance their expertise in advanced topics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}
