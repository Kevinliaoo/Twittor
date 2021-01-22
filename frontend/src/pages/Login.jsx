import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import config from '../config';

import '../assets/styles/pages/Login.css';

const Login = props => {
    const [form, setValues] = useState({
        username: '', 
        password: '', 
    })
    const handleInput = event => {
        setValues({
            ...form, 
            [event.target.name]: event.target.value, 
        })
    }
    const handleSubmit = event => {
        event.preventDefault(); 
        props.loginRequest(form);
        props.history.push('/');
    }
    useEffect(() => {
        const loginButton = document.getElementById('loginform__submit');
        if (form.username.length === 0 && form.password.length === 0) {
            loginButton.disabled = true; 
            loginButton.style.backgroundColor = config.colors.disabledButton; 
        } else if (form.username.length > 0 && form.password.length > 0) {
            loginButton.disabled = false; 
            loginButton.style.backgroundColor = config.colors.enabledButton;    
        }

    }, [form])
    return(
        <>
            <section className="formContainer">
                <h2 className="title">Log in to Twittor</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <input 
                        className = 'input'
                        type = "text"
                        name = "username" 
                        placeholder = "Username: "
                        onChange = {handleInput}
                    />
                    <input 
                        className = 'input' 
                        type = "password" 
                        name = "password" 
                        placeholder = "Password: "
                        onChange = {handleInput}
                    />
                    <button className="loginform__submit" id="loginform__submit">
                        Login
                    </button>
                    <Link className="loginform__signup" to="/register">
                        Sign up for Twittor
                    </Link>
                </form>
            </section>
        </>
    )
}

const mapDispatchesToProps = dispatch => ({
    loginRequest(payload) {
        dispatch({
            type: 'LOGIN_REQUEST',
            payload
        })
    }, 
}); 

export default connect(null, mapDispatchesToProps)(Login);