
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Details extends Component {
    
    constructor(props){

        super(props);

        this.state = {

            itemStock: props.details.subItem[0].stock,
            itemCounter: 0,
            itemSelected: 0
        };

        this.itemCapacity = props.details.subItem[0].capacity;
        this.itemSize = props.details.subItem[0].size;
        this.itemColor = props.details.subItem[0].color;

        this.selectionRender = this.selectionRender.bind(this);
        this.changeSelectionHandler = this.changeSelectionHandler.bind(this);
        this.changeItemCounterHandler = this.changeItemCounterHandler.bind(this);

    }

    selectionRender(details, selection){

        let arr = [];

        if(selection === 'Capacity'){
            // creates a new array with a list of capacity values
            details.subItem.map((val) => {
                return arr.push(val.capacity);
            });
        }else if(selection === 'Size'){
            // creates a new array with a list of capacity values
            details.subItem.map((val) => {
                return arr.push(val.size);
            });
        }
        else if(selection === 'Color'){
            // creates a new array with a list of capacity values
            details.subItem.map((val) => {
                return arr.push(val.color);
            });
        }

        // remove dupliques and save it into uniques variable
        const uniques = [...new Set(arr)];


        if(uniques[0] !== null){

            return (
                <div>
                    <strong>{selection}:</strong> 

                    {uniques.map((val, ind)=> {

                    return (
                        <label htmlFor={selection+val} title={val} key={ind} >
                            <input onClick={() => this.changeSelectionHandler(val, selection)} 
                                type="radio" id={selection+val} name={selection} 
                                    defaultChecked={(ind === 0)? true:false} />
                            {(selection !== 'Color')? 
                            <small>{val}</small>:
                            <mark style={{backgroundColor: val}}></mark>}
                            <span className="material-icons-outlined">done</span>
                        </label>
                    )

                    })}
                </div>
            );
        }
        
        return null;
    }

    changeItemCounterHandler(simbol){

        if(simbol === '-'){
            this.setState((state, props)=> ({    
                itemCounter: (state.itemCounter > 0)? state.itemCounter - 1 : state.itemCounter
            }));
        }
        else if(simbol === '+'){
            this.setState((state, props)=> ({
                itemCounter: (state.itemCounter < state.itemStock)?
                state.itemCounter + 1 : state.itemCounter
            }));
        }
    }

    changeSelectionHandler(value, selection){
        
        if(selection === 'Capacity'){
            this.itemCapacity = value;
        }else if(selection === 'Size'){
            this.itemSize = value;
        }else if(selection === 'Color'){
            this.itemColor = value;
        }

        let cont = 0
        for(let a of this.props.details.subItem){
            if(a.capacity === this.itemCapacity 
                && a.size === this.itemSize
                && a.color === this.itemColor){
                
                this.setState({ 
                    itemSelected : cont, 
                    itemCounter : 0,
                    itemStock: a.stock 
                });

                return;
            }

            cont+= 1;
        }

        this.setState({
            itemCounter : 0,
            itemStock: 0
        });

    }
    
    qualityRender(quality) {
        if (quality <= 1) {
          return (
            <div className="item-details-quality">
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
            <div className="item-details-quality">
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
            <div className="item-details-quality">
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
            <div className="item-details-quality">
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
          <div className="item-details-quality">
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <strong>{parseFloat(quality)}</strong>
          </div>
        );
      }
    

    render(){

        const { details } = this.props;
        const { itemSelected } = this.state;

        return (
            <div className="details">
                        
                <h3>{details.title}</h3>
    
                <div className="item-details-price">
                    <span>${details.subItem[itemSelected].offerPrice}</span> 
                    <span>${details.subItem[itemSelected].retailPrice}</span>
                </div>
    
                {this.qualityRender(details.quality)}
    
                <div className="item-details-status">
                    <label>Estado: <Link to="/">{details.status}</Link></label>
                    <label>Departamento: <Link to="/">{details.department}</Link></label>
                </div>
    
                <div className="item-details-selection">
                    
                    {this.selectionRender(details, 'Color')}

                    {this.selectionRender(details, 'Size')}
                    
                    {this.selectionRender(details, 'Capacity')}

                </div>
    
                <div className="item-details-amount">
                    <div>
                        <button onClick={()=> this.changeItemCounterHandler('-')} 
                            className='btn'>-</button>
                        <span>{this.state.itemCounter}</span>
                        <button onClick={()=> this.changeItemCounterHandler('+')} 
                            className='btn'>+</button>
                    </div>
                    <div>
                        {<strong>Quedan {this.state.itemStock} disponibles.</strong>}
                    </div>
                </div>
    
                <div className="button-actions">
                    <button className='btn'>Comprar ahora</button>
                    <button className='btn'>Agregar al carrito</button>
                    <button className='btn'>
                        <span className="material-icons-outlined">favorite_border</span>
                    </button>
                </div>
    
            </div>	
        );
    }
}
 


export default Details;