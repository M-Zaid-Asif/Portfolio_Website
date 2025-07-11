import { useState } from "react";

const quotes = [
  {
    quote:
      "Nothing in life is as important as you think it is, while you are thinking about it.",
    name: "Daniel Kahneman",
  },
  {
    quote:
      "The stock market is designed to transfer money from the Active to the Patient.",
    name: "Warren Buffett",
  },
  {
    quote: "If you're not confused, you don't understand what's going on.",
    name: "Charlie Munger",
  },
  {
    quote:
      "Amateurs think about how much money they can make. Professionals think about how much money they could lose.",
    name: "Paul Tudor Jones",
  },
  {
    quote: "In investing, what is comfortable is rarely profitable.",
    name: "Robert Arnott",
  },
  {
    quote: "It’s not supposed to be easy. Anyone who finds it easy is stupid.",
    name: "Charlie Munger",
  },
  {
    quote: "Price is what you pay. Value is what you get.",
    name: "Warren Buffett",
  },
  {
    quote: "Experience is what you got when you didn’t get what you wanted.",
    name: "Howard Marks",
  },
  {
    quote: "Risk comes from not knowing what you're doing.",
    name: "Warren Buffett",
  },
  {
    quote:
      "You’re neither right nor wrong because other people agree with you. You’re right because your facts are right and your reasoning is right.",
    name: "Benjamin Graham",
  },
  {
    quote:
      "Be fearful when others are greedy, and greedy when others are fearful.",
    name: "Warren Buffett",
  },
  {
    quote:
      "The four most dangerous words in investing are: ‘This time it’s different.’",
    name: "Sir John Templeton",
  },
  {
    quote: "Compound interest is the eighth wonder of the world.",
    name: "Albert Einstein",
  },
  {
    quote:
      "Time is the friend of the wonderful company, the enemy of the mediocre.",
    name: "Warren Buffett",
  },
];

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState(quotes[0]);

  function generateQuote() {
    const generateQuote = Math.floor(Math.random() * quotes.length);
    const obtainedQuote = quotes[generateQuote];
    setQuote(obtainedQuote);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[600px]">
        <h2 className="text-xl my-2 mx-6 xl:text-center font-semibold">
          Random Quote Generator
        </h2>

        <div className="border border-black w-4/5 lg:[width:60%] m-auto my-4 p-4 rounded-lg shadow-md shadow-blue-100">
          <p>
            <strong>{quote.name}</strong>, said that
          </p>
          <p>
            <strong>"</strong>
            {quote.quote}
            <strong>"</strong>
          </p>
          <button
            onClick={generateQuote}
            className="w-40 border border-sky-500 bg-sky-500 py-0.5 text-white font-bold rounded-md flex justify-center items-center m-auto mt-5 hover:cursor-pointer hover:bg-sky-700"
          >
            Generate Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default RandomQuoteGenerator;
