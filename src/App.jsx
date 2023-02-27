import "./App.scss";
import Logo from "../images/logo.svg";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Bill from "./components/Bill";
import Tip from "./components/Tip";
import People from "./components/People";
import Stats from "./components/Stats";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const handleButton = (e) => {
    e.preventDefault();
    setTip(parseFloat(e.target.value));
    e.target.parentElement.lastChild.value = "";
  };

  const handleInputs = (e) => {
    const input = e.target;
    let inputValue = parseFloat(input.value);

    //Universal styling
    if (inputValue === 0) {
      inputValue = "";
      input.style.borderColor = "#E17457";
    } else {
      input.style.borderColor = "#26c2ae";
    }

    //Fixes NaN
    if (isNaN(inputValue)) {
      inputValue = "";
    }

    if (input.classList.contains("bill-input")) {
      setBill(inputValue);
    }

    if (input.classList.contains("custom")) {
      if (inputValue === "") {
        input.style.borderColor = "transparent";
      }

      if (inputValue === 0) {
        inputValue = "";
        input.style.borderColor = "#E17457";
      } else {
        input.style.borderColor = "#26c2ae";
      }

      setTip(inputValue);
    }

    if (input.classList.contains("people-input")) {
      let errorPeople = e.target.parentElement.children[4].children[1];

      setPeople(inputValue);
    }
  };

  const reset = (e) => {
    setBill(0);
    setPeople(0);
    setTip(0);
  };

  useEffect(() => {
    const tipAmountPerPerson = ((tip / 100) * bill) / people;
    const totalPerPerson = bill / people + tipAmountPerPerson;
    setTipAmount(Math.round(tipAmountPerPerson * 100) / 100);
    setTotal(Math.round(totalPerPerson * 100) / 100);
  }, [bill, tip, people]);

  return (
    <>
      <Header Logo={Logo} />
      <main>
        <form>
          <div className="controls">
            <Bill handleInputs={handleInputs} bill={bill} />
            <Tip
              tip={tip}
              handleInputs={handleInputs}
              handleButton={handleButton}
            />
            <People handleInputs={handleInputs} people={people} />
          </div>
          <Stats reset={reset} tipAmount={tipAmount} total={total} />
        </form>
      </main>
    </>
  );
}

export default App;
