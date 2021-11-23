import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext, FavoriteContext } from "../../store/context";

import "./css-styles/top_part_styles.css";
import "./css-styles/bottom_part_styles.css";

import PromoBanner from "./promoBanner";
import HeaderTop from "./headerTop";
import Suggestion from "./suggestion";

function Header(props) {
  // PROPERTIES
  const [itemName, setItemName] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { cartList } = useContext(CartContext);
  const { favoriteList } = useContext(FavoriteContext);

  // METHODS
  function getTotalAmount(items) {
    let sum = 0;
    for (let i of items) {
      sum += i.amount;
    }
    return sum;
  }

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
    setItemName(keyword);
  }

  function onSuggestionsEmpty() {
    if (suggestions.length === 0) {
      return { display: "none" };
    }
    return { display: "block" };
  }

  function handleSubmit(event){
    event.preventDefault();
    window.location.assign("/searchResults?keyword="+itemName);
  }

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
            Shop-app
          </Link>
        </div>
        <form onSubmit={handleSubmit} action="/searchResults" method="get" className="header-form-search">
          <div className="dropdown-department">
            <p>Departamentos</p>
            <span className="material-icons-sharp">arrow_drop_down</span>
            <ul className="dropdown-department-list">
              {props.departments.map((current) => {
                return (
                  <Link to={"/searchResults?keyword=" + current} key={current}>
                    {current}
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
            <i>{cartList ? getTotalAmount(cartList) : 0}</i>
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
