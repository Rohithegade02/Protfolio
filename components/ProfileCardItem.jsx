import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function ProfileCardItem(props) {
  return (
    <div className='flex flex-row items-center gap-3.5  '>
      <div className='bg-[#1E1E1F] shadow-md shadow-[#363637] h-10 w-10  flex rounded-md items-center justify-center'>
        {props.icon}
      </div>
      <div className='flex flex-col items-start'>
        <h1 className='text-[12px] text-[#929293]'>{props.type}</h1>
        {props.typeValue ? (
          <h1 className='text-[15px] text-[#DDDDDD]'>{props.typeValue}</h1>
        ) : (
          <Link href={`mailto:${props.mailValue}`}>
            <h1 className='text-[15px] text-[#DDDDDD] cursor-pointer'>
              {' '}
              {props.mailValue}
            </h1>
          </Link>
        )}
      </div>
    </div>
  )
}

ProfileCardItem.propTypes = {
  icon: PropTypes.node,
  type: PropTypes.string.isRequired,
  typeValue: PropTypes.string,
  mailValue: PropTypes.string,
}

export default ProfileCardItem
