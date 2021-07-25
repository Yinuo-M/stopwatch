import "./TableRow.scss";

export default function TableRow(props) {
  return (
    <tr className="lap__tr">
      <td className="lap__td">#{props.label}</td>
      <td className="lap__td">{props.lapTime}</td>
      <td className="lap__td">{props.totalTime}</td>
    </tr>
  );
}
