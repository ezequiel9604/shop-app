export function setQuality(quality) {
  if (quality <= 1) {
    return (
      <div className="samples-column-quality">
        <span className="material-icons">star</span>
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
        <strong>{parseFloat(quality)}</strong>
      </div>
    );
  } else if (quality <= 2) {
    return (
      <div className="samples-column-quality">
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
        <strong>{parseFloat(quality)}</strong>
      </div>
    );
  } else if (quality <= 3) {
    return (
      <div className="samples-column-quality">
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star_outline</span>
        <span className="material-icons">star_outline</span>
        <strong>{parseFloat(quality)}</strong>
      </div>
    );
  } else if (quality <= 4) {
    return (
      <div className="samples-column-quality">
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star_outline</span>
        <strong>{parseFloat(quality)}</strong>
      </div>
    );
  }
  return (
    <div className="samples-column-quality">
      <span className="material-icons">star</span>
      <span className="material-icons">star</span>
      <span className="material-icons">star</span>
      <span className="material-icons">star</span>
      <span className="material-icons">star</span>
      <strong>{parseFloat(quality)}</strong>
    </div>
  );
}

export function formatedNumber(num) {
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

export function formatOrderStatus(status) {
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

export function formatShippingMethod(method) {
  if (method === "regular") {
    return "Regular";
  } else if (method === "fast") {
    return "Rapido";
  } else if (method === "free") {
    return "Gratis";
  }
}
