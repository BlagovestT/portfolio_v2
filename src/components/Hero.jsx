import React from "react";
import user from "../assets/user.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const container = (delay) => ({
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });

  return (
    <section className="w-full sm:pt-[80px] pt-[20px] relative sm:my-5 my-2 max_width_screen text-white flex flex-col sm:flex-row justify-center p-5 items-center">
      <div className="flex-1 flex flex-col gap-2">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="z-[2]"
        >
          <h1 className="text-4xl sm:text-5xl font-thin text-white relative z-[1]">
            Blagovest Todorov
          </h1>
          <span className="my-2  text__gradient bg-clip-text text-transparent  relative z-[1] text-3xl">
            Front-End Developer
          </span>
          <p className=" leading-6 tracking-tighter font-light  relative z-[1]">
            Student, 4th year at VFU. "Chernorizets Hrabar" . I am a Front-End
            Developer with a passion for learning and a strong focus on
            delivering precise and high-quality results, a team player with
            communication skills. I am a responsible and dedicated person,
            committed to achieving my goals and contributing to the success of
            my team.
          </p>
        </motion.div>
        <div className="absolute z-[0] w-[60%] h-[30%] top-0 left-0 pink__gradient overflow-hidden" />
        <div className="absolute z-[0] w-[70%] h-[60%] top-1 left-0   blue__gradient  overflow-hidden" />
        <div className="absolute z-[0] w-[40%] h-[40%] top-2 left-0 yellow__gradient  overflow-hidden" />
      </div>
      <div className="flex-1 w-full flex sm:justify-end justify-center my-5 sm:mt-0 mt-16 ">
        <motion.img
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.6 }}
          src={user}
          alt="user"
          className="rounded-lg h-[400px]  md:w-[60%] object-cover relative z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
