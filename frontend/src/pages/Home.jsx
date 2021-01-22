import React from 'react'; 
import { connect } from 'react-redux';

import config from '../config';
import NewPost from '../components/NewPost';
import Post from '../components/Post';

import '../assets/styles/pages/Home.css'

const Home = props => {
    const isUserLoged = Object.keys(props.user).length > 0; 
    if(isUserLoged === false) {
        props.history.push('/login');
    }
    return(
        <div className="content">
            <div className="left">
            </div>
            <div className="middle">
                <NewPost />
                <Post 
                    pictureURL = {config.images_URLs.user}
                    firstName = "Kevin"
                    lastName = "Liao"
                    username = "kevinliaoo" 
                    content = "Hola mundo, este es mi primer post"
                />
            </div>
            <div className="right">
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.posts, 
    user: state.user,
})

export default connect(mapStateToProps, null)(Home); 