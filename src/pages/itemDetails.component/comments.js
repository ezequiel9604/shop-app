import { useState } from "react";
import { Link } from "react-router-dom";

import manAvatar from "../../images/placeholder-man.png";

function Comments(props) {
  
  // PROPERTIES
  const [commentInput, setCommentInput] = useState("");

  // METHODS
  function changeCommentInput(event) {
    setCommentInput(event.target.value);
  }

  function createCommentHandler() {
    const newComment = {
      id: "CMT-025314",
      userName: "Ezequiel Diaz Peña",
      image: manAvatar,
      date: new Date(),
      text: commentInput,
    };

    props.onAddCommentToItem(newComment);
  }

  // RENDERING
  return (
    <div id="comments" className="tab">
      <div className="add-comments">
        <div>
          <img src={manAvatar} alt="" />
        </div>
        <div>
          <input
            defaultValue={commentInput}
            onChange={changeCommentInput}
            type="text"
            placeholder="agrega un comentario!"
          />
        </div>
        <div>
          <button onClick={createCommentHandler} type="button">
            Comentar
          </button>
        </div>
      </div>
    
      {props.comments.map((current) => {
        return (
          <div className="result-comments" key={current.id}>
            <div>
              <img src={current.image} alt="" />
            </div>
            <div>
              <div className="result-comments-headers">
                <Link to="/">{current.userName}</Link>
                <time>publicado: {current.date.toDateString()}</time>
              </div>
              <div className="result-comments-sections">{current.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Comments;