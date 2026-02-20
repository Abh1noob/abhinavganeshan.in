import React from "react";

// Generate static params for known companies
export async function generateStaticParams() {
  return [
    { company: 'adobe' },
    { company: 'warbler' },
    { company: 'stride' },
    { company: 'peritys' },
  ];
}

const Page = async ({ params }: { params: Promise<{ company: string }> }) => {
  const { company } = await params;

  return (
    <div className="-mx-5 overflow-hidden">
      <iframe
        src={`/certificate/${company}`}
        className="w-full h-[calc(100vh-4rem)] border-0"
        title={`${company} certificate`}
      />
    </div>
  );
};

export default Page;
