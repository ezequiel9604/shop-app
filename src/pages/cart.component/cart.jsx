import { Component } from "react";

import SamplesCart from '../samples.component/samplesCart';
import SideBar from "./sidebar.component/sideBar";

import './css-styles/styles.css';

import SmartTv from '../../images/smart-tv.png';

class Cart extends Component {

    constructor(props){

        super(props);

        const tlt = 'Lorem ipsum dolor sit amet consectetur adipisicing umpedit iste voluptate nulla reprehenderit tempore cum consequatur quis ut quidem.';

        this.state = {
            Items: [
                { id: 1, image: SmartTv, title: '1'+tlt , retailPrice: 1400, OfferPrice: 1200, 
                    specifications: {
                        size: 24, capacity: '4GB', color: 'black'
                    }, views: 10, amount: 1},
                { id: 2, image: SmartTv, title: '2'+tlt, retailPrice: 1150, OfferPrice: 0, 
                    specifications: {
                        size: 24, capacity: '2GB', color: 'red'
                    }, views: 2, amount: 2},
                { id: 3, image: SmartTv, title: '3'+tlt, retailPrice: 800, OfferPrice: 600, 
                    specifications: {
                        size: 24, capacity: '1GB', color: 'blue'
                    }, views: 4, amount: 3},
            ],

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
    }

    removeItemHandler(id){

        let newArr = this.state.Items.filter((current)=>{
            return current.id !== id;
        });

        this.setState({ 
            Items: newArr, 
            TotalAmountItems: this.getTotalAmount(newArr),
            SubtotalItems: this.getSubTotal(newArr) 
        });
    }

    render() { 

        return (  
            <div className="cart-and-sidebar">

                <div id="cart">
                
                    <div className="samples-column-container">

                        {this.state.Items.map((val)=> {

                            return <SamplesCart key={val.id} item={val} 
                                        isInOffered={(val.OfferPrice > 0)? true:false}
                                        onIncreaseItem={this.increaseItemHandler}
                                        onDecreaseItem={this.decreaseItemHandler}
                                        onRemoveItem={this.removeItemHandler} />; 

                        })}  

                    </div>

                </div>

                <SideBar totalAmount={this.state.TotalAmountItems} 
                    subTotal={this.state.SubtotalItems} />

            </div>
        );
    }
}
 
export default Cart;