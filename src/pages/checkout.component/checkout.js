
import SideBar from "./sideBar";
import UserInfo from "./userInfo";
import PaymentInfo from "./paymentInfo";
import ShippingInfo from "./shippingInfo";
import "./css-styles/styles.css";

function Checkout(props) {
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

  return (
    <div className="checkout-and-sidebar">
      <div id="checkout">
        <h3 className="title-page">Confirmación de pedido: </h3>

        <article>
          <UserInfo />

        </article>
        <article>
          <PaymentInfo />

        </article>
        <article>
          <ShippingInfo />

        </article>
      </div>

      <SideBar
        totalAmount={getTotalAmount(props.items)}
        subTotal={getSubTotal(props.items)}
      />
    </div>
  );
}

export default Checkout;
