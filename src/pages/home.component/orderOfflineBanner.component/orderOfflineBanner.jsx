
import './css-styles/styles.css';

import smartTvImage from '../../../images/smart-tv.png';
import tabletImage from '../../../images/tablet.png';
import toolboxImage from '../../../images/toolbox.png';
import clothesImage from '../../../images/clothes.png';

function OrderOfflineBanner() {

    return (  
        <div id="order-offline-banner">

            <figure>
                <img src={smartTvImage} alt='' />
                <img src={tabletImage} alt='' />
                <img src={toolboxImage} alt='' />
                <img src={clothesImage} alt='' />
            </figure>

            <h3>Quiere hacer una compra y no tiene tarjeta de credito o debito, llamé al: 809-100-2000 realice su compra con ayuda de nuestro servicio al cliente y pague al recibir.</h3>

        </div>	
    );

}
 
export default OrderOfflineBanner;