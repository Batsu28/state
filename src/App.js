import { useState } from "react";
import "./App.css";

function App() {
  // const [x, count1] = useState();
  // const [y, count2] = useState();
  // function toChange(e) {
  //   let num = e.target.innerText;
  //   count1(num);
  // }
  // function value(e) {
  //   count2(e.target.value);
  // }
  // function decrement() {
  //   count1("-");
  // }
  // function increment() {
  //   count1("+");
  // }
  // function output() {
  //   console.log(document.querySelector("#input").value);
  // }
  // function clear() {
  //   document.querySelector("#input").value = "";
  // }
  const [a, todos] = useState([]);
  const [b, todos2] = useState();

  function addTodos() {
    console.log(a);
    todos([...a, b]);
  }
  function inputVal(e) {
    todos2(e.target.value);
  }
  function clear(index) {
    console.log(index);
    console.log(a.slice(1, 0));
  }
  function btn() {
    return <button onClick={clear}>delete</button>;
  }
  return (
    <div className="App">
      <div className="input">
        <input type="text" onChange={inputVal} />
        <button onClick={addTodos}>add</button>
      </div>
      <ul>
        {a.map((todo, index) => (
          <li key={index}>
            <div key={index}>{todo}</div>
            {btn()}
            {clear(index)},
          </li>
        ))}
      </ul>
      {/* <input value={x} onChange={value} />
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
        <button onClick={toChange}>0</button>
      </div>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={output}>=</button>
      </div>
      <button onClick={clear}>C</button> */}
    </div>
  );
}

export default App;
