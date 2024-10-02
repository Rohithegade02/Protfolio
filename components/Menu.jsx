import React from 'react'

function Menu({ setActiveSection, activeSection }) {
  return (
    <div className='fixed bottom-0 left-0 w-full rounded-t-2xl z-10 h-16 bg-[#282829] border border-[#333333] backdrop-filter backdrop-blur-md bg-opacity-10  flex flex-row items-center justify-evenly lg:relative lg:h-16 lg:w-[60%] lg:rounded-tr-2xl lg:rounded-bl-2xl lg:rounded-tl-none lg:border-b lg:border-[#333333]'>
      <div>
        <button
          onClick={() => setActiveSection('about')}
          className={` ${
            activeSection === 'about' ? 'text-[#F0CF6B]' : 'text-[#CACACA]'
          } font-medium  text-sm lg:text-base`}
        >
          About
        </button>
      </div>
      <div>
        <button
          onClick={() => setActiveSection('resume')}
          className={` ${
            activeSection === 'resume' ? 'text-[#F0CF6B]' : 'text-[#CACACA]'
          } font-medium  text-sm lg:text-base`}
        >
          Resume
        </button>
      </div>
      <div>
        <button
          onClick={() => setActiveSection('skills')}
          className={` ${
            activeSection === 'skills' ? 'text-[#F0CF6B]' : 'text-[#CACACA]'
          } font-medium  text-sm lg:text-base`}
        >
          Skills
        </button>
      </div>
      <div>
        <button
          onClick={() => setActiveSection('portfolio')}
          className={` ${
            activeSection === 'portfolio' ? 'text-[#F0CF6B]' : 'text-[#CACACA]'
          } font-medium  text-sm lg:text-base`}
        >
          Portfolio
        </button>
      </div>
      <div>
        <button
          onClick={() => setActiveSection('contact')}
          className={` ${
            activeSection === 'contact' ? 'text-[#F0CF6B]' : 'text-[#CACACA]'
          } font-medium  text-sm lg:text-base`}
        >
          Contact
        </button>
      </div>
    </div>
  )
}

export default Menu
