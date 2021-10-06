import { useState } from "react";

import "./css-styles/styles.css";

import Details from "./details";
import Description from "./descriptions";

function ItemDetails(props) {
  // PROPERTIES

  const [comments, setComments] = useState(props.items[0].comments);
  const [bigImageCounter, setBigImageCounter] = useState(0);

  // METHODS
  function changeBigImageHandler(counter) {
    setBigImageCounter(counter);
  }

  function addCommentHandler(comment) {
    const arr = [...comments];
    arr.push(comment);
    setComments(arr);
  }

  // RENDERING
  return (
    <div id="item-details">
      <div className="item-details-top">
        <div className="slide-show">
          <div className="img-zoom">
            <img
              id="big-img"
              src={props.items[0].image[bigImageCounter]}
              alt=""
            />
            {/* <div id="img-rts" className="img-zoom-rts "></div> */}
          </div>
          <div className="small-imgs">
            {props.items[0].image.map(function (current, ind) {
              return (
                <img
                  style={bigImageCounter === ind ? { borderColor: "#0099cc" }:null}
                  onClick={() => changeBigImageHandler(ind)}
                  src={current}
                  key={ind}
                  alt=""
                />
              );
            })}
          </div>
        </div>

        <Details detail={props.items[0]} />
      </div>

      <Description comments={comments} onAddComment={addCommentHandler} />
    </div>
  );
}

export default ItemDetails;
