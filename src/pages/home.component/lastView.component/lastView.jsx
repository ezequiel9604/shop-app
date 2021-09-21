import React, { Component } from 'react';

import './css-styles/styles.css';

import SampleDouble from '../../samples.component/samplesDouble';

class LastView extends Component {

    constructor(props){
        super(props);

        this.state = {
            items: props.items
        };

        this.counterContainer = 0;

        this.getItems = this.getItems.bind(this);
        this.moveSlides = this.moveSlides.bind(this);
    }

    // returns an array of items
    getItems(min, max) {

        const arts = this.state.items;
        return arts.slice(min, max);
    }

    // it makes the container moves back and forward
    moveSlides(direction){

        const widthSlideContainer = this.lastViewContainer.offsetWidth;

        if(direction === 'backward'){
            if(this.counterContainer < widthSlideContainer){
                this.counterContainer+= widthSlideContainer;
            }
            else{
                this.counterContainer=0;
            }
            this.slideContainer.scrollTo(this.counterContainer,0);
        }
        else if(direction === "forward"){
    
            if(this.counterContainer>0){
               this.counterContainer-= widthSlideContainer;
            }
            else{
               this.counterContainer= widthSlideContainer;
            }
            this.slideContainer.scrollTo(this.counterContainer,0);
        }

    }

    render() { 
        return (  

            <div id="last-view" ref={elem => (this.lastViewContainer = elem)}>

                <button className="btn-slide" onClick={() => this.moveSlides('backward')}>
                    <span className="material-icons">arrow_back_ios</span>
                </button>

                <button className="btn-slide" 
                    onClick={() => this.moveSlides('forward')} 
                        style={{top: '120px', right: '0px'}}>
                    <span className="material-icons">arrow_forward_ios</span>
                </button>

                <div className="slides-ctn slide-ctn-last-viewed" ref={elem => (this.slideContainer = elem)} >

                    <div className="slides slides-last-viewed ">

                    {this.getItems(0, 5).map((current) => {
                            
                            return (
                                <SampleDouble 
                                    items={current} 
                                    isItemOffered={(current.offerPrice)? true:false} 
                                    key={current.id} />
                            )

                        })
                    }

                    </div> 

                    <div className="slides slides-last-viewed ">

                    {
                        this.getItems(0, 5).map((current) => {
                            
                            return <SampleDouble 
                                    items={current} 
                                    isItemOffered={(current.offerPrice)? true:false} 
                                    key={current.id} />;

                        })
                    }

                    </div>

                </div>	

            </div>

        );
    }
}
 
export default LastView;