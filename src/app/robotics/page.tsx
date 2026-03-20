'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Robotics = () => {
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
                                Robotics Engineering
                            </h1>
                            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
                                Master the future of automation and intelligent systems
                            </p>
                            <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                <div className="glass p-6 rounded-2xl">
                                    <h3 className="text-2xl font-bold text-foreground mb-4">What You'll Learn</h3>
                                    <ul className="space-y-3 text-foreground/80">
                                        <li>• Autonomous Systems Design</li>
                                        <li>• Machine Learning for Robotics</li>
                                        <li>• Computer Vision & Perception</li>
                                        <li>• Control Systems & Automation</li>
                                        <li>• Sensor Integration & IoT</li>
                                    </ul>
                                </div>
                                
                                <div className="glass p-6 rounded-2xl">
                                    <h3 className="text-2xl font-bold text-foreground mb-4">Career Opportunities</h3>
                                    <ul className="space-y-3 text-foreground/80">
                                        <li>• Robotics Engineer</li>
                                        <li>• Automation Specialist</li>
                                        <li>• AI Systems Developer</li>
                                        <li>• Control Systems Engineer</li>
                                        <li>• IoT Solutions Architect</li>
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

export default Robotics;
