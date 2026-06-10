import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isVercel = process.env.VERCEL === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  env: {
    IS_VERCEL: process.env.VERCEL || "",
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    loader: isProd && !isVercel ? "custom" : "default",
    loaderFile: isProd && !isVercel ? "./src/imageLoader.ts" : undefined,
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
  async redirects() {
    if (!basePath) {
      return [];
    }

    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "aestr.gyanvihar.org" }],
        destination: `https://gyanvihar.org${basePath}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
