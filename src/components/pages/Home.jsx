import { useContext, useEffect, useState } from "react";
import { PageContext, TransitionContext } from "../Views";
import CV from "../../assets/cv.pdf";

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
    <div className={`grid grid-cols-1 gap-3 max-w-[90vw] ${isOpen ? "content-open" : "content-closed"}`}>
      <a href={CV} rel="noopener noreferrer" target="_blank">
        View CV
      </a>
      <p>Linkedin</p>
      <p>Github</p>
    </div>
  );
};

export default Home;
