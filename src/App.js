import "./App.css";
import Inputs from "./components/Inputs";
import Outputs from "./components/Outputs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Spli</h1>
        <h1>tter</h1>
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
