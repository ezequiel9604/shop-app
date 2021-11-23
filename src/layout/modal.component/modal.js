import "./css-styles/styles.css";

function Modal(props) {
  return (
    <div
      id="modal"
      style={props.show ? { display: "block" } : { display: "none" }}
    >
      <div className="modal-content">
        <button
          onClick={() => props.onClose()}
          className="material-icons-outlined btn-close-modal"
        >close</button>
        <span className="title-modal">{props.title}:</span>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
