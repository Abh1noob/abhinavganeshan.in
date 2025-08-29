import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/Abhinav's Resume.pdf",
        permanent: false,
      },
      {
        source: "/certificate/adobe",
        destination: "/certificates/Adobe Certificate.pdf",
        permanent: false,
      },
      {
        source: "/certificate/stride",
        destination: "/certificates/Stride Certificate.pdf",
        permanent: false,
      },
      {
        source: "/certificate/peritys",
        destination: "/certificates/Peritys Certificate.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
