import React from "react";
import TypewriterTitle from "./TypewriterTitle";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="flex flex-col gap-1 justify-center align-center items-center">
      <h1 className="text-red">alex liang</h1>
      <TypewriterTitle />
      <NavBar />
    </div>
  );
};

export default Header;
