import { Link } from "react-router-dom";
import { formatedNumber } from "../../helpers";

function SideBar(props) {
  return (
    <aside className="sidebar-container">
      <article>
        <h2>Resumen del pedido:</h2>

        <table>
          <tbody>
            <tr>
              <td>Cantidad:</td>
              <td>({props.totalAmount}) articulos</td>
            </tr>
            <tr>
              <td>Envio:</td>
              <td>$150.00</td>
            </tr>
            <tr>
              <td>Sub-total: </td>
              <td>${formatedNumber(props.subTotal)}.00</td>
            </tr>
            <tr className="total">
              <td>Total:</td>
              {props.subTotal > 0 ? (
                <td>${formatedNumber(props.subTotal + 150)}.00</td>
              ) : (
                <td>${formatedNumber(props.subTotal)}.00</td>
              )}
            </tr>
          </tbody>
        </table>

        <div className="button-actions">
          {props.totalAmount > 0 ? (
            <Link to="/checkout" className="btn" style={{ width: "100%" }}>
              Comprar ({props.totalAmount})
            </Link>
          ) : (
            <button className="btn" style={{ width: "100%" }}>
              Comprar ({props.totalAmount})
            </button>
          )}
        </div>

        <p className="advice">
          Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Hic qui
          odit explicabo atque natus quibusdam, debitis quos odio animi ullam
          assumenda.
        </p>
      </article>

    </aside>
  );
}

export default SideBar;
