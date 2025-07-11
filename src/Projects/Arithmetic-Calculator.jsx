import { useState } from "react";

const ArithmeticCalculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "Ans") {
      try {
        setInput(eval(input).toFixed(2));
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "*",
    "-",
    "+",
    "/",
    "C",
    "Ans",
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[600px]">
        <h2 className="text-2xl mx-6 my-2 lg:text-center font-semibold">
          Calculator
        </h2>
        <div className="flex flex-col w-[95%] sm:w-[35%] lg:w-[40%] h-auto py-4 justify-center items-center mx-auto gap-2 border border-black shadow-blue-100 shadow-md">
          <input
            type="text"
            value={input}
            placeholder="Click on Numpad"
            readOnly
            className="w-48 border border-gray-800 rounded-lg flex m-auto mb-2 text-xl h-10 px-1 text-white "
          />
          <div
            className="grid
          [grid-template-columns:repeat(4,40px)]
          [grid-template-rows:repeat(4,40px)]
          justify-center
          gap-[10px] "
          >
            {buttons.map((btn) => (
              <button
                key={btn}
                className="border border-sky-500 hover:bg-sky-600 cursor-pointer rounded-lg bg-sky-500"
                onClick={() => handleClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArithmeticCalculator;
