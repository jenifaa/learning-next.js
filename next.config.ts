import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // images: {
  //   remotePatterns: [new URL("https://i.ibb.co.com/Nn1VPXy5/apple.avif")],
  // },
  images: {
    remotePatterns: [{
      protocol:"https",
      hostname:"**",
     
    }],
  },
};

export default nextConfig;
