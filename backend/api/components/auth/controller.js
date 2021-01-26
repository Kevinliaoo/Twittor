const store = require("./store");
const auth = require('../../../auth');
const utils = require('../../utils');

function createUser(data) {
    const authData = {
        uid: data.uid, 
    }
    if(data.username) {
        authData.username = data.username; 
    }
    if(data.password) {
        authData.password = data.password; 
    }

    return store.add(authData);
} 

const login = async (uid, password) => {
    // Get user data
    const data = await store.query(uid); 

    // Password checking 
    const samePassword = await utils.compare(password, data.password)
    if(samePassword) {
        // Generar el token 
        return auth.sign(data);
    } else {
        throw new Error('Invalid infromation');
    }
}

const updateUser = async (uid, newData) => {
    const result = await store.update(uid, newData);
}

module.exports = {
    login, 
}