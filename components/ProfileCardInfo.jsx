import Image from 'next/image'
import React, { useState } from 'react'
import {
  ArrowDownIcon,
  CalendarIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from '@heroicons/react/outline'
import ProfileCardItem from './ProfileCardItem'
import { SocialIcon } from 'react-social-icons'
import { AnimatePresence, motion } from 'framer-motion'

function ProfileCardInfo() {
  const [showContacts, setShowContacts] = useState(true)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className=' lg:h-[90vh] lg:w-72 md:w-full bg-[#1E1E1F]  flex flex-col lg:justify-center relative md:relative lg:items-center border-2 border-[#333333] rounded-2xl'
    >
      <div className='bg-[#363637] !sm:bg-[#363637] absolute md:absolute md:bg-[#363637] rounded-xl rounded-tl-none rounded-br-none p-2 lg:hidden top-0 right-0'>
        <button
          className='text-[#F5D26C] md:text-[12px] text-[10px]'
          onClick={() => setShowContacts(!showContacts)}
        >
          {showContacts ? 'Hide Details' : 'Show Details'}
        </button>
      </div>

      <div className='flex flex-col p-4 md:p-16 lg:p-0 lg:items-center gap-5'>
        <div className='flex lg:flex lg:flex-col gap-5 items-center'>
          <div className='bg-[#363637] w-40 h-40 flex items-center rounded-3xl'>
            <Image
              src={'/my-avatar.png'}
              width={150}
              height={150}
              alt=''
              className='flex items-center'
            />
          </div>
          <div className='flex flex-col gap-5'>
            <div>
              <h1 className='text-[#fafafa] text-lg md:text-xl lg:text-2xl font-semibold'>
                Rohit Hegade
              </h1>
            </div>
            <div className='bg-[#363637] p-2 flex justify-center rounded-lg'>
              <h1 className='text-[#F5D26C] md:text-[12px] text-[10px] lg:text-[12px]'>
                Full Stack Developer
              </h1>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {showContacts && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className='overflow-hidden md:flex md:flex-col md:gap-5 flex flex-col gap-5 '
            >
              <div className='bg-[#363637] w-full h-px ' />
              <div className='flex md:flex-col md:flex-wrap flex-row flex-wrap lg:flex-col gap-8'>
                <div className=' lg:flex lg:flex-col lg:gap-8 md:flex md:flex-row md:justify-between flex flex-col gap-5'>
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
                </div>
                <div className='lg:flex lg:flex-col lg:gap-8  md:flex md:justify-between flex flex-col gap-5'>
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
                    typeValue='Hubli , Karnataka'
                  />
                </div>
              </div>
              <div className='bg-[#363637] w-full h-px lg:hidden' />

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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default ProfileCardInfo
