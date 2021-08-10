
import React, { Component } from 'react';

import '../css/css_reset.css';
import '../css/general_styles.css';

import './css-styles/first_part_styles.css';
import './css-styles/second_part_styles.css';

import manAvatar from '../images/placeholder-man.png';
import womanAvatar from '../images/placeholder-woman.png';
import userImage from '../images/user-image.jpg';

import PromoBanner from './promoBanner';

class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: null,
            /*user: {
                code: 'USR-025489', 
                image: userImage,
                firstName: 'Natalie', lastName: 'Portman', 
                cartArticles: ['Audi', 'Hyundai', 'Toyota', 'Nissan'],
                favoriteArticles: ['Mercedes', 'Mclaren', 'Ferrari']
            },*/
            departments : [
                'Ford', 'Toyota', 'Honda', 'Mercedes', 'Tesla', 
                'Nissan', 'Mclaren', 'BMW', 'Alfa Romero', 'Abarth',
                'Aston martin', 'Audi', 'Bentley', 'Chevrolet', 'Citroen',
                'Ferrari', 'Fiat', 'Hyundai', 'Jaguar', ],
                      
            suggestions: []
        }
    }

    isUserLogin = () => {
        const { user } = this.state;

        if(user === null){
            return (
                <React.Fragment>
                    <img src={womanAvatar} />
                    <p>Entrar</p>
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <img src={user.image} />
                <p>{user.firstName}</p>
            </React.Fragment>
        )
    }

    findSuggestions = (event) => {
        let {departments } = this.state;
        let sugs = [];
        let keyWord = event.target.value.toLowerCase();

        for(let d of departments){
            let element = d.toLowerCase();
            if(element.search(keyWord) !== -1 && keyWord !== ''){
                sugs.push(d);
            }
        }

        this.setState({ suggestions : sugs});
    }

    isSuggestionsEmpty = () =>{
        if(this.state.suggestions.length === 0){
            return {display: 'none'};
        }
        return {display: 'block'};
    }
    
    render(){
        return (
            <React.Fragment>

                <PromoBanner />

                <header id="top-main-header">
	
                    <div className="second-part">
                            
                        <div>
                            <p>Ayuda, Llama al Tel.: 809-111-2000</p>
                            <button type="button">Chat online</button>
                        </div>

                        <div>
                            <button type="button" id="btn-header-login">

                                {this.isUserLogin()}

                                <ul className="option-account-list">
                                    
                                    {this.state.user === null? 
                                    <a href="/login" className="header-principal-links">Identifícate</a> : null}

                                    <a href="/profile" className="header-links">Mi perfil</a>
                                    <a href="orders" className="header-links">Mis pedidos</a>
                                    <a href="favorites" className="header-links">Mi lista favoritos</a>
                                    <a href="trackOrder" className="header-links">Rastrear pedido</a>
                                </ul>

                            </button>
                            <button type="button">
                            {
                                this.state.user === null? 
                                <a href="/signup" id="btn-header-signup">Registrarse!</a> : 
                                <a href="/logout" id="btn-header-signup">Cerrar Sessión</a> }
                               
                            </button>
                        </div>

                    </div>

                    <div className="first-part">
                            
                        <div className="header-logo">

                            <button type="button" id="btn-open-sidebar">
                                <div></div>
                                <div></div>
                                <div></div>
                            </button> 

                            <a href="/">Zigzol</a>
                        </div>

                        <form action='/search' method='get' className="header-search">
                            
                            <div className="dropdown-department">
                                    
                                <p>Departamentos</p>
                                <span className="material-icons-sharp">arrow_drop_down</span>

                                <ul className="dropdown-department-list">
                                {
                                    this.state.departments.map((val, ind, arr) => {
                                        return  <a href={'/search?keyword='+val} key={ind}>{val}</a>;
                                    })
                                }
                                </ul>
                            </div>	

                            <input type="search" name='keyword' onChange={this.findSuggestions} autoComplete='off' placeholder="Que buscas?" />

                            <div className="header-search-suggestions" style={this.isSuggestionsEmpty()}>
                                {
                                    this.state.suggestions.map((val, ind, arr) =>  {
                                       return <a href={'/search?keyword='+val} key={ind}>{val}</a>;
                                    })
                                }
                            </div>

                            <button type="submit">
                                <span className="material-icons-sharp">search</span>
                            </button>

                        </form>

                        <div className="header-cart-favorite">
                            <a href="/cart">
                                <span className="material-icons-outlined">shopping_cart</span>	
                                <i>{this.state.user === null? 0 : this.state.user.cartArticles.length}</i>
                            </a>
                            <a href="/favorites">
                                <span className="material-icons-outlined">favorite_border</span>	
                                <i>{this.state.user === null? 0 : this.state.user.favoriteArticles.length}</i>
                            </a>
                        </div>

                    </div> 

                </header>	

            </React.Fragment>
        )
    }


}
 
export default Header;