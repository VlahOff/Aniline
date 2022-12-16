const api = require('./cryptoApi');

async function start() {
    const temp = await api.cryptoMap();

    console.log(temp);
}

start();

