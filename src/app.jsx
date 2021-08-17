import React, { Component } from 'react';

import './css/css_reset.css';
import './css/general_styles.css';

import Header from './header.component/header';
import OfferView from './offerView.component/offerView';
import LastView from './lastView.component/lastView';

class App extends Component {
    
    render() { 
        return ( 
            <main>
                <Header />
			    <OfferView />
                <LastView />
                
            </main>
        );
    }
}
 
export default App;