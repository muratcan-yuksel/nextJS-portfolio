import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
// import Image from "next/image";
type Props = {};
import ppImg from "../assets/pp.jpg";

const ppImage = ppImg;

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Murat Can Yüksel",
      "Web Developer",
      "Full Stack Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {/* change this to nextJS images later on */}
      {/* these are the classes to add your Image */}
      {/* <img src="" alt="" className="relative rounded-full h-32 w-32 mx-auto" /> */}
      <div
        style={{ border: "2px solid white" }}
        className=" relative rounded-full h-32 w-32 mx-auto"
      />
      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
        Blockchain developer
      </h2>
      <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
        <span className="mr-3"> {text} </span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
};

export default Hero;
