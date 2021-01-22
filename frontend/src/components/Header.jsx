import React from 'react'; 
import config from '../config';

import '../assets/styles/components/Header.css';

const Header = () => {
    return (
        <section className="header">
            <img className="logo" src={config.LOGO_URL} alt="Twittor logo" />
        </section>
    )
}

export default Header;