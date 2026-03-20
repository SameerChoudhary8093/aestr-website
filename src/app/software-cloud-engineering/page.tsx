'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SoftwareCloudEngineering = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-background">
                <section className="py-24 md:py-32">
                    <div className="container-boxed">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-foreground mb-6">
                                Software & Cloud Engineering
                            </h1>
                            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
                                Build scalable software solutions and master cloud technologies
                            </p>
                            <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                <div className="glass p-6 rounded-2xl">
                                    <h3 className="text-2xl font-bold text-foreground mb-4">What You'll Learn</h3>
                                    <ul className="space-y-3 text-foreground/80">
                                        <li>• Cloud Architecture (AWS, Azure, GCP)</li>
                                        <li>• DevOps & CI/CD Pipelines</li>
                                        <li>• Microservices & Containerization</li>
                                        <li>• Scalable Software Design</li>
                                        <li>• Cloud Security & Compliance</li>
                                    </ul>
                                </div>
                                
                                <div className="glass p-6 rounded-2xl">
                                    <h3 className="text-2xl font-bold text-foreground mb-4">Career Opportunities</h3>
                                    <ul className="space-y-3 text-foreground/80">
                                        <li>• Cloud Solutions Architect</li>
                                        <li>• DevOps Engineer</li>
                                        <li>• Full Stack Developer</li>
                                        <li>• Cloud Security Engineer</li>
                                        <li>• Site Reliability Engineer</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default SoftwareCloudEngineering;
