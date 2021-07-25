import Button from "./Button";

export default function Controls() {
  return (
    <div className="controls">
      <Button
        className="controls__button controls__button--yellow"
        text="start"
        handleClick={null}
      />
      <Button
        className="controls__button controls__button--gray"
        text="lap"
        handleClick={null}
      />
      <Button
        className="controls__button controls__button--red"
        text="reset"
        handleClick={null}
      />
    </div>
  );
}
