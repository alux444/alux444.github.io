import { useContext } from "react";
import { PageContext } from "../Views";
import PropTypes from "prop-types";

const NavButton = ({ pageName, changePage }) => {
  const { page } = useContext(PageContext);

  async function run() {
    await changePage(pageName);
  }

  return (
    <div className="relative text-center flex items-center text-center justify-center">
      <p
        style={{
          position: "absolute",
          opacity: pageName === page ? 1 : 0,
          transform: pageName === page ? "scale(1)" : "scale(0.5)",
          transition: "opacity 0.5s, transform 0.5s",
        }}
        className="text-4xl"
      >
        ·
      </p>
      <button
        style={{
          opacity: pageName === page ? 0 : 1,
          transform: pageName === page ? "scale(0.5)" : "scale(1)",
          transition: "opacity 0.5s, transform 0.5s, color 0.3s ease",
        }}
        className={`${page === pageName && "text-xl"}  
        ${page == "home" && "text-rose-200 hover:text-rose-400"}
        ${page == "experience" && "text-cyan-100 hover:text-cyan-300"}
        ${page == "projects" && "text-indigo-200 hover:text-indigo-400"}
        `}
        onClick={() => run()}
      >
        {pageName.charAt(0).toUpperCase() + pageName.slice(1)}
      </button>
    </div>
  );
};

NavButton.propTypes = {
  pageName: PropTypes.string.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default NavButton;
