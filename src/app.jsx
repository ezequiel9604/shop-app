
import { Route, Switch } from 'react-router-dom';
import React from 'react';

import './css/css_reset.css';
import './css/general_styles.css';

import Header from './layout/header.component/header';
import Footer from './layout/footer.component/footer';

import Home from './pages/home.component/home';
import SearchResults from './pages/searchResults.component/searchResults';
import ItemDetails from './pages/itemDetails.component/itemDetails';

import Login from './layout/login.component/login';
import Signup from './layout/signup.component/signup';

const DUMMY_DATA = {
    User: null,
/* user: {
        code: 'USR-025489', 
        image: userImage,
        firstName: 'Natalie', 
        lastName: 'Portman', 
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
}

function App(){

    return (

        <Switch>

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

            <Route path='/' exact={true} >
                <Header dummy_data={DUMMY_DATA} />
                    <main>
                    <Home />
                    </main>
                <Footer />
            </Route>

            <Route path='/searchResults' render={(match)=>{
                return (
                    <React.Fragment>
                        <Header dummy_data={DUMMY_DATA} />
                            <main>
                            <SearchResults />
                            </main>
                        <Footer />
                    </React.Fragment>
                )
            }} />

            <Route path='/itemDetails'>
                <Header dummy_data={DUMMY_DATA} />
                    <main>
                    <ItemDetails />
                    </main>
                <Footer />
            </Route>

        </Switch>

    );
}


export default App;