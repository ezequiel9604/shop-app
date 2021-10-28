import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext, FavoriteContext } from "../../store/context";
import { setQuality, formatedNumber } from "../../helpers";

function Details(props) {
  // PROPERTIES
  const { detail } = props;
  let [itemCapacity, setItemCapacity] = useState(detail.subItem[0].capacity);
  let [itemSize, setItemSize] = useState(detail.subItem[0].size);
  let [itemColor, setItemColor] = useState(detail.subItem[0].color);

  const [itemStock, setItemStock] = useState(detail.subItem[0].stock);
  const [itemCounter, setItemCounter] = useState(0);
  const [itemSelected, setItemSelected] = useState(0);
  const [isTooltipShow, setIsTooltipShow] = useState(false);
  const { cartList, addItemToCart } = useContext(CartContext);
  const { favoriteList, addItemToFavorite } = useContext(FavoriteContext);

  // METHODS
  function selectionRender(details, selection) {
    let arr = [];

    if (selection === "Capacity") {
      // creates a new array with a list of capacity values
      details.subItem.map((current) => {
        return arr.push(current.capacity);
      });
    } else if (selection === "Size") {
      // creates a new array with a list of capacity currentues
      details.subItem.map((current) => {
        return arr.push(current.size);
      });
    } else if (selection === "Color") {
      // creates a new array with a list of capacity currentues
      details.subItem.map((current) => {
        return arr.push(current.color);
      });
    }

    // remove dupliques and save it into uniques variable
    const uniques = [...new Set(arr)];

    if (uniques[0] !== null) {
      return (
        <div>
          <strong>{selection}:</strong>

          {uniques.map((current, ind) => {
            return (
              <label htmlFor={selection + current} title={current} key={ind}>
                <input
                  onClick={() => changeSelectionHandler(current, selection)}
                  type="radio"
                  name={selection}
                  id={selection + current}
                  defaultChecked={ind === 0 ? true : false}
                />
                {selection !== "Color" ? (
                  <small>{current}</small>
                ) : (
                  <mark style={{ backgroundColor: current }}></mark>
                )}
                <span className="material-icons-outlined">done</span>
              </label>
            );
          })}
        </div>
      );
    }

    return null;
  }

  function changeItemCounterHandler(simbol) {
    if (simbol === "-") {
      setItemCounter(itemCounter > 0 ? itemCounter - 1 : itemCounter);
    } else if (simbol === "+") {
      setItemCounter(itemCounter < itemStock ? itemCounter + 1 : itemCounter);
    }
  }

  function changeSelectionHandler(value, selection) {
    if (selection === "Capacity") {
      setItemCapacity(value);
    } else if (selection === "Size") {
      setItemSize(value);
    } else if (selection === "Color") {
      setItemColor(value);
    }

    let cont = 0;
    for (let i of props.detail.subItem) {
      if (
        i.capacity === itemCapacity &&
        i.size === itemSize &&
        i.color === itemColor
      ) {
        setItemSelected(cont);
        setItemCounter(0);
        setItemStock(i.stock);

        return;
      }

      cont += 1;
    }

    setItemCounter(0);
    setItemStock(0);
  }

  function checkAddToCart() {
    if (itemCounter > 0) {
      const data = { ...props.detail };

      data.amount = itemCounter;
      data.retailPrice = props.detail.subItem[itemSelected].retailPrice;
      data.offerPrice = props.detail.subItem[itemSelected].offerPrice;
      data.stock = props.detail.subItem[itemSelected].stock;
      data.subItem = {
        color: itemColor,
        capacity: itemCapacity,
        size: itemSize,
      };
      addItemToCart(data);
    }
  }

  function checkAddTofavorite() {
    if (itemCounter > 0) {
      const data = { ...props.detail };

      data.amount = itemCounter;
      data.retailPrice = props.detail.subItem[itemSelected].retailPrice;
      data.offerPrice = props.detail.subItem[itemSelected].offerPrice;
      data.stock = props.detail.subItem[itemSelected].stock;
      data.subItem = {
        color: itemColor,
        capacity: itemCapacity,
        size: itemSize,
      };
      addItemToFavorite(data);
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

  function isCurrentItemInFavorite(current) {
    let condition = false;
    for (let item of favoriteList) {
      if (item.id === current) {
        condition = true;
      }
    }
    return condition;
  }

  function changeIsTooltipShow() {
    if (itemCounter < 1) {
      setIsTooltipShow(true);
    } else {
      setIsTooltipShow(false);
    }
  }

  function hideIsTooltipShow() {
    setIsTooltipShow(false);
  }

  function checkAddToPurchase(){
    if (itemCounter > 0) {
      const data = { ...props.detail };

      data.amount = itemCounter;
      data.retailPrice = props.detail.subItem[itemSelected].retailPrice;
      data.offerPrice = props.detail.subItem[itemSelected].offerPrice;
      data.stock = props.detail.subItem[itemSelected].stock;
      data.subItem = {
        color: itemColor,
        capacity: itemCapacity,
        size: itemSize,
      };
      addItemToCart(data);
    }
  }

  // RENDERING
  return (
    <div className="details">
      <h3>{detail.title}</h3>

      <div className="item-details-price">
        <span>${formatedNumber(detail.subItem[itemSelected].offerPrice)}</span>
        <span>${formatedNumber(detail.subItem[itemSelected].retailPrice)}</span>
      </div>

      {setQuality(detail.quality)}

      <div className="item-details-status">
        <label>
          Estado: <Link to="/">{detail.status}</Link>
        </label>
        <label>
          Departamento: <Link to="/">{detail.department}</Link>
        </label>
      </div>

      <div className="item-details-selection">
        {selectionRender(detail, "Color")}
        {selectionRender(detail, "Size")}
        {selectionRender(detail, "Capacity")}
      </div>

      <div className="item-details-amount">
        <div>
          <button className="btn" onClick={() => changeItemCounterHandler("-")}>
            -
          </button>
          <span>{itemCounter}</span>
          <button className="btn" onClick={() => changeItemCounterHandler("+")}>
            +
          </button>
        </div>
        <div>{<strong>Quedan {itemStock} disponibles.</strong>}</div>
      </div>

      <div className="button-actions">
        {isTooltipShow? (<button className="btn">Comprar ahora</button>):
        <Link to="/checkout" onClick={checkAddToPurchase} className="btn">Comprar ahora</Link>}
        

        <button
          className={
            isCurrentItemInCart(detail.id) ? "btn btn-added-to-cart" : "btn"
          }
          onClick={checkAddToCart}
          onMouseEnter={changeIsTooltipShow}
          onMouseLeave={hideIsTooltipShow}
        >
          {isCurrentItemInCart(detail.id)
            ? "Agregado ya al carrito"
            : "Agregar al carrito"}

          <div
            style={isTooltipShow ? { opacity: 1 } : { opacity: 0 }}
            className="tooltips-button-actions"
          >
            Selecciona una de las opciones del producto.
          </div>
        </button>

        <button
          className={
            isCurrentItemInFavorite(detail.id) ? "btn btn-added-to-cart" : "btn"
          }
          onClick={checkAddTofavorite}
        >
          <span className="material-icons-outlined">favorite_border</span>
        </button>
      </div>
    </div>
  );
}

export default Details;
