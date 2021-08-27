
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Details extends Component {
    
    constructor(props){

        super(props);

        this.state = {
            items: props.details,

            itemColor: null,
            itemCounter: 0,
            itemStock: 0,
            itemSelected: 0
        };

        this.itemCapacity = props.details.subItem[0].capacity;
        this.itemSize = props.details.subItem[0].size;

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
                                type="radio" id={selection+val} name={selection} 
                                    defaultChecked={(ind === 0)? true:false} />
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

    changeItemCounterHandler(simbol){

        const { items } = this.state;
        const { itemSelected } = this.state;

        if(simbol === '-'){
            this.setState((state, props)=> ({    
                itemCounter: (state.itemCounter > 0)? state.itemCounter - 1 : state.itemCounter
            }));
        }
        else if(simbol === '+'){
            this.setState((state, props)=> ({
                itemCounter: (state.itemCounter < items.subItem[itemSelected].stock)?
                state.itemCounter + 1 : state.itemCounter
            }));
        }
    }

    changeSelectionHandler(value, selection){
        
        if(selection === 'Capacity'){
            this.itemCapacity = value;
        }else if(selection === 'Size'){
            this.itemSize = value;
        }

        let cont = 0
        console.log(this.itemCapacity, this.itemSize);
        for(let a of this.state.items.subItem){
            if(a.capacity === this.itemCapacity 
                && a.size === this.itemSize){
                
                this.setState({ itemSelected : cont });
                this.setState({ itemCounter : 0 });
            }

            cont+= 1;
        }

    }
    

    render(){

        const { items } = this.state;
        const { itemSelected } = this.state;

        return (
            <div className="details">
                        
                <h3>{items.title}</h3>
    
                <div className="item-details-price">
                    <span>${items.subItem[itemSelected].offerPrice}</span> 
                    <span>${items.subItem[itemSelected].retailPrice}</span>
                </div>
    
                <div className="item-details-quality">
                    <span className="material-icons-outlined">star</span>
                    <span className="material-icons-outlined">star</span>
                    <span className="material-icons-outlined">star</span>
                    <span className="material-icons-outlined">star</span>
                    <span className="material-icons-outlined">star</span>
                    <strong>{items.quality}</strong>
                </div>
    
                <div className="item-details-status">
                    <label>Estado: <Link to="/">{items.status}</Link></label>
                    <label>Departamento: <Link to="/">{items.department}</Link></label>
                </div>
    
                <div className="item-details-selection">
                    
                    <div className="selection-color">
                        <strong>Color:</strong>

                        {
                            items.subItem[itemSelected].color.map((val, ind) => {
                                return (
                                    <label htmlFor={'cl'+val} key={ind}>
                                        <input type="radio" id={'cl'+val} name="color" 
                                            defaultChecked={(ind === 0)? true:false} />
                                        <mark style={{backgroundColor: val}}></mark>
                                        <span className="material-icons-outlined">done</span>
                                    </label>
                                )
                            })
                        }
    
                    </div>

                    {this.selectionRender(items, 'Size')}
                    
                    {this.selectionRender(items, 'Capacity')}

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