const axios = require('axios');

const cgHost = 'https://api.coingecko.com/api/v3/';
const cmcHostVOne = 'https://pro-api.coinmarketcap.com/v1/';
const cmcHostVTwo = 'https://pro-api.coinmarketcap.com/v2/';

const CMC_API_KEY = process.env.CMC_API_KEY;
const cmcHeaders = {
	'X-CMC_PRO_API_KEY': CMC_API_KEY
};

const cryptoApi = {
	getGlobal: async () => {
		let temp = await axios.get(cgHost + 'global');
		temp = temp.data.data;

		return {
			total_market_cap: temp.total_market_cap.usd,
			market_cap_change_percentage_24h_usd: temp.market_cap_change_percentage_24h_usd,
			trading_volume: temp.total_volume.usd,
			btc_dominance: temp.market_cap_percentage.btc,
			number_of_coins: temp.active_cryptocurrencies
		};
	},// decimal place for currency price value, default: 2
	// TODO: NOT IMPLEMENTED
	getCoin: async (coin, precision) => {
		let t = await axios.get(cgHost + `simple/price?ids=${coin}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&precision=${Number(precision) | 2}`);
		return t.data;
	},
	getCoinDetailed: async (coin) => {
		let t = await axios.get(cgHost + `coins/${coin}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false`);
		let c = await axios.get(cgHost + `coins/${coin}/market_chart?vs_currency=usd&days=1&interval=hourly`);
		t = t.data;
		c = c.data.prices;
		const r = [];
		c.forEach(v => {
			r.push({
				time: v[0],
				price: v[1]
			});
		});

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
			low_high_value: ((t.market_data.current_price.usd - t.market_data.low_24h.usd) * 100) / (t.market_data.high_24h.usd - t.market_data.low_24h.usd),
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
			last_updated: t.market_data.last_updated,
			chartData: r
		};
	},
	getTopHundred: async () => {
		let t = await axios.get(cgHost + 'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d');

		const res = [];
		t.data.forEach((t) => {
			res.push({
				id: t.id,
				name: t.name,
				symbol: t.symbol,
				total_supply: t.total_supply,
				last_updated: t.last_updated,
				current_price: t.current_price,
				market_cap: t.market_cap,
				price_change_24h: t.price_change_24h,
				price_change_percentage_24h: t.price_change_percentage_24h,
				price_change_percentage_1h_in_currency: t.price_change_percentage_1h_in_currency,
				price_change_percentage_24h_in_currency: t.price_change_percentage_24h_in_currency,
				price_change_percentage_7d_in_currency: t.price_change_percentage_7d_in_currency,
				image: t.image,
			});
		});
		return res;
	},
	newCoinsToday: async () => {
		let coinData = await axios.get(cmcHostVOne + 'cryptocurrency/listings/latest?sort=date_added', { 'headers': cmcHeaders });
		coinData = coinData.data.data;

		let ids = [];
		coinData.forEach((t) => {
			ids.push(t.slug);
		});

		let coinMetaData = await axios.get(cmcHostVTwo + `cryptocurrency/info?slug=${ids.join(',')}&aux=logo`, { 'headers': cmcHeaders });
		coinMetaData = coinMetaData.data.data;
		coinMetaData = Object.values(coinMetaData);
		coinMetaData = coinMetaData.reverse();

		const res = [];
		for (let i = 0; i < ids.length; i++) {
			res.push({
				id: coinData[i].slug,
				name: coinData[i].name,
				symbol: coinData[i].symbol.toLowerCase(),
				total_supply: coinData[i].total_supply,
				last_updated: coinData[i].last_updated,
				price: coinData[i].quote.USD.price,
				volume_24h: coinData[i].quote.USD.volume_24h,
				volume_change_24h: coinData[i].quote.USD.volume_change_24h,
				percent_change_1h: coinData[i].quote.USD.percent_change_1h,
				percent_change_24h: coinData[i].quote.USD.percent_change_24h,
				percent_change_7d: coinData[i].quote.USD.percent_change_7d,
				image: coinMetaData[i].logo
			});
		}

		return res;
	},
	getListCoins: async () => {
		const t = await axios.get(cgHost + 'coins/list?include_platform=false');
		return t.data;
	},
	// TODO: NOT IMPLEMENTED
	search: async (query) => {
		let t = await axios.get(`${cgHost}search?query=${query}`);
		return t.data.coins;
	},
	getTopThree: async () => {
		const temp = await cryptoApi.getTopHundred();
		const stableCoinsIds = ['tether', 'usd-coin', 'binance-usd', 'dai', 'paxos-standard', 'true-usd', 'usdd'];
		const res = [];

		while (res.length != 3) {
			const tempCoin = temp.shift();
			if (!stableCoinsIds.includes(tempCoin.id)) {
				res.push(tempCoin);
			}
		}

		return res;
	},
	cryptoMap: async () => {
		const t = await axios.get(cmcHostVOne + 'cryptocurrency/map?sort=cmc_rank&limit=100', { 'headers': cmcHeaders });
		const arr = [];
		t.data.data.forEach(e => {
			const res = {
				id: e.id,
				name: e.name,
				slug: e.slug,
				symbol: e.symbol
			};
			arr.push(res);
		});
		return arr;
	},
	fiatMap: async () => {
		return [
			{ id: 2781, name: 'United States Dollar', sign: '$', symbol: 'USD' },
			{ id: 2790, name: 'Euro', sign: '€', symbol: 'EUR' },
			{ id: 2814, name: 'Bulgarian Lev', sign: 'лв', symbol: 'BGN' },
			{ id: 2782, name: 'Australian Dollar', sign: '$', symbol: 'AUD' },
			{ id: 2784, name: 'Canadian Dollar', sign: '$', symbol: 'CAD' }
		];
	},
	convert: async (amount, fromCurrency, toCurrency) => {
		const t = await axios.get(cmcHostVTwo + `tools/price-conversion?amount=${amount}&id=${fromCurrency}&convert_id=${toCurrency}`, { 'headers': cmcHeaders });
		return t.data.data;
	}
};

module.exports = cryptoApi;