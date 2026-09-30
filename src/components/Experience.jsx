import { experiences } from "../data/projectsSkills";
import "../experience.css"
export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <p className="section-label">
        04 / EXPERIENCE
      </p>
      <h2 className="experience-title">
        BUILDING PRODUCTS.
        <br />
        SOLVING PROBLEMS.
      </h2>
      <div className="experience-timeline">
        {experiences.map((experience) => (
          <div
            className="experience-item"
            key={experience.id}
          >
            <div className="experience-period">
              {experience.period}
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <div>
                  <h3>{experience.role}</h3>
                  <p>{experience.company}</p>
                </div>
                <span>{experience.location}</span>
              </div>
              <p className="experience-description">
                {experience.description}
              </p>
              <ul className="experience-highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="experience-tech">
                {experience.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
