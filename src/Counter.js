import "./Counter.css";
import { useState } from "react";
import Display from "./components/Display";
import ButtonsPanel from "./components/ButtonsPanel";
import Clock from "./components/Clock";
import Step from "./components/Step";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.counterInitValue);
  const [showClock, setShowClock] = useState(true);
  const [step, setStep] = useState(1);

  const updateCounter = (action) => {
    if (action === "add") {
      setCounter(counter + step);
    } else if (action === "reset") {
      setCounter(props.counterInitValue);
    } else {
      setCounter(0);
    }
  };

  const updateStep = (e) => {
    const numericValue = parseInt(e.target.value, 10);
    if (!isNaN(numericValue)) {
      setStep(numericValue);
    } else {
      setStep(1);
    }
  };

  return (
    <div className="counter">
      <Display counter={counter} />
      <ButtonsPanel step={step} updateCounter={updateCounter} />
      <div className="clockWrapper">
        {showClock ? (
          <Clock setShowClock={setShowClock} />
        ) : (
          <p className="clockControl" onClick={() => setShowClock(true)}>
            Show Clock
          </p>
        )}
      </div>
      <Step step={step} updateStep={updateStep} />
    </div>
  );
};

export default Counter;
