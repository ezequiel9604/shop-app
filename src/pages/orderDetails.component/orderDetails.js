import { useState } from "react";
import { Link } from "react-router-dom";
import { Order } from "../../dummyData";
import {
  formatedNumber,
  formatOrderStatus,
  formatShippingMethod,
} from "../../helpers";

import "./css-styles/styles.css";
import AdviceIcon from "./adviceIcon";
import TrackOrder from "./trackOrder";
import DetailsInfo from "./detailsInfo";

function OrderDetails(props) {
  const [order, setOrder] = useState(Order);
  const [orderCounter, setOrderCounter] = useState(0);

  function formatAmountItems(items) {
    let sum = 0;
    for (let i of items) {
      sum += i.amount;
    }
    return sum;
  }

  function formatSubtotal(items) {
    let sum = 0;
    for (let i of items) {
      sum += i.price * i.amount;
    }
    return sum;
  }

  return (
    <div id="order-details">
      <article>
        <h3>Articulos del Pedido:</h3>

        <div className="ordered-articles-container">
          {order[orderCounter].items.map((current, ind) => {
            return (
              <div className="ordered-articles" key={ind}>
                <div>
                  <img src={current.image} alt="" />
                </div>
                <div>
                  <Link to="/">{current.title}</Link>
                </div>
                <div>
                  <p>Pulgadas: 24"</p>
                </div>
                <div>
                  <p>Cantidad: {current.amount}</p>
                </div>
                <div>
                  <p>RD${formatedNumber(current.price)}</p>
                </div>
              </div>
            );
          })}

          <TrackOrder status={order[orderCounter].orderStatus} />
        </div>
      </article>

      <article>
        <h3>Detalles del pedido:</h3>

        <div className="details-info">
          <DetailsInfo
            title="Cantidad"
            info={formatAmountItems(order[orderCounter].items) + " articulos"}
          />
          <DetailsInfo
            title="Subtotal"
            info={formatedNumber(formatSubtotal(order[orderCounter].items))}
          />
          <DetailsInfo
            title="Envio"
            info={"$" + order[orderCounter].shippingCost}
          />
          <DetailsInfo
            title="Total"
            info={formatedNumber(
              order[orderCounter].total + order[orderCounter].shippingCost
            )}
          />
        </div>
      </article>

      <article>
        <h3>Informacion del pedido:</h3>

        <div className="details-info">
          <DetailsInfo title="Codigo" info={order[orderCounter].id} />
          <DetailsInfo title="Metodo de pago" info={"TC - visa"} />
          <DetailsInfo
            title="Estado"
            info={formatOrderStatus(order[orderCounter].orderStatus)}
          />
          <DetailsInfo
            title="Fecha de pedido"
            info={new Date(order[orderCounter].orderDate).toLocaleString()}
          />
          <DetailsInfo
            title="Fecha de envio"
            info={new Date(order[orderCounter].deliveredDate).toLocaleString()}
          />
          <DetailsInfo
            title="Metodo de envio"
            info={formatShippingMethod("regular")}
          />
        </div>
      </article>

      <article>
        <h3>Informacion del cliente:</h3>

        <div className="details-info">
          <DetailsInfo title="Nombre" info={order[orderCounter].client.name} />
          <DetailsInfo title="Email" info={order[orderCounter].client.email} />
          <DetailsInfo
            title="Telefonos"
            info={order[orderCounter].client.phone}
          />
          <DetailsInfo
            title="Dirección"
            info={order[orderCounter].client.address}
          />
          <DetailsInfo
            title="Indicaciones"
            info={order[orderCounter].client.indications}
            wider={true}
          />
        </div>
      </article>

      <article>
        <h3>Actualizar tu pedido:</h3>

        <div className="details-info">
          <div>
            <button>Cambiar dirección</button>
            <AdviceIcon icon="help" />
          </div>

          <div>
            <button>Cancelar pedido</button>
            <AdviceIcon icon="help" />
          </div>

          <div>
            <button>Devolver articulos</button>
            <AdviceIcon icon="help" />
          </div>
        </div>
      </article>

      {/* <article>
                <h3>Articulos en devolucion:</h3>

                <div className="samples-container">
                    
                    <div className="samples-order-details">
                        <Link to='/' className="samples-order-details-headers">
                            <img src={SmartTv} alt='' />
                        </Link>
                        <div className="samples-order-details-sections">
                            <h4>1 Lorem ipsum dolor sit amet consectetur adipisicing Impedit iste voluptate nulla reprehenderit tempore cum consequatur quis ut quidem
                            </h4>
                            <div className="samples-order-details-status">
                                <label>Condición:</label> En revision
                            </div>
                        </div>	
                    </div>

                    <div className="samples-order-details">
                        <Link to='/' className="samples-order-details-headers">
                            <img src={SmartTv} alt='' />
                        </Link>
                        <div className="samples-order-details-sections">
                            <h4>1 Lorem ipsum dolor sit amet consectetur adipisicing Impedit iste voluptate nulla reprehenderit tempore cum consequatur quis ut quidem
                            </h4>
                            <div className="samples-order-details-status">
                                <label>Condición:</label> En revision
                            </div>
                        </div>	
                    </div>

                </div>

            </article>	 */}

      <article>
        <Link to="/" className="print-voucher">
          Imprimir recibo <span className="material-icons-sharp">print</span>
        </Link>
      </article>
    </div>
  );
}

export default OrderDetails;
