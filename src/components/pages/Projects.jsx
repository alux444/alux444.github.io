import { useContext, useEffect, useState } from "react";
import { PageContext, TransitionContext } from "../Views";

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
    <div className={`grid grid-cols-1 gap-3 max-w-[90vw] ${isOpen ? "content-open" : "content-closed"}`}>
      <p>tracktrekker</p>
    </div>
  );
};

export default Projects;
