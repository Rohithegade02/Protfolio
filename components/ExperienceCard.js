/** @format */

import React from 'react';

const data = [
	{
		id: 6,
		img: '',
		cname: 'Suggaa',
		type: 'Intership',
		role: 'Frontend  Developer',
		duration: 'June/2024... - Present ',
	},
	{
		id: 5,
		img: '',
		cname: 'Circle Health',
		type: 'Intership',
		role: 'Full Stack Developer',
		duration: 'Oct/2023... - Mar/2023... ',
	},
	{
		id: 4,
		img: '',
		cname: 'Techtonic Enterprises Pvt. Ltd',
		type: 'Intership',
		role: 'Frontend Developer',
		duration: 'Aug/2023... - Oct/2023... ',
	},
	{
		id: 1,
		img: '',
		cname: 'Techhelps.co.in',
		type: 'Intership',
		role: 'FrontEnd Developer',
		duration: 'Mar/2023... - Jul/2023... ',
		p1: ' As a frontend developer, I collaborated within a team alongside a parser to create a project that effectively handles customer queries, leads, and associated data. My role involved active participation in Scrum meetings and close collaboration with UX/UI designers to ensure a seamless fusion of design concepts into the frontend development process.',
		p2: 'I leveraged my extensive knowledge of Material UI, employing its components and styling capabilities to craft an intuitive and visually appealing user interface. ',
		p3: 'I was deeply involved in a code generation initiative that integrated with Excel and Google Sheets. This system automatically produced frontend React code based on supplied data, significantly streamlining our development efforts and reducing the need for manual coding.',
		p4: '',
	},
	{
		id: 2,
		img: '',
		cname: 'Careerboat.io',
		type: 'Intership',
		role: 'FrontEnd Developer',
		duration: 'Dec/2022... - Jan/2023...',
		p1: 'I collaborated closely with the design team to ensure a seamless transition from Figma design files to functional web applications. This involved regular communication, understanding design concepts, and addressing any design-to-development challenges.',
		p2: 'I was responsible for writing clean and efficient code using Next.js, a React framework. My focus was on making the web applications responsive to various screen sizes and devices, ensuring a consistent user experience across desktop and mobile platforms.',
		p3: 'I used version control systems like Git to collaborate with the development team efficiently, track code changes, and manage project branches.',
		p4: '  ',
	},
	{
		id: 3,
		img: '',
		cname: 'South Western Railways(Hubli Division)',
		type: 'Intership',
		role: 'FrontEnd Developer',
		duration: 'Feb/2022... - Sep/2022...',
		p1: ' Collaborated with the product team to understand requirements and business specifications around user interface management, analytics and risk.',
		p2: 'Coded software updates and alterations based on detailed design specifications.',
		p4: 'Solved complex functionalities using the latest web technologies.',
		p3: '  Developed a responsive and full-scale web application for digitizing manual registers',
	},
];
function ExperienceCard() {
	return (
		<>
			{data.map((item, i) => (
				<article
					key={i}
					className='flex flex-col rounded-lg  sm:py-5 items-center h-[500px]   flex-shrink-0 w-[346px] md:w-[600px] lg:w-[500px] snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200  mt-10'>
					{/* <motion.img
            initial={{
              y: -200,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          
            className='w-32 h-32 rounded-full xl:w-[190px] xl:h-[190px] object-cover object-top'
            alt=''
          /> */}
					<div className='px-10 mt-5 sm:py-10 md:px-10'>
						<h4 className='text-2xl font-light'>{item.cname}</h4>
						<p className='font-bold text-xl '>{item.role} </p>
						<div className='flex space-x-2 my-2'>
							<p className='font-bold text-l mt-1'>{item.type}</p>
						</div>
						<p className='uppercase  text-gray-300'>{item.duration}</p>
						<div className='list-disc lg:mt-10 md:mt-10 space-y-4 ml-5 text-xs'>
							<p>{item.p1}</p>
							<p>{item.p2}</p>
							<p>{item.p3}</p>
						</div>
					</div>
				</article>
			))}
		</>
	);
}

export default ExperienceCard;
