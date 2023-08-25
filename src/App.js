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
  const [tip, setTip] = useState("0%");
  // tip total
  const [tipTotal, setTipTotal] = useState(0);
  // number of people
  const [people, setPeople] = useState(1);
  // total per person
  const [splitTotal, setSplitTotal] = useState(1);

  const handleTipChange = (e) => {
    let value = e.target.value.replace("%", "");
    if (value.indexOf("%") === -1) {
      value = value + "%";
    }
    setTip(value);
  };

  const handleButtonPressFive = () => {
    document.addEventListener("click", () => {
      setTip("5%");
    });
  };
  const handleButtonPressTen = () => {
    document.addEventListener("click", () => {
      setTip("10%");
    });
  };
  const handleButtonPressFifteen = () => {
    document.addEventListener("click", () => {
      setTip("15%");
    });
  };
  const handleButtonPressTwentyFive = () => {
    document.addEventListener("click", () => {
      setTip("25%");
    });
  };
  const handleButtonPressFifty = () => {
    document.addEventListener("click", () => {
      setTip("50%");
    });
  };

  const handleBillChange = (e) => {
    setBill(e.target.value);
  };

  const handlePeopleChange = (e) => {
    setPeople(parseInt(e.target.value));
  };

  const tipCalculate = () => {
    const percentage = parseInt(tip.replace("%", "")) / 100;
    const result = ((bill * percentage) / people).toFixed(2);
    setTipTotal(result);
  };

  const totalCalculate = () => {
    const percentage = 1 + parseInt(tip.replace("%", "")) / 100;
    const result = ((bill * percentage) / people).toFixed(2);
    setSplitTotal(result);
  };

  useEffect(() => {
    totalCalculate();
    tipCalculate();
  }, [bill, tip, people]);

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="calc-container">
        <Inputs
          handleBillChange={handleBillChange}
          handlePeopleChange={handlePeopleChange}
          handleTipChange={handleTipChange}
          handleButtonPressFive={handleButtonPressFive}
          handleButtonPressTen={handleButtonPressTen}
          handleButtonPressFifteen={handleButtonPressFifteen}
          handleButtonPressTwentyFive={handleButtonPressTwentyFive}
          handleButtonPressFifty={handleButtonPressFifty}
        />
        <Outputs splitTotal={splitTotal} tipTotal={tipTotal} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
