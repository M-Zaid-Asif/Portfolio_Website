import { useState } from "react";

const data = [
  {
    question: "What is the capital of India",
    answer: "The Capital of India is New Delhi",
  },
  {
    question: "What is the capital of China",
    answer: "The Capital of China is Beijing",
  },
  {
    question: "What is the capital of USA",
    answer: "The Capital of USA is Washington D.C",
  },
  {
    question: "What is the capital of Indonesia",
    answer: "The Capital of Indonesia is Jakarta",
  },
  {
    question: "What is the capital of Pakistan",
    answer: "The Capital of Pakistan is Islamabad",
  },
];

const FAQ = () => {
  // To store the state of question (whether its visible or not)
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleAnswer = (index) => {
    // when clicked, if visible hide else show or
    // set value to null if question is clicked second time, else set to index [numerical value]
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <>
      <h2 className="text-2xl mx-6 my-2 text-center">Frequently Asked Questions</h2>

      <div className=" outline outline-gray-400 [width:80%] justify-center m-auto mt-4 lg:[width:40%]">
        {/* map gives us new array */}
        {data.map((item, index) => (
          <div className="" key={index}>
            <div
              className="bg-black question h-auto p-4 cursor-pointer hover:bg-gray-800"
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
            </div>

            {visibleIndex === index && (
              <div className="bg-white text-black h-auto p-4 hover:bg-gray-100 cursor-pointer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
