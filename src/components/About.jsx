import React from "react";
import aboutImg from "../assets/about_img.jpg";
import { motion } from "framer-motion";
import curve from "../assets/curve.png";
const About = () => {
  return (
    <section className="my-[60px] py-[50px]">
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center flex-col w-full relative z-[4]  mb-9"
      >
        <div>
          {" "}
          <h1 className="text-white text-5xl text-center">
            {" "}
            About <span className="text-neutral-400">Me</span>{" "}
          </h1>{" "}
          <div className="text-center flex justify-center">
            {" "}
            <motion.img
              whileInView={{ width: 100, opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={curve}
              alt=""
              className="w-[100px] h-[10px] mt-1"
            />
          </div>{" "}
        </div>
      </motion.div>

      <div className="w-full relative my-5 max_width_screen text-white flex gap-3 flex-col-reverse sm:flex-row justify-between p-5">
        <div className="flex-1 flex justify-center my-5 sm:mt-0 mt-16  ">
          <img
            src={aboutImg}
            alt="aboutImg"
            className="rounded-lg h-[400px] relative z-10  md:w-[60%] object-cover"
          />
        </div>

        <div
          className="flex-1 flex flex-col gap-2 items-start"
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="tracking-tighter font-light  relative z-[1] leading-6">
            I'm a passionate and dedicated 4th-year student at Varna Free
            University "Chernorizets Hrabar," where I'm majoring in National
            Security. With a solid foundation in both front-end development and
            communication skills, I'm eager to embark on a career that allows me
            to bring my technical expertise and collaborative spirit to a
            dynamic team.
          </p>
          <p className="tracking-tighter font-light  relative z-[1] leading-6">
            Over the past few years, I've honed my skills in HTML, CSS,
            JavaScript, and React, with additional experience in TypeScript,
            Tailwind, Bootstrap, Next.js, GitHub, and Figma. Through my
            coursework and hands-on projects, I've developed a strong
            understanding of front-end development principles and best
            practices. I'm committed to continuous learning, as evidenced by my
            completion of various Coursera and SoftUni courses, including Meta's
            Front-End Developer specialization.
          </p>
          <p className="tracking-tighter font-light  relative z-[1] leading-6">
            Beyond academics, I'm an active and sociable person who enjoys
            spending time with friends, hitting the gym, and exploring the
            outdoors on my bicycle or by car. These hobbies keep me energized
            and balanced, providing a healthy outlet for my passion for
            technology and problem-solving. I am ready to contribute my skills,
            enthusiasm, and dedication to help your team achieve its goals.
            Let's create something amazing together!
          </p>

          <div className="absolute z-[0] w-[60%] h-[30%] top-0 right-0 pink__gradient overflow-hidden" />
          <div className="absolute z-[0] w-[70%] h-[60%] top-1 right-0   blue__gradient  overflow-hidden" />
          <div className="absolute z-[0] w-[40%] h-[40%] top-2 right-0 yellow__gradient  overflow-hidden" />
        </div>
      </div>
    </section>
  );
};

export default About;
