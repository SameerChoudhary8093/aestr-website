'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import StickyAdmissionsBar from '@/components/StickyAdmissionsBar';
import RegistrationForm from '@/components/RegistrationForm';
import { scrollToRegistrationForm } from '@/utils/navigation';

export default function SovereignAIInitiative() {
  return (
    <>
      <StickyAdmissionsBar />
      
      <section className="relative min-h-screen py-20 overflow-hidden">
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple/10 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="container-boxed relative z-10 w-full py-12 md:py-20">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-[42px] sm:text-[56px] md:text-[64px] lg:text-[84px] font-orbitron font-black tracking-tighter leading-[1.05] mb-6">
              India's $100 Million
              <span className="text-accent block">Sovereign AI Bet</span>
            </h1>
            <p className="text-[21px] sm:text-[24px] lg:text-[32.8px] text-foreground font-bold leading-snug mb-8">
              SGVU Announces the 10-Lakh Sq. Ft. 'AESTR Skyscrapers' in Jaipur
            </p>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] md:h-[600px] mb-16 rounded-[2rem] overflow-hidden"
          >
            <Image
              src="/project-temp-2.jpg"
              alt="AESTR Skyscrapers"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <p className="text-[18px] md:text-[20px] text-foreground/90 font-medium leading-relaxed">
              In one of the largest <span className="text-accent font-bold">not-for-profit</span> AI investments ever initiated in India, AESTR by Suresh Gyan Vihar University has announced a monumental $100 Million deep-tech initiative.
            </p>
            <p className="text-[18px] md:text-[20px] text-foreground/90 font-medium leading-relaxed mt-4">
              This capital is deployed to build a self-sustaining, world-class innovation ecosystem—merging academia, Fortune 500 Global Capability Centers (GCCs), advanced healthcare, and sovereign AI research into one unified physical space.
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* Jagatpura Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-[32px] md:text-[40px] font-orbitron font-bold text-accent mb-6">
                The Transformation of Jagatpura: India's New Tech Epicenter
              </h2>
              <p className="text-[18px] md:text-[20px] text-foreground/90 font-medium leading-relaxed">
                To build a global tech hub, you need the right geography. We are anchoring this $100 Million initiative in Jagatpura—the undisputed, fast-rising tech district of Jaipur.
              </p>
              <p className="text-[18px] md:text-[20px] text-foreground/90 font-medium leading-relaxed mt-4">
                Strategically located in the heart of the city and just 10 minutes from the International Airport, Jagatpura is being transformed into a high-density innovation corridor. Jaipur is already a historic hub for SMB Finance; now, Jagatpura is making it the capital of Sovereign AI.
              </p>
            </motion.div>

            {/* Skyscrapers Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-[32px] md:text-[40px] font-orbitron font-bold text-accent mb-6">
                The AESTR Skyscrapers: 10 Lakh Sq. Ft. of Innovation
              </h2>
              <p className="text-[24px] md:text-[28px] text-foreground font-bold leading-snug mb-4">
                Why go out to find a job when the industry is built around your campus?
              </p>
              <p className="text-[18px] md:text-[20px] text-foreground/90 font-medium leading-relaxed">
                $70 Million of this investment is dedicated exclusively to constructing the AESTR Skyscrapers—a monumental twin-tower complex spanning over 10 Lakh square feet of advanced architectural construction.
              </p>
              <p className="text-[18px] md:text-[20px] text-foreground/90 font-medium leading-relaxed mt-4">
                These twin towers will serve as a frictionless "Ease of Business" headquarters destination specifically for GCCs, elite AI Startups, and Fortune 500 engineering teams. For the residents of the AESTR B.Tech program, the impact is profound. You don't just study near these companies; your "shadow projects" and internships happen in the corporate HQ right inside your own campus.
              </p>
            </motion.div>

            {/* Hospital Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-[32px] md:text-[40px] font-orbitron font-bold text-accent mb-6">
                Integrated Multispecialty Hospital & MedTech Hub
              </h2>
              <p className="text-[18px] md:text-[20px] text-foreground/90 font-medium leading-relaxed">
                Crucially, the AESTR Skyscrapers complex will house a state-of-the-art multispecialty hospital directly on the premises.
              </p>
              <p className="text-[18px] md:text-[20px] text-foreground/90 font-medium leading-relaxed mt-4">
                This is a strategic integration. It is not merely a healthcare facility; it serves as a live, real-world R&D environment for our deep-tech students and researchers. By merging clinical practice with engineering, the hospital will act as the testing ground for advanced AI in diagnostics, robotic surgery, and data-driven patient care, creating an unprecedented ecosystem for Medical AI innovation in India.
              </p>
            </motion.div>

            {/* Talent Arsenal Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-[32px] md:text-[40px] font-orbitron font-bold text-accent mb-6">
                The $30M Talent Arsenal: 100 Professors of Practice
              </h2>
              <p className="text-[24px] md:text-[28px] text-foreground font-bold leading-snug mb-4">
                We are firing the theorists and hiring the builders.
              </p>
              <p className="text-[18px] md:text-[20px] text-foreground/90 font-medium leading-relaxed">
                $30 Million is directly injected into human capital, world-class AI facilities, and student skilling. The highlight of this investment is the creation of 100 "Professor of Practice" positions.
              </p>
              <p className="text-[18px] md:text-[20px] text-foreground/90 font-medium leading-relaxed mt-4">
                AESTR B.Tech residents will not be taught by career academics separated from the industry. They will be mentored by senior executives, lead architects, and startup founders who are actively building the tech ecosystem today.
              </p>
            </motion.div>

            {/* Deep-Tech Foundries */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-[32px] md:text-[40px] font-orbitron font-bold text-accent mb-6">
                The Deep-Tech Foundries: Powering the Aestr Minors
              </h2>
              <p className="text-[18px] md:text-[20px] text-foreground/90 font-medium leading-relaxed mb-6">
                A massive portion of this initiative funds our core R&D foundries. These are the exact facilities where our B.Tech residents and SHODH AI scientists will collaborate:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "AI for Science & Bio-Logic",
                    description: "Directly linked with the on-campus multispecialty hospital for therapeutic AI research and drug discovery."
                  },
                  {
                    title: "Silicon & Systems",
                    description: "Chip design setups and RISC-V architecture labs to build India's semiconductor independence."
                  },
                  {
                    title: "Quantum Algorithm Development",
                    description: "Preparing our engineers for the post-classical computing era."
                  },
                  {
                    title: "AI in Finance",
                    description: "Leveraging Jaipur's dominance as an SMB Finance hub to build the next generation of algorithmic trading and fintech LLMs."
                  },
                  {
                    title: "Product Development",
                    description: "Rapid prototyping hardware labs to turn code into market-ready physical realities."
                  }
                ].map((foundry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-[1.5rem] p-6"
                  >
                    <h3 className="text-[20px] font-orbitron font-bold text-accent mb-3">
                      {foundry.title}
                    </h3>
                    <p className="text-[16px] text-foreground/80 font-medium leading-relaxed">
                      {foundry.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hiring Pipeline Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-[32px] md:text-[40px] font-orbitron font-bold text-accent mb-6">
                The Ultimate Hiring Pipeline: Shodh AI and the "Elite 60"
              </h2>
              <p className="text-[18px] md:text-[20px] text-foreground/90 font-medium leading-relaxed">
                This massive $100M infrastructure exists to fuel one primary goal: creating the deep-tech engineers of 2030.
              </p>
              <p className="text-[18px] md:text-[20px] text-foreground/90 font-medium leading-relaxed mt-4">
                At the core of this ecosystem is SHODH AI—India's premier frontier AI company. Selected as one of the 12 companies for the Government's INDIA AI Mission, they are building the nation's foundational models and the world's first large Physics Model alongside NVIDIA.
              </p>
              <p className="text-[18px] md:text-[20px] text-foreground/90 font-medium leading-relaxed mt-4">
                Through the AESTR Skyscrapers hub, SHODH AI is forging its own future colleagues. The B.Tech in Artificial Intelligence (Powered by SHODH AI) is the flagship program of this new tech city. Limited to an "Elite 60" cohort, this brutally selective program allows elite minds to bypass traditional education, utilizing this massive new R&D infrastructure to build the future of AI itself.
              </p>
            </motion.div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <p className="text-[24px] md:text-[32px] font-orbitron font-black leading-snug mb-4">
                The traditional B.Tech is dead.
              </p>
              <p className="text-[24px] md:text-[32px] font-orbitron font-black leading-snug text-accent mb-8">
                The Engineering Residency has arrived.
              </p>
              <p className="text-[18px] md:text-[20px] text-foreground/90 font-medium leading-relaxed mb-8">
                With a $100 Million ecosystem backing your future, the only question left is: Do you have what it takes to pass the Draft?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToRegistrationForm()}
                  className="px-8 py-4 bg-accent text-black font-orbitron font-bold rounded-[1.5rem] hover:bg-accent/90 transition-all duration-300 text-lg"
                >
                  Apply for the AESTR B.Tech Residency
                </button>
                <button
                  className="px-8 py-4 bg-transparent text-accent font-orbitron font-bold rounded-[1.5rem] border-2 border-accent hover:bg-accent/10 transition-all duration-300 text-lg"
                >
                  Explore the AESTR Skyscrapers
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
