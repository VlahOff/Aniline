const api = require('./cryptoApi');

async function start() {
    const temp = await api.newCoinsToday();

    console.log(temp);
}

start();

