import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/Abhinav's Resume.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
