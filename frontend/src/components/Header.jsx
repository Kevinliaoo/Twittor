import React from 'react'; 
import { Link } from 'react-router-dom'

import config from '../config';

import '../assets/styles/components/Header.css';

const Header = () => {
    return (
        <section className="header">
            <Link to="/">
                <img className="logo" src={config.LOGO_URL} alt="Twittor logo" />
            </Link>
        </section>
    )
}

export default Header;