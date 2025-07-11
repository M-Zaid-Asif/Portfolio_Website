import { useState } from "react";

const WordCounter = () => {
  const [count, setCount] = useState(0);
  const [words, setWords] = useState("");

  function countWords() {
    if (words === "") {
      alert("Please type/paste the text");
    } else {
      const countedWords = words.trim().split(/\s+/).length;
      setCount(countedWords);
    }
  }

  function reset() {
    setWords("");
    setCount(0);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[600px] ">
        <h2 className="text-xl mx-6 font-semibold xl:text-center mt-3">
          Word Counter
        </h2>
        <div className="textarea border rounded-2xl border-black shadow-md shadow-blue-100 flex flex-col w-[95%] sm:w-3/4 lg:w-1/2 p-3 mt-5">
          <div className="flex flex-row justify-between gap-2">
            <p>Type/Paste your text below</p>
            <p className="mr-3">
              Total Words: <strong>{count}</strong>
            </p>
          </div>

          <textarea
            name="textarea"
            id="textarea"
            value={words}
            onChange={(e) => setWords(e.target.value)}
            className="mt-2 [width:98%] border border-gray-300 p-1 focus:border-gray-700 focus:outline-none mb-2"
          ></textarea>
          <div className="flex flex-col sm:flex-row ">
            <button
              onClick={countWords}
              className="border border-sky-500 mt-2 w-50 m-auto rounded-xl bg-sky-500 hover:bg-sky-600 py-1 text-white font-bold hover:cursor-pointer"
            >
              Submit
            </button>
            <button
              onClick={reset}
              className="border border-red-500 mt-2 w-50 m-auto rounded-xl hover:bg-red-600 bg-red-500 py-1 text-white font-bold  hover:cursor-pointer"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WordCounter;
