import { useContext, useEffect, useState } from "react";
import { PageContext, TransitionContext } from "../Views";
import PROFILEPICTURE from "../../assets/me.jpeg";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { page } = useContext(PageContext);
  const {transition} = useContext(TransitionContext);

  useEffect(() => {
    if (transition) {
      setIsOpen(false);
    } else if (page === "about") {
      setIsOpen(true);
    }
  }, [page, transition]);

  return (
    <div className={`grid grid-cols-1 gap-3 max-w-[90vw] ${isOpen ? "content-open" : "content-closed"}`}>
      <h2 className="text-3xl">about</h2>
      <div className="flex flex-row gap-2">
      <img src={PROFILEPICTURE} alt="alex" className="w-40 h-40" loading="lazy"/>
        <div className="flex flex-col">
          <p>hey - my names alex.</p>
          <p>im a software engineering student at the university of auckland.</p>
          <p>i also work part time at spark nz as a software engineer.</p>
          <p>im passionate about all things tech, and am open to any opportunities that i can learn from.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
