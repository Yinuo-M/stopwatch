import "./Button.scss";

export default function Button(props) {
  return (
    <button
      type="button"
      className={`button ${props.className}`}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
}
