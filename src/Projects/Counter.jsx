import { useState } from "react";
import "../Projects.css";

const Counter = () => {
  var [count, setCount] = useState(0);

  function performAddition() {
    setCount(count + 1);
  }

  function performSubtraction() {
    setCount(count - 1);
  }

  function clear() {
    setCount(0);
  }

  return (
    <>
      <h2 className="text-2xl mx-6 my-2 lg:text-center font-semibold">Counter</h2>
      <div className=" flex border w-3/4 mx-auto border-black gap-2 justify-center items-center p-5 flex-col md:m-auto sm:[width:60%] xl:w-1/3 shadow-xl shadow-blue-100">
        <h3 className="text-2xl border-2 border-gray-400 h-15 rounded-lg w-[90%] flex items-center justify-center">
          {count}
        </h3>
        <div className="w-[90%] flex flex-col sm:flex sm:flex-row sm:justify-around">
          <button className="btn_counter  sm:w-[48%] bg-sky-500 hover:bg-sky-600 hover:cursor-pointer " onClick={performAddition}>
            +
          </button>

          <button className="btn_counter sm:w-[48%] bg-sky-500 hover:bg-sky-600 hover:cursor-pointer" onClick={performSubtraction}>
            -
          </button>
        </div>

        <button className="btn_counter w-[90%] bg-red-500 hover:bg-red-600 hover:cursor-pointer" onClick={clear}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
