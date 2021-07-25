import "./Button.scss";

export default function Button(props) {
  return (
    <button
      type="button"
      className={`button__elem ${props.className}`}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
}
