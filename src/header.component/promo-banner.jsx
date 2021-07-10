import React, { Component } from 'react';
import './css-styles/second-part-styles.css';
import './css-styles/responsive-device-styles.css';

const PromoBanner = () => {
    return ( 
        <div className="promo-banner">

            <div className="ctn-l">

                <div className="promo-banner-content">
                    <div>
                        <span className="material-icons-outlined">info</span>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto,
                            eaque vitae iure enim ipsa illo amet dolorum inventore recusandae odio ut est,
                            accusamus! Id quasi, labore magnam, vero mollitia ad.
                        </p>
                    </div>	
                    <button type="button"><span className="material-icons-outlined">close</span></button>
                </div>

            </div>		

        </div>
    );
}
 
export default PromoBanner;
