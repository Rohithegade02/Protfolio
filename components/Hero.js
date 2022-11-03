import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi , The Name's Rohit Hegade 🚀🚀🚀",
      "Guys-who-loves-Coffee.js",
      "<ButLovesToCodeMore ⚛️ />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackGroundCircles />
      <img
        src="me1.jpg"
        alt=""
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <h2 className="text-sm  text-gray-500 pb-2 tracking-[15px]">
        FULL STACK DEV
      </h2>
      <h1 className="flex text-2xl lg:text-3xl font-semibold px-10">
        <p>{text}</p>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
      <div className="pt-5 z-20">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
