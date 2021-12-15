import { useState } from "react";
import { formatedNumber } from "../../helpers";
import { Link } from "react-router-dom";

function SideBar(props) {

  const [descount, setDescount] = useState(0);
  const [promo, setPromo] = useState("");

  function calculateDescount(){
    if(promo === props.promocode){
      setDescount(250);
    } else{
      setDescount(0);
    }
  }

  function changePromo(event){
    setPromo(event.target.value);
  }

  function renderShipping(ship) {
    if (ship === "regular") {
      return 150;
    } else if (ship === "fast") {
      return 200;
    } else {
      return 0;
    }
  }

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

  function readyToSend(){
    const money = {
      subtotal: getSubTotal(props.items),
      descount: descount
    }
    props.onsubmit(money);
  }

  return (
    <aside className="sidebar-container">
      <article>
        <h2>Realizar comprar:</h2>

        <table>
          <tbody>
            <tr>
              <td>Cantidad:</td>
              <td>({getTotalAmount(props.items)}) articulos</td>
            </tr>
            <tr>
              <td>Sub-total: </td>
              <td>${(formatedNumber(getSubTotal(props.items)))}.00</td>
            </tr>
            <tr>
              <td>Envio:</td>
              <td>${renderShipping(props.shipping)}</td>
            </tr>
            <tr>
              <td>
                <input onChange={changePromo} value={promo} type="text" placeholder="codigo" />
              </td>
              <td>
                <button onClick={calculateDescount} type="button">Verificar</button>
              </td>
            </tr>
            <tr id="descount">
              <td>Descuento:</td>
              <td>${formatedNumber(descount)}.00</td>
            </tr>
            <tr className="total">
              <td>Total:</td>
              {getSubTotal(props.items) > 0 ? (
                <td>
                  $
                  {formatedNumber(
                    getSubTotal(props.items) + renderShipping(props.shipping) - descount
                  )}
                  .00
                </td>
              ) : (
                <td>${(formatedNumber(getSubTotal(props.items)))}.00</td>
              )}
            </tr>
          </tbody>
        </table>

        <div className="button-actions">
          <button
            onClick={readyToSend}
            className="btn"
            style={{ width: "100%" }}
          >
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
