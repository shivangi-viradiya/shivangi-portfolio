import { projects } from '../data/projectsSkills'
import ProjectCard from './ProjectCard'
import "../projects.css"
export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <p className="section-label">
        03 / PROJECTS
      </p>
      <div className="projects-heading">
        <h2>
          SELECTED
          <br />
          WORK.
        </h2>
        <p>
          Frontend projects exploring real-world APIs, state management,
          performance optimization, authentication, and interactive
          user experiences.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) =>
          <ProjectCard key={project.id} project={project} />
        )}
      </div>
    </section>
  )
}
