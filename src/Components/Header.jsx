import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { DropDown } from "./DropDown";
import { FaChevronDown } from "react-icons/fa";
import "../App.css";

const Header = () => {
  const [isDropdownHidden, setIsDropdownHidden] = useState(true);

  function toggleDropdown() {
    setIsDropdownHidden((prevState) => !prevState);
  }

  useEffect(() => {
    if (!isDropdownHidden) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isDropdownHidden]);

  return (
    <>
      <header className="flex justify-between items-center px-6 h-20 sm:flex-row sm:w-[100%] sm:items-center border-b border-b-gray-200">
        <p className="text-2xl font-semibold pointer">Zaid.dev</p>
        <nav className="hidden sm:block ">
          <div className="flex">
            <Link className="as mx-5 pointer-cursor" to="/#home">
              Home
            </Link>
            <Link className="as mx-5 pointer-cursor" to="/#about">
              About
            </Link>
            <Link className="as mx-5 pointer-cursor" to="/#projects">
              Projects
            </Link>
            <Link className="as mx-5 pointer-cursor" to="/#contact">
              Contact
            </Link>
          </div>
        </nav>
        <div>
          <button className="">
            <FaChevronDown
              onClick={toggleDropdown}
              className={`sm:hidden cursor-pointer transform transition-transform duration-300 ${
                !isDropdownHidden ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </header>
      {!isDropdownHidden && (
        <DropDown setIsDropdownHidden={setIsDropdownHidden} />
      )}
    </>
  );
};

export default Header;
