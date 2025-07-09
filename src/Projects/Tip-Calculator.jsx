import { useState } from "react";

const TipCalculator = () => {
  const [tipPercent, setTipPercent] = useState("");
  const [totalbill, setTotalBill] = useState("");
  const [finalTipPercent, setFinalTipPercent] = useState("");
  const [finalBillValue, setFinalTotalBillValue] = useState("");
  const [tip, setTip] = useState("");

  function calculateTip() {
    const tip = totalbill * (tipPercent / 100);

    setFinalTipPercent(tipPercent);
    setFinalTotalBillValue(totalbill);
    setTip(tip.toFixed(2));
  }

  function reset() {
    setTotalBill("");
    setTipPercent("");
    setFinalTipPercent("");
    setFinalTotalBillValue("");
    setTip("");
  }

  return (
    <>
      <h2 className="mx-6 my-4 text-xl font-semibold lg:text-center">
        Tip Calculator
      </h2>
      <div className="border border-black flex rounded-2xl flex-col mx-auto w-[90%] sm:w-[60%] lg:w-[50%] shadow-md shadow-blue-100 pt-5">
        <div className="tip_inputs">
          <label htmlFor="total_bill">Total Bill</label>
          <input
            className="calculate_input lg:w-[60%]"
            type="text"
            id="total_bill"
            value={totalbill}
            onChange={(e) => setTotalBill(e.target.value)}
            placeholder="Enter Bill Here"
          />
        </div>
        <div className="tip_inputs ">
          <label htmlFor="tip_percentage">Tip %</label>
          <input
            className="calculate_input lg:w-[60%]"
            type="text"
            id="tip_percentage"
            value={tipPercent}
            onChange={(e) => setTipPercent(e.target.value)}
            placeholder="Enter Tip Percentage Here"
          />
        </div>
        <div className="flex flex-col my-2 sm:flex-row sm:items-center sm:justify-center m-auto">
          <button
            className="border border-sky-500 bg-sky-500 w-40 rounded-2xl py-1 text-white font-bold cursor-pointer hover:bg-sky-600"
            onClick={calculateTip}
          >
            Calculate
          </button>
          <button
            onClick={reset}
            className="border border-red-500 bg-red-500 w-40 rounded-2xl mt-2 sm:ml-2 sm:m-0 py-1 text-white font-bold cursor-pointer hover:bg-red-600"
          >
            Reset
          </button>
        </div>
        <div className="flex justify-center w-[90%] mx-auto my-4">
          <p className="text-10">
            For <strong>{finalTipPercent} %</strong> Tip, Calculated Tip is{" "}
            <strong>{tip}</strong> for the bill of{" "}
            <strong>{finalBillValue}</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default TipCalculator;
