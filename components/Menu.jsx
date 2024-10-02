import React from 'react'

function Menu({ setActiveSection, activeSection }) {
  return (
    <div className='bg-[#282829] flex flex-row  h-16  w-[60%] items-center justify-evenly rounded-tr-2xl rounded-bl-2xl border-b border-[#333333]'>
      <div>
        <button
          onClick={() => setActiveSection('about')}
          className={` ${
            activeSection === 'about' ? 'text-[#F0CF6B]' : 'text-[#CACACA]'
          } font-medium`}
        >
          About
        </button>
      </div>
      <div>
        <button
          onClick={() => setActiveSection('resume')}
          className={` ${
            activeSection === 'resume' ? 'text-[#F0CF6B]' : 'text-[#CACACA]'
          } font-medium`}
        >
          Resume
        </button>
      </div>
      <div>
        <button
          onClick={() => setActiveSection('skills')}
          className={` ${
            activeSection === 'skills' ? 'text-[#F0CF6B]' : 'text-[#CACACA]'
          } font-medium`}
        >
          Skills
        </button>
      </div>
      <div>
        <button
          onClick={() => setActiveSection('portfolio')}
          className={` ${
            activeSection === 'portfolio' ? 'text-[#F0CF6B]' : 'text-[#CACACA]'
          } font-medium`}
        >
          Portfolio
        </button>
      </div>
      <div>
        <button
          onClick={() => setActiveSection('contact')}
          className={` ${
            activeSection === 'contact' ? 'text-[#F0CF6B]' : 'text-[#CACACA]'
          } font-medium`}
        >
          Contact
        </button>
      </div>
    </div>
  )
}

export default Menu
