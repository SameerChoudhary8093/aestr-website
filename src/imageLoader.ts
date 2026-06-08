'use client';

export default function myImageLoader({ src, width, quality }: { src: string, width: number, quality?: number }) {
  if (src.startsWith('data:')) {
    return src;
  }
  
  // Automatically detect if we are running in production
  const isProd = process.env.NODE_ENV === 'production';
  const prefix = isProd ? '/aestr' : '';
  
  return `${prefix}/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}
