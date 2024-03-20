import { useContext, useEffect, useState } from "react";
import { PageContext, TransitionContext } from "../Views";
import CV from "../../assets/cv.pdf";
import PROFILEPICTURE from "../../assets/me.jpeg";

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
    <div className={`flex flex-col h-full border=2 gap-3 max-w-[90vw] ${isOpen ? "content-open" : "content-closed"}`}>
      <a href={CV} rel="noopener noreferrer" target="_blank">
        View CV
      </a>
      <div className="flex gap-1">
      <p>Linkedin</p>
      <p>Github</p>
      <p>Email</p>
      </div>
      <img src={PROFILEPICTURE} alt="alex" className="w-40 h-40" loading="lazy"/>
        <div className="flex flex-col">
          <p>hey - my names alex.</p>
          <p>im a software engineering student at the university of auckland.</p>
          <p>i also work part time at spark nz as a software engineer.</p>
          <p>im passionate about all things tech, and am open to any opportunities that i can learn from.</p>
        </div>
    </div>
  );
};

export default Home;
