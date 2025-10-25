import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/certificate/adobe",
        destination: "/certificates/Adobe Certificate.pdf",
        permanent: false,
      },
      {
        source: "/certificate/warbler",
        destination: "/certificates/Warbler Certificate.pdf",
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
  async rewrites() {
    return [
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1xQ3f863AgDXsqW9NisKfZbgBO6jV4ENr/preview",
      },
    ];
  },
};

export default nextConfig;
