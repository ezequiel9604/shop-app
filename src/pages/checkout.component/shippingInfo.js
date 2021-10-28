
function ShippingInfo(props) {

  function changeShippingMethodInput(event) {
    props.onChangeShippingMethod(event.target.value);
  }

  return (
    <div className="shipping-info">
      <label htmlFor="regular">
        <input
          onClick={changeShippingMethodInput}
          defaultValue="regular"
          type="radio"
          id="regular"
          name="shipping-method"
          defaultChecked
        />
        <p>
          <strong>Envio Regular:</strong> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Pariatur veniam voluptatum veritatis cupiditate
          molestias rerum ipsam.
        </p>
      </label>
      <label htmlFor="fast">
        <input
          onClick={changeShippingMethodInput}
          defaultValue="fast"
          type="radio"
          name="shipping-method"
          id="fast"
        />
        <p>
          <strong>Envio Rapido:</strong> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Pariatur veniam voluptatum veritatis cupiditate
          molestias rerum ipsam.
        </p>
      </label>

      <label htmlFor="free">
        <input
          onClick={changeShippingMethodInput}
          defaultValue="free"
          type="radio"
          name="shipping-method"
          id="free"
        />
        <p>
          <strong>Envio Gratis:</strong> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Pariatur veniam voluptatum veritatis cupiditate
          molestias rerum ipsam.
        </p>
      </label>
    </div>
  );
}

export default ShippingInfo;
