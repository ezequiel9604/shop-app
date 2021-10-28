import { formatedNumber } from "../../helpers";
import { Link } from "react-router-dom";

function SideBar(props) {
  function renderShipping(ship) {
    if (ship === "regular") {
      return 150;
    } else if (ship === "fast") {
      return 200;
    } else {
      return 0;
    }
  }

  return (
    <aside className="sidebar-container">
      <article>
        <h2>Realizar comprar:</h2>

        <table>
          <tbody>
            <tr>
              <td>Cantidad:</td>
              <td>({props.totalAmount}) articulos</td>
            </tr>
            <tr>
              <td>Sub-total: </td>
              <td>${formatedNumber(props.subTotal)}.00</td>
            </tr>
            <tr>
              <td>Envio:</td>
              <td>${renderShipping(props.shipping)}</td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="codigo" />
              </td>
              <td>
                <button type="button">Verificar</button>
              </td>
            </tr>
            <tr id="descount">
              <td>Descuento:</td>
              <td>$0.00</td>
            </tr>
            <tr className="total">
              <td>Total:</td>
              {props.subTotal > 0 ? (
                <td>
                  $
                  {formatedNumber(
                    props.subTotal + renderShipping(props.shipping) - 50
                  )}
                  .00
                </td>
              ) : (
                <td>${formatedNumber(props.subTotal)}.00</td>
              )}
            </tr>
          </tbody>
        </table>

        <div className="button-actions">
          <button className="btn" style={{ width: "100%" }}>
            Realizar Pago
          </button>
        </div>

        <p className="advice">
          Al hacer clic en "Realizar pago", confirmo que he leído y acepto los{" "}
          <Link to="">Términos y Condiciones</Link>.
        </p>
      </article>
    </aside>
  );
}

export default SideBar;
