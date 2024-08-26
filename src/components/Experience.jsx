import React from "react";
import { motion } from "framer-motion";
import curve from "../assets/curve.png";

const Experience = () => {
  const EXPERIENCES = [
    {
      year: "2024 - Present",
      role: "Data Analyst",
      company: "Flat Rock Technology",
      description: `A Data Analyst with expertise in Excel, SQL, HTML5 and VBA, a versatile professional skilled in collecting, analyzing, and interpreting data to drive informed decision-making.`,
      technologies: ["Excel", "HTML5", "VBA", "SQL"],
    },
    {
      year: "2023 - 2024 ",
      role: "Web Developer",
      company: "Alen-Mak",
      description: `Designed and developed web application using React. Implemented responsive designs and optimized frontend performance. Updating and maintaining the content according to the employer's requirements`,
      technologies: ["HTML", "CSS", "React", "JavaScript"],
    },
  ];

  return (
    <section className="my-10 p-3">
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center flex-col w-full relative z-[4]  mb-9"
      >
        <div>
          {" "}
          <h1 className="text-white text-5xl text-center"> Experience </h1>{" "}
          <div className="text-center flex justify-center">
            {" "}
            <motion.img
              whileInView={{ width: 100, opacity: 1 }}
              initial={{ width: 90, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={curve}
              alt=""
              className="h-[10px] mt-1"
            />
          </div>{" "}
        </div>
      </motion.div>

      <div className="relative max_width_screen w-full text-white">
        {EXPERIENCES.map((item, i) => (
          <div
            key={i}
            className="relative z-[10] flex sm:flex-row flex-col mb-3 mx-1"
          >
            <div className="flex-1 flex sm:justify-center justify-start sm:my-0 my-2 text-neutral-400">
              {" "}
              {item.year}{" "}
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <div className="flex gap-2 font-semibold">
                {" "}
                <p> {item.role} - </p> <p> {item.company} </p>{" "}
              </div>
              <p className="text-neutral-400"> {item.description} </p>
              <div className="flex gap-2">
                {" "}
                {item.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="px-2 py-1 text-sm font-medium  text-purple-800 bg-neutral-900"
                  >
                    {tech}
                  </div>
                ))}{" "}
              </div>
            </div>
          </div>
        ))}

        <div className="absolute z-[0] w-[30%] h-[60%] top-0   left-0 pink__gradient overflow-hidden" />
        <div className="absolute z-[0] w-[20%] h-[70%] top-1 left-0   blue__gradient  overflow-hidden" />
        <div className="absolute z-[0] w-[10%] h-[50%] top-2 left-0 yellow__gradient  overflow-hidden" />
      </div>
    </section>
  );
};

export default Experience;
