import { useState } from "react";
import BMW from "./assets/BMW.png";
import BYD from "./assets/BYD.png";
import Mercedes from "./assets/Mercedes.png";
import "../Projects.css";

const cars = [BMW, BYD, Mercedes];

function App() {
  const [index, setIndex] = useState(0);

  function nextOne() {
    setIndex((prev) => (prev + 1) % cars.length);
  }

  function prevOne() {
    setIndex((prev) => (prev - 1 + cars.length) % cars.length);
  }

  function bmw() {
    setIndex(0);
  }

  function byd() {
    setIndex(1);
  }

  function mercedes() {
    setIndex(2);
  }

  return (
    <>
      <div className="flex flex-col w-[100%] sm:flex-row sm:w-[90%] mx-auto justify-center items-center sm:gap-2 px-2 xl:w-[60%] xl:mx-auto">
        <button className="btn_img hidden sm:block" onClick={prevOne}>
          Prev
        </button>
        <img
          className="w-[85%] mt-5 mb-2 h-auto bg-cover bg-center"
          src={cars[index]}
        />
        <button className="btn_img hidden sm:block" onClick={nextOne}>
          Next
        </button>
        <div className="flex flex-row justify-center items-center mt-1 mb-2">
          <ul className="block sm:hidden">
            <button
              className="w-2 h-2 mx-1 border border-white rounded-4xl focus:bg-white hover:cursor-pointer"
              onClick={bmw}
            ></button>
            <button
              className="w-2 h-2 mx-1 border border-white rounded-4xl focus:bg-white hover:cursor-pointer"
              onClick={byd}
            ></button>
            <button
              className="w-2 h-2 mx-1 border border-white rounded-4xl focus:bg-white hover:cursor-pointer"
              onClick={mercedes}
            ></button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
