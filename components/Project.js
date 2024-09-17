import React from "react";
import { motion } from "framer-motion";

function Project() {
  const projects = [
    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/c33fa53e671b390022047be680e5a72c09e498e5-10000x7500.png",
      name: "Rider App (Uber Clone)",
      description:
        "Built with React Native for handling the user interface, Google Maps for rendering maps with directions, stripe for handling payments, serverless Postgres for managing databases, and styled with TailwindCSS, Uber Clone is a perfect mobile app.",
      git: "https://github.com/Rohithegade02/uber-clone",
      demo: "",
      techno: [
        {
          img1: "https://cdn.sanity.io/images/ozwoeorl/production/0b5634b00998cd9c85c300ebd66962b4555d6b84-1200x630.png?w=2000&fit=max&auto=format",
          img2: "https://cdn.sanity.io/images/ozwoeorl/production/0d42a1ba8528383571bd33361f6edb7118bd6c4a-144x144.png",
          img3: "https://cdn.sanity.io/images/ozwoeorl/production/7ef9964e6d7067f1beed8cb12dccd96df1e54b0d-192x198.jpg",
          img4: "",
        },
      ],
    },
    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/c5e65c15bcf5172b39a69da5d3f8307b6226fb61-10000x7500.png",
      name: "Learn Management App ",
      description:
        "Developed the Learning Management app in a native app based on the Figma design . Implemented features like a wishlist and personalized content recommendations based on user behavior, utilizing Zustand for state management.",
      git: "https://github.com/Rohithegade02/lms-native-app",
      demo: "",
      techno: [
        {
          img1: "https://cdn.sanity.io/images/ozwoeorl/production/0b5634b00998cd9c85c300ebd66962b4555d6b84-1200x630.png?w=2000&fit=max&auto=format",
          img2: "",
          img3: "",
          img4: "",
        },
      ],
    },
    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/bf372fb16410911736a32a65088a8c3699df9827-7680x4320.png",
      name: "Airbnb Clone",
      description:
        " This is a NextJs and Tailwind based Airbnb clone. This clone features extreme responsiveness to all devices.In this user can select from which date in which he wants to travel till the end date and select the city. Implemented mapbox where he/she can view the exactly location of hotels in the map.",
      git: "https://github.com/Rohithegade02/Airbnb-Clone",
      demo: "https://airbnb-psi-three.vercel.app/",
      techno: [
        {
          img1: "https://cdn.sanity.io/images/ozwoeorl/production/df24f3334e1f5785d585babeabe06b5876e7a7d8-500x500.png?w=2000&fit=max&auto=format",
          img2: "https://cdn.sanity.io/images/ozwoeorl/production/af8a94a4e1400ea5eb033c1bd913570c66bad349-1200x600.webp?w=2000&fit=max&auto=format",
          img3: "https://cdn.sanity.io/images/ozwoeorl/production/e285efaab9a759d07eaa1b6155ac36d72d45f4ab-1200x1200.jpg?w=2000&fit=max&auto=format",
          img4: "https://cdn.sanity.io/images/ozwoeorl/production/b473d35de88f549250d4dc022ca12e953a455d33-300x300.png?w=2000&fit=max&auto=format",
        },
      ],
    },
    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/062ce219b3601a36c5ab13535b0ea1739114cce5-909x510.png?w=300&fit=max&auto=format",
      name: "Linkdeln Clone",
      description:
        " Implemented a web application using React and Redux. The index page contains login credentials. Sign in with google is enabled through Firebase as a backed Used styled-components for styling the User Interface.",
      git: "https://github.com/Rohithegade02/Linkdein-Clone",
      demo: "https://linkedin-clone-a5080.web.app/",
      techno: [
        {
          img1: "https://cdn.sanity.io/images/ozwoeorl/production/0b5634b00998cd9c85c300ebd66962b4555d6b84-1200x630.png?w=2000&fit=max&auto=format",
          img2: "https://cdn.sanity.io/images/ozwoeorl/production/0cfc0be6b6615afb3b16b65c7c99b546c41351a9-1280x1280.webp?w=2000&fit=max&auto=format",
          img3: "https://cdn.sanity.io/images/ozwoeorl/production/af8a94a4e1400ea5eb033c1bd913570c66bad349-1200x600.webp?w=2000&fit=max&auto=format",
          img4: "https://cdn.sanity.io/images/ozwoeorl/production/8473fd46d7dffba4283ef5494b7a5677d196b961-260x260.jpg?w=2000&fit=max&auto=format",
        },
      ],
    },
    
    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/a86cf4623e7672298bb0bf7b77ccb944ae30b22e-1000x420.webp?w=360&fit=max&auto=format",
      name: "Hulu Clone",
      description:
        " Developed frontend web application using ReactJS Framework. Full responsive web page which contains information of movies based on their genres.",
      git: "https://github.com/Rohithegade02/HULUAPP",
      demo: "https://huluapp-ten.vercel.app/",
      techno: [
        {
          img1: "https://cdn.sanity.io/images/ozwoeorl/production/df24f3334e1f5785d585babeabe06b5876e7a7d8-500x500.png?w=2000&fit=max&auto=format",
          img2: "https://cdn.sanity.io/images/ozwoeorl/production/b0165e579e82967c102cf7e7daa7c4d970d4e093-900x900.jpg?w=2000&fit=max&auto=format",
          img3: "https://cdn.sanity.io/images/ozwoeorl/production/8768a0765de39a823abe5a72308aa7f15a302c02-2048x2048.png?w=2000&fit=max&auto=format",
          img4: "https://cdn.sanity.io/images/ozwoeorl/production/0cfc0be6b6615afb3b16b65c7c99b546c41351a9-1280x1280.webp?w=2000&fit=max&auto=format",
        },
      ],
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
      <div className=" scrollbar-track-gray-400/20 scrollbar  scrollbar-thumb-[#f7ab0a]/80 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen mt-32 flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
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
              className="h-[350px] w-96 rounded-md object-center object-contain"
            />
            <div className="space-y-2 px-0 md:px-10 max-w-4xl">
              <h4 className="text-2xl font-semibold text-center ">
                <span className="underline decoration-[#f7ab0a]/50">
                  {" "}
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                {project.name}
              </h4>
              <div>
                {project.techno.map((technologies, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 justify-center"
                  >
                    <img
                      className=" h-10 w-10 rounded-full object-cover "
                      src={technologies.img1}
                    />
                   {
                      technologies.img2 &&
                      <img
                      className=" h-10 w-10 rounded-full object-cover "
                      src={technologies.img2}
                    />
                   }
                    {
                      technologies.img3 && 
                      <img
                      className=" h-10 w-10 rounded-full object-cover "
                      src={technologies.img3}
                    />
                    }
                    {
                      technologies.img4 &&
                      <img
                      className=" h-10 w-10 rounded-full object-cover "
                      src={technologies.img4}
                    />
                    }
                  </div>
                ))}
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
