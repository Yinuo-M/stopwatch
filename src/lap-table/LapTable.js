import TableBody from "./TableBody";

export default function LapTable() {
  return (
    <div className="lap">
      <table className="lap__table">
        <thead className="lap__thead">
          <tr className="lap__tr-head">
            <th className="lap__th" scope="col">
              Lap
            </th>
            <th className="lap__th" scope="col">
              Lap time
            </th>
            <th className="lap__th" scope="col">
              Total time
            </th>
          </tr>
        </thead>
        <TableBody />
      </table>
    </div>
  );
}
