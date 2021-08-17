import React, { Component } from 'react';

import './css-styles/styles.css';

import Samples from '../../samples.component/samples';

import smartTvImage from '../../images/smart-tv.png';
import tabletImage from '../../images/tablet.png';
import toolboxImage from '../../images/toolbox.png';

class OfferView extends Component {

    constructor(props){
        super(props);

        this.state = {
            departments: [
                { id: 1, image: smartTvImage, name: 'departamento1', title: '1 Lorem ipsum dolor: sit amet, consectetur, adipisicing elit atque deleniti reiciendis rerum.'},
                { id: 2, image: tabletImage, name: 'departamento2', title: '2 Lorem ipsum dolor: sit amet, consectetur, adipisicing elit atque deleniti reiciendis rerum.'},
                { id: 3, image: toolboxImage, name: 'departamento3', title: '3 Lorem ipsum dolor: sit amet, consectetur, adipisicing elit atque deleniti reiciendis rerum.'},
                { id: 4, image: toolboxImage, name: 'departamento4', title: '4 Lorem ipsum dolor: sit amet, consectetur, adipisicing elit atque deleniti reiciendis rerum.'},
                { id: 5, image: toolboxImage, name: 'departamento5', title: '5 Lorem ipsum dolor: sit amet, consectetur, adipisicing elit atque deleniti reiciendis rerum.'},
                { id: 6, image: toolboxImage, name: 'departamento6', title: '6 Lorem ipsum dolor: sit amet, consectetur, adipisicing elit atque deleniti reiciendis rerum.'}
            ],
            articles: [
                { id: 1, image: smartTvImage, title: null, retailPrice: 1400, OfferPrice: 1200, status: 'new', views: 10},
                { id: 2, image: smartTvImage, title: null, retailPrice: 1150, OfferPrice: 1000, status: 'new', views: 2},
                { id: 3, image: smartTvImage, title: null, retailPrice: 900, OfferPrice: 845, status: 'used', views: 60},
                { id: 4, image: smartTvImage, title: null, retailPrice: 800, OfferPrice: 600, status: 'new', views: 4},
                { id: 5, image: smartTvImage, title: null, retailPrice: 570, OfferPrice: 520, status: 'used', views: 15}, 
                { id: 6, image: smartTvImage, title: null, retailPrice: 1400, OfferPrice: 1200, status: 'used', views: 36},
                { id: 7, image: smartTvImage, title: null, retailPrice: 1400, OfferPrice: 1200, status: 'repair', views: 3},
                { id: 8, image: smartTvImage, title: null, retailPrice: 600, OfferPrice: 0, status: 'new', views: 39},
                { id: 9, image: smartTvImage, title: null, retailPrice: 425, OfferPrice: 0, status: 'used', views: 17}
            ]
        }
    }

    //returns 5 articles in offer
    getArticlesInOffer() {
        const arts = this.state.articles.filter((art) => {return art.OfferPrice > 0});
        return arts.slice(0, 5);
    }
    
    // returns the most viewed articles
    getMostViewedArticles(){
        // creates an array of numbers with view values
        const views = this.state.articles.map((val) => {return val.views});

        let firstMax = views[0];
        let secondMax = views[1];
        
        // assings max number to firstMax
        for(let n of views){
            if(n > firstMax)
                firstMax = n;        
        }

        // assings the second max number to secondMax but different to firstMax
        for(let n of views){
            if(n > secondMax && n !== firstMax)
                secondMax = n;
        }

        return this.state.articles.filter((val) => 
            {return (val.views === firstMax || val.views === secondMax)});   

    }

    render() { 

        return ( 

            <div id='offer-view'>
                
                <div className="slides-mostviewed-container">
                
                    <div className="slides-container slides-container-departments">

                    {this.state.departments.map((val, ind, arr) => {

                        return (
                            <div key={ind} className={(ind===0)?'slides slides-departments animated-slides':'slides slides-departments'} >		
                                <div className="slide-information">
                                    <h2>{val.title}</h2>
                                    <a href={'/'+val.name}>ver más <span className="material-icons-sharp">east</span></a>
                                </div>
                                <div className="slide-bkg-image">
                                    <img src={val.image} alt='' />
                                </div>
                            </div>
                        );
                    })}

                    </div>	

                    <div className="most-viewed-container">

                        <h3>Mas vistos</h3>
                        
                        <div className="most-viewed-samples-container">

                            {this.getMostViewedArticles().map((val, ind, arr) => {
                                if(val.OfferPrice === 0){
                                    return ( <Samples article={val} isOffered={false} key={ind} /> );
                                }

                                return ( <Samples article={val} isOffered={true} key={ind} /> );
                            })}
                            
                        </div>

                    </div>

                </div>

                <div className="offer-container">

                    <h3>En ofertas</h3>		
                    
                    <div className="offer-samples-container">

                        {this.getArticlesInOffer().map((val, ind, arr) => {

                            return ( <Samples article={val} isOffered={true} key={ind} /> );

                        })}
                        
                    </div>	

                </div>

                <div className="advertisement-container">
                    <div>
                        <span className="material-icons">local_shipping</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere excepturi blanditiis labore deleniti facilis. Facere excepturi blanditiis labore deleniti facilis</p>
                    </div>
                    <div>
                        <span className="material-icons">verified_user</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere excepturi blanditiis labore deleniti facilis.</p>
                    </div>
                    <div>
                        <span className="material-icons">support_agent</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere excepturi blanditiis labore deleniti facilis. Facere excepturi blanditiis labore.</p>
                    </div>	
                </div>

            </div>

        );
    }
}
 
export default OfferView;