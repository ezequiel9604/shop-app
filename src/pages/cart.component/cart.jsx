import { Component } from "react";
import { Link } from "react-router-dom";

import SamplesCart from '../samples.component/samplesCart';
import SideBar from "./sidebar.component/sideBar";

import './css-styles/styles.css';

class Cart extends Component {

    constructor(props){

        super(props);

        this.increaseItemHandler = this.increaseItemHandler.bind(this);
        this.decreaseItemHandler = this.decreaseItemHandler.bind(this);
        this.removeItemHandler = this.removeItemHandler.bind(this);
    }

    getTotalAmount(items){
        let sum = 0;
        for(let i of items){
            sum+= i.amount;
        }
        return sum;
    }

    getSubTotal(items){
        let sum = 0;
        for(let i of items){
            if(i.OfferPrice>0){
                sum+= i.OfferPrice * i.amount;
            }
            else{
                sum+= i.retailPrice * i.amount;
            }
        }
        return sum;
    }

    increaseItemHandler(id){
        this.props.onIncrementCartItem(id);
    }

    decreaseItemHandler(id){
        this.props.onDecrementCartItem(id);
    }

    removeItemHandler(id){
        this.props.onUpdateItems(id);
    }

    render() { 

        const {items} = this.props;

        return (  
            <div className="cart-and-sidebar">

                <div id="cart">

                    <h3 className='title-page'>Carrito de compra</h3>

                    {(items.length === 0)? 
                        <div className='alert-empty'>
                            <h4>Tu carrito de compra esta vacio!</h4>
                            <Link to='/'>Has click aqui para ver todos los articulos y ofertas.</Link>
                        </div>
                        :
                        <div className="samples-column-container">
                        {items.map((val)=> {
                            return <SamplesCart key={val.id} item={val} 
                                        isInOffered={(val.OfferPrice > 0)? true:false}
                                        onIncreaseItem={this.increaseItemHandler}
                                        onDecreaseItem={this.decreaseItemHandler}
                                        onRemoveItem={this.removeItemHandler} />; 
                        })}  

                        </div>
                    }
                </div>

                <SideBar totalAmount={this.getTotalAmount(items)} 
                    subTotal={this.getSubTotal(items)} />

            </div>
        );
    }
}
 
export default Cart;