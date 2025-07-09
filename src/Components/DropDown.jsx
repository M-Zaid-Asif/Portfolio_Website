import "../App.css";
import { Link } from "react-router-dom"

export const DropDown = ({ setIsDropdownHidden }) => {
  function handleClick() {
    setIsDropdownHidden((prevState) => !prevState);
    document.body.classList.remove("overflow-hidden");
    console.log("Clicked");
  }

  return (
    <div className="min-h-screen sm:hidden flex  justify-center bg-white text-black">
      <ul className="flex flex-col h-3/5 w-3/4">
        <li className="drop">
          <Link onClick={handleClick} to="/#home">
            Home
          </Link>
        </li>
        <li className="drop">
          <Link onClick={handleClick} to="/#about">
            About
          </Link>
        </li>
        <li className="drop">
          <Link onClick={handleClick} to="/#projects">
            Projects
          </Link>
        </li>
        <li className="drop">
          <Link onClick={handleClick} to="/#contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
