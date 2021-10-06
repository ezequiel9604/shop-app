import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../alert.component/alert";

import "./css-styles/styles.css";

function Login() {
  //  PROPERTIES
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // METHODS
  function hideAlertHandler() {
    setIsAlertOpen(false);
  }

  function changeEmailInput(event) {
    setEmailInput(event.target.value);
  }

  function changePasswordInput(event) {
    setPasswordInput(event.target.value);
  }

  function verificationHandler() {
    if (emailInput === "" || passwordInput === "") {
      setIsAlertOpen(true);
    } else {
      console.log("data sent");
    }
  }

  // RENDERING
  return (
    <div id="login">
      <Link to="/" className="login-logo">
        ShopSite
      </Link>
      {isAlertOpen && <Alert />}
      <form action="/" method="post" className="form-login">
        <h3>Iniciar Sesión</h3>
        <div className="input-box">
          <label>Dirección de correo:</label>
          <input
            value={emailInput}
            onChange={changeEmailInput}
            onFocus={hideAlertHandler}
            type="email"
            placeholder="correo electronico aqui..."
          />
        </div>
        <div className="input-box">
          <label>Contraseña:</label>
          <input
            value={passwordInput}
            onChange={changePasswordInput}
            onFocus={hideAlertHandler}
            type="password"
            placeholder="contraseña aqui..."
          />
        </div>
        <div className="input-box">
          <button
            type="button"
            onClick={verificationHandler}
            className="btn-form btn-form-login"
          >
            Iniciar Sesión
          </button>
          <div className="inner-input-box">
            <label htmlFor="rememberme" className="remember-me">
              <input type="checkbox" id="rememberme" /> Recuerdame!
            </label>
            <Link to="/" className="forgot-pass">
              Olvidaste la contraseña?
            </Link>
          </div>
        </div>
      </form>
      <div className="create-account">
        <span>Aún no tienes una cuenta?</span>
        <Link to="/signup" className="btn-form btn-form-create">
          Crear una cuenta
        </Link>
      </div>
    </div>
  );
}

export default Login;
