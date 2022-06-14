import { useState } from "react";
import "./styles.css";

export default function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [amountOfPeople, setAmountOfPeople] = useState(0);
  const [output, setOutput] = useState(0);
  const [option, setOption] = useState(0.1);
  const [isBlock, setIsBlock] = useState(false);

  const handleClick = () => {
    if (!billAmount) {
      alert("Enter bill amount ");
      setIsBlock(false);
    } else {
      setOutput(Math.ceil((billAmount * option) / billAmount));
      setIsBlock(true);
    }
    if (!amountOfPeople) {
      alert("Please enter number of people");
      setIsBlock(false);
    } else {
      setOutput(Math.ceil((billAmount * option) / amountOfPeople));
      setIsBlock(true);
    }

    setAmountOfPeople(0);
    setBillAmount(0);
    setOption(0.1);
  };

  return (
    <div className="App">
      <div id="container">
        <h1 class="title">Tip Calculator</h1>

        <div id="calculator">
          <form>
            <div class="row">
              <label for="">How much was your bill?</label>
              <input
                value={billAmount}
                id="billamt"
                type="text"
                placeholder="Bill Amount"
                onChange={(e) => {
                  setBillAmount(e.target.value);
                }}
              />
            </div>

            <div class="row">
              <label for="">How was your service?</label>
              <select
                id="serviceQual"
                onChange={(e) => {
                  setOption(e.target.value);
                }}
              >
                <option disabled selected value="0.01">
                  -- Choose an Option --
                </option>
                <option value="0.3">30%; Outstanding</option>
                <option value="0.2">20%; Good</option>
                <option value="0.15">15%; It was OK</option>
                <option value="0.1">10%; Bad</option>
                <option value="0.05">5%; Terrible</option>
              </select>
            </div>

            <div class="row">
              <label for="">How many people are sharing the bill?</label>
              <input
                id="peopleamt"
                type="text"
                value={amountOfPeople}
                placeholder="Number of People"
                onChange={(e) => setAmountOfPeople(e.target.value)}
              />
            </div>

            <div class="row">
              <button type="button" id="calculate" onClick={handleClick}>
                Calculate!
              </button>
            </div>
          </form>
        </div>

        <div className={isBlock || "output"}>
          <h3>Tip amount</h3>
          <h2 id="amount">${output}</h2>
          <h5>for each person</h5>
        </div>
      </div>
    </div>
  );
}
