import { useState, useEffect, useRef } from "react";

const colors = [
  "#000000", // Pure Black
  "#0a0a0a", // Almost black
  "#1a1a1a", // Very dark gray
  "#2e2e2e", // Dark charcoal
  "#3f3f3f", // Charcoal gray
  "#4b4b4b", // Medium-dark gray
  "#5c5c5c", // Dim gray
  "#6e6e6e", // Slate gray
];

const BackgroundColorChanger = () => {
   const [color, setColor] = useState("#6e6e6e");
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.style.backgroundColor = color;
  }, [color]);

  const generateRandomColor = () => {
    const generateColor = Math.floor(Math.random() * colors.length);
    var obtainedColor = colors[generateColor];
    changeBackground(obtainedColor);
  };

  function changeBackground(obtainedColor) {
    if (color !== obtainedColor) {
      setColor(obtainedColor);
    }
  }
  return (
      <>
      <div ref={divRef} className="w-full h-screen flex justify-center items-center mx-auto">
        <button
          className="bg-sky-500 hover:bg-sky-700 hover:cursor-pointer w-54 h-8 rounded-lg text-white font-medium"
          onClick={generateRandomColor}
        >
          Background Color Changer
        </button>
      </div>
    </>
  )
}

export default BackgroundColorChanger