import { useContext, useState } from "react";
import NavButton from "./misc/NavButton";
import { ColourContext, PageContext } from "./Views";
import {colours} from "../util/colours"

const NavBar = () => {
  const pages = ["cv", "about", "experience", "projects"];
  const {setPage} = useContext(PageContext);
  const {setColour} = useContext(ColourContext);

  const changePage = (newPage) => {
    setColour(colours[newPage]);
    setPage(newPage);
  };

  return (
    <div className="flex flex-row gap-2">
      {pages.map((page) => (
        <NavButton pageName={page} changePage={changePage} key={page} />
      ))}
    </div>
  );
};

export default NavBar;
