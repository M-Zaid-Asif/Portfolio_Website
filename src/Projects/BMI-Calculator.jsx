import { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [finalHeight, setFinalHeight] = useState("");
  const [finalweight, setFinalWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");

  const calculateBmi = (e) => {
    e.preventDefault(); // prevents page reload

    const heightInMeters = parseFloat(height) * 0.3048;
    const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);

    setFinalHeight(height);
    setFinalWeight(weight);

    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setStatus("Underweight");
    } else if (bmiValue <= 24.9) {
      setStatus("Normal Weight");
    } else if (bmiValue <= 29.9) {
      setStatus("Overweight");
    } else if (bmiValue <= 34.9) {
      setStatus("Obese (Class 1)");
    } else if (bmiValue <= 39.9) {
      setStatus("Obese (Class 2)");
    } else {
      setStatus("Morbidly Obese (Class 3)");
    }
  };

  function reset() {
    setWeight("");
    setHeight("");
    setFinalHeight("");
    setFinalWeight("");
    setBmi("");
    setStatus("");
  }
  return (
    <>
      <h2 className="text-2xl mx-6 font-semibold my-2 m-1 lg:text-center">
        Introduction
      </h2>

      <div className="[width:95%] mx-auto my-3 lg:w-[50%] gap-2 px-6">
        <p>
          Body Mass Index (BMI), is a widely used measurement to assess weight
          status. If weight is:{" "}
        </p>
        <ul className="flex flex-col gap-2">
          <li>
            Less than 18.5, status is <strong>Underweight</strong>
          </li>
          <li>
            In between 18.5 and 24.9, status is <strong>Normal Weight</strong>
          </li>
          <li>
            In between 25 and 29.9, status is <strong>Overweight</strong>
          </li>
          <li>
            In between 30 and 34.9, status is <strong>Obese (Class 1)</strong>
          </li>
          <li>
            In between 35 and 39.9, status is <strong>Obese (Class 2)</strong>
          </li>
          <li>
            Above 40, status is <strong>Morbidly Obese (Class 3)</strong>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold my-2 mx-6 lg:text-center">
        BMI Calculator
      </h2>
      <div className="[width:92%] mx-auto my-5 p-6 border border-black shadow-blue-100 rounded-md shadow-md lg:w-[50%]">
        <form
          onSubmit={calculateBmi}
          className="flex flex-col gap-4 m-auto [width:80%]"
        >
          <div>
            <label
              htmlFor="weight"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Weight (kg)
            </label>
            <input
              id="weight"
              type="number"
              step="any"
              min="1"
              required
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="height"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Height (feet)
            </label>
            <input
              id="height"
              type="number"
              min="1"
              step="any"
              required
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition cursor-pointer"
          >
            Calculate BMI
          </button>
          <button
            onClick={reset}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition cursor-pointer"
          >
            Reset
          </button>
        </form>

        <div className="mt-6 text-center">
          <p>
            The BMI for weight <strong>{finalweight} kg</strong> and height{" "}
            <strong>{finalHeight} ft</strong> is:
          </p>
          <p className="text-xl font-semibold mt-2">{bmi}</p>
          <p className="text-gray-700">{status}</p>
        </div>
      </div>
    </>
  );
};

export default BMICalculator;
