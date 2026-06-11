import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: "/aestr",

  images: {
    loaderFile: "./src/imageLoader.ts",
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
