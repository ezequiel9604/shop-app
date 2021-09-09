import { Component } from "react";
import { Link } from "react-router-dom";

import './css-styles/styles.css';

import SmartTv from '../../images/smart-tv.png';

class OrderDetails extends Component {

    constructor(props) {
        super(props);

        const tlt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt reiciendis harum molestiae magni veniam iure dolore esse.';

        this.state = {  
            Order:{   
                id: 'ORD-025984', orderDate: '2021-05-07', deliveredDate: '2021-05-08',
                orderStatus: 'r', shippingCost: 150, shippingMethod: 'regular', total: 5155.91, 
                items: [
                    {   image: SmartTv, title: tlt, amount: 2, price: 1527.33, condition: 'n'},
                    {   image: SmartTv, title: tlt, amount: 1, price: 2101.25, condition: 'n'}
                ],
                client:{
                    name: 'John Doe', email: 'johndoe0102@gmail.com', phone: '809-111-0000',
                    address: 'Casa 8, Francisco Henriquez y Carvajal, Brisas del Este, Santo Domingo Este',
                    indications: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quaerat '+
                    'suscipit esse voluptate! Odit quia id possimus.'
                }
            },

            isModalWindowOpen: false

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

    formatAmountItems(items){
        let sum = 0;
        for(let i of items){
            sum+= i.amount;
        }
        return sum;
    }

    formatSubtotal(items){
        let sum = 0;
        for(let i of items){
            sum+= i.price*i.amount;
        }
        return sum;
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

    formatShippingMethod(method){
        if(method === 'regular'){
            return 'Regular';
        }else if(method === 'fast'){
            return 'Rapido';
        }else if(method === 'free'){
            return 'Gratis';
        }
    }

    render() { 

        const {Order} = this.state;

        return (  
            <div id="order-details">
		
                <article>

                    <h3>Articulos del Pedido:</h3>

                    <div className="ordered-articles-container">

                        {Order.items.map((val, ind)=> {

                            return (
                                <div className="ordered-articles" key={ind}>
    
                                    <div>
                                        <img src={val.image} alt='' />
                                    </div>
                                    <div>
                                        <Link to='/'>{val.title}</Link>
                                    </div>
                                    <div>
                                        <p>Pulgadas: 24"</p>
                                    </div>
                                    <div>
                                        <p>Cantidad: {val.amount}</p>
                                    </div>
                                    <div>
                                        <p>RD${this.formatedNumber(val.price)}</p>
                                    </div>
                                </div>
                            );

                        })}

                        <div className="track-road">
                            
                            <div className="road">
                                <div style={{ backgroundColor: '#dddddd' }}></div>
                                <div style={{ backgroundColor: '#ffcc00' }}></div>
                                <div style={{ backgroundColor: '#0099ff' }}></div>
                                <div style={{ backgroundColor: '#dddddd' }}></div>
                            </div>
                            <div className="labels">
                                <div style={{ textAlign: 'left' }}>Cancelado</div>
                                <div style={{ textAlign: 'center' }}>De salida</div>
                                <div style={{ textAlign: 'center' }}>En camino</div>
                                <div style={{ textAlign: 'right' }}>Recibido</div>
                            </div>

                        </div>

                    </div>

                </article>	

                <article>
                    <h3>Detalles del pedido:</h3>

                    <div className="details-info">
                        <div>			
                            <p><label>Cantidad: </label>
                            {this.formatAmountItems(Order.items)} articulos</p>
                        </div>
                        <div>					
                            <p><label>Subtotal: </label>
                            {this.formatedNumber(this.formatSubtotal(Order.items))}</p>
                        </div>
                        <div>	
                            <p><label>Envio: </label>
                            ${Order.shippingCost}</p>
                        </div>
                        <div>
                            <p><label>Total: </label>
                            ${this.formatedNumber(Order.total+Order.shippingCost)}</p>
                        </div>
                    </div>

                </article>	

                <article>
                    <h3>Informacion del pedido:</h3>

                    <div className="details-info">
                        <div>		
                            <p><label>Codigo: </label>
                            {Order.id}</p>
                        </div>
                        <div>		
                            <p><label>Metodo de pago: </label>
                            TC - visa</p>
                        </div>
                        <div>			
                            <p><label>Estado: </label>
                            {this.formatOrderStatus(Order.orderStatus)}</p>
                        </div>
                        <div>	
                            <p><label>Fecha de envio: </label>
                            {new Date(Order.deliveredDate).toLocaleString()}</p>
                        </div>
                        <div>
                            <p><label>Fecha de pedido: </label>
                            {new Date(Order.orderDate).toLocaleString()}</p>
                        </div>
                        <div>
                            <p><label>Metodo de envio: </label>
                            {this.formatShippingMethod(Order.shippingMethod)}</p>
                        </div>
                    </div>

                </article>	

                <article>
                    <h3>Informacion del cliente:</h3>

                    <div className="details-info">
                        <div>					
                            <p><label>Nombre: </label>{Order.client.name}</p>
                        </div>
                        <div>
                            <p><label>Email: </label>{Order.client.email}</p>
                        </div>
                        <div>
                            <p><label>Telefonos: </label>{Order.client.phone}</p>
                        </div>
                        <div>    
                            <p><label>Dirección: </label>{Order.client.address}</p>
                        </div>
                        <div style={{width: '100%'}}>
                            <p><label>Indicaciones: </label>{Order.client.indications}</p>
                        </div>

                    </div>

                </article>	

                <article>
                    <h3>Actualizar tu pedido:</h3>

                    <div className="details-info">
                        <div>
                            <button onClick={()=> this.props.onOpenModal()}>Cambiar dirección</button>
                            <div className="icon-advice">
                                <span className="material-icons-outlined">help</span>
                                <div className="tooltip">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Dignissimos eius velit deleniti, dolores ullam, soluta et quasi deserunt dolor.
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <button>Cancelar pedido</button> 
                            <div className="icon-advice">
                                <span className="material-icons-outlined">help</span>
                                <div className="tooltip">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Dignissimos eius velit deleniti, dolores ullam, soluta et quasi deserunt dolor.
                                </div>
                            </div>
                        </div>

                        <div>
                            <button>Devolver articulos</button>
                            <div className="icon-advice">
                                <span className="material-icons-outlined">help</span>
                                <div className="tooltip">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Dignissimos eius velit deleniti, dolores ullam, soluta et quasi deserunt dolor.
                                </div>
                            </div>
                        </div>
                    </div>
                </article>	

                {/* <article>
                    <h3>Articulos en devolucion:</h3>

                    <div className="samples-container">
                        
                        <div className="samples-order-details">
                            <Link to='/' className="samples-order-details-headers">
                                <img src={SmartTv} alt='' />
                            </Link>
                            <div className="samples-order-details-sections">
                                <h4>1 Lorem ipsum dolor sit amet consectetur adipisicing Impedit iste voluptate nulla reprehenderit tempore cum consequatur quis ut quidem
                                </h4>
                                <div className="samples-order-details-status">
                                    <label>Condición:</label> En revision
                                </div>
                            </div>	
                        </div>

                        <div className="samples-order-details">
                            <Link to='/' className="samples-order-details-headers">
                                <img src={SmartTv} alt='' />
                            </Link>
                            <div className="samples-order-details-sections">
                                <h4>1 Lorem ipsum dolor sit amet consectetur adipisicing Impedit iste voluptate nulla reprehenderit tempore cum consequatur quis ut quidem
                                </h4>
                                <div className="samples-order-details-status">
                                    <label>Condición:</label> En revision
                                </div>
                            </div>	
                        </div>

                    </div>

                </article>	 */}

                <article>
                    
                    <Link to='/' className="print-voucher">
                        Imprimir recibo <span className="material-icons-sharp">print</span>
                    </Link>

                </article>	

            </div>
        );
    }
}
 
export default OrderDetails;