// El controlador tiene acceso a la capa de datos 
const store = require('./store');
const utils = require('../../utils');
const auth = require('../auth/controller');

const addUser = data => {
    return new Promise(async (resolve, reject) => {
        // Filtering 
        if(data === null) {
            reject('Missing data'); 
            return false; 
        } 
        if(data.password !== data.repeatPsw) {
            reject('Passwords does not match'); 
            return false; 
        } 
        const hashedPsw = await utils.encryptPassword(data.password); 

        const userData = {
            username: data.username, 
            firstName: data.firstName, 
            lastName: data.lastName, 
            email: data.email,
            following: [], 
            followers: [], 
        }

        // Check repeated usernames
        const exists = (await store.get({username: userData.username})).length > 0;
        if(exists) {
            reject('Username already exists');
            return
        }

        // Insert new user in database 
        const newUser = await store.add(userData); 
        // Handle results 
        if(newUser === false) {
            reject('Unable to create this user');
            return false; 
        }

        await auth.createUser({
            uid: newUser._id, 
            password: hashedPsw, 
        })

        resolve('User created');
    })
}

const update = data => {
    return new Promise(async (resolve, reject) => {

        if(data.body.password) {
            if(data.body.password !== data.body.repeatPsw) {
                reject('Passwords does not match');
                return false; 
            }
            const hashedPsw = await utils.encryptPassword(data.body.password); 
            data.body.password = hashedPsw; 
            const newData = {
                password: hashedPsw,
            }
            const result = await auth.updateUser(data.user.uid, newData);
            if(result === false) {
                reject('Unable to edit data'); 
                return false; 
            } 

        }

        const user = await store.update(data.user.username, data.body); 

        if(user === false) {
            reject('Unable to edit data'); 
            return false; 
        }
        resolve('Data updated');
    })
}

const getUser = username => {
    return new Promise(async (resolve, reject) => {
        const user = await store.get(username);
        if(user === false) {
            reject('User does not exist'); 
            return false; 
        }
        resolve(user); 
    })
}

module.exports = {
    addUser,
    update, 
    getUser, 
}