import { useState } from "react";

function PaymentInfo(props) {
  const [paymentMethodInput, setPaymentMethodInput] = useState("visa");
  const [creditcardNumberInput, setCreditcardNumberInput] = useState("");
  const [experiationDateInput, setExperiationDateInput] = useState("");
  const [creditcardOwnerInput, setCreditcardOwnerInput] = useState("");
  const [creditcardCodeInput, setCreditcardCodeInput] = useState("");

  const [streetNumberInput, setStreetNumberInput] = useState(
    props.user.address.streetNo
  );
  const [streetNameInput, setStreetNameInput] = useState(
    props.user.address.streetName
  );
  const [cityInput, setCityInput] = useState(props.user.address.city);
  const [hoodInput, setHoodInput] = useState(props.user.address.state);

  function changePayment(event) {
    setPaymentMethodInput(event.target.value);
    props.onchangePaymentInfo({
      paymentMethod: event.target.value,
      creditCardNumber: creditcardNumberInput,
      expDate: experiationDateInput,
      owner: creditcardOwnerInput,
      cvv: creditcardCodeInput,
      streetNumber: streetNumberInput,
      streetName: streetNameInput,
      city: cityInput,
      hood: hoodInput,
    });
  }

  function changeCreditcardNumber(event) {
    setCreditcardNumberInput(event.target.value);
    props.onchangePaymentInfo({
      paymentMethod: paymentMethodInput,
      creditCardNumber: event.target.value,
      expDate: experiationDateInput,
      owner: creditcardOwnerInput,
      cvv: creditcardCodeInput,
      streetNumber: streetNumberInput,
      streetName: streetNameInput,
      city: cityInput,
      hood: hoodInput,
    });
  }

  function changeExperiationDateInput(event) {
    setExperiationDateInput(event.target.value);
    props.onchangePaymentInfo({
      paymentMethod: paymentMethodInput,
      creditCardNumber: creditcardNumberInput,
      expDate: event.target.value,
      owner: creditcardOwnerInput,
      cvv: creditcardCodeInput,
      streetNumber: streetNumberInput,
      streetName: streetNameInput,
      city: cityInput,
      hood: hoodInput,
    });
  }

  function changeCreditcardOwnerInput(event) {
    setCreditcardOwnerInput(event.target.value);
    props.onchangePaymentInfo({
      paymentMethod: paymentMethodInput,
      creditCardNumber: creditcardNumberInput,
      expDate: experiationDateInput,
      owner: event.target.value,
      cvv: creditcardCodeInput,
      streetNumber: streetNumberInput,
      streetName: streetNameInput,
      city: cityInput,
      hood: hoodInput,
    });
  }

  function changeCreditcardCodeInput(event) {
    setCreditcardCodeInput(event.target.value);
    props.onchangePaymentInfo({
      paymentMethod: paymentMethodInput,
      creditCardNumber: creditcardNumberInput,
      expDate: experiationDateInput,
      owner: creditcardOwnerInput,
      cvv: event.target.value,
      streetNumber: streetNumberInput,
      streetName: streetNameInput,
      city: cityInput,
      hood: hoodInput,
    });
  }

  function changeStreetNumberInput(event) {
    setStreetNumberInput(event.target.value);
    props.onchangePaymentInfo({
      paymentMethod: paymentMethodInput,
      creditCardNumber: creditcardNumberInput,
      expDate: experiationDateInput,
      owner: creditcardOwnerInput,
      cvv: creditcardCodeInput,
      streetNumber: event.target.value,
      streetName: streetNameInput,
      city: cityInput,
      hood: hoodInput,
    });
  }

  function changeStreetNameInput(event) {
    setStreetNameInput(event.target.value);
    props.onchangePaymentInfo({
      paymentMethod: paymentMethodInput,
      creditCardNumber: creditcardNumberInput,
      expDate: experiationDateInput,
      owner: creditcardOwnerInput,
      cvv: creditcardCodeInput,
      streetNumber: streetNumberInput,
      streetName: event.target.value,
      city: cityInput,
      hood: hoodInput,
    });
  }

  function changeCityInput(event) {
    setCityInput(event.target.value);
    props.onchangePaymentInfo({
      paymentMethod: paymentMethodInput,
      creditCardNumber: creditcardNumberInput,
      expDate: experiationDateInput,
      owner: creditcardOwnerInput,
      cvv: creditcardCodeInput,
      streetNumber: streetNumberInput,
      streetName: streetNameInput,
      city: event.target.value,
      hood: hoodInput,
    });
  }

  function changeHoodInput(event) {
    setHoodInput(event.target.value);
    props.onchangePaymentInfo({
      paymentMethod: paymentMethodInput,
      creditCardNumber: creditcardNumberInput,
      expDate: experiationDateInput,
      owner: creditcardOwnerInput,
      cvv: creditcardCodeInput,
      streetNumber: streetNumberInput,
      streetName: streetNameInput,
      city: cityInput,
      hood: event.target.value,
    });
  }

  return (
    <div>
      <div className="payment-info">
        <label htmlFor="visa-card">
          <input
            onClick={changePayment}
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
            onClick={changePayment}
            type="radio"
            name="payment-method"
            id="mastercard-card"
            defaultValue="mastercard"
          />
          <i className="fab fa-cc-mastercard"></i>
        </label>

        <label htmlFor="amex-card">
          <input
            onClick={changePayment}
            type="radio"
            name="payment-method"
            id="amex-card"
            defaultValue="amex"
          />
          <i className="fab fa-cc-amex"></i>
        </label>

        <label htmlFor="discover-card">
          <input
            onClick={changePayment}
            type="radio"
            name="payment-method"
            id="discover-card"
            defaultValue="discover"
          />
          <i className="fab fa-cc-discover"></i>
        </label>

        <label htmlFor="paypal">
          <input
            onClick={changePayment}
            type="radio"
            name="payment-method"
            id="paypal"
            defaultValue="paypal"
          />
          <i className="fab fa-cc-paypal"></i>
        </label>
      </div>
      {paymentMethodInput !== "paypal" ? (
        <form className="creditCard-info">
          <div className="creditcard">
            <input
              type="text"
              onChange={changeCreditcardNumber}
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
            <select onChange={changeCityInput} name="city">
              <option value="los frailes I">Los Frailes I</option>
              <option value="los frailes II">Los Frailes II</option>
              <option value="invivienda">Invivienda</option>
              <option value="villa mella">Villa Mella</option>
            </select>
            <select onChange={changeHoodInput} name="hood">
              <option value="santo domingo este">Santo domingo norte</option>
              <option value="zona oriental">Zona Oriental</option>
            </select>
          </div>
        </form>
      ) : null}
    </div>
  );
}

export default PaymentInfo;
