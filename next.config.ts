import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tokosoon.site",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.databerjalan.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Enable compression for better performance
  compress: true,
  // Optimize for production
  poweredByHeader: false,
  generateEtags: false,
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@headlessui/react"],
  },
};

export default nextConfig;
