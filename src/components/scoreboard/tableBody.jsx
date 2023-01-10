export default function TableBody(props) {
  return (
    <tr>
      <td>{props.i}</td>
      <td>{props.name}</td>
      <td>{props.score}</td>
    </tr>
  );
}
