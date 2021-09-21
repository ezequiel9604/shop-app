
import React from 'react';
import { Link } from 'react-router-dom';

function SampleDouble(props) {

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
            <div className="samples" >
                <span className="descount">
                    {parseInt(((items.retailPrice-items.offerPrice)/items.retailPrice)*100)}%
                </span>
                <Link to="/article" className="samples-header">
                    <img src={items.image} alt='' />
                </Link>	
                <h3 className='samples-title' 
                    title={items.title}>{items.title}</h3>
                <div className="samples-price">
                    <span>${formatedNumber(items.offerPrice)}</span>
                    <span>${formatedNumber(items.retailPrice)}</span>
                </div>
                <div className="samples-status">
                    <label>Estado: <Link to='/'>{items.status}</Link></label>
                </div>
            </div>  
        );
    }

    return (
        <div className="samples" >
            <Link to="/article" className="samples-header">
                <img src={items.image} alt='' />
            </Link>		
            <h3 className='samples-title' 
                title={items.title}>{items.title}</h3>
            <div className="samples-price">
                <span>${formatedNumber(items.retailPrice)}</span>
            </div>
            <div className="samples-status">
                <label>Estado: <Link to='/'>{items.status}</Link></label>
            </div>
        </div> 
    );

}

export default SampleDouble;
