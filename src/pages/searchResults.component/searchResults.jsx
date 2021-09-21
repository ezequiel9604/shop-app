import React, { Component } from "react";

import "./css-styles/styles.css";

import SideBarFilter from "./sideBarFilter.component/sideBarFilter";
import SamplesColumn from "../samples.component/samplesColumn";

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterOffer: false,
      filterPrice: [0, 10000],
      filterStatus: 0,
      filterQuality: 0,
    };

    this.onFilterByOffers = this.onFilterByOffers.bind(this);
    this.onFilterByPrices = this.onFilterByPrices.bind(this);
    this.onFilterByStatus = this.onFilterByStatus.bind(this);
    this.onFilterByQuality = this.onFilterByQuality.bind(this);
  }

  onFilterByOffers(value) {
    this.setState({ filterOffer: value });
  }

  onFilterByPrices(value) {
    this.setState({ filterPrice: value });
  }

  onFilterByStatus(value) {
    this.setState({ filterStatus: value });
  }

  onFilterByQuality(value) {
    this.setState({ filterQuality: value });
  }

  getItemsOnFilter() {
    const { filterPrice } = this.state;

    let arts = this.props.items.filter((val) => {
      if (this.state.filterOffer) {
        return (
          val.offerPrice > 0 &&
          val.retailPrice >= filterPrice[0] &&
          val.retailPrice <= filterPrice[1]
        );
      }
      return (
        val.offerPrice >= 0 &&
        val.retailPrice >= filterPrice[0] &&
        val.retailPrice <= filterPrice[1]
      );
    });

    arts = arts.filter((val) => {
      if (this.state.filterStatus === 1) {
        return val.status === "Nuevo";
      } else if (this.state.filterStatus === 3) {
        return val.status === "Usado";
      } else if (this.state.filterStatus === 5) {
        return val.status === "Reparado";
      } else if (this.state.filterStatus === 4) {
        return val.status === "Nuevo" || val.status === "Usado";
      } else if (this.state.filterStatus === 6) {
        return val.status === "Nuevo" || val.status === "Reparado";
      } else if (this.state.filterStatus === 8) {
        return val.status === "Usado" || val.status === "Reparado";
      } else {
        return val.status !== -1;
      }
    });

    arts = arts.filter((val) => {
      if (this.state.filterQuality === 1) {
        return val.quality <= 1;
      } else if (this.state.filterQuality === 2) {
        return val.quality <= 2;
      } else if (this.state.filterQuality === 3) {
        return val.quality <= 3;
      } else if (this.state.filterQuality === 4) {
        return val.quality <= 4;
      } else {
        return val.quality <= 5;
      }
    });

    return arts;
  }

  setQuality(quality) {
    if (quality <= 1) {
      return (
        <div className="samples-column-quality">
          <span className="material-icons">star</span>
          <span className="material-icons">star_outline</span>
          <span className="material-icons">star_outline</span>
          <span className="material-icons">star_outline</span>
          <span className="material-icons">star_outline</span>
          <strong>{parseFloat(quality)}</strong>
        </div>
      );
    } else if (quality <= 2) {
      return (
        <div className="samples-column-quality">
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star_outline</span>
          <span className="material-icons">star_outline</span>
          <span className="material-icons">star_outline</span>
          <strong>{parseFloat(quality)}</strong>
        </div>
      );
    } else if (quality <= 3) {
      return (
        <div className="samples-column-quality">
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star_outline</span>
          <span className="material-icons">star_outline</span>
          <strong>{parseFloat(quality)}</strong>
        </div>
      );
    } else if (quality <= 4) {
      return (
        <div className="samples-column-quality">
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star_outline</span>
          <strong>{parseFloat(quality)}</strong>
        </div>
      );
    }
    return (
      <div className="samples-column-quality">
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <strong>{parseFloat(quality)}</strong>
      </div>
    );
  }

  addItemToCartHandler(id) {
    this.props.onAddItemToCart(id);
  }

  render() {
    return (
      <div className="search-results-sidebar-filter">
        <SideBarFilter
          onOffer={this.onFilterByOffers}
          onPrice={this.onFilterByPrices}
          onStatus={this.onFilterByStatus}
          onQuality={this.onFilterByQuality}
        />

        <div id="search-results">
          <div className="samples-column-container">
            {this.getItemsOnFilter().map((current) => {
              return (
                <SamplesColumn item={current} key={current.id}>
                  {this.setQuality(current.quality)}
                  <div className="button-actions">
                    <button className="btn">Comprar ahora</button>
                    <button
                      onClick={() => this.addItemToCartHandler(current.id)}
                      className="btn"
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </SamplesColumn>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResults;
