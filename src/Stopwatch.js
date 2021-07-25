import Timer from "./timer/Timer";
import Controls from "./controls/Controls";
import LapTable from "./lap-table/LapTable";

export default function Stopwatch() {
  return (
    <div className="stopwatch">
      <Timer />
      <Controls />
      <LapTable />
    </div>
  );
}
