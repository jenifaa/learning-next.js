import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [new URL("https://i.ibb.co.com/Nn1VPXy5/apple.avif")],
  },
};

export default nextConfig;
