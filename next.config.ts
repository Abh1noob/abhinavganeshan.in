import type { NextConfig } from "next";
import { dashboardConfig } from "./src/config/dashboard";

const certificateRedirects = dashboardConfig.experience
  .filter((experience) => experience.certificateSlug && experience.certificateFile)
  .map((experience) => ({
    source: `/certificate/${experience.certificateSlug}`,
    destination: `/certificates/${encodeURIComponent(experience.certificateFile as string)}`,
    permanent: false,
  }));

const nextConfig: NextConfig = {
  async redirects() {
    return certificateRedirects;
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
