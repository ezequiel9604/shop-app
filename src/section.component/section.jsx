import React, { Component } from 'react';

import OfferView from './offerView.component/offerView';
import LastView from './lastView.component/lastView';
import OrderOfflineBanner from './orderOfflineBanner.component/orderOfflineBanner';

import smartTvImage from '../images/smart-tv.png';

class Section extends Component {
    
    constructor(props){
        super(props);

        const tlt = 'Lorem ipsum dolor sit amet consectetur adipisicing'+
         'elit ipsum dolor sit amet consectetur adipisicing eli sit amet consectetur adipisicing elit';

        this.state = {
            articles: [
                { id: 1, image: smartTvImage, title: tlt , retailPrice: 1400, OfferPrice: 1200, status: 'Nuevo', views: 10},
                { id: 2, image: smartTvImage, title: tlt, retailPrice: 1150, OfferPrice: 0, status: 'Nuevo', views: 2},
                { id: 3, image: smartTvImage, title: tlt, retailPrice: 900, OfferPrice: 845, status: 'Usado', views: 60},
                { id: 4, image: smartTvImage, title: tlt, retailPrice: 800, OfferPrice: 600, status: 'Nuevo', views: 4},
                { id: 5, image: smartTvImage, title: tlt, retailPrice: 570, OfferPrice: 0, status: 'Usado', views: 15}, 
                { id: 6, image: smartTvImage, title: tlt, retailPrice: 1400, OfferPrice: 1200, status: 'Usado', views: 36},
                { id: 7, image: smartTvImage, title: tlt, retailPrice: 1400, OfferPrice: 1200, status: 'Reparado', views: 3},
                { id: 8, image: smartTvImage, title: tlt, retailPrice: 600, OfferPrice: 0, status: 'Nuevo', views: 39},
                { id: 9, image: smartTvImage, title: tlt, retailPrice: 425, OfferPrice: 0, status: 'Usado', views: 17}
            ]
        }
    }

    render() { 
        return (  
            <main>
                <OfferView articles={this.state.articles} />
                <LastView articles={this.state.articles} />
                <OrderOfflineBanner />
            </main>
        );
    }
    
}
 
export default Section;