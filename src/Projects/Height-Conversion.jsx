import { useState } from "react";

const HeightConversion = () => {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState("");
  const [initial, setInitial] = useState("");
  var [data, setData] = useState("");
  var [unit, setUnit] = useState("");
  const [status, setStatus] = useState(false);

  function convert() {
    setStatus(true);
    if (unit == "inches") {
      setInitial(data + " Inches, ");
      convertIntoFeet(data);
      setData("");
    } else if (unit == "feet") {
      setInitial(data + " Feet, ");
      convertIntoInches(data);
      setData("");
    } else {
      alert("One of the Button is supposed to be checked");
      setStatus(false);
    }
  }

  function convertIntoFeet(data) {
    const feet = data / 12;
    setValue(feet.toFixed(2));
    setSelected("Feet");
  }

  function convertIntoInches(data) {
    const inches = data * 12;
    setValue(inches.toFixed(2));
    setSelected("Inches");
  }

  function handleChange(e) {
    setUnit(e.target.value);
  }

  function reset() {
    setSelected("");
    setValue("");
    setInitial("");
    setUnit("");
    setData("");
    setStatus(false);
  }
  return (
    <>
      <h2 className="text-2xl my-2 mx-6 lg:text-center font-semibold">
        Height Conversion
      </h2>
      <div className="border border-black [width:90%] rounded-2xl p-4 max-w-full md:[width:80%] mx-auto my-4 flex flex-col shadow-md shadow-blue-100">
        <div className="flex flex-col p-2 w-[95%] mx-auto">
          <div className="flex flex-row gap-4 mb-2">
            <article>
              <input
                type="radio"
                name="unit"
                id="feet"
                value="feet"
                checked={unit === "feet"}
                onChange={handleChange}
              />
              <label className="ml-2" htmlFor="feet">
                Feet
              </label>
            </article>
            <article>
              <input
                type="radio"
                name="unit"
                id="inches"
                value="inches"
                checked={unit === "inches"}
                onChange={handleChange}
              />
              <label className="ml-2" htmlFor="feet">
                Inches
              </label>
            </article>
          </div>

          <article className="flex flex-col gap-2 mb-2 ">
            <label htmlFor="data">Enter the height</label>
            <input
              type="number"
              id="data"
              step="any"
              onChange={(e) => setData(e.target.value)}
              value={data}
              className="border border-gray-200 rounded-sm mb-2 w-[90%] py-2"
            />
          </article>
          <button
            className=" w-[90%] bg-sky-500 border text-white rounded-sm border-sky-500 font-semibold hover:bg-sky-600 cursor-pointer py-2"
            onClick={convert}
          >
            Submit
          </button>
          <button
            className=" w-[90%] bg-red-500 border mt-2  text-white rounded-sm border-red-500 font-semibold hover:bg-red-600 cursor-pointer py-2"
            onClick={reset}
          >
            Reset
          </button>
        </div>
        {status && (
          <p className="m-auto mt-2">
            <strong>{initial}</strong>when converted into {selected}{" "}
            <strong> {value} </strong>
          </p>
        )}
      </div>
    </>
  );
};

export default HeightConversion;
