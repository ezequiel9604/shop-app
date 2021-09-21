
import React from 'react';
import { Link } from 'react-router-dom';

function SampleSingle(props) {

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

    const {items} = props;

    if(props.isItemOffered){
        return (

            <div className="samples">
                <span className="descount">
                {parseInt(((items.retailPrice-items.offerPrice)/items.retailPrice)*100)}%
                </span>
                <Link to="/itemDetails" className="samples-header">
                    <img src={items.image} alt='' />
                </Link>
                <div className="samples-price">
                    <span>${formatedNumber(items.offerPrice)}</span>
                    <span>${formatedNumber(items.retailPrice)}</span>
                </div>
            </div> 
        );
    }

    return (
        <div className="samples">
            <Link to="/itemDetails" className="samples-header">
                <img src={items.image} alt='' />
            </Link>
            <div className="samples-price">
                <span>${formatedNumber(items.retailPrice)}</span>
            </div>
        </div> 
    );

}

export default SampleSingle;
