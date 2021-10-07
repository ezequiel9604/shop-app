import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../store/cartContext";
import { FavoriteContext } from "../../store/favoriteContext";

import "./css-styles/top_part_styles.css";
import "./css-styles/bottom_part_styles.css";

import PromoBanner from "./promoBanner";
import HeaderTop from "./headerTop";
import Suggestion from "./suggestion";

function Header(props) {
  // PROPERTIES
  const [suggestions, setSuggestions] = useState([]);
  const { cartList } = useContext(CartContext);
  const { favoriteList } = useContext(FavoriteContext);

  // METHODS
  function findSuggestions(event) {
    let sugs = [];
    let keyword = event.target.value.toLowerCase();
    for (let d of props.departments) {
      let element = d.toLowerCase();
      if (
        element.indexOf(keyword) !== -1 &&
        keyword !== " " &&
        keyword !== ""
      ) {
        sugs.push(d);
      }
    }
    setSuggestions(sugs);
  }

  function onSuggestionsEmpty() {
    if (suggestions.length === 0) {
      return { display: "none" };
    }
    return { display: "block" };
  }

  // RENDERING

  return (
    <header id="main-header">
      <PromoBanner />
      <HeaderTop user={props.user} />
      <div className="bottom-part">
        <div className="header-logo">
          <button type="button" id="btn-open-sidebar">
            <div></div>
            <div></div>
            <div></div>
          </button>
          <Link to="/" className="logo-title">
            ShopSite
          </Link>
        </div>
        <form action="/" method="get" className="header-form-search">
          <div className="dropdown-department">
            <p>Departamentos</p>
            <span className="material-icons-sharp">arrow_drop_down</span>
            <ul className="dropdown-department-list">
              {props.departments.map((val) => {
                return (
                  <Link to={"/searchResults?keyword=" + val} key={val}>
                    {val}
                  </Link>
                );
              })}
            </ul>
          </div>
          <input
            type="search"
            name="keyword"
            onChange={findSuggestions}
            autoComplete="off"
            placeholder="Que buscas?"
          />
          <Suggestion suggs={suggestions} visibility={onSuggestionsEmpty} />
          <button type="submit">
            <span className="material-icons-sharp">search</span>
          </button>
        </form>
        <div className="header-cart-favorite">
          <Link to="/cart" className="btn">
            <span className="material-icons-outlined icon-font">
              shopping_cart
            </span>
            <i>{cartList ? cartList.length : 0}</i>
          </Link>
          <Link to="/favorites" className="btn">
            <span className="material-icons-outlined icon-font">
              favorite_border
            </span>
            <i>{favoriteList ? favoriteList.length : 0}</i>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
