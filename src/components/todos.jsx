import { useState } from "react";
import "../style/todos.css";

export default function Todos() {
  const [a, todos] = useState([]);
  const [b, todos2] = useState();

  function addTodos() {
    todos([...a, b]);
  }
  function inputVal(e) {
    todos2(e.target.value);
  }
  function clear(e) {
    let i = Number(e.target.id);
    a.splice(i, 1);
    todos2([...b, a]);
  }

  return (
    <div className="todos">
      <div className="input">
        <input type="text" onChange={inputVal} />
        <button onClick={addTodos}>add</button>
      </div>
      <ul>
        {a.map((todo, index) => (
          <li key={index}>
            <p>{todo}</p>
            <button onClick={clear} className="del_btn" id={index}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
