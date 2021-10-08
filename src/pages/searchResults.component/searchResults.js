import { useState, useContext } from "react";
import { setQuality } from "../../helpers";
import { CartContext } from "../../store/cartContext";

import "./css-styles/styles.css";

import SideBarFilter from "./sideBarFilter.component/sideBarFilter";
import SamplesColumn from "../samples.component/samplesColumn";

function SearchResults(props) {
  // PROPERTIES
  const [filterOffer, setFilterOffer] = useState(false);
  const [filterPrice, setFilterPrice] = useState([0, 10000]);
  const [filterStatus, setFilterStatus] = useState(0);
  const [filterQuality, setFilterQuality] = useState(0);
  const { cartList, addItemToCart } = useContext(CartContext);

  // METHODS
  function changeFilterByOffers(value) {
    setFilterOffer(value);
  }

  function changeFilterByPrices(value) {
    setFilterPrice(value);
  }

  function changeFilterByStatus(value) {
    setFilterStatus(value);
  }

  function changeFilterByQuality(value) {
    setFilterQuality(value);
  }

  function getItemsOnFilter() {
    let arts = props.items.filter((current) => {
      if (filterOffer) {
        return (
          current.offerPrice > 0 &&
          current.retailPrice >= filterPrice[0] &&
          current.retailPrice <= filterPrice[1]
        );
      }
      return (
        current.offerPrice >= 0 &&
        current.retailPrice >= filterPrice[0] &&
        current.retailPrice <= filterPrice[1]
      );
    });

    arts = arts.filter((current) => {
      if (filterStatus === 1) {
        return current.status === "Nuevo";
      } else if (filterStatus === 3) {
        return current.status === "Usado";
      } else if (filterStatus === 5) {
        return current.status === "Reparado";
      } else if (filterStatus === 4) {
        return current.status === "Nuevo" || current.status === "Usado";
      } else if (filterStatus === 6) {
        return current.status === "Nuevo" || current.status === "Reparado";
      } else if (filterStatus === 8) {
        return current.status === "Usado" || current.status === "Reparado";
      } else {
        return current.status !== -1;
      }
    });

    arts = arts.filter((current) => {
      if (filterQuality === 1) {
        return current.quality <= 1;
      } else if (filterQuality === 2) {
        return current.quality <= 2;
      } else if (filterQuality === 3) {
        return current.quality <= 3;
      } else if (filterQuality === 4) {
        return current.quality <= 4;
      } else {
        return current.quality <= 5;
      }
    });

    return arts;
  }

  function addItemToCartHandler(item, ind) {
    const data = { ...item };
    data.amount = 1;
    data.retailPrice = props.items[ind].subItem[0].retailPrice;
    data.offerPrice = props.items[ind].subItem[0].offerPrice;
    data.stock = props.items[ind].subItem[0].stock;
    data.subItem = {
      color: props.items[ind].subItem[0].color,
      capacity: props.items[ind].subItem[0].capacity,
      size: props.items[ind].subItem[0].size,
    };
    addItemToCart(data);
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

  // RENDERING
  return (
    <div className="search-results-sidebar-filter">
      <SideBarFilter
        onOffer={changeFilterByOffers}
        onPrice={changeFilterByPrices}
        onStatus={changeFilterByStatus}
        onQuality={changeFilterByQuality}
      />

      <div id="search-results">
        <div className="samples-column-container">
          {getItemsOnFilter().map((current, ind) => {
            return (
              <SamplesColumn item={current} key={current.id}>
                {setQuality(current.quality)}
                <div className="button-actions">
                  <button className="btn">Comprar ahora</button>
                  <button
                    className={
                      isCurrentItemInCart(current.id)
                        ? "btn btn-added-to-cart"
                        : "btn"
                    }
                    onClick={() => addItemToCartHandler(current, ind)}
                  >
                    {isCurrentItemInCart(current.id)
                      ? "Agregado ya al carrito"
                      : "Agregar al carrito"}
                  </button>
                </div>
              </SamplesColumn>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
