const express = require('express');
const cors = require('cors');

const databaseConfig = require('./configs/database');
const authController = require('./controllers/authController');
const session = require('./middlewares/session');

const EXPRESS_PORT = 3030;

async function start() {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(session());
    await databaseConfig();

    app.use('/users', authController);

    app.get('/', (req, res) => {
        res.json('Application running without a hitch!');
    });

    app.listen(3030, () => console.log('App listening on port: ' + EXPRESS_PORT));
}

start();