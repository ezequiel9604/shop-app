import React, { Component } from 'react';

import './css-styles/styles.css';


class Footer extends Component {
    render() { 
        return (  
            <footer>
                
                <div className="footer-top">
                    <ul>
                        <h5>Acerca de Nosotros</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque est quo dolore animi recusandae harum magni, hic eos debitis quas sint ex quibusdam velit officiis aspernatur nisi.
                        </p>
                        <strong><span className="material-icons-outlined">call</span> <label>Tel:809-111-0000</label></strong>
                        <strong><span className="material-icons-outlined">email</span> <label>zigzol@gmail.com</label></strong>	
                    </ul>	
                    <ul>
                        <h5>Guía Para</h5>
                        <li><a href="/">Crear cuenta</a></li>
                        <li><a href="/">Hacer una compra</a></li>
                        <li><a href="/">Usar codigo promoción</a></li>
                        <li><a href="/">Devolución de articulo</a></li>
                        <li><a href="/">Cancelar pedido</a></li>
                    </ul>
                    <ul>
                        <h5>Términos y Política</h5>
                        <li><a href="/">Términos de Uso</a></li>
                        <li><a href="/">Políticas de Envios</a></li>
                        <li><a href="/">Políticas de Garantia</a></li>
                        <li><a href="/">Políticas de Privacidad</a></li>
                    </ul>
                    <ul>
                        <h5>Redes Sociales</h5>
                        <li><a href="/">Twitter</a></li>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Whatsapp</a></li>
                        <li><a href="/">Instagram</a></li>
                    </ul>	

                </div>	

                <div className="footer-bottom">
                    <div>
                        <h6>Zenuben</h6>
                    </div>
                    <address>Calle 8, Francisco Henriquez y Carvajal, Brisas del Este, Santo Domingo Este.</address>
                    <address>© 2021 zilzol - Todos los derechos reservados.</address>
                </div>


            </footer>	

        );
    }
}
 
export default Footer;