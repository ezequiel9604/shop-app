import { Link } from "react-router-dom";
import "./css-styles/styles.css";

import SamplesColumn from "../samples.component/samplesColumn";

function favorites(props) {
  function setQuality(quality, date) {
    if (quality <= 1) {
      return (
        <div className="samples-column-quality">
          <span className="material-icons">star</span>
          <span className="material-icons">star_outline</span>
          <span className="material-icons">star_outline</span>
          <span className="material-icons">star_outline</span>
          <span className="material-icons">star_outline</span>
          <strong>{parseFloat(quality)}</strong>
          <time>Agregado {new Date(date).toLocaleDateString()}</time>
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
          <time>Agregado {new Date(date).toLocaleDateString()}</time>
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
          <time>Agregado {new Date(date).toLocaleDateString()}</time>
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
          <time>Agregado {new Date(date).toLocaleDateString()}</time>
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
        <time>Agregado {new Date(date).toLocaleDateString()}</time>
      </div>
    );
  }

  function removeItemHandler(id) {
    props.onUpdateFavorites(id);
  }

  const { items } = props;

  return (
    <div id="favorites">
      <h3 className="title-page">Lista de favorites</h3>

      {items.length === 0 ? (
        <div className="alert-empty">
          <h4>Tu lista de favoritos esta vacia!</h4>
          <Link to="/">
            Has click aqui para ver todos los articulos y ofertas.
          </Link>
        </div>
      ) : (
        <div className="samples-column-container">
          {items.map((current) => {
            return (
              <SamplesColumn key={current.id} item={current}>
                {setQuality(current.quality, current.addingDate)}
                <div className="button-actions">
                  <button className="btn">Comprar ahora</button>
                  <button className="btn">Agregar al carrito</button>
                  <button
                    className="btn btn-remove"
                    onClick={() => removeItemHandler(current.id)}
                  >
                    <span className="material-icons-outlined">
                      delete_forever
                    </span>
                  </button>
                </div>
              </SamplesColumn>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default favorites;
