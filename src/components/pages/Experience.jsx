import { useContext, useEffect, useState } from "react";
import { PageContext, TransitionContext } from "../Views";

const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { page } = useContext(PageContext);
  const {transition} = useContext(TransitionContext);

  useEffect(() => {
    if (transition) {
      setIsOpen(false);
    } else if (page === "experience") {
      setIsOpen(true);
    }
  }, [page, transition]);

  return (
    <div className={`flex flex-col justify-center h-full grow gap-3 max-w-[90vw] ${isOpen ? "content-open" : "content-closed"}`}>
      <h2 className="text-3xl">experience</h2>
      < br/>

      <div className="grid grid-cols-1 gap-3">
        <div className="grid grid-cols-1 minmax(auto, 1fr)">
          <h4 className="text-xl">
            software engineer @{" "}
            <a className="text-cyan-100" href="https://www.spark.co.nz/" target="_blank">
              spark nz
            </a>
          </h4>
          <p>auckland, nz · feb 2024 - present</p>
        </div>
        <div className="text-sm">
          <p>Continued as a primary contributor and maintainer of the ERP Test Suite.</p>
          <p>Utilised node libraries to develop scripts for the generation of test data and files.</p>
          <p>Set up scheduled Azure pipelines for automated repopulation of consumable test data.</p>
        </div>
      </div>

      <hr/>

      <div className="grid grid-cols-1 gap-3">
        <div className="grid grid-cols-1 minmax(auto, 1fr)">
          <h4 className="text-xl">
            software engineer intern @{" "}
            <a className="text-cyan-100" href="https://www.spark.co.nz/" target="_blank">
              spark nz
            </a>
          </h4>
          <p>auckland, nz · nov 2024 - feb 2024</p>
        </div>
        <div className="text-sm">
          <p>Delivered over 40 automated, end-to-end test scripts to production.</p>
          <p>Designed and deployed an Azure Power App to display test results from an Azure storage container.</p>
          <p>Collaborated with QA engineers and manual testers to automate tests cases using Playwright.</p>
          <p>Designed and managed test data using Microsoft SQL Server.</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;