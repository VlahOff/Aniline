const CoinGecko = require('coingecko-api');

const cg = new CoinGecko();

async function test() {
    const a = await cg.coins.all();

    console.log(a);
}

test();
// TODO: