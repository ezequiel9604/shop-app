import React, { Component } from 'react';

import './css/css_reset.css';
import './css/general_styles.css';

import Header from './header.component/header';
import OfferView from './offerView.component/offerView';

class App extends Component {
    
    render() { 
        return ( 
            <main>
                <Header />
			    <OfferView />
            </main>
        );
    }
}
 
export default App;