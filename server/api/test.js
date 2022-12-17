const api = require('./cryptoApi');

async function start() {
    const temp = await api.getTopHundred();

    console.log(temp);
}

start();

