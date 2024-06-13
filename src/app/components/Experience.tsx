"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Line from "./Line";

const Experience = () => {
  return (
    <div className='bg-background_color h-screen w-screen flex flex-row'>
      <div className='min-w-[40vw] max-w-[40vw] h-screen text-white'>
        <div className='text-lime mt-16 text-[70px] mx-8'>Experience</div>
        <div className=' mt-16 text-[16px] mx-8 text-justify'>
          I asked ChatGPT to give me a small paragraph to add here. It said:
        </div>
        <div className='mt-8 text-[16px] mx-8 text-justify'>
          &quot;In my web development adventures, I&apos;ve mastered the art of
          turning coffee into code and CSS quirks into victory dances. Whether
          crafting sleek interfaces or outsmarting pesky bugs, I bring a mix of
          creativity and coding wizardry to every project. Let&apos;s create
          websites that not only work like a charm but also dazzle users like a
          perfectly timed GIF.&quot;
        </div>
        <div className=' mt-32 text-[16px] mx-8 text-justify'>
          Anyways, here is my resume
        </div>
        <div className='bg-lime w-fit p-4 text-black flex gap-2 m-8'>
          Download my Resume
          <ArrowRight color='black' />
        </div>
      </div>
      <div className='w-full mx-8 my-auto'>
        <Line />
        <Card
          designation={"Senior Core Committee Member"}
          year={"2023 - present"}
          organisation={"CodeChef-VIT"}
        />
        <Line />
        <Card
          designation={"Senior Core Committee Member"}
          year={"2023 - present"}
          organisation={"CodeChef-VIT"}
        />
        <Line />
      </div>
    </div>
  );
};

export default Experience;

interface cardProps {
  designation: string;
  year: string;
  organisation: string;
}

const Card: React.FC<cardProps> = ({ designation, year, organisation }) => {
  return (
    <div className=' text-white my-8 flex flex-row w-full justify-between items-center'>
      <div>
        <div className='text-[40px]'>{designation}</div>
        <div className='text-[18px]'>{year}</div>
      </div>
      <div className='text-[24px]'>{organisation}</div>
    </div>
  );
};
