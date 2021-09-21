import React, { Component } from 'react';

import OfferView from './offerView.component/offerView';
import LastView from './lastView.component/lastView';
import OrderOfflineBanner from './orderOfflineBanner.component/orderOfflineBanner';

import smartTvImage from '../../images/smart-tv.png';

class Home extends Component {
    
    constructor(props){
        super(props);

        const tlt = 'Lorem ipsum dolor sit amet consectetur adipisicing'+
         'elit ipsum dolor sit amet consectetur adipisicing eli sit amet consectetur adipisicing elit';

        this.state = {
            items: [
                { id: 1, image: smartTvImage, title: tlt , retailPrice: 1400, offerPrice: 1200, status: 'Nuevo', views: 10},
                { id: 2, image: smartTvImage, title: tlt, retailPrice: 1150, offerPrice: 0, status: 'Nuevo', views: 2},
                { id: 3, image: smartTvImage, title: tlt, retailPrice: 900, offerPrice: 845, status: 'Usado', views: 60},
                { id: 4, image: smartTvImage, title: tlt, retailPrice: 800, offerPrice: 600, status: 'Nuevo', views: 4},
                { id: 5, image: smartTvImage, title: tlt, retailPrice: 570, offerPrice: 0, status: 'Usado', views: 15}, 
                { id: 6, image: smartTvImage, title: tlt, retailPrice: 1400, offerPrice: 1200, status: 'Usado', views: 36},
                { id: 7, image: smartTvImage, title: tlt, retailPrice: 1400, offerPrice: 1200, status: 'Reparado', views: 3},
                { id: 8, image: smartTvImage, title: tlt, retailPrice: 600, offerPrice: 0, status: 'Nuevo', views: 39},
                { id: 9, image: smartTvImage, title: tlt, retailPrice: 425, offerPrice: 0, status: 'Usado', views: 17}
            ]
        }
    }

    render() { 
        return (  
            <div>
                <OfferView items={this.state.items} />
                <LastView items={this.state.items} />
                <OrderOfflineBanner />
            </div>
        );
    }
    
}
 
export default Home;