import { useContext } from "react";
import NavButton from "./misc/NavButton";
import { ColourContext, PageContext, TransitionContext } from "./Views";
import { colours } from "../util/colours";

const NavBar = () => {
  const pages = ["home", "experience", "projects"];
  const { setPage } = useContext(PageContext);
  const { setColour } = useContext(ColourContext);
  const { setTransition } = useContext(TransitionContext);

  async function changePage(newPage) {
    setTransition(true);
    await new Promise((resolve) => setTimeout(resolve, 300)); // adjust this value to match your exit transition duration
    setPage(newPage);
    await new Promise((resolve) => setTimeout(resolve, 300)); // adjust this value to match your entrance transition duration
    setTransition(false);
    setColour(colours[newPage]);
  }

  return (
    <div className="flex flex-row gap-3">
      {pages.map((page) => (
        <NavButton pageName={page} changePage={changePage} key={page} />
      ))}
    </div>
  );
};

export default NavBar;
