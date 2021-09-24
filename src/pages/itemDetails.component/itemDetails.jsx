import { Component } from "react";

import "./css-styles/styles.css";

import Details from "./details";
import Description from "./descriptions";

import womanAvatar from "../../images/placeholder-woman.png";
import manAvatar from "../../images/placeholder-man.png";

class ItemDetails extends Component {
  
  constructor(props) {
    super(props);

    const tlt =
      "Lorem ipsum dolor sit amet consectetur adipisicing, elit. " +
      "Repudiandae vero, enim deserunt nemo delectus pariatur soluta illo dolores nihil non.";

    this.state = {
      Comments: [
        {
          id: "CMT-025489",
          userName: "John Doe",
          image: manAvatar,
          date: new Date(2021, 6, 3),
          text: tlt + ". " + tlt,
        },
        {
          id: "CMT-025964",
          userName: "Sarah Doe",
          image: womanAvatar,
          date: new Date(2021, 6, 4),
          text: tlt + ". " + tlt,
        },
      ],

      BigImgCounter: 0,
    };

    this.changeBigImageHandler = this.changeBigImageHandler.bind(this);
    this.onAddComment = this.onAddComment.bind(this);
    this.addItemToCartHandler = this.addItemToCartHandler.bind(this);
  }

  changeBigImageHandler(id) {
    this.setState({ BigImgCounter: id });
  }

  onAddComment(comm) {
    const newComment = this.state.Comments;
    newComment.push(comm);
    this.setState({ Comments: newComment });
  }

  addItemToCartHandler(data) {
    this.props.onAddItemToCartList(data);
  }


  render() {
    const { items } = this.props;
    const { BigImgCounter } = this.state;

    return (
      <div id="item-details">
        <div className="item-details-top">
          <div className="slide-show">
            <div className="img-zoom">
              <img id="big-img" src={items[0].image[BigImgCounter]} alt="" />
              {/* <div id="img-rts" className="img-zoom-rts "></div> */}
            </div>
            <div className="small-imgs">
              {items[0].image.map((current, ind) => {
                return (
                  <img
                    style={
                      BigImgCounter === ind ? { borderColor: "#0099cc" } : null
                    }
                    onClick={() => this.changeBigImageHandler(ind)}
                    src={current}
                    key={ind}
                    alt=""
                  />
                );
              })}
            </div>
          </div>

          <Details detail={items[0]} onAddItemToCart={this.addItemToCartHandler} />
        </div>

        <Description
          comments={this.state.Comments}
          onAddComment={this.onAddComment}
        />
      </div>
    );
  }
}

export default ItemDetails;
