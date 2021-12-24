import { useState, useEffect } from "react";
import Details from "./details";
import Description from "./descriptions";
import Loading from "../loading.component/loading";
import "./css-styles/styles.css";

import { Items } from "../../dummyData";

function ItemDetails(props) {
  const [user] = useState(props.user)
  const [item, setItem] = useState(null);
  const [comments, setComments] = useState([]);
  const [bigImageCounter, setBigImageCounter] = useState(0);

  useEffect(()=>{

    fetch("http://localhost:8080/",{
      headers: { "Content-Type":"application/json"}
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){

      const url = new URL(window.location.href);
      const itemid = url.searchParams.get("id");
      const arr = [...data].filter((curr)=>{
        return curr.id === itemid;
      });

      setItem(arr[0]);
      setComments(arr[0].comments);

    })
    .catch(function(error){
      alert(error);
    });

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
            src={require(`../../images/${item.image[bigImageCounter]}`).default}
            id="big-img"
            alt=""
          />
        </div>
        <div className="small-imgs">
          {item.image.map(function (current, ind) {
            return (
              <img
                style={bigImageCounter === ind ? { borderColor: "#0099cc" }:null}
                src={require(`../../images/${current}`).default}
                onClick={() => changeBigImageHandler(ind)}
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
