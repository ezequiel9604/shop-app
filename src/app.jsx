import React, { Component } from 'react';

import './css/css_reset.css';
import './css/general_styles.css';

import Header from './header.component/header';
import Section from './section.component/section';
import Footer from './footer.component/footer';

class App extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                <Header />
                <Section />
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default App;