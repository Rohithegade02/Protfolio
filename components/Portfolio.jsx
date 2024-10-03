import { EyeIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

function Portfolio() {
  const [filter, setFilter] = useState('All')
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  }

  const animateItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  const ProtofolioData = useMemo(() => {
    return [
      {
        img: '/uber-clone.png',
        name: 'Rider App (Uber Clone)',
        description:
          'Built with React Native for handling the user interface, Google Maps for rendering maps with directions, stripe for handling payments, serverless Postgres for managing databases, and styled with TailwindCSS, Uber Clone is a perfect mobile app.',
        git: 'https://github.com/Rohithegade02/uber-clone',
        demo: '',
        type: 'Mobile Application',
      },
      {
        img: 'https://cdn.sanity.io/images/ozwoeorl/production/c5e65c15bcf5172b39a69da5d3f8307b6226fb61-10000x7500.png',
        name: 'Learn Management App ',
        description:
          'Developed the Learning Management app in a native app based on the Figma design. Implemented features like a wishlist and personalized content recommendations based on user behavior, utilizing Zustand for state management.',
        git: 'https://github.com/Rohithegade02/lms-native-app',
        demo: '',
        type: 'Mobile Application',
      },
      {
        img: '/Airbnb-Clone.png',
        name: 'Airbnb Clone',
        description:
          'This is a NextJs and Tailwind based Airbnb clone. This clone features extreme responsiveness to all devices. In this user can select from which date in which he wants to travel till the end date and select the city. Implemented mapbox where he/she can view the exact location of hotels on the map.',
        git: 'https://github.com/Rohithegade02/Airbnb-Clone',
        demo: 'https://airbnb-psi-three.vercel.app/',
        type: 'Web Application',
        bg: '#214B48',
      },
      {
        img: '/Hulu-Clone.png',
        name: 'Hulu Clone',
        description:
          'Developed frontend web application using ReactJS Framework. Fully responsive web page which contains information of movies based on their genres.',
        git: 'https://github.com/Rohithegade02/HULUAPP',
        demo: 'https://huluapp-ten.vercel.app/',
        type: 'Web Application',
        bg: '#06202A',
      },
      {
        img: '/Discord-Clone.png',
        name: 'Discord Clone',
        description:
          'Developed frontend web application using ReactJS Framework. Fully responsive web page which contains information of movies based on their genres.',
        git: 'https://github.com/Rohithegade02/HULUAPP',
        demo: 'https://discordclone-three.vercel.app/',
        type: 'Web Application',
        bg: '#06202A',
      },
      {
        img: '/Linkedln-Clone.png',
        name: 'LinkedIn Clone',
        description:
          'Implemented a web application using React and Redux. The index page contains login credentials. Sign in with Google is enabled through Firebase as a backend. Used styled-components for styling the User Interface.',
        git: 'https://github.com/Rohithegade02/Linkdein-Clone',
        demo: 'https://linkdein-clone-seven.vercel.app/',
        type: 'Web Application',
      },
    ]
  }, [])

  // Filter the portfolio items based on the selected filter
  const filteredData = ProtofolioData.filter(item =>
    filter === 'All' ? true : item.type === filter,
  )
  return (
    <div className='md:px-10 px-4 lg:px-10 flex flex-col gap-5'>
      <div className='flex gap-5 items-center'>
        {['All', 'Mobile Application', 'Web Application'].map(category => (
          <div
            key={category}
            onClick={() => setFilter(category)}
            className='mt-5'
          >
            <h1
              className={`md:text-base text-sm lg:text-base font-medium cursor-pointer ${
                filter === category
                  ? 'text-[#F5D26C]'
                  : 'text-[#BCBCBC] hover:text-[#6A6A6B] transition-colors duration-300 ease-in-out'
              }`}
            >
              {category}
            </h1>
          </div>
        ))}
      </div>
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        className='lg:flex md:flex md:flex-row flex flex-col lg:flex-row justify-between md:flex-wrap lg:flex-wrap'
      >
        {filteredData.map((item, index) => (
          <PortfolioCard item={item} key={index} variants={animateItem} />
        ))}
      </motion.div>
    </div>
  )
}

const PortfolioCard = ({ item, variants }) => {
  return (
    <motion.div
      variants={variants}
      className='group relative flex flex-col mt-14 mb-4 cursor-pointer flex-wrap justify-between gap-4'
    >
      <div
        className={`lg:h-72 lg:w-[340px] h-60 w-full  md:h-[280px] md:w-[280px] flex justify-center items-center rounded-lg bg-slate-100 relative`}
      >
        <Image
          src={item.img}
          alt=''
          // width={item.type === 'Web Application' ? 350 : 270}
          // height={item.type === 'Web Application' ? 390 : 320}
          layout='fill'
          objectFit='contain'
          className=' hover:scale-110 duration-300 h-60 w-full lg:w-52 lg:h-52'
          style={{
            borderRadius: 20,
          }}
        />
        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 duration-500 rounded-lg'></div>
      </div>
      <div>
        <h1 className='text-[#DDDDDD] text-base font-semibold'>{item.name}</h1>
        <h1 className='text-[#515152]'>{item.type}</h1>
      </div>
      <Link href={item.demo} className='w-20 h-20 bg-black'>
        <EyeIcon
          style={{
            position: 'absolute',
            left: '50%',
            top: '40%',
            transform: 'translate(-50%, -50%)',
            height: 60,
            width: 60,
            background: '#282829',
            padding: 20,
            borderRadius: 20,
          }}
          className='text-[#F5D26C] opacity-0 group-hover:opacity-100 duration-300'
          strokeWidth={2}
        />
      </Link>
    </motion.div>
  )
}

export default Portfolio
