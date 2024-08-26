import "./App.css";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technology from "./components/Technology";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Technology />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
