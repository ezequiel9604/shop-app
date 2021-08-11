import React, { Component } from 'react';

import '../css/css_reset.css';
import '../css/general_styles.css';

import './css-styles/styles.css';

import smartTvImage from '../images/smart-tv.png';
import tabletImage from '../images/tablet.png';
import toolboxImage from '../images/toolbox.png';

class OfferView extends Component {

    constructor(props){
        super(props);

        this.state = {
            departments: [
                { id: 1, image: smartTvImage, name: 'departamento1', title: '1 Lorem ipsum dolor: sit amet, consectetur, adipisicing elit atque deleniti reiciendis rerum.'},
                { id: 2, image: tabletImage, name: 'departamento2', title: '2 Lorem ipsum dolor: sit amet, consectetur, adipisicing elit atque deleniti reiciendis rerum.'},
                { id: 3, image: toolboxImage, name: 'departamento3', title: '3 Lorem ipsum dolor: sit amet, consectetur, adipisicing elit atque deleniti reiciendis rerum.'},
                { id: 4, image: toolboxImage, name: 'departamento4', title: '4 Lorem ipsum dolor: sit amet, consectetur, adipisicing elit atque deleniti reiciendis rerum.'},
                { id: 5, image: toolboxImage, name: 'departamento5', title: '5 Lorem ipsum dolor: sit amet, consectetur, adipisicing elit atque deleniti reiciendis rerum.'},
                { id: 6, image: toolboxImage, name: 'departamento6', title: '6 Lorem ipsum dolor: sit amet, consectetur, adipisicing elit atque deleniti reiciendis rerum.'}
            ],
            articles: [
                { id: 1, image: smartTvImage, retailPrice: 1400, OfferPrice: 1200, views: 10},
                { id: 2, image: smartTvImage, retailPrice: 1150, OfferPrice: 1000, views: 2},
                { id: 3, image: smartTvImage, retailPrice: 900, OfferPrice: 845, views: 60},
                { id: 4, image: smartTvImage, retailPrice: 800, OfferPrice: 600, views: 4},
                { id: 5, image: smartTvImage, retailPrice: 570, OfferPrice: 520, views: 15}, 
                { id: 6, image: smartTvImage, retailPrice: 1400, OfferPrice: 1200, views: 36},
                { id: 7, image: smartTvImage, retailPrice: 1400, OfferPrice: 1200, views: 3},
                { id: 8, image: smartTvImage, retailPrice: 600, OfferPrice: 0, views: 39},
                { id: 9, image: smartTvImage, retailPrice: 425, OfferPrice: 0, views: 17}
            ]
        }
    }

    getArticlesInOffer() {
        const arts = this.state.articles.filter((art) => {return art.OfferPrice > 0});
        return arts.slice(0, 5);
    }
    
    getMostViewedArticles(){
        // creates an array of numbers with view values
        const views = this.state.articles.map((val) => {return val.views});

        let firstMax = views[0];
        let secondMax = views[1];
        
        // assings max number to firstMax
        for(let n of views){
            if(n > firstMax)
                firstMax = n;        
        }

        // assings the second max number to secondMax but different to firstMax
        for(let n of views){
            if(n > secondMax && n !== firstMax)
                secondMax = n;
        }

        return this.state.articles.filter((val) => 
            {return (val.views === firstMax || val.views === secondMax)});   

    }

