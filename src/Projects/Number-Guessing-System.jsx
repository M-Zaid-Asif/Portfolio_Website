import { useState } from "react";

const numbers = [1, 2, 3, 4, 5];

const NumberGuessingSystem = () => {
  const [num, setNum] = useState(null);
  const [input, setInput] = useState("");

  function checkNumber() {
    const randomNumber = Math.floor(Math.random() * numbers.length);
    const obtainedNumber = numbers[randomNumber];

    if (input === "") {
      alert("Enter the number");
    } else if (input > 5 || input < 1) {
      alert("Kindly, Enter Number between 1 and 5");
      setInput("");
    } else if (input == obtainedNumber) {
      setNum(
        <span className="text-green-600">
          You have guessed the <strong>correct</strong> number:{" "}
          <strong>{obtainedNumber}</strong>
        </span>
      );
      setInput("");
    } else {
      setNum(
        <span className="text-red-600">
          You have guessed the <strong>wrong</strong> number{" "}
          <strong>"{input}"</strong>, correct one is{" "}
          <strong>{obtainedNumber}</strong>
        </span>
      );
      setInput("");
    }
  }

  function reset() {
    setNum("");
    setInput("");
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[600px] my-auto ">
        <h2 className="m-1 mx-6 font-semibold mt-3 text-xl lg:text-center">
          Guess the Number
        </h2>
        <div className="guess-number border border-black rounded-2xl p-4 flex flex-col w-3/4 sm:w-[80%] lg:w-[60%] mt-4 items-center shadow-md shadow-blue-100">
          <div className="flex flex-col [width:95%] sm:w-5/6 my-2">
            <label htmlFor="input_num" className="">
              Enter a Number
            </label>
            <input
              type="number"
              id="input"
              name="input_num"
              value={input}
              min={1}
              max={5}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Guess number from 1 to 5"
              className="[width:95%] mt-2 px-1 py-0.5 border-black border rounded-lg"
            />
            <button
              onClick={checkNumber}
              className="bg-sky-500 [width:95%] rounded-lg mt-5 py-1 font-bold text-white mb-2"
            >
              Submit
            </button>
            <button
              onClick={reset}
              className="bg-red-500 [width:95%] rounded-lg py-1 font-bold text-white mb-2"
            >
              Reset
            </button>
          </div>

          <p>{num}</p>
        </div>
      </div>
    </>
  );
};

export default NumberGuessingSystem;
