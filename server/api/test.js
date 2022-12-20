const api = require('./cryptoApi');

async function start() {
    const temp = await api.getCoinDetailed('bitcoin');

    console.log(temp);
}

start();

