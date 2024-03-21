import { useContext, useEffect, useState } from "react";
import { PageContext, TransitionContext } from "../Views";
import CV from "../../assets/cv.pdf";
import PROFILEPICTURE from "../../assets/me.jpeg";
import Socials from "../misc/Socials";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { page } = useContext(PageContext);
  const { transition } = useContext(TransitionContext);

  useEffect(() => {
    if (transition) {
      setIsOpen(false);
    } else if (page === "home") {
      setIsOpen(true);
    }
  }, [page, transition]);

  return (
    <div className={`flex flex-col h-full border=2 gap-3 max-w-[90vw] xs:max-w-[80vw] sm:max-w-[60vw] md:max-w-[60vw] lg:max-w-[50vw] xl:max-w-[45vw] ${isOpen ? "content-open" : "content-closed"}`}>
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <img src={PROFILEPICTURE} alt="alex" className="w-44 h-44" loading="lazy" />
        <div className="flex flex-col flex-wrap">
          <p>hey - i'm alex.</p>
          <p>
            i'm a penultimate-year software engineering student at the university of auckland and the industry lead for{" "}
            <a className="text-rose-200 hover:text-rose-400" href="https://sesa.org.nz/" target="_blank">
              sesa.
            </a>
          </p>
          <p>i also work part time at <a className="text-rose-200 hover:text-rose-400" href="https://www.spark.co.nz/" target="_blank">
              spark nz
            </a> as a software engineer.</p>

          <br />
          <p>i'm enthusiastic about everything related to technology and eager to explore any opportunities that allow me to expand my knowledge and skills.</p>
        </div>
      </div>
      <hr/>
      <div className="flex flex-col gap-1 items-center">
      <a className="text-rose-200 hover:text-rose-400 text-xl" href={CV} rel="noopener noreferrer" target="_blank">
        view résumé
      </a>
      <Socials/>
      </div>
    </div>
  );
};

export default Home;
