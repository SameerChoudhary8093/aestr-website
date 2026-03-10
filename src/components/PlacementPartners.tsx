'use client';

import React from 'react';
import Image from 'next/image';

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
        <section className="relative py-24 bg-transparent overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Header Area */}
                <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-white leading-tight">
                        Prospective Placement <span className="text-accent italic">Partners</span>
                    </h2>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                        Join the ranks of elite engineers hired by top global technology firms.
                    </p>
                </div>

                {/* Logos Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
                    {partners.map((partner, index) => {
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
                            <div
                                key={index}
                                className="h-20 glass bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-accent shadow-lg group relative overflow-hidden p-4"
                            >
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <Image
                                        src={logoPath}
                                        alt={partner}
                                        fill
                                        unoptimized
                                        className="object-contain brightness-[1.1] contrast-[1.1] transition-all duration-300"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent && !parent.querySelector('.fallback-text')) {
                                                const span = document.createElement('span');
                                                span.className = 'fallback-text text-[10px] font-orbitron font-bold text-white/40 text-center uppercase tracking-tighter w-full px-1';
                                                span.innerText = partner;
                                                parent.appendChild(span);
                                            }
                                        }}
                                    />
                                </div>
                                <span className="sr-only">{partner}</span>
                            </div>
                        );
                    })}
                </div>

            </div>

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
};

export default PlacementPartners;
