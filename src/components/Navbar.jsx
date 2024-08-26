import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb"; // Import the CV icon
import logo from "../assets/website logo.png";
import cv from "../assets/CV.pdf"; // Import your CV file
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      title: <FaLinkedin className="text-3xl cursor-pointer" />,
      dest: "https://www.linkedin.com/in/blagovest-todorov-13349122b/",
    },
    {
      id: 2,
      title: <FaGithub className="text-3xl cursor-pointer" />,
      dest: "https://github.com/BlagovestT",
    },
    {
      id: 3,
      title: <TbFileCv className="text-3xl cursor-pointer" />,
      dest: cv, // Use the imported CV file as the destination
      download: "BlagovestTodorov_CV.pdf", // Specify the download filename
    },
  ];

  const iconVar = (duration) => ({
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  });

  return (
    <header className="w-full flex justify-between p-5 text-white items-center max_width_screen">
      <motion.img
        className="text-5xl font-semibold h-[80px] relative z-[10] object-cover"
        src={logo}
      />
      <ul className="flex sm:gap-7 gap-3">
        {navItems.map((item, i) => (
          <motion.li
            key={item.id}
            variants={iconVar(i / 2)}
            initial="hidden"
            animate="visible"
          >
            <a
              href={item.dest}
              target={item.download ? "_self" : "_blank"}
              download={item.download ? item.download : undefined}
            >
              {item.title}
            </a>
          </motion.li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
