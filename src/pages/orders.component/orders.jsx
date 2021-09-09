import { Component } from "react";
import { Link } from "react-router-dom";

import './css-styles/styles.css';

import SmartTv from '../../images/smart-tv.png';
import SmartTv2 from '../../images/smart-tv-2.png';

class Orders extends Component {

    constructor(props) {
        super(props);

        const tlt = 'Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Doloremque aut ducimus repudiandae dolore'+
        ' fugiat asperiores repellendus. Consequatur soluta, dolor! Tenetur quam at saepe voluptate necessitatibus'+
        ' tempora commodi.';

        this.state = {  
            Order:[
                {   id: 'ORD-025984', orderDate: '2021-05-07', deliveredDate: '2021-05-08',
                    orderStatus: 'r', shippingCost: 150, total: 5155.91, items: [
                        {   image: SmartTv, title: tlt, amount: 2, price: 1527.33, condition: 'n'},
                        {   image: SmartTv2, title: tlt, amount: 1, price: 2101.25, condition: 'n'}
                    ]
                },
                {   id: 'ORD-025741', orderDate: '2021-05-14', deliveredDate: '2021-05-16',
                    orderStatus: 'e', shippingCost: 150, total: 1350, items: [
                        {   image: SmartTv, title: tlt, amount: 1, price: 1200, condition: 'n'}
                    ]
                }
            ]
        };
    }

    formatOrderStatus(status){
        if(status === 'd'){
            return 'De salida';
        }else if(status === 'e'){
            return 'En camino';
        }else if(status === 'r'){
            return 'Recibido';
        }else if(status === 'c'){
            return 'Cancelado';
        }else if(status === 'er'){
            return 'Error en pago';
        }
    }

    formatOrderCondition(condition){
        if(condition === 'd'){
            return 'Devuelto';
        }else if(condition === 'e'){
            return 'En devolucion';
        }else if(condition === 'n'){
            return 'Ninguno';
        }
    }

    formatedNumber(num){

        if(num >= 1000 && num < 10000){
            let newNum = num+'';
            let formated = '';

            for(let x = 0; x < newNum.length; x++){
                if(x === 1){
                    formated+= ',';
                }
                formated+= newNum.charAt(x);
            }

            return formated;
        }
        else if(num >= 10000){
            let newNum = num+'';
            let formated = '';

            for(let x = 0; x < newNum.length; x++){
                if(x === 2){
                    formated+= ',';
                }
                formated+= newNum.charAt(x);
            }

            return formated;
        }

        return num;
    }

    render() { 

        return (  
            
            <div id="orders">

                <h3 className='title-page'>Mis pedidos</h3>

                {this.state.Order.map((val)=> {

                    return (
                        <div className="orders-container" key={val.id}>

                            <div className="orders-headers">
                                <div>
                                    <h5><strong>Codigo pedido:</strong> {val.id}</h5>
                                    <h5><strong>Fecha envio:</strong> 
                                        {new Date(val.deliveredDate).toLocaleDateString()}
                                    </h5>
                                    <h5><strong>Fecha pedido:</strong> 
                                        {new Date(val.orderDate).toLocaleDateString()}
                                    </h5>
                                    <h5><Link to="/orderDetails">ver detalles del pedido</Link></h5>
                                </div>
                                <div>
                                    <h5><strong>Estado del pedido:</strong> 
                                    {this.formatOrderStatus(val.orderStatus)}
                                    </h5>
                                    <h5><strong>Costo envio:</strong> ${val.shippingCost}</h5>
                                    <h4><strong>Total:</strong> ${this.formatedNumber(val.total)}</h4>
                                </div>

                            </div>

                            {val.items.map((curr, ind)=> {

                                return (
                                    <div className="orders-body" key={ind}>	
                                        <div>
                                            <Link to="/">
                                                <img src={curr.image} alt={curr.title} />
                                            </Link>
                                        </div>
                                        <div>
                                            <h3>{curr.title}</h3>
                                            <p className="amount">Cantidad: {curr.amount}</p>
                                        </div>
                                        <div>
                                            <p className="subtotal">
                                                ${this.formatedNumber(curr.price)}
                                            </p>
                                            <p className="condition">Condición: 
                                            {this.formatOrderCondition(curr.condition)}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="subtotal">
                                                ${this.formatedNumber(curr.price*curr.amount)}
                                            </p>
                                        </div>
                                    </div>
                                );

                            })}

                        </div>
                    );

                })}
  
            </div>
        );
    }
}
 
export default Orders;