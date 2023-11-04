export default function Modal(props) {
  return (
    <div className="backdrop">
      <div className="modal">{props.children}</div>
    </div>
  );
}
