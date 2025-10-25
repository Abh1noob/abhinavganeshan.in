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
    <iframe
      src={`/certificate/${company}`}
      className="w-full h-[92vh] border-0"
      title={`${company} certificate`}
    />
  );
};

export default Page;
