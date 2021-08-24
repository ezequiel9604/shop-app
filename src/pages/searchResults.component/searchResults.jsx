
import React, { Component } from 'react';

import './css-styles/styles.css';

import smartTvImage from '../../images/smart-tv.png';

import SideBarFilter from './sideBarFilter.component/sideBarFilter';
import SampleColumn from '../samples.component/samplesColumn';


class SearchResults extends Component {

    constructor(props) {
        super(props);
        
        const tlt = 'Rorem ipsum dolor sit amet consectetur adipisicing'+
         'elit ipsum dolor sit amet consectetur adipisicing eli sit amet consectetur adipisicing elit';

        this.state = {
            articles: [
                { id: 1, image: smartTvImage, title: tlt , retailPrice: 1850, OfferPrice: 1700,
                     status: 'Nuevo', views: 10, quality: 4.8},
                { id: 2, image: smartTvImage, title: tlt, retailPrice: 1150, OfferPrice: 0,
                     status: 'Nuevo', views: 2, quality: 3.5},
                { id: 3, image: smartTvImage, title: tlt, retailPrice: 900, OfferPrice: 845,
                     status: 'Usado', views: 60, quality: 0.8},
                { id: 4, image: smartTvImage, title: tlt, retailPrice: 800, OfferPrice: 600,
                     status: 'Nuevo', views: 4, quality: 4.6},
                { id: 5, image: smartTvImage, title: tlt, retailPrice: 570, OfferPrice: 0,
                     status: 'Usado', views: 15, quality: 3.8}, 
                { id: 6, image: smartTvImage, title: tlt, retailPrice: 1400, OfferPrice: 1200,
                     status: 'Usado', views: 36, quality: 4.2},
                { id: 7, image: smartTvImage, title: tlt, retailPrice: 1600, OfferPrice: 1400,
                     status: 'Reparado', views: 3, quality: 2.9},
                { id: 8, image: smartTvImage, title: tlt, retailPrice: 600, OfferPrice: 0,
                     status: 'Nuevo', views: 39, quality: 1.2},
                { id: 9, image: smartTvImage, title: tlt, retailPrice: 425, OfferPrice: 0,
                     status: 'Usado', views: 17, quality: 4.9}
            ],

            filterOffer: false,
            filterPrice: [0, 10000],
            filterStatus: 0,
            filterQuality: 0
        }

        this.onFilterByOffers = this.onFilterByOffers.bind(this);
        this.onFilterByPrices = this.onFilterByPrices.bind(this);
        this.onFilterByStatus = this.onFilterByStatus.bind(this);
        this.onFilterByQuality = this.onFilterByQuality.bind(this);
    }

    onFilterByOffers(value){
        this.setState({ filterOffer : value });
    }

    onFilterByPrices(value){
        this.setState({ filterPrice : value });
    }

    onFilterByStatus(value){
        this.setState({ filterStatus: value });
    }

    onFilterByQuality(value){
        this.setState({ filterQuality: value});
    }

    getArticlesOnFilter(){

        const { filterPrice } = this.state;

        let arts = this.state.articles.filter((val) => {
            if(this.state.filterOffer){
                return (val.OfferPrice > 0 && 
                    val.retailPrice >= filterPrice[0] && 
                    val.retailPrice <= filterPrice[1]);
            }
            return (val.OfferPrice >= 0 && 
                val.retailPrice >= filterPrice[0] && 
                val.retailPrice <= filterPrice[1]);
        });

        arts = arts.filter((val) => {
            if(this.state.filterStatus === 1){
                return (val.status === 'Nuevo');
            }
            else if(this.state.filterStatus === 3){
                return (val.status === 'Usado');
            }
            else if(this.state.filterStatus === 5){
                return (val.status === 'Reparado');
            }
            else if(this.state.filterStatus === 4){
                return (val.status === 'Nuevo' || 
                            val.status === 'Usado');
            }
            else if(this.state.filterStatus === 6){
                return (val.status === 'Nuevo' || 
                            val.status === 'Reparado');
            }
            else if(this.state.filterStatus === 8){
                return (val.status === 'Usado' || 
                            val.status === 'Reparado');
            }
            else{
                return (val.status !== -1);
            }
        });

        arts = arts.filter((val) => {
            if(this.state.filterQuality === 1){
                return (val.quality <= 1);
            }
            else if(this.state.filterQuality === 2){
                return (val.quality <= 2);
            }
            else if(this.state.filterQuality === 3){
                return (val.quality <= 3);
            }
            else if(this.state.filterQuality === 4){
                return (val.quality <= 4);
            }
            else {
                return (val.quality <= 5);
            }
        });

        return arts;

    }

    render() { 

        return ( 
 
            <div className="search-results-sidebar-filter">

                <SideBarFilter onOffer={this.onFilterByOffers} 
                    onPrice={this.onFilterByPrices} onStatus={this.onFilterByStatus}
                    onQuality={this.onFilterByQuality} />

                <div id="search-results">

                    <div className="samples-column-container">      
                        	
                        {this.getArticlesOnFilter().map((val) => {
                            if(!val.OfferPrice){
                                return (<SampleColumn article={val} 
                                            isInOffered={false} key={val.id} />);
                            }
                            else{
                                return (<SampleColumn article={val} 
                                            isInOffered={true} key={val.id} />);
                            }
                        })}
                    
                    </div>	


                </div>

            </div>

        );
    }
}
 
export default SearchResults;