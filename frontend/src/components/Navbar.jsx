import React from 'react'; 

import config from '../config';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__section">
                <img src={config.LOGO_URL.home} />
                <p>Home</p>
            </div>
            <div className="navbar__section">
                <img src={config.LOGO_URL.profile} />
                <p>Profile</p>
            </div>
        </div>
    )
}

export default Navbar; 