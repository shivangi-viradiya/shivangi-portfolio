import { motion } from "motion/react";
import "../header.css";
export default function Header() {
  return (
    <motion.header
      className="site-header"
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.15,
      }}
    >
      <a href="#home" className="brand">
        SHIVANGI.
      </a>
      <nav
        className="nav-links"
        aria-label="Main navigation"
      >
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </motion.header>
  );
}