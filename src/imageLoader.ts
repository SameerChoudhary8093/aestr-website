'use client';

export default function myImageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (src.startsWith('data:') || src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  const isVercel = process.env.IS_VERCEL === '1';
  const isProd = process.env.NODE_ENV === 'production';
  const prefix = (isProd && !isVercel) ? '/aestr' : '';
  
  return `${prefix}${src}`;
}
