import "./App.scss";
import Logo from "../images/logo.svg";

function App() {
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
            <input className="bill-input" placeholder="0" type="number" />
            <h2 className="tip">Select Tip %</h2>
            <div className="tip-buttons">
              <button className="tip-button">5%</button>
              <button className="tip-button">10%</button>
              <button className="tip-button">15%</button>
              <button className="tip-button">25%</button>
              <button className="tip-button">50%</button>
              <button className="tip-button custom">Custom</button>
            </div>
            <h2 className="people">Number of People</h2>
            <input className="people-input" placeholder="0" type="number" />
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
