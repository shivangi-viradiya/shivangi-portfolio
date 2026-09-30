import { motion } from "motion/react";
import DigitalWave from "./DigitalWave";
import ParticleBackground from "./ParticleBackground";
import { coreSkills } from "../data/projectsSkills";
import "../hero.css";
const Hero = () => {
  return (
    <section id="home" className="hero">
      <ParticleBackground />
      <DigitalWave />
      <div className="hero-content">
        <div className="hero-heading">
          <motion.p
            className="hero-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}>
            FRONT-END DEVELOPER
          </motion.p>
          <h1 className="hero-title">
            <span className="title-mask">
              <motion.span
                className="title-line"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                BUILDING
              </motion.span>
            </span>
            <span className="title-mask">
              <motion.span
                className="title-line outline-text"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                DIGITAL
              </motion.span>
            </span>
            <span className="title-mask">
              <motion.span
                className="title-line"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                EXPERIENCES.
              </motion.span>
            </span>
          </h1>
        </div>
        <div className="hero-bottom">
          <motion.div
            className="hero-intro"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, }}>
            <p>
              I build responsive and interactive web experiences
              using React, JavaScript, and modern frontend technologies.
            </p>
            <a href="#projects" className="hero-link">
              VIEW MY WORK
              <span>↗</span>
            </a>
          </motion.div>
          <motion.div
            className="hero-tech"
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.1,
            }}>
            {coreSkills.slice(0, 5).map((skills) => <span key={skills.id}>{skills.title}</span>)}
          </motion.div>
        </div>
      </div>
    </section >
  );
};
export default Hero;