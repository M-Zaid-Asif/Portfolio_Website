import { useEffect, useState } from "react";
const choices = ["Rock", "Paper", "Scissor"];

const RockPaperScissor = () => {
  const [chosen, setChosen] = useState(0);
  const [realValue, setRealValue] = useState(0);
  const [result, setResult] = useState(" ");
  const [played, setPlayed] = useState(0);
  const [won, setWon] = useState(0);
  const [loss, setLoss] = useState(0);
  const [tied, setTied] = useState(0);
  const [percent, setPercentage] = useState(0);

  function randomChoice() {
    const randomChoices = Math.floor(Math.random() * choices.length);
    const obtainedValue = choices[randomChoices];
    return obtainedValue;
  }

  useEffect(() => {
    if (played > 0) {
      const percentCalculate = (won / played) * 100;
      setPercentage(percentCalculate.toFixed(2));
    } else {
      setPercentage(0); // or handle divide-by-zero case
    }
  }, [won, played]);

  function clickedRock() {
    const choice = randomChoice();
    setPlayed((prev) => prev + 1);
    // Human choose Rock
    setChosen("Rock");

    if (choice === "Scissor") {
      setRealValue(choice);
      setResult("Victory");
      setWon((prev) => prev + 1);
    } else if (choice === "Paper") {
      setRealValue(choice);
      setResult("Defeat");
      setLoss((prev) => prev + 1);
    } else {
      setRealValue(choice);
      setResult("Tie");
      setTied((prev) => prev + 1);
    }
  }

  function clickedPaper() {
    const choice = randomChoice();
    setPlayed((prev) => prev + 1);

    // Human choose Paper
    setChosen("Paper");
    if (choice === "Scissor") {
      setRealValue(choice);
      setResult("Defeat");
      setLoss((prev) => prev + 1);
    } else if (choice === "Rock") {
      setRealValue(choice);
      setResult("Victory");
      setWon((prev) => prev + 1);
    } else {
      setRealValue(choice);
      setResult("Tied");
      setTied((prev) => prev + 1);
    }
  }

  function clickedScissor() {
    const choice = randomChoice();
    setPlayed(played + 1);

    // Human choose Scissor
    setChosen("Scissor");
    if (choice === "Rock") {
      setRealValue(choice);
      setResult("Defeat");
      setLoss((prev) => prev + 1);
    } else if (choice === "Paper") {
      setRealValue(choice);
      setResult("Victory");
      setWon((prev) => prev + 1);
    } else {
      setRealValue(choice);
      setResult("Tied");
      setTied((prev) => prev + 1);
    }
  }
  return (
    <>
      <h2 className="mx-6 text-xl lg:text-center my-3 font-semibold">Rules</h2>
      <div className="m-auto w-[95%] lg:w-1/2">
        <p className="pb-2 mx-6">Rules for Rock-Scissor Paper game, are simple:</p>
        <ul className="flex flex-col gap-2 mx-6">
          <li>Rock beats Scissor</li>
          <li>Scissor beats Paper</li>
          <li>Paper beats Rock</li>
        </ul>
      </div>

      <h2 className="mx-6 text-xl lg:text-center my-3 font-semibold">
        Rock-Scissor-Paper
      </h2>
      <div className="buttons border border-black flex flex-row [width:90%] sm:w-3/4 m-auto justify-between py-2 px-2 lg:w-1/2 rounded-2xl bg-sky-200">
        <button className="btn" onClick={clickedRock}>
          Rock
        </button>
        <button className="btn" onClick={clickedPaper}>
          Paper
        </button>
        <button className="btn" onClick={clickedScissor}>
          Scissor
        </button>
      </div>
      <h2 className="mx-6 text-xl lg:text-center my-3 font-semibold">Result</h2>
      <div className="result flex flex-row [width:90%] m-auto justify-around lg:w-1/2 sm:w-3/4">
        <div className="result_div ">
          <h2>Human</h2>
          <p>{chosen}</p>
        </div>
        <div className="result_div">
          <h2>Computer</h2>
          <p>{realValue}</p>
        </div>
        <div className="result_div">
          <h2>Result</h2>
          <p>{result}</p>
        </div>
      </div>
      <h2 className="m-2 text-xl lg:text-center my-3 font-semibold">
        Game Stats
      </h2>
      <div className="stats grid grid-cols-2 sm:grid-cols-3 place-items-center w-[90%] lg:w-1/2 sm:w-3/4 mx-auto">
        <div className="stat">
          <h2>Played</h2>
          <p>{played}</p>
        </div>
        <div className="stat">
          <h2>Won</h2>
          <p>{won}</p>
        </div>
        <div className="stat">
          <h2>Loss</h2>
          <p>{loss}</p>
        </div>
        <div className="stat">
          <h2>Tied</h2>
          <p>{tied}</p>
        </div>
        <div className="stat">
          <h2>Win %</h2>
          <p>{percent}</p>
        </div>
      </div>
    </>
  );
};

export default RockPaperScissor;
