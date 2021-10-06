import { useState } from "react";

import "./css-styles/styles.css";

import Comments from "./comments";
import TechDetails from "./techDetails";

function Descriptions(props) {
  // PROPERTIES
  const txt =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nemo, " +
    "ea reiciendis vero exercitationem reprehenderit, voluptates doloremque! Voluptatem molestias " +
    "atque ipsum fuga assumenda suscipit, quidem nemo, " +
    "est minus, eligendi totam. Lorem ipsum dolor sit amet consectetur adipisicing elit.";

  const [comments, setComments] = useState(props.comments);
  const [description, setDescription] = useState(txt);
  const [containerSwitcher, setContainerSwitcher] = useState(0);

  // METHODS
  function changeContainerSwitcherHandler(id) {
    setContainerSwitcher(id);
  }

  function addCommentToItemHandler(comment) {
    props.onAddComment(comment);
  }

  function renderingContainer() {
    if (containerSwitcher === 0) {
      return (
        <div id="description" className="tab">
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
        </div>
      );
    } else if (containerSwitcher === 1) {
      return <TechDetails />;
    } else {
      return (
        <Comments
          comments={comments}
          onAddCommentToItem={addCommentToItemHandler}
        />
      );
    }
  }

  // RENDERING
  return (
    <div className="item-details-bottom">
      <div className="tablinks-container">
        <button
          className={containerSwitcher === 0 ? "tablinks active" : "tablinks"}
          onClick={() => changeContainerSwitcherHandler(0)}
        >
          Descripción
        </button>

        <button
          className={containerSwitcher === 1 ? "tablinks active" : "tablinks"}
          onClick={() => changeContainerSwitcherHandler(1)}
        >
          Detalles tecnicos
        </button>

        <button
          className={containerSwitcher === 2 ? "tablinks active" : "tablinks"}
          onClick={() => changeContainerSwitcherHandler(2)}
        >
          Comentarios ({comments.length})
        </button>
      </div>

      {renderingContainer()}
    </div>
  );
}

export default Descriptions;
