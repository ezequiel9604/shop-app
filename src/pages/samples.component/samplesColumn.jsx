
import React from 'react';
import { Link } from 'react-router-dom';

function SampleColumn(props) {

    function setQuality(){
        if(props.article.quality <= 1){
            return (
                <div className="samples-column-quality">
                    <span className="material-icons">star</span>
                    <span className="material-icons">star_outline</span>
                    <span className="material-icons">star_outline</span>
                    <span className="material-icons">star_outline</span>
                    <span className="material-icons">star_outline</span>
                    <strong>{parseFloat(props.article.quality)}</strong>
                </div>
            );
        }
        else if(props.article.quality <= 2){
            return (
                <div className="samples-column-quality">
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star_outline</span>
                    <span className="material-icons">star_outline</span>
                    <span className="material-icons">star_outline</span>
                    <strong>{parseFloat(props.article.quality)}</strong>
                </div>
            );
        }
        else if(props.article.quality <= 3){
            return (
                <div className="samples-column-quality">
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star_outline</span>
                    <span className="material-icons">star_outline</span>
                    <strong>{parseFloat(props.article.quality)}</strong>
                </div>
            );
        }
        else if(props.article.quality <= 4){
            return (
                <div className="samples-column-quality">
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star_outline</span>
                    <strong>{parseFloat(props.article.quality)}</strong>
                </div>
            );
        }
        return (
            <div className="samples-column-quality">
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <strong>{parseFloat(props.article.quality)}</strong>
            </div>
        );
    }

    function formatedNumber(num){

        if(num >= 1000 && num < 10000){
            let newNum = num+'';
            let formated = '';

            for(let x = 0; x < newNum.length; x++){
                if(x === 1){
                    formated+= ',';
                }
                formated+= newNum.charAt(x);
            }

            return formated;
        }
        else if(num >= 10000){
            let newNum = num+'';
            let formated = '';

            for(let x = 0; x < newNum.length; x++){
                if(x === 2){
                    formated+= ',';
                }
                formated+= newNum.charAt(x);
            }

            return formated;
        }

        return num;
    }

    if(props.isInOffered){
        return (   
            <div className="samples-column">
                <span className="descount">
                {parseInt(((props.article.retailPrice-props.article.OfferPrice)/props.article.retailPrice)*100)}%
                </span>
                <Link to="/searchResults" className="samples-column-headers">
                    <img src={props.article.image} alt='' />
                </Link>	
                <div className="samples-column-sections">
                    <h3>{props.article.title}</h3>
                    <div className="samples-column-price">
                        <span>${formatedNumber(props.article.OfferPrice)}</span>
                        <span>${formatedNumber(props.article.retailPrice)}</span>
                    </div>
                    {setQuality()}
                    <div className="button-actions">
                        <button className="btn">Comprar ahora</button>
                        <button className="btn">Agregar al carrito</button>
                    </div>
                </div>	
            </div>
        );
    }

    return (
        <div className="samples-column">
            <Link to="/searchResults" className="samples-column-headers">
                <img src={props.article.image} alt='' />
            </Link>	
            <div className="samples-column-sections">
                <h3>{props.article.title}</h3>
                <div className="samples-column-price">
                    <span>${formatedNumber(props.article.retailPrice)}</span>
                </div>
                {setQuality()}
                <div className="button-actions">
                    <button className="btn">Comprar ahora</button>
                    <button className="btn">Agregar al carrito</button>
                </div>
            </div>	
        </div>
    );

}

export default SampleColumn;
