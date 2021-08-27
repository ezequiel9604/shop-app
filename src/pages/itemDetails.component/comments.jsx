
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import manAvatar from '../../images/placeholder-man.png';

class Comments extends Component {

    constructor(props) {

        super(props);

        this.state = { 
            Comments: props.data
        }

        this.addCommentHandler = this.addCommentHandler.bind(this);
    }

    addCommentHandler(){

        const newComment = {
            id: 'CMT-025314',
            userName: 'Ezequiel Diaz Peña',
            image: manAvatar,
            date: new Date(),
            text: this.inpText.value
        }
        
        this.props.onAddCommentToItem(newComment); 
    }

    render() { 
        return (  
            <div id="comments" className="tab">
            
                <div className="add-comments">

                    <div>
                        <img src={manAvatar} alt='' />
                    </div>
                    <div>
                        <input ref={(e) => (this.inpText = e)} 
                            type="text" placeholder="agrega un comentario!"/>
                    </div>
                    <div>
                        <button onClick={this.addCommentHandler} 
                            type="button">Comentar</button>
                    </div>

                </div>

                {this.state.Comments.map((val) => {

                    return (
                        <div className="results-comments" key={val.id}>
                            <div>
                                <img src={val.image} alt='' />
                            </div>
                            <div>
                                <div className="headers">
                                    <Link to="/">{val.userName}</Link>
                                    <time>publicado: {val.date.toDateString()}</time>
                                </div>
                                <div className="sections">{val.text}</div>
                            </div>
                        </div>
                    );

                })}			

            </div>
        );
    }
}
 
export default Comments;
