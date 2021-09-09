
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css-styles/top_part_styles.css';
import './css-styles/bottom_part_styles.css';

import PromoBanner from './promoBanner';
import HeaderTop from './headerTop';
import Suggestion from './suggestion';


class Header extends Component {

    constructor(props){
        super(props);

        this.state = {     
            suggestions: []
        }

        this.findSuggestions = this.findSuggestions.bind(this);
        this.onSuggestionsEmpty = this.onSuggestionsEmpty.bind(this);
    }

    // when user types in search input, it will find the coincidences
    // and then returns them as an array.
    findSuggestions(event){
        let { Departments } = this.props.data;
        let sugs = [];
        let keyword = event.target.value.toLowerCase();

        for(let d of Departments){
            let element = d.toLowerCase();
            if(element.indexOf(keyword) !== -1 && keyword !== ' ' && keyword !== ''){
                sugs.push(d);
            }
        }

        this.setState({ suggestions : sugs});
    }

    // it verifies if the user is typing in the search input
    // if the answer is yes, it will show a dropdown container with the coincidences
    // otherwise hide the dropdown container
    onSuggestionsEmpty(){
        if(this.state.suggestions.length === 0){
            return {display: 'none'};
        }
        return {display: 'block'};
    }
    
    render(){

        const { User } = this.props.data;
        const {Cart} = this.props.data;

        return (
        <React.Fragment>

            <header id="main-header">

                <PromoBanner />

                <HeaderTop user={User} />

                <div className="bottom-part">
                        
                    <div className="header-logo">
                        <button type="button" id="btn-open-sidebar">
                            <div></div>
                            <div></div>
                            <div></div>
                        </button> 
                        <Link to="/" className='logo-title'>Zenuben</Link>
                    </div>

                    <form action='/' method='get' className="header-form-search">
                        
                        <div className="dropdown-department">
                                
                            <p>Departamentos</p>
                            <span className="material-icons-sharp">arrow_drop_down</span>

                            <ul className="dropdown-department-list">
                            {
                                this.props.data.Departments.map((val, ind, arr) => {
                                    return  <Link to={'/searchResults?keyword='+val} key={ind}>{val}</Link>;
                                })
                            }
                            </ul>
                        </div>	

                        <input type="search" name='keyword' onChange={this.findSuggestions} 
                            autoComplete='off' placeholder="Que buscas?" />

                        <Suggestion suggs={this.state.suggestions} visibility={this.onSuggestionsEmpty} />

                        <button type="submit">
                            <span className="material-icons-sharp">search</span>
                        </button>
                    </form>

                    <div className="header-cart-favorite">
                        <Link to="/cart" className="btn">
                            <span className="material-icons-outlined icon-font">shopping_cart</span>	
                            <i>{(User === null)? Cart.length:0}</i>
                        </Link>
                        <Link to="/favorites" className="btn">
                            <span className="material-icons-outlined icon-font">favorite_border</span>	
                            <i>{(User === null)? 0 : User.favoriteArticles.length}</i>
                        </Link>
                    </div>

                </div> 

            </header>	

        </React.Fragment>
        );
    }

}
 
export default Header;