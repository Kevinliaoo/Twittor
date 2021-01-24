require('dotenv').config(); 

const config = {
    api: {
        port: process.env.API_PORT,
    }, 
    db: {
        dbUsername: process.env.DB_USERNAME,
        dbPsw: process.env.DB_PSW,
        dbHost: process.env.DB_HOST,
        dbName: process.env.DB_NAME,
    }, 
    auth: {
        secret: process.env.SECRET,
    }
}

module.exports = config;    