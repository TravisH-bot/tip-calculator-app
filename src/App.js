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
    console.log(people);
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
        />
        <Outputs splitTotal={splitTotal} tipTotal={tipTotal} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
