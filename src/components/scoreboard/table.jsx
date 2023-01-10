import TableBody from "./tableBody";

const data = [
  { name: "User1", score: 0 },
  { name: "User2", score: 0 },
  { name: "User3", score: 0 },
];

export default function TableHead() {
  return (
    <div>
      <table>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Score</th>
        </tr>
        {data.map((user, index) => (
          <TableBody i={index + 1} name={user.name} score={user.score} />
        ))}
      </table>
    </div>
  );
}
