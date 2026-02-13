import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Turbopack is the default bundler in Next.js 16
  // It automatically ignores node_modules for optimal performance
  turbopack: {},
};

export default nextConfig;
