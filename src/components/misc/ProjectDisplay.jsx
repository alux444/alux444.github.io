import PropTypes from "prop-types";

const ProjectDisplay = ({ info, img }) => {
  return (
    <div className="flex flex-col xs:flex-row gap-3 w-[80vw] lg:w-[43vw] xl:w-[40vw]">
      <img src={img} alt={info.title} loading="lazy" className="max-h-[40vw] xs:max-h-[20vh] max-w-[90vw] object-cover " />
      <div className="flex flex-col justify-center">
        <p className="text-xl">{info.title}</p>
        <div className="w-fit">
          <p>{info.description}</p>
          <hr />
        </div>
        <p className="italic text-sm">{info.technologies}</p>
        <div className="flex gap-2">
          {info.link && (
            <a className="text-indigo-200 hover:text-indigo-400"  href={info.link} target="_blank">
              website
            </a>
          )}
          {info.github && info.link && <span> · </span>}
          {info.github && (
            <a className="text-indigo-200 hover:text-indigo-400" href={info.github} target="_blank">
              github
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
