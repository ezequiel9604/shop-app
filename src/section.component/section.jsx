import React, { Component } from 'react';

import OfferView from './offerView.component/offerView';
import LastView from './lastView.component/lastView';
import OrderOfflineBanner from './orderOfflineBanner.component/orderOfflineBanner';

class Section extends Component {
    
    render() { 
        return (  
            <main>
                <OfferView />
                <LastView />
                <OrderOfflineBanner />
            </main>
        );
    }
}
 
export default Section;