import { Link } from "react-router-dom";

import SamplesColumn from "../samples.component/samplesColumn";
import SideBar from "./sidebar.component/sideBar";

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

  function increaseItemHandler(id) {
    props.onIncrementCartItem(id);
  }

  function decreaseItemHandler(id) {
    props.onDecrementCartItem(id);
  }

  function removeItemHandler(id) {
    props.onUpdateItems(id);
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
            {items.map((current) => {
              return (
                <SamplesColumn key={current.id} item={current}>
                  <div className="samples-column-selection">
                    <p>{current.specifications.size} Pulgadas,</p>
                    <p>{current.specifications.capacity},</p>
                    <p>Color:</p>
                    <mark
                      title={current.specifications.color}
                      style={{
                        backgroundColor: current.specifications.color,
                      }}
                    ></mark>
                  </div>
                  <div className="samples-column-amount">
                    <div>
                      <button
                        className="btn btn-decrease"
                        onClick={() => decreaseItemHandler(current.id)}
                      >
                        -
                      </button>
                      <span className="txt-amnt">{current.amount}</span>
                      <button
                        className="btn btn-increase"
                        onClick={() => increaseItemHandler(current.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn btn-remove"
                      onClick={() => removeItemHandler(current.id)}
                    >
                      <span className="material-icons-outlined">
                        delete_forever
                      </span>
                    </button>
                  </div>
                </SamplesColumn>
              );
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
