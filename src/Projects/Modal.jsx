import { useState } from "react";

const Modal = () => {
  var [isVisible, setIsVisible] = useState(false);

  const showModal = () => {
    if (isVisible === false) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const close = () => {
    setIsVisible(false);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center sm:h-[600px] ">
        <div className="flex items-center justify-center my-2 mx-6">
          <button
            onClick={showModal}
            className="border-blue-100 bg-sky-500 w-30 text-white font-bold py-1 rounded-lg hover:cursor-pointer hover:bg-sky-600 mt-5"
          >
            I'm Modal
          </button>
        </div>

        {isVisible && (
          <div className="flex border border-gray-700 flex-col p-5 mx-auto mt-5 mb-5 [width:70%] rounded-3xl shadow-md shadow-blue-100">
            <div className="my-2 flex flex-row justify-between content-between ">
              <h3 className="p-0.5 text-xl font-bold">Attention Required</h3>
              <button
                onClick={close}
                className="border border-red-500 w-5 h-7 rounded-sm pb-0.5 font-bold sm:w-10 cursor-pointer hover:bg-red-600 bg-red-500 sm:rounded-lg"
              >
                x
              </button>
            </div>
            <div>
              <p>
                You can always trust a dishonest man to be dishonest. Honestly,
                it’s the honest ones you want to watch out for, because you can
                never predict when they’re going to do something incredibly...
                stupid.
              </p>
              <hr className="my-2" />
              <p>
                Madeira, Manchester, Madrid, Turin — and Manchester again.
                Wreathed in red. Restored to this great gallery of the game. A
                walking work of art. Vintage. Beyond valuation, beyond forgery
                or imitation. 18 years since that trembling teenager of touch
                and tease first tiptoed onto this storied stage. Now in his
                immaculate maturity. CR7 reunited.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
