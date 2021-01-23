import React from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar'; 
import Search from '../components/Search';
import Postslist from '../components/Postslist';

import config from '../config';

import '../assets/styles/pages/Profile.css';

const Profile = props => {
    const { user, posts } = props;
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
                        <p className="userinfo__name">{`${user.firstName} ${user.lastName}`}</p>
                        <p className="userinfo__postscount">{`${posts.length} posts`}</p>
                    </div>
                </div>
                <div className="profilecontent">
                    <img src={user.portraitimg} alt="Portrait image" className="portrait"/>
                    <div className="userprofile">
                        <img src={user.profilepic} alt="" className="userprofile__profilepicture"/>
                        <div className="userprofile__userinfo">
                            <p className="userinfo__name">{`${user.firstName} ${user.lastName}`}</p>
                            <p className="userprofile__username">{`@${user.username}`}</p>
                            <p>{`${user.following.length} Following  ${user.followers.length} Followers`}</p>
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
    user: state.searchUser,
    posts: state.posts,
});

export default connect(mapStateToProps, null)(Profile);