import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ProjectDisplay = ({ info, img }) => {

  const [isWide, setIsWide] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth / window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={`flex ${isWide > 1.35 ? 'w-[40vw] items-center' : 'w-[80vw]'} flex-col ${isWide < 0.5 && 'flex-row'} md:flex-row gap-3`}>
      <img src={img} alt={info.title} loading="lazy" className="max-h-[50vh] sm:max-h-[40vh] md:max-h-[20vh] max-w-[90vw] md:max-w-[40vw] lg:max-w-[50vw] object-cover " />
      <div className="flex flex-col justify-center text-start">
        <p className="text-xl">{info.title}</p>
        <div className="w-fit">
          <p>{info.description}</p>
          <hr />
        </div>
        <p className="italic text-sm">{info.technologies}</p>
        <div className="flex gap-2 flex-wrap">
          {info.link && (
            <a className="text-indigo-200 hover:text-indigo-400" href={info.link} target="_blank">
              Website
            </a>
          )}
          {info.github && info.link && <span> · </span>}
          {info.github && (
            <a className="text-indigo-200 hover:text-indigo-400" href={info.github} target="_blank">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectDisplay.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    imageurl: PropTypes.string.isRequired,
    github: PropTypes.string.notRequired,
    link: PropTypes.string.notRequired,
  }),
  img: PropTypes.string.isRequired,
};

export default ProjectDisplay;
