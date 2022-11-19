import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};

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
      <h1>
        <span> {text} </span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
};

export default Hero;
