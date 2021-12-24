import { Link } from "react-router-dom";
import { formatedNumber } from "../../helpers";

function SamplesColumn(props) {

  return (
    <div className="samples-column">
      {props.item.offerPrice > 0 ? (
        <span className="descount">
          {parseInt(
            ((props.item.retailPrice - props.item.offerPrice) / props.item.retailPrice) * 100
          )}
          %
        </span>
      ) : null}
      <Link to="/itemDetails" className="samples-column-headers">
        <img src={require(`../../images/${props.item.image[0]}`).default} alt="" />
      </Link>
      <div className="samples-column-sections">
        <h3>{props.item.title}</h3>
        {props.item.offerPrice > 0 ? (
          <div className="samples-column-price">
            <span>${formatedNumber(props.item.offerPrice)}</span>
            <span>${formatedNumber(props.item.retailPrice)}</span>
          </div>
        ) : (
          <div className="samples-column-price">
            <span>${formatedNumber(props.item.retailPrice)}</span>
          </div>
        )}
        {props.children}
      </div>
    </div>
  );
}

export default SamplesColumn;
