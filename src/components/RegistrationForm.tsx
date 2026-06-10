'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import ThankYouModal from './ThankYouModal';
import { SITE_URL, withBasePath } from '@/lib/site';

const RegistrationForm = () => {
    const [showThankYou, setShowThankYou] = useState(false);
    const [shouldLoadForm, setShouldLoadForm] = useState(false);

    useEffect(() => {
        // Wait for first paint and hydration to finish before loading the form
        const timer = setTimeout(() => {
            setShouldLoadForm(true);
        }, 1200);

        // Listen for messages from the NoPaperForms iframe
        const handleMessage = (event: MessageEvent) => {
            // NoPaperForms often sends messages when state changes
            if (event.data && typeof event.data === 'string') {
                if (event.data.includes('form_submitted') || event.data.includes('success')) {
                    window.location.href = withBasePath('/thank-you');
                }
            }

            if (event.data && typeof event.data === 'object') {
                if (event.data.action === 'form_submitted' || event.data.type === 'success') {
                    window.location.href = withBasePath('/thank-you');
                }
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    return (
        <div className="w-full mt-8 flex justify-center px-4 relative">
            {/* Significantly increased width to force text into 3 lines */}
            <div
                className="bg-white w-full max-w-[1000px] shadow-[0_30px_70px_rgba(0,0,0,0.4)] border border-white/5"
                style={{ borderRadius: '28px', height: '640px', overflow: 'hidden' }}
            >
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center pt-[20px] px-[25px] pb-4 font-orbitron uppercase tracking-wider">
                    Registration Form
                </h2>

                {shouldLoadForm ? (
                    <>
                        <Script src="https://widgets.in6.nopaperforms.com/emwgts.js" strategy="lazyOnload" />
                        <iframe
                            title="Admissions Registration Form"
                            frameBorder="0"
                            width="100%"
                            height="800px"
                            sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads allow-forms allow-popups"
                            src={`https://widgets.in6.nopaperforms.com/register?&r=&q=&w=4413174de5dab5bbec3036f720dffea8&m=&cu=${encodeURIComponent(`${SITE_URL}/`)}`}
                            scrolling="yes"
                            style={{
                                width: '100%',
                                height: '800px',
                                display: 'block',
                                border: 'none',
                                marginTop: '-19px',
                            }}
                        />
                    </>
                ) : (
                    <div className="w-full h-[500px] flex items-center justify-center bg-white">
                        <div className="w-10 h-10 border-4 border-gray-200 border-t-accent rounded-full animate-spin"></div>
                    </div>
                )}
            </div>

            <ThankYouModal
                isOpen={showThankYou}
                onClose={() => setShowThankYou(false)}
            />
        </div>
    );
};

export default RegistrationForm;
