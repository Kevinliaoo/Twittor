import React from 'react'; 
import { Link } from 'react-router-dom';

import config from '../config';

import '../assets/styles/components/Navbar.css';
import { connect } from 'react-redux';

const Navbar = props => {
    return (
        <div className="navbar">
            <Link className="navbar__section" to="/">
                <img src={config.images_URLs.home} alt="Home logo" />
                <p>Home</p>
            </Link>
            <Link className="navbar__section" onClick={props.changeSearchUser(props.user)} to="/profile">
                <img src={config.images_URLs.profile} alt="Profile logo" />
                <p>Profile</p>
            </Link>
            <Link className="navbar__section" to="/login" onClick={props.logoutRequest}>
                <img src={config.images_URLs.logout} alt="logout" />
                <p>Logout</p>
            </Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchesToProps = dispatch => ({
    logoutRequest() {
        dispatch({
            type: 'LOGOUT_REQUEST',
        })
    }, 
    changeSearchUser(payload) {
        dispatch({
            type: 'CHANGE_SEARCH_USER', 
            payload, 
        })
    }
}); 

export default connect(mapStateToProps, mapDispatchesToProps)(Navbar)