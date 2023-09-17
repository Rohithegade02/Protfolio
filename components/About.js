/** @format */

import { motion } from 'framer-motion';
import React from 'react';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=' flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-4xl justify-evenly px-10  mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
        About
      </h3>
      <motion.img
        src='me1.jpg'
        alt=''
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className='-mb-20 mt-5 md:mb-0 sm:mt10 flex-shrink-0 w-32 h-32 md:py-4 rounded-full  object-cover md:rounded-lg md:w-32 md:h-32 sm:w-32 sm:h-32 xl:w-[300px] xl:h-[300px]  '
      />
      <div className='space-y-10 px-0 md:px-10 '>
        <h4 className='text-4xl font-semibold'>
          {' '}
          Here is{' '}
          <span className='underline decoration-[#f7ab0a]/50 '>
            Little
          </span>{' '}
          background
        </h4>
        <span className='text-base  space-y-3'>
          With a year of immersive internship experience in web development, I
          bring a dynamic skill set and a proven track record of delivering
          results. During my journey, I honed proficiency in HTML, CSS,
          JavaScript, and gained hands-on experience with modern web frameworks
          and technologies. My three internships at diverse companies provided
          valuable exposure to real-world projects, fostering my problem-solving
          abilities and collaborative teamwork. I am equipped to design,
          develop, and optimize web solutions that merge creativity with
          functionality, and I am eager to contribute my expertise to your
          team&apos;s success.
        </span>
      </div>
    </motion.div>
  );
}

export default About;
