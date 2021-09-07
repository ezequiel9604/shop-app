
import { Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import React from 'react';

import './css/css_reset.css';
import './css/general_styles.css';

import Header from './layout/header.component/header';
import Footer from './layout/footer.component/footer';

import Home from './pages/home.component/home';
import SearchResults from './pages/searchResults.component/searchResults';
import ItemDetails from './pages/itemDetails.component/itemDetails';
import Cart from './pages/cart.component/cart';

import Login from './layout/login.component/login';
import Signup from './layout/signup.component/signup';

import SmartTv from './images/smart-tv.png';
//import UserImage from './images/user-image.jpg';

class App extends Component {

    constructor(props) {

        super(props);

        const tlt = '1 Lorem ipsum dolor sit amet consectetur adipisicing umpedit iste voluptate'+
        ' nulla reprehenderit tempore cum consequatur quis ut quidem.';

        this.state = {  

            User: null,
            /*User: {
                code: 'USR-025489', image: UserImage,
                firstName: 'Natalie', lastName: 'Portman', 
                cartArticles: ['Audi', 'Hyundai', 'Toyota', 'Nissan'],
                favoriteArticles: [
                    'Mercedes', 'Mclaren', 'Ferrari', 'Ford', 'Bugatti', 'Toyota', 'Dogde',
                    'Mercedes', 'Mclaren', 'Ferrari', 'Ford'
                ]
            },*/
            Departments : [
                'Ropa para mujer', 'Ropa para hombre', 'Carteras y Relojes', 'Calzados',
                'Electrodomésticos','Teléfonos y Comunicaciones', 'Informática y Oficina', 
                'Componentes Electrónicos', 'Entretenimiento y Video juegos', 'Herramientas del Hogar',
                'Automotriz', 
            ],
            Cart: [
                { id: 1, image: SmartTv, title: tlt , retailPrice: 1400, OfferPrice: 1200, 
                    specifications: {
                        size: 24, capacity: '4GB', color: 'black'
                    }, views: 10, amount: 1},
                { id: 2, image: SmartTv, title: tlt, retailPrice: 1150, OfferPrice: 0, 
                    specifications: {
                        size: 24, capacity: '2GB', color: 'red'
                    }, views: 2, amount: 2},
                { id: 3, image: SmartTv, title: '3'+tlt, retailPrice: 800, OfferPrice: 600, 
                    specifications: {
                        size: 24, capacity: '1GB', color: 'blue'
                    }, views: 4, amount: 3},
            ]
        }

        this.updateCartItems = this.updateCartItems.bind(this);
    }

    updateCartItems(newItems){
        this.setState({Items: newItems});
    }

    render() { 

        return (

            <Switch>
    
                <Route path='/' exact={true} >
                    <Header dummy_data={this.state} />
                        <main>
                        <Home />
                        </main>
                    <Footer />
                </Route>
    
                <Route path='/searchResults' render={(match)=>{
                    return (
                        <React.Fragment>
                            <Header dummy_data={this.state} />
                                <main>
                                <SearchResults />
                                </main>
                            <Footer />
                        </React.Fragment>
                    )
                }} />
    
                <Route path='/itemDetails'>
                    <Header dummy_data={this.state} />
                        <main>
                        <ItemDetails />
                        </main>
                    <Footer />
                </Route>
    
                <Route path='/cart' render={(match) => {
    
                    return (
                        <React.Fragment>
                            <Header dummy_data={this.state} />
                                <main>
                                <Cart items={this.state.Cart} updateItems={this.updateCartItems} />
                                </main>
                            <Footer />
                        </React.Fragment>
                    );
    
                }} />
    
                <Route path='/login'>
                    <main>
                    <Login />
                    </main>
                </Route>
    
                <Route path='/signup'>
                    <main>
                    <Signup />
                    </main>
                </Route>
    
            </Switch>
    
        );
    }
}
 
export default App;
