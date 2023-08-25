const Outputs = (props) => {
  return (
    <div className="outputs-container">
      <div className="tip-container">
        <div className="tip">
          <h3>Tip Amount</h3>
          <p>/ person</p>
        </div>
        <div id="tip-amount" className="output">
          {props.tipTotal > 0 ? <p>${props.tipTotal}</p> : "$0.00"}
        </div>
      </div>
      <div className="total-container">
        <div className="total">
          <h3>Total</h3>
          <p>/ person</p>
        </div>
        <div id="total-amount" className="output">
          {props.splitTotal > 0 ? <p>${props.splitTotal}</p> : "$0.00"}
        </div>
      </div>

      <button className="reset" onClick={props.handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Outputs;
