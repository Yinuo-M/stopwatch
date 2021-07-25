import "./Timer.scss";
import { convertToDisplayTime } from "../common/Utils";

export default function Timer(props) {
  return <h1 className="timer">{convertToDisplayTime(props.currentTime)}</h1>;
}
