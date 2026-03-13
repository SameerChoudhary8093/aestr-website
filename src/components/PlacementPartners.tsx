'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
    { name: 'Google', logo: '/ProgramPartners/google.webp' },
    { name: 'Amazon', logo: '/placement/amazon.webp' },
    { name: 'NVIDIA', logo: '/placement/nvidia.webp' },
    { name: 'Accenture', logo: '/placement/accenture.webp' },
    { name: 'Deloitte', logo: '/placement/deloitte.webp' },
    { name: 'Bank of America', logo: '/placement/bankofamerica.webp' },
    { name: 'Jio', logo: '/placement/jio.webp' },
    { name: 'TCS', logo: '/placement/tcs.webp' },
    { name: 'Tech Mahindra', logo: '/placement/techmahednra.webp' },
    { name: 'Goldman Sachs', logo: '/placement/goldman.webp' },
    { name: 'Oracle', logo: '/placement/oracle.webp' },
    { name: 'Samsung', logo: '/placement/samsung.webp' },
    { name: 'Wipro', logo: '/placement/wipro.webp' },
    { name: 'Apollo', logo: '/placement/apollo.webp' },
    { name: 'SAP', logo: '/placement/sap.webp' },
    { name: 'Capgemini', logo: '/placement/capgemini.webp' },
    { name: 'Cyient', logo: '/placement/cyient.webp' },
    { name: 'HCL', logo: '/placement/hcl.webp' },
    { name: 'Cognizant', logo: '/placement/cognizant.webp' },
    { name: 'CGI', logo: '/placement/cgi.webp' },
    { name: 'Merkle', logo: '/placement/merkle.webp' },
    { name: 'Mindtree', logo: '/placement/mindtree.webp' },
    { name: 'Delhivery', logo: '/placement/delhivery.webp' },
    { name: 'Needl.ai', logo: '/placement/needl.webp' },
    { name: 'Prodapt', logo: '/placement/prodapt.webp' },
    { name: 'Tanla', logo: '/placement/tanla.webp' },
    { name: 'GlobalLogic', logo: '/placement/globallogic.webp' },
    { name: 'NTT Data', logo: '/placement/nttdata.webp' },
    { name: 'Fractal', logo: '/placement/fractal.webp' },
    { name: 'Napier', logo: '/placement/napier.webp' },
    { name: 'Systech', logo: '/placement/systech.webp' },
    { name: 'PwC', logo: '/placement/pwc.webp' },
    { name: 'Siply', logo: '/placement/siply.webp' },
    { name: 'Publicis Sapient', logo: '/placement/publicis.webp' },
    { name: 'Mentor Graphics', logo: '/placement/mentor.webp' },
    { name: 'Observe.ai', logo: '/placement/observe.webp' },
    { name: 'Birlasoft', logo: '/placement/birlasoft.webp' },
    { name: 'Intellect', logo: '/placement/intellect.webp' },
    { name: 'Perficient', logo: '/placement/erficient.webp' },
    { name: 'Rakuten', logo: '/placement/rakuten.webp' }
];

const PlacementPartners = () => {
    return (
        <section className="relative py-24 bg-background-alt overflow-hidden">
            <div className="container-boxed relative z-10">

                {/* Header Area */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16 space-y-4"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-foreground leading-tight tracking-tight px-4">
                        Prospective placement <span className="text-accent italic">partners</span>
                    </h2>
                    <p className="text-base md:text-lg text-foreground/50 max-w-2xl mx-auto leading-relaxed font-semibold px-4">
                        Join the ranks of elite engineers hired by top global technology firms.
                    </p>
                </motion.div>

                {/* Desktop View: Static Grid */}
                <div className="hidden md:grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-5">
                    {partners.map((partner, index) => (
                        <PartnerLogo key={index} partner={partner} index={index} />
                    ))}
                </div>

                {/* Mobile View: 3 Scrolling Rows */}
                <div className="md:hidden space-y-4">
                    <MarqueeRow items={partners.slice(0, 14)} direction="right" speed={25} />
                    <MarqueeRow items={partners.slice(14, 28)} direction="left" speed={30} />
                    <MarqueeRow items={partners.slice(28, 40)} direction="right" speed={20} />
                </div>

            </div>

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

            <style jsx global>{`
                @keyframes marquee-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .marquee-row {
                    display: flex;
                    width: max-content;
                    gap: 1rem;
                }
                .animate-marquee-left {
                    animation: marquee-left linear infinite;
                }
                .animate-marquee-right {
                    animation: marquee-right linear infinite;
                }
            `}</style>
        </section>
    );
};

const PartnerLogo = ({ partner, index }: { partner: { name: string, logo: string }, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
            className="h-24 md:h-28 w-full bg-white rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-105 shadow-[0_10px_30px_rgba(0,0,0,0.1)] group relative overflow-hidden p-2 md:p-4"
        >
            {/* Soft inner glow for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none" />

            <div className="relative w-5/5 h-5/5 flex items-center justify-center">
                <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain mix-blend-multiply transition-all duration-500 group-hover:scale-110"
                />
            </div>
            <span className="sr-only">{partner.name}</span>
        </motion.div>
    );
};

const MarqueeRow = ({ items, direction, speed }: { items: { name: string, logo: string }[], direction: 'left' | 'right', speed: number }) => {
    // Duplicate items to create infinite effect
    const displayItems = [...items, ...items, ...items];

    return (
        <div className="relative overflow-hidden w-full">
            <div
                className={`marquee-row ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {displayItems.map((partner, idx) => (
                    <PartnerLogo key={`${partner.name}-${idx}`} partner={partner} index={idx} />
                ))}
            </div>
        </div>
    );
};

export default PlacementPartners;
