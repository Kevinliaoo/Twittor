const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = Schema({
    username: {
        type: String, 
        required: true, 
        unique: true, 
    }, 
    password: String, 
    firstName: String, 
    lastName: String, 
    email: String, 
    following: [
        {
            type: Schema.ObjectId, 
            ref: 'users', 
        }
    ], 
    followers: [
        {
            type: Schema.ObjectId, 
            ref: 'users', 
        }
    ], 
})

const model = mongoose.model('users', mySchema); 

module.exports = model; 

/**
 * Un ejemplo de una petición 
 * 
{
	"username": "kevinliaoo", 
	"firstName": "Kevin", 
	"lastName": "Liao", 
	"email": "liaok0082@gmail.com", 
	"password": "nueva_clave", 
	"repeatPsw": "nueva_clave", 
	"following": [{}], 
	"followres": [{}], 
	"uid": "60039f86d4395139d14ad95c"
}
 */