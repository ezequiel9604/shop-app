import React from "react";

import "./css-styles/styles.css";

function Modal(props) {
  function closeModal() {
    props.onCloseModal();
  }

  if (props.kind === "address") {
    return (
      <div id="modal">
        <div className="modal-content">
          <button
            onClick={closeModal}
            className="material-icons-outlined btn-close-modal"
          >
            close
          </button>

          <span className="title-modal">Cambiar Dirección</span>

          <form action="/">
            <label>Dirección:</label>
            <div className="modal-input-box">
              <input type="text" id="street-no" placeholder="no." />
              <input
                type="text"
                id="street"
                placeholder="nombre de la calle y apart no."
              />
              <select name="">
                <option value="">Seleciona el sector</option>
                <option value="">brisas del este</option>
              </select>
              <select name="">
                <option value="">Seleciona la ciudad</option>
                <option value="">Santo Domingo Este</option>
                <option value="">Santo Domingo Norte</option>
              </select>
            </div>
            <button type="button">Guardar Cambios</button>
          </form>
        </div>
      </div>
    );
  } else if (props.kind === "password") {
    return (
      <div id="modal">
        <div className="modal-content">
          <button
            onClick={closeModal}
            className="material-icons-outlined btn-close-modal"
          >
            close
          </button>

          <span className="title-modal">
            Para guardar los cambios es necesario introducir la contraseña:
          </span>

          <form action="/">
            <label>Contraseña:</label>
            <input
              type="password"
              placeholder="Introducir Contraseña aqui..."
            />
            <button type="button">Guardar Cambios</button>
          </form>
        </div>
      </div>
    );
  } else if (props.kind === "confirmation") {
    return (
      <div id="modal">
        <div className="modal-content">
          <button
            onClick={closeModal}
            className="material-icons-outlined btn-close-modal"
          >
            close
          </button>
          <span className="title-modal">
            Seguro que quiere realizar esta acción:
          </span>
          <div>
            <button onClick={() => props.onModalConfirm()}>Si</button>
            <button onClick={closeModal}>No</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
