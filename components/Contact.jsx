import React from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = formData => {
    window.location.href = `mailto:rohithegade8@gmail.com?subject=${formData.subject}&body=Hi,my name is ${formData.name}. (${formData.message})`
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className=' relative h-[45vh] lg:h-[67vh] flex flex-col items-center lg:items-start lg:mb-20 md:justify-center md:pt-10 lg:gap-5 lg:flex-col text-center md:text-left md:flex-row max-w-7xl  lg:my-auto '
    >
      <div className='lg:pl-10 lg:block lg:mt-10 hidden'>
        <h1 className='font-bold text-white text-2xl'>Contact Form</h1>
      </div>
      <div className='flex flex-col lg:w-[90%] px-4 w-[90%] md:w-[80%] md:mt-5 mt-5   space-y-5 '>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-full  sm:mx-10'
        >
          <div className='flex space-x-2'>
            <input
              {...register('name')}
              placeholder='Name'
              className='contactInput + w-full'
              type='text'
            />
            <input
              {...register('email')}
              placeholder='Email'
              className='contactInput + w-full'
              type='email'
            />
          </div>
          <input
            {...register('subject')}
            placeholder='Subject'
            className='contactInput'
            type='text'
          />
          <textarea
            {...register('message')}
            placeholder='Message'
            className='contactInput'
          ></textarea>
          <button
            type='submit'
            className='bg-[#F5D26C] py-5 px-10  rounded-md text-black font-bold text-lg hover:bg-slate-50 '
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact
