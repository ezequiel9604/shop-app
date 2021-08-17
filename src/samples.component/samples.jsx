import React, { Component } from 'react';


class Samples extends Component {

    constructor(props){
        super(props);

        this.state = {
            article: props.article,
            isOffered: props.isOffered
        }
    }

    render() { 

        const {article} = this.state;

        if(this.state.isOffered){
            return (  
                <div className="samples" key={article.id}>
                    <span className="descount">
                    {parseInt(((article.retailPrice-article.OfferPrice)/article.retailPrice)*100)}%
                    </span>
                    <a href="/" className="headers">
                        <img src={article.image} alt='' />
                    </a>
                    <div className="price">
                        <span className="offer">${article.OfferPrice}</span>
                        <span className="retail">${article.retailPrice}</span>
                    </div>
                </div> 
                
            );
        }

        return (
            <div className="samples" key={article.id}>
                <a href="/" className="headers">
                    <img src={article.image} alt='' />
                </a>	
                <div className="price">
                    <span className="offer">${article.retailPrice}</span>
                </div>
            </div> 
        );
        
    }
}
 
export default Samples;