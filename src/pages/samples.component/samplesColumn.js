import { Link } from "react-router-dom";
import { formatedNumber } from "../../helpers";

function SamplesColumn(props) {
  const { item } = props;

  return (
    <div className="samples-column">
      {item.offerPrice > 0 ? (
        <span className="descount">
          {parseInt(
            ((item.retailPrice - item.offerPrice) / item.retailPrice) * 100
          )}
          %
        </span>
      ) : null}
      <Link to="/itemDetails" className="samples-column-headers">
        <img src={item.image[0]} alt="" />
      </Link>
      <div className="samples-column-sections">
        <h3>{item.title}</h3>
        {item.offerPrice > 0 ? (
          <div className="samples-column-price">
            <span>${formatedNumber(item.offerPrice)}</span>
            <span>${formatedNumber(item.retailPrice)}</span>
          </div>
        ) : (
          <div className="samples-column-price">
            <span>${formatedNumber(item.retailPrice)}</span>
          </div>
        )}
        {props.children}
      </div>
    </div>
  );
}

export default SamplesColumn;
