'use client';

import { useEffect, useState } from 'react';
import ThankYouModal from './ThankYouModal';

const RegistrationForm = () => {
    const [showThankYou, setShowThankYou] = useState(false);

    useEffect(() => {
        // Load the NoPaperForms script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://widgets.in6.nopaperforms.com/emwgts.js';
        document.body.appendChild(script);

        // Listen for messages from the NoPaperForms iframe
        const handleMessage = (event: MessageEvent) => {
            // NoPaperForms often sends messages when state changes
            if (event.data && typeof event.data === 'string') {
                if (event.data.includes('form_submitted') || event.data.includes('success')) {
                    window.location.href = '/thank-you';
                }
            }

            if (event.data && typeof event.data === 'object') {
                if (event.data.action === 'form_submitted' || event.data.type === 'success') {
                    window.location.href = '/thank-you';
                }
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            // Clean up
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
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

                {/* Wide iframe container - shifted up to show button */}
                <iframe
                    frameBorder="0"
                    width="100%"
                    height="800px"
                    sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads allow-forms allow-popups"
                    src="https://widgets.in6.nopaperforms.com/register?&r=&q=&w=4413174de5dab5bbec3036f720dffea8&m=&cu=https://aestr.gyanvihar.org/"
                    scrolling="yes"
                    style={{
                        width: '100%',
                        height: '800px',
                        display: 'block',
                        border: 'none',
                        marginTop: '-19px',
                    }}
                />
            </div>

            <ThankYouModal
                isOpen={showThankYou}
                onClose={() => setShowThankYou(false)}
            />
        </div>
    );
};

export default RegistrationForm;
