import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

const nextConfig: NextConfig = {
  env: {
    IS_VERCEL: process.env.VERCEL || '',
  },
  images: {
    loader: (isProd && !isVercel) ? 'custom' : 'default',
    loaderFile: (isProd && !isVercel) ? './src/imageLoader.ts' : undefined,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      }
    ],
  },
};

export default nextConfig;
