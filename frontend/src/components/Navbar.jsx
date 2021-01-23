import React from 'react'; 
import { Link } from 'react-router-dom';

import config from '../config';

import '../assets/styles/components/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className="navbar__section" to="/">
                <img src={config.images_URLs.home} alt="Home logo" />
                <p>Home</p>
            </Link>
            <Link className="navbar__section" to="/profile">
                <img src={config.images_URLs.profile} alt="Profile logo" />
                <p>Profile</p>
            </Link>
        </div>
    )
}

export default Navbar; 