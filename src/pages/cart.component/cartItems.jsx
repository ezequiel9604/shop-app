import React, { useState } from 'react';
import SamplesColumn from '../samples.component/samplesColumn';

function CartItems(props) {

    const [amount, setAmount] = useState(props.item.amount);

    function increaseItemHandler() {
        if(amount < props.item.stock){
            setAmount(amount+1);
            props.onIncrementItem(props.item.id);
        } 
    }

    function decreaseItemHandler() {
        if(amount > 1){
            setAmount(amount-1);
            props.onDecrementCart(props.item.id);
        } 
    }

    return (
        <SamplesColumn key={props.item.id} item={props.item}>
          <div className="samples-column-selection">
            <p>{props.item.subItem.size} Pulgadas,</p>
            <p>{props.item.subItem.capacity},</p>
            <p>Color:</p>
            <mark
              title={props.item.subItem.color}
              style={{backgroundColor:props.item.subItem.color}}
            ></mark>
          </div>
          <div className="samples-column-amount">
            <div>
              <button
                className="btn btn-decrease"
                onClick={decreaseItemHandler}>
                -
              </button>
              <span className="txt-amnt">{amount}</span>
              <button
                className="btn btn-increase"
                onClick={increaseItemHandler}>
                +
              </button>
            </div>
            <button
              className="btn btn-remove"
              onClick={()=>props.onRemoveItem(props.item.id)}>
              <span className="material-icons-outlined">
                delete_forever
              </span>
            </button>
          </div>
        </SamplesColumn>
      );
}

export default CartItems;