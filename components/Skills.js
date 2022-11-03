import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

function Skills() {
  const values = [
    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/b0165e579e82967c102cf7e7daa7c4d970d4e093-900x900.jpg?w=2000&fit=max&auto=format",
      scores: "80%",
    },
    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/0b5634b00998cd9c85c300ebd66962b4555d6b84-1200x630.png?w=2000&fit=max&auto=format",
      scores: "80%",
    },
    {
      img: "https://media.zeemly.com/zeemly/product/tailwind-css.png",
      scores: "75%",
    },

    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/af8a94a4e1400ea5eb033c1bd913570c66bad349-1200x600.webp?w=2000&fit=max&auto=format",
      scores: "70%",
    },
    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/df24f3334e1f5785d585babeabe06b5876e7a7d8-500x500.png?w=2000&fit=max&auto=format",
      scores: "50%",
    },
    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/cf93cae8ecf1ef7cbe3cf24b0973c66a73fb8aeb-587x330.png?w=2000&fit=max&auto=format",
      scores: "70%",
    },
    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/654fbc6c0d084e44e7afedf6f9b2ea9378770e43-512x336.png?w=2000&fit=max&auto=format",
      scores: "70%",
    },

    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/a0e61949015e62acbf0943f4f5e3964622f6fb5d-400x400.webp?w=2000&fit=max&auto=format",
      scores: "60%",
    },
    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/8768a0765de39a823abe5a72308aa7f15a302c02-2048x2048.png?w=2000&fit=max&auto=format",
      scores: "70%",
    },
    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/2a4429107e86c226d4bb8421b37ee5065b3de44e-224x256.png?w=2000&fit=max&auto=format",
      scores: "65%",
    },

    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/8473fd46d7dffba4283ef5494b7a5677d196b961-260x260.jpg?w=2000&fit=max&auto=format",
      scores: "60%",
    },
    {
      img: "https://cdn.sanity.io/images/ozwoeorl/production/ff00c08760983e0e037aaf6ab4e004f4d147276a-383x383.png?w=2000&fit=max&auto=format",
      scores: "65%",
    },
  ];
  return (
    <motion.div className="h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm ">
        Hover over a skill for currency proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5 pt-20">
        {values.slice(0, values.length / 2).map((value, i) => (
          <Skill img={value.img} scores={value.scores} />
        ))}
        {values.slice(values.length / 2, values.length).map((value, i) => (
          <Skill img={value.img} scores={value.scores} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
