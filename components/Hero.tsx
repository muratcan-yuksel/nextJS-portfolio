import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    loop: true,
    words: ["Web Developer", "Software Engineer", "Full Stack Developer"],
    delaySpeed: 2000,
  });
  return (
    <div>
      <BackgroundCircles />
      <h1>
        <span> {text} </span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
};

export default Hero;
