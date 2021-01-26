const auth = require('../../../auth');

module.exports = checkauth = (action) => {
    const middleware = (req, res, next) => {
        // next() ejecuta la próxima función después de este callback 
        // En este caso, ejecuta el siguiente callbac en network.js
        switch(action) {
            case 'update': 
                const owner = req.body.uid;  
                auth.check.own(req, owner); 
                // Tengo que hacer algo si sale un error 
                next();
                break; 
            default: 
                next(); 
                break; 
        }
    }
    return middleware; 
}