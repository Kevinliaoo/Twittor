const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = Schema({
    uid: {
        type: String, 
        required: true, 
        unique: true, 
    }, 
    username: {
        type: String, 
        required: true, 
        unique: true, 
    }, 
    password: String, 
    firstName: String, 
})

const model = mongoose.model('auth', mySchema); 

module.exports = model; 