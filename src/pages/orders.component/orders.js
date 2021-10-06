import { useState } from "react";
import { Link } from "react-router-dom";

import "./css-styles/styles.css";

import SmartTv from "../../images/smart-tv.png";
import SmartTv2 from "../../images/smart-tv-2.png";

function Orders(props) {
  // PROPERTIES
  const tlt =
    "Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Doloremque aut ducimus repudiandae dolore" +
    " fugiat asperiores repellendus. Consequatur soluta, dolor! Tenetur quam at saepe voluptate necessitatibus" +
    " tempora commodi.";
  const [order, setOrder] = useState([
    {
      id: "ORD-025984",
      orderDate: "2021-05-07",
      deliveredDate: "2021-05-08",
      orderStatus: "r",
      shippingCost: 150,
      total: 5155.91,
      items: [
        {
          image: SmartTv,
          title: tlt,
          amount: 2,
          price: 1527.33,
          condition: "none",
        },
        {
          image: SmartTv2,
          title: tlt,
          amount: 1,
          price: 2101.25,
          condition: "none",
        },
      ],
    },
    {
      id: "ORD-025741",
      orderDate: "2021-05-14",
      deliveredDate: "2021-05-16",
      orderStatus: "e",
      shippingCost: 150,
      total: 1350,
      items: [
        {
          image: SmartTv,
          title: tlt,
          amount: 1,
          price: 1200,
          condition: "none",
        },
      ],
    },
  ]);

  // METHODS
  function formatOrderStatus(status) {
    if (status === "gettingout") {
      return "De salida";
    } else if (status === "onitsway") {
      return "En camino";
    } else if (status === "received") {
      return "Recibido";
    } else if (status === "canceled") {
      return "Cancelado";
    } else if (status === "errorpayment") {
      return "Error en pago";
    }
  }

  function formatOrderCondition(condition) {
    if (condition === "returned") {
      return "Devuelto";
    } else if (condition === "returnprogress") {
      return "En devolucion";
    } else if (condition === "none") {
      return "Ninguno";
    }
  }

  function formatedNumber(num) {
    if (num >= 1000 && num < 10000) {
      let newNum = num + "";
      let formated = "";

      for (let x = 0; x < newNum.length; x++) {
        if (x === 1) {
          formated += ",";
        }
        formated += newNum.charAt(x);
      }

      return formated;
    } else if (num >= 10000) {
      let newNum = num + "";
      let formated = "";

      for (let x = 0; x < newNum.length; x++) {
        if (x === 2) {
          formated += ",";
        }
        formated += newNum.charAt(x);
      }

      return formated;
    }

    return num;
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
                  <Link to="/orderDetails">ver detalles del pedido</Link>
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
