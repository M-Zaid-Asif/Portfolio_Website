import { useState } from "react";

const choice = ["head", "tail"];

const TossCoin = () => {
  const [expected, setExpected] = useState(" ");
  const [outcome, setOutcome] = useState(" ");

  function randomNumberGeneration() {
    const randomChoiceGenerator = Math.floor(Math.random() * choice.length);
    const randomChoice = choice[randomChoiceGenerator];
    return randomChoice;
  }

  function headSelect() {
    const randomChoiceGenerator = randomNumberGeneration();
    setExpected("Head is the call");
    if (randomChoiceGenerator === "head") {
      setOutcome(
        <span>
          <strong className="text-green-600">Tail</strong>, you have won
        </span>
      );
    } else {
      setOutcome(
        <span>
          <strong className="text-red-500">Tail</strong>, you have lost
        </span>
      );
    }
  }

  function tailSelect() {
    const randomChoiceGenerator = randomNumberGeneration();
    setExpected("Tail is the call");
    if (randomChoiceGenerator === "tail") {
      setOutcome(
        <span>
          <strong className="text-green-500">Tail</strong>, you have won
        </span>
      );
    } else {
      setOutcome(
        <span>
          <strong className="text-red-500">Head</strong>, you have lost
        </span>
      );
    }
  }

  return (
    <>
      <h2 className="mx-6 text-2xl lg:text-center my-2 font-semibold">
        Toss the Coin
      </h2>
      <div className="border border-gray-500 shadow-md shadow-blue-200 flex flex-col w-[90%] sm:w-4/5 md:w-3/5 m-auto justify-center items-center py-4 rounded-lg xl:w-1/2">
        <div className="buttons_coin w-[95%] justify-around flex py-4">
          <button
            className="btn_coin bg-sky-500 focus:bg-sky-600 w-[49%] border border-sky-500 "
            onClick={headSelect}
          >
            Head
          </button>
          <button
            className="btn_coin bg-sky-500 focus:bg-sky-600 w-[49%] border border-sky-500"
            onClick={tailSelect}
          >
            Tail
          </button>
        </div>
        <div className="flex mt-5 w-[95%] p-2 flex-row justify-around rounded-lg">
          <p className="w-[49%] px-2">
            <strong>Called:</strong>
            {expected}
          </p>
          <p className="w-[49%] px-2">
            <strong>Result:</strong>
            {outcome}
          </p>
        </div>
      </div>
    </>
  );
};

export default TossCoin;
