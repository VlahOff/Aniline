const api = require('./cryptoApi');

async function start() {
    const temp = await api.getGlobal();

    console.log(temp);
}

start();

