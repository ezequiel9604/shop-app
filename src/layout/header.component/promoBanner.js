import { useState } from "react";

import "./css-styles/promo_banner_styles.css";

function PromoBanner() {
  const [isBannerShow, setIsBannerShow] = useState(true);

  function changeBannerHandler() {
    setIsBannerShow(false);
  }

  return (
    <div
      className="promo-banner"
      style={isBannerShow === true ? { display: "flex" } : { display: "none" }}
    >
      <div>
        <span className="material-icons-outlined">info</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero animi at
          exercitationem impedit! Voluptatibus exercitationem tenetur facilis
          quos assumenda! Suscipit veniam architecto dolor nisi deserunt dolorem
          totam eum harum aspernatur.
        </p>
      </div>
      <button type="button" onClick={changeBannerHandler}>
        <span className="material-icons-outlined">close</span>
      </button>
    </div>
  );
}

export default PromoBanner;
