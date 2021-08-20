import React, { Component } from 'react';

import './css-styles/promo_banner_styles.css';

 
class PromoBanner extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            bannerStatus: {display: 'flex'}
        }
    }

    hidePromoBanner = () =>{
        this.setState({ bannerStatus: {display: 'none'}});
    }

    render() { 
        return ( 
            <div className="promo-banner" style={this.state.bannerStatus}> 
                <div>
                    <span className="material-icons-outlined">info</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero animi at exercitationem impedit! Voluptatibus exercitationem tenetur facilis quos assumenda! Suscipit veniam architecto dolor nisi deserunt dolorem totam eum harum aspernatur.</p>
                </div>		
                <button type="button" onClick={this.hidePromoBanner}>
                    <span className="material-icons-outlined">close</span>
                </button>
            </div>
        );
    }
}
 
export default PromoBanner;
