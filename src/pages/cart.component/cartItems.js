import { useState, useContext } from "react";
import SamplesColumn from "../samples.component/samplesColumn";
import { CartContext } from "../../store/context";

function CartItems(props) {
  // PROPERTIES
  const [amount, setAmount] = useState(props.item.amount);
  const { confirmBeforeRemoveItemFromCart, incrementItemInCart, decrementItemInCart } =
    useContext(CartContext);

  // METHODS
  function incrementItemHandler() {
    if (amount < props.item.stock) {
      setAmount(amount + 1);
      incrementItemInCart(props.item.id);
    }
  }

  function decrementItemHandler() {
    if (amount > 1) {
      setAmount(amount - 1);
      decrementItemInCart(props.item.id);
    }
  }

  function removeItemHandler() { 
    confirmBeforeRemoveItemFromCart(props.item.id);
  }

  // RENDERING
  return (
    <SamplesColumn key={props.item.id} item={props.item}>
      <div className="samples-column-selection">
        <p>{props.item.subItem.size} Pulgadas,</p>
        <p>{props.item.subItem.capacity},</p>
        <p>Color:</p>
        <mark
          title={props.item.subItem.color}
          style={{ backgroundColor: props.item.subItem.color }}
        ></mark>
      </div>
      <div className="samples-column-amount">
        <div>
          <button className="btn btn-decrease" onClick={decrementItemHandler}>
            -
          </button>
          <span className="txt-amnt">{amount}</span>
          <button className="btn btn-increase" onClick={incrementItemHandler}>
            +
          </button>
        </div>
        <button className="btn btn-remove" onClick={removeItemHandler}>
          <span className="material-icons-outlined">delete_forever</span>
        </button>
      </div>
    </SamplesColumn>
  );
}

export default CartItems;
