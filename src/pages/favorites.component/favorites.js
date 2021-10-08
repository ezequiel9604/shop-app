import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../store/cartContext";
import { FavoriteContext } from "../../store/favoriteContext";
import { setQuality } from "../../helpers";

import "./css-styles/styles.css";
import SamplesColumn from "../samples.component/samplesColumn";

function Favorites(props) {
  // PROPERTIES
  const { removeItemFromFavorite } = useContext(FavoriteContext);
  const { cartList, addItemToCart } = useContext(CartContext);

  // METHODS
  function removeItemHandler(id) {
    let confirm = prompt("Are you sure want to remove this item? (Y/n)", "Y");
    if (confirm === "Y") {
      removeItemFromFavorite(id);
    }
  }

  function isCurrentItemInCart(current) {
    let condition = false;
    for (let item of cartList) {
      if (item.id === current) {
        condition = true;
      }
    }
    return condition;
  }

  function addItemToCartHandler(data) {
    addItemToCart(data);
  }

  // RENDERING
  return (
    <div id="favorites">
      <h3 className="title-page">Lista de favorites</h3>

      {props.items.length === 0 ? (
        <div className="alert-empty">
          <h4>Tu lista de favoritos esta vacia!</h4>
          <Link to="/">
            Has click aqui para ver todos los articulos y ofertas.
          </Link>
        </div>
      ) : (
        <div className="samples-column-container">
          {props.items.map((current) => {
            return (
              <SamplesColumn key={current.id} item={current}>
                {setQuality(current.quality, current.addingDate)}
                <div className="button-actions">
                  <button className="btn">Comprar ahora</button>
                  <button
                    className={
                      isCurrentItemInCart(current.id)
                        ? "btn btn-added-to-cart"
                        : "btn"
                    }
                    onClick={() => addItemToCartHandler(current)}
                  >
                    {isCurrentItemInCart(current.id)
                      ? "Agregado ya al carrito"
                      : "Agregar al carrito"}
                  </button>
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

export default Favorites;
