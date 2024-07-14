import { useContext, useEffect, useState } from "react";
import { ColourContext, PageContext, TransitionContext } from "../Views";
import CV from "../../assets/cv.pdf";
import { colours } from "../../util/colours";

const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { page, setPage } = useContext(PageContext);
  const { transition, setTransition } = useContext(TransitionContext);
  const { setColour } = useContext(ColourContext);

  useEffect(() => {
    if (transition) {
      setIsOpen(false);
    } else if (page === "experience") {
      setIsOpen(true);
    }
  }, [page, transition]);

  async function changePage(newPage) {
    setTransition(true);
    await new Promise((resolve) => setTimeout(resolve, 300)); // adjust this value to match your exit transition duration
    setPage(newPage);
    await new Promise((resolve) => setTimeout(resolve, 300)); // adjust this value to match your entrance transition duration
    setTransition(false);
    setColour(colours[newPage]);
  }

  return (
    <div className={`flex flex-col justify-center h-full grow gap-3 max-w-[90vw] ${isOpen ? "content-open" : "content-closed"}`}>
      <h2 className="text-3xl text-center">Experience</h2>
      <a className="text-cyan-100 hover:text-cyan-300 text-center" href={CV} download="alex-liang-cv.pdf" target="_blank">
        Download full résumé
      </a>
      <br />

      <div className="grid grid-cols-1 gap-3">
        <div className="grid grid-cols-1 minmax(auto, 1fr)">
          <h4 className="text-xl">
            Software Engineer @{" "}
            <a className="text-cyan-100 hover:text-cyan-300" href="https://www.spark.co.nz/" target="_blank">
              Spark NZ
            </a>
          </h4>
          <p>Auckland, NZ · Feb 2024 - Present</p>
        </div>
      </div>

      <hr />

      <div className="grid grid-cols-1 gap-3">
        <div className="grid grid-cols-1 minmax(auto, 1fr)">
          <h4 className="text-xl">
            Software Engineer Intern @{" "}
            <a className="text-cyan-100 hover:text-cyan-300" href="https://www.spark.co.nz/" target="_blank">
              Spark NZ
            </a>
          </h4>
          <p>Auckland, NZ · Nov 2023 - Feb 2024</p>
        </div>
      </div>

      <br />

      <button className="text-cyan-100 hover:text-cyan-300 text-xl text-center" onClick={() => changePage("projects")}>
        &lt; My Projects &gt;
      </button>
    </div>
  );
};

export default Experience;
