import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'
function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className='md:p-10 p-4 lg:p-10 flex flex-col gap-10'
    >
      <ResumeCard recordType='Experience' />
      <ResumeCard recordType='Education' />
    </motion.div>
  )
}

export default Resume
