import { Link } from "react-router-dom";
import SideBar from "./sideBar";
import CartItems from "./cartItems";

import "./css-styles/styles.css";

function Cart(props) {
  // METHODS
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

  // RENDERING
  return (
    <div className="cart-and-sidebar">
      <div id="cart">
        <h3 className="title-page">Carrito de compra</h3>

        {props.items.length ? (
          <div className="samples-column-container">
            {props.items.map((current) => {
              return <CartItems item={current} key={current.id} />;
            })}
          </div>
        ) : (
          <div className="alert-empty">
            <h4>Tu carrito de compra esta vacio!</h4>
            <Link to="/">
              Has click aqui para ver todos los articulos y ofertas.
            </Link>
          </div>
        )}
      </div>

      <SideBar
        totalAmount={getTotalAmount(props.items)}
        subTotal={getSubTotal(props.items)}
      />
    </div>
  );
}

export default Cart;
