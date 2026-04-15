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
        <div className="w-full mt-8 flex justify-center px-4">
            {/* Container clips the iframe at submit button — overflow hidden hides blank space below */}
            <div
                className="bg-white w-full max-w-[390px] shadow-2xl"
                style={{ borderRadius: '15px', height: '690px', overflow: 'hidden' }}
            >
                <h2 className="text-xl font-bold text-gray-800 text-center pt-[12px] px-[15px] pb-2 font-orbitron uppercase tracking-wider">
                    Registration Form
                </h2>

                {/* iframe taller than container so all fields render; container clips the empty space */}
                <iframe
                    frameBorder="0"
                    width="100%"
                    height="800px"
                    sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads allow-forms allow-popups"
                    src="https://widgets.in6.nopaperforms.com/register?&r=&q=&w=4413174de5dab5bbec3036f720dffea8&m=&cu=https://aestr.gyanvihar.org/"
                    scrolling="no"
                    style={{
                        width: '100%',
                        height: '800px',
                        display: 'block',
                        border: 'none',
                        overflow: 'hidden',
                        marginTop: '-4px',
                    }}
                />
            </div>
        </div>
    );
};

export default RegistrationForm;
