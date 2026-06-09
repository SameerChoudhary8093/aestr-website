'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const NetworkBackground = dynamic(() => import('@/components/NetworkBackground'), {
  ssr: false,
});

export default function NetworkBackgroundWrapper() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      // Simple user-agent check for mobile devices
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      
      // Check network connection speed if available
      const conn = (navigator as any).connection;
      const isSlowConnection = conn && (conn.saveData || ['slow-2g', '2g', '3g'].includes(conn.effectiveType));

      setIsDesktop(window.innerWidth >= 1024 && !isMobileDevice && !isSlowConnection);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  if (!isDesktop) {
    // Render the exact same layout mask and colors but without loading Three.js Canvas
    return (
      <div className="fixed inset-0 z-[-1] bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 bg-[#181818] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#111111_95%)] opacity-90 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none" />
      </div>
    );
  }

  return <NetworkBackground />;
}
