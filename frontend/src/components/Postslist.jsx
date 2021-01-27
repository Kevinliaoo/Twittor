import React from 'react'; 
import { connect } from 'react-redux';

import config from '../config';
import Post from './Post';

import '../assets/styles/components/Postslist.css';

const Postslist = props => {
    return(
        <div className="content">
            <Post 
                pictureURL = {config.images_URLs.user}
                firstName = "Kevin"
                lastName = "Liao"
                username = "kevinliaoo" 
                content = "Hola mundo, este es mi primer post"
            />
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.posts, 
})

export default connect(mapStateToProps, null)(Postslist); 