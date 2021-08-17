import React, { Component } from 'react';

import './css-styles/styles.css';

import smartTvImage from '../images/smart-tv.png';

class LastView extends Component {

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
        };

        this.cont = 0;
    }

    getArticles = (min, max) => {

        const arts = this.state.articles;
        return arts.slice(min, max);
    }

    moveSlides = (direction) => {

        const widthSlideContainer = this.lastViewContainer.offsetWidth;

        if(direction === 'backward'){
            if(this.cont < widthSlideContainer){
                this.cont+= widthSlideContainer;
            }
            else{
                this.cont=0;
            }
            this.slideContainer.scrollTo(this.cont,0);
        }
        else if(direction === "forward"){
    
            if(this.cont>0){
               this.cont-= widthSlideContainer;
            }
            else{
               this.cont= widthSlideContainer;
            }
            this.slideContainer.scrollTo(this.cont,0);
        }

    }

    render() { 
        return (  

            <div id="last-view" ref={elem => (this.lastViewContainer = elem)}>

                <button className="button-move-slide" onClick={() => this.moveSlides('backward')}>
                    <span className="material-icons">arrow_back_ios</span>
                </button>

                <button className="button-move-slide" onClick={() => this.moveSlides('forward')} style={{top: '120px', right: '0px'}}>
                    <span className="material-icons">arrow_forward_ios</span>
                </button>

                <div className="slides-container slide-container-last-viewed" ref={elem => (this.slideContainer = elem)} >

                    <div className="slides slides-last-viewed ">

                    {
                        this.getArticles(0, 5).map((val, ind, arr) => {
                            
                            if(val.OfferPrice === 0){
                                return (
                                    <div className="samples" key={ind}>
                                        <a href="#" className="headers">
                                            <img src={val.image} />
                                        </a>	
                                        <h3 title={val.title}>{val.title}</h3>
                                        <div className="price">
                                            <span>${val.retailPrice}</span>
                                        </div>
                                        <div className="status-depart">
                                            <label>Estado: <a href="#">{val.status}</a></label>
                                        </div>
                                    </div> 
                                );
                            }

                            return (
                                <div className="samples" key={ind}>
                                    <span className="descount">
                                    {parseInt(((val.retailPrice-val.OfferPrice)/val.retailPrice)*100)}%
                                    </span>
                                    <a href="#" className="headers">
                                        <img src={val.image} />
                                    </a>	
                                    <h3 title={val.title}>{val.title}</h3>
                                    <div className="price">
                                        <span>${val.OfferPrice}</span>
                                        <span>${val.retailPrice}</span>
                                    </div>
                                    <div className="status-depart">
                                        <label>Estado: <a href="#">{val.status}</a></label>
                                    </div>
                                </div> 
                            );

                        })
                    }

                    </div> 

                    <div className="slides slides-last-viewed ">

                    {
                        this.getArticles(5, 10).map((val, ind, arr) => {
                            
                            if(val.OfferPrice === 0){
                                return (
                                    <div className="samples" key={ind}>
                                        <a href="#" className="headers">
                                            <img src={val.image} />
                                        </a>	
                                        <h3 title={val.title}>{val.title}</h3>
                                        <div className="price">
                                            <span>${val.retailPrice}</span>
                                        </div>
                                        <div className="status-depart">
                                            <label>Estado: <a href="#">{val.status}</a></label>
                                        </div>
                                    </div> 
                                );
                            }

                            return (
                                <div className="samples" key={ind}>
                                    <span className="descount">
                                    {parseInt(((val.retailPrice-val.OfferPrice)/val.retailPrice)*100)}%
                                    </span>
                                    <a href="#" className="headers">
                                        <img src={val.image} />
                                    </a>	
                                    <h3 title={val.title}>{val.title}</h3>
                                    <div className="price">
                                        <span>${val.OfferPrice}</span>
                                        <span>${val.retailPrice}</span>
                                    </div>
                                    <div className="status-depart">
                                        <label>Estado: <a href="#">{val.status}</a></label>
                                    </div>
                                </div> 
                            );

                        })
                    }

                    </div>

                </div>	

            </div>

        );
    }
}
 
export default LastView;