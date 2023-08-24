const Inputs = () => {
  return (
    <div className="inputs-container">
      <div className="bill-input">
        <h3>Bill</h3>
        <input type="number" className="bill" placeholder="0"></input>
      </div>
      <div className="tip-buttons">
        <h3>Select Tip %</h3>
        <div className="buttons-container">
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
          <button>25%</button>
          <button>50%</button>
          <input type="number" id="custom" placeholder="Custom"></input>
        </div>
      </div>
      <div className="people-input">
        <h3>Number of People</h3>
        <input type="number" className="people" placeholder="0"></input>
      </div>
    </div>
  );
};

export default Inputs;
