import React from 'react'; 
import { connect } from 'react-redux';

import Postslist from '../components/Postslist';
import NewPost from '../components/NewPost';
import Navbar from '../components/Navbar';
import Search from '../components/Search';

import '../assets/styles/pages/Home.css'

class Home extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {}; 
    }
    componentDidMount() {
        if(Object.keys(this.props.user).length === 0) {
            this.props.history.push('/login');
        }
    }
    render() {
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
}

const Homee = props => {
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
    return {
        posts: state.posts, 
        user: state.user,
        jwt: state.jwt,
    }
}

const mapDispatchesToProps = dispatch => ({
    loadPostsRequest(payload) {
        dispatch({
            type: 'LOAD_POSTS_REQUEST',
            payload
        })
    }, 
}); 

export default connect(mapStateToProps, mapDispatchesToProps)(Home); 