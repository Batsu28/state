import { useState } from "react";
import Calc from "./calc";
import Scoreboard from "./scoreBoard";
import Todos from "./todos";

export default function Tools(prop) {
  const { logOut } = prop;

  const [a, change] = useState();

  const names = ["Todos", "Calc", "Scoreboard"];
  function btnClick(e) {
    let value = e.target.value;
    if (value === "Todos") {
      return change(<Todos />);
    } else if (value === "Calc") {
      return change(<Calc />);
    } else if (value === "Scoreboard") {
      return change(<Scoreboard />);
    }
  }
  return (
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
      <button onClick={() => logOut(false)}>LogOut</button>
    </div>
  );
}
