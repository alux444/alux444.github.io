import { useContext } from "react";
import { ColourContext, PageContext } from "./Views";
import { colours } from "../util/colours";

const NavBar = () => {
  const { page, setPage } = useContext(PageContext);
  const { setColour } = useContext(ColourContext);

  const handleClick = (page) => {
    console.log("run");
    setPage(page);
    setColour(colours[page]);
  };

  return (
    <div className="flex flex-row gap-2">
      <button className={`${page == "cv" && "text-xl"}`} onClick={() => handleClick("cv")}>
        cv
      </button>
      <button className={`${page == "about" && "text-xl"}`} onClick={() => handleClick("about")}>
        about
      </button>
      <button className={`${page == "experience" && "text-xl"}`} onClick={() => handleClick("experience")}>
        experience
      </button>
      <button className={`${page == "projects" && "text-xl"}`} onClick={() => handleClick("projects")}>
        projects
      </button>
    </div>
  );
};

export default NavBar;
