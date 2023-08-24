const Outputs = (props) => {
  return (
    <div className="outputs-container">
      <div className="tip-container">
        <div className="tip">
          <h3>Tip Amount</h3>
          <p>/ person</p>
        </div>
        <div id="tip-amount" className="output">
          {props.tipTotal}
        </div>
      </div>
      <div className="total-container">
        <div className="total">
          <h3>Total</h3>
          <p>/ person</p>
        </div>
        <div id="total-amount" className="output">
          {props.splitTotal}
        </div>
      </div>
      <button className="reset">Reset</button>
    </div>
  );
};

export default Outputs;
