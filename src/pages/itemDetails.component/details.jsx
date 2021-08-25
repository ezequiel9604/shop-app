
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Details extends Component {
    
    constructor(props){

        super(props);

        this.state = {
            itemCapacity: null,
            itemSize: null,
            itemCounter: 0
        };

        this.selectionRender = this.selectionRender.bind(this);
        this.changeSelectionHandler = this.changeSelectionHandler.bind(this);
        this.changeItemCounterHandler = this.changeItemCounterHandler.bind(this);

    }

    selectionRender(details, selection){

        let arr = [];

        if(selection === 'Capacidad'){
            // creates a new array with a list of capacity values
            details.subItem.map((val) => {
                return arr.push(val.capacity);
            });
        }else if(selection === 'Tamaño'){
            // creates a new array with a list of capacity values
            details.subItem.map((val) => {
                return arr.push(val.size);
            });
        }

        // remove dupliques and save it into uniques variable
        const uniques = [...new Set(arr)];

        if(uniques[0] !== null){
            return (
                <div className="selection-capacity">
                    <strong>{selection}:</strong> 

                    {uniques.map((val, ind)=> {

                    return (
                        <label htmlFor={selection+val} key={ind}>
                            <input onClick={() => this.changeSelectionHandler(val, selection)} 
                                type="radio" id={selection+val} name={selection} />
                            <small>{val}</small>
                            <span className="material-icons-outlined">done</span>
                        </label>
                    )

                    })}
                </div>
            );
        }
        
        return null;
    }


    changeSelectionHandler(value, selection){
        
        if(selection === 'Capacidad'){
            this.setState({ itemCapacity: value });
        }else if(selection === 'Tamaño'){
            this.setState({ itemSize: value });
        }

    }
    
    changeItemCounterHandler(simbol){
        if(simbol === '-'){
            this.setState((state, props)=> ({    
                itemCounter: (state.itemCounter > 0)? state.itemCounter - 1 : state.itemCounter
            }));
        }
        else if(simbol === '+'){
            this.setState((state, props)=> ({
                itemCounter: (state.itemCounter < 6)? state.itemCounter + 1 : state.itemCounter
            }));
        }

        
    }

    render(){

        const { details } = this.props;

        return (
            <div className="details">
                        
                <h3>{details.title}</h3>
    
                <div className="item-details-price">
                    <span>${details.subItem[0].offerPrice}</span> 
                    <span>${details.subItem[0].retailPrice}</span>
                </div>
    
                <div className="item-details-quality">
                    <span className="material-icons-outlined">star</span>
                    <span className="material-icons-outlined">star</span>
                    <span className="material-icons-outlined">star</span>
                    <span className="material-icons-outlined">star</span>
                    <span className="material-icons-outlined">star</span>
                    <strong>{details.quality}</strong>
                </div>
    
                <div className="item-details-status">
                    <label>Estado: <Link to="/">{details.status}</Link></label>
                    <label>Departamento: <Link to="/">{details.department}</Link></label>
                </div>
    
                <div className="item-details-selection">
                    
                    <div className="selection-color">
                        <strong>Color:</strong>

                        {
                            details.subItem[0].color.map((val, ind) => {
                                return (
                                    <label htmlFor={'cl'+val} key={ind}>
                                        <input type="radio" id={'cl'+val} name="color" />
                                        <mark style={{backgroundColor: val}}></mark>
                                        <span className="material-icons-outlined">done</span>
                                    </label>
                                )
                            })
                        }
    
                    </div>

                    {this.selectionRender(details, 'Tamaño')}
                    
                    {this.selectionRender(details, 'Capacidad')}

                </div>
    
                <div className="item-details-amount">
                    <div>
                        <button onClick={()=> this.changeItemCounterHandler('-')} className='btn'>-</button>
                        <span>{this.state.itemCounter}</span>
                        <button onClick={()=> this.changeItemCounterHandler('+')} className='btn'>+</button>
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