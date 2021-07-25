import "./Button.scss";

export default function Button(props) {
  return (
    <div className={`button ${props.className}`}>
      <button
        type="button"
        className="button__elem"
        onClick={props.handleClick}
      >
        {props.text}
      </button>
    </div>
  );
}
