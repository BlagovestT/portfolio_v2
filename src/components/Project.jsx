import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import curve from "../assets/curve.png";
import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";

const Project = () => {
  const PROJECTS = [
    {
      title: "AI - Summarizer",
      des: "https://ai-summarizer-ten-eta.vercel.app",
      image: project1,
      description:
        "Summize is an innovative web application designed to simplify your reading experience by transforming lengthy articles into clear and concise summaries. Built with modern web development technologies, Summize leverages the power of AI to provide users with quick and accurate summaries, making it easier to grasp the essence of any article in seconds.",
      technologies: ["Vite-React", "Redux", "Tailwind", "JavaScript"],
    },
    {
      title: "Hospice Website",
      des: "https://alenmak-medical.com/",
      image: project2,
      description:
        "This is my hospice site written in React and JavaScript provides a user-friendly and interactive platform to convey essential information and services related to hospice care. By leveraging the power of React, a popular JavaScript library for building user interfaces, the site can deliver a seamless and responsive user experience.",
      technologies: ["React", "HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Car-Hub Website",
      des: "https://car-hub-fawn.vercel.app/",
      image: project3,
      description:
        "My cutting-edge demo Rent-a-Car website, built on Next.js with TypeScript and powered by Tailwind CSS. Leveraging the power of HeadlessUI and integrating data from Rapid API, I provide real-time access to a wide range of vehicles at competitive rates.",
      technologies: ["NextJS", "TypeScript", "Tailwind"],
    },
    {
      title: "Movie Catalog",
      des: "https://movie-catalog-tau.vercel.app/",
      image: project4,
      description:
        "The Movie Catalog Project is a web application that allows users to explore and discover movies based on different categories. The project utilizes React for the front end, fetching movie data from an external API, and provides a seamless and engaging user experience.",
      technologies: ["React", "Tailwind", "JavaScript"],
    },
    {
      title: "Blog Website",
      des: "https://nextjs-blog-snowy-ten-29.vercel.app/",
      image: project5,
      description:
        "A blog written in Next.js with TypeScript, styled using Tailwind CSS, and powered by Sanity for the backend offers a modern and efficient solution for creating and managing a content-rich blog platform.",
      technologies: ["NextJS", "TypeScript", "Tailwind", "Sanity"],
    },
  ];

  return (
    <section className="my-10 p-3 py-[70px]">
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center flex-col w-full relative z-[4]  mb-9"
      >
        <div>
          {" "}
          <h1 className="text-white text-5xl text-center"> Projects </h1>{" "}
          <div className="text-center flex justify-center">
            {" "}
            <motion.img
              whileInView={{ width: 100, opacity: 1 }}
              initial={{ width: 90, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={curve}
              alt=""
              className="w-[100px] h-[10px] mt-1"
            />
          </div>{" "}
        </div>
      </motion.div>

      <div className="relative max_width_screen w-full text-white">
        {PROJECTS.map((item, i) => (
          <div
            key={i}
            className="flex sm:flex-row flex-col my-4 relative z-[10]"
          >
            <div className="flex-1 flex sm:justify-center justify-start sm:my-0 my-2 ">
              {" "}
              <img
                src={item.image}
                alt="image"
                className="sm:w-[40%] w-[90%] rounded-2xl"
              />{" "}
            </div>
            <div className="flex flex-1 flex-col gap-3">
              {item.des ? (
                <a
                  href={item.des}
                  target="_blank"
                  className="font-semibold flex gap-1 cursor-pointer"
                >
                  {" "}
                  {
                    item.title
                  } <HiOutlineExternalLink className="text-2xl" />{" "}
                </a>
              ) : (
                <div className="font-semibold">
                  {" "}
                  <p className=" flex gap-1"> {item.title} </p>{" "}
                </div>
              )}

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

        <div className="absolute z-[0] w-[30%] h-[60%]   bottom-0   -right-0 pink__gradient overflow-hidden" />
        <div className="absolute z-[0] w-[20%] h-[70%] bottom-1 -right-0   blue__gradient  overflow-hidden" />
        <div className="absolute z-[0] w-[10%] h-[50%] bottom-2 -right-0 yellow__gradient  overflow-hidden" />
      </div>
    </section>
  );
};

export default Project;
