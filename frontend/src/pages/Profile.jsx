import React from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar'; 
import Search from '../components/Search';
import Postslist from '../components/Postslist';

import config from '../config';

import '../assets/styles/pages/Profile.css';

const Profile = props => {
    const { searchUser, posts } = props;
    return (
        <div className="homepage__content">
            <div className="left">
                <Navbar />
            </div>
            <div className="middle--profile">
                <div className="content__header">
                    <Link to="/">
                        <img className="arrowimg" src={config.images_URLs.arrow} alt="Prev" />
                    </Link>
                    <div className="userinfo">
                        <p className="userinfo__name">{`${searchUser.firstName} ${searchUser.lastName}`}</p>
                        <p className="userinfo__postscount">{`${posts.length} posts`}</p>
                    </div>
                </div>
                <div className="profilecontent">
                    <img 
                        src={searchUser.portraitimg || config.images_URLs.default_portrait} 
                        alt="Portrait image" 
                        className="portrait"
                    />
                    <div className="userprofile">
                        <img 
                            src={searchUser.profilepic || config.images_URLs.default_profile} 
                            alt="User's profile pictire" 
                            className="userprofile__profilepicture"
                        />
                        <div className="userprofile__userinfo">
                            <p className="userinfo__name">{`${searchUser.firstName} ${searchUser.lastName}`}</p>
                            <p className="userprofile__username">{`@${searchUser.username}`}</p>
                            <p>{`${searchUser.following.length} Following  ${searchUser.followers.length} Followers`}</p>
                        </div>
                    </div>
                </div>
                <Postslist />
            </div>
            <div className="right">
                <Search />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    searchUser: state.searchUser,
    user: state.user,
    posts: state.posts,
});

export default connect(mapStateToProps, null)(Profile);