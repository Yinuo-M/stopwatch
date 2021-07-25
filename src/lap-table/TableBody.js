import TableRow from "./TableRow";

export default function TableBody(props) {
  const lapHistory = [...props.lapHistory];
  return (
    <tbody className="lap__tbody">
      {lapHistory.reverse().map((lapRecord, index) => (
        <TableRow
          key={index}
          label={lapHistory.length - index}
          lapTime={lapRecord.lapTime}
          totalTime={lapRecord.totalTime}
        />
      ))}
    </tbody>
  );
}
