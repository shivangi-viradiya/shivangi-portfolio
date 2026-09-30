import { CardBody, CardContainer, CardItem } from "./ui/3d-card"
export default function ProjectCard({ project }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className={`relative group/card border border-white/20 w-full h-auto rounded-xl p-6
      bg-black 
          ${project.featured
          ? "border-blue-400/50"
          : "border-white/20"}`}>
        {project.featured &&
          <CardItem
            translateZ="40"
            className="absolute top-5 right-5">
            <span className="text-[10px] tracking-[2px] text-blue-400 border border-blue-400/40 rounded-full px-3 py-1">
              FEATURED
            </span>
          </CardItem>}
        <CardItem
          translateZ="30"
          className="text-blue-400 text-xs tracking-[3px]">
          {project.number} / PROJECT
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-white"
        >
          {project.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-400 text-sm mt-2"
        >
          {project.subtitle}
        </CardItem>
        <CardItem
          translateZ="100"
          className="w-full mt-6"
        >
          <img
            src={project.image}
            alt={`${project.title} project preview`} />
        </CardItem>
        <CardItem
          as="p"
          translateZ="40"
          className="text-gray-400 text-sm leading-6 mt-6">
          {project.description}
        </CardItem>
        <CardItem
          translateZ="50"
          className="flex flex-wrap gap-2 mt-5">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="border border-white/20 rounded-full px-3 py-1 text-xs text-gray-300"
            >{technology}
            </span>))}
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          {project.live &&
            <CardItem
              translateZ="30"
              translateX={-20}
              as="a"
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white"
            >
              VIEW LIVE ↗
            </CardItem>}
          {project.github &&
            <CardItem
              translateZ="30"
              translateX={-20}
              as="a"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white">
              GitHub ↗
            </CardItem>}
        </div>
      </CardBody>
    </CardContainer>
  )
}
