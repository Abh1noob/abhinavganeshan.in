import React from "react";

const Page = ({ params }: { params: { company: string } }) => {
  return (
    <iframe
      src={`/certificate/${params.company}`}
      className="w-full h-[92vh] border-0"
      title={`${params.company} certificate`}
    />
  );
};

export default Page;
