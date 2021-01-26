const Model = require('./model');

async function addUser(userData) {
    const newUser = new Model(userData); 
    try {
        const res = await newUser.save();
        return res;
    } catch(error) {
        return false; 
    }
} 

const getUserById = async uid => {
    if(!uid) return null; 
    
    try {
        const user = await Model.find({_id: uid})
        return user[0]; 
    } catch(e) {
        return false; 
    }
}

const getUser = async filter => {
    const user = await Model.find(filter);
    if(user.length === 0) {
        return false; 
    }
    return user;
}

const updateUser = async (username, data) => {
    const foundUser = await Model.findOne({
        username: username
    }); 
    if(data.firstName) foundUser.firstName = data.firstName; 
    if(data.lastName) foundUser.lastName = data.lastName; 
    if(data.password) foundUser.password = data.password; 
    if(data.username) foundUser.username = data.username; 
    const newUser = await foundUser.save(); 
    return newUser;
}

module.exports = {
    add: addUser, 
    get: getUser, 
    getById: getUserById,
    update: updateUser, 
}