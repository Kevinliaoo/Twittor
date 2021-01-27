import React from 'react'; 
import { connect } from 'react-redux';

import Postslist from '../components/Postslist';
import NewPost from '../components/NewPost';
import Navbar from '../components/Navbar';
import Search from '../components/Search';

import '../assets/styles/pages/Home.css'

const Home = props => {
    const isUserLoged = Object.keys(props.user).length > 0; 
    if(isUserLoged === false) {
        props.history.push('/login');
    }
    return(
        <div className="homepage__content">
            <div className="left">
                <Navbar />
            </div>
            <div className="middle">
                <NewPost />
                <Postslist />
            </div>
            <div className="right">
                <Search />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state); 
    return {
        posts: state.posts, 
        user: state.user,
    }
}

export default connect(mapStateToProps, null)(Home); 