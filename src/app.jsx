
import { Route, Switch } from 'react-router-dom';

import './css/css_reset.css';
import './css/general_styles.css';

import Header from './layout/header.component/header';
import Footer from './layout/footer.component/footer';

import Home from './pages/home.component/home';
import SearchResults from './pages/searchResults.component/searchResults';
import ItemDetails from './pages/itemDetails.component/itemDetails';

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
        <div>
            <Header dummy_data={DUMMY_DATA} />

            <main>
                <Switch>
                    <Route path='/' exact={true}>
                        <Home />
                    </Route>

                    <Route path='/searchResults'>
                        <SearchResults />
                    </Route>

                    <Route path='/itemDetails'>
                        <ItemDetails />
                    </Route>

                </Switch>
            </main>

            <Footer />
        </div>
    );
}


export default App;