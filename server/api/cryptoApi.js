const axios = require('axios');

const cgHost = 'https://api.coingecko.com/api/v3/';
const cmcHost = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/';

const CMC_API_KEY = 'd6eff52e-a428-4710-bdec-4ae4c749e53c';
const cmcHeaders = {
    'X-CMC_PRO_API_KEY': CMC_API_KEY
};

// TODO: Add to env var

const cryptoApi = {
    getGlobal: async () => {
        let temp = await axios.get(cgHost + 'global');
        temp = temp.data;

        return {
            total_market_cap: temp.data.total_market_cap.usd,
            market_cap_change_percentage_24h_usd: temp.data.market_cap_change_percentage_24h_usd,
            total_volume: temp.data.total_volume.usd,
            btc_market_cap_percentage: temp.data.market_cap_percentage.btc
        };
    },
    getCoin: async (coin, precision) => {
        let t = await axios.get(cgHost + `simple/price?ids=${coin}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&precision=${Number(precision) | 2}`);
        return t.data;
    },
    getCoinDetailed: async (coin) => {
        let t = await axios.get(cgHost + `coins/${coin}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false`);
        t = t.data;

        return {
            id: t.id,
            symbol: t.symbol,
            name: t.name,
            image: t.image,
            current_price: t.market_data.current_price.usd,
            market_cap: t.market_data.market_cap.usd,
            total_volume: t.market_data.total_volume.usd,
            high_24h: t.market_data.high_24h.usd,
            low_24h: t.market_data.low_24h.usd,
            price_change_24h: t.market_data.price_change_24h,
            price_change_percentage_24h: t.market_data.price_change_percentage_24h,
            market_cap_change_24h: t.market_data.market_cap_change_24h,
            market_cap_change_percentage_24h: t.market_data.market_cap_change_percentage_24h,
            circulating_supply: t.market_data.circulating_supply,
            total_supply: t.market_data.total_supply,
            max_supply: t.market_data.max_supply,
            ath: t.market_data.ath.usd,
            ath_change_percentage: t.market_data.ath_change_percentage.usd,
            ath_date: t.market_data.ath_date.usd,
            atl: t.market_data.atl.usd,
            atl_change_percentage: t.market_data.atl_change_percentage.usd,
            atl_date: t.market_data.atl_date.usd,
            last_updated: t.market_data.last_updated
        };
    },
    getTopHundred: async () => {
        let t = await axios.get(cgHost + 'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        return t.data;
    },
    newCoinsToday: async () => {
        let t = await axios.get(cmcHost + 'listings/latest?sort=date_added', { 'headers': cmcHeaders });
        t = t.data.data;

        const res = [];
        t.forEach(async (t) => {
            res.push({
                id: t.slug,
                name: t.name,
                symbol: t.symbol.toLowerCase(),
                total_supply: t.total_supply,
                last_updated: t.last_updated,
                price: t.quote.USD.price,
                volume_24h: t.quote.USD.volume_24h,
                volume_change_24h: t.quote.USD.volume_change_24h,
                percent_change_1h: t.quote.USD.percent_change_1h,
                percent_change_24h: t.quote.USD.percent_change_24h,
                percent_change_7d: t.quote.USD.percent_change_7d
            });
        });

        return res;
    },
    currencyConverter: () => {
        
    }
};

module.exports = cryptoApi;