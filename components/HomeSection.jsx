import React, { useState } from 'react'
import Header from './Header'
import Menu from './Menu'
import Home from './Home'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Skills from './Skills'

function HomeSection() {
  const [activeSection, setActiveSection] = useState('about')
  const handleTitleChange = title => {
    switch (title) {
      case 'about':
        return 'About Me'
      case 'resume':
        return 'Resume'
      case 'skills':
        return 'Skills'
      case 'portfolio':
        return 'Portfolio'
      case 'contact':
        return 'Contact'
      default:
        return 'About Me'
    }
  }
  const handleContentChange = title => {
    switch (title) {
      case 'about':
        return <Home />
      case 'resume':
        return <Resume />
      case 'skills':
        return <Skills />
      case 'portfolio':
        return <Portfolio />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className='w-full lg:min-h-[90vh]  lg:w-[60%] bg-[#1E1E1F] flex flex-col lg:absolute lg:right-32 pb-10 lg:pb-0 border-2 border-[#333333] rounded-2xl'>
      <div className='flex justify-between'>
        <Header key={activeSection} title={handleTitleChange(activeSection)} />
        <Menu
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
      </div>
      {handleContentChange(activeSection)}
    </div>
  )
}

export default HomeSection
