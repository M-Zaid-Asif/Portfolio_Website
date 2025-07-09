import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const About = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // Show button after scrolling down 300px
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 flex justify-center items-center fixed bottom-5 right-5 border border-white bg-blue-600 text-white rounded-full hover:bg-blue-700 transition hover:cursor-pointer"
        >
          <FaArrowUp size={20} />
        </button>
      )}
      <div
        className="about h-screen flex flex-col sm:justify-center sm:items-center w-[95%] mx-auto px-15 text-center mt-10"
        id="about"
      >
        <h1 className="text-center text-3xl sm:text-6xl">About Me</h1>
        <p className="py-2 text-xl">
          I'm a passionate React developer who loves building clean, responsive
          web interfaces. I'm currently learning and creating very simple
          projects with JavaScript, React, and Tailwind CSS.
        </p>
        <p className="py-2 text-xl">
          I'm actively looking for internship or junior developer opportunities
          where I can grow, learn from others, and contribute to meaningful
          work.
        </p>
      </div>
    </>
  );
};

export default About;
