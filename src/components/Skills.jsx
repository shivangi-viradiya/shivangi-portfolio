import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "../data/projectsSkills";
import "../gsap.css";
gsap.registerPlugin(ScrollTrigger);
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);
  const skillsRef = useRef(null);
  // Open / close category
  const handleCategory = (id) => {
    setActiveCategory(activeCategory === id ? null : id);
  };
  // GSAP animation when skill categories enter the viewport
  useEffect(() => {
    const ctx = gsap.context(() => {
      const groups = gsap.utils.toArray(".skill-group");
      groups.forEach((group) => {
        gsap.from(group, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          scrollTrigger: {
            trigger: group,
            start: "top 85%",
          },
        });
      });
    }, skillsRef);
    return () => ctx.revert();
  }, []);
  // GSAP animation when a category is opened
  useEffect(() => {
    if (!activeCategory) return;
    const ctx = gsap.context(() => {
      gsap.from(".skill-item", {
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.08,
      });
    }, skillsRef);
    return () => ctx.revert();
  }, [activeCategory]);
  return (
    <section
      id="skills"
      className="skills-section"
      ref={skillsRef}
    >
      <p className="section-label">02 / SKILLS</p>
      <h2 className="skills-title">
        TECHNOLOGIES I
        <br />
        WORK WITH.
      </h2>
      <div className="skills-container">
        {skills.map((group, index) => (
          <div
            key={group.id}
            className="skill-group"
          >
            <div
              className="skill-category"
              onClick={() => handleCategory(group.id)}
            >
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{group.category}</h3>
              <span className="skill-toggle">
                {activeCategory === group.id ? "×" : "+"}
              </span>
            </div>
            {activeCategory === group.id && (
              <div className="skill-items">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-item"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}