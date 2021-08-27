
import { Link } from 'react-router-dom';

import womanAvatar from '../../images/placeholder-woman.png';

function HeaderTop(props){


    return (
        <div className="top-part">
                        
            <div>
                <p>Ayuda, Llama al Tel.: 809-111-2000</p>
                <button type="button" className="btn" id='btn-header-chat'>Chat online</button>
            </div>

            <div>
                <button type="button" className="btn" id="btn-header-login">
                    {  props.user === null? 
                            <div>
                                <img className='icon-img' src={womanAvatar} alt='' /> 
                                <p>Entrar</p>
                            </div> : 
                            <div>
                                <img className='icon-img' src={props.user.image} alt='' /> 
                                <p>{props.user.firstName}</p>
                            </div>
                    }
                    <ul className="option-account-list">
                        {props.user === null? 
                            <Link to="/login" className="header-principal-links">Identifícate</Link> : null 
                        }
                        <Link to="/profile" className="header-links">Mi perfil</Link>
                        <Link to="/orders" className="header-links">Mis pedidos</Link>
                        <Link to="/favorites" className="header-links">Lista favoritos</Link>
                        <Link to="/trackOrder" className="header-links">Rastrear pedido</Link>
                    </ul>
                </button>
                {props.user === null? 
                    <Link to="/signup" className="btn" id="btn-header-signup">Registrarse!</Link> : 
                    <Link to="/logout" className="btn" id="btn-header-signup">Cerrar Sessión!</Link> 
                }
                    
            </div>

        </div>
    )
}


export default HeaderTop;