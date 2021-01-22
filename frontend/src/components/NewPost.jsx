import React from 'react'; 

import config from '../config';

import '../assets/styles/components/NewPost.css';

class NewPost extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {};
    }

    componentDidMount() {
        const twitButton = document.getElementById('twitbutton'); 
        twitButton.disabled = true;
        twitButton.style.backgroundColor = config.colors.disabledButton;
    }

    handleClick() {
        console.log("Button clicked")
    }

    handleTextarea() {
        const textarea = document.getElementById('content__input'); 
        const twitButton = document.getElementById('twitbutton'); 
        if(textarea.value.length > 0) {
            twitButton.disabled = false;
            twitButton.style.backgroundColor = config.colors.enabledButton;
        } else {
            twitButton.disabled = true;
            twitButton.style.backgroundColor = config.colors.disabledButton;
        }
    }

    render() {
        return (
            <div className="newpost">
                <div className="content">
                    <img className="profilepicture" src={config.images_URLs.user} alt="Profile picture" />
                    <textarea 
                        className = "content__input" 
                        id = "content__input"
                        type = "text" 
                        placeholder = "What do you want to say?"
                        onChange = {this.handleTextarea}
                    />
                </div>
                <div className="buttons">
                    <button id="twitbutton" className="twitbutton" onClick={this.handleClick}>
                        Twit
                    </button>
                </div>
            </div>
        )
    }
}

export default NewPost; 