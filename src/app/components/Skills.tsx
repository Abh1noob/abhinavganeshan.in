"use client";
import React from "react";
import Image from "next/image";
import Line from "./Line";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};

const Skills = () => {
  return (
    <div className='bg-background_color h-screen w-screen flex flex-row'>
      <div className='min-w-[40vw] max-w-[40vw] h-screen text-white'>
        <div className='text-lime mt-16 text-[70px] mx-8'>Skills</div>
        <div className=' mt-16 text-[16px] mx-8 text-justify'>
          Ok, this time I tried Gemini, this is what it cooked
        </div>
        <div className='mt-8 text-[16px] mx-8 text-justify'>
          &quot;My brain might not be made of ones and zeros, but I can
          definitely wrangle them! Fueled by enough coffee to rival a sleepless
          startup founder, I&apos;m fluent in languages from C to JavaScript
          (and yes, I can even tell them apart). Throw in a toolbox overflowing
          with libraries and frameworks, and there&apos;s nothing I can&apos;t
          code my way out of (except maybe a laundry pile...).&quot;
        </div>
      </div>
      <div className='w-full mx-8 my-auto'>
        <Line />
        <div className='flex flex-row gap-8'>
          {language.map((item, i) => (
            <Card
              key={i}
              image={item.image}
              text={item.language}
              index={i}
            />
          ))}
        </div>
        <Line />
        <div className='flex flex-row gap-8'>
          {libraries.map((item, i) => (
            <Card
              key={i}
              image={item.image}
              text={item.library}
              index={i}
            />
          ))}
        </div>
        <Line />
      </div>
    </div>
  );
};

export default Skills;

interface cardProps {
  image: string;
  text: string;
  index: number;
}

const Card: React.FC<cardProps> = ({ image, index }) => {
  return (
    <motion.div
      key={index}
      variants={fadeInAnimationVariants}
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true,
      }}
      custom={index}
      className='py-8'
    >
      <div className='flex flex-col items-center m-1'>
        <div className='mb-3'>
          <Image
            src={image}
            alt='logo'
            height={60}
            width={60}
          />
        </div>
      </div>
    </motion.div>
  );
};

const language = [
  {
    image: "/assets/languages/c.svg",
    language: "c",
  },
  {
    image: "/assets/languages/cpp.svg",
    language: "cpp",
  },
  {
    image: "/assets/languages/python.svg",
    language: "python",
  },
  {
    image: "/assets/languages/java.svg",
    language: "java",
  },
  {
    image: "/assets/languages/js.svg",
    language: "java script",
  },
  {
    image: "/assets/languages/ts.svg",
    language: "typescript",
  },
];

const libraries = [
  {
    image: "/assets/libraries/reactjs.svg",
    library: "react.js",
  },
  {
    image: "/assets/libraries/nextjs.svg",
    library: "next.js",
  },
  {
    image: "/assets/libraries/tailwind.svg",
    library: "tailwindcss",
  },
  {
    image: "/assets/libraries/expressjs.svg",
    library: "express.js",
  },
  {
    image: "/assets/libraries/mongo.svg",
    library: "mongodb",
  },
  {
    image: "/assets/libraries/mysql.svg",
    library: "mysql",
  },
];
