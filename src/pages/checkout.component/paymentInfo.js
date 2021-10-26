import { useState } from "react";

function PaymentInfo(props) {
  const [paymentMethodInput, setPaymentMethodInput] = useState("visa");
  const [creditcardNumberInput, setCreditcardNumberInput] = useState("");
  const [experiationDateInput, setExperiationDateInput] = useState("");
  const [creditcardOwnerInput, setCreditcardOwnerInput] = useState("");
  const [creditcardCodeInput, setCreditcardCodeInput] = useState("");

  const [streetNumberInput, setStreetNumberInput] = useState("8");
  const [streetNameInput, setStreetNameInput] = useState(
    "Francisco Henriquez y Carvajal"
  );

  function changepaymentMethodInput(event) {
    setPaymentMethodInput(event.target.value);
  }

  function changeCreditcardNumberInput(event) {
    setCreditcardNumberInput(event.target.value);
  }

  function changeExperiationDateInput(event) {
    setExperiationDateInput(event.target.value);
  }

  function changeCreditcardOwnerInput(event) {
    setCreditcardOwnerInput(event.target.value);
  }

  function changeCreditcardCodeInput(event) {
    setCreditcardCodeInput(event.target.value);
  }

  function changeStreetNumberInput(event) {
    setStreetNumberInput(event.target.value);
  }

  function changeStreetNameInput(event) {
    setStreetNameInput(event.target.value);
  }

  return (
    <div>
      <div className="payment-info">
        <label htmlFor="visa-card">
          <input
            onClick={changepaymentMethodInput}
            type="radio"
            name="payment-method"
            id="visa-card"
            defaultValue="visa"
            defaultChecked
          />
          <i className="fab fa-cc-visa"></i>
        </label>

        <label htmlFor="mastercard-card">
          <input
            onClick={changepaymentMethodInput}
            type="radio"
            name="payment-method"
            id="mastercard-card"
            defaultValue="mastercard"
          />
          <i className="fab fa-cc-mastercard"></i>
        </label>

        <label htmlFor="amex-card">
          <input
            onClick={changepaymentMethodInput}
            type="radio"
            name="payment-method"
            id="amex-card"
            defaultValue="amex"
          />
          <i className="fab fa-cc-amex"></i>
        </label>

        <label htmlFor="discover-card">
          <input
            onClick={changepaymentMethodInput}
            type="radio"
            name="payment-method"
            id="discover-card"
            defaultValue="discover"
          />
          <i className="fab fa-cc-discover"></i>
        </label>

        <label htmlFor="paypal">
          <input
            onClick={changepaymentMethodInput}
            type="radio"
            name="payment-method"
            id="paypal"
            defaultValue="paypal"
          />
          <i className="fab fa-cc-paypal"></i>
        </label>
      </div>

      <form action="/" method="post" className="creditCard-info">
        <div className="creditcard">
          <input
            type="text"
            onChange={changeCreditcardNumberInput}
            defaultValue={creditcardNumberInput}
            placeholder="0000-0000-0000-0000"
          />
          <input
            type="text"
            onChange={changeExperiationDateInput}
            defaultValue={experiationDateInput}
            placeholder="00/0000"
          />
          <input
            type="text"
            onChange={changeCreditcardOwnerInput}
            defaultValue={creditcardOwnerInput}
            placeholder="nombre del titular"
          />
          <input
            type="text"
            onChange={changeCreditcardCodeInput}
            defaultValue={creditcardCodeInput}
            placeholder="000"
          />
          <label htmlFor="creditCard-address">
            <input type="checkbox" id="creditCard-address" defaultChecked />{" "}
            Igual dirección de envio!
          </label>
        </div>
        <div className="billing-address">
          <input
            type="text"
            onChange={changeStreetNumberInput}
            defaultValue={streetNumberInput}
            placeholder="casa #"
          />
          <input
            type="text"
            onChange={changeStreetNameInput}
            defaultValue={streetNameInput}
            placeholder="calle y apartamento"
          />
          <select name="city" id="">
            <option defaultValue="">Brisas del este</option>
            <option defaultValue="">Los Frailes I</option>
            <option defaultValue="">Los Frailes II</option>
            <option defaultValue="">Invivienda</option>
            <option defaultValue="">Villa Mella</option>
          </select>
          <select name="state" id="">
            <option defaultValue="">Santo domingo este</option>
            <option defaultValue="">Santo domingo norte</option>
            <option defaultValue="">Zona Oriental</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default PaymentInfo;
