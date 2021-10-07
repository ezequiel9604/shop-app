import { Link } from "react-router-dom";
import { formatedNumber } from "../../helpers";

function SampleSingle(props) {
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
