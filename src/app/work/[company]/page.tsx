import React from "react";
import { dashboardConfig } from "@/config/dashboard";
import { workConfig } from "@/config/work";

// Generate static params for known companies
export async function generateStaticParams() {
  return dashboardConfig.experience
    .filter((item) => item.certificateSlug)
    .map((item) => ({ company: item.certificateSlug }));
}

const Page = async ({ params }: { params: Promise<{ company: string }> }) => {
  const { company } = await params;

  return (
    <div className="-mx-5 overflow-hidden">
      <iframe
        src={`/certificate/${company}`}
        className="w-full h-[calc(100vh-4rem)] border-0"
        title={`${company} ${workConfig.certificatePage.iframeTitleSuffix}`}
      />
    </div>
  );
};

export default Page;
