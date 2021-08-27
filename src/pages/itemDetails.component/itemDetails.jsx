import React, { Component } from 'react';

import './css-styles/styles.css';

import Details from './details';
import Description from './descriptions';

import smartTvImage from '../../images/smart-tv.png';
import smartTvImage2 from '../../images/smart-tv-2.png';
import smartTvImage3 from '../../images/smart-tv-3.png';
import smartTvImage4 from '../../images/smart-tv-4.png';
import smartTvImage5 from '../../images/smart-tv-5.png';

import womanAvatar from '../../images/placeholder-woman.png';
import manAvatar from '../../images/placeholder-man.png';

class ItemDetails extends Component {

    constructor(props) {
        super(props);

        const tlt= 'Lorem ipsum dolor sit amet consectetur adipisicing, elit. '+
        'Repudiandae vero, enim deserunt nemo delectus pariatur soluta illo dolores nihil non.'

        this.state = {  

            Item: { 
                    id: 1, title: tlt,
                    status: 'Nuevo', department: 'Electrodomesticos', views: 10, quality: 4.8,
                    image: [smartTvImage, smartTvImage2, smartTvImage3, smartTvImage4, smartTvImage5],
                
                subItem: [
                    {
                        retailPrice: 1850, offerPrice: 1700,
                        color: 'black', capacity: '2GB', 
                        size: '17"', stock: 5
                    },
                    {
                        retailPrice: 1850, offerPrice: 1700,
                        color: 'gray',  capacity: '2GB', 
                        size: '17"', stock: 10
                    },
                    {
                        retailPrice: 2000, offerPrice: 1910,
                        color: 'red',  capacity: '2GB', 
                        size: '22"', stock: 12
                    },
                    {
                        retailPrice: 2350, offerPrice: 2140,
                        color: 'gray', capacity: '4GB',
                        size: '32"', stock: 3
                    },
                    {
                        retailPrice: 1980, offerPrice: 1910,
                        color: 'purple', capacity: '4GB',
                        size: '17"', stock: 4
                    },
                    {
                        retailPrice: 2320, offerPrice: 2290,
                        color: 'green', capacity: '6GB',
                        size: '22"', stock: 4
                    }
                ],

            },

            Comments: [
                { 
                    id: 'CMT-025489', 
                    userName: 'John Doe',
                    image: manAvatar, 
                    date: new Date(2021, 6, 3),
                    text: tlt+'. '+tlt
                },
                { 
                    id: 'CMT-025964', 
                    userName: 'Sarah Doe',
                    image: womanAvatar, 
                    date: new Date(2021, 6, 4),
                    text: tlt+'. '+tlt
                },
            ],

            BigImgCounter: 0

        };

        this.changeBigImageHandler = this.changeBigImageHandler.bind(this);
        this.onAddComment = this.onAddComment.bind(this);
    }

    changeBigImageHandler(id){
        this.setState({ BigImgCounter: id });
    }

    onAddComment(comm){

        const newComment = this.state.Comments;
        newComment.push(comm);
        this.setState({ Comments: newComment });
    }

    render() { 

        const {Item} = this.state;
        const { BigImgCounter } = this.state;

        return (  
            <div id='item-details'>

                <div className="item-details-top">		

                    <div className="slide-show">	
                        <div className="img-zoom">	
                        <img id="big-img" src={Item.image[BigImgCounter]} alt='' />
                            {/* <div id="img-rts" className="img-zoom-rts "></div> */}
                        </div>	
                        <div className="small-imgs" >		
                            {Item.image.map((val, ind) => {
                                return (<img style={(BigImgCounter === ind)? {borderColor: '#0099cc'}:null} 
                                onClick={() => this.changeBigImageHandler(ind)} src={val} key={ind} alt='' />);
                            })}
                        </div>
                    </div>

                    <Details details={Item} />

                </div>

                <Description comments={this.state.Comments} onAddComment={this.onAddComment} />

            </div>

        );
    }
}
 
export default ItemDetails;