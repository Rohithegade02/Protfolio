import Image from 'next/image'
import React from 'react'
import {
  CalendarIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from '@heroicons/react/outline'
import ProfileCardItem from './ProfileCardItem'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

function ProfileCardInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className=' h-screen w-72 bg-[#1E1E1F] flex flex-col justify-center  items-center border-2 border-[#333333] rounded-2xl'
    >
      <div className='flex flex-col items-center gap-5'>
        <div className='bg-[#363637] w-40 h-40 flex items-center rounded-3xl'>
          <Image
            src={'/my-avatar.png'}
            width={150}
            height={150}
            alt=''
            className='flex items-center'
          />
        </div>
        <div>
          <h1 className='text-[#fafafa] text-2xl font-semibold'>
            Rohit Hegade
          </h1>
        </div>
        <div className='bg-[#363637] p-2 flex justify-center rounded-lg'>
          <h1 className='text-[#e0e0e0] text-[12px]'>Full Stack Developer</h1>
        </div>
        <div className='bg-[#363637] w-full h-0.5 ' />
        <div className='flex flex-col gap-8'>
          <ProfileCardItem
            icon={
              <MailIcon
                style={{ height: 28, width: 28 }}
                className='text-[#F5D26C]'
                strokeWidth={2}
              />
            }
            type='EMAIL'
            mailValue='rohithegade8@gmail.com'
          />
          <ProfileCardItem
            icon={
              <PhoneIcon
                style={{ height: 28, width: 28 }}
                className='text-[#F5D26C]'
                strokeWidth={2}
              />
            }
            type='PHONE'
            typeValue='+91 9481458332'
          />
          <ProfileCardItem
            icon={
              <CalendarIcon
                style={{ height: 28, width: 28 }}
                className='text-[#F5D26C]'
                strokeWidth={2}
              />
            }
            type='BIRTHDAY'
            typeValue='2nd Sept 2001'
          />
          <ProfileCardItem
            icon={
              <LocationMarkerIcon
                style={{ height: 20, width: 35 }}
                className='text-[#F5D26C]'
                strokeWidth={2}
              />
            }
            type='LOCATION'
            typeValue='Hubli,Karnataka'
          />
        </div>
        <div>
          <SocialIcon
            url='https://www.linkedin.com/in/rohit-hegade-40a657202/'
            fgColor='gray'
            bgColor='transparent'
          />
          <SocialIcon
            url='https://github.com/Rohithegade02'
            fgColor='gray'
            bgColor='transparent'
          />
        </div>
      </div>
    </motion.div>
  )
}

export default ProfileCardInfo
