import React, { useState } from "react";
import { Link } from "react-router-dom";

function Details(props) {
  const [itemStock, setItemStock] = useState(props.detail.subItem[0].stock);
  const [itemCapacity, setItemCapacity] = useState(
    props.detail.subItem[0].capacity
  );
  const [itemSize, setItemSize] = useState(props.detail.subItem[0].size);
  const [itemColor, setItemColor] = useState(props.detail.subItem[0].color);

  const [itemCounter, setItemCounter] = useState(0);
  const [itemSelected, setItemSelected] = useState(0);

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
                  id={selection + current}
                  name={selection}
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
    for (let a of props.detail.subItem) {
      if (
        a.capacity === itemCapacity &&
        a.size === itemSize &&
        a.color === itemColor
      ) {
        setItemSelected(cont);
        setItemCounter(0);
        setItemStock(a.stock);

        return;
      }

      cont += 1;
    }

    setItemCounter(0);
    setItemStock(0);
  }

  function qualityRender(quality) {
    if (quality <= 1) {
      return (
        <div className="item-details-quality">
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
        <div className="item-details-quality">
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
        <div className="item-details-quality">
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
        <div className="item-details-quality">
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
      <div className="item-details-quality">
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <strong>{parseFloat(quality)}</strong>
      </div>
    );
  }

  const { detail } = props;

  return (
    <div className="details">
      <h3>{detail.title}</h3>

      <div className="item-details-price">
        <span>${detail.subItem[itemSelected].offerPrice}</span>
        <span>${detail.subItem[itemSelected].retailPrice}</span>
      </div>

      {qualityRender(detail.quality)}

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
          <button onClick={() => changeItemCounterHandler("-")} className="btn">
            -
          </button>
          <span>{itemCounter}</span>
          <button onClick={() => changeItemCounterHandler("+")} className="btn">
            +
          </button>
        </div>
        <div>{<strong>Quedan {itemStock} disponibles.</strong>}</div>
      </div>

      {props.children}
    </div>
  );
}

export default Details;
