import { useContext } from "react";
import { PageContext } from "../Views";

// eslint-disable-next-line react/prop-types
const NavButton = ({ pageName, changePage }) => {
  const { page } = useContext(PageContext);
  
  return (
    <div className="relative text-center flex items-center text-center justify-center">
      <p 
        style={{ 
          position: 'absolute',
          opacity: pageName === page ? 1 : 0, 
          transform: pageName === page ? 'scale(1)' : 'scale(0.5)', 
          transition: 'opacity 0.5s, transform 0.5s' 
        }}
        className="text-4xl"
      >
        ·
      </p>
      <button 
        style={{ 
          opacity: pageName === page ? 0 : 1, 
          transform: pageName === page ? 'scale(0.5)' : 'scale(1)', 
          transition: 'opacity 0.5s, transform 0.5s' 
        }} 
        className={`${page === pageName && "text-xl"}`} 
        onClick={() => changePage(pageName)}
      >
        {pageName}
      </button>
    </div>
  );
  };

export default NavButton;
