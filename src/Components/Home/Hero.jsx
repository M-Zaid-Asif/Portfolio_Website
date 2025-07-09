import "../../App.css";

const Hero = () => {
  return (
    <>
      <div
        className="hero w-[100%] h-[100vh] mx-auto px-10 flex flex-col justify-center items-center gap-3"
        id="home"
      >
        <h1 className="text-center text-3xl sm:text-4xl">
          Beginner React developer building responsive and interactive web apps.
        </h1>
        <h2 className="text-center text-3xl sm:text-4xl">
          Looking for front-end internship opportunities.
        </h2>
        <div className="flex flex-col sm:flex-row gap-5 mt-2">
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero_btn bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded inline-block"
          >
            View CV
          </a>
          <a
            href="#contact"
            className="hero_btn text-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded inline-block"
          >
            Let's Get Connected
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
