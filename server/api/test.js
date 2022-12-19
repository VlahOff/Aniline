const api = require('./cryptoApi');

async function start() {
    const temp = await api.getListCoins();

    console.log(temp);
}

start();

