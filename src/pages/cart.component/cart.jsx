import { Link } from "react-router-dom";

import SideBar from "./sidebar.component/sideBar";
import CartItems from "./cartItems";

import "./css-styles/styles.css";

function Cart(props) {

  function getTotalAmount(items) {
    let sum = 0;
    for (let i of items) {
      sum += i.amount;
    }
    return sum;
  }

  function getSubTotal(items) {
    let sum = 0;
    for (let i of items) {
      if (i.offerPrice > 0) {
        sum += i.offerPrice * i.amount;
      } else {
        sum += i.retailPrice * i.amount;
      }
    }
    return sum;
  }

  function removeItemHandler(id){
    props.onUpdateItems(id);
  }

  function incrementCartItem(id){
    props.onIncrementCartItem(id);
  }

  function decrementCartItem(id){
    props.onDecrementCartItem(id);
  }

  const { items } = props;

  return (
    <div className="cart-and-sidebar">
      <div id="cart">
        <h3 className="title-page">Carrito de compra</h3>

        {items.length === 0 ? (
          <div className="alert-empty">
            <h4>Tu carrito de compra esta vacio!</h4>
            <Link to="/">
              Has click aqui para ver todos los articulos y ofertas.
            </Link>
          </div>
        ) : (
          <div className="samples-column-container">
            {items.map((current)=>{
              return (<CartItems item={current} 
                        onDecrementCart={decrementCartItem} 
                        onIncrementItem={incrementCartItem} 
                        onRemoveItem={removeItemHandler}
                        key={current.id}  />);
            })}
          </div>
        )}
      </div>

      <SideBar
        totalAmount={getTotalAmount(items)}
        subTotal={getSubTotal(items)}
      />

    </div>
  );
}

export default Cart;
