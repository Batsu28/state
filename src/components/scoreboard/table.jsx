import { useState } from "react";
import AddUser from "../scoreboard/modal";
import TableCol from "./tableCol";

export default function TableHead() {
  const [data, getData] = useState([
    { name: "User1", score: 0 },
    { name: "User2", score: 1 },
    { name: "User3", score: 2 },
  ]);

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col w-25"></th>
            <th scope="col w-50">Name</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <TableCol
              key={index}
              index={index}
              name={user.name}
              score={user.score}
            />
          ))}
        </tbody>
      </table>
      <AddUser />
    </div>
  );
}
