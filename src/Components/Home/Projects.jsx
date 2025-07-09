import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    { name: "Rock-Scissor-Paper", path: "/rock-scissor-paper" },
    { name: "Tip-Calculator", path: "/tip-calculator" },
    { name: "BMI-Calculator", path: "/bmi-calculator" },
    { name: "Height-Conversion", path: "/height-conversion" },
    { name: "Arithmetic-Calculator", path: "/arithmetic-calculator" },
    { name: "Random-Quote-Generator", path: "/random-quote-generator" },
    { name: "Modal", path: "/modal" },
    { name: "Number-Guessing-System", path: "/number-guessing-system" },
    { name: "Word-Counter", path: "/word-counter" },
    { name: "Counter", path: "/counter" },
    { name: "Toss-Coin", path: "/toss-coin" },
    { name: "Background-Color-Changer", path: "/background-color-changer" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <div
      className="py-20 flex flex-col items-center w-[95%] m-auto"
      id="projects"
    >
      <h2 className="text-center text-3xl sm:text-6xl">Projects</h2>
      <div className="div mt-5 w-[98%]">
        {projects.map((project) => (
          <Link
            to={project.path}
            key={project.name}
            className="project_div"
          >
            {project.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
