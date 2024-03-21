import { createContext, useState } from "react";
import ThreeBackground from "./ThreeBackground";
import Experience from "./pages/Experience";
import Header from "./Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export const PageContext = createContext({
  page: "home",
  setPage: () => {},
});

export const ColourContext = createContext({
  color: ["#641220", "#6e1423", "#85182a"],
  setColor: () => {},
});

export const TransitionContext = createContext({
  transition: false,
  setTransition: () => {},
});

const Views = () => {
  const [page, setPage] = useState("home");
  const [colour, setColour] = useState(["#641220", "#6e1423", "#85182a"]);
  const [transition, setTransition] = useState(false);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <ColourContext.Provider value={{ colour, setColour }}>
        <TransitionContext.Provider value={{ transition, setTransition }}>
          <div className="min-h-screen flex flex-col">
            <div className="background-container">
              <ThreeBackground />
            </div>
            <Header />
            <div className="flex grow flex-col mb-8 justify-center items-center align-center w-screen">
              {page == "home" && <Home />}
              {page == "experience" && <Experience />}
              {page == "projects" && <Projects />}
            </div>
          </div>
        </TransitionContext.Provider>
      </ColourContext.Provider>
    </PageContext.Provider>
  );
};

export default Views;
