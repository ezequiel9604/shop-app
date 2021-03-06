import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../alert.component/alert";

import "./css-styles/styles.css";

function Signup() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  function verificationHandler() {
    setIsAlertOpen(true);
  }

  function hideAlertHandler() {
    setIsAlertOpen(false);
  }

  return (
    <div id="signup">
      <Link to="/" className="login-logo">
        ShopSite
      </Link>

      {isAlertOpen && <Alert />}

      <form className="form-login" action="/" method="post">
        <h3>Crear una Cuenta</h3>
        <article>
          <div className="inline-box">
            <label>
              Nombre y Apellido: <strong>*</strong>
            </label>
            <input
              onFocus={hideAlertHandler}
              type="text"
              placeholder="nombre y apellido aqui..."
            />
          </div>
          <div className="inline-box">
            <label>
              Dirección de correo: <strong>*</strong>
            </label>
            <input type="email" placeholder="Correo electronico aqui..." />
          </div>
        </article>

        <article>
          <div className="inline-box">
            <label>
              Contraseña: <strong>*</strong>
            </label>
            <input type="password" placeholder="contraseña aqui..." />
          </div>
          <div className="inline-box">
            <label>
              Repetir contraseña:<strong>*</strong>
            </label>
            <input type="password" placeholder="contraseña aqui..." />
          </div>
        </article>

        <article>
          <div className="inline-box">
            <label>
              Fecha de nacimiento: <strong>*</strong>
            </label>
            <input type="date" />
          </div>
          <div className="inline-box">
            <label>
              Teléfono: <strong>*</strong>
            </label>
            <input type="text" placeholder="telefono aqui..." />
          </div>
        </article>

        <article>
          <div className="block-box">
            <label>
              Dirección: <strong>*</strong>
            </label>
            <input type="text" id="street-no" placeholder="casa #" />
            <input type="text" id="street" placeholder="calle y apartamento" />
            <select name="city" id="">
              <option value="">Seleciona el sector</option>
              <option value="">Villa eloisa (Brisas del este)</option>
              <option value="">Los Frailes I</option>
              <option value="">Los Frailes II</option>
              <option value="">Invivienda</option>
              <option value="">Villa Mella</option>
            </select>
            <select name="state" id="">
              <option value="">Selecciona la ciudad</option>
              <option value="">Santo domingo este</option>
              <option value="">Santo domingo norte</option>
              <option value="">Zona Oriental</option>
            </select>
          </div>
        </article>

        <article>
          <div className="radio-box">
            <h5>
              Genero: <strong style={{ color: "red" }}>*</strong>
            </h5>
            <label htmlFor="female">
              <input type="radio" name="gender" id="female" defaultChecked />{" "}
              Mujer
            </label>
            <label htmlFor="male">
              <input type="radio" name="gender" id="male" /> Hombre
            </label>
          </div>
        </article>
        <br />
        <article>
          <div className="block-box">
            <button
              onClick={verificationHandler}
              type="button"
              className="btn-form btn-form-login"
            >
              Crear una cuenta
            </button>
            <p>
              Al hacer clic en "Crear una cuenta", confirmo que he leído y
              acepto los
              <Link to="/"> Términos y Condiciones</Link>.
            </p>
          </div>
        </article>
      </form>

      <div className="create-account">
        <span>Ya tienes una cuenta?</span>
        <Link to="/login" className="btn-form btn-form-create">
          Accede ahora
        </Link>
      </div>
    </div>
  );
}

export default Signup;
