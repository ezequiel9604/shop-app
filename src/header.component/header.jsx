import React, { Component } from 'react';
import './css-styles/css-reset.css';
import './css-styles/first-part-styles.css';
import logo from './images/profile2.png';
import userImage from './images/paris-1.jpg';
import PromoBanner from './promo-banner';

class Header extends Component {
    
    state = { 
        user:{
            name: "Sarah Doe",
            image: userImage,
            counterCart: 4,
            counterFavorites: 13,
        },
        isUserLog: false
    }

    render() { 
        return (  
            <React.Fragment>

                <PromoBanner />

                <header className="top-main-header">
	
                <div className="ctn-l">
                    
                    <div className="second-part">
                            
                        <div>
                            <p>Ayuda, Llama al Tel.: 809-111-2000</p>
                            <button type="button">Chat online</button>
                        </div>

                        <div>
                            <button type="button" id="btn-header-signin">

                                {this.checkUserLog().imageUser}
                                
                                <p>{this.checkUserLog().nameUser}</p>

                                <ul className="option-account-list">
                                    <article className="brigde"></article>

                                    {this.checkUserLog().buttonSignin}

                                    <a href={'/'} className="links">Mi perfil</a>
                                    <a href={'/'} className="links">Mis pedidos</a>
                                    <a href={'/'} className="links">Mis favoritos</a>
                                    <a href={'/'} className="links">Rastrear pedido</a>
                                </ul>

                            </button>
                            <button type="button">
                                {this.checkUserLog().buttonSignup}
                            </button>
                            
                        </div>

                    </div>

                    <div className="first-part">

                        <div className="inside-content">
                            
                            <div className="logo-content">

                                <button type="button" className="btn-sidebar-open">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </button> 

                                <a href={'/'}>
                                    <img src={logo} alt="Logo" />
                                </a>
                            </div>

                            <div className="search-content">
                                
                                <div className="dropdown-category">
                                        
                                    <p>Departamentos</p>
                                    <span className="material-icons-sharp">arrow_drop_down</span>

                                    <ul className="dropdown-category-list">
                                        <li>
                                            Link 1 

                                            <ul className="subdropdown-category-list">
                                                <li>Link 1.1</li>
                                                <li>Link 1.2</li>
                                                <li>Link 1.3</li>
                                            </ul>

                                        </li>
                                        <li>
                                            Link 2 
                                            <ul className="subdropdown-category-list">
                                                <li>Link 2.1</li>
                                                <li>Link 2.2</li>
                                                <li>Link 2.3</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Link 3 
                                            <ul className="subdropdown-category-list">
                                                <li>Link 3.1</li>
                                                <li>Link 3.2</li>
                                                <li>Link 3.3</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Link 4 
                                            <ul className="subdropdown-category-list">
                                                <li>Link 4.1</li>
                                                <li>Link 4.2</li>
                                                <li>Link 4.3</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Link 5 
                                            <ul className="subdropdown-category-list">
                                                <li>Link 5.1</li>
                                                <li>Link 5.2</li>
                                                <li>Link 5.3</li>
                                            </ul>
                                        </li>

                                    </ul>
                                </div>	

                                <input type="search" name="" placeholder="Que buscas?" />

                                <button type="button">
                                    <span className="material-icons-sharp">search</span>
                                </button>

                            </div>

                            <div className="cart-favorite-buttons">

                                <button type="button">
                                    <span className="material-icons-outlined">shopping_cart</span>	
                                    <i>{this.state.user.counterCart}</i>
                                </button>
                                <button type="button">
                                    <span className="material-icons-outlined">favorite_border</span>	
                                    <i>{this.state.user.counterFavorites}</i>
                                </button>

                            </div>

                        </div>	

                    </div>

                </div>	

                </header>

            </React.Fragment>

        );
    }

    checkUserLog(){    
        // If user is not logged in, it will return an objects with this properties.
        let userNotLog = {
            imageUser: <span className="material-icons-sharp icon-accnt">person</span>,
            nameUser: "Entrar",
            buttonSignup:  <a href={'/'} className="btn-sign-up">Registrarse!</a>,
            buttonSignin: <a href={'/'} className="btn-sign-in">Identifícate</a>
        }

        // If user is logged in, it will return an objects with this properties.
        let userIsLog = {
            imageUser: <img src={this.state.user.image} alt="User Image"/>,
            nameUser: this.state.user.name,
            buttonSignup: <a href={'/'} className="btn-sign-up">Cerrar session!</a>,
            buttonSignin: undefined
        }

        // Based on user status (log in or not) it will return an object with propierties 
        // and related values to be show up on header component.
        return this.state.isUserLog === false? userNotLog : userIsLog; 
    }

}
 
export default Header;