const express = require('express');
const cors = require('cors');

const databaseConfig = require('./configs/database');

const session = require('./middlewares/session');

const authController = require('./controllers/authController');
const testController = require('./controllers/testController');
const cryptoController = require('./controllers/cryptoController');
const portfolioController = require('./controllers/PortfolioController');
const { isUser } = require('./middlewares/guards');

// TODO: add to env variable
const EXPRESS_PORT = 3030;

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
        res.json({ message: 'Application running without a hitch!' });
    });

    app.listen(3030, () => console.log('App listening on port: ' + EXPRESS_PORT));
}

start();