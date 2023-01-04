require('dotenv').config();
const express = require('express');

const databaseConfig = require('./configs/database');

const session = require('./middlewares/session');

const authController = require('./controllers/authController');
const testController = require('./controllers/testController');
const cryptoController = require('./controllers/cryptoController');
const portfolioController = require('./controllers/PortfolioController');
const { isUser } = require('./middlewares/guards');
const cors = require('./middlewares/cors');

const EXPRESS_PORT = process.env.EXPRESS_PORT;

async function start() {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(session());
    await databaseConfig();

    app.use('/auth', authController);
    app.use('/crypto', cryptoController);
    app.use('/portfolio', isUser(), portfolioController);
    app.use('/test', testController);

    app.get('/', (req, res) => {
        res.status(200).send('It works!');
    });

    app.listen(EXPRESS_PORT, () => console.log('App listening on port: ' + EXPRESS_PORT));
}

start();