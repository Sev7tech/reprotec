import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    formats: ['image/webp', 'image/avif']
  }
};

export default nextConfig;
