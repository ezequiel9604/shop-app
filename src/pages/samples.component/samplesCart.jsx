
import React from 'react';
import { Link } from 'react-router-dom';

function SampleCart(props) {

    function removingItem(id){

        let confirm = prompt("Do you really want to remove this item?");

        if(confirm === 'yes' || confirm === 'y'){
            props.onRemoveItem(id);
        }

        
    }

    if(props.isInOffered){

        return (   
            <div className="samples-column">
                <span className="descount">
                {parseInt(((props.item.retailPrice-props.item.OfferPrice)/props.item.retailPrice)*100)}%
                </span>
                <Link to="/searchResults?items" className="samples-column-headers">
                    <img src={props.item.image} alt='' />
                </Link>	
                <div className="samples-column-sections">
                    <h3>{props.item.title}</h3>
                    <div className="samples-column-price">
                        <span>${props.item.OfferPrice}</span>
                        <span>${props.item.retailPrice}</span>
                    </div>
                    <div className="samples-column-selection">
                        <p>{props.item.specifications.size} Pulgadas,</p> 
                        <p>{props.item.specifications.capacity},</p> 
                        <p>Color:</p>
                        <mark title={props.item.specifications.color} 
                        style={{backgroundColor: props.item.specifications.color}}></mark>
                    </div>
                    <div className="samples-column-amount">
                        <div>
                            <button className="btn btn-decrease" 
                                onClick={()=> props.onDecreaseItem(props.item.id)}>-</button>
                            <span className="txt-amnt">{props.item.amount}</span>
                            <button className="btn btn-increase"
                                onClick={()=> props.onIncreaseItem(props.item.id)}>+</button>
                        </div>
                        <button className="btn btn-remove" 
                            onClick={()=> removingItem(props.item.id)}>
                            <span className="material-icons-outlined">delete_forever</span>
                        </button>
                    </div>
                </div>	
            </div>
        );
    }

    return (
        <div className="samples-column">
            <Link to="/searchResults?items" className="samples-column-headers">
                <img src={props.item.image} alt='' />
            </Link>	
            <div className="samples-column-sections">
                <h3>{props.item.title}</h3>
                <div className="samples-column-price">
                    <span>${props.item.retailPrice}</span>
                </div>
                <div className="samples-column-selection">
                    <p>{props.item.specifications.size} Pulgadas,</p> 
                    <p>{props.item.specifications.capacity},</p> 
                    <p>Color:</p>
                    <mark title={props.item.specifications.color} 
                        style={{backgroundColor: props.item.specifications.color}}></mark>
                </div>
                <div className="samples-column-amount">
                    <div>
                        <button className="btn btn-decrease" 
                            onClick={()=> props.onDecreaseItem(props.item.id)}>-</button>
                        <span className="txt-amnt">{props.item.amount}</span>
                        <button className="btn btn-increase"
                            onClick={()=> props.onIncreaseItem(props.item.id)}>+</button>
                    </div>
                    <button className="btn btn-remove" 
                        onClick={()=> removingItem(props.item.id)}>
                        <span className="material-icons-outlined">delete_forever</span>
                    </button>
                </div>
            </div>	
        </div>
    );

}

export default SampleCart;
