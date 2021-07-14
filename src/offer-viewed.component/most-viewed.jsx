import React, { Component } from 'react';

class MostViewed extends Component {
    state = { }

    getPricesArticles(offer, retail){
        if(offer > 0){
            return (
                <React.Fragment>
                    <span className="offer">${this.props.onFormatPrice(offer)}</span>
                    <span className="retail">${this.props.onFormatPrice(retail)}</span>
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                <span className="offer">${this.props.onFormatPrice(retail)}</span>
            </React.Fragment>
        );
    }

    getDescountArticles(offer, retail){
        if(offer > 0){
            return (
                <React.Fragment>
                    <span className="descount">
                    {parseInt(((retail-offer) / retail)*100) + "%"}
                    </span>
                </React.Fragment>
            );
        }

        return null;
    }

    render() { 

        return (  
            <div className="most-viewed-container">

                <h3>Mas vistos</h3>
  
                {/*slides*/ }
                { this.props.articles.map(art => { return (
                    <div className="samples" key={art.id}>
                        {this.getDescountArticles(art.offerPrice, art.retailPrice)}
                        <a href={"/"} className="headers">
                            <img src={art.imageArt}/>
                        </a>	
                        <div className="price">
                            {this.getPricesArticles(art.offerPrice, art.retailPrice)}   
                        </div>
                    </div> 
                );
                })}
            </div>
        );
    }

    

}
 
export default MostViewed;