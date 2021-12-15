import { useState } from "react";
import { Link } from "react-router-dom";
import { Order } from "../../dummyData";
import { formatedNumber, formatOrderStatus } from "../../helpers";

import "./css-styles/styles.css";

function Orders(props) {
  // PROPERTIES
  const [order, setOrder] = useState(Order);

  // METHODS
  function formatOrderCondition(condition) {
    if (condition === "returned") {
      return "Devuelto";
    } else if (condition === "returnprogress") {
      return "En devolucion";
    } else if (condition === "none") {
      return "Ninguno";
    }
  }

  // RENDERING
  return (
    <div id="orders">
      <h3 className="title-page">Mis pedidos</h3>

      {order.map((current) => {
        return (
          <div className="orders-container" key={current.id}>
            <div className="orders-headers">
              <div>
                <h5>
                  <strong>Codigo pedido:</strong> {current.id}
                </h5>
                <h5>
                  <strong>Fecha envio:</strong>
                  {new Date(current.deliveredDate).toLocaleDateString()}
                </h5>
                <h5>
                  <strong>Fecha pedido:</strong>
                  {new Date(current.orderDate).toLocaleDateString()}
                </h5>
                <h5>
                  <Link to="/orders/orderDetails">ver detalles del pedido</Link>
                </h5>
              </div>
              <div>
                <h5>
                  <strong>Estado del pedido:</strong>
                  {formatOrderStatus(current.orderStatus)}
                </h5>
                <h5>
                  <strong>Costo envio:</strong> ${current.shippingCost}
                </h5>
                <h4>
                  <strong>Total:</strong> ${formatedNumber(current.total)}
                </h4>
              </div>
            </div>

            {current.items.map((curr, ind) => {
              return (
                <div className="orders-body" key={ind}>
                  <div>
                    <Link to="/">
                      <img src={curr.image} alt={curr.title} />
                    </Link>
                  </div>
                  <div>
                    <h3>{curr.title}</h3>
                    <p className="amount">Cantidad: {curr.amount}</p>
                  </div>
                  <div>
                    <p className="subtotal">${formatedNumber(curr.price)}</p>
                    <p className="condition">
                      Condición:
                      {formatOrderCondition(curr.condition)}
                    </p>
                  </div>
                  <div>
                    <p className="subtotal">
                      ${formatedNumber(curr.price * curr.amount)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Orders;
