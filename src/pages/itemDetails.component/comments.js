import { useState } from "react";
import { Link } from "react-router-dom";
import manAvatar from "../../images/placeholder-man.png";

function Comments(props) {
  
  const [commentInput, setCommentInput] = useState("");

  function changeCommentInput(event) {
    setCommentInput(event.target.value);
  }

  function createCommentHandler() {
    if(props.user !== null){
      const gen = Math.floor(Math.random()*10000);
      const newComment = {
        id: "CMT-025"+gen,
        userName: props.user,
        image: manAvatar,
        date: new Date(),
        text: commentInput,
      };
      props.onAddCommentToItem(newComment);
    }
    else{
      alert("You need to be Logged in to leave a comment!")
    }

  }

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
              <img src={require(`../../images/${current.image}`).default} alt="" />
            </div>
            <div>
              <div className="result-comments-headers">
                <Link to="/">{current.userName}</Link>
                <time>publicado: {new Date(current.date).toLocaleDateString()}</time>
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
