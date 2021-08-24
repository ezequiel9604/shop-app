
import React from 'react';
import { Link } from 'react-router-dom';

function SampleDouble(props) {

    if(props.isInOffered){
        return (
            <div className="samples" >
                <span className="descount">
                    {parseInt(((props.article.retailPrice-props.article.OfferPrice)/props.article.retailPrice)*100)}%
                </span>
                <Link to="/article" className="samples-header">
                    <img src={props.article.image} alt='' />
                </Link>	
                <h3 className='samples-title' title={props.article.title}>{props.article.title}</h3>
                <div className="samples-price">
                    <span>${props.article.OfferPrice}</span>
                    <span>${props.article.retailPrice}</span>
                </div>
                <div className="samples-status">
                    <label>Estado: <a href="#">{props.article.status}</a></label>
                </div>
            </div>  
        );
    }

    return (
        <div className="samples" >
            <Link to="/article" className="samples-header">
                <img src={props.article.image} alt='' />
            </Link>		
            <h3 className='samples-title' title={props.article.title}>{props.article.title}</h3>
            <div className="samples-price">
                <span>${props.article.retailPrice}</span>
            </div>
            <div className="samples-status">
                <label>Estado: <a href="#">{props.article.status}</a></label>
            </div>
        </div> 
    );

}

export default SampleDouble;
