import { BookOpenIcon } from '@heroicons/react/outline'
import React, { useMemo } from 'react'

function ResumeCard({ recordType }) {
  const ExperienceCard = useMemo(() => {
    return [
      {
        role: 'Mobile App Developer Intern',
        date: 'June 2024 - Sept 2024',
        company: 'Suggaa',
        description:
          'I developed and implemented a new user interface for the Suggaa rider and driver apps using a native framework. Collaborated closely with cross-functional teams to ensure seamless feature integration and enhance overall user experience.',
      },
      {
        role: 'Full Stack Developer Intern',
        date: 'Oct 2023 - Mar 2024',
        company: 'Circle Health',
        description:
          'I implemented interactive search functionality allowing users to search for hospitals by city name or pincode, while actively contributing to project tasks and bug fixes to improve and maintain the codebase.',
      },
      {
        company: 'Techtonic Enterprises Pvt. Ltd',
        role: 'Frontend Developer Intern',
        date: 'Aug 2023 - Oct 2023',
        description:
          'I developed a comprehensive application that streamlines advertising operations, enabling businesses to manage campaigns, track metrics, and optimize strategies effortlessly, while allowing administrators to efficiently oversee operations and advertisers to seamlessly create and manage campaigns.',
      },
      {
        company: 'Techhelps.co.in',
        role: 'FrontEnd Developer Intern',
        date: 'Mar/2023 - Jul/2023 ',
        description:
          'As a frontend developer, I collaborated with a team and UX/UI designers in a Scrum environment to integrate design concepts and create a project that manages customer queries, leads, and data.',
      },
      {
        company: 'Careerboat.io',
        role: 'FrontEnd Developer Intern',
        date: 'Dec/2022 - Jan/2023',
        description:
          'I collaborated with the design team to transition Figma designs into responsive web applications using Next.js, ensuring consistent user experience across devices while managing version control with Git for efficient team collaboration.',
      },
      {
        company: 'South Western Railways(Hubli Division)',
        role: 'FrontEnd Developer Intern',
        date: 'Feb 2022 - Sep 2022 ',
        description: '',
      },
    ]
  }, [])
  const EducationCard = useMemo(() => {
    return [
      {
        role: 'KLE TECHNOLOGICAL UNIVERSITY',
        date: 'Aug 2019 - Jun 2023',
        company: 'B.Tech in Computer Science',
        description: '',
      },

      {
        company: 'Mahesh PU College',
        role: 'Secondary High School',
        date: 'Jun 2017 - Aug 2019 ',
        description: '',
      },
    ]
  }, [])
  const selectedCard =
    recordType === 'Experience' ? ExperienceCard : EducationCard

  return (
    <div>
      <div className='flex items-center gap-5 mb-5'>
        <div className='bg-[#1E1E1F] shadow-md shadow-[#363637] h-12 w-12 flex rounded-md items-center justify-center'>
          {/* Icon for the section */}
          <BookOpenIcon
            style={{ height: 28, width: 28 }}
            className='text-[#F5D26C]'
            strokeWidth={2}
          />
        </div>
        <h1 className='font-semibold text-2xl text-white'>{recordType}</h1>
      </div>

      <div className='relative'>
        {selectedCard.map((item, index) => (
          <div key={index} className='flex flex-1 gap-5 px-5 relative'>
            {/* Vertical line */}
            <div className='flex flex-col  items-center'>
              <div className='w-2 h-2 rounded-full bg-[#F5D26C] shadow-lg shadow-[#f5d26c]' />
              {index < selectedCard.length - 1 && (
                <div className='h-full  w-[2px] bg-[#383838] ' />
              )}
            </div>

            {/* Content */}
            <div className='mb-5 -mt-1.5 w-full'>
              <div className='flex justify-between items-center'>
                <h2 className=' md:text-base text-[10px] lg:text-base font-semibold text-white'>
                  {item?.role ?? ''}
                </h2>
                <h2 className='lg:text-sm md:text-sm text-[8px]  text-[#F5D26C]'>
                  {item?.date}
                </h2>
              </div>
              <p className='md:text-sm lg:text-sm text-[10px] font-bold  text-[#F5D26C]'>
                {item?.company}
              </p>
              <p className='text-gray-200 text-[12px] mt-2'>
                {item?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResumeCard
