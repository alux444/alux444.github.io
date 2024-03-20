import { createContext, useState } from "react";
import ThreeBackground from "./ThreeBackground";
import TypewriterTitle from "./TypewriterTitle";
import NavBar from "./NavBar";
import Experience from "./pages/Experience";
import Header from "./Header";
import About from "./pages/About";
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
          <div className="flex flex-col justify-center items-center align-center min-h-screen w-screen">
            <div className="background-container">
              <ThreeBackground />
            </div>
            <Header />
            {page == "home" && <Home />}
            {page == "experience" && <Experience />}
            {page == "about" && <About />}
            {page == "projects" && <Projects />}
          </div>
        </TransitionContext.Provider>
      </ColourContext.Provider>
    </PageContext.Provider>
  );
};

export default Views;
