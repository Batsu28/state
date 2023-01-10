import { useState } from "react";
import "../style/calc.css";

export default function Calc() {
  const [x, newNum] = useState("");
  const [y, old] = useState();
  const [operator, setOp] = useState();

  function toChange(e) {
    let num = e.target.innerText;
    if (num === 0) {
      newNum(num);
    } else {
      newNum(x + num);
    }
  }
  function operators(e) {
    let op = e.target.innerText;
    setOp(op);
    old(x);
    newNum("");
  }

  function output() {
    if (operator == "+") {
      newNum(Number(y) + Number(x));
    } else if (operator == "-") {
      newNum(Number(y) - Number(x));
    } else if (operator == "*") {
      newNum(Number(y) * Number(x));
    } else if (operator == "/") {
      newNum(Number(y) / Number(x));
    }
  }
  function clear() {
    newNum("");
  }
  return (
    <div className="calc">
      <input value={x} readOnly />
      <div className="all_btns">
        <div className="number">
          <button onClick={toChange}>1</button>
          <button onClick={toChange}>2</button>
          <button onClick={toChange}>3</button>
          <button onClick={toChange}>4</button>
          <button onClick={toChange}>5</button>
          <button onClick={toChange}>6</button>
          <button onClick={toChange}>7</button>
          <button onClick={toChange}>8</button>
          <button onClick={toChange}>8</button>
          <button onClick={toChange}>.</button>
          <button onClick={toChange}>0</button>
          <button onClick={clear}>C</button>
        </div>
        <div className="operator">
          <button onClick={operators}>-</button>
          <button onClick={operators}>+</button>
          <button onClick={operators}>/</button>
          <button onClick={operators}>*</button>
        </div>
      </div>

      <button onClick={output} className="sum_btn">
        =
      </button>
    </div>
  );
}
