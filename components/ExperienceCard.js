import { motion } from "framer-motion";
import React from "react";

function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center  flex-shrink-0 w-[346px] md:w-[600px] lg:w-[500px] snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200  mt-10">
      <motion.img
        initial={{
          y: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://www.facultytick.com/wp-content/uploads/2021/07/South-Western-Railway-Hubballi.jpg"
        className="w-32 h-32 rounded-full xl:w-[190px] xl:h-[190px] object-cover object-top"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">Full Stack Developer at SRM</h4>
        <p className="font-bold text-xl mt-1">Intership</p>

        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGfwGM-wZm5PNLOW57h9AoriyYmVgs2FSdOt0sg0WJrJWm7tVl0QDlFeiTk-G0JPbnXY&usqp=CAU"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png"
          />
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://th.bing.com/th/id/R.6b47d7fec15d3e1a5de086ac1c808f6d?rik=IIkC39481Md3Bw&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f05%2fMySQL_logo_logotype.png&ehk=aWHquyoObU%2fXSsDiw7VKaqGdBCxP2cRjipdNUO5Q6us%3d&risl=&pid=ImgRaw&r=0"
          />
          <img
            className=" h-10 w-10 rounded-full object-cover"
            src="https://cdn.sanity.io/images/ozwoeorl/production/2a4429107e86c226d4bb8421b37ee5065b3de44e-224x256.png?w=2000&fit=max&auto=format"
          />
        </div>
        <p className="uppercase  text-gray-300">Feb/2022... - Sep/2022...</p>
        <ul className="list-disc space-y-4 ml-5 text-xs">
          <li>
            Collaborated with the product team to understand requirements and
            business specifications around user interface management, analytics
            and risk.
          </li>
          <li>
            Coded software updates and alterations based on detailed design
            specifications.
          </li>
          <li>
            Solved complex functionalities using the latest web technologies.
          </li>
          <li>
            {" "}
            Developed a responsive and full-scale web application for digitizing
            manual registers
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