    render() { 

        return ( 

            <div id='offer-view'>
                
                <div className="slides-mostviewed-container">
                
                    <div className="slides-container slides-container-offer-viewed">

                    {
                        this.state.departments.map((val, ind, arr) => {

                            if(ind === 0){
                                return (
                                    <div className="slides slides-offer-viewed animated-slides" key={ind}>		
                                        <div className="slide-information">
                                            <h2>{val.title}</h2>
                                            <a href={'/'+val.name}>ver más <span className="material-icons-sharp">east</span></a>
                                        </div>
                                        <div className="slide-bkg-image">
                                            <img src={val.image} alt='' />
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <div className="slides slides-offer-viewed " key={ind}>		
                                    <div className="slide-information">
                                        <h2>{val.title}</h2>
                                        <a href={'/'+val.name}>ver más <span className="material-icons-sharp">east</span></a>
                                    </div>
                                    <div className="slide-bkg-image">
                                        <img src={val.image} alt='' />
                                    </div>
                                </div>
                            );
                            
                        })
                    }

                    </div>	

                    <div className="most-viewed-container">

                        <h3>Mas vistos</h3>
                        
                        <div className="most-viewed-samples-container">

                            {
                                this.getMostViewedArticles().map((val, ind, arr) => {
                                    if(val.OfferPrice === 0){
                                        return (
                                            <div className="samples" key={ind}>
                                                <a href="/" className="headers">
                                                    <img src={val.image} alt='' />
                                                </a>	
                                                <div className="price">
                                                    <span className="offer">${val.retailPrice}</span>
                                                </div>
                                            </div> 
                                        );
                                    }

                                    return (
                                        <div className="samples" key={ind}>
                                            <span className="descount">
                                            {parseInt(((val.retailPrice-val.OfferPrice)/val.retailPrice)*100)}%
                                            </span>
                                            <a href="/" className="headers">
                                                <img src={val.image} alt='' />
                                            </a>
                                            <div className="price">
                                                <span className="offer">${val.OfferPrice}</span>
                                                <span className="retail">${val.retailPrice}</span>
                                            </div>
                                        </div> 
                                    );
                                })
                            }
                            
                        </div>

                    </div>

                </div>

                <div className="offer-container">

                    <h3>En ofertas</h3>		
                    
                    <div className="offer-samples-container">

                        {this.getArticlesInOffer().map((val, ind, arr) => {

                            return (
                                <div className="samples" key={ind}>
                                    <span className="descount">
                                    {parseInt(((val.retailPrice-val.OfferPrice)/val.retailPrice)*100)}%
                                    </span>
                                        <a href="/" className="headers">
                                            <img src={val.image} alt='' />
                                        </a>
                                    <div className="price">
                                        <span className="offer">${val.OfferPrice}</span>
                                        <span className="retail">${val.retailPrice}</span>
                                    </div>
                                </div> 
                            );

                        })}
                        
                    </div>	

                </div>

                <div className="advertisement-container">
                    <div>
                        <span className="material-icons">local_shipping</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere excepturi blanditiis labore deleniti facilis. Facere excepturi blanditiis labore deleniti facilis</p>
                    </div>
                    <div>
                        <span className="material-icons">verified_user</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere excepturi blanditiis labore deleniti facilis.</p>
                    </div>
                    <div>
                        <span className="material-icons">support_agent</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere excepturi blanditiis labore deleniti facilis. Facere excepturi blanditiis labore.</p>
                    </div>	
                </div>

                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe corporis cumque eius vero, omnis perferendis sed inventore esse debitis, fuga expedita vitae error ex iusto quo eveniet, possimus officia? Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Inventore laudantium molestias excepturi ea praesentium esse laborum nulla dolorem incidunt expedita eius exercitationem iure eos nihil, saepe ad. Assumenda, iusto, ex. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ad accusantium cumque commodi id ea quisquam provident harum blanditiis, facilis, veniam, ipsa enim, minus. Dolore ipsam esse voluptas maxime. Ad, ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit adipisci odio provident, laudantium ad voluptate aspernatur. Eveniet corporis animi aliquid reprehenderit repellat ipsa hic, quia dicta beatae sed. Autem. Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Dolores quo pariatur ipsam est, dignissimos culpa vel laborum ipsum itaque velit voluptas autem error assumenda, id quae quod repudiandae quisquam. Quaerat.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe corporis cumque eius vero, omnis perferendis sed inventore esse debitis, fuga expedita vitae error ex iusto quo eveniet, possimus officia? Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Inventore laudantium molestias excepturi ea praesentium esse laborum nulla dolorem incidunt expedita eius exercitationem iure eos nihil, saepe ad. Assumenda, iusto, ex. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ad accusantium cumque commodi id ea quisquam provident harum blanditiis, facilis, veniam, ipsa enim, minus. Dolore ipsam esse voluptas maxime. Ad, ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit adipisci odio provident, laudantium ad voluptate aspernatur. Eveniet corporis animi aliquid reprehenderit repellat ipsa hic, quia dicta beatae sed. Autem. Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Dolores quo pariatur ipsam est, dignissimos culpa vel laborum ipsum itaque velit voluptas autem error assumenda, id quae quod repudiandae quisquam. Quaerat.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe corporis cumque eius vero, omnis perferendis sed inventore esse debitis, fuga expedita vitae error ex iusto quo eveniet, possimus officia? Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Inventore laudantium molestias excepturi ea praesentium esse laborum nulla dolorem incidunt expedita eius exercitationem iure eos nihil, saepe ad. Assumenda, iusto, ex. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ad accusantium cumque commodi id ea quisquam provident harum blanditiis, facilis, veniam, ipsa enim, minus. Dolore ipsam esse voluptas maxime. Ad, ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit adipisci odio provident, laudantium ad voluptate aspernatur. Eveniet corporis animi aliquid reprehenderit repellat ipsa hic, quia dicta beatae sed. Autem. Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Dolores quo pariatur ipsam est, dignissimos culpa vel laborum ipsum itaque velit voluptas autem error assumenda, id quae quod repudiandae quisquam. Quaerat.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe corporis cumque eius vero, omnis perferendis sed inventore esse debitis, fuga expedita vitae error ex iusto quo eveniet, possimus officia? Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Inventore laudantium molestias excepturi ea praesentium esse laborum nulla dolorem incidunt expedita eius exercitationem iure eos nihil, saepe ad. Assumenda, iusto, ex. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ad accusantium cumque commodi id ea quisquam provident harum blanditiis, facilis, veniam, ipsa enim, minus. Dolore ipsam esse voluptas maxime. Ad, ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit adipisci odio provident, laudantium ad voluptate aspernatur. Eveniet corporis animi aliquid reprehenderit repellat ipsa hic, quia dicta beatae sed. Autem. Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Dolores quo pariatur ipsam est, dignissimos culpa vel laborum ipsum itaque velit voluptas autem error assumenda, id quae quod repudiandae quisquam. Quaerat.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe corporis cumque eius vero, omnis perferendis sed inventore esse debitis, fuga expedita vitae error ex iusto quo eveniet, possimus officia? Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Inventore laudantium molestias excepturi ea praesentium esse laborum nulla dolorem incidunt expedita eius exercitationem iure eos nihil, saepe ad. Assumenda, iusto, ex. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ad accusantium cumque commodi id ea quisquam provident harum blanditiis, facilis, veniam, ipsa enim, minus. Dolore ipsam esse voluptas maxime. Ad, ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit adipisci odio provident, laudantium ad voluptate aspernatur. Eveniet corporis animi aliquid reprehenderit repellat ipsa hic, quia dicta beatae sed. Autem. Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Dolores quo pariatur ipsam est, dignissimos culpa vel laborum ipsum itaque velit voluptas autem error assumenda, id quae quod repudiandae quisquam. Quaerat.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe corporis cumque eius vero, omnis perferendis sed inventore esse debitis, fuga expedita vitae error ex iusto quo eveniet, possimus officia? Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Inventore laudantium molestias excepturi ea praesentium esse laborum nulla dolorem incidunt expedita eius exercitationem iure eos nihil, saepe ad. Assumenda, iusto, ex. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ad accusantium cumque commodi id ea quisquam provident harum blanditiis, facilis, veniam, ipsa enim, minus. Dolore ipsam esse voluptas maxime. Ad, ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit adipisci odio provident, laudantium ad voluptate aspernatur. Eveniet corporis animi aliquid reprehenderit repellat ipsa hic, quia dicta beatae sed. Autem. Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Dolores quo pariatur ipsam est, dignissimos culpa vel laborum ipsum itaque velit voluptas autem error assumenda, id quae quod repudiandae quisquam. Quaerat.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe corporis cumque eius vero, omnis perferendis sed inventore esse debitis, fuga expedita vitae error ex iusto quo eveniet, possimus officia? Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Inventore laudantium molestias excepturi ea praesentium esse laborum nulla dolorem incidunt expedita eius exercitationem iure eos nihil, saepe ad. Assumenda, iusto, ex. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ad accusantium cumque commodi id ea quisquam provident harum blanditiis, facilis, veniam, ipsa enim, minus. Dolore ipsam esse voluptas maxime. Ad, ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit adipisci odio provident, laudantium ad voluptate aspernatur. Eveniet corporis animi aliquid reprehenderit repellat ipsa hic, quia dicta beatae sed. Autem. Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Dolores quo pariatur ipsam est, dignissimos culpa vel laborum ipsum itaque velit voluptas autem error assumenda, id quae quod repudiandae quisquam. Quaerat.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe corporis cumque eius vero, omnis perferendis sed inventore esse debitis, fuga expedita vitae error ex iusto quo eveniet, possimus officia? Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Inventore laudantium molestias excepturi ea praesentium esse laborum nulla dolorem incidunt expedita eius exercitationem iure eos nihil, saepe ad. Assumenda, iusto, ex. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ad accusantium cumque commodi id ea quisquam provident harum blanditiis, facilis, veniam, ipsa enim, minus. Dolore ipsam esse voluptas maxime. Ad, ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit adipisci odio provident, laudantium ad voluptate aspernatur. Eveniet corporis animi aliquid reprehenderit repellat ipsa hic, quia dicta beatae sed. Autem. Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Dolores quo pariatur ipsam est, dignissimos culpa vel laborum ipsum itaque velit voluptas autem error assumenda, id quae quod repudiandae quisquam. Quaerat.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe corporis cumque eius vero, omnis perferendis sed inventore esse debitis, fuga expedita vitae error ex iusto quo eveniet, possimus officia? Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Inventore laudantium molestias excepturi ea praesentium esse laborum nulla dolorem incidunt expedita eius exercitationem iure eos nihil, saepe ad. Assumenda, iusto, ex. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ad accusantium cumque commodi id ea quisquam provident harum blanditiis, facilis, veniam, ipsa enim, minus. Dolore ipsam esse voluptas maxime. Ad, ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit adipisci odio provident, laudantium ad voluptate aspernatur. Eveniet corporis animi aliquid reprehenderit repellat ipsa hic, quia dicta beatae sed. Autem. Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Dolores quo pariatur ipsam est, dignissimos culpa vel laborum ipsum itaque velit voluptas autem error assumenda, id quae quod repudiandae quisquam. Quaerat.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe corporis cumque eius vero, omnis perferendis sed inventore esse debitis, fuga expedita vitae error ex iusto quo eveniet, possimus officia? Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Inventore laudantium molestias excepturi ea praesentium esse laborum nulla dolorem incidunt expedita eius exercitationem iure eos nihil, saepe ad. Assumenda, iusto, ex. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ad accusantium cumque commodi id ea quisquam provident harum blanditiis, facilis, veniam, ipsa enim, minus. Dolore ipsam esse voluptas maxime. Ad, ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit adipisci odio provident, laudantium ad voluptate aspernatur. Eveniet corporis animi aliquid reprehenderit repellat ipsa hic, quia dicta beatae sed. Autem. Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Dolores quo pariatur ipsam est, dignissimos culpa vel laborum ipsum itaque velit voluptas autem error assumenda, id quae quod repudiandae quisquam. Quaerat.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe corporis cumque eius vero, omnis perferendis sed inventore esse debitis, fuga expedita vitae error ex iusto quo eveniet, possimus officia? Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Inventore laudantium molestias excepturi ea praesentium esse laborum nulla dolorem incidunt expedita eius exercitationem iure eos nihil, saepe ad. Assumenda, iusto, ex. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ad accusantium cumque commodi id ea quisquam provident harum blanditiis, facilis, veniam, ipsa enim, minus. Dolore ipsam esse voluptas maxime. Ad, ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit adipisci odio provident, laudantium ad voluptate aspernatur. Eveniet corporis animi aliquid reprehenderit repellat ipsa hic, quia dicta beatae sed. Autem. Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Dolores quo pariatur ipsam est, dignissimos culpa vel laborum ipsum itaque velit voluptas autem error assumenda, id quae quod repudiandae quisquam. Quaerat.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe corporis cumque eius vero, omnis perferendis sed inventore esse debitis, fuga expedita vitae error ex iusto quo eveniet, possimus officia? Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Inventore laudantium molestias excepturi ea praesentium esse laborum nulla dolorem incidunt expedita eius exercitationem iure eos nihil, saepe ad. Assumenda, iusto, ex. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ad accusantium cumque commodi id ea quisquam provident harum blanditiis, facilis, veniam, ipsa enim, minus. Dolore ipsam esse voluptas maxime. Ad, ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit adipisci odio provident, laudantium ad voluptate aspernatur. Eveniet corporis animi aliquid reprehenderit repellat ipsa hic, quia dicta beatae sed. Autem. Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Dolores quo pariatur ipsam est, dignissimos culpa vel laborum ipsum itaque velit voluptas autem error assumenda, id quae quod repudiandae quisquam. Quaerat.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe corporis cumque eius vero, omnis perferendis sed inventore esse debitis, fuga expedita vitae error ex iusto quo eveniet, possimus officia? Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Inventore laudantium molestias excepturi ea praesentium esse laborum nulla dolorem incidunt expedita eius exercitationem iure eos nihil, saepe ad. Assumenda, iusto, ex. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ad accusantium cumque commodi id ea quisquam provident harum blanditiis, facilis, veniam, ipsa enim, minus. Dolore ipsam esse voluptas maxime. Ad, ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit adipisci odio provident, laudantium ad voluptate aspernatur. Eveniet corporis animi aliquid reprehenderit repellat ipsa hic, quia dicta beatae sed. Autem. Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Dolores quo pariatur ipsam est, dignissimos culpa vel laborum ipsum itaque velit voluptas autem error assumenda, id quae quod repudiandae quisquam. Quaerat.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe corporis cumque eius vero, omnis perferendis sed inventore esse debitis, fuga expedita vitae error ex iusto quo eveniet, possimus officia? Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Inventore laudantium molestias excepturi ea praesentium esse laborum nulla dolorem incidunt expedita eius exercitationem iure eos nihil, saepe ad. Assumenda, iusto, ex. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ad accusantium cumque commodi id ea quisquam provident harum blanditiis, facilis, veniam, ipsa enim, minus. Dolore ipsam esse voluptas maxime. Ad, ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit adipisci odio provident, laudantium ad voluptate aspernatur. Eveniet corporis animi aliquid reprehenderit repellat ipsa hic, quia dicta beatae sed. Autem. Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Dolores quo pariatur ipsam est, dignissimos culpa vel laborum ipsum itaque velit voluptas autem error assumenda, id quae quod repudiandae quisquam. Quaerat.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe corporis cumque eius vero, omnis perferendis sed inventore esse debitis, fuga expedita vitae error ex iusto quo eveniet, possimus officia? Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Inventore laudantium molestias excepturi ea praesentium esse laborum nulla dolorem incidunt expedita eius exercitationem iure eos nihil, saepe ad. Assumenda, iusto, ex. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ad accusantium cumque commodi id ea quisquam provident harum blanditiis, facilis, veniam, ipsa enim, minus. Dolore ipsam esse voluptas maxime. Ad, ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit adipisci odio provident, laudantium ad voluptate aspernatur. Eveniet corporis animi aliquid reprehenderit repellat ipsa hic, quia dicta beatae sed. Autem. Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Dolores quo pariatur ipsam est, dignissimos culpa vel laborum ipsum itaque velit voluptas autem error assumenda, id quae quod repudiandae quisquam. Quaerat.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe corporis cumque eius vero, omnis perferendis sed inventore esse debitis, fuga expedita vitae error ex iusto quo eveniet, possimus officia? Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Inventore laudantium molestias excepturi ea praesentium esse laborum nulla dolorem incidunt expedita eius exercitationem iure eos nihil, saepe ad. Assumenda, iusto, ex. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ad accusantium cumque commodi id ea quisquam provident harum blanditiis, facilis, veniam, ipsa enim, minus. Dolore ipsam esse voluptas maxime. Ad, ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit adipisci odio provident, laudantium ad voluptate aspernatur. Eveniet corporis animi aliquid reprehenderit repellat ipsa hic, quia dicta beatae sed. Autem. Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Dolores quo pariatur ipsam est, dignissimos culpa vel laborum ipsum itaque velit voluptas autem error assumenda, id quae quod repudiandae quisquam. Quaerat.</p>
                </div>

            </div>

        );
    }
}
 
export default OfferView;