
import { Route, Switch } from 'react-router-dom';

import './css/css_reset.css';
import './css/general_styles.css';

import Header from './header.component/header';
import Section from './section.component/section';
import Footer from './footer.component/footer';


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

            <Switch>
                <Route path='/' exact={true}>
                    <Section />
                </Route>
            </Switch>

            <Footer />
        </div>
    );
}


export default App;