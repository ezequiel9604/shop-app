import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Alert from "../alert.component/alert";
import "./css-styles/styles.css";

function Login(props) {

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [emailInput, setEmailInput] = useState("johndoe@gmail.com");
  const [passwordInput, setPasswordInput] = useState("mypassword");

  function hideAlertHandler() {
    setIsAlertOpen(false);
  }

  function changeEmailInput(event) {
    setEmailInput(event.target.value);
  }

  function changePasswordInput(event) {
    setPasswordInput(event.target.value);
  }

  function submitHandler(ev) {
    ev.preventDefault();
    if (emailInput && passwordInput) {
      
      fetch("http://localhost:8080/login",{
        method: "POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          email: emailInput,
          psw: passwordInput,
        }),
      })
      .then(function(res){
        return res.text();
      })
      .then(function(data){

        if(JSON.parse(data)){
          localStorage.setItem("auth_user", data);
          window.location.assign("http://localhost:3000");
        }
        else{
          setIsAlertOpen(true);
        }
        
      })
      .catch(function(err){
        alert(err);
      });
      
    } else{
      setIsAlertOpen(true);
    }
    
    

  }

  return (
    <div id="login">
      <Link to="/" className="login-logo">
        ShopSite
      </Link>
      {isAlertOpen && <Alert />}
      <form onSubmit={submitHandler} className="form-login">
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
            type="submit"
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
