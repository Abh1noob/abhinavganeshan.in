import React from "react";

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
