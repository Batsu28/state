import { useState } from "react";

export default function TableCol(props) {
  let [score, getScore] = useState(props.score);

  function decrement() {
    getScore(score - 1);
  }
  function increment() {
    getScore(score + 1);
  }
  return (
    <tr>
      <td scope="row">{props.i}</td>
      <td>{props.name}</td>
      <td>
        <button onClick={decrement}>-</button>
        {score}
        <button onClick={increment}>+</button>
      </td>
    </tr>
  );
}
