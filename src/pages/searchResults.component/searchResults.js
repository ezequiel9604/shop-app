import { useState, useEffect, useContext } from "react";
import Loading from "../loading.component/loading";
import SideBarFilter from "./sideBarFilter.component/sideBarFilter";
import SamplesColumn from "../samples.component/samplesColumn";
import { getItemsOnFilter, setQuality } from "../../helpers";
import { CartContext } from "../../store/context";
import "./css-styles/styles.css";

function SearchResults(props) {
  const [items, setItems] = useState([]);
  const [filterOffer, setFilterOffer] = useState(false);
  const [filterPrice, setFilterPrice] = useState([0, 10000]);
  const [filterStatus, setFilterStatus] = useState(0);
  const [filterQuality, setFilterQuality] = useState(0);
  const { cartList, addItemToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:8080/",{
      headers: { "Content-Type":"application/json"}
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      setItems(data);
    })
    .catch(function(error){
      alert(error);
    });
  }, []);

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

  function addItemToCartHandler(item, ind) {
    const data = { ...item };
    data.amount = 1;
    data.retailPrice = items[ind].subItem[0].retailPrice;
    data.offerPrice = items[ind].subItem[0].offerPrice;
    data.stock = items[ind].subItem[0].stock;
    data.subItem = {
      color: items[ind].subItem[0].color,
      capacity: items[ind].subItem[0].capacity,
      size: items[ind].subItem[0].size,
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
          {items.length ? (
            getItemsOnFilter(
              items,
              filterOffer,
              filterPrice,
              filterStatus,
              filterQuality
            ).map((current, ind) => {
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
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
