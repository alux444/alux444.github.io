import { useContext, useEffect, useState } from "react";
import { PageContext, TransitionContext } from "../Views";
import { projects } from "../../util/projects";
import ProjectDisplay from "../misc/ProjectDisplay";
import tracktrekker from "../../assets/tracktrekker.png";
import kiwimart from "../../assets/kiwimart.png";
import chatapp from "../../assets/chatapp.png";
import projectfitness from "../../assets/projectfitness.png";
import ratdungeon from "../../assets/ratdungeon.png";
import weatherapp from "../../assets/weatherapp.png";

const projectImages = {
  tracktrekker: tracktrekker,
  kiwimart: kiwimart,
  chatapp: chatapp,
  projectfitness: projectfitness,
  ratdungeon: ratdungeon,
  weatherapp: weatherapp,
};

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { page } = useContext(PageContext);
  const {transition} = useContext(TransitionContext);

  useEffect(() => {
    if (transition) {
      setIsOpen(false);
    } else if (page === "projects") {
      setIsOpen(true);
    }
  }, [page, transition]);

  return (
    <div className={`flex flex-col h-full max-w-[90vw] ${isOpen ? "content-open" : "content-closed"}`}>
      <h2 className="text-3xl">projects</h2>
      < br/>
      <div className="flex flex-col gap-2 mb-8">
        {projects.map((project, index) => (
          <ProjectDisplay info={project} img={projectImages[project.imgname]} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
