import "./App.css";
import { useState, useEffect } from "react";
import logo from "./images/logo.svg";
import Inputs from "./components/Inputs";
import Outputs from "./components/Outputs";
import Footer from "./components/Footer";

function App() {
  // bill total
  const [bill, setBill] = useState("");
  // custom tip percentage
  const [tip, setTip] = useState("");
  // tip total
  const [tipTotal, setTipTotal] = useState(0);
  // number of people
  const [people, setPeople] = useState(1);
  // total per person
  const [splitTotal, setSplitTotal] = useState(1);
  // people error state
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (people < 1) {
      setError(true);
      return null;
    }
  };

  const handleButtonPressFive = () => {
    document.addEventListener("click", () => {
      setTip(5);
    });
  };
  const handleButtonPressTen = () => {
    document.addEventListener("click", () => {
      setTip(10);
    });
  };
  const handleButtonPressFifteen = () => {
    document.addEventListener("click", () => {
      setTip(15);
    });
  };
  const handleButtonPressTwentyFive = () => {
    document.addEventListener("click", () => {
      setTip(25);
    });
  };
  const handleButtonPressFifty = () => {
    document.addEventListener("click", () => {
      setTip(50);
    });
  };

  const handleReset = () => {
    setBill("");
    setTip("");
    setPeople(1);
    setTipTotal(0);
    setSplitTotal(0);
  };

  const handleTipChange = (e) => {
    setTip(e.target.value);
  };

  const handleBillChange = (e) => {
    setBill(e.target.value);
  };

  const handlePeopleChange = (e) => {
    setPeople(parseInt(e.target.value));
  };

  const tipCalculate = () => {
    const percentage = tip / 100;
    const result = ((bill * percentage) / people).toFixed(2);
    setTipTotal(result);
  };

  const totalCalculate = () => {
    const percentage = 1 + tip / 100;
    const result = ((bill * percentage) / people).toFixed(2);
    setSplitTotal(result);
  };

  useEffect(() => {
    totalCalculate();
    tipCalculate();
  }, [bill, tip, people, submitHandler, error]);

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <form onSubmit={submitHandler}>
        <div className="calc-container">
          <Inputs
            bill={bill}
            people={people}
            tip={tip}
            handleBillChange={handleBillChange}
            handlePeopleChange={handlePeopleChange}
            handleTipChange={handleTipChange}
            handleButtonPressFive={handleButtonPressFive}
            handleButtonPressTen={handleButtonPressTen}
            handleButtonPressFifteen={handleButtonPressFifteen}
            handleButtonPressTwentyFive={handleButtonPressTwentyFive}
            handleButtonPressFifty={handleButtonPressFifty}
            submitHandler={submitHandler}
            error={error}
          />
          <Outputs
            handleTipChange={handleTipChange}
            splitTotal={splitTotal}
            tipTotal={tipTotal}
            handleReset={handleReset}
          />
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default App;
