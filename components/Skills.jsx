import React from 'react'
import { motion } from 'framer-motion'

function Skills() {
  return (
    <div className='bg-[#232325] w-[90%] mt-5 mx-auto max-h-full pb-4 lg:px-5 shadow-md flex flex-col gap-2 rounded-lg'>
      <SkillsCard skillsPercentage={'90'} skillsType={'React'} />
      <SkillsCard skillsPercentage={'85'} skillsType={'Javascript'} />
      <SkillsCard skillsPercentage={'85'} skillsType={'Tailwind CSS'} />
      <SkillsCard skillsPercentage={'80'} skillsType={'NextJs'} />
      <SkillsCard skillsPercentage={'70'} skillsType={'MySQL'} />
      <SkillsCard skillsPercentage={'50'} skillsType={'React Native'} />
      <SkillsCard skillsPercentage={'80'} skillsType={'Others (Ex:-Github)'} />
    </div>
  )
}

const SkillsCard = ({ skillsType, skillsPercentage }) => {
  return (
    <div className='flex flex-col justify-center p-2 md:p-5 lg:p-5 mx-5 gap-2'>
      <div className='flex flex-row gap-2'>
        <div>
          <h1 className='text-white font-semibold'>{skillsType}</h1>
        </div>
        <div>
          <h1 className='text-[#B4B4B5]'>{skillsPercentage}%</h1>
        </div>
      </div>
      <div className='w-full rounded-lg h-2 bg-[#676768]'>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: `${skillsPercentage}%` }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          className='rounded-lg z-10 h-2 bg-gradient-to-r from-[#F7D46D] via-[#FDC965] to-[#FEBD5E]'
          style={{ width: `${skillsPercentage}%` }}
        />
      </div>
    </div>
  )
}

export default Skills
