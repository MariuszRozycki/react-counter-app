import "./Counter.css";
import { useState } from "react";
import Display from "./components/Display";
import ButtonsPanel from "./components/ButtonsPanel";
import Clock from "./components/Clock";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.counterInitValue);
  const [showClock, setShowClock] = useState(true);

  const updateCounter = (action) => {
    if (action === "add") {
      setCounter(counter + 1);
    } else if (action === "reset") {
      setCounter(props.counterInitValue);
    } else {
      setCounter(0);
    }
  };

  return (
    <div className="counter">
      <Display counter={counter} />
      <ButtonsPanel updateCounter={updateCounter} />
      <div className="clockWrapper">
        {showClock ? (
          <Clock setShowClock={setShowClock} />
        ) : (
          <p className="clockControl" onClick={() => setShowClock(true)}>
            Show Clock
          </p>
        )}
      </div>
    </div>
  );
};

export default Counter;
