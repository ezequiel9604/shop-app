import React, { Component } from 'react';
import image from './images/smart-tv.png';
import './css-styles/css-reset.css';
import './css-styles/styles.css';
import './css-styles/responsive-device-styles.css';
import MostViewed from './most-viewed';

class OfferViewed extends Component {
    state = {  
        articles:[
            {id: 1, retailPrice: 1200, offerPrice: 1100, imageArt: image, views: 6},
            {id: 2, retailPrice: 1000, offerPrice: 950, imageArt: image, views: 2},
            {id: 3, retailPrice: 1525, offerPrice: 0, imageArt: image, views: 60},
            {id: 4, retailPrice: 800, offerPrice: 700, imageArt: image, views: 4},
            {id: 5, retailPrice: 700, offerPrice: 675, imageArt: image, views: 15},
            {id: 6, retailPrice: 600, offerPrice: 550, imageArt: image, views: 11},
            {id: 7, retailPrice: 500, offerPrice: 475, imageArt: image, views: 13}
        ]
    };

    // this method finds what articles have the most numbers of views,
    // and then return them.
    getMostViewedArticles(){
        const arts = this.state.articles.map(art => art.views);
        let first_max = arts[0];
        for (let i = 0; i < arts.length; i++) {
            if(arts[i] > first_max) first_max = arts[i];  
        }

        arts.splice(arts.indexOf(first_max), 1);

        let second_max = arts[0];
        for (let i = 0; i < arts.length; i++) {
            if(arts[i] > second_max) second_max = arts[i];  
        }

        return this.state.articles.filter(art => 
            (art.views === first_max || art.views === second_max));
    }

    render() { 

        return (  
            <React.Fragment>
                <div className="offer-view-articles-container">
	
                <div className="ctn-l">

                    <div className="slides-mostviewed-container">
                        
                        {/*slides container*/}
                        <div className="slides-container">
                            
                            {/*slides*/ }
                            <div className="slides animated-slides">		
                                <div className="slide-information">
                                    <h2>1 Lorem ipsum dolor sit amet, consectetur, adipisicing elit atque deleniti reiciendis rerum.</h2>
                                    <a href={"/"}><strong>ver más</strong> <span className="material-icons-sharp">east</span></a>
                                </div>
                                <div className="slide-bkg-image">
                                    <img src={image} />
                                </div>

                            </div>	

                            {/*slides*/ }
                            <div className="slides">
                                <div className="slide-information">
                                    <h2>2 Lorem ipsum dolor sit amet, consectetur, adipisicing elit atque deleniti reiciendis rerum.</h2>
                                    <a href={"/"}><strong>ver más</strong> <span className="material-icons-sharp">east</span></a>
                                </div>

                                <div className="slide-bkg-image">
                                    <img src={image} />
                                </div>

                            </div>	

                            {/*slides*/ }
                            <div className="slides">
                                <div className="slide-information">
                                    <h2>3 Lorem ipsum dolor sit amet, consectetur, adipisicing elit atque deleniti reiciendis rerum.</h2>
                                    <a href={"/"}><strong>ver más</strong> <span className="material-icons-sharp">east</span></a>
                                </div>

                                <div className="slide-bkg-image">
                                    <img src={image} />
                                </div>

                            </div>	

                            {/*slides controls*/ }
                            {/*<div className="ctl-slides">
                                <button><span className="material-icons-sharp">west</span></button>
                                <button><span className="material-icons-sharp">east</span></button>
                            </div>*/}

                        </div>	

                        {/*most viewed articles container*/}
                        <MostViewed articles={this.getMostViewedArticles()} onFormatPrice={this.formatPrice} />
                    
                    </div>

                    {/* offer article container */}
                    <div className="offer-container">

                        <h3>En ofertas</h3>		
                        <div className="offer-samples-container">
                            
                            {this.getOfferArticles().map(art => {return (
                                <div className="samples" key={art.id}>
                                    <span className="descount">
                                    {parseInt(((art.retailPrice-art.offerPrice) / art.retailPrice)*100)}%
                                    </span>
                                    <a href={"/"} className="headers">
                                        <img src={art.imageArt}/>
                                    </a>
                                    <div className="price">
                                        <span className="offer">${this.formatPrice(art.offerPrice)}</span>
                                        <span className="retail">${this.formatPrice(art.retailPrice)}</span>
                                    </div>
                                </div> 
                            );
                            })}

                        </div>	

                    </div>

                    {/* advertisement container */}
                    <div className="advertisement-container">
                        <div>
                            <span className="material-icons">local_shipping</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere excepturi blanditiis labore deleniti facilis.</p>
                        </div>
                        <div>
                            <span className="material-icons">verified_user</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere excepturi blanditiis labore deleniti facilis.</p>
                        </div>
                        <div>
                            <span className="material-icons">payment</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere excepturi blanditiis labore deleniti facilis.</p>
                        </div>	
                        <div>
                            <span className="material-icons">support_agent</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere excepturi blanditiis labore deleniti facilis.</p>
                        </div>	
                    </div>

                </div>	
            </div>
            </React.Fragment>
        );
    }

    // this method adds a coma ',' if price is formed of 4 digits.
    // otherwise returns just price
    formatPrice(price){
        let text = price + "";

        if(text.length > 3){

            let array = text.split(""); 

            array.splice(1, 0, ",");   

            return array.join("");  
        }

        return price;
    }

    //this method returns only 5 articles in offer,
    // if offer price is higher than 0, it means article is in offer.
    getOfferArticles(){
       
        const offer_articles = this.state.articles.filter(art => art.offerPrice > 0);

        return offer_articles.slice(0, 5); 
    }


}
 
export default OfferViewed;