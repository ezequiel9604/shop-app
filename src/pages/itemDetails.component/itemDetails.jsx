import React, { Component } from 'react';

import './css-styles/styles.css';

import Details from './details';

import smartTvImage from '../../images/smart-tv.png';
import smartTvImage2 from '../../images/smart-tv-2.png';
import smartTvImage3 from '../../images/smart-tv-3.png';
import smartTvImage4 from '../../images/smart-tv-4.png';
import smartTvImage5 from '../../images/smart-tv-5.png';

class ItemDetails extends Component {

    constructor(props) {
        super(props);

        const tlt= 'Lorem ipsum dolor sit amet consectetur adipisicing, elit. '+
        'Repudiandae vero, enim deserunt nemo delectus pariatur soluta illo dolores nihil non.'

        this.state = {  

            article: { 
                    id: 1, title: tlt,
                    status: 'Nuevo', department: 'Electrodomesticos', views: 10, quality: 4.8,
                    image: [smartTvImage, smartTvImage2, smartTvImage3, smartTvImage4, smartTvImage5],
                
                subItem: [
                    {
                        retailPrice: 1850, offerPrice: 1700,
                        color: ['black', 'blue'], capacity: '2GB', 
                        size: '17"', stock: 5
                    },  
                    {
                        retailPrice: 2000, offerPrice: 1910,
                        color: ['red', 'black'], capacity: '2GB', 
                        size: '22"', stock: 7
                    },
                    {
                        retailPrice: 2350, offerPrice: 2140,
                        color: ['white', 'gray'], capacity: '4GB',
                        size: '32"', stock: 3
                    },
                    {
                        retailPrice: 1980, offerPrice: 1910,
                        color: ['orange', 'purple'], capacity: '4GB',
                        size: '17"', stock: 4
                    },
                    {
                        retailPrice: 2320, offerPrice: 2290,
                        color: ['green', 'pink'], capacity: '6GB',
                        size: '22"', stock: 4
                    }
                ],

            },

            bigImageCounter: 0

        };
    }

    changeBigImageHandler(id){
        this.setState({ bigImageCounter: id });
    }

    render() { 

        const {article} = this.state;

        return (  
            <div id='item-details'>

                <div className="item-details-top">		

                <div className="slide-show">	
                    <div className="img-zoom">	
                        <img id="big-img" src={article.image[this.state.bigImageCounter]} alt='' />
                        {/* <div id="img-rts" className="img-zoom-rts "></div> */}
                    </div>	
                    <div className="small-imgs">		
                        {article.image.map((val, ind) => {
                            return <img onClick={() => this.changeBigImageHandler(ind)} src={val} alt='' key={ind} />
                        })}
                    </div>
                </div>

                <Details details={article} />

                </div>

            </div>

        );
    }
}
 
export default ItemDetails;