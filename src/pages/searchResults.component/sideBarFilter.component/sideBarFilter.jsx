import React, { Component } from 'react';

import './css-styles/styles.css';

class SideBarFilter extends Component {

    constructor(props) {
        super(props);

        this.offerHandler = this.offerHandler.bind(this);
        this.priceHandler = this.priceHandler.bind(this);
        this.statusHandler = this.statusHandler.bind(this);
        this.qualityHandler = this.qualityHandler.bind(this);
    }

    offerHandler(){  
        this.props.onOffer(this.inpOffer.checked);
    }

    priceHandler(){
        let min = parseInt(this.inpMinPrice.value);
        let max = parseInt(this.inpMaxPrice.value);

        this.props.onPrice([(isNaN(min)? 0 : min), (isNaN(max)? 10000 : max)]); 
    }

    statusHandler(){
        let status = 0;

        if(this.inpNewStatus.checked){
            status+= 1;
        }
        if(this.inpUsedStatus.checked){
            status+= 3;
        }
        if(this.inpRepairStatus.checked){
            status+= 5;
        }
        this.props.onStatus(status);
    }

    qualityHandler(quality){
        this.props.onQuality(quality);
    }

    render() { 
        return (  
            <aside id="sidebar-filter">
                <article>
                    <h3>Marca:</h3>
                    <ul>
                        <label htmlFor="brand1">
                            <input type="checkbox" id="brand1" /> Marca 1
                        </label>
                        <label htmlFor="brand2">
                            <input type="checkbox" id="brand2" /> Marca 2
                        </label>
                        <label htmlFor="brand3">
                            <input type="checkbox" id="brand3" /> Marca 3
                        </label>
                        <label htmlFor="brand4">
                            <input type="checkbox" id="brand4" /> Marca 4
                        </label>
                    </ul>
                </article>	

                <article>
                    <h3>Precio:</h3>
                    <ul>
                        <input ref={elem => (this.inpMinPrice = elem)} type="number" min="0" max="10000" placeholder="$Desde" />
                        <input ref={elem => (this.inpMaxPrice = elem)} type="number" min="0" max="10000" placeholder="$Hasta" />
                        <button onClick={this.priceHandler}>Filtrar</button>
                    </ul>		
                </article>	

                <article>
                    <h3>Estado: </h3>
                    <ul>
                        <label htmlFor="new"> <input ref={elem => (this.inpNewStatus = elem)} 
                            onClick={this.statusHandler} type="checkbox" id="new" /> Nuevo</label>
                        <label htmlFor="used"><input ref={elem => (this.inpUsedStatus = elem)} 
                            onClick={this.statusHandler} type="checkbox" id="used" /> Usado</label>
                        <label htmlFor="repair"><input ref={elem => (this.inpRepairStatus = elem)} 
                            onClick={this.statusHandler} type="checkbox" id="repair" /> Reparado</label>
                    </ul>
                </article>	

                <article>     
                    <h3>Ofertas: </h3>
                    <ul>
                        <label htmlFor="offers">
                            <input onClick={this.offerHandler} ref={elem => (this.inpOffer = elem)} 
                            type="checkbox" id="offers" /> En ofertas
                        </label>
                    </ul>
                </article>

                <article>
                    
                    <h3>Tamaño: </h3>
                    <ul>
                        <label htmlFor="sise_xl">
                            <input type="checkbox" id="sise_xl" name="" /> XL
                        </label>
                        <label htmlFor="size_l">
                            <input type="checkbox" id="size_l" name="" /> L
                        </label>
                        <label htmlFor="size_m">
                            <input type="checkbox" id="size_m" name="" /> M
                        </label>
                        <label htmlFor="size_s">
                            <input type="checkbox" id="size_s" name="" /> S
                        </label>
                    </ul>

                </article>		

                <article>
                    
                    <h3>Calificadas: </h3>

                    <ul className="custom-quality">
                        <span onClick={() => this.qualityHandler(1)} className="material-icons-outlined">star_outline</span>
                        <span onClick={() => this.qualityHandler(2)} className="material-icons-outlined">star_outline</span>
                        <span onClick={() => this.qualityHandler(3)} className="material-icons-outlined">star_outline</span>
                        <span onClick={() => this.qualityHandler(4)} className="material-icons-outlined">star_outline</span>
                        <span onClick={() => this.qualityHandler(5)} className="material-icons-outlined">star_outline</span>
                    </ul>

                </article>	

                <article>
                    
                    <h3>Capacidad: </h3>

                    <ul>

                        <label htmlFor="cap_2gb">
                            <input type="checkbox" id="cap_2gb" name="" /> 2GB
                        </label>

                        <label htmlFor="cap_4gb">
                            <input type="checkbox" id="cap_4gb" name="" /> 4GB
                        </label>

                        <label htmlFor="cap_6gb">
                            <input type="checkbox" id="cap_6gb" name="" /> 6GB
                        </label>

                        <label htmlFor="cap_8gb">
                            <input type="checkbox" id="cap_8gb" name="" /> 8GB
                        </label>
                    </ul>

                </article>	

                <article>
                    
                    <h3>Pulgadas: </h3>
                    <ul>
                        <label htmlFor="pulg_17">
                            <input type="checkbox" id="pulg_17" name="" /> 17"
                        </label>

                        <label htmlFor="pulg_22">
                            <input type="checkbox" id="pulg_22" name="" /> 22"
                        </label>

                        <label htmlFor="pulg_24">
                            <input type="checkbox" id="pulg_24" name="" /> 24"
                        </label>

                        <label htmlFor="pulg_32">
                            <input type="checkbox" id="pulg_32" name="" /> 32"
                        </label>

                        <label htmlFor="pulg_44">
                            <input type="checkbox" id="pulg_44" name="" /> 44"
                        </label>
                    </ul>

                </article>	

            </aside>
        );
    }
}
 
export default SideBarFilter;