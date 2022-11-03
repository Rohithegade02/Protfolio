import React from "react";
import { motion } from "framer-motion";

function Project() {
  const projects = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7OffG4DlY0wvhkc7gp2AHG6M4KHOcUEBEFP7huakb5GMqWIkreI0s7MKW9CvThPK5fwI&usqp=CAU",
      name: "Amazon Clone",
      description:
        " 🛒🛒This is a Amazon Shopping Site's clone version created using ReactJs. Here we can able to add your items to the cart and also able to purchase the products using your card via stripe payment  method",
      git: "https://github.com/Rohithegade02/amazon-clone",
      demo: "https://clone-17862.web.app/",
      technologies: [
        {
          react:
            "https://cdn.sanity.io/images/ozwoeorl/production/0b5634b00998cd9c85c300ebd66962b4555d6b84-1200x630.png?w=100&fit=max&auto=format",
        },
        {
          firebase:
            "https://cdn.sanity.io/images/ozwoeorl/production/af8a94a4e1400ea5eb033c1bd913570c66bad349-1200x600.webp?w=100&fit=max&auto=format",
        },
        {
          redux:
            "https://cdn.sanity.io/images/ozwoeorl/production/8473fd46d7dffba4283ef5494b7a5677d196b961-260x260.jpg?w=100&fit=max&auto=format",
        },
        {
          stripe:
            "https://cdn.sanity.io/images/ozwoeorl/production/f6efde670a239f9cc6f66c730fe3724b2a8fb3f9-256x256.png?w=100&fit=max&auto=format",
        },
        {
          css: "https://cdn.sanity.io/images/ozwoeorl/production/0cfc0be6b6615afb3b16b65c7c99b546c41351a9-1280x1280.webp?w=100&fit=max&auto=format",
        },
      ],
    },
    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/9c5da2b380f90716d54b32f634c42fec503c1561-1000x750.webp?w=200&fit=max&auto=format",
      name: "Discord Clone",
      description:
        " Discord (with unique roles in each server,image auto render video links in messages, discord loading logo between page renderings) with React, React Router, Tailwind CSS and firebase as backend",
      git: "https://github.com/Rohithegade02/Discord-Clone",
      demo: "https://discordclone-three.vercel.app/",
    },
    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/062ce219b3601a36c5ab13535b0ea1739114cce5-909x510.png?w=300&fit=max&auto=format",
      name: "Linkdeln Clone",
      description:
        " Implemented a web application using React and Redux. The index page contains login credentials. Sign in with google is enabled through Firebase as a backed Used styled-components for styling the User Interface.",
      git: "https://github.com/Rohithegade02/Linkdein-Clone",
      demo: "https://linkedin-clone-a5080.web.app/",
    },
    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/37b2ffd189a58c39a9317e6625a46026c604fe8f-1340x1112.png?w=200&fit=max&auto=format",
      name: "Airbnb Clone",
      description:
        " This is a NextJs and Tailwind based Airbnb clone. This clone features extreme responsiveness to all devices.In this user can select from which date in which he wants to travel till the end date and select the city. Implemented mapbox where he/she can view the exactly location of hotels in the map.",
      git: "https://github.com/Rohithegade02/Airbnb-Clone",
      demo: "https://airbnb-psi-three.vercel.app/",
    },
    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/a86cf4623e7672298bb0bf7b77ccb944ae30b22e-1000x420.webp?w=360&fit=max&auto=format",
      name: "Hulu Clone",
      description:
        " Developed frontend web application using ReactJS Framework. Full responsive web page which contains information of movies based on their genres.",
      git: "https://github.com/Rohithegade02/HULUAPP",
      demo: "https://huluapp-ten.vercel.app/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full  justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>
      <div className=" scrollbar-track-gray-400/20 scrollbar scrollbar-thin scrollbar-thumb-[#f7ab0a]/80 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.img}
              alt=""
              className="h-25 w-30 object-center object-fill"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-4xl">
              <h4 className="text-2xl font-semibold text-center ">
                <span className="underline decoration-[#f7ab0a]/50">
                  {" "}
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                {project.name}
              </h4>
              <div className="flex items-center space-x-3 justify-center">
                <img
                  className=" h-10 w-10 rounded-full object-cover "
                  src="https://cdn.sanity.io/images/ozwoeorl/production/0b5634b00998cd9c85c300ebd66962b4555d6b84-1200x630.png?w=100&fit=max&auto=format"
                />
                <img
                  className=" h-10 w-10 rounded-full object-cover "
                  src="https://cdn.sanity.io/images/ozwoeorl/production/8473fd46d7dffba4283ef5494b7a5677d196b961-260x260.jpg?w=100&fit=max&auto=format"
                />
                <img
                  className=" h-10 w-10 rounded-full object-cover "
                  src="https://cdn.sanity.io/images/ozwoeorl/production/df24f3334e1f5785d585babeabe06b5876e7a7d8-500x500.png?w=100&fit=max&auto=format"
                />
                <img
                  className=" h-10 w-10 rounded-full object-cover "
                  src="https://cdn.sanity.io/images/ozwoeorl/production/e285efaab9a759d07eaa1b6155ac36d72d45f4ab-1200x1200.jpg?w=100&fit=max&auto=format"
                />
              </div>

              <p className=" text-center md:text-left text-sm">
                {project.description}
              </p>
            </div>

            <div className=" flex  items-center space-x-5">
              <a href={project.git}>
                <button className="heroButton">Github</button>
              </a>

              <a href={project.demo}>
                <button className="heroButton">Live Demo</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  );
}

export default Project;
