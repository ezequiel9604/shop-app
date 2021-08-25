
import React from 'react';
import { Link } from 'react-router-dom';

function SampleSingle(props) {

    if(props.isInOffered){
        return (

            <div className="samples">
                <span className="descount">
        {parseInt(((props.article.retailPrice-props.article.OfferPrice)/props.article.retailPrice)*100)}%
                </span>
                <Link to="/itemDetails" className="samples-header">
                    <img src={props.article.image} alt='' />
                </Link>
                <div className="samples-price">
                    <span>${props.article.OfferPrice}</span>
                    <span>${props.article.retailPrice}</span>
                </div>
            </div> 
        );
    }

    return (
        <div className="samples">
            <Link to="/itemDetails" className="samples-header">
                <img src={props.article.image} alt='' />
            </Link>
            <div className="samples-price">
                <span>${props.article.retailPrice}</span>
            </div>
        </div> 
    );

}

export default SampleSingle;
