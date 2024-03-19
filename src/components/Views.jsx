import { createContext, useState } from "react";
import ThreeBackground from "./ThreeBackground";
import TypewriterTitle from "./TypewriterTitle";
import NavBar from "./NavBar";

export const PageContext = createContext({
  page: "home",
  setPage: () => {},
});

export const ColourContext = createContext({
  color: ["#641220", "#6e1423", "#85182a"],
  setColor: () => {},
});

const Views = () => {
  const [page, setPage] = useState("home");
  const [colour, setColour] = useState(["#641220", "#6e1423", "#85182a"]);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <ColourContext.Provider value={{ colour, setColour }}>
        <div className="flex flex-col justify-center items-center align-center h-screen w-screen">
          <div className="background-container">
            <ThreeBackground />
          </div>
          <h1 className="text-red">alex liang</h1>
          <TypewriterTitle />
          <NavBar />
        </div>
      </ColourContext.Provider>
    </PageContext.Provider>
  );
};

export default Views;
