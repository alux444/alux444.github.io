import TypewriterTitle from "./TypewriterTitle";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="flex flex-col gap-1 mt-2 mb-4 justify-center align-center items-center font-mono">
      <h1>Alex Liang</h1>
      <TypewriterTitle />
      <NavBar />
    </div>
  );
};

export default Header;
