import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import ScrollToHash from "./Components/ScrollToHash";
import ArithmeticCalculator from "./Projects/Arithmetic-Calculator";
import RockPaperScissor from "./Projects/Rock-Scissor-Paper";
import BMICalculator from "./Projects/BMI-Calculator";
import Counter from "./Projects/Counter";
import HeightConverter from "./Projects/Height-Conversion";
import FAQ from "./Projects/FAQ";
import Modal from "./Projects/Modal";
import NumberGuessingSystem from "./Projects/Number-Guessing-System";
import RandomQuoteGenerator from "./Projects/Random-Quote-Generator";
import TipCalculator from "./Projects/Tip-Calculator";
import TossCoin from "./Projects/Toss-Coin";
import WordCounter from "./Projects/Word-Counter";
import BackgroundColorChanger from "./Projects/Background-Color-Changer";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToHash />
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Other routes here */}
            <Route index element={<Home />} />

            <Route path="/tip-calculator" element={<TipCalculator />} />
            <Route path="/bmi-calculator" element={<BMICalculator />} />
            <Route path="/rock-scissor-paper" element={<RockPaperScissor />} />
            <Route path="/height-conversion" element={<HeightConverter />} />
            <Route
              path="/arithmetic-calculator"
              element={<ArithmeticCalculator />}
            />
            <Route
              path="/random-quote-generator"
              element={<RandomQuoteGenerator />}
            />
            <Route path="/modal" element={<Modal />} />
            <Route
              path="/number-guessing-system"
              element={<NumberGuessingSystem />}
            />
            <Route path="/word-counter" element={<WordCounter />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/toss-coin" element={<TossCoin />} />
            <Route
              path="/background-color-changer"
              element={<BackgroundColorChanger />}
            />
            <Route path="//faq" element={<FAQ />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
