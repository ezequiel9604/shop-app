import React from "react";
import { Link } from "react-router-dom";

function SampleSingle(props) {
  function formatedNumber(num) {
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

  const { item } = props;

  return (
    <div className="samples">
      {item.offerPrice > 0 && (
        <span className="descount">
          {parseInt(
            ((item.retailPrice - item.offerPrice) / item.retailPrice) * 100
          )}
          %
        </span>
      )}
      <Link to="/itemDetails" className="samples-header">
        <img src={item.image[0]} alt="" />
      </Link>

      {props.children}

      {item.offerPrice > 0 ? (
        <div className="samples-price">
          <span>${formatedNumber(item.offerPrice)}</span>
          <span>${formatedNumber(item.retailPrice)}</span>
        </div>
      ) : (
        <div className="samples-price">
          <span>${formatedNumber(item.retailPrice)}</span>
        </div>
      )}
    </div>
  );
}

export default SampleSingle;
