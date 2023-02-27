import "./App.scss";
import Logo from "../images/logo.svg";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  const handleButton = (e) => {
    e.preventDefault();
    setTip(parseInt(e.target.value));
    e.target.parentElement.lastChild.value = "";
  };

  const handleInputs = (e) => {
    const input = e.target;
    let inputValue = parseInt(input.value);

    if (input.classList.contains("bill-input")) {
      if (inputValue === 0) {
        inputValue = "";
      }
      setBill(inputValue);
    }

    if (input.classList.contains("custom")) {
      if (inputValue === 0) {
        inputValue = "";
      }
      setTip(inputValue);
    }

    if (input.classList.contains("people-input")) {
      let error = e.target.parentElement.children[4];
      if (inputValue === 0) {
        inputValue = "";
        input.style.borderColor = "#E17457";
        error.style.display = "block";
        //Srediti
      }
      setPeople(inputValue);
    }
  };

  return (
    <>
      <header>
        <h1>
          <img src={Logo} alt="Splitter logo" />
        </h1>
      </header>
      <main>
        <form>
          <div className="controls">
            <h2 className="bill">Bill</h2>
            <input
              className="bill-input"
              onChange={handleInputs}
              value={bill === 0 ? "" : bill}
              placeholder="0"
              type="number"
            />
            <h2 className="tip">Select Tip %</h2>
            <div className="tip-buttons">
              <button className="tip-button" value={5} onClick={handleButton}>
                5%
              </button>
              <button className="tip-button" value={10} onClick={handleButton}>
                10%
              </button>
              <button className="tip-button" value={15} onClick={handleButton}>
                15%
              </button>
              <button className="tip-button" value={25} onClick={handleButton}>
                25%
              </button>
              <button className="tip-button" value={50} onClick={handleButton}>
                50%
              </button>
              <input
                type="number"
                placeholder="Custom"
                onChange={handleInputs}
                className="tip-button custom"
              />
            </div>
            <div className="h2-container">
              <h2 className="people">Number of People</h2>
              <div className="error">Can't be zero</div>
            </div>
            <input
              onChange={handleInputs}
              value={people === 0 ? "" : people}
              className="people-input"
              placeholder="0"
              type="number"
            />
          </div>
          <div className="stats">
            <div className="stats-container tip-amount">
              <p className="stats-para">
                <span className="bold">Tip Amount</span> / person
              </p>
              <p className="tip-amount-value">$0</p>
            </div>
            <div className="stats-container total">
              <p className="stats-para">
                <span className="bold">Total</span> / person
              </p>
              <p className="total-value">$0</p>
            </div>
            <button className="reset">Reset</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default App;
