"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import axios, { AxiosResponse } from "axios";

interface Joke {
  setup: string;
  punchline: string;
}

const Hero = () => {
  const [joke, setJoke] = useState<Joke>({
    setup: "",
    punchline: "",
  });

  const getJoke = async () => {
    try {
      const response: AxiosResponse<Joke[]> = await axios.get<Joke[]>(
        "https://official-joke-api.appspot.com/jokes/programming/random"
      );
      const jokeData: Joke = response.data[0];
      setJoke(jokeData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className='bg-background_color h-screen w-screen flex flex-row'>
      <div className='min-w-[40vw] h-screen bg-offwhite'></div>
      <div className='my-8 flex flex-col justify-between'>
        <div className='text-offwhite text-[18px] text-right m-4 min-w-fit w-[200px] self-end my-auto'>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
        </div>
        <Marquee
          autoFill
          className='text-lime text-[70px] mb-auto'
        >
          <div>
            <p>A Web Developer // Freelancer&nbsp;// </p>
          </div>
        </Marquee>

        <div className='flex flex-row items-center mx-8'>
          <div className='uppercase text-offwhite text-[130px] leading-tight'>
            <p>I&apos;m Abhinav Ganeshan</p>
          </div>
          <div className='bg-lime h-32 w-32 rounded-full absolute right-0 m-8'></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
