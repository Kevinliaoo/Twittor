import React from 'react'; 
import { Link } from 'react-router-dom';

import config from '../config';

import '../assets/styles/components/Search.css';

const Search = () => {
    return (
        <div className="searchsection">
            <form className="searchbar">
                <input 
                    className = "searchuser"
                    placeholder = "Search on Twittor"
                /> 
                <button>
                    <img className="searchbutton" src={config.images_URLs.search} alt="Search icon" />
                </button>
            </form>
        </div>
    )
}

export default Search;