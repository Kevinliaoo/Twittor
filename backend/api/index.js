const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');

const db = require('./db');
const config = require('../config');
const errors = require('../network/errors');
const routes = require('../network/routes');

const DB_URL = `mongodb+srv://${config.db.dbUsername}:${config.db.dbPsw}@${config.db.dbHost}/${config.db.dbName}?retryWrites=true&w=majority`;
db(DB_URL); 

const app = express();

// const swaggerDoc = require('./swagger.json');

app.use(bodyParser.json());

// Routes
routes(app); 
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(errors);    // Este va último

// Configuración del frontend
// app.use(path, express.static('public'))

app.listen(config.api.port, () => {
    console.log("API escuchando en el puerto" + config.api.port);
});
 