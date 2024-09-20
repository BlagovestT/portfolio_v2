import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import curve from "../assets/curve.png";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Contact = () => {
  const navItems = [
    {
      id: "Home",
      title: <FaLinkedin className="text-3xl  cursor-pointer" />,
      dest: "https://www.linkedin.com/in/blagovest-todorov-13349122b/",
    },
    {
      id: "About",
      title: <FaGithub className="text-3xl  cursor-pointer" />,
      dest: "https://github.com/BlagovestT",
    },
  ];

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();
      if (result.success) {
        console.log("Success:", result);
        event.target.reset();
        Swal.fire({
          title: "Success!",
          text: "Message send successfully!",
          icon: "success",
        });
      } else {
        console.error("Form submission error:", result);
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };

  return (
    <footer className="w-full flex justify-center flex-col items-center p-5">
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center flex-col w-full relative z-[4] mb-9"
      >
        <div>
          <h1 className="text-white text-5xl text-center">Get in touch</h1>
          <div className="text-center flex justify-center">
            <motion.img
              whileInView={{ width: 100, opacity: 1 }}
              initial={{ width: 90, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={curve}
              alt=""
              className="w-[100px] h-[10px] mt-1"
            />
          </div>
        </div>
      </motion.div>

      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-white__gradient p-8 rounded-lg shadow-lg mb-6 relative"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-white text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#5507a8]"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b6ad7]"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-white text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#da275c]"
          ></textarea>
        </div>
        <input type="hidden" name="_captcha" value="false" />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#da275c] to-[#fee140] text-white py-2 rounded-md font-bold hover:opacity-90 transition-opacity"
        >
          Send Message
        </button>
      </form>

      <ul className="flex gap-4 flex-wrap mt-2 text-white">
        {navItems.map((item) => (
          <motion.li key={item.id}>
            <a href={item.dest} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </motion.li>
        ))}
      </ul>
    </footer>
  );
};

export default Contact;
