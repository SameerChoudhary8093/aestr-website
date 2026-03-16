'use client';

import { useEffect } from 'react';

const RegistrationForm = () => {
    useEffect(() => {
        // Load the NoPaperForms script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://widgets.in6.nopaperforms.com/emwgts.js';
        document.body.appendChild(script);

        return () => {
            // Clean up script when component unmounts
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="w-full mt-16 flex justify-center px-4">
            <div className="bg-white p-0 w-full max-w-[382.36px] overflow-hidden shadow-2xl" style={{ borderRadius: '15px', height: '606px' }}>
                <h2 className="text-xl font-bold text-gray-800 text-center pt-[10px] px-[15px] pb-2 font-orbitron uppercase tracking-wider">
                    Registration Form
                </h2>

                <div className="npf_wgts" data-height="606px" data-w="4413174de5dab5bbec3036f720dffea8" style={{ 
                    overflow: 'visible',
                    transform: 'scale(1)',
                    transformOrigin: 'top left',
                    minHeight: '606px',
                    width: '100%',
                    margin: '0',
                    padding: '0 15px 15px 15px',
                    display: 'block'
                }}>
                    <iframe 
                        frameBorder="0" 
                        width="100%" 
                        height="606px" 
                        sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads allow-forms allow-popups" 
                        src="https://widgets.in6.nopaperforms.com/register?&r=&q=&w=4413174de5dab5bbec3036f720dffea8&m=&cu=https://aestr.gyanvihar.org/"
                        style={{ 
                            overflow: 'visible',
                            transform: 'scale(1)',
                            transformOrigin: 'top left',
                            width: '100%',
                            height: '606px',
                            margin: '0',
                            padding: '0',
                            display: 'block',
                            border: 'none',
                            minHeight: '606px'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
