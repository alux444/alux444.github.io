import { useContext, useEffect, useState } from "react";
import { ColourContext, PageContext, TransitionContext } from "../Views";
import { projects } from "../../util/projects";
import { colours } from "../../util/colours";
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
  const { page, setPage } = useContext(PageContext);
  const { transition, setTransition } = useContext(TransitionContext);
  const { setColour } = useContext(ColourContext);

  async function changePage(newPage) {
    setTransition(true);
    await new Promise((resolve) => setTimeout(resolve, 300)); // adjust this value to match your exit transition duration
    setPage(newPage);
    await new Promise((resolve) => setTimeout(resolve, 300)); // adjust this value to match your entrance transition duration
    setTransition(false);
    setColour(colours[newPage]);
  }

  useEffect(() => {
    if (transition) {
      setIsOpen(false);
    } else if (page === "projects") {
      setIsOpen(true);
    }
  }, [page, transition]);

  return (
    <div className={`flex flex-col h-full items-center max-w-[90vw] mt-4 ${isOpen ? "content-open" : "content-closed"}`}>
      <h2 className="text-3xl">Projects</h2>
      <br />
      <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
        {projects.map((project, index) => (
          <ProjectDisplay info={project} img={projectImages[project.imgname]} key={index} />
        ))}
      </div>
      <button className="text-indigo-200 hover:text-indigo-400 text-xl text-center mt-5 mb-3" onClick={() => changePage("home")}>
        &lt; Home &gt;
      </button>
    </div>
  );
};

export default Projects;
