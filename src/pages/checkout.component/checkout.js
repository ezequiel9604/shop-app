import { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./sideBar";
import UserInfo from "./userInfo";
import PaymentInfo from "./paymentInfo";
import ShippingInfo from "./shippingInfo";
import "./css-styles/styles.css";

import { formatedNumber } from "../../helpers";

function Checkout(props) {
  const [shippingMethod, setShippingMethodInput] = useState("regular");

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

  function changeShippingMethod(ship) {
    setShippingMethodInput(ship);
  }

  return (
    <div className="checkout-and-sidebar">
      <div id="checkout">
        <h3 className="title-page">Confirmación de pedido: </h3>

        <article>
          <UserInfo user={props.user} />
        </article>
        <article>
          <PaymentInfo user={props.user} />
        </article>
        <article>
          <ShippingInfo onChangeShippingMethod={changeShippingMethod} />
        </article>
        <article>
          <div className="ordered-articles-container">
            {console.log(props.items)}
            {props.items.map((current, ind) => {
              return (
                <div className="ordered-articles" key={ind}>
                  <div>
                    <img src={current.image[0]} alt="" />
                  </div>
                  <div>
                    <Link to="/">{current.title}</Link>
                  </div>
                  <div>
                    <p>
                      {current.subItem.capacity +
                        ", " +
                        current.subItem.size +
                        ", " +
                        current.subItem.color}
                    </p>
                  </div>
                  <div>
                    <p>Cantidad: {current.amount}</p>
                  </div>
                  <div>
                    <p>
                      RD$
                      {current.offerPrice > 0
                        ? formatedNumber(current.offerPrice)
                        : formatedNumber(current.retailPrice)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </div>

      <SideBar
        totalAmount={getTotalAmount(props.items)}
        subTotal={getSubTotal(props.items)}
        shipping={shippingMethod}
      />
    </div>
  );
}

export default Checkout;
