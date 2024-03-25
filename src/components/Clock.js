import "./Clock.css";
import { useEffect, useState } from "react";

const Clock = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <p className="clockWrapper">
      {time}
      <span className="clockControl" onClick={() => props.setShowClock(false)}>
        X
      </span>
    </p>
  );
};

export default Clock;
