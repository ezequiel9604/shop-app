import { Link } from "react-router-dom";
import { formatedNumber } from "../../helpers";

function SampleSingle(props) {

  return (
    <div className="samples">
      {props.item.offerPrice > 0 && (
        <span className="descount">
          {parseInt(
            ((props.item.retailPrice - props.item.offerPrice) / props.item.retailPrice) * 100
          )}
          %
        </span>
      )}
      <Link to={"/itemDetails?id="+props.item.id} className="samples-header">
        <img src={require(`../../images/${props.item.image[0]}`).default} alt="" />
      </Link>

      {props.children}

      {props.item.offerPrice > 0 ? (
        <div className="samples-price">
          <span>${formatedNumber(props.item.offerPrice)}</span>
          <span>${formatedNumber(props.item.retailPrice)}</span>
        </div>
      ) : (
        <div className="samples-price">
          <span>${formatedNumber(props.item.retailPrice)}</span>
        </div>
      )}
    </div>
  );
}

export default SampleSingle;
