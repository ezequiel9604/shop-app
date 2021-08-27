import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Alert from '../alert.component/alert';

import './css-styles/styles.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showAlert: false
        }

        this.verificationHandler = this.verificationHandler.bind(this);
        this.hideAlertHandler = this.hideAlertHandler.bind(this);
    }

    verificationHandler(){
        
        const email = this.inpEmail.value;
        const pass = this.inpPassword.value;
        //const remember = this.inpRemember.checked

        if(email !== 'john01@gmail.com' || pass !== 'john01'){
            this.setState({ showAlert: true });
        }

    }

    hideAlertHandler(){
        this.setState({ showAlert: false });
    }

    render() { 
        return (  
            <div id="login">
                
                <Link to="/" className="login-logo">Zenuben</Link>

                {(this.state.showAlert && <Alert />)}

                <form action="/" method="post" className="form-login">
                    <h3>Iniciar Sesión</h3>
                    <div className="input-box">
                        <label>Dirección de correo:</label>
                        <input ref={(elem) => (this.inpEmail = elem)} onFocus={this.hideAlertHandler}
                            type="email" placeholder="correo electronico aqui..." />
                    </div>
                    <div className="input-box">
                        <label>Contraseña:</label>
                        <input ref={(elem) => (this.inpPassword = elem)} onFocus={this.hideAlertHandler}
                            type="password" placeholder="contraseña aqui..." />
                    </div>
                    <div className="input-box">
                        <button type="button" onClick={this.verificationHandler}
                            className="btn-form btn-form-login">Iniciar Sesión</button>
                        <div className="inner-input-box">
                            <label htmlFor="rememberme" className='remember-me'>
                                <input ref={(elem) => (this.inpRemember = elem)}
                                    type="checkbox" id="rememberme" /> Recuerdame!
                            </label>
                            <Link to="/" className='forgot-pass'>Olvidaste la contraseña?</Link>
                        </div>	
                    </div>
                </form>
                <div className="create-account">
                    <span>Aún no tienes una cuenta?</span> 
                    <Link to="/signup" className="btn-form btn-form-create">Crear una cuenta</Link>
                </div>
            </div>
        );
    }
}
 
export default Login;