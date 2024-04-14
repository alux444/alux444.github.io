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
        <div className="text-sm">
          <p>· Increased test case coverage by over 300% by delivering 80+ automated test scripts to production.</p>
          <p>· Automated 50+ hours worth of manual testing labour in every test suite run.</p>
          <p>· Utilised node libraries to develop scripts for the generation of test data and files.</p>
          <p>· Set up scheduled Azure pipelines for automated repopulation of consumable test data.</p>
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
          <p>Auckland, NZ · Nov 2024 - Feb 2024</p>
        </div>
        <div className="text-sm">
          <p>· Delivered 40+ automated, end-to-end test scripts to production using Playwright.</p>
          <p>· Improved test reliability by optimising existing test scripts, resulting in a 5x decrease in flakiness.</p>
          <p>· Designed and deployed an Azure Power App to display test results from an Azure storage container.</p>
          <p>· Designed and managed test data using Microsoft SQL Server.</p>
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
