import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
      // Anda bisa menambahkan domain lain di sini jika perlu
    ],
  },
};

export default nextConfig;
