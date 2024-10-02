import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

function HomeSectionCard(props) {
  return (
    <div className='flex gap-5 bg-[#363637] shadow-md p-6 items-center lg:w-[47.5%] w-full h-32 rounded-lg'>
      <div>
        <Image src={props.logo} alt='' width={70} height={70} />
      </div>
      <div className='flex flex-col gap-2'>
        <div>
          <h1 className='text-white font-semibold lg:text-lg text-base md:text-lg'>
            {props.title}
          </h1>
        </div>
        <div>
          <h1 className='text-[#BCBCBD] text-[10px] md:text-sm lg:text-sm'>
            {props.subtitle}
          </h1>
        </div>
      </div>
    </div>
  )
}
HomeSectionCard.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}
export default HomeSectionCard
