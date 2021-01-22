import React from 'react'; 

import config from '../config';

import '../assets/styles/components/Post.css';

const Post = props => {
    const goToPost = ev => {

    }
    const likePost = ev => {
        console.log("Send like request")
    }
    // El contenido de cada post dsps lo tengo que cambiar cuando pueda hacer peticiones
    return(
        <>
            <div className="postcontent">
                <div className="maincontent">
                    <div className="maincontent__image">
                        <img className="profilepicture" src={props.pictureURL}/>
                    </div>
                    <div className="separator">
                        <div className="maincontent__maindata">
                            <p className="name">{`${props.firstName} ${props.lastName}`}</p>
                            <p className="username">{`@${props.username} ·`}</p> 
                            <p className="time">21mins</p>
                        </div>  
                        <div className="maincontent__content">
                            {props.content}
                        </div>
                    </div>
                </div>
                <div className="postactions">
                    <div className="like" onClick={likePost}>
                        <img src={config.images_URLs.like} alt="Like button" />
                        <p className="likesnumber">6</p>
                    </div>
                    <div className="comment" onClick={goToPost}>
                        <img src={config.images_URLs.comments} alt="Comment button" />
                        <p className="commentsnumbers">9</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post;