import React from 'react'
import HomeSectionCard from './HomeSectionCard'
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div className='flex flex-col gap-3 py-6  md:px-10 px-4 lg:px-10'>
        <h1 className='text-[#d1d1d1] text-base'>
          I&apos;m a web developer and React Native developer with more than 1
          year of experience, focused on creating elegant and intuitive
          solutions to complex challenges.
        </h1>
        <h1 className='text-[#d1d1d1] text-base'>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way.
        </h1>
      </div>
      <div className='md:px-10 px-4 lg:px-10 flex flex-col gap-5'>
        <div>
          <h1 className='text-white text-2xl mt-5 font-semibold'>
            What I&apos;m Doing
          </h1>
        </div>
        <div className='flex flex-col gap-5 lg:flex lg:flex-row  lg:gap-5'>
          <HomeSectionCard
            logo={'/icon-dev.svg'}
            title='Web development'
            subtitle='High-quality development of sites at the professional level.'
          />
          <HomeSectionCard
            logo={'/icon-app.svg'}
            title='Mobile App development'
            subtitle='Professional development of applications for iOS and Android.'
          />
        </div>
        <div className=''>
          <HomeSectionCard
            logo={'/icon-design.svg'}
            title='Web design'
            subtitle='The most modern and high-quality design made at a professional level.'
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Home
