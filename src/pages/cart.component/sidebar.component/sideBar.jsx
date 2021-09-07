
//import SampleSingle from "../../samples.component/sampleSingle";

import React from 'react';

function SideBar(props) {

    function formatedNumber(num){

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

    return (

        <aside className="sidebar-container">

            <article>

                <h2>Resumen del pedido:</h2>
                
                <table>
                    <tbody>
                    <tr>
                        <td>Cantidad:</td>
                        <td>({props.totalAmount}) articulos</td>
                    </tr>
                    <tr>
                        <td>Envio:</td>
                        <td>$150.00</td>
                    </tr>
                    <tr>
                        <td>Sub-total: </td>
                        <td>${formatedNumber(props.subTotal)}.00</td>
                    </tr>
                    <tr className="total">
                        <td>Total:</td>
                        <td>${formatedNumber(props.subTotal)}.00</td>
                    </tr>
                    </tbody>
                </table>

                <div className="button-actions">
                    <button className='btn' 
                        style={{width: '100%', }}>Comprar ({props.totalAmount})</button>
                </div>

                <p className="advice">
                    Lorem, ipsum dolor sit amet, consectetur adipisicing elit. 
                    Hic qui odit explicabo atque natus quibusdam, debitis quos odio animi ullam assumenda.
                </p>

            </article>	

            {/* <article>
                
                <h3>Relacionados:</h3>

                {state.Items.map((val) => {
                    return <SampleSingle article={val} 
                        isInOffered={(val.OfferPrice > 0)? true: false} key={val.id} />;
                })}

            </article>	 */}
            
        </aside>
    );
}

export default SideBar;