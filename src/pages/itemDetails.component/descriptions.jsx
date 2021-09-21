import React, { Component } from 'react';

import './css-styles/styles.css';

import Comments from './comments';
import TechDetails from './techDetails';

class Description extends Component {

    constructor(props) {
        super(props);

        const txt = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nemo, '+
        'ea reiciendis vero exercitationem reprehenderit, voluptates doloremque! Voluptatem molestias '+
        'atque ipsum fuga assumenda suscipit, quidem nemo, '+
        'est minus, eligendi totam. Lorem ipsum dolor sit amet consectetur adipisicing elit.';

        this.state = { 

            Comments: props.comments,

            Description: txt,

            ContainerSwicther: 0
        }

        this.changeContainerSwitcherHandler = this.changeContainerSwitcherHandler.bind(this);
        this.renderContainers = this.renderContainers.bind(this);
        this.onAddCommentToItem = this.onAddCommentToItem.bind(this);
    }

    changeContainerSwitcherHandler(id){
        this.setState({ ContainerSwicther: id });
    }

    onAddCommentToItem(comm){
        this.props.onAddComment(comm);
    }

    renderContainers(){

        if(this.state.ContainerSwicther === 0){
            return (
                <div id="description" className="tab">   
                    <p>{this.state.Description + this.state.Description}</p>
                    <p>{this.state.Description}</p>
                    <p>{this.state.Description}</p>
                    <p>{this.state.Description}</p>
                </div>
            );
        }
        else if(this.state.ContainerSwicther === 1){
            return (<TechDetails />);
        }
        else{
            return (<Comments comments={this.state.Comments} 
                onAddCommentToItem={this.onAddCommentToItem} />);
        }

    }

    render() { 

        const {ContainerSwicther} = this.state;

        return (  
            <div className="item-details-bottom">

                <div className="tablinks-container">
                    <button onClick={() => this.changeContainerSwitcherHandler(0)} 
                        className={(ContainerSwicther === 0)? "tablinks active":"tablinks"} >
                            Descripción</button>

                    <button onClick={() => this.changeContainerSwitcherHandler(1)} 
                        className={(ContainerSwicther === 1)? "tablinks active":"tablinks"} >
                            Detalles tecnicos</button>

                    <button onClick={() => this.changeContainerSwitcherHandler(2)} 
                        className={(ContainerSwicther === 2)? "tablinks active":"tablinks"} >
                            Comentarios ({this.state.Comments.length})</button>
                </div>

                {this.renderContainers()}

            </div>	
        );
    }
}
 
export default Description;