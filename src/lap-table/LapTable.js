import TableBody from "./TableBody";
import Button from "../common/Button";
import "./LapTable.scss";

export default function LapTable(props) {
  return (
    <div className="lap">
      <table className="lap__table">
        <thead className="lap__thead">
          <tr className="lap__tr-head">
            <th className="lap__th lap__th--label" scope="col">
              Label
            </th>
            <th className="lap__th lap__th--lap-time" scope="col">
              Lap time
            </th>
            <th className="lap__th lap__th--total-time" scope="col">
              Total time
            </th>
          </tr>
        </thead>
        <TableBody lapHistory={props.lapHistory} />
      </table>
      <Button className="lap__button" onClick={null} text="clear" />
    </div>
  );
}
