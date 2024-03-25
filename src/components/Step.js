import "./Step.css";

const Step = (props) => {
  return (
    <div className="step">
      <form>
        <label htmlFor="quantity">Steps: </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="5"
          defaultValue={props.step}
          onChange={(e) => props.updateStep(e)}
        />
      </form>
    </div>
  );
};

export default Step;
