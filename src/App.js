import "./App.css";
import logo from "./images/logo.svg";
import Inputs from "./components/Inputs";
import Outputs from "./components/Outputs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="calc-container">
        <Inputs />
        <Outputs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
