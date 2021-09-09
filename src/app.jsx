
import { Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import React from 'react';

import './css/css_reset.css';
import './css/general_styles.css';

import Layout from './layout/layout';
import Modal from './pages/modal.component/modal';

import Home from './pages/home.component/home';
import SearchResults from './pages/searchResults.component/searchResults';
import ItemDetails from './pages/itemDetails.component/itemDetails';
import Cart from './pages/cart.component/cart';
import Orders from './pages/orders.component/orders';
import OrderDetails from './pages/orderDetails.component/orderDetails';

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
            ],
            isModalWindowOpen: false
        }

        this.updateCartItems = this.updateCartItems.bind(this);
        this.changeStateModalHandler = this.changeStateModalHandler.bind(this);
    }

    updateCartItems(newItems){
        this.setState({Cart: newItems});
    }

    changeStateModalHandler(){
        this.setState((state)=> ({
            isModalWindowOpen: !state.isModalWindowOpen
        }));
    }

    render() { 

        return (

            <Switch>
    
                <Route path='/' exact={true} >
                    <Layout dummy_data={this.state}>
                        <Home />
                    </Layout>
                </Route>
    
                <Route path='/searchResults' render={(match)=>{
                    return (
                        <Layout dummy_data={this.state}>
                            <SearchResults />
                        </Layout>
                    );
                }} />
    
                <Route path='/itemDetails'>
                    <Layout dummy_data={this.state}>
                        <ItemDetails />
                    </Layout>
                </Route>
    
                <Route path='/cart' >
                    <Layout dummy_data={this.state}>
                        <Cart items={this.state.Cart} 
                            updateItems={this.updateCartItems}
                            onOpenModal={this.changeStateModalHandler} />
                    </Layout>
                    {(this.state.isModalWindowOpen) && 
                    <Modal kind='confirmation' onCloseModal={this.changeStateModalHandler} />}
                </Route>

                <Route path='/orders'>
                    <Layout dummy_data={this.state}>
                        <Orders />
                    </Layout>
                </Route>

                <Route path='/orderDetails'>
                    <Layout dummy_data={this.state}>
                        <OrderDetails onOpenModal={this.changeStateModalHandler} />
                    </Layout>
                    {(this.state.isModalWindowOpen) && 
                    <Modal kind='address' onCloseModal={this.changeStateModalHandler} />}
                </Route>
    
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
