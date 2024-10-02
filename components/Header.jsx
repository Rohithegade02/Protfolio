import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

function Header(props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className='flex flex-col pl-10 pt-10 gap-4'
    >
      <h1 className='text-white text-3xl font-semibold'>{props.title}</h1>
      <div className='h-1.5 bg-gradient-to-r from-[#F7D46D] via-[#FDC965] to-[#FEBD5E] w-12 rounded-md' />
    </motion.div>
  )
}
Header.propTypes = {
  title: PropTypes.string,
}

export default Header
