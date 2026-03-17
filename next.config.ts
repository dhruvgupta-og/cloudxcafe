import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    // Allow local images from public folder (default behavior)
  },
};

export default nextConfig;
