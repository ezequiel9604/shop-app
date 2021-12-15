import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "./sideBar";
import UserInfo from "./userInfo";
import PaymentInfo from "./paymentInfo";
import ShippingInfo from "./shippingInfo";
import "./css-styles/styles.css";

import { formatedNumber } from "../../helpers";
import { PromoCode } from "../../dummyData";
import { CartContext } from "../../store/context";

function Checkout(props) {
  const {
    cartList,
    incrementItemInCart,
    decrementItemInCart,
    confirmBeforeRemoveItemFromCart,
  } = useContext(CartContext);
  const [shippingMethod, setShippingMethod] = useState("regular");
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [promocode, setPromocode] = useState(null);

  useEffect(()=>{
    setPromocode(PromoCode);
  }, []);

  function changeShippingMethod(ship) {
    setShippingMethod(ship);
  }

  function changePaymentInfo(payment) {
    setPaymentInfo(payment);
  }

  function submitOrder(money) {
    const cart = {
      client: props.user,
      shipment: shippingMethod,
      payment: paymentInfo,
      items: cartList,
      subtotal: money.subtotal,
      descount: money.descount,
    };
    console.log(cart);
  }

  return (
    <div className="checkout-and-sidebar">
      {props.user ? (
        <div id="checkout">
          <h3 className="title-page">Confirmación de pedido: </h3>

          <article>
            <UserInfo user={props.user} />
          </article>
          <article>
            <PaymentInfo
              user={props.user}
              onchangePaymentInfo={changePaymentInfo}
            />
          </article>
          <article>
            <ShippingInfo onChangeShippingMethod={changeShippingMethod} />
          </article>
          <article>
            <div className="cart-list-items-container">
              {cartList.map((current, ind) => {
                return (
                  <div className="cart-list-items" key={ind}>
                    <div>
                      {" "}
                      <input type="checkbox" />{" "}
                    </div>
                    <div>
                      <img src={current.image[0]} alt="" />
                    </div>
                    <div>
                      <Link to="/">{current.title}</Link>
                      <p>
                        <strong> Color: </strong>
                        {current.subItem.color + " "},
                        <strong> Capacity: </strong>
                        {current.subItem.capacity + " "},
                        <strong> Size: </strong>
                        {current.subItem.size + " "}{" "}
                      </p>
                      <p>
                        RD$
                        {current.offerPrice > 0
                          ? formatedNumber(current.offerPrice)
                          : formatedNumber(current.retailPrice)}
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() => decrementItemInCart(current.id)}
                        type="button"
                      >
                        -
                      </button>
                      <span>{current.amount}</span>
                      <button
                        onClick={() => incrementItemInCart(current.id)}
                        type="button"
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          confirmBeforeRemoveItemFromCart(current.id)
                        }
                        type="button"
                      >
                        <span className="material-icons">delete_outline</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      ) : null}

      <SideBar
        items={cartList}
        shipping={shippingMethod}
        promocode={promocode}
        onsubmit={submitOrder}
      />
    </div>
  );
}

export default Checkout;
