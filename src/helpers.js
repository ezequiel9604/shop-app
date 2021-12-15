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

export function getItemsOnFilter(items, fo, fp, fs, fq) {
  let arts = [...items].filter((current) => {
    if (fo) {
      return (
        current.offerPrice > 0 &&
        current.retailPrice >= fp[0] &&
        current.retailPrice <= fp[1]
      );
    }
    return (
      current.offerPrice >= 0 &&
      current.retailPrice >= fp[0] &&
      current.retailPrice <= fp[1]
    );
  });

  arts = arts.filter((current) => {
    if (fs === 1) {
      return current.status === "Nuevo";
    } else if (fs === 3) {
      return current.status === "Usado";
    } else if (fs === 5) {
      return current.status === "Reparado";
    } else if (fs === 4) {
      return current.status === "Nuevo" || current.status === "Usado";
    } else if (fs === 6) {
      return current.status === "Nuevo" || current.status === "Reparado";
    } else if (fs === 8) {
      return current.status === "Usado" || current.status === "Reparado";
    } else {
      return current.status !== -1;
    }
  });

  arts = arts.filter((current) => {
    if (fq === 1) {
      return current.quality <= 1;
    } else if (fq === 2) {
      return current.quality <= 2;
    } else if (fq === 3) {
      return current.quality <= 3;
    } else if (fq === 4) {
      return current.quality <= 4;
    } else {
      return current.quality <= 5;
    }
  });

  return arts;
}
