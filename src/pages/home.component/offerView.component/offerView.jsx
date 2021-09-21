import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./css-styles/styles.css";

import SampleSingle from "../../samples.component/sampleSingle";

import smartTvImage from "../../../images/smart-tv.png";
import tabletImage from "../../../images/tablet.png";
import toolboxImage from "../../../images/toolbox.png";

class OfferView extends Component {
  constructor(props) {
    super(props);

    const tlt =
      "Lorem ipsum dolor: sit amet, consectetur, " +
      "adipisicing elit atque deleniti reiciendis rerum.";

    this.state = {
      departments: [
        {
          id: 1,
          image: smartTvImage,
          name: "departamento1",
          title: "1 " + tlt,
        },
        { id: 2, image: tabletImage, name: "departamento2", title: "2 " + tlt },
        {
          id: 3,
          image: toolboxImage,
          name: "departamento3",
          title: "3 " + tlt,
        },
        {
          id: 4,
          image: toolboxImage,
          name: "departamento4",
          title: "4 " + tlt,
        },
        {
          id: 5,
          image: toolboxImage,
          name: "departamento5",
          title: "5 " + tlt,
        },
        {
          id: 6,
          image: toolboxImage,
          name: "departamento6",
          title: "6 " + tlt,
        },
      ],
    };

    this.getItemsInOffer = this.getItemsInOffer.bind(this);
    this.getMostViewedItems = this.getMostViewedItems.bind(this);
  }

  //returns an array with 5 items in offer
  getItemsInOffer() {
    const arr = this.props.items.filter((item) => {
      return item.offerPrice > 0;
    });
    return arr.slice(0, 5);
  }

  // returns an array with the most viewed items
  getMostViewedItems() {
    // creates an array of numbers with item views
    const views = this.props.items.map((current) => {
      return current.views;
    });

    let firstMax = views[0];
    let secondMax = views[1];

    // assings max number to firstMax
    for (let n of views) {
      if (n > firstMax) firstMax = n;
    }

    // assings the second max number to secondMax but different to firstMax
    for (let n of views) {
      if (n > secondMax && n !== firstMax) secondMax = n;
    }

    return this.props.items.filter((current) => {
      return current.views === firstMax || current.views === secondMax;
    });
  }

  render() {
    const { departments } = this.state;

    return (
      <div id="offer-view">
        <div className="slides-mostviewed-ctn">
          <div className="slides-ctn slides-ctn-departments">
            {departments.map((current, ind) => {
              return (
                <div
                  key={current.id}
                  className={
                    ind === 0
                      ? "slides slides-departments animated-slides"
                      : "slides slides-departments"
                  }
                >
                  <div className="slide-information">
                    <h2>{current.title}</h2>
                    <Link to={"/" + current.name}>
                      ver más
                      <span className="material-icons-sharp">east</span>
                    </Link>
                  </div>
                  <div className="slide-bkg-image">
                    <img src={current.image} alt="" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="most-viewed-ctn">
            <h3>Mas vistos</h3>

            <div className="most-viewed-samples-ctn">
              {this.getMostViewedItems().map((current) => {
                return <SampleSingle key={current.id} item={current} />;
              })}
            </div>
          </div>
        </div>

        <div className="offer-ctn">
          <h3>En ofertas</h3>

          <div className="offer-samples-ctn">
            {this.getItemsInOffer().map((current) => {
              return <SampleSingle key={current.id} item={current} />;
            })}
          </div>
        </div>

        <div className="advertisement-ctn">
          <div>
            <span className="material-icons">local_shipping</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              excepturi blanditiis labore deleniti facilis. Facere excepturi
              blanditiis labore deleniti facilis
            </p>
          </div>
          <div>
            <span className="material-icons">verified_user</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              excepturi blanditiis labore deleniti facilis. Facere excepturi
              blanditiis labore.
            </p>
          </div>
          <div>
            <span className="material-icons">support_agent</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              excepturi blanditiis labore deleniti facilis. Facere excepturi
              blanditiis labore.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default OfferView;
