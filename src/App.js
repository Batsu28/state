import { useState } from "react";
import "./App.css";
import Calc from "./components/calc";
import Scoreboard from "./components/scoreBoard";
import Todos from "./components/todos";

function App() {
  const [a, change] = useState();

  const names = ["Todos", "Calc", "Scoreboard"];
  function btnClick(e) {
    let value = e.target.value;
    if (value == "Todos") {
      return change(<Todos />);
    } else if (value == "Calc") {
      return change(<Calc />);
    } else if (value == "Scoreboard") {
      return change(<Scoreboard />);
    }
  }
  return (
    <div className="App">
      <div className="container">
        <div className="body">
          <div className="showBtn">
            {names.map((name, index) => (
              <button value={name} key={index} onClick={btnClick}>
                {name}
              </button>
            ))}
          </div>
          <div className="comp">{a}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
