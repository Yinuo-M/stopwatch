import Button from "../common/Button";
import "./Controls.scss";

export default function Controls(props) {
  const isRunning = props.isActive && !props.isPaused;
  return (
    <div className="controls">
      <Button
        className={`controls__button controls__button--${
          isRunning ? "gray" : "yellow"
        }`}
        text={isRunning ? "pause" : "start"}
        handleClick={isRunning ? props.pauseTimer : props.startTimer}
      />
      {props.isActive && (
        <div>
          <Button
            className="controls__button controls__button--gray"
            text="lap"
            handleClick={props.lapTimer}
          />
          <Button
            className="controls__button controls__button--red"
            text="reset"
            handleClick={props.resetTimer}
          />
        </div>
      )}
    </div>
  );
}
