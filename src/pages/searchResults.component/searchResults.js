import { useState, useContext } from "react";

import "./css-styles/styles.css";

import { CartContext } from "../../store/cartContext";
import SideBarFilter from "./sideBarFilter.component/sideBarFilter";
import SamplesColumn from "../samples.component/samplesColumn";

function SearchResults(props) {

  // PROPERTIES
  const [filterOffer, setFilterOffer] = useState(false);
  const [filterPrice, setFilterPrice] = useState([0, 10000]);
  const [filterStatus, setFilterStatus] = useState(0);
  const [filterQuality, setFilterQuality] = useState(0);
  const { addItemToCart } = useContext(CartContext);

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
    let arts = props.items.filter((val) => {
      if (filterOffer) {
        return (
          val.offerPrice > 0 &&
          val.retailPrice >= filterPrice[0] &&
          val.retailPrice <= filterPrice[1]
        );
      }
      return (
        val.offerPrice >= 0 &&
        val.retailPrice >= filterPrice[0] &&
        val.retailPrice <= filterPrice[1]
      );
    });

    arts = arts.filter((val) => {
      if (filterStatus === 1) {
        return val.status === "Nuevo";
      } else if (filterStatus === 3) {
        return val.status === "Usado";
      } else if (filterStatus === 5) {
        return val.status === "Reparado";
      } else if (filterStatus === 4) {
        return val.status === "Nuevo" || val.status === "Usado";
      } else if (filterStatus === 6) {
        return val.status === "Nuevo" || val.status === "Reparado";
      } else if (filterStatus === 8) {
        return val.status === "Usado" || val.status === "Reparado";
      } else {
        return val.status !== -1;
      }
    });

    arts = arts.filter((val) => {
      if (filterQuality === 1) {
        return val.quality <= 1;
      } else if (filterQuality === 2) {
        return val.quality <= 2;
      } else if (filterQuality === 3) {
        return val.quality <= 3;
      } else if (filterQuality === 4) {
        return val.quality <= 4;
      } else {
        return val.quality <= 5;
      }
    });

    return arts;
  }

  function setQuality(quality) {
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

  function addItemToCartHandler(item, ind) {
    const data = item;
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
                    className="btn"
                    onClick={() => addItemToCartHandler(current, ind)}
                  >
                    Agregar al carrito
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
