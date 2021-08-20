import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css-styles/styles.css';

import SampleSingle from '../../samples.component/sampleSingle';

import smartTvImage from '../../images/smart-tv.png';
import tabletImage from '../../images/tablet.png';
import toolboxImage from '../../images/toolbox.png';

class OfferView extends Component {

    constructor(props){
        super(props);

        const tlt = 'Lorem ipsum dolor: sit amet, consectetur, '+
        'adipisicing elit atque deleniti reiciendis rerum.';

        this.state = {
            articles: props.articles,
            departments: [
                { id: 1, image: smartTvImage, name: 'departamento1', title: '1 '+tlt},
                { id: 2, image: tabletImage, name: 'departamento2', title: '2 '+tlt},
                { id: 3, image: toolboxImage, name: 'departamento3', title: '3 '+tlt},
                { id: 4, image: toolboxImage, name: 'departamento4', title: '4 '+tlt},
                { id: 5, image: toolboxImage, name: 'departamento5', title: '5 '+tlt},
                { id: 6, image: toolboxImage, name: 'departamento6', title: '6 '+tlt}
            ]    
        }
    }

    //returns an array with 5 articles in offer
    getArticlesInOffer = () => {
        const arts = this.state.articles.filter((art) => {return art.OfferPrice > 0});
        return arts.slice(0, 5);
    }
    
    // returns an array with the most viewed articles
    getMostViewedArticles = () =>{
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
                
                <div className="slides-mostviewed-ctn">
                
                    <div className="slides-ctn slides-ctn-departments">

                    {this.state.departments.map((val, ind, arr) => {

                        return (
                            <div key={val.id} className={(ind===0)?'slides slides-departments animated-slides':'slides slides-departments'} >		
                                <div className="slide-information">
                                    <h2>{val.title}</h2>
                                    <Link to={'/'+val.name}>ver más 
                                        <span className="material-icons-sharp">east</span>
                                    </Link>
                                </div>
                                <div className="slide-bkg-image">
                                    <img src={val.image} alt='' />
                                </div>
                            </div>
                        );
                    })}

                    </div>	

                    <div className="most-viewed-ctn">

                        <h3>Mas vistos</h3>
                        
                        <div className="most-viewed-samples-ctn">

                            {this.getMostViewedArticles().map((val, ind, arr) => {
                                if(val.OfferPrice === 0){
                                    return ( <SampleSingle article={val} isInOffered={false} key={val.id} /> );
                                }

                                return ( <SampleSingle article={val} isInOffered={true} key={val.id} /> );
                            })}
                            
                        </div>

                    </div>

                </div>

                <div className="offer-ctn">

                    <h3>En ofertas</h3>		
                    
                    <div className="offer-samples-ctn">

                        {this.getArticlesInOffer().map((val, ind, arr) => {

                            return ( <SampleSingle article={val} isInOffered={true} key={val.id} /> );

                        })}
                        
                    </div>	

                </div>

                <div className="advertisement-ctn">
                    <div>
                        <span className="material-icons">local_shipping</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Facere excepturi blanditiis labore deleniti facilis. 
                            Facere excepturi blanditiis labore deleniti facilis</p>
                    </div>
                    <div>
                        <span className="material-icons">verified_user</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Facere excepturi blanditiis labore deleniti facilis. 
                            Facere excepturi blanditiis labore.</p>
                    </div>
                    <div>
                        <span className="material-icons">support_agent</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Facere excepturi blanditiis labore deleniti facilis. 
                            Facere excepturi blanditiis labore.</p>
                    </div>	
                </div>

            </div>

        );
    }
}
 
export default OfferView;