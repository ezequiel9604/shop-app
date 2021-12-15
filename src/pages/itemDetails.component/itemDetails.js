import { useState, useEffect } from "react";
import Details from "./details";
import Description from "./descriptions";
import Loading from "../loading.component/loading";
import "./css-styles/styles.css";

import { Items } from "../../dummyData";

function ItemDetails(props) {
  const [user, setUser] = useState(props.user)
  const [item, setItem] = useState(null);
  const [comments, setComments] = useState([]);
  const [bigImageCounter, setBigImageCounter] = useState(0);

  useEffect(()=>{
    
    const url = new URL(window.location.href);
    const itemid = url.searchParams.get("id");
    const arr = [...Items].filter((curr)=>{
      return curr.id === itemid;
    });

    setItem(arr[0]);
    setComments(arr[0].comments);
  }, []);

  function changeBigImageHandler(counter) {
    setBigImageCounter(counter);
  }

  function addCommentHandler(comment) {
    const arr = [...comments];
    arr.push(comment);
    setComments(arr);
  }

  return (
    <div id="item-details">
      <div className="item-details-top">
        {item? 
        (<div className="slide-show">
        <div className="img-zoom">
          <img
            id="big-img"
            src={item.image[bigImageCounter]}
            alt=""
          />
        </div>
        <div className="small-imgs">
          {item.image.map(function (current, ind) {
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
      </div>): (<Loading />)}

        {item? (<Details detail={item} />): (<Loading />)}
      </div>

      <Description user={user} comments={comments} onAddComment={addCommentHandler} />
    </div>
  );
}

export default ItemDetails;
