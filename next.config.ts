import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/aestr",
  assetPrefix: "/aestr",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;