import { createStore, compose } from 'redux';

const initialState = {
    user: {
        id: 1, 
        firstName: 'Kevin', 
        lastName: 'Liao',
        username: 'kevinliaoo',
    }, 
    searchUser: {
        id: 1, 
        firstName: 'Kevin', 
        lastName: 'Liao',
        username: 'kevinliaoo',
        portraitimg: 'https://pbs.twimg.com/profile_banners/44196397/1576183471/1500x500', 
        profilepic: 'https://media-exp1.licdn.com/dms/image/C4D35AQGX3EZWy7rfLA/profile-framedphoto-shrink_400_400/0/1608738904912?e=1611504000&v=beta&t=K3LjnV4yymRiJJ_TBukZqLFTlPixLnpn-TxL376WmBo', 
        followers: [1, 2, 3], 
        following: [1, 2, 3 ,4, 5, 6],
    },
    token: {}, 
    posts: [
        {
            _id: 1, 
            likes: [1, 2, 4], 
            uid: 1, 
            content: 'Hola mundo', 
            date: 0, 
        }, 
        {
            _id: 2, 
            likes: [1, 2, 4], 
            uid: 1, 
            content: 'Segundo mensaje', 
            date: 0, 
        }, 
        {
            _id: 3, 
            likes: [1, 2, 4], 
            uid: 1, 
            content: 'Tercer mensaje', 
            date: 0, 
        }
    ], 
    openPost: {}, 
    postComments: [],
}

// Función reductora: función encargada de hacer los cambios en nuestra aplicación 
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOGIN_REQUEST': 
            return {
                ...state, 
                user: action.payload
            };
        case 'REGISTER_REQUEST': 
            return {
                ...state, 
                user: action.payload
            }
        default: 
            return state;
    }
}

// Esto es para el React dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

export default createStore(reducer, composeEnhancers())