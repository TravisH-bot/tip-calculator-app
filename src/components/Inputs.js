const Inputs = (props) => {
  return (
    <div className="inputs-container">
      <div className="bill-input">
        <h3>Bill</h3>
        <input
          onChange={props.handleBillChange}
          value={props.bill}
          type="number"
          className="bill"
          placeholder="0"
        ></input>
      </div>
      <div className="tip-buttons">
        <h3>Select Tip %</h3>
        <div className="buttons-container">
          <button onClick={props.handleButtonPressFive}>5%</button>
          <button onClick={props.handleButtonPressTen}>10%</button>
          <button onClick={props.handleButtonPressFifteen}>15%</button>
          <button onClick={props.handleButtonPressTwentyFive}>25%</button>
          <button onClick={props.handleButtonPressFifty}>50%</button>
          <input
            onChange={props.handleTipChange}
            value={props.tip}
            type="number"
            id="custom"
            placeholder="Custom"
          ></input>
        </div>
      </div>
      <div className="people-input">
        <h3>Number of People</h3>
        <input
          onChange={props.handlePeopleChange}
          value={props.people}
          type="number"
          className="people"
          placeholder="1"
        ></input>
      </div>
    </div>
  );
};

export default Inputs;
