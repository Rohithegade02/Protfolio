import { motion } from "framer-motion";
import React from "react";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-4xl justify-evenly px-10  mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      <motion.img
        src="me1.jpg"
        alt=""
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0  flex-shrink-0 w-56 h-56 md:py-4 rounded-full  object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[300px] xl:h-[300px]  "
      />
      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-4xl font-semibold">
          {" "}
          Here is{" "}
          <span className="underline decoration-[#f7ab0a]/50 ">
            Little
          </span>{" "}
          background
        </h4>
        <span className="text-base  space-y-3">
          Passionate 🚀🚀🚀 full stack developer with 1 + years of hands-on
          experience in developing scalable and responsive applications using a
          wide range of front-end and back-end skills like React, Redux, CSS,
          MongoDB, Firebase etc.Developed 10+ websites from scratch .Looking to
          further enchance in React ,Backend skills as the future full stack
          developer.
        </span>
      </div>
    </motion.div>
  );
}

export default About;
