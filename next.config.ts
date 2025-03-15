import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/happy21',
        destination: 'https://saanviiyer.in',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
