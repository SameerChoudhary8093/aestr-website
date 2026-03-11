'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
    'Google', 'Amazon', 'NVIDIA', 'Accenture', 'Deloitte', 'Bank of America', 'Jio',
    'TCS', 'Tech Mahindra', 'Goldman Sachs', 'Oracle', 'Samsung', 'Wipro', 'Apollo',
    'SAP', 'Capgemini', 'Cyient', 'HCL', 'Cognizant', 'CGI', 'Merkle', 'Mindtree',
    'Delhivery', 'Needl.ai', 'Prodapt', 'Tanla', 'GlobalLogic', 'NTT Data', 'Fractal',
    'Napier', 'Systech', 'PwC', 'Siply', 'Publicis Sapient', 'Mentor Graphics',
    'Observe.ai', 'Birlasoft', 'Intellect', 'Perficient', 'Rakuten'
];

const PlacementPartners = () => {
    return (
        <section className="relative py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

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

const PartnerLogo = ({ partner, index }: { partner: string, index: number }) => {
    const domains: { [key: string]: string } = {
        'Google': 'google.com',
        'Amazon': 'amazon.com',
        'NVIDIA': 'nvidia.com',
        'Accenture': 'accenture.com',
        'Deloitte': 'deloitte.com',
        'Bank of America': 'bankofamerica.com',
        'Jio': 'jio.com',
        'TCS': 'tcs.com',
        'Tech Mahindra': 'techmahindra.com',
        'Goldman Sachs': 'goldmansachs.com',
        'Oracle': 'oracle.com',
        'Samsung': 'samsung.com',
        'Wipro': 'wipro.com',
        'Apollo': 'apollo.com',
        'SAP': 'sap.com',
        'Capgemini': 'capgemini.com',
        'Cyient': 'cyient.com',
        'HCL': 'hcl.com',
        'Cognizant': 'cognizant.com',
        'CGI': 'cgi.com',
        'Merkle': 'merkle.com',
        'Mindtree': 'ltimindtree.com',
        'Delhivery': 'delhivery.com',
        'Needl.ai': 'needl.ai',
        'Prodapt': 'prodapt.com',
        'Tanla': 'tanla.com',
        'GlobalLogic': 'globallogic.com',
        'NTT Data': 'nttdata.com',
        'Fractal': 'fractal.ai',
        'Napier': 'napierai.com',
        'Systech': 'systechusa.com',
        'PwC': 'pwc.com',
        'Siply': 'siply.in',
        'Publicis Sapient': 'publicissapient.com',
        'Mentor Graphics': 'mentor.com',
        'Observe.ai': 'observe.ai',
        'Birlasoft': 'birlasoft.com',
        'Intellect': 'intellectdesign.com',
        'Perficient': 'perficient.com',
        'Rakuten': 'rakuten.com'
    };
    const domain = domains[partner] || `${partner.toLowerCase().replace(/[\s.]+/g, '')}.com`;
    const logoPath = `https://logo.clearbit.com/${domain}?size=128`;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
            className="h-16 md:h-20 w-32 md:w-auto glass bg-background-alt/40 border border-foreground/5 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:border-accent shadow-xl group relative overflow-hidden p-4 md:p-5 flex-shrink-0"
        >
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-full h-full flex items-center justify-center">
                <Image
                    src={logoPath}
                    alt={partner}
                    fill
                    unoptimized
                    className="object-contain brightness-[1.2] grayscale group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-text')) {
                            const span = document.createElement('span');
                            span.className = 'fallback-text text-[8px] md:text-[9px] font-orbitron font-bold text-foreground/30 text-center uppercase tracking-tighter w-full px-1 group-hover:text-accent transition-colors';
                            span.innerText = partner;
                            parent.appendChild(span);
                        }
                    }}
                />
            </div>
            <span className="sr-only">{partner}</span>
        </motion.div>
    );
};

const MarqueeRow = ({ items, direction, speed }: { items: string[], direction: 'left' | 'right', speed: number }) => {
    // Duplicate items to create infinite effect
    const displayItems = [...items, ...items, ...items];
    
    return (
        <div className="relative overflow-hidden w-full">
            <div 
                className={`marquee-row ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {displayItems.map((partner, idx) => (
                    <PartnerLogo key={`${partner}-${idx}`} partner={partner} index={idx} />
                ))}
            </div>
        </div>
    );
};

export default PlacementPartners;
