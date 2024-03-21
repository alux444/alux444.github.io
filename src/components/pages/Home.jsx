import { useContext, useEffect, useState } from "react";
import { ColourContext, PageContext, TransitionContext } from "../Views";
import CV from "../../assets/cv.pdf";
import PROFILEPICTURE from "../../assets/me.jpeg";
import Socials from "../misc/Socials";
import { colours } from "../../util/colours";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { page, setPage } = useContext(PageContext);
  const { transition, setTransition } = useContext(TransitionContext);
  const { setColour } = useContext(ColourContext);

  useEffect(() => {
    if (transition) {
      setIsOpen(false);
    } else if (page === "home") {
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
    <div className={`flex flex-col h-full border=2 gap-3 max-w-[90vw] xs:max-w-[80vw] sm:max-w-[60vw] md:max-w-[60vw] lg:max-w-[50vw] xl:max-w-[45vw] ${isOpen ? "content-open" : "content-closed"}`}>
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <img src={PROFILEPICTURE} alt="alex" className="w-44 h-44" loading="lazy" />
        <div className="flex flex-col flex-wrap">
          <p>Hey - I&#39;m Alex.</p>
          <p>
            I&#39;m a penultimate-year software engineering student at the University of Auckland and the industry lead for{" "}
            <a className="text-rose-200 hover:text-rose-400" href="https://sesa.org.nz/" target="_blank">
              SESA.
            </a>
          </p>
          <p>
            I also work part time at{" "}
            <a className="text-rose-200 hover:text-rose-400" href="https://www.spark.co.nz/" target="_blank">
              Spark NZ
            </a>{" "}
            as a software engineer.
          </p>

          <br />
          <p>I&#39;m enthusiastic about everything related to technology and eager to explore any opportunities that allow me to expand my knowledge and skills.</p>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-1 items-center">
        <a className="text-rose-200 hover:text-rose-400 text-xl" href={CV} download="alex-liang-cv.pdf" target="_blank">
          Download Résumé
        </a>
        <Socials />
      </div>
      <hr />
      <button className="text-rose-200 hover:text-rose-400 text-xl text-center" onClick={() => changePage("experience")}>
        &lt; My Experience &gt;
      </button>
    </div>
  );
};

export default Home;
