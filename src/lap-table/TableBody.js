import TableRow from "./TableRow";

export default function TableBody() {
  return (
    <tbody className="lap__tbody">
      <TableRow label="#2" lapTime="00:00:01:00" totalTime="00:00:01:04" />
      <TableRow label="#1" lapTime="00:00:00:04" totalTime="00:00:00:04" />
    </tbody>
  );
}
