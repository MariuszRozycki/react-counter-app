import "./Counter.css";

const Counter = (props) => {
  console.log(props);
  const counter = Math.floor(Math.random() * 10);

  return (
    <div className="counter">
      <p>Counter: {props.counterInitValue}</p>
      <div className="buttonsPanel">
        <button>Add</button>
      </div>
    </div>
  );
};

export default Counter;
