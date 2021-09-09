import { Component } from "react";
import { Link } from "react-router-dom";

import SamplesCart from '../samples.component/samplesCart';
import SideBar from "./sidebar.component/sideBar";

import './css-styles/styles.css';

class Cart extends Component {

    constructor(props){

        super(props);

        this.state = {
            Items: props.items,

            TotalAmountItems: 6,
            SubtotalItems: 5300

        };

        this.getTotalAmount = this.getTotalAmount.bind(this);
        this.getSubTotal = this.getSubTotal.bind(this);
        this.increaseItemHandler = this.increaseItemHandler.bind(this);
        this.decreaseItemHandler = this.decreaseItemHandler.bind(this);
        this.removeItemHandler = this.removeItemHandler.bind(this);

    }

    getTotalAmount(arr){
        let sum = 0;
        for(let i of arr){
            sum+= i.amount;
        }
        return sum;
    }

    getSubTotal(arr){
        let sum = 0;
        for(let i of arr){
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
        let arr = [...this.state.Items];
        for(let i of arr){
            if(i.id === id){
                i.amount+= 1 
            }
        }
        this.setState({ 
            Items: arr, 
            TotalAmountItems: this.getTotalAmount(arr),
            SubtotalItems: this.getSubTotal(arr) 
        });

        this.props.updateItems(arr);
    }

    decreaseItemHandler(id){
        let arr = [...this.state.Items];
        for(let i of arr){
            if(i.id === id && i.amount > 1){
                i.amount-= 1;
            }
        }
        this.setState({ 
            Items: arr, 
            TotalAmountItems: this.getTotalAmount(arr),
            SubtotalItems: this.getSubTotal(arr) 
        });

        this.props.updateItems(arr);
    }

    removeItemHandler(id){

        this.props.onOpenModal();

        /*let newArr = this.state.Items.filter((current)=>{
            return current.id !== id;
        });

        this.setState({ 
            Items: newArr, 
            TotalAmountItems: this.getTotalAmount(newArr),
            SubtotalItems: this.getSubTotal(newArr) 
        });

        this.props.updateItems(newArr);*/
    }

    render() { 

        const {Items} = this.state;

        return (  
            <div className="cart-and-sidebar">

                <div id="cart">

                    <h3 className='title-page'>Carrito de compra</h3>

                    {(Items.length === 0)? 
                    
                        <div className='alert-empty'>
                            <h4>Tu carrito de compra esta vacio!</h4>
                            <Link to='/'>Has click aqui para ver todos los articulos y ofertas.</Link>
                        </div>:
                    
                        <div className="samples-column-container">

                        {Items.map((val)=> {

                            return <SamplesCart key={val.id} item={val} 
                                        isInOffered={(val.OfferPrice > 0)? true:false}
                                        onIncreaseItem={this.increaseItemHandler}
                                        onDecreaseItem={this.decreaseItemHandler}
                                        onRemoveItem={this.removeItemHandler} />; 

                        })}  

                        </div>
                        
                    }

                </div>

                <SideBar totalAmount={this.state.TotalAmountItems} 
                    subTotal={this.state.SubtotalItems} />

            </div>
        );
    }
}
 
export default Cart;