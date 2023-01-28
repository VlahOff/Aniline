const fiatMap = [
  {
    'id': 2781,
    'name': 'United States Dollar',
    'sign': '$',
    'symbol': 'USD'
  },
  {
    'id': 2782,
    'name': 'Australian Dollar',
    'sign': '$',
    'symbol': 'AUD'
  },
  {
    'id': 2783,
    'name': 'Brazilian Real',
    'sign': 'R$',
    'symbol': 'BRL'
  },
  {
    'id': 2784,
    'name': 'Canadian Dollar',
    'sign': '$',
    'symbol': 'CAD'
  },
  {
    'id': 2785,
    'name': 'Swiss Franc',
    'sign': 'Fr',
    'symbol': 'CHF'
  },
  {
    'id': 2786,
    'name': 'Chilean Peso',
    'sign': '$',
    'symbol': 'CLP'
  },
  {
    'id': 2787,
    'name': 'Chinese Yuan',
    'sign': '¥',
    'symbol': 'CNY'
  },
  {
    'id': 2788,
    'name': 'Czech Koruna',
    'sign': 'Kč',
    'symbol': 'CZK'
  },
  {
    'id': 2789,
    'name': 'Danish Krone',
    'sign': 'kr',
    'symbol': 'DKK'
  },
  {
    'id': 2790,
    'name': 'Euro',
    'sign': '€',
    'symbol': 'EUR'
  },
  {
    'id': 2791,
    'name': 'Pound Sterling',
    'sign': '£',
    'symbol': 'GBP'
  },
  {
    'id': 2792,
    'name': 'Hong Kong Dollar',
    'sign': '$',
    'symbol': 'HKD'
  },
  {
    'id': 2793,
    'name': 'Hungarian Forint',
    'sign': 'Ft',
    'symbol': 'HUF'
  },
  {
    'id': 2794,
    'name': 'Indonesian Rupiah',
    'sign': 'Rp',
    'symbol': 'IDR'
  },
  {
    'id': 2795,
    'name': 'Israeli New Shekel',
    'sign': '₪',
    'symbol': 'ILS'
  },
  {
    'id': 2796,
    'name': 'Indian Rupee',
    'sign': '₹',
    'symbol': 'INR'
  },
  {
    'id': 2797,
    'name': 'Japanese Yen',
    'sign': '¥',
    'symbol': 'JPY'
  },
  {
    'id': 2798,
    'name': 'South Korean Won',
    'sign': '₩',
    'symbol': 'KRW'
  },
  {
    'id': 2799,
    'name': 'Mexican Peso',
    'sign': '$',
    'symbol': 'MXN'
  },
  {
    'id': 2800,
    'name': 'Malaysian Ringgit',
    'sign': 'RM',
    'symbol': 'MYR'
  },
  {
    'id': 2801,
    'name': 'Norwegian Krone',
    'sign': 'kr',
    'symbol': 'NOK'
  },
  {
    'id': 2802,
    'name': 'New Zealand Dollar',
    'sign': '$',
    'symbol': 'NZD'
  },
  {
    'id': 2803,
    'name': 'Philippine Peso',
    'sign': '₱',
    'symbol': 'PHP'
  },
  {
    'id': 2804,
    'name': 'Pakistani Rupee',
    'sign': '₨',
    'symbol': 'PKR'
  },
  {
    'id': 2805,
    'name': 'Polish Złoty',
    'sign': 'zł',
    'symbol': 'PLN'
  },
  {
    'id': 2806,
    'name': 'Russian Ruble',
    'sign': '₽',
    'symbol': 'RUB'
  },
  {
    'id': 2807,
    'name': 'Swedish Krona',
    'sign': 'kr',
    'symbol': 'SEK'
  },
  {
    'id': 2808,
    'name': 'Singapore Dollar',
    'sign': 'S$',
    'symbol': 'SGD'
  },
  {
    'id': 2809,
    'name': 'Thai Baht',
    'sign': '฿',
    'symbol': 'THB'
  },
  {
    'id': 2810,
    'name': 'Turkish Lira',
    'sign': '₺',
    'symbol': 'TRY'
  },
  {
    'id': 2811,
    'name': 'New Taiwan Dollar',
    'sign': 'NT$',
    'symbol': 'TWD'
  },
  {
    'id': 2812,
    'name': 'South African Rand',
    'sign': 'R',
    'symbol': 'ZAR'
  },
  {
    'id': 2813,
    'name': 'United Arab Emirates Dirham',
    'sign': 'د.إ',
    'symbol': 'AED'
  },
  {
    'id': 2814,
    'name': 'Bulgarian Lev',
    'sign': 'лв',
    'symbol': 'BGN'
  },
  {
    'id': 2815,
    'name': 'Croatian Kuna',
    'sign': 'kn',
    'symbol': 'HRK'
  },
  {
    'id': 2816,
    'name': 'Mauritian Rupee',
    'sign': '₨',
    'symbol': 'MUR'
  },
  {
    'id': 2817,
    'name': 'Romanian Leu',
    'sign': 'lei',
    'symbol': 'RON'
  },
  {
    'id': 2818,
    'name': 'Icelandic Króna',
    'sign': 'kr',
    'symbol': 'ISK'
  },
  {
    'id': 2819,
    'name': 'Nigerian Naira',
    'sign': '₦',
    'symbol': 'NGN'
  },
  {
    'id': 2820,
    'name': 'Colombian Peso',
    'sign': '$',
    'symbol': 'COP'
  },
  {
    'id': 2821,
    'name': 'Argentine Peso',
    'sign': '$',
    'symbol': 'ARS'
  },
  {
    'id': 2822,
    'name': 'Peruvian Sol',
    'sign': 'S/.',
    'symbol': 'PEN'
  },
  {
    'id': 2823,
    'name': 'Vietnamese Dong',
    'sign': '₫',
    'symbol': 'VND'
  },
  {
    'id': 2824,
    'name': 'Ukrainian Hryvnia',
    'sign': '₴',
    'symbol': 'UAH'
  },
  {
    'id': 2832,
    'name': 'Bolivian Boliviano',
    'sign': 'Bs.',
    'symbol': 'BOB'
  },
  {
    'id': 3526,
    'name': 'Albanian Lek',
    'sign': 'L',
    'symbol': 'ALL'
  },
  {
    'id': 3527,
    'name': 'Armenian Dram',
    'sign': '֏',
    'symbol': 'AMD'
  },
  {
    'id': 3528,
    'name': 'Azerbaijani Manat',
    'sign': '₼',
    'symbol': 'AZN'
  },
  {
    'id': 3529,
    'name': 'Bosnia-Herzegovina Convertible Mark',
    'sign': 'KM',
    'symbol': 'BAM'
  },
  {
    'id': 3530,
    'name': 'Bangladeshi Taka',
    'sign': '৳',
    'symbol': 'BDT'
  },
  {
    'id': 3531,
    'name': 'Bahraini Dinar',
    'sign': '.د.ب',
    'symbol': 'BHD'
  },
  {
    'id': 3532,
    'name': 'Bermudan Dollar',
    'sign': '$',
    'symbol': 'BMD'
  },
  {
    'id': 3533,
    'name': 'Belarusian Ruble',
    'sign': 'Br',
    'symbol': 'BYN'
  },
  {
    'id': 3534,
    'name': 'Costa Rican Colón',
    'sign': '₡',
    'symbol': 'CRC'
  },
  {
    'id': 3535,
    'name': 'Cuban Peso',
    'sign': '$',
    'symbol': 'CUP'
  },
  {
    'id': 3536,
    'name': 'Dominican Peso',
    'sign': '$',
    'symbol': 'DOP'
  },
  {
    'id': 3537,
    'name': 'Algerian Dinar',
    'sign': 'د.ج',
    'symbol': 'DZD'
  },
  {
    'id': 3538,
    'name': 'Egyptian Pound',
    'sign': '£',
    'symbol': 'EGP'
  },
  {
    'id': 3539,
    'name': 'Georgian Lari',
    'sign': '₾',
    'symbol': 'GEL'
  },
  {
    'id': 3540,
    'name': 'Ghanaian Cedi',
    'sign': '₵',
    'symbol': 'GHS'
  },
  {
    'id': 3541,
    'name': 'Guatemalan Quetzal',
    'sign': 'Q',
    'symbol': 'GTQ'
  },
  {
    'id': 3542,
    'name': 'Honduran Lempira',
    'sign': 'L',
    'symbol': 'HNL'
  },
  {
    'id': 3543,
    'name': 'Iraqi Dinar',
    'sign': 'ع.د',
    'symbol': 'IQD'
  },
  {
    'id': 3544,
    'name': 'Iranian Rial',
    'sign': '﷼',
    'symbol': 'IRR'
  },
  {
    'id': 3545,
    'name': 'Jamaican Dollar',
    'sign': '$',
    'symbol': 'JMD'
  },
  {
    'id': 3546,
    'name': 'Jordanian Dinar',
    'sign': 'د.ا',
    'symbol': 'JOD'
  },
  {
    'id': 3547,
    'name': 'Kenyan Shilling',
    'sign': 'Sh',
    'symbol': 'KES'
  },
  {
    'id': 3548,
    'name': 'Kyrgystani Som',
    'sign': 'с',
    'symbol': 'KGS'
  },
  {
    'id': 3549,
    'name': 'Cambodian Riel',
    'sign': '៛',
    'symbol': 'KHR'
  },
  {
    'id': 3550,
    'name': 'Kuwaiti Dinar',
    'sign': 'د.ك',
    'symbol': 'KWD'
  },
  {
    'id': 3551,
    'name': 'Kazakhstani Tenge',
    'sign': '₸',
    'symbol': 'KZT'
  },
  {
    'id': 3552,
    'name': 'Lebanese Pound',
    'sign': 'ل.ل',
    'symbol': 'LBP'
  },
  {
    'id': 3553,
    'name': 'Sri Lankan Rupee',
    'sign': 'Rs',
    'symbol': 'LKR'
  },
  {
    'id': 3554,
    'name': 'Moroccan Dirham',
    'sign': 'د.م.',
    'symbol': 'MAD'
  },
  {
    'id': 3555,
    'name': 'Moldovan Leu',
    'sign': 'L',
    'symbol': 'MDL'
  },
  {
    'id': 3556,
    'name': 'Macedonian Denar',
    'sign': 'ден',
    'symbol': 'MKD'
  },
  {
    'id': 3557,
    'name': 'Myanma Kyat',
    'sign': 'Ks',
    'symbol': 'MMK'
  },
  {
    'id': 3558,
    'name': 'Mongolian Tugrik',
    'sign': '₮',
    'symbol': 'MNT'
  },
  {
    'id': 3559,
    'name': 'Namibian Dollar',
    'sign': '$',
    'symbol': 'NAD'
  },
  {
    'id': 3560,
    'name': 'Nicaraguan Córdoba',
    'sign': 'C$',
    'symbol': 'NIO'
  },
  {
    'id': 3561,
    'name': 'Nepalese Rupee',
    'sign': '₨',
    'symbol': 'NPR'
  },
  {
    'id': 3562,
    'name': 'Omani Rial',
    'sign': 'ر.ع.',
    'symbol': 'OMR'
  },
  {
    'id': 3563,
    'name': 'Panamanian Balboa',
    'sign': 'B/.',
    'symbol': 'PAB'
  },
  {
    'id': 3564,
    'name': 'Qatari Rial',
    'sign': 'ر.ق',
    'symbol': 'QAR'
  },
  {
    'id': 3565,
    'name': 'Serbian Dinar',
    'sign': 'дин.',
    'symbol': 'RSD'
  },
  {
    'id': 3566,
    'name': 'Saudi Riyal',
    'sign': 'ر.س',
    'symbol': 'SAR'
  },
  {
    'id': 3567,
    'name': 'South Sudanese Pound',
    'sign': '£',
    'symbol': 'SSP'
  },
  {
    'id': 3568,
    'name': 'Tunisian Dinar',
    'sign': 'د.ت',
    'symbol': 'TND'
  },
  {
    'id': 3569,
    'name': 'Trinidad and Tobago Dollar',
    'sign': '$',
    'symbol': 'TTD'
  },
  {
    'id': 3570,
    'name': 'Ugandan Shilling',
    'sign': 'Sh',
    'symbol': 'UGX'
  },
  {
    'id': 3571,
    'name': 'Uruguayan Peso',
    'sign': '$',
    'symbol': 'UYU'
  },
  {
    'id': 3572,
    'name': 'Uzbekistan Som',
    'sign': 'so\'m',
    'symbol': 'UZS'
  },
  {
    'id': 3573,
    'name': 'Sovereign Bolivar',
    'sign': 'Bs.',
    'symbol': 'VES'
  }
];

const cryptoMap = [
	{
		'id': 1,
		'name': 'Bitcoin',
		'slug': 'bitcoin',
		'symbol': 'BTC'
	},
	{
		'id': 1027,
		'name': 'Ethereum',
		'slug': 'ethereum',
		'symbol': 'ETH'
	},
	{
		'id': 825,
		'name': 'Tether',
		'slug': 'tether',
		'symbol': 'USDT'
	},
	{
		'id': 1839,
		'name': 'BNB',
		'slug': 'bnb',
		'symbol': 'BNB'
	},
	{
		'id': 3408,
		'name': 'USD Coin',
		'slug': 'usd-coin',
		'symbol': 'USDC'
	},
	{
		'id': 52,
		'name': 'XRP',
		'slug': 'xrp',
		'symbol': 'XRP'
	},
	{
		'id': 4687,
		'name': 'Binance USD',
		'slug': 'binance-usd',
		'symbol': 'BUSD'
	},
	{
		'id': 2010,
		'name': 'Cardano',
		'slug': 'cardano',
		'symbol': 'ADA'
	},
	{
		'id': 74,
		'name': 'Dogecoin',
		'slug': 'dogecoin',
		'symbol': 'DOGE'
	},
	{
		'id': 3890,
		'name': 'Polygon',
		'slug': 'polygon',
		'symbol': 'MATIC'
	},
	{
		'id': 5426,
		'name': 'Solana',
		'slug': 'solana',
		'symbol': 'SOL'
	},
	{
		'id': 6636,
		'name': 'Polkadot',
		'slug': 'polkadot-new',
		'symbol': 'DOT'
	},
	{
		'id': 5994,
		'name': 'Shiba Inu',
		'slug': 'shiba-inu',
		'symbol': 'SHIB'
	},
	{
		'id': 2,
		'name': 'Litecoin',
		'slug': 'litecoin',
		'symbol': 'LTC'
	},
	{
		'id': 4943,
		'name': 'Dai',
		'slug': 'multi-collateral-dai',
		'symbol': 'DAI'
	},
	{
		'id': 1958,
		'name': 'TRON',
		'slug': 'tron',
		'symbol': 'TRX'
	},
	{
		'id': 5805,
		'name': 'Avalanche',
		'slug': 'avalanche',
		'symbol': 'AVAX'
	},
	{
		'id': 7083,
		'name': 'Uniswap',
		'slug': 'uniswap',
		'symbol': 'UNI'
	},
	{
		'id': 3717,
		'name': 'Wrapped Bitcoin',
		'slug': 'wrapped-bitcoin',
		'symbol': 'WBTC'
	},
	{
		'id': 3794,
		'name': 'Cosmos',
		'slug': 'cosmos',
		'symbol': 'ATOM'
	},
	{
		'id': 1975,
		'name': 'Chainlink',
		'slug': 'chainlink',
		'symbol': 'LINK'
	},
	{
		'id': 3957,
		'name': 'UNUS SED LEO',
		'slug': 'unus-sed-leo',
		'symbol': 'LEO'
	},
	{
		'id': 328,
		'name': 'Monero',
		'slug': 'monero',
		'symbol': 'XMR'
	},
	{
		'id': 1321,
		'name': 'Ethereum Classic',
		'slug': 'ethereum-classic',
		'symbol': 'ETC'
	},
	{
		'id': 11419,
		'name': 'Toncoin',
		'slug': 'toncoin',
		'symbol': 'TON'
	},
	{
		'id': 21794,
		'name': 'Aptos',
		'slug': 'aptos',
		'symbol': 'APT'
	},
	{
		'id': 1831,
		'name': 'Bitcoin Cash',
		'slug': 'bitcoin-cash',
		'symbol': 'BCH'
	},
	{
		'id': 512,
		'name': 'Stellar',
		'slug': 'stellar',
		'symbol': 'XLM'
	},
	{
		'id': 18876,
		'name': 'ApeCoin',
		'slug': 'apecoin-ape',
		'symbol': 'APE'
	},
	{
		'id': 3897,
		'name': 'OKB',
		'slug': 'okb',
		'symbol': 'OKB'
	},
	{
		'id': 6535,
		'name': 'NEAR Protocol',
		'slug': 'near-protocol',
		'symbol': 'NEAR'
	},
	{
		'id': 3635,
		'name': 'Cronos',
		'slug': 'cronos',
		'symbol': 'CRO'
	},
	{
		'id': 2280,
		'name': 'Filecoin',
		'slug': 'filecoin',
		'symbol': 'FIL'
	},
	{
		'id': 8000,
		'name': 'Lido DAO',
		'slug': 'lido-dao',
		'symbol': 'LDO'
	},
	{
		'id': 3155,
		'name': 'Quant',
		'slug': 'quant',
		'symbol': 'QNT'
	},
	{
		'id': 4030,
		'name': 'Algorand',
		'slug': 'algorand',
		'symbol': 'ALGO'
	},
	{
		'id': 3077,
		'name': 'VeChain',
		'slug': 'vechain',
		'symbol': 'VET'
	},
	{
		'id': 4642,
		'name': 'Hedera',
		'slug': 'hedera',
		'symbol': 'HBAR'
	},
	{
		'id': 8916,
		'name': 'Internet Computer',
		'slug': 'internet-computer',
		'symbol': 'ICP'
	},
	{
		'id': 3513,
		'name': 'Fantom',
		'slug': 'fantom',
		'symbol': 'FTM'
	},
	{
		'id': 1966,
		'name': 'Decentraland',
		'slug': 'decentraland',
		'symbol': 'MANA'
	},
	{
		'id': 7278,
		'name': 'Aave',
		'slug': 'aave',
		'symbol': 'AAVE'
	},
	{
		'id': 11221,
		'name': 'BitDAO',
		'slug': 'bitdao',
		'symbol': 'BIT'
	},
	{
		'id': 1765,
		'name': 'EOS',
		'slug': 'eos',
		'symbol': 'EOS'
	},
	{
		'id': 4558,
		'name': 'Flow',
		'slug': 'flow',
		'symbol': 'FLOW'
	},
	{
		'id': 6783,
		'name': 'Axie Infinity',
		'slug': 'axie-infinity',
		'symbol': 'AXS'
	},
	{
		'id': 2416,
		'name': 'Theta Network',
		'slug': 'theta-network',
		'symbol': 'THETA'
	},
	{
		'id': 6210,
		'name': 'The Sandbox',
		'slug': 'the-sandbox',
		'symbol': 'SAND'
	},
	{
		'id': 6892,
		'name': 'MultiversX',
		'slug': 'multiversx-egld',
		'symbol': 'EGLD'
	},
	{
		'id': 4172,
		'name': 'Terra Classic',
		'slug': 'terra-luna',
		'symbol': 'LUNC'
	},
	{
		'id': 2011,
		'name': 'Tezos',
		'slug': 'tezos',
		'symbol': 'XTZ'
	},
	{
		'id': 2563,
		'name': 'TrueUSD',
		'slug': 'trueusd',
		'symbol': 'TUSD'
	},
	{
		'id': 4066,
		'name': 'Chiliz',
		'slug': 'chiliz',
		'symbol': 'CHZ'
	},
	{
		'id': 3330,
		'name': 'Pax Dollar',
		'slug': 'paxos-standard',
		'symbol': 'USDP'
	},
	{
		'id': 3602,
		'name': 'Bitcoin SV',
		'slug': 'bitcoin-sv',
		'symbol': 'BSV'
	},
	{
		'id': 2502,
		'name': 'Huobi Token',
		'slug': 'huobi-token',
		'symbol': 'HT'
	},
	{
		'id': 6719,
		'name': 'The Graph',
		'slug': 'the-graph',
		'symbol': 'GRT'
	},
	{
		'id': 2087,
		'name': 'KuCoin Token',
		'slug': 'kucoin-token',
		'symbol': 'KCS'
	},
	{
		'id': 10791,
		'name': 'eCash',
		'slug': 'ecash',
		'symbol': 'XEC'
	},
	{
		'id': 1437,
		'name': 'Zcash',
		'slug': 'zcash',
		'symbol': 'ZEC'
	},
	{
		'id': 6953,
		'name': 'Frax Share',
		'slug': 'frax-share',
		'symbol': 'FXS'
	},
	{
		'id': 19891,
		'name': 'USDD',
		'slug': 'usdd',
		'symbol': 'USDD'
	},
	{
		'id': 6538,
		'name': 'Curve DAO Token',
		'slug': 'curve-dao-token',
		'symbol': 'CRV'
	},
	{
		'id': 16086,
		'name': 'BitTorrent-New',
		'slug': 'bittorrent-new',
		'symbol': 'BTT'
	},
	{
		'id': 1720,
		'name': 'IOTA',
		'slug': 'iota',
		'symbol': 'MIOTA'
	},
	{
		'id': 7186,
		'name': 'PancakeSwap',
		'slug': 'pancakeswap',
		'symbol': 'CAKE'
	},
	{
		'id': 1518,
		'name': 'Maker',
		'slug': 'maker',
		'symbol': 'MKR'
	},
	{
		'id': 5964,
		'name': 'Trust Wallet Token',
		'slug': 'trust-wallet-token',
		'symbol': 'TWT'
	},
	{
		'id': 4256,
		'name': 'Klaytn',
		'slug': 'klaytn',
		'symbol': 'KLAY'
	},
	{
		'id': 2586,
		'name': 'Synthetix',
		'slug': 'synthetix',
		'symbol': 'SNX'
	},
	{
		'id': 3306,
		'name': 'Gemini Dollar',
		'slug': 'gemini-dollar',
		'symbol': 'GUSD'
	},
	{
		'id': 4157,
		'name': 'THORChain',
		'slug': 'thorchain',
		'symbol': 'RUNE'
	},
	{
		'id': 1376,
		'name': 'Neo',
		'slug': 'neo',
		'symbol': 'NEO'
	},
	{
		'id': 131,
		'name': 'Dash',
		'slug': 'dash',
		'symbol': 'DASH'
	},
	{
		'id': 8646,
		'name': 'Mina',
		'slug': 'mina',
		'symbol': 'MINA'
	},
	{
		'id': 10603,
		'name': 'ImmutableX',
		'slug': 'immutable-x',
		'symbol': 'IMX'
	},
	{
		'id': 4705,
		'name': 'PAX Gold',
		'slug': 'pax-gold',
		'symbol': 'PAXG'
	},
	{
		'id': 11840,
		'name': 'Optimism',
		'slug': 'optimism-ethereum',
		'symbol': 'OP'
	},
	{
		'id': 12220,
		'name': 'Osmosis',
		'slug': 'osmosis',
		'symbol': 'OSMO'
	},
	{
		'id': 2694,
		'name': 'Nexo',
		'slug': 'nexo',
		'symbol': 'NEXO'
	},
	{
		'id': 2469,
		'name': 'Zilliqa',
		'slug': 'zilliqa',
		'symbol': 'ZIL'
	},
	{
		'id': 4269,
		'name': 'GateToken',
		'slug': 'gatetoken',
		'symbol': 'GT'
	},
	{
		'id': 20314,
		'name': 'Terra',
		'slug': 'terra-luna-v2',
		'symbol': 'LUNA'
	},
	{
		'id': 11857,
		'name': 'GMX',
		'slug': 'gmx',
		'symbol': 'GMX'
	},
	{
		'id': 8642,
		'name': 'Fei USD',
		'slug': 'fei-usd',
		'symbol': 'FEI'
	},
	{
		'id': 8104,
		'name': '1inch Network',
		'slug': '1inch',
		'symbol': '1INCH'
	},
	{
		'id': 2130,
		'name': 'Enjin Coin',
		'slug': 'enjin-coin',
		'symbol': 'ENJ'
	},
	{
		'id': 1934,
		'name': 'Loopring',
		'slug': 'loopring',
		'symbol': 'LRC'
	},
	{
		'id': 2682,
		'name': 'Holo',
		'slug': 'holo',
		'symbol': 'HOT'
	},
	{
		'id': 17751,
		'name': 'Threshold',
		'slug': 'threshold',
		'symbol': 'T'
	},
	{
		'id': 21296,
		'name': 'EthereumPoW',
		'slug': 'ethereum-pow',
		'symbol': 'ETHW'
	},
	{
		'id': 4846,
		'name': 'Kava',
		'slug': 'kava',
		'symbol': 'KAVA'
	},
	{
		'id': 2943,
		'name': 'Rocket Pool',
		'slug': 'rocket-pool',
		'symbol': 'RPL'
	},
	{
		'id': 5665,
		'name': 'Helium',
		'slug': 'helium',
		'symbol': 'HNT'
	},
	{
		'id': 5692,
		'name': 'Compound',
		'slug': 'compound',
		'symbol': 'COMP'
	},
	{
		'id': 1697,
		'name': 'Basic Attention Token',
		'slug': 'basic-attention-token',
		'symbol': 'BAT'
	},
	{
		'id': 4847,
		'name': 'Stacks',
		'slug': 'stacks',
		'symbol': 'STX'
	},
	{
		'id': 5567,
		'name': 'Celo',
		'slug': 'celo',
		'symbol': 'CELO'
	},
	{
		'id': 9903,
		'name': 'Convex Finance',
		'slug': 'convex-finance',
		'symbol': 'CVX'
	},
	{
		'id': 5899,
		'name': 'Casper',
		'slug': 'casper',
		'symbol': 'CSPR'
	},
	{
		'id': 2577,
		'name': 'Ravencoin',
		'slug': 'ravencoin',
		'symbol': 'RVN'
	},
	{
		'id': 2634,
		'name': 'XDC Network',
		'slug': 'xinfin',
		'symbol': 'XDC'
	},
	{
		'id': 18069,
		'name': 'STEPN',
		'slug': 'green-metaverse-token',
		'symbol': 'GMT'
	},
	{
		'id': 873,
		'name': 'NEM',
		'slug': 'nem',
		'symbol': 'XEM'
	},
	{
		'id': 3822,
		'name': 'Theta Fuel',
		'slug': 'theta-fuel',
		'symbol': 'TFUEL'
	},
	{
		'id': 1168,
		'name': 'Decred',
		'slug': 'decred',
		'symbol': 'DCR'
	},
	{
		'id': 7080,
		'name': 'Gala',
		'slug': 'gala',
		'symbol': 'GALA'
	},
	{
		'id': 5632,
		'name': 'Arweave',
		'slug': 'arweave',
		'symbol': 'AR'
	},
	{
		'id': 11156,
		'name': 'dYdX',
		'slug': 'dydx',
		'symbol': 'DYDX'
	},
	{
		'id': 13855,
		'name': 'Ethereum Name Service',
		'slug': 'ethereum-name-service',
		'symbol': 'ENS'
	},
	{
		'id': 5728,
		'name': 'Balancer',
		'slug': 'balancer',
		'symbol': 'BAL'
	},
	{
		'id': 7653,
		'name': 'Oasis Network',
		'slug': 'oasis-network',
		'symbol': 'ROSE'
	},
	{
		'id': 7501,
		'name': 'WOO Network',
		'slug': 'wootrade',
		'symbol': 'WOO'
	},
	{
		'id': 2083,
		'name': 'Bitcoin Gold',
		'slug': 'bitcoin-gold',
		'symbol': 'BTG'
	},
	{
		'id': 2777,
		'name': 'IoTeX',
		'slug': 'iotex',
		'symbol': 'IOTX'
	},
	{
		'id': 5034,
		'name': 'Kusama',
		'slug': 'kusama',
		'symbol': 'KSM'
	},
	{
		'id': 9258,
		'name': 'Chia',
		'slug': 'chia-network',
		'symbol': 'XCH'
	},
	{
		'id': 6758,
		'name': 'SushiSwap',
		'slug': 'sushiswap',
		'symbol': 'SUSHI'
	},
	{
		'id': 1274,
		'name': 'Waves',
		'slug': 'waves',
		'symbol': 'WAVES'
	},
	{
		'id': 7455,
		'name': 'Audius',
		'slug': 'audius',
		'symbol': 'AUDIO'
	},
	{
		'id': 1684,
		'name': 'Qtum',
		'slug': 'qtum',
		'symbol': 'QTUM'
	},
	{
		'id': 5864,
		'name': 'yearn.finance',
		'slug': 'yearn-finance',
		'symbol': 'YFI'
	},
	{
		'id': 5647,
		'name': 'Kadena',
		'slug': 'kadena',
		'symbol': 'KDA'
	},
	{
		'id': 1659,
		'name': 'Gnosis',
		'slug': 'gnosis-gno',
		'symbol': 'GNO'
	},
	{
		'id': 6836,
		'name': 'Moonbeam',
		'slug': 'moonbeam',
		'symbol': 'GLMR'
	},
	{
		'id': 14783,
		'name': 'MAGIC',
		'slug': 'magic-token',
		'symbol': 'MAGIC'
	},
	{
		'id': 3783,
		'name': 'Ankr',
		'slug': 'ankr',
		'symbol': 'ANKR'
	},
	{
		'id': 8677,
		'name': 'Symbol',
		'slug': 'symbol',
		'symbol': 'XYM'
	},
	{
		'id': 3945,
		'name': 'Harmony',
		'slug': 'harmony',
		'symbol': 'ONE'
	},
	{
		'id': 5488,
		'name': 'JUST',
		'slug': 'just',
		'symbol': 'JST'
	},
	{
		'id': 18679,
		'name': 'Chain',
		'slug': 'chain',
		'symbol': 'XCN'
	},
	{
		'id': 9891,
		'name': 'BinaryX',
		'slug': 'binaryx',
		'symbol': 'BNX'
	},
	{
		'id': 1455,
		'name': 'Golem',
		'slug': 'golem-network-tokens',
		'symbol': 'GLM'
	},
	{
		'id': 8425,
		'name': 'JasmyCoin',
		'slug': 'jasmy',
		'symbol': 'JASMY'
	},
	{
		'id': 3911,
		'name': 'Ocean Protocol',
		'slug': 'ocean-protocol',
		'symbol': 'OCEAN'
	},
	{
		'id': 12885,
		'name': 'Astar',
		'slug': 'astar',
		'symbol': 'ASTR'
	},
	{
		'id': 2499,
		'name': 'SwissBorg',
		'slug': 'swissborg',
		'symbol': 'CHSB'
	},
	{
		'id': 3773,
		'name': 'Fetch.ai',
		'slug': 'fetch',
		'symbol': 'FET'
	},
	{
		'id': 3029,
		'name': 'Flux',
		'slug': 'zel',
		'symbol': 'FLUX'
	},
	{
		'id': 11865,
		'name': 'Bone ShibaSwap',
		'slug': 'bone-shibaswap',
		'symbol': 'BONE'
	},
	{
		'id': 5068,
		'name': 'Neutrino USD',
		'slug': 'neutrino-usd',
		'symbol': 'USDN'
	},
	{
		'id': 5690,
		'name': 'Render Token',
		'slug': 'render-token',
		'symbol': 'RNDR'
	},
	{
		'id': 7129,
		'name': 'TerraClassicUSD',
		'slug': 'terrausd',
		'symbol': 'USTC'
	},
	{
		'id': 8536,
		'name': 'Mask Network',
		'slug': 'mask-network',
		'symbol': 'MASK'
	},
	{
		'id': 1808,
		'name': 'OMG Network',
		'slug': 'omg',
		'symbol': 'OMG'
	},
	{
		'id': 2099,
		'name': 'ICON',
		'slug': 'icon',
		'symbol': 'ICX'
	},
	{
		'id': 2424,
		'name': 'SingularityNET',
		'slug': 'singularitynet',
		'symbol': 'AGIX'
	},
	{
		'id': 3640,
		'name': 'Livepeer',
		'slug': 'livepeer',
		'symbol': 'LPT'
	},
	{
		'id': 1896,
		'name': '0x',
		'slug': '0x',
		'symbol': 'ZRX'
	},
	{
		'id': 6945,
		'name': 'Amp',
		'slug': 'amp',
		'symbol': 'AMP'
	},
	{
		'id': 5566,
		'name': 'Keep Network',
		'slug': 'keep-network',
		'symbol': 'KEEP'
	},
	{
		'id': 5370,
		'name': 'Hive',
		'slug': 'hive-blockchain',
		'symbol': 'HIVE'
	},
	{
		'id': 2405,
		'name': 'IOST',
		'slug': 'iostoken',
		'symbol': 'IOST'
	},
	{
		'id': 2566,
		'name': 'Ontology',
		'slug': 'ontology',
		'symbol': 'ONT'
	},
	{
		'id': 3964,
		'name': 'Reserve Rights',
		'slug': 'reserve-rights',
		'symbol': 'RSR'
	},
	{
		'id': 7226,
		'name': 'Injective',
		'slug': 'injective',
		'symbol': 'INJ'
	},
	{
		'id': 9543,
		'name': 'Biconomy',
		'slug': 'biconomy',
		'symbol': 'BICO'
	},
	{
		'id': 2496,
		'name': 'Polymath',
		'slug': 'polymath-network',
		'symbol': 'POLY'
	},
	{
		'id': 9436,
		'name': 'Dogelon Mars',
		'slug': 'dogelon',
		'symbol': 'ELON'
	},
	{
		'id': 22764,
		'name': 'Hooked Protocol',
		'slug': 'hooked-protocol',
		'symbol': 'HOOK'
	},
	{
		'id': 3801,
		'name': 'BORA',
		'slug': 'bora',
		'symbol': 'BORA'
	},
	{
		'id': 109,
		'name': 'DigiByte',
		'slug': 'digibyte',
		'symbol': 'DGB'
	},
	{
		'id': 1042,
		'name': 'Siacoin',
		'slug': 'siacoin',
		'symbol': 'SC'
	},
	{
		'id': 12999,
		'name': 'ssv.network',
		'slug': 'ssv-network',
		'symbol': 'SSV'
	},
	{
		'id': 4279,
		'name': 'SXP',
		'slug': 'sxp',
		'symbol': 'SXP'
	},
	{
		'id': 2300,
		'name': 'WAX',
		'slug': 'wax',
		'symbol': 'WAXP'
	},
	{
		'id': 1772,
		'name': 'Storj',
		'slug': 'storj',
		'symbol': 'STORJ'
	},
	{
		'id': 8119,
		'name': 'SafePal',
		'slug': 'safepal',
		'symbol': 'SFP'
	},
	{
		'id': 5691,
		'name': 'SKALE',
		'slug': 'skale-network',
		'symbol': 'SKL'
	},
	{
		'id': 14806,
		'name': 'ConstitutionDAO',
		'slug': 'constitutiondao',
		'symbol': 'PEOPLE'
	},
	{
		'id': 7334,
		'name': 'Conflux',
		'slug': 'conflux-network',
		'symbol': 'CFX'
	},
	{
		'id': 2700,
		'name': 'Celsius',
		'slug': 'celsius',
		'symbol': 'CEL'
	},
	{
		'id': 11584,
		'name': 'Braintrust',
		'slug': 'braintrust',
		'symbol': 'BTRST'
	},
	{
		'id': 5617,
		'name': 'UMA',
		'slug': 'uma',
		'symbol': 'UMA'
	},
	{
		'id': 1637,
		'name': 'iExec RLC',
		'slug': 'rlc',
		'symbol': 'RLC'
	},
	{
		'id': 1698,
		'name': 'Horizen',
		'slug': 'horizen',
		'symbol': 'ZEN'
	},
	{
		'id': 12387,
		'name': 'Ribbon Finance',
		'slug': 'ribbon-finance',
		'symbol': 'RBN'
	},
	{
		'id': 13523,
		'name': 'Merit Circle',
		'slug': 'merit-circle',
		'symbol': 'MC'
	},
	{
		'id': 9444,
		'name': 'Kyber Network Crystal v2',
		'slug': 'kyber-network-crystal-v2',
		'symbol': 'KNC'
	},
	{
		'id': 5824,
		'name': 'Smooth Love Potion',
		'slug': 'smooth-love-potion',
		'symbol': 'SLP'
	},
	{
		'id': 9816,
		'name': 'APENFT',
		'slug': 'apenft',
		'symbol': 'NFT'
	},
	{
		'id': 8420,
		'name': 'DAO Maker',
		'slug': 'dao-maker',
		'symbol': 'DAO'
	},
	{
		'id': 5604,
		'name': 'Secret',
		'slug': 'secret',
		'symbol': 'SCRT'
	},
	{
		'id': 3992,
		'name': 'COTI',
		'slug': 'coti',
		'symbol': 'COTI'
	},
	{
		'id': 4948,
		'name': 'Nervos Network',
		'slug': 'nervos-network',
		'symbol': 'CKB'
	},
	{
		'id': 9640,
		'name': 'MetisDAO',
		'slug': 'metisdao',
		'symbol': 'METIS'
	},
	{
		'id': 4761,
		'name': 'NuCypher',
		'slug': 'nucypher',
		'symbol': 'NU'
	},
	{
		'id': 1214,
		'name': 'Lisk',
		'slug': 'lisk',
		'symbol': 'LSK'
	},
	{
		'id': 7461,
		'name': 'PlayDapp',
		'slug': 'playdapp',
		'symbol': 'PLA'
	},
	{
		'id': 8719,
		'name': 'Illuvium',
		'slug': 'illuvium',
		'symbol': 'ILV'
	},
	{
		'id': 3814,
		'name': 'Celer Network',
		'slug': 'celer-network',
		'symbol': 'CELR'
	},
	{
		'id': 7737,
		'name': 'API3',
		'slug': 'api3',
		'symbol': 'API3'
	},
	{
		'id': 1680,
		'name': 'Aragon',
		'slug': 'aragon',
		'symbol': 'ANT'
	},
	{
		'id': 541,
		'name': 'Syscoin',
		'slug': 'syscoin',
		'symbol': 'SYS'
	},
	{
		'id': 3978,
		'name': 'Chromia',
		'slug': 'chromia',
		'symbol': 'CHR'
	},
	{
		'id': 9040,
		'name': 'Pundi X (New)',
		'slug': 'pundix-new',
		'symbol': 'PUNDIX'
	},
	{
		'id': 11877,
		'name': 'Galxe',
		'slug': 'galxe',
		'symbol': 'GAL'
	},
	{
		'id': 9025,
		'name': 'Tribe',
		'slug': 'tribe',
		'symbol': 'TRIBE'
	},
	{
		'id': 1817,
		'name': 'Voyager Token',
		'slug': 'voyager-token',
		'symbol': 'VGX'
	},
	{
		'id': 12147,
		'name': 'Synapse',
		'slug': 'synapse-2',
		'symbol': 'SYN'
	},
	{
		'id': 18579,
		'name': 'Wrapped TRON',
		'slug': 'wrapped-tron',
		'symbol': 'WTRX'
	},
	{
		'id': 8085,
		'name': 'Lido Staked ETH',
		'slug': 'steth',
		'symbol': 'stETH'
	},
	{
		'id': 5015,
		'name': 'HEX',
		'slug': 'hex',
		'symbol': 'HEX'
	},
	{
		'id': 4023,
		'name': 'Bitcoin BEP2',
		'slug': 'bitcoin-bep2',
		'symbol': 'BTCB'
	},
	{
		'id': 7192,
		'name': 'Wrapped BNB',
		'slug': 'wbnb',
		'symbol': 'WBNB'
	},
	{
		'id': 6952,
		'name': 'Frax',
		'slug': 'frax',
		'symbol': 'FRAX'
	},
	{
		'id': 6941,
		'name': 'Huobi BTC',
		'slug': 'huobi-btc',
		'symbol': 'HBTC'
	},
	{
		'id': 3718,
		'name': 'BitTorrent',
		'slug': 'bittorrent',
		'symbol': 'BTTOLD'
	},
	{
		'id': 4195,
		'name': 'FTX Token',
		'slug': 'ftx-token',
		'symbol': 'FTT'
	},
	{
		'id': 5524,
		'name': 'TNC Coin',
		'slug': 'tnc-coin',
		'symbol': 'TNC'
	},
	{
		'id': 5176,
		'name': 'Tether Gold',
		'slug': 'tether-gold',
		'symbol': 'XAUT'
	},
	{
		'id': 11948,
		'name': 'Radix',
		'slug': 'radix-protocol',
		'symbol': 'XRD'
	},
	{
		'id': 22538,
		'name': 'T-mac DAO',
		'slug': 't-mac-dao',
		'symbol': 'TMG'
	},
	{
		'id': 5830,
		'name': 'NXM',
		'slug': 'nxm',
		'symbol': 'NXM'
	},
	{
		'id': 5446,
		'name': 'USDJ',
		'slug': 'usdj',
		'symbol': 'USDJ'
	},
	{
		'id': 11092,
		'name': 'Bitget Token',
		'slug': 'bitget-token-new',
		'symbol': 'BGB'
	},
	{
		'id': 4512,
		'name': 'LINK',
		'slug': 'link',
		'symbol': 'LN'
	},
	{
		'id': 17704,
		'name': 'GensoKishi Metaverse',
		'slug': 'gensokishis-metaverse',
		'symbol': 'MV'
	},
	{
		'id': 5804,
		'name': 'DeFiChain',
		'slug': 'defichain',
		'symbol': 'DFI'
	},
	{
		'id': 9566,
		'name': 'Liquity USD',
		'slug': 'liquity-usd',
		'symbol': 'LUSD'
	},
	{
		'id': 9466,
		'name': 'Edgecoin',
		'slug': 'edgecoin',
		'symbol': 'EDGT'
	},
	{
		'id': 7548,
		'name': 'WEMIX',
		'slug': 'wemix',
		'symbol': 'WEMIX'
	},
	{
		'id': 5892,
		'name': 'Anyswap',
		'slug': 'anyswap',
		'symbol': 'ANY'
	},
	{
		'id': 3855,
		'name': 'Locus Chain',
		'slug': 'locus-chain',
		'symbol': 'LOCUS'
	},
	{
		'id': 3987,
		'name': 'Beldex',
		'slug': 'beldex',
		'symbol': 'BDX'
	},
	{
		'id': 2394,
		'name': 'Telcoin',
		'slug': 'telcoin',
		'symbol': 'TEL'
	},
	{
		'id': 10407,
		'name': 'Baby Doge Coin',
		'slug': 'baby-doge-coin',
		'symbol': 'BabyDoge'
	},
	{
		'id': 11079,
		'name': 'Bitgert',
		'slug': 'bitrise-token',
		'symbol': 'BRISE'
	},
	{
		'id': 2989,
		'name': 'STASIS EURO',
		'slug': 'stasis-euro',
		'symbol': 'EURS'
	},
	{
		'id': 14519,
		'name': 'VVS Finance',
		'slug': 'vvs-finance',
		'symbol': 'VVS'
	},
	{
		'id': 5625,
		'name': 'LUKSO',
		'slug': 'lukso',
		'symbol': 'LYXe'
	},
	{
		'id': 16876,
		'name': 'Artificial Liquid Intelligence',
		'slug': 'alethea-artificial-liquid-intelligence-token',
		'symbol': 'ALI'
	},
	{
		'id': 5198,
		'name': 'Creditcoin',
		'slug': 'creditcoin',
		'symbol': 'CTC'
	},
	{
		'id': 10804,
		'name': 'FLOKI',
		'slug': 'floki-inu',
		'symbol': 'FLOKI'
	},
	{
		'id': 7232,
		'name': 'Alpha Venture DAO',
		'slug': 'alpha-finance-lab',
		'symbol': 'ALPHA'
	},
	{
		'id': 2071,
		'name': 'Request',
		'slug': 'request',
		'symbol': 'REQ'
	},
	{
		'id': 4679,
		'name': 'Band Protocol',
		'slug': 'band-protocol',
		'symbol': 'BAND'
	},
	{
		'id': 7817,
		'name': 'Bifrost',
		'slug': 'bifrost',
		'symbol': 'BFC'
	},
	{
		'id': 20362,
		'name': 'Polymesh',
		'slug': 'polymesh',
		'symbol': 'POLYX'
	},
	{
		'id': 1816,
		'name': 'Civic',
		'slug': 'civic',
		'symbol': 'CVC'
	},
	{
		'id': 2303,
		'name': 'MediBloc',
		'slug': 'medibloc',
		'symbol': 'MED'
	},
	{
		'id': 10052,
		'name': 'Gitcoin',
		'slug': 'gitcoin',
		'symbol': 'GTC'
	},
	{
		'id': 1759,
		'name': 'Status',
		'slug': 'status',
		'symbol': 'SNT'
	},
	{
		'id': 5268,
		'name': 'Energy Web Token',
		'slug': 'energy-web-token',
		'symbol': 'EWT'
	},
	{
		'id': 1567,
		'name': 'Nano',
		'slug': 'nano',
		'symbol': 'XNO'
	},
	{
		'id': 9308,
		'name': 'Vulcan Forged PYR',
		'slug': 'vulcan-forged-pyr',
		'symbol': 'PYR'
	},
	{
		'id': 7958,
		'name': 'Venus USDC',
		'slug': 'venus-usdc',
		'symbol': 'vUSDC'
	},
	{
		'id': 20513,
		'name': 'Saitama',
		'slug': 'saitama-inu-new',
		'symbol': 'SAITAMA'
	},
	{
		'id': 5444,
		'name': 'Cartesi',
		'slug': 'cartesi',
		'symbol': 'CTSI'
	},
	{
		'id': 3217,
		'name': 'Ontology Gas',
		'slug': 'ontology-gas',
		'symbol': 'ONG'
	},
	{
		'id': 1762,
		'name': 'Ergo',
		'slug': 'ergo',
		'symbol': 'ERG'
	},
	{
		'id': 22461,
		'name': 'Hashflow',
		'slug': 'hashflow',
		'symbol': 'HFT'
	},
	{
		'id': 2299,
		'name': 'aelf',
		'slug': 'aelf',
		'symbol': 'ELF'
	},
	{
		'id': 4950,
		'name': 'LCX',
		'slug': 'lcx',
		'symbol': 'LCX'
	},
	{
		'id': 7326,
		'name': 'DeXe',
		'slug': 'dexe',
		'symbol': 'DEXE'
	},
	{
		'id': 2856,
		'name': 'CEEK VR',
		'slug': 'ceek-vr',
		'symbol': 'CEEK'
	},
	{
		'id': 6187,
		'name': 'Serum',
		'slug': 'serum',
		'symbol': 'SRM'
	},
	{
		'id': 1732,
		'name': 'Numeraire',
		'slug': 'numeraire',
		'symbol': 'NMR'
	},
	{
		'id': 6651,
		'name': 'USDX [Kava]',
		'slug': 'usdx-kava',
		'symbol': 'USDX'
	},
	{
		'id': 20396,
		'name': 'Kaspa',
		'slug': 'kaspa',
		'symbol': 'KAS'
	},
	{
		'id': 3089,
		'name': 'AVINOC',
		'slug': 'avinoc',
		'symbol': 'AVINOC'
	},
	{
		'id': 17081,
		'name': 'LooksRare',
		'slug': 'looksrare',
		'symbol': 'LOOKS'
	},
	{
		'id': 7505,
		'name': 'Everscale',
		'slug': 'everscale',
		'symbol': 'EVER'
	},
	{
		'id': 6748,
		'name': 'Centrifuge',
		'slug': 'centrifuge',
		'symbol': 'CFG'
	},
	{
		'id': 3600,
		'name': 'Humanscape',
		'slug': 'humanscape',
		'symbol': 'HUM'
	},
	{
		'id': 18934,
		'name': 'Stargate Finance',
		'slug': 'stargate-finance',
		'symbol': 'STG'
	},
	{
		'id': 1886,
		'name': 'Dent',
		'slug': 'dent',
		'symbol': 'DENT'
	},
	{
		'id': 4041,
		'name': 'MX TOKEN',
		'slug': 'mx-token',
		'symbol': 'MX'
	},
	{
		'id': 9175,
		'name': 'MOBOX',
		'slug': 'mobox',
		'symbol': 'MBOX'
	},
	{
		'id': 20701,
		'name': 'Wrapped Everscale',
		'slug': 'wrapped-everscale',
		'symbol': 'WEVER'
	},
	{
		'id': 7281,
		'name': 'Persistence',
		'slug': 'persistence',
		'symbol': 'XPRT'
	},
	{
		'id': 4206,
		'name': 'WINkLink',
		'slug': 'wink',
		'symbol': 'WIN'
	},
	{
		'id': 1320,
		'name': 'Ardor',
		'slug': 'ardor',
		'symbol': 'ARDR'
	},
	{
		'id': 6843,
		'name': 'Radicle',
		'slug': 'radicle',
		'symbol': 'RAD'
	},
	{
		'id': 2982,
		'name': 'MVL',
		'slug': 'mvl',
		'symbol': 'MVL'
	},
	{
		'id': 3628,
		'name': 'MXC',
		'slug': 'mxc',
		'symbol': 'MXC'
	},
	{
		'id': 1343,
		'name': 'Stratis',
		'slug': 'stratis',
		'symbol': 'STRAX'
	},
	{
		'id': 2132,
		'name': 'Powerledger',
		'slug': 'power-ledger',
		'symbol': 'POWR'
	},
	{
		'id': 3795,
		'name': 'ZEON',
		'slug': 'zeon',
		'symbol': 'ZEON'
	},
	{
		'id': 10442,
		'name': 'Decentralized Social',
		'slug': 'deso',
		'symbol': 'DESO'
	},
	{
		'id': 2467,
		'name': 'OriginTrail',
		'slug': 'origintrail',
		'symbol': 'TRAC'
	},
	{
		'id': 2539,
		'name': 'Ren',
		'slug': 'ren',
		'symbol': 'REN'
	},
	{
		'id': 5908,
		'name': 'dKargo',
		'slug': 'dkargo',
		'symbol': 'DKA'
	},
	{
		'id': 1230,
		'name': 'Steem',
		'slug': 'steem',
		'symbol': 'STEEM'
	},
	{
		'id': 3835,
		'name': 'Orbs',
		'slug': 'orbs',
		'symbol': 'ORBS'
	},
	{
		'id': 3437,
		'name': 'ABBC Coin',
		'slug': 'abbc-coin',
		'symbol': 'ABBC'
	},
	{
		'id': 8335,
		'name': 'Mdex',
		'slug': 'mdex',
		'symbol': 'MDX'
	},
	{
		'id': 17799,
		'name': 'Axelar',
		'slug': 'axelar',
		'symbol': 'AXL'
	},
	{
		'id': 11374,
		'name': 'Mines of Dalarnia',
		'slug': 'mines-of-dalarnia',
		'symbol': 'DAR'
	},
	{
		'id': 5777,
		'name': 'renBTC',
		'slug': 'renbtc',
		'symbol': 'RENBTC'
	},
	{
		'id': 11289,
		'name': 'Spell Token',
		'slug': 'spell-token',
		'symbol': 'SPELL'
	},
	{
		'id': 7878,
		'name': 'MobileCoin',
		'slug': 'mobilecoin',
		'symbol': 'MOB'
	},
	{
		'id': 3951,
		'name': 'Pirate Chain',
		'slug': 'pirate-chain',
		'symbol': 'ARRR'
	},
	{
		'id': 1710,
		'name': 'Veritaseum',
		'slug': 'veritaseum',
		'symbol': 'VERI'
	},
	{
		'id': 2780,
		'name': 'NKN',
		'slug': 'nkn',
		'symbol': 'NKN'
	},
	{
		'id': 6756,
		'name': 'Acala Token',
		'slug': 'acala',
		'symbol': 'ACA'
	},
	{
		'id': 7497,
		'name': 'Marlin',
		'slug': 'marlin',
		'symbol': 'POND'
	},
	{
		'id': 4120,
		'name': 'Prom',
		'slug': 'prom',
		'symbol': 'PROM'
	},
	{
		'id': 3626,
		'name': 'RSK Smart Bitcoin',
		'slug': 'rsk-smart-bitcoin',
		'symbol': 'RBTC'
	},
	{
		'id': 10746,
		'name': 'Biswap',
		'slug': 'biswap',
		'symbol': 'BSW'
	},
	{
		'id': 2930,
		'name': 'IQ',
		'slug': 'iq',
		'symbol': 'IQ'
	},
	{
		'id': 2765,
		'name': 'XYO',
		'slug': 'xyo',
		'symbol': 'XYO'
	},
	{
		'id': 12400,
		'name': 'Decimal',
		'slug': 'decimal',
		'symbol': 'DEL'
	},
	{
		'id': 3884,
		'name': 'Function X',
		'slug': 'function-x',
		'symbol': 'FX'
	},
	{
		'id': 1757,
		'name': 'FUNToken',
		'slug': 'funtoken',
		'symbol': 'FUN'
	},
	{
		'id': 7288,
		'name': 'Venus',
		'slug': 'venus',
		'symbol': 'XVS'
	},
	{
		'id': 4006,
		'name': 'STP',
		'slug': 'standard-tokenization-protocol',
		'symbol': 'STPT'
	},
	{
		'id': 2868,
		'name': 'Constellation',
		'slug': 'constellation',
		'symbol': 'DAG'
	},
	{
		'id': 5266,
		'name': 'MiL.k',
		'slug': 'milk-alliance',
		'symbol': 'MLK'
	},
	{
		'id': 4189,
		'name': 'Ultra',
		'slug': 'ultra',
		'symbol': 'UOS'
	},
	{
		'id': 5161,
		'name': 'WazirX',
		'slug': 'wazirx',
		'symbol': 'WRX'
	},
	{
		'id': 2763,
		'name': 'Morpheus.Network',
		'slug': 'morpheus-network',
		'symbol': 'MNW'
	},
	{
		'id': 5841,
		'name': 'NEST Protocol',
		'slug': 'nest-protocol',
		'symbol': 'NEST'
	},
	{
		'id': 4807,
		'name': 'Shentu',
		'slug': 'shentu',
		'symbol': 'CTK'
	},
	{
		'id': 6951,
		'name': 'Reef',
		'slug': 'reef',
		'symbol': 'REEF'
	},
	{
		'id': 4747,
		'name': 'Velas',
		'slug': 'velas',
		'symbol': 'VLX'
	},
	{
		'id': 11346,
		'name': 'RACA',
		'slug': 'radio-caca',
		'symbol': 'RACA'
	},
	{
		'id': 5326,
		'name': 'Orbit Chain',
		'slug': 'orbit-chain',
		'symbol': 'ORC'
	},
	{
		'id': 11240,
		'name': 'HI',
		'slug': 'hi-dollar',
		'symbol': 'HI'
	},
	{
		'id': 268,
		'name': 'WhiteCoin',
		'slug': 'whitecoin',
		'symbol': 'XWC'
	},
	{
		'id': 8766,
		'name': 'MyNeighborAlice',
		'slug': 'myneighboralice',
		'symbol': 'ALICE'
	},
	{
		'id': 1727,
		'name': 'Bancor',
		'slug': 'bancor',
		'symbol': 'BNT'
	},
	{
		'id': 2840,
		'name': 'QuarkChain',
		'slug': 'quarkchain',
		'symbol': 'QKC'
	},
	{
		'id': 19076,
		'name': 'Wrapped Velas',
		'slug': 'wrapped-velas',
		'symbol': 'WVLX'
	},
	{
		'id': 3816,
		'name': 'Verasity',
		'slug': 'verasity',
		'symbol': 'VRA'
	},
	{
		'id': 6841,
		'name': 'Phala Network',
		'slug': 'phala-network',
		'symbol': 'PHA'
	},
	{
		'id': 3012,
		'name': 'VeThor Token',
		'slug': 'vethor-token',
		'symbol': 'VTHO'
	},
	{
		'id': 20672,
		'name': 'Clash of Lilliput',
		'slug': 'clash-of-lilliput',
		'symbol': 'COL'
	},
	{
		'id': 1788,
		'name': 'Metal DAO',
		'slug': 'metal',
		'symbol': 'MTL'
	},
	{
		'id': 1104,
		'name': 'Augur',
		'slug': 'augur',
		'symbol': 'REP'
	},
	{
		'id': 7411,
		'name': 'Covalent',
		'slug': 'covalent',
		'symbol': 'CQT'
	},
	{
		'id': 5279,
		'name': 'Sologenic',
		'slug': 'sologenic',
		'symbol': 'SOLO'
	},
	{
		'id': 11396,
		'name': 'JOE',
		'slug': 'joe',
		'symbol': 'JOE'
	},
	{
		'id': 2665,
		'name': 'Dero',
		'slug': 'dero',
		'symbol': 'DERO'
	},
	{
		'id': 5117,
		'name': 'Origin Protocol',
		'slug': 'origin-protocol',
		'symbol': 'OGN'
	},
	{
		'id': 9119,
		'name': 'Alien Worlds',
		'slug': 'alien-worlds',
		'symbol': 'TLM'
	},
	{
		'id': 2273,
		'name': 'Uquid Coin',
		'slug': 'uquid-coin',
		'symbol': 'UQC'
	},
	{
		'id': 13769,
		'name': 'World Mobile Token',
		'slug': 'world-mobile-token',
		'symbol': 'WMT'
	},
	{
		'id': 6216,
		'name': 'AXEL',
		'slug': 'axel',
		'symbol': 'AXEL'
	},
	{
		'id': 7242,
		'name': 'cVault.finance',
		'slug': 'cvault-finance',
		'symbol': 'CORE'
	},
	{
		'id': 10223,
		'name': 'Vega Protocol',
		'slug': 'vegaprotocol',
		'symbol': 'VEGA'
	},
	{
		'id': 4092,
		'name': 'Dusk Network',
		'slug': 'dusk-network',
		'symbol': 'DUSK'
	},
	{
		'id': 10641,
		'name': 'RichQUACK.com',
		'slug': 'richquack-com',
		'symbol': 'QUACK'
	},
	{
		'id': 291,
		'name': 'MaidSafeCoin',
		'slug': 'maidsafecoin',
		'symbol': 'MAID'
	},
	{
		'id': 5113,
		'name': 'inSure DeFi',
		'slug': 'insure',
		'symbol': 'SURE'
	},
	{
		'id': 7429,
		'name': 'Liquity',
		'slug': 'liquity',
		'symbol': 'LQTY'
	},
	{
		'id': 11307,
		'name': 'Beta Finance',
		'slug': 'beta-finance',
		'symbol': 'BETA'
	},
	{
		'id': 10631,
		'name': 'Gods Unchained',
		'slug': 'gods-unchained',
		'symbol': 'GODS'
	},
	{
		'id': 5026,
		'name': 'Orchid',
		'slug': 'orchid',
		'symbol': 'OXT'
	},
	{
		'id': 18031,
		'name': 'Concordium',
		'slug': 'concordium',
		'symbol': 'CCD'
	},
	{
		'id': 7959,
		'name': 'Venus BUSD',
		'slug': 'venus-busd',
		'symbol': 'vBUSD'
	},
	{
		'id': 3701,
		'name': 'RSK Infrastructure Framework',
		'slug': 'rsk-infrastructure-framework',
		'symbol': 'RIF'
	},
	{
		'id': 2588,
		'name': 'Loom Network',
		'slug': 'loom-network',
		'symbol': 'LOOM'
	},
	{
		'id': 1586,
		'name': 'Ark',
		'slug': 'ark',
		'symbol': 'ARK'
	},
	{
		'id': 2297,
		'name': 'StormX',
		'slug': 'stormx',
		'symbol': 'STMX'
	},
	{
		'id': 3637,
		'name': 'Aergo',
		'slug': 'aergo',
		'symbol': 'AERGO'
	},
	{
		'id': 7224,
		'name': 'DODO',
		'slug': 'dodo',
		'symbol': 'DODO'
	},
	{
		'id': 18895,
		'name': 'MARBLEX',
		'slug': 'marblex',
		'symbol': 'MBX'
	},
	{
		'id': 7824,
		'name': 'Vai',
		'slug': 'vai',
		'symbol': 'VAI'
	},
	{
		'id': 6958,
		'name': 'Alchemy Pay',
		'slug': 'alchemy-pay',
		'symbol': 'ACH'
	},
	{
		'id': 2927,
		'name': 'sUSD',
		'slug': 'susd',
		'symbol': 'SUSD'
	},
	{
		'id': 10529,
		'name': 'Sun (New)',
		'slug': 'sun-token',
		'symbol': 'SUN'
	},
	{
		'id': 20014,
		'name': 'Krypton DAO',
		'slug': 'krypton-dao',
		'symbol': 'KRD'
	},
	{
		'id': 10903,
		'name': 'Coin98',
		'slug': 'coin98',
		'symbol': 'C98'
	},
	{
		'id': 9421,
		'name': 'Ampleforth Governance Token',
		'slug': 'ampleforth-governance-token',
		'symbol': 'FORTH'
	},
	{
		'id': 7859,
		'name': 'Badger DAO',
		'slug': 'badger-dao',
		'symbol': 'BADGER'
	},
	{
		'id': 6950,
		'name': 'Perpetual Protocol',
		'slug': 'perpetual-protocol',
		'symbol': 'PERP'
	},
	{
		'id': 9285,
		'name': 'Moonriver',
		'slug': 'moonriver',
		'symbol': 'MOVR'
	},
	{
		'id': 8972,
		'name': 'Seedify.fund',
		'slug': 'seedify-fund',
		'symbol': 'SFUND'
	},
	{
		'id': 10688,
		'name': 'Yield Guild Games',
		'slug': 'yield-guild-games',
		'symbol': 'YGG'
	},
	{
		'id': 3418,
		'name': 'Metadium',
		'slug': 'metadium',
		'symbol': 'META'
	},
	{
		'id': 11213,
		'name': 'Star Atlas DAO',
		'slug': 'star-atlas-polis',
		'symbol': 'POLIS'
	},
	{
		'id': 2320,
		'name': 'Utrust',
		'slug': 'utrust',
		'symbol': 'UTK'
	},
	{
		'id': 5618,
		'name': 'Dawn Protocol',
		'slug': 'dawn-protocol',
		'symbol': 'DAWN'
	},
	{
		'id': 2137,
		'name': 'Electroneum',
		'slug': 'electroneum',
		'symbol': 'ETN'
	},
	{
		'id': 2896,
		'name': 'Hifi Finance (Old)',
		'slug': 'mainframe',
		'symbol': 'MFT'
	},
	{
		'id': 2135,
		'name': 'Revain',
		'slug': 'revain',
		'symbol': 'REV'
	},
	{
		'id': 5612,
		'name': 'SOMESING',
		'slug': 'somesing',
		'symbol': 'SSX'
	},
	{
		'id': 5939,
		'name': 'Wrapped NXM',
		'slug': 'wrapped-nxm',
		'symbol': 'WNXM'
	},
	{
		'id': 4038,
		'name': 'MovieBloc',
		'slug': 'moviebloc',
		'symbol': 'MBL'
	},
	{
		'id': 8985,
		'name': 'Efinity Token',
		'slug': 'efinity',
		'symbol': 'EFI'
	},
	{
		'id': 693,
		'name': 'Verge',
		'slug': 'verge',
		'symbol': 'XVG'
	},
	{
		'id': 5957,
		'name': 'DFI.Money',
		'slug': 'yearn-finance-ii',
		'symbol': 'YFII'
	},
	{
		'id': 8075,
		'name': 'Rally',
		'slug': 'rally',
		'symbol': 'RLY'
	},
	{
		'id': 8911,
		'name': 'Strike',
		'slug': 'strike',
		'symbol': 'STRK'
	},
	{
		'id': 7585,
		'name': 'Freeway Token',
		'slug': 'freeway-token',
		'symbol': 'FWT'
	},
	{
		'id': 5919,
		'name': 'Meter Governance',
		'slug': 'meter-governance',
		'symbol': 'MTRG'
	},
	{
		'id': 5072,
		'name': 'Rakon',
		'slug': 'rakon',
		'symbol': 'RKN'
	},
	{
		'id': 9931,
		'name': 'SONM (BEP-20)',
		'slug': 'sonm-bep20',
		'symbol': 'SNM'
	},
	{
		'id': 8100,
		'name': 'Ankr Staked ETH',
		'slug': 'ankreth',
		'symbol': 'ankrETH'
	},
	{
		'id': 1552,
		'name': 'Enzyme',
		'slug': 'enzyme',
		'symbol': 'MLN'
	},
	{
		'id': 8290,
		'name': 'SuperVerse',
		'slug': 'superfarm',
		'symbol': 'SUPER'
	},
	{
		'id': 11498,
		'name': 'Chainbing',
		'slug': 'chainbing',
		'symbol': 'CBG'
	},
	{
		'id': 7189,
		'name': 'Origin Dollar',
		'slug': 'origin-dollar',
		'symbol': 'OUSD'
	},
	{
		'id': 2638,
		'name': 'Cortex',
		'slug': 'cortex',
		'symbol': 'CTXC'
	},
	{
		'id': 7055,
		'name': 'DeFi Pulse Index',
		'slug': 'defi-pulse-index',
		'symbol': 'DPI'
	},
	{
		'id': 7046,
		'name': 'Aavegotchi',
		'slug': 'aavegotchi',
		'symbol': 'GHST'
	},
	{
		'id': 4056,
		'name': 'Ampleforth',
		'slug': 'ampleforth',
		'symbol': 'AMPL'
	},
	{
		'id': 8489,
		'name': 'XSGD',
		'slug': 'xsgd',
		'symbol': 'XSGD'
	},
	{
		'id': 8107,
		'name': 'Cobak Token',
		'slug': 'cobak-token',
		'symbol': 'CBK'
	},
	{
		'id': 11206,
		'name': 'Bloktopia',
		'slug': 'bloktopia',
		'symbol': 'BLOK'
	},
	{
		'id': 4039,
		'name': 'ARPA',
		'slug': 'arpa-chain',
		'symbol': 'ARPA'
	},
	{
		'id': 7150,
		'name': 'Flamingo',
		'slug': 'flamingo',
		'symbol': 'FLM'
	},
	{
		'id': 17917,
		'name': 'RSS3',
		'slug': 'rss3',
		'symbol': 'RSS3'
	},
	{
		'id': 4275,
		'name': 'Cocos-BCX',
		'slug': 'cocos-bcx',
		'symbol': 'COCOS'
	},
	{
		'id': 10729,
		'name': 'UFO Gaming',
		'slug': 'ufo-gaming',
		'symbol': 'UFO'
	},
	{
		'id': 11294,
		'name': 'SuperRare',
		'slug': 'superrare',
		'symbol': 'RARE'
	},
	{
		'id': 7208,
		'name': 'Polkastarter',
		'slug': 'polkastarter',
		'symbol': 'POLS'
	},
	{
		'id': 9868,
		'name': 'XCAD Network',
		'slug': 'xcad-network',
		'symbol': 'XCAD'
	},
	{
		'id': 10188,
		'name': 'Automata Network',
		'slug': 'automata-network',
		'symbol': 'ATA'
	},
	{
		'id': 7236,
		'name': 'Celo Dollar',
		'slug': 'celo-dollar',
		'symbol': 'CUSD'
	},
	{
		'id': 3316,
		'name': 'smARTOFGIVING',
		'slug': 'smartofgiving',
		'symbol': 'AOG'
	},
	{
		'id': 3930,
		'name': 'ThunderCore',
		'slug': 'thundercore',
		'symbol': 'TT'
	},
	{
		'id': 11783,
		'name': 'GameFi.org',
		'slug': 'gamefi',
		'symbol': 'GAFI'
	},
	{
		'id': 15261,
		'name': 'ONUS',
		'slug': 'onus',
		'symbol': 'ONUS'
	},
	{
		'id': 8707,
		'name': 'Alpaca Finance',
		'slug': 'alpaca-finance',
		'symbol': 'ALPACA'
	},
	{
		'id': 1883,
		'name': 'Adshares',
		'slug': 'adshares',
		'symbol': 'ADS'
	},
	{
		'id': 6833,
		'name': 'Litentry',
		'slug': 'litentry',
		'symbol': 'LIT'
	},
	{
		'id': 1556,
		'name': 'Chrono.tech',
		'slug': 'chrono-tech',
		'symbol': 'TIME'
	},
	{
		'id': 7463,
		'name': 'RAMP',
		'slug': 'ramp',
		'symbol': 'RAMP'
	},
	{
		'id': 1974,
		'name': 'Propy',
		'slug': 'propy',
		'symbol': 'PRO'
	},
	{
		'id': 21178,
		'name': 'Metars Genesis',
		'slug': 'metars-genesis',
		'symbol': 'MRS'
	},
	{
		'id': 19650,
		'name': 'Volt Inu V2',
		'slug': 'volt-inu-v2',
		'symbol': 'VOLT'
	},
	{
		'id': 3441,
		'name': 'Divi',
		'slug': 'divi',
		'symbol': 'DIVI'
	},
	{
		'id': 12064,
		'name': 'Cratos',
		'slug': 'cratos',
		'symbol': 'CRTS'
	},
	{
		'id': 10750,
		'name': 'Qredo',
		'slug': 'qredo',
		'symbol': 'QRDO'
	},
	{
		'id': 20382,
		'name': 'Battle World',
		'slug': 'battle-world',
		'symbol': 'BWO'
	},
	{
		'id': 3714,
		'name': 'LTO Network',
		'slug': 'lto-network',
		'symbol': 'LTO'
	},
	{
		'id': 4953,
		'name': 'FirmaChain',
		'slug': 'firmachain',
		'symbol': 'FCT,FCT2'
	},
	{
		'id': 3673,
		'name': 'ASD',
		'slug': 'bitmax-token',
		'symbol': 'ASD'
	},
	{
		'id': 5429,
		'name': 'DEAPcoin',
		'slug': 'deapcoin',
		'symbol': 'DEP'
	},
	{
		'id': 2606,
		'name': 'Wanchain',
		'slug': 'wanchain',
		'symbol': 'WAN'
	},
	{
		'id': 7064,
		'name': 'BakeryToken',
		'slug': 'bakerytoken',
		'symbol': 'BAKE'
	},
	{
		'id': 13969,
		'name': 'Phoenix',
		'slug': 'phoenix-global-new',
		'symbol': 'PHB'
	},
	{
		'id': 8526,
		'name': 'Raydium',
		'slug': 'raydium',
		'symbol': 'RAY'
	},
	{
		'id': 4660,
		'name': 'Telos',
		'slug': 'telos',
		'symbol': 'TLOS'
	},
	{
		'id': 14556,
		'name': 'Boba Network',
		'slug': 'boba-network',
		'symbol': 'BOBA'
	},
	{
		'id': 9720,
		'name': 'PlatON',
		'slug': 'platon',
		'symbol': 'LAT'
	},
	{
		'id': 7440,
		'name': 'BarnBridge',
		'slug': 'barnbridge',
		'symbol': 'BOND'
	},
	{
		'id': 7725,
		'name': 'TrueFi',
		'slug': 'truefi-token',
		'symbol': 'TRU'
	},
	{
		'id': 17145,
		'name': 'League of Kingdoms Arena',
		'slug': 'league-of-kingdoms',
		'symbol': 'LOKA'
	},
	{
		'id': 8613,
		'name': 'Alchemix',
		'slug': 'alchemix',
		'symbol': 'ALCX'
	},
	{
		'id': 3866,
		'name': 'CONUN',
		'slug': 'conun',
		'symbol': 'CON'
	},
	{
		'id': 20873,
		'name': 'LeverFi',
		'slug': 'lever',
		'symbol': 'LEVER'
	},
	{
		'id': 2321,
		'name': 'Kepple',
		'slug': 'qlink',
		'symbol': 'QLC'
	},
	{
		'id': 4191,
		'name': 'Syntropy',
		'slug': 'syntropy',
		'symbol': 'NOIA'
	},
	{
		'id': 5380,
		'name': 'HUNT',
		'slug': 'hunt',
		'symbol': 'HUNT'
	},
	{
		'id': 4090,
		'name': 'Wirex Token',
		'slug': 'wirex-token',
		'symbol': 'WXT'
	},
	{
		'id': 8296,
		'name': 'KLAYswap Protocol',
		'slug': 'klayswap-protocol',
		'symbol': 'KSP'
	},
	{
		'id': 8037,
		'name': 'Virtua',
		'slug': 'terra-virtua-kolect',
		'symbol': 'TVK'
	},
	{
		'id': 7102,
		'name': 'Linear Finance',
		'slug': 'linear',
		'symbol': 'LINA'
	},
	{
		'id': 11212,
		'name': 'Star Atlas',
		'slug': 'star-atlas',
		'symbol': 'ATLAS'
	},
	{
		'id': 2570,
		'name': 'TomoChain',
		'slug': 'tomochain',
		'symbol': 'TOMO'
	},
	{
		'id': 16946,
		'name': 'Metacraft',
		'slug': 'metacraft',
		'symbol': 'MCT'
	},
	{
		'id': 1521,
		'name': 'Komodo',
		'slug': 'komodo',
		'symbol': 'KMD'
	},
	{
		'id': 7311,
		'name': 'Beefy Finance',
		'slug': 'beefy-finance',
		'symbol': 'BIFI'
	},
	{
		'id': 9674,
		'name': 'Wilder World',
		'slug': 'wilder-world',
		'symbol': 'WILD'
	},
	{
		'id': 3928,
		'name': 'IDEX',
		'slug': 'idex',
		'symbol': 'IDEX'
	},
	{
		'id': 17742,
		'name': 'Cult DAO',
		'slug': 'cult-dao',
		'symbol': 'CULT'
	},
	{
		'id': 15924,
		'name': 'NvirWorld',
		'slug': 'nvirworld',
		'symbol': 'NVIR'
	},
	{
		'id': 5049,
		'name': 'VerusCoin',
		'slug': 'veruscoin',
		'symbol': 'VRSC'
	},
	{
		'id': 7535,
		'name': 'Keep3rV1',
		'slug': 'keep3rv1',
		'symbol': 'KP3R'
	},
	{
		'id': 258,
		'name': 'Groestlcoin',
		'slug': 'groestlcoin',
		'symbol': 'GRS'
	},
	{
		'id': 7431,
		'name': 'Akash Network',
		'slug': 'akash-network',
		'symbol': 'AKT'
	},
	{
		'id': 3662,
		'name': 'HedgeTrade',
		'slug': 'hedgetrade',
		'symbol': 'HEDG'
	},
	{
		'id': 2776,
		'name': 'Travala.com',
		'slug': 'travala',
		'symbol': 'AVA'
	},
	{
		'id': 6138,
		'name': 'DIA',
		'slug': 'dia',
		'symbol': 'DIA'
	},
	{
		'id': 8615,
		'name': 'Ethernity',
		'slug': 'ethernity-chain',
		'symbol': 'ERN'
	},
	{
		'id': 1866,
		'name': 'Bytom',
		'slug': 'bytom',
		'symbol': 'BTM'
	},
	{
		'id': 9071,
		'name': 'Chainge',
		'slug': 'chainge',
		'symbol': 'CHNG'
	},
	{
		'id': 5631,
		'name': 'Orion Protocol',
		'slug': 'orion-protocol',
		'symbol': 'ORN'
	},
	{
		'id': 10821,
		'name': 'Starlink',
		'slug': 'star-link',
		'symbol': 'STARL'
	},
	{
		'id': 8602,
		'name': 'Bounce Governance Token',
		'slug': 'bounce-token',
		'symbol': 'AUCTION'
	},
	{
		'id': 21060,
		'name': 'GALAXIA',
		'slug': 'galaxia',
		'symbol': 'GXA'
	},
	{
		'id': 7957,
		'name': 'Venus USDT',
		'slug': 'venus-usdt',
		'symbol': 'vUSDT'
	},
	{
		'id': 5877,
		'name': 'Rarible',
		'slug': 'rarible',
		'symbol': 'RARI'
	},
	{
		'id': 5589,
		'name': 'DXdao',
		'slug': 'dxdao',
		'symbol': 'DXD'
	},
	{
		'id': 7882,
		'name': 'Efforce',
		'slug': 'efforce',
		'symbol': 'WOZX'
	},
	{
		'id': 3946,
		'name': 'Carry',
		'slug': 'carry',
		'symbol': 'CRE'
	},
	{
		'id': 1955,
		'name': 'Neblio',
		'slug': 'neblio',
		'symbol': 'NEBL'
	},
	{
		'id': 9020,
		'name': 'Toko Token',
		'slug': 'tokocrypto',
		'symbol': 'TKO'
	},
	{
		'id': 20622,
		'name': 'Forta',
		'slug': 'forta',
		'symbol': 'FORT'
	},
	{
		'id': 2941,
		'name': 'CoinEx Token',
		'slug': 'coinex-token',
		'symbol': 'CET'
	},
	{
		'id': 6957,
		'name': 'AllianceBlock',
		'slug': 'allianceblock',
		'symbol': 'ALBT'
	},
	{
		'id': 5453,
		'name': 'KardiaChain',
		'slug': 'kardiachain',
		'symbol': 'KAI'
	},
	{
		'id': 1312,
		'name': 'Steem Dollars',
		'slug': 'steem-dollars',
		'symbol': 'SBD'
	},
	{
		'id': 7692,
		'name': 'e-Radix',
		'slug': 'radix',
		'symbol': 'EXRD'
	},
	{
		'id': 8384,
		'name': 'CLV',
		'slug': 'clover',
		'symbol': 'CLV'
	},
	{
		'id': 12687,
		'name': 'S.S. Lazio Fan Token',
		'slug': 'lazio-fan-token',
		'symbol': 'LAZIO'
	},
	{
		'id': 8206,
		'name': 'QuickSwap',
		'slug': 'quickswap',
		'symbol': 'QUICK'
	},
	{
		'id': 9892,
		'name': 'YooShi',
		'slug': 'yooshi',
		'symbol': 'YOOSHI'
	},
	{
		'id': 463,
		'name': 'BitShares',
		'slug': 'bitshares',
		'symbol': 'BTS'
	},
	{
		'id': 18112,
		'name': 'Alpine F1 Team Fan Token',
		'slug': 'alpine-f1-team-fan-token',
		'symbol': 'ALPINE'
	},
	{
		'id': 2222,
		'name': 'Bitcoin Diamond',
		'slug': 'bitcoin-diamond',
		'symbol': 'BCD'
	},
	{
		'id': 7672,
		'name': 'Unifi Protocol DAO',
		'slug': 'unifi-protocol-dao',
		'symbol': 'UNFI'
	},
	{
		'id': 10180,
		'name': 'GMT Token',
		'slug': 'gomining-token',
		'symbol': 'GMT'
	},
	{
		'id': 9104,
		'name': 'AIOZ Network',
		'slug': 'aioz-network',
		'symbol': 'AIOZ'
	},
	{
		'id': 5350,
		'name': 'Proton',
		'slug': 'proton',
		'symbol': 'XPR'
	},
	{
		'id': 2553,
		'name': 'Refereum',
		'slug': 'refereum',
		'symbol': 'RFR'
	},
	{
		'id': 6727,
		'name': 'Reserve',
		'slug': 'reserve',
		'symbol': 'RSV'
	},
	{
		'id': 4779,
		'name': 'HUSD',
		'slug': 'husd',
		'symbol': 'HUSD'
	},
	{
		'id': 19590,
		'name': 'Defigram',
		'slug': 'defigram',
		'symbol': 'DFG'
	},
	{
		'id': 9666,
		'name': 'Terran Coin',
		'slug': 'terran-coin',
		'symbol': 'TRR'
	},
	{
		'id': 16552,
		'name': 'RAI Finance',
		'slug': 'rai-finance-sofi',
		'symbol': 'SOFI'
	},
	{
		'id': 6830,
		'name': 'KILT Protocol',
		'slug': 'kiltprotocol',
		'symbol': 'KILT'
	},
	{
		'id': 22710,
		'name': 'VIDT DAO',
		'slug': 'vidt-dao',
		'symbol': 'VIDT'
	},
	{
		'id': 4944,
		'name': 'Tellor',
		'slug': 'tellor',
		'symbol': 'TRB'
	},
	{
		'id': 4064,
		'name': 'USDK',
		'slug': 'usdk',
		'symbol': 'USDK'
	},
	{
		'id': 2915,
		'name': 'Moss Coin',
		'slug': 'moss-coin',
		'symbol': 'MOC'
	},
	{
		'id': 2758,
		'name': 'Unibright',
		'slug': 'unibright',
		'symbol': 'UBT'
	},
	{
		'id': 2866,
		'name': 'Sentinel Protocol',
		'slug': 'sentinel-protocol',
		'symbol': 'UPP'
	},
	{
		'id': 2289,
		'name': 'Gifto',
		'slug': 'gifto',
		'symbol': 'GFT'
	},
	{
		'id': 8509,
		'name': 'XMON',
		'slug': 'xmon',
		'symbol': 'XMON'
	},
	{
		'id': 21351,
		'name': 'Sweat Economy',
		'slug': 'sweat-economy',
		'symbol': 'SWEAT'
	},
	{
		'id': 213,
		'name': 'MonaCoin',
		'slug': 'monacoin',
		'symbol': 'MONA'
	},
	{
		'id': 7726,
		'name': 'ICHI',
		'slug': 'ichi',
		'symbol': 'ICHI'
	},
	{
		'id': 6928,
		'name': 'Bella Protocol',
		'slug': 'bella-protocol',
		'symbol': 'BEL'
	},
	{
		'id': 7087,
		'name': 'Dego Finance',
		'slug': 'dego-finance',
		'symbol': 'DEGO'
	},
	{
		'id': 19091,
		'name': 'H2O DAO',
		'slug': 'h2o-dao',
		'symbol': 'H2O'
	},
	{
		'id': 8083,
		'name': 'Tokenlon Network Token',
		'slug': 'tokenlon-network-token',
		'symbol': 'LON'
	},
	{
		'id': 1700,
		'name': 'Æternity',
		'slug': 'aeternity',
		'symbol': 'AE'
	},
	{
		'id': 9417,
		'name': 'Maple',
		'slug': 'maple',
		'symbol': 'MPL'
	},
	{
		'id': 20641,
		'name': 'Euro Coin',
		'slug': 'euro-coin',
		'symbol': 'EUROC'
	},
	{
		'id': 14803,
		'name': 'Aurora',
		'slug': 'aurora-near',
		'symbol': 'AURORA'
	},
	{
		'id': 8357,
		'name': 'Bitcicoin',
		'slug': 'bitcicoin',
		'symbol': 'BITCI'
	},
	{
		'id': 8827,
		'name': 'Boson Protocol',
		'slug': 'boson-protocol',
		'symbol': 'BOSON'
	},
	{
		'id': 4441,
		'name': 'Vectorspace AI',
		'slug': 'vectorspace-ai',
		'symbol': 'VXV'
	},
	{
		'id': 1768,
		'name': 'Ambire AdEx',
		'slug': 'adx-net',
		'symbol': 'ADX'
	},
	{
		'id': 4860,
		'name': 'Era Swap',
		'slug': 'era-swap',
		'symbol': 'ES'
	},
	{
		'id': 7460,
		'name': 'Alpha Quark Token',
		'slug': 'alpha-quark-token',
		'symbol': 'AQT'
	},
	{
		'id': 5882,
		'name': 'StaFi',
		'slug': 'stafi',
		'symbol': 'FIS'
	},
	{
		'id': 9288,
		'name': 'BENQI',
		'slug': 'benqi',
		'symbol': 'QI'
	},
	{
		'id': 5225,
		'name': 'FC Barcelona Fan Token',
		'slug': 'fc-barcelona-fan-token',
		'symbol': 'BAR'
	},
	{
		'id': 19819,
		'name': 'REI Network',
		'slug': 'rei-network',
		'symbol': 'REI'
	},
	{
		'id': 8938,
		'name': 'Ellipsis',
		'slug': 'ellipsis',
		'symbol': 'EPS'
	},
	{
		'id': 1785,
		'name': 'Gas',
		'slug': 'gas',
		'symbol': 'GAS'
	},
	{
		'id': 15248,
		'name': 'Santos FC Fan Token',
		'slug': 'santos-fc-fan-token',
		'symbol': 'SANTOS'
	},
	{
		'id': 5007,
		'name': 'TROY',
		'slug': 'troy',
		'symbol': 'TROY'
	},
	{
		'id': 6193,
		'name': 'Cream Finance',
		'slug': 'cream-finance',
		'symbol': 'CREAM'
	},
	{
		'id': 20886,
		'name': 'Astrafer',
		'slug': 'astrafer',
		'symbol': 'ASTRAFER'
	},
	{
		'id': 11451,
		'name': 'Shiden Network',
		'slug': 'shiden-network',
		'symbol': 'SDN'
	},
	{
		'id': 3874,
		'name': 'IRISnet',
		'slug': 'irisnet',
		'symbol': 'IRIS'
	},
	{
		'id': 19924,
		'name': 'Ellipsis',
		'slug': 'ellipsis-epx',
		'symbol': 'EPX'
	},
	{
		'id': 7576,
		'name': 'Kava Lend',
		'slug': 'hard-protocol',
		'symbol': 'HARD'
	},
	{
		'id': 2092,
		'name': 'NULS',
		'slug': 'nuls',
		'symbol': 'NULS'
	},
	{
		'id': 7048,
		'name': 'Wing Finance',
		'slug': 'wing',
		'symbol': 'WING'
	},
	{
		'id': 2143,
		'name': 'Streamr',
		'slug': 'streamr',
		'symbol': 'DATA'
	},
	{
		'id': 5552,
		'name': 'Hathor',
		'slug': 'hathor',
		'symbol': 'HTR'
	},
	{
		'id': 11035,
		'name': 'Splintershards',
		'slug': 'splintershards',
		'symbol': 'SPS'
	},
	{
		'id': 5865,
		'name': 'FIO Protocol',
		'slug': 'fio-protocol',
		'symbol': 'FIO'
	},
	{
		'id': 5226,
		'name': 'Paris Saint-Germain Fan Token',
		'slug': 'paris-saint-germain-fan-token',
		'symbol': 'PSG'
	},
	{
		'id': 9467,
		'name': 'Celo Euro',
		'slug': 'celo-euro',
		'symbol': 'CEUR'
	},
	{
		'id': 6859,
		'name': 'Harvest Finance',
		'slug': 'harvest-finance',
		'symbol': 'FARM'
	},
	{
		'id': 1414,
		'name': 'Firo',
		'slug': 'firo',
		'symbol': 'FIRO'
	},
	{
		'id': 15678,
		'name': 'Voxies',
		'slug': 'voxies',
		'symbol': 'VOXEL'
	},
	{
		'id': 6724,
		'name': 'Klever',
		'slug': 'klever',
		'symbol': 'KLV'
	},
	{
		'id': 2505,
		'name': 'Bluzelle',
		'slug': 'bluzelle',
		'symbol': 'BLZ'
	},
	{
		'id': 10293,
		'name': 'Swarm',
		'slug': 'ethereum-swarm',
		'symbol': 'BZZ'
	},
	{
		'id': 10049,
		'name': 'Manchester City Fan Token',
		'slug': 'manchester-city-fan-token',
		'symbol': 'CITY'
	},
	{
		'id': 12140,
		'name': 'RMRK',
		'slug': 'rmrk',
		'symbol': 'RMRK'
	},
	{
		'id': 4036,
		'name': 'Contentos',
		'slug': 'contentos',
		'symbol': 'COS'
	},
	{
		'id': 7158,
		'name': 'BurgerCities',
		'slug': 'burger-cities',
		'symbol': 'BURGER'
	},
	{
		'id': 8292,
		'name': 'Router Protocol',
		'slug': 'router-protocol',
		'symbol': 'ROUTE'
	},
	{
		'id': 10778,
		'name': 'Metahero',
		'slug': 'metahero',
		'symbol': 'HERO'
	},
	{
		'id': 7320,
		'name': 'Neutrino Token',
		'slug': 'neutrino-system-base-token',
		'symbol': 'NSBT'
	},
	{
		'id': 10630,
		'name': 'Guild of Guardians',
		'slug': 'guild-of-guardians',
		'symbol': 'GOG'
	},
	{
		'id': 7960,
		'name': 'Venus XVS',
		'slug': 'venus-xvs',
		'symbol': 'vXVS'
	},
	{
		'id': 14052,
		'name': 'FC Porto Fan Token',
		'slug': 'fc-porto',
		'symbol': 'PORTO'
	},
	{
		'id': 6739,
		'name': 'ONBUFF',
		'slug': 'onbuff',
		'symbol': 'ONIT'
	},
	{
		'id': 6641,
		'name': 'AhaToken',
		'slug': 'ahatoken',
		'symbol': 'AHT'
	},
	{
		'id': 2662,
		'name': 'Haven Protocol',
		'slug': 'haven-protocol',
		'symbol': 'XHV'
	},
	{
		'id': 2937,
		'name': 'VITE',
		'slug': 'vite',
		'symbol': 'VITE'
	},
	{
		'id': 10409,
		'name': 'Opulous',
		'slug': 'opulous',
		'symbol': 'OPUL'
	},
	{
		'id': 5115,
		'name': 'TerraKRW',
		'slug': 'terra-krw',
		'symbol': 'KRT'
	},
	{
		'id': 3,
		'name': 'Namecoin',
		'slug': 'namecoin',
		'symbol': 'NMC'
	},
	{
		'id': 2530,
		'name': 'Fusion',
		'slug': 'fusion',
		'symbol': 'FSN'
	},
	{
		'id': 11568,
		'name': 'Adventure Gold',
		'slug': 'adventure-gold',
		'symbol': 'AGLD'
	},
	{
		'id': 2585,
		'name': 'CENNZnet',
		'slug': 'centrality',
		'symbol': 'CENNZ'
	},
	{
		'id': 10372,
		'name': 'Dacxi',
		'slug': 'dacxi',
		'symbol': 'DACXI'
	},
	{
		'id': 5947,
		'name': 'TokenPocket',
		'slug': 'tokenpocket',
		'symbol': 'TPT'
	},
	{
		'id': 10974,
		'name': 'Tranchess',
		'slug': 'tranchess',
		'symbol': 'CHESS'
	},
	{
		'id': 3139,
		'name': 'DxChain Token',
		'slug': 'dxchain-token',
		'symbol': 'DX'
	},
	{
		'id': 18208,
		'name': 'Kunci Coin',
		'slug': 'kunci-coin',
		'symbol': 'KUNCI'
	},
	{
		'id': 4956,
		'name': 'MAP Protocol',
		'slug': 'map-protocol',
		'symbol': 'MAP'
	},
	{
		'id': 5829,
		'name': 'TrustSwap',
		'slug': 'trustswap',
		'symbol': 'SWAP'
	},
	{
		'id': 2081,
		'name': 'AirDAO',
		'slug': 'airdao',
		'symbol': 'AMB'
	},
	{
		'id': 6536,
		'name': 'MANTRA',
		'slug': 'mantra',
		'symbol': 'OM'
	},
	{
		'id': 3968,
		'name': 'Elitium',
		'slug': 'elitium',
		'symbol': 'EUM'
	},
	{
		'id': 1169,
		'name': 'PIVX',
		'slug': 'pivx',
		'symbol': 'PIVX'
	},
	{
		'id': 3742,
		'name': 'Chimpion',
		'slug': 'chimpion',
		'symbol': 'BNANA'
	},
	{
		'id': 4758,
		'name': 'dForce',
		'slug': 'dforce',
		'symbol': 'DF'
	},
	{
		'id': 5893,
		'name': 'Frontier',
		'slug': 'frontier',
		'symbol': 'FRONT'
	},
	{
		'id': 8771,
		'name': 'GYEN',
		'slug': 'gyen',
		'symbol': 'GYEN'
	},
	{
		'id': 9608,
		'name': 'SpookySwap',
		'slug': 'spookyswap',
		'symbol': 'BOO'
	},
	{
		'id': 11171,
		'name': 'Mango',
		'slug': 'mango-markets',
		'symbol': 'MNGO'
	},
	{
		'id': 9194,
		'name': 'Saito',
		'slug': 'saito',
		'symbol': 'SAITO'
	},
	{
		'id': 8833,
		'name': 'DeGate',
		'slug': 'degate',
		'symbol': 'DG'
	},
	{
		'id': 19018,
		'name': 'Choise.com',
		'slug': 'choise',
		'symbol': 'CHO'
	},
	{
		'id': 2492,
		'name': 'Elastos',
		'slug': 'elastos',
		'symbol': 'ELA'
	},
	{
		'id': 9177,
		'name': 'Pitbull',
		'slug': 'pitbull',
		'symbol': 'PIT'
	},
	{
		'id': 7424,
		'name': 'Hermez Network',
		'slug': 'hermez-network',
		'symbol': 'HEZ'
	},
	{
		'id': 6929,
		'name': 'Hegic',
		'slug': 'hegic',
		'symbol': 'HEGIC'
	},
	{
		'id': 5070,
		'name': 'Tap',
		'slug': 'tap',
		'symbol': 'XTP'
	},
	{
		'id': 16979,
		'name': 'Hillstone Finance',
		'slug': 'hillstone',
		'symbol': 'HSF'
	},
	{
		'id': 20825,
		'name': 'Petals',
		'slug': 'petals',
		'symbol': 'PTS'
	},
	{
		'id': 2398,
		'name': 'SelfKey',
		'slug': 'selfkey',
		'symbol': 'KEY'
	},
	{
		'id': 1925,
		'name': 'Waltonchain',
		'slug': 'waltonchain',
		'symbol': 'WTC'
	},
	{
		'id': 8255,
		'name': 'Prosper',
		'slug': 'prosper',
		'symbol': 'PROS'
	},
	{
		'id': 2827,
		'name': 'Phantasma',
		'slug': 'phantasma',
		'symbol': 'SOUL'
	},
	{
		'id': 788,
		'name': 'Circuits of Value',
		'slug': 'circuits-of-value',
		'symbol': 'COVAL'
	},
	{
		'id': 8479,
		'name': 'VAIOT',
		'slug': 'vaiot',
		'symbol': 'VAI'
	},
	{
		'id': 5866,
		'name': 'DEXTools',
		'slug': 'dextools',
		'symbol': 'DEXT'
	},
	{
		'id': 4467,
		'name': 'Nestree',
		'slug': 'nestree',
		'symbol': 'EGG'
	},
	{
		'id': 7978,
		'name': 'Bonfida',
		'slug': 'bonfida',
		'symbol': 'FIDA'
	},
	{
		'id': 2058,
		'name': 'AirSwap',
		'slug': 'airswap',
		'symbol': 'AST'
	},
	{
		'id': 5821,
		'name': 'Aleph.im',
		'slug': 'aleph-im',
		'symbol': 'ALEPH'
	},
	{
		'id': 3581,
		'name': 'Kleros',
		'slug': 'kleros',
		'symbol': 'PNK'
	},
	{
		'id': 1392,
		'name': 'Pluton',
		'slug': 'pluton',
		'symbol': 'PLU'
	},
	{
		'id': 5410,
		'name': 'PARSIQ',
		'slug': 'parsiq',
		'symbol': 'PRQ'
	},
	{
		'id': 17464,
		'name': 'StreamCoin',
		'slug': 'stream-coin',
		'symbol': 'STRM'
	},
	{
		'id': 19063,
		'name': 'MEVerse',
		'slug': 'meverse',
		'symbol': 'MEV'
	},
	{
		'id': 2019,
		'name': 'Viberate',
		'slug': 'viberate',
		'symbol': 'VIB'
	},
	{
		'id': 3666,
		'name': 'Ultiledger',
		'slug': 'ultiledger',
		'symbol': 'ULT'
	},
	{
		'id': 13967,
		'name': 'Goldfinch',
		'slug': 'goldfinch-protocol',
		'symbol': 'GFI'
	},
	{
		'id': 2245,
		'name': 'Presearch',
		'slug': 'presearch',
		'symbol': 'PRE'
	},
	{
		'id': 16434,
		'name': 'Ooki Protocol',
		'slug': 'ooki-protocol',
		'symbol': 'OOKI'
	},
	{
		'id': 10744,
		'name': 'DeRace',
		'slug': 'derace',
		'symbol': 'DERC'
	},
	{
		'id': 16678,
		'name': 'NFT Worlds',
		'slug': 'nft-worlds',
		'symbol': 'WRLD'
	},
	{
		'id': 2348,
		'name': 'Measurable Data Token',
		'slug': 'measurable-data-token',
		'symbol': 'MDT'
	},
	{
		'id': 2630,
		'name': 'PolySwarm',
		'slug': 'polyswarm',
		'symbol': 'NCT'
	},
	{
		'id': 12749,
		'name': 'Nakamoto Games',
		'slug': 'nakamoto-games',
		'symbol': 'NAKA'
	},
	{
		'id': 5228,
		'name': 'Galatasaray Fan Token',
		'slug': 'galatasaray-fan-token',
		'symbol': 'GAL'
	},
	{
		'id': 16352,
		'name': 'Green Satoshi Token (SOL)',
		'slug': 'green-satoshi-token',
		'symbol': 'GST'
	},
	{
		'id': 9148,
		'name': 'Drep [new]',
		'slug': 'drep-new',
		'symbol': 'DREP'
	},
	{
		'id': 11532,
		'name': 'Arsenal Fan Token',
		'slug': 'arsenal-fan-token',
		'symbol': 'AFC'
	},
	{
		'id': 2933,
		'name': 'BitMart Token',
		'slug': 'bitmart-token',
		'symbol': 'BMX'
	},
	{
		'id': 3175,
		'name': 'Maro',
		'slug': 'maro',
		'symbol': 'MARO'
	},
	{
		'id': 2873,
		'name': 'Metronome',
		'slug': 'metronome',
		'symbol': 'MET'
	},
	{
		'id': 9638,
		'name': 'SingularityDAO',
		'slug': 'singularitydao',
		'symbol': 'SDAO'
	},
	{
		'id': 21557,
		'name': 'Mint Marble',
		'slug': 'mint-marble',
		'symbol': 'MIM'
	},
	{
		'id': 21968,
		'name': 'Tamadoge',
		'slug': 'tamadoge',
		'symbol': 'TAMA'
	},
	{
		'id': 8800,
		'name': 'Dora Factory',
		'slug': 'dora-factory',
		'symbol': 'DORA'
	},
	{
		'id': 5079,
		'name': 'apM Coin',
		'slug': 'apm-coin',
		'symbol': 'APM'
	},
	{
		'id': 18919,
		'name': 'Shiba Predator',
		'slug': 'shiba-predator',
		'symbol': 'QOM'
	},
	{
		'id': 16463,
		'name': 'OpenDAO',
		'slug': 'opendao',
		'symbol': 'SOS'
	},
	{
		'id': 2545,
		'name': 'Arcblock',
		'slug': 'arcblock',
		'symbol': 'ABT'
	},
	{
		'id': 8245,
		'name': 'Hydra',
		'slug': 'hydra',
		'symbol': 'HYDRA'
	},
	{
		'id': 11202,
		'name': 'Tokemak',
		'slug': 'tokemak',
		'symbol': 'TOKE'
	},
	{
		'id': 11232,
		'name': 'Highstreet',
		'slug': 'highstreet',
		'symbol': 'HIGH'
	},
	{
		'id': 6069,
		'name': 'Assemble Protocol',
		'slug': 'assemble-protocol',
		'symbol': 'ASM'
	},
	{
		'id': 5221,
		'name': 'Handshake',
		'slug': 'handshake',
		'symbol': 'HNS'
	},
	{
		'id': 10042,
		'name': 'Karura',
		'slug': 'karura',
		'symbol': 'KAR'
	},
	{
		'id': 4366,
		'name': 'MixMarvel',
		'slug': 'mixmarvel',
		'symbol': 'MIX'
	},
	{
		'id': 10103,
		'name': 'Lossless',
		'slug': 'lossless',
		'symbol': 'LSS'
	},
	{
		'id': 2062,
		'name': 'Aion',
		'slug': 'aion',
		'symbol': 'AION'
	},
	{
		'id': 2675,
		'name': 'Dock',
		'slug': 'dock',
		'symbol': 'DOCK'
	},
	{
		'id': 8387,
		'name': 'Auto',
		'slug': 'auto',
		'symbol': 'AUTO'
	},
	{
		'id': 8857,
		'name': 'Anchor Protocol',
		'slug': 'anchor-protocol',
		'symbol': 'ANC'
	},
	{
		'id': 9764,
		'name': 'MILC Platform',
		'slug': 'milc-platform',
		'symbol': 'MLT'
	},
	{
		'id': 8200,
		'name': 'Shapeshift FOX Token',
		'slug': 'fox-token',
		'symbol': 'FOX'
	},
	{
		'id': 1993,
		'name': 'Kin',
		'slug': 'kin',
		'symbol': 'KIN'
	},
	{
		'id': 4134,
		'name': 'Akropolis',
		'slug': 'akropolis',
		'symbol': 'AKRO'
	},
	{
		'id': 2090,
		'name': 'LATOKEN',
		'slug': 'latoken',
		'symbol': 'LA'
	},
	{
		'id': 13198,
		'name': 'NuNet',
		'slug': 'nunet',
		'symbol': 'NTX'
	},
	{
		'id': 5299,
		'name': 'HyperDAO',
		'slug': 'hyperdao',
		'symbol': 'HDAO'
	},
	{
		'id': 9721,
		'name': 'Samoyedcoin',
		'slug': 'samoyedcoin',
		'symbol': 'SAMO'
	},
	{
		'id': 9481,
		'name': 'Pendle',
		'slug': 'pendle',
		'symbol': 'PENDLE'
	},
	{
		'id': 2916,
		'name': 'Nimiq',
		'slug': 'nimiq',
		'symbol': 'NIM'
	},
	{
		'id': 5338,
		'name': 'Somnium Space Cubes',
		'slug': 'somnium-space-cubes',
		'symbol': 'CUBE'
	},
	{
		'id': 6855,
		'name': 'BIDR',
		'slug': 'binance-idr',
		'symbol': 'BIDR'
	},
	{
		'id': 7664,
		'name': 'UniCrypt',
		'slug': 'uncx',
		'symbol': 'UNCX'
	},
	{
		'id': 10759,
		'name': 'rhino.fi',
		'slug': 'deversifi',
		'symbol': 'DVF'
	},
	{
		'id': 12301,
		'name': 'Retreeb',
		'slug': 'retreeb',
		'symbol': 'TREEB'
	},
	{
		'id': 6947,
		'name': 'Valobit',
		'slug': 'valobit',
		'symbol': 'VBIT'
	},
	{
		'id': 8660,
		'name': 'BSCPAD',
		'slug': 'bscpad',
		'symbol': 'BSCPAD'
	},
	{
		'id': 3327,
		'name': 'SIX',
		'slug': 'six',
		'symbol': 'SIX'
	},
	{
		'id': 1492,
		'name': 'Obyte',
		'slug': 'obyte',
		'symbol': 'GBYTE'
	},
	{
		'id': 7412,
		'name': 'UniLend',
		'slug': 'unilend',
		'symbol': 'UFT'
	},
	{
		'id': 5305,
		'name': 'BTSE',
		'slug': 'btse',
		'symbol': 'BTSE'
	},
	{
		'id': 15270,
		'name': 'Vita Inu',
		'slug': 'vita-inu',
		'symbol': 'VINU'
	},
	{
		'id': 15478,
		'name': 'Decentral Games',
		'slug': 'decentral-games',
		'symbol': 'DG'
	},
	{
		'id': 8497,
		'name': 'ApeSwap',
		'slug': 'apeswap-finance',
		'symbol': 'BANANA'
	},
	{
		'id': 3974,
		'name': 'Bitcoin 2',
		'slug': 'bitcoin2',
		'symbol': 'BTC2'
	},
	{
		'id': 4862,
		'name': 'DAD',
		'slug': 'dad',
		'symbol': 'DAD'
	},
	{
		'id': 1826,
		'name': 'Particl',
		'slug': 'particl',
		'symbol': 'PART'
	},
	{
		'id': 4078,
		'name': 'Super Zero Protocol',
		'slug': 'super-zero-protocol',
		'symbol': 'SERO'
	},
	{
		'id': 2447,
		'name': 'Crypterium',
		'slug': 'crpt',
		'symbol': 'CRPT'
	},
	{
		'id': 5966,
		'name': 'Student Coin',
		'slug': 'student-coin',
		'symbol': 'STC'
	},
	{
		'id': 7127,
		'name': 'Velo',
		'slug': 'velo',
		'symbol': 'VELO'
	},
	{
		'id': 15388,
		'name': 'RIZON',
		'slug': 'rizon-blockchain',
		'symbol': 'ATOLO'
	},
	{
		'id': 8438,
		'name': 'Hoge Finance',
		'slug': 'hoge-finance',
		'symbol': 'HOGE'
	},
	{
		'id': 12573,
		'name': 'Clearpool',
		'slug': 'clearpool',
		'symbol': 'CPOOL'
	},
	{
		'id': 4003,
		'name': 'Zenon',
		'slug': 'zenon',
		'symbol': 'ZNN'
	},
	{
		'id': 15257,
		'name': 'EverRise',
		'slug': 'everrise',
		'symbol': 'RISE'
	},
	{
		'id': 3724,
		'name': 'SOLVE',
		'slug': 'solve',
		'symbol': 'SOLVE'
	},
	{
		'id': 6236,
		'name': 'Offshift',
		'slug': 'offshift',
		'symbol': 'XFT'
	},
	{
		'id': 6747,
		'name': 'Crust Network',
		'slug': 'crustnetwork',
		'symbol': 'CRU'
	},
	{
		'id': 1856,
		'name': 'district0x',
		'slug': 'district0x',
		'symbol': 'DNT'
	},
	{
		'id': 15721,
		'name': 'MagicCraft',
		'slug': 'magiccraft',
		'symbol': 'MCRT'
	},
	{
		'id': 6180,
		'name': 'Suku',
		'slug': 'suku',
		'symbol': 'SUKU'
	},
	{
		'id': 8066,
		'name': 'Yield App',
		'slug': 'yield-app',
		'symbol': 'YLD'
	},
	{
		'id': 3260,
		'name': 'AMO Coin',
		'slug': 'amo-coin',
		'symbol': 'AMO'
	},
	{
		'id': 2316,
		'name': 'DeepBrain Chain',
		'slug': 'deepbrain-chain',
		'symbol': 'DBC'
	},
	{
		'id': 11461,
		'name': 'Marinade Staked SOL',
		'slug': 'marinade',
		'symbol': 'MSOL'
	},
	{
		'id': 5616,
		'name': 'MATH',
		'slug': 'math',
		'symbol': 'MATH'
	},
	{
		'id': 6520,
		'name': 'HOPR',
		'slug': 'hopr',
		'symbol': 'HOPR'
	},
	{
		'id': 7654,
		'name': 'RFOX',
		'slug': 'redfox-labs',
		'symbol': 'RFOX'
	},
	{
		'id': 10897,
		'name': 'Alitas',
		'slug': 'alitas',
		'symbol': 'ALT'
	},
	{
		'id': 4118,
		'name': 'ForTube',
		'slug': 'the-force-protocol',
		'symbol': 'FOR'
	},
	{
		'id': 16334,
		'name': 'ApolloX',
		'slug': 'apollox',
		'symbol': 'APX'
	},
	{
		'id': 5626,
		'name': 'King DAG',
		'slug': 'king-dag',
		'symbol': 'KDAG'
	},
	{
		'id': 3854,
		'name': 'Unification',
		'slug': 'unification',
		'symbol': 'FUND'
	},
	{
		'id': 4217,
		'name': 'BOSagora',
		'slug': 'bosagora',
		'symbol': 'BOA'
	},
	{
		'id': 8891,
		'name': 'Bitcoin Standard Hashrate Token',
		'slug': 'btc-standard-hashrate-token',
		'symbol': 'BTCST'
	},
	{
		'id': 9017,
		'name': 'Polkadex',
		'slug': 'polkadex',
		'symbol': 'PDEX'
	},
	{
		'id': 2620,
		'name': 'Carbon Protocol',
		'slug': 'switcheo',
		'symbol': 'SWTH'
	},
	{
		'id': 3218,
		'name': 'Energi',
		'slug': 'energi',
		'symbol': 'NRG'
	},
	{
		'id': 10586,
		'name': 'TABOO TOKEN',
		'slug': 'taboo-token',
		'symbol': 'TABOO'
	},
	{
		'id': 6669,
		'name': 'PowerPool',
		'slug': 'powerpool',
		'symbol': 'CVP'
	},
	{
		'id': 7857,
		'name': 'Mirror Protocol',
		'slug': 'mirror-protocol',
		'symbol': 'MIR'
	},
	{
		'id': 8616,
		'name': 'Aurox',
		'slug': 'urus',
		'symbol': 'URUS'
	},
	{
		'id': 2949,
		'name': 'Kryll',
		'slug': 'kryll',
		'symbol': 'KRL'
	},
	{
		'id': 11367,
		'name': 'Aurory',
		'slug': 'aurory',
		'symbol': 'AURY'
	},
	{
		'id': 7703,
		'name': 'MileVerse',
		'slug': 'mileverse',
		'symbol': 'MVC'
	},
	{
		'id': 8894,
		'name': 'Deeper Network',
		'slug': 'deeper-network',
		'symbol': 'DPR'
	},
	{
		'id': 2267,
		'name': 'Wabi',
		'slug': 'wabi',
		'symbol': 'WABI'
	},
	{
		'id': 1853,
		'name': 'OAX',
		'slug': 'oax',
		'symbol': 'OAX'
	},
	{
		'id': 22985,
		'name': 'IMPT',
		'slug': 'impt',
		'symbol': 'IMPT'
	},
	{
		'id': 5583,
		'name': 'Hacken Token',
		'slug': 'hackenai',
		'symbol': 'HAI'
	},
	{
		'id': 2934,
		'name': 'BitKan',
		'slug': 'bitkan',
		'symbol': 'KAN'
	},
	{
		'id': 9760,
		'name': 'Stratos',
		'slug': 'stratos',
		'symbol': 'STOS'
	},
	{
		'id': 8538,
		'name': 'AC Milan Fan Token',
		'slug': 'ac-milan-fan-token',
		'symbol': 'ACM'
	},
	{
		'id': 8567,
		'name': 'HAPI Protocol',
		'slug': 'hapi-one',
		'symbol': 'HAPI'
	},
	{
		'id': 13524,
		'name': 'Solend',
		'slug': 'solend',
		'symbol': 'SLND'
	},
	{
		'id': 8191,
		'name': 'NFTX',
		'slug': 'nftx',
		'symbol': 'NFTX'
	},
	{
		'id': 11330,
		'name': 'VIMworld',
		'slug': 'vimworld',
		'symbol': 'VEED'
	},
	{
		'id': 8034,
		'name': 'BioPassport Token',
		'slug': 'biopassport-token',
		'symbol': 'BIOT'
	},
	{
		'id': 5309,
		'name': 'OG Fan Token',
		'slug': 'og-fan-token',
		'symbol': 'OG'
	},
	{
		'id': 5514,
		'name': 'The Transfer Token',
		'slug': 'the-transfer-token',
		'symbol': 'TTT'
	},
	{
		'id': 3715,
		'name': 'Cajutel',
		'slug': 'cajutel',
		'symbol': 'CAJ'
	},
	{
		'id': 99,
		'name': 'Vertcoin',
		'slug': 'vertcoin',
		'symbol': 'VTC'
	},
	{
		'id': 5794,
		'name': 'pNetwork',
		'slug': 'pnetwork',
		'symbol': 'PNT'
	},
	{
		'id': 7590,
		'name': 'Dvision Network',
		'slug': 'dvision-network',
		'symbol': 'DVI'
	},
	{
		'id': 2354,
		'name': 'GET Protocol',
		'slug': 'get-protocol',
		'symbol': 'GET'
	},
	{
		'id': 12623,
		'name': 'Stader',
		'slug': 'stader',
		'symbol': 'SD'
	},
	{
		'id': 5062,
		'name': 'BEPRO Network',
		'slug': 'bepro-network',
		'symbol': 'BEPRO'
	},
	{
		'id': 7095,
		'name': 'Unisocks',
		'slug': 'unisocks',
		'symbol': 'SOCKS'
	},
	{
		'id': 2212,
		'name': 'Quantstamp',
		'slug': 'quantstamp',
		'symbol': 'QSP'
	},
	{
		'id': 7229,
		'name': 'Gelato',
		'slug': 'gelato',
		'symbol': 'GEL'
	},
	{
		'id': 8044,
		'name': 'Adappter Token',
		'slug': 'adappter-token',
		'symbol': 'ADP'
	},
	{
		'id': 5227,
		'name': 'Atletico De Madrid Fan Token',
		'slug': 'atletico-de-madrid-fan-token',
		'symbol': 'ATM'
	},
	{
		'id': 13472,
		'name': 'XDEFI Wallet',
		'slug': 'xdefi-wallet',
		'symbol': 'XDEFI'
	},
	{
		'id': 5522,
		'name': 'SENSO',
		'slug': 'senso',
		'symbol': 'SENSO'
	},
	{
		'id': 9637,
		'name': 'Altura',
		'slug': 'altura',
		'symbol': 'ALU'
	},
	{
		'id': 2748,
		'name': 'Oxen',
		'slug': 'oxen',
		'symbol': 'OXEN'
	},
	{
		'id': 5,
		'name': 'Peercoin',
		'slug': 'peercoin',
		'symbol': 'PPC'
	},
	{
		'id': 8376,
		'name': 'MASQ',
		'slug': 'masq',
		'symbol': 'MASQ'
	},
	{
		'id': 10334,
		'name': 'BabySwap',
		'slug': 'babyswap',
		'symbol': 'BABY'
	},
	{
		'id': 5185,
		'name': 'KOK',
		'slug': 'keystone-of-opportunity-knowledge',
		'symbol': 'KOK'
	},
	{
		'id': 5224,
		'name': 'Juventus Fan Token',
		'slug': 'juventus-fan-token',
		'symbol': 'JUV'
	},
	{
		'id': 2165,
		'name': 'ERC20',
		'slug': 'erc20',
		'symbol': 'ERC20'
	},
	{
		'id': 3052,
		'name': 'GoCrypto Token',
		'slug': 'gocrypto-token',
		'symbol': 'GOC'
	},
	{
		'id': 4710,
		'name': 'Cere Network',
		'slug': 'cere-network',
		'symbol': 'CERE'
	},
	{
		'id': 2992,
		'name': 'Apollo Currency',
		'slug': 'apollo-currency',
		'symbol': 'APL'
	},
	{
		'id': 5382,
		'name': 'ELYSIA',
		'slug': 'elysia',
		'symbol': 'EL'
	},
	{
		'id': 2757,
		'name': 'Callisto Network',
		'slug': 'callisto-network',
		'symbol': 'CLO'
	},
	{
		'id': 8202,
		'name': 'ZKSpace',
		'slug': 'zkswap',
		'symbol': 'ZKS'
	},
	{
		'id': 2346,
		'name': 'WaykiChain',
		'slug': 'waykichain',
		'symbol': 'WICC'
	},
	{
		'id': 10368,
		'name': 'Cryptex Finance',
		'slug': 'cryptex-finance',
		'symbol': 'CTX'
	},
	{
		'id': 14179,
		'name': 'Pintu Token',
		'slug': 'pintu-token',
		'symbol': 'PTU'
	},
	{
		'id': 7678,
		'name': 'Rook',
		'slug': 'keeperdao',
		'symbol': 'ROOK'
	},
	{
		'id': 4890,
		'name': 'Newscrypto',
		'slug': 'newscrypto',
		'symbol': 'NWC'
	},
	{
		'id': 8617,
		'name': 'Firebird',
		'slug': 'polkafoundry',
		'symbol': 'PKF'
	},
	{
		'id': 12969,
		'name': 'Gari Network',
		'slug': 'gari',
		'symbol': 'GARI'
	},
	{
		'id': 2578,
		'name': 'TE-FOOD',
		'slug': 'te-food',
		'symbol': 'TONE'
	},
	{
		'id': 3422,
		'name': 'SHPING',
		'slug': 'shping',
		'symbol': 'SHPING'
	},
	{
		'id': 19624,
		'name': 'Mancium',
		'slug': 'mancium',
		'symbol': 'MANC'
	},
	{
		'id': 22008,
		'name': 'Vibing',
		'slug': 'vibing',
		'symbol': 'VBG'
	},
	{
		'id': 7228,
		'name': 'DerivaDAO',
		'slug': 'derivadao',
		'symbol': 'DDX'
	},
	{
		'id': 11222,
		'name': 'Wrapped NCG (Nine Chronicles Gold)',
		'slug': 'wrapped-ncg',
		'symbol': 'WNCG'
	},
	{
		'id': 5481,
		'name': 'BASIC',
		'slug': 'basic',
		'symbol': 'BASIC'
	},
	{
		'id': 10047,
		'name': 'EPIK Prime',
		'slug': 'epik-prime',
		'symbol': 'EPIK'
	},
	{
		'id': 2861,
		'name': 'GoChain',
		'slug': 'gochain',
		'symbol': 'GO'
	},
	{
		'id': 5031,
		'name': 'MimbleWimbleCoin',
		'slug': 'mimblewimblecoin',
		'symbol': 'MWC'
	},
	{
		'id': 3301,
		'name': 'Invictus Hyperion Fund',
		'slug': 'invictus-hyperion-fund',
		'symbol': 'IHF'
	},
	{
		'id': 2882,
		'name': 'Zus',
		'slug': '0chain',
		'symbol': 'ZCN'
	},
	{
		'id': 5956,
		'name': 'MUX Protocol',
		'slug': 'mcdex',
		'symbol': 'MCB'
	},
	{
		'id': 9111,
		'name': 'Push Protocol',
		'slug': 'epns',
		'symbol': 'PUSH'
	},
	{
		'id': 8258,
		'name': 'CUDOS',
		'slug': 'cudos',
		'symbol': 'CUDOS'
	},
	{
		'id': 7096,
		'name': 'Bridge Oracle',
		'slug': 'bridge-oracle',
		'symbol': 'BRG'
	},
	{
		'id': 4293,
		'name': 'PERL.eco',
		'slug': 'perlin',
		'symbol': 'PERL'
	},
	{
		'id': 4702,
		'name': 'Rupiah Token',
		'slug': 'rupiah-token',
		'symbol': 'IDRT'
	},
	{
		'id': 11796,
		'name': 'Inter Milan Fan Token',
		'slug': 'inter-milan-fan-token',
		'symbol': 'INTER'
	},
	{
		'id': 7616,
		'name': 'Lattice Token',
		'slug': 'lattice-token',
		'symbol': 'LTX'
	},
	{
		'id': 8408,
		'name': 'Govi',
		'slug': 'govi',
		'symbol': 'GOVI'
	},
	{
		'id': 12988,
		'name': 'LABEL Foundation',
		'slug': 'label-foundation',
		'symbol': 'LBL'
	},
	{
		'id': 4951,
		'name': 'Zynecoin',
		'slug': 'zynecoin',
		'symbol': 'ZYN'
	},
	{
		'id': 4566,
		'name': 'DigitalBits',
		'slug': 'digitalbits',
		'symbol': 'XDB'
	},
	{
		'id': 1712,
		'name': 'Quantum Resistant Ledger',
		'slug': 'quantum-resistant-ledger',
		'symbol': 'QRL'
	},
	{
		'id': 6679,
		'name': 'WHALE',
		'slug': 'whale',
		'symbol': 'WHALE'
	},
	{
		'id': 5060,
		'name': 'XeniosCoin',
		'slug': 'xenioscoin',
		'symbol': 'XNC'
	},
	{
		'id': 18860,
		'name': 'Zebec Protocol',
		'slug': 'zebec-protocol',
		'symbol': 'ZBC'
	},
	{
		'id': 9061,
		'name': 'Rainicorn',
		'slug': 'rainicorn',
		'symbol': 'RAINI'
	},
	{
		'id': 21013,
		'name': 'Meta Apes',
		'slug': 'meta-apes-peel',
		'symbol': 'PEEL'
	},
	{
		'id': 5802,
		'name': 'SORA',
		'slug': 'sora',
		'symbol': 'XOR'
	},
	{
		'id': 5435,
		'name': 'Epic Cash',
		'slug': 'epic-cash',
		'symbol': 'EPIC'
	},
	{
		'id': 4257,
		'name': 'Bitball Treasure',
		'slug': 'bitball-treasure',
		'symbol': 'BTRS'
	},
	{
		'id': 10669,
		'name': 'Pallapay',
		'slug': 'pallapay',
		'symbol': 'PALLA'
	},
	{
		'id': 4704,
		'name': 'Banano',
		'slug': 'banano',
		'symbol': 'BAN'
	},
	{
		'id': 11345,
		'name': 'Civilization',
		'slug': 'civilization',
		'symbol': 'CIV'
	},
	{
		'id': 3941,
		'name': 'Fast Access Blockchain',
		'slug': 'fast-access-blockchain',
		'symbol': 'FAB'
	},
	{
		'id': 2134,
		'name': 'Grid+',
		'slug': 'grid',
		'symbol': 'GRID'
	},
	{
		'id': 8992,
		'name': 'Cellframe',
		'slug': 'cellframe',
		'symbol': 'CELL'
	},
	{
		'id': 118,
		'name': 'ReddCoin',
		'slug': 'redd',
		'symbol': 'RDD'
	},
	{
		'id': 4887,
		'name': 'Receive Access Ecosystem',
		'slug': 'receive-access-ecosystem',
		'symbol': 'RAE'
	},
	{
		'id': 4268,
		'name': 'NewYork Exchange',
		'slug': 'newyork-exchange',
		'symbol': 'NYE'
	},
	{
		'id': 1681,
		'name': 'PRIZM',
		'slug': 'prizm',
		'symbol': 'PZM'
	},
	{
		'id': 12664,
		'name': 'Scallop',
		'slug': 'scallop',
		'symbol': 'SCLP'
	},
	{
		'id': 8525,
		'name': 'Rai Reflex Index',
		'slug': 'rai',
		'symbol': 'RAI'
	},
	{
		'id': 3722,
		'name': 'TEMCO',
		'slug': 'temco',
		'symbol': 'TEMCO'
	},
	{
		'id': 1298,
		'name': 'LBRY Credits',
		'slug': 'library-credits',
		'symbol': 'LBC'
	},
	{
		'id': 1948,
		'name': 'Aventus',
		'slug': 'aventus',
		'symbol': 'AVT'
	},
	{
		'id': 2655,
		'name': 'Monero Classic',
		'slug': 'monero-classic',
		'symbol': 'XMC'
	},
	{
		'id': 8705,
		'name': 'Bifrost',
		'slug': 'bifrost-bnc',
		'symbol': 'BNC'
	},
	{
		'id': 7533,
		'name': 'Oraichain',
		'slug': 'oraichain-token',
		'symbol': 'ORAI'
	},
	{
		'id': 3634,
		'name': 'Kambria',
		'slug': 'kambria',
		'symbol': 'KAT'
	},
	{
		'id': 19623,
		'name': 'Wombat Exchange',
		'slug': 'wombat-exchange',
		'symbol': 'WOM'
	},
	{
		'id': 13521,
		'name': 'Numbers Protocol',
		'slug': 'numbers-protocol',
		'symbol': 'NUM'
	},
	{
		'id': 77,
		'name': 'Diamond',
		'slug': 'diamond',
		'symbol': 'DMD'
	},
	{
		'id': 3698,
		'name': 'Observer',
		'slug': 'observer',
		'symbol': 'OBSR'
	},
	{
		'id': 9691,
		'name': 'Venus Reward Token',
		'slug': 'venus-reward-token',
		'symbol': 'VRT'
	},
	{
		'id': 4490,
		'name': 'Emirex Token',
		'slug': 'emirex-token',
		'symbol': 'EMRX'
	},
	{
		'id': 12148,
		'name': 'Swash',
		'slug': 'swash',
		'symbol': 'SWASH'
	},
	{
		'id': 90,
		'name': 'Dimecoin',
		'slug': 'dimecoin',
		'symbol': 'DIME'
	},
	{
		'id': 7206,
		'name': 'TitanSwap',
		'slug': 'titanswap',
		'symbol': 'TITAN'
	},
	{
		'id': 14371,
		'name': 'Inflation Hedging Coin',
		'slug': 'inflation-hedging-coin',
		'symbol': 'IHC'
	},
	{
		'id': 14822,
		'name': 'Victoria VR',
		'slug': 'victoria-vr',
		'symbol': 'VR'
	},
	{
		'id': 4746,
		'name': 'Quiztok',
		'slug': 'quiztok',
		'symbol': 'QTCON'
	},
	{
		'id': 15137,
		'name': 'Napoli Fan Token',
		'slug': 'napoli-fan-token',
		'symbol': 'NAP'
	},
	{
		'id': 8720,
		'name': 'Inverse Finance',
		'slug': 'inverse-finance',
		'symbol': 'INV'
	},
	{
		'id': 7964,
		'name': 'Venus LTC',
		'slug': 'venus-ltc',
		'symbol': 'vLTC'
	},
	{
		'id': 1154,
		'name': 'Validity',
		'slug': 'validity',
		'symbol': 'VAL'
	},
	{
		'id': 789,
		'name': 'Nexus',
		'slug': 'nexus',
		'symbol': 'NXS'
	},
	{
		'id': 8422,
		'name': 'Pangolin',
		'slug': 'pangolin',
		'symbol': 'PNG'
	},
	{
		'id': 2558,
		'name': 'Insights Network',
		'slug': 'insights-network',
		'symbol': 'INSTAR'
	},
	{
		'id': 9523,
		'name': 'PKT',
		'slug': 'pkt',
		'symbol': 'PKT'
	},
	{
		'id': 5280,
		'name': 'Bloomzed Loyalty Club Ticket',
		'slug': 'bloomzed-token',
		'symbol': 'BLCT'
	},
	{
		'id': 8216,
		'name': 'Electra Protocol',
		'slug': 'electra-protocol',
		'symbol': 'XEP'
	},
	{
		'id': 7270,
		'name': 'SAFE DEAL',
		'slug': 'safe-deal',
		'symbol': 'SFD'
	},
	{
		'id': 4249,
		'name': 'Findora',
		'slug': 'findora',
		'symbol': 'FRA'
	},
	{
		'id': 4197,
		'name': 'ShareToken',
		'slug': 'sharetoken',
		'symbol': 'SHR'
	},
	{
		'id': 6430,
		'name': 'Electric Vehicle Zone',
		'slug': 'electric-vehicle-zone',
		'symbol': 'EVZ'
	},
	{
		'id': 8271,
		'name': 'Poolz Finance',
		'slug': 'poolz-finance',
		'symbol': 'POOLZ'
	},
	{
		'id': 132,
		'name': 'Counterparty',
		'slug': 'counterparty',
		'symbol': 'XCP'
	},
	{
		'id': 5229,
		'name': 'AS Roma Fan Token',
		'slug': 'as-roma-fan-token',
		'symbol': 'ASR'
	},
	{
		'id': 2223,
		'name': 'BLOCKv',
		'slug': 'blockv',
		'symbol': 'VEE'
	},
	{
		'id': 5126,
		'name': 'Soda Coin',
		'slug': 'soda-coin',
		'symbol': 'SOC'
	},
	{
		'id': 3709,
		'name': 'Grin',
		'slug': 'grin',
		'symbol': 'GRIN'
	},
	{
		'id': 6470,
		'name': 'Hiblocks',
		'slug': 'hiblocks',
		'symbol': 'HIBS'
	},
	{
		'id': 4200,
		'name': 'ChainX',
		'slug': 'chainx',
		'symbol': 'PCX'
	},
	{
		'id': 8276,
		'name': 'Arianee',
		'slug': 'arianee-protocol',
		'symbol': 'ARIA20'
	},
	{
		'id': 372,
		'name': 'Bytecoin',
		'slug': 'bytecoin-bcn',
		'symbol': 'BCN'
	},
	{
		'id': 11926,
		'name': 'Thetan Arena',
		'slug': 'thetan-arena',
		'symbol': 'THG'
	},
	{
		'id': 9511,
		'name': 'Dfyn Network',
		'slug': 'dfyn-network',
		'symbol': 'DFYN'
	},
	{
		'id': 8049,
		'name': 'Tornado Cash',
		'slug': 'torn',
		'symbol': 'TORN'
	},
	{
		'id': 1503,
		'name': 'Jupiter',
		'slug': 'jupiter',
		'symbol': 'JUP'
	},
	{
		'id': 22620,
		'name': 'Across Protocol',
		'slug': 'across-protocol',
		'symbol': 'ACX'
	},
	{
		'id': 2276,
		'name': 'Ignis',
		'slug': 'ignis',
		'symbol': 'IGNIS'
	},
	{
		'id': 6715,
		'name': 'Sperax',
		'slug': 'sperax',
		'symbol': 'SPA'
	},
	{
		'id': 5798,
		'name': 'Darwinia Network',
		'slug': 'darwinia-network',
		'symbol': 'RING'
	},
	{
		'id': 6375,
		'name': 'ASTA',
		'slug': 'asta',
		'symbol': 'ASTA'
	},
	{
		'id': 9473,
		'name': 'Unicly CryptoPunks Collection',
		'slug': 'unicly-cryptopunks-collection',
		'symbol': 'UPUNK'
	},
	{
		'id': 12131,
		'name': 'Fruits',
		'slug': 'fruits-eco',
		'symbol': 'FRTS'
	},
	{
		'id': 2324,
		'name': 'BigONE Token',
		'slug': 'bigone-token',
		'symbol': 'ONE'
	},
	{
		'id': 7105,
		'name': 'Permission Coin',
		'slug': 'permission-coin',
		'symbol': 'ASK'
	},
	{
		'id': 3625,
		'name': 'QuadrantProtocol',
		'slug': 'quadrantprotocol',
		'symbol': 'EQUAD'
	},
	{
		'id': 13503,
		'name': 'Town Star',
		'slug': 'town-star',
		'symbol': 'TOWN'
	},
	{
		'id': 8163,
		'name': 'Exeedme',
		'slug': 'exeedme',
		'symbol': 'XED'
	},
	{
		'id': 8144,
		'name': 'OVR',
		'slug': 'ovr',
		'symbol': 'OVR'
	},
	{
		'id': 11750,
		'name': 'Buying.com',
		'slug': 'buying-com',
		'symbol': 'BUY'
	},
	{
		'id': 9291,
		'name': 'Ternoa',
		'slug': 'ternoa',
		'symbol': 'CAPS'
	},
	{
		'id': 6554,
		'name': 'GamerCoin',
		'slug': 'gamercoin',
		'symbol': 'GHX'
	},
	{
		'id': 2213,
		'name': 'QASH',
		'slug': 'qash',
		'symbol': 'QASH'
	},
	{
		'id': 4283,
		'name': 'BitForex Token',
		'slug': 'bitforex-token',
		'symbol': 'BF'
	},
	{
		'id': 3702,
		'name': 'Beam',
		'slug': 'beam',
		'symbol': 'BEAM'
	},
	{
		'id': 12365,
		'name': 'Lovely Inu Finance',
		'slug': 'lovely-inu',
		'symbol': 'LOVELY'
	},
	{
		'id': 13727,
		'name': 'Shiryo',
		'slug': 'shiryo-inu',
		'symbol': 'SHIRYO'
	},
	{
		'id': 8214,
		'name': 'Venus DAI',
		'slug': 'venus-dai',
		'symbol': 'vDAI'
	},
	{
		'id': 8080,
		'name': 'Dypius',
		'slug': 'defi-yield-protocol',
		'symbol': 'DYP'
	},
	{
		'id': 4691,
		'name': 'Zano',
		'slug': 'zano',
		'symbol': 'ZANO'
	},
	{
		'id': 2441,
		'name': 'Molecular Future',
		'slug': 'molecular-future',
		'symbol': 'MOF'
	},
	{
		'id': 1087,
		'name': 'Factom',
		'slug': 'factom',
		'symbol': 'FCT'
	},
	{
		'id': 13383,
		'name': 'CropBytes',
		'slug': 'cropbytes',
		'symbol': 'CBX'
	},
	{
		'id': 21849,
		'name': 'Diamond Launch',
		'slug': 'diamond-launch',
		'symbol': 'DLC'
	},
	{
		'id': 16481,
		'name': 'Kasta',
		'slug': 'kasta',
		'symbol': 'KASTA'
	},
	{
		'id': 2548,
		'name': 'POA Network',
		'slug': 'poa',
		'symbol': 'POA'
	},
	{
		'id': 8669,
		'name': 'Sovryn',
		'slug': 'sovryn',
		'symbol': 'SOV'
	},
	{
		'id': 8917,
		'name': 'Shyft Network',
		'slug': 'shyft-network',
		'symbol': 'SHFT'
	},
	{
		'id': 4586,
		'name': 'ProBit Token',
		'slug': 'probit-token',
		'symbol': 'PROB'
	},
	{
		'id': 3126,
		'name': 'ProximaX',
		'slug': 'proximax',
		'symbol': 'XPX'
	},
	{
		'id': 4074,
		'name': 'ScPrime',
		'slug': 'scprime',
		'symbol': 'SCP'
	},
	{
		'id': 7677,
		'name': 'ReapChain',
		'slug': 'reapchain',
		'symbol': 'REAP'
	},
	{
		'id': 11234,
		'name': 'Position Exchange',
		'slug': 'position-exchange',
		'symbol': 'POSI'
	},
	{
		'id': 10462,
		'name': 'SHILL Token',
		'slug': 'project-seed',
		'symbol': 'SHILL'
	},
	{
		'id': 10430,
		'name': 'Argentine Football Association Fan Token',
		'slug': 'argentinefootballassociationfantoken',
		'symbol': 'ARG'
	},
	{
		'id': 5662,
		'name': 'Sylo',
		'slug': 'sylo',
		'symbol': 'SYLO'
	},
	{
		'id': 10776,
		'name': 'Signum',
		'slug': 'signum',
		'symbol': 'SIGNA'
	},
	{
		'id': 8937,
		'name': 'Woonkly Power',
		'slug': 'woonkly-power',
		'symbol': 'WOOP'
	},
	{
		'id': 3936,
		'name': 'GNY',
		'slug': 'gny',
		'symbol': 'GNY'
	},
	{
		'id': 13011,
		'name': 'MonkeyLeague',
		'slug': 'monkeyball',
		'symbol': 'MBS'
	},
	{
		'id': 19152,
		'name': 'Carbon Credit',
		'slug': 'carbon-credit',
		'symbol': 'CCT'
	},
	{
		'id': 1721,
		'name': 'Mysterium',
		'slug': 'mysterium',
		'symbol': 'MYST'
	},
	{
		'id': 8649,
		'name': 'Oxbull.tech',
		'slug': 'oxbull-tech',
		'symbol': 'OXB'
	},
	{
		'id': 5354,
		'name': 'PEAKDEFI',
		'slug': 'peakdefi',
		'symbol': 'PEAK'
	},
	{
		'id': 2576,
		'name': 'Tokenomy',
		'slug': 'tokenomy',
		'symbol': 'TEN'
	},
	{
		'id': 3631,
		'name': 'FOAM',
		'slug': 'foam',
		'symbol': 'FOAM'
	},
	{
		'id': 2605,
		'name': 'BnkToTheFuture',
		'slug': 'bnktothefuture',
		'symbol': 'BFT'
	},
	{
		'id': 7866,
		'name': 'Monavale',
		'slug': 'monavale',
		'symbol': 'MONA'
	},
	{
		'id': 21772,
		'name': 'Shopping.io',
		'slug': 'shopping-io-token',
		'symbol': 'SHOP'
	},
	{
		'id': 1229,
		'name': 'DigixDAO',
		'slug': 'digixdao',
		'symbol': 'DGD'
	},
	{
		'id': 15996,
		'name': 'pSTAKE Finance',
		'slug': 'pstake-finance',
		'symbol': 'PSTAKE'
	},
	{
		'id': 19236,
		'name': 'Gulf Coin',
		'slug': 'gulf-coin',
		'symbol': 'GULF'
	},
	{
		'id': 4116,
		'name': 'TOKPIE',
		'slug': 'tokpie',
		'symbol': 'TKP'
	},
	{
		'id': 4300,
		'name': 'Vivid Labs',
		'slug': 'videocoin',
		'symbol': 'VID'
	},
	{
		'id': 7637,
		'name': 'Trabzonspor Fan Token',
		'slug': 'trabzonspor-fan-token',
		'symbol': 'TRA'
	},
	{
		'id': 20056,
		'name': 'Caduceus',
		'slug': 'caduceus-foundation',
		'symbol': 'CMP'
	},
	{
		'id': 2465,
		'name': 'BUX Token',
		'slug': 'bux-token',
		'symbol': 'BUX'
	},
	{
		'id': 3667,
		'name': 'Atomic Wallet Coin',
		'slug': 'atomic-wallet-coin',
		'symbol': 'AWC'
	},
	{
		'id': 9741,
		'name': 'Solanium',
		'slug': 'solanium',
		'symbol': 'SLIM'
	},
	{
		'id': 14294,
		'name': 'Metaverse.Network Pioneer',
		'slug': 'bitcountry-neer',
		'symbol': 'NEER'
	},
	{
		'id': 11541,
		'name': 'Ariva',
		'slug': 'ariva',
		'symbol': 'ARV'
	},
	{
		'id': 4894,
		'name': 'RING X PLATFORM',
		'slug': 'ring-x-platform',
		'symbol': 'RINGX'
	},
	{
		'id': 4024,
		'name': 'Raven Protocol',
		'slug': 'raven-protocol',
		'symbol': 'RAVEN'
	},
	{
		'id': 17523,
		'name': 'TomTomCoin',
		'slug': 'tomtomcoin',
		'symbol': 'TOMS'
	},
	{
		'id': 7588,
		'name': 'Gameswap',
		'slug': 'gameswap',
		'symbol': 'GSWAP'
	},
	{
		'id': 8236,
		'name': 'Glitch',
		'slug': 'glitch',
		'symbol': 'GLCH'
	},
	{
		'id': 6865,
		'name': 'Crypton',
		'slug': 'utopia',
		'symbol': 'CRP'
	},
	{
		'id': 15305,
		'name': 'Calamari Network',
		'slug': 'calamari-network',
		'symbol': 'KMA'
	},
	{
		'id': 2838,
		'name': 'Plian',
		'slug': 'pchain',
		'symbol': 'PI'
	},
	{
		'id': 14745,
		'name': 'Kromatika',
		'slug': 'kromatika',
		'symbol': 'KROM'
	},
	{
		'id': 2474,
		'name': 'Matrix AI Network',
		'slug': 'matrix-ai-network',
		'symbol': 'MAN'
	},
	{
		'id': 7740,
		'name': 'Polaris Share',
		'slug': 'polaris-share',
		'symbol': 'POLA'
	},
	{
		'id': 20090,
		'name': 'ETHAX',
		'slug': 'ethax',
		'symbol': 'ETHAX'
	},
	{
		'id': 2341,
		'name': 'SwftCoin',
		'slug': 'swftcoin',
		'symbol': 'SWFTC'
	},
	{
		'id': 3840,
		'name': '1irstcoin',
		'slug': '1irstcoin',
		'symbol': 'FST'
	},
	{
		'id': 3617,
		'name': 'ILCOIN',
		'slug': 'ilcoin',
		'symbol': 'ILC'
	},
	{
		'id': 5839,
		'name': 'AnimalGo',
		'slug': 'animalgo',
		'symbol': 'GOM2'
	},
	{
		'id': 6709,
		'name': 'Vidya',
		'slug': 'vidya',
		'symbol': 'VIDYA'
	},
	{
		'id': 5610,
		'name': 'ZIMBOCASH',
		'slug': 'zimbocash',
		'symbol': 'ZASH'
	},
	{
		'id': 7486,
		'name': 'Rari Governance Token',
		'slug': 'rari-governance-token',
		'symbol': 'RGT'
	},
	{
		'id': 4809,
		'name': 'Project WITH',
		'slug': 'project-with',
		'symbol': 'WIKEN'
	},
	{
		'id': 7931,
		'name': 'Forj(Bondly)',
		'slug': 'bondly',
		'symbol': 'BONDLY'
	},
	{
		'id': 7617,
		'name': 'saffron.finance',
		'slug': 'saffron-finance',
		'symbol': 'SFI'
	},
	{
		'id': 2891,
		'name': 'Cardstack',
		'slug': 'cardstack',
		'symbol': 'CARD'
	},
	{
		'id': 5274,
		'name': 'Edgeware',
		'slug': 'edgeware',
		'symbol': 'EDG'
	},
	{
		'id': 4060,
		'name': 'TrustVerse',
		'slug': 'trustverse',
		'symbol': 'TRV'
	},
	{
		'id': 8875,
		'name': 'Uno Re',
		'slug': 'unore',
		'symbol': 'UNO'
	},
	{
		'id': 12859,
		'name': 'DogeBonk',
		'slug': 'dogebonk',
		'symbol': 'DOBO'
	},
	{
		'id': 2529,
		'name': 'Cashaa',
		'slug': 'cashaa',
		'symbol': 'CAS'
	},
	{
		'id': 3875,
		'name': 'Valor Token',
		'slug': 'valor-token',
		'symbol': 'VALOR'
	},
	{
		'id': 7975,
		'name': 'Venus LINK',
		'slug': 'venus-link',
		'symbol': 'vLINK'
	},
	{
		'id': 13632,
		'name': 'Genopets',
		'slug': 'genopets',
		'symbol': 'GENE'
	},
	{
		'id': 2243,
		'name': 'Dragonchain',
		'slug': 'dragonchain',
		'symbol': 'DRGN'
	},
	{
		'id': 8320,
		'name': 'PolkaBridge',
		'slug': 'polkabridge',
		'symbol': 'PBR'
	},
	{
		'id': 4167,
		'name': 'Bitrue Coin',
		'slug': 'bitrue-coin',
		'symbol': 'BTR'
	},
	{
		'id': 3361,
		'name': 'MintMe.com Coin',
		'slug': 'mintme-com-coin',
		'symbol': 'MINTME'
	},
	{
		'id': 5601,
		'name': 'STAKE',
		'slug': 'xdai',
		'symbol': 'STAKE'
	},
	{
		'id': 5541,
		'name': 'Xaya',
		'slug': 'xaya',
		'symbol': 'CHI'
	},
	{
		'id': 8579,
		'name': 'Polkamarkets',
		'slug': 'polkamarkets',
		'symbol': 'POLK'
	},
	{
		'id': 11738,
		'name': 'Adora Token',
		'slug': 'adora-token',
		'symbol': 'ARA'
	},
	{
		'id': 21156,
		'name': 'STAT',
		'slug': 'stat',
		'symbol': 'STAT'
	},
	{
		'id': 6588,
		'name': 'Etherisc DIP Token',
		'slug': 'etherisc',
		'symbol': 'DIP'
	},
	{
		'id': 3136,
		'name': 'MEET.ONE',
		'slug': 'meetone',
		'symbol': 'MEETONE'
	},
	{
		'id': 6942,
		'name': 'Juggernaut',
		'slug': 'juggernaut',
		'symbol': 'JGN'
	},
	{
		'id': 17047,
		'name': 'WeWay',
		'slug': 'weway',
		'symbol': 'WWY'
	},
	{
		'id': 3661,
		'name': 'Stronghold Token',
		'slug': 'stronghold-token',
		'symbol': 'SHX'
	},
	{
		'id': 3853,
		'name': 'MultiVAC',
		'slug': 'multivac',
		'symbol': 'MTV'
	},
	{
		'id': 19893,
		'name': 'Revolt 2 Earn',
		'slug': 'revolt-2-earn',
		'symbol': 'RVLT'
	},
	{
		'id': 18624,
		'name': 'Azit',
		'slug': 'azit',
		'symbol': 'AZIT'
	},
	{
		'id': 66,
		'name': 'Nxt',
		'slug': 'nxt',
		'symbol': 'NXT'
	},
	{
		'id': 11977,
		'name': 'Infinity PAD',
		'slug': 'infinity-pad',
		'symbol': 'IPAD'
	},
	{
		'id': 2110,
		'name': 'Dovu',
		'slug': 'dovu',
		'symbol': 'DOV'
	},
	{
		'id': 377,
		'name': 'Navcoin',
		'slug': 'nav-coin',
		'symbol': 'NAV'
	},
	{
		'id': 2643,
		'name': 'Sentinel',
		'slug': 'sentinel',
		'symbol': 'DVPN'
	},
	{
		'id': 9920,
		'name': 'RUSH COIN',
		'slug': 'rush-coin',
		'symbol': 'RUSH'
	},
	{
		'id': 9938,
		'name': 'OpenOcean',
		'slug': 'openocean',
		'symbol': 'OOE'
	},
	{
		'id': 3893,
		'name': 'ChangeNOW Token',
		'slug': 'now-token',
		'symbol': 'NOW'
	},
	{
		'id': 9176,
		'name': 'RocketX exchange',
		'slug': 'rocket-vault-rocketx',
		'symbol': 'RVF'
	},
	{
		'id': 8368,
		'name': 'Xeno Token',
		'slug': 'xeno-token',
		'symbol': 'XNO'
	},
	{
		'id': 15585,
		'name': 'GuildFi',
		'slug': 'guildfi',
		'symbol': 'GF'
	},
	{
		'id': 3829,
		'name': 'Nash',
		'slug': 'nash',
		'symbol': 'NEX'
	},
	{
		'id': 1903,
		'name': 'HyperCash',
		'slug': 'hypercash',
		'symbol': 'HC'
	},
	{
		'id': 1037,
		'name': 'Agoras: Currency of Tau',
		'slug': 'agoras-tokens',
		'symbol': 'AGRS'
	},
	{
		'id': 624,
		'name': 'bitCNY',
		'slug': 'bitcny',
		'symbol': 'BITCNY'
	},
	{
		'id': 2608,
		'name': 'Mithril',
		'slug': 'mithril',
		'symbol': 'MITH'
	},
	{
		'id': 11423,
		'name': 'VEMP',
		'slug': 'vempire-ddao',
		'symbol': 'VEMP'
	},
	{
		'id': 10421,
		'name': 'Torum',
		'slug': 'torum',
		'symbol': 'XTM'
	},
	{
		'id': 8648,
		'name': 'ChainGuardians',
		'slug': 'chain-guardians',
		'symbol': 'CGG'
	},
	{
		'id': 19162,
		'name': 'BendDAO',
		'slug': 'bend-dao',
		'symbol': 'BEND'
	},
	{
		'id': 11308,
		'name': 'Fenerbahçe Token',
		'slug': 'fenerbahce-token',
		'symbol': 'FB'
	},
	{
		'id': 14304,
		'name': 'Gamium',
		'slug': 'gamium',
		'symbol': 'GMM'
	},
	{
		'id': 3137,
		'name': 'KARMA',
		'slug': 'karma-eos',
		'symbol': 'KARMA'
	},
	{
		'id': 16104,
		'name': 'PearDAO',
		'slug': 'peardao',
		'symbol': 'PEX'
	},
	{
		'id': 16231,
		'name': 'Platypus Finance',
		'slug': 'platypus-finance',
		'symbol': 'PTP'
	},
	{
		'id': 2847,
		'name': 'Abyss',
		'slug': 'abyss',
		'symbol': 'ABYSS'
	},
	{
		'id': 6993,
		'name': 'REVV',
		'slug': 'revv',
		'symbol': 'REVV'
	},
	{
		'id': 11578,
		'name': 'Cirus Foundation',
		'slug': 'cirus-foundation',
		'symbol': 'CIRUS'
	},
	{
		'id': 5634,
		'name': 'Fuse Network',
		'slug': 'fuse-network',
		'symbol': 'FUSE'
	},
	{
		'id': 22320,
		'name': 'HELLO',
		'slug': 'hello-labs',
		'symbol': 'HELLO'
	},
	{
		'id': 10336,
		'name': 'Hamster',
		'slug': 'hamster',
		'symbol': 'HAM'
	},
	{
		'id': 3871,
		'name': 'Newton',
		'slug': 'newton',
		'symbol': 'NEW'
	},
	{
		'id': 833,
		'name': 'Gridcoin',
		'slug': 'gridcoin',
		'symbol': 'GRC'
	},
	{
		'id': 2429,
		'name': 'Mobius',
		'slug': 'mobius',
		'symbol': 'MOBI'
	},
	{
		'id': 8495,
		'name': 'Everest',
		'slug': 'everest',
		'symbol': 'ID'
	},
	{
		'id': 3142,
		'name': 'BaaSid',
		'slug': 'baasid',
		'symbol': 'BAAS'
	},
	{
		'id': 1807,
		'name': 'Santiment Network Token',
		'slug': 'santiment',
		'symbol': 'SAN'
	},
	{
		'id': 19747,
		'name': 'MandoX V2',
		'slug': 'mandox-v2',
		'symbol': 'MANDOX'
	},
	{
		'id': 14336,
		'name': 'TRVL',
		'slug': 'trvl',
		'symbol': 'TRVL'
	},
	{
		'id': 8492,
		'name': 'Vesper',
		'slug': 'vesper',
		'symbol': 'VSP'
	},
	{
		'id': 5719,
		'name': 'CACHE Gold',
		'slug': 'cache-gold',
		'symbol': 'CGT'
	},
	{
		'id': 1191,
		'name': 'Memetic / PepeCoin',
		'slug': 'memetic',
		'symbol': 'MEME'
	},
	{
		'id': 2601,
		'name': '1World',
		'slug': '1world',
		'symbol': '1WO'
	},
	{
		'id': 5906,
		'name': 'NerveNetwork',
		'slug': 'nervenetwork',
		'symbol': 'NVT'
	},
	{
		'id': 10326,
		'name': 'BullPerks',
		'slug': 'bullperks',
		'symbol': 'BLP'
	},
	{
		'id': 20949,
		'name': 'Origin Dollar Governance',
		'slug': 'origin-dollar-governance',
		'symbol': 'OGV'
	},
	{
		'id': 9212,
		'name': 'CumRocket',
		'slug': 'cumrocket',
		'symbol': 'CUMMIES'
	},
	{
		'id': 15463,
		'name': 'SIDUS',
		'slug': 'sidus',
		'symbol': 'SIDUS'
	},
	{
		'id': 4245,
		'name': 'Enecuum',
		'slug': 'enecuum',
		'symbol': 'ENQ'
	},
	{
		'id': 7395,
		'name': 'Atari Token',
		'slug': 'atari-token',
		'symbol': 'ATRI'
	},
	{
		'id': 18706,
		'name': 'Football World Community',
		'slug': 'qatar-2022-token',
		'symbol': 'FWC'
	},
	{
		'id': 9103,
		'name': 'GAMEE',
		'slug': 'gamee',
		'symbol': 'GMEE'
	},
	{
		'id': 10294,
		'name': 'DeFi Land',
		'slug': 'defi-land',
		'symbol': 'DFL'
	},
	{
		'id': 21690,
		'name': 'RED TOKEN',
		'slug': 'red-token',
		'symbol': 'RED'
	},
	{
		'id': 10046,
		'name': 'Dotmoovs',
		'slug': 'dotmoovs',
		'symbol': 'MOOV'
	},
	{
		'id': 2572,
		'name': 'BABB',
		'slug': 'babb',
		'symbol': 'BAX'
	},
	{
		'id': 6731,
		'name': 'Tokamak Network',
		'slug': 'tokamak-network',
		'symbol': 'TON'
	},
	{
		'id': 9220,
		'name': 'StrikeX',
		'slug': 'strikecoin',
		'symbol': 'STRX'
	},
	{
		'id': 502,
		'name': 'Carboncoin',
		'slug': 'carboncoin',
		'symbol': 'CARBON'
	},
	{
		'id': 8644,
		'name': 'Kylin',
		'slug': 'kylin',
		'symbol': 'KYL'
	},
	{
		'id': 11150,
		'name': 'DeFine',
		'slug': 'define',
		'symbol': 'DFA'
	},
	{
		'id': 1786,
		'name': 'SunContract',
		'slug': 'suncontract',
		'symbol': 'SNC'
	},
	{
		'id': 4277,
		'name': 'DECOIN',
		'slug': 'decoin',
		'symbol': 'DTEP'
	},
	{
		'id': 8757,
		'name': 'SafeMoon',
		'slug': 'safemoon',
		'symbol': 'SAFEMOON'
	},
	{
		'id': 1789,
		'name': 'Populous',
		'slug': 'populous',
		'symbol': 'PPT'
	},
	{
		'id': 8799,
		'name': 'InsurAce',
		'slug': 'insurace',
		'symbol': 'INSUR'
	},
	{
		'id': 19476,
		'name': 'TiFi Token',
		'slug': 'tifi-token',
		'symbol': 'TIFI'
	},
	{
		'id': 10977,
		'name': 'Mint Club',
		'slug': 'mint-club',
		'symbol': 'MINT'
	},
	{
		'id': 11409,
		'name': 'Tarot',
		'slug': 'tarot',
		'symbol': 'TAROT'
	},
	{
		'id': 10324,
		'name': 'Gravity Finance',
		'slug': 'gravity-finance',
		'symbol': 'GFI'
	},
	{
		'id': 10099,
		'name': 'KALM',
		'slug': 'kalmar',
		'symbol': 'KALM'
	},
	{
		'id': 4957,
		'name': 'Minter Network',
		'slug': 'minter-network',
		'symbol': 'BIP'
	},
	{
		'id': 8936,
		'name': 'Trias Token (new)',
		'slug': 'trias-token',
		'symbol': 'TRIAS'
	},
	{
		'id': 4804,
		'name': 'ROOBEE',
		'slug': 'roobee',
		'symbol': 'ROOBEE'
	},
	{
		'id': 11531,
		'name': 'Portugal National Team Fan Token',
		'slug': 'portugal-national-team-fan-token',
		'symbol': 'POR'
	},
	{
		'id': 4075,
		'name': 'CryptoFranc',
		'slug': 'cryptofranc',
		'symbol': 'XCHF'
	},
	{
		'id': 10404,
		'name': 'Integral',
		'slug': 'integral',
		'symbol': 'ITGR'
	},
	{
		'id': 15744,
		'name': 'Prism',
		'slug': 'prism',
		'symbol': 'PRISM'
	},
	{
		'id': 2677,
		'name': 'Linker Coin',
		'slug': 'linker-coin',
		'symbol': 'LNC'
	},
	{
		'id': 1947,
		'name': 'Monetha',
		'slug': 'monetha',
		'symbol': 'MTH'
	},
	{
		'id': 10933,
		'name': 'Impossible Finance Launchpad',
		'slug': 'impossible-decentralized-incubator-access',
		'symbol': 'IDIA'
	},
	{
		'id': 7131,
		'name': 'YAM V3',
		'slug': 'yam',
		'symbol': 'YAM'
	},
	{
		'id': 5328,
		'name': 'WOM Protocol',
		'slug': 'wom-protocol',
		'symbol': 'WOM'
	},
	{
		'id': 3850,
		'name': 'OTOCASH',
		'slug': 'otocash',
		'symbol': 'OTO'
	},
	{
		'id': 7805,
		'name': 'Muse',
		'slug': 'muse',
		'symbol': 'MUSE'
	},
	{
		'id': 6283,
		'name': 'Blocery',
		'slug': 'blocery',
		'symbol': 'BLY'
	},
	{
		'id': 13636,
		'name': 'GMCoin',
		'slug': 'gmcoin',
		'symbol': 'GMCOIN'
	},
	{
		'id': 9299,
		'name': 'NFT Art Finance',
		'slug': 'nft-art-finance',
		'symbol': 'NFTART'
	},
	{
		'id': 3241,
		'name': 'FortKnoxster',
		'slug': 'fortknoxster',
		'symbol': 'FKX'
	},
	{
		'id': 2709,
		'name': 'Morpheus Labs',
		'slug': 'morpheus-labs',
		'symbol': 'MITX'
	},
	{
		'id': 8133,
		'name': 'Skey Network',
		'slug': 'smartkey',
		'symbol': 'SKEY'
	},
	{
		'id': 8166,
		'name': 'MAPS',
		'slug': 'maps',
		'symbol': 'MAPS'
	},
	{
		'id': 576,
		'name': 'GameCredits',
		'slug': 'gamecredits',
		'symbol': 'GAME'
	},
	{
		'id': 1107,
		'name': 'PAC Protocol',
		'slug': 'pac-protocol',
		'symbol': 'PAC'
	},
	{
		'id': 14534,
		'name': 'ParaSwap',
		'slug': 'paraswap',
		'symbol': 'PSP'
	},
	{
		'id': 2711,
		'name': 'DOC.COM',
		'slug': 'doc-com',
		'symbol': 'MTC'
	},
	{
		'id': 8132,
		'name': 'BiFi',
		'slug': 'bifi',
		'symbol': 'BIFI'
	},
	{
		'id': 13319,
		'name': 'Flamengo Fan Token',
		'slug': 'flamengo-fan-token',
		'symbol': 'MENGO'
	},
	{
		'id': 10527,
		'name': 'Lithium',
		'slug': 'lithium',
		'symbol': 'LITH'
	},
	{
		'id': 8424,
		'name': 'Deri Protocol',
		'slug': 'deri-protocol',
		'symbol': 'DERI'
	},
	{
		'id': 7094,
		'name': 'dHedge DAO',
		'slug': 'dhedge-dao',
		'symbol': 'DHT'
	},
	{
		'id': 8494,
		'name': 'Modefi',
		'slug': 'modefi',
		'symbol': 'MOD'
	},
	{
		'id': 3663,
		'name': 'Footballcoin (XFC)',
		'slug': 'footballcoin',
		'symbol': 'XFC'
	},
	{
		'id': 3704,
		'name': 'v.systems',
		'slug': 'v-systems',
		'symbol': 'VSYS'
	},
	{
		'id': 2666,
		'name': 'Effect Network',
		'slug': 'effect-ai',
		'symbol': 'EFX'
	},
	{
		'id': 2540,
		'name': 'Litecoin Cash',
		'slug': 'litecoin-cash',
		'symbol': 'LCC'
	},
	{
		'id': 1596,
		'name': 'Edgeless',
		'slug': 'edgeless',
		'symbol': 'EDG'
	},
	{
		'id': 3917,
		'name': 'Sentivate',
		'slug': 'sentivate',
		'symbol': 'SNTVT'
	},
	{
		'id': 9588,
		'name': 'O3 Swap',
		'slug': 'o3-swap',
		'symbol': 'O3'
	},
	{
		'id': 20236,
		'name': 'Green Satoshi Token (BSC)',
		'slug': 'green-satoshi-token-bsc',
		'symbol': 'GST'
	},
	{
		'id': 2410,
		'name': 'SpaceChain',
		'slug': 'spacechain',
		'symbol': 'SPC'
	},
	{
		'id': 9260,
		'name': 'Zigcoin',
		'slug': 'zigcoin',
		'symbol': 'ZIG'
	},
	{
		'id': 3756,
		'name': '#MetaHash',
		'slug': 'metahash',
		'symbol': 'MHC'
	},
	{
		'id': 2001,
		'name': 'ColossusXT',
		'slug': 'colossusxt',
		'symbol': 'COLX'
	},
	{
		'id': 2342,
		'name': 'Covesting',
		'slug': 'covesting',
		'symbol': 'COV'
	},
	{
		'id': 18101,
		'name': 'NanoByte Token',
		'slug': 'nanobyte-token',
		'symbol': 'NBT'
	},
	{
		'id': 8715,
		'name': 'Taraxa',
		'slug': 'taraxa',
		'symbol': 'TARA'
	},
	{
		'id': 3020,
		'name': 'BHPCoin',
		'slug': 'bhp-coin',
		'symbol': 'BHP'
	},
	{
		'id': 4978,
		'name': 'Wownero',
		'slug': 'wownero',
		'symbol': 'WOW'
	},
	{
		'id': 10239,
		'name': 'SpiritSwap',
		'slug': 'spiritswap',
		'symbol': 'SPIRIT'
	},
	{
		'id': 13571,
		'name': 'ALL.ART protocol',
		'slug': 'all-art-protocol',
		'symbol': 'AART'
	},
	{
		'id': 8849,
		'name': 'AXIS Token',
		'slug': 'axis-token',
		'symbol': 'AXIS'
	},
	{
		'id': 8519,
		'name': 'Xend Finance',
		'slug': 'xend-finance',
		'symbol': 'XEND'
	},
	{
		'id': 3657,
		'name': 'Lambda',
		'slug': 'lambda',
		'symbol': 'LAMB'
	},
	{
		'id': 7841,
		'name': 'Idle',
		'slug': 'idle',
		'symbol': 'IDLE'
	},
	{
		'id': 1619,
		'name': 'Skycoin',
		'slug': 'skycoin',
		'symbol': 'SKY'
	},
	{
		'id': 5640,
		'name': 'PointPay',
		'slug': 'pointpay',
		'symbol': 'PXP'
	},
	{
		'id': 9488,
		'name': 'ZooKeeper',
		'slug': 'zookeeper',
		'symbol': 'ZOO'
	},
	{
		'id': 6611,
		'name': 'DuckDaoDime',
		'slug': 'duckdaodime',
		'symbol': 'DDIM'
	},
	{
		'id': 3607,
		'name': 'VestChain',
		'slug': 'vestchain',
		'symbol': 'VEST'
	},
	{
		'id': 1758,
		'name': 'TenX',
		'slug': 'tenx',
		'symbol': 'PAY'
	},
	{
		'id': 11685,
		'name': 'BetU',
		'slug': 'betu',
		'symbol': 'BETU'
	},
	{
		'id': 6801,
		'name': 'TriumphX',
		'slug': 'triumphx',
		'symbol': 'TRIX'
	},
	{
		'id': 21701,
		'name': 'Skeb Coin',
		'slug': 'skeb-coin',
		'symbol': 'SKEB'
	},
	{
		'id': 3799,
		'name': 'SafeCoin',
		'slug': 'safecoin',
		'symbol': 'SAFE'
	},
	{
		'id': 2739,
		'name': 'Digix Gold Token',
		'slug': 'digix-gold-token',
		'symbol': 'DGX'
	},
	{
		'id': 4757,
		'name': 'Robonomics.network',
		'slug': 'robonomics-network',
		'symbol': 'XRT'
	},
	{
		'id': 6194,
		'name': 'Geeq',
		'slug': 'geeq',
		'symbol': 'GEEQ'
	},
	{
		'id': 6901,
		'name': 'Swerve',
		'slug': 'swerve',
		'symbol': 'SWRV'
	},
	{
		'id': 11533,
		'name': 'UFC Fan Token',
		'slug': 'ufc-fan-token',
		'symbol': 'UFC'
	},
	{
		'id': 19229,
		'name': 'Primate',
		'slug': 'primate',
		'symbol': 'PRIMATE'
	},
	{
		'id': 2430,
		'name': 'Hydro Protocol',
		'slug': 'hydro-protocol',
		'symbol': 'HOT'
	},
	{
		'id': 4287,
		'name': 'Jobchain',
		'slug': 'jobchain',
		'symbol': 'JOB'
	},
	{
		'id': 2909,
		'name': 'LikeCoin',
		'slug': 'likecoin',
		'symbol': 'LIKE'
	},
	{
		'id': 7591,
		'name': 'Misbloc',
		'slug': 'misbloc',
		'symbol': 'MSB'
	},
	{
		'id': 8349,
		'name': 'Onooks',
		'slug': 'onooks',
		'symbol': 'OOKS'
	},
	{
		'id': 2337,
		'name': 'Lamden',
		'slug': 'lamden',
		'symbol': 'TAU'
	},
	{
		'id': 3843,
		'name': 'BOLT',
		'slug': 'bolt',
		'symbol': 'BOLT'
	},
	{
		'id': 20783,
		'name': 'Kripto koin',
		'slug': 'kripto-koin',
		'symbol': 'KRIPTO'
	},
	{
		'id': 2921,
		'name': 'OneLedger',
		'slug': 'oneledger',
		'symbol': 'OLT'
	},
	{
		'id': 11871,
		'name': 'GameZone',
		'slug': 'gamezone',
		'symbol': 'GZONE'
	},
	{
		'id': 2277,
		'name': 'SmartMesh',
		'slug': 'smartmesh',
		'symbol': 'SMT'
	},
	{
		'id': 6665,
		'name': 'LGCY Network',
		'slug': 'lgcy-network',
		'symbol': 'LGCY'
	},
	{
		'id': 9201,
		'name': 'StackOs',
		'slug': 'stackos',
		'symbol': 'STACK'
	},
	{
		'id': 9155,
		'name': 'Digital Fitness',
		'slug': 'digital-fitness',
		'symbol': 'DEFIT'
	},
	{
		'id': 3831,
		'name': 'Safe Haven',
		'slug': 'safe-haven',
		'symbol': 'SHA'
	},
	{
		'id': 6735,
		'name': 'Nexalt',
		'slug': 'nexalt',
		'symbol': 'XLT'
	},
	{
		'id': 7022,
		'name': 'Pickle Finance',
		'slug': 'pickle-finance',
		'symbol': 'PICKLE'
	},
	{
		'id': 16554,
		'name': 'Neighbourhoods',
		'slug': 'neighbourhoods',
		'symbol': 'NHT'
	},
	{
		'id': 12653,
		'name': 'ROCO FINANCE',
		'slug': 'roco-finance',
		'symbol': 'ROCO'
	},
	{
		'id': 11291,
		'name': 'Kryptomon',
		'slug': 'kryptomon',
		'symbol': 'KMON'
	},
	{
		'id': 5423,
		'name': 'DSLA Protocol',
		'slug': 'dsla-protocol',
		'symbol': 'DSLA'
	},
	{
		'id': 11714,
		'name': 'Brazil National Football Team Fan Token',
		'slug': 'brazil-national-football-team-fan-token',
		'symbol': 'BFT'
	},
	{
		'id': 16679,
		'name': 'AgeOfGods',
		'slug': 'ageofgods',
		'symbol': 'AOG'
	},
	{
		'id': 18483,
		'name': 'Era Token (Era7)',
		'slug': 'era-token',
		'symbol': 'ERA'
	},
	{
		'id': 5922,
		'name': 'Swingby',
		'slug': 'swingby',
		'symbol': 'SWINGBY'
	},
	{
		'id': 7952,
		'name': 'Venus SXP',
		'slug': 'vsxp',
		'symbol': 'vSXP'
	},
	{
		'id': 7976,
		'name': 'Venus DOT',
		'slug': 'venus-dot',
		'symbol': 'vDOT'
	},
	{
		'id': 6891,
		'name': 'Niftyx Protocol',
		'slug': 'niftyx-protocol',
		'symbol': 'SHROOM'
	},
	{
		'id': 5203,
		'name': 'Perth Mint Gold Token',
		'slug': 'perth-mint-gold-token',
		'symbol': 'PMGT'
	},
	{
		'id': 3616,
		'name': 'EvidenZ',
		'slug': 'evidenz',
		'symbol': 'BCDT'
	},
	{
		'id': 4017,
		'name': 'EOSDT',
		'slug': 'eosdt',
		'symbol': 'EOSDT'
	},
	{
		'id': 2874,
		'name': 'Aurora',
		'slug': 'aurora',
		'symbol': 'AOA'
	},
	{
		'id': 2830,
		'name': 'Seele-N',
		'slug': 'seele',
		'symbol': 'SEELE'
	},
	{
		'id': 2575,
		'name': 'Bitcoin Private',
		'slug': 'bitcoin-private',
		'symbol': 'BTCP'
	},
	{
		'id': 3205,
		'name': 'VeriDocGlobal',
		'slug': 'veridocglobal',
		'symbol': 'VDG'
	},
	{
		'id': 362,
		'name': 'CloakCoin',
		'slug': 'cloakcoin',
		'symbol': 'CLOAK'
	},
	{
		'id': 1082,
		'name': 'SIBCoin',
		'slug': 'sibcoin',
		'symbol': 'SIB'
	},
	{
		'id': 8603,
		'name': 'AntiMatter Governance Token',
		'slug': 'antimatter',
		'symbol': 'MATTER'
	},
	{
		'id': 8968,
		'name': 'Polychain Monsters',
		'slug': 'polkamon',
		'symbol': 'PMON'
	},
	{
		'id': 10412,
		'name': 'HoDooi.com',
		'slug': 'hodooi',
		'symbol': 'HOD'
	},
	{
		'id': 9865,
		'name': 'Ispolink',
		'slug': 'ispolink',
		'symbol': 'ISP'
	},
	{
		'id': 11528,
		'name': 'Valencia CF Fan Token',
		'slug': 'valencia-cf-fan-token',
		'symbol': 'VCF'
	},
	{
		'id': 11700,
		'name': 'Life Crypto',
		'slug': 'life-crypto',
		'symbol': 'LIFE'
	},
	{
		'id': 1660,
		'name': 'Monolith',
		'slug': 'monolith',
		'symbol': 'TKN'
	},
	{
		'id': 8620,
		'name': 'TOWER',
		'slug': 'tower-token',
		'symbol': 'TOWER'
	},
	{
		'id': 19216,
		'name': 'Blockchain Brawlers',
		'slug': 'blockchain-brawlers',
		'symbol': 'BRWL'
	},
	{
		'id': 3279,
		'name': 'Rotharium',
		'slug': 'rotharium',
		'symbol': 'RTH'
	},
	{
		'id': 3935,
		'name': 'SparkPoint',
		'slug': 'sparkpoint',
		'symbol': 'SRK'
	},
	{
		'id': 17241,
		'name': 'GPEX',
		'slug': 'gpex',
		'symbol': 'GPX'
	},
	{
		'id': 8695,
		'name': 'BlockWallet',
		'slug': 'blank-wallet',
		'symbol': 'BLANK'
	},
	{
		'id': 5836,
		'name': 'Idena',
		'slug': 'idena',
		'symbol': 'IDNA'
	},
	{
		'id': 2235,
		'name': 'Time New Bank',
		'slug': 'time-new-bank',
		'symbol': 'TNB'
	},
	{
		'id': 10805,
		'name': 'Throne',
		'slug': 'throne',
		'symbol': 'THN'
	},
	{
		'id': 9958,
		'name': 'SafeMoon Inu',
		'slug': 'safemoon-inu',
		'symbol': 'SMI'
	},
	{
		'id': 2837,
		'name': '0xBitcoin',
		'slug': '0xbtc',
		'symbol': '0xBTC'
	},
	{
		'id': 22103,
		'name': 'Lunar',
		'slug': 'lunar-v2',
		'symbol': 'LNR'
	},
	{
		'id': 2696,
		'name': 'DAEX',
		'slug': 'daex',
		'symbol': 'DAX'
	},
	{
		'id': 2340,
		'name': 'Bloom',
		'slug': 'bloomtoken',
		'symbol': 'BLT'
	},
	{
		'id': 10465,
		'name': 'Polytrade',
		'slug': 'polytrade',
		'symbol': 'TRADE'
	},
	{
		'id': 9198,
		'name': 'Hord',
		'slug': 'hord',
		'symbol': 'HORD'
	},
	{
		'id': 1996,
		'name': 'SALT',
		'slug': 'salt',
		'symbol': 'SALT'
	},
	{
		'id': 10747,
		'name': 'ETHPad',
		'slug': 'ethpad',
		'symbol': 'ETHPAD'
	},
	{
		'id': 12813,
		'name': 'Sinverse',
		'slug': 'sincity-token',
		'symbol': 'SIN'
	},
	{
		'id': 22052,
		'name': 'SpaceN',
		'slug': 'spacen',
		'symbol': 'SN'
	},
	{
		'id': 8307,
		'name': 'DIGG',
		'slug': 'digg',
		'symbol': 'DIGG'
	},
	{
		'id': 4866,
		'name': 'Grimm',
		'slug': 'grimm',
		'symbol': 'GRIMM'
	},
	{
		'id': 12929,
		'name': 'OneArt',
		'slug': 'artwallet',
		'symbol': '1ART'
	},
	{
		'id': 9205,
		'name': 'K21',
		'slug': 'k21',
		'symbol': 'K21'
	},
	{
		'id': 10774,
		'name': 'Sonar',
		'slug': 'sonar',
		'symbol': 'PING'
	},
	{
		'id': 8043,
		'name': 'MahaDAO',
		'slug': 'mahadao',
		'symbol': 'MAHA'
	},
	{
		'id': 9493,
		'name': 'Reflexer Ungovernance Token',
		'slug': 'reflexer-ungovernance-token',
		'symbol': 'FLX'
	},
	{
		'id': 8541,
		'name': 'SifChain',
		'slug': 'sifchain',
		'symbol': 'erowan'
	},
	{
		'id': 2021,
		'name': 'RChain',
		'slug': 'rchain',
		'symbol': 'REV'
	},
	{
		'id': 10403,
		'name': 'Kommunitas',
		'slug': 'kommunitas',
		'symbol': 'KOM'
	},
	{
		'id': 17852,
		'name': 'Geojam Token',
		'slug': 'geojam-token',
		'symbol': 'JAM'
	},
	{
		'id': 7553,
		'name': 'unFederalReserve',
		'slug': 'unfederalreserve',
		'symbol': 'eRSDL'
	},
	{
		'id': 6638,
		'name': 'UniLayer',
		'slug': 'unilayer',
		'symbol': 'LAYER'
	},
	{
		'id': 1703,
		'name': 'Metaverse ETP',
		'slug': 'metaverse',
		'symbol': 'ETP'
	},
	{
		'id': 4228,
		'name': 'Ferrum Network',
		'slug': 'ferrum-network',
		'symbol': 'FRM'
	},
	{
		'id': 5471,
		'name': 'Ghost',
		'slug': 'ghost',
		'symbol': 'GHOST'
	},
	{
		'id': 8716,
		'name': 'Convergence',
		'slug': 'convergence',
		'symbol': 'CONV'
	},
	{
		'id': 5748,
		'name': 'mStable Governance Token: Meta (MTA)',
		'slug': 'meta',
		'symbol': 'MTA'
	},
	{
		'id': 8697,
		'name': 'Konomi Network',
		'slug': 'konomi-network',
		'symbol': 'KONO'
	},
	{
		'id': 201,
		'name': 'Einsteinium',
		'slug': 'einsteinium',
		'symbol': 'EMC2'
	},
	{
		'id': 2658,
		'name': 'Smart MFG',
		'slug': 'smart-mfg',
		'symbol': 'MFG'
	},
	{
		'id': 11278,
		'name': 'Project TXA',
		'slug': 'project-txa',
		'symbol': 'TXA'
	},
	{
		'id': 1636,
		'name': 'XTRABYTES',
		'slug': 'xtrabytes',
		'symbol': 'XBY'
	},
	{
		'id': 9507,
		'name': 'Göztepe S.K. Fan Token',
		'slug': 'goztepe-sk-fantoken',
		'symbol': 'GOZ'
	},
	{
		'id': 4769,
		'name': 'EOS Force',
		'slug': 'eos-force',
		'symbol': 'EOSC'
	},
	{
		'id': 14345,
		'name': 'Botto',
		'slug': 'botto',
		'symbol': 'BOTTO'
	},
	{
		'id': 8730,
		'name': 'Belt Finance',
		'slug': 'belt',
		'symbol': 'BELT'
	},
	{
		'id': 2473,
		'name': 'All Sports',
		'slug': 'all-sports',
		'symbol': 'SOC'
	},
	{
		'id': 8162,
		'name': 'AME Chain',
		'slug': 'amepay',
		'symbol': 'AME'
	},
	{
		'id': 16185,
		'name': 'Dingocoin',
		'slug': 'dingocoin',
		'symbol': 'DINGO'
	},
	{
		'id': 7622,
		'name': 'UBIX.Network',
		'slug': 'ubix-network',
		'symbol': 'UBX'
	},
	{
		'id': 2554,
		'name': 'Lympo',
		'slug': 'lympo',
		'symbol': 'LYM'
	},
	{
		'id': 11848,
		'name': 'Strips Finance',
		'slug': 'strips-finance',
		'symbol': 'STRP'
	},
	{
		'id': 5313,
		'name': 'CONTRACOIN',
		'slug': 'contracoin',
		'symbol': 'CTCN'
	},
	{
		'id': 11245,
		'name': 'Landshare',
		'slug': 'landshare',
		'symbol': 'LAND'
	},
	{
		'id': 1908,
		'name': 'Nebulas',
		'slug': 'nebulas-token',
		'symbol': 'NAS'
	},
	{
		'id': 4985,
		'name': 'ArdCoin',
		'slug': 'ardcoin',
		'symbol': 'ARDX'
	},
	{
		'id': 6537,
		'name': 'RioDeFi',
		'slug': 'rio-defi',
		'symbol': 'RFUEL'
	},
	{
		'id': 14767,
		'name': 'The Coop Network',
		'slug': 'the-coop-network',
		'symbol': 'GMD'
	},
	{
		'id': 7348,
		'name': 'Portion',
		'slug': 'portion',
		'symbol': 'PRT'
	},
	{
		'id': 8329,
		'name': 'PAID Network',
		'slug': 'paid-network',
		'symbol': 'PAID'
	},
	{
		'id': 9461,
		'name': 'X World Games',
		'slug': 'x-world-games',
		'symbol': 'XWG'
	},
	{
		'id': 15084,
		'name': 'Symbiosis Finance',
		'slug': 'symbiosis-finance',
		'symbol': 'SIS'
	},
	{
		'id': 21152,
		'name': 'Green Satoshi Token (ETH)',
		'slug': 'green-satoshi-token-eth',
		'symbol': 'GST'
	},
	{
		'id': 588,
		'name': 'Ubiq',
		'slug': 'ubiq',
		'symbol': 'UBQ'
	},
	{
		'id': 9029,
		'name': 'Graphlinq Protocol',
		'slug': 'graphlinq-protocol',
		'symbol': 'GLQ'
	},
	{
		'id': 3388,
		'name': 'FREEdom Coin',
		'slug': 'free-coin',
		'symbol': 'FREE'
	},
	{
		'id': 2912,
		'name': 'TENT',
		'slug': 'tent',
		'symbol': 'TENT'
	},
	{
		'id': 4979,
		'name': 'PegNet',
		'slug': 'pegnet',
		'symbol': 'PEG'
	},
	{
		'id': 1032,
		'name': 'TransferCoin',
		'slug': 'transfercoin',
		'symbol': 'TX'
	},
	{
		'id': 7110,
		'name': 'New BitShares',
		'slug': 'new-bitshares',
		'symbol': 'NBS'
	},
	{
		'id': 22490,
		'name': 'PIAS',
		'slug': 'pias',
		'symbol': 'PIAS'
	},
	{
		'id': 11349,
		'name': 'ADAPad',
		'slug': 'adapad',
		'symbol': 'ADAPAD'
	},
	{
		'id': 9693,
		'name': 'DOGGY',
		'slug': 'doggy',
		'symbol': 'DOGGY'
	},
	{
		'id': 5600,
		'name': 'Attila',
		'slug': 'attila',
		'symbol': 'ATT'
	},
	{
		'id': 9237,
		'name': 'Horizon Protocol',
		'slug': 'horizon-protocol',
		'symbol': 'HZN'
	},
	{
		'id': 8409,
		'name': 'Razor Network',
		'slug': 'razor-network',
		'symbol': 'RAZOR'
	},
	{
		'id': 4974,
		'name': 'EXMO Coin',
		'slug': 'exmo-coin',
		'symbol': 'EXM'
	},
	{
		'id': 9345,
		'name': 'BSCStation',
		'slug': 'bsc-station',
		'symbol': 'BSCS'
	},
	{
		'id': 13133,
		'name': 'Decentral Games ICE',
		'slug': 'decentral-games-ice',
		'symbol': 'ICE'
	},
	{
		'id': 7860,
		'name': 'ClinTex CTi',
		'slug': 'clintex-cti',
		'symbol': 'CTI'
	},
	{
		'id': 8726,
		'name': 'Idavoll DAO',
		'slug': 'idavoll-network',
		'symbol': 'IDV'
	},
	{
		'id': 8423,
		'name': 'Public Mint',
		'slug': 'public-mint',
		'symbol': 'MINT'
	},
	{
		'id': 2161,
		'name': 'Raiden Network Token',
		'slug': 'raiden-network-token',
		'symbol': 'RDN'
	},
	{
		'id': 14990,
		'name': 'MetaSoccer',
		'slug': 'metasoccer',
		'symbol': 'MSU'
	},
	{
		'id': 9866,
		'name': 'Fear',
		'slug': 'fear-nfts',
		'symbol': 'FEAR'
	},
	{
		'id': 10165,
		'name': 'PornRocket',
		'slug': 'pornrocket',
		'symbol': 'PORNROCKET'
	},
	{
		'id': 12497,
		'name': 'KubeCoin',
		'slug': 'kubecoin',
		'symbol': 'KUBE'
	},
	{
		'id': 11562,
		'name': 'Kava Swap',
		'slug': 'kava-swap',
		'symbol': 'SWP'
	},
	{
		'id': 2041,
		'name': 'BitcoinZ',
		'slug': 'bitcoinz',
		'symbol': 'BTCZ'
	},
	{
		'id': 664,
		'name': 'SeedCoin',
		'slug': 'seedcoin',
		'symbol': 'SEED'
	},
	{
		'id': 2556,
		'name': 'Credits',
		'slug': 'credits',
		'symbol': 'CS'
	},
	{
		'id': 8813,
		'name': 'LABS Group',
		'slug': 'labs-group',
		'symbol': 'LABS'
	},
	{
		'id': 6992,
		'name': 'Spartan Protocol',
		'slug': 'spartan-protocol',
		'symbol': 'SPARTA'
	},
	{
		'id': 2998,
		'name': 'Vexanium',
		'slug': 'vexanium',
		'symbol': 'VEX'
	},
	{
		'id': 2323,
		'name': 'HEROcoin',
		'slug': 'herocoin',
		'symbol': 'PLAY'
	},
	{
		'id': 8143,
		'name': 'Nord Finance',
		'slug': 'nord-finance',
		'symbol': 'NORD'
	},
	{
		'id': 3336,
		'name': 'IQeon',
		'slug': 'iqeon',
		'symbol': 'IQN'
	},
	{
		'id': 8874,
		'name': 'DAFI Protocol',
		'slug': 'dafi-protocol',
		'symbol': 'DAFI'
	},
	{
		'id': 3371,
		'name': 'MIR COIN',
		'slug': 'mir-coin',
		'symbol': 'MIR'
	},
	{
		'id': 7216,
		'name': 'LuaSwap',
		'slug': 'lua-token',
		'symbol': 'LUA'
	},
	{
		'id': 8801,
		'name': 'Lightning',
		'slug': 'lightning',
		'symbol': 'LIGHT'
	},
	{
		'id': 13655,
		'name': 'Crabada',
		'slug': 'crabada',
		'symbol': 'CRA'
	},
	{
		'id': 8708,
		'name': 'Big Data Protocol',
		'slug': 'big-data-protocol',
		'symbol': 'BDP'
	},
	{
		'id': 4309,
		'name': 'Cryptocean',
		'slug': 'cryptocean',
		'symbol': 'CRON'
	},
	{
		'id': 3243,
		'name': 'Moneytoken',
		'slug': 'moneytoken',
		'symbol': 'IMT'
	},
	{
		'id': 7846,
		'name': 'Unbound',
		'slug': 'unbound',
		'symbol': 'UNB'
	},
	{
		'id': 10469,
		'name': 'iMe Lab',
		'slug': 'ime-lab',
		'symbol': 'LIME'
	},
	{
		'id': 3826,
		'name': 'TOP',
		'slug': 'top',
		'symbol': 'TOP'
	},
	{
		'id': 2043,
		'name': 'Cindicator',
		'slug': 'cindicator',
		'symbol': 'CND'
	},
	{
		'id': 7312,
		'name': 'Florin',
		'slug': 'florin',
		'symbol': 'XFL'
	},
	{
		'id': 7222,
		'name': 'yAxis',
		'slug': 'yaxis',
		'symbol': 'YAXIS'
	},
	{
		'id': 9441,
		'name': 'Jigstack',
		'slug': 'jigstack',
		'symbol': 'STAK'
	},
	{
		'id': 14374,
		'name': 'Green Ben',
		'slug': 'green-ben',
		'symbol': 'EBEN'
	},
	{
		'id': 20390,
		'name': 'SPORT',
		'slug': 'sport',
		'symbol': 'SPORT'
	},
	{
		'id': 7438,
		'name': 'ZeroSwap',
		'slug': 'zeroswap',
		'symbol': 'ZEE'
	},
	{
		'id': 14210,
		'name': 'Stakeborg DAO',
		'slug': 'stakeborg-dao',
		'symbol': 'STANDARD'
	},
	{
		'id': 3877,
		'name': 'WebDollar',
		'slug': 'webdollar',
		'symbol': 'WEBD'
	},
	{
		'id': 1172,
		'name': 'Safex Token',
		'slug': 'safex-token',
		'symbol': 'SFT'
	},
	{
		'id': 14911,
		'name': 'MetaPets',
		'slug': 'metapets',
		'symbol': 'METAPETS'
	},
	{
		'id': 1257,
		'name': 'LanaCoin',
		'slug': 'lanacoin',
		'symbol': 'LANA'
	},
	{
		'id': 20535,
		'name': 'MOVEZ',
		'slug': 'movez',
		'symbol': 'MOVEZ'
	},
	{
		'id': 15881,
		'name': 'Voxel X Network',
		'slug': 'voxel-x-network',
		'symbol': 'VXL'
	},
	{
		'id': 2088,
		'name': 'EXRNchain',
		'slug': 'exrnchain',
		'symbol': 'EXRN'
	},
	{
		'id': 12398,
		'name': 'Spain National Fan Token',
		'slug': 'spain-national-fan-token',
		'symbol': 'SNFT'
	},
	{
		'id': 895,
		'name': 'Xaurum',
		'slug': 'xaurum',
		'symbol': 'XAUR'
	},
	{
		'id': 4144,
		'name': 'TrueFeedBack',
		'slug': 'truefeedback',
		'symbol': 'TFBX'
	},
	{
		'id': 9545,
		'name': 'NFTb',
		'slug': 'nftb',
		'symbol': 'NFTB'
	},
	{
		'id': 21168,
		'name': 'Mrweb Finance',
		'slug': 'mrweb-finance-v2',
		'symbol': 'AMA'
	},
	{
		'id': 3096,
		'name': 'Pundi X NEM',
		'slug': 'pundi-x-nem',
		'symbol': 'NPXSXEM'
	},
	{
		'id': 1779,
		'name': 'Wagerr',
		'slug': 'wagerr',
		'symbol': 'WGR'
	},
	{
		'id': 1876,
		'name': 'Dentacoin',
		'slug': 'dentacoin',
		'symbol': 'DCN'
	},
	{
		'id': 7041,
		'name': 'Gather',
		'slug': 'gather',
		'symbol': 'GTH'
	},
	{
		'id': 5200,
		'name': 'Gleec',
		'slug': 'gleec',
		'symbol': 'GLEEC'
	},
	{
		'id': 11861,
		'name': 'PlanetWatch',
		'slug': 'planetwatch',
		'symbol': 'PLANETS'
	},
	{
		'id': 12901,
		'name': 'King Shiba',
		'slug': 'king-shiba',
		'symbol': 'KINGSHIB'
	},
	{
		'id': 4299,
		'name': 'Tokoin',
		'slug': 'tokoin',
		'symbol': 'TOKO'
	},
	{
		'id': 470,
		'name': 'Viacoin',
		'slug': 'viacoin',
		'symbol': 'VIA'
	},
	{
		'id': 2855,
		'name': 'CBC.network',
		'slug': 'cbc-network',
		'symbol': 'CBC'
	},
	{
		'id': 9200,
		'name': 'Revomon',
		'slug': 'revomon',
		'symbol': 'REVO'
	},
	{
		'id': 10817,
		'name': 'Ryoshi Token',
		'slug': 'ryoshi-token',
		'symbol': 'RYOSHI'
	},
	{
		'id': 11563,
		'name': 'aiRight',
		'slug': 'airight',
		'symbol': 'AIRI'
	},
	{
		'id': 42,
		'name': 'Primecoin',
		'slug': 'primecoin',
		'symbol': 'XPM'
	},
	{
		'id': 5358,
		'name': 'IBStoken',
		'slug': 'ibstoken',
		'symbol': 'IBS'
	},
	{
		'id': 8996,
		'name': 'Mogul Productions',
		'slug': 'mogul-productions',
		'symbol': 'STARS'
	},
	{
		'id': 5475,
		'name': 'GHOSTPRISM',
		'slug': 'ghostprism',
		'symbol': 'GHOST'
	},
	{
		'id': 11329,
		'name': 'KamPay',
		'slug': 'kampay',
		'symbol': 'KAMPAY'
	},
	{
		'id': 659,
		'name': 'Bitswift',
		'slug': 'bitswift',
		'symbol': 'BITS'
	},
	{
		'id': 1834,
		'name': 'Pillar',
		'slug': 'pillar',
		'symbol': 'PLR'
	},
	{
		'id': 7755,
		'name': 'Handy',
		'slug': 'handy',
		'symbol': 'HANDY'
	},
	{
		'id': 18365,
		'name': 'MetagamZ',
		'slug': 'metagamz',
		'symbol': 'METAG'
	},
	{
		'id': 8259,
		'name': 'Furucombo',
		'slug': 'furucombo',
		'symbol': 'COMBO'
	},
	{
		'id': 2885,
		'name': 'Egretia',
		'slug': 'egretia',
		'symbol': 'EGT'
	},
	{
		'id': 12751,
		'name': 'Blockchain Monster Hunt',
		'slug': 'blockchain-monster-hunt',
		'symbol': 'BCMC'
	},
	{
		'id': 2642,
		'name': 'CyberVein',
		'slug': 'cybervein',
		'symbol': 'CVT'
	},
	{
		'id': 13360,
		'name': 'SeedOn',
		'slug': 'seedon',
		'symbol': 'SEON'
	},
	{
		'id': 1918,
		'name': 'Achain',
		'slug': 'achain',
		'symbol': 'ACT'
	},
	{
		'id': 22487,
		'name': 'Catheon Gaming',
		'slug': 'catheon-gaming',
		'symbol': 'CATHEON'
	},
	{
		'id': 2450,
		'name': 'carVertical',
		'slug': 'carvertical',
		'symbol': 'CV'
	},
	{
		'id': 1106,
		'name': 'StrongHands',
		'slug': 'stronghands',
		'symbol': 'SHND'
	},
	{
		'id': 9046,
		'name': '8PAY',
		'slug': '8pay',
		'symbol': '8PAY'
	},
	{
		'id': 9553,
		'name': 'B-cube.ai',
		'slug': 'b-cube-ai',
		'symbol': 'BCUBE'
	},
	{
		'id': 8365,
		'name': 'Seascape Crowns',
		'slug': 'crowns',
		'symbol': 'CWS'
	},
	{
		'id': 4841,
		'name': 'suterusu',
		'slug': 'suterusu',
		'symbol': 'SUTER'
	},
	{
		'id': 11649,
		'name': 'Wicrypt',
		'slug': 'wicrypt',
		'symbol': 'WNT'
	},
	{
		'id': 9643,
		'name': 'Don-key',
		'slug': 'don-key',
		'symbol': 'DON'
	},
	{
		'id': 10373,
		'name': 'Tulip Protocol',
		'slug': 'solfarm',
		'symbol': 'TULIP'
	},
	{
		'id': 9110,
		'name': 'Kattana',
		'slug': 'kattana',
		'symbol': 'KTN'
	},
	{
		'id': 2313,
		'name': 'SIRIN LABS Token',
		'slug': 'sirin-labs-token',
		'symbol': 'SRN'
	},
	{
		'id': 10006,
		'name': 'GTONCapital',
		'slug': 'graviton-one',
		'symbol': 'GTON'
	},
	{
		'id': 3819,
		'name': 'GAMB',
		'slug': 'gamb',
		'symbol': 'GMB'
	},
	{
		'id': 9962,
		'name': 'STARSHIP',
		'slug': 'starship',
		'symbol': 'STARSHIP'
	},
	{
		'id': 9083,
		'name': 'Equalizer',
		'slug': 'equalizer',
		'symbol': 'EQZ'
	},
	{
		'id': 9653,
		'name': 'Nabox',
		'slug': 'nabox',
		'symbol': 'NABOX'
	},
	{
		'id': 17456,
		'name': 'Fringe Finance',
		'slug': 'fringe-finance',
		'symbol': 'FRIN'
	},
	{
		'id': 11437,
		'name': 'DEEPSPACE',
		'slug': 'deepspace',
		'symbol': 'DPS'
	},
	{
		'id': 8,
		'name': 'Feathercoin',
		'slug': 'feathercoin',
		'symbol': 'FTC'
	},
	{
		'id': 2291,
		'name': 'Genaro Network',
		'slug': 'genaro-network',
		'symbol': 'GNX'
	},
	{
		'id': 2364,
		'name': 'TokenClub',
		'slug': 'tokenclub',
		'symbol': 'TCT'
	},
	{
		'id': 3022,
		'name': 'ZMINE',
		'slug': 'zmine',
		'symbol': 'ZMN'
	},
	{
		'id': 2335,
		'name': 'Lightning Bitcoin',
		'slug': 'lightning-bitcoin',
		'symbol': 'LBTC'
	},
	{
		'id': 6597,
		'name': 'Degenerator Meme',
		'slug': 'degenerator-meme',
		'symbol': 'MEME'
	},
	{
		'id': 11913,
		'name': 'AcknoLedger',
		'slug': 'acknoledger',
		'symbol': 'ACK'
	},
	{
		'id': 12294,
		'name': 'Ertha',
		'slug': 'ertha',
		'symbol': 'ERTHA'
	},
	{
		'id': 15240,
		'name': 'SENATE',
		'slug': 'senate',
		'symbol': 'SENATE'
	},
	{
		'id': 1706,
		'name': 'Aidos Kuneen',
		'slug': 'aidos-kuneen',
		'symbol': 'ADK'
	},
	{
		'id': 8279,
		'name': 'e-Money',
		'slug': 'e-money-coin',
		'symbol': 'NGM'
	},
	{
		'id': 2482,
		'name': 'CPChain',
		'slug': 'cpchain',
		'symbol': 'CPC'
	},
	{
		'id': 9537,
		'name': 'EpiK Protocol',
		'slug': 'epik-protocol',
		'symbol': 'EPK'
	},
	{
		'id': 4777,
		'name': 'Azbit',
		'slug': 'azbit',
		'symbol': 'AZ'
	},
	{
		'id': 12203,
		'name': 'Defina Finance',
		'slug': 'defina-finance',
		'symbol': 'FINA'
	},
	{
		'id': 11164,
		'name': 'Vabble',
		'slug': 'vabble',
		'symbol': 'VAB'
	},
	{
		'id': 11016,
		'name': 'CoinMerge (ERC-20)',
		'slug': 'coinmerge',
		'symbol': 'CMERGE'
	},
	{
		'id': 12293,
		'name': 'Beyond Protocol',
		'slug': 'beyond-protocol',
		'symbol': 'BP'
	},
	{
		'id': 17827,
		'name': 'NuriFootBall',
		'slug': 'nurifootball',
		'symbol': 'NRFB'
	},
	{
		'id': 9245,
		'name': 'Signata',
		'slug': 'signata',
		'symbol': 'SATA'
	},
	{
		'id': 11412,
		'name': 'Binemon',
		'slug': 'binemon',
		'symbol': 'BIN'
	},
	{
		'id': 17462,
		'name': 'Heroes Chained',
		'slug': 'heroes-chained',
		'symbol': 'HEC'
	},
	{
		'id': 18994,
		'name': 'FreshCut Diamond',
		'slug': 'freshcut-diamond',
		'symbol': 'FCD'
	},
	{
		'id': 5011,
		'name': 'ALLY',
		'slug': 'ally',
		'symbol': 'ALY'
	},
	{
		'id': 2345,
		'name': 'High Performance Blockchain',
		'slug': 'high-performance-blockchain',
		'symbol': 'HPB'
	},
	{
		'id': 1026,
		'name': 'Aeon',
		'slug': 'aeon',
		'symbol': 'AEON'
	},
	{
		'id': 4058,
		'name': 'FIBOS',
		'slug': 'fibos',
		'symbol': 'FO'
	},
	{
		'id': 4215,
		'name': 'Eminer',
		'slug': 'eminer',
		'symbol': 'EM'
	},
	{
		'id': 6218,
		'name': 'Arcona',
		'slug': 'arcona',
		'symbol': 'ARCONA'
	},
	{
		'id': 170,
		'name': 'BlackCoin',
		'slug': 'blackcoin',
		'symbol': 'BLK'
	},
	{
		'id': 1654,
		'name': 'BitCore',
		'slug': 'bitcore',
		'symbol': 'BTX'
	},
	{
		'id': 11925,
		'name': 'Monsta Infinite',
		'slug': 'monsta-infinite',
		'symbol': 'MONI'
	},
	{
		'id': 5468,
		'name': 'Isiklar Coin',
		'slug': 'isiklar-coin',
		'symbol': 'ISIKC'
	},
	{
		'id': 21020,
		'name': 'MetaBeat',
		'slug': 'metabeat',
		'symbol': 'BEAT'
	},
	{
		'id': 10228,
		'name': 'omchain',
		'slug': 'omchain',
		'symbol': 'OMC'
	},
	{
		'id': 10622,
		'name': 'XCarnival',
		'slug': 'xcarnival',
		'symbol': 'XCV'
	},
	{
		'id': 7024,
		'name': 'Autobahn Network',
		'slug': 'tixl-new',
		'symbol': 'TXL'
	},
	{
		'id': 3118,
		'name': 'Graviocoin',
		'slug': 'graviocoin',
		'symbol': 'GIO'
	},
	{
		'id': 2760,
		'name': 'Cred',
		'slug': 'libra-credit',
		'symbol': 'LBA'
	},
	{
		'id': 13323,
		'name': 'Integritee Network',
		'slug': 'integritee-network',
		'symbol': 'TEER'
	},
	{
		'id': 3732,
		'name': 'Conceal',
		'slug': 'conceal',
		'symbol': 'CCX'
	},
	{
		'id': 10295,
		'name': 'IOI Token',
		'slug': 'trade-race-manager',
		'symbol': 'IOI'
	},
	{
		'id': 10260,
		'name': 'Thorstarter',
		'slug': 'thorstarter',
		'symbol': 'XRUNE'
	},
	{
		'id': 7596,
		'name': 'SmartCredit Token',
		'slug': 'smartcredit-token',
		'symbol': 'SMARTCREDIT'
	},
	{
		'id': 11446,
		'name': 'S.C. Corinthians Fan Token',
		'slug': 'sc-corinthians-fan-token',
		'symbol': 'SCCP'
	},
	{
		'id': 7245,
		'name': 'Stobox Token',
		'slug': 'stobox-token',
		'symbol': 'STBU'
	},
	{
		'id': 2457,
		'name': 'TrueChain',
		'slug': 'truechain',
		'symbol': 'TRUE'
	},
	{
		'id': 1881,
		'name': 'DeepOnion',
		'slug': 'deeponion',
		'symbol': 'ONION'
	},
	{
		'id': 12221,
		'name': 'Rangers Protocol',
		'slug': 'rangers-protocol',
		'symbol': 'RPG'
	},
	{
		'id': 1694,
		'name': 'Sumokoin',
		'slug': 'sumokoin',
		'symbol': 'SUMO'
	},
	{
		'id': 7732,
		'name': 'Brother Music Platform',
		'slug': 'brother-music-platform',
		'symbol': 'BMP'
	},
	{
		'id': 93,
		'name': '42-coin',
		'slug': '42-coin',
		'symbol': '42'
	},
	{
		'id': 7879,
		'name': 'Unifty',
		'slug': 'unifty',
		'symbol': 'NIF'
	},
	{
		'id': 4752,
		'name': 'CUTcoin',
		'slug': 'cutcoin',
		'symbol': 'CUT'
	},
	{
		'id': 9792,
		'name': 'ACENT',
		'slug': 'acent',
		'symbol': 'ACE'
	},
	{
		'id': 1297,
		'name': 'ChessCoin',
		'slug': 'chesscoin',
		'symbol': 'CHESS'
	},
	{
		'id': 3763,
		'name': 'Oduwacoin',
		'slug': 'oduwa',
		'symbol': 'OWC'
	},
	{
		'id': 293,
		'name': 'Bitcoin Plus',
		'slug': 'bitcoin-plus',
		'symbol': 'XBC'
	},
	{
		'id': 2607,
		'name': 'AMLT',
		'slug': 'amlt',
		'symbol': 'AMLT'
	},
	{
		'id': 7284,
		'name': 'PieDAO DOUGH v2',
		'slug': 'piedao-dough-v2',
		'symbol': 'DOUGH'
	},
	{
		'id': 7182,
		'name': 'Billion Happiness',
		'slug': 'billionhappiness',
		'symbol': 'BHC'
	},
	{
		'id': 7512,
		'name': 'Unistake',
		'slug': 'unistake',
		'symbol': 'UNISTAKE'
	},
	{
		'id': 12137,
		'name': 'NFTrade',
		'slug': 'nftrade',
		'symbol': 'NFTD'
	},
	{
		'id': 3908,
		'name': 'Decimated',
		'slug': 'decimated',
		'symbol': 'DIO'
	},
	{
		'id': 10861,
		'name': 'Gamestarter',
		'slug': 'gamestarter',
		'symbol': 'GAME'
	},
	{
		'id': 1244,
		'name': 'HiCoin',
		'slug': 'hicoin',
		'symbol': 'XHI'
	},
	{
		'id': 7202,
		'name': 'OctoFi',
		'slug': 'octofi',
		'symbol': 'OCTO'
	},
	{
		'id': 13206,
		'name': 'OpenWorld',
		'slug': 'openworld',
		'symbol': 'OPEN'
	},
	{
		'id': 12066,
		'name': 'Shirtum',
		'slug': 'shirtum',
		'symbol': 'SHI'
	},
	{
		'id': 8884,
		'name': 'İstanbul Başakşehir Fan Token',
		'slug': 'istanbul-basaksehir-fan-token',
		'symbol': 'IBFK'
	},
	{
		'id': 9867,
		'name': 'Hot Cross',
		'slug': 'hot-cross',
		'symbol': 'HOTCROSS'
	},
	{
		'id': 10784,
		'name': 'KCCPAD',
		'slug': 'kccpad',
		'symbol': 'KCCPAD'
	},
	{
		'id': 5159,
		'name': 'Waves Enterprise',
		'slug': 'waves-enterprise',
		'symbol': 'WEST'
	},
	{
		'id': 19268,
		'name': 'Aurigami',
		'slug': 'aurigami',
		'symbol': 'PLY'
	},
	{
		'id': 8797,
		'name': 'Chronicle',
		'slug': 'chronicle',
		'symbol': 'XNL'
	},
	{
		'id': 9665,
		'name': 'My DeFi Pet',
		'slug': 'my-defi-pet',
		'symbol': 'DPET'
	},
	{
		'id': 14794,
		'name': 'CoinMerge (BEP-20)',
		'slug': 'coinmerge-bsc-token',
		'symbol': 'CMERGE'
	},
	{
		'id': 3356,
		'name': 'The Midas Touch Gold',
		'slug': 'the-midas-touch-gold',
		'symbol': 'TMTG'
	},
	{
		'id': 3481,
		'name': 'Peony',
		'slug': 'peony',
		'symbol': 'PNY'
	},
	{
		'id': 5837,
		'name': 'DoDreamChain',
		'slug': 'dodreamchain',
		'symbol': 'DRM'
	},
	{
		'id': 2104,
		'name': 'iEthereum',
		'slug': 'iethereum',
		'symbol': 'IETH'
	},
	{
		'id': 3181,
		'name': 'ShowHand',
		'slug': 'showhand',
		'symbol': 'HAND'
	},
	{
		'id': 5449,
		'name': 'Beer Money',
		'slug': 'beer-money',
		'symbol': 'BEER'
	},
	{
		'id': 10803,
		'name': 'RealFevr',
		'slug': 'realfevr',
		'symbol': 'FEVR'
	},
	{
		'id': 10889,
		'name': 'DRIFE',
		'slug': 'drife',
		'symbol': 'DRF'
	},
	{
		'id': 2096,
		'name': 'Ripio Credit Network',
		'slug': 'ripio-credit-network',
		'symbol': 'RCN'
	},
	{
		'id': 7870,
		'name': 'Plasma Finance',
		'slug': 'plasma-finance',
		'symbol': 'PPAY'
	},
	{
		'id': 4760,
		'name': 'PANTHEON X',
		'slug': 'pantheon-x',
		'symbol': 'XPN'
	},
	{
		'id': 1828,
		'name': 'SmartCash',
		'slug': 'smartcash',
		'symbol': 'SMART'
	},
	{
		'id': 6500,
		'name': 'ThreeFold',
		'slug': 'threefold',
		'symbol': 'TFT'
	},
	{
		'id': 2306,
		'name': 'Bread',
		'slug': 'bread',
		'symbol': 'BRD'
	},
	{
		'id': 8484,
		'name': 'Olyverse',
		'slug': 'olyseum',
		'symbol': 'OLY'
	},
	{
		'id': 11521,
		'name': 'Rhythm',
		'slug': 'rhythm',
		'symbol': 'RHYTHM'
	},
	{
		'id': 9550,
		'name': 'PERI Finance',
		'slug': 'peri-finance',
		'symbol': 'PERI'
	},
	{
		'id': 8029,
		'name': 'Oxygen',
		'slug': 'oxygen',
		'symbol': 'OXY'
	},
	{
		'id': 8637,
		'name': 'Tranche Finance',
		'slug': 'tranche-finance',
		'symbol': 'SLICE'
	},
	{
		'id': 2444,
		'name': 'CRYPTO20',
		'slug': 'c20',
		'symbol': 'C20'
	},
	{
		'id': 8385,
		'name': 'Umbrella Network',
		'slug': 'umbrella-network',
		'symbol': 'UMB'
	},
	{
		'id': 2399,
		'name': 'INT',
		'slug': 'int-chain',
		'symbol': 'INT'
	},
	{
		'id': 8120,
		'name': 'Whiteheart',
		'slug': 'whiteheart',
		'symbol': 'WHITE'
	},
	{
		'id': 3082,
		'name': 'VINchain',
		'slug': 'vinchain',
		'symbol': 'VIN'
	},
	{
		'id': 8717,
		'name': 'Oddz',
		'slug': 'oddz',
		'symbol': 'ODDZ'
	},
	{
		'id': 4160,
		'name': 'Ycash',
		'slug': 'ycash',
		'symbol': 'YEC'
	},
	{
		'id': 9654,
		'name': 'CryptoBlades',
		'slug': 'cryptoblades',
		'symbol': 'SKILL'
	},
	{
		'id': 20997,
		'name': 'Wombat Web 3 Gaming Platform',
		'slug': 'wombat-web-3-gaming-platform',
		'symbol': 'WOMBAT'
	},
	{
		'id': 12253,
		'name': 'WOOF',
		'slug': 'woof',
		'symbol': 'WOOF'
	},
	{
		'id': 3071,
		'name': 'EUNO',
		'slug': 'euno',
		'symbol': 'EUNO'
	},
	{
		'id': 8732,
		'name': 'Swop',
		'slug': 'swop',
		'symbol': 'SWOP'
	},
	{
		'id': 2366,
		'name': 'FairGame',
		'slug': 'fairgame',
		'symbol': 'FAIR'
	},
	{
		'id': 2315,
		'name': 'HTMLCOIN',
		'slug': 'html-coin',
		'symbol': 'HTML'
	},
	{
		'id': 14894,
		'name': 'ONSTON',
		'slug': 'onston',
		'symbol': 'ONSTON'
	},
	{
		'id': 2562,
		'name': 'Education Ecosystem',
		'slug': 'education-ecosystem',
		'symbol': 'LEDU'
	},
	{
		'id': 1814,
		'name': 'Metrix Coin',
		'slug': 'metrix-coin',
		'symbol': 'MRX'
	},
	{
		'id': 5674,
		'name': 'PhoenixDAO',
		'slug': 'phoenixdao',
		'symbol': 'PHNX'
	},
	{
		'id': 6511,
		'name': 'Strong',
		'slug': 'strong',
		'symbol': 'STRONG'
	},
	{
		'id': 4035,
		'name': 'Honest',
		'slug': 'honest',
		'symbol': 'HNST'
	},
	{
		'id': 13731,
		'name': 'Leeds United Fan Token',
		'slug': 'leeds-united-fan-token',
		'symbol': 'LUFC'
	},
	{
		'id': 15180,
		'name': 'GamesPad',
		'slug': 'gamespad',
		'symbol': 'GMPD'
	},
	{
		'id': 35,
		'name': 'Phoenixcoin',
		'slug': 'phoenixcoin',
		'symbol': 'PXC'
	},
	{
		'id': 5990,
		'name': 'Dev Protocol',
		'slug': 'dev-protocol',
		'symbol': 'DEV'
	},
	{
		'id': 760,
		'name': 'Okcash',
		'slug': 'okcash',
		'symbol': 'OK'
	},
	{
		'id': 5067,
		'name': 'MAX Exchange Token',
		'slug': 'max-exchange-token',
		'symbol': 'MAX'
	},
	{
		'id': 7033,
		'name': 'Empty Set Dollar',
		'slug': 'empty-set-dollar',
		'symbol': 'ESD'
	},
	{
		'id': 20896,
		'name': 'Amazy',
		'slug': 'amazy',
		'symbol': 'AZY'
	},
	{
		'id': 20719,
		'name': 'OpenLeverage',
		'slug': 'openleverage',
		'symbol': 'OLE'
	},
	{
		'id': 3220,
		'name': 'DAV Coin',
		'slug': 'dav-coin',
		'symbol': 'DAV'
	},
	{
		'id': 12814,
		'name': 'Dexsport',
		'slug': 'dexsport',
		'symbol': 'DESU'
	},
	{
		'id': 1954,
		'name': 'Moeda Loyalty Points',
		'slug': 'moeda-loyalty-points',
		'symbol': 'MDA'
	},
	{
		'id': 83,
		'name': 'Omni',
		'slug': 'omni',
		'symbol': 'OMNI'
	},
	{
		'id': 2407,
		'name': 'AICHAIN',
		'slug': 'aichain',
		'symbol': 'AIT'
	},
	{
		'id': 11074,
		'name': '1-UP Platform',
		'slug': '1-up',
		'symbol': '1-UP'
	},
	{
		'id': 6195,
		'name': 'Unitrade',
		'slug': 'unitrade',
		'symbol': 'TRADE'
	},
	{
		'id': 4054,
		'name': 'IG Gold',
		'slug': 'ig-gold',
		'symbol': 'IGG'
	},
	{
		'id': 8364,
		'name': 'Bridge Mutual',
		'slug': 'bridge-mutual',
		'symbol': 'BMI'
	},
	{
		'id': 2246,
		'name': 'CyberMiles',
		'slug': 'cybermiles',
		'symbol': 'CMT'
	},
	{
		'id': 13068,
		'name': 'COGI',
		'slug': '9d-nft',
		'symbol': 'COGI'
	},
	{
		'id': 10700,
		'name': 'KickToken',
		'slug': 'kicktoken',
		'symbol': 'KICK'
	},
	{
		'id': 2555,
		'name': 'Sether',
		'slug': 'sether',
		'symbol': 'SETH'
	},
	{
		'id': 5835,
		'name': 'Decentr',
		'slug': 'decentr',
		'symbol': 'DEC'
	},
	{
		'id': 9149,
		'name': 'Cryptonovae',
		'slug': 'cryptonovae',
		'symbol': 'YAE'
	},
	{
		'id': 11512,
		'name': 'Kalao',
		'slug': 'kalao',
		'symbol': 'KLO'
	},
	{
		'id': 9673,
		'name': 'Loser Coin',
		'slug': 'loser-coin',
		'symbol': 'LOWB'
	},
	{
		'id': 9468,
		'name': 'Spore',
		'slug': 'spore',
		'symbol': 'SPORE'
	},
	{
		'id': 707,
		'name': 'Blocknet',
		'slug': 'blocknet',
		'symbol': 'BLOCK'
	},
	{
		'id': 558,
		'name': 'Emercoin',
		'slug': 'emercoin',
		'symbol': 'EMC'
	},
	{
		'id': 18184,
		'name': 'BBS Network',
		'slug': 'bbs-network',
		'symbol': 'BBS'
	},
	{
		'id': 10891,
		'name': 'Only1',
		'slug': 'only1',
		'symbol': 'LIKE'
	},
	{
		'id': 25,
		'name': 'Goldcoin',
		'slug': 'goldcoin',
		'symbol': 'GLC'
	},
	{
		'id': 2387,
		'name': 'Bitcoin Atom',
		'slug': 'bitcoin-atom',
		'symbol': 'BCA'
	},
	{
		'id': 8963,
		'name': 'UnMarshal',
		'slug': 'unmarshal',
		'symbol': 'MARSH'
	},
	{
		'id': 12416,
		'name': 'PulsePad',
		'slug': 'pulsepad',
		'symbol': 'PLSPAD'
	},
	{
		'id': 4850,
		'name': 'LINKA',
		'slug': 'linka',
		'symbol': 'LINKA'
	},
	{
		'id': 9526,
		'name': 'LOCGame',
		'slug': 'locgame',
		'symbol': 'LOCG'
	},
	{
		'id': 12781,
		'name': 'xHashtag',
		'slug': 'xhashtag',
		'symbol': 'XTAG'
	},
	{
		'id': 9530,
		'name': 'FaraLand',
		'slug': 'faraland',
		'symbol': 'FARA'
	},
	{
		'id': 2363,
		'name': 'Zap',
		'slug': 'zap',
		'symbol': 'ZAP'
	},
	{
		'id': 1950,
		'name': 'Hiveterminal Token',
		'slug': 'hiveterminal-token',
		'symbol': 'HVN'
	},
	{
		'id': 22822,
		'name': 'CareCoin',
		'slug': 'carecoinwellness',
		'symbol': 'CARE'
	},
	{
		'id': 122,
		'name': 'PotCoin',
		'slug': 'potcoin',
		'symbol': 'POT'
	},
	{
		'id': 9889,
		'name': 'Bistroo',
		'slug': 'bistroo',
		'symbol': 'BIST'
	},
	{
		'id': 4703,
		'name': 'BonusCloud',
		'slug': 'bonuscloud',
		'symbol': 'BXC'
	},
	{
		'id': 3880,
		'name': 'OceanEx Token',
		'slug': 'oceanex-token',
		'symbol': 'OCE'
	},
	{
		'id': 9989,
		'name': 'Solrise Finance',
		'slug': 'solrise-finance',
		'symbol': 'SLRS'
	},
	{
		'id': 7750,
		'name': 'Eden',
		'slug': 'eden-network',
		'symbol': 'EDEN'
	},
	{
		'id': 2913,
		'name': 'Databroker',
		'slug': 'databroker',
		'symbol': 'DTX'
	},
	{
		'id': 13592,
		'name': 'Silva Token',
		'slug': 'silva-token',
		'symbol': 'SILVA'
	},
	{
		'id': 3514,
		'name': 'SINOVATE',
		'slug': 'sinovate',
		'symbol': 'SIN'
	},
	{
		'id': 5614,
		'name': 'Zelwin',
		'slug': 'zelwin',
		'symbol': 'ZLW'
	},
	{
		'id': 7795,
		'name': 'Bird.Money',
		'slug': 'bird-money',
		'symbol': 'BIRD'
	},
	{
		'id': 10949,
		'name': 'Baanx',
		'slug': 'baanx',
		'symbol': 'BXX'
	},
	{
		'id': 10040,
		'name': 'Wall Street Games',
		'slug': 'wall-street-games',
		'symbol': 'WSG'
	},
	{
		'id': 5234,
		'name': 'Metaverse Dualchain Network Architecture',
		'slug': 'metaverse-dualchain-network-architecture',
		'symbol': 'DNA'
	},
	{
		'id': 8063,
		'name': 'Duck DAO (DLP Duck Token)',
		'slug': 'duck-dao',
		'symbol': 'DUCK'
	},
	{
		'id': 11529,
		'name': 'Clube Atlético Mineiro Fan Token',
		'slug': 'clube-atletico-mineiro-fan-token',
		'symbol': 'GALO'
	},
	{
		'id': 7812,
		'name': 'SYNC Network',
		'slug': 'sync-network',
		'symbol': 'SYNC'
	},
	{
		'id': 5086,
		'name': 'Pawtocol',
		'slug': 'pawtocol',
		'symbol': 'UPI'
	},
	{
		'id': 3973,
		'name': 'Aryacoin',
		'slug': 'aryacoin',
		'symbol': 'AYA'
	},
	{
		'id': 2344,
		'name': 'AppCoins',
		'slug': 'appcoins',
		'symbol': 'APPC'
	},
	{
		'id': 9218,
		'name': 'Mist',
		'slug': 'mist',
		'symbol': 'MIST'
	},
	{
		'id': 19677,
		'name': 'Hawksight',
		'slug': 'hawksight',
		'symbol': 'HAWK'
	},
	{
		'id': 8164,
		'name': 'JulSwap',
		'slug': 'julswap',
		'symbol': 'JULD'
	},
	{
		'id': 4917,
		'name': 'DEXA COIN',
		'slug': 'dexa-coin',
		'symbol': 'DEXA'
	},
	{
		'id': 3632,
		'name': 'Opacity',
		'slug': 'opacity',
		'symbol': 'OPCT'
	},
	{
		'id': 2726,
		'name': 'DAOstack',
		'slug': 'daostack',
		'symbol': 'GEN'
	},
	{
		'id': 12604,
		'name': 'FRAKT Token',
		'slug': 'frakt-token',
		'symbol': 'FRKT'
	},
	{
		'id': 5880,
		'name': 'Props Token',
		'slug': 'props',
		'symbol': 'PROPS'
	},
	{
		'id': 7552,
		'name': 'Hyve',
		'slug': 'hyve',
		'symbol': 'HYVE'
	},
	{
		'id': 6209,
		'name': 'Spheroid Universe',
		'slug': 'spheroid-universe',
		'symbol': 'SPH'
	},
	{
		'id': 2009,
		'name': 'Bismuth',
		'slug': 'bismuth',
		'symbol': 'BIS'
	},
	{
		'id': 3053,
		'name': 'YOU COIN',
		'slug': 'you-coin',
		'symbol': 'YOU'
	},
	{
		'id': 9279,
		'name': 'SuperLauncher',
		'slug': 'superlauncher',
		'symbol': 'LAUNCH'
	},
	{
		'id': 859,
		'name': 'Woodcoin',
		'slug': 'woodcoin',
		'symbol': 'LOG'
	},
	{
		'id': 15134,
		'name': 'Aston Villa Fan Token',
		'slug': 'aston-villa-fan-token',
		'symbol': 'AVL'
	},
	{
		'id': 4242,
		'name': 'PLANET',
		'slug': 'planet',
		'symbol': 'PLA'
	},
	{
		'id': 11209,
		'name': 'TRAVA.FINANCE',
		'slug': 'trava-finance',
		'symbol': 'TRAVA'
	},
	{
		'id': 2468,
		'name': 'LinkEye',
		'slug': 'linkeye',
		'symbol': 'LET'
	},
	{
		'id': 4927,
		'name': 'RigoBlock',
		'slug': 'rigoblock',
		'symbol': 'GRG'
	},
	{
		'id': 3899,
		'name': 'Zloadr',
		'slug': 'zloadr',
		'symbol': 'ZDR'
	},
	{
		'id': 5775,
		'name': 'Oikos',
		'slug': 'oikos',
		'symbol': 'OKS'
	},
	{
		'id': 3389,
		'name': 'Tolar',
		'slug': 'tolar',
		'symbol': 'TOL'
	},
	{
		'id': 4431,
		'name': 'VIDY',
		'slug': 'vidy',
		'symbol': 'VIDY'
	},
	{
		'id': 7699,
		'name': 'CyberFi Token',
		'slug': 'cyberfi',
		'symbol': 'CFi'
	},
	{
		'id': 1899,
		'name': 'YOYOW',
		'slug': 'yoyow',
		'symbol': 'YOYOW'
	},
	{
		'id': 9854,
		'name': 'Tiger King Coin',
		'slug': 'tiger-king-coin',
		'symbol': 'TKING'
	},
	{
		'id': 8341,
		'name': 'Young Boys Fan Token',
		'slug': 'young-boys-fan-token',
		'symbol': 'YBO'
	},
	{
		'id': 5084,
		'name': 'PlayFuel',
		'slug': 'playfuel',
		'symbol': 'PLF'
	},
	{
		'id': 12983,
		'name': 'Pawthereum',
		'slug': 'pawthereum',
		'symbol': 'PAWTH'
	},
	{
		'id': 16013,
		'name': 'XY Finance',
		'slug': 'xy-finance',
		'symbol': 'XY'
	},
	{
		'id': 416,
		'name': 'HempCoin',
		'slug': 'hempcoin',
		'symbol': 'THC'
	},
	{
		'id': 2181,
		'name': 'Genesis Vision',
		'slug': 'genesis-vision',
		'symbol': 'GVT'
	},
	{
		'id': 9967,
		'name': 'SafeBlast',
		'slug': 'safeblast',
		'symbol': 'BLAST'
	},
	{
		'id': 22540,
		'name': 'City Tycoon Games',
		'slug': 'city-tycoon-games',
		'symbol': 'CTG'
	},
	{
		'id': 3345,
		'name': 'DAPS Coin',
		'slug': 'daps-coin',
		'symbol': 'DAPS'
	},
	{
		'id': 16948,
		'name': 'Monsterra (MSTR)',
		'slug': 'monsterra',
		'symbol': 'MSTR'
	},
	{
		'id': 2307,
		'name': 'Bibox Token',
		'slug': 'bibox-token',
		'symbol': 'BIX'
	},
	{
		'id': 3337,
		'name': 'QChi',
		'slug': 'qchi',
		'symbol': 'QCH'
	},
	{
		'id': 21527,
		'name': 'Ancient Raid',
		'slug': 'ancient-raid',
		'symbol': 'RAID'
	},
	{
		'id': 3285,
		'name': 'Birake',
		'slug': 'birake',
		'symbol': 'BIR'
	},
	{
		'id': 9756,
		'name': 'Virtue Poker',
		'slug': 'virtue-poker',
		'symbol': 'VPP'
	},
	{
		'id': 298,
		'name': 'NewYorkCoin',
		'slug': 'newyorkcoin',
		'symbol': 'NYC'
	},
	{
		'id': 10763,
		'name': 'Aston Martin Cognizant Fan Token',
		'slug': 'aston-martin-cognizant-fan-token',
		'symbol': 'AM'
	},
	{
		'id': 1669,
		'name': 'Humaniq',
		'slug': 'humaniq',
		'symbol': 'HMQ'
	},
	{
		'id': 12506,
		'name': 'NFTY Token',
		'slug': 'nfty-network',
		'symbol': 'NFTY'
	},
	{
		'id': 9839,
		'name': 'blockbank',
		'slug': 'blockbank',
		'symbol': 'BBANK'
	},
	{
		'id': 8256,
		'name': 'HollyGold',
		'slug': 'hollygold',
		'symbol': 'HGOLD'
	},
	{
		'id': 8590,
		'name': 'Cyclone Protocol',
		'slug': 'cyclone-protocol',
		'symbol': 'CYC'
	},
	{
		'id': 2737,
		'name': 'Global Social Chain',
		'slug': 'global-social-chain',
		'symbol': 'GSC'
	},
	{
		'id': 2475,
		'name': 'Garlicoin',
		'slug': 'garlicoin',
		'symbol': 'GRLC'
	},
	{
		'id': 1299,
		'name': 'PUTinCoin',
		'slug': 'putincoin',
		'symbol': 'PUT'
	},
	{
		'id': 87,
		'name': 'FedoraCoin',
		'slug': 'fedoracoin',
		'symbol': 'TIPS'
	},
	{
		'id': 15886,
		'name': 'Launchblock.com',
		'slug': 'launchblock',
		'symbol': 'LBP'
	},
	{
		'id': 10793,
		'name': 'Alfa Romeo Racing ORLEN Fan Token',
		'slug': 'alfa-romeo-racing-orlen-fan-token',
		'symbol': 'SAUBER'
	},
	{
		'id': 2879,
		'name': 'Origin Sport',
		'slug': 'origin-sport',
		'symbol': 'ORS'
	},
	{
		'id': 2428,
		'name': 'Scry.info',
		'slug': 'scryinfo',
		'symbol': 'DDD'
	},
	{
		'id': 8679,
		'name': 'Unido EP',
		'slug': 'unido',
		'symbol': 'UDO'
	},
	{
		'id': 6404,
		'name': 'AGA Token',
		'slug': 'aga',
		'symbol': 'AGA'
	},
	{
		'id': 11230,
		'name': 'Sakura',
		'slug': 'sakura',
		'symbol': 'SKU'
	},
	{
		'id': 14489,
		'name': 'CheckDot',
		'slug': 'checkdot',
		'symbol': 'CDT'
	},
	{
		'id': 2136,
		'name': 'ATLANT',
		'slug': 'atlant',
		'symbol': 'ATL'
	},
	{
		'id': 4411,
		'name': 'TenUp',
		'slug': 'tenup',
		'symbol': 'TUP'
	},
	{
		'id': 9053,
		'name': 'UREEQA',
		'slug': 'ureeqa',
		'symbol': 'URQA'
	},
	{
		'id': 11366,
		'name': 'Paribus',
		'slug': 'paribus',
		'symbol': 'PBX'
	},
	{
		'id': 260,
		'name': 'PetroDollar',
		'slug': 'petrodollar',
		'symbol': 'XPD'
	},
	{
		'id': 10566,
		'name': 'BlackHat',
		'slug': 'blackhat',
		'symbol': 'BLKC'
	},
	{
		'id': 2906,
		'name': 'Essentia',
		'slug': 'essentia',
		'symbol': 'ESS'
	},
	{
		'id': 3750,
		'name': 'eXPerience Chain',
		'slug': 'experience-chain',
		'symbol': 'XPC'
	},
	{
		'id': 7244,
		'name': 'SaTT',
		'slug': 'satt',
		'symbol': 'SATT'
	},
	{
		'id': 3164,
		'name': 'PumaPay',
		'slug': 'pumapay',
		'symbol': 'PMA'
	},
	{
		'id': 7060,
		'name': 'Thisoption',
		'slug': 'thisoption',
		'symbol': 'TONS'
	},
	{
		'id': 11129,
		'name': 'CryptoZoon',
		'slug': 'cryptozoon',
		'symbol': 'ZOON'
	},
	{
		'id': 12098,
		'name': 'SHIBAVAX',
		'slug': 'shibavax',
		'symbol': 'SHIBX'
	},
	{
		'id': 2889,
		'name': 'Bob\'s Repair',
		'slug': 'bobs-repair',
		'symbol': 'BOB'
	},
	{
		'id': 7809,
		'name': 'Carbon',
		'slug': 'carbon',
		'symbol': 'CRBN'
	},
	{
		'id': 7742,
		'name': '88mph',
		'slug': '88mph',
		'symbol': 'MPH'
	},
	{
		'id': 9173,
		'name': 'Raze Network',
		'slug': 'raze-network',
		'symbol': 'RAZE'
	},
	{
		'id': 2126,
		'name': 'FlypMe',
		'slug': 'flypme',
		'symbol': 'FYP'
	},
	{
		'id': 4680,
		'name': 'FYDcoin',
		'slug': 'fydcoin',
		'symbol': 'FYD'
	},
	{
		'id': 2178,
		'name': 'Upfiring',
		'slug': 'upfiring',
		'symbol': 'UFR'
	},
	{
		'id': 15132,
		'name': 'Davis Cup Fan Token',
		'slug': 'davis-cup-fan-token',
		'symbol': 'DAVIS'
	},
	{
		'id': 15849,
		'name': 'BollyCoin',
		'slug': 'bollycoin',
		'symbol': 'BOLLY'
	},
	{
		'id': 14681,
		'name': 'Fabwelt',
		'slug': 'fabwelt',
		'symbol': 'WELT'
	},
	{
		'id': 3070,
		'name': 'Litex',
		'slug': 'litex',
		'symbol': 'LXT'
	},
	{
		'id': 9477,
		'name': 'Unicly Hashmasks Collection',
		'slug': 'unicly-hashmasks-collection',
		'symbol': 'UMASK'
	},
	{
		'id': 7806,
		'name': 'Cornichon',
		'slug': 'cornichon',
		'symbol': 'CORN'
	},
	{
		'id': 5127,
		'name': 'Orient Walt',
		'slug': 'orient-walt',
		'symbol': 'HTDF'
	},
	{
		'id': 6650,
		'name': 'NFT',
		'slug': 'nft',
		'symbol': 'NFT'
	},
	{
		'id': 6930,
		'name': 'Kira Network',
		'slug': 'kira-network',
		'symbol': 'KEX'
	},
	{
		'id': 80,
		'name': 'Orbitcoin',
		'slug': 'orbitcoin',
		'symbol': 'ORB'
	},
	{
		'id': 9579,
		'name': 'Corra.Finance',
		'slug': 'corra-finance',
		'symbol': 'CORA'
	},
	{
		'id': 6701,
		'name': 'Burency',
		'slug': 'burency',
		'symbol': 'BUY'
	},
	{
		'id': 3902,
		'name': 'MoneroV ',
		'slug': 'monero-v',
		'symbol': 'XMV'
	},
	{
		'id': 3182,
		'name': 'HitChain',
		'slug': 'hitchain',
		'symbol': 'HIT'
	},
	{
		'id': 4173,
		'name': 'Levolution',
		'slug': 'levolution',
		'symbol': 'LEVL'
	},
	{
		'id': 8621,
		'name': 'yieldwatch',
		'slug': 'yieldwatch',
		'symbol': 'WATCH'
	},
	{
		'id': 6649,
		'name': 'Cat Token',
		'slug': 'cat-token',
		'symbol': 'CAT'
	},
	{
		'id': 1466,
		'name': 'Hush',
		'slug': 'hush',
		'symbol': 'HUSH'
	},
	{
		'id': 2707,
		'name': 'FLIP',
		'slug': 'flip',
		'symbol': 'FLP'
	},
	{
		'id': 10748,
		'name': 'PolkaWar',
		'slug': 'polkawar',
		'symbol': 'PWAR'
	},
	{
		'id': 11821,
		'name': 'Swarm Markets',
		'slug': 'swarm-markets',
		'symbol': 'SMT'
	},
	{
		'id': 1983,
		'name': 'VIBE',
		'slug': 'vibe',
		'symbol': 'VIBE'
	},
	{
		'id': 2976,
		'name': 'Ryo Currency',
		'slug': 'ryo-currency',
		'symbol': 'RYO'
	},
	{
		'id': 13,
		'name': 'Ixcoin',
		'slug': 'ixcoin',
		'symbol': 'IXC'
	},
	{
		'id': 405,
		'name': 'DigitalNote',
		'slug': 'digitalnote',
		'symbol': 'XDN'
	},
	{
		'id': 2427,
		'name': 'ChatCoin',
		'slug': 'chatcoin',
		'symbol': 'CHAT'
	},
	{
		'id': 14661,
		'name': 'Sao Paulo FC Fan Token',
		'slug': 'sao-paulo-fc-fan-token',
		'symbol': 'SPFC'
	},
	{
		'id': 4047,
		'name': 'Naka Bodhi Token',
		'slug': 'naka-bodhi-token',
		'symbol': 'NBOT'
	},
	{
		'id': 2336,
		'name': 'Game.com',
		'slug': 'game',
		'symbol': 'GTC'
	},
	{
		'id': 5868,
		'name': 'STATERA',
		'slug': 'statera',
		'symbol': 'STA'
	},
	{
		'id': 6622,
		'name': 'Hakka.Finance',
		'slug': 'hakka-finance',
		'symbol': 'HAKKA'
	},
	{
		'id': 2762,
		'name': 'Open Platform',
		'slug': 'open-platform',
		'symbol': 'OPEN'
	},
	{
		'id': 799,
		'name': 'SmileyCoin',
		'slug': 'smileycoin',
		'symbol': 'SMLY'
	},
	{
		'id': 1340,
		'name': 'Karbo',
		'slug': 'karbo',
		'symbol': 'KRB'
	},
	{
		'id': 21685,
		'name': 'PUMLx',
		'slug': 'pumlx',
		'symbol': 'PUMLX'
	},
	{
		'id': 15131,
		'name': 'Everton Fan Token',
		'slug': 'everton-fan-token',
		'symbol': 'EFC'
	},
	{
		'id': 5873,
		'name': 'NextDAO',
		'slug': 'nextdao',
		'symbol': 'NAX'
	},
	{
		'id': 3431,
		'name': 'Iconic Token',
		'slug': 'iconic-token',
		'symbol': 'ICNQ'
	},
	{
		'id': 2629,
		'name': 'Scala',
		'slug': 'scala',
		'symbol': 'XLA'
	},
	{
		'id': 10704,
		'name': 'Binamon',
		'slug': 'binamon',
		'symbol': 'BMON'
	},
	{
		'id': 3364,
		'name': 'PLATINCOIN',
		'slug': 'platincoin',
		'symbol': 'PLC'
	},
	{
		'id': 7230,
		'name': 'Opium',
		'slug': 'opium',
		'symbol': 'OPIUM'
	},
	{
		'id': 2497,
		'name': 'Medicalchain',
		'slug': 'medical-chain',
		'symbol': 'MTN'
	},
	{
		'id': 9348,
		'name': 'Crowny',
		'slug': 'crowny',
		'symbol': 'CRWNY'
	},
	{
		'id': 20575,
		'name': 'Peruvian National Football Team Fan Token',
		'slug': 'peruvian-national-football-team-fan-token',
		'symbol': 'FPFT'
	},
	{
		'id': 3800,
		'name': 'FidexToken',
		'slug': 'fidex-token',
		'symbol': 'FEX'
	},
	{
		'id': 7422,
		'name': 'PlotX',
		'slug': 'plotx',
		'symbol': 'PLOT'
	},
	{
		'id': 2503,
		'name': 'DMarket',
		'slug': 'dmarket',
		'symbol': 'DMT'
	},
	{
		'id': 2689,
		'name': 'Rublix',
		'slug': 'rublix',
		'symbol': 'RBLX'
	},
	{
		'id': 6933,
		'name': 'Nuco.cloud',
		'slug': 'nuco-cloud',
		'symbol': 'NCDT'
	},
	{
		'id': 6870,
		'name': 'OIN Finance',
		'slug': 'oin-finance',
		'symbol': 'OIN'
	},
	{
		'id': 22088,
		'name': 'Infinity Games',
		'slug': 'infinity-angel',
		'symbol': 'ING'
	},
	{
		'id': 3095,
		'name': 'Niobium Coin',
		'slug': 'niobium-coin',
		'symbol': 'NBC'
	},
	{
		'id': 11663,
		'name': 'Elemon',
		'slug': 'elemon',
		'symbol': 'ELMON'
	},
	{
		'id': 8130,
		'name': 'Supreme Finance',
		'slug': 'hype',
		'symbol': 'HYPE'
	},
	{
		'id': 5587,
		'name': '2key.network',
		'slug': '2key-network',
		'symbol': '2KEY'
	},
	{
		'id': 6407,
		'name': 'YF Link',
		'slug': 'yflink',
		'symbol': 'YFL'
	},
	{
		'id': 5046,
		'name': 'Streamity',
		'slug': 'streamity',
		'symbol': 'STM'
	},
	{
		'id': 10932,
		'name': 'Impossible Finance',
		'slug': 'impossible-finance',
		'symbol': 'IF'
	},
	{
		'id': 10953,
		'name': 'Kaby Arena',
		'slug': 'kaby-arena',
		'symbol': 'KABY'
	},
	{
		'id': 2458,
		'name': 'Odyssey',
		'slug': 'odyssey',
		'symbol': 'OCN'
	},
	{
		'id': 3719,
		'name': 'Stably USD',
		'slug': 'stableusd',
		'symbol': 'USDS'
	},
	{
		'id': 9828,
		'name': 'Nafter',
		'slug': 'nafter',
		'symbol': 'NAFT'
	},
	{
		'id': 11354,
		'name': 'WagyuSwap',
		'slug': 'wagyuswap',
		'symbol': 'WAG'
	},
	{
		'id': 53,
		'name': 'Quark',
		'slug': 'quark',
		'symbol': 'QRK'
	},
	{
		'id': 7942,
		'name': 'Curate',
		'slug': 'curate',
		'symbol': 'XCUR'
	},
	{
		'id': 9508,
		'name': 'Universidad de Chile Fan Token',
		'slug': 'universidad-de-chile-fan-token',
		'symbol': 'UCH'
	},
	{
		'id': 4026,
		'name': 'LiquidApps',
		'slug': 'liquid-apps',
		'symbol': 'DAPP'
	},
	{
		'id': 8702,
		'name': 'Ares Protocol',
		'slug': 'ares-protocol',
		'symbol': 'ARES'
	},
	{
		'id': 2869,
		'name': 'Merculet',
		'slug': 'merculet',
		'symbol': 'MVP'
	},
	{
		'id': 2725,
		'name': 'Skrumble Network',
		'slug': 'skrumble-network',
		'symbol': 'SKM'
	},
	{
		'id': 7255,
		'name': 'Aitra',
		'slug': 'aitra',
		'symbol': 'AITRA'
	},
	{
		'id': 17010,
		'name': 'Step®',
		'slug': 'step',
		'symbol': 'STEP'
	},
	{
		'id': 1447,
		'name': 'ZClassic',
		'slug': 'zclassic',
		'symbol': 'ZCL'
	},
	{
		'id': 7587,
		'name': 'UTU Protocol',
		'slug': 'utu-protocol',
		'symbol': 'UTU'
	},
	{
		'id': 1930,
		'name': 'Primas',
		'slug': 'primas',
		'symbol': 'PST'
	},
	{
		'id': 14285,
		'name': 'OnGo',
		'slug': 'fantomgo',
		'symbol': 'FTG'
	},
	{
		'id': 506,
		'name': 'CannabisCoin',
		'slug': 'cannabiscoin',
		'symbol': 'CANN'
	},
	{
		'id': 3334,
		'name': 'X-CASH',
		'slug': 'x-cash',
		'symbol': 'XCASH'
	},
	{
		'id': 3505,
		'name': 'Typerium',
		'slug': 'typerium',
		'symbol': 'TYPE'
	},
	{
		'id': 12973,
		'name': 'MicroPets',
		'slug': 'micropets',
		'symbol': 'PETS'
	},
	{
		'id': 21198,
		'name': 'Grizzly Honey',
		'slug': 'grizzlyfi',
		'symbol': 'GHNY'
	},
	{
		'id': 2573,
		'name': 'Electrify.Asia',
		'slug': 'electrifyasia',
		'symbol': 'ELEC'
	},
	{
		'id': 3842,
		'name': 'Caspian',
		'slug': 'caspian',
		'symbol': 'CSP'
	},
	{
		'id': 12350,
		'name': 'Triall',
		'slug': 'triall',
		'symbol': 'TRL'
	},
	{
		'id': 12787,
		'name': 'Minswap',
		'slug': 'minswap',
		'symbol': 'MIN'
	},
	{
		'id': 3435,
		'name': 'Snetwork',
		'slug': 'snetwork',
		'symbol': 'SNET'
	},
	{
		'id': 8877,
		'name': 'KIWIGO',
		'slug': 'kiwigo',
		'symbol': 'KGO'
	},
	{
		'id': 7974,
		'name': 'Venus BCH',
		'slug': 'venus-bch',
		'symbol': 'vBCH'
	},
	{
		'id': 3966,
		'name': 'BitcoinHD',
		'slug': 'bitcoinhd',
		'symbol': 'BHD'
	},
	{
		'id': 1769,
		'name': 'Denarius',
		'slug': 'denarius-d',
		'symbol': 'D'
	},
	{
		'id': 3721,
		'name': 'Huobi Pool Token',
		'slug': 'huobi-pool-token',
		'symbol': 'HPT'
	},
	{
		'id': 21959,
		'name': 'MIBR Fan Token',
		'slug': 'mibr-fan-token',
		'symbol': 'MIBR'
	},
	{
		'id': 6949,
		'name': 'Hedget',
		'slug': 'hedget',
		'symbol': 'HGET'
	},
	{
		'id': 12649,
		'name': 'Alanyaspor Fan Token',
		'slug': 'alanyaspor-fan-token',
		'symbol': 'ALA'
	},
	{
		'id': 8229,
		'name': 'UniMex Network',
		'slug': 'unimex-network',
		'symbol': 'UMX'
	},
	{
		'id': 9251,
		'name': 'Standard Protocol',
		'slug': 'standard-protocol',
		'symbol': 'STND'
	},
	{
		'id': 4,
		'name': 'Terracoin',
		'slug': 'terracoin',
		'symbol': 'TRC'
	},
	{
		'id': 1578,
		'name': 'Zero',
		'slug': 'zero',
		'symbol': 'ZER'
	},
	{
		'id': 5667,
		'name': 'Bitgesell',
		'slug': 'bitgesell',
		'symbol': 'BGL'
	},
	{
		'id': 3079,
		'name': 'X8X Token',
		'slug': 'x8x-token',
		'symbol': 'X8X'
	},
	{
		'id': 9982,
		'name': 'DINGO TOKEN',
		'slug': 'dingo-token',
		'symbol': 'DINGO'
	},
	{
		'id': 8883,
		'name': 'Sint-Truidense Voetbalvereniging Fan Token',
		'slug': 'sint-truidense-voetbalvereniging',
		'symbol': 'STV'
	},
	{
		'id': 2379,
		'name': 'Kcash',
		'slug': 'kcash',
		'symbol': 'KCASH'
	},
	{
		'id': 644,
		'name': 'GlobalBoost-Y',
		'slug': 'globalboost-y',
		'symbol': 'BSTY'
	},
	{
		'id': 10055,
		'name': 'Crust Shadow',
		'slug': 'crust-shadow',
		'symbol': 'CSM'
	},
	{
		'id': 7332,
		'name': 'EasyFi',
		'slug': 'easyfi',
		'symbol': 'EZ'
	},
	{
		'id': 2454,
		'name': 'UnlimitedIP',
		'slug': 'unlimitedip',
		'symbol': 'UIP'
	},
	{
		'id': 7430,
		'name': 'Zenfuse',
		'slug': 'zenfuse',
		'symbol': 'ZEFU'
	},
	{
		'id': 4166,
		'name': 'Realio Network',
		'slug': 'realio-network',
		'symbol': 'RIO'
	},
	{
		'id': 7349,
		'name': 'Centaur',
		'slug': 'centaur',
		'symbol': 'CNTR'
	},
	{
		'id': 12180,
		'name': 'Rainbow Token',
		'slug': 'rainbow-token',
		'symbol': 'RAINBOW'
	},
	{
		'id': 10427,
		'name': 'Polker',
		'slug': 'polker',
		'symbol': 'PKR'
	},
	{
		'id': 2501,
		'name': 'adbank',
		'slug': 'adbank',
		'symbol': 'ADB'
	},
	{
		'id': 8265,
		'name': 'Helmet.insure',
		'slug': 'helmet-insure',
		'symbol': 'HELMET'
	},
	{
		'id': 4034,
		'name': 'Jarvis+',
		'slug': 'jarvis',
		'symbol': 'JAR'
	},
	{
		'id': 11978,
		'name': 'Revolve Games',
		'slug': 'revolve-games',
		'symbol': 'RPG'
	},
	{
		'id': 2400,
		'name': 'OneRoot Network',
		'slug': 'oneroot-network',
		'symbol': 'RNT'
	},
	{
		'id': 7838,
		'name': 'Base Protocol',
		'slug': 'base-protocol',
		'symbol': 'BASE'
	},
	{
		'id': 4182,
		'name': 'GoWithMi',
		'slug': 'gowithmi',
		'symbol': 'GMAT'
	},
	{
		'id': 12682,
		'name': 'DecentraWeb',
		'slug': 'decentraweb',
		'symbol': 'DWEB'
	},
	{
		'id': 12599,
		'name': 'ASPO World',
		'slug': 'aspo-world',
		'symbol': 'ASPO'
	},
	{
		'id': 2022,
		'name': 'Internxt',
		'slug': 'internxt',
		'symbol': 'INXT'
	},
	{
		'id': 1019,
		'name': 'Manna',
		'slug': 'manna',
		'symbol': 'MANNA'
	},
	{
		'id': 11130,
		'name': 'Plant Vs Undead',
		'slug': 'plantvsundead',
		'symbol': 'PVU'
	},
	{
		'id': 1704,
		'name': 'eBoost',
		'slug': 'eboostcoin',
		'symbol': 'EBST'
	},
	{
		'id': 5187,
		'name': 'Jarvis Network',
		'slug': 'jarvis-network',
		'symbol': 'JRT'
	},
	{
		'id': 4199,
		'name': 'Swace',
		'slug': 'swace',
		'symbol': 'SWACE'
	},
	{
		'id': 2945,
		'name': 'ContentBox',
		'slug': 'contentbox',
		'symbol': 'BOX'
	},
	{
		'id': 10376,
		'name': 'dAppstore',
		'slug': 'dappstore',
		'symbol': 'DAPPX'
	},
	{
		'id': 3687,
		'name': 'BitBall',
		'slug': 'bitball',
		'symbol': 'BTB'
	},
	{
		'id': 5713,
		'name': 'Ravencoin Classic',
		'slug': 'ravencoin-classic',
		'symbol': 'RVC'
	},
	{
		'id': 3672,
		'name': 'DogeCash',
		'slug': 'dogecash',
		'symbol': 'DOGEC'
	},
	{
		'id': 2742,
		'name': 'Sakura Bloom',
		'slug': 'sakura-bloom',
		'symbol': 'SKB'
	},
	{
		'id': 12302,
		'name': 'Tokenplace',
		'slug': 'tokenplace',
		'symbol': 'TOK'
	},
	{
		'id': 7694,
		'name': 'Governor DAO',
		'slug': 'governor-dao',
		'symbol': 'GDAO'
	},
	{
		'id': 11083,
		'name': 'TripCandy',
		'slug': 'tripcandy',
		'symbol': 'CANDY'
	},
	{
		'id': 12315,
		'name': 'DOSE',
		'slug': 'dose',
		'symbol': 'DOSE'
	},
	{
		'id': 10905,
		'name': 'AirNFTs',
		'slug': 'airnfts',
		'symbol': 'AIRT'
	},
	{
		'id': 12120,
		'name': 'AstroSwap',
		'slug': 'astroswap',
		'symbol': 'ASTRO'
	},
	{
		'id': 853,
		'name': 'LiteDoge',
		'slug': 'litedoge',
		'symbol': 'LDOGE'
	},
	{
		'id': 2544,
		'name': 'Nitro Network',
		'slug': 'nucleus-vision',
		'symbol': 'NCash'
	},
	{
		'id': 2462,
		'name': 'AidCoin',
		'slug': 'aidcoin',
		'symbol': 'AID'
	},
	{
		'id': 3636,
		'name': 'Link Machine Learning',
		'slug': 'link-machine-learning',
		'symbol': 'LML'
	},
	{
		'id': 9451,
		'name': 'Verso',
		'slug': 'verso-token',
		'symbol': 'VSO'
	},
	{
		'id': 3806,
		'name': 'TigerCash',
		'slug': 'tigercash',
		'symbol': 'TCH'
	},
	{
		'id': 2676,
		'name': 'PHI Token',
		'slug': 'phi-token',
		'symbol': 'PHI'
	},
	{
		'id': 9172,
		'name': 'Professional Fighters League Fan Token',
		'slug': 'professional-fighters-league-fan-token',
		'symbol': 'PFL'
	},
	{
		'id': 15737,
		'name': 'Soldex',
		'slug': 'soldex',
		'symbol': 'SOLX'
	},
	{
		'id': 1708,
		'name': 'Patientory',
		'slug': 'patientory',
		'symbol': 'PTOY'
	},
	{
		'id': 12816,
		'name': 'ownix',
		'slug': 'ownix',
		'symbol': 'ONX'
	},
	{
		'id': 1473,
		'name': 'Pascal',
		'slug': 'pascal',
		'symbol': 'PASC'
	},
	{
		'id': 8882,
		'name': 'Alliance Fan Token',
		'slug': 'alliance-fan-token',
		'symbol': 'ALL'
	},
	{
		'id': 22733,
		'name': 'Avatly',
		'slug': 'avatly',
		'symbol': 'AVA'
	},
	{
		'id': 11458,
		'name': 'EVRYNET',
		'slug': 'evrynet',
		'symbol': 'EVRY'
	},
	{
		'id': 2478,
		'name': 'CoinFi',
		'slug': 'coinfi',
		'symbol': 'COFI'
	},
	{
		'id': 5258,
		'name': 'APIX',
		'slug': 'apix',
		'symbol': 'APIX'
	},
	{
		'id': 7638,
		'name': 'Apollon Limassol',
		'slug': 'apollon-limassol',
		'symbol': 'APL'
	},
	{
		'id': 14020,
		'name': 'Samsunspor Fan Token',
		'slug': 'samsunspor-fan-token',
		'symbol': 'SAM'
	},
	{
		'id': 2511,
		'name': 'WePower',
		'slug': 'wepower',
		'symbol': 'WPR'
	},
	{
		'id': 14718,
		'name': 'YetiCoin',
		'slug': 'yeticoin',
		'symbol': 'YETIC'
	},
	{
		'id': 10269,
		'name': 'Cheems',
		'slug': 'cheems',
		'symbol': 'CHEEMS'
	},
	{
		'id': 3194,
		'name': 'DPRating',
		'slug': 'dprating',
		'symbol': 'RATING'
	},
	{
		'id': 7435,
		'name': 'Pepemon Pepeballs',
		'slug': 'pepemon-pepeballs',
		'symbol': 'PPBLZ'
	},
	{
		'id': 3519,
		'name': 'Breezecoin',
		'slug': 'breezecoin',
		'symbol': 'BRZE'
	},
	{
		'id': 15858,
		'name': 'Galaxy Fight Club',
		'slug': 'galaxy-fight-club',
		'symbol': 'GCOIN'
	},
	{
		'id': 8731,
		'name': 'CryptEx',
		'slug': 'cryptex',
		'symbol': 'CRX'
	},
	{
		'id': 5536,
		'name': 'AtromG8',
		'slug': 'atromg8',
		'symbol': 'AG8'
	},
	{
		'id': 2446,
		'name': 'DATA',
		'slug': 'data',
		'symbol': 'DTA'
	},
	{
		'id': 3280,
		'name': 'RealTract',
		'slug': 'realtract',
		'symbol': 'RET'
	},
	{
		'id': 11066,
		'name': 'DinoX',
		'slug': 'dinox',
		'symbol': 'DNXC'
	},
	{
		'id': 4028,
		'name': 'MotaCoin',
		'slug': 'motacoin',
		'symbol': 'MOTA'
	},
	{
		'id': 2296,
		'name': 'OST',
		'slug': 'ost',
		'symbol': 'OST'
	},
	{
		'id': 11413,
		'name': 'Ceres',
		'slug': 'ceres',
		'symbol': 'CERES'
	},
	{
		'id': 5741,
		'name': 'DMM: Governance',
		'slug': 'dmm-governance',
		'symbol': 'DMG'
	},
	{
		'id': 2034,
		'name': 'Everex',
		'slug': 'everex',
		'symbol': 'EVX'
	},
	{
		'id': 720,
		'name': 'Crown',
		'slug': 'crown',
		'symbol': 'CRW'
	},
	{
		'id': 8863,
		'name': 'SHOPX',
		'slug': 'shopx-token',
		'symbol': 'SHOPX'
	},
	{
		'id': 1066,
		'name': 'Pakcoin',
		'slug': 'pakcoin',
		'symbol': 'PAK'
	},
	{
		'id': 2727,
		'name': 'Bezant',
		'slug': 'bezant',
		'symbol': 'BZNT'
	},
	{
		'id': 8647,
		'name': 'MurAll',
		'slug': 'murall',
		'symbol': 'PAINT'
	},
	{
		'id': 5590,
		'name': 'GeoDB',
		'slug': 'geodb',
		'symbol': 'GEO'
	},
	{
		'id': 5479,
		'name': 'UCA Coin',
		'slug': 'uca-coin',
		'symbol': 'UCA'
	},
	{
		'id': 8867,
		'name': 'DeHive',
		'slug': 'dehive',
		'symbol': 'DHV'
	},
	{
		'id': 64,
		'name': 'Public Index Network',
		'slug': 'public-index-network',
		'symbol': 'PIN'
	},
	{
		'id': 3484,
		'name': 'Waletoken',
		'slug': 'waletoken',
		'symbol': 'WTN'
	},
	{
		'id': 11251,
		'name': 'Dexlab',
		'slug': 'dexlab',
		'symbol': 'DXL'
	},
	{
		'id': 2466,
		'name': 'Moola',
		'slug': 'axpr-token',
		'symbol': 'AXPR'
	},
	{
		'id': 11480,
		'name': 'LaunchZone',
		'slug': 'launchzone',
		'symbol': 'LZ'
	},
	{
		'id': 8612,
		'name': 'Float Protocol (Bank)',
		'slug': 'float-protocol',
		'symbol': 'BANK'
	},
	{
		'id': 2859,
		'name': 'XMax',
		'slug': 'xmax',
		'symbol': 'XMX'
	},
	{
		'id': 8643,
		'name': 'Shadows',
		'slug': 'shadows',
		'symbol': 'DOWS'
	},
	{
		'id': 5931,
		'name': 'Darwinia Commitment Token',
		'slug': 'darwinia-commitment-token',
		'symbol': 'KTON'
	},
	{
		'id': 6176,
		'name': 'Mobility Coin',
		'slug': 'modern-investment-coin',
		'symbol': 'MOBIC'
	},
	{
		'id': 2595,
		'name': 'NANJCOIN',
		'slug': 'nanjcoin',
		'symbol': 'NANJ'
	},
	{
		'id': 16913,
		'name': 'Millonarios FC Fan Token',
		'slug': 'millonarios-fc-fan-token',
		'symbol': 'MFC'
	},
	{
		'id': 3457,
		'name': 'Iridium',
		'slug': 'iridium',
		'symbol': 'IRD'
	},
	{
		'id': 7420,
		'name': 'Digital Reserve Currency',
		'slug': 'digital-reserve-currency',
		'symbol': 'DRC'
	},
	{
		'id': 7776,
		'name': 'Vanilla Network',
		'slug': 'vanilla-network',
		'symbol': 'VNLA'
	},
	{
		'id': 7227,
		'name': 'APY.Finance',
		'slug': 'apy-finance',
		'symbol': 'APY'
	},
	{
		'id': 13237,
		'name': 'FantomStarter',
		'slug': 'fantomstarter',
		'symbol': 'FS'
	},
	{
		'id': 8340,
		'name': 'Natus Vincere Fan Token',
		'slug': 'natus-vincere-fan-token',
		'symbol': 'NAVI'
	},
	{
		'id': 10522,
		'name': 'Pacoca',
		'slug': 'pacoca',
		'symbol': 'PACOCA'
	},
	{
		'id': 15233,
		'name': 'OtterClam Finance',
		'slug': 'otterclam-finance-clam',
		'symbol': 'CLAM'
	},
	{
		'id': 7639,
		'name': 'Club Atletico Independiente',
		'slug': 'club-atletico-independiente',
		'symbol': 'CAI'
	},
	{
		'id': 2476,
		'name': 'Ruff',
		'slug': 'ruff',
		'symbol': 'RUFF'
	},
	{
		'id': 20048,
		'name': 'Wonderman Nation',
		'slug': 'wonderman-nation',
		'symbol': 'WNDR'
	},
	{
		'id': 1916,
		'name': 'BiblePay',
		'slug': 'biblepay',
		'symbol': 'BBP'
	},
	{
		'id': 3141,
		'name': 'Blockpass',
		'slug': 'blockpass',
		'symbol': 'PASS'
	},
	{
		'id': 4712,
		'name': 'AmonD',
		'slug': 'amond',
		'symbol': 'AMON'
	},
	{
		'id': 6938,
		'name': 'YFDAI.FINANCE',
		'slug': 'yfdai-finance',
		'symbol': 'YF-DAI'
	},
	{
		'id': 4315,
		'name': 'Vidulum',
		'slug': 'vidulum',
		'symbol': 'VDL'
	},
	{
		'id': 8057,
		'name': 'AnRKey X',
		'slug': 'anrkey-x',
		'symbol': '$ANRX'
	},
	{
		'id': 9675,
		'name': 'Drops Ownership Power',
		'slug': 'drops',
		'symbol': 'DOP'
	},
	{
		'id': 2644,
		'name': 'eosDAC',
		'slug': 'eosdac',
		'symbol': 'EOSDAC'
	},
	{
		'id': 9698,
		'name': 'Tycoon',
		'slug': 'tycoon',
		'symbol': 'TYC'
	},
	{
		'id': 7636,
		'name': 'Team Heretics Fan Token',
		'slug': 'team-heretics-fan-token',
		'symbol': 'TH'
	},
	{
		'id': 8543,
		'name': 'Kangal',
		'slug': 'kangal',
		'symbol': 'KANGAL'
	},
	{
		'id': 12295,
		'name': 'Dinamo Zagreb Fan Token',
		'slug': 'dinamo-zagreb-fan-token',
		'symbol': 'DZG'
	},
	{
		'id': 8997,
		'name': 'Cook Finance',
		'slug': 'cook-protocol',
		'symbol': 'COOK'
	},
	{
		'id': 2248,
		'name': 'Cappasity',
		'slug': 'cappasity',
		'symbol': 'CAPP'
	},
	{
		'id': 14682,
		'name': 'EarthFund',
		'slug': 'earthfund',
		'symbol': '1EARTH'
	},
	{
		'id': 12614,
		'name': 'Dragon Kart',
		'slug': 'dragon-kart',
		'symbol': 'KART'
	},
	{
		'id': 8187,
		'name': 'Yield Optimization Platform & Protocol',
		'slug': 'yop',
		'symbol': 'YOP'
	},
	{
		'id': 2061,
		'name': 'Blockmason Credit Protocol',
		'slug': 'blockmason',
		'symbol': 'BCPT'
	},
	{
		'id': 5114,
		'name': 'Coinsbit Token',
		'slug': 'coinsbit-token',
		'symbol': 'CNB'
	},
	{
		'id': 17035,
		'name': 'BeamSwap',
		'slug': 'beamswap',
		'symbol': 'GLINT'
	},
	{
		'id': 1562,
		'name': 'Swarm City',
		'slug': 'swarm-city',
		'symbol': 'SWT'
	},
	{
		'id': 2236,
		'name': 'MyWish',
		'slug': 'mywish',
		'symbol': 'WISH'
	},
	{
		'id': 22259,
		'name': 'Bitteam token',
		'slug': 'bitteam-token',
		'symbol': 'BTT'
	},
	{
		'id': 8299,
		'name': 'Stake DAO',
		'slug': 'stake-dao',
		'symbol': 'SDT'
	},
	{
		'id': 5548,
		'name': 'Massnet',
		'slug': 'massnet',
		'symbol': 'MASS'
	},
	{
		'id': 9509,
		'name': 'Legia Warsaw Fan Token',
		'slug': 'legia-warsaw-fan-token',
		'symbol': 'LEG'
	},
	{
		'id': 4997,
		'name': 'Blockzero Labs',
		'slug': 'blockzerolabs',
		'symbol': 'XIO'
	},
	{
		'id': 5277,
		'name': 'SynchroBitcoin',
		'slug': 'synchrobitcoin',
		'symbol': 'SNB'
	},
	{
		'id': 10841,
		'name': 'Wolf Safe Poor People',
		'slug': 'wolf-safe-poor-people',
		'symbol': 'WSPP'
	},
	{
		'id': 819,
		'name': 'Bean Cash',
		'slug': 'bean-cash',
		'symbol': 'BITB'
	},
	{
		'id': 2980,
		'name': 'WABnetwork',
		'slug': 'wabnetwork',
		'symbol': 'WAB'
	},
	{
		'id': 6743,
		'name': 'Falconswap',
		'slug': 'fsw-token',
		'symbol': 'FSW'
	},
	{
		'id': 23148,
		'name': 'ShopNEXT',
		'slug': 'shopnext-loyalty-token',
		'symbol': 'NEXT'
	},
	{
		'id': 7784,
		'name': 'BLink',
		'slug': 'blink',
		'symbol': 'BLINK'
	},
	{
		'id': 2698,
		'name': 'Hydro',
		'slug': 'hydro',
		'symbol': 'HYDRO'
	},
	{
		'id': 9024,
		'name': 'disBalancer',
		'slug': 'disbalancer',
		'symbol': 'DDOS'
	},
	{
		'id': 17600,
		'name': 'Galaxy Blitz',
		'slug': 'galaxy-blitz',
		'symbol': 'MIT'
	},
	{
		'id': 2506,
		'name': 'Swarm',
		'slug': 'swarm-network',
		'symbol': 'SWM'
	},
	{
		'id': 3953,
		'name': 'Evedo',
		'slug': 'evedo',
		'symbol': 'EVED'
	},
	{
		'id': 3733,
		'name': 'S4FE',
		'slug': 's4fe',
		'symbol': 'S4F'
	},
	{
		'id': 7034,
		'name': 'Golff',
		'slug': 'golff',
		'symbol': 'GOF'
	},
	{
		'id': 13216,
		'name': 'Ninneko',
		'slug': 'ninneko',
		'symbol': 'NINO'
	},
	{
		'id': 3769,
		'name': 'HashBX',
		'slug': 'hashsbx',
		'symbol': 'HBX'
	},
	{
		'id': 2392,
		'name': 'Bottos',
		'slug': 'bottos',
		'symbol': 'BTO'
	},
	{
		'id': 8419,
		'name': 'APYSwap',
		'slug': 'apyswap',
		'symbol': 'APYS'
	},
	{
		'id': 6997,
		'name': 'SakeToken',
		'slug': 'sake-token',
		'symbol': 'SAKE'
	},
	{
		'id': 4520,
		'name': 'Decentralized Vulnerability Platform',
		'slug': 'decentralized-vulnerability-platform',
		'symbol': 'DVP'
	},
	{
		'id': 8363,
		'name': 'renDOGE',
		'slug': 'rendoge',
		'symbol': 'RENDOGE'
	},
	{
		'id': 5103,
		'name': 'Tachyon Protocol',
		'slug': 'tachyon-protocol',
		'symbol': 'IPX'
	},
	{
		'id': 11516,
		'name': 'Ekta',
		'slug': 'ekta',
		'symbol': 'EKTA'
	},
	{
		'id': 11752,
		'name': 'XP NETWORK',
		'slug': 'xp-network',
		'symbol': 'XPNET'
	},
	{
		'id': 2479,
		'name': 'Equal',
		'slug': 'equal',
		'symbol': 'EQL'
	},
	{
		'id': 8912,
		'name': 'Tidal Finance',
		'slug': 'tidal-finance',
		'symbol': 'TIDAL'
	},
	{
		'id': 8544,
		'name': 'Fractal',
		'slug': 'fractal',
		'symbol': 'FCL'
	},
	{
		'id': 3621,
		'name': 'BitNautic Token',
		'slug': 'bitnautic-token',
		'symbol': 'BTNT'
	},
	{
		'id': 3255,
		'name': 'CyberMusic',
		'slug': 'cybermusic',
		'symbol': 'CYMT'
	},
	{
		'id': 10893,
		'name': 'Brokoli Network',
		'slug': 'brokoli-network',
		'symbol': 'BRKL'
	},
	{
		'id': 8554,
		'name': 'PRivaCY Coin',
		'slug': 'prcy-coin',
		'symbol': 'PRCY'
	},
	{
		'id': 10418,
		'name': '2crazyNFT',
		'slug': '2crazynft',
		'symbol': '2CRZ'
	},
	{
		'id': 4818,
		'name': 'Xensor',
		'slug': 'xensor',
		'symbol': 'XSR'
	},
	{
		'id': 9346,
		'name': 'NFTify',
		'slug': 'nftify',
		'symbol': 'N1'
	},
	{
		'id': 11110,
		'name': 'Spores Network',
		'slug': 'spores-network',
		'symbol': 'SPO'
	},
	{
		'id': 10232,
		'name': 'MakiSwap',
		'slug': 'makiswap',
		'symbol': 'MAKI'
	},
	{
		'id': 182,
		'name': 'Myriad',
		'slug': 'myriad',
		'symbol': 'XMY'
	},
	{
		'id': 1838,
		'name': 'OracleChain',
		'slug': 'oraclechain',
		'symbol': 'OCT'
	},
	{
		'id': 12952,
		'name': 'MetaverseX',
		'slug': 'meraversex',
		'symbol': 'METAX'
	},
	{
		'id': 6562,
		'name': 'VIG',
		'slug': 'vig',
		'symbol': 'VIG'
	},
	{
		'id': 12435,
		'name': 'Battle Hero',
		'slug': 'battle-hero',
		'symbol': 'BATH'
	},
	{
		'id': 11654,
		'name': 'VelasPad',
		'slug': 'velaspad',
		'symbol': 'VLXPAD'
	},
	{
		'id': 5871,
		'name': 'Falcon Project',
		'slug': 'falcon-project',
		'symbol': 'FNT'
	},
	{
		'id': 12892,
		'name': 'Linked Finance World',
		'slug': 'legend-of-fantasy-war',
		'symbol': 'LFW'
	},
	{
		'id': 17242,
		'name': 'UBXS Token',
		'slug': 'ubxs',
		'symbol': 'UBXS'
	},
	{
		'id': 8970,
		'name': 'Lokr',
		'slug': 'polkalokr',
		'symbol': 'LKR'
	},
	{
		'id': 1629,
		'name': 'Zennies',
		'slug': 'zennies',
		'symbol': 'ZENI'
	},
	{
		'id': 11387,
		'name': 'CropperFinance',
		'slug': 'cropperfinance',
		'symbol': 'CRP'
	},
	{
		'id': 6120,
		'name': 'Anchor Neural World',
		'slug': 'anchor-neural-world',
		'symbol': 'ANW'
	},
	{
		'id': 11086,
		'name': 'Gamerse',
		'slug': 'gamerse',
		'symbol': 'LFG'
	},
	{
		'id': 948,
		'name': 'AudioCoin',
		'slug': 'audiocoin',
		'symbol': 'ADC'
	},
	{
		'id': 10,
		'name': 'Freicoin',
		'slug': 'freicoin',
		'symbol': 'FRC'
	},
	{
		'id': 6810,
		'name': 'Cyclub',
		'slug': 'cyclub',
		'symbol': 'CYCLUB'
	},
	{
		'id': 3147,
		'name': 'HYCON',
		'slug': 'hycon',
		'symbol': 'HYC'
	},
	{
		'id': 1984,
		'name': 'Substratum',
		'slug': 'substratum',
		'symbol': 'SUB'
	},
	{
		'id': 333,
		'name': 'Curecoin',
		'slug': 'curecoin',
		'symbol': 'CURE'
	},
	{
		'id': 3986,
		'name': 'StakeCubeCoin',
		'slug': 'stakecubecoin',
		'symbol': 'SCC'
	},
	{
		'id': 7681,
		'name': 'Ideaology',
		'slug': 'ideaology',
		'symbol': 'IDEA'
	},
	{
		'id': 1185,
		'name': 'Freedomcoin',
		'slug': 'trumpcoin',
		'symbol': 'FREED'
	},
	{
		'id': 7382,
		'name': 'ACoconut',
		'slug': 'acoconut',
		'symbol': 'AC'
	},
	{
		'id': 12275,
		'name': 'Dynamix',
		'slug': 'dynamix',
		'symbol': 'DYNA'
	},
	{
		'id': 11448,
		'name': 'The HUSL',
		'slug': 'the-husl',
		'symbol': 'HUSL'
	},
	{
		'id': 21350,
		'name': 'Hunter Token',
		'slug': 'hunter-token',
		'symbol': 'HNTR'
	},
	{
		'id': 2771,
		'name': 'RED',
		'slug': 'red',
		'symbol': 'RED'
	},
	{
		'id': 3620,
		'name': 'Atlas Protocol',
		'slug': 'atlas-protocol',
		'symbol': 'ATP'
	},
	{
		'id': 8755,
		'name': 'Nerve Finance',
		'slug': 'nerve-finance',
		'symbol': 'NRV'
	},
	{
		'id': 3830,
		'name': 'Veil',
		'slug': 'veil',
		'symbol': 'VEIL'
	},
	{
		'id': 8704,
		'name': 'Playcent',
		'slug': 'playcent',
		'symbol': 'PCNT'
	},
	{
		'id': 4834,
		'name': 'Golos Blockchain',
		'slug': 'golos-blockchain',
		'symbol': 'GLS'
	},
	{
		'id': 2958,
		'name': 'TurtleCoin',
		'slug': 'turtlecoin',
		'symbol': 'TRTL'
	},
	{
		'id': 10666,
		'name': 'Lanceria',
		'slug': 'lanceria',
		'symbol': 'LANC'
	},
	{
		'id': 9416,
		'name': 'The Crypto Prophecies',
		'slug': 'the-crypto-prophecies',
		'symbol': 'TCP'
	},
	{
		'id': 10251,
		'name': 'The Corgi of PolkaBridge',
		'slug': 'the-corgi-of-polkabridge',
		'symbol': 'CORGIB'
	},
	{
		'id': 2645,
		'name': 'U Network',
		'slug': 'u-network',
		'symbol': 'UUU'
	},
	{
		'id': 19460,
		'name': 'Spume Protocol',
		'slug': 'spume',
		'symbol': 'SPUME'
	},
	{
		'id': 3659,
		'name': 'QUINADS',
		'slug': 'quinads',
		'symbol': 'QUIN'
	},
	{
		'id': 18696,
		'name': 'Finance Blocks',
		'slug': 'finance-blocks',
		'symbol': 'FBX'
	},
	{
		'id': 14523,
		'name': 'SolChicks Token',
		'slug': 'solchicks-token',
		'symbol': 'CHICKS'
	},
	{
		'id': 13138,
		'name': 'SugarBounce',
		'slug': 'sugarbounce',
		'symbol': 'TIP'
	},
	{
		'id': 11455,
		'name': 'Polinate',
		'slug': 'polinate',
		'symbol': 'POLI'
	},
	{
		'id': 3809,
		'name': 'DOS Network',
		'slug': 'dos-network',
		'symbol': 'DOS'
	},
	{
		'id': 2513,
		'name': 'GoldMint',
		'slug': 'goldmint',
		'symbol': 'MNTP'
	},
	{
		'id': 1500,
		'name': 'Wings',
		'slug': 'wings',
		'symbol': 'WINGS'
	},
	{
		'id': 2991,
		'name': 'NIX',
		'slug': 'nix',
		'symbol': 'NIX'
	},
	{
		'id': 2162,
		'name': 'Delphy',
		'slug': 'delphy',
		'symbol': 'DPY'
	},
	{
		'id': 9269,
		'name': 'Refinable',
		'slug': 'refinable',
		'symbol': 'FINE'
	},
	{
		'id': 7813,
		'name': 'Basis Cash',
		'slug': 'basis-cash',
		'symbol': 'BAC'
	},
	{
		'id': 7225,
		'name': 'DeFiner',
		'slug': 'definer',
		'symbol': 'FIN'
	},
	{
		'id': 7826,
		'name': 'Zoracles',
		'slug': 'zoracles',
		'symbol': 'ZORA'
	},
	{
		'id': 2274,
		'name': 'MediShares',
		'slug': 'medishares',
		'symbol': 'MDS'
	},
	{
		'id': 20403,
		'name': 'beFITTER',
		'slug': 'befitter',
		'symbol': 'FIU'
	},
	{
		'id': 2938,
		'name': 'Hashgard',
		'slug': 'hashgard',
		'symbol': 'GARD'
	},
	{
		'id': 3839,
		'name': 'xRhodium',
		'slug': 'xrhodium',
		'symbol': 'XRC'
	},
	{
		'id': 7367,
		'name': 'SnowSwap',
		'slug': 'snowswap',
		'symbol': 'SNOW'
	},
	{
		'id': 11309,
		'name': 'OneRare',
		'slug': 'onerare',
		'symbol': 'ORARE'
	},
	{
		'id': 9546,
		'name': 'ODIN PROTOCOL',
		'slug': 'odin-protocol',
		'symbol': 'ODIN'
	},
	{
		'id': 11452,
		'name': 'FNDZ',
		'slug': 'fndz',
		'symbol': 'FNDZ'
	},
	{
		'id': 2151,
		'name': 'Autonio',
		'slug': 'autonio',
		'symbol': 'NIOX'
	},
	{
		'id': 6940,
		'name': 'Lead Wallet',
		'slug': 'lead-wallet',
		'symbol': 'LEAD'
	},
	{
		'id': 2160,
		'name': 'Innova',
		'slug': 'innova',
		'symbol': 'INN'
	},
	{
		'id': 3446,
		'name': 'Zenswap Network Token',
		'slug': 'zenswap-network-token',
		'symbol': 'ZNT'
	},
	{
		'id': 7256,
		'name': 'Mettalex',
		'slug': 'mettalex',
		'symbol': 'MTLX'
	},
	{
		'id': 3128,
		'name': 'SiaCashCoin',
		'slug': 'siacashcoin',
		'symbol': 'SCC'
	},
	{
		'id': 3823,
		'name': 'OLXA',
		'slug': 'olxa',
		'symbol': 'OLXA'
	},
	{
		'id': 1962,
		'name': 'BUZZCoin',
		'slug': 'buzzcoin',
		'symbol': 'BUZZ'
	},
	{
		'id': 3454,
		'name': 'Decentralized Asset Trading Platform',
		'slug': 'decentralized-asset-trading-platform',
		'symbol': 'DATP'
	},
	{
		'id': 4051,
		'name': 'Parachute',
		'slug': 'parachute',
		'symbol': 'PAR'
	},
	{
		'id': 360,
		'name': 'Motocoin',
		'slug': 'motocoin',
		'symbol': 'MOTO'
	},
	{
		'id': 8416,
		'name': 'Finxflo',
		'slug': 'finxflo',
		'symbol': 'FXF'
	},
	{
		'id': 5834,
		'name': 'Add.xyz',
		'slug': 'add-xyz',
		'symbol': 'ADD'
	},
	{
		'id': 7398,
		'name': 'Coreto',
		'slug': 'coreto',
		'symbol': 'COR'
	},
	{
		'id': 3965,
		'name': 'TouchCon',
		'slug': 'touchcon',
		'symbol': 'TOC'
	},
	{
		'id': 2209,
		'name': 'Ink',
		'slug': 'ink',
		'symbol': 'INK'
	},
	{
		'id': 10285,
		'name': 'Bitspawn',
		'slug': 'bitspawn-protocol',
		'symbol': 'SPWN'
	},
	{
		'id': 2988,
		'name': 'Pigeoncoin',
		'slug': 'pigeoncoin',
		'symbol': 'PGN'
	},
	{
		'id': 10408,
		'name': 'Formation Fi',
		'slug': 'formation-fi',
		'symbol': 'FORM'
	},
	{
		'id': 8885,
		'name': 'Novara Calcio Fan Token',
		'slug': 'novara-calcio-fan-token',
		'symbol': 'NOV'
	},
	{
		'id': 8709,
		'name': 'ETHA Lend',
		'slug': 'etha-lend',
		'symbol': 'ETHA'
	},
	{
		'id': 3711,
		'name': 'Plair',
		'slug': 'plair',
		'symbol': 'PLA'
	},
	{
		'id': 15634,
		'name': 'AdaSwap',
		'slug': 'adaswap',
		'symbol': 'ASW'
	},
	{
		'id': 11945,
		'name': 'My Master War',
		'slug': 'my-master-war',
		'symbol': 'MAT'
	},
	{
		'id': 10777,
		'name': 'DinoSwap',
		'slug': 'dinoswap',
		'symbol': 'DINO'
	},
	{
		'id': 2120,
		'name': 'Etherparty',
		'slug': 'etherparty',
		'symbol': 'FUEL'
	},
	{
		'id': 18709,
		'name': 'Lucretius',
		'slug': 'lucretius',
		'symbol': 'LUC'
	},
	{
		'id': 11565,
		'name': 'Famcentral',
		'slug': 'famcentral',
		'symbol': 'FAM'
	},
	{
		'id': 12115,
		'name': 'Orion Money',
		'slug': 'orion-money',
		'symbol': 'ORION'
	},
	{
		'id': 5300,
		'name': 'Inex Project',
		'slug': 'inex-project',
		'symbol': 'INEX'
	},
	{
		'id': 4183,
		'name': 'Safex Cash',
		'slug': 'safex-cash',
		'symbol': 'SFX'
	},
	{
		'id': 3501,
		'name': 'CryptoSoul',
		'slug': 'cryptosoul',
		'symbol': 'SOUL'
	},
	{
		'id': 2626,
		'name': 'Friendz',
		'slug': 'friends',
		'symbol': 'FDZ'
	},
	{
		'id': 13870,
		'name': 'Rune Shards',
		'slug': 'rune-shards',
		'symbol': 'RXS'
	},
	{
		'id': 4207,
		'name': 'Birdchain',
		'slug': 'birdchain',
		'symbol': 'BIRD'
	},
	{
		'id': 2667,
		'name': 'FintruX Network',
		'slug': 'fintrux-network',
		'symbol': 'FTX'
	},
	{
		'id': 3507,
		'name': 'MicroBitcoin',
		'slug': 'microbitcoin',
		'symbol': 'MBC'
	},
	{
		'id': 7368,
		'name': 'Power Index Pool Token',
		'slug': 'power-index-pool-token',
		'symbol': 'PIPT'
	},
	{
		'id': 3639,
		'name': 'PlayGame',
		'slug': 'playgame',
		'symbol': 'PXG'
	},
	{
		'id': 2561,
		'name': 'BitTube',
		'slug': 'bit-tube',
		'symbol': 'TUBE'
	},
	{
		'id': 1588,
		'name': 'Tokes',
		'slug': 'tokes',
		'symbol': 'TKS'
	},
	{
		'id': 1845,
		'name': 'IXT',
		'slug': 'ixledger',
		'symbol': 'IXT'
	},
	{
		'id': 1638,
		'name': 'WeTrust',
		'slug': 'trust',
		'symbol': 'TRST'
	},
	{
		'id': 14389,
		'name': 'Sator',
		'slug': 'sator',
		'symbol': 'SAO'
	},
	{
		'id': 15067,
		'name': 'FOTA - Fight Of The Ages',
		'slug': 'fota',
		'symbol': 'FOTA'
	},
	{
		'id': 15178,
		'name': 'Gunstar Metaverse',
		'slug': 'gunstar-metaverse',
		'symbol': 'GSTS'
	},
	{
		'id': 14904,
		'name': 'SpaceFalcon',
		'slug': 'spacefalcon',
		'symbol': 'FCON'
	},
	{
		'id': 8746,
		'name': 'Planet Inverse',
		'slug': 'project-inverse',
		'symbol': 'XIV'
	},
	{
		'id': 1582,
		'name': 'Netko',
		'slug': 'netko',
		'symbol': 'NETKO'
	},
	{
		'id': 8300,
		'name': 'CoverCompared',
		'slug': 'covercompared',
		'symbol': 'CVR'
	},
	{
		'id': 2552,
		'name': 'IHT Real Estate Protocol',
		'slug': 'iht-real-estate-protocol',
		'symbol': 'IHT'
	},
	{
		'id': 501,
		'name': 'Cryptonite',
		'slug': 'cryptonite',
		'symbol': 'XCN'
	},
	{
		'id': 145,
		'name': 'DopeCoin',
		'slug': 'dopecoin',
		'symbol': 'DOPE'
	},
	{
		'id': 10121,
		'name': 'ByteNext',
		'slug': 'bytenext',
		'symbol': 'BNU'
	},
	{
		'id': 18330,
		'name': 'VisionGame',
		'slug': 'vision-game',
		'symbol': 'VISION'
	},
	{
		'id': 3482,
		'name': 'Teloscoin',
		'slug': 'teloscoin',
		'symbol': 'TELOS'
	},
	{
		'id': 448,
		'name': 'Stealth',
		'slug': 'stealth',
		'symbol': 'XST'
	},
	{
		'id': 2901,
		'name': 'FansTime',
		'slug': 'fanstime',
		'symbol': 'FTI'
	},
	{
		'id': 2735,
		'name': 'Content Neutrality Network',
		'slug': 'content-neutrality-network',
		'symbol': 'CNN'
	},
	{
		'id': 11534,
		'name': 'Levante U.D. Fan Token',
		'slug': 'levante-ud-fan-token',
		'symbol': 'LEV'
	},
	{
		'id': 2076,
		'name': 'Blue Protocol',
		'slug': 'ethereum-blue',
		'symbol': 'BLUE'
	},
	{
		'id': 4709,
		'name': 'XcelToken Plus',
		'slug': 'xceltoken-plus',
		'symbol': 'XLAB'
	},
	{
		'id': 3863,
		'name': 'UGAS',
		'slug': 'ugas',
		'symbol': 'UGAS'
	},
	{
		'id': 8406,
		'name': 'Apron Network',
		'slug': 'apron-network',
		'symbol': 'APN'
	},
	{
		'id': 1468,
		'name': 'Kurrent',
		'slug': 'kurrent',
		'symbol': 'KURT'
	},
	{
		'id': 3956,
		'name': 'BOMB',
		'slug': 'bomb',
		'symbol': 'BOMB'
	},
	{
		'id': 2546,
		'name': 'Remme',
		'slug': 'remme',
		'symbol': 'REM'
	},
	{
		'id': 7772,
		'name': 'Leverj Gluon',
		'slug': 'leverj-gluon',
		'symbol': 'L2'
	},
	{
		'id': 9563,
		'name': 'TradeStars',
		'slug': 'tradestars',
		'symbol': 'TSX'
	},
	{
		'id': 1279,
		'name': 'PWR Coin',
		'slug': 'powercoin',
		'symbol': 'PWR'
	},
	{
		'id': 2592,
		'name': 'Banca',
		'slug': 'banca',
		'symbol': 'BANCA'
	},
	{
		'id': 3479,
		'name': 'MODEL-X-coin',
		'slug': 'model-x-coin',
		'symbol': 'MODX'
	},
	{
		'id': 3779,
		'name': 'CoTrader',
		'slug': 'cotrader',
		'symbol': 'COT'
	},
	{
		'id': 11015,
		'name': 'Team Vitality Fan Token',
		'slug': 'team-vitality-fan-token',
		'symbol': 'VIT'
	},
	{
		'id': 15226,
		'name': 'Lepasa',
		'slug': 'lepasa',
		'symbol': 'LEPA'
	},
	{
		'id': 3397,
		'name': 'Neural Protocol',
		'slug': 'neural-protocol',
		'symbol': 'NRP'
	},
	{
		'id': 5409,
		'name': '4THPILLAR TECHNOLOGIES',
		'slug': '4thpillar-technologies',
		'symbol': 'FOUR'
	},
	{
		'id': 4681,
		'name': 'Color Platform',
		'slug': 'color-platform',
		'symbol': 'CLR'
	},
	{
		'id': 3882,
		'name': 'Arqma',
		'slug': 'arqma',
		'symbol': 'ARQ'
	},
	{
		'id': 2481,
		'name': 'Zeepin',
		'slug': 'zeepin',
		'symbol': 'ZPT'
	},
	{
		'id': 72,
		'name': 'Deutsche eMark',
		'slug': 'deutsche-emark',
		'symbol': 'DEM'
	},
	{
		'id': 945,
		'name': 'Bata',
		'slug': 'bata',
		'symbol': 'BTA'
	},
	{
		'id': 1967,
		'name': 'Indorse Token',
		'slug': 'indorse-token',
		'symbol': 'IND'
	},
	{
		'id': 2242,
		'name': 'Qbao',
		'slug': 'qbao',
		'symbol': 'QBT'
	},
	{
		'id': 2231,
		'name': 'Flixxo',
		'slug': 'flixxo',
		'symbol': 'FLIXX'
	},
	{
		'id': 3810,
		'name': 'Ethereum Gold Project',
		'slug': 'ethereum-gold-project',
		'symbol': 'ETGP'
	},
	{
		'id': 11695,
		'name': 'ChronoBase',
		'slug': 'chronobase',
		'symbol': 'TIK'
	},
	{
		'id': 12073,
		'name': 'Silver Stonks',
		'slug': 'silver-stonks',
		'symbol': 'SSTX'
	},
	{
		'id': 2604,
		'name': 'Bitcoin Green',
		'slug': 'bitcoin-green',
		'symbol': 'BITG'
	},
	{
		'id': 128,
		'name': 'Maxcoin',
		'slug': 'maxcoin',
		'symbol': 'MAX'
	},
	{
		'id': 7821,
		'name': 'Royale Finance',
		'slug': 'royale-finance',
		'symbol': 'ROYA'
	},
	{
		'id': 6868,
		'name': 'Seigniorage Shares',
		'slug': 'seigniorage-shares',
		'symbol': 'SHARE'
	},
	{
		'id': 4001,
		'name': 'MenaPay',
		'slug': 'menapay',
		'symbol': 'MPAY'
	},
	{
		'id': 2310,
		'name': 'Bounty0x',
		'slug': 'bounty0x',
		'symbol': 'BNTY'
	},
	{
		'id': 3869,
		'name': 'Alpha Token',
		'slug': 'alpha-token',
		'symbol': 'A'
	},
	{
		'id': 638,
		'name': 'Trollcoin',
		'slug': 'trollcoin',
		'symbol': 'TROLL'
	},
	{
		'id': 4646,
		'name': 'Beaxy',
		'slug': 'beaxy',
		'symbol': 'BXY'
	},
	{
		'id': 2070,
		'name': 'DomRaider',
		'slug': 'domraider',
		'symbol': 'DRT'
	},
	{
		'id': 2571,
		'name': 'Graft',
		'slug': 'graft',
		'symbol': 'GRFT'
	},
	{
		'id': 6039,
		'name': 'Connectome',
		'slug': 'connectome',
		'symbol': 'CNTM'
	},
	{
		'id': 6625,
		'name': 'Innovation Blockchain Payment',
		'slug': 'innovation-blockchain-payment',
		'symbol': 'IBP'
	},
	{
		'id': 11530,
		'name': 'Roush Fenway Racing Fan Token',
		'slug': 'roush-fenway-racing-fan-token',
		'symbol': 'ROUSH'
	},
	{
		'id': 4286,
		'name': 'ZENZO',
		'slug': 'zenzo',
		'symbol': 'ZNZ'
	},
	{
		'id': 17000,
		'name': 'Creo Engine',
		'slug': 'creo-engine',
		'symbol': 'CREO'
	},
	{
		'id': 10824,
		'name': 'Hertz Network',
		'slug': 'hertz-network',
		'symbol': 'HTZ'
	},
	{
		'id': 290,
		'name': 'BlueCoin',
		'slug': 'bluecoin',
		'symbol': 'BLU'
	},
	{
		'id': 1888,
		'name': 'InvestFeed',
		'slug': 'investfeed',
		'symbol': 'IFT'
	},
	{
		'id': 313,
		'name': 'Pinkcoin',
		'slug': 'pinkcoin',
		'symbol': 'PINK'
	},
	{
		'id': 12878,
		'name': 'BEMIL Coin',
		'slug': 'bemil-coin',
		'symbol': 'BEM'
	},
	{
		'id': 3256,
		'name': 'Bitether',
		'slug': 'bitether',
		'symbol': 'BTR'
	},
	{
		'id': 2862,
		'name': 'Smartshare',
		'slug': 'smartshare',
		'symbol': 'SSP'
	},
	{
		'id': 2685,
		'name': 'Zebi Token',
		'slug': 'zebi-token',
		'symbol': 'ZEBI'
	},
	{
		'id': 1861,
		'name': 'Stox',
		'slug': 'stox',
		'symbol': 'STX'
	},
	{
		'id': 3265,
		'name': 'Havy',
		'slug': 'havy',
		'symbol': 'HAVY'
	},
	{
		'id': 7467,
		'name': 'Swirge',
		'slug': 'swirge',
		'symbol': 'SWG'
	},
	{
		'id': 276,
		'name': 'Bitstar',
		'slug': 'bitstar',
		'symbol': 'BITS'
	},
	{
		'id': 11258,
		'name': 'Creaticles',
		'slug': 'creaticles',
		'symbol': 'CRE8'
	},
	{
		'id': 2158,
		'name': 'Phore',
		'slug': 'phore',
		'symbol': 'PHR'
	},
	{
		'id': 3734,
		'name': 'Elamachain',
		'slug': 'elamachain',
		'symbol': 'ELAMA'
	},
	{
		'id': 13932,
		'name': 'Genesis Worlds',
		'slug': 'genesis-worlds',
		'symbol': 'GENESIS'
	},
	{
		'id': 3386,
		'name': 'Actinium',
		'slug': 'actinium',
		'symbol': 'ACM'
	},
	{
		'id': 1474,
		'name': 'Eternity',
		'slug': 'eternity',
		'symbol': 'ENT'
	},
	{
		'id': 12799,
		'name': 'Internet of Energy Network',
		'slug': 'internet-of-energy-network',
		'symbol': 'IOEN'
	},
	{
		'id': 2215,
		'name': 'Energo',
		'slug': 'energo',
		'symbol': 'TSL'
	},
	{
		'id': 1252,
		'name': '2GIVE',
		'slug': '2give',
		'symbol': '2GIVE'
	},
	{
		'id': 3512,
		'name': 'Alpha Coin',
		'slug': 'alpha-coin',
		'symbol': 'APC'
	},
	{
		'id': 5833,
		'name': 'ASKO',
		'slug': 'askobar-network',
		'symbol': 'ASKO'
	},
	{
		'id': 3324,
		'name': 'PluraCoin',
		'slug': 'pluracoin',
		'symbol': 'PLURA'
	},
	{
		'id': 2437,
		'name': 'YEE',
		'slug': 'yee',
		'symbol': 'YEE'
	},
	{
		'id': 815,
		'name': 'Kobocoin',
		'slug': 'kobocoin',
		'symbol': 'KOBO'
	},
	{
		'id': 2674,
		'name': 'Masari',
		'slug': 'masari',
		'symbol': 'MSR'
	},
	{
		'id': 4124,
		'name': 'EOS TRUST',
		'slug': 'eos-trust',
		'symbol': 'EOST'
	},
	{
		'id': 3335,
		'name': 'Shard',
		'slug': 'shard',
		'symbol': 'SHARD'
	},
	{
		'id': 1085,
		'name': 'Swing',
		'slug': 'swing',
		'symbol': 'SWING'
	},
	{
		'id': 1247,
		'name': 'AquariusCoin',
		'slug': 'aquariuscoin',
		'symbol': 'ARCO'
	},
	{
		'id': 2359,
		'name': 'Polis',
		'slug': 'polis',
		'symbol': 'POLIS'
	},
	{
		'id': 2443,
		'name': 'Trinity Network Credit',
		'slug': 'trinity-network-credit',
		'symbol': 'TNC'
	},
	{
		'id': 9196,
		'name': 'Genesis Shards',
		'slug': 'genesis-shards',
		'symbol': 'GS'
	},
	{
		'id': 12280,
		'name': 'BHO Network',
		'slug': 'bholdus',
		'symbol': 'BHO'
	},
	{
		'id': 14695,
		'name': 'AOK',
		'slug': 'aok',
		'symbol': 'AOK'
	},
	{
		'id': 9780,
		'name': 'Snowball',
		'slug': 'snowball-finance',
		'symbol': 'SNOB'
	},
	{
		'id': 2185,
		'name': 'Lethean',
		'slug': 'lethean',
		'symbol': 'LTHN'
	},
	{
		'id': 3317,
		'name': 'Cryptrust',
		'slug': 'cryptrust',
		'symbol': 'CTRT'
	},
	{
		'id': 2653,
		'name': 'Auctus',
		'slug': 'auctus',
		'symbol': 'AUC'
	},
	{
		'id': 3878,
		'name': 'Swap',
		'slug': 'swap',
		'symbol': 'XWP'
	},
	{
		'id': 1495,
		'name': 'PoSW Coin',
		'slug': 'posw-coin',
		'symbol': 'POSW'
	},
	{
		'id': 3608,
		'name': 'Hyprr',
		'slug': 'hyprr',
		'symbol': 'UDOO'
	},
	{
		'id': 5815,
		'name': 'BitcoinPoS',
		'slug': 'bitcoinpos',
		'symbol': 'BPS'
	},
	{
		'id': 9492,
		'name': 'Etherland',
		'slug': 'etherland',
		'symbol': 'ELAND'
	},
	{
		'id': 7498,
		'name': 'Yield Protocol',
		'slug': 'yield-protocol',
		'symbol': 'YIELD'
	},
	{
		'id': 4096,
		'name': 'Switch',
		'slug': 'switch',
		'symbol': 'ESH'
	},
	{
		'id': 8710,
		'name': 'bAlpha',
		'slug': 'balpha',
		'symbol': 'BALPHA'
	},
	{
		'id': 9510,
		'name': 'Fortuna Sittard Fan Token',
		'slug': 'fortuna-sittard-fan-token',
		'symbol': 'FOR'
	},
	{
		'id': 2705,
		'name': 'Amon',
		'slug': 'amon',
		'symbol': 'AMN'
	},
	{
		'id': 8458,
		'name': 'Peanut',
		'slug': 'peanut',
		'symbol': 'NUX'
	},
	{
		'id': 6857,
		'name': 'DeFi Bids',
		'slug': 'defi-bids',
		'symbol': 'BID'
	},
	{
		'id': 9987,
		'name': 'OpenSwap',
		'slug': 'openswap',
		'symbol': 'OSWAP'
	},
	{
		'id': 11605,
		'name': 'HeroFi',
		'slug': 'herofi',
		'symbol': 'HEROEGG'
	},
	{
		'id': 8962,
		'name': 'ETNA Network',
		'slug': 'etna-network',
		'symbol': 'ETNA'
	},
	{
		'id': 2536,
		'name': 'Neurotoken',
		'slug': 'neurotoken',
		'symbol': 'NTK'
	},
	{
		'id': 3158,
		'name': 'ZCore',
		'slug': 'zcore',
		'symbol': 'ZCR'
	},
	{
		'id': 3868,
		'name': 'Signature Chain',
		'slug': 'signature-chain',
		'symbol': 'SIGN'
	},
	{
		'id': 8561,
		'name': 'KeyFi',
		'slug': 'keyfi',
		'symbol': 'KEYFI'
	},
	{
		'id': 4115,
		'name': 'Pivot Token',
		'slug': 'pivot-token',
		'symbol': 'PVT'
	},
	{
		'id': 2673,
		'name': 'WeOwn',
		'slug': 'we-own',
		'symbol': 'CHX'
	},
	{
		'id': 7380,
		'name': 'Dracula Token',
		'slug': 'dracula-token',
		'symbol': 'DRC'
	},
	{
		'id': 7647,
		'name': 'Azuki',
		'slug': 'azuki',
		'symbol': 'AZUKI'
	},
	{
		'id': 11324,
		'name': 'Forest Knight',
		'slug': 'forest-knight',
		'symbol': 'KNIGHT'
	},
	{
		'id': 8483,
		'name': 'Berry Data',
		'slug': 'berry-data',
		'symbol': 'BRY'
	},
	{
		'id': 3948,
		'name': 'TERA',
		'slug': 'tera',
		'symbol': 'TERA'
	},
	{
		'id': 3596,
		'name': 'Nerva',
		'slug': 'nerva',
		'symbol': 'XNV'
	},
	{
		'id': 9115,
		'name': 'WorkQuest Token',
		'slug': 'workquest',
		'symbol': 'WQT'
	},
	{
		'id': 5025,
		'name': 'Jade Currency',
		'slug': 'jade-currency',
		'symbol': 'JADE'
	},
	{
		'id': 7465,
		'name': 'Vox.Finance',
		'slug': 'vox-finance',
		'symbol': 'VOX'
	},
	{
		'id': 1070,
		'name': 'Expanse',
		'slug': 'expanse',
		'symbol': 'EXP'
	},
	{
		'id': 5544,
		'name': 'Aluna.Social',
		'slug': 'aluna-social',
		'symbol': 'ALN'
	},
	{
		'id': 6179,
		'name': 'SeChain',
		'slug': 'sechain',
		'symbol': 'SNN'
	},
	{
		'id': 3754,
		'name': 'EveryCoin ',
		'slug': 'everycoin',
		'symbol': 'EVY'
	},
	{
		'id': 12051,
		'name': 'Cryptopolis',
		'slug': 'cryptopolis',
		'symbol': 'CPO'
	},
	{
		'id': 2006,
		'name': 'Cobinhood',
		'slug': 'cobinhood',
		'symbol': 'COB'
	},
	{
		'id': 2908,
		'name': 'HashCoin',
		'slug': 'hashcoin',
		'symbol': 'HSC'
	},
	{
		'id': 11932,
		'name': 'Subme',
		'slug': 'subme',
		'symbol': 'SUB'
	},
	{
		'id': 1306,
		'name': 'Cryptojacks',
		'slug': 'cryptojacks',
		'symbol': 'CJ'
	},
	{
		'id': 6156,
		'name': 'Donut',
		'slug': 'donut',
		'symbol': 'DONUT'
	},
	{
		'id': 9440,
		'name': 'Mochi Market',
		'slug': 'mochi-market',
		'symbol': 'MOMA'
	},
	{
		'id': 4180,
		'name': 'DDKoin',
		'slug': 'ddkoin',
		'symbol': 'DDK'
	},
	{
		'id': 584,
		'name': 'NativeCoin',
		'slug': 'native-coin',
		'symbol': 'N8V'
	},
	{
		'id': 2175,
		'name': 'DecentBet',
		'slug': 'decent-bet',
		'symbol': 'DBET'
	},
	{
		'id': 3652,
		'name': 'ZumCoin',
		'slug': 'zumcoin',
		'symbol': 'ZUM'
	},
	{
		'id': 2628,
		'name': 'Rentberry',
		'slug': 'rentberry',
		'symbol': 'BERRY'
	},
	{
		'id': 61,
		'name': 'TagCoin',
		'slug': 'tagcoin',
		'symbol': 'TAG'
	},
	{
		'id': 3976,
		'name': 'Bitcoin Confidential',
		'slug': 'bitcoin-confidential',
		'symbol': 'BC'
	},
	{
		'id': 13509,
		'name': 'Mytheria',
		'slug': 'mytheria',
		'symbol': 'MYRA'
	},
	{
		'id': 3093,
		'name': 'BBSCoin',
		'slug': 'bbscoin',
		'symbol': 'BBS'
	},
	{
		'id': 9562,
		'name': 'Coldstack',
		'slug': 'coldstack',
		'symbol': 'CLS'
	},
	{
		'id': 1949,
		'name': 'Agrello',
		'slug': 'agrello-delta',
		'symbol': 'DLT'
	},
	{
		'id': 5155,
		'name': 'Nyzo',
		'slug': 'nyzo',
		'symbol': 'NYZO'
	},
	{
		'id': 6789,
		'name': 'Blockchain Cuties Universe Governance',
		'slug': 'blockchain-cuties-universe',
		'symbol': 'BCUG'
	},
	{
		'id': 1609,
		'name': 'Asch',
		'slug': 'asch',
		'symbol': 'XAS'
	},
	{
		'id': 3210,
		'name': 'MIB Coin',
		'slug': 'mib-coin',
		'symbol': 'MIB'
	},
	{
		'id': 1878,
		'name': 'Shadow Token',
		'slug': 'shadow-token',
		'symbol': 'SHDW'
	},
	{
		'id': 2890,
		'name': 'KanadeCoin',
		'slug': 'kanadecoin',
		'symbol': 'KNDC'
	},
	{
		'id': 2960,
		'name': 'Tourist Token',
		'slug': 'tourist-token',
		'symbol': 'TOTO'
	},
	{
		'id': 2421,
		'name': 'VouchForMe',
		'slug': 'insurepal',
		'symbol': 'IPL'
	},
	{
		'id': 2438,
		'name': 'Double-A Chain',
		'slug': 'acute-angle-cloud',
		'symbol': 'AAC'
	},
	{
		'id': 8105,
		'name': 'ROCKI',
		'slug': 'rocki',
		'symbol': 'ROCKI'
	},
	{
		'id': 8421,
		'name': 'Argon',
		'slug': 'argon',
		'symbol': 'ARGON'
	},
	{
		'id': 2537,
		'name': 'Gems ',
		'slug': 'gems-protocol',
		'symbol': 'GEM'
	},
	{
		'id': 8895,
		'name': 'ORAO Network',
		'slug': 'orao-network',
		'symbol': 'ORAO'
	},
	{
		'id': 6670,
		'name': 'Axis DeFi',
		'slug': 'axis-defi',
		'symbol': 'AXIS'
	},
	{
		'id': 7386,
		'name': 'Spaceswap MILK2',
		'slug': 'spaceswap',
		'symbol': 'MILK2'
	},
	{
		'id': 7390,
		'name': 'Spaceswap SHAKE',
		'slug': 'shake',
		'symbol': 'SHAKE'
	},
	{
		'id': 6839,
		'name': 'KIMCHI.finance',
		'slug': 'kimchi-finance',
		'symbol': 'KIMCHI'
	},
	{
		'id': 2955,
		'name': 'Cosmo Coin',
		'slug': 'cosmo-coin',
		'symbol': 'COSM'
	},
	{
		'id': 8445,
		'name': 'SharedStake',
		'slug': 'sharedstake',
		'symbol': 'SGT'
	},
	{
		'id': 10222,
		'name': 'Vodra',
		'slug': 'vodra',
		'symbol': 'VDR'
	},
	{
		'id': 1937,
		'name': 'Po.et',
		'slug': 'poet',
		'symbol': 'POE'
	},
	{
		'id': 5407,
		'name': 'Kingdom Game 4.0',
		'slug': 'kingdom-game-4',
		'symbol': 'KDG'
	},
	{
		'id': 1902,
		'name': 'MyBit',
		'slug': 'mybit',
		'symbol': 'MYB'
	},
	{
		'id': 11923,
		'name': 'Elpis Battle',
		'slug': 'elpis-battle',
		'symbol': 'EBA'
	},
	{
		'id': 1294,
		'name': 'Rise',
		'slug': 'rise',
		'symbol': 'RISE'
	},
	{
		'id': 2044,
		'name': 'Enigma',
		'slug': 'enigma',
		'symbol': 'ENG'
	},
	{
		'id': 2624,
		'name': 'Sentinel Chain',
		'slug': 'sentinel-chain',
		'symbol': 'SENC'
	},
	{
		'id': 7231,
		'name': 'Nsure.Network',
		'slug': 'nsure-network',
		'symbol': 'NSURE'
	},
	{
		'id': 3106,
		'name': 'PKG Token',
		'slug': 'pkg-token',
		'symbol': 'PKG'
	},
	{
		'id': 8862,
		'name': 'Rage Fan',
		'slug': 'rage-fan',
		'symbol': 'RAGE'
	},
	{
		'id': 8386,
		'name': 'Gourmet Galaxy',
		'slug': 'gourmet-galaxy',
		'symbol': 'GUM'
	},
	{
		'id': 1787,
		'name': 'Jetcoin',
		'slug': 'jetcoin',
		'symbol': 'JET'
	},
	{
		'id': 12042,
		'name': 'Sypool',
		'slug': 'sypool',
		'symbol': 'SYP'
	},
	{
		'id': 8036,
		'name': 'YVS.Finance',
		'slug': 'yvs-finance',
		'symbol': 'YVS'
	},
	{
		'id': 7389,
		'name': 'Non-Fungible Yearn',
		'slug': 'non-fungible-yearn',
		'symbol': 'NFY'
	},
	{
		'id': 1678,
		'name': 'InsaneCoin',
		'slug': 'insanecoin-insn',
		'symbol': 'INSN'
	},
	{
		'id': 8177,
		'name': 'KnoxFS',
		'slug': 'knoxfs-new',
		'symbol': 'KFX'
	},
	{
		'id': 7190,
		'name': 'PowerTrade Fuel',
		'slug': 'powertrade-fuel',
		'symbol': 'PTF'
	},
	{
		'id': 14996,
		'name': 'MEDIA EYE NFT Portal',
		'slug': 'media-eye',
		'symbol': 'eYe'
	},
	{
		'id': 7876,
		'name': 'SORA Validator Token',
		'slug': 'sora-validator-token',
		'symbol': 'VAL'
	},
	{
		'id': 4826,
		'name': 'ZUM TOKEN',
		'slug': 'zum-token',
		'symbol': 'ZUM'
	},
	{
		'id': 4097,
		'name': 'x42 Protocol',
		'slug': 'x42-protocol',
		'symbol': 'X42'
	},
	{
		'id': 9225,
		'name': 'Rigel Protocol',
		'slug': 'rigel-protocol',
		'symbol': 'RGP'
	},
	{
		'id': 10822,
		'name': 'Robust Token',
		'slug': 'robust-protocol',
		'symbol': 'RBT'
	},
	{
		'id': 9906,
		'name': 'Bunicorn',
		'slug': 'bunicorn',
		'symbol': 'BUNI'
	},
	{
		'id': 2279,
		'name': 'Playkey',
		'slug': 'playkey',
		'symbol': 'PKT'
	},
	{
		'id': 3121,
		'name': 'IGToken',
		'slug': 'igtoken',
		'symbol': 'IG'
	},
	{
		'id': 9443,
		'name': 'Step Finance',
		'slug': 'step-finance',
		'symbol': 'STEP'
	},
	{
		'id': 1281,
		'name': 'ION',
		'slug': 'ion',
		'symbol': 'ION'
	},
	{
		'id': 3464,
		'name': 'Cheesecoin',
		'slug': 'cheesecoin',
		'symbol': 'CHEESE'
	},
	{
		'id': 13376,
		'name': 'Coinracer',
		'slug': 'coinracer',
		'symbol': 'CRACE'
	},
	{
		'id': 3362,
		'name': 'Auxilium',
		'slug': 'auxilium',
		'symbol': 'AUX'
	},
	{
		'id': 1624,
		'name': 'Atmos',
		'slug': 'atmos',
		'symbol': 'ATMOS'
	},
	{
		'id': 4452,
		'name': 'BidiPass',
		'slug': 'bidipass',
		'symbol': 'BDP'
	},
	{
		'id': 4045,
		'name': 'Catex Token',
		'slug': 'catex-token',
		'symbol': 'CATT'
	},
	{
		'id': 5179,
		'name': 'Celeum',
		'slug': 'celeum',
		'symbol': 'CLX'
	},
	{
		'id': 8605,
		'name': 'WOWswap',
		'slug': 'wowswap',
		'symbol': 'WOW'
	},
	{
		'id': 8942,
		'name': 'Paybswap',
		'slug': 'paybswap',
		'symbol': 'PAYB'
	},
	{
		'id': 9503,
		'name': 'CryptoTycoon',
		'slug': 'cryptotycoon',
		'symbol': 'CTT'
	},
	{
		'id': 5169,
		'name': 'PYRO Network',
		'slug': 'pyro-network',
		'symbol': 'PYRO'
	},
	{
		'id': 3273,
		'name': 'IQ.cash',
		'slug': 'iqcash',
		'symbol': 'IQ'
	},
	{
		'id': 9583,
		'name': 'MELX',
		'slug': 'melalie',
		'symbol': 'MEL'
	},
	{
		'id': 12463,
		'name': 'Timechain Swap Token',
		'slug': 'timechain-swap-token',
		'symbol': 'TCS'
	},
	{
		'id': 2047,
		'name': 'Zeusshield',
		'slug': 'zeusshield',
		'symbol': 'ZSC'
	},
	{
		'id': 12797,
		'name': 'ShoeFy',
		'slug': 'shoefy',
		'symbol': 'SHOE'
	},
	{
		'id': 9259,
		'name': 'TheForce Trade',
		'slug': 'theforce-trade',
		'symbol': 'FOC'
	},
	{
		'id': 4991,
		'name': 'Lightstreams',
		'slug': 'lightstreams',
		'symbol': 'PHT'
	},
	{
		'id': 8145,
		'name': 'SparkPoint Fuel',
		'slug': 'sparkpoint-fuel',
		'symbol': 'SFUEL'
	},
	{
		'id': 9827,
		'name': 'Sportcash One',
		'slug': 'sportcash-one',
		'symbol': 'SCONEX'
	},
	{
		'id': 6609,
		'name': 'Decentrahub Coin',
		'slug': 'decentrahub-coin',
		'symbol': 'DCNTR'
	},
	{
		'id': 12313,
		'name': 'Kawaii Islands',
		'slug': 'kawaii-islands',
		'symbol': 'KWT'
	},
	{
		'id': 9663,
		'name': 'ArGo',
		'slug': 'argoapp',
		'symbol': 'ARGO'
	},
	{
		'id': 1212,
		'name': 'MojoCoin',
		'slug': 'mojocoin',
		'symbol': 'MOJO'
	},
	{
		'id': 3752,
		'name': 'uPlexa',
		'slug': 'uplexa',
		'symbol': 'UPX'
	},
	{
		'id': 9262,
		'name': 'UniFarm',
		'slug': 'unifarm',
		'symbol': 'UFARM'
	},
	{
		'id': 8305,
		'name': 'Insured Finance',
		'slug': 'insured-finance',
		'symbol': 'INFI'
	},
	{
		'id': 2107,
		'name': 'LUXCoin',
		'slug': 'luxcoin',
		'symbol': 'LUX'
	},
	{
		'id': 2965,
		'name': 'VikkyToken',
		'slug': 'vikkytoken',
		'symbol': 'VIKKY'
	},
	{
		'id': 12812,
		'name': 'Mind Music',
		'slug': 'mind-music',
		'symbol': 'MND'
	},
	{
		'id': 3990,
		'name': 'Webflix Token',
		'slug': 'webflix-token',
		'symbol': 'WFX'
	},
	{
		'id': 951,
		'name': 'Synergy',
		'slug': 'synergy',
		'symbol': 'SNRG'
	},
	{
		'id': 9447,
		'name': 'Synthetify',
		'slug': 'synthetify',
		'symbol': 'SNY'
	},
	{
		'id': 2290,
		'name': 'YENTEN',
		'slug': 'yenten',
		'symbol': 'YTN'
	},
	{
		'id': 2288,
		'name': 'Worldcore',
		'slug': 'worldcore',
		'symbol': 'WRC'
	},
	{
		'id': 3913,
		'name': 'Titan Coin',
		'slug': 'titan-coin',
		'symbol': 'TTN'
	},
	{
		'id': 6,
		'name': 'Novacoin',
		'slug': 'novacoin',
		'symbol': 'NVC'
	},
	{
		'id': 3858,
		'name': 'FNB Protocol',
		'slug': 'fnb-protocol',
		'symbol': 'FNB'
	},
	{
		'id': 5894,
		'name': 'DoYourTip',
		'slug': 'doyourtip',
		'symbol': 'DYT'
	},
	{
		'id': 16516,
		'name': 'Ancient Kingdom',
		'slug': 'ancient-kingdom',
		'symbol': 'DOM'
	},
	{
		'id': 8383,
		'name': 'Filecash',
		'slug': 'filecash',
		'symbol': 'FIC'
	},
	{
		'id': 1658,
		'name': 'Lunyr',
		'slug': 'lunyr',
		'symbol': 'LUN'
	},
	{
		'id': 8712,
		'name': 'keyTango',
		'slug': 'keytango',
		'symbol': 'TANGO'
	},
	{
		'id': 2286,
		'name': 'MicroMoney',
		'slug': 'micromoney',
		'symbol': 'AMM'
	},
	{
		'id': 7376,
		'name': 'Doki Doki Finance',
		'slug': 'doki-doki-finance',
		'symbol': 'DOKI'
	},
	{
		'id': 3633,
		'name': 'BitGuild PLAT',
		'slug': 'bitguild-plat',
		'symbol': 'PLAT'
	},
	{
		'id': 3219,
		'name': 'FUTURAX',
		'slug': 'futurax',
		'symbol': 'FTXT'
	},
	{
		'id': 3140,
		'name': 'Ubex',
		'slug': 'ubex',
		'symbol': 'UBEX'
	},
	{
		'id': 1165,
		'name': 'Evil Coin',
		'slug': 'evil-coin',
		'symbol': 'EVIL'
	},
	{
		'id': 1273,
		'name': 'Citadel',
		'slug': 'citadel',
		'symbol': 'CTL'
	},
	{
		'id': 2660,
		'name': 'Aditus',
		'slug': 'aditus',
		'symbol': 'ADI'
	},
	{
		'id': 11450,
		'name': 'Skyrim Finance',
		'slug': 'skyrim-finance',
		'symbol': 'SKYRIM'
	},
	{
		'id': 8481,
		'name': 'CafeSwap Token',
		'slug': 'cafeswap-token',
		'symbol': 'BREW'
	},
	{
		'id': 2614,
		'name': 'BlitzPick',
		'slug': 'blitzpredict',
		'symbol': 'XBP'
	},
	{
		'id': 8999,
		'name': 'Collateral Pay',
		'slug': 'collateral-pay',
		'symbol': 'COLL'
	},
	{
		'id': 2002,
		'name': 'TrezarCoin',
		'slug': 'trezarcoin',
		'symbol': 'TZC'
	},
	{
		'id': 730,
		'name': 'GCN Coin',
		'slug': 'gcn-coin',
		'symbol': 'GCN'
	},
	{
		'id': 8439,
		'name': 'Warp Finance',
		'slug': 'warp-finance',
		'symbol': 'WARP'
	},
	{
		'id': 8463,
		'name': 'Tapx',
		'slug': 'tapmydata',
		'symbol': 'TAP'
	},
	{
		'id': 5028,
		'name': 'ROAD',
		'slug': 'road',
		'symbol': 'ROAD'
	},
	{
		'id': 4542,
		'name': 'Scrypta',
		'slug': 'scrypta',
		'symbol': 'LYRA'
	},
	{
		'id': 3870,
		'name': 'Lition',
		'slug': 'lition',
		'symbol': 'LIT'
	},
	{
		'id': 2367,
		'name': 'Aigang',
		'slug': 'aigang',
		'symbol': 'AIX'
	},
	{
		'id': 11836,
		'name': 'Citadel.one',
		'slug': 'citadel-one',
		'symbol': 'XCT'
	},
	{
		'id': 15484,
		'name': 'Lithosphere',
		'slug': 'lithosphere',
		'symbol': 'LITHO'
	},
	{
		'id': 18951,
		'name': 'VEKTOR',
		'slug': 'vektor',
		'symbol': 'VEKTOR'
	},
	{
		'id': 8281,
		'name': 'Golden Goose',
		'slug': 'golden-goose',
		'symbol': 'GOLD'
	},
	{
		'id': 3132,
		'name': 'EtherGem',
		'slug': 'ethergem',
		'symbol': 'EGEM'
	},
	{
		'id': 8673,
		'name': 'TotemFi',
		'slug': 'totemfi',
		'symbol': 'TOTM'
	},
	{
		'id': 120,
		'name': 'Nyancoin',
		'slug': 'nyancoin',
		'symbol': 'NYAN'
	},
	{
		'id': 4870,
		'name': 'MesChain',
		'slug': 'meschain',
		'symbol': 'MES'
	},
	{
		'id': 21722,
		'name': 'Chirpley',
		'slug': 'chirpley',
		'symbol': 'CHRP'
	},
	{
		'id': 5595,
		'name': 'MultiCoinCasino',
		'slug': 'multicoincasino',
		'symbol': 'MCC'
	},
	{
		'id': 3113,
		'name': 'InterCrone',
		'slug': 'intercrone',
		'symbol': 'ICR'
	},
	{
		'id': 1175,
		'name': 'Rubies',
		'slug': 'rubies',
		'symbol': 'RBIES'
	},
	{
		'id': 9109,
		'name': 'Savix',
		'slug': 'savix',
		'symbol': 'SVX'
	},
	{
		'id': 1830,
		'name': 'SkinCoin',
		'slug': 'skincoin',
		'symbol': 'SKIN'
	},
	{
		'id': 14422,
		'name': 'HeroesTD',
		'slug': 'heroes-td',
		'symbol': 'HTD'
	},
	{
		'id': 1053,
		'name': 'Bolivarcoin',
		'slug': 'bolivarcoin',
		'symbol': 'BOLI'
	},
	{
		'id': 3352,
		'name': 'MidasProtocol',
		'slug': 'midasprotocol',
		'symbol': 'MAS'
	},
	{
		'id': 4142,
		'name': 'Cubiex',
		'slug': 'cubiex',
		'symbol': 'CBIX'
	},
	{
		'id': 7377,
		'name': 'Dogeswap',
		'slug': 'dogeswap',
		'symbol': 'DOGES'
	},
	{
		'id': 5469,
		'name': 'AMATEN',
		'slug': 'amaten',
		'symbol': 'AMA'
	},
	{
		'id': 703,
		'name': 'Rimbit',
		'slug': 'rimbit',
		'symbol': 'RBT'
	},
	{
		'id': 9544,
		'name': 'POLKARARE',
		'slug': 'polkarare',
		'symbol': 'PRARE'
	},
	{
		'id': 5963,
		'name': 'Centric Swap',
		'slug': 'centric-swap',
		'symbol': 'CNS'
	},
	{
		'id': 5214,
		'name': 'Phoneum',
		'slug': 'phoneum',
		'symbol': 'PHT'
	},
	{
		'id': 8449,
		'name': 'Goose Finance',
		'slug': 'goose-finance',
		'symbol': 'EGG'
	},
	{
		'id': 11727,
		'name': 'Phoenix Token',
		'slug': 'phoenix-token',
		'symbol': 'PHX'
	},
	{
		'id': 2184,
		'name': 'Privatix',
		'slug': 'privatix',
		'symbol': 'PRIX'
	},
	{
		'id': 3910,
		'name': 'pEOS',
		'slug': 'peos',
		'symbol': 'PEOS'
	},
	{
		'id': 2453,
		'name': 'EDUCare',
		'slug': 'educare',
		'symbol': 'EKT'
	},
	{
		'id': 3650,
		'name': 'COVA',
		'slug': 'cova',
		'symbol': 'COVA'
	},
	{
		'id': 9134,
		'name': 'Beyondfi',
		'slug': 'beyond-finance',
		'symbol': 'BYN'
	},
	{
		'id': 7791,
		'name': 'Pancake Bunny',
		'slug': 'pancakebunny',
		'symbol': 'BUNNY'
	},
	{
		'id': 2597,
		'name': 'UpToken',
		'slug': 'uptoken',
		'symbol': 'UP'
	},
	{
		'id': 5840,
		'name': 'Insight Protocol',
		'slug': 'insight-protocol',
		'symbol': 'INX'
	},
	{
		'id': 2249,
		'name': 'Eroscoin',
		'slug': 'eroscoin',
		'symbol': 'ERO'
	},
	{
		'id': 3985,
		'name': 'Origo',
		'slug': 'origo',
		'symbol': 'OGO'
	},
	{
		'id': 1254,
		'name': 'PlatinumBAR',
		'slug': 'platinumbar',
		'symbol': 'XPTX'
	},
	{
		'id': 3261,
		'name': 'EvenCoin',
		'slug': 'evencoin',
		'symbol': 'EVN'
	},
	{
		'id': 20836,
		'name': 'Koi Network',
		'slug': 'koi-network',
		'symbol': 'KOI'
	},
	{
		'id': 5545,
		'name': 'NFX Coin',
		'slug': 'nfx-coin',
		'symbol': 'NFXC'
	},
	{
		'id': 3627,
		'name': 'Block-Logic',
		'slug': 'block-logic',
		'symbol': 'BLTG'
	},
	{
		'id': 6861,
		'name': 'ChartEx',
		'slug': 'chartex',
		'symbol': 'CHART'
	},
	{
		'id': 3395,
		'name': 'SteepCoin',
		'slug': 'steepcoin',
		'symbol': 'STEEP'
	},
	{
		'id': 13119,
		'name': 'Wolf Safe Poor People (Polygon)',
		'slug': 'wolf-safe-poor-people-polygon',
		'symbol': 'WSPP'
	},
	{
		'id': 2064,
		'name': 'Maecenas',
		'slug': 'maecenas',
		'symbol': 'ART'
	},
	{
		'id': 3703,
		'name': 'ADAMANT Messenger',
		'slug': 'adamant-messenger',
		'symbol': 'ADM'
	},
	{
		'id': 3008,
		'name': 'Vivid Coin',
		'slug': 'vivid-coin',
		'symbol': 'VIVID'
	},
	{
		'id': 2944,
		'name': 'Elysian',
		'slug': 'elysian',
		'symbol': 'ELY'
	},
	{
		'id': 4264,
		'name': 'Ritocoin',
		'slug': 'ritocoin',
		'symbol': 'RITO'
	},
	{
		'id': 3242,
		'name': 'Beetlecoin',
		'slug': 'beetle-coin',
		'symbol': 'BEET'
	},
	{
		'id': 1285,
		'name': 'GoldBlocks',
		'slug': 'goldblocks',
		'symbol': 'GB'
	},
	{
		'id': 9145,
		'name': 'Yellow Road',
		'slug': 'yellow-road',
		'symbol': 'ROAD'
	},
	{
		'id': 2489,
		'name': 'BitWhite',
		'slug': 'bitwhite',
		'symbol': 'BTW'
	},
	{
		'id': 5397,
		'name': 'Castweet',
		'slug': 'castweet',
		'symbol': 'CTT'
	},
	{
		'id': 1970,
		'name': 'ATBCoin',
		'slug': 'atbcoin',
		'symbol': 'ATB'
	},
	{
		'id': 2448,
		'name': 'SparksPay',
		'slug': 'sparkspay',
		'symbol': 'SPK'
	},
	{
		'id': 2295,
		'name': 'Starbase',
		'slug': 'starbase',
		'symbol': 'STAR'
	},
	{
		'id': 5003,
		'name': 'VAULT',
		'slug': 'vault',
		'symbol': 'VAULT'
	},
	{
		'id': 9018,
		'name': 'GamyFi Platform',
		'slug': 'gamyfi-platform',
		'symbol': 'GFX'
	},
	{
		'id': 551,
		'name': 'Donu',
		'slug': 'donu',
		'symbol': 'DONU'
	},
	{
		'id': 16903,
		'name': 'NeoNomad',
		'slug': 'neonomad-finance',
		'symbol': 'NNI'
	},
	{
		'id': 1736,
		'name': 'Unify',
		'slug': 'unify',
		'symbol': 'UNIFY'
	},
	{
		'id': 7594,
		'name': 'Smoothy',
		'slug': 'smoothy',
		'symbol': 'SMTY'
	},
	{
		'id': 4867,
		'name': 'BeatzCoin',
		'slug': 'beatzcoin',
		'symbol': 'BTZC'
	},
	{
		'id': 3950,
		'name': 'Netrum',
		'slug': 'netrum',
		'symbol': 'NTR'
	},
	{
		'id': 12278,
		'name': 'Playermon',
		'slug': 'playermon',
		'symbol': 'PYM'
	},
	{
		'id': 597,
		'name': 'Opal',
		'slug': 'opal',
		'symbol': 'OPAL'
	},
	{
		'id': 3468,
		'name': 'Fivebalance',
		'slug': 'fivebalance',
		'symbol': 'FBN'
	},
	{
		'id': 14840,
		'name': 'ClassicDoge',
		'slug': 'classicdoge-io',
		'symbol': 'XDOGE'
	},
	{
		'id': 2752,
		'name': 'Datarius Credit',
		'slug': 'datarius-credit',
		'symbol': 'DTRC'
	},
	{
		'id': 5233,
		'name': 'WinCash',
		'slug': 'wincash',
		'symbol': 'WCC'
	},
	{
		'id': 921,
		'name': 'Universal Currency',
		'slug': 'universal-currency',
		'symbol': 'UNIT'
	},
	{
		'id': 1223,
		'name': 'BERNcash',
		'slug': 'berncash',
		'symbol': 'BERN'
	},
	{
		'id': 2704,
		'name': 'Transcodium',
		'slug': 'transcodium',
		'symbol': 'TNS'
	},
	{
		'id': 1968,
		'name': 'XPA',
		'slug': 'xpa',
		'symbol': 'XPA'
	},
	{
		'id': 3792,
		'name': 'ARAW',
		'slug': 'araw',
		'symbol': 'ARAW'
	},
	{
		'id': 3898,
		'name': 'Axe',
		'slug': 'axe',
		'symbol': 'AXE'
	},
	{
		'id': 12360,
		'name': 'CoinAlpha',
		'slug': 'coinalpha',
		'symbol': 'ALP'
	},
	{
		'id': 3449,
		'name': 'MMOCoin',
		'slug': 'mmocoin',
		'symbol': 'MMO'
	},
	{
		'id': 4069,
		'name': 'Blockburn',
		'slug': 'blockburn',
		'symbol': 'BURN'
	},
	{
		'id': 3151,
		'name': 'Akroma',
		'slug': 'akroma',
		'symbol': 'AKA'
	},
	{
		'id': 7698,
		'name': 'CorionX',
		'slug': 'corionx',
		'symbol': 'CORX'
	},
	{
		'id': 1722,
		'name': 'More Coin',
		'slug': 'more-coin',
		'symbol': 'MORE'
	},
	{
		'id': 7310,
		'name': 'Gem Exchange and Trading',
		'slug': 'gem-exchange-and-trading',
		'symbol': 'GXT'
	},
	{
		'id': 2828,
		'name': 'SPINDLE',
		'slug': 'spindle',
		'symbol': 'SPD'
	},
	{
		'id': 16607,
		'name': 'Islander',
		'slug': 'islander',
		'symbol': 'ISA'
	},
	{
		'id': 1511,
		'name': 'PureVidz',
		'slug': 'purevidz',
		'symbol': 'VIDZ'
	},
	{
		'id': 5083,
		'name': 'Curio',
		'slug': 'curio',
		'symbol': 'CUR'
	},
	{
		'id': 978,
		'name': 'Ratecoin',
		'slug': 'ratecoin',
		'symbol': 'XRA'
	},
	{
		'id': 7436,
		'name': 'BonFi',
		'slug': 'bonfi',
		'symbol': 'BNF'
	},
	{
		'id': 8260,
		'name': 'Indexed Finance',
		'slug': 'indexed-finance',
		'symbol': 'NDX'
	},
	{
		'id': 764,
		'name': 'PayCoin',
		'slug': 'paycoin2',
		'symbol': 'XPY'
	},
	{
		'id': 1200,
		'name': 'NevaCoin',
		'slug': 'nevacoin',
		'symbol': 'NEVA'
	},
	{
		'id': 56,
		'name': 'Zetacoin',
		'slug': 'zetacoin',
		'symbol': 'ZET'
	},
	{
		'id': 4307,
		'name': 'UNICORN Token',
		'slug': 'unicorn-token',
		'symbol': 'UNI'
	},
	{
		'id': 14303,
		'name': 'Samusky',
		'slug': 'samusky',
		'symbol': 'SAMU'
	},
	{
		'id': 8452,
		'name': 'Shield Protocol',
		'slug': 'shield-protocol',
		'symbol': 'SHIELD'
	},
	{
		'id': 4466,
		'name': 'Ormeus Ecosystem',
		'slug': 'ormeus-ecosystem',
		'symbol': 'ECO'
	},
	{
		'id': 5024,
		'name': 'ALL BEST ICO',
		'slug': 'all-best-ico',
		'symbol': 'ALLBI'
	},
	{
		'id': 3200,
		'name': 'Nasdacoin',
		'slug': 'nasdacoin',
		'symbol': 'NSD'
	},
	{
		'id': 9752,
		'name': 'AFEN Blockchain Network',
		'slug': 'afen-blockchain',
		'symbol': 'AFEN'
	},
	{
		'id': 4298,
		'name': 'Rapidz',
		'slug': 'rapidz',
		'symbol': 'RPZX'
	},
	{
		'id': 4071,
		'name': 'Ubricoin',
		'slug': 'ubricoin',
		'symbol': 'UBN'
	},
	{
		'id': 1156,
		'name': 'Yocoin',
		'slug': 'yocoin',
		'symbol': 'YOC'
	},
	{
		'id': 3770,
		'name': 'CustomContractNetwork',
		'slug': 'customcontractnetwork',
		'symbol': 'CCN'
	},
	{
		'id': 1218,
		'name': 'PostCoin',
		'slug': 'postcoin',
		'symbol': 'POST'
	},
	{
		'id': 9268,
		'name': '2local',
		'slug': '2local',
		'symbol': '2LC'
	},
	{
		'id': 13626,
		'name': 'ACA Token',
		'slug': 'aca-token',
		'symbol': 'ACA'
	},
	{
		'id': 3024,
		'name': 'Arionum',
		'slug': 'arionum',
		'symbol': 'ARO'
	},
	{
		'id': 9432,
		'name': 'Crypto Kombat',
		'slug': 'crypto-kombat',
		'symbol': 'KOMBAT'
	},
	{
		'id': 1747,
		'name': 'Onix',
		'slug': 'onix',
		'symbol': 'ONX'
	},
	{
		'id': 1514,
		'name': 'ICOBID',
		'slug': 'icobid',
		'symbol': 'ICOB'
	},
	{
		'id': 1044,
		'name': 'Global Currency Reserve',
		'slug': 'global-currency-reserve',
		'symbol': 'GCR'
	},
	{
		'id': 4940,
		'name': 'Kuverit',
		'slug': 'kuverit',
		'symbol': 'KUV'
	},
	{
		'id': 2415,
		'name': 'ArbitrageCT',
		'slug': 'arbitragect',
		'symbol': 'ARCT'
	},
	{
		'id': 15141,
		'name': 'DeFi Degen Land',
		'slug': 'defi-degen-land',
		'symbol': 'DDL'
	},
	{
		'id': 3611,
		'name': 'Noir',
		'slug': 'noir',
		'symbol': 'NOR'
	},
	{
		'id': 9482,
		'name': 'Lympo Market Token',
		'slug': 'lympo-market-token',
		'symbol': 'LMT'
	},
	{
		'id': 12501,
		'name': 'Qrkita Token',
		'slug': 'qrkita-token',
		'symbol': 'QRT'
	},
	{
		'id': 14136,
		'name': 'Zuki Moba',
		'slug': 'zuki-moba',
		'symbol': 'ZUKI'
	},
	{
		'id': 1799,
		'name': 'Rupee',
		'slug': 'rupee',
		'symbol': 'RUP'
	},
	{
		'id': 1033,
		'name': 'GuccioneCoin',
		'slug': 'guccionecoin',
		'symbol': 'GCC'
	},
	{
		'id': 1693,
		'name': 'Theresa May Coin',
		'slug': 'theresa-may-coin',
		'symbol': 'MAY'
	},
	{
		'id': 1136,
		'name': 'Adzcoin',
		'slug': 'adzcoin',
		'symbol': 'ADZ'
	},
	{
		'id': 2391,
		'name': 'EchoLink',
		'slug': 'echolink',
		'symbol': 'EKO'
	},
	{
		'id': 2230,
		'name': 'MONK',
		'slug': 'monk',
		'symbol': 'MONK'
	},
	{
		'id': 2147,
		'name': 'ELTCOIN',
		'slug': 'eltcoin',
		'symbol': 'ELTCOIN'
	},
	{
		'id': 3247,
		'name': 'Fire Lotto',
		'slug': 'fire-lotto',
		'symbol': 'FLOT'
	},
	{
		'id': 2148,
		'name': 'Desire',
		'slug': 'desire',
		'symbol': 'DSR'
	},
	{
		'id': 2772,
		'name': 'Digitex',
		'slug': 'digitex',
		'symbol': 'DGTX'
	},
	{
		'id': 4792,
		'name': 'Agora',
		'slug': 'agora',
		'symbol': 'VOTE'
	},
	{
		'id': 3133,
		'name': 'Arepacoin',
		'slug': 'arepacoin',
		'symbol': 'AREPA'
	},
	{
		'id': 3907,
		'name': 'BitCash',
		'slug': 'bitcash',
		'symbol': 'BITC'
	},
	{
		'id': 1353,
		'name': 'TajCoin',
		'slug': 'tajcoin',
		'symbol': 'TAJ'
	},
	{
		'id': 12307,
		'name': 'Warena',
		'slug': 'warena',
		'symbol': 'RENA'
	},
	{
		'id': 11471,
		'name': 'SolanaSail Governance Token',
		'slug': 'solanasail-governance-token',
		'symbol': 'GSAIL'
	},
	{
		'id': 1998,
		'name': 'Ormeus Coin',
		'slug': 'ormeus-coin',
		'symbol': 'ORMEUS'
	},
	{
		'id': 12172,
		'name': 'Moniwar',
		'slug': 'moniwar',
		'symbol': 'MOWA'
	},
	{
		'id': 3469,
		'name': 'TrueDeck',
		'slug': 'truedeck',
		'symbol': 'TDP'
	},
	{
		'id': 1439,
		'name': 'AllSafe',
		'slug': 'allsafe',
		'symbol': 'ASAFE'
	},
	{
		'id': 4076,
		'name': 'ETHplode',
		'slug': 'ethplode',
		'symbol': 'ETHPLO'
	},
	{
		'id': 3480,
		'name': 'StrongHands Masternode',
		'slug': 'stronghands-masternode',
		'symbol': 'SHMN'
	},
	{
		'id': 3656,
		'name': 'Beacon',
		'slug': 'beacon',
		'symbol': 'BECN'
	},
	{
		'id': 8752,
		'name': 'Landbox',
		'slug': 'landbox',
		'symbol': 'LAND'
	},
	{
		'id': 2205,
		'name': 'Phantomx',
		'slug': 'phantomx',
		'symbol': 'PNX'
	},
	{
		'id': 1522,
		'name': 'FirstCoin',
		'slug': 'firstcoin',
		'symbol': 'FRST'
	},
	{
		'id': 7262,
		'name': 'extraDNA',
		'slug': 'extradna',
		'symbol': 'XDNA'
	},
	{
		'id': 4156,
		'name': 'ImageCoin',
		'slug': 'imagecoin',
		'symbol': 'IMG'
	},
	{
		'id': 5520,
		'name': 'Martkist',
		'slug': 'martkist',
		'symbol': 'MARTK'
	},
	{
		'id': 2452,
		'name': 'Tokenbox',
		'slug': 'tokenbox',
		'symbol': 'TBX'
	},
	{
		'id': 9905,
		'name': 'Rune',
		'slug': 'rune',
		'symbol': 'RUNE'
	},
	{
		'id': 3381,
		'name': 'Civitas',
		'slug': 'civitas',
		'symbol': 'CIV'
	},
	{
		'id': 367,
		'name': 'Coin2.1',
		'slug': 'coin2-1',
		'symbol': 'C2'
	},
	{
		'id': 894,
		'name': 'Neutron',
		'slug': 'neutron',
		'symbol': 'NTRN'
	},
	{
		'id': 1546,
		'name': 'Centurion',
		'slug': 'centurion',
		'symbol': 'CNT'
	},
	{
		'id': 15128,
		'name': 'Niftify',
		'slug': 'niftify',
		'symbol': 'NIFT'
	},
	{
		'id': 11067,
		'name': 'Step Hero',
		'slug': 'step-hero',
		'symbol': 'HERO'
	},
	{
		'id': 2237,
		'name': 'EventChain',
		'slug': 'eventchain',
		'symbol': 'EVC'
	},
	{
		'id': 3383,
		'name': 'Knekted',
		'slug': 'knekted',
		'symbol': 'KNT'
	},
	{
		'id': 7322,
		'name': 'Stream Protocol',
		'slug': 'stream-protocol',
		'symbol': 'STPL'
	},
	{
		'id': 9856,
		'name': 'Knit Finance',
		'slug': 'knit-finance',
		'symbol': 'KFT'
	},
	{
		'id': 7135,
		'name': 'Kush Finance',
		'slug': 'kush-finance',
		'symbol': 'KSEED'
	},
	{
		'id': 9430,
		'name': 'Alphr finance',
		'slug': 'alphr-finance',
		'symbol': 'ALPHR'
	},
	{
		'id': 3489,
		'name': 'Escroco Emerald',
		'slug': 'escroco-emerald',
		'symbol': 'ESCE'
	},
	{
		'id': 5816,
		'name': 'Rewardiqa',
		'slug': 'rewardiqa',
		'symbol': 'REW'
	},
	{
		'id': 4213,
		'name': 'Uptrennd',
		'slug': 'uptrennd',
		'symbol': '1UP'
	},
	{
		'id': 3738,
		'name': 'Decentralized Crypto Token',
		'slug': 'decentralized-crypto-token',
		'symbol': 'DCTO'
	},
	{
		'id': 366,
		'name': 'BitSend',
		'slug': 'bitsend',
		'symbol': 'BSD'
	},
	{
		'id': 18,
		'name': 'Digitalcoin',
		'slug': 'digitalcoin',
		'symbol': 'DGC'
	},
	{
		'id': 9344,
		'name': '1MillionNFTs',
		'slug': '1millionnfts',
		'symbol': '1MIL'
	},
	{
		'id': 3332,
		'name': 'Gossip Coin',
		'slug': 'gossipcoin',
		'symbol': 'GOSS'
	},
	{
		'id': 15362,
		'name': 'rASKO',
		'slug': 'rasko',
		'symbol': 'RASKO'
	},
	{
		'id': 8607,
		'name': 'Xion Finance',
		'slug': 'xion-finance',
		'symbol': 'XGT'
	},
	{
		'id': 1209,
		'name': 'PosEx',
		'slug': 'posex',
		'symbol': 'PEX'
	},
	{
		'id': 5620,
		'name': '8X8 PROTOCOL',
		'slug': '8x8-protocol',
		'symbol': 'EXE'
	},
	{
		'id': 1038,
		'name': 'Eurocoin',
		'slug': 'eurocoin',
		'symbol': 'EUC'
	},
	{
		'id': 3294,
		'name': 'Bitcoin Adult',
		'slug': 'bitcoin-adult',
		'symbol': 'BTAD'
	},
	{
		'id': 43,
		'name': 'Anoncoin',
		'slug': 'anoncoin',
		'symbol': 'ANC'
	},
	{
		'id': 1991,
		'name': 'Rivetz',
		'slug': 'rivetz',
		'symbol': 'RVT'
	},
	{
		'id': 8837,
		'name': 'Scholarship Coin',
		'slug': 'scholarship-coin',
		'symbol': 'SCHO'
	},
	{
		'id': 916,
		'name': 'MedicCoin',
		'slug': 'mediccoin',
		'symbol': 'MEDIC'
	},
	{
		'id': 3894,
		'name': 'Crypto Sports Network',
		'slug': 'crypto-sports',
		'symbol': 'CSPN'
	},
	{
		'id': 2717,
		'name': 'BoutsPro',
		'slug': 'boutspro',
		'symbol': 'BOUTS'
	},
	{
		'id': 4234,
		'name': '3DCoin',
		'slug': '3dcoin',
		'symbol': '3DC'
	},
	{
		'id': 2200,
		'name': 'GoByte',
		'slug': 'gobyte',
		'symbol': 'GBX'
	},
	{
		'id': 3179,
		'name': 'Arbidex',
		'slug': 'arbidex',
		'symbol': 'ABX'
	},
	{
		'id': 1216,
		'name': 'EDRCoin',
		'slug': 'edrcoin',
		'symbol': 'EDRC'
	},
	{
		'id': 11958,
		'name': 'Knight War - The Holy Trio',
		'slug': 'knight-war',
		'symbol': 'KWS'
	},
	{
		'id': 993,
		'name': 'BowsCoin',
		'slug': 'bowscoin',
		'symbol': 'BSC'
	},
	{
		'id': 3645,
		'name': 'Shivers',
		'slug': 'shivers',
		'symbol': 'SHVR'
	},
	{
		'id': 5818,
		'name': 'Ormeus Cash',
		'slug': 'ormeus-cash',
		'symbol': 'OMC'
	},
	{
		'id': 2870,
		'name': 'FantasyGold',
		'slug': 'fantasygold',
		'symbol': 'FGC'
	},
	{
		'id': 8753,
		'name': 'srnArt Gallery',
		'slug': 'srnartgallery',
		'symbol': 'SACT'
	},
	{
		'id': 2616,
		'name': 'Stipend',
		'slug': 'stipend',
		'symbol': 'SPD'
	},
	{
		'id': 5016,
		'name': 'Innovative Bioresearch Coin',
		'slug': 'innovative-bioresearch-coin',
		'symbol': 'INNBC'
	},
	{
		'id': 3166,
		'name': 'Bitcoin Incognito',
		'slug': 'bitcoin-incognito',
		'symbol': 'XBI'
	},
	{
		'id': 3171,
		'name': 'HeartBout',
		'slug': 'heartbout',
		'symbol': 'HB'
	},
	{
		'id': 4253,
		'name': 'CryptoBonusMiles',
		'slug': 'cryptobonusmiles',
		'symbol': 'CBM'
	},
	{
		'id': 13045,
		'name': 'Heron Asia',
		'slug': 'heron-asia',
		'symbol': 'HERON'
	},
	{
		'id': 1035,
		'name': 'AmsterdamCoin',
		'slug': 'amsterdamcoin',
		'symbol': 'AMS'
	},
	{
		'id': 217,
		'name': 'Bela',
		'slug': 'belacoin',
		'symbol': 'BELA'
	},
	{
		'id': 316,
		'name': 'Dreamcoin',
		'slug': 'dreamcoin',
		'symbol': 'DRM'
	},
	{
		'id': 1241,
		'name': 'FuzzBalls',
		'slug': 'fuzzballs',
		'symbol': 'FUZZ'
	},
	{
		'id': 4910,
		'name': 'CoinDeal Token',
		'slug': 'coindeal-token',
		'symbol': 'CDL'
	},
	{
		'id': 1846,
		'name': 'GeyserCoin',
		'slug': 'geysercoin',
		'symbol': 'GSR'
	},
	{
		'id': 1396,
		'name': 'MustangCoin',
		'slug': 'mustangcoin',
		'symbol': 'MST'
	},
	{
		'id': 3646,
		'name': 'Herbalist Token',
		'slug': 'herbalist-token',
		'symbol': 'HERB'
	},
	{
		'id': 389,
		'name': 'Startcoin',
		'slug': 'startcoin',
		'symbol': 'START'
	},
	{
		'id': 3805,
		'name': 'BoatPilot Token',
		'slug': 'boat-pilot-token',
		'symbol': 'NAVY'
	},
	{
		'id': 10036,
		'name': 'BSClaunch',
		'slug': 'bsclaunch',
		'symbol': 'BSL'
	},
	{
		'id': 9253,
		'name': 'Twinci',
		'slug': 'twinci',
		'symbol': 'TWIN'
	},
	{
		'id': 3451,
		'name': 'BLOC.MONEY',
		'slug': 'bloc-money',
		'symbol': 'BLOC'
	},
	{
		'id': 3366,
		'name': 'SafeInsure',
		'slug': 'safeinsure',
		'symbol': 'SINS'
	},
	{
		'id': 3867,
		'name': 'NeoWorld Cash',
		'slug': 'neoworld-cash',
		'symbol': 'NASH'
	},
	{
		'id': 16197,
		'name': 'Luna Rush',
		'slug': 'luna-rush',
		'symbol': 'LUS'
	},
	{
		'id': 5168,
		'name': 'Bitcoin Classic',
		'slug': 'bitcoin-classic',
		'symbol': 'BXC'
	},
	{
		'id': 2100,
		'name': 'JavaScript Token',
		'slug': 'javascript-token',
		'symbol': 'JS'
	},
	{
		'id': 4238,
		'name': 'EveriToken',
		'slug': 'everitoken',
		'symbol': 'EVT'
	},
	{
		'id': 3798,
		'name': 'Xuez',
		'slug': 'xuez',
		'symbol': 'XUEZ'
	},
	{
		'id': 11517,
		'name': 'Reward Hunters Token',
		'slug': 'reward-hunters-token',
		'symbol': 'RHT'
	},
	{
		'id': 11417,
		'name': 'Gaj Finance',
		'slug': 'gaj-finance',
		'symbol': 'GAJ'
	},
	{
		'id': 1731,
		'name': 'GlobalToken',
		'slug': 'globaltoken',
		'symbol': 'GLT'
	},
	{
		'id': 3390,
		'name': 'Quantis Network',
		'slug': 'quantis-network',
		'symbol': 'QUAN'
	},
	{
		'id': 69,
		'name': 'Datacoin',
		'slug': 'datacoin',
		'symbol': 'DTC'
	},
	{
		'id': 4165,
		'name': 'CREDIT',
		'slug': 'credit',
		'symbol': 'CREDIT'
	},
	{
		'id': 2850,
		'name': 'TRAXIA',
		'slug': 'traxia',
		'symbol': 'TM2'
	},
	{
		'id': 1248,
		'name': 'Bitcoin 21',
		'slug': 'bitcoin-21',
		'symbol': 'XBTC21'
	},
	{
		'id': 3377,
		'name': 'GenesisX',
		'slug': 'genesisx',
		'symbol': 'XGS'
	},
	{
		'id': 934,
		'name': 'ParkByte',
		'slug': 'parkbyte',
		'symbol': 'PKB'
	},
	{
		'id': 5918,
		'name': 'ModiHost',
		'slug': 'modihost',
		'symbol': 'AIM'
	},
	{
		'id': 2241,
		'name': 'Ccore',
		'slug': 'ccore',
		'symbol': 'CCO'
	},
	{
		'id': 837,
		'name': 'X-Coin',
		'slug': 'x-coin',
		'symbol': 'XCO'
	},
	{
		'id': 1651,
		'name': 'SpeedCash',
		'slug': 'speedcash',
		'symbol': 'SCS'
	},
	{
		'id': 12800,
		'name': 'Dogs Of Elon',
		'slug': 'dogs-of-elon',
		'symbol': 'DOE'
	},
	{
		'id': 2565,
		'name': 'StarterCoin',
		'slug': 'startercoin',
		'symbol': 'STAC'
	},
	{
		'id': 1395,
		'name': 'Dollarcoin',
		'slug': 'dollarcoin',
		'symbol': 'DLC'
	},
	{
		'id': 986,
		'name': 'CrevaCoin',
		'slug': 'crevacoin',
		'symbol': 'CREVA'
	},
	{
		'id': 1824,
		'name': 'BitCoal',
		'slug': 'bitcoal',
		'symbol': 'COAL'
	},
	{
		'id': 898,
		'name': 'Californium',
		'slug': 'californium',
		'symbol': 'CF'
	},
	{
		'id': 5902,
		'name': 'DragonVein',
		'slug': 'dragonvein',
		'symbol': 'DVC'
	},
	{
		'id': 2256,
		'name': 'Bonpay',
		'slug': 'bonpay',
		'symbol': 'BON'
	},
	{
		'id': 702,
		'name': 'SpreadCoin',
		'slug': 'spreadcoin',
		'symbol': 'SPR'
	},
	{
		'id': 857,
		'name': 'SongCoin',
		'slug': 'songcoin',
		'symbol': 'SONG'
	},
	{
		'id': 3398,
		'name': 'SCRIV NETWORK',
		'slug': 'scriv-network',
		'symbol': 'SCRIV'
	},
	{
		'id': 3444,
		'name': 'KUN',
		'slug': 'kun',
		'symbol': 'KUN'
	},
	{
		'id': 3266,
		'name': 'Carebit',
		'slug': 'carebit',
		'symbol': 'CARE'
	},
	{
		'id': 1210,
		'name': 'Cabbage',
		'slug': 'cabbage',
		'symbol': 'CAB'
	},
	{
		'id': 2395,
		'name': 'Ignition',
		'slug': 'ignition',
		'symbol': 'IC'
	},
	{
		'id': 8351,
		'name': 'OptionRoom',
		'slug': 'optionroom',
		'symbol': 'ROOM'
	},
	{
		'id': 1155,
		'name': 'Litecred',
		'slug': 'litecred',
		'symbol': 'LTCR'
	},
	{
		'id': 2131,
		'name': 'iBTC',
		'slug': 'ibtc',
		'symbol': 'IBTC'
	},
	{
		'id': 3159,
		'name': 'Apollon',
		'slug': 'apollon',
		'symbol': 'XAP'
	},
	{
		'id': 4104,
		'name': 'FUZE Token',
		'slug': 'fuze-token',
		'symbol': 'FUZE'
	},
	{
		'id': 3323,
		'name': 'PAYCENT',
		'slug': 'paycent',
		'symbol': 'PYN'
	},
	{
		'id': 3931,
		'name': 'Elementeum',
		'slug': 'elementeum',
		'symbol': 'ELET'
	},
	{
		'id': 7187,
		'name': 'S.Finance',
		'slug': 's-finance',
		'symbol': 'SFG'
	},
	{
		'id': 4365,
		'name': 'Streamit Coin',
		'slug': 'streamit-coin',
		'symbol': 'STREAM'
	},
	{
		'id': 278,
		'name': 'Quebecoin',
		'slug': 'quebecoin',
		'symbol': 'QBC'
	},
	{
		'id': 601,
		'name': 'Acoin',
		'slug': 'acoin',
		'symbol': 'ACOIN'
	},
	{
		'id': 3459,
		'name': 'GoHelpFund',
		'slug': 'gohelpfund',
		'symbol': 'HELP'
	},
	{
		'id': 10101,
		'name': 'Kwikswap Protocol',
		'slug': 'kwikswap',
		'symbol': 'KWIK'
	},
	{
		'id': 2977,
		'name': 'BitRewards',
		'slug': 'bitrewards',
		'symbol': 'BIT'
	},
	{
		'id': 3644,
		'name': 'TravelNote',
		'slug': 'travelnote',
		'symbol': 'TVNT'
	},
	{
		'id': 3764,
		'name': 'Save Environment Token',
		'slug': 'save-environment-token',
		'symbol': 'SET'
	},
	{
		'id': 9353,
		'name': 'Kalata',
		'slug': 'kalata',
		'symbol': 'KALA'
	},
	{
		'id': 656,
		'name': 'Prime-XI',
		'slug': 'prime-xi',
		'symbol': 'PXI'
	},
	{
		'id': 5236,
		'name': 'Kemacoin',
		'slug': 'kemacoin',
		'symbol': 'KEMA'
	},
	{
		'id': 938,
		'name': 'ARbit',
		'slug': 'arbit',
		'symbol': 'ARB'
	},
	{
		'id': 1120,
		'name': 'DraftCoin',
		'slug': 'draftcoin',
		'symbol': 'DFT'
	},
	{
		'id': 1528,
		'name': 'Iconic',
		'slug': 'iconic',
		'symbol': 'ICON'
	},
	{
		'id': 2191,
		'name': 'Paypex',
		'slug': 'paypex',
		'symbol': 'PAYX'
	},
	{
		'id': 1368,
		'name': 'Veltor',
		'slug': 'veltor',
		'symbol': 'VLT'
	},
	{
		'id': 2883,
		'name': 'ZINC',
		'slug': 'zinc',
		'symbol': 'ZINC'
	},
	{
		'id': 9718,
		'name': 'Kineko',
		'slug': 'kineko',
		'symbol': 'KKO'
	},
	{
		'id': 9033,
		'name': 'LCMS',
		'slug': 'lcms',
		'symbol': 'LCMS'
	},
	{
		'id': 9038,
		'name': 'HyperAlloy',
		'slug': 'hyper-alloy',
		'symbol': 'ALLOY'
	},
	{
		'id': 4193,
		'name': 'Dynamite',
		'slug': 'dynamite',
		'symbol': 'DYNMT'
	},
	{
		'id': 1389,
		'name': 'Zayedcoin',
		'slug': 'zayedcoin',
		'symbol': 'ZYD'
	},
	{
		'id': 1052,
		'name': 'VectorAI',
		'slug': 'vector',
		'symbol': 'VEC2'
	},
	{
		'id': 17034,
		'name': 'ACCEL',
		'slug': 'accel',
		'symbol': 'ACCEL'
	},
	{
		'id': 1630,
		'name': 'Coinonat',
		'slug': 'coinonat',
		'symbol': 'CXT'
	},
	{
		'id': 263,
		'name': 'PLNcoin',
		'slug': 'plncoin',
		'symbol': 'PLNC'
	},
	{
		'id': 3807,
		'name': 'LitecoinToken',
		'slug': 'litecoin-token',
		'symbol': 'LTK'
	},
	{
		'id': 3708,
		'name': 'Exosis',
		'slug': 'exosis',
		'symbol': 'EXO'
	},
	{
		'id': 1194,
		'name': 'Independent Money System',
		'slug': 'independent-money-system',
		'symbol': 'IMS'
	},
	{
		'id': 3604,
		'name': 'SkyHub Coin',
		'slug': 'skyhub-coin',
		'symbol': 'SHB'
	},
	{
		'id': 3184,
		'name': 'Gold Poker',
		'slug': 'gold-poker',
		'symbol': 'GPKR'
	},
	{
		'id': 3056,
		'name': 'Thore Cash',
		'slug': 'thore-cash',
		'symbol': 'TCH'
	},
	{
		'id': 1282,
		'name': 'High Voltage',
		'slug': 'high-voltage',
		'symbol': 'HVCO'
	},
	{
		'id': 3856,
		'name': 'SF Capital',
		'slug': 'sf-capital',
		'symbol': 'SFCP'
	},
	{
		'id': 1657,
		'name': 'Bitvolt',
		'slug': 'bitvolt',
		'symbol': 'VOLT'
	},
	{
		'id': 3125,
		'name': 'XDNA',
		'slug': 'xdna',
		'symbol': 'XDNA'
	},
	{
		'id': 4881,
		'name': 'Guider',
		'slug': 'guider',
		'symbol': 'GDR'
	},
	{
		'id': 1515,
		'name': 'iBank',
		'slug': 'ibank',
		'symbol': 'IBANK'
	},
	{
		'id': 5591,
		'name': 'Pyrk',
		'slug': 'pyrk',
		'symbol': 'PYRK'
	},
	{
		'id': 8304,
		'name': 'Rigel Finance',
		'slug': 'rigel-finance',
		'symbol': 'RIGEL'
	},
	{
		'id': 7665,
		'name': 'NestEGG Coin',
		'slug': 'nestegg-coin',
		'symbol': 'EGG'
	},
	{
		'id': 9164,
		'name': 'Depth Token',
		'slug': 'depth-token',
		'symbol': 'DEP'
	},
	{
		'id': 5847,
		'name': 'Defis',
		'slug': 'defis',
		'symbol': 'XGM'
	},
	{
		'id': 5002,
		'name': 'SafeCapital',
		'slug': 'safecapital',
		'symbol': 'SCAP'
	},
	{
		'id': 4014,
		'name': 'Mobile Crypto Pay Coin',
		'slug': 'mobile-crypto-pay-coin',
		'symbol': 'MCPC'
	},
	{
		'id': 1291,
		'name': 'Comet',
		'slug': 'comet',
		'symbol': 'CMT'
	},
	{
		'id': 11344,
		'name': 'Mate',
		'slug': 'mate',
		'symbol': 'MATE'
	},
	{
		'id': 3730,
		'name': 'The Currency Analytics',
		'slug': 'the-currency-analytics',
		'symbol': 'TCAT'
	},
	{
		'id': 3915,
		'name': 'Merebel',
		'slug': 'merebel',
		'symbol': 'MERI'
	},
	{
		'id': 12572,
		'name': 'Waterfall DeFi',
		'slug': 'waterfall-defi',
		'symbol': 'WTF'
	},
	{
		'id': 1674,
		'name': 'Cannation',
		'slug': 'cannation',
		'symbol': 'CNNC'
	},
	{
		'id': 3097,
		'name': 'XOVBank',
		'slug': 'xovbank',
		'symbol': 'XOV'
	},
	{
		'id': 184,
		'name': 'DNotes',
		'slug': 'dnotes',
		'symbol': 'NOTE'
	},
	{
		'id': 5473,
		'name': 'CRDT',
		'slug': 'crdt',
		'symbol': 'CRDT'
	},
	{
		'id': 5712,
		'name': 'FinNexus',
		'slug': 'finnexus',
		'symbol': 'FNX'
	},
	{
		'id': 13164,
		'name': 'HeroFi (ROFI)',
		'slug': 'rofi',
		'symbol': 'ROFI'
	},
	{
		'id': 3760,
		'name': 'Scanetchain',
		'slug': 'scanetchain',
		'symbol': 'SWC'
	},
	{
		'id': 1850,
		'name': 'Cream',
		'slug': 'cream',
		'symbol': 'CRM'
	},
	{
		'id': 9512,
		'name': 'Cubiex Power',
		'slug': 'cubiex-power',
		'symbol': 'CBIX-P'
	},
	{
		'id': 1935,
		'name': 'LiteCoin Ultra',
		'slug': 'litecoin-ultra',
		'symbol': 'LTCU'
	},
	{
		'id': 1774,
		'name': 'SocialCoin',
		'slug': 'socialcoin-socc',
		'symbol': 'SOCC'
	},
	{
		'id': 3580,
		'name': 'Crystal Token',
		'slug': 'crystal-token',
		'symbol': 'CYL'
	},
	{
		'id': 5425,
		'name': 'Mesefa',
		'slug': 'mesefa',
		'symbol': 'SEFA'
	},
	{
		'id': 1090,
		'name': 'Save and Gain',
		'slug': 'save-and-gain',
		'symbol': 'SANDG'
	},
	{
		'id': 3613,
		'name': 'Dash Green',
		'slug': 'dash-green',
		'symbol': 'DASHG'
	},
	{
		'id': 831,
		'name': 'Wild Beast Block',
		'slug': 'wild-beast-block',
		'symbol': 'WBB'
	},
	{
		'id': 2745,
		'name': 'Joint Ventures',
		'slug': 'joint-ventures',
		'symbol': 'JOINT'
	},
	{
		'id': 3746,
		'name': 'Electrum Dark',
		'slug': 'electrum-dark-eld',
		'symbol': 'ELD'
	},
	{
		'id': 3263,
		'name': 'Dinero',
		'slug': 'dinero',
		'symbol': 'DIN'
	},
	{
		'id': 4136,
		'name': 'Veles',
		'slug': 'veles',
		'symbol': 'VLS'
	},
	{
		'id': 2386,
		'name': 'KZ Cash',
		'slug': 'kz-cash',
		'symbol': 'KZC'
	},
	{
		'id': 1632,
		'name': 'Concoin',
		'slug': 'concoin',
		'symbol': 'CONX'
	},
	{
		'id': 1558,
		'name': 'Argus',
		'slug': 'argus',
		'symbol': 'ARGUS'
	},
	{
		'id': 1259,
		'name': 'PonziCoin',
		'slug': 'ponzicoin',
		'symbol': 'PONZI'
	},
	{
		'id': 2332,
		'name': 'STRAKS',
		'slug': 'straks',
		'symbol': 'STAK'
	},
	{
		'id': 6410,
		'name': 'Feellike',
		'slug': 'feellike',
		'symbol': 'FLL'
	},
	{
		'id': 11966,
		'name': 'Blizzard Network',
		'slug': 'blizzard-network',
		'symbol': 'BLIZZ'
	},
	{
		'id': 4885,
		'name': 'Diligence',
		'slug': 'diligence',
		'symbol': 'IRA'
	},
	{
		'id': 4162,
		'name': 'Storeum',
		'slug': 'storeum',
		'symbol': 'STO'
	},
	{
		'id': 5478,
		'name': 'ECOSC',
		'slug': 'ecosc',
		'symbol': 'ECU'
	},
	{
		'id': 3287,
		'name': 'Abulaba',
		'slug': 'abulaba',
		'symbol': 'AAA'
	},
	{
		'id': 2153,
		'name': 'Aeron',
		'slug': 'aeron',
		'symbol': 'ARNX'
	},
	{
		'id': 5455,
		'name': 'Trexcoin',
		'slug': 'trexcoin',
		'symbol': 'TREX'
	},
	{
		'id': 4018,
		'name': 'Klimatas',
		'slug': 'klimatas',
		'symbol': 'KTS'
	},
	{
		'id': 7161,
		'name': 'GokuMarket Credit',
		'slug': 'gokumarket-credit',
		'symbol': 'GMC'
	},
	{
		'id': 4292,
		'name': 'Nibble',
		'slug': 'nibble',
		'symbol': 'NBXC'
	},
	{
		'id': 11462,
		'name': 'Fabric',
		'slug': 'fabric',
		'symbol': 'FAB'
	},
	{
		'id': 12815,
		'name': 'CryptoPlanes',
		'slug': 'cryptoplanes',
		'symbol': 'CPAN'
	},
	{
		'id': 10429,
		'name': 'HaloDAO',
		'slug': 'halodao',
		'symbol': 'RNBW'
	},
	{
		'id': 6975,
		'name': 'YFFII Finance',
		'slug': 'yffii-finance',
		'symbol': 'YFFII'
	},
	{
		'id': 3189,
		'name': 'Mainstream For The Underground',
		'slug': 'mainstream-for-the-underground',
		'symbol': 'MFTU'
	},
	{
		'id': 2396,
		'name': 'WETH',
		'slug': 'weth',
		'symbol': 'WETH'
	},
	{
		'id': 8925,
		'name': 'Wrapped Matic',
		'slug': 'wmatic',
		'symbol': 'WMATIC'
	},
	{
		'id': 16116,
		'name': 'Wrapped Solana',
		'slug': 'wrapped-solana',
		'symbol': 'SOL'
	},
	{
		'id': 22848,
		'name': 'Balancer Boosted Aave USDT',
		'slug': 'balancer-boosted-aave-usdt',
		'symbol': 'BB-A-USDT'
	},
	{
		'id': 20365,
		'name': 'Balancer Boosted Aave USDC',
		'slug': 'balancer-boosted-aave-usdc',
		'symbol': 'BB-A-USDC'
	},
	{
		'id': 22181,
		'name': 'Fame Reward Plus',
		'slug': 'fame-reward-plus',
		'symbol': 'FRP'
	},
	{
		'id': 7660,
		'name': 'Business Platform Tomato Coin',
		'slug': 'business-platform-tomato-coin',
		'symbol': 'BPTC'
	},
	{
		'id': 19525,
		'name': 'BITCOIN ADDITIONAL',
		'slug': 'bitcoin-additional',
		'symbol': 'BTCA'
	},
	{
		'id': 10240,
		'name': 'Wrapped Fantom',
		'slug': 'wrapped-fantom',
		'symbol': 'WFTM'
	},
	{
		'id': 5999,
		'name': 'XT.com Token',
		'slug': 'xtcom-token',
		'symbol': 'XT'
	},
	{
		'id': 19778,
		'name': 'Step App',
		'slug': 'step-app',
		'symbol': 'FITFI'
	},
	{
		'id': 7950,
		'name': 'Flare',
		'slug': 'flare',
		'symbol': 'FLR'
	},
	{
		'id': 21269,
		'name': 'Geegoopuzzle',
		'slug': 'geegoopuzzle',
		'symbol': 'GGP'
	},
	{
		'id': 8353,
		'name': 'Beacon ETH',
		'slug': 'beacon-eth',
		'symbol': 'BETH'
	},
	{
		'id': 21535,
		'name': 'Coinbase Wrapped Staked ETH',
		'slug': 'coinbase-wrapped-staked-eth',
		'symbol': 'CBETH'
	},
	{
		'id': 12409,
		'name': 'Lido wstETH',
		'slug': 'lido-finance-wsteth',
		'symbol': 'WSTETH'
	},
	{
		'id': 21074,
		'name': 'XT Stablecoin XTUSD',
		'slug': 'xtusd',
		'symbol': 'XTUSD'
	},
	{
		'id': 22765,
		'name': 'ArchLoot',
		'slug': 'archloot',
		'symbol': 'ALT'
	},
	{
		'id': 18688,
		'name': 'Lido Staked Matic',
		'slug': 'lido-staked-matic',
		'symbol': 'stMATIC'
	},
	{
		'id': 18363,
		'name': 'GoCryptoMe',
		'slug': 'gocryptome',
		'symbol': 'GCME'
	},
	{
		'id': 21127,
		'name': 'NFTNetwork',
		'slug': 'nftnetwork',
		'symbol': 'NFTN'
	},
	{
		'id': 9462,
		'name': 'Wrapped AVAX',
		'slug': 'wavax',
		'symbol': 'WAVAX'
	},
	{
		'id': 21353,
		'name': 'WhiteBIT Token',
		'slug': 'whitebit-token',
		'symbol': 'WBT'
	},
	{
		'id': 19534,
		'name': 'Fistbump',
		'slug': 'fistbump-vip',
		'symbol': 'FIST'
	},
	{
		'id': 21882,
		'name': 'BOB',
		'slug': 'bob',
		'symbol': 'BOB'
	},
	{
		'id': 18852,
		'name': 'USD Coin Bridged',
		'slug': 'usd-coin-avalanche-bridged-usdc-e',
		'symbol': 'USDCE'
	},
	{
		'id': 8123,
		'name': 'Australian Dollar Token',
		'slug': 'australian-dollar-token',
		'symbol': 'AUDT'
	},
	{
		'id': 5265,
		'name': 'Compound USD Coin',
		'slug': 'compound-usd-coin',
		'symbol': 'CUSDC'
	},
	{
		'id': 5263,
		'name': 'Compound Dai',
		'slug': 'compound-dai',
		'symbol': 'CDAI'
	},
	{
		'id': 2027,
		'name': 'Cryptonex',
		'slug': 'cryptonex',
		'symbol': 'CNX'
	},
	{
		'id': 12485,
		'name': 'Arowana Token',
		'slug': 'arowana-token',
		'symbol': 'ARW'
	},
	{
		'id': 23095,
		'name': 'Bonk',
		'slug': 'bonk1',
		'symbol': 'BONK'
	},
	{
		'id': 8267,
		'name': 'OKC Token',
		'slug': 'okt',
		'symbol': 'OKT'
	},
	{
		'id': 162,
		'name': 'Magic Internet Money',
		'slug': 'magic-internet-money',
		'symbol': 'MIM'
	},
	{
		'id': 18106,
		'name': 'X2Y2',
		'slug': 'x2y2',
		'symbol': 'X2Y2'
	},
	{
		'id': 22916,
		'name': 'Shibnobi(New)',
		'slug': 'shibnobi-v2',
		'symbol': 'SHINJA'
	},
	{
		'id': 10238,
		'name': 'MAI',
		'slug': 'mai',
		'symbol': 'MIMATIC'
	},
	{
		'id': 22421,
		'name': 'BULL BTC CLUB',
		'slug': 'bull-btc-club',
		'symbol': 'BBC'
	},
	{
		'id': 7980,
		'name': 'MinePlex',
		'slug': 'mineplex',
		'symbol': 'PLEX'
	},
	{
		'id': 6773,
		'name': 'FUTUREXCRYPTO',
		'slug': 'futurexcrypto',
		'symbol': 'FXC'
	},
	{
		'id': 9091,
		'name': 'CPCoin',
		'slug': 'cpcoin',
		'symbol': 'CPC'
	},
	{
		'id': 20789,
		'name': 'Dejitaru Tsuka',
		'slug': 'dejitaru-tsuka',
		'symbol': 'TSUKA'
	},
	{
		'id': 10272,
		'name': 'AladdinDAO',
		'slug': 'aladdindao',
		'symbol': 'ALD'
	},
	{
		'id': 7705,
		'name': 'ANIVERSE',
		'slug': 'aniverse',
		'symbol': 'ANV'
	},
	{
		'id': 15060,
		'name': 'Rocket Pool ETH',
		'slug': 'rocket-pool-eth',
		'symbol': 'RETH'
	},
	{
		'id': 12457,
		'name': 'ZEDXION',
		'slug': 'zedxion',
		'symbol': 'ZEDXION'
	},
	{
		'id': 16687,
		'name': 'Galaxy Coin',
		'slug': 'galaxycoin',
		'symbol': 'GALAXY'
	},
	{
		'id': 17050,
		'name': 'Multichain',
		'slug': 'multichain',
		'symbol': 'MULTI'
	},
	{
		'id': 16432,
		'name': 'Everdome',
		'slug': 'everdome',
		'symbol': 'DOME'
	},
	{
		'id': 15024,
		'name': 'Angle Protocol',
		'slug': 'angle-protocol',
		'symbol': 'AGEUR'
	},
	{
		'id': 13663,
		'name': 'Gains Network',
		'slug': 'gains-network',
		'symbol': 'GNS'
	},
	{
		'id': 18938,
		'name': 'Memeverse',
		'slug': 'memeverse',
		'symbol': 'MEME'
	},
	{
		'id': 20650,
		'name': 'USD Coin (Wormhole)',
		'slug': 'usd-coin-wormhole-from-ethereum',
		'symbol': 'USDC(WormHole)'
	},
	{
		'id': 23196,
		'name': 'Grove Coin',
		'slug': 'grove3',
		'symbol': 'GRV'
	},
	{
		'id': 20960,
		'name': 'The Debt Box',
		'slug': 'the-debt-box',
		'symbol': 'DEBT'
	},
	{
		'id': 12057,
		'name': 'Dopex Rebate Token',
		'slug': 'dopex-rdpx',
		'symbol': 'RDPX'
	},
	{
		'id': 22065,
		'name': 'AptosLaunch Token',
		'slug': 'aptoslaunch-token',
		'symbol': 'ALT'
	},
	{
		'id': 23066,
		'name': 'ExtractoDAO Bull',
		'slug': 'extractodao-bull',
		'symbol': 'XBLL'
	},
	{
		'id': 22274,
		'name': 'HyperChainX',
		'slug': 'hyperchainx',
		'symbol': 'HYPER'
	},
	{
		'id': 23165,
		'name': 'Blockchain Bets',
		'slug': 'blockchain-bets',
		'symbol': 'BCB'
	},
	{
		'id': 15142,
		'name': 'Katana Inu',
		'slug': 'katana-inu',
		'symbol': 'KATA'
	},
	{
		'id': 10182,
		'name': 'Manifold Finance',
		'slug': 'manifold-finance',
		'symbol': 'FOLD'
	},
	{
		'id': 23319,
		'name': 'PLC Ultima',
		'slug': 'plc-ultima-new',
		'symbol': 'PLCU'
	},
	{
		'id': 21356,
		'name': 'Fracton Protocol',
		'slug': 'fracton-protocol',
		'symbol': 'FT'
	},
	{
		'id': 20463,
		'name': 'Goat Gang',
		'slug': 'goat-gang',
		'symbol': 'GGT'
	},
	{
		'id': 19707,
		'name': 'QUINT',
		'slug': 'quint',
		'symbol': 'QUINT'
	},
	{
		'id': 12297,
		'name': 'Lido Staked SOL',
		'slug': 'lido-for-solana',
		'symbol': 'stSOL'
	},
	{
		'id': 23246,
		'name': 'tomiNet',
		'slug': 'tominet',
		'symbol': 'TOMI'
	},
	{
		'id': 21711,
		'name': 'INOFI',
		'slug': 'inofi',
		'symbol': 'FON'
	},
	{
		'id': 22201,
		'name': 'Soonaverse',
		'slug': 'soonaverse',
		'symbol': 'SOON'
	},
	{
		'id': 8487,
		'name': 'TBCC',
		'slug': 'tbcc-labs',
		'symbol': 'TBCC'
	},
	{
		'id': 18775,
		'name': 'Walken',
		'slug': 'walken',
		'symbol': 'WLKN'
	},
	{
		'id': 14532,
		'name': 'Wrapped CRO',
		'slug': 'wrapped-cro',
		'symbol': 'WCRO'
	},
	{
		'id': 5745,
		'name': 'Compound USDT',
		'slug': 'compound-usdt',
		'symbol': 'CUSDT'
	},
	{
		'id': 22367,
		'name': 'BIT GAME VERSE TOKEN',
		'slug': 'bit-game-verse-token',
		'symbol': 'BGVT'
	},
	{
		'id': 23058,
		'name': 'Xoloitzcuintli',
		'slug': 'xoloitzcuintli',
		'symbol': 'XOLO'
	},
	{
		'id': 22423,
		'name': 'PRIMAL',
		'slug': 'primal-token',
		'symbol': 'PRIMAL'
	},
	{
		'id': 20632,
		'name': 'LYO Credit',
		'slug': 'lyo-credit',
		'symbol': 'LYO'
	},
	{
		'id': 5190,
		'name': 'FLEX',
		'slug': 'flex',
		'symbol': 'FLEX'
	},
	{
		'id': 21414,
		'name': 'Dogechain',
		'slug': 'dogechain',
		'symbol': 'DC'
	},
	{
		'id': 11976,
		'name': 'Aleph Zero',
		'slug': 'aleph-zero',
		'symbol': 'AZERO'
	},
	{
		'id': 13887,
		'name': 'P2P Solutions foundation',
		'slug': 'p2p-solutions-foundation',
		'symbol': 'P2PS'
	},
	{
		'id': 8565,
		'name': 'Exen Coin',
		'slug': 'exen-coin',
		'symbol': 'BTXN'
	},
	{
		'id': 18762,
		'name': 'Bobcoin',
		'slug': 'bobcoin',
		'symbol': 'BOBC'
	},
	{
		'id': 20456,
		'name': 'WeBuy',
		'slug': 'webuy',
		'symbol': 'WE'
	},
	{
		'id': 6113,
		'name': 'BlackPearl Token',
		'slug': 'blackpearl-chain',
		'symbol': 'BPLC'
	},
	{
		'id': 5336,
		'name': 'Homeros',
		'slug': 'homeros',
		'symbol': 'HMR'
	},
	{
		'id': 21428,
		'name': 'Alvey Chain',
		'slug': 'alvey-chain',
		'symbol': 'WALV'
	},
	{
		'id': 22899,
		'name': 'Digimon Rabbit',
		'slug': 'digimon-rabbit',
		'symbol': 'DRB'
	},
	{
		'id': 23145,
		'name': 'Galaxy Villains',
		'slug': 'galaxy-villans',
		'symbol': 'GVC'
	},
	{
		'id': 20435,
		'name': 'Velodrome Finance',
		'slug': 'velodrome-finance',
		'symbol': 'VELO'
	},
	{
		'id': 16817,
		'name': 'Wrapped EGLD',
		'slug': 'wrapped-multiversx-egld',
		'symbol': 'WEGLD'
	},
	{
		'id': 15530,
		'name': 'Enegra (EGX)',
		'slug': 'enegra-egx',
		'symbol': 'EGX'
	},
	{
		'id': 12043,
		'name': 'Octopus Network',
		'slug': 'octopus-network',
		'symbol': 'OCT'
	},
	{
		'id': 22031,
		'name': 'Angola',
		'slug': 'angola',
		'symbol': 'AGLA'
	},
	{
		'id': 23253,
		'name': 'The Rug Game',
		'slug': 'the-rug-game',
		'symbol': 'TRG'
	},
	{
		'id': 22118,
		'name': 'XEN Crypto',
		'slug': 'xen-crypto',
		'symbol': 'XEN'
	},
	{
		'id': 10312,
		'name': 'EscoinToken',
		'slug': 'escointoken',
		'symbol': 'ELG'
	},
	{
		'id': 18802,
		'name': 'DUST Protocol',
		'slug': 'dust-protocol',
		'symbol': 'DUST'
	},
	{
		'id': 16193,
		'name': 'Pi',
		'slug': 'pinetwork',
		'symbol': 'PI'
	},
	{
		'id': 5275,
		'name': 'Paycoin',
		'slug': 'payprotocol',
		'symbol': 'PCI'
	},
	{
		'id': 21963,
		'name': 'STA',
		'slug': 'sta-token',
		'symbol': 'STA'
	},
	{
		'id': 20475,
		'name': 'ZEDXION',
		'slug': 'usdz',
		'symbol': 'USDZ'
	},
	{
		'id': 13916,
		'name': 'Omax Coin',
		'slug': 'omax-token',
		'symbol': 'OMAX'
	},
	{
		'id': 23010,
		'name': 'DEXO',
		'slug': 'dexo',
		'symbol': 'DEXO'
	},
	{
		'id': 23248,
		'name': 'Vela Token',
		'slug': 'vela-token',
		'symbol': 'VELA'
	},
	{
		'id': 20729,
		'name': 'KONPAY',
		'slug': 'konpay',
		'symbol': 'KON'
	},
	{
		'id': 18439,
		'name': 'JPEG\'d',
		'slug': 'jpeg-d',
		'symbol': 'JPEG'
	},
	{
		'id': 21031,
		'name': 'YES WORLD',
		'slug': 'yes-world-token',
		'symbol': 'YES'
	},
	{
		'id': 17500,
		'name': 'Opyn Squeeth',
		'slug': 'opyn-squeeth',
		'symbol': 'OSQTH'
	},
	{
		'id': 5925,
		'name': 'Pkoin',
		'slug': 'pocketnet',
		'symbol': 'PKOIN'
	},
	{
		'id': 7012,
		'name': 'LINKDOWN',
		'slug': 'linkdown',
		'symbol': 'LINKDOWN'
	},
	{
		'id': 13397,
		'name': 'MELD',
		'slug': 'meld',
		'symbol': 'MELD'
	},
	{
		'id': 18523,
		'name': 'BENQI Liquid Staked AVAX',
		'slug': 'benqi-liquid-staked-avax',
		'symbol': 'SAVAX'
	},
	{
		'id': 20083,
		'name': 'Dotori',
		'slug': 'dotori',
		'symbol': 'DTR'
	},
	{
		'id': 19786,
		'name': 'ALTAVA',
		'slug': 'altava',
		'symbol': 'TAVA'
	},
	{
		'id': 11823,
		'name': 'Pocket Network',
		'slug': 'pocket-network',
		'symbol': 'POKT'
	},
	{
		'id': 14280,
		'name': 'Euler',
		'slug': 'euler-finance',
		'symbol': 'EUL'
	},
	{
		'id': 21134,
		'name': 'Squid Grow',
		'slug': 'squid-grow',
		'symbol': 'SQUIDGROW'
	},
	{
		'id': 17520,
		'name': 'Orbler',
		'slug': 'orbler',
		'symbol': 'ORBR'
	},
	{
		'id': 7014,
		'name': 'ADADOWN',
		'slug': 'adadown',
		'symbol': 'ADADOWN'
	},
	{
		'id': 20875,
		'name': 'Gold Guaranteed Coin Mining',
		'slug': 'gold-guaranteed-coin-mining',
		'symbol': 'GGCM'
	},
	{
		'id': 17589,
		'name': 'Animal Concerts',
		'slug': 'animal-concerts',
		'symbol': 'ANML'
	},
	{
		'id': 19639,
		'name': 'Frutti Dino',
		'slug': 'frutti-dino',
		'symbol': 'FDT'
	},
	{
		'id': 22761,
		'name': 'Curve.fi FRAX/USDC',
		'slug': 'curve-fi-frax-usdc',
		'symbol': 'CRVFRAX'
	},
	{
		'id': 8790,
		'name': 'KINE',
		'slug': 'kine',
		'symbol': 'KINE'
	},
	{
		'id': 22654,
		'name': 'Flag Media',
		'slug': 'flag-media',
		'symbol': 'FLAG'
	},
	{
		'id': 20702,
		'name': 'Cairo Finance',
		'slug': 'cairo-finance',
		'symbol': 'CAF'
	},
	{
		'id': 10853,
		'name': 'ETHDOWN',
		'slug': 'eth-down',
		'symbol': 'ETHDOWN'
	},
	{
		'id': 15194,
		'name': 'Sportium',
		'slug': 'sportium',
		'symbol': 'SPRT'
	},
	{
		'id': 17806,
		'name': 'ThetaDrop',
		'slug': 'thetadrop',
		'symbol': 'TDROP'
	},
	{
		'id': 20941,
		'name': 'Race Kingdom',
		'slug': 'race-kingdom',
		'symbol': 'ATOZ'
	},
	{
		'id': 8886,
		'name': 'USDP Stablecoin',
		'slug': 'usdp',
		'symbol': 'USDP'
	},
	{
		'id': 21106,
		'name': 'Radiant Capital',
		'slug': 'radiant-capital',
		'symbol': 'RDNT'
	},
	{
		'id': 6257,
		'name': 'Berry',
		'slug': 'berry',
		'symbol': 'BERRY'
	},
	{
		'id': 4844,
		'name': 'MeconCash',
		'slug': 'meconcash',
		'symbol': 'MCH'
	},
	{
		'id': 23225,
		'name': 'Frax Finance - Frax Ether',
		'slug': 'frax-finance-frax-ether',
		'symbol': 'FRXETH'
	},
	{
		'id': 22032,
		'name': 'PREMA',
		'slug': 'prema',
		'symbol': 'PRMX'
	},
	{
		'id': 22629,
		'name': 'Popcoin',
		'slug': 'popcoin',
		'symbol': 'POP'
	},
	{
		'id': 21763,
		'name': 'Tether Avalanche Bridged',
		'slug': 'tether-avalanche-bridged',
		'symbol': 'USDTE'
	},
	{
		'id': 13702,
		'name': 'STEMX',
		'slug': 'stemx',
		'symbol': 'STEMX'
	},
	{
		'id': 20187,
		'name': 'Dexpools',
		'slug': 'dexpools',
		'symbol': 'DXP'
	},
	{
		'id': 4077,
		'name': 'Maya Preferred',
		'slug': 'maya-preferred',
		'symbol': 'MAYP'
	},
	{
		'id': 22265,
		'name': 'Oasys',
		'slug': 'oasys',
		'symbol': 'OAS'
	},
	{
		'id': 16345,
		'name': 'BitMEX Token',
		'slug': 'bitmex-token',
		'symbol': 'BMEX'
	},
	{
		'id': 7011,
		'name': 'LINKUP',
		'slug': 'linkup',
		'symbol': 'LINKUP'
	},
	{
		'id': 17722,
		'name': 'Ambire Wallet',
		'slug': 'ambire-wallet',
		'symbol': 'WALLET'
	},
	{
		'id': 13874,
		'name': 'GAMI World',
		'slug': 'gami-world',
		'symbol': 'GAMI'
	},
	{
		'id': 7321,
		'name': 'yOUcash',
		'slug': 'youcash',
		'symbol': 'YOUC'
	},
	{
		'id': 5609,
		'name': 'BTCDOWN',
		'slug': 'btcdown',
		'symbol': 'BTCDOWN'
	},
	{
		'id': 23090,
		'name': 'AgriNode',
		'slug': 'agrinode',
		'symbol': 'AGN'
	},
	{
		'id': 17461,
		'name': 'CanaryX',
		'slug': 'canaryx',
		'symbol': 'CNYX'
	},
	{
		'id': 22506,
		'name': 'Crypto ARC',
		'slug': 'crypto-arc',
		'symbol': 'ARC'
	},
	{
		'id': 17690,
		'name': 'Digital Financial Exchange',
		'slug': 'digital-financial-exchange',
		'symbol': 'DIFX'
	},
	{
		'id': 20823,
		'name': 'LunaGens',
		'slug': 'lunagens',
		'symbol': 'LUNG'
	},
	{
		'id': 13298,
		'name': 'VIXCO',
		'slug': 'vixco',
		'symbol': 'VIX'
	},
	{
		'id': 19899,
		'name': 'Evmos',
		'slug': 'evmos',
		'symbol': 'EVMOS'
	},
	{
		'id': 17591,
		'name': 'NYM',
		'slug': 'nym',
		'symbol': 'NYM'
	},
	{
		'id': 22356,
		'name': 'Fable Of The Dragon',
		'slug': 'fable-of-the-dragon',
		'symbol': 'TYRANT'
	},
	{
		'id': 20142,
		'name': 'Tari World',
		'slug': 'tari-world',
		'symbol': 'TARI'
	},
	{
		'id': 23119,
		'name': 'Level Finance',
		'slug': 'level-finance',
		'symbol': 'LVL'
	},
	{
		'id': 8635,
		'name': 'xDAI',
		'slug': 'xdaistable',
		'symbol': 'xDAI'
	},
	{
		'id': 16252,
		'name': 'Okratech Token',
		'slug': 'okratech-token',
		'symbol': 'ORT'
	},
	{
		'id': 5765,
		'name': 'sETH',
		'slug': 'seth',
		'symbol': 'SETH'
	},
	{
		'id': 13249,
		'name': 'Plug Chain',
		'slug': 'plug-chain',
		'symbol': 'PC'
	},
	{
		'id': 22679,
		'name': 'hiOD',
		'slug': 'hiod',
		'symbol': 'hiOD'
	},
	{
		'id': 13452,
		'name': 'Arabic',
		'slug': 'arabic',
		'symbol': 'ABIC'
	},
	{
		'id': 16360,
		'name': 'Gearbox Protocol',
		'slug': 'gearbox-protocol',
		'symbol': 'GEAR'
	},
	{
		'id': 9021,
		'name': 'Wrapped XDAI',
		'slug': 'wxdai',
		'symbol': 'wxDai'
	},
	{
		'id': 14101,
		'name': 'Ronin',
		'slug': 'ronin',
		'symbol': 'RON'
	},
	{
		'id': 21927,
		'name': 'hiDOODLES',
		'slug': 'hidoodles',
		'symbol': 'hiDOODLES'
	},
	{
		'id': 21796,
		'name': 'Lingose',
		'slug': 'lingose',
		'symbol': 'LING'
	},
	{
		'id': 12661,
		'name': 'HashBit BlockChain',
		'slug': 'hashbit-blockchain',
		'symbol': 'HBIT'
	},
	{
		'id': 7992,
		'name': 'Ludena Protocol',
		'slug': 'ludena-protocol',
		'symbol': 'LDN'
	},
	{
		'id': 22412,
		'name': 'Tortuga Finance Aptos',
		'slug': 'tortuga-finance-aptos',
		'symbol': 'tAPT'
	},
	{
		'id': 20245,
		'name': 'Comtech Gold',
		'slug': 'comtech-gold',
		'symbol': 'CGO'
	},
	{
		'id': 17774,
		'name': 'Intelly',
		'slug': 'intelly',
		'symbol': 'INTL'
	},
	{
		'id': 15447,
		'name': 'Lyra',
		'slug': 'lyra-finance',
		'symbol': 'LYRA'
	},
	{
		'id': 21850,
		'name': 'Shih Tzu Inu',
		'slug': 'shih-tzu-inu',
		'symbol': 'SHIH-TZU'
	},
	{
		'id': 23257,
		'name': 'STFX',
		'slug': 'stfx',
		'symbol': 'STFX'
	},
	{
		'id': 23038,
		'name': 'Mummy Finance',
		'slug': 'mummy-finance',
		'symbol': 'MMY'
	},
	{
		'id': 19736,
		'name': 'Shina Inu',
		'slug': 'shina-inu',
		'symbol': 'SHI'
	},
	{
		'id': 17743,
		'name': 'Jones DAO',
		'slug': 'jones-dao',
		'symbol': 'JONES'
	},
	{
		'id': 21769,
		'name': 'Metal Blockchain',
		'slug': 'metal-blockchain',
		'symbol': 'METAL'
	},
	{
		'id': 21090,
		'name': 'ZILLION AAKAR XO',
		'slug': 'zillion-aakar-xo',
		'symbol': 'ZILLIONXO'
	},
	{
		'id': 11188,
		'name': 'Dopex',
		'slug': 'dopex',
		'symbol': 'DPX'
	},
	{
		'id': 20594,
		'name': 'Saltmarble',
		'slug': 'saltmarble',
		'symbol': 'SML'
	},
	{
		'id': 23104,
		'name': 'Absolute Sync',
		'slug': 'absolute-sync',
		'symbol': 'AST'
	},
	{
		'id': 19201,
		'name': 'Paribu Net',
		'slug': 'paribu-net',
		'symbol': 'PRB'
	},
	{
		'id': 9067,
		'name': 'Olympus v2',
		'slug': 'olympus',
		'symbol': 'OHM'
	},
	{
		'id': 18059,
		'name': 'QMALL TOKEN',
		'slug': 'qmall-token',
		'symbol': 'QMALL'
	},
	{
		'id': 21408,
		'name': 'Versailles Heroes',
		'slug': 'versaillesheroes',
		'symbol': 'VRH'
	},
	{
		'id': 15139,
		'name': 'Starly',
		'slug': 'starly',
		'symbol': '$STARLY'
	},
	{
		'id': 9263,
		'name': 'Unizen',
		'slug': 'unizen',
		'symbol': 'ZCX'
	},
	{
		'id': 6493,
		'name': 'KStarCoin',
		'slug': 'kstarcoin',
		'symbol': 'KSC'
	},
	{
		'id': 18662,
		'name': 'Galeon',
		'slug': 'galeon',
		'symbol': 'GALEON'
	},
	{
		'id': 12186,
		'name': 'Songbird',
		'slug': 'songbird',
		'symbol': 'SGB'
	},
	{
		'id': 14515,
		'name': 'MMPRO Token',
		'slug': 'mmpro-token',
		'symbol': 'MMPRO'
	},
	{
		'id': 20828,
		'name': 'OSK',
		'slug': 'osk-token',
		'symbol': 'OSK'
	},
	{
		'id': 23179,
		'name': 'Fronk',
		'slug': 'fronk',
		'symbol': 'FRONK'
	},
	{
		'id': 22368,
		'name': 'KCAL',
		'slug': 'kcal',
		'symbol': 'KCAL'
	},
	{
		'id': 18861,
		'name': 'Decentralized USD(Defichain)',
		'slug': 'decentralized-usd',
		'symbol': 'DUSD'
	},
	{
		'id': 22949,
		'name': 'Camelot Token',
		'slug': 'camelot-token',
		'symbol': 'GRAIL'
	},
	{
		'id': 11165,
		'name': 'Orca',
		'slug': 'orca',
		'symbol': 'ORCA'
	},
	{
		'id': 21842,
		'name': 'EthereumFair',
		'slug': 'ethereumfair',
		'symbol': 'ETHF'
	},
	{
		'id': 19618,
		'name': 'CAW(A Hunters Dream)',
		'slug': 'caw',
		'symbol': 'CAW'
	},
	{
		'id': 9797,
		'name': 'Avalaunch',
		'slug': 'avalaunch',
		'symbol': 'XAVA'
	},
	{
		'id': 12041,
		'name': 'Dimitra',
		'slug': 'dimitra',
		'symbol': 'DMTR'
	},
	{
		'id': 7203,
		'name': 'Puriever',
		'slug': 'puriever',
		'symbol': 'PURE'
	},
	{
		'id': 2542,
		'name': 'Tidex Token',
		'slug': 'tidex-token',
		'symbol': 'TDX'
	},
	{
		'id': 10291,
		'name': 'Convex CRV',
		'slug': 'convex-crv',
		'symbol': 'CVXCRV'
	},
	{
		'id': 19413,
		'name': 'Freedom God Dao',
		'slug': 'freedom-god-dao',
		'symbol': 'FGD'
	},
	{
		'id': 8249,
		'name': 'LP 3pool Curve',
		'slug': 'lp-3pool-curve',
		'symbol': '3CRV'
	},
	{
		'id': 22892,
		'name': 'Atlas Navi',
		'slug': 'atlas-navi',
		'symbol': 'NAVI'
	},
	{
		'id': 8378,
		'name': 'Akita Inu',
		'slug': 'akita-inu',
		'symbol': 'AKITA'
	},
	{
		'id': 5445,
		'name': 'LBK',
		'slug': 'lbk',
		'symbol': 'LBK'
	},
	{
		'id': 17131,
		'name': 'IX Token',
		'slug': 'ix-token',
		'symbol': 'IXT'
	},
	{
		'id': 9120,
		'name': 'Franklin',
		'slug': 'franklin',
		'symbol': 'FLY'
	},
	{
		'id': 21076,
		'name': 'MetaOctagon',
		'slug': 'metaoctagon',
		'symbol': 'MOTG'
	},
	{
		'id': 22078,
		'name': 'Elan',
		'slug': 'elan',
		'symbol': 'ELAN'
	},
	{
		'id': 21007,
		'name': 'BMAX',
		'slug': 'bmax',
		'symbol': 'BMAX'
	},
	{
		'id': 8788,
		'name': 'CELEBPLUS',
		'slug': 'celebplus',
		'symbol': 'CELEB'
	},
	{
		'id': 19075,
		'name': 'ECOMI',
		'slug': 'ecomi-new',
		'symbol': 'OMI'
	},
	{
		'id': 21370,
		'name': 'MM Finance (Polygon)',
		'slug': 'mm-finance-polygon',
		'symbol': 'MMF'
	},
	{
		'id': 14820,
		'name': 'Infinity Rocket Token',
		'slug': 'infinity-rocket-token',
		'symbol': 'IRT'
	},
	{
		'id': 20734,
		'name': 'Moonwell Artemis',
		'slug': 'moonwell-artemis',
		'symbol': 'WELL'
	},
	{
		'id': 14271,
		'name': 'GM Wagmi',
		'slug': 'gm',
		'symbol': 'GM'
	},
	{
		'id': 8738,
		'name': 'Pastel',
		'slug': 'pastel',
		'symbol': 'PSL'
	},
	{
		'id': 12118,
		'name': 'Celestial',
		'slug': 'celestial',
		'symbol': 'CELT'
	},
	{
		'id': 15796,
		'name': 'Blocksport',
		'slug': 'blocksport',
		'symbol': 'BSPT'
	},
	{
		'id': 6249,
		'name': 'Ziktalk',
		'slug': 'ziktalk',
		'symbol': 'ZIK'
	},
	{
		'id': 16300,
		'name': 'Adana Demirspor Token',
		'slug': 'adana-demirspor-token',
		'symbol': 'DEMIR'
	},
	{
		'id': 7593,
		'name': 'DefiDollar DAO',
		'slug': 'defidollar-dao',
		'symbol': 'DFD'
	},
	{
		'id': 16630,
		'name': 'Evulus Token',
		'slug': 'evulus-token',
		'symbol': 'EVU'
	},
	{
		'id': 16057,
		'name': 'Outer Ring MMO',
		'slug': 'outer-ring-mmo-gq',
		'symbol': 'GQ'
	},
	{
		'id': 10439,
		'name': 'StakeWise',
		'slug': 'stakewise',
		'symbol': 'SWISE'
	},
	{
		'id': 8666,
		'name': 'DFX Finance',
		'slug': 'dfx-finance',
		'symbol': 'DFX'
	},
	{
		'id': 10781,
		'name': 'Wasder',
		'slug': 'wasder',
		'symbol': 'WAS'
	},
	{
		'id': 17874,
		'name': 'Metaverse VR',
		'slug': 'metaversevr',
		'symbol': 'MEVR'
	},
	{
		'id': 12972,
		'name': 'DEUS Finance',
		'slug': 'deus-finance-2',
		'symbol': 'DEUS'
	},
	{
		'id': 7002,
		'name': 'XRPDOWN',
		'slug': 'xrpdown',
		'symbol': 'XRPDOWN'
	},
	{
		'id': 22624,
		'name': 'The Paradox Metaverse',
		'slug': 'paradox-metaverse',
		'symbol': 'PARADOX'
	},
	{
		'id': 21467,
		'name': 'HistoryDAO',
		'slug': 'historydao',
		'symbol': 'HAO'
	},
	{
		'id': 19550,
		'name': 'USDH',
		'slug': 'usdh',
		'symbol': 'USDH'
	},
	{
		'id': 17737,
		'name': 'Metavisa Protocol',
		'slug': 'metavisa-protocol',
		'symbol': 'MESA'
	},
	{
		'id': 7734,
		'name': 'TOM Finance',
		'slug': 'tom-finance',
		'symbol': 'TOM'
	},
	{
		'id': 23296,
		'name': 'Neutra Finance',
		'slug': 'neutra-finance',
		'symbol': 'NEU'
	},
	{
		'id': 18551,
		'name': 'Melos Studio',
		'slug': 'melos-studio',
		'symbol': 'MELOS'
	},
	{
		'id': 15152,
		'name': 'Bxmi Token',
		'slug': 'bxmi-token',
		'symbol': 'BXMI'
	},
	{
		'id': 17971,
		'name': 'PLC Ultima Classic',
		'slug': 'plc-ultima',
		'symbol': 'PLCU'
	},
	{
		'id': 18094,
		'name': 'Parex',
		'slug': 'parex',
		'symbol': 'PRX'
	},
	{
		'id': 11856,
		'name': 'Luffy',
		'slug': 'luffy',
		'symbol': 'LUFFY'
	},
	{
		'id': 19220,
		'name': 'ISLAMICOIN',
		'slug': 'islamicoin',
		'symbol': 'ISLAMI'
	},
	{
		'id': 10506,
		'name': 'HitBTC Token',
		'slug': 'hitbtc-token',
		'symbol': 'HIT'
	},
	{
		'id': 21965,
		'name': 'Double Swap Token',
		'slug': 'double-swap-token',
		'symbol': 'DST'
	},
	{
		'id': 22922,
		'name': 'Healium',
		'slug': 'healium',
		'symbol': 'HLM'
	},
	{
		'id': 18275,
		'name': 'MetaSwap',
		'slug': 'metaswap',
		'symbol': 'MSC'
	},
	{
		'id': 21261,
		'name': 'Rare FND',
		'slug': 'rare-fnd',
		'symbol': 'FND'
	},
	{
		'id': 11497,
		'name': 'Scream',
		'slug': 'scream',
		'symbol': 'SCREAM'
	},
	{
		'id': 7016,
		'name': 'ETHUP',
		'slug': 'ethup',
		'symbol': 'ETHUP'
	},
	{
		'id': 20017,
		'name': 'Moneta Digital',
		'slug': 'moneta-digital',
		'symbol': 'MMXN'
	},
	{
		'id': 6881,
		'name': 'DefiDollar',
		'slug': 'defidollar',
		'symbol': 'DUSD'
	},
	{
		'id': 19134,
		'name': 'Bubblefong',
		'slug': 'bubblefong',
		'symbol': 'BBF'
	},
	{
		'id': 14711,
		'name': '1Sol',
		'slug': '1sol',
		'symbol': '1SOL'
	},
	{
		'id': 23320,
		'name': 'DUX',
		'slug': 'dux',
		'symbol': 'DUX'
	},
	{
		'id': 23203,
		'name': 'Medal of Honour',
		'slug': 'medal-of-honour',
		'symbol': 'MOH'
	},
	{
		'id': 7296,
		'name': 'Truebit',
		'slug': 'truebit',
		'symbol': 'TRU'
	},
	{
		'id': 7013,
		'name': 'ADAUP',
		'slug': 'adaup',
		'symbol': 'ADAUP'
	},
	{
		'id': 22626,
		'name': 'Proof Of Memes',
		'slug': 'proof-of-memes-pomchain',
		'symbol': 'POM'
	},
	{
		'id': 7645,
		'name': 'WadzPay Token',
		'slug': 'wadzpay-token',
		'symbol': 'WTK'
	},
	{
		'id': 11557,
		'name': 'The Doge NFT',
		'slug': 'the-doge-nft',
		'symbol': 'DOG'
	},
	{
		'id': 14888,
		'name': 'MetaGaming Guild',
		'slug': 'metagaming-guild',
		'symbol': 'MGG'
	},
	{
		'id': 19533,
		'name': 'SpaceMine',
		'slug': 'spacemine',
		'symbol': 'MINE'
	},
	{
		'id': 21913,
		'name': 'Pre-retogeum',
		'slug': 'pre-retogeum',
		'symbol': 'PRTG'
	},
	{
		'id': 16697,
		'name': 'Agoric',
		'slug': 'agoric',
		'symbol': 'BLD'
	},
	{
		'id': 21517,
		'name': 'Satoshi Island',
		'slug': 'satoshi-island',
		'symbol': 'STC'
	},
	{
		'id': 21524,
		'name': 'ULTRON',
		'slug': 'ultron',
		'symbol': 'ULX'
	},
	{
		'id': 17343,
		'name': 'Bullieverse',
		'slug': 'bullieverse',
		'symbol': '$BULL'
	},
	{
		'id': 17738,
		'name': 'Jumbo Exchange',
		'slug': 'jumbo-exchange',
		'symbol': 'JUMBO'
	},
	{
		'id': 16569,
		'name': 'Elumia Crowns',
		'slug': 'legends-of-elumia',
		'symbol': 'ELU'
	},
	{
		'id': 11808,
		'name': 'Wrapped Near',
		'slug': 'wrapped-near',
		'symbol': 'WNEAR'
	},
	{
		'id': 19679,
		'name': 'Ryoma',
		'slug': 'ryoma',
		'symbol': 'RYOMA'
	},
	{
		'id': 20814,
		'name': 'IPVERSE',
		'slug': 'ipverse',
		'symbol': 'IPV'
	},
	{
		'id': 13695,
		'name': 'Unique Network',
		'slug': 'unique-unq',
		'symbol': 'UNQ'
	},
	{
		'id': 15926,
		'name': 'Rainmaker Games',
		'slug': 'rainmaker-games',
		'symbol': 'RAIN'
	},
	{
		'id': 17539,
		'name': 'BlueArk',
		'slug': 'blueark',
		'symbol': 'BRK'
	},
	{
		'id': 21177,
		'name': 'hiBAYC',
		'slug': 'hibayc',
		'symbol': 'hiBAYC'
	},
	{
		'id': 19575,
		'name': 'Element.Black',
		'slug': 'element-black',
		'symbol': 'ELT'
	},
	{
		'id': 15617,
		'name': 'Kyrrex',
		'slug': 'kyrrex',
		'symbol': 'KRRX'
	},
	{
		'id': 16093,
		'name': 'Bitkub Coin',
		'slug': 'bitkub-coin',
		'symbol': 'KUB'
	},
	{
		'id': 9386,
		'name': 'Kishu Inu',
		'slug': 'kishu-inu',
		'symbol': 'KISHU'
	},
	{
		'id': 10954,
		'name': 'MContent',
		'slug': 'mcontent',
		'symbol': 'MCONTENT'
	},
	{
		'id': 18888,
		'name': 'Frz Solar System',
		'slug': 'frz-solar-system',
		'symbol': 'FRZSS'
	},
	{
		'id': 19511,
		'name': 'PDX Coin',
		'slug': 'pdx-coin',
		'symbol': 'PDX'
	},
	{
		'id': 20444,
		'name': 'Superpower Squad',
		'slug': 'superpower-squad',
		'symbol': 'SQUAD'
	},
	{
		'id': 22338,
		'name': 'ClearCryptos',
		'slug': 'clearcryptos',
		'symbol': 'CCX'
	},
	{
		'id': 12938,
		'name': 'CORE MultiChain',
		'slug': 'core-multichain',
		'symbol': 'CMCX'
	},
	{
		'id': 20262,
		'name': 'WinGoal',
		'slug': 'pikaster',
		'symbol': 'MLS'
	},
	{
		'id': 22050,
		'name': 'Medieval Empires',
		'slug': 'medieval-empires',
		'symbol': 'MEE'
	},
	{
		'id': 20685,
		'name': 'OpenBlox',
		'slug': 'openblox',
		'symbol': 'OBX'
	},
	{
		'id': 19108,
		'name': 'Materium',
		'slug': 'materium',
		'symbol': 'MTRM'
	},
	{
		'id': 14540,
		'name': 'VLaunch',
		'slug': 'vlaunch',
		'symbol': 'VPAD'
	},
	{
		'id': 4139,
		'name': 'Brazilian Digital Token',
		'slug': 'brz',
		'symbol': 'BRZ'
	},
	{
		'id': 4824,
		'name': 'SymVerse',
		'slug': 'symverse',
		'symbol': 'SYM'
	},
	{
		'id': 21870,
		'name': 'Metaplex',
		'slug': 'metaplex',
		'symbol': 'MPLX'
	},
	{
		'id': 12252,
		'name': 'Bombcrypto',
		'slug': 'bombcrypto',
		'symbol': 'BCOIN'
	},
	{
		'id': 22936,
		'name': 'Animal Farm Dogs',
		'slug': 'animal-farm-dogs',
		'symbol': 'AFD'
	},
	{
		'id': 18105,
		'name': 'TOR',
		'slug': 'tor',
		'symbol': 'TOR'
	},
	{
		'id': 21958,
		'name': 'Soulsaver',
		'slug': 'soulsaver',
		'symbol': 'SOUL'
	},
	{
		'id': 19009,
		'name': 'Tribal Token',
		'slug': 'tribal-token',
		'symbol': 'TRIBL'
	},
	{
		'id': 23284,
		'name': 'Meta Game City',
		'slug': 'meta-game-city',
		'symbol': 'MECI'
	},
	{
		'id': 13740,
		'name': 'SIGN',
		'slug': 'signin',
		'symbol': 'SIGN'
	},
	{
		'id': 9711,
		'name': 'Sanshu Inu',
		'slug': 'sanshu-inu',
		'symbol': 'SANSHU'
	},
	{
		'id': 9286,
		'name': 'Doge Killer',
		'slug': 'doge-killer',
		'symbol': 'LEASH'
	},
	{
		'id': 19722,
		'name': 'BreederDAO',
		'slug': 'breederdao',
		'symbol': 'BREED'
	},
	{
		'id': 18863,
		'name': 'ViCA Token',
		'slug': 'vica-token',
		'symbol': 'VICA'
	},
	{
		'id': 8537,
		'name': 'Channels',
		'slug': 'channels',
		'symbol': 'CAN'
	},
	{
		'id': 18646,
		'name': 'Tiny Coin',
		'slug': 'tiny-coin',
		'symbol': 'TINC'
	},
	{
		'id': 13356,
		'name': 'WiseAvax',
		'slug': 'wiseavax',
		'symbol': 'WISE'
	},
	{
		'id': 23273,
		'name': 'Sketch Coin',
		'slug': 'sketch-coin',
		'symbol': 'SKET'
	},
	{
		'id': 20392,
		'name': 'Oceanland',
		'slug': 'oceanland',
		'symbol': 'OLAND'
	},
	{
		'id': 23232,
		'name': 'Kudoe',
		'slug': 'kudoe',
		'symbol': 'KDOE'
	},
	{
		'id': 19424,
		'name': 'Frax Price Index Share',
		'slug': 'frax-price-index-share',
		'symbol': 'FPIS'
	},
	{
		'id': 9954,
		'name': 'Netvrk',
		'slug': 'netvrk',
		'symbol': 'NTVRK'
	},
	{
		'id': 19923,
		'name': 'Stader MaticX',
		'slug': 'stader-maticx',
		'symbol': 'MATICX'
	},
	{
		'id': 15502,
		'name': 'Peoplez',
		'slug': 'peoplez',
		'symbol': 'LEZ'
	},
	{
		'id': 19699,
		'name': 'Globiance Exchange Token',
		'slug': 'globiance-exchange-token',
		'symbol': 'GBEX'
	},
	{
		'id': 22784,
		'name': 'Legends',
		'slug': 'legends',
		'symbol': 'FWCL'
	},
	{
		'id': 19576,
		'name': 'Yeti Finance',
		'slug': 'yeti-finance',
		'symbol': 'YETI'
	},
	{
		'id': 11736,
		'name': 'CryptoMines',
		'slug': 'cryptomines',
		'symbol': 'ETERNAL'
	},
	{
		'id': 21229,
		'name': 'Yieldification',
		'slug': 'yieldification',
		'symbol': 'YDF'
	},
	{
		'id': 21315,
		'name': 'Qlindo',
		'slug': 'qlindo',
		'symbol': 'QLINDO'
	},
	{
		'id': 9656,
		'name': 'CateCoin',
		'slug': 'catecoin',
		'symbol': 'CATE'
	},
	{
		'id': 18353,
		'name': 'ritestream',
		'slug': 'ritestream',
		'symbol': 'RITE'
	},
	{
		'id': 19758,
		'name': 'Gode Chain',
		'slug': 'gode-chain',
		'symbol': 'GODE'
	},
	{
		'id': 21516,
		'name': 'CANTO',
		'slug': 'canto',
		'symbol': 'CANTO'
	},
	{
		'id': 12440,
		'name': 'Buffer Finance',
		'slug': 'buffer-finance',
		'symbol': 'BFR'
	},
	{
		'id': 20191,
		'name': 'Chibi Dinos',
		'slug': 'chibi-dinos',
		'symbol': 'HOOP'
	},
	{
		'id': 7057,
		'name': 'Melecoin',
		'slug': 'melecoin',
		'symbol': 'MELE'
	},
	{
		'id': 17390,
		'name': 'Prime Numbers Ecosystem',
		'slug': 'prime-numbers',
		'symbol': 'PRNT'
	},
	{
		'id': 22160,
		'name': 'FrontFanz',
		'slug': 'frontfanz',
		'symbol': 'FANZ'
	},
	{
		'id': 22511,
		'name': 'RABBIT HALLOWEEN',
		'slug': 'rabbit-halloween',
		'symbol': 'RH31'
	},
	{
		'id': 21308,
		'name': 'hiPUNKS',
		'slug': 'hipunks',
		'symbol': 'hiPUNKS'
	},
	{
		'id': 20700,
		'name': 'Wiki Cat',
		'slug': 'wiki-cat',
		'symbol': 'WKC'
	},
	{
		'id': 5608,
		'name': 'BTCUP',
		'slug': 'btcup',
		'symbol': 'BTCUP'
	},
	{
		'id': 18520,
		'name': 'Oath',
		'slug': 'oath',
		'symbol': 'OATH'
	},
	{
		'id': 22569,
		'name': 'hiSQUIGGLE',
		'slug': 'hisquiggle',
		'symbol': 'hiSQUIGGLE'
	},
	{
		'id': 19964,
		'name': 'PlutusDAO',
		'slug': 'plutusdao',
		'symbol': 'PLS'
	},
	{
		'id': 15207,
		'name': 'Bit.Store',
		'slug': 'bit-store',
		'symbol': 'STORE'
	},
	{
		'id': 15610,
		'name': 'Terra Classic USD (Wormhole)',
		'slug': 'terrausd-wormhole',
		'symbol': 'USTC'
	},
	{
		'id': 16162,
		'name': 'SafeMoon V2',
		'slug': 'safemoon-v2',
		'symbol': 'SFM'
	},
	{
		'id': 11422,
		'name': 'Wanaka Farm',
		'slug': 'wanaka-farm',
		'symbol': 'WANA'
	},
	{
		'id': 23123,
		'name': 'One Hundred Million Inu',
		'slug': 'one-hundred-million-inu',
		'symbol': 'OHMI'
	},
	{
		'id': 23230,
		'name': 'DOGGO',
		'slug': 'doggo',
		'symbol': 'DOGGO'
	},
	{
		'id': 20818,
		'name': 'INERY',
		'slug': 'inery',
		'symbol': 'INR'
	},
	{
		'id': 19903,
		'name': 'Undead Blocks',
		'slug': 'undead-blocks',
		'symbol': 'UNDEAD'
	},
	{
		'id': 7001,
		'name': 'XRPUP',
		'slug': 'xrpup',
		'symbol': 'XRPUP'
	},
	{
		'id': 17297,
		'name': 'Coinerr',
		'slug': 'coinerr',
		'symbol': 'ERR'
	},
	{
		'id': 22905,
		'name': 'OpenAI ERC',
		'slug': 'openai-erc',
		'symbol': 'OPENAI ERC'
	},
	{
		'id': 21272,
		'name': 'Hermes Protocol',
		'slug': 'hermes-protocol',
		'symbol': 'HERMES'
	},
	{
		'id': 21834,
		'name': 'Dachshund',
		'slug': 'dachshund',
		'symbol': 'DSD'
	},
	{
		'id': 14299,
		'name': 'JUNO',
		'slug': 'juno',
		'symbol': 'JUNO'
	},
	{
		'id': 19426,
		'name': 'Giddy',
		'slug': 'giddy',
		'symbol': 'GDDY'
	},
	{
		'id': 12230,
		'name': 'Revest Finance',
		'slug': 'revest-finance',
		'symbol': 'RVST'
	},
	{
		'id': 20854,
		'name': 'ZED Token',
		'slug': 'zed-run-token',
		'symbol': 'ZED'
	},
	{
		'id': 18880,
		'name': 'iShares 20+ Year Treasury Bond ETF Defichain',
		'slug': 'treasury-bond-eth-tokenized-stock-defichain',
		'symbol': 'DTLT'
	},
	{
		'id': 19519,
		'name': 'BRN Metaverse',
		'slug': 'brn-metaverse',
		'symbol': 'BRN'
	},
	{
		'id': 16640,
		'name': 'Tethys',
		'slug': 'tethys',
		'symbol': 'TETHYS'
	},
	{
		'id': 21036,
		'name': 'Land Of Conquest',
		'slug': 'land-of-conquest',
		'symbol': 'SLG'
	},
	{
		'id': 4813,
		'name': 'XBIT',
		'slug': '4xbit',
		'symbol': 'XBT'
	},
	{
		'id': 22965,
		'name': 'Tigres Fan Token',
		'slug': 'tigres-fan-token',
		'symbol': 'TIGRES'
	},
	{
		'id': 12971,
		'name': 'Lunr Token',
		'slug': 'lunr-token',
		'symbol': 'LUNR'
	},
	{
		'id': 19191,
		'name': 'DOLA',
		'slug': 'inverse-finance-dola-stablecoin',
		'symbol': 'DOLA'
	},
	{
		'id': 22033,
		'name': 'hiMAYC',
		'slug': 'himayc',
		'symbol': 'hiMAYC'
	},
	{
		'id': 20838,
		'name': 'MetFi',
		'slug': 'metfi',
		'symbol': 'MFI'
	},
	{
		'id': 23137,
		'name': 'Old Bitcoin',
		'slug': 'old-bitcoin-erc',
		'symbol': 'BC'
	},
	{
		'id': 20930,
		'name': 'Wateenswap',
		'slug': 'wateenswap',
		'symbol': 'WTN'
	},
	{
		'id': 17073,
		'name': 'Affyn',
		'slug': 'affyn',
		'symbol': 'FYN'
	},
	{
		'id': 18736,
		'name': 'Best Fintech Investment Coin',
		'slug': 'best-fintech-investment-coin',
		'symbol': 'BFIC'
	},
	{
		'id': 8795,
		'name': 'Mute',
		'slug': 'mute',
		'symbol': 'MUTE'
	},
	{
		'id': 21319,
		'name': 'Metanept',
		'slug': 'metanept',
		'symbol': 'NEPT'
	},
	{
		'id': 21532,
		'name': 'Aura Finance',
		'slug': 'aura-finance',
		'symbol': 'AURA'
	},
	{
		'id': 19966,
		'name': 'Quickswap[New]',
		'slug': 'quickswap-new',
		'symbol': 'QUICK'
	},
	{
		'id': 23236,
		'name': 'Timeless',
		'slug': 'timeless',
		'symbol': 'LIT'
	},
	{
		'id': 7010,
		'name': 'BNBDOWN',
		'slug': 'bnbdown',
		'symbol': 'BNBDOWN'
	},
	{
		'id': 8397,
		'name': 'FEG Token',
		'slug': 'fegtoken',
		'symbol': 'FEG'
	},
	{
		'id': 12431,
		'name': 'StarSharks (SSS)',
		'slug': 'starsharks-sss',
		'symbol': 'SSS'
	},
	{
		'id': 21004,
		'name': 'Biblecoin',
		'slug': 'biblecoin',
		'symbol': 'BIBL'
	},
	{
		'id': 21383,
		'name': 'hiENS4',
		'slug': 'hiens4',
		'symbol': 'hiENS4'
	},
	{
		'id': 21505,
		'name': 'Redlight Chain',
		'slug': 'redlight-chain',
		'symbol': 'REDLC'
	},
	{
		'id': 10789,
		'name': 'Tether EURt',
		'slug': 'tether-eurt',
		'symbol': 'EURT'
	},
	{
		'id': 17718,
		'name': 'TAP FANTASY',
		'slug': 'tap-fantasy',
		'symbol': 'TAP'
	},
	{
		'id': 22264,
		'name': 'OHO',
		'slug': 'oho',
		'symbol': 'OHO'
	},
	{
		'id': 8670,
		'name': 'Vow',
		'slug': 'vow',
		'symbol': 'VOW'
	},
	{
		'id': 15584,
		'name': 'Humans.ai',
		'slug': 'humans-ai',
		'symbol': 'HEART'
	},
	{
		'id': 16962,
		'name': 'XELS',
		'slug': 'xels',
		'symbol': 'XELS'
	},
	{
		'id': 19577,
		'name': 'YUSD Stablecoin',
		'slug': 'yusd-stablecoin',
		'symbol': 'YUSD'
	},
	{
		'id': 22488,
		'name': 'SILK',
		'slug': 'spider-tanks',
		'symbol': 'SILK'
	},
	{
		'id': 10419,
		'name': 'sEUR',
		'slug': 'seur',
		'symbol': 'SEUR'
	},
	{
		'id': 11952,
		'name': 'Wrapped Moonriver',
		'slug': 'wrapped-moonriver',
		'symbol': 'WMOVR'
	},
	{
		'id': 14801,
		'name': 'Shimmer',
		'slug': 'shimmer',
		'symbol': 'SMR'
	},
	{
		'id': 20081,
		'name': 'OmniaVerse',
		'slug': 'omniaverse',
		'symbol': 'OMNIA'
	},
	{
		'id': 23097,
		'name': 'T23',
		'slug': 't23',
		'symbol': 'T23'
	},
	{
		'id': 22766,
		'name': 'AS Monaco Fan Token',
		'slug': 'as-monaco-fan-token',
		'symbol': 'ASM'
	},
	{
		'id': 16395,
		'name': 'Kayserispor Token',
		'slug': 'kayserispor-token',
		'symbol': 'KYSR'
	},
	{
		'id': 12576,
		'name': 'Geist Finance',
		'slug': 'geist-finance',
		'symbol': 'GEIST'
	},
	{
		'id': 21525,
		'name': 'PoodleFi',
		'slug': 'poodlefi',
		'symbol': 'PFI'
	},
	{
		'id': 17911,
		'name': 'InpulseX',
		'slug': 'inpulsex',
		'symbol': 'IPX'
	},
	{
		'id': 17133,
		'name': 'TopManager',
		'slug': 'topmanager',
		'symbol': 'TMT'
	},
	{
		'id': 15659,
		'name': 'Decentralized Eternal Virtual Traveller',
		'slug': 'decentralized-eternal-virtual-traveller',
		'symbol': 'DEVT'
	},
	{
		'id': 22570,
		'name': 'hiMEEBITS',
		'slug': 'himeebits',
		'symbol': 'hiMEEBITS'
	},
	{
		'id': 23285,
		'name': 'Diversified Staked Ethereum Index',
		'slug': 'diversified-staked-ethereum-index',
		'symbol': 'DSETH'
	},
	{
		'id': 23093,
		'name': 'hiCOOLCATS',
		'slug': 'hicoolcats-fractionalized-nft-kucoin',
		'symbol': 'hiCOOLCATS'
	},
	{
		'id': 14492,
		'name': 'Nemesis DAO',
		'slug': 'nemesis-dao',
		'symbol': 'NMS'
	},
	{
		'id': 21854,
		'name': 'Yolllo',
		'slug': 'yolllo',
		'symbol': 'YOLLLO'
	},
	{
		'id': 10265,
		'name': 'Gold Fever',
		'slug': 'gold-fever',
		'symbol': 'NGL'
	},
	{
		'id': 21320,
		'name': 'Thrupenny',
		'slug': 'thrupenny',
		'symbol': 'TPY'
	},
	{
		'id': 21324,
		'name': 'Redacted',
		'slug': 'redacted',
		'symbol': 'BTRFLY'
	},
	{
		'id': 16059,
		'name': 'MOBLAND',
		'slug': 'syn-city',
		'symbol': 'SYNR'
	},
	{
		'id': 5482,
		'name': 'CCX',
		'slug': 'counos-x',
		'symbol': 'CCXX'
	},
	{
		'id': 20611,
		'name': 'LIF3',
		'slug': 'lif3',
		'symbol': 'LIF3'
	},
	{
		'id': 22278,
		'name': 'The Protocol',
		'slug': 'the-protocol',
		'symbol': 'THE'
	},
	{
		'id': 7749,
		'name': 'Paypolitan Token',
		'slug': 'paypolitan-token',
		'symbol': 'EPAN'
	},
	{
		'id': 23238,
		'name': 'hiMFERS',
		'slug': 'himfers',
		'symbol': 'hiMFERS'
	},
	{
		'id': 7462,
		'name': 'United',
		'slug': 'united',
		'symbol': 'UTED'
	},
	{
		'id': 22860,
		'name': 'Metano',
		'slug': 'metano-foundations-token',
		'symbol': 'METANO'
	},
	{
		'id': 17285,
		'name': 'Sperax USD',
		'slug': 'sperax-usd',
		'symbol': 'USDs'
	},
	{
		'id': 5529,
		'name': 'ASYAGRO',
		'slug': 'asyagro',
		'symbol': 'ASY'
	},
	{
		'id': 14188,
		'name': 'Plugin',
		'slug': 'plugin',
		'symbol': 'PLI'
	},
	{
		'id': 6771,
		'name': 'DataHighway',
		'slug': 'datahighway',
		'symbol': 'DHX'
	},
	{
		'id': 18687,
		'name': 'Hedron',
		'slug': 'hedron',
		'symbol': 'HDRN'
	},
	{
		'id': 5945,
		'name': 'Temtum',
		'slug': 'temtum',
		'symbol': 'TEM'
	},
	{
		'id': 8426,
		'name': 'Filda',
		'slug': 'filda',
		'symbol': 'FILDA'
	},
	{
		'id': 19026,
		'name': 'ShibKiller',
		'slug': 'shibkiller',
		'symbol': 'SHIBKILLER'
	},
	{
		'id': 11570,
		'name': 'The Recharge',
		'slug': 'recharge',
		'symbol': 'RCG'
	},
	{
		'id': 22552,
		'name': 'NFT2STAKE',
		'slug': 'nft2stake',
		'symbol': 'NFT2$'
	},
	{
		'id': 21819,
		'name': 'hiODBS',
		'slug': 'hiodbs',
		'symbol': 'hiODBS'
	},
	{
		'id': 10102,
		'name': 'BankSocial',
		'slug': 'banksocial',
		'symbol': 'BSL'
	},
	{
		'id': 5764,
		'name': 'sBTC',
		'slug': 'sbtc',
		'symbol': 'SBTC'
	},
	{
		'id': 4664,
		'name': 'RCCCToken',
		'slug': 'rccctoken',
		'symbol': 'RCCC'
	},
	{
		'id': 16929,
		'name': 'Flare Finance',
		'slug': 'flare-finance',
		'symbol': 'EXFI'
	},
	{
		'id': 18386,
		'name': 'Faith Tribe',
		'slug': 'faith-tribe',
		'symbol': 'FTRB'
	},
	{
		'id': 21458,
		'name': 'Concentrator',
		'slug': 'concentrator-token',
		'symbol': 'CTR'
	},
	{
		'id': 20848,
		'name': 'WeSendit',
		'slug': 'wesendit',
		'symbol': 'WSI'
	},
	{
		'id': 19464,
		'name': 'MetaShooter',
		'slug': 'metashooter',
		'symbol': 'MHUNT'
	},
	{
		'id': 23206,
		'name': 'CNHC',
		'slug': 'cnhc',
		'symbol': 'CNHC'
	},
	{
		'id': 13901,
		'name': 'Bit2Me',
		'slug': 'bit2me',
		'symbol': 'B2M'
	},
	{
		'id': 20508,
		'name': 'Shinjiru Inu',
		'slug': 'shinjiru-inu',
		'symbol': 'SHINJI'
	},
	{
		'id': 22677,
		'name': 'hiFIDENZA',
		'slug': 'hifidenza',
		'symbol': 'hiFIDENZA'
	},
	{
		'id': 15286,
		'name': 'Degree Crypto Token',
		'slug': 'degree-crypto-token',
		'symbol': 'DCT'
	},
	{
		'id': 22000,
		'name': 'Palmswap',
		'slug': 'palmswap',
		'symbol': 'PALM'
	},
	{
		'id': 22399,
		'name': 'Mojito Markets',
		'slug': 'mojito-markets',
		'symbol': 'MOJO'
	},
	{
		'id': 20686,
		'name': 'BlueSparrow Token',
		'slug': 'bluesparrow-token-new',
		'symbol': 'BlueSparrow'
	},
	{
		'id': 16388,
		'name': 'Governance OHM',
		'slug': 'governance-ohm',
		'symbol': 'GOHM'
	},
	{
		'id': 12411,
		'name': 'Balkari',
		'slug': 'balkari',
		'symbol': 'BKR'
	},
	{
		'id': 19734,
		'name': 'PLAYA3ULL GAMES',
		'slug': 'playa3ull-games',
		'symbol': '3ULL'
	},
	{
		'id': 22858,
		'name': 'Dynex',
		'slug': 'dynex',
		'symbol': 'DNX'
	},
	{
		'id': 17354,
		'name': 'Puli',
		'slug': 'puli-inu',
		'symbol': 'PULI'
	},
	{
		'id': 11061,
		'name': 'Multiverse',
		'slug': 'multiverse',
		'symbol': 'AI'
	},
	{
		'id': 12515,
		'name': 'Colawork',
		'slug': 'colawork',
		'symbol': 'COLA'
	},
	{
		'id': 19294,
		'name': 'XRPayNet',
		'slug': 'xrpaynet',
		'symbol': 'XRPAYNET'
	},
	{
		'id': 21217,
		'name': 'MangoMan Intelligent',
		'slug': 'mangoman-intelligent',
		'symbol': 'MMIT'
	},
	{
		'id': 16389,
		'name': 'Umee',
		'slug': 'umee',
		'symbol': 'UMEE'
	},
	{
		'id': 22543,
		'name': 'Ultimate Champions',
		'slug': 'ultimate-champions',
		'symbol': 'CHAMP'
	},
	{
		'id': 11038,
		'name': 'BFG Token',
		'slug': 'betfury',
		'symbol': 'BFG'
	},
	{
		'id': 23278,
		'name': 'Conic Finance',
		'slug': 'conic-finance',
		'symbol': 'CNC'
	},
	{
		'id': 21544,
		'name': 'Lucky Coin',
		'slug': 'lucky-coin',
		'symbol': 'LKC'
	},
	{
		'id': 7009,
		'name': 'BNBUP',
		'slug': 'bnbup',
		'symbol': 'BNBUP'
	},
	{
		'id': 8499,
		'name': '300FIT NETWORK',
		'slug': '300fit-network',
		'symbol': 'FIT'
	},
	{
		'id': 18182,
		'name': 'Wrapped Moonbeam',
		'slug': 'wrapped-moonbeam',
		'symbol': 'WGLMR'
	},
	{
		'id': 12382,
		'name': 'Zamio',
		'slug': 'zamio',
		'symbol': 'ZAM'
	},
	{
		'id': 23255,
		'name': 'MEFLEX',
		'slug': 'meflex',
		'symbol': 'MEF'
	},
	{
		'id': 5005,
		'name': 'ARCS',
		'slug': 'arcs',
		'symbol': 'ARX'
	},
	{
		'id': 17715,
		'name': 'artèQ',
		'slug': 'arteq',
		'symbol': 'ARTEQ'
	},
	{
		'id': 16302,
		'name': 'UpOnly',
		'slug': 'uponly',
		'symbol': 'UPO'
	},
	{
		'id': 14557,
		'name': 'Cindrum',
		'slug': 'cindrum',
		'symbol': 'CIND'
	},
	{
		'id': 16148,
		'name': 'FreeRossDAO',
		'slug': 'freerossdao',
		'symbol': 'FREE'
	},
	{
		'id': 23279,
		'name': 'Mintpad',
		'slug': 'mintpad',
		'symbol': 'MINT'
	},
	{
		'id': 21579,
		'name': 'Ivar Coin',
		'slug': 'ivar-coin',
		'symbol': 'IVAR'
	},
	{
		'id': 7217,
		'name': 'Morpher',
		'slug': 'morpher',
		'symbol': 'MPH'
	},
	{
		'id': 22681,
		'name': 'MetaMic E-Sports Games',
		'slug': 'metamic-e-sports-games',
		'symbol': 'MEG'
	},
	{
		'id': 9737,
		'name': 'Hummingbird Finance',
		'slug': 'hummingbird-finance',
		'symbol': 'HMNG'
	},
	{
		'id': 6866,
		'name': 'TAI',
		'slug': 'tai',
		'symbol': 'TAI'
	},
	{
		'id': 12982,
		'name': 'ByteDex',
		'slug': 'bytedex',
		'symbol': 'BEXT'
	},
	{
		'id': 20394,
		'name': 'xSPECTAR',
		'slug': 'xspectar',
		'symbol': 'XSPECTAR'
	},
	{
		'id': 23046,
		'name': 'mCoin',
		'slug': 'mcoin1',
		'symbol': 'MCOIN'
	},
	{
		'id': 13485,
		'name': 'Smarty Pay',
		'slug': 'smarty-pay',
		'symbol': 'SPY'
	},
	{
		'id': 22228,
		'name': 'Viva Classic (new)',
		'slug': 'viva-classic-new',
		'symbol': 'VIVA'
	},
	{
		'id': 8549,
		'name': 'Polkacity',
		'slug': 'polkacity',
		'symbol': 'POLC'
	},
	{
		'id': 20500,
		'name': 'REVOLAND TOKEN',
		'slug': 'revoland-token',
		'symbol': 'REVO'
	},
	{
		'id': 11495,
		'name': 'Tomb',
		'slug': 'tomb',
		'symbol': 'TOMB'
	},
	{
		'id': 21828,
		'name': 'Minebase',
		'slug': 'minebase',
		'symbol': 'MBASE'
	},
	{
		'id': 7919,
		'name': 'Tesla tokenized stock Bittrex',
		'slug': 'tesla-tokenized-stock-bittrex',
		'symbol': 'TSLA'
	},
	{
		'id': 16430,
		'name': 'Tectonic',
		'slug': 'tectonic',
		'symbol': 'TONIC'
	},
	{
		'id': 12078,
		'name': 'DogeSwap',
		'slug': 'dogeswap-heco',
		'symbol': 'DOG'
	},
	{
		'id': 19982,
		'name': 'Numitor',
		'slug': 'numitor',
		'symbol': 'NUMI'
	},
	{
		'id': 14339,
		'name': 'Cypherium',
		'slug': 'cypherium',
		'symbol': 'CPH'
	},
	{
		'id': 14790,
		'name': 'Baby Tiger King',
		'slug': 'baby-tiger-king',
		'symbol': 'BABYTK'
	},
	{
		'id': 22865,
		'name': 'IGUP (IguVerse)',
		'slug': 'iguverse-igup',
		'symbol': 'IGUP'
	},
	{
		'id': 17213,
		'name': 'Square Token',
		'slug': 'square-token',
		'symbol': 'SQUA'
	},
	{
		'id': 23070,
		'name': 'hiAZUKI',
		'slug': 'hiazuki',
		'symbol': 'hiAZUKI'
	},
	{
		'id': 8769,
		'name': 'MeetPle',
		'slug': 'meetple',
		'symbol': 'MPT'
	},
	{
		'id': 20728,
		'name': 'LIF3 LSHARE',
		'slug': 'lif3-lshare',
		'symbol': 'LSHARE'
	},
	{
		'id': 19915,
		'name': 'Crypto Snack',
		'slug': 'crypto-snack',
		'symbol': 'SNACK'
	},
	{
		'id': 20787,
		'name': 'Fellaz',
		'slug': 'fellaz',
		'symbol': 'FLZ'
	},
	{
		'id': 20272,
		'name': 'ShinobiVerse',
		'slug': 'shinobiverse',
		'symbol': 'SHINO'
	},
	{
		'id': 19466,
		'name': 'Bridge Network',
		'slug': 'bridge-network',
		'symbol': 'BRDG'
	},
	{
		'id': 11370,
		'name': 'Duel Network',
		'slug': 'duel-network',
		'symbol': 'DUEL'
	},
	{
		'id': 12215,
		'name': 'Falcon 9',
		'slug': 'falcon-9',
		'symbol': 'F9'
	},
	{
		'id': 18966,
		'name': 'Neopin',
		'slug': 'neopin',
		'symbol': 'NPT'
	},
	{
		'id': 3452,
		'name': 'Etho Protocol',
		'slug': 'etho-protocol',
		'symbol': 'ETHO'
	},
	{
		'id': 22110,
		'name': 'Club Santos Laguna Fan Token',
		'slug': 'club-santos-laguna-fan-token',
		'symbol': 'SAN'
	},
	{
		'id': 22917,
		'name': 'Zombie Inu(New)',
		'slug': 'zombie-inu-v2',
		'symbol': 'ZINU'
	},
	{
		'id': 8377,
		'name': 'SX Network',
		'slug': 'sportx',
		'symbol': 'SX'
	},
	{
		'id': 22964,
		'name': 'Orbit Bridge Klaytn Orbit Chain',
		'slug': 'orbit-bridge-klaytn-orbit-chain',
		'symbol': 'OORC'
	},
	{
		'id': 22178,
		'name': 'Atlas FC Fan Token',
		'slug': 'atlas-fc-fan-token',
		'symbol': 'ATLAS'
	},
	{
		'id': 11456,
		'name': 'SnowCrash Token',
		'slug': 'snowcrash-token',
		'symbol': 'NORA'
	},
	{
		'id': 17902,
		'name': 'Binance Wrapped DOT',
		'slug': 'binance-wrapped-dot',
		'symbol': 'BDOT'
	},
	{
		'id': 22431,
		'name': 'Alcazar',
		'slug': 'alcazar',
		'symbol': 'ALCAZAR'
	},
	{
		'id': 13118,
		'name': 'Yoshi.exchange',
		'slug': 'yoshi-exchange',
		'symbol': 'YOSHI'
	},
	{
		'id': 16875,
		'name': 'Orbitau Taureum',
		'slug': 'orbitau',
		'symbol': 'TAUM'
	},
	{
		'id': 23301,
		'name': 'ArbInu',
		'slug': 'arbinu',
		'symbol': 'ARBINU'
	},
	{
		'id': 22948,
		'name': 'hiCLONEX',
		'slug': 'hiclonex',
		'symbol': 'hiCLONEX'
	},
	{
		'id': 22790,
		'name': 'hiGAZERS',
		'slug': 'higazers',
		'symbol': 'hiGAZERS'
	},
	{
		'id': 20286,
		'name': 'XANA',
		'slug': 'xana',
		'symbol': 'XETA'
	},
	{
		'id': 19423,
		'name': 'Stronger',
		'slug': 'stronger',
		'symbol': 'STRNGR'
	},
	{
		'id': 23173,
		'name': 'hiMOONBIRDS',
		'slug': 'himoonbirds',
		'symbol': 'HIMOONBIRDS'
	},
	{
		'id': 20704,
		'name': 'GeniuX',
		'slug': 'geniux',
		'symbol': 'IUX'
	},
	{
		'id': 19520,
		'name': 'Shido',
		'slug': 'shido-inu',
		'symbol': 'SHIDO'
	},
	{
		'id': 22392,
		'name': 'Heart Rate',
		'slug': 'heart-rate',
		'symbol': 'HTR'
	},
	{
		'id': 3686,
		'name': 'Conscious Value Network',
		'slug': 'content-value-network',
		'symbol': 'CVNT'
	},
	{
		'id': 8675,
		'name': 'Minds',
		'slug': 'minds',
		'symbol': 'MINDS'
	},
	{
		'id': 6607,
		'name': 'MixTrust',
		'slug': 'mixtrust',
		'symbol': 'MXT'
	},
	{
		'id': 20446,
		'name': 'Menzy',
		'slug': 'menzy',
		'symbol': 'MNZ'
	},
	{
		'id': 16500,
		'name': 'ShibaDoge',
		'slug': 'shibadoge',
		'symbol': 'SHIBDOGE'
	},
	{
		'id': 11271,
		'name': 'DogeCola',
		'slug': 'dogecola',
		'symbol': 'DOGECOLA'
	},
	{
		'id': 9679,
		'name': 'MoonStarter',
		'slug': 'moonstarter',
		'symbol': 'MNST'
	},
	{
		'id': 23092,
		'name': 'hiFLUF',
		'slug': 'hifluf-fractionalized-nft-kucoin',
		'symbol': 'hiFLUF'
	},
	{
		'id': 17766,
		'name': 'PAXW',
		'slug': 'pax-world',
		'symbol': 'PAXW'
	},
	{
		'id': 17569,
		'name': 'MoonDAO',
		'slug': 'mooney',
		'symbol': 'MOONEY'
	},
	{
		'id': 21515,
		'name': 'hiSAND33',
		'slug': 'hisand33',
		'symbol': 'hiSAND33'
	},
	{
		'id': 21491,
		'name': '3QT',
		'slug': '3qt',
		'symbol': '3QT'
	},
	{
		'id': 21731,
		'name': 'MetamonkeyAi',
		'slug': 'metamonkeyai',
		'symbol': 'MMAI'
	},
	{
		'id': 21724,
		'name': 'hiENS3',
		'slug': 'hiens3',
		'symbol': 'hiENS3'
	},
	{
		'id': 15658,
		'name': 'Qitmeer Network',
		'slug': 'qitmeer-network',
		'symbol': 'MEER'
	},
	{
		'id': 21387,
		'name': 'AmpliFi',
		'slug': 'amplifi',
		'symbol': 'AMPLIFI'
	},
	{
		'id': 15720,
		'name': 'MetaFabric',
		'slug': 'metafabric',
		'symbol': 'FABRIC'
	},
	{
		'id': 22239,
		'name': 'Wombex Finance',
		'slug': 'wombex-finance',
		'symbol': 'WMX'
	},
	{
		'id': 18323,
		'name': 'Milo Inu',
		'slug': 'milo-inu',
		'symbol': 'MILO'
	},
	{
		'id': 13881,
		'name': 'Hector Network',
		'slug': 'hector-dao',
		'symbol': 'HEC'
	},
	{
		'id': 22959,
		'name': 'Abel finance',
		'slug': 'abel-finance',
		'symbol': 'ABEL'
	},
	{
		'id': 21708,
		'name': 'Okse',
		'slug': 'okse',
		'symbol': 'OKSE'
	},
	{
		'id': 20658,
		'name': 'xcDOT',
		'slug': 'xcdot',
		'symbol': 'XCDOT'
	},
	{
		'id': 4385,
		'name': 'Daikicoin',
		'slug': 'daikicoin',
		'symbol': 'DIC'
	},
	{
		'id': 23182,
		'name': 'Onigiri Neko',
		'slug': 'onigiri-neko',
		'symbol': 'ONIGI'
	},
	{
		'id': 11304,
		'name': 'Chainflix',
		'slug': 'chainflix',
		'symbol': 'CFXT'
	},
	{
		'id': 18843,
		'name': 'First Ever NFT',
		'slug': 'first-ever-nft',
		'symbol': 'FEN'
	},
	{
		'id': 18126,
		'name': 'Probinex',
		'slug': 'probinex',
		'symbol': 'PBX'
	},
	{
		'id': 21928,
		'name': 'Veritise',
		'slug': 'veritise',
		'symbol': 'VTS'
	},
	{
		'id': 5989,
		'name': 'BNS Token',
		'slug': 'bns-token',
		'symbol': 'BNS'
	},
	{
		'id': 22610,
		'name': 'TourismX Token',
		'slug': 'tourismx-token',
		'symbol': 'TRMX'
	},
	{
		'id': 8124,
		'name': 'DRC Mobility',
		'slug': 'drc-mobility',
		'symbol': 'DRC'
	},
	{
		'id': 15974,
		'name': 'Metaverser',
		'slug': 'metaverser',
		'symbol': 'MTVT'
	},
	{
		'id': 20182,
		'name': 'Mobipad',
		'slug': 'mobipad',
		'symbol': 'MBP'
	},
	{
		'id': 2712,
		'name': 'MyToken',
		'slug': 'mytoken',
		'symbol': 'MT'
	},
	{
		'id': 17623,
		'name': 'Lootex',
		'slug': 'lootex',
		'symbol': 'LOOT'
	},
	{
		'id': 21128,
		'name': 'IMOV',
		'slug': 'imov',
		'symbol': 'IMT'
	},
	{
		'id': 11800,
		'name': 'Griffin Art Ecosystem',
		'slug': 'griffin-art',
		'symbol': 'GART'
	},
	{
		'id': 11371,
		'name': 'RoboFi',
		'slug': 'robofi',
		'symbol': 'VICS'
	},
	{
		'id': 16101,
		'name': 'Sandwich Network',
		'slug': 'sandwich-network',
		'symbol': 'SANDWICH'
	},
	{
		'id': 22352,
		'name': 'Local Traders',
		'slug': 'local-traders',
		'symbol': 'LCT'
	},
	{
		'id': 22869,
		'name': 'hiPENGUINS',
		'slug': 'hipenguins',
		'symbol': 'hiPENGUINS'
	},
	{
		'id': 22465,
		'name': 'Crypteriumcoin',
		'slug': 'crypteriumcoin',
		'symbol': 'CCOIN'
	},
	{
		'id': 22111,
		'name': 'marumaruNFT',
		'slug': 'marumarunft',
		'symbol': 'MARU'
	},
	{
		'id': 19386,
		'name': 'AlgoBlocks',
		'slug': 'algoblocks',
		'symbol': 'ALGOBLK'
	},
	{
		'id': 23029,
		'name': 'Voxto Amplify',
		'slug': 'voxto-amplify',
		'symbol': 'VXT'
	},
	{
		'id': 12949,
		'name': 'Toucan Protocol: Base Carbon Tonne',
		'slug': 'toucan-protocol-base-carbon-tonne',
		'symbol': 'BCT'
	},
	{
		'id': 12886,
		'name': 'bloXmove Token',
		'slug': 'bloxmove',
		'symbol': 'BLXM'
	},
	{
		'id': 18434,
		'name': 'Balıkesirspor Token',
		'slug': 'balikesirspor-token',
		'symbol': 'BLKS'
	},
	{
		'id': 10201,
		'name': 'BitBook',
		'slug': 'bitbook',
		'symbol': 'BBT'
	},
	{
		'id': 7915,
		'name': 'SPDR S&P 500 ETF tokenized stock FTX',
		'slug': 'spdr-sp-500-etf-tokenized-stock-ftx',
		'symbol': 'SPY'
	},
	{
		'id': 9615,
		'name': 'Polylastic',
		'slug': 'polylastic',
		'symbol': 'POLX'
	},
	{
		'id': 22670,
		'name': 'LunaOne',
		'slug': 'lunaone',
		'symbol': 'XLN'
	},
	{
		'id': 9998,
		'name': 'Unicly',
		'slug': 'unicly',
		'symbol': 'UNIC'
	},
	{
		'id': 21917,
		'name': 'Pixie',
		'slug': 'pixie',
		'symbol': 'PIX'
	},
	{
		'id': 16943,
		'name': 'Tomb Shares',
		'slug': 'tomb-shares',
		'symbol': 'TSHARE'
	},
	{
		'id': 22598,
		'name': 'AGAME',
		'slug': 'agame',
		'symbol': 'AG'
	},
	{
		'id': 3073,
		'name': 'Esports Token',
		'slug': 'esports-token',
		'symbol': 'EST'
	},
	{
		'id': 12735,
		'name': 'Piggy Finance',
		'slug': 'piggy-finance',
		'symbol': 'PIGGY'
	},
	{
		'id': 22303,
		'name': 'Yeon',
		'slug': 'yeon',
		'symbol': 'YEON'
	},
	{
		'id': 12329,
		'name': 'DBX',
		'slug': 'dbx',
		'symbol': 'DBX'
	},
	{
		'id': 10275,
		'name': 'Catgirl',
		'slug': 'catgirl',
		'symbol': 'CATGIRL'
	},
	{
		'id': 23210,
		'name': 'Dash 2 Trade',
		'slug': 'dash-trade',
		'symbol': 'D2T'
	},
	{
		'id': 19592,
		'name': 'Cardiocoin',
		'slug': 'cardiocoin',
		'symbol': 'CRDC'
	},
	{
		'id': 22133,
		'name': 'NetZero',
		'slug': 'nzero',
		'symbol': 'NZERO'
	},
	{
		'id': 22776,
		'name': 'CUBIX',
		'slug': 'cubix',
		'symbol': 'CUBIX'
	},
	{
		'id': 22001,
		'name': 'Sonne Finance',
		'slug': 'sonne-finance',
		'symbol': 'SONNE'
	},
	{
		'id': 20633,
		'name': 'MyOwnItem',
		'slug': 'myownitem-v2',
		'symbol': 'MOI'
	},
	{
		'id': 17987,
		'name': 'OSK',
		'slug': 'osk',
		'symbol': 'OSK'
	},
	{
		'id': 8136,
		'name': 'WAXE',
		'slug': 'waxe',
		'symbol': 'WAXE'
	},
	{
		'id': 12761,
		'name': 'Angle',
		'slug': 'angle',
		'symbol': 'ANGLE'
	},
	{
		'id': 19081,
		'name': 'Wrapped IoTeX',
		'slug': 'wrapped-iotex',
		'symbol': 'WIOTX'
	},
	{
		'id': 15918,
		'name': 'Artube',
		'slug': 'artube',
		'symbol': 'ATT'
	},
	{
		'id': 20699,
		'name': 'BlueBenx',
		'slug': 'bluebenx',
		'symbol': 'BENX'
	},
	{
		'id': 19843,
		'name': 'ApeX Protocol',
		'slug': 'apex-token',
		'symbol': 'APEX'
	},
	{
		'id': 23139,
		'name': 'Arora',
		'slug': 'arora',
		'symbol': 'AROR'
	},
	{
		'id': 18082,
		'name': 'Marshall Inu',
		'slug': 'marshall-rogan-inu',
		'symbol': 'MRI'
	},
	{
		'id': 9437,
		'name': 'CherrySwap',
		'slug': 'cherryswap',
		'symbol': 'CHE'
	},
	{
		'id': 15140,
		'name': 'EVERY GAME',
		'slug': 'every-game',
		'symbol': 'EGAME'
	},
	{
		'id': 12308,
		'name': 'Legion Network',
		'slug': 'legion-network',
		'symbol': 'LGX'
	},
	{
		'id': 20201,
		'name': 'GoMeat',
		'slug': 'gomeat',
		'symbol': 'GOMT'
	},
	{
		'id': 23267,
		'name': 'Not Financial Advice',
		'slug': 'not-financial-advice',
		'symbol': 'NFAI'
	},
	{
		'id': 12228,
		'name': 'EnterDAO',
		'slug': 'enterdao',
		'symbol': 'ENTR'
	},
	{
		'id': 15769,
		'name': 'Aimedis',
		'slug': 'aimedis',
		'symbol': 'AIMX'
	},
	{
		'id': 17630,
		'name': 'Kilo Shiba Inu',
		'slug': 'kilo-shiba-inu',
		'symbol': 'KSHIB'
	},
	{
		'id': 22290,
		'name': 'Ditto Staked Aptos',
		'slug': 'ditto-staked-aptos',
		'symbol': 'stAPT'
	},
	{
		'id': 22680,
		'name': 'DinoLFG',
		'slug': 'dinolfg',
		'symbol': 'DINO'
	},
	{
		'id': 22880,
		'name': 'IPOR',
		'slug': 'ipor',
		'symbol': 'IPOR'
	},
	{
		'id': 22725,
		'name': 'VICUNA',
		'slug': 'vicuna',
		'symbol': 'VINA'
	},
	{
		'id': 17601,
		'name': 'ONINO',
		'slug': 'oni-token',
		'symbol': 'ONI'
	},
	{
		'id': 21371,
		'name': 'DRAC Network',
		'slug': 'drac-token',
		'symbol': 'DRAC'
	},
	{
		'id': 19685,
		'name': 'Protocon',
		'slug': 'protocon',
		'symbol': 'PEN'
	},
	{
		'id': 16519,
		'name': 'MM Finance (Cronos)',
		'slug': 'mm-finance',
		'symbol': 'MMF'
	},
	{
		'id': 22574,
		'name': 'ECOx',
		'slug': 'ecox',
		'symbol': 'ECOX'
	},
	{
		'id': 4674,
		'name': 'Whole Network',
		'slug': 'whole-network',
		'symbol': 'NODE'
	},
	{
		'id': 8270,
		'name': 'Gera Coin',
		'slug': 'gera-coin',
		'symbol': 'GERA'
	},
	{
		'id': 22642,
		'name': 'ASAN VERSE',
		'slug': 'asan-verse',
		'symbol': 'ASAN'
	},
	{
		'id': 23082,
		'name': 'TEMDAO',
		'slug': 'temdao',
		'symbol': 'TEM'
	},
	{
		'id': 16868,
		'name': 'GenesysGo Shadow',
		'slug': 'genesysgo-shadow',
		'symbol': 'SHDW'
	},
	{
		'id': 22630,
		'name': 'Rebuschain',
		'slug': 'rebuschain',
		'symbol': 'REBUS'
	},
	{
		'id': 18243,
		'name': 'PlatinX',
		'slug': 'platinx',
		'symbol': 'PTX'
	},
	{
		'id': 12598,
		'name': 'Street Runner NFT',
		'slug': 'street-runner-nft',
		'symbol': 'SRG'
	},
	{
		'id': 18367,
		'name': 'CROWD',
		'slug': 'crowd',
		'symbol': 'CWD'
	},
	{
		'id': 16602,
		'name': 'sETH2',
		'slug': 'seth2',
		'symbol': 'SETH2'
	},
	{
		'id': 22322,
		'name': 'Die Protocol',
		'slug': 'die-protocol',
		'symbol': 'DIE'
	},
	{
		'id': 21495,
		'name': 'Orbit Bridge Klaytn USDC',
		'slug': 'orbit-bridge-klaytn-usdc',
		'symbol': 'OUSDC'
	},
	{
		'id': 18435,
		'name': 'Urfaspor Token',
		'slug': 'urfaspor-token',
		'symbol': 'URFA'
	},
	{
		'id': 10854,
		'name': 'Railgun',
		'slug': 'railgun',
		'symbol': 'RAIL'
	},
	{
		'id': 15840,
		'name': 'Stamen Tellus Token',
		'slug': 'stt',
		'symbol': 'STT'
	},
	{
		'id': 21077,
		'name': 'ChangeX',
		'slug': 'changex',
		'symbol': 'CHANGE'
	},
	{
		'id': 20603,
		'name': 'Malinka',
		'slug': 'malinka',
		'symbol': 'MLNK'
	},
	{
		'id': 10237,
		'name': 'QiDao',
		'slug': 'qidao',
		'symbol': 'QI'
	},
	{
		'id': 3610,
		'name': 'Micromines',
		'slug': 'micromines',
		'symbol': 'MICRO'
	},
	{
		'id': 7396,
		'name': 'r/CryptoCurrency Moons',
		'slug': 'moon',
		'symbol': 'MOON'
	},
	{
		'id': 17444,
		'name': 'Froyo Games',
		'slug': 'froyo-games',
		'symbol': 'FROYO'
	},
	{
		'id': 9586,
		'name': 'PRIVATEUM INITIATIVE',
		'slug': 'privateum-initiative',
		'symbol': 'PRI'
	},
	{
		'id': 15922,
		'name': 'New Order',
		'slug': 'new-order',
		'symbol': 'NEWO'
	},
	{
		'id': 21924,
		'name': 'Mad Hatter Society',
		'slug': 'mad-hatter-society',
		'symbol': 'MADHAT'
	},
	{
		'id': 15789,
		'name': 'ThorFi',
		'slug': 'thor',
		'symbol': 'THOR'
	},
	{
		'id': 21018,
		'name': 'Erth Point',
		'slug': 'erth-point',
		'symbol': 'ERTH'
	},
	{
		'id': 19495,
		'name': 'Edain',
		'slug': 'edain',
		'symbol': 'EAI'
	},
	{
		'id': 15759,
		'name': 'AAG',
		'slug': 'aag-ventures',
		'symbol': 'AAG'
	},
	{
		'id': 21123,
		'name': 'WATTTON',
		'slug': 'wattton',
		'symbol': 'WATT'
	},
	{
		'id': 17062,
		'name': 'Kenshi',
		'slug': 'kenshi',
		'symbol': 'KENSHI'
	},
	{
		'id': 12071,
		'name': 'XcelDefi',
		'slug': 'xcel-swap',
		'symbol': 'XLD'
	},
	{
		'id': 17849,
		'name': 'RankerDAO',
		'slug': 'rankerdao',
		'symbol': 'RANKER'
	},
	{
		'id': 23174,
		'name': 'Storepay',
		'slug': 'storepay',
		'symbol': 'SPC'
	},
	{
		'id': 7586,
		'name': 'Yearn Classic Finance',
		'slug': 'yearn-classic-finance',
		'symbol': 'EARN'
	},
	{
		'id': 21154,
		'name': 'Monopoly Millionaire Control',
		'slug': 'monopoly-millionaire-control',
		'symbol': 'MMC'
	},
	{
		'id': 20846,
		'name': 'Crypto International',
		'slug': 'crypto-international',
		'symbol': 'CRI'
	},
	{
		'id': 16279,
		'name': 'Changer',
		'slug': 'changer',
		'symbol': 'CNG'
	},
	{
		'id': 11931,
		'name': 'Traders coin',
		'slug': 'traders-coin',
		'symbol': 'TRDC'
	},
	{
		'id': 19393,
		'name': 'Crogecoin',
		'slug': 'crogecoin',
		'symbol': 'CROGE'
	},
	{
		'id': 14363,
		'name': 'Pancake Games',
		'slug': 'pancake-games',
		'symbol': 'GCAKE'
	},
	{
		'id': 17817,
		'name': 'Colony Network Token',
		'slug': 'colony-network-token',
		'symbol': 'CLNY'
	},
	{
		'id': 23146,
		'name': 'HanChain',
		'slug': 'hanchain',
		'symbol': 'HAN'
	},
	{
		'id': 22641,
		'name': 'Fileshare Platform',
		'slug': 'fileshare-platform',
		'symbol': 'FSC'
	},
	{
		'id': 12461,
		'name': 'Relictum Pro',
		'slug': 'relictum-pro',
		'symbol': 'GTN'
	},
	{
		'id': 4916,
		'name': 'Modex',
		'slug': 'modex',
		'symbol': 'MODEX'
	},
	{
		'id': 22795,
		'name': 'FanCoin®',
		'slug': 'football-fan',
		'symbol': 'FNC'
	},
	{
		'id': 18839,
		'name': 'Orbcity',
		'slug': 'orbcity',
		'symbol': 'ORB'
	},
	{
		'id': 15947,
		'name': 'SoldierNodes',
		'slug': 'soldiernodes',
		'symbol': 'SLD'
	},
	{
		'id': 20315,
		'name': 'LeisureMeta',
		'slug': 'leisuremeta',
		'symbol': 'LM'
	},
	{
		'id': 9131,
		'name': 'Alchemist',
		'slug': 'alchemist',
		'symbol': 'MIST'
	},
	{
		'id': 19238,
		'name': 'EdenLoop',
		'slug': 'edenloop',
		'symbol': 'ELT'
	},
	{
		'id': 19621,
		'name': 'Cosplay Token',
		'slug': 'cosplay-token',
		'symbol': 'COT'
	},
	{
		'id': 21415,
		'name': 'Wrapped WDOGE',
		'slug': 'wrapped-wdoge',
		'symbol': 'WWDOGE'
	},
	{
		'id': 22009,
		'name': 'WEB5 Inu',
		'slug': 'web5-inu',
		'symbol': 'WEB5'
	},
	{
		'id': 17084,
		'name': 'Quantum',
		'slug': 'quantum-tech',
		'symbol': 'QUA'
	},
	{
		'id': 17410,
		'name': 'Thoreum V3',
		'slug': 'thoreum-v2',
		'symbol': 'THOREUM'
	},
	{
		'id': 11552,
		'name': 'Talken',
		'slug': 'talken',
		'symbol': 'TALK'
	},
	{
		'id': 8476,
		'name': 'Premia',
		'slug': 'premia',
		'symbol': 'PREMIA'
	},
	{
		'id': 15480,
		'name': 'Umami Finance',
		'slug': 'umami-finance',
		'symbol': 'UMAMI'
	},
	{
		'id': 16253,
		'name': 'Tr3zor',
		'slug': 'tr3zor',
		'symbol': 'TR3'
	},
	{
		'id': 21947,
		'name': 'Egg N Partners',
		'slug': 'egg-n-partners',
		'symbol': 'EGGT'
	},
	{
		'id': 20357,
		'name': 'BOX',
		'slug': 'box',
		'symbol': 'BOX'
	},
	{
		'id': 6053,
		'name': 'Mineral',
		'slug': 'mineral',
		'symbol': 'MNR'
	},
	{
		'id': 11726,
		'name': 'SideShift Token',
		'slug': 'sideshift-token',
		'symbol': 'XAI'
	},
	{
		'id': 19326,
		'name': 'Xiden',
		'slug': 'xiden',
		'symbol': 'XDEN'
	},
	{
		'id': 21741,
		'name': 'Mechaverse',
		'slug': 'mechaverse',
		'symbol': 'MC'
	},
	{
		'id': 21361,
		'name': 'Streakk',
		'slug': 'streakk',
		'symbol': 'STKK'
	},
	{
		'id': 14734,
		'name': 'Arker',
		'slug': 'arker',
		'symbol': 'ARKER'
	},
	{
		'id': 17169,
		'name': 'Betswap.gg',
		'slug': 'betswap-gg',
		'symbol': 'BSGG'
	},
	{
		'id': 8232,
		'name': 'UniDex',
		'slug': 'unidex',
		'symbol': 'UNIDX'
	},
	{
		'id': 22306,
		'name': 'EFK Token',
		'slug': 'efk-token',
		'symbol': 'EFK'
	},
	{
		'id': 15682,
		'name': 'MMM7',
		'slug': 'mmm7',
		'symbol': 'MMM7'
	},
	{
		'id': 21365,
		'name': 'Aerarium Fi',
		'slug': 'aerarium-fi',
		'symbol': 'AERA'
	},
	{
		'id': 9771,
		'name': 'LavaX Labs',
		'slug': 'launchx',
		'symbol': 'LAVAX'
	},
	{
		'id': 23233,
		'name': 'Redpanda Earth (V2)',
		'slug': 'redpanda-v2',
		'symbol': 'REDPANDA'
	},
	{
		'id': 7545,
		'name': 'Jointer',
		'slug': 'jointer',
		'symbol': 'JNTR'
	},
	{
		'id': 12678,
		'name': 'FireStarter',
		'slug': 'firestarter',
		'symbol': 'FLAME'
	},
	{
		'id': 17610,
		'name': 'Wrapped Ampleforth',
		'slug': 'wrapped-ampleforth',
		'symbol': 'WAMPL'
	},
	{
		'id': 16794,
		'name': 'Alpha Coin',
		'slug': 'alpha',
		'symbol': 'ALPHA'
	},
	{
		'id': 17535,
		'name': 'UXD Stablecoin',
		'slug': 'uxd-stablecoin',
		'symbol': 'UXD'
	},
	{
		'id': 11036,
		'name': 'Alkimi',
		'slug': 'alkimi',
		'symbol': '$ADS'
	},
	{
		'id': 23112,
		'name': 'Kabosu Inu',
		'slug': 'kabosu-inu',
		'symbol': 'KABOSU INU'
	},
	{
		'id': 10929,
		'name': 'ZoidPay',
		'slug': 'zoidpay',
		'symbol': 'ZPAY'
	},
	{
		'id': 19266,
		'name': 'Virtual Tourist',
		'slug': 'virtual-tourist',
		'symbol': 'VT'
	},
	{
		'id': 23268,
		'name': 'Kingdom',
		'slug': 'kingdom-token',
		'symbol': 'KNDM'
	},
	{
		'id': 7778,
		'name': 'Metis',
		'slug': 'metis',
		'symbol': 'MTS'
	},
	{
		'id': 19787,
		'name': 'XRUN',
		'slug': 'xrun',
		'symbol': 'XRUN'
	},
	{
		'id': 6297,
		'name': 'Proof Of Liquidity',
		'slug': 'proof-of-liquidity',
		'symbol': 'POL'
	},
	{
		'id': 19164,
		'name': 'Altered State Token',
		'slug': 'altered-state-token',
		'symbol': 'ASTO'
	},
	{
		'id': 20502,
		'name': 'Traxx',
		'slug': 'traxx',
		'symbol': 'TRAXX'
	},
	{
		'id': 12591,
		'name': 'LunaChow',
		'slug': 'lunachow',
		'symbol': 'LUCHOW'
	},
	{
		'id': 23186,
		'name': 'PayBit',
		'slug': 'paybit',
		'symbol': 'PAYBIT'
	},
	{
		'id': 8558,
		'name': 'BT.Finance',
		'slug': 'bt-finance',
		'symbol': 'BT'
	},
	{
		'id': 16018,
		'name': 'DiamondQ',
		'slug': 'diamondq',
		'symbol': 'DIQ'
	},
	{
		'id': 23266,
		'name': 'Crypto tex',
		'slug': 'crypto-tex',
		'symbol': 'CTEX'
	},
	{
		'id': 20721,
		'name': 'Bitcoin Avalanche Bridged',
		'slug': 'bitcoin-avalanche-bridged',
		'symbol': 'BTC.b'
	},
	{
		'id': 20263,
		'name': 'Bikerush',
		'slug': 'bikerush',
		'symbol': 'BRT'
	},
	{
		'id': 20490,
		'name': 'ROGin AI',
		'slug': 'rogin-ai',
		'symbol': 'ROG'
	},
	{
		'id': 13708,
		'name': 'BFK Warzone',
		'slug': 'bfk-warzone',
		'symbol': 'BFK'
	},
	{
		'id': 18558,
		'name': 'Gateway Protocol',
		'slug': 'gateway-protocol',
		'symbol': 'GWP'
	},
	{
		'id': 7336,
		'name': 'Index Cooperative',
		'slug': 'index-cooperative',
		'symbol': 'INDEX'
	},
	{
		'id': 16847,
		'name': 'VeUSD',
		'slug': 'veusd',
		'symbol': 'VEUSD'
	},
	{
		'id': 19202,
		'name': 'Kusunoki Samurai',
		'slug': 'kusunoki-samurai',
		'symbol': 'KUSUNOKI'
	},
	{
		'id': 12942,
		'name': 'THORSwap',
		'slug': 'thorswap',
		'symbol': 'THOR'
	},
	{
		'id': 11113,
		'name': 'Unipilot',
		'slug': 'unipilot',
		'symbol': 'PILOT'
	},
	{
		'id': 18531,
		'name': 'Wizardia',
		'slug': 'wizardia',
		'symbol': 'WZRD'
	},
	{
		'id': 16126,
		'name': 'Travel Coin',
		'slug': 'travel-coin',
		'symbol': 'TCOIN'
	},
	{
		'id': 20195,
		'name': 'GRN',
		'slug': 'grn',
		'symbol': 'G'
	},
	{
		'id': 23068,
		'name': 'Murasaki',
		'slug': 'murasaki',
		'symbol': 'MURA'
	},
	{
		'id': 16606,
		'name': 'Gas DAO',
		'slug': 'gas-dao',
		'symbol': 'GAS'
	},
	{
		'id': 7965,
		'name': 'Venus XRP',
		'slug': 'venus-xrp',
		'symbol': 'vXRP'
	},
	{
		'id': 15098,
		'name': 'Robo Inu Finance',
		'slug': 'robo-inu-finance',
		'symbol': 'RBIF'
	},
	{
		'id': 22309,
		'name': 'Sweeptoken',
		'slug': 'sweeptoken',
		'symbol': 'SWEEP'
	},
	{
		'id': 19912,
		'name': 'Will Liu',
		'slug': 'will-liu',
		'symbol': 'LIU'
	},
	{
		'id': 12414,
		'name': 'MRHB DeFi Network',
		'slug': 'marhabadefi',
		'symbol': 'MRHB'
	},
	{
		'id': 20203,
		'name': 'Fusotao Protocol',
		'slug': 'fusotao-protocol',
		'symbol': 'TAO'
	},
	{
		'id': 9504,
		'name': 'NAOS Finance',
		'slug': 'naos-finance',
		'symbol': 'NAOS'
	},
	{
		'id': 17555,
		'name': 'KridaFans',
		'slug': 'kridafans',
		'symbol': 'KRIDA'
	},
	{
		'id': 16740,
		'name': 'SEOR Network',
		'slug': 'seor',
		'symbol': 'SEOR'
	},
	{
		'id': 9027,
		'name': 'Uhive',
		'slug': 'uhive',
		'symbol': 'HVE2'
	},
	{
		'id': 9073,
		'name': 'Popsicle Finance',
		'slug': 'popsicle-finance',
		'symbol': 'ICE'
	},
	{
		'id': 12173,
		'name': 'Revuto',
		'slug': 'revuto',
		'symbol': 'REVU'
	},
	{
		'id': 18415,
		'name': 'Rubidium',
		'slug': 'rubidium',
		'symbol': 'RBD'
	},
	{
		'id': 9449,
		'name': 'Sienna (ERC20)',
		'slug': 'sienna-erc20',
		'symbol': 'wSIENNA'
	},
	{
		'id': 6213,
		'name': 'Global AEX Token',
		'slug': 'global-aex-token',
		'symbol': 'GAT'
	},
	{
		'id': 11368,
		'name': 'Feisty Doge NFT',
		'slug': 'feisty-doge-nft',
		'symbol': 'NFD'
	},
	{
		'id': 10904,
		'name': 'BunnyPark',
		'slug': 'bunnypark',
		'symbol': 'BP'
	},
	{
		'id': 21045,
		'name': 'Neoxa',
		'slug': 'neoxa',
		'symbol': 'NEOX'
	},
	{
		'id': 22759,
		'name': 'WJEWEL',
		'slug': 'wjewel',
		'symbol': 'WJEWEL'
	},
	{
		'id': 19351,
		'name': 'Planet NFT',
		'slug': 'planet-nft',
		'symbol': 'PNFT'
	},
	{
		'id': 20427,
		'name': 'QToken',
		'slug': 'lobstex-new',
		'symbol': 'QTO'
	},
	{
		'id': 22376,
		'name': 'Vemate',
		'slug': 'vemate',
		'symbol': 'VMT'
	},
	{
		'id': 23261,
		'name': 'Quontral',
		'slug': 'quontral',
		'symbol': 'QUON'
	},
	{
		'id': 22895,
		'name': 'WAHED PROJECTS LTD',
		'slug': 'wahed-projects',
		'symbol': 'WAHED'
	},
	{
		'id': 17859,
		'name': 'Teddy Doge',
		'slug': 'teddydoge',
		'symbol': 'Teddy V2'
	},
	{
		'id': 7718,
		'name': 'Combo',
		'slug': 'combo',
		'symbol': 'COMB'
	},
	{
		'id': 19189,
		'name': 'Lend Flare',
		'slug': 'lend-flare',
		'symbol': 'LFT'
	},
	{
		'id': 10455,
		'name': 'EQIFI',
		'slug': 'eqifi',
		'symbol': 'EQX'
	},
	{
		'id': 7619,
		'name': 'Bitcoiva',
		'slug': 'bitcoiva',
		'symbol': 'BCA'
	},
	{
		'id': 20850,
		'name': 'Trivians',
		'slug': 'trivians',
		'symbol': 'TRIVIA'
	},
	{
		'id': 12468,
		'name': 'Equilibrium Games',
		'slug': 'eq',
		'symbol': 'EQ'
	},
	{
		'id': 23228,
		'name': 'LIUX',
		'slug': 'liux',
		'symbol': 'LIUX'
	},
	{
		'id': 19771,
		'name': 'Gaming Stars',
		'slug': 'gaming-stars',
		'symbol': 'GAMES'
	},
	{
		'id': 13803,
		'name': 'Marinade',
		'slug': 'mnde',
		'symbol': 'MNDE'
	},
	{
		'id': 7126,
		'name': 'Giftedhands',
		'slug': 'giftedhands',
		'symbol': 'GHD'
	},
	{
		'id': 20778,
		'name': 'Chronicum',
		'slug': 'chronicum',
		'symbol': 'CHRO'
	},
	{
		'id': 19940,
		'name': 'Revenant',
		'slug': 'revenant',
		'symbol': 'GAMEFI'
	},
	{
		'id': 18519,
		'name': 'ASTRA Protocol',
		'slug': 'astra-protocol',
		'symbol': 'ASTRA'
	},
	{
		'id': 17212,
		'name': 'EVE Token',
		'slug': 'eve-exchange',
		'symbol': 'EVE'
	},
	{
		'id': 23027,
		'name': 'Zeniq',
		'slug': 'zeniq',
		'symbol': 'ZENIQ'
	},
	{
		'id': 21814,
		'name': 'Ookeenga',
		'slug': 'ookeenga',
		'symbol': 'OKG'
	},
	{
		'id': 17686,
		'name': 'Erugo World Coin',
		'slug': 'erugo-world-coin',
		'symbol': 'EWC'
	},
	{
		'id': 8524,
		'name': 'Wrapped Huobi Token',
		'slug': 'wrapped-huobi-token',
		'symbol': 'WHT'
	},
	{
		'id': 10183,
		'name': 'DeSpace Protocol',
		'slug': 'despace-protocol',
		'symbol': 'DES'
	},
	{
		'id': 22471,
		'name': 'BLUEART TOKEN',
		'slug': 'blueart-token',
		'symbol': 'BLA'
	},
	{
		'id': 13271,
		'name': 'QUARTZ',
		'slug': 'sandclock',
		'symbol': 'QUARTZ'
	},
	{
		'id': 20494,
		'name': 'Animal Farm Pigs',
		'slug': 'animal-farm-pigs',
		'symbol': 'AFP'
	},
	{
		'id': 18912,
		'name': 'RevolutionGames',
		'slug': 'revolutiongames',
		'symbol': 'RVLNG'
	},
	{
		'id': 22767,
		'name': 'Trillant',
		'slug': 'trillant',
		'symbol': 'TRI'
	},
	{
		'id': 22973,
		'name': 'Matchcup',
		'slug': 'matchcup',
		'symbol': 'MATCH'
	},
	{
		'id': 23118,
		'name': 'Web3Camp',
		'slug': 'web3camp',
		'symbol': '3P'
	},
	{
		'id': 13229,
		'name': 'PaintSwap',
		'slug': 'paintswap',
		'symbol': 'BRUSH'
	},
	{
		'id': 14133,
		'name': 'WAM',
		'slug': 'wam-app',
		'symbol': 'WAM'
	},
	{
		'id': 10833,
		'name': 'ADAX',
		'slug': 'adax',
		'symbol': 'ADAX'
	},
	{
		'id': 9604,
		'name': 'Privapp Network',
		'slug': 'privapp-network',
		'symbol': 'bPRIVA'
	},
	{
		'id': 11323,
		'name': 'Crypto Carbon Energy',
		'slug': 'crypto-carbon-energy',
		'symbol': 'CYCE'
	},
	{
		'id': 17974,
		'name': 'Byepix',
		'slug': 'byepix',
		'symbol': 'EPIX'
	},
	{
		'id': 17181,
		'name': 'Maia',
		'slug': 'maia',
		'symbol': 'MAIA'
	},
	{
		'id': 10526,
		'name': 'TribeOne',
		'slug': 'tribe-one',
		'symbol': 'HAKA'
	},
	{
		'id': 10935,
		'name': 'Aldrin',
		'slug': 'aldrin',
		'symbol': 'RIN'
	},
	{
		'id': 15575,
		'name': 'Plastiks',
		'slug': 'plastiks',
		'symbol': 'PLASTIK'
	},
	{
		'id': 17656,
		'name': 'Scrap',
		'slug': 'scrap',
		'symbol': 'SCRAP'
	},
	{
		'id': 11746,
		'name': 'Megatech',
		'slug': 'megatech',
		'symbol': 'MGT'
	},
	{
		'id': 12333,
		'name': 'DAO Invest',
		'slug': 'dao-invest',
		'symbol': 'VEST'
	},
	{
		'id': 21219,
		'name': 'Unidef',
		'slug': 'unidef',
		'symbol': 'U'
	},
	{
		'id': 16001,
		'name': 'DarkShield Games Studio',
		'slug': 'darkshield',
		'symbol': 'DKS'
	},
	{
		'id': 21279,
		'name': 'Scouthub',
		'slug': 'scouthub',
		'symbol': 'HUB'
	},
	{
		'id': 22391,
		'name': 'Magpie',
		'slug': 'magpie',
		'symbol': 'MGP'
	},
	{
		'id': 9533,
		'name': 'GreenTrust',
		'slug': 'greentrust',
		'symbol': 'GNT'
	},
	{
		'id': 15535,
		'name': 'Flux',
		'slug': 'flux-dao',
		'symbol': 'FLX'
	},
	{
		'id': 20864,
		'name': 'Delio DSP',
		'slug': 'delio-dsp',
		'symbol': 'DSP'
	},
	{
		'id': 23170,
		'name': 'Tender.fi',
		'slug': 'tender-fi',
		'symbol': 'TND'
	},
	{
		'id': 21288,
		'name': 'SAFE(AnWang)',
		'slug': 'safe-anwang',
		'symbol': 'SAFE'
	},
	{
		'id': 19130,
		'name': 'Seek Tiger',
		'slug': 'seek-tiger',
		'symbol': 'STI'
	},
	{
		'id': 17374,
		'name': 'Zamzam',
		'slug': 'zamzam',
		'symbol': 'ZAMZAM'
	},
	{
		'id': 6245,
		'name': 'SocialGood',
		'slug': 'socialgood',
		'symbol': 'SG'
	},
	{
		'id': 9783,
		'name': 'Roseon',
		'slug': 'roseon',
		'symbol': 'ROSN'
	},
	{
		'id': 12764,
		'name': 'KAINET',
		'slug': 'kainet',
		'symbol': 'KAINET'
	},
	{
		'id': 11283,
		'name': 'Ryoshis Vision',
		'slug': 'ryoshis-vision',
		'symbol': 'RYOSHI'
	},
	{
		'id': 8272,
		'name': 'THORChain (ERC20)',
		'slug': 'thorchain-erc20',
		'symbol': 'RUNE'
	},
	{
		'id': 9799,
		'name': 'SafeZone',
		'slug': 'safezone',
		'symbol': 'SAFEZONE'
	},
	{
		'id': 19622,
		'name': 'Kalissa',
		'slug': 'kalissa-v2',
		'symbol': 'KALI'
	},
	{
		'id': 16399,
		'name': 'Coreum',
		'slug': 'coreum',
		'symbol': 'CORE'
	},
	{
		'id': 15476,
		'name': 'LUXY',
		'slug': 'luxy',
		'symbol': 'LUXY'
	},
	{
		'id': 8829,
		'name': 'Pig Finance',
		'slug': 'pig-finance',
		'symbol': 'PIG'
	},
	{
		'id': 15266,
		'name': 'Metagalaxy Land',
		'slug': 'metagalaxy-land',
		'symbol': 'MEGALAND'
	},
	{
		'id': 21342,
		'name': 'Shita-kiri Suzume',
		'slug': 'shita-kiri-suzume',
		'symbol': 'SUZUME'
	},
	{
		'id': 15857,
		'name': 'QUASA',
		'slug': 'quasa',
		'symbol': 'QUA'
	},
	{
		'id': 20323,
		'name': 'exeno coin',
		'slug': 'exeno-coin',
		'symbol': 'EXN'
	},
	{
		'id': 18761,
		'name': 'LoopNetwork',
		'slug': 'loopnetwork',
		'symbol': 'LOOP'
	},
	{
		'id': 11190,
		'name': 'KittyCake',
		'slug': 'kittycake',
		'symbol': 'KCAKE'
	},
	{
		'id': 22129,
		'name': 'Icosa',
		'slug': 'icosa',
		'symbol': 'ICSA'
	},
	{
		'id': 16894,
		'name': 'Solcial',
		'slug': 'solcial',
		'symbol': 'SLCL'
	},
	{
		'id': 17076,
		'name': 'Wonderful Memories',
		'slug': 'wrapped-memory',
		'symbol': 'WMEMO'
	},
	{
		'id': 16983,
		'name': 'Moola Celo USD',
		'slug': 'moola-celo-usd',
		'symbol': 'mCUSD'
	},
	{
		'id': 22443,
		'name': 'Italian National Football Team Fan Token',
		'slug': 'italian-national-football-team-fan-token',
		'symbol': 'ITA'
	},
	{
		'id': 11664,
		'name': 'YAY Games',
		'slug': 'yay-games',
		'symbol': 'YAY'
	},
	{
		'id': 5648,
		'name': 'BlockNoteX',
		'slug': 'blocknotex',
		'symbol': 'BNOX'
	},
	{
		'id': 17231,
		'name': 'Synesis One',
		'slug': 'synesis-one',
		'symbol': 'SNS'
	},
	{
		'id': 11869,
		'name': 'Realm',
		'slug': 'realm',
		'symbol': 'REALM'
	},
	{
		'id': 23310,
		'name': 'fomobsc',
		'slug': 'fomobsc',
		'symbol': 'FOMO'
	},
	{
		'id': 22587,
		'name': 'AMAUROT',
		'slug': 'amaurot',
		'symbol': 'AMA'
	},
	{
		'id': 8227,
		'name': 'Connect Financial',
		'slug': 'connect-financial',
		'symbol': 'CNFI'
	},
	{
		'id': 18726,
		'name': 'Spool DAO',
		'slug': 'spool-dao',
		'symbol': 'SPOOL'
	},
	{
		'id': 15326,
		'name': 'XIDR',
		'slug': 'straitsx-indonesia-rupiah',
		'symbol': 'XIDR'
	},
	{
		'id': 16821,
		'name': 'Mean DAO',
		'slug': 'meanfi',
		'symbol': 'MEAN'
	},
	{
		'id': 19536,
		'name': 'LynKey',
		'slug': 'lynkey',
		'symbol': 'LYNK'
	},
	{
		'id': 17794,
		'name': 'ParagonsDAO',
		'slug': 'paragonsdao',
		'symbol': 'PDT'
	},
	{
		'id': 7044,
		'name': 'Zyro',
		'slug': 'zyro',
		'symbol': 'ZYRO'
	},
	{
		'id': 12895,
		'name': 'Lil Floki',
		'slug': 'lil-floki',
		'symbol': 'LILFLOKI'
	},
	{
		'id': 15185,
		'name': 'Kujira',
		'slug': 'kujira',
		'symbol': 'KUJI'
	},
	{
		'id': 20533,
		'name': 'I will poop it NFT',
		'slug': 'i-will-poop-it-nft',
		'symbol': 'SHIT'
	},
	{
		'id': 8711,
		'name': 'Pando',
		'slug': 'pando',
		'symbol': 'PANDO'
	},
	{
		'id': 18654,
		'name': 'METALANDZ',
		'slug': 'metalandz',
		'symbol': '$METAZ'
	},
	{
		'id': 21984,
		'name': 'Collie Inu',
		'slug': 'collie-inu',
		'symbol': 'COLLIE'
	},
	{
		'id': 11131,
		'name': 'OEC ETH',
		'slug': 'ethk',
		'symbol': 'ETHK'
	},
	{
		'id': 21600,
		'name': 'Battle Infinity',
		'slug': 'battle-infinity',
		'symbol': 'IBAT'
	},
	{
		'id': 22550,
		'name': 'FLIGHTCLUPCOIN',
		'slug': 'flightclupcoin',
		'symbol': 'FLIGHT'
	},
	{
		'id': 14932,
		'name': 'CyOp Protocol',
		'slug': 'cyop-protocol',
		'symbol': 'CYOP'
	},
	{
		'id': 23183,
		'name': 'SHIBONK',
		'slug': 'shibonk-',
		'symbol': 'SBONK'
	},
	{
		'id': 15563,
		'name': 'Cornucopias',
		'slug': 'cornucopias',
		'symbol': 'COPI'
	},
	{
		'id': 4568,
		'name': 'JFIN',
		'slug': 'jfin',
		'symbol': 'JFC'
	},
	{
		'id': 11088,
		'name': 'Enjinstarter',
		'slug': 'enjinstarter',
		'symbol': 'EJS'
	},
	{
		'id': 18009,
		'name': 'Shera Tokens',
		'slug': 'shera-token',
		'symbol': 'SHR'
	},
	{
		'id': 22853,
		'name': 'Xrp Classic',
		'slug': 'xrp-classic-token',
		'symbol': 'XRPC'
	},
	{
		'id': 15056,
		'name': 'Wolf Game Wool',
		'slug': 'wolf-game-wool',
		'symbol': 'WOOL'
	},
	{
		'id': 9065,
		'name': 'Realfinance Network',
		'slug': 'realfinance-network',
		'symbol': 'REFI'
	},
	{
		'id': 18699,
		'name': 'Shade Protocol',
		'slug': 'shade-protocol',
		'symbol': 'SHD'
	},
	{
		'id': 15440,
		'name': 'Txbit Token',
		'slug': 'txbit-token',
		'symbol': 'TXBIT'
	},
	{
		'id': 9180,
		'name': 'SYL',
		'slug': 'xsl-labs',
		'symbol': 'SYL'
	},
	{
		'id': 11670,
		'name': 'DeFi Warrior (FIWA)',
		'slug': 'defi-warrior',
		'symbol': 'FIWA'
	},
	{
		'id': 14391,
		'name': 'Dali',
		'slug': 'dali',
		'symbol': 'DALI'
	},
	{
		'id': 16135,
		'name': 'Shib Generating',
		'slug': 'shib-generating',
		'symbol': 'SHG'
	},
	{
		'id': 12872,
		'name': 'Kishimoto',
		'slug': 'kishimoto-inu',
		'symbol': 'KISHIMOTO'
	},
	{
		'id': 10217,
		'name': 'Cykura',
		'slug': 'cyclos',
		'symbol': 'CYS'
	},
	{
		'id': 15959,
		'name': 'Vader Protocol',
		'slug': 'vader-protocol',
		'symbol': 'VADER'
	},
	{
		'id': 21911,
		'name': 'Virtual Reality Game World',
		'slug': 'virtual-reality-game-world',
		'symbol': 'VRGW'
	},
	{
		'id': 20401,
		'name': 'Cryptostone',
		'slug': 'cryptostone',
		'symbol': 'CPS'
	},
	{
		'id': 21373,
		'name': '3air',
		'slug': '3air',
		'symbol': '3AIR'
	},
	{
		'id': 15348,
		'name': 'Astra Guild Ventures',
		'slug': 'astra-guild-ventures',
		'symbol': 'AGV'
	},
	{
		'id': 18436,
		'name': 'Ginoa',
		'slug': 'ginoa',
		'symbol': 'GINOA'
	},
	{
		'id': 21330,
		'name': 'HAY',
		'slug': 'helio-money',
		'symbol': 'HAY'
	},
	{
		'id': 21017,
		'name': 'Hero Blaze: Three Kingdoms',
		'slug': 'hero-blaze-three-kingdoms',
		'symbol': 'MUDOL2'
	},
	{
		'id': 9388,
		'name': 'Sienna',
		'slug': 'sienna',
		'symbol': 'SIENNA'
	},
	{
		'id': 19188,
		'name': 'STREETH',
		'slug': 'streeth',
		'symbol': 'STREETH'
	},
	{
		'id': 9595,
		'name': 'CaliCoin',
		'slug': 'calicoin',
		'symbol': 'CALI'
	},
	{
		'id': 20143,
		'name': 'Heavenland',
		'slug': 'heavenland',
		'symbol': 'HTO'
	},
	{
		'id': 23227,
		'name': 'Xi Token',
		'slug': 'xi-token',
		'symbol': 'XI'
	},
	{
		'id': 21830,
		'name': 'JEN COIN',
		'slug': 'jen-coin',
		'symbol': 'JEN'
	},
	{
		'id': 21400,
		'name': 'Little Rabbit (V2)',
		'slug': 'little-rabbit-v2',
		'symbol': 'LTRBT'
	},
	{
		'id': 9002,
		'name': 'Busy DAO',
		'slug': 'busy',
		'symbol': 'BUSY'
	},
	{
		'id': 11168,
		'name': 'Vent Finance',
		'slug': 'vent-finance',
		'symbol': 'VENT'
	},
	{
		'id': 16168,
		'name': 'Nitro League',
		'slug': 'nitro-league',
		'symbol': 'NITRO'
	},
	{
		'id': 19973,
		'name': 'Metavault Trade',
		'slug': 'metavault-trade',
		'symbol': 'MVX'
	},
	{
		'id': 23244,
		'name': 'Ofero',
		'slug': 'ofero-network',
		'symbol': 'OFE'
	},
	{
		'id': 19376,
		'name': 'Bitpaid Token',
		'slug': 'bitpaid-token',
		'symbol': 'BTP'
	},
	{
		'id': 12884,
		'name': 'SubDAO',
		'slug': 'subdao',
		'symbol': 'GOV'
	},
	{
		'id': 12772,
		'name': 'Derived',
		'slug': 'derived',
		'symbol': 'DVDX'
	},
	{
		'id': 21542,
		'name': 'Mundocrypto',
		'slug': 'mundocrypto',
		'symbol': 'MCT'
	},
	{
		'id': 6898,
		'name': 'JackPool.finance',
		'slug': 'jackpool-finance',
		'symbol': 'JFI'
	},
	{
		'id': 14227,
		'name': 'Crypto Media Network',
		'slug': 'crypto-media-network',
		'symbol': 'CMN'
	},
	{
		'id': 21207,
		'name': 'MicroChains Gov Token',
		'slug': 'microchains-gov-token',
		'symbol': 'MCG'
	},
	{
		'id': 17445,
		'name': 'LORDS',
		'slug': 'lords',
		'symbol': 'LORDS'
	},
	{
		'id': 22316,
		'name': 'BINGO',
		'slug': 'bingo',
		'symbol': 'BG'
	},
	{
		'id': 13637,
		'name': 'XRdoge',
		'slug': 'xrdoge',
		'symbol': 'XRDOGE'
	},
	{
		'id': 20950,
		'name': 'MirArc Chain',
		'slug': 'mirarc-chain',
		'symbol': 'MAT'
	},
	{
		'id': 15428,
		'name': 'Euro Shiba Inu',
		'slug': 'euro-shiba-inu',
		'symbol': 'EShib'
	},
	{
		'id': 19588,
		'name': 'Medamon',
		'slug': 'medamon',
		'symbol': 'MON'
	},
	{
		'id': 10832,
		'name': 'Etherlite',
		'slug': 'etherlite',
		'symbol': 'ETL'
	},
	{
		'id': 16675,
		'name': 'Ctomorrow Platform',
		'slug': 'ctomorrow-platform',
		'symbol': 'CTP'
	},
	{
		'id': 16643,
		'name': 'Hubble Protocol',
		'slug': 'hubble-protocol',
		'symbol': 'HBB'
	},
	{
		'id': 15223,
		'name': 'India Coin',
		'slug': 'india-coin-world',
		'symbol': 'XINDIA'
	},
	{
		'id': 19397,
		'name': 'DeFi Kingdoms Crystal',
		'slug': 'defi-kingdoms-crystal',
		'symbol': 'CRYSTAL'
	},
	{
		'id': 14320,
		'name': 'i Money Crypto',
		'slug': 'i-money-crypto',
		'symbol': 'IMC'
	},
	{
		'id': 8284,
		'name': 'TokenAsset',
		'slug': 'tokenasset',
		'symbol': 'NTB'
	},
	{
		'id': 14446,
		'name': 'Laqira Protocol',
		'slug': 'laqira-protocol',
		'symbol': 'LQR'
	},
	{
		'id': 20232,
		'name': 'BH Network',
		'slug': 'bh-network',
		'symbol': 'BHAT'
	},
	{
		'id': 11392,
		'name': 'Moon Rabbit',
		'slug': 'moon-rabbit',
		'symbol': 'AAA'
	},
	{
		'id': 19033,
		'name': 'Altrucoin',
		'slug': 'altrucoin-new',
		'symbol': 'ALTRU'
	},
	{
		'id': 21563,
		'name': 'Seedify NFT Space',
		'slug': 'seedify-snfts',
		'symbol': 'SNFTS'
	},
	{
		'id': 23313,
		'name': 'Tupan',
		'slug': 'tupan',
		'symbol': 'TUPAN'
	},
	{
		'id': 20547,
		'name': 'Hop Protocol',
		'slug': 'hop-exchange',
		'symbol': 'HOP'
	},
	{
		'id': 18005,
		'name': 'KingdomX',
		'slug': 'kingdomx',
		'symbol': 'KT'
	},
	{
		'id': 16837,
		'name': 'Covenant',
		'slug': 'covenant-child',
		'symbol': 'COVN'
	},
	{
		'id': 20112,
		'name': 'ASSAPLAY',
		'slug': 'assaplay',
		'symbol': 'ASSA'
	},
	{
		'id': 22002,
		'name': 'Starfish Finance',
		'slug': 'starfish-finance',
		'symbol': 'SEAN'
	},
	{
		'id': 20909,
		'name': 'CRIPCO',
		'slug': 'cripco',
		'symbol': 'IP3'
	},
	{
		'id': 11499,
		'name': 'AMATERAS',
		'slug': 'amateras',
		'symbol': 'AMT'
	},
	{
		'id': 7627,
		'name': 'PicaArtMoney',
		'slug': 'picaartmoney',
		'symbol': 'PICA'
	},
	{
		'id': 22573,
		'name': 'pGALA',
		'slug': 'pgala',
		'symbol': 'PGALA'
	},
	{
		'id': 20497,
		'name': 'WAGMI Game',
		'slug': 'wagmi-game-2',
		'symbol': 'WAGMIGAMES'
	},
	{
		'id': 22062,
		'name': 'ProspectorCrane',
		'slug': 'prospectorcrane',
		'symbol': 'CRANE$'
	},
	{
		'id': 18294,
		'name': 'CoolHash',
		'slug': 'coolmining-cooha',
		'symbol': 'COOHA'
	},
	{
		'id': 21122,
		'name': 'KLEVA Protocol',
		'slug': 'kleva-protocol',
		'symbol': 'KLEVA'
	},
	{
		'id': 21809,
		'name': 'SaitaRealty',
		'slug': 'saitarealty',
		'symbol': 'SRLTY'
	},
	{
		'id': 19632,
		'name': 'LEMONCHAIN',
		'slug': 'lemonchain',
		'symbol': 'LEMC'
	},
	{
		'id': 20126,
		'name': 'Fuji',
		'slug': 'fuji',
		'symbol': 'FJT'
	},
	{
		'id': 16209,
		'name': 'Olympus v1',
		'slug': 'olympus-v1',
		'symbol': 'OHM'
	},
	{
		'id': 17450,
		'name': 'fanC',
		'slug': 'fanc',
		'symbol': 'FANC'
	},
	{
		'id': 19133,
		'name': 'Gafa',
		'slug': 'gafa',
		'symbol': 'GAFA'
	},
	{
		'id': 11132,
		'name': 'Wrapped OKT',
		'slug': 'wrapped-okt',
		'symbol': 'WOKT'
	},
	{
		'id': 12705,
		'name': 'Pollchain',
		'slug': 'pollchain',
		'symbol': 'POLL'
	},
	{
		'id': 11708,
		'name': 'Antex',
		'slug': 'antex',
		'symbol': 'ANTEX'
	},
	{
		'id': 20011,
		'name': 'Realms of Ethernity',
		'slug': 'realms-of-ethernity',
		'symbol': 'RETH'
	},
	{
		'id': 15564,
		'name': 'DEXGame',
		'slug': 'dexgame',
		'symbol': 'DXGM'
	},
	{
		'id': 16612,
		'name': 'Nosana',
		'slug': 'nosana',
		'symbol': 'NOS'
	},
	{
		'id': 20282,
		'name': 'dexSHARE',
		'slug': 'dexshare',
		'symbol': 'DEXSHARE'
	},
	{
		'id': 5181,
		'name': 'BiLira',
		'slug': 'bilira',
		'symbol': 'TRYB'
	},
	{
		'id': 13531,
		'name': 'Keeps Coin',
		'slug': 'keeps-blockchain',
		'symbol': 'KVERSE'
	},
	{
		'id': 21418,
		'name': 'Minted',
		'slug': 'minted',
		'symbol': 'MTD'
	},
	{
		'id': 11939,
		'name': 'Heroes & Empires',
		'slug': 'heroes-and-empires',
		'symbol': 'HE'
	},
	{
		'id': 13978,
		'name': 'MetaVPad',
		'slug': 'metavpad',
		'symbol': 'METAV'
	},
	{
		'id': 10969,
		'name': 'Cardence',
		'slug': 'cardence-io',
		'symbol': 'CRDN'
	},
	{
		'id': 19362,
		'name': 'TAKI',
		'slug': 'taki',
		'symbol': 'TAKI'
	},
	{
		'id': 21487,
		'name': 'Seiren Games Network',
		'slug': 'seiren-games-network',
		'symbol': 'SERG'
	},
	{
		'id': 13230,
		'name': 'JERITEX',
		'slug': 'jeritex',
		'symbol': 'JRIT'
	},
	{
		'id': 22978,
		'name': 'Rabbit2023',
		'slug': 'rabbit2023',
		'symbol': 'RABBIT'
	},
	{
		'id': 12097,
		'name': 'NFTmall',
		'slug': 'nftmall',
		'symbol': 'GEM'
	},
	{
		'id': 22956,
		'name': 'Baby Alvey',
		'slug': 'baby-alvey',
		'symbol': 'BALVEY'
	},
	{
		'id': 22645,
		'name': 'Scary Bunny',
		'slug': 'scary-bunny',
		'symbol': 'SB'
	},
	{
		'id': 10967,
		'name': 'YIN Finance',
		'slug': 'yin-finance',
		'symbol': 'YIN'
	},
	{
		'id': 22176,
		'name': 'Gemie',
		'slug': 'gemie',
		'symbol': 'GEM'
	},
	{
		'id': 15357,
		'name': 'DoubleDice',
		'slug': 'doubledice-token',
		'symbol': 'DODI'
	},
	{
		'id': 22034,
		'name': 'ROND',
		'slug': 'rond',
		'symbol': 'ROND'
	},
	{
		'id': 22369,
		'name': 'WCAPES',
		'slug': 'wcapes',
		'symbol': 'WCA'
	},
	{
		'id': 12930,
		'name': 'Cpos Cloud Payment',
		'slug': 'cpos-cloud-payment',
		'symbol': 'CPOS'
	},
	{
		'id': 21059,
		'name': 'DR1VER',
		'slug': 'dr1ver',
		'symbol': 'DR1$'
	},
	{
		'id': 11060,
		'name': 'Baby Shiba Inu',
		'slug': 'baby-shiba-inu',
		'symbol': 'BABYSHIBAINU'
	},
	{
		'id': 15554,
		'name': 'Citrus',
		'slug': 'citrus',
		'symbol': 'CTS'
	},
	{
		'id': 19684,
		'name': 'CrownSterling',
		'slug': 'crownsterling',
		'symbol': 'WCSOV'
	},
	{
		'id': 14195,
		'name': 'Solar',
		'slug': 'solardex',
		'symbol': 'SOLAR'
	},
	{
		'id': 6524,
		'name': 'Ndau',
		'slug': 'ndau',
		'symbol': 'NDAU'
	},
	{
		'id': 22142,
		'name': '00 Token',
		'slug': '00-token',
		'symbol': '00'
	},
	{
		'id': 13265,
		'name': 'Fidira',
		'slug': 'fidira',
		'symbol': 'FID'
	},
	{
		'id': 15539,
		'name': 'NOSHIT',
		'slug': 'noshit',
		'symbol': 'NSH'
	},
	{
		'id': 22282,
		'name': 'Bunny King Metaverse',
		'slug': 'bunny-king-metaverse',
		'symbol': 'BKM'
	},
	{
		'id': 15638,
		'name': 'Ltradex',
		'slug': 'ltradex',
		'symbol': 'LTEX'
	},
	{
		'id': 21477,
		'name': 'YodeSwap',
		'slug': 'yodeswap',
		'symbol': 'YODE'
	},
	{
		'id': 18596,
		'name': 'POPKON',
		'slug': 'popkon',
		'symbol': 'POPK'
	},
	{
		'id': 12179,
		'name': 'PolyAlpha Finance',
		'slug': 'polyalpha-finance',
		'symbol': 'ALPHA'
	},
	{
		'id': 11218,
		'name': 'BoringDAO',
		'slug': 'boringdao-new',
		'symbol': 'BORING'
	},
	{
		'id': 20167,
		'name': 'BighBull',
		'slug': 'bighbull',
		'symbol': 'BIGB'
	},
	{
		'id': 23322,
		'name': 'CamelCoin',
		'slug': 'camelcoin',
		'symbol': 'CML'
	},
	{
		'id': 22558,
		'name': 'Cheese (V2)',
		'slug': 'cheese-v2',
		'symbol': 'CHEESE'
	},
	{
		'id': 21861,
		'name': 'Teleport',
		'slug': 'teleport',
		'symbol': 'PORT'
	},
	{
		'id': 21358,
		'name': 'DecentraBNB',
		'slug': 'decentrabnb',
		'symbol': 'DBNB'
	},
	{
		'id': 17318,
		'name': 'CATCOIN',
		'slug': 'catcoin-token',
		'symbol': 'CATS'
	},
	{
		'id': 21394,
		'name': 'UvToken',
		'slug': 'uvtoken',
		'symbol': 'UVT'
	},
	{
		'id': 15366,
		'name': 'XIDO FINANCE',
		'slug': 'xido-finance',
		'symbol': 'XIDO'
	},
	{
		'id': 13244,
		'name': 'Beethoven X',
		'slug': 'beethoven-x',
		'symbol': 'BEETS'
	},
	{
		'id': 9700,
		'name': 'Microtuber',
		'slug': 'microtuber',
		'symbol': 'MCT'
	},
	{
		'id': 18513,
		'name': 'Acadex Network',
		'slug': 'acadex-network',
		'symbol': 'ACDX'
	},
	{
		'id': 21309,
		'name': 'DaoVerse',
		'slug': 'daoverse',
		'symbol': 'DVRS'
	},
	{
		'id': 16254,
		'name': 'OpenLive NFT',
		'slug': 'openlive-nft',
		'symbol': 'OPV'
	},
	{
		'id': 12679,
		'name': 'XNP',
		'slug': 'exenpay-token',
		'symbol': 'XNP'
	},
	{
		'id': 19705,
		'name': 'Castello Coin',
		'slug': 'castello-coin',
		'symbol': 'CAST'
	},
	{
		'id': 22023,
		'name': 'NXD Next',
		'slug': 'nxd-next',
		'symbol': 'NXDT'
	},
	{
		'id': 20582,
		'name': 'NMKR',
		'slug': 'nft-maker',
		'symbol': 'NMKR'
	},
	{
		'id': 12838,
		'name': 'Zeptacoin',
		'slug': 'zeptacoin',
		'symbol': 'ZPTC'
	},
	{
		'id': 10347,
		'name': 'Human',
		'slug': 'human',
		'symbol': 'HMT'
	},
	{
		'id': 11986,
		'name': 'SundaeSwap',
		'slug': 'sundaeswap',
		'symbol': 'SUNDAE'
	},
	{
		'id': 19146,
		'name': 'New Paradigm Assets Solution',
		'slug': 'new-paradigm-assets-solution',
		'symbol': 'NPAS'
	},
	{
		'id': 17816,
		'name': 'BITCOLOJIX',
		'slug': 'bitcolojix',
		'symbol': 'BTCIX'
	},
	{
		'id': 13425,
		'name': 'NFT Champions',
		'slug': 'nft-champions',
		'symbol': 'CHAMP'
	},
	{
		'id': 19154,
		'name': 'Gym Network',
		'slug': 'gym-network',
		'symbol': 'GYMNET'
	},
	{
		'id': 13142,
		'name': 'BTRIPS',
		'slug': 'btrips',
		'symbol': 'BTR'
	},
	{
		'id': 12417,
		'name': 'Lovelace World',
		'slug': 'lovelace',
		'symbol': 'LACE'
	},
	{
		'id': 11078,
		'name': 'IAGON',
		'slug': 'iagon',
		'symbol': 'IAG'
	},
	{
		'id': 16133,
		'name': 'Frontrow',
		'slug': 'frontrow',
		'symbol': 'FRR'
	},
	{
		'id': 21939,
		'name': 'Angel Dust',
		'slug': 'angel-dust',
		'symbol': 'AD'
	},
	{
		'id': 19867,
		'name': 'STIMA',
		'slug': 'stima',
		'symbol': 'STIMA'
	},
	{
		'id': 21290,
		'name': 'Kanagawa Nami',
		'slug': 'kanagawa-nami',
		'symbol': 'OKINAMI'
	},
	{
		'id': 21420,
		'name': 'Axelar Wrapped USDC',
		'slug': 'axlusdc',
		'symbol': 'axlUSDC'
	},
	{
		'id': 22744,
		'name': 'Jarvis Synthetic Euro',
		'slug': 'jarvis-synthetic-euro',
		'symbol': 'JEUR'
	},
	{
		'id': 20540,
		'name': 'HITOP',
		'slug': 'hitop',
		'symbol': 'HITOP'
	},
	{
		'id': 9613,
		'name': 'Trustpad',
		'slug': 'trustpad',
		'symbol': 'TPAD'
	},
	{
		'id': 13864,
		'name': 'Shiba Lite',
		'slug': 'shiba-lite',
		'symbol': 'SHIBLITE'
	},
	{
		'id': 5175,
		'name': 'Bitcoin Vault',
		'slug': 'bitcoin-vault',
		'symbol': 'BTCV'
	},
	{
		'id': 16476,
		'name': 'Arenum',
		'slug': 'arenum',
		'symbol': 'ARNM'
	},
	{
		'id': 9686,
		'name': 'My Crypto Heroes',
		'slug': 'my-crypto-heroes',
		'symbol': 'MCHC'
	},
	{
		'id': 13276,
		'name': 'Squid Game',
		'slug': 'squid-game',
		'symbol': 'SQUID'
	},
	{
		'id': 21751,
		'name': 'Supreme Finance',
		'slug': 'hypes',
		'symbol': 'HYPES'
	},
	{
		'id': 12319,
		'name': 'DeFi Kingdoms',
		'slug': 'defi-kingdoms',
		'symbol': 'JEWEL'
	},
	{
		'id': 21691,
		'name': 'Hedge USD',
		'slug': 'hedge-usd',
		'symbol': 'USH'
	},
	{
		'id': 9946,
		'name': 'Your Future Exchange',
		'slug': 'your-future-exchange',
		'symbol': 'YFX'
	},
	{
		'id': 5630,
		'name': 'WaykiChain Governance Coin',
		'slug': 'waykichain-governance-coin',
		'symbol': 'WGRT'
	},
	{
		'id': 20649,
		'name': 'Parrot USD',
		'slug': 'parrot-usd',
		'symbol': 'PAI'
	},
	{
		'id': 8457,
		'name': 'B20',
		'slug': 'b20',
		'symbol': 'B20'
	},
	{
		'id': 8339,
		'name': 'xFund',
		'slug': 'xfund',
		'symbol': 'XFUND'
	},
	{
		'id': 8614,
		'name': 'Alchemix USD',
		'slug': 'alchemix-usd',
		'symbol': 'ALUSD'
	},
	{
		'id': 9670,
		'name': 'GogolCoin',
		'slug': 'gogolcoin',
		'symbol': 'GOL'
	},
	{
		'id': 12082,
		'name': 'CyberDragon Gold',
		'slug': 'cyberdragon-gold',
		'symbol': 'GOLD'
	},
	{
		'id': 6911,
		'name': 'BNSD Finance',
		'slug': 'bnsd-finance',
		'symbol': 'BNSD'
	},
	{
		'id': 18309,
		'name': 'Cloudname',
		'slug': 'cloudname',
		'symbol': 'CNAME'
	},
	{
		'id': 22950,
		'name': 'Cat',
		'slug': 'cat-cat-token',
		'symbol': 'CAT'
	},
	{
		'id': 10502,
		'name': 'SafeMars',
		'slug': 'smars',
		'symbol': 'SMARS'
	},
	{
		'id': 22377,
		'name': 'Pink Panther Lovers',
		'slug': 'pink-panther-lovers',
		'symbol': 'PPL'
	},
	{
		'id': 15761,
		'name': 'MetaGear',
		'slug': 'metagear',
		'symbol': 'GEAR'
	},
	{
		'id': 17467,
		'name': 'Mecha Morphing',
		'slug': 'mecha-morphing',
		'symbol': 'MAPE'
	},
	{
		'id': 21961,
		'name': 'PRüF Protocol',
		'slug': 'pruf-protocol',
		'symbol': 'PRUF'
	},
	{
		'id': 12256,
		'name': 'cheqd',
		'slug': 'cheqd',
		'symbol': 'CHEQ'
	},
	{
		'id': 11021,
		'name': 'Corite',
		'slug': 'corite',
		'symbol': 'CO'
	},
	{
		'id': 14292,
		'name': 'Coin Of Champions',
		'slug': 'coin-of-champions',
		'symbol': 'COC'
	},
	{
		'id': 12089,
		'name': 'Coinweb',
		'slug': 'coinweb',
		'symbol': 'CWEB'
	},
	{
		'id': 17528,
		'name': 'War Bond Token',
		'slug': 'tank-wars-zone',
		'symbol': 'WBOND'
	},
	{
		'id': 11696,
		'name': 'Wrapped Harmony',
		'slug': 'wrapped-one',
		'symbol': 'WONE'
	},
	{
		'id': 14322,
		'name': 'UPFI Network',
		'slug': 'upfi-network',
		'symbol': 'UPS'
	},
	{
		'id': 16652,
		'name': 'The Winkyverse',
		'slug': 'the-winkyverse',
		'symbol': 'WNK'
	},
	{
		'id': 15970,
		'name': 'Agro Global',
		'slug': 'agro-global',
		'symbol': 'AGRO'
	},
	{
		'id': 21829,
		'name': 'Ten Best Coins',
		'slug': 'ten-best-coins',
		'symbol': 'TBC'
	},
	{
		'id': 21812,
		'name': 'Takepile',
		'slug': 'takepile',
		'symbol': 'TAKE'
	},
	{
		'id': 7635,
		'name': 'UniWorld',
		'slug': 'uniworld',
		'symbol': 'UNW'
	},
	{
		'id': 22525,
		'name': 'GMD Protocol',
		'slug': 'gmd-protocol',
		'symbol': 'GMD'
	},
	{
		'id': 17315,
		'name': 'ALYATTES',
		'slug': 'alyattes',
		'symbol': 'ALYA'
	},
	{
		'id': 12133,
		'name': 'X Protocol',
		'slug': 'x-protocol',
		'symbol': 'POT'
	},
	{
		'id': 22581,
		'name': 'Cryptofi',
		'slug': 'cryptofi',
		'symbol': 'CFI'
	},
	{
		'id': 23208,
		'name': 'PulseBitcoin',
		'slug': 'pulsebitcoin',
		'symbol': 'PLSB'
	},
	{
		'id': 22984,
		'name': 'Canadian Inuit Dog(NEW)',
		'slug': 'canadian-inuit-dog-v2',
		'symbol': 'CADINU'
	},
	{
		'id': 12692,
		'name': 'Poken',
		'slug': 'poken',
		'symbol': 'PKN'
	},
	{
		'id': 11178,
		'name': 'Wrapped LUNA Classic',
		'slug': 'wrapped-luna-token',
		'symbol': 'WLUNC'
	},
	{
		'id': 12196,
		'name': 'Kollect',
		'slug': 'kollect',
		'symbol': 'KOL'
	},
	{
		'id': 22871,
		'name': 'pETH',
		'slug': 'peth',
		'symbol': 'PETH'
	},
	{
		'id': 21041,
		'name': 'Chains',
		'slug': 'chains',
		'symbol': 'CHA'
	},
	{
		'id': 8545,
		'name': 'Launchpool',
		'slug': 'launchpool',
		'symbol': 'LPOOL'
	},
	{
		'id': 21075,
		'name': 'Hello Art',
		'slug': 'hello-art',
		'symbol': 'HTT'
	},
	{
		'id': 11744,
		'name': 'IVOGEL',
		'slug': 'ivogel',
		'symbol': 'IVG'
	},
	{
		'id': 18440,
		'name': 'FloorDAO',
		'slug': 'floordao',
		'symbol': 'FLOOR'
	},
	{
		'id': 19437,
		'name': 'Cryptounit',
		'slug': 'cryptounit',
		'symbol': 'CRU'
	},
	{
		'id': 3759,
		'name': 'Jinbi Token',
		'slug': 'jinbi-token',
		'symbol': 'JNB'
	},
	{
		'id': 15827,
		'name': 'WhaleGirl',
		'slug': 'whalegirl',
		'symbol': 'WGIRL'
	},
	{
		'id': 22459,
		'name': 'Made In Real Life',
		'slug': 'made-in-real-life',
		'symbol': 'MIRL'
	},
	{
		'id': 18981,
		'name': 'Kyoko',
		'slug': 'kyoko',
		'symbol': 'KYOKO'
	},
	{
		'id': 18972,
		'name': 'Earncraft',
		'slug': 'earncraft',
		'symbol': 'PLOT'
	},
	{
		'id': 14145,
		'name': 'holoride',
		'slug': 'holoride',
		'symbol': 'RIDE'
	},
	{
		'id': 12200,
		'name': 'Digital Swiss Franc',
		'slug': 'digital-swis-franc',
		'symbol': 'DSFR'
	},
	{
		'id': 19745,
		'name': 'Burn Floki',
		'slug': 'burn-floki',
		'symbol': 'BFLOKI'
	},
	{
		'id': 21873,
		'name': 'McLaren F1 Fan Token',
		'slug': 'mclaren-f1-fan-token',
		'symbol': 'MCL'
	},
	{
		'id': 22460,
		'name': 'Kingaru',
		'slug': 'kingaru',
		'symbol': 'KRU'
	},
	{
		'id': 22482,
		'name': 'Turkish Basketball Federation Fan Token',
		'slug': 'turkish-basketball-federation-fan-token',
		'symbol': 'TBFT'
	},
	{
		'id': 14978,
		'name': 'Lets Go Brandon Token',
		'slug': 'letsgobrandontoken',
		'symbol': 'LGBT'
	},
	{
		'id': 18318,
		'name': 'Booby Trap',
		'slug': 'booby-trap',
		'symbol': 'BBT'
	},
	{
		'id': 18984,
		'name': 'Philcoin',
		'slug': 'philcoin',
		'symbol': 'PHL'
	},
	{
		'id': 22656,
		'name': 'Gamer Arena',
		'slug': 'gamer-arena',
		'symbol': 'GAU'
	},
	{
		'id': 16509,
		'name': 'Dreamverse',
		'slug': 'dreamverse',
		'symbol': 'DV'
	},
	{
		'id': 23325,
		'name': 'Mythic Ore',
		'slug': 'mythic-ore',
		'symbol': 'MORE'
	},
	{
		'id': 20973,
		'name': 'StepWatch',
		'slug': 'stepwatch',
		'symbol': 'SWP'
	},
	{
		'id': 17203,
		'name': 'Deesse',
		'slug': 'deesse',
		'symbol': 'LOVE'
	},
	{
		'id': 17653,
		'name': 'eFin Decentralized',
		'slug': 'efin-decentralized',
		'symbol': 'WEFIN'
	},
	{
		'id': 22559,
		'name': 'IMPACTXPRIME',
		'slug': 'impactxprime',
		'symbol': 'IXP'
	},
	{
		'id': 13643,
		'name': 'ChilliSwap',
		'slug': 'chilliswap',
		'symbol': 'CHLI'
	},
	{
		'id': 18081,
		'name': 'BattleVerse',
		'slug': 'battleverse',
		'symbol': 'BVC'
	},
	{
		'id': 12722,
		'name': 'Cryowar',
		'slug': 'cryowar',
		'symbol': 'CWAR'
	},
	{
		'id': 20518,
		'name': 'Arcade Kingdoms',
		'slug': 'arcade-kingdoms',
		'symbol': 'ACK'
	},
	{
		'id': 22882,
		'name': 'Black Token',
		'slug': 'black-token',
		'symbol': 'BLACK'
	},
	{
		'id': 23251,
		'name': 'TwitFi',
		'slug': 'twitfi',
		'symbol': 'TWT'
	},
	{
		'id': 18702,
		'name': 'Metavault DAO',
		'slug': 'metavault',
		'symbol': 'MVD'
	},
	{
		'id': 14392,
		'name': 'Golden Ball',
		'slug': 'golden-ball',
		'symbol': 'GLB'
	},
	{
		'id': 12040,
		'name': 'Buff Doge Coin',
		'slug': 'buff-doge-coin',
		'symbol': 'DOGECOIN'
	},
	{
		'id': 15577,
		'name': 'BIZVERSE',
		'slug': 'bizverse',
		'symbol': 'BIVE'
	},
	{
		'id': 22837,
		'name': 'DIMO',
		'slug': 'dimo',
		'symbol': 'DIMO'
	},
	{
		'id': 9789,
		'name': 'ETH 2x Flexible Leverage Index',
		'slug': 'eth-2x-flexible-leverage-index',
		'symbol': 'ETH2X-FLI'
	},
	{
		'id': 19710,
		'name': 'Plutonians',
		'slug': 'plutonians-tech',
		'symbol': 'PLD'
	},
	{
		'id': 23175,
		'name': 'METAFASTEST',
		'slug': 'metafastest',
		'symbol': 'METAF'
	},
	{
		'id': 17483,
		'name': 'ELIS',
		'slug': 'elis',
		'symbol': 'XLS'
	},
	{
		'id': 9524,
		'name': 'Media Network',
		'slug': 'media-network',
		'symbol': 'MEDIA'
	},
	{
		'id': 8068,
		'name': 'Coinbase tokenized stock FTX',
		'slug': 'coinbase-pre-ipo-tokenized-stock-ftx',
		'symbol': 'COIN'
	},
	{
		'id': 18829,
		'name': 'Darkness Dollar',
		'slug': 'darkness-dollar',
		'symbol': 'DUSD'
	},
	{
		'id': 17061,
		'name': 'ClearDAO',
		'slug': 'cleardao',
		'symbol': 'CLH'
	},
	{
		'id': 9089,
		'name': 'Tenset',
		'slug': 'tenset',
		'symbol': '10SET'
	},
	{
		'id': 21285,
		'name': 'PulseDogecoin',
		'slug': 'pulsedogecoin',
		'symbol': 'PLSD'
	},
	{
		'id': 23177,
		'name': 'Frax Staked Ether',
		'slug': 'frax-staked-ether',
		'symbol': 'SFRXETH'
	},
	{
		'id': 17654,
		'name': 'HyperVerse',
		'slug': 'hyperverse',
		'symbol': 'HVT'
	},
	{
		'id': 10088,
		'name': 'PolyDoge',
		'slug': 'polydoge',
		'symbol': 'POLYDOGE'
	},
	{
		'id': 9132,
		'name': 'MobiFi',
		'slug': 'mobi-finance',
		'symbol': 'MoFi'
	},
	{
		'id': 11181,
		'name': 'Saber',
		'slug': 'saber',
		'symbol': 'SBR'
	},
	{
		'id': 21835,
		'name': 'Stader sFTMX',
		'slug': 'stader-sftmx',
		'symbol': 'SFTMX'
	},
	{
		'id': 15188,
		'name': 'DappRadar',
		'slug': 'dappradar',
		'symbol': 'RADAR'
	},
	{
		'id': 15442,
		'name': 'All Coins Yield Capital',
		'slug': 'all-coins-yield-capital',
		'symbol': 'ACYC'
	},
	{
		'id': 21376,
		'name': 'Future Of Fintech',
		'slug': 'future-of-fintech',
		'symbol': 'FOF'
	},
	{
		'id': 15181,
		'name': 'MonoX Protocol',
		'slug': 'monox-protocol-token',
		'symbol': 'MONO'
	},
	{
		'id': 21988,
		'name': 'QI Blockchain',
		'slug': 'qi-blockchain',
		'symbol': 'QIE'
	},
	{
		'id': 10394,
		'name': 'Kuma Inu',
		'slug': 'kuma-inu',
		'symbol': 'KUMA'
	},
	{
		'id': 20852,
		'name': 'Round X',
		'slug': 'round-x',
		'symbol': 'RNDX'
	},
	{
		'id': 14798,
		'name': 'Pacific',
		'slug': 'pacific',
		'symbol': 'PAF'
	},
	{
		'id': 19225,
		'name': 'Hera Finance',
		'slug': 'hera-finance',
		'symbol': 'HERA'
	},
	{
		'id': 15315,
		'name': 'SOUNI',
		'slug': 'sovi-universe',
		'symbol': 'SON'
	},
	{
		'id': 16706,
		'name': 'Meta MVRS',
		'slug': 'meta-mvrs',
		'symbol': 'MVRS'
	},
	{
		'id': 20388,
		'name': 'LunchDAO',
		'slug': 'lunchdao',
		'symbol': 'LUNCH'
	},
	{
		'id': 21362,
		'name': 'Crazy Internet Coin',
		'slug': 'crazy-internet-coin',
		'symbol': 'CIC'
	},
	{
		'id': 11223,
		'name': 'MetaMUI',
		'slug': 'metamui',
		'symbol': 'MMUI'
	},
	{
		'id': 19873,
		'name': 'SANGKARA MISA',
		'slug': 'sangkara-misa',
		'symbol': 'MISA'
	},
	{
		'id': 12650,
		'name': 'GAIA Everworld',
		'slug': 'gaia-everworld',
		'symbol': 'GAIA'
	},
	{
		'id': 21770,
		'name': 'eHive',
		'slug': 'ehive',
		'symbol': 'EHIVE'
	},
	{
		'id': 22139,
		'name': 'AntNetworX',
		'slug': 'antnetworx',
		'symbol': 'ANTX'
	},
	{
		'id': 19269,
		'name': 'CoW Protocol',
		'slug': 'cow-protocol',
		'symbol': 'COW'
	},
	{
		'id': 15790,
		'name': 'Propel',
		'slug': 'propel-token',
		'symbol': 'PEL'
	},
	{
		'id': 11835,
		'name': 'Monsters Clan',
		'slug': 'monsters-clan',
		'symbol': 'MONS'
	},
	{
		'id': 17299,
		'name': 'Kingdom Karnage',
		'slug': 'kingdom-karnage',
		'symbol': 'KKT'
	},
	{
		'id': 6837,
		'name': 'Nodle',
		'slug': 'nodleiot',
		'symbol': 'NODL'
	},
	{
		'id': 21406,
		'name': 'Acala Dollar(Karura)',
		'slug': 'acala-dollar-karura',
		'symbol': 'AUSD'
	},
	{
		'id': 23304,
		'name': 'VetMe',
		'slug': 'vetme',
		'symbol': 'VETME'
	},
	{
		'id': 2764,
		'name': 'Silent Notary',
		'slug': 'silent-notary',
		'symbol': 'UBSN'
	},
	{
		'id': 23017,
		'name': 'Bonq Euro',
		'slug': 'bonq',
		'symbol': 'BEUR'
	},
	{
		'id': 7308,
		'name': 'Compound Uni',
		'slug': 'compound-uniswap',
		'symbol': 'CUNI'
	},
	{
		'id': 8071,
		'name': 'OnX Finance',
		'slug': 'onx-finance',
		'symbol': 'ONX'
	},
	{
		'id': 16007,
		'name': 'Revenue Coin',
		'slug': 'revenue-coin',
		'symbol': 'RVC'
	},
	{
		'id': 23020,
		'name': 'BITCONEY',
		'slug': 'bitconey',
		'symbol': 'BITCONEY'
	},
	{
		'id': 22533,
		'name': 'Jito Staked SOL',
		'slug': 'jito-staked-sol',
		'symbol': 'JITOSOL'
	},
	{
		'id': 21709,
		'name': 'Metababy',
		'slug': 'metababy',
		'symbol': 'BABY'
	},
	{
		'id': 16781,
		'name': 'ZURRENCY',
		'slug': 'zurrency',
		'symbol': 'ZURR'
	},
	{
		'id': 10264,
		'name': 'Charged Particles',
		'slug': 'charged-particles',
		'symbol': 'IONX'
	},
	{
		'id': 22926,
		'name': 'SpaceXCoin',
		'slug': 'spacexcoin',
		'symbol': 'SPXC'
	},
	{
		'id': 22660,
		'name': 'Contents Shopper Token',
		'slug': 'contents-shopper-token',
		'symbol': 'CST'
	},
	{
		'id': 10875,
		'name': 'ChainCade',
		'slug': 'chaincade',
		'symbol': 'CHAINCADE'
	},
	{
		'id': 23270,
		'name': 'Anubit',
		'slug': 'anubit',
		'symbol': 'ANB'
	},
	{
		'id': 19607,
		'name': 'Zone of Avoidance',
		'slug': 'zone-of-avoidance',
		'symbol': 'ZOA'
	},
	{
		'id': 20546,
		'name': 'REV3AL',
		'slug': 'rev3al',
		'symbol': 'REV3L'
	},
	{
		'id': 11134,
		'name': 'OEC BTC',
		'slug': 'oec-btc',
		'symbol': 'BTCK'
	},
	{
		'id': 17094,
		'name': 'AizaWorld',
		'slug': 'aizaworld',
		'symbol': 'AIZA'
	},
	{
		'id': 20749,
		'name': 'CoinX',
		'slug': 'coinx',
		'symbol': 'CNX'
	},
	{
		'id': 20746,
		'name': 'Drive Crypto',
		'slug': 'drivecrypto',
		'symbol': 'DRIVECRYPTO'
	},
	{
		'id': 13970,
		'name': 'Secretum',
		'slug': 'secretum',
		'symbol': 'SER'
	},
	{
		'id': 18560,
		'name': 'Wrapped VeChain',
		'slug': 'wrapped-vechain',
		'symbol': 'WVET'
	},
	{
		'id': 21744,
		'name': 'LOGOS',
		'slug': 'logos',
		'symbol': 'LOG'
	},
	{
		'id': 21776,
		'name': 'Monkey King',
		'slug': 'monkey-king',
		'symbol': 'WUKONG'
	},
	{
		'id': 21065,
		'name': 'Furio',
		'slug': 'furio',
		'symbol': '$FUR'
	},
	{
		'id': 14728,
		'name': 'INTERSTELLAR DOMAIN ORDER',
		'slug': 'interstellar-domain-order',
		'symbol': 'IDO'
	},
	{
		'id': 12046,
		'name': 'Idexo Token',
		'slug': 'idexo-token',
		'symbol': 'IDO'
	},
	{
		'id': 16305,
		'name': 'Izumi Finance',
		'slug': 'izumi-finance',
		'symbol': 'IZI'
	},
	{
		'id': 23303,
		'name': 'MEME TAO',
		'slug': 'meme-tao',
		'symbol': 'MTAO'
	},
	{
		'id': 12760,
		'name': 'Socean Staked Sol',
		'slug': 'socean-staked-sol',
		'symbol': 'SCNSOL'
	},
	{
		'id': 18913,
		'name': 'MarsDAO',
		'slug': 'marsdao',
		'symbol': 'MDAO'
	},
	{
		'id': 12487,
		'name': 'Dark Frontiers',
		'slug': 'dark-frontiers',
		'symbol': 'DARK'
	},
	{
		'id': 16045,
		'name': 'Adadao',
		'slug': 'adadao',
		'symbol': 'ADAO'
	},
	{
		'id': 6744,
		'name': 'Chain Games',
		'slug': 'chain-games',
		'symbol': 'CHAIN'
	},
	{
		'id': 21789,
		'name': 'SOLOXCOIN',
		'slug': 'soloxcoin',
		'symbol': 'SL'
	},
	{
		'id': 7898,
		'name': 'MicroStrategy tokenized stock FTX',
		'slug': 'microstrategy-tokenized-stock-ftx',
		'symbol': 'MSTR'
	},
	{
		'id': 20409,
		'name': 'Okuru',
		'slug': 'okuru',
		'symbol': 'XOT'
	},
	{
		'id': 22206,
		'name': 'CakeWSwap',
		'slug': 'cakewswap',
		'symbol': 'CAKEW'
	},
	{
		'id': 21485,
		'name': 'CRYPTOKKI',
		'slug': 'cryptokki',
		'symbol': 'TOKKI'
	},
	{
		'id': 20620,
		'name': 'Türkiye Motosiklet Federasyonu Fan Token',
		'slug': 'turkiye-motosiklet-federasyonu-fan-token',
		'symbol': 'TMFT'
	},
	{
		'id': 8278,
		'name': 'VEROX',
		'slug': 'verox',
		'symbol': 'VRX'
	},
	{
		'id': 22276,
		'name': 'HALO COIN',
		'slug': 'halo-coin',
		'symbol': 'HALO'
	},
	{
		'id': 21473,
		'name': 'Dione Protocol',
		'slug': 'dione-protocol',
		'symbol': 'DIONE'
	},
	{
		'id': 16842,
		'name': 'Stargaze',
		'slug': 'stargaze',
		'symbol': 'STARS'
	},
	{
		'id': 20576,
		'name': 'MotoGP Fan Token',
		'slug': 'motogp-fan-token',
		'symbol': 'MGPT'
	},
	{
		'id': 16181,
		'name': 'Solice',
		'slug': 'solice',
		'symbol': 'SLC'
	},
	{
		'id': 23039,
		'name': 'Dogens',
		'slug': 'dogens',
		'symbol': 'DOGENS'
	},
	{
		'id': 8961,
		'name': 'Futureswap',
		'slug': 'futureswap',
		'symbol': 'FST'
	},
	{
		'id': 20765,
		'name': 'Bolide',
		'slug': 'bolide',
		'symbol': 'BLID'
	},
	{
		'id': 3768,
		'name': 'PIBBLE',
		'slug': 'pibble',
		'symbol': 'PIB'
	},
	{
		'id': 19369,
		'name': 'Wrapped Cardano',
		'slug': 'wrapped-cardano',
		'symbol': 'WADA'
	},
	{
		'id': 12965,
		'name': 'Good Games Guild',
		'slug': 'good-games-guild',
		'symbol': 'GGG'
	},
	{
		'id': 19118,
		'name': 'Lumerin',
		'slug': 'lumerin',
		'symbol': 'LMR'
	},
	{
		'id': 22690,
		'name': 'WB-Mining',
		'slug': 'wb-mining',
		'symbol': 'WBM'
	},
	{
		'id': 20755,
		'name': 'ZigZag',
		'slug': 'zigzag',
		'symbol': 'ZZ'
	},
	{
		'id': 17336,
		'name': 'Apollo Crypto DAO',
		'slug': 'apollo-inu',
		'symbol': 'APOLLO'
	},
	{
		'id': 20506,
		'name': 'Zambesigold',
		'slug': 'zambesigold',
		'symbol': 'ZGD'
	},
	{
		'id': 17418,
		'name': 'Atlas DEX',
		'slug': 'atlas-dex',
		'symbol': 'ATS'
	},
	{
		'id': 14325,
		'name': 'SmartNFT',
		'slug': 'smartnft',
		'symbol': 'SMARTNFT'
	},
	{
		'id': 18447,
		'name': 'Vince chain',
		'slug': 'vince-chain',
		'symbol': 'VCE'
	},
	{
		'id': 18281,
		'name': 'IndiGG',
		'slug': 'indigg',
		'symbol': 'INDI'
	},
	{
		'id': 19093,
		'name': 'Two Monkey Juice Bar',
		'slug': 'two-monkey-juice-bar',
		'symbol': 'TMON'
	},
	{
		'id': 21677,
		'name': 'SKYPlay',
		'slug': 'skyplay',
		'symbol': 'SKP'
	},
	{
		'id': 20437,
		'name': 'Goons of Balatroon',
		'slug': 'goons-of-balatroon',
		'symbol': 'GOB'
	},
	{
		'id': 11420,
		'name': 'Tune.FM',
		'slug': 'tune-fm',
		'symbol': 'JAM'
	},
	{
		'id': 22514,
		'name': 'Art Gobblers Goo',
		'slug': 'goo',
		'symbol': 'GOO'
	},
	{
		'id': 14463,
		'name': 'Realy',
		'slug': 'realy',
		'symbol': 'REAL'
	},
	{
		'id': 21604,
		'name': 'Leonidasbilic',
		'slug': 'leonidasbilic',
		'symbol': 'LIO'
	},
	{
		'id': 19024,
		'name': 'Lost Worlds',
		'slug': 'lost-worlds',
		'symbol': 'LOST'
	},
	{
		'id': 12437,
		'name': 'Gooreo',
		'slug': 'gooreo',
		'symbol': 'GOOREO'
	},
	{
		'id': 21817,
		'name': 'Hoard',
		'slug': 'hoard',
		'symbol': 'HRD'
	},
	{
		'id': 22125,
		'name': 'Mythos',
		'slug': 'mythos',
		'symbol': 'MYTH'
	},
	{
		'id': 16016,
		'name': 'Portuma',
		'slug': 'portuma',
		'symbol': 'POR'
	},
	{
		'id': 22898,
		'name': 'HubinNetwork',
		'slug': 'hubinnetwork',
		'symbol': 'HBN'
	},
	{
		'id': 11612,
		'name': 'Sunny Aggregator',
		'slug': 'sunny-aggregator',
		'symbol': 'SUNNY'
	},
	{
		'id': 11804,
		'name': 'Crypto Gladiator Shards',
		'slug': 'crypto-gladiator-shards',
		'symbol': 'CGS'
	},
	{
		'id': 21935,
		'name': 'MOBIX',
		'slug': 'mobix',
		'symbol': 'MOBX'
	},
	{
		'id': 14007,
		'name': 'SPORTZCHAIN',
		'slug': 'sportzchain',
		'symbol': 'SPN'
	},
	{
		'id': 20744,
		'name': 'LinkDao Network',
		'slug': 'linkdao-network',
		'symbol': 'LKD'
	},
	{
		'id': 11500,
		'name': 'Biconomy Exchange Token',
		'slug': 'biconomy-token',
		'symbol': 'BIT'
	},
	{
		'id': 19670,
		'name': 'Kaizen Finance',
		'slug': 'kaizen-finance',
		'symbol': 'KZEN'
	},
	{
		'id': 18290,
		'name': 'Terareum',
		'slug': 'terareum',
		'symbol': 'TERA'
	},
	{
		'id': 11211,
		'name': 'DNAxCAT Token',
		'slug': 'dnaxcat-token',
		'symbol': 'DXCT'
	},
	{
		'id': 21952,
		'name': 'The Big Five Token',
		'slug': 'the-big-five-token',
		'symbol': 'BFT'
	},
	{
		'id': 11148,
		'name': 'Proxy',
		'slug': 'proxy',
		'symbol': 'PRXY'
	},
	{
		'id': 18935,
		'name': 'Wrapped Rose',
		'slug': 'wrapped-rose',
		'symbol': 'wROSE'
	},
	{
		'id': 17995,
		'name': 'AssangeDAO',
		'slug': 'assangedao',
		'symbol': 'JUSTICE'
	},
	{
		'id': 12785,
		'name': 'Colony',
		'slug': 'colony',
		'symbol': 'CLY'
	},
	{
		'id': 12269,
		'name': 'WELD',
		'slug': 'weld-money',
		'symbol': 'WELD'
	},
	{
		'id': 15936,
		'name': '99Starz',
		'slug': '99starz',
		'symbol': 'STZ'
	},
	{
		'id': 8866,
		'name': 'BSC TOOLS',
		'slug': 'bsc-tools',
		'symbol': 'TOOLS'
	},
	{
		'id': 11809,
		'name': 'Ref Finance',
		'slug': 'ref-finance',
		'symbol': 'REF'
	},
	{
		'id': 22121,
		'name': 'Beauty Bakery Linked Operation Transaction Technology',
		'slug': 'beauty-bakery-linked-operation-transaction-technology',
		'symbol': 'LOTT'
	},
	{
		'id': 13659,
		'name': 'Crypto Global United',
		'slug': 'crypto-gaming-united',
		'symbol': 'CGU'
	},
	{
		'id': 8789,
		'name': 'EDDASwap',
		'slug': 'eddaswap',
		'symbol': 'EDDA'
	},
	{
		'id': 20964,
		'name': 'Law Blocks',
		'slug': 'law-blocks',
		'symbol': 'LBT'
	},
	{
		'id': 8915,
		'name': 'Battle Pets',
		'slug': 'battle-pets',
		'symbol': 'PET'
	},
	{
		'id': 2878,
		'name': 'DigiFinexToken',
		'slug': 'digifinextoken',
		'symbol': 'DFT'
	},
	{
		'id': 22112,
		'name': 'Kingdom Raids',
		'slug': 'kingdom-raids',
		'symbol': 'KRS'
	},
	{
		'id': 9763,
		'name': 'Copiosa Coin',
		'slug': 'copiosa-coin',
		'symbol': 'COP'
	},
	{
		'id': 10405,
		'name': 'NftyPlay',
		'slug': 'nftyplay',
		'symbol': 'POLO'
	},
	{
		'id': 21601,
		'name': 'Liquid Finance',
		'slug': 'liquid-finance',
		'symbol': 'LIQD'
	},
	{
		'id': 11973,
		'name': 'Thales',
		'slug': 'thales',
		'symbol': 'THALES'
	},
	{
		'id': 13309,
		'name': 'Cojam',
		'slug': 'cojam',
		'symbol': 'CT'
	},
	{
		'id': 22657,
		'name': 'Punk Panda Messenger',
		'slug': 'punk-panda-messenger',
		'symbol': 'PPM'
	},
	{
		'id': 13656,
		'name': 'Jacy',
		'slug': 'jacy',
		'symbol': 'JACY'
	},
	{
		'id': 14222,
		'name': 'StrongHands Finance',
		'slug': 'stronghands-finance',
		'symbol': 'ISHND'
	},
	{
		'id': 11867,
		'name': 'QCHAIN',
		'slug': 'qchain',
		'symbol': 'QDT'
	},
	{
		'id': 8173,
		'name': 'Loon Network',
		'slug': 'loon-network',
		'symbol': 'LOON'
	},
	{
		'id': 18359,
		'name': 'EarnGuild',
		'slug': 'earnguild',
		'symbol': 'EARN'
	},
	{
		'id': 12044,
		'name': 'Vera',
		'slug': 'vera-network',
		'symbol': 'VERA'
	},
	{
		'id': 23079,
		'name': 'CZRED',
		'slug': 'czred',
		'symbol': 'CZR'
	},
	{
		'id': 9870,
		'name': 'xWIN Finance',
		'slug': 'xwin-finance',
		'symbol': 'XWIN'
	},
	{
		'id': 23067,
		'name': 'Kingmaker',
		'slug': 'kingmaker',
		'symbol': 'POWER'
	},
	{
		'id': 15192,
		'name': 'Belrium',
		'slug': 'belrium',
		'symbol': 'BEL'
	},
	{
		'id': 10979,
		'name': 'Universe.XYZ',
		'slug': 'universe-xyz',
		'symbol': 'XYZ'
	},
	{
		'id': 21163,
		'name': 'Tao Te Ching',
		'slug': 'tao-te-ching',
		'symbol': 'TTC'
	},
	{
		'id': 20578,
		'name': 'FC Sion Fan Token',
		'slug': 'fc-sion-fan-token',
		'symbol': 'SION'
	},
	{
		'id': 14899,
		'name': 'xExchange',
		'slug': 'xexchange',
		'symbol': 'MEX'
	},
	{
		'id': 21286,
		'name': 'Cantina Royale',
		'slug': 'cantina-royale',
		'symbol': 'CRT'
	},
	{
		'id': 18210,
		'name': 'Kyberdyne',
		'slug': 'kyberdyne',
		'symbol': 'KBD'
	},
	{
		'id': 12182,
		'name': 'Blocto Token',
		'slug': 'blocto',
		'symbol': 'BLT'
	},
	{
		'id': 15515,
		'name': 'STMAN | Stickman\'s Battleground NFT Game',
		'slug': 'stman-stickmans-battleground-nft-game',
		'symbol': 'STMAN'
	},
	{
		'id': 14338,
		'name': 'PlayPad',
		'slug': 'playpad',
		'symbol': 'PPAD'
	},
	{
		'id': 8295,
		'name': 'CPUcoin',
		'slug': 'cpucoin',
		'symbol': 'CPU'
	},
	{
		'id': 20712,
		'name': 'Got Guaranteed',
		'slug': 'got-guaranteed',
		'symbol': 'GOTG'
	},
	{
		'id': 19513,
		'name': 'Nirvana ANA',
		'slug': 'nirvana-ana',
		'symbol': 'ANA'
	},
	{
		'id': 21729,
		'name': 'Tsukuyomi-no-Mikoto',
		'slug': 'tsukuyomi-no-mikoto',
		'symbol': 'MIKOTO'
	},
	{
		'id': 10508,
		'name': 'Instadapp',
		'slug': 'instadapp',
		'symbol': 'INST'
	},
	{
		'id': 13416,
		'name': 'Eco DeFi',
		'slug': 'eco-defi',
		'symbol': 'ECOP'
	},
	{
		'id': 18886,
		'name': 'iShares MSCI World ETF Tokenized Stock Defichain',
		'slug': 'ishares-msci-world-etf-tokenized-stock-defichain',
		'symbol': 'DURTH'
	},
	{
		'id': 10428,
		'name': 'Alium Finance',
		'slug': 'alium-finance',
		'symbol': 'ALM'
	},
	{
		'id': 22735,
		'name': 'XSwap Treasure',
		'slug': 'xswap-treasure',
		'symbol': 'XTT'
	},
	{
		'id': 8510,
		'name': 'QiSwap',
		'slug': 'qiswap',
		'symbol': 'QI'
	},
	{
		'id': 13411,
		'name': 'Titan Hunters',
		'slug': 'titan-hunters',
		'symbol': 'TITA'
	},
	{
		'id': 20940,
		'name': 'Defiskeletons',
		'slug': 'defiskeletons',
		'symbol': 'SKELETON'
	},
	{
		'id': 11474,
		'name': 'DeHero',
		'slug': 'dehero',
		'symbol': 'HEROES'
	},
	{
		'id': 8389,
		'name': 'BambooDeFi',
		'slug': 'bamboo-defi',
		'symbol': 'BAMBOO'
	},
	{
		'id': 7145,
		'name': 'Defi Shopping Stake',
		'slug': 'defi-shopping-stake',
		'symbol': 'DSS'
	},
	{
		'id': 18882,
		'name': 'iShares MSCI Emerging Markets ETF Defichain',
		'slug': 'energy-efficient-mortgage-tokenized-stock-defichain',
		'symbol': 'DEEM'
	},
	{
		'id': 7618,
		'name': 'Alpaca City',
		'slug': 'alpaca-city',
		'symbol': 'ALPA'
	},
	{
		'id': 9423,
		'name': 'Phuture',
		'slug': 'phuture',
		'symbol': 'PHTR'
	},
	{
		'id': 15889,
		'name': 'Metaverse Face',
		'slug': 'metaverse-face',
		'symbol': 'MEFA'
	},
	{
		'id': 10262,
		'name': 'KleeKai',
		'slug': 'kleekai',
		'symbol': 'KLEE'
	},
	{
		'id': 20923,
		'name': 'Duckereum',
		'slug': 'duckereum',
		'symbol': 'DUCKER'
	},
	{
		'id': 17288,
		'name': 'NFTDAO',
		'slug': 'nftdao',
		'symbol': 'NAO'
	},
	{
		'id': 8146,
		'name': 'Zipmex',
		'slug': 'zipmex',
		'symbol': 'ZMT'
	},
	{
		'id': 19517,
		'name': 'Smart Reward Token',
		'slug': 'smart-reward-token',
		'symbol': 'SRT'
	},
	{
		'id': 23199,
		'name': 'Control2XY',
		'slug': 'control2xy',
		'symbol': 'CTRL2XY'
	},
	{
		'id': 16049,
		'name': 'THORWallet DEX',
		'slug': 'thorwallet',
		'symbol': 'TGT'
	},
	{
		'id': 8316,
		'name': 'XUSD Stable',
		'slug': 'xusd-stable',
		'symbol': 'XUSD'
	},
	{
		'id': 10532,
		'name': 'Divergence',
		'slug': 'divergence',
		'symbol': 'DIVER'
	},
	{
		'id': 13628,
		'name': 'Zeitgeist',
		'slug': 'zeitgeist',
		'symbol': 'ZTG'
	},
	{
		'id': 18475,
		'name': 'Echidna',
		'slug': 'echidna',
		'symbol': 'ECD'
	},
	{
		'id': 19686,
		'name': 'AssetMantle',
		'slug': 'assetmantle',
		'symbol': 'MNTL'
	},
	{
		'id': 18797,
		'name': 'Beefy Escrowed Fantom',
		'slug': 'beefy-escrowed-fantom',
		'symbol': 'BEFTM'
	},
	{
		'id': 14228,
		'name': 'Babylon Finance',
		'slug': 'babylon-finance',
		'symbol': 'BABL'
	},
	{
		'id': 12199,
		'name': 'FUFU',
		'slug': 'fufu',
		'symbol': 'FUFU'
	},
	{
		'id': 19833,
		'name': 'API INU',
		'slug': 'api-inu',
		'symbol': 'API'
	},
	{
		'id': 23275,
		'name': 'MetaDoge',
		'slug': 'metadoge-top',
		'symbol': 'METADOGE'
	},
	{
		'id': 15187,
		'name': 'H3RO3S',
		'slug': 'h3ro3s',
		'symbol': 'H3RO3S'
	},
	{
		'id': 10686,
		'name': 'Evanesco Network',
		'slug': 'evanesco-network',
		'symbol': 'EVA'
	},
	{
		'id': 17290,
		'name': 'Solvent',
		'slug': 'solvent',
		'symbol': 'SVT'
	},
	{
		'id': 13877,
		'name': 'e-Money EUR',
		'slug': 'e-money',
		'symbol': 'EEUR'
	},
	{
		'id': 16194,
		'name': 'Akitavax',
		'slug': 'akitavax',
		'symbol': 'AKITAX'
	},
	{
		'id': 16488,
		'name': 'Artem Coin',
		'slug': 'artem-coin',
		'symbol': 'ARTEM'
	},
	{
		'id': 15588,
		'name': 'PathDAO',
		'slug': 'pathdao',
		'symbol': 'PATH'
	},
	{
		'id': 13051,
		'name': 'ARC',
		'slug': 'arc',
		'symbol': 'ARC'
	},
	{
		'id': 12889,
		'name': 'Hundred Finance',
		'slug': 'hundred-finance',
		'symbol': 'HND'
	},
	{
		'id': 19170,
		'name': 'iNFTspace',
		'slug': 'inftspace',
		'symbol': 'INS'
	},
	{
		'id': 12577,
		'name': 'PL^Gnet',
		'slug': 'plgnet',
		'symbol': 'PLUG'
	},
	{
		'id': 16010,
		'name': 'Silo Finance',
		'slug': 'silo-finance',
		'symbol': 'SILO'
	},
	{
		'id': 16100,
		'name': 'Crafting Finance',
		'slug': 'crafting-finance',
		'symbol': 'CRF'
	},
	{
		'id': 13606,
		'name': 'Great Bounty Dealer',
		'slug': 'great-bounty-dealer',
		'symbol': 'GBD'
	},
	{
		'id': 8658,
		'name': 'Wrapped WAN',
		'slug': 'wrapped-wan',
		'symbol': 'WWAN'
	},
	{
		'id': 14261,
		'name': 'Strip Finance',
		'slug': 'strip-finance',
		'symbol': 'STRIP'
	},
	{
		'id': 19102,
		'name': 'MLOKY',
		'slug': 'mloky',
		'symbol': 'MLOKY'
	},
	{
		'id': 20569,
		'name': 'Duzce Token',
		'slug': 'duzce-token',
		'symbol': 'DUZCE'
	},
	{
		'id': 7977,
		'name': 'Unit Protocol Duck',
		'slug': 'unit-protocol-duck',
		'symbol': 'DUCK'
	},
	{
		'id': 11785,
		'name': 'AvaXlauncher',
		'slug': 'avaxlauncher',
		'symbol': 'AVXL'
	},
	{
		'id': 20484,
		'name': 'GG TOKEN',
		'slug': 'gg-token',
		'symbol': 'GGTKN'
	},
	{
		'id': 8501,
		'name': 'Luxurious Pro Network Token',
		'slug': 'luxurious-pro-network-token',
		'symbol': 'LPNT'
	},
	{
		'id': 14669,
		'name': 'Ridge',
		'slug': 'ridge',
		'symbol': 'RIDGE'
	},
	{
		'id': 16105,
		'name': 'Chumbi Valley',
		'slug': 'chumbi-valley',
		'symbol': 'CHMB'
	},
	{
		'id': 13676,
		'name': 'BLOCKS',
		'slug': 'blocks',
		'symbol': 'BLOCKS'
	},
	{
		'id': 20136,
		'name': 'Pesabase',
		'slug': 'pesabase',
		'symbol': 'PESA'
	},
	{
		'id': 7381,
		'name': 'CoFiX',
		'slug': 'cofix',
		'symbol': 'COFI'
	},
	{
		'id': 19709,
		'name': 'GemHUB',
		'slug': 'gemhub',
		'symbol': 'GHUB'
	},
	{
		'id': 22897,
		'name': 'REGENT COIN',
		'slug': 'regent-coin',
		'symbol': 'REGENT'
	},
	{
		'id': 8657,
		'name': 'wanUSDT',
		'slug': 'wanusdt',
		'symbol': 'WANUSDT'
	},
	{
		'id': 23071,
		'name': 'Jelly eSports',
		'slug': 'jelly-esports',
		'symbol': 'JELLY'
	},
	{
		'id': 13938,
		'name': 'Game Coin',
		'slug': 'game-coin',
		'symbol': 'GMEX'
	},
	{
		'id': 22963,
		'name': 'Germany Rabbit Token',
		'slug': 'germany-rabbit-token',
		'symbol': 'GERMANY'
	},
	{
		'id': 21474,
		'name': 'Metaple Finance',
		'slug': 'metaple-finance',
		'symbol': 'MLX'
	},
	{
		'id': 8188,
		'name': 'MoneySwap',
		'slug': 'moneyswap',
		'symbol': 'MSWAP'
	},
	{
		'id': 6705,
		'name': 'Lien',
		'slug': 'lien',
		'symbol': 'LIEN'
	},
	{
		'id': 16741,
		'name': 'Space Misfits',
		'slug': 'space-misfits',
		'symbol': 'SMCW'
	},
	{
		'id': 10677,
		'name': 'Pollen',
		'slug': 'pollen',
		'symbol': 'PLN'
	},
	{
		'id': 9452,
		'name': 'Bandot Protocol',
		'slug': 'bandot-protocol',
		'symbol': 'BDT'
	},
	{
		'id': 14627,
		'name': 'SonarWatch',
		'slug': 'sonarwatch',
		'symbol': 'SONAR'
	},
	{
		'id': 22992,
		'name': 'Centurion Invest',
		'slug': 'centurion-invest',
		'symbol': 'CIX'
	},
	{
		'id': 11885,
		'name': 'HurricaneSwap Token',
		'slug': 'hurricaneswap-token',
		'symbol': 'HCT'
	},
	{
		'id': 19619,
		'name': 'Nation3',
		'slug': 'nation3',
		'symbol': 'NATION'
	},
	{
		'id': 11961,
		'name': 'Vee Finance',
		'slug': 'vee-finance',
		'symbol': 'VEE'
	},
	{
		'id': 12236,
		'name': 'Jet Protocol',
		'slug': 'jet-protocol',
		'symbol': 'JET'
	},
	{
		'id': 9438,
		'name': 'Nominex',
		'slug': 'nominex-token',
		'symbol': 'NMX'
	},
	{
		'id': 14112,
		'name': 'Aquarius',
		'slug': 'aquarius',
		'symbol': 'AQUA'
	},
	{
		'id': 18197,
		'name': 'Shibtoro',
		'slug': 'shibtoro',
		'symbol': 'SHIBTORO'
	},
	{
		'id': 15135,
		'name': 'TFS Token',
		'slug': 'tfs-token',
		'symbol': 'TFS'
	},
	{
		'id': 12836,
		'name': 'AutoCrypto',
		'slug': 'autocrypto',
		'symbol': 'AU'
	},
	{
		'id': 12325,
		'name': 'MarsRise',
		'slug': 'marsrise',
		'symbol': 'MARSRISE'
	},
	{
		'id': 16090,
		'name': 'UncleMine',
		'slug': 'unclemine',
		'symbol': 'UM'
	},
	{
		'id': 9450,
		'name': 'BLACKHOLE PROTOCOL',
		'slug': 'blackhole-protocol',
		'symbol': 'BLACK'
	},
	{
		'id': 22697,
		'name': 'Crypto Soccer',
		'slug': 'crypto-soccer-crs',
		'symbol': '$CRS'
	},
	{
		'id': 14925,
		'name': 'Witnet',
		'slug': 'witnet',
		'symbol': 'WIT'
	},
	{
		'id': 20528,
		'name': 'Bee Token',
		'slug': 'bee-gift-card',
		'symbol': 'BGC'
	},
	{
		'id': 12780,
		'name': 'French Connection Finance',
		'slug': 'french-connection-finance',
		'symbol': 'FCF'
	},
	{
		'id': 19879,
		'name': 'Soy Finance',
		'slug': 'soy-finance',
		'symbol': 'SOY'
	},
	{
		'id': 17633,
		'name': 'Emp Money',
		'slug': 'emp-money',
		'symbol': 'EMP'
	},
	{
		'id': 23323,
		'name': 'Gemstone',
		'slug': 'gemstone',
		'symbol': 'GEM'
	},
	{
		'id': 14784,
		'name': 'Squirt Game',
		'slug': 'squirt-game',
		'symbol': 'SQUIRT'
	},
	{
		'id': 21461,
		'name': 'XETA',
		'slug': 'xeta',
		'symbol': 'X3TA'
	},
	{
		'id': 16559,
		'name': 'Cherry Network',
		'slug': 'cherry-network',
		'symbol': 'CHER'
	},
	{
		'id': 16258,
		'name': 'World of Defish',
		'slug': 'world-of-defish',
		'symbol': 'WOD'
	},
	{
		'id': 11573,
		'name': 'Pylon Eco Token',
		'slug': 'pylon-eco-token',
		'symbol': 'PETN'
	},
	{
		'id': 21488,
		'name': 'CDbio',
		'slug': 'cdbio',
		'symbol': 'MCD'
	},
	{
		'id': 14872,
		'name': 'HUGHUG Coin',
		'slug': 'hughug-coin',
		'symbol': 'HGHG'
	},
	{
		'id': 23295,
		'name': 'Veno Finance',
		'slug': 'veno-finance-vno',
		'symbol': 'VNO'
	},
	{
		'id': 10364,
		'name': 'APWine Finance',
		'slug': 'apwine-finance',
		'symbol': 'APW'
	},
	{
		'id': 5580,
		'name': 'IDK',
		'slug': 'idk',
		'symbol': 'IDK'
	},
	{
		'id': 14074,
		'name': 'Anji',
		'slug': 'anji',
		'symbol': 'ANJI'
	},
	{
		'id': 20912,
		'name': 'Lite USD',
		'slug': 'lite-usd',
		'symbol': 'LITE'
	},
	{
		'id': 18795,
		'name': 'KOMPETE',
		'slug': 'kompete',
		'symbol': 'KOMPETE'
	},
	{
		'id': 18433,
		'name': 'Millennium Sapphire',
		'slug': 'millennium-sapphire',
		'symbol': 'MSTO'
	},
	{
		'id': 23286,
		'name': 'Hamachi Finance',
		'slug': 'hamachi',
		'symbol': 'HAMI'
	},
	{
		'id': 16304,
		'name': 'Astroport Classic',
		'slug': 'astroport-classic',
		'symbol': 'ASTRO'
	},
	{
		'id': 12546,
		'name': 'Liquidus',
		'slug': 'liquidus',
		'symbol': 'LIQ'
	},
	{
		'id': 18515,
		'name': 'Safuu',
		'slug': 'safuu',
		'symbol': 'SAFUU'
	},
	{
		'id': 12451,
		'name': 'Mondo Community Coin',
		'slug': 'mondo-community-coin',
		'symbol': 'MNDCC'
	},
	{
		'id': 22370,
		'name': 'AllStars Digital',
		'slug': 'allstars-digital',
		'symbol': 'ASX'
	},
	{
		'id': 15471,
		'name': '4JNET',
		'slug': '4jnet',
		'symbol': '4JNET'
	},
	{
		'id': 15100,
		'name': 'RaceFi',
		'slug': 'racefi',
		'symbol': 'RACEFI'
	},
	{
		'id': 15355,
		'name': 'Baby Lovely Inu',
		'slug': 'baby-lovely-inu',
		'symbol': 'BLOVELY'
	},
	{
		'id': 11090,
		'name': 'Invitoken',
		'slug': 'invitoken',
		'symbol': 'INVI'
	},
	{
		'id': 20897,
		'name': 'Holonus',
		'slug': 'holonus',
		'symbol': 'HLN'
	},
	{
		'id': 14878,
		'name': 'Alephium',
		'slug': 'alephium',
		'symbol': 'ALPH'
	},
	{
		'id': 14885,
		'name': 'Coinscope',
		'slug': 'coinscope',
		'symbol': 'COINSCOPE'
	},
	{
		'id': 12619,
		'name': 'Genie Protocol',
		'slug': 'genie-protocol',
		'symbol': 'GNP'
	},
	{
		'id': 9284,
		'name': 'Secured MoonRat Token',
		'slug': 'secured-moonrat-token',
		'symbol': 'SMRAT'
	},
	{
		'id': 12070,
		'name': 'Quidd',
		'slug': 'quidd',
		'symbol': 'QUIDD'
	},
	{
		'id': 12460,
		'name': 'UNITED EMIRATE DECENTRALIZED COIN.',
		'slug': 'united-emirate-decentralized-coin',
		'symbol': 'UEDC'
	},
	{
		'id': 23063,
		'name': 'SHIKOKU',
		'slug': 'shikoku',
		'symbol': 'SHIK'
	},
	{
		'id': 16363,
		'name': 'Minto',
		'slug': 'minto',
		'symbol': 'BTCMT'
	},
	{
		'id': 10984,
		'name': 'Witch Token',
		'slug': 'witch-token',
		'symbol': 'WITCH'
	},
	{
		'id': 22127,
		'name': 'BLOCK-E',
		'slug': 'block-e',
		'symbol': 'BLOCK-E'
	},
	{
		'id': 4388,
		'name': 'ExchangeCoin',
		'slug': 'exchange-coin',
		'symbol': 'EXCC'
	},
	{
		'id': 19976,
		'name': 'Blocksmith Labs Forge',
		'slug': 'blocksmith-labs-forge',
		'symbol': '$FORGE'
	},
	{
		'id': 5401,
		'name': 'CoinLoan',
		'slug': 'coinloan',
		'symbol': 'CLT'
	},
	{
		'id': 10033,
		'name': 'NFTMart Token',
		'slug': 'nftmart-token',
		'symbol': 'NMT'
	},
	{
		'id': 17030,
		'name': 'Max Revive',
		'slug': 'max-revive',
		'symbol': 'MAXR'
	},
	{
		'id': 22977,
		'name': 'Image Generation AI',
		'slug': 'image-generation-ai',
		'symbol': 'IMGNAI'
	},
	{
		'id': 10640,
		'name': 'Kawakami',
		'slug': 'kawakami-inu',
		'symbol': 'KAWA'
	},
	{
		'id': 21116,
		'name': 'Lunatics',
		'slug': 'lunatics',
		'symbol': 'LUNAT'
	},
	{
		'id': 18698,
		'name': 'Moonwell',
		'slug': 'moonwell',
		'symbol': 'MFAM'
	},
	{
		'id': 15404,
		'name': 'Meta Musk',
		'slug': 'meta-musk',
		'symbol': 'META'
	},
	{
		'id': 21606,
		'name': 'KeKChain',
		'slug': 'kekchain',
		'symbol': 'KEK'
	},
	{
		'id': 10367,
		'name': 'April',
		'slug': 'april',
		'symbol': 'APRIL'
	},
	{
		'id': 18418,
		'name': 'Vector Finance',
		'slug': 'vector-finance',
		'symbol': 'VTX'
	},
	{
		'id': 9798,
		'name': 'VELOREX',
		'slug': 'velorex',
		'symbol': 'VEX'
	},
	{
		'id': 6627,
		'name': 'Meter Stable',
		'slug': 'meter-stable',
		'symbol': 'MTR'
	},
	{
		'id': 21545,
		'name': 'MM Optimizer (Polygon)',
		'slug': 'mm-optimizer-polygon',
		'symbol': 'MMO'
	},
	{
		'id': 9247,
		'name': 'Whole Earth Coin',
		'slug': 'whole-earth-coin',
		'symbol': 'WEC'
	},
	{
		'id': 20667,
		'name': 'Lucidao',
		'slug': 'lucidao',
		'symbol': 'LCD'
	},
	{
		'id': 4114,
		'name': 'Golden Token',
		'slug': 'golden-token',
		'symbol': 'GOLD'
	},
	{
		'id': 21953,
		'name': 'Cloak',
		'slug': 'cloak',
		'symbol': 'CLOAK'
	},
	{
		'id': 13768,
		'name': 'ZeLoop Eco Reward',
		'slug': 'zeloop-eco-reward',
		'symbol': 'ERW'
	},
	{
		'id': 8683,
		'name': 'Asva',
		'slug': 'asva-finance',
		'symbol': 'ASVA'
	},
	{
		'id': 21023,
		'name': 'REX',
		'slug': 'rex-token',
		'symbol': 'XRX'
	},
	{
		'id': 17914,
		'name': 'Nexum',
		'slug': 'nexum',
		'symbol': 'NEXM'
	},
	{
		'id': 17334,
		'name': 'JumpToken',
		'slug': 'jumptoken',
		'symbol': 'JMPT'
	},
	{
		'id': 14586,
		'name': 'ShibElon',
		'slug': 'shibelon',
		'symbol': 'SHIBELON'
	},
	{
		'id': 10411,
		'name': 'Moonfarm Finance',
		'slug': 'moonfarm-finance',
		'symbol': 'MFO'
	},
	{
		'id': 11765,
		'name': 'BigShortBets',
		'slug': 'bigshortbets',
		'symbol': 'BIGSB'
	},
	{
		'id': 22186,
		'name': 'Stake DAO CRV',
		'slug': 'stake-dao-crv',
		'symbol': 'SDCRV'
	},
	{
		'id': 17566,
		'name': 'AlphaDEX',
		'slug': 'alphadex',
		'symbol': 'ROAR'
	},
	{
		'id': 10800,
		'name': 'Hungarian Vizsla Inu',
		'slug': 'hungarian-vizsla-inu',
		'symbol': 'HVI'
	},
	{
		'id': 19665,
		'name': 'HotMoon Token',
		'slug': 'hotmoon-token',
		'symbol': 'HOTMOON'
	},
	{
		'id': 8547,
		'name': 'RamenSwap',
		'slug': 'ramenswap',
		'symbol': 'RAMEN'
	},
	{
		'id': 10899,
		'name': 'Daddy Doge',
		'slug': 'daddy-doge',
		'symbol': 'DADDYDOGE'
	},
	{
		'id': 21920,
		'name': 'UwU Lend',
		'slug': 'uwu-lend',
		'symbol': 'UWU'
	},
	{
		'id': 20344,
		'name': 'iAssets',
		'slug': 'iassets',
		'symbol': 'ASSET'
	},
	{
		'id': 16138,
		'name': 'Parasol Finance',
		'slug': 'parasol-finance',
		'symbol': 'PSOL'
	},
	{
		'id': 10768,
		'name': 'KAKA NFT World',
		'slug': 'kaka-nft-world',
		'symbol': 'KAKA'
	},
	{
		'id': 21289,
		'name': 'Betterment Digital',
		'slug': 'betterment-digital',
		'symbol': 'BEMD'
	},
	{
		'id': 9782,
		'name': 'BitDiamond',
		'slug': 'bitdiamond',
		'symbol': 'BTDMD'
	},
	{
		'id': 16784,
		'name': 'ANTIS INU',
		'slug': 'antis-inu',
		'symbol': 'ANTIS'
	},
	{
		'id': 14126,
		'name': 'STOA Network',
		'slug': 'defi-stoa',
		'symbol': 'STA'
	},
	{
		'id': 12459,
		'name': 'Holdex Finance',
		'slug': 'holdex-finance',
		'symbol': 'HOLDEX'
	},
	{
		'id': 12961,
		'name': 'BullionFx',
		'slug': 'bullionfx',
		'symbol': 'BULL'
	},
	{
		'id': 10720,
		'name': 'Black Phoenix',
		'slug': 'black-phoenix',
		'symbol': 'BPX'
	},
	{
		'id': 21453,
		'name': 'Doge Eat Doge',
		'slug': 'doge-eat-doge',
		'symbol': 'OMNOM'
	},
	{
		'id': 9395,
		'name': 'Strite',
		'slug': 'strite',
		'symbol': 'STRI'
	},
	{
		'id': 14982,
		'name': 'Metapad',
		'slug': 'metapad',
		'symbol': 'MPD'
	},
	{
		'id': 12176,
		'name': 'Hummingbird Egg',
		'slug': 'hummingbird-egg-token',
		'symbol': 'HEGG'
	},
	{
		'id': 12960,
		'name': 'Helkin',
		'slug': 'helkin',
		'symbol': 'HK'
	},
	{
		'id': 22495,
		'name': 'Galaxy Finance',
		'slug': 'galaxy-finance-token',
		'symbol': 'GLF'
	},
	{
		'id': 16849,
		'name': 'OUSE Token',
		'slug': 'ouse-token',
		'symbol': 'OUSE'
	},
	{
		'id': 10467,
		'name': 'IRON Titanium Token',
		'slug': 'iron-titanium-token',
		'symbol': 'TITAN'
	},
	{
		'id': 22383,
		'name': 'Aptoge',
		'slug': 'aptoge',
		'symbol': 'APTOGE'
	},
	{
		'id': 19383,
		'name': 'Fuse Dollar',
		'slug': 'fuse-dollar',
		'symbol': 'FUSD'
	},
	{
		'id': 18584,
		'name': 'Dark Knight',
		'slug': 'darkknight',
		'symbol': 'DKNIGHT'
	},
	{
		'id': 12489,
		'name': 'Guardian',
		'slug': 'guardian',
		'symbol': 'GUARD'
	},
	{
		'id': 18879,
		'name': 'Invesco QQQ Trust Defichain',
		'slug': 'qqq-tokenized-stock-defichain',
		'symbol': 'DQQQ'
	},
	{
		'id': 20317,
		'name': 'USD+',
		'slug': 'usd',
		'symbol': 'USD+'
	},
	{
		'id': 22312,
		'name': 'ZudgeZury',
		'slug': 'zudgezury',
		'symbol': 'ZZC'
	},
	{
		'id': 21831,
		'name': 'Childhoods End',
		'slug': 'childhoods-end',
		'symbol': 'O'
	},
	{
		'id': 12448,
		'name': 'EverGrow',
		'slug': 'evergrowcoin',
		'symbol': 'EGC'
	},
	{
		'id': 14490,
		'name': 'Bit Hotel',
		'slug': 'bit-hotel',
		'symbol': 'BTH'
	},
	{
		'id': 22935,
		'name': 'Cookies Protocol',
		'slug': 'cookies-protocol',
		'symbol': 'CP'
	},
	{
		'id': 6867,
		'name': 'STABLE ASSET',
		'slug': 'stable-asset',
		'symbol': 'STA'
	},
	{
		'id': 7632,
		'name': 'Rake Finance',
		'slug': 'rake-finance',
		'symbol': 'RAK'
	},
	{
		'id': 21700,
		'name': 'Pikaster',
		'slug': 'pikaster-srbp',
		'symbol': 'SRBP'
	},
	{
		'id': 18261,
		'name': 'Adroverse',
		'slug': 'adroverse',
		'symbol': 'ADR'
	},
	{
		'id': 19556,
		'name': 'Apple',
		'slug': 'apple-binemon',
		'symbol': 'AMB'
	},
	{
		'id': 19143,
		'name': 'Aonea Coin',
		'slug': 'aonea-coin',
		'symbol': 'A1A'
	},
	{
		'id': 18448,
		'name': 'PornVerse',
		'slug': 'pornverse',
		'symbol': 'PVERSE'
	},
	{
		'id': 11056,
		'name': 'Golden Doge',
		'slug': 'golden-doge',
		'symbol': 'GDOGE'
	},
	{
		'id': 23239,
		'name': 'ESPL ARENA',
		'slug': 'espl-arena',
		'symbol': 'ARENA'
	},
	{
		'id': 12240,
		'name': 'MARS4',
		'slug': 'mars4',
		'symbol': 'MARS4'
	},
	{
		'id': 21997,
		'name': 'Hourglass',
		'slug': 'hourglass',
		'symbol': 'WAIT'
	},
	{
		'id': 22755,
		'name': 'Hati',
		'slug': 'hati',
		'symbol': 'HATI'
	},
	{
		'id': 21267,
		'name': 'Laika',
		'slug': 'laika',
		'symbol': 'LAIKA'
	},
	{
		'id': 20809,
		'name': 'Bone',
		'slug': 'bone-2',
		'symbol': 'BONE'
	},
	{
		'id': 12957,
		'name': 'Galactic Arena: The NFTverse',
		'slug': 'galatic-arena',
		'symbol': 'GAN'
	},
	{
		'id': 10973,
		'name': 'PureFi Protocol',
		'slug': 'purefi-protocol',
		'symbol': 'UFI'
	},
	{
		'id': 6264,
		'name': 'Dark Energy Crystals',
		'slug': 'dark-energy-crystals',
		'symbol': 'DEC'
	},
	{
		'id': 20612,
		'name': 'RC Celta de Vigo Fan Token',
		'slug': 'rc-celta-de-vigo-fan-token',
		'symbol': 'CFT'
	},
	{
		'id': 9936,
		'name': 'Elephant Money',
		'slug': 'elephant-money',
		'symbol': 'ELEPHANT'
	},
	{
		'id': 21976,
		'name': 'Devour',
		'slug': 'devour-token-v2',
		'symbol': 'DPAY'
	},
	{
		'id': 18048,
		'name': 'Ratio Finance',
		'slug': 'ratio-finance',
		'symbol': 'RATIO'
	},
	{
		'id': 22810,
		'name': 'El Dorado Exchange',
		'slug': 'el-dorado-exchange',
		'symbol': 'EDE'
	},
	{
		'id': 5705,
		'name': 'tGOLD',
		'slug': 'tgold',
		'symbol': 'TXAU'
	},
	{
		'id': 9997,
		'name': 'METANOA',
		'slug': 'noa-play',
		'symbol': 'NOA'
	},
	{
		'id': 10337,
		'name': 'Sheesha Finance [BEP20]',
		'slug': 'sheesha-finance-bep20',
		'symbol': 'SHEESHA'
	},
	{
		'id': 7913,
		'name': 'NVIDIA tokenized stock FTX',
		'slug': 'nvidia-tokenized-stock-ftx',
		'symbol': 'NVDA'
	},
	{
		'id': 19739,
		'name': 'Entice Coin',
		'slug': 'entice-coin',
		'symbol': 'NTIC'
	},
	{
		'id': 12381,
		'name': 'Smile Coin',
		'slug': 'smile-coin',
		'symbol': 'SMILE'
	},
	{
		'id': 15368,
		'name': 'Egoras Credit',
		'slug': 'egoras-credit',
		'symbol': 'EGC'
	},
	{
		'id': 4647,
		'name': 'PUBLISH',
		'slug': 'publish',
		'symbol': 'NEWS'
	},
	{
		'id': 19312,
		'name': 'Hatayspor Token',
		'slug': 'hatayspor-token',
		'symbol': 'HATAY'
	},
	{
		'id': 20574,
		'name': 'bitcci Cash',
		'slug': 'bitcci-cash',
		'symbol': 'BITCCA'
	},
	{
		'id': 19720,
		'name': 'The Meebits',
		'slug': 'the-meebits',
		'symbol': 'NMEEBITS'
	},
	{
		'id': 10065,
		'name': 'ILUS Coin',
		'slug': 'ilus-coin',
		'symbol': 'ILUS'
	},
	{
		'id': 22661,
		'name': 'Cydotori',
		'slug': 'cydotori',
		'symbol': 'DOTR'
	},
	{
		'id': 5450,
		'name': 'WiBX',
		'slug': 'wibx',
		'symbol': 'WBX'
	},
	{
		'id': 19458,
		'name': 'Hurrian Network',
		'slug': 'hurrian-network',
		'symbol': 'MLD'
	},
	{
		'id': 22073,
		'name': 'GOLCOIN',
		'slug': 'golcoin',
		'symbol': 'GOLC'
	},
	{
		'id': 19450,
		'name': 'Doubloon',
		'slug': 'doubloon-token',
		'symbol': 'DBL'
	},
	{
		'id': 22212,
		'name': 'ECLAT',
		'slug': 'eclat',
		'symbol': 'ELT'
	},
	{
		'id': 23164,
		'name': 'Dubbz',
		'slug': 'dubbz',
		'symbol': 'DUBBZ'
	},
	{
		'id': 16797,
		'name': 'MM Optimizer (Cronos)',
		'slug': 'mm-optimizer',
		'symbol': 'MMO'
	},
	{
		'id': 9740,
		'name': 'Dot Finance',
		'slug': 'dot-finance',
		'symbol': 'PINK'
	},
	{
		'id': 12077,
		'name': 'Zenith Coin',
		'slug': 'zenith-coin',
		'symbol': 'ZENITH'
	},
	{
		'id': 15469,
		'name': 'Sipher',
		'slug': 'sipher',
		'symbol': 'SIPHER'
	},
	{
		'id': 21096,
		'name': 'Magic Manor',
		'slug': 'magic-manor',
		'symbol': 'MGC'
	},
	{
		'id': 22334,
		'name': 'Bitcoin Legend',
		'slug': 'bitcoin-legend',
		'symbol': 'BCL'
	},
	{
		'id': 8826,
		'name': 'Moss Carbon Credit',
		'slug': 'moss-carbon-credit',
		'symbol': 'MCO2'
	},
	{
		'id': 10585,
		'name': 'TrustFi Network',
		'slug': 'trustfi-network',
		'symbol': 'TFI'
	},
	{
		'id': 6754,
		'name': 'Polkaswap',
		'slug': 'polkaswap',
		'symbol': 'PSWAP'
	},
	{
		'id': 18563,
		'name': 'UkraineDAO Flag NFT',
		'slug': 'ukrainedao-flag-nft',
		'symbol': 'LOVE'
	},
	{
		'id': 16763,
		'name': 'Doge Protocol',
		'slug': 'doge-protocol',
		'symbol': 'DOGEP'
	},
	{
		'id': 22998,
		'name': 'Malgo Finance',
		'slug': 'malgo-finance',
		'symbol': 'MGXG'
	},
	{
		'id': 17879,
		'name': 'Nexus Dubai',
		'slug': 'nexus-dubai',
		'symbol': 'NXD'
	},
	{
		'id': 20177,
		'name': 'Bee Capital',
		'slug': 'bee-capital',
		'symbol': 'BEE'
	},
	{
		'id': 22700,
		'name': 'Utopia USD',
		'slug': 'utopia-usd',
		'symbol': 'UUSD'
	},
	{
		'id': 8405,
		'name': 'Butterfly Protocol',
		'slug': 'butterfly-protocol-2',
		'symbol': 'BFLY'
	},
	{
		'id': 19856,
		'name': 'CatCoin',
		'slug': 'catcoin',
		'symbol': 'CATCOIN'
	},
	{
		'id': 7371,
		'name': 'Mover',
		'slug': 'mover',
		'symbol': 'MOVE'
	},
	{
		'id': 17316,
		'name': 'Spellfire',
		'slug': 'spellfire-re-master-the-magic',
		'symbol': 'SPELLFIRE'
	},
	{
		'id': 11473,
		'name': 'Yaki Gold',
		'slug': 'yaki-gold',
		'symbol': 'YAG'
	},
	{
		'id': 13272,
		'name': 'Credefi',
		'slug': 'credefi',
		'symbol': 'CREDI'
	},
	{
		'id': 5250,
		'name': 'HebeBlock',
		'slug': 'hebeblock',
		'symbol': 'HEBE'
	},
	{
		'id': 11927,
		'name': 'Solyard Finance',
		'slug': 'solyard-finance',
		'symbol': 'YARD'
	},
	{
		'id': 19587,
		'name': 'DracooMaster',
		'slug': 'dracoomaster-bas',
		'symbol': 'BAS'
	},
	{
		'id': 21208,
		'name': 'Volare Network',
		'slug': 'volare-network',
		'symbol': 'VOLR'
	},
	{
		'id': 4678,
		'name': 'Global Digital Content',
		'slug': 'global-digital-content',
		'symbol': 'GDC'
	},
	{
		'id': 5465,
		'name': 'Alchemy',
		'slug': 'alchemy',
		'symbol': 'ACOIN'
	},
	{
		'id': 16757,
		'name': 'GroupDao',
		'slug': 'groupdao',
		'symbol': 'GDO'
	},
	{
		'id': 15489,
		'name': 'Wizarre Scroll',
		'slug': 'wizarre',
		'symbol': 'SCRL'
	},
	{
		'id': 9976,
		'name': 'Freela',
		'slug': 'freela',
		'symbol': 'FREL'
	},
	{
		'id': 18670,
		'name': 'SatoshiCity',
		'slug': 'satoshicity',
		'symbol': '$CITY'
	},
	{
		'id': 12432,
		'name': 'StarSharks SEA',
		'slug': 'starsharks-sea',
		'symbol': 'SEA'
	},
	{
		'id': 15754,
		'name': 'RunNode',
		'slug': 'runnode',
		'symbol': 'RUN'
	},
	{
		'id': 9364,
		'name': 'Unlock Protocol',
		'slug': 'unlock-protocol',
		'symbol': 'UDT'
	},
	{
		'id': 20631,
		'name': 'Legacy ICHI',
		'slug': 'legacy-ichi',
		'symbol': 'ICHI'
	},
	{
		'id': 18939,
		'name': 'Wirtual',
		'slug': 'wirtual',
		'symbol': 'WIRTUAL'
	},
	{
		'id': 11921,
		'name': 'Nether NFT',
		'slug': 'nether-nft',
		'symbol': 'NTR'
	},
	{
		'id': 16465,
		'name': 'Terra Name Service',
		'slug': 'terra-name-service',
		'symbol': 'TNS'
	},
	{
		'id': 21478,
		'name': 'Bitzen.Space',
		'slug': 'bitzen-space',
		'symbol': 'BZEN'
	},
	{
		'id': 16543,
		'name': 'Avocado DAO Token',
		'slug': 'avocado-dao-token',
		'symbol': 'AVG'
	},
	{
		'id': 22913,
		'name': 'Dives Defi',
		'slug': 'dives-defi',
		'symbol': 'DDF'
	},
	{
		'id': 9191,
		'name': 'Occam.Fi',
		'slug': 'occamfi',
		'symbol': 'OCC'
	},
	{
		'id': 3741,
		'name': 'EurocoinToken',
		'slug': 'eurocoin-token',
		'symbol': 'ECTE'
	},
	{
		'id': 5330,
		'name': 'Shardus',
		'slug': 'shardus',
		'symbol': 'ULT'
	},
	{
		'id': 19524,
		'name': 'Avocado',
		'slug': 'avocado',
		'symbol': 'AVO'
	},
	{
		'id': 21274,
		'name': 'Suneku',
		'slug': 'suneku',
		'symbol': 'SUNEKU'
	},
	{
		'id': 13250,
		'name': 'Velhalla',
		'slug': 'velhalla',
		'symbol': 'SCAR'
	},
	{
		'id': 22099,
		'name': 'Tongtongcoin',
		'slug': 'tongtongcoin',
		'symbol': 'TTC'
	},
	{
		'id': 22770,
		'name': 'BattleFly',
		'slug': 'battlefly',
		'symbol': 'GFLY'
	},
	{
		'id': 18183,
		'name': 'Savanna',
		'slug': 'savanna',
		'symbol': 'SVN'
	},
	{
		'id': 7404,
		'name': 'Value Liquidity',
		'slug': 'value-defi',
		'symbol': 'VALUE'
	},
	{
		'id': 11603,
		'name': 'MarketMove',
		'slug': 'marketmove',
		'symbol': 'MOVE'
	},
	{
		'id': 14610,
		'name': 'EnviDa',
		'slug': 'envida',
		'symbol': 'EDAT'
	},
	{
		'id': 11522,
		'name': 'Jenny Metaverse DAO Token',
		'slug': 'jenny-metaverse-dao-token',
		'symbol': 'UJENNY'
	},
	{
		'id': 13246,
		'name': 'Liquid Driver',
		'slug': 'liquid-driver',
		'symbol': 'LQDR'
	},
	{
		'id': 21522,
		'name': 'CODE',
		'slug': 'developer-dao-code',
		'symbol': 'CODE'
	},
	{
		'id': 10866,
		'name': 'Million',
		'slug': 'million',
		'symbol': 'MM'
	},
	{
		'id': 16615,
		'name': 'Netswap',
		'slug': 'netswap',
		'symbol': 'NETT'
	},
	{
		'id': 16359,
		'name': 'Calo',
		'slug': 'calo-app',
		'symbol': 'CALO'
	},
	{
		'id': 21740,
		'name': 'CeBioLabs',
		'slug': 'cebiolabs',
		'symbol': 'CBSL'
	},
	{
		'id': 16528,
		'name': 'Sivasspor Token',
		'slug': 'sivasspor-token',
		'symbol': 'SIV'
	},
	{
		'id': 9487,
		'name': 'Sheesha Finance [ERC20]',
		'slug': 'sheesha-finance-erc20',
		'symbol': 'SHEESHA'
	},
	{
		'id': 19401,
		'name': 'Drawshop Kingdom Reverse',
		'slug': 'drawshop-kingdom-reverse',
		'symbol': 'JOY'
	},
	{
		'id': 15252,
		'name': 'OkLetsPlay',
		'slug': 'okletsplay',
		'symbol': 'OKLP'
	},
	{
		'id': 5420,
		'name': 'SonoCoin',
		'slug': 'sonocoin',
		'symbol': 'SONO'
	},
	{
		'id': 10095,
		'name': 'Elk Finance',
		'slug': 'elk-finance',
		'symbol': 'ELK'
	},
	{
		'id': 19400,
		'name': 'Panda DAO',
		'slug': 'pandadao',
		'symbol': 'PANDA'
	},
	{
		'id': 23207,
		'name': 'Proxy Swap',
		'slug': 'proxy-swap',
		'symbol': 'PROXY'
	},
	{
		'id': 14003,
		'name': 'Amaze World',
		'slug': 'amaze-world',
		'symbol': 'AMZE'
	},
	{
		'id': 20443,
		'name': 'FunFi',
		'slug': 'funfi',
		'symbol': 'FNF'
	},
	{
		'id': 17479,
		'name': 'Artmeta',
		'slug': 'artmeta',
		'symbol': 'MART'
	},
	{
		'id': 12229,
		'name': 'DogeGF',
		'slug': 'dogegf',
		'symbol': 'DOGEGF'
	},
	{
		'id': 22896,
		'name': 'MxmBoxcEus Token',
		'slug': 'mxmboxceus-token',
		'symbol': 'MBE'
	},
	{
		'id': 8899,
		'name': 'xSUSHI',
		'slug': 'xsushi',
		'symbol': 'XSUSHI'
	},
	{
		'id': 10556,
		'name': 'B.Protocol',
		'slug': 'b-protocol',
		'symbol': 'BPRO'
	},
	{
		'id': 12125,
		'name': 'SolRazr',
		'slug': 'solrazr',
		'symbol': 'SOLR'
	},
	{
		'id': 12465,
		'name': 'Ridotto',
		'slug': 'ridotto',
		'symbol': 'RDT'
	},
	{
		'id': 22847,
		'name': 'FNCY',
		'slug': 'fncy',
		'symbol': 'FNCY'
	},
	{
		'id': 22794,
		'name': 'Bored Candy City',
		'slug': 'bored-candy-city',
		'symbol': 'CANDY'
	},
	{
		'id': 20924,
		'name': 'Incube Chain',
		'slug': 'incube-chain',
		'symbol': 'ICB'
	},
	{
		'id': 20616,
		'name': 'Bodrumspor Fan Token',
		'slug': 'bodrumspor-fan-token',
		'symbol': 'BDRM'
	},
	{
		'id': 21764,
		'name': 'Fidance',
		'slug': 'fidance',
		'symbol': 'FDC'
	},
	{
		'id': 1982,
		'name': 'Kyber Network Crystal Legacy',
		'slug': 'kyber-network-crystal-legacy',
		'symbol': 'KNCL'
	},
	{
		'id': 23060,
		'name': 'Spot',
		'slug': 'spot',
		'symbol': 'SPOT'
	},
	{
		'id': 13437,
		'name': 'Kiba Inu',
		'slug': 'kiba-inu',
		'symbol': 'KIBA'
	},
	{
		'id': 12835,
		'name': 'Falcon Swaps',
		'slug': 'falcon-swaps',
		'symbol': 'FALCONS'
	},
	{
		'id': 9070,
		'name': 'CFX Quantum',
		'slug': 'cfx-quantum',
		'symbol': 'CFXQ'
	},
	{
		'id': 17588,
		'name': 'Drunk Robots',
		'slug': 'drunk-robots',
		'symbol': 'METAL'
	},
	{
		'id': 3156,
		'name': 'Airbloc',
		'slug': 'airbloc',
		'symbol': 'ABL'
	},
	{
		'id': 22409,
		'name': 'Gabur',
		'slug': 'gabur',
		'symbol': 'GBR'
	},
	{
		'id': 16914,
		'name': 'Metafluence',
		'slug': 'metafluence',
		'symbol': 'METO'
	},
	{
		'id': 13342,
		'name': 'SoulSwap Finance',
		'slug': 'soulswap-finance',
		'symbol': 'SOUL'
	},
	{
		'id': 16972,
		'name': 'Sheesha Finance Polygon',
		'slug': 'sheesha-finance-polygon',
		'symbol': 'MSHEESHA'
	},
	{
		'id': 21938,
		'name': 'Humanize',
		'slug': 'humanize',
		'symbol': '$HMT'
	},
	{
		'id': 20266,
		'name': 'SteakHut Finance',
		'slug': 'steakhut-finance',
		'symbol': 'STEAK'
	},
	{
		'id': 19595,
		'name': 'Blueshift',
		'slug': 'blueshift',
		'symbol': 'BLUES'
	},
	{
		'id': 22202,
		'name': 'Serum SER',
		'slug': 'serum-ser',
		'symbol': 'SER'
	},
	{
		'id': 15419,
		'name': 'Zenlink',
		'slug': 'zenlink',
		'symbol': 'ZLK'
	},
	{
		'id': 13715,
		'name': 'Fancy Games',
		'slug': 'fancy-games',
		'symbol': 'FNC'
	},
	{
		'id': 16690,
		'name': 'ABEY',
		'slug': 'abeychain',
		'symbol': 'ABEY'
	},
	{
		'id': 20281,
		'name': 'USDEX',
		'slug': 'usdex-token',
		'symbol': 'USDEX'
	},
	{
		'id': 8531,
		'name': 'Quantfury Token',
		'slug': 'quantfury-token',
		'symbol': 'QTF'
	},
	{
		'id': 21040,
		'name': 'Decred-Next',
		'slug': 'decred-next',
		'symbol': 'DCRN'
	},
	{
		'id': 8298,
		'name': 'Paralink Network',
		'slug': 'paralink-network',
		'symbol': 'PARA'
	},
	{
		'id': 20577,
		'name': 'Baskonia Fan Token',
		'slug': 'baskonia-fan-token',
		'symbol': 'BKN'
	},
	{
		'id': 20671,
		'name': 'Posschain',
		'slug': 'posschain',
		'symbol': 'POSS'
	},
	{
		'id': 19036,
		'name': 'Meta Utopia',
		'slug': 'meta-utopia',
		'symbol': 'LAND'
	},
	{
		'id': 6062,
		'name': 'HUPAYX',
		'slug': 'hupayx',
		'symbol': 'HPX'
	},
	{
		'id': 11941,
		'name': 'Xfinite Entertainment Token',
		'slug': 'xfinite-entertainment-token',
		'symbol': 'XET'
	},
	{
		'id': 14587,
		'name': 'Crypto Cavemen Club',
		'slug': 'crypto-cavemen-club',
		'symbol': 'CAVE'
	},
	{
		'id': 16033,
		'name': 'Metastrike',
		'slug': 'metastrike',
		'symbol': 'MTS'
	},
	{
		'id': 22728,
		'name': 'CrypWorld',
		'slug': 'crypworld',
		'symbol': 'CWC'
	},
	{
		'id': 8411,
		'name': 'Marginswap',
		'slug': 'marginswap',
		'symbol': 'MFI'
	},
	{
		'id': 20470,
		'name': 'Sing To Earn',
		'slug': 'sing-to-earn',
		'symbol': 'S2E'
	},
	{
		'id': 22655,
		'name': 'REBorn',
		'slug': 'reborn',
		'symbol': 'RB'
	},
	{
		'id': 22205,
		'name': 'GetKicks',
		'slug': 'getkicks',
		'symbol': 'KICKS'
	},
	{
		'id': 15841,
		'name': 'KnightSwap',
		'slug': 'knightswap',
		'symbol': 'KNIGHT'
	},
	{
		'id': 15096,
		'name': 'NIL Coin',
		'slug': 'nil-coin',
		'symbol': 'NIL'
	},
	{
		'id': 13871,
		'name': 'TaleCraft',
		'slug': 'talecraft',
		'symbol': 'CRAFT'
	},
	{
		'id': 11242,
		'name': 'Moonpot',
		'slug': 'moonpot',
		'symbol': 'POTS'
	},
	{
		'id': 3683,
		'name': 'AEN Smart Token',
		'slug': 'aen-smart-token',
		'symbol': 'AENS'
	},
	{
		'id': 20946,
		'name': 'WPT Investing Corp',
		'slug': 'wpt-investing-corp',
		'symbol': 'WPT'
	},
	{
		'id': 12826,
		'name': 'Mars Token',
		'slug': 'mars-token',
		'symbol': 'MRST'
	},
	{
		'id': 10128,
		'name': 'TeraBlock',
		'slug': 'terablock',
		'symbol': 'TBC'
	},
	{
		'id': 22408,
		'name': 'DAYSTARTER',
		'slug': 'daystarter',
		'symbol': 'DST'
	},
	{
		'id': 10894,
		'name': 'StorX Network',
		'slug': 'storx-network',
		'symbol': 'SRX'
	},
	{
		'id': 18813,
		'name': 'MetaWear',
		'slug': 'metawear',
		'symbol': 'WEAR'
	},
	{
		'id': 11492,
		'name': 'TCGCoin 2.0',
		'slug': 'tcgcoin-2-0',
		'symbol': 'TCG2'
	},
	{
		'id': 7908,
		'name': 'Guarded Ether',
		'slug': 'guarded-ether',
		'symbol': 'GETH'
	},
	{
		'id': 20872,
		'name': 'EDGE Activity Token',
		'slug': 'edge-activity-token',
		'symbol': 'EAT'
	},
	{
		'id': 10713,
		'name': 'Burp',
		'slug': 'bigtownchef',
		'symbol': 'BURP'
	},
	{
		'id': 5490,
		'name': 'Lux Bio Cell',
		'slug': 'lux-bio-cell',
		'symbol': 'LBXC'
	},
	{
		'id': 9456,
		'name': 'Australian Safe Shepherd',
		'slug': 'australian-safe-shepherd',
		'symbol': 'ASS'
	},
	{
		'id': 3162,
		'name': 'YoloCash',
		'slug': 'yolocash',
		'symbol': 'YLC'
	},
	{
		'id': 22061,
		'name': 'ZOMBIE SKRAT',
		'slug': 'zombie-skrat',
		'symbol': 'ZSKRAT'
	},
	{
		'id': 19571,
		'name': 'Amgen',
		'slug': 'amgen',
		'symbol': 'AMG'
	},
	{
		'id': 4848,
		'name': 'The Forbidden Forest',
		'slug': 'the-forbidden-forest',
		'symbol': 'FORESTPLUS'
	},
	{
		'id': 19474,
		'name': 'Hurricane NFT',
		'slug': 'hurricane-nft',
		'symbol': 'NHCT'
	},
	{
		'id': 12464,
		'name': 'Lox Network',
		'slug': 'lox-network',
		'symbol': 'LOX'
	},
	{
		'id': 18444,
		'name': 'Giresunspor Token',
		'slug': 'giresunspor-token',
		'symbol': 'GRS'
	},
	{
		'id': 10613,
		'name': 'Empire Token',
		'slug': 'empire-token',
		'symbol': 'EMPIRE'
	},
	{
		'id': 22321,
		'name': 'AshSwap',
		'slug': 'ashswap',
		'symbol': 'ASH'
	},
	{
		'id': 22104,
		'name': 'Joystick',
		'slug': 'joystick',
		'symbol': 'JOY'
	},
	{
		'id': 22522,
		'name': 'MXGP Fan Token',
		'slug': 'mxgp-fan-token',
		'symbol': 'MXGP'
	},
	{
		'id': 18892,
		'name': 'Reltime',
		'slug': 'reltime',
		'symbol': 'RTC'
	},
	{
		'id': 20366,
		'name': 'Interlay',
		'slug': 'interlay-intr',
		'symbol': 'INTR'
	},
	{
		'id': 17097,
		'name': 'SHIBIC',
		'slug': 'shiba-inu-classic',
		'symbol': 'SHIBIC'
	},
	{
		'id': 12767,
		'name': 'FODL Finance',
		'slug': 'fodl-finance',
		'symbol': 'FODL'
	},
	{
		'id': 16752,
		'name': 'Vault Hill City',
		'slug': 'vault-hill-city',
		'symbol': 'VHC'
	},
	{
		'id': 18142,
		'name': 'Ark Rivals',
		'slug': 'ark-rivals',
		'symbol': 'ARKN'
	},
	{
		'id': 11526,
		'name': 'Pledge',
		'slug': 'pledge',
		'symbol': 'PLGR'
	},
	{
		'id': 22464,
		'name': 'Rangers Fan Token',
		'slug': 'rangers-fan-token',
		'symbol': 'RFT'
	},
	{
		'id': 14650,
		'name': 'Andus Chain',
		'slug': 'andus-chain-daon',
		'symbol': 'DEB'
	},
	{
		'id': 6887,
		'name': 'Archethic',
		'slug': 'uniris',
		'symbol': 'UCO'
	},
	{
		'id': 11930,
		'name': 'HALO network',
		'slug': 'halo-network',
		'symbol': 'HO'
	},
	{
		'id': 17839,
		'name': 'Lenda',
		'slug': 'lenda',
		'symbol': 'LENDA'
	},
	{
		'id': 10167,
		'name': 'SpaceY',
		'slug': 'spacey',
		'symbol': 'SPAY'
	},
	{
		'id': 10714,
		'name': 'Babylons',
		'slug': 'babylons',
		'symbol': 'BABI'
	},
	{
		'id': 15752,
		'name': 'Blockasset',
		'slug': 'blockasset',
		'symbol': 'BLOCK'
	},
	{
		'id': 22184,
		'name': 'X7R',
		'slug': 'x7r',
		'symbol': 'X7R'
	},
	{
		'id': 21660,
		'name': 'Good Dog',
		'slug': 'good-dog',
		'symbol': 'HEEL'
	},
	{
		'id': 20618,
		'name': 'Bursaspor Fan Token',
		'slug': 'bursaspor-fan-token',
		'symbol': 'TMSH'
	},
	{
		'id': 21097,
		'name': 'SOULS OF META',
		'slug': 'souls-of-meta',
		'symbol': 'SOM'
	},
	{
		'id': 21885,
		'name': 'RUG RADIO',
		'slug': 'rug-radio',
		'symbol': 'RUG'
	},
	{
		'id': 19004,
		'name': 'Irena Green Energy',
		'slug': 'irena-green-energy',
		'symbol': 'IRENA'
	},
	{
		'id': 22802,
		'name': 'Mega Protocol',
		'slug': 'mega-protocol',
		'symbol': 'MEGA'
	},
	{
		'id': 17861,
		'name': 'DogeKing',
		'slug': 'dogeking',
		'symbol': 'DOGEKING'
	},
	{
		'id': 12378,
		'name': 'Quarashi',
		'slug': 'quarashi',
		'symbol': 'QUA'
	},
	{
		'id': 11697,
		'name': 'Phantom Protocol',
		'slug': 'phantom-protocol',
		'symbol': 'PHM'
	},
	{
		'id': 20613,
		'name': 'RCD Espanyol Fan Token',
		'slug': 'rcd-espanyol-fan-token',
		'symbol': 'ENFT'
	},
	{
		'id': 23190,
		'name': 'Cannaland Token',
		'slug': 'cannaland-token',
		'symbol': 'CNLT'
	},
	{
		'id': 17481,
		'name': 'Nunu Spirits',
		'slug': 'nunu-spirits',
		'symbol': 'NNT'
	},
	{
		'id': 20974,
		'name': 'FoxFinanceV2',
		'slug': 'fox-finance-new',
		'symbol': 'FOXV2'
	},
	{
		'id': 16917,
		'name': 'Play It Forward DAO',
		'slug': 'play-it-forward-dao',
		'symbol': 'PIF'
	},
	{
		'id': 11983,
		'name': 'Hudi',
		'slug': 'hudi',
		'symbol': 'HUDI'
	},
	{
		'id': 17469,
		'name': 'Single Finance',
		'slug': 'single-finance',
		'symbol': 'SINGLE'
	},
	{
		'id': 7909,
		'name': 'The APIS',
		'slug': 'the-apis',
		'symbol': 'API'
	},
	{
		'id': 22894,
		'name': 'Catvills Coin',
		'slug': 'catvills-coin',
		'symbol': 'CATVILLS'
	},
	{
		'id': 19762,
		'name': 'Sanin Inu',
		'slug': 'sanin-inu',
		'symbol': 'SANI'
	},
	{
		'id': 12087,
		'name': 'Panther Protocol',
		'slug': 'panther-protocol',
		'symbol': 'ZKP'
	},
	{
		'id': 21781,
		'name': 'Stride',
		'slug': 'stride',
		'symbol': 'STRD'
	},
	{
		'id': 22090,
		'name': 'LUSD Chicken Bonds',
		'slug': 'lusd-chicken-bonds',
		'symbol': 'BLUSD'
	},
	{
		'id': 18700,
		'name': 'Bitcoin Metaverse',
		'slug': 'bitcoin-metaverse',
		'symbol': 'BITMETA'
	},
	{
		'id': 21471,
		'name': 'StarSlax',
		'slug': 'starslax',
		'symbol': 'SSLX'
	},
	{
		'id': 19443,
		'name': 'Dog Boss',
		'slug': 'dog-boss',
		'symbol': 'DOGBOSS'
	},
	{
		'id': 14931,
		'name': 'NSUR COIN',
		'slug': 'nsur-coin',
		'symbol': 'NSUR'
	},
	{
		'id': 9694,
		'name': 'Upfire',
		'slug': 'upfire',
		'symbol': 'UPR'
	},
	{
		'id': 12364,
		'name': 'Youclout',
		'slug': 'youclout',
		'symbol': 'YCT'
	},
	{
		'id': 17208,
		'name': 'Chihuahua',
		'slug': 'chihuahua-wtf',
		'symbol': 'HUAHUA'
	},
	{
		'id': 5539,
		'name': 'VeraOne',
		'slug': 'veraone',
		'symbol': 'VRO'
	},
	{
		'id': 11870,
		'name': 'Edufex',
		'slug': 'edufex',
		'symbol': 'EDUX'
	},
	{
		'id': 11104,
		'name': 'Artery Network',
		'slug': 'artery-network',
		'symbol': 'ARTR'
	},
	{
		'id': 18354,
		'name': 'Rebel Bots',
		'slug': 'rebel-bots',
		'symbol': 'RBLS'
	},
	{
		'id': 15733,
		'name': 'Bent Finance',
		'slug': 'bent-finance',
		'symbol': 'BENT'
	},
	{
		'id': 23315,
		'name': 'HILO',
		'slug': 'hilo',
		'symbol': 'HILO'
	},
	{
		'id': 15893,
		'name': 'Ruby Currency',
		'slug': 'ruby-currency',
		'symbol': 'RBC'
	},
	{
		'id': 21933,
		'name': 'Kindly coin',
		'slug': 'kindly',
		'symbol': 'KIND'
	},
	{
		'id': 11851,
		'name': 'Crosschain IOTX',
		'slug': 'crosschain-iotx',
		'symbol': 'CIOTX'
	},
	{
		'id': 10742,
		'name': 'NEXTYPE',
		'slug': 'nextype',
		'symbol': 'NT'
	},
	{
		'id': 21064,
		'name': 'GICTrade',
		'slug': 'gictrade',
		'symbol': 'GICT'
	},
	{
		'id': 12873,
		'name': 'KlimaDAO',
		'slug': 'klimadao',
		'symbol': 'KLIMA'
	},
	{
		'id': 23150,
		'name': 'Blossom',
		'slug': 'blossom',
		'symbol': 'SAKURA'
	},
	{
		'id': 10255,
		'name': 'Game Ace Token',
		'slug': 'game-ace-token',
		'symbol': 'GAT'
	},
	{
		'id': 19886,
		'name': 'Fame MMA',
		'slug': 'fame-mma',
		'symbol': 'FAME'
	},
	{
		'id': 16905,
		'name': 'Crypto Chip Token',
		'slug': 'crypto-chip-token',
		'symbol': 'BVC'
	},
	{
		'id': 19637,
		'name': 'Miracle Universe',
		'slug': 'miracle-universe',
		'symbol': 'MU'
	},
	{
		'id': 23184,
		'name': 'Solge',
		'slug': 'solge',
		'symbol': 'SOLGE'
	},
	{
		'id': 12053,
		'name': 'Meta Spatial',
		'slug': 'meta-spatial',
		'symbol': 'SPAT'
	},
	{
		'id': 22502,
		'name': 'Don\'t Buy Inu',
		'slug': 'don-t-buy-inu',
		'symbol': 'DBI'
	},
	{
		'id': 19641,
		'name': 'Broovs Projects',
		'slug': 'broovs-projects',
		'symbol': 'BRS'
	},
	{
		'id': 11805,
		'name': 'Structure finance',
		'slug': 'structure-finance',
		'symbol': 'STF'
	},
	{
		'id': 17724,
		'name': 'Trace Network Labs',
		'slug': 'trace-network-labs',
		'symbol': 'TRACE'
	},
	{
		'id': 18023,
		'name': 'SKY FRONTIER',
		'slug': 'sky-frontier',
		'symbol': 'GSKY'
	},
	{
		'id': 20758,
		'name': '7Pixels',
		'slug': '7pixels',
		'symbol': '7PXS'
	},
	{
		'id': 13953,
		'name': 'Scotty Beam',
		'slug': 'scottybeam',
		'symbol': 'SCOTTY'
	},
	{
		'id': 13735,
		'name': 'SolDoge',
		'slug': 'soldoge',
		'symbol': 'SDOGE'
	},
	{
		'id': 8431,
		'name': 'G999',
		'slug': 'g999',
		'symbol': 'G999'
	},
	{
		'id': 14543,
		'name': 'Treasure Under Sea',
		'slug': 'treasure-under-sea',
		'symbol': 'TUS'
	},
	{
		'id': 20077,
		'name': 'Sunflower Land',
		'slug': 'sunflower-land',
		'symbol': 'SFL'
	},
	{
		'id': 23209,
		'name': 'T',
		'slug': 't',
		'symbol': 'T'
	},
	{
		'id': 8966,
		'name': 'Safemars',
		'slug': 'safemars',
		'symbol': 'SAFEMARS'
	},
	{
		'id': 19246,
		'name': 'PDBC Defichain',
		'slug': 'pdbc-defichain',
		'symbol': 'DPDBC'
	},
	{
		'id': 20648,
		'name': 'JPY Coin',
		'slug': 'jpy-coin',
		'symbol': 'JPYC'
	},
	{
		'id': 15002,
		'name': 'Kryxivia',
		'slug': 'kryxivia',
		'symbol': 'KXA'
	},
	{
		'id': 22036,
		'name': 'Gold Retriever',
		'slug': 'gold-retriever',
		'symbol': 'GLDN'
	},
	{
		'id': 22723,
		'name': 'CBFINU',
		'slug': 'cbfinu',
		'symbol': 'CBFINU'
	},
	{
		'id': 20431,
		'name': 'AnteDAO',
		'slug': 'antedao',
		'symbol': 'ANTE'
	},
	{
		'id': 12585,
		'name': 'Demole',
		'slug': 'demole',
		'symbol': 'DMLG'
	},
	{
		'id': 15456,
		'name': 'Juicebox',
		'slug': 'juicebox',
		'symbol': 'JBX'
	},
	{
		'id': 20488,
		'name': 'Chain of Legends',
		'slug': 'chain-of-legends',
		'symbol': 'CLEG'
	},
	{
		'id': 22527,
		'name': 'GameGuru',
		'slug': 'gameguru',
		'symbol': 'GGT'
	},
	{
		'id': 6668,
		'name': 'PROXI',
		'slug': 'proxi',
		'symbol': 'CREDIT'
	},
	{
		'id': 11715,
		'name': 'Snook',
		'slug': 'snook',
		'symbol': 'SNK'
	},
	{
		'id': 16394,
		'name': 'SUPE',
		'slug': 'supe',
		'symbol': 'SUPE'
	},
	{
		'id': 12773,
		'name': 'DfiStarter',
		'slug': 'dfistarter',
		'symbol': 'DFI'
	},
	{
		'id': 23280,
		'name': 'Genesis Wink',
		'slug': 'genesis-wink',
		'symbol': 'GWINK'
	},
	{
		'id': 12119,
		'name': 'Planet Sandbox',
		'slug': 'planet-sandbox',
		'symbol': 'PSB'
	},
	{
		'id': 19210,
		'name': 'Pando Token',
		'slug': 'pando-token',
		'symbol': 'PTX'
	},
	{
		'id': 23002,
		'name': 'MTG Token',
		'slug': 'mtg-token',
		'symbol': 'MTG'
	},
	{
		'id': 15182,
		'name': 'Chives Coin',
		'slug': 'chives-coin',
		'symbol': 'XCC'
	},
	{
		'id': 8427,
		'name': 'Lendhub',
		'slug': 'lendhub',
		'symbol': 'LHB'
	},
	{
		'id': 23198,
		'name': 'moSOLID',
		'slug': 'mosolid',
		'symbol': 'MOSOLID'
	},
	{
		'id': 22157,
		'name': 'Battle For Giostone',
		'slug': 'battle-for-giostone',
		'symbol': 'BFG'
	},
	{
		'id': 21793,
		'name': 'AtPay',
		'slug': 'atpay',
		'symbol': 'ATPAY'
	},
	{
		'id': 14075,
		'name': 'POOMOON',
		'slug': 'poomoon',
		'symbol': 'POO'
	},
	{
		'id': 17478,
		'name': 'Metarun',
		'slug': 'metarun',
		'symbol': 'MRUN'
	},
	{
		'id': 23188,
		'name': 'READ2N',
		'slug': 'read2n',
		'symbol': 'RCM'
	},
	{
		'id': 9928,
		'name': 'Space Token',
		'slug': 'space-token',
		'symbol': 'SPACE'
	},
	{
		'id': 16547,
		'name': 'Trisolaris',
		'slug': 'trisolaris',
		'symbol': 'TRI'
	},
	{
		'id': 19214,
		'name': 'VitaDAO',
		'slug': 'vitadao',
		'symbol': 'VITA'
	},
	{
		'id': 21686,
		'name': 'Stride Staked Atom',
		'slug': 'stride-staked-atom',
		'symbol': 'STATOM'
	},
	{
		'id': 12198,
		'name': 'Boss Token',
		'slug': 'boss-token',
		'symbol': 'BOSS'
	},
	{
		'id': 16893,
		'name': 'Compendium Finance',
		'slug': 'compendium-finance',
		'symbol': 'CMFI'
	},
	{
		'id': 16531,
		'name': 'Antalyaspor Token',
		'slug': 'antalyaspor-token',
		'symbol': 'AKREP'
	},
	{
		'id': 16665,
		'name': 'Welups Blockchain',
		'slug': 'welups-blockchain',
		'symbol': 'WELUPS'
	},
	{
		'id': 16201,
		'name': 'Day By Day',
		'slug': 'day-by-day',
		'symbol': 'DBD'
	},
	{
		'id': 10278,
		'name': 'Genshiro',
		'slug': 'genshiro',
		'symbol': 'GENS'
	},
	{
		'id': 16718,
		'name': 'ElevenToken',
		'slug': '11minutes',
		'symbol': 'ELVN'
	},
	{
		'id': 19823,
		'name': 'Medifakt',
		'slug': 'medifakt',
		'symbol': 'FAKT'
	},
	{
		'id': 18993,
		'name': 'Unitech',
		'slug': 'unitech',
		'symbol': 'UTC'
	},
	{
		'id': 5375,
		'name': 'Hive Dollar',
		'slug': 'hive-dollar',
		'symbol': 'HBD'
	},
	{
		'id': 20302,
		'name': 'Phuture DeFi Index',
		'slug': 'phuture-defi-index',
		'symbol': 'PDI'
	},
	{
		'id': 22875,
		'name': 'Petroleum OIL',
		'slug': 'petroleum-oil',
		'symbol': 'OIL'
	},
	{
		'id': 19357,
		'name': 'PolyPad',
		'slug': 'polypad',
		'symbol': 'POLYPAD'
	},
	{
		'id': 12910,
		'name': 'Virgo',
		'slug': 'virgo',
		'symbol': 'VGO'
	},
	{
		'id': 20175,
		'name': 'StepG',
		'slug': 'stepg',
		'symbol': 'STEPG'
	},
	{
		'id': 4202,
		'name': 'Opennity',
		'slug': 'opennity',
		'symbol': 'OPNN'
	},
	{
		'id': 13105,
		'name': 'MetaWars',
		'slug': 'metawars',
		'symbol': 'WARS'
	},
	{
		'id': 2305,
		'name': 'NAGA',
		'slug': 'naga',
		'symbol': 'NGC'
	},
	{
		'id': 20127,
		'name': 'iStep',
		'slug': 'istep',
		'symbol': 'ISTEP'
	},
	{
		'id': 10740,
		'name': 'Liti Capital',
		'slug': 'liti-capital',
		'symbol': 'WLITI'
	},
	{
		'id': 17818,
		'name': 'CoinRadr',
		'slug': 'coinradr',
		'symbol': 'RADR'
	},
	{
		'id': 16397,
		'name': 'Woozoo Music',
		'slug': 'woozoo-music',
		'symbol': 'WZM'
	},
	{
		'id': 21706,
		'name': 'SuperWalk',
		'slug': 'superwalk',
		'symbol': 'GRND'
	},
	{
		'id': 8508,
		'name': 'PoolTogether',
		'slug': 'pooltogether',
		'symbol': 'POOL'
	},
	{
		'id': 10423,
		'name': 'HollaEx Token',
		'slug': 'hollaex-token',
		'symbol': 'XHT'
	},
	{
		'id': 15921,
		'name': 'Poollotto.finance',
		'slug': 'poollotto-finance',
		'symbol': 'PLT'
	},
	{
		'id': 12606,
		'name': 'DeCredit',
		'slug': 'decredit',
		'symbol': 'CDTC'
	},
	{
		'id': 15829,
		'name': 'INFAM',
		'slug': 'infam',
		'symbol': 'INF'
	},
	{
		'id': 22745,
		'name': 'Very Banking',
		'slug': 'very-banking',
		'symbol': 'VB'
	},
	{
		'id': 21746,
		'name': 'GET',
		'slug': 'get',
		'symbol': 'GET'
	},
	{
		'id': 11933,
		'name': 'HalfPizza',
		'slug': 'halfpizza',
		'symbol': 'PIZA'
	},
	{
		'id': 10831,
		'name': 'Mimo Governance Token',
		'slug': 'parallel-protocol',
		'symbol': 'MIMO'
	},
	{
		'id': 21091,
		'name': 'Fautor',
		'slug': 'fandom',
		'symbol': 'FDM'
	},
	{
		'id': 23141,
		'name': 'Network Capital Token',
		'slug': 'network-capital-token',
		'symbol': 'NETC'
	},
	{
		'id': 10970,
		'name': 'BabyDoge ETH',
		'slug': 'babydoge-coin',
		'symbol': 'BABYDOGE'
	},
	{
		'id': 21857,
		'name': 'Lucro',
		'slug': 'lucro',
		'symbol': 'LCR'
	},
	{
		'id': 11967,
		'name': 'Hero Arena',
		'slug': 'hero-arena',
		'symbol': 'HERA'
	},
	{
		'id': 19860,
		'name': 'Cyber City',
		'slug': 'cyber-city',
		'symbol': 'CYBR'
	},
	{
		'id': 20154,
		'name': 'Acquire.Fi',
		'slug': 'acquire-fi',
		'symbol': 'ACQ'
	},
	{
		'id': 11470,
		'name': 'Boring Protocol',
		'slug': 'boring-protocol',
		'symbol': 'BOP'
	},
	{
		'id': 21874,
		'name': 'Gençlerbirliği Fan Token',
		'slug': 'genclerbirligi-fan-token',
		'symbol': 'GBSK'
	},
	{
		'id': 9342,
		'name': 'Community Business Token',
		'slug': 'community-business-token',
		'symbol': 'CBT'
	},
	{
		'id': 22955,
		'name': 'MaoRabbit',
		'slug': 'maorabbit',
		'symbol': 'MAORABBIT'
	},
	{
		'id': 6742,
		'name': 'Dx',
		'slug': 'dxsale-network',
		'symbol': 'SALE'
	},
	{
		'id': 9607,
		'name': 'Bankless DAO',
		'slug': 'bankless-dao',
		'symbol': 'BANK'
	},
	{
		'id': 22385,
		'name': 'Bluelight',
		'slug': 'bluelight',
		'symbol': 'KALE'
	},
	{
		'id': 21396,
		'name': 'ALLPAYCOIN',
		'slug': 'allpaycoin',
		'symbol': 'APCG'
	},
	{
		'id': 23205,
		'name': 'SORA Synthetics',
		'slug': 'sora-synthetics',
		'symbol': 'XST'
	},
	{
		'id': 4067,
		'name': 'Cryptoindex.com 100',
		'slug': 'cryptoindex-com-100',
		'symbol': 'CIX100'
	},
	{
		'id': 6369,
		'name': 'Maxonrow',
		'slug': 'maxonrow',
		'symbol': 'MXW'
	},
	{
		'id': 13936,
		'name': 'Ari10',
		'slug': 'ari10',
		'symbol': 'Ari10'
	},
	{
		'id': 15661,
		'name': 'LINKS Token',
		'slug': 'links-token',
		'symbol': 'LINKS'
	},
	{
		'id': 14791,
		'name': 'Saddle',
		'slug': 'saddle',
		'symbol': 'SDL'
	},
	{
		'id': 12640,
		'name': 'KICK.IO',
		'slug': 'kick-io',
		'symbol': 'KICK'
	},
	{
		'id': 14915,
		'name': 'UniX Gaming',
		'slug': 'unix-gaming',
		'symbol': 'UNIX'
	},
	{
		'id': 19100,
		'name': 'NeoFi',
		'slug': 'neofi',
		'symbol': 'NEOFI'
	},
	{
		'id': 10456,
		'name': 'Moon Nation Game',
		'slug': 'moon-nation-game',
		'symbol': 'MNG'
	},
	{
		'id': 22254,
		'name': 'SOWL Token',
		'slug': 'sowl-token',
		'symbol': 'SOWL'
	},
	{
		'id': 7816,
		'name': 'Basis Share',
		'slug': 'basis-share',
		'symbol': 'BAS'
	},
	{
		'id': 4801,
		'name': 'Codex',
		'slug': 'codex',
		'symbol': 'CDEX'
	},
	{
		'id': 22359,
		'name': 'XPLA',
		'slug': 'xpla',
		'symbol': 'XPLA'
	},
	{
		'id': 17317,
		'name': 'MultiPlanetary Inus',
		'slug': 'multiplanetary-inus',
		'symbol': 'INUS'
	},
	{
		'id': 14722,
		'name': 'DOGAMÍ',
		'slug': 'dogami',
		'symbol': 'DOGA'
	},
	{
		'id': 18236,
		'name': 'Titi Financial',
		'slug': 'titi-financial',
		'symbol': 'TITI'
	},
	{
		'id': 19107,
		'name': 'Ratscoin',
		'slug': 'ratscoin',
		'symbol': 'RATS'
	},
	{
		'id': 21145,
		'name': 'poundtoken',
		'slug': 'poundtoken',
		'symbol': 'GBPT'
	},
	{
		'id': 20098,
		'name': 'ZionTopia',
		'slug': 'ziontopia',
		'symbol': 'ZION'
	},
	{
		'id': 9712,
		'name': 'Shih Tzu',
		'slug': 'shih-tzu',
		'symbol': 'SHIH'
	},
	{
		'id': 14451,
		'name': 'SB GROUP',
		'slug': 'dragonsb',
		'symbol': 'SB'
	},
	{
		'id': 21768,
		'name': 'Hoichi',
		'slug': 'hoichi',
		'symbol': 'HOICHI'
	},
	{
		'id': 18976,
		'name': 'Victory Gem',
		'slug': 'victory-gem',
		'symbol': 'VTG'
	},
	{
		'id': 14906,
		'name': 'TokenSwap',
		'slug': 'tokenswap-dex',
		'symbol': 'TP'
	},
	{
		'id': 9547,
		'name': 'tSILVER',
		'slug': 'tsilver',
		'symbol': 'TXAG'
	},
	{
		'id': 13141,
		'name': 'Akt.io',
		'slug': 'akt-io',
		'symbol': 'AKTIO'
	},
	{
		'id': 8665,
		'name': 'Parallel',
		'slug': 'parallel',
		'symbol': 'PAR'
	},
	{
		'id': 22314,
		'name': 'Hippo Wallet Token (HPO)',
		'slug': 'hippo-wallet-token',
		'symbol': 'HPO'
	},
	{
		'id': 20688,
		'name': 'Mammoth',
		'slug': 'mammoth',
		'symbol': 'MMT'
	},
	{
		'id': 19755,
		'name': 'Burn',
		'slug': 'burn',
		'symbol': 'BURN'
	},
	{
		'id': 10898,
		'name': 'Wrapped Centrifuge',
		'slug': 'wrapped-centrifuge',
		'symbol': 'WCFG'
	},
	{
		'id': 17313,
		'name': 'Qitcoin',
		'slug': 'qitchain-network',
		'symbol': 'QTC'
	},
	{
		'id': 12769,
		'name': 'Ardana',
		'slug': 'ardana',
		'symbol': 'DANA'
	},
	{
		'id': 20614,
		'name': 'Adanaspor Fan Token',
		'slug': 'adanaspor-fan-token',
		'symbol': 'ADANA'
	},
	{
		'id': 20549,
		'name': 'VersaGames',
		'slug': 'versagames',
		'symbol': 'VERSA'
	},
	{
		'id': 10098,
		'name': 'Greenheart CBD',
		'slug': 'greenheart-cbd',
		'symbol': 'CBD'
	},
	{
		'id': 14535,
		'name': 'NFTBomb',
		'slug': 'nftbomb',
		'symbol': 'NBP'
	},
	{
		'id': 11935,
		'name': 'Parrot Protocol',
		'slug': 'parrot-protocol',
		'symbol': 'PRT'
	},
	{
		'id': 14524,
		'name': 'DeHealth',
		'slug': 'dehealth',
		'symbol': 'DHLT'
	},
	{
		'id': 21051,
		'name': 'Thunder Lands',
		'slug': 'thunder-lands',
		'symbol': 'TNDR'
	},
	{
		'id': 8113,
		'name': 'CryptoBank',
		'slug': 'cryptobank',
		'symbol': 'CBANK'
	},
	{
		'id': 12778,
		'name': 'Ojamu',
		'slug': 'ojamu',
		'symbol': 'OJA'
	},
	{
		'id': 20716,
		'name': 'Ferro',
		'slug': 'ferro',
		'symbol': 'FER'
	},
	{
		'id': 11352,
		'name': 'Moonie NFT',
		'slug': 'moonie-nft',
		'symbol': 'MNY'
	},
	{
		'id': 20724,
		'name': 'Liquid KSM',
		'slug': 'liquid-ksm',
		'symbol': 'LKSM'
	},
	{
		'id': 20367,
		'name': 'Good Person Coin',
		'slug': 'good-person-coin',
		'symbol': 'GPCX'
	},
	{
		'id': 4808,
		'name': 'Bincentive',
		'slug': 'bincentive',
		'symbol': 'BCNT'
	},
	{
		'id': 19714,
		'name': 'ℓUSD',
		'slug': 'linear-finance',
		'symbol': 'LUSD'
	},
	{
		'id': 19551,
		'name': 'Alluo',
		'slug': 'alluo',
		'symbol': 'ALLUO'
	},
	{
		'id': 22562,
		'name': 'Zombie Runner',
		'slug': 'zombie-runner',
		'symbol': 'ZOMBIE'
	},
	{
		'id': 18978,
		'name': 'Itheum',
		'slug': 'itheum',
		'symbol': 'ITHEUM'
	},
	{
		'id': 7926,
		'name': 'Facebook tokenized stock Bittrex',
		'slug': 'facebook-tokenized-stock-bittrex',
		'symbol': 'FB'
	},
	{
		'id': 21725,
		'name': 'StepEx',
		'slug': 'stepex',
		'symbol': 'SPEX'
	},
	{
		'id': 21758,
		'name': 'Growth DeFi',
		'slug': 'growthdefi-new',
		'symbol': 'xGRO'
	},
	{
		'id': 15853,
		'name': 'Axl Inu',
		'slug': 'axl-inu',
		'symbol': 'AXL'
	},
	{
		'id': 21916,
		'name': 'ISKRA Token',
		'slug': 'iskra',
		'symbol': 'ISK'
	},
	{
		'id': 12209,
		'name': 'Altair',
		'slug': 'altair',
		'symbol': 'AIR'
	},
	{
		'id': 13167,
		'name': 'Mimir Token',
		'slug': 'mimir-token',
		'symbol': 'MIMIR'
	},
	{
		'id': 20115,
		'name': 'DELOT.IO',
		'slug': 'delot-io',
		'symbol': 'DELOT'
	},
	{
		'id': 20381,
		'name': 'Graviton',
		'slug': 'grav',
		'symbol': 'GRAV'
	},
	{
		'id': 23088,
		'name': 'Tillage',
		'slug': 'tillage',
		'symbol': 'TILL'
	},
	{
		'id': 20305,
		'name': 'Konnect',
		'slug': 'konnect',
		'symbol': 'KCT'
	},
	{
		'id': 13675,
		'name': 'Kintsugi',
		'slug': 'kintsugi',
		'symbol': 'KINT'
	},
	{
		'id': 5958,
		'name': 'MOTIV Protocol',
		'slug': 'motiv-protocol',
		'symbol': 'MOV'
	},
	{
		'id': 15688,
		'name': 'Domi Online',
		'slug': 'domi-online',
		'symbol': 'DOMI'
	},
	{
		'id': 16034,
		'name': 'The Wasted Lands',
		'slug': 'the-wasted-lands',
		'symbol': 'WAL'
	},
	{
		'id': 9840,
		'name': 'Pleasure Coin',
		'slug': 'pleasure-coin',
		'symbol': 'NSFW'
	},
	{
		'id': 19822,
		'name': 'SmartFi',
		'slug': 'smartfi',
		'symbol': 'SMTF'
	},
	{
		'id': 12306,
		'name': 'Raptoreum',
		'slug': 'raptoreum',
		'symbol': 'RTM'
	},
	{
		'id': 22945,
		'name': 'TURBOCHAIN',
		'slug': 'turbochain',
		'symbol': 'TBC'
	},
	{
		'id': 6963,
		'name': 'DMD',
		'slug': 'dmd',
		'symbol': 'DMD'
	},
	{
		'id': 9549,
		'name': 'Mercurial Finance',
		'slug': 'mercurial-finance',
		'symbol': 'MER'
	},
	{
		'id': 16218,
		'name': 'Marvelous NFTs (Bad Days)',
		'slug': 'marvelous-nfts-bad-days',
		'symbol': 'MNFT'
	},
	{
		'id': 21998,
		'name': '2G CARBON COIN',
		'slug': '2g-carbon-coin',
		'symbol': '2GCC'
	},
	{
		'id': 12568,
		'name': 'EverestCoin',
		'slug': 'everestcoin',
		'symbol': 'EVCoin'
	},
	{
		'id': 21586,
		'name': 'Alpha Labz',
		'slug': 'alpha-labz',
		'symbol': '$ALPHA'
	},
	{
		'id': 8264,
		'name': 'Basis Gold Share',
		'slug': 'basis-gold-share',
		'symbol': 'BAGS'
	},
	{
		'id': 23153,
		'name': 'Wrapped Toncoin',
		'slug': 'wrapped-toncoin',
		'symbol': 'JTON'
	},
	{
		'id': 16333,
		'name': 'PeaceTokenFinance',
		'slug': 'peacetokenfinance',
		'symbol': 'PET'
	},
	{
		'id': 45,
		'name': 'CasinoCoin',
		'slug': 'casinocoin',
		'symbol': 'CSC'
	},
	{
		'id': 20743,
		'name': 'Genopets KI',
		'slug': 'genopets-ki',
		'symbol': 'KI'
	},
	{
		'id': 15830,
		'name': 'GAMER',
		'slug': 'gamer',
		'symbol': 'GMR'
	},
	{
		'id': 14349,
		'name': 'Tutellus',
		'slug': 'tutellus',
		'symbol': 'TUT'
	},
	{
		'id': 22757,
		'name': 'REDANCOIN',
		'slug': 'redancoin',
		'symbol': 'REDAN'
	},
	{
		'id': 10530,
		'name': 'CrossWallet',
		'slug': 'crosswallet',
		'symbol': 'CWT'
	},
	{
		'id': 7136,
		'name': 'OneSwap DAO Token',
		'slug': 'oneswap-dao-token',
		'symbol': 'ONES'
	},
	{
		'id': 6914,
		'name': 'junca Cash',
		'slug': 'junca-cash',
		'symbol': 'JCC'
	},
	{
		'id': 11018,
		'name': 'CryptoArt.Ai',
		'slug': 'cryptoart-ai',
		'symbol': 'CART'
	},
	{
		'id': 17429,
		'name': 'Puff',
		'slug': 'puff',
		'symbol': 'PUFF'
	},
	{
		'id': 22854,
		'name': 'ExodusExt',
		'slug': 'exodusext',
		'symbol': 'EXT'
	},
	{
		'id': 19689,
		'name': 'Hydranet',
		'slug': 'hydranet',
		'symbol': 'HDX'
	},
	{
		'id': 11301,
		'name': 'YEL.Finance',
		'slug': 'yel-finance',
		'symbol': 'YEL'
	},
	{
		'id': 20617,
		'name': 'Kocaelispor Fan Token',
		'slug': 'kocaelispor-fan-token',
		'symbol': 'KSTT'
	},
	{
		'id': 8167,
		'name': 'Wise Token',
		'slug': 'wise',
		'symbol': 'WISE'
	},
	{
		'id': 22189,
		'name': 'Maximus DECI',
		'slug': 'maximus-deci',
		'symbol': 'DECI'
	},
	{
		'id': 11338,
		'name': 'Block Commerce Protocol',
		'slug': 'block-commerce-protocol',
		'symbol': 'BCP'
	},
	{
		'id': 22075,
		'name': 'UCO Network',
		'slug': 'uco-network',
		'symbol': 'UCOIL'
	},
	{
		'id': 12208,
		'name': 'Taxa Token',
		'slug': 'taxa-token',
		'symbol': 'TXT'
	},
	{
		'id': 18739,
		'name': 'Subawu Token',
		'slug': 'subawu-token',
		'symbol': 'SUBAWU'
	},
	{
		'id': 20921,
		'name': 'Bombcrypto Coin',
		'slug': 'bombcrypto-coin',
		'symbol': 'BOMB'
	},
	{
		'id': 13813,
		'name': 'ENTERBUTTON',
		'slug': 'enterbutton',
		'symbol': 'ENTC'
	},
	{
		'id': 11126,
		'name': 'Hypersign identity',
		'slug': 'hypersign-identity',
		'symbol': 'HID'
	},
	{
		'id': 23050,
		'name': 'iinjaz (new)',
		'slug': 'iinjaz-new',
		'symbol': 'IJZ'
	},
	{
		'id': 8358,
		'name': 'Potentiam',
		'slug': 'potentiam',
		'symbol': 'PTM'
	},
	{
		'id': 22044,
		'name': 'Halloween Floki',
		'slug': 'halloween-floki',
		'symbol': 'FLOH'
	},
	{
		'id': 22245,
		'name': 'Phenix Finance (NEW)',
		'slug': 'phenix-finance-new',
		'symbol': 'PHNX'
	},
	{
		'id': 23125,
		'name': 'Poison Finance',
		'slug': 'poison',
		'symbol': 'POI$ON'
	},
	{
		'id': 23075,
		'name': 'Acria.AI',
		'slug': 'acria',
		'symbol': 'ACRIA'
	},
	{
		'id': 5800,
		'name': 'Treecle',
		'slug': 'treecle',
		'symbol': 'TRCL'
	},
	{
		'id': 14713,
		'name': 'Comdex',
		'slug': 'comdex',
		'symbol': 'CMDX'
	},
	{
		'id': 18741,
		'name': 'MetaFighter',
		'slug': 'metafighter',
		'symbol': 'MF'
	},
	{
		'id': 11297,
		'name': 'Solanax',
		'slug': 'solanax',
		'symbol': 'SOLD'
	},
	{
		'id': 15230,
		'name': 'Cheems Inu',
		'slug': 'cheems-inu',
		'symbol': 'CINU'
	},
	{
		'id': 14488,
		'name': 'JK Coin',
		'slug': 'jk-coin',
		'symbol': 'JK'
	},
	{
		'id': 23172,
		'name': 'CHILI',
		'slug': 'chili',
		'symbol': 'CHILI'
	},
	{
		'id': 16863,
		'name': 'Crypto Raiders',
		'slug': 'crypto-raider',
		'symbol': 'RAIDER'
	},
	{
		'id': 17770,
		'name': 'NextEarth',
		'slug': 'nextearth',
		'symbol': 'NXTT'
	},
	{
		'id': 5189,
		'name': 'AK12',
		'slug': 'ak12',
		'symbol': 'AK12'
	},
	{
		'id': 9207,
		'name': 'Metaverse Index',
		'slug': 'metaverse-index',
		'symbol': 'MVI'
	},
	{
		'id': 22020,
		'name': 'MUU',
		'slug': 'muu',
		'symbol': 'MUU'
	},
	{
		'id': 19837,
		'name': 'Maximus Token',
		'slug': 'maximus-token',
		'symbol': 'MAXI'
	},
	{
		'id': 19132,
		'name': 'LEMON',
		'slug': 'lemon',
		'symbol': 'LEMN'
	},
	{
		'id': 19006,
		'name': 'RadioShack',
		'slug': 'radioshack',
		'symbol': 'RADIO'
	},
	{
		'id': 19467,
		'name': 'TipsyCoin',
		'slug': 'tipsycoin',
		'symbol': '$TIPSY'
	},
	{
		'id': 16272,
		'name': 'PLT',
		'slug': 'plt-token',
		'symbol': 'PLT'
	},
	{
		'id': 10524,
		'name': 'reBaked',
		'slug': 'rebaked',
		'symbol': 'BAKED'
	},
	{
		'id': 8926,
		'name': 'Catapult',
		'slug': 'a2dao',
		'symbol': 'ATD'
	},
	{
		'id': 20958,
		'name': 'Teh Golden One',
		'slug': 'teh-golden-one',
		'symbol': 'GOLD 1'
	},
	{
		'id': 11779,
		'name': 'Dreams Quest',
		'slug': 'dreams-quest',
		'symbol': 'DREAMS'
	},
	{
		'id': 19315,
		'name': 'Tuzlaspor Token',
		'slug': 'tuzlaspor-token',
		'symbol': 'TUZLA'
	},
	{
		'id': 14849,
		'name': 'Centcex',
		'slug': 'centcex',
		'symbol': 'CENX'
	},
	{
		'id': 7219,
		'name': 'Rubic',
		'slug': 'rubic',
		'symbol': 'RBC'
	},
	{
		'id': 18818,
		'name': 'LoopSwap',
		'slug': 'loopswap',
		'symbol': 'LSWAP'
	},
	{
		'id': 23181,
		'name': 'Pusuke Inu',
		'slug': 'pusuke-inu',
		'symbol': 'PUSUKE'
	},
	{
		'id': 17383,
		'name': 'The Neko',
		'slug': 'the-neko',
		'symbol': 'NEKO'
	},
	{
		'id': 21185,
		'name': 'VirtualMeta',
		'slug': 'virtualmeta',
		'symbol': 'VMA'
	},
	{
		'id': 19865,
		'name': 'aRIA Currency',
		'slug': 'aria-currency',
		'symbol': 'RIA'
	},
	{
		'id': 10061,
		'name': 'CumInu',
		'slug': 'cuminu',
		'symbol': 'CUMINU'
	},
	{
		'id': 20375,
		'name': 'Whale Maker Fund',
		'slug': 'whale-maker-fund',
		'symbol': 'WMF'
	},
	{
		'id': 19603,
		'name': 'MICROCOSM',
		'slug': 'microcosm',
		'symbol': 'MIC'
	},
	{
		'id': 22458,
		'name': 'DOLZ',
		'slug': 'dolz',
		'symbol': 'DOLZ'
	},
	{
		'id': 10221,
		'name': 'Fanadise',
		'slug': 'fanadise',
		'symbol': 'FAN'
	},
	{
		'id': 20894,
		'name': 'WingRiders Governance Token',
		'slug': 'wingriders',
		'symbol': 'WRT'
	},
	{
		'id': 18280,
		'name': 'Bnext Token',
		'slug': 'bnext-token',
		'symbol': 'B3X'
	},
	{
		'id': 22294,
		'name': 'MetaSportsToken',
		'slug': 'metasportstoken',
		'symbol': 'MST'
	},
	{
		'id': 10202,
		'name': 'Starcoin',
		'slug': 'starcoin-stc',
		'symbol': 'STC'
	},
	{
		'id': 9265,
		'name': 'Porta',
		'slug': 'porta',
		'symbol': 'KIAN'
	},
	{
		'id': 4865,
		'name': 'Nahmii',
		'slug': 'nahmii',
		'symbol': 'NII'
	},
	{
		'id': 4119,
		'name': 'VinDax Coin',
		'slug': 'vindax-coin',
		'symbol': 'VD'
	},
	{
		'id': 22003,
		'name': 'Korea Entertainment Education & Shopping',
		'slug': 'korea-entertainment-education-shopping',
		'symbol': 'KEES'
	},
	{
		'id': 23281,
		'name': 'Communis',
		'slug': 'communis',
		'symbol': 'COM'
	},
	{
		'id': 22249,
		'name': 'DeFi Franc',
		'slug': 'defi-franc-token',
		'symbol': 'DCHF'
	},
	{
		'id': 18576,
		'name': 'Heal The World',
		'slug': 'heal-the-world',
		'symbol': 'HEAL'
	},
	{
		'id': 19034,
		'name': 'SpacePi',
		'slug': 'spacepi',
		'symbol': 'SPACEPI'
	},
	{
		'id': 13574,
		'name': 'Neos Credits',
		'slug': 'neos-credits',
		'symbol': 'NCR'
	},
	{
		'id': 11350,
		'name': 'NFTLaunch',
		'slug': 'nftlaunch',
		'symbol': 'NFTL'
	},
	{
		'id': 20615,
		'name': 'Fatih Karagümrük SK Fan Token',
		'slug': 'fatih-karagumruk-sk-fan-token',
		'symbol': 'FKSK'
	},
	{
		'id': 22876,
		'name': 'Meta Dance',
		'slug': 'meta-dance',
		'symbol': 'MDT'
	},
	{
		'id': 13886,
		'name': 'Terra World Token',
		'slug': 'terra-world-token',
		'symbol': 'TWD'
	},
	{
		'id': 22217,
		'name': 'Maximus Coin',
		'slug': 'maximus-coin',
		'symbol': 'MXZ'
	},
	{
		'id': 8678,
		'name': 'EHash',
		'slug': 'ehash',
		'symbol': 'EHASH'
	},
	{
		'id': 22046,
		'name': 'Shihtzu Exchange',
		'slug': 'shihtzu-exchange',
		'symbol': 'STZU'
	},
	{
		'id': 9035,
		'name': 'Vidiachange',
		'slug': 'vidiachange',
		'symbol': 'VIDA'
	},
	{
		'id': 11390,
		'name': 'Hibiki Finance',
		'slug': 'hibiki-finance',
		'symbol': 'HIBIKI'
	},
	{
		'id': 22866,
		'name': 'Radiant',
		'slug': 'radiant',
		'symbol': 'RXD'
	},
	{
		'id': 17349,
		'name': 'QoWatt',
		'slug': 'qowatt',
		'symbol': 'QWT'
	},
	{
		'id': 19544,
		'name': 'Swappi',
		'slug': 'swappi-dex',
		'symbol': 'PPI'
	},
	{
		'id': 21807,
		'name': 'ITSBLOC',
		'slug': 'itsbloc',
		'symbol': 'ITSB'
	},
	{
		'id': 17459,
		'name': 'veDAO',
		'slug': 'vedao',
		'symbol': 'WEVE'
	},
	{
		'id': 17433,
		'name': 'Topshelf Finance',
		'slug': 'topshelf-finance',
		'symbol': 'LIQR'
	},
	{
		'id': 11153,
		'name': 'EmiSwap',
		'slug': 'emiswap',
		'symbol': 'ESW'
	},
	{
		'id': 19209,
		'name': 'CouponBay',
		'slug': 'couponbay',
		'symbol': 'CUP'
	},
	{
		'id': 15870,
		'name': 'League of Ancients',
		'slug': 'league-of-ancients',
		'symbol': 'LOA'
	},
	{
		'id': 16011,
		'name': 'Goldario',
		'slug': 'goldario',
		'symbol': 'GLD'
	},
	{
		'id': 2569,
		'name': 'CoinPoker',
		'slug': 'coinpoker',
		'symbol': 'CHP'
	},
	{
		'id': 20619,
		'name': 'Afyonspor Fan Token',
		'slug': 'afyonspor-fan-token',
		'symbol': 'AFYON'
	},
	{
		'id': 15013,
		'name': 'ReSource Protocol',
		'slug': 'resource-protocol',
		'symbol': 'SOURCE'
	},
	{
		'id': 17954,
		'name': 'Based Finance',
		'slug': 'based-finance',
		'symbol': 'BASED'
	},
	{
		'id': 16982,
		'name': 'Moola Celo EUR',
		'slug': 'moola-celo-eur',
		'symbol': 'mCEUR'
	},
	{
		'id': 19011,
		'name': 'LunaFi',
		'slug': 'lunafi',
		'symbol': 'LFI'
	},
	{
		'id': 6883,
		'name': 'KittenFinance',
		'slug': 'kittenfinance',
		'symbol': 'KIF'
	},
	{
		'id': 17969,
		'name': 'Heroes of NFT',
		'slug': 'heroes-of-nft',
		'symbol': 'HON'
	},
	{
		'id': 22672,
		'name': 'LaEeb Token',
		'slug': 'laeeb-token-2',
		'symbol': 'LAEEB'
	},
	{
		'id': 23242,
		'name': 'TradeWix',
		'slug': 'tradewix',
		'symbol': 'WIX'
	},
	{
		'id': 6890,
		'name': 'TON Token',
		'slug': 'tontoken',
		'symbol': 'TON'
	},
	{
		'id': 18056,
		'name': 'ZONE',
		'slug': 'zone',
		'symbol': 'ZONE'
	},
	{
		'id': 8971,
		'name': 'MerchDAO',
		'slug': 'merchdao',
		'symbol': 'MRCH'
	},
	{
		'id': 19175,
		'name': 'Farmers World Wood',
		'slug': 'farmers-world-wood',
		'symbol': 'FWW'
	},
	{
		'id': 9757,
		'name': 'WeStarter',
		'slug': 'westarter',
		'symbol': 'WAR'
	},
	{
		'id': 20757,
		'name': 'HNB Protocol',
		'slug': 'hnb-protocol',
		'symbol': 'HNB'
	},
	{
		'id': 9026,
		'name': 'Blind Boxes',
		'slug': 'blind-boxes',
		'symbol': 'BLES'
	},
	{
		'id': 21824,
		'name': 'NitroShiba',
		'slug': 'nitroshiba',
		'symbol': 'NISHIB'
	},
	{
		'id': 15747,
		'name': 'MODA DAO',
		'slug': 'moda-dao',
		'symbol': 'MODA'
	},
	{
		'id': 11093,
		'name': 'Drip Network',
		'slug': 'drip-network',
		'symbol': 'DRIP'
	},
	{
		'id': 14631,
		'name': 'Notional Finance',
		'slug': 'notional-finance',
		'symbol': 'NOTE'
	},
	{
		'id': 9179,
		'name': 'Defi For You',
		'slug': 'defi-for-you',
		'symbol': 'DFY'
	},
	{
		'id': 9605,
		'name': 'TruePNL',
		'slug': 'truepnl',
		'symbol': 'PNL'
	},
	{
		'id': 19046,
		'name': 'Qawalla',
		'slug': 'qawalla',
		'symbol': 'QWLA'
	},
	{
		'id': 4427,
		'name': 'BITICA COIN',
		'slug': 'bdcc-bitica-coin',
		'symbol': 'BDCC'
	},
	{
		'id': 6991,
		'name': 'Sashimi',
		'slug': 'sashimi',
		'symbol': 'SASHIMI'
	},
	{
		'id': 9043,
		'name': 'Stone DeFi',
		'slug': 'stone-token',
		'symbol': 'STN'
	},
	{
		'id': 8309,
		'name': 'ARMOR',
		'slug': 'armor',
		'symbol': 'ARMOR'
	},
	{
		'id': 17919,
		'name': 'MetaRuffy',
		'slug': 'meta-ruffy',
		'symbol': 'MR'
	},
	{
		'id': 10494,
		'name': 'Octopus Protocol',
		'slug': 'octopus-protocol',
		'symbol': 'OPS'
	},
	{
		'id': 12458,
		'name': 'Karus Starter',
		'slug': 'ksm-starter',
		'symbol': 'KST'
	},
	{
		'id': 11794,
		'name': 'handleFOREX',
		'slug': 'handle-fi',
		'symbol': 'FOREX'
	},
	{
		'id': 15779,
		'name': 'basis.markets',
		'slug': 'basis-markets',
		'symbol': 'BASIS'
	},
	{
		'id': 18246,
		'name': 'Jurassic Crypto',
		'slug': 'jurassic-crypto',
		'symbol': 'JRSC'
	},
	{
		'id': 18255,
		'name': 'META ARENA',
		'slug': 'klaymeta',
		'symbol': 'META'
	},
	{
		'id': 15338,
		'name': 'CoreStarter',
		'slug': 'corestarter',
		'symbol': 'CSTR'
	},
	{
		'id': 21349,
		'name': 'Funex',
		'slug': 'funex',
		'symbol': 'FUNEX'
	},
	{
		'id': 20550,
		'name': 'Luna Inu',
		'slug': 'luna-inu-',
		'symbol': 'LINU'
	},
	{
		'id': 12156,
		'name': 'Asia Coin',
		'slug': 'asia-coin',
		'symbol': 'ASIA'
	},
	{
		'id': 8160,
		'name': 'One Share',
		'slug': 'one-share',
		'symbol': 'ONS'
	},
	{
		'id': 8444,
		'name': 'Gains Farm',
		'slug': 'gains-farm-v2',
		'symbol': 'GFARM2'
	},
	{
		'id': 22821,
		'name': 'PEPE.bet',
		'slug': 'pepe-bet',
		'symbol': 'PEPEBET'
	},
	{
		'id': 23156,
		'name': 'Scaleton',
		'slug': 'scaleton',
		'symbol': 'SCALE'
	},
	{
		'id': 7933,
		'name': 'Alpha5',
		'slug': 'alpha5',
		'symbol': 'A5T'
	},
	{
		'id': 23241,
		'name': 'Defi Tiger',
		'slug': 'defi-tiger',
		'symbol': 'DTG'
	},
	{
		'id': 8593,
		'name': 'FileStar',
		'slug': 'filestar',
		'symbol': 'STAR'
	},
	{
		'id': 8159,
		'name': 'One Cash',
		'slug': 'one-cash',
		'symbol': 'ONC'
	},
	{
		'id': 1004,
		'name': 'HNC COIN',
		'slug': 'hnccoin',
		'symbol': 'HNC'
	},
	{
		'id': 6852,
		'name': 'Akropolis Delphi',
		'slug': 'akropolis-delphi',
		'symbol': 'ADEL'
	},
	{
		'id': 21530,
		'name': 'void.cash',
		'slug': 'void-cash',
		'symbol': 'VCASH'
	},
	{
		'id': 22999,
		'name': 'Alongside Crypto Market Index',
		'slug': 'alongside-crypto-market-index',
		'symbol': 'AMKT'
	},
	{
		'id': 9749,
		'name': 'WallStreetBets DApp',
		'slug': 'wallstreetbets-dapp',
		'symbol': 'WSB'
	},
	{
		'id': 15516,
		'name': 'Pi INU',
		'slug': 'pi-inu',
		'symbol': 'PINU'
	},
	{
		'id': 12807,
		'name': 'DAOSquare',
		'slug': 'daosquare',
		'symbol': 'RICE'
	},
	{
		'id': 20570,
		'name': 'Icel Idman Yurdu Token',
		'slug': 'icel-idman-yurdu-token',
		'symbol': 'MIY'
	},
	{
		'id': 16238,
		'name': 'BOT',
		'slug': 'bot-planet',
		'symbol': 'BOT'
	},
	{
		'id': 17544,
		'name': 'Mei Flex',
		'slug': 'mei-flex',
		'symbol': 'MF'
	},
	{
		'id': 20561,
		'name': 'MESSIER',
		'slug': 'messier',
		'symbol': 'M87'
	},
	{
		'id': 2947,
		'name': 'SoPay',
		'slug': 'sopay',
		'symbol': 'SOP'
	},
	{
		'id': 18721,
		'name': 'Citizen Finance V2',
		'slug': 'citizen-finance-v2',
		'symbol': 'CIFI'
	},
	{
		'id': 21957,
		'name': 'Moneta',
		'slug': 'defi-franc',
		'symbol': 'MON'
	},
	{
		'id': 17800,
		'name': 'Shintama',
		'slug': 'shintama',
		'symbol': 'SHINTAMA'
	},
	{
		'id': 16818,
		'name': 'Monfter',
		'slug': 'monfter-token',
		'symbol': 'MON'
	},
	{
		'id': 12758,
		'name': 'Transient',
		'slug': 'transient',
		'symbol': 'TSCT'
	},
	{
		'id': 13012,
		'name': 'Synchrony',
		'slug': 'synchrony',
		'symbol': 'SCY'
	},
	{
		'id': 10083,
		'name': 'ClassZZ',
		'slug': 'classzz',
		'symbol': 'CZZ'
	},
	{
		'id': 11160,
		'name': 'BOY X HIGHSPEED',
		'slug': 'boy-x-highspeed',
		'symbol': 'BXH'
	},
	{
		'id': 23212,
		'name': 'Cope',
		'slug': 'copewithus',
		'symbol': 'COPE'
	},
	{
		'id': 8530,
		'name': 'StarLink',
		'slug': 'starlink',
		'symbol': 'SLNV2'
	},
	{
		'id': 19077,
		'name': 'BinaryDAO',
		'slug': 'binarydao',
		'symbol': 'BYTE'
	},
	{
		'id': 13672,
		'name': 'Basilisk',
		'slug': 'basilisk',
		'symbol': 'BSX'
	},
	{
		'id': 14950,
		'name': 'Operon Origins',
		'slug': 'operon-origins',
		'symbol': 'ORO'
	},
	{
		'id': 9863,
		'name': 'TrustBase',
		'slug': 'trustbase',
		'symbol': 'TBE'
	},
	{
		'id': 22911,
		'name': 'Black Dragon Society',
		'slug': 'black-dragon-society',
		'symbol': 'BDS'
	},
	{
		'id': 22563,
		'name': 'ZakumiFi',
		'slug': 'zakumifi',
		'symbol': 'ZAFI'
	},
	{
		'id': 21493,
		'name': 'GigaSwap',
		'slug': 'gigaswap',
		'symbol': 'GIGA'
	},
	{
		'id': 12317,
		'name': 'Doren',
		'slug': 'doren',
		'symbol': 'DRE'
	},
	{
		'id': 18578,
		'name': 'DeltaFi',
		'slug': 'deltafi',
		'symbol': 'DELFI'
	},
	{
		'id': 20163,
		'name': 'AFKDAO',
		'slug': 'afkdao',
		'symbol': 'AFK'
	},
	{
		'id': 3934,
		'name': 'CNNS',
		'slug': 'cnns',
		'symbol': 'CNNS'
	},
	{
		'id': 22789,
		'name': 'Croatian FF Fan Token',
		'slug': 'croatian-ff-fan-token',
		'symbol': 'VATRENI'
	},
	{
		'id': 21089,
		'name': 'CRYPTORG',
		'slug': 'cryptorg',
		'symbol': 'CTG'
	},
	{
		'id': 22026,
		'name': 'Bitindi Chain',
		'slug': 'bitindi-chain',
		'symbol': 'BNI'
	},
	{
		'id': 17480,
		'name': 'ChainPort',
		'slug': 'chainport',
		'symbol': 'PORTX'
	},
	{
		'id': 11660,
		'name': 'MCFinance',
		'slug': 'mcfinance',
		'symbol': 'MCF'
	},
	{
		'id': 14362,
		'name': 'SportsIcon',
		'slug': 'sportsicon',
		'symbol': 'ICONS'
	},
	{
		'id': 11706,
		'name': 'Acet',
		'slug': 'acet',
		'symbol': 'ACT'
	},
	{
		'id': 20303,
		'name': 'XREATORS',
		'slug': 'xreators',
		'symbol': 'ORT'
	},
	{
		'id': 22275,
		'name': 'EmirateSwap',
		'slug': 'emirateswap',
		'symbol': 'EMC'
	},
	{
		'id': 17088,
		'name': 'chikn feed',
		'slug': 'chikn-feed',
		'symbol': 'FEED'
	},
	{
		'id': 8909,
		'name': 'Stater',
		'slug': 'stater',
		'symbol': 'STR'
	},
	{
		'id': 13889,
		'name': 'ZUNA',
		'slug': 'zuna',
		'symbol': 'ZUNA'
	},
	{
		'id': 20438,
		'name': 'Swapsicle',
		'slug': 'swapsicle',
		'symbol': 'POPS'
	},
	{
		'id': 11911,
		'name': 'Larix',
		'slug': 'larix',
		'symbol': 'LARIX'
	},
	{
		'id': 21200,
		'name': 'Galaxy Arena Metaverse',
		'slug': 'galaxy-arena-metaverse',
		'symbol': 'ESNC'
	},
	{
		'id': 8897,
		'name': 'KickPad',
		'slug': 'kickpad',
		'symbol': 'KPAD'
	},
	{
		'id': 20039,
		'name': 'Million Dollar Baby',
		'slug': 'million-dollar-baby',
		'symbol': 'MDB'
	},
	{
		'id': 21416,
		'name': 'Lucky Block (V2)',
		'slug': 'lucky-block-v2',
		'symbol': 'LBLOCK'
	},
	{
		'id': 3712,
		'name': 'Cloudbric',
		'slug': 'cloudbric',
		'symbol': 'CLBK'
	},
	{
		'id': 14943,
		'name': 'Unique Venture Clubs',
		'slug': 'unqclub',
		'symbol': 'UNQ'
	},
	{
		'id': 11322,
		'name': 'Mobius Finance',
		'slug': 'mobius-finance',
		'symbol': 'MOT'
	},
	{
		'id': 6447,
		'name': 'Fisco Coin',
		'slug': 'fisco',
		'symbol': 'FSCC'
	},
	{
		'id': 13041,
		'name': 'Solarbeam',
		'slug': 'solarbeam',
		'symbol': 'SOLAR'
	},
	{
		'id': 9574,
		'name': 'CoShi Inu',
		'slug': 'coshi-inu',
		'symbol': 'COSHI'
	},
	{
		'id': 22946,
		'name': 'Xstudio',
		'slug': 'xstudio',
		'symbol': 'TXS'
	},
	{
		'id': 23030,
		'name': 'Fintoken Coin',
		'slug': 'fintoken-coin',
		'symbol': 'FTC'
	},
	{
		'id': 7814,
		'name': 'Alaya',
		'slug': 'alaya',
		'symbol': 'ATP'
	},
	{
		'id': 10166,
		'name': 'AstroElon',
		'slug': 'astroelon',
		'symbol': 'ELONONE'
	},
	{
		'id': 8056,
		'name': 'UNION Protocol Governance Token',
		'slug': 'union-protocol-governance-token',
		'symbol': 'UNN'
	},
	{
		'id': 13726,
		'name': 'ENNO Cash',
		'slug': 'enno-cash',
		'symbol': 'ENNO'
	},
	{
		'id': 8760,
		'name': 'EsportsPro',
		'slug': 'esportspro',
		'symbol': 'ESPRO'
	},
	{
		'id': 21581,
		'name': 'ABCMETA',
		'slug': 'abcmeta',
		'symbol': 'META'
	},
	{
		'id': 16130,
		'name': 'Wrapped Staked HEC',
		'slug': 'wrapped-staked-hec',
		'symbol': 'WSHEC'
	},
	{
		'id': 7691,
		'name': 'Farmland Protocol',
		'slug': 'farmland-protocol',
		'symbol': 'FAR'
	},
	{
		'id': 22602,
		'name': 'EQ9',
		'slug': 'equals9',
		'symbol': 'EQ9'
	},
	{
		'id': 9598,
		'name': 'Lion Token',
		'slug': 'lion-token',
		'symbol': 'LION'
	},
	{
		'id': 18443,
		'name': 'Rizespor Token',
		'slug': 'rizespor-token',
		'symbol': 'RIZE'
	},
	{
		'id': 6896,
		'name': 'CORN',
		'slug': 'corn',
		'symbol': 'CORN'
	},
	{
		'id': 18420,
		'name': 'Crypto Volatility Token',
		'slug': 'crypto-volatility-token',
		'symbol': 'CVOL'
	},
	{
		'id': 14938,
		'name': 'Jade Protocol',
		'slug': 'jade-protocol',
		'symbol': 'JADE'
	},
	{
		'id': 2282,
		'name': 'Super Bitcoin',
		'slug': 'super-bitcoin',
		'symbol': 'SBTC'
	},
	{
		'id': 23262,
		'name': 'Areon Network',
		'slug': 'areon-network',
		'symbol': 'AREA'
	},
	{
		'id': 18827,
		'name': 'FaceDAO',
		'slug': 'facedao',
		'symbol': 'FACEDAO'
	},
	{
		'id': 21299,
		'name': 'Catapult.ac',
		'slug': 'catapult-ac',
		'symbol': 'CPLT'
	},
	{
		'id': 18322,
		'name': 'MetaRim',
		'slug': 'metarim',
		'symbol': 'RIM'
	},
	{
		'id': 11556,
		'name': 'CryptoZoo  (new)',
		'slug': 'zoo',
		'symbol': 'ZOO'
	},
	{
		'id': 16820,
		'name': 'Blin Metaverse',
		'slug': 'blin-metaverse',
		'symbol': 'BLIN'
	},
	{
		'id': 8253,
		'name': 'Mars',
		'slug': 'mars',
		'symbol': 'Mars'
	},
	{
		'id': 16019,
		'name': 'NKCL Classic',
		'slug': 'nkcl-classic',
		'symbol': 'NKCLC'
	},
	{
		'id': 21067,
		'name': 'Rodeo Coin',
		'slug': 'rodeo-coin',
		'symbol': 'RODEO'
	},
	{
		'id': 11197,
		'name': 'Sukhavati Network',
		'slug': 'sukhavati-network',
		'symbol': 'SKT'
	},
	{
		'id': 21862,
		'name': 'Mugen Finance',
		'slug': 'mugen-finance',
		'symbol': 'MGN'
	},
	{
		'id': 23132,
		'name': 'Billiard Crypto',
		'slug': 'billiard-crypto',
		'symbol': 'BIC'
	},
	{
		'id': 8182,
		'name': 'VidyX',
		'slug': 'vidyx',
		'symbol': 'VIDYX'
	},
	{
		'id': 9270,
		'name': 'Bitcoin Bam',
		'slug': 'bitcoin-bam',
		'symbol': 'BTCBAM'
	},
	{
		'id': 12049,
		'name': 'Green Beli',
		'slug': 'green-beli',
		'symbol': 'GRBE'
	},
	{
		'id': 7375,
		'name': 'SUP',
		'slug': 'sup',
		'symbol': 'SUP'
	},
	{
		'id': 11620,
		'name': 'IX Swap',
		'slug': 'ix-swap',
		'symbol': 'IXS'
	},
	{
		'id': 7628,
		'name': 'Coral Swap',
		'slug': 'coral-swap',
		'symbol': 'CORAL'
	},
	{
		'id': 22673,
		'name': 'OPX Finance',
		'slug': 'opx-finance',
		'symbol': 'OPX'
	},
	{
		'id': 9505,
		'name': 'Lever Token',
		'slug': 'lever-token',
		'symbol': 'LEV'
	},
	{
		'id': 21892,
		'name': 'Lumiii',
		'slug': 'lumiii',
		'symbol': 'LUMIII'
	},
	{
		'id': 17067,
		'name': 'Torah Network',
		'slug': 'torah-network',
		'symbol': 'VP'
	},
	{
		'id': 11942,
		'name': 'GameFi Protocol',
		'slug': 'gamefi-token',
		'symbol': 'GFI'
	},
	{
		'id': 21284,
		'name': 'ITEMVERSE',
		'slug': 'itemverse',
		'symbol': 'ITEM'
	},
	{
		'id': 21531,
		'name': '1Move',
		'slug': '1move',
		'symbol': '1MT'
	},
	{
		'id': 7889,
		'name': 'Alibaba tokenized stock FTX',
		'slug': 'alibaba-tokenized-stock-ftx',
		'symbol': 'BABA'
	},
	{
		'id': 19422,
		'name': 'EdgeSwap',
		'slug': 'edgeswap',
		'symbol': 'EGS'
	},
	{
		'id': 15312,
		'name': 'Hashtagger.com',
		'slug': 'hashtagger-com',
		'symbol': 'MOOO'
	},
	{
		'id': 15608,
		'name': 'TabTrader Token',
		'slug': 'tabtrader-token',
		'symbol': 'TTT'
	},
	{
		'id': 6874,
		'name': 'SalmonSwap',
		'slug': 'salmonswap',
		'symbol': 'SAL'
	},
	{
		'id': 13030,
		'name': 'Pegaxy',
		'slug': 'pegaxy',
		'symbol': 'PGX'
	},
	{
		'id': 11740,
		'name': 'DeFIL',
		'slug': 'defil',
		'symbol': 'DFL'
	},
	{
		'id': 13251,
		'name': 'CryptoXpress',
		'slug': 'cryptoxpress',
		'symbol': 'XPRESS'
	},
	{
		'id': 13465,
		'name': 'Altbase',
		'slug': 'altbase',
		'symbol': 'ALTB'
	},
	{
		'id': 4793,
		'name': 'D Community',
		'slug': 'd-community',
		'symbol': 'DILI'
	},
	{
		'id': 14969,
		'name': 'Dragon Mainland Shards',
		'slug': 'dragon-mainland-shards',
		'symbol': 'DMS'
	},
	{
		'id': 17955,
		'name': 'Colizeum',
		'slug': 'colizeum',
		'symbol': 'ZEUM'
	},
	{
		'id': 20279,
		'name': 'Dohrnii',
		'slug': 'dohrnii',
		'symbol': 'DHN'
	},
	{
		'id': 10225,
		'name': 'Pera Finance',
		'slug': 'pera-finance',
		'symbol': 'PERA'
	},
	{
		'id': 20572,
		'name': 'Darüşşafaka Spor Kulübü Token',
		'slug': 'darussafaka-sports-club-token',
		'symbol': 'DSK'
	},
	{
		'id': 4291,
		'name': 'Krypton Galaxy Coin',
		'slug': 'krypton-galaxy-coin',
		'symbol': 'KGC'
	},
	{
		'id': 15532,
		'name': 'Moomonster',
		'slug': 'moomonster',
		'symbol': 'MOO'
	},
	{
		'id': 9047,
		'name': 'CARD.STARTER',
		'slug': 'card-starter',
		'symbol': 'CARDS'
	},
	{
		'id': 19871,
		'name': 'Brise Paradise',
		'slug': 'brise-paradise',
		'symbol': 'PRDS'
	},
	{
		'id': 17027,
		'name': 'CUBE',
		'slug': 'itam-cube',
		'symbol': 'ITAMCUBE'
	},
	{
		'id': 13420,
		'name': 'PlaceWar',
		'slug': 'placewar',
		'symbol': 'PLACE'
	},
	{
		'id': 14240,
		'name': 'LEDGIS',
		'slug': 'ledgis',
		'symbol': 'LED'
	},
	{
		'id': 9518,
		'name': 'MemePad',
		'slug': 'memepad',
		'symbol': 'MEPAD'
	},
	{
		'id': 20237,
		'name': 'UltronGlow',
		'slug': 'ultronglow',
		'symbol': 'UTG'
	},
	{
		'id': 19599,
		'name': 'AmazingTeamDAO',
		'slug': 'amazingteamdao',
		'symbol': 'AMAZINGTEAM'
	},
	{
		'id': 14843,
		'name': 'Spintop',
		'slug': 'spintop',
		'symbol': 'SPIN'
	},
	{
		'id': 12691,
		'name': 'Safle',
		'slug': 'safle',
		'symbol': 'SAFLE'
	},
	{
		'id': 18949,
		'name': 'GoldeFy',
		'slug': 'goldefy',
		'symbol': 'GOD'
	},
	{
		'id': 21119,
		'name': 'NDB',
		'slug': 'ndb',
		'symbol': 'NDB'
	},
	{
		'id': 154,
		'name': 'Marscoin',
		'slug': 'marscoin',
		'symbol': 'MARS'
	},
	{
		'id': 18944,
		'name': 'Export Mortos Platform',
		'slug': 'export-mortos-platform',
		'symbol': 'EMP'
	},
	{
		'id': 15951,
		'name': 'Ftribe Fighters (F2 NFT)',
		'slug': 'ftribe-fighters',
		'symbol': 'F2C'
	},
	{
		'id': 14541,
		'name': 'Hydraverse',
		'slug': 'hydraverse',
		'symbol': 'HDV'
	},
	{
		'id': 18225,
		'name': 'BovineVerse Token',
		'slug': 'bovineverse',
		'symbol': 'BVT'
	},
	{
		'id': 11233,
		'name': 'Monsoon Finance',
		'slug': 'monsoon-finance',
		'symbol': 'MCASH'
	},
	{
		'id': 8500,
		'name': 'NitroEX',
		'slug': 'nitroex',
		'symbol': 'NTX'
	},
	{
		'id': 6960,
		'name': 'DefiBox',
		'slug': 'defibox',
		'symbol': 'BOX'
	},
	{
		'id': 19979,
		'name': 'Yuse Token',
		'slug': 'yuse',
		'symbol': 'YUSE'
	},
	{
		'id': 21999,
		'name': 'MiningNFT',
		'slug': 'miningnft',
		'symbol': 'MIT'
	},
	{
		'id': 22863,
		'name': 'Airtnt',
		'slug': 'airtnt',
		'symbol': 'AIRTNT'
	},
	{
		'id': 18567,
		'name': 'Fantom Maker',
		'slug': 'fantom-maker',
		'symbol': 'FAME'
	},
	{
		'id': 9869,
		'name': 'Spherium',
		'slug': 'spherium',
		'symbol': 'SPHRI'
	},
	{
		'id': 9597,
		'name': 'dFund',
		'slug': 'dfund',
		'symbol': 'DFND'
	},
	{
		'id': 22199,
		'name': 'Create',
		'slug': 'create',
		'symbol': 'CT'
	},
	{
		'id': 19321,
		'name': 'Winerz',
		'slug': 'winerz',
		'symbol': 'WNZ'
	},
	{
		'id': 12609,
		'name': 'Sway Social',
		'slug': 'sway-social-protocol',
		'symbol': 'SWAY'
	},
	{
		'id': 10501,
		'name': 'BaconDAO',
		'slug': 'bacondao',
		'symbol': 'BACON'
	},
	{
		'id': 13745,
		'name': 'Polygonum Online',
		'slug': 'polygonum-online',
		'symbol': 'POG'
	},
	{
		'id': 22564,
		'name': 'ZFMCOIN',
		'slug': 'zfmcoin',
		'symbol': 'ZFM'
	},
	{
		'id': 3123,
		'name': 'GSENetwork',
		'slug': 'gsenetwork',
		'symbol': 'GSE'
	},
	{
		'id': 22396,
		'name': 'Leve Invest',
		'slug': 'leve-invest',
		'symbol': 'LEVE'
	},
	{
		'id': 14971,
		'name': 'R U Generous',
		'slug': 'r-u-generous',
		'symbol': 'RUG'
	},
	{
		'id': 23159,
		'name': 'NirvanaMeta V2',
		'slug': 'nirvanameta-v2',
		'symbol': 'MNU'
	},
	{
		'id': 22166,
		'name': 'Linework Coin',
		'slug': 'linework-coin',
		'symbol': 'LWC'
	},
	{
		'id': 21114,
		'name': 'Astro Cash',
		'slug': 'astro-cash',
		'symbol': 'ASTRO'
	},
	{
		'id': 14404,
		'name': 'Etherconnect',
		'slug': 'etherconnect',
		'symbol': 'ECC'
	},
	{
		'id': 8174,
		'name': 'CircleSwap',
		'slug': 'circleswap',
		'symbol': 'CIR'
	},
	{
		'id': 15929,
		'name': 'Metagame Arena',
		'slug': 'metagame-arena',
		'symbol': 'MGA'
	},
	{
		'id': 2247,
		'name': 'BlockCDN',
		'slug': 'blockcdn',
		'symbol': 'BCDN'
	},
	{
		'id': 15762,
		'name': 'Bitlocus',
		'slug': 'bitlocus',
		'symbol': 'BTL'
	},
	{
		'id': 8611,
		'name': 'VKENAF',
		'slug': 'vkenaf',
		'symbol': 'VKNF'
	},
	{
		'id': 12967,
		'name': 'GoldMiner',
		'slug': 'goldminer',
		'symbol': 'GM'
	},
	{
		'id': 12743,
		'name': 'Open Rights Exchange',
		'slug': 'ore-network',
		'symbol': 'ORE'
	},
	{
		'id': 14340,
		'name': 'MELI',
		'slug': 'meli-games',
		'symbol': 'MELI'
	},
	{
		'id': 20156,
		'name': 'Bullshit Inu',
		'slug': 'bullshit-inu',
		'symbol': 'BULL'
	},
	{
		'id': 10593,
		'name': 'Flurry Finance',
		'slug': 'flurry',
		'symbol': 'FLURRY'
	},
	{
		'id': 12166,
		'name': 'Starpad',
		'slug': 'starpad',
		'symbol': 'SRP'
	},
	{
		'id': 15882,
		'name': 'Monetas',
		'slug': 'monetas',
		'symbol': 'MNTG'
	},
	{
		'id': 8141,
		'name': 'Mithril Share',
		'slug': 'mithril-share',
		'symbol': 'MIS'
	},
	{
		'id': 2370,
		'name': 'Bitcoin God',
		'slug': 'bitcoin-god',
		'symbol': 'GOD'
	},
	{
		'id': 15085,
		'name': 'The Killbox',
		'slug': 'the-killbox',
		'symbol': 'KBOX'
	},
	{
		'id': 16896,
		'name': 'PsyOptions',
		'slug': 'psy-options',
		'symbol': 'PSY'
	},
	{
		'id': 10391,
		'name': 'Creator Platform',
		'slug': 'creator-platform',
		'symbol': 'CTR'
	},
	{
		'id': 8798,
		'name': 'Ramifi Protocol',
		'slug': 'ramifi-protocol',
		'symbol': 'RAM'
	},
	{
		'id': 14957,
		'name': 'DONASWAP',
		'slug': 'donaswap',
		'symbol': 'DONA'
	},
	{
		'id': 9825,
		'name': 'NiiFi',
		'slug': 'niifi',
		'symbol': 'NIIFI'
	},
	{
		'id': 8469,
		'name': 'LavaSwap',
		'slug': 'lavaswap',
		'symbol': 'LAVA'
	},
	{
		'id': 15946,
		'name': 'Polygen',
		'slug': 'polygen',
		'symbol': 'PGEN'
	},
	{
		'id': 17776,
		'name': 'Libero Financial',
		'slug': 'libero-financial',
		'symbol': 'LIBERO'
	},
	{
		'id': 21202,
		'name': 'ReadFi',
		'slug': 'readfi',
		'symbol': '$RDF'
	},
	{
		'id': 21071,
		'name': 'KISSAN',
		'slug': 'kissan',
		'symbol': 'KSN'
	},
	{
		'id': 10554,
		'name': 'Sekuritance',
		'slug': 'sekuritance',
		'symbol': 'SKRT'
	},
	{
		'id': 19483,
		'name': 'ESG',
		'slug': 'esg',
		'symbol': 'ESG'
	},
	{
		'id': 9455,
		'name': 'Lemond',
		'slug': 'lemond',
		'symbol': 'LEMD'
	},
	{
		'id': 15937,
		'name': 'PlayNity',
		'slug': 'playnity',
		'symbol': 'PLY'
	},
	{
		'id': 16747,
		'name': 'Savage',
		'slug': 'savage',
		'symbol': 'SAVG'
	},
	{
		'id': 17856,
		'name': 'Stripto',
		'slug': 'stripto',
		'symbol': 'STRIP'
	},
	{
		'id': 10172,
		'name': 'DekBox',
		'slug': 'dekbox',
		'symbol': 'DEK'
	},
	{
		'id': 22650,
		'name': 'AnimeSwap',
		'slug': 'animeswap',
		'symbol': 'ANI'
	},
	{
		'id': 2950,
		'name': 'LemoChain',
		'slug': 'lemochain',
		'symbol': 'LEMO'
	},
	{
		'id': 6829,
		'name': 'Pearl',
		'slug': 'pearl',
		'symbol': 'PEARL'
	},
	{
		'id': 16923,
		'name': 'Gamma',
		'slug': 'gamma-strategies',
		'symbol': 'GAMMA'
	},
	{
		'id': 9951,
		'name': 'WaultSwap',
		'slug': 'waultswap',
		'symbol': 'WEX'
	},
	{
		'id': 8310,
		'name': 'TosDis',
		'slug': 'tosdis',
		'symbol': 'DIS'
	},
	{
		'id': 6872,
		'name': 'Carrot',
		'slug': 'carrot',
		'symbol': 'CRT'
	},
	{
		'id': 14326,
		'name': 'GOAL token',
		'slug': 'goal-token',
		'symbol': 'GOAL'
	},
	{
		'id': 19729,
		'name': 'Vehicle Mining System',
		'slug': 'vehicle-mining-system',
		'symbol': 'VMS'
	},
	{
		'id': 4280,
		'name': '12Ships',
		'slug': '12ships',
		'symbol': 'TSHP'
	},
	{
		'id': 5270,
		'name': 'Freecash',
		'slug': 'freecash',
		'symbol': 'FCH'
	},
	{
		'id': 22572,
		'name': 'Echain Network',
		'slug': 'echain-network',
		'symbol': 'ECT'
	},
	{
		'id': 16529,
		'name': 'Sakaryaspor Token',
		'slug': 'sakaryaspor-token',
		'symbol': 'SKRY'
	},
	{
		'id': 21649,
		'name': 'HyperonChain',
		'slug': 'hyperonchain',
		'symbol': 'HPN'
	},
	{
		'id': 20346,
		'name': 'Metarix',
		'slug': 'metarix',
		'symbol': 'MTRX'
	},
	{
		'id': 18871,
		'name': 'Rainbow Token',
		'slug': 'rainbowtoken',
		'symbol': 'RBW'
	},
	{
		'id': 11614,
		'name': 'Theos',
		'slug': 'theos',
		'symbol': 'THEOS'
	},
	{
		'id': 18995,
		'name': 'xx network',
		'slug': 'xx-network',
		'symbol': 'XX'
	},
	{
		'id': 6869,
		'name': 'BLOCKMAX',
		'slug': 'blockmax',
		'symbol': 'OCB'
	},
	{
		'id': 22937,
		'name': 'ZOGI',
		'slug': 'zogi',
		'symbol': 'ZOGI'
	},
	{
		'id': 20166,
		'name': 'DragonBnB.co',
		'slug': 'dragonbnb-co',
		'symbol': 'BNBDRAGON'
	},
	{
		'id': 21908,
		'name': 'AstroX',
		'slug': 'astrox',
		'symbol': 'ATX'
	},
	{
		'id': 22080,
		'name': 'BNBPot',
		'slug': 'bnbpot',
		'symbol': 'BNBP'
	},
	{
		'id': 23200,
		'name': 'Doglaikacoin',
		'slug': 'doglaikacoin',
		'symbol': 'DLC'
	},
	{
		'id': 20301,
		'name': 'Favor',
		'slug': 'favor',
		'symbol': 'FAVOR'
	},
	{
		'id': 17698,
		'name': 'Lucky Block (V1)',
		'slug': 'lucky-block',
		'symbol': 'LBLOCK'
	},
	{
		'id': 21108,
		'name': 'Aura BAL',
		'slug': 'aura-bal',
		'symbol': 'AURABAL'
	},
	{
		'id': 20013,
		'name': 'Renewable Energy',
		'slug': 'ret',
		'symbol': 'RET'
	},
	{
		'id': 7757,
		'name': 'BeFaster Holder Token',
		'slug': 'befasterholdertoken',
		'symbol': 'BFHT'
	},
	{
		'id': 22252,
		'name': 'Koinswap',
		'slug': 'koinswap',
		'symbol': 'KST'
	},
	{
		'id': 20573,
		'name': 'Yeni Malatyaspor Token',
		'slug': 'yeni-malatyaspor-token',
		'symbol': 'YMS'
	},
	{
		'id': 11427,
		'name': 'Coinary Token',
		'slug': 'coinary-token',
		'symbol': 'CYT'
	},
	{
		'id': 14580,
		'name': 'Greyhound',
		'slug': 'greyhound',
		'symbol': 'GREYHOUND'
	},
	{
		'id': 19578,
		'name': 'Sanji Inu',
		'slug': 'sanji-inu',
		'symbol': 'SANJI'
	},
	{
		'id': 14746,
		'name': 'Titano',
		'slug': 'titano',
		'symbol': 'TITANO'
	},
	{
		'id': 2281,
		'name': 'BitcoinX',
		'slug': 'bitcoinx',
		'symbol': 'BCX'
	},
	{
		'id': 4955,
		'name': 'CAPITAL X CELL',
		'slug': 'capital-x-cell',
		'symbol': 'CXC'
	},
	{
		'id': 22850,
		'name': 'Hivemapper',
		'slug': 'hivemapper',
		'symbol': 'HONEY'
	},
	{
		'id': 11220,
		'name': 'Port Finance',
		'slug': 'port-finance',
		'symbol': 'PORT'
	},
	{
		'id': 21521,
		'name': 'Dogcoin',
		'slug': 'dogcoin',
		'symbol': 'DOGS'
	},
	{
		'id': 22662,
		'name': 'Daefrom',
		'slug': 'daefrom',
		'symbol': 'DAE'
	},
	{
		'id': 19375,
		'name': 'Piston',
		'slug': 'piston',
		'symbol': 'PSTN'
	},
	{
		'id': 15253,
		'name': 'Infinite Launch',
		'slug': 'infinite-launch',
		'symbol': 'ILA'
	},
	{
		'id': 18058,
		'name': 'Stilton',
		'slug': 'stilton-musk',
		'symbol': 'STILT'
	},
	{
		'id': 15070,
		'name': 'Notable',
		'slug': 'notable-nft',
		'symbol': 'NBL'
	},
	{
		'id': 8528,
		'name': 'HashBridge Oracle',
		'slug': 'hashbridge-oracle',
		'symbol': 'HBO'
	},
	{
		'id': 23204,
		'name': 'Genius',
		'slug': 'genius',
		'symbol': 'GENI'
	},
	{
		'id': 11085,
		'name': 'BitBase Token',
		'slug': 'bitbase-token',
		'symbol': 'BTBS'
	},
	{
		'id': 8880,
		'name': 'MacaronSwap',
		'slug': 'macaronswap',
		'symbol': 'MCRN'
	},
	{
		'id': 10031,
		'name': 'TEN',
		'slug': 'ten',
		'symbol': 'TENFI'
	},
	{
		'id': 17498,
		'name': 'MetaBET',
		'slug': 'metabet',
		'symbol': 'MBET'
	},
	{
		'id': 11114,
		'name': 'xNFT Protocol',
		'slug': 'xnft-protocol',
		'symbol': 'XNFT'
	},
	{
		'id': 23314,
		'name': 'Base Jumper',
		'slug': 'basejumper',
		'symbol': 'BJ'
	},
	{
		'id': 21946,
		'name': 'Cramer Coin',
		'slug': 'cramer-coin',
		'symbol': 'CRAMER'
	},
	{
		'id': 16264,
		'name': 'KaraStar',
		'slug': 'karastar-kara',
		'symbol': 'KARA'
	},
	{
		'id': 17972,
		'name': 'Rubix',
		'slug': 'rubix',
		'symbol': 'RBT'
	},
	{
		'id': 12279,
		'name': 'PixelVerse',
		'slug': 'pixelverse',
		'symbol': 'PIXEL'
	},
	{
		'id': 17920,
		'name': 'Idle Ninja Online',
		'slug': 'idle-ninja-online',
		'symbol': 'NINKY'
	},
	{
		'id': 10820,
		'name': 'Yieldly',
		'slug': 'yieldly',
		'symbol': 'YLDY'
	},
	{
		'id': 6405,
		'name': 'MiniSwap',
		'slug': 'miniswap',
		'symbol': 'MINI'
	},
	{
		'id': 22713,
		'name': 'HolyGrails.io',
		'slug': 'holygrails-io',
		'symbol': 'HOLY'
	},
	{
		'id': 6501,
		'name': 'TRONbetDice',
		'slug': 'tronbetdice',
		'symbol': 'DICE'
	},
	{
		'id': 22182,
		'name': 'X7DAO',
		'slug': 'x7dao',
		'symbol': 'X7DAO'
	},
	{
		'id': 21029,
		'name': 'APCH',
		'slug': 'apch',
		'symbol': 'APCH'
	},
	{
		'id': 21262,
		'name': 'Klaydice',
		'slug': 'klaydice',
		'symbol': 'DICE'
	},
	{
		'id': 23032,
		'name': 'Chooky Inu',
		'slug': 'chooky-inu',
		'symbol': '$CHOO'
	},
	{
		'id': 16330,
		'name': 'Chikn Egg',
		'slug': 'chikn-egg',
		'symbol': 'EGG'
	},
	{
		'id': 23055,
		'name': 'Advantis',
		'slug': 'advantis',
		'symbol': 'ADVT'
	},
	{
		'id': 11020,
		'name': 'ZOO Crypto World',
		'slug': 'zoo-crypto-world',
		'symbol': 'ZOO'
	},
	{
		'id': 10161,
		'name': 'OptionPanda',
		'slug': 'option-panda',
		'symbol': 'OPA'
	},
	{
		'id': 17358,
		'name': 'StellaSwap',
		'slug': 'stellaswap',
		'symbol': 'STELLA'
	},
	{
		'id': 8007,
		'name': 'Natural Farm Union Protocol',
		'slug': 'natural-farm-union-protocol',
		'symbol': 'NFUP'
	},
	{
		'id': 14327,
		'name': 'SmartLOX',
		'slug': 'smartlox',
		'symbol': 'SMARTLOX'
	},
	{
		'id': 10712,
		'name': 'Flourishing AI',
		'slug': 'flourishing-ai',
		'symbol': 'AI'
	},
	{
		'id': 22786,
		'name': 'Safemoon 1996',
		'slug': 'safemoon-1996',
		'symbol': 'SM96'
	},
	{
		'id': 5578,
		'name': 'LEVELG',
		'slug': 'levelg',
		'symbol': 'LEVELG'
	},
	{
		'id': 15931,
		'name': 'FrogSwap',
		'slug': 'frogswap',
		'symbol': 'FROG'
	},
	{
		'id': 21016,
		'name': 'Doge Digger',
		'slug': 'doge-digger',
		'symbol': 'DOGEDIGGER'
	},
	{
		'id': 22037,
		'name': 'bHBD',
		'slug': 'bhbd',
		'symbol': 'BHBD'
	},
	{
		'id': 22727,
		'name': 'YCLUB',
		'slug': 'yclub',
		'symbol': 'SYC'
	},
	{
		'id': 11013,
		'name': 'LIQ Protocol',
		'slug': 'liq-protocol',
		'symbol': 'LIQ'
	},
	{
		'id': 14871,
		'name': 'Windfall Token',
		'slug': 'windfall-token',
		'symbol': 'WFT'
	},
	{
		'id': 22492,
		'name': 'VNX Gold',
		'slug': 'vnx-gold',
		'symbol': 'VNXAU'
	},
	{
		'id': 11818,
		'name': 'Waggle Network',
		'slug': 'waggle-network',
		'symbol': 'WAG'
	},
	{
		'id': 22796,
		'name': 'Nitro',
		'slug': 'nitro-game',
		'symbol': 'NITRO'
	},
	{
		'id': 13047,
		'name': 'Piccolo Inu',
		'slug': 'piccolo-inu',
		'symbol': 'PINU'
	},
	{
		'id': 13518,
		'name': 'Ethereans',
		'slug': 'ethereans',
		'symbol': 'OS'
	},
	{
		'id': 16483,
		'name': 'DEVITA',
		'slug': 'devita-global',
		'symbol': 'LIFE'
	},
	{
		'id': 11838,
		'name': 'MilkshakeSwap',
		'slug': 'milkshakeswap-finance',
		'symbol': 'Milk'
	},
	{
		'id': 12054,
		'name': 'MatrixETF',
		'slug': 'matrixetf',
		'symbol': 'MDF'
	},
	{
		'id': 23083,
		'name': 'dollarmoon',
		'slug': 'dollarmoon',
		'symbol': 'DMOON'
	},
	{
		'id': 19259,
		'name': 'CATpay',
		'slug': 'catpay',
		'symbol': 'CATPAY'
	},
	{
		'id': 15748,
		'name': 'DexBrowser',
		'slug': 'dexbrowser',
		'symbol': 'BRO'
	},
	{
		'id': 5337,
		'name': 'iOWN Token',
		'slug': 'iown-token',
		'symbol': 'iOWN'
	},
	{
		'id': 6804,
		'name': 'MiraQle',
		'slug': 'miraqle',
		'symbol': 'MQL'
	},
	{
		'id': 23111,
		'name': 'Syrup Finance',
		'slug': 'syrup',
		'symbol': 'SRX'
	},
	{
		'id': 12595,
		'name': 'Filecoin Standard Hashrate Token',
		'slug': 'filecoin-standard-hashrate-token',
		'symbol': 'FILST'
	},
	{
		'id': 18076,
		'name': 'HEADLINE',
		'slug': 'headline-inc',
		'symbol': 'HDL'
	},
	{
		'id': 15753,
		'name': 'Instrumental Finance',
		'slug': 'instrumental-finance',
		'symbol': 'STRM'
	},
	{
		'id': 17101,
		'name': 'Smartchem',
		'slug': 'smartchem',
		'symbol': 'SMAC'
	},
	{
		'id': 22907,
		'name': 'Swapify',
		'slug': 'swapify',
		'symbol': 'SWIFY'
	},
	{
		'id': 23033,
		'name': 'DYZilla',
		'slug': 'dyzilla',
		'symbol': 'DYZILLA'
	},
	{
		'id': 8831,
		'name': 'Aurix',
		'slug': 'aurix',
		'symbol': 'AUR'
	},
	{
		'id': 3873,
		'name': 'botXcoin',
		'slug': 'botxcoin',
		'symbol': 'BOTX'
	},
	{
		'id': 22468,
		'name': 'Quoll Finance',
		'slug': 'quoll-finance',
		'symbol': 'QUO'
	},
	{
		'id': 2376,
		'name': 'TopChain',
		'slug': 'topchain',
		'symbol': 'TOPC'
	},
	{
		'id': 23240,
		'name': 'Virtual Trader',
		'slug': 'virtual-trader',
		'symbol': 'VTR'
	},
	{
		'id': 7445,
		'name': 'cCOMP',
		'slug': 'ccomp',
		'symbol': 'CCOMP'
	},
	{
		'id': 15764,
		'name': 'Hololoot',
		'slug': 'hololoot',
		'symbol': 'HOL'
	},
	{
		'id': 11275,
		'name': 'BinStarter',
		'slug': 'binstarter',
		'symbol': 'BSR'
	},
	{
		'id': 23142,
		'name': 'PrivaCoin',
		'slug': 'privacoin',
		'symbol': 'PRVC'
	},
	{
		'id': 15876,
		'name': 'Bomb Money',
		'slug': 'bomb-money',
		'symbol': 'BOMB'
	},
	{
		'id': 2994,
		'name': 'Bitcoin File',
		'slug': 'bitcoin-file',
		'symbol': 'BIFI'
	},
	{
		'id': 14516,
		'name': 'DAOLaunch',
		'slug': 'daolaunch',
		'symbol': 'DAL'
	},
	{
		'id': 14622,
		'name': 'Titania Token',
		'slug': 'titania-token',
		'symbol': 'TITANIA'
	},
	{
		'id': 22951,
		'name': 'Compounded Marinated UMAMI',
		'slug': 'compounded-marinated-umami',
		'symbol': 'CMUMAMI'
	},
	{
		'id': 4424,
		'name': 'XDAG',
		'slug': 'xdag',
		'symbol': 'XDAG'
	},
	{
		'id': 11842,
		'name': 'PolkaFantasy',
		'slug': 'polkafantasy',
		'symbol': 'XP'
	},
	{
		'id': 19998,
		'name': 'Lego Coin',
		'slug': 'lego-coin',
		'symbol': 'LEGO'
	},
	{
		'id': 16751,
		'name': 'Infinity Skies',
		'slug': 'infinity-skies',
		'symbol': 'ISKY'
	},
	{
		'id': 22105,
		'name': 'Zeus Finance',
		'slug': 'zeus-finance-org',
		'symbol': 'ZEUS'
	},
	{
		'id': 7169,
		'name': 'Chicken',
		'slug': 'chicken',
		'symbol': 'KFC'
	},
	{
		'id': 18015,
		'name': 'PRISM Protocol',
		'slug': 'prism-protocol',
		'symbol': 'PRISM'
	},
	{
		'id': 10999,
		'name': 'Takamaka',
		'slug': 'takamaka-green-coin',
		'symbol': 'TKG'
	},
	{
		'id': 14581,
		'name': 'FluidFi',
		'slug': 'fluidfi',
		'symbol': 'FLUID'
	},
	{
		'id': 21743,
		'name': 'Decode Coin',
		'slug': 'decode-coin',
		'symbol': 'DECODE'
	},
	{
		'id': 18154,
		'name': 'Metan Evolutions',
		'slug': 'metan-evolutions',
		'symbol': 'METAN'
	},
	{
		'id': 17137,
		'name': 'New Earth Order Money',
		'slug': 'new-earth-order-money',
		'symbol': 'NEOM'
	},
	{
		'id': 23234,
		'name': 'Astra DAO',
		'slug': 'astra-dao',
		'symbol': 'ASTRA'
	},
	{
		'id': 9125,
		'name': 'Gains Associates',
		'slug': 'gains-associates',
		'symbol': 'GAINS'
	},
	{
		'id': 19728,
		'name': 'Bastion Protocol',
		'slug': 'bastion-protocol',
		'symbol': 'BSTN'
	},
	{
		'id': 22839,
		'name': 'Bull Flag',
		'slug': 'bull-flag',
		'symbol': 'BFL'
	},
	{
		'id': 13698,
		'name': 'Real Realm',
		'slug': 'real-realm',
		'symbol': 'REAL'
	},
	{
		'id': 22330,
		'name': 'BAO',
		'slug': 'bao-token',
		'symbol': 'BAO'
	},
	{
		'id': 17275,
		'name': 'MuesliSwap MILK',
		'slug': 'muesliswap',
		'symbol': 'MILK'
	},
	{
		'id': 12312,
		'name': 'NASDEX',
		'slug': 'nasdex',
		'symbol': 'NSDX'
	},
	{
		'id': 17645,
		'name': 'Chedda Token',
		'slug': 'chedda-token',
		'symbol': 'CHEDDA'
	},
	{
		'id': 19217,
		'name': 'BITONE',
		'slug': 'bitone',
		'symbol': 'BIO'
	},
	{
		'id': 7641,
		'name': 'Medicalveda',
		'slug': 'medicalveda',
		'symbol': 'MVEDA'
	},
	{
		'id': 15039,
		'name': 'MADworld',
		'slug': 'madworld',
		'symbol': 'UMAD'
	},
	{
		'id': 16745,
		'name': 'Battle of Guardians',
		'slug': 'battle-of-guardians',
		'symbol': 'BGS'
	},
	{
		'id': 13618,
		'name': 'Shiba Girlfriend',
		'slug': 'shiba-girlfriend',
		'symbol': 'SHIBGF'
	},
	{
		'id': 18382,
		'name': 'Lyfe Silver',
		'slug': 'lyfe-silver',
		'symbol': 'LSILVER'
	},
	{
		'id': 11878,
		'name': 'Arbidoge',
		'slug': 'arbidoge',
		'symbol': 'ADOGE'
	},
	{
		'id': 21739,
		'name': 'Beach Token (new)',
		'slug': 'beach-token-io',
		'symbol': 'BEACH'
	},
	{
		'id': 18580,
		'name': 'Wrapped Telos',
		'slug': 'wrapped-telos',
		'symbol': 'WTLOS'
	},
	{
		'id': 8994,
		'name': 'Delta',
		'slug': 'delta-finance',
		'symbol': 'DELTA'
	},
	{
		'id': 22113,
		'name': 'Kapital DAO',
		'slug': 'kapital-dao',
		'symbol': 'KAP'
	},
	{
		'id': 19972,
		'name': 'rLoop',
		'slug': 'rloop',
		'symbol': 'RLOOP'
	},
	{
		'id': 11023,
		'name': 'Wrapped KuCoin Token',
		'slug': 'wrapped-kucoin-token',
		'symbol': 'WKCS'
	},
	{
		'id': 18130,
		'name': 'Shibking Inu',
		'slug': 'shibking-inu',
		'symbol': 'SHIBKING'
	},
	{
		'id': 18399,
		'name': 'Solidly',
		'slug': 'solidly',
		'symbol': 'SOLID'
	},
	{
		'id': 15691,
		'name': 'WX Token',
		'slug': 'waves-exchange-token',
		'symbol': 'WX'
	},
	{
		'id': 22535,
		'name': 'ALBEDO',
		'slug': 'albedo',
		'symbol': 'ALBEDO'
	},
	{
		'id': 5886,
		'name': 'Rowan Token',
		'slug': 'rowan-token',
		'symbol': 'RWN'
	},
	{
		'id': 19072,
		'name': 'Paladin',
		'slug': 'paladin',
		'symbol': 'PAL'
	},
	{
		'id': 22332,
		'name': 'CloudTx',
		'slug': 'cloudtx',
		'symbol': 'CLOUD'
	},
	{
		'id': 18945,
		'name': 'Sphere Finance',
		'slug': 'sphere-finance',
		'symbol': 'SPHERE'
	},
	{
		'id': 19316,
		'name': 'Vanspor Token',
		'slug': 'vanspor-token',
		'symbol': 'VAN'
	},
	{
		'id': 21699,
		'name': 'Pikaster',
		'slug': 'pikaster-rbp',
		'symbol': 'RBP'
	},
	{
		'id': 3138,
		'name': 'Noku',
		'slug': 'noku',
		'symbol': 'NOKU'
	},
	{
		'id': 21811,
		'name': 'BabyApeFunClub',
		'slug': 'babyapefunclub',
		'symbol': 'BAFC'
	},
	{
		'id': 19659,
		'name': 'CHHIPSCOIN',
		'slug': 'chhipscoin',
		'symbol': 'CHH'
	},
	{
		'id': 9651,
		'name': 'Ethermon',
		'slug': 'ethermon',
		'symbol': 'EMON'
	},
	{
		'id': 15806,
		'name': 'Attack Wagon',
		'slug': 'attack-wagon',
		'symbol': 'ATK'
	},
	{
		'id': 8129,
		'name': 'Fire Protocol',
		'slug': 'fire-protocol',
		'symbol': 'FIRE'
	},
	{
		'id': 16447,
		'name': 'CryptoTanks',
		'slug': 'cryptotanks',
		'symbol': 'TANK'
	},
	{
		'id': 18074,
		'name': 'Lilly Finance',
		'slug': 'lillyfinance',
		'symbol': 'Ly'
	},
	{
		'id': 17330,
		'name': 'BTC Proxy',
		'slug': 'btc-proxy',
		'symbol': 'BTCPX'
	},
	{
		'id': 16742,
		'name': 'Monster Galaxy',
		'slug': 'monster-galaxy',
		'symbol': 'GGM'
	},
	{
		'id': 17059,
		'name': 'Erzurumspor Token',
		'slug': 'erzurumspor-token',
		'symbol': 'ERZ'
	},
	{
		'id': 15005,
		'name': 'Shaman King Inu',
		'slug': 'shaman-king-inu',
		'symbol': 'SHAMAN'
	},
	{
		'id': 23289,
		'name': 'SwapDEX SDXb',
		'slug': 'swapdex-sdxb',
		'symbol': 'SDXb'
	},
	{
		'id': 4176,
		'name': 'Dapp Token',
		'slug': 'dapp-token',
		'symbol': 'DAPPT'
	},
	{
		'id': 19131,
		'name': 'Artrade',
		'slug': 'artrade',
		'symbol': 'ATR'
	},
	{
		'id': 10808,
		'name': 'Ubeswap',
		'slug': 'ubeswap',
		'symbol': 'UBE'
	},
	{
		'id': 20989,
		'name': 'Inu Inu',
		'slug': 'inu-inu',
		'symbol': 'INUINU'
	},
	{
		'id': 16599,
		'name': 'Singularity',
		'slug': 'singularity-gold',
		'symbol': 'SGLY'
	},
	{
		'id': 7761,
		'name': 'BuildUp',
		'slug': 'buildup',
		'symbol': 'BUP'
	},
	{
		'id': 22981,
		'name': 'Sense4FIT',
		'slug': 'sense4fit',
		'symbol': 'SFIT'
	},
	{
		'id': 12709,
		'name': 'HZM Coin',
		'slug': 'hzm-coin',
		'symbol': 'HZM'
	},
	{
		'id': 16405,
		'name': 'Brewlabs',
		'slug': 'brewlabs',
		'symbol': 'BREWLABS'
	},
	{
		'id': 17057,
		'name': 'Diyarbekirspor Token',
		'slug': 'diyarbekirspor-token',
		'symbol': 'DIYAR'
	},
	{
		'id': 15736,
		'name': 'LUCA',
		'slug': 'luca',
		'symbol': 'LUCA'
	},
	{
		'id': 8342,
		'name': 'GameStop tokenized stock FTX',
		'slug': 'gamestop-tokenized-stock-ftx',
		'symbol': 'GME'
	},
	{
		'id': 19433,
		'name': 'Google Tokenized Stock Zipmex',
		'slug': 'google-tokenized-stock-zipmex',
		'symbol': 'GOOGL'
	},
	{
		'id': 17835,
		'name': 'Torekko (NEW)',
		'slug': 'torekko-new',
		'symbol': 'TRK'
	},
	{
		'id': 21653,
		'name': 'LakeViewMeta',
		'slug': 'lakeviewmeta',
		'symbol': 'LVM'
	},
	{
		'id': 12517,
		'name': 'DEI',
		'slug': 'dei',
		'symbol': 'DEI'
	},
	{
		'id': 21922,
		'name': 'The Youth Pay',
		'slug': 'the-youth-pay',
		'symbol': 'TYP'
	},
	{
		'id': 10178,
		'name': 'Rabbit Finance',
		'slug': 'rabbit-finance',
		'symbol': 'RABBIT'
	},
	{
		'id': 22705,
		'name': 'Meeiro',
		'slug': 'meeiro',
		'symbol': 'MEE'
	},
	{
		'id': 17442,
		'name': 'Wine Shares',
		'slug': 'wine-shares',
		'symbol': 'WINE'
	},
	{
		'id': 8212,
		'name': 'Earn Defi Coin',
		'slug': 'earn-defi',
		'symbol': 'EDC'
	},
	{
		'id': 16831,
		'name': 'Fantom USD',
		'slug': 'fantom-usd',
		'symbol': 'FUSD'
	},
	{
		'id': 5246,
		'name': 'ViteX Coin',
		'slug': 'vitex-coin',
		'symbol': 'VX'
	},
	{
		'id': 15193,
		'name': 'Pexcoin',
		'slug': 'pexcoin',
		'symbol': 'PEX'
	},
	{
		'id': 12566,
		'name': 'PinkSale',
		'slug': 'pinksale',
		'symbol': 'PINKSALE'
	},
	{
		'id': 5480,
		'name': 'Bali Coin',
		'slug': 'bali-coin',
		'symbol': 'BALI'
	},
	{
		'id': 21912,
		'name': 'New World Order',
		'slug': 'new-world-order',
		'symbol': 'STATE'
	},
	{
		'id': 10307,
		'name': 'Project Quantum',
		'slug': 'project-quantum',
		'symbol': 'QBIT'
	},
	{
		'id': 11254,
		'name': 'Minifootball',
		'slug': 'minifootball',
		'symbol': 'MINIFOOTBALL'
	},
	{
		'id': 11652,
		'name': 'iTrust.Finance',
		'slug': 'itrust-finance',
		'symbol': 'ITG'
	},
	{
		'id': 12959,
		'name': 'Pontoon',
		'slug': 'pontoon',
		'symbol': 'TOON'
	},
	{
		'id': 22934,
		'name': 'Space Chain',
		'slug': 'space-chain',
		'symbol': 'SPACE'
	},
	{
		'id': 21113,
		'name': 'BUILD',
		'slug': 'build',
		'symbol': 'BUILD'
	},
	{
		'id': 22738,
		'name': 'DOJO Coin',
		'slug': 'dojo-coin',
		'symbol': 'DOJO COIN'
	},
	{
		'id': 2287,
		'name': 'LockTrip',
		'slug': 'lockchain',
		'symbol': 'LOC'
	},
	{
		'id': 22986,
		'name': 'Homie Wars',
		'slug': 'homie-wars',
		'symbol': 'HOMIECOIN'
	},
	{
		'id': 9107,
		'name': 'ZilSwap',
		'slug': 'zilswap',
		'symbol': 'ZWAP'
	},
	{
		'id': 23152,
		'name': 'Three Dildos Capital',
		'slug': 'three-dildos-capital',
		'symbol': '3DC'
	},
	{
		'id': 17934,
		'name': 'MinerJoe',
		'slug': 'minerjoe-gold',
		'symbol': 'GOLD'
	},
	{
		'id': 8282,
		'name': 'Koinos',
		'slug': 'koinos',
		'symbol': 'KOIN'
	},
	{
		'id': 22154,
		'name': 'skyup',
		'slug': 'skyup',
		'symbol': 'SU'
	},
	{
		'id': 12480,
		'name': 'Starchi',
		'slug': 'starchi',
		'symbol': 'ELIXIR'
	},
	{
		'id': 22496,
		'name': 'Metatoken',
		'slug': 'metatoken',
		'symbol': 'MTK'
	},
	{
		'id': 18450,
		'name': 'Paragen',
		'slug': 'paragen',
		'symbol': 'RGEN'
	},
	{
		'id': 6598,
		'name': 'Aureus Nummus Gold',
		'slug': 'aureus-nummus-gold',
		'symbol': 'ANG'
	},
	{
		'id': 14582,
		'name': 'Embr',
		'slug': 'embr',
		'symbol': 'EMBR'
	},
	{
		'id': 16178,
		'name': 'Imperium Empires',
		'slug': 'imperium-empires',
		'symbol': 'IME'
	},
	{
		'id': 19472,
		'name': 'POLYSPORTS',
		'slug': 'polysports',
		'symbol': 'PS1'
	},
	{
		'id': 21534,
		'name': 'Stader BNBx',
		'slug': 'stader-bnbx',
		'symbol': 'BNBX'
	},
	{
		'id': 21929,
		'name': 'Kwenta',
		'slug': 'kwenta',
		'symbol': 'KWENTA'
	},
	{
		'id': 22117,
		'name': 'CrowdSwap',
		'slug': 'crowdswap',
		'symbol': 'CROWD'
	},
	{
		'id': 19792,
		'name': 'Gem Pad',
		'slug': 'gem',
		'symbol': 'GEMS'
	},
	{
		'id': 11415,
		'name': 'Yield Yak',
		'slug': 'yield-yak',
		'symbol': 'YAK'
	},
	{
		'id': 22319,
		'name': 'EverSAFUv2',
		'slug': 'eversafuv2',
		'symbol': 'ES2'
	},
	{
		'id': 22238,
		'name': 'BossDao',
		'slug': 'bossdao',
		'symbol': 'BOSS'
	},
	{
		'id': 19104,
		'name': 'KYCCOIN',
		'slug': 'kyccoin',
		'symbol': 'KYCC'
	},
	{
		'id': 14341,
		'name': 'BitShiba',
		'slug': 'bitshiba-token',
		'symbol': 'SHIBA'
	},
	{
		'id': 19109,
		'name': 'Supernova',
		'slug': 'supernova-sunday-games',
		'symbol': 'LFC'
	},
	{
		'id': 16963,
		'name': 'POW',
		'slug': 'metahero-universe-pow',
		'symbol': 'POW'
	},
	{
		'id': 8135,
		'name': 'Cryptokek',
		'slug': 'cryptokek',
		'symbol': 'KEK'
	},
	{
		'id': 18877,
		'name': 'Amazon Tokenized Stock Defichain',
		'slug': 'amazon-tokenized-stock-defichain',
		'symbol': 'DAMZN'
	},
	{
		'id': 21014,
		'name': 'ArenaPlay',
		'slug': 'arenaplay',
		'symbol': 'APC'
	},
	{
		'id': 21165,
		'name': 'KENKA METAVERSE',
		'slug': 'kenka-metaverse',
		'symbol': 'KENKA'
	},
	{
		'id': 12562,
		'name': 'Mononoke Inu',
		'slug': 'mononoke-inu',
		'symbol': 'Mononoke-Inu'
	},
	{
		'id': 20477,
		'name': 'VRES',
		'slug': 'vres',
		'symbol': 'VRS'
	},
	{
		'id': 17587,
		'name': 'Kassandra',
		'slug': 'kassandra',
		'symbol': 'KACY'
	},
	{
		'id': 19148,
		'name': 'Ecoin Finance',
		'slug': 'e-coin-finance-new',
		'symbol': 'ECOIN'
	},
	{
		'id': 18115,
		'name': 'Shelling',
		'slug': 'shelling',
		'symbol': 'SHL'
	},
	{
		'id': 12834,
		'name': 'Envoy',
		'slug': 'envoy-network',
		'symbol': 'ENV'
	},
	{
		'id': 18672,
		'name': 'StakeWise',
		'slug': 'stakewise-reth2',
		'symbol': 'RETH2'
	},
	{
		'id': 21944,
		'name': 'Wrapped EthereumPoW',
		'slug': 'wrapped-ethereum-pow',
		'symbol': 'WETHW'
	},
	{
		'id': 10461,
		'name': 'Memecoin',
		'slug': 'meme-coin',
		'symbol': 'MEM'
	},
	{
		'id': 19261,
		'name': 'Aavegotchi FOMO',
		'slug': 'aavegotchi-fomo',
		'symbol': 'FOMO'
	},
	{
		'id': 18156,
		'name': 'Arable Protocol',
		'slug': 'arable-protocol',
		'symbol': 'ACRE'
	},
	{
		'id': 20791,
		'name': 'Libera Financial',
		'slug': 'libera-financial',
		'symbol': 'LIBERA'
	},
	{
		'id': 10090,
		'name': 'Friends With Benefits Pro',
		'slug': 'friends-with-benefits-pro',
		'symbol': 'FWB'
	},
	{
		'id': 9805,
		'name': 'EVAI',
		'slug': 'evai-io',
		'symbol': 'EV'
	},
	{
		'id': 13542,
		'name': 'Stabledoc',
		'slug': 'stabledoc',
		'symbol': 'SDT'
	},
	{
		'id': 19783,
		'name': 'Marble Heroes',
		'slug': 'marble-heroes',
		'symbol': 'MBH'
	},
	{
		'id': 20329,
		'name': 'Grinbit',
		'slug': 'grinbit',
		'symbol': 'GRBT'
	},
	{
		'id': 19247,
		'name': 'Microsoft Tokenized Stock Defichain',
		'slug': 'microsoft-tokenized-stock-defichain',
		'symbol': 'DMSFT'
	},
	{
		'id': 9249,
		'name': 'NFTD Protocol',
		'slug': 'nftd-protocol',
		'symbol': 'NFTD'
	},
	{
		'id': 17183,
		'name': 'Lum Network',
		'slug': 'lum-network',
		'symbol': 'LUM'
	},
	{
		'id': 20860,
		'name': 'INU',
		'slug': 'inu',
		'symbol': 'INU'
	},
	{
		'id': 14599,
		'name': 'PANDAINU',
		'slug': 'pandainu',
		'symbol': 'PWT'
	},
	{
		'id': 18681,
		'name': 'Nomad Exiles',
		'slug': 'nomad-exiles',
		'symbol': 'PRIDE'
	},
	{
		'id': 2490,
		'name': 'CargoX',
		'slug': 'cargox',
		'symbol': 'CXO'
	},
	{
		'id': 20324,
		'name': 'Demeter',
		'slug': 'demeter-deo',
		'symbol': 'DEO'
	},
	{
		'id': 18660,
		'name': 'NEXTEP',
		'slug': 'nextep',
		'symbol': 'NEXTEP'
	},
	{
		'id': 19097,
		'name': 'Wrapped Elastos',
		'slug': 'wrapped-elastos',
		'symbol': 'WELA'
	},
	{
		'id': 19058,
		'name': 'Auditchain',
		'slug': 'auditchain',
		'symbol': 'AUDT'
	},
	{
		'id': 21821,
		'name': 'ScarFace Lion',
		'slug': 'scarface-lion',
		'symbol': 'SFL'
	},
	{
		'id': 4695,
		'name': 'Echoin',
		'slug': 'echoin',
		'symbol': 'EC'
	},
	{
		'id': 17594,
		'name': 'Protofi',
		'slug': 'protofi',
		'symbol': 'PROTO'
	},
	{
		'id': 20072,
		'name': 'Age of Zalmoxis',
		'slug': 'age-of-zalmoxis',
		'symbol': 'KOSON'
	},
	{
		'id': 18224,
		'name': 'NFT11',
		'slug': 'nft11',
		'symbol': 'NFT11'
	},
	{
		'id': 22993,
		'name': 'Dejitaru Shirudo',
		'slug': 'dejitaru-shirudo',
		'symbol': 'SHIELD'
	},
	{
		'id': 21925,
		'name': 'Open Proprietary Protocol',
		'slug': 'open-proprietary-protocol',
		'symbol': 'OPP'
	},
	{
		'id': 16503,
		'name': 'A4 Finance',
		'slug': 'a4',
		'symbol': 'A4'
	},
	{
		'id': 12178,
		'name': 'Sombra Network',
		'slug': 'sombra-network',
		'symbol': 'SMBR'
	},
	{
		'id': 18598,
		'name': 'LordToken',
		'slug': 'lordtoken',
		'symbol': 'LTT'
	},
	{
		'id': 21176,
		'name': 'KumaDex Token',
		'slug': 'kumadex-token',
		'symbol': 'dKUMA'
	},
	{
		'id': 16579,
		'name': 'Etermon',
		'slug': 'etermon',
		'symbol': 'ETM'
	},
	{
		'id': 21006,
		'name': 'ROVI',
		'slug': 'rovi-network',
		'symbol': 'ROVI'
	},
	{
		'id': 19242,
		'name': 'Palantir Tokenized Stock Defichain',
		'slug': 'palantir-tokenized-stock-defichain',
		'symbol': 'DPLTR'
	},
	{
		'id': 6051,
		'name': '888tron',
		'slug': '888tron',
		'symbol': '888'
	},
	{
		'id': 10533,
		'name': 'Mindsync',
		'slug': 'mindsync',
		'symbol': 'MAI'
	},
	{
		'id': 22669,
		'name': 'POSTHUMAN',
		'slug': 'posthuman',
		'symbol': 'PHMN'
	},
	{
		'id': 19425,
		'name': 'Frax Price Index',
		'slug': 'frax-price-index',
		'symbol': 'FPI'
	},
	{
		'id': 20138,
		'name': 'Pige Inu',
		'slug': 'pige-inu',
		'symbol': 'PINU'
	},
	{
		'id': 19663,
		'name': 'Octus Bridge',
		'slug': 'octus-bridge',
		'symbol': 'BRIDGE'
	},
	{
		'id': 12979,
		'name': 'Sentre Protocol',
		'slug': 'sentre-protocol',
		'symbol': 'SNTR'
	},
	{
		'id': 22995,
		'name': 'DexWallet',
		'slug': 'dexwallet',
		'symbol': 'DWT'
	},
	{
		'id': 10563,
		'name': 'Decubate',
		'slug': 'decubate',
		'symbol': 'DCB'
	},
	{
		'id': 12887,
		'name': 'Parallel Finance',
		'slug': 'parallel-finance',
		'symbol': 'PARA'
	},
	{
		'id': 2894,
		'name': 'OTCBTC Token',
		'slug': 'otcbtc-token',
		'symbol': 'OTB'
	},
	{
		'id': 20496,
		'name': 'oneICHI',
		'slug': 'stable-ichi',
		'symbol': 'ONEICHI'
	},
	{
		'id': 22529,
		'name': 'Hey',
		'slug': 'hey',
		'symbol': 'HEY'
	},
	{
		'id': 18117,
		'name': 'Fenomy',
		'slug': 'fenomy',
		'symbol': 'FENOMY'
	},
	{
		'id': 14253,
		'name': 'Baby Samo Coin',
		'slug': 'baby-samo-coin',
		'symbol': 'BABY'
	},
	{
		'id': 19119,
		'name': 'Meta Kongz',
		'slug': 'meta-kongz',
		'symbol': 'MKC'
	},
	{
		'id': 12048,
		'name': 'Loud Market',
		'slug': 'loud-market',
		'symbol': 'LOUD'
	},
	{
		'id': 20273,
		'name': 'X Doge',
		'slug': 'x-doge',
		'symbol': 'X'
	},
	{
		'id': 8858,
		'name': 'Cub Finance',
		'slug': 'cub-finance',
		'symbol': 'CUB'
	},
	{
		'id': 11566,
		'name': 'ASH',
		'slug': 'ash',
		'symbol': 'ASH'
	},
	{
		'id': 10366,
		'name': 'Cake Monster',
		'slug': 'cake-monster',
		'symbol': 'MONSTA'
	},
	{
		'id': 18998,
		'name': 'Banana',
		'slug': 'banana-cyberkongz',
		'symbol': 'BANANA'
	},
	{
		'id': 21197,
		'name': 'MetaReset',
		'slug': 'metareset',
		'symbol': 'RESET'
	},
	{
		'id': 22411,
		'name': 'Balto Token',
		'slug': 'balto-token',
		'symbol': 'BALTO'
	},
	{
		'id': 14825,
		'name': 'Viblos',
		'slug': 'viblos',
		'symbol': 'VIBLO'
	},
	{
		'id': 18749,
		'name': 'Karmaverse',
		'slug': 'karmaverse',
		'symbol': 'KNOT'
	},
	{
		'id': 18878,
		'name': 'Netflix Tokenized Stock Defichain',
		'slug': 'netflix-tokenized-stock-defichain',
		'symbol': 'DNFLX'
	},
	{
		'id': 16537,
		'name': 'Marvin Inu',
		'slug': 'marvin-inu',
		'symbol': 'MARVIN'
	},
	{
		'id': 10873,
		'name': 'DOOR',
		'slug': 'door',
		'symbol': 'DOOR'
	},
	{
		'id': 23231,
		'name': 'EZZY GAME',
		'slug': 'ezzy-game',
		'symbol': 'EZY'
	},
	{
		'id': 20067,
		'name': 'Probably Nothing',
		'slug': 'probably-nothing-v2',
		'symbol': 'PRBLY'
	},
	{
		'id': 15354,
		'name': 'OpenSwap Optimism Token',
		'slug': 'open-swap',
		'symbol': 'OPENX'
	},
	{
		'id': 14483,
		'name': 'DoKEN',
		'slug': 'doken',
		'symbol': 'DOKEN'
	},
	{
		'id': 15271,
		'name': 'Rollbit Coin',
		'slug': 'rollbit-coin',
		'symbol': 'RLB'
	},
	{
		'id': 19387,
		'name': 'Unicorn Milk',
		'slug': 'unicorn-milk-token',
		'symbol': 'UNIM'
	},
	{
		'id': 16534,
		'name': 'iDeFiYieldProtocol',
		'slug': 'idefiyieldprotocol',
		'symbol': 'IDYP'
	},
	{
		'id': 19718,
		'name': 'VicMove',
		'slug': 'vicmove',
		'symbol': 'VIM'
	},
	{
		'id': 17767,
		'name': 'GrimaceCoin',
		'slug': 'grimace-net',
		'symbol': 'GRIMACE'
	},
	{
		'id': 4505,
		'name': 'Midas',
		'slug': 'midas',
		'symbol': 'MIDAS'
	},
	{
		'id': 7392,
		'name': 'Talent Token',
		'slug': 'talent-token',
		'symbol': 'TTX'
	},
	{
		'id': 18887,
		'name': 'iShares Silver Trust Defichain',
		'slug': 'silver-tokenized-stock-defichain',
		'symbol': 'DSLV'
	},
	{
		'id': 22983,
		'name': 'Cronos ID',
		'slug': 'cronos-id',
		'symbol': 'CROID'
	},
	{
		'id': 6889,
		'name': 'TRONbetLive',
		'slug': 'tronbetlive',
		'symbol': 'LIVE'
	},
	{
		'id': 22057,
		'name': 'LUCKY CATS',
		'slug': 'lucky-cats',
		'symbol': 'KATZ'
	},
	{
		'id': 18568,
		'name': 'Nekocoin',
		'slug': 'nekocoin',
		'symbol': 'NEKOS'
	},
	{
		'id': 12224,
		'name': 'Firebird Finance',
		'slug': 'firebird-finance',
		'symbol': 'HOPE'
	},
	{
		'id': 22611,
		'name': '3xcalibur',
		'slug': '3xcalibur',
		'symbol': 'XCAL'
	},
	{
		'id': 22190,
		'name': 'Maximus BASE',
		'slug': 'maximus-base',
		'symbol': 'BASE'
	},
	{
		'id': 5540,
		'name': 'Mt Pelerin Shares',
		'slug': 'mt-pelerin',
		'symbol': 'MPS'
	},
	{
		'id': 16,
		'name': 'WorldCoin',
		'slug': 'worldcoin',
		'symbol': 'WDC'
	},
	{
		'id': 20025,
		'name': 'Mad USD',
		'slug': 'mad-usd',
		'symbol': 'MUSD'
	},
	{
		'id': 23013,
		'name': 'CEASports',
		'slug': 'ceasports',
		'symbol': 'CSPT'
	},
	{
		'id': 8690,
		'name': 'CAD Coin',
		'slug': 'cad-coin',
		'symbol': 'CADC'
	},
	{
		'id': 18251,
		'name': 'MITA',
		'slug': 'legends-of-mitra',
		'symbol': 'MITA'
	},
	{
		'id': 17319,
		'name': 'Fimi Market Inc.',
		'slug': 'fimi-market-inc',
		'symbol': 'FIMI'
	},
	{
		'id': 12225,
		'name': 'TryHards',
		'slug': 'tryhards',
		'symbol': 'TRY'
	},
	{
		'id': 21225,
		'name': 'BITAY Coin',
		'slug': 'bitay-coin',
		'symbol': 'BITAY'
	},
	{
		'id': 21667,
		'name': 'RatBoy BSC',
		'slug': 'ratboy-bsc',
		'symbol': 'WENTXN'
	},
	{
		'id': 19263,
		'name': 'Aavegotchi KEK',
		'slug': 'aavegotchi-kek',
		'symbol': 'KEK'
	},
	{
		'id': 16928,
		'name': 'Elon GOAT',
		'slug': 'elon-goat',
		'symbol': 'EGT'
	},
	{
		'id': 22944,
		'name': 'Ankr Staked BNB',
		'slug': 'ankr-staked-bnb',
		'symbol': 'ankrBNB'
	},
	{
		'id': 22612,
		'name': 'Trice',
		'slug': 'trice',
		'symbol': 'TRI'
	},
	{
		'id': 20865,
		'name': 'CashZone',
		'slug': 'cashzone',
		'symbol': 'CASHZ'
	},
	{
		'id': 17157,
		'name': 'Dream',
		'slug': 'dream',
		'symbol': 'DREAM'
	},
	{
		'id': 11186,
		'name': 'Vention',
		'slug': 'vention',
		'symbol': 'VENTION'
	},
	{
		'id': 21514,
		'name': 'Herbee',
		'slug': 'herbee',
		'symbol': 'BEE'
	},
	{
		'id': 20920,
		'name': 'Monerium EUR emoney',
		'slug': 'monerium',
		'symbol': 'EURe'
	},
	{
		'id': 17978,
		'name': 'PayBolt',
		'slug': 'paybolt',
		'symbol': 'PAY'
	},
	{
		'id': 22076,
		'name': 'RIMAUNANGIS',
		'slug': 'rimaunangis',
		'symbol': 'RXT'
	},
	{
		'id': 5677,
		'name': 'IZE',
		'slug': 'ize',
		'symbol': 'IZE'
	},
	{
		'id': 12214,
		'name': 'Shibaverse',
		'slug': 'shibaverse',
		'symbol': 'VERSE'
	},
	{
		'id': 8045,
		'name': 'APY Vision',
		'slug': 'apy-vision',
		'symbol': 'VISION'
	},
	{
		'id': 17786,
		'name': 'OneRing',
		'slug': 'onering',
		'symbol': 'RING'
	},
	{
		'id': 19463,
		'name': 'TattooMoney',
		'slug': 'tattoomoney',
		'symbol': 'TAT2'
	},
	{
		'id': 20505,
		'name': 'Natiol Infinity',
		'slug': 'natiol',
		'symbol': 'NAI'
	},
	{
		'id': 9996,
		'name': 'Bezoge Earth',
		'slug': 'bezoge-earth',
		'symbol': 'BEZOGE'
	},
	{
		'id': 11421,
		'name': 'Marnotaur',
		'slug': 'marnotaur',
		'symbol': 'TAUR'
	},
	{
		'id': 13236,
		'name': 'Galaxy War',
		'slug': 'galaxy-war',
		'symbol': 'GWT'
	},
	{
		'id': 12840,
		'name': 'Trickle',
		'slug': 'trickle',
		'symbol': 'H2O'
	},
	{
		'id': 23171,
		'name': 'Defi Connect (new)',
		'slug': 'defi-connect-new',
		'symbol': 'DFC'
	},
	{
		'id': 8949,
		'name': 'IFToken',
		'slug': 'iftoken',
		'symbol': 'IFT'
	},
	{
		'id': 3949,
		'name': 'Asian Fintech',
		'slug': 'asian-fintech',
		'symbol': 'AFIN'
	},
	{
		'id': 18169,
		'name': 'DigiMetaverse',
		'slug': 'digimetaverse',
		'symbol': 'DGMV'
	},
	{
		'id': 17811,
		'name': 'Matrix Token',
		'slug': 'matrix-token',
		'symbol': 'MTIX'
	},
	{
		'id': 7901,
		'name': 'PayPal tokenized stock FTX',
		'slug': 'paypal-tokenized-stock-ftx',
		'symbol': 'PYPL'
	},
	{
		'id': 19366,
		'name': 'CZodiac Stabletoken',
		'slug': 'czodiac-stabletoken',
		'symbol': 'CZUSD'
	},
	{
		'id': 13038,
		'name': 'StarLaunch',
		'slug': 'starlaunch',
		'symbol': 'STARS'
	},
	{
		'id': 19447,
		'name': 'xPTP',
		'slug': 'xptp',
		'symbol': 'XPTP'
	},
	{
		'id': 20596,
		'name': 'MOREAL',
		'slug': 'moreal',
		'symbol': '$MOR'
	},
	{
		'id': 22674,
		'name': 'QAtar',
		'slug': 'qatar',
		'symbol': 'QATAR'
	},
	{
		'id': 22867,
		'name': 'Falcon',
		'slug': 'falcon-space-dex',
		'symbol': 'FLN'
	},
	{
		'id': 11189,
		'name': 'Vaulty',
		'slug': 'vaulty-finance',
		'symbol': 'VLTY'
	},
	{
		'id': 15684,
		'name': 'Empire Capital Token',
		'slug': 'empire-capital-token',
		'symbol': 'ECC'
	},
	{
		'id': 4361,
		'name': 'Bitpanda Ecosystem Token',
		'slug': 'bitpanda-ecosystem-token',
		'symbol': 'BEST'
	},
	{
		'id': 10963,
		'name': 'Wolfystreetbets',
		'slug': 'wolfystreetbets',
		'symbol': 'WOLFY'
	},
	{
		'id': 12896,
		'name': 'Fit&Beat',
		'slug': 'fit-beat',
		'symbol': 'FTB'
	},
	{
		'id': 22505,
		'name': 'Tesseract',
		'slug': 'teseract',
		'symbol': 'TESS'
	},
	{
		'id': 14089,
		'name': 'Tempus',
		'slug': 'tempus',
		'symbol': 'TEMP'
	},
	{
		'id': 17364,
		'name': 'linSpirit',
		'slug': 'linspirit',
		'symbol': 'LINSPIRIT'
	},
	{
		'id': 12462,
		'name': 'MINE Network',
		'slug': 'mine-network',
		'symbol': 'MNET'
	},
	{
		'id': 21437,
		'name': 'Mycelium',
		'slug': 'mycelium',
		'symbol': 'MYC'
	},
	{
		'id': 22207,
		'name': 'YouCoin Metaverse',
		'slug': 'youcoin-metaverse',
		'symbol': 'UCON'
	},
	{
		'id': 17477,
		'name': 'Dragon War',
		'slug': 'dragon-war',
		'symbol': 'DRAW'
	},
	{
		'id': 23311,
		'name': 'BTAF token',
		'slug': 'btaf-token',
		'symbol': 'BTAF'
	},
	{
		'id': 15250,
		'name': 'Thetan Coin',
		'slug': 'thetan-coin',
		'symbol': 'THC'
	},
	{
		'id': 22038,
		'name': 'bHIVE',
		'slug': 'bhive',
		'symbol': 'BHIVE'
	},
	{
		'id': 18777,
		'name': 'Dpad Finance',
		'slug': 'dpad-finance',
		'symbol': 'DPAD'
	},
	{
		'id': 23288,
		'name': 'Boji V2',
		'slug': 'boji-v2',
		'symbol': 'BOJI'
	},
	{
		'id': 19475,
		'name': 'Moby Dick V2',
		'slug': 'moby-dick-new',
		'symbol': 'MOBY'
	},
	{
		'id': 15933,
		'name': 'Bomb Money',
		'slug': 'bshare',
		'symbol': 'BSHARE'
	},
	{
		'id': 22737,
		'name': 'POLY Maximus',
		'slug': 'poly-maximus',
		'symbol': 'POLY'
	},
	{
		'id': 19226,
		'name': 'Wrapped Star',
		'slug': 'wrapped-star',
		'symbol': 'WSTR'
	},
	{
		'id': 10436,
		'name': 'Xiglute Coin',
		'slug': 'xiglute-coin',
		'symbol': 'XGC'
	},
	{
		'id': 21125,
		'name': 'bitcastle',
		'slug': 'bitcastle',
		'symbol': 'CASTLE'
	},
	{
		'id': 22855,
		'name': 'Shibcraft',
		'slug': 'shibcraft',
		'symbol': 'SHFT'
	},
	{
		'id': 12843,
		'name': 'Graphene',
		'slug': 'graphene',
		'symbol': 'GFN'
	},
	{
		'id': 22843,
		'name': 'SpillWays',
		'slug': 'spillways',
		'symbol': 'SPILLWAYS'
	},
	{
		'id': 17140,
		'name': 'ArbiSmart',
		'slug': 'arbismart',
		'symbol': 'RBIS'
	},
	{
		'id': 18838,
		'name': 'Pandora Spirit',
		'slug': 'pandora',
		'symbol': 'PSR'
	},
	{
		'id': 9490,
		'name': 'Ara Blocks',
		'slug': 'ara-blocks',
		'symbol': 'ARA'
	},
	{
		'id': 21138,
		'name': 'PMG Coin',
		'slug': 'pmg-coin',
		'symbol': 'PMG'
	},
	{
		'id': 16296,
		'name': 'Battle Saga',
		'slug': 'battlesaga',
		'symbol': 'BTL'
	},
	{
		'id': 19213,
		'name': 'ETH Shiba',
		'slug': 'eth-shiba',
		'symbol': 'ETHSHIB'
	},
	{
		'id': 13914,
		'name': 'Oobit',
		'slug': 'oobit',
		'symbol': 'OBT'
	},
	{
		'id': 22456,
		'name': 'xCRX',
		'slug': 'xcrx',
		'symbol': 'XCRX'
	},
	{
		'id': 23269,
		'name': 'Meme Dollar',
		'slug': 'meme-dollar',
		'symbol': 'PINA'
	},
	{
		'id': 22192,
		'name': 'Maximus LUCKY',
		'slug': 'maximus-lucky',
		'symbol': 'LUCKY'
	},
	{
		'id': 5174,
		'name': 'Buxcoin',
		'slug': 'buxcoin',
		'symbol': 'BUX'
	},
	{
		'id': 13267,
		'name': 'No one',
		'slug': 'no-one',
		'symbol': 'NOONE'
	},
	{
		'id': 22840,
		'name': 'RocketVerse',
		'slug': 'rocketverse',
		'symbol': 'RKV'
	},
	{
		'id': 22494,
		'name': 'NitroFloki',
		'slug': 'nitrofloki',
		'symbol': 'NIFLOKI'
	},
	{
		'id': 7437,
		'name': 'MobieCoin',
		'slug': 'mobiepay',
		'symbol': 'MBX'
	},
	{
		'id': 22910,
		'name': 'Meta Space 2045',
		'slug': 'meta-space-2045',
		'symbol': 'MTW'
	},
	{
		'id': 22027,
		'name': 'SALO Players',
		'slug': 'salo-players',
		'symbol': 'SALO'
	},
	{
		'id': 21630,
		'name': 'Janus Network',
		'slug': 'janus-network',
		'symbol': 'JNS'
	},
	{
		'id': 11607,
		'name': 'Smart Wallet Token',
		'slug': 'smart-wallet-token',
		'symbol': 'SWT'
	},
	{
		'id': 10919,
		'name': 'CoinsPaid',
		'slug': 'coinspaid',
		'symbol': 'CPD'
	},
	{
		'id': 12920,
		'name': 'Nifty League',
		'slug': 'nifty-league',
		'symbol': 'NFTL'
	},
	{
		'id': 20718,
		'name': 'Yoda Coin Swap',
		'slug': 'yoda-coin-swap',
		'symbol': 'JEDALS'
	},
	{
		'id': 19900,
		'name': 'Argo Finance',
		'slug': 'argo-finance',
		'symbol': 'ARGO'
	},
	{
		'id': 7727,
		'name': 'UniWhales',
		'slug': 'uniwhales',
		'symbol': 'UWL'
	},
	{
		'id': 21003,
		'name': 'Fast To Earn',
		'slug': 'fast-to-earn',
		'symbol': 'F2E'
	},
	{
		'id': 10289,
		'name': 'Daisy Launch Pad',
		'slug': 'daisy-launch-pad',
		'symbol': 'DAISY'
	},
	{
		'id': 17578,
		'name': 'Ninneko (Mata)',
		'slug': 'ninneko-mata',
		'symbol': 'MATA'
	},
	{
		'id': 14835,
		'name': 'Caketools',
		'slug': 'caketools',
		'symbol': 'CKT'
	},
	{
		'id': 15782,
		'name': 'Geopoly',
		'slug': 'geopoly',
		'symbol': 'GEO$'
	},
	{
		'id': 11907,
		'name': 'Fantom Oasis',
		'slug': 'fantom-oasis',
		'symbol': 'FTMO'
	},
	{
		'id': 20808,
		'name': 'DODbase',
		'slug': 'dodbase',
		'symbol': 'DODB'
	},
	{
		'id': 23260,
		'name': 'KWAI',
		'slug': 'kwai-labs',
		'symbol': 'KWAI'
	},
	{
		'id': 15528,
		'name': 'Zodium',
		'slug': 'zodium',
		'symbol': 'ZODI'
	},
	{
		'id': 19907,
		'name': 'Biometric Financial',
		'slug': 'biometric-financial',
		'symbol': 'BIOFI'
	},
	{
		'id': 3344,
		'name': 'Ecoreal Estate',
		'slug': 'ecoreal-estate',
		'symbol': 'ECOREAL'
	},
	{
		'id': 22039,
		'name': 'Atlantis Coin',
		'slug': 'atlantis-coin',
		'symbol': 'ATC'
	},
	{
		'id': 16077,
		'name': 'CoinField Coin',
		'slug': 'coinfield-coin',
		'symbol': 'CFC'
	},
	{
		'id': 6248,
		'name': 'Coalculus',
		'slug': 'coalculus',
		'symbol': 'COAL'
	},
	{
		'id': 19182,
		'name': 'GAMETREE',
		'slug': 'gametree',
		'symbol': 'GTCOIN'
	},
	{
		'id': 12505,
		'name': 'dexIRA',
		'slug': 'dexira',
		'symbol': 'DEX'
	},
	{
		'id': 7148,
		'name': 'ISTARDUST',
		'slug': 'istardust',
		'symbol': 'ISDT'
	},
	{
		'id': 21719,
		'name': 'Optimus OPT2',
		'slug': 'optimus-opt2',
		'symbol': 'OPT2'
	},
	{
		'id': 18419,
		'name': 'Defira',
		'slug': 'defira',
		'symbol': 'FIRA'
	},
	{
		'id': 2535,
		'name': 'Edge',
		'slug': 'edge',
		'symbol': 'EDGE'
	},
	{
		'id': 9748,
		'name': 'Renascent Finance',
		'slug': 'renascent-finance',
		'symbol': 'RENASCENT'
	},
	{
		'id': 18594,
		'name': 'Vancat',
		'slug': 'vancat-v2',
		'symbol': 'VANCAT'
	},
	{
		'id': 9968,
		'name': 'Corgidoge',
		'slug': 'corgidoge-real-estate-payment',
		'symbol': 'CORGI'
	},
	{
		'id': 10030,
		'name': 'Mars Ecosystem Token',
		'slug': 'mars-ecosystem-governance-token',
		'symbol': 'XMS'
	},
	{
		'id': 22272,
		'name': 'Cypherdog Token',
		'slug': 'cypherdog-token',
		'symbol': 'CDOG'
	},
	{
		'id': 21967,
		'name': 'LFGSwap Finance',
		'slug': 'lfgswap-finance',
		'symbol': 'LFG'
	},
	{
		'id': 20016,
		'name': 'Sleep Future',
		'slug': 'sleep-future',
		'symbol': 'SLEEPEE'
	},
	{
		'id': 19438,
		'name': 'Connect',
		'slug': 'connect-token',
		'symbol': 'CNT'
	},
	{
		'id': 18932,
		'name': 'Salmonation',
		'slug': 'salmonation',
		'symbol': 'SUI'
	},
	{
		'id': 13080,
		'name': 'dForce USD',
		'slug': 'token-force-usd',
		'symbol': 'USX'
	},
	{
		'id': 19005,
		'name': 'Athens',
		'slug': 'athens',
		'symbol': 'ATH'
	},
	{
		'id': 22769,
		'name': 'ELLERIUM',
		'slug': 'ellerium',
		'symbol': 'ELM'
	},
	{
		'id': 22014,
		'name': 'Moonions',
		'slug': 'moonions',
		'symbol': 'MOONION'
	},
	{
		'id': 19812,
		'name': 'EAC',
		'slug': 'eac',
		'symbol': 'EAC'
	},
	{
		'id': 18885,
		'name': 'Apple Tokenized Stock Defichain',
		'slug': 'apple-tokenized-stock-defichain',
		'symbol': 'DAAPL'
	},
	{
		'id': 11463,
		'name': 'Husky Avax',
		'slug': 'husky-avax',
		'symbol': 'HUSKY'
	},
	{
		'id': 17465,
		'name': 'Croissant Games',
		'slug': 'croissant-games',
		'symbol': 'CROISSANT'
	},
	{
		'id': 16754,
		'name': 'Niob Finance',
		'slug': 'niob-finance',
		'symbol': 'NIOB'
	},
	{
		'id': 15040,
		'name': 'InPoker',
		'slug': 'inpoker',
		'symbol': 'INP'
	},
	{
		'id': 11918,
		'name': 'GIBX Swap',
		'slug': 'gibx-swap',
		'symbol': 'X'
	},
	{
		'id': 11465,
		'name': 'CATO',
		'slug': 'cato',
		'symbol': 'CATO'
	},
	{
		'id': 12187,
		'name': 'GranX Chain',
		'slug': 'cranx-chain',
		'symbol': 'GRANX'
	},
	{
		'id': 19116,
		'name': 'Seba',
		'slug': 'seba',
		'symbol': 'SEBA'
	},
	{
		'id': 22958,
		'name': 'Adv3nturer Silver',
		'slug': 'adv3nturer-silver',
		'symbol': 'SILVER'
	},
	{
		'id': 10023,
		'name': 'Planet',
		'slug': 'planet-finance',
		'symbol': 'AQUA'
	},
	{
		'id': 20276,
		'name': 'Realital Metaverse',
		'slug': 'realital-metaverse',
		'symbol': 'RETA'
	},
	{
		'id': 14838,
		'name': 'Artificial Intelligence',
		'slug': 'artificial-intelligence',
		'symbol': 'AI'
	},
	{
		'id': 18389,
		'name': 'Kitten Coin',
		'slug': 'kitten-coin',
		'symbol': 'KITTENS'
	},
	{
		'id': 22783,
		'name': 'Tracer',
		'slug': 'tracer',
		'symbol': 'TRC'
	},
	{
		'id': 21528,
		'name': 'DSC Mix',
		'slug': 'dsc-mix',
		'symbol': 'MIX'
	},
	{
		'id': 15395,
		'name': 'Monster',
		'slug': 'monster-metaland',
		'symbol': 'MST'
	},
	{
		'id': 22787,
		'name': 'AUX Coin',
		'slug': 'aux-coin',
		'symbol': 'AUX'
	},
	{
		'id': 19281,
		'name': 'MAD Bucks',
		'slug': 'mad-bucks',
		'symbol': 'MAD'
	},
	{
		'id': 20999,
		'name': 'RLDX',
		'slug': 'rldx',
		'symbol': 'RLDX'
	},
	{
		'id': 23163,
		'name': 'Clavell Inu',
		'slug': 'clavell-inu',
		'symbol': 'CLAVELL'
	},
	{
		'id': 20176,
		'name': 'Talent',
		'slug': 'talent',
		'symbol': 'TNT'
	},
	{
		'id': 21613,
		'name': 'BrightyPad',
		'slug': 'brightypad',
		'symbol': 'BYP'
	},
	{
		'id': 8157,
		'name': 'Zum Dark',
		'slug': 'zum-dark',
		'symbol': 'ZUMD'
	},
	{
		'id': 18891,
		'name': 'Space Corsair Key',
		'slug': 'space-corsair-key',
		'symbol': 'SCK'
	},
	{
		'id': 5742,
		'name': 'Compound Basic Attention Token',
		'slug': 'compound-basic-attention-token',
		'symbol': 'CBAT'
	},
	{
		'id': 4121,
		'name': 'Sapphire',
		'slug': 'sapphire',
		'symbol': 'SAPP'
	},
	{
		'id': 18437,
		'name': 'Lean Management Token',
		'slug': 'lean-management-token',
		'symbol': 'LEAN'
	},
	{
		'id': 4774,
		'name': '1irstGold',
		'slug': '1irstgold',
		'symbol': '1GOLD'
	},
	{
		'id': 20600,
		'name': 'Pandorium',
		'slug': 'pandorium',
		'symbol': 'PAN'
	},
	{
		'id': 22388,
		'name': 'Defira (Cronos)',
		'slug': 'defira-cronos',
		'symbol': 'FIRA'
	},
	{
		'id': 17152,
		'name': 'PlutusFi',
		'slug': 'plutusfi',
		'symbol': 'PLUT'
	},
	{
		'id': 22503,
		'name': 'Doge-TV',
		'slug': 'doge-tv',
		'symbol': '$DGTV'
	},
	{
		'id': 20343,
		'name': 'WEDEX TOKEN V2',
		'slug': 'wedex-token-v2',
		'symbol': 'DEX'
	},
	{
		'id': 14275,
		'name': 'Game Fantasy Token',
		'slug': 'game-fantasy-token',
		'symbol': 'GFT'
	},
	{
		'id': 21155,
		'name': 'Amazy Move Token',
		'slug': 'amazy-move-token',
		'symbol': 'AMT'
	},
	{
		'id': 10300,
		'name': 'MiamiCoin',
		'slug': 'miamicoin',
		'symbol': 'MIA'
	},
	{
		'id': 20465,
		'name': 'Frozen Walrus Share',
		'slug': 'frozen-walrus-share',
		'symbol': 'WSHARE'
	},
	{
		'id': 21931,
		'name': 'Daruma',
		'slug': 'daruma',
		'symbol': 'DARUMA'
	},
	{
		'id': 12359,
		'name': 'Wojak Finance',
		'slug': 'wojak-finance',
		'symbol': 'WOJ'
	},
	{
		'id': 22467,
		'name': 'Kineko',
		'slug': 'kineko1',
		'symbol': 'KNK'
	},
	{
		'id': 21022,
		'name': 'Creation Energy Join International',
		'slug': 'creation-energy-join-international',
		'symbol': 'CEJI'
	},
	{
		'id': 20982,
		'name': 'NZD Stablecoin',
		'slug': 'nzd-stablecoin',
		'symbol': 'NZDS'
	},
	{
		'id': 20937,
		'name': 'Golden Goal',
		'slug': 'golden-goal',
		'symbol': 'GDG'
	},
	{
		'id': 22881,
		'name': 'Foundation',
		'slug': 'foundation',
		'symbol': 'FND'
	},
	{
		'id': 8823,
		'name': 'Poodl Token',
		'slug': 'poodle',
		'symbol': 'POODL'
	},
	{
		'id': 21078,
		'name': 'Meta Apes',
		'slug': 'meta-apes-shell',
		'symbol': 'SHELL'
	},
	{
		'id': 19244,
		'name': 'Metria',
		'slug': 'metria',
		'symbol': 'METR'
	},
	{
		'id': 21760,
		'name': 'XDAO',
		'slug': 'xdao',
		'symbol': 'XDAO'
	},
	{
		'id': 14928,
		'name': 'Crypto Royale',
		'slug': 'crypto-royale',
		'symbol': 'ROY'
	},
	{
		'id': 12525,
		'name': 'eBlockStock',
		'slug': 'eblockstock',
		'symbol': 'EBSO'
	},
	{
		'id': 21334,
		'name': 'Chihuahua Token',
		'slug': 'chihuahua-token-19fcd0de-eb4d-4fd7-bc4a-a202247dfdbb',
		'symbol': 'CHH'
	},
	{
		'id': 20019,
		'name': 'BelecX Protocol',
		'slug': 'belecx-protocol',
		'symbol': 'BEX'
	},
	{
		'id': 16357,
		'name': 'TRYC',
		'slug': 'tryc',
		'symbol': 'TRYC'
	},
	{
		'id': 15284,
		'name': 'SwinCoin',
		'slug': 'swincoin',
		'symbol': 'SWIN'
	},
	{
		'id': 21945,
		'name': 'The Genesis Block',
		'slug': 'the-genesis-block',
		'symbol': 'GENBLOK'
	},
	{
		'id': 9635,
		'name': 'SaveYourAssets',
		'slug': 'save-your-assets',
		'symbol': 'SYA'
	},
	{
		'id': 22791,
		'name': 'Space Rebase XUSD',
		'slug': 'space-rebase-xusd',
		'symbol': 'XUSD'
	},
	{
		'id': 4132,
		'name': 'Bitsten Token',
		'slug': 'bitsten-token',
		'symbol': 'BST'
	},
	{
		'id': 17298,
		'name': 'Crown Sovereign',
		'slug': 'crown-sovereign',
		'symbol': 'CSOV'
	},
	{
		'id': 23051,
		'name': 'Honor World Token',
		'slug': 'honor-world-token',
		'symbol': 'HWT'
	},
	{
		'id': 22634,
		'name': 'X7 Coin',
		'slug': 'x7-coin',
		'symbol': 'X7C'
	},
	{
		'id': 21576,
		'name': 'Bitcoin Pay',
		'slug': 'bitcoin-pay',
		'symbol': 'BTCPAY'
	},
	{
		'id': 17689,
		'name': 'Voice Street',
		'slug': 'voice-street',
		'symbol': 'VST'
	},
	{
		'id': 19866,
		'name': 'NEKO',
		'slug': 'neko',
		'symbol': 'NEKO'
	},
	{
		'id': 21311,
		'name': 'InnitfortheTECH',
		'slug': 'innitforthetech',
		'symbol': 'INNIT'
	},
	{
		'id': 16386,
		'name': 'Meblox Protocol',
		'slug': 'meblox-protocol',
		'symbol': 'MEB'
	},
	{
		'id': 22131,
		'name': 'FRZSwap',
		'slug': 'frzswap',
		'symbol': 'FRZW'
	},
	{
		'id': 12950,
		'name': 'OB Token',
		'slug': 'obtoken',
		'symbol': 'OBT'
	},
	{
		'id': 21375,
		'name': 'Bajun Network',
		'slug': 'ajuna-network',
		'symbol': 'BAJU'
	},
	{
		'id': 15245,
		'name': 'WingSwap',
		'slug': 'wingswap',
		'symbol': 'WIS'
	},
	{
		'id': 22256,
		'name': 'Ushi',
		'slug': 'ushi',
		'symbol': 'USHI'
	},
	{
		'id': 14397,
		'name': 'Dragon Crypto Aurum',
		'slug': 'dragon-crypto-aurum',
		'symbol': 'DCAU'
	},
	{
		'id': 4211,
		'name': 'Equilibria',
		'slug': 'equilibria',
		'symbol': 'XEQ'
	},
	{
		'id': 19870,
		'name': 'Winter',
		'slug': 'winter',
		'symbol': 'WINTER'
	},
	{
		'id': 20842,
		'name': 'SuperStep',
		'slug': 'superstep',
		'symbol': 'SGMT'
	},
	{
		'id': 20645,
		'name': 'AMDG Token',
		'slug': 'amdg-token',
		'symbol': 'AMDG'
	},
	{
		'id': 12516,
		'name': 'Dog Collar',
		'slug': 'dog-collar',
		'symbol': 'COLLAR'
	},
	{
		'id': 12890,
		'name': 'Uplift',
		'slug': 'uplift',
		'symbol': 'LIFT'
	},
	{
		'id': 6416,
		'name': 'Dcoin Token',
		'slug': 'dcoin-token',
		'symbol': 'DT'
	},
	{
		'id': 23169,
		'name': 'WIZ Protocol',
		'slug': 'wiz-protocol',
		'symbol': 'WIZ'
	},
	{
		'id': 12574,
		'name': 'World of Cryptia',
		'slug': 'world-of-cryptia',
		'symbol': 'CRYPT'
	},
	{
		'id': 21005,
		'name': 'Film Crib',
		'slug': 'film-crib',
		'symbol': 'CRI3'
	},
	{
		'id': 22968,
		'name': 'Superpower Squad',
		'slug': 'superpower-squad-ecg',
		'symbol': 'ECG'
	},
	{
		'id': 21046,
		'name': 'Gary',
		'slug': 'gary',
		'symbol': 'GARY'
	},
	{
		'id': 15664,
		'name': 'BlockchainSpace',
		'slug': 'blockchainspace',
		'symbol': 'GUILD'
	},
	{
		'id': 9908,
		'name': 'Ki',
		'slug': 'ki-foundation',
		'symbol': 'XKI'
	},
	{
		'id': 5628,
		'name': 'VARC',
		'slug': 'varc',
		'symbol': 'VARC'
	},
	{
		'id': 7518,
		'name': 'Voice Token',
		'slug': 'nix-bridge-token',
		'symbol': 'VOICE'
	},
	{
		'id': 11112,
		'name': 'MyBricks',
		'slug': 'mybricks',
		'symbol': '$BRICKS'
	},
	{
		'id': 10908,
		'name': 'KuSwap',
		'slug': 'kuswap',
		'symbol': 'KUS'
	},
	{
		'id': 20826,
		'name': 'Nelore Coin',
		'slug': 'nelore-coin',
		'symbol': 'NLC'
	},
	{
		'id': 18595,
		'name': 'YuzuSwap',
		'slug': 'yuzuswap',
		'symbol': 'YUZU'
	},
	{
		'id': 17631,
		'name': 'BABİL TOKEN',
		'slug': 'babil-token',
		'symbol': 'BABIL'
	},
	{
		'id': 17044,
		'name': 'Chain Pet',
		'slug': 'chain-pet',
		'symbol': 'CPET'
	},
	{
		'id': 20581,
		'name': 'Learning Star',
		'slug': 'learning-star',
		'symbol': 'LSTAR'
	},
	{
		'id': 23101,
		'name': 'Domestic collectors',
		'slug': 'domestic-collectors',
		'symbol': '$DMC'
	},
	{
		'id': 22397,
		'name': 'JDB',
		'slug': 'jeet-detector-bot',
		'symbol': 'JDB'
	},
	{
		'id': 18680,
		'name': 'Gami Studio',
		'slug': 'gami',
		'symbol': 'GAMI'
	},
	{
		'id': 13400,
		'name': 'MojitoSwap',
		'slug': 'mojitoswap',
		'symbol': 'MJT'
	},
	{
		'id': 18980,
		'name': 'Samurai Legends',
		'slug': 'samurai-legends',
		'symbol': 'SMG'
	},
	{
		'id': 22699,
		'name': 'Pomeranian ETH',
		'slug': 'pomeranian-eth',
		'symbol': 'POM'
	},
	{
		'id': 16214,
		'name': 'Graviton Zero',
		'slug': 'graviton-zero',
		'symbol': 'GRAV'
	},
	{
		'id': 23256,
		'name': 'Baymax Finance',
		'slug': 'baymax-finance',
		'symbol': 'BAY'
	},
	{
		'id': 23136,
		'name': 'Wallet VPN',
		'slug': 'wallet-vpn',
		'symbol': 'WVPN'
	},
	{
		'id': 11558,
		'name': 'Blocks Space',
		'slug': 'blockspace-token',
		'symbol': 'BLS'
	},
	{
		'id': 21904,
		'name': 'Up Spiral',
		'slug': 'up-spiral-v2',
		'symbol': 'SPIRAL'
	},
	{
		'id': 23187,
		'name': 'Shibosu',
		'slug': 'shibosuerc',
		'symbol': 'SHIBO'
	},
	{
		'id': 16385,
		'name': 'Celo Brazilian Real',
		'slug': 'celo-brazilian-real',
		'symbol': 'CREAL'
	},
	{
		'id': 21110,
		'name': 'Crystal Dust',
		'slug': 'crystal-dust',
		'symbol': 'CSD'
	},
	{
		'id': 19638,
		'name': 'RUN TOGETHER',
		'slug': 'run-together',
		'symbol': 'RUN'
	},
	{
		'id': 4196,
		'name': 'Pledge Coin',
		'slug': 'pledge-coin',
		'symbol': 'PLG'
	},
	{
		'id': 13831,
		'name': 'Crypto Classic',
		'slug': 'crypto-classic',
		'symbol': 'CRC'
	},
	{
		'id': 11802,
		'name': 'Project X',
		'slug': 'projectx',
		'symbol': 'XIL'
	},
	{
		'id': 6323,
		'name': 'LinkCoin Token',
		'slug': 'linkcoin-token',
		'symbol': 'LKN'
	},
	{
		'id': 12424,
		'name': 'Mainston',
		'slug': 'mainston',
		'symbol': 'STON'
	},
	{
		'id': 19978,
		'name': 'Chikn Fert',
		'slug': 'chikn-fert',
		'symbol': 'FERT'
	},
	{
		'id': 21749,
		'name': 'DegenX',
		'slug': 'degenx',
		'symbol': 'DGNX'
	},
	{
		'id': 15043,
		'name': 'Mouse Haunt Token',
		'slug': 'mouse-haunt-token',
		'symbol': 'MHT'
	},
	{
		'id': 19300,
		'name': 'Enrex',
		'slug': 'enrex',
		'symbol': 'ENRX'
	},
	{
		'id': 9241,
		'name': 'Satozhi',
		'slug': 'satozhi',
		'symbol': 'SATOZ'
	},
	{
		'id': 12863,
		'name': 'MYCE',
		'slug': 'my-ceremonial-event',
		'symbol': 'MYCE'
	},
	{
		'id': 8147,
		'name': 'WanSwap',
		'slug': 'wanswap',
		'symbol': 'WASP'
	},
	{
		'id': 18926,
		'name': 'Argo',
		'slug': 'argo-2',
		'symbol': 'ARGO'
	},
	{
		'id': 8656,
		'name': 'wanETH',
		'slug': 'waneth',
		'symbol': 'WANETH'
	},
	{
		'id': 15783,
		'name': 'PhotoChromic',
		'slug': 'photochromic',
		'symbol': 'PHCR'
	},
	{
		'id': 16755,
		'name': 'Hosky Token',
		'slug': 'hosky-token',
		'symbol': 'HOSKY'
	},
	{
		'id': 18179,
		'name': 'Rally (Solana)',
		'slug': 'rally-solana',
		'symbol': 'SRLY'
	},
	{
		'id': 16095,
		'name': 'Totem',
		'slug': 'totem-new-earth-systems',
		'symbol': 'CTZN'
	},
	{
		'id': 22797,
		'name': 'Givewell Inu',
		'slug': 'givewell-inu',
		'symbol': 'GINU'
	},
	{
		'id': 21985,
		'name': 'FIFA-Laeeb',
		'slug': 'laeeb-',
		'symbol': 'LAEEB'
	},
	{
		'id': 18406,
		'name': 'Quadrans Token',
		'slug': 'quadrans-token',
		'symbol': 'QDT'
	},
	{
		'id': 6539,
		'name': 'YAM V1',
		'slug': 'yamv1',
		'symbol': 'YAM'
	},
	{
		'id': 21762,
		'name': 'Wrapped Accumulate',
		'slug': 'wrapped-accumulate',
		'symbol': 'WACME'
	},
	{
		'id': 23043,
		'name': 'Y2K',
		'slug': 'y2k',
		'symbol': 'Y2K'
	},
	{
		'id': 10196,
		'name': 'Keanu Inu',
		'slug': 'keanu-inu',
		'symbol': 'KEANU'
	},
	{
		'id': 4263,
		'name': 'BitCanna',
		'slug': 'bitcanna',
		'symbol': 'BCNA'
	},
	{
		'id': 5154,
		'name': 'BKEX Chain',
		'slug': 'bkex-chain',
		'symbol': 'BKK'
	},
	{
		'id': 23211,
		'name': 'G*',
		'slug': 'g',
		'symbol': 'G*'
	},
	{
		'id': 20512,
		'name': 'Secret',
		'slug': 'secret-blockchain',
		'symbol': 'SIE'
	},
	{
		'id': 16256,
		'name': 'REDMARS',
		'slug': 'redmars',
		'symbol': 'RMARS'
	},
	{
		'id': 14088,
		'name': 'LuxFi',
		'slug': 'luxfi',
		'symbol': 'LXF'
	},
	{
		'id': 13760,
		'name': 'Shib Army',
		'slug': 'shib-army',
		'symbol': 'SHIBARMY'
	},
	{
		'id': 12488,
		'name': 'Dogira',
		'slug': 'dogira-new',
		'symbol': 'DOGIRA'
	},
	{
		'id': 4161,
		'name': 'CoinClaim',
		'slug': 'coinclaim',
		'symbol': 'CLM'
	},
	{
		'id': 23144,
		'name': 'FitMax',
		'slug': 'fitmax',
		'symbol': 'FITM'
	},
	{
		'id': 18616,
		'name': 'Streamer Inu',
		'slug': 'streamer-inu',
		'symbol': 'STREAMERINU'
	},
	{
		'id': 22878,
		'name': 'xMATIC',
		'slug': 'xmatic',
		'symbol': 'XMATIC'
	},
	{
		'id': 21900,
		'name': 'Stylike Governance',
		'slug': 'stylike-governance',
		'symbol': 'STYL'
	},
	{
		'id': 22571,
		'name': 'FrenChain',
		'slug': 'frenchain',
		'symbol': 'FREN'
	},
	{
		'id': 22213,
		'name': 'FMONEY FINANCE',
		'slug': 'fmoney-finance',
		'symbol': 'FMON'
	},
	{
		'id': 19499,
		'name': 'xJEWEL',
		'slug': 'xjewel',
		'symbol': 'XJEWEL'
	},
	{
		'id': 11646,
		'name': 'Regen Network',
		'slug': 'regen-network',
		'symbol': 'REGEN'
	},
	{
		'id': 19640,
		'name': 'ALTER',
		'slug': 'alter',
		'symbol': 'ALTER'
	},
	{
		'id': 14892,
		'name': 'Koakuma',
		'slug': 'koakuma',
		'symbol': 'KKMA'
	},
	{
		'id': 20322,
		'name': 'Mexican Peso Tether',
		'slug': 'tether-mxnt',
		'symbol': 'MXNT'
	},
	{
		'id': 11787,
		'name': 'Fantom Doge',
		'slug': 'fantom-doge',
		'symbol': 'RIP'
	},
	{
		'id': 22439,
		'name': 'Proteo DeFi',
		'slug': 'proteo-defi',
		'symbol': 'PROTEO'
	},
	{
		'id': 22618,
		'name': 'Vetter Skylabs',
		'slug': 'vetter-skylabs',
		'symbol': 'VSL'
	},
	{
		'id': 15330,
		'name': 'Turtles Token',
		'slug': 'turtles-token',
		'symbol': 'TRTLS'
	},
	{
		'id': 22793,
		'name': 'Phenix Finance (Polygon)',
		'slug': 'phenix-finance-polygon',
		'symbol': 'PHNX'
	},
	{
		'id': 12532,
		'name': 'TTcoin',
		'slug': 'ttcoin',
		'symbol': 'TC'
	},
	{
		'id': 20462,
		'name': 'ToxicDeer Finance',
		'slug': 'toxicdeer-finance',
		'symbol': 'DEER'
	},
	{
		'id': 13751,
		'name': 'Liquid Collectibles',
		'slug': 'liquid-collectibles',
		'symbol': 'LICO'
	},
	{
		'id': 20552,
		'name': 'Z7DAO',
		'slug': 'z7dao',
		'symbol': 'Z7'
	},
	{
		'id': 4805,
		'name': 'VNDC',
		'slug': 'vndc',
		'symbol': 'VNDC'
	},
	{
		'id': 17049,
		'name': 'Black Whale',
		'slug': 'black-whale',
		'symbol': 'BLK'
	},
	{
		'id': 23157,
		'name': 'Data Lake',
		'slug': 'data-lake',
		'symbol': 'LAKE'
	},
	{
		'id': 22381,
		'name': 'mirror',
		'slug': 'mirrorfinance',
		'symbol': 'MIRROR'
	},
	{
		'id': 12871,
		'name': 'Launchpad TG DAO 3.0',
		'slug': 'launchpad-tg-dao-3',
		'symbol': 'TGDAO'
	},
	{
		'id': 20824,
		'name': 'CleanCarbon',
		'slug': 'clean-carbon',
		'symbol': 'CARBO'
	},
	{
		'id': 8718,
		'name': 'ECO',
		'slug': 'eco',
		'symbol': 'ECO'
	},
	{
		'id': 12058,
		'name': 'Light DeFi',
		'slug': 'light-defi',
		'symbol': 'LIGHT'
	},
	{
		'id': 21436,
		'name': 'Poochain',
		'slug': 'poochain',
		'symbol': 'POOP'
	},
	{
		'id': 21940,
		'name': 'Smart World Union',
		'slug': 'smart-world-union',
		'symbol': 'SWU'
	},
	{
		'id': 16810,
		'name': 'Cia Protocol',
		'slug': 'cia-protocol',
		'symbol': 'CIA'
	},
	{
		'id': 9862,
		'name': 'Sishi Finance',
		'slug': 'sishi-finance',
		'symbol': 'SISHI'
	},
	{
		'id': 14653,
		'name': 'Tranquil Finance',
		'slug': 'tranquil-finance',
		'symbol': 'TRANQ'
	},
	{
		'id': 22753,
		'name': 'Dinerobet',
		'slug': 'dinerobet',
		'symbol': 'DINERO'
	},
	{
		'id': 10290,
		'name': 'RFOX Finance',
		'slug': 'rfox-finance',
		'symbol': 'VFOX'
	},
	{
		'id': 16177,
		'name': 'xUSD Token',
		'slug': 'xusd-token',
		'symbol': 'XUSD'
	},
	{
		'id': 21401,
		'name': 'DEFY',
		'slug': 'defy',
		'symbol': 'DEFY'
	},
	{
		'id': 23102,
		'name': 'Rabbitking',
		'slug': 'rabbitking',
		'symbol': 'RABBITKING'
	},
	{
		'id': 19480,
		'name': 'CryptoCoinPay',
		'slug': 'cryptocoinpay',
		'symbol': 'CCP'
	},
	{
		'id': 20993,
		'name': 'Gravitationally Bound AURA',
		'slug': 'gravitationally-bound-aura',
		'symbol': 'GRAVIAURA'
	},
	{
		'id': 17772,
		'name': 'Socaverse',
		'slug': 'socaverse',
		'symbol': 'SOCA'
	},
	{
		'id': 21816,
		'name': 'Dexioprotocol',
		'slug': 'dexioprotocol-v2',
		'symbol': 'DEXI'
	},
	{
		'id': 21329,
		'name': 'The Web3 Project',
		'slug': 'the-web3-project-new',
		'symbol': 'TWEP'
	},
	{
		'id': 17142,
		'name': 'Shiba Inu Pay',
		'slug': 'shiba-inu-pay',
		'symbol': 'SHIBAY'
	},
	{
		'id': 7634,
		'name': 'The LoveChain',
		'slug': 'the-lovechain',
		'symbol': 'LOV'
	},
	{
		'id': 16285,
		'name': 'Triathon',
		'slug': 'triathon',
		'symbol': 'GEON'
	},
	{
		'id': 22292,
		'name': 'Proof Of Apes',
		'slug': 'proof-of-apes',
		'symbol': 'POA'
	},
	{
		'id': 10663,
		'name': 'Catoshi',
		'slug': 'catoshi-nakamoto',
		'symbol': 'CZATS'
	},
	{
		'id': 19012,
		'name': 'Adalend',
		'slug': 'adalend',
		'symbol': 'ADAL'
	},
	{
		'id': 19695,
		'name': 'Alnassr FC fan token',
		'slug': 'alnassr-fc-fan-token',
		'symbol': 'NASSR'
	},
	{
		'id': 15510,
		'name': 'Decentral Games Governance (xDG)',
		'slug': 'decentral-games-governance-xdg',
		'symbol': 'xDG'
	},
	{
		'id': 11579,
		'name': 'Cryptomeda',
		'slug': 'cryptomeda',
		'symbol': 'TECH'
	},
	{
		'id': 16644,
		'name': 'Market Ledger',
		'slug': 'market-ledger',
		'symbol': 'ML'
	},
	{
		'id': 19260,
		'name': 'Aavegotchi FUD',
		'slug': 'aavegotchi-fud',
		'symbol': 'FUD'
	},
	{
		'id': 22601,
		'name': 'Autumn',
		'slug': 'autumn',
		'symbol': 'AUTUMN'
	},
	{
		'id': 20326,
		'name': 'Aura Network',
		'slug': 'aura-network',
		'symbol': 'AURA'
	},
	{
		'id': 12271,
		'name': 'CryptoBlades Kingdoms',
		'slug': 'cryptoblades-kingdoms',
		'symbol': 'KING'
	},
	{
		'id': 21129,
		'name': 'ARB Protocol',
		'slug': 'arb-protocol',
		'symbol': 'ARB'
	},
	{
		'id': 20464,
		'name': 'Walrus',
		'slug': 'walrus',
		'symbol': 'WLRS'
	},
	{
		'id': 17189,
		'name': 'Mimas Finance',
		'slug': 'mimas',
		'symbol': 'MIMAS'
	},
	{
		'id': 19279,
		'name': 'Valas Finance',
		'slug': 'valas-finance',
		'symbol': 'VALAS'
	},
	{
		'id': 13996,
		'name': 'AVNRich Token',
		'slug': 'avnrich-token',
		'symbol': 'AVN'
	},
	{
		'id': 9428,
		'name': 'Venus Cardano',
		'slug': 'venus-cardano',
		'symbol': 'vADA'
	},
	{
		'id': 15143,
		'name': 'Bridge$',
		'slug': 'bridges',
		'symbol': 'BRG.X'
	},
	{
		'id': 14205,
		'name': 'Wakanda Inu',
		'slug': 'wakanda-inu',
		'symbol': 'WKD'
	},
	{
		'id': 15798,
		'name': 'Empower',
		'slug': 'empower',
		'symbol': 'MPWR'
	},
	{
		'id': 23007,
		'name': 'ETXInfinity',
		'slug': 'etxinfinity',
		'symbol': 'ETX'
	},
	{
		'id': 8040,
		'name': 'R34P',
		'slug': 'r34p',
		'symbol': 'R34P'
	},
	{
		'id': 14616,
		'name': 'The Citadel',
		'slug': 'the-citadel',
		'symbol': 'THECITADEL'
	},
	{
		'id': 17017,
		'name': 'VCGamers',
		'slug': 'vcgamers',
		'symbol': 'VCG'
	},
	{
		'id': 7631,
		'name': 'FRMx Token',
		'slug': 'frmx-token',
		'symbol': 'FRMX'
	},
	{
		'id': 5743,
		'name': 'Compound 0x',
		'slug': 'compound-0x',
		'symbol': 'CZRX'
	},
	{
		'id': 8443,
		'name': 'LUXO',
		'slug': 'luxochain',
		'symbol': 'LUXO'
	},
	{
		'id': 21734,
		'name': 'My Farm',
		'slug': 'my-farm',
		'symbol': 'MFT'
	},
	{
		'id': 13933,
		'name': 'ArcadeNetwork',
		'slug': 'arcadenetwork',
		'symbol': 'ARC'
	},
	{
		'id': 20638,
		'name': 'LaEeb',
		'slug': 'laeeb',
		'symbol': 'LAEEB'
	},
	{
		'id': 23151,
		'name': 'Bitcointry Token',
		'slug': 'bitcointry-token',
		'symbol': 'BTTY'
	},
	{
		'id': 23035,
		'name': 'Kindness For Soul (new)',
		'slug': 'kindness-for-soul-new',
		'symbol': 'KFS G'
	},
	{
		'id': 7697,
		'name': 'Experty Wisdom Token',
		'slug': 'experty-wisdom-token',
		'symbol': 'WIS'
	},
	{
		'id': 22812,
		'name': 'Tokerr',
		'slug': 'tokerr',
		'symbol': 'TOKR'
	},
	{
		'id': 14613,
		'name': 'XSwap Protocol',
		'slug': 'xswap-protocol',
		'symbol': 'XSP'
	},
	{
		'id': 19492,
		'name': 'Sirius Finance',
		'slug': 'sirius-finance',
		'symbol': 'SRS'
	},
	{
		'id': 13136,
		'name': 'Kitty Inu',
		'slug': 'kitty-inu',
		'symbol': 'kitty'
	},
	{
		'id': 22668,
		'name': 'Tsunami Exchange',
		'slug': 'tsunami-exchange',
		'symbol': 'TSN'
	},
	{
		'id': 16262,
		'name': 'Starbots',
		'slug': 'starbots',
		'symbol': 'BOT'
	},
	{
		'id': 23252,
		'name': 'BundlesBets V2',
		'slug': 'bundles-v2',
		'symbol': 'BUND'
	},
	{
		'id': 19935,
		'name': 'Spring',
		'slug': 'spring',
		'symbol': 'SPRING'
	},
	{
		'id': 22175,
		'name': 'Swing DAO',
		'slug': 'swing-dao',
		'symbol': 'SWING'
	},
	{
		'id': 7988,
		'name': 'Zugacoin',
		'slug': 'zugacoin',
		'symbol': 'SZCB'
	},
	{
		'id': 22285,
		'name': 'DFS MAFIA (V2)',
		'slug': 'dfs-mafia-v2',
		'symbol': 'DFSM'
	},
	{
		'id': 19582,
		'name': 'Zenc Coin',
		'slug': 'zenc-coin',
		'symbol': 'ZENC'
	},
	{
		'id': 20350,
		'name': 'Ocavu Network Token',
		'slug': 'ocavu-network-token',
		'symbol': 'OCAVU'
	},
	{
		'id': 5912,
		'name': '4ART Coin',
		'slug': '4artechnologies',
		'symbol': '4ART'
	},
	{
		'id': 21620,
		'name': 'AstridDAO Token',
		'slug': 'astriddao-token',
		'symbol': 'ATID'
	},
	{
		'id': 9535,
		'name': 'CrossFi',
		'slug': 'crossfi',
		'symbol': 'CRFI'
	},
	{
		'id': 22957,
		'name': 'DogeZilla V2',
		'slug': 'dogezilla-v2',
		'symbol': 'DOGEZILLA'
	},
	{
		'id': 23226,
		'name': 'APass',
		'slug': 'apass',
		'symbol': 'APC'
	},
	{
		'id': 16275,
		'name': 'Duckie Land',
		'slug': 'duckie-land',
		'symbol': 'MMETA'
	},
	{
		'id': 21063,
		'name': 'JungleKing TigerCoin',
		'slug': 'jungleking-tigercoin',
		'symbol': 'TIGER'
	},
	{
		'id': 17706,
		'name': 'Aerovek Aviation',
		'slug': 'aerovek-aviation',
		'symbol': 'AERO'
	},
	{
		'id': 20467,
		'name': 'FlatQube',
		'slug': 'flatqube',
		'symbol': 'QUBE'
	},
	{
		'id': 18351,
		'name': 'Dead Knight Metaverse',
		'slug': 'dead-knight',
		'symbol': 'DKM'
	},
	{
		'id': 16035,
		'name': 'Crypto Fight Club',
		'slug': 'crypto-fight-club',
		'symbol': 'FIGHT'
	},
	{
		'id': 20538,
		'name': 'Dystopia',
		'slug': 'dystopia',
		'symbol': 'DYST'
	},
	{
		'id': 13546,
		'name': 'BabyDogeZilla',
		'slug': 'babydogezilla',
		'symbol': 'BABYDOGEZILLA'
	},
	{
		'id': 19008,
		'name': 'Retrogression',
		'slug': 'retrogression',
		'symbol': 'RTGN'
	},
	{
		'id': 15518,
		'name': 'Kanga Exchange Token',
		'slug': 'kanga-exchange-token',
		'symbol': 'KNG'
	},
	{
		'id': 12258,
		'name': 'StrongNode Edge',
		'slug': 'strongnode-edge',
		'symbol': 'SNE'
	},
	{
		'id': 9900,
		'name': 'HODL',
		'slug': 'hodl',
		'symbol': 'HODL'
	},
	{
		'id': 12157,
		'name': 'OEC FIL',
		'slug': 'oec-fil',
		'symbol': 'FILK'
	},
	{
		'id': 19797,
		'name': 'Huny',
		'slug': 'huny',
		'symbol': 'HUNY'
	},
	{
		'id': 10170,
		'name': 'Mercor Finance',
		'slug': 'mercor-finance',
		'symbol': 'MRCR'
	},
	{
		'id': 14461,
		'name': 'Sphynx BSC',
		'slug': 'sphynx-bsc',
		'symbol': 'SPHYNX'
	},
	{
		'id': 20097,
		'name': 'Effort Economy',
		'slug': 'effort-economy',
		'symbol': 'EFFORT'
	},
	{
		'id': 10648,
		'name': 'Eifi FInance',
		'slug': 'eifi-finance',
		'symbol': 'EIFI'
	},
	{
		'id': 19936,
		'name': 'Summer',
		'slug': 'summer',
		'symbol': 'SUMMER'
	},
	{
		'id': 19379,
		'name': 'BlockBlend',
		'slug': 'blockblend',
		'symbol': 'BBL'
	},
	{
		'id': 19981,
		'name': 'Neton',
		'slug': 'neton',
		'symbol': 'NTO'
	},
	{
		'id': 18897,
		'name': 'Thought',
		'slug': 'thought',
		'symbol': 'THT'
	},
	{
		'id': 18740,
		'name': 'CoinScan',
		'slug': 'coinscan',
		'symbol': 'SCAN'
	},
	{
		'id': 17568,
		'name': 'Iron Bank',
		'slug': 'iron-bank',
		'symbol': 'IB'
	},
	{
		'id': 19628,
		'name': 'Buddy DAO',
		'slug': 'buddy-dao',
		'symbol': 'BDY'
	},
	{
		'id': 15110,
		'name': 'MEGAWEAPON',
		'slug': 'megaweapon',
		'symbol': '$WEAPON'
	},
	{
		'id': 11375,
		'name': 'Kokoswap',
		'slug': 'kokoswap',
		'symbol': 'KOKO'
	},
	{
		'id': 10059,
		'name': 'Pandora Finance',
		'slug': 'pandora-protocol',
		'symbol': 'PNDR'
	},
	{
		'id': 23312,
		'name': 'Bitnity',
		'slug': 'bitnity-new',
		'symbol': 'BTNTY'
	},
	{
		'id': 21905,
		'name': 'NSKSwap',
		'slug': 'nskswap',
		'symbol': 'NSK'
	},
	{
		'id': 8723,
		'name': 'Bogged',
		'slug': 'bogged-finance',
		'symbol': 'BOG'
	},
	{
		'id': 18216,
		'name': 'Pizza Game',
		'slug': 'pizza-game',
		'symbol': 'PIZZA'
	},
	{
		'id': 12553,
		'name': 'CURE Token',
		'slug': 'cure-token',
		'symbol': 'CURE'
	},
	{
		'id': 9458,
		'name': 'HOKK Finance',
		'slug': 'hokkaido-inu',
		'symbol': 'HOKK'
	},
	{
		'id': 21133,
		'name': 'Tegro',
		'slug': 'tgr',
		'symbol': 'TGR'
	},
	{
		'id': 22513,
		'name': 'Style',
		'slug': 'style',
		'symbol': 'STYLE'
	},
	{
		'id': 9767,
		'name': 'Frenchie Network',
		'slug': 'frenchie-network',
		'symbol': 'FREN'
	},
	{
		'id': 13103,
		'name': 'Vigorus',
		'slug': 'vigorus',
		'symbol': 'VIS'
	},
	{
		'id': 9435,
		'name': '28VCK',
		'slug': '28vck',
		'symbol': 'VCK'
	},
	{
		'id': 4929,
		'name': 'JD Coin',
		'slug': 'jd-coin',
		'symbol': 'JDC'
	},
	{
		'id': 7363,
		'name': 'POP Network Token',
		'slug': 'pop-network-token',
		'symbol': 'POP'
	},
	{
		'id': 22923,
		'name': 'PlanetCats',
		'slug': 'planetcats',
		'symbol': 'CATCOIN'
	},
	{
		'id': 5781,
		'name': 'CashBackPro',
		'slug': 'cashbackpro',
		'symbol': 'CBP'
	},
	{
		'id': 22130,
		'name': 'Scratch',
		'slug': 'scratch',
		'symbol': 'SCRATCH'
	},
	{
		'id': 19121,
		'name': 'P2P Taxi Token',
		'slug': 'p2p-taxi-token',
		'symbol': 'P2PTXT'
	},
	{
		'id': 23215,
		'name': 'SpaceShipX SSX',
		'slug': 'spaceshipx-ssx',
		'symbol': 'SSX'
	},
	{
		'id': 14759,
		'name': 'LOL',
		'slug': 'lol',
		'symbol': 'LOL'
	},
	{
		'id': 20956,
		'name': 'Hulk Inu',
		'slug': 'hulk-inu',
		'symbol': 'HULK'
	},
	{
		'id': 20485,
		'name': 'VizslaSwap',
		'slug': 'vizslaswap',
		'symbol': 'VIZSLASWAP'
	},
	{
		'id': 18299,
		'name': 'SEKUYA',
		'slug': 'sekuya',
		'symbol': 'SKUY'
	},
	{
		'id': 22997,
		'name': 'BergerDoge',
		'slug': 'bergerdoge',
		'symbol': 'BERGERDOGE'
	},
	{
		'id': 19262,
		'name': 'Aavegotchi ALPHA',
		'slug': 'aavegotchi-alpha',
		'symbol': 'ALPHA'
	},
	{
		'id': 1382,
		'name': 'NoLimitCoin',
		'slug': 'nolimitcoin',
		'symbol': 'NLC'
	},
	{
		'id': 9556,
		'name': 'Litecoin TRC20',
		'slug': 'litecoin-trc20',
		'symbol': 'LTCT'
	},
	{
		'id': 20275,
		'name': 'Walk To Earn',
		'slug': 'walk-to-earn',
		'symbol': 'W2E'
	},
	{
		'id': 11739,
		'name': 'Blox Token',
		'slug': 'blox-token',
		'symbol': 'BLOX'
	},
	{
		'id': 8337,
		'name': 'Secret (ERC20)',
		'slug': 'secret-erc20',
		'symbol': 'WSCRT'
	},
	{
		'id': 19965,
		'name': 'Web2 Inu',
		'slug': 'web2-inu',
		'symbol': 'WEB2'
	},
	{
		'id': 23264,
		'name': 'Rottoken',
		'slug': 'rottoken',
		'symbol': 'ROTTO'
	},
	{
		'id': 8841,
		'name': 'Arro Social',
		'slug': 'arro-social',
		'symbol': 'ARRO'
	},
	{
		'id': 19842,
		'name': 'Lifinity',
		'slug': 'lifinity',
		'symbol': 'LFNTY'
	},
	{
		'id': 22442,
		'name': 'PalmPay',
		'slug': 'palmpay',
		'symbol': 'PALM'
	},
	{
		'id': 22803,
		'name': 'AGX Coin',
		'slug': 'agx-coin',
		'symbol': 'AGX'
	},
	{
		'id': 8606,
		'name': 'BR34P',
		'slug': 'br34p',
		'symbol': 'BR34P'
	},
	{
		'id': 17045,
		'name': 'Pyrrho',
		'slug': 'pyrrho-defi',
		'symbol': 'PYO'
	},
	{
		'id': 20193,
		'name': 'Cosmic Champs',
		'slug': 'cosmic-champs',
		'symbol': 'COSG'
	},
	{
		'id': 13211,
		'name': 'Algebra',
		'slug': 'algebra',
		'symbol': 'ALGB'
	},
	{
		'id': 9390,
		'name': 'Chainsquare',
		'slug': 'chainsquare',
		'symbol': 'CHS'
	},
	{
		'id': 22924,
		'name': 'METAL FRIENDS',
		'slug': 'metal-friends',
		'symbol': 'MTLS'
	},
	{
		'id': 20433,
		'name': 'StarkMeta',
		'slug': 'starkmeta',
		'symbol': 'SMETA'
	},
	{
		'id': 13977,
		'name': 'DoragonLand',
		'slug': 'doragonland',
		'symbol': 'DOR'
	},
	{
		'id': 11523,
		'name': 'Starmon Metaverse',
		'slug': 'starmon-metaverse',
		'symbol': 'SMON'
	},
	{
		'id': 14114,
		'name': 'Superalgos',
		'slug': 'superalgos',
		'symbol': 'SA'
	},
	{
		'id': 18293,
		'name': 'Web3 Doge',
		'slug': 'web3-doge',
		'symbol': 'WEB3'
	},
	{
		'id': 11864,
		'name': 'Meme Lordz',
		'slug': 'meme-lordz',
		'symbol': '$LORDZ'
	},
	{
		'id': 18732,
		'name': 'Dexalot',
		'slug': 'dexalot',
		'symbol': 'ALOT'
	},
	{
		'id': 23023,
		'name': 'Cryptosroom',
		'slug': 'cryptosroom',
		'symbol': 'CROOM'
	},
	{
		'id': 22486,
		'name': 'VRJAM',
		'slug': 'vrjam',
		'symbol': 'VRJAM'
	},
	{
		'id': 20082,
		'name': 'Monstock',
		'slug': 'monstock',
		'symbol': 'MON'
	},
	{
		'id': 21704,
		'name': 'Carnomaly',
		'slug': 'carnomaly-new',
		'symbol': 'CARR'
	},
	{
		'id': 8035,
		'name': 'Grom',
		'slug': 'grom',
		'symbol': 'GR'
	},
	{
		'id': 22240,
		'name': 'Haki Token',
		'slug': 'haki-token',
		'symbol': 'HAKI'
	},
	{
		'id': 12582,
		'name': 'PokerFI.Finance',
		'slug': 'pokerfi',
		'symbol': 'POKERFI'
	},
	{
		'id': 8394,
		'name': 'Anime Token',
		'slug': 'anime-token',
		'symbol': 'ANI'
	},
	{
		'id': 23076,
		'name': 'Lux King Tech',
		'slug': 'lux-king-tech',
		'symbol': 'LKT'
	},
	{
		'id': 21430,
		'name': 'Thunder Brawl',
		'slug': 'thunder-brawl',
		'symbol': 'THB'
	},
	{
		'id': 23120,
		'name': 'Level Finance',
		'slug': 'level-finance-token',
		'symbol': 'LGO'
	},
	{
		'id': 13964,
		'name': 'FarmerDoge',
		'slug': 'farmerdoge',
		'symbol': 'CROP'
	},
	{
		'id': 9368,
		'name': 'Euler Tools',
		'slug': 'euler-tools',
		'symbol': 'EULER'
	},
	{
		'id': 12924,
		'name': 'XDoge Network',
		'slug': 'xdoge-network',
		'symbol': 'XDOGE'
	},
	{
		'id': 22452,
		'name': 'Astro Token',
		'slug': 'astro-token',
		'symbol': 'ABB'
	},
	{
		'id': 8759,
		'name': 'ZCore Finance',
		'slug': 'zcore-finance',
		'symbol': 'ZEFI'
	},
	{
		'id': 12212,
		'name': 'Allbridge',
		'slug': 'allbridge',
		'symbol': 'ABR'
	},
	{
		'id': 14361,
		'name': 'KillSwitch',
		'slug': 'killswitch',
		'symbol': 'KSW'
	},
	{
		'id': 18201,
		'name': 'FoodChain Global',
		'slug': 'foodchain-global',
		'symbol': 'FOOD'
	},
	{
		'id': 4618,
		'name': 'Akoin',
		'slug': 'akoin',
		'symbol': 'AKN'
	},
	{
		'id': 19256,
		'name': 'Boba Brewery',
		'slug': 'boba-brewery',
		'symbol': 'BRE'
	},
	{
		'id': 16068,
		'name': 'Jigen',
		'slug': 'jigen',
		'symbol': 'JIG'
	},
	{
		'id': 22389,
		'name': 'MMSC PLATFORM',
		'slug': 'mmsc-platform',
		'symbol': 'MMSC'
	},
	{
		'id': 14048,
		'name': 'Atlantis Metaverse',
		'slug': 'atlantis-metaverse',
		'symbol': 'TAU'
	},
	{
		'id': 17207,
		'name': 'Giveth',
		'slug': 'giveth',
		'symbol': 'GIV'
	},
	{
		'id': 10685,
		'name': 'Olive Cash',
		'slug': 'olive-cash',
		'symbol': 'OLIVE'
	},
	{
		'id': 15422,
		'name': 'Income Island Token',
		'slug': 'income-island-token',
		'symbol': 'INCOME'
	},
	{
		'id': 5644,
		'name': 'Blue Baikal',
		'slug': 'blue-baikal',
		'symbol': 'BBC'
	},
	{
		'id': 15241,
		'name': 'Candylad',
		'slug': 'candylad',
		'symbol': 'CANDYLAD'
	},
	{
		'id': 22557,
		'name': 'Wettok Market',
		'slug': 'wettok-market',
		'symbol': 'WTO'
	},
	{
		'id': 13436,
		'name': 'ftm.guru',
		'slug': 'elite-1337',
		'symbol': 'ELITE'
	},
	{
		'id': 22960,
		'name': 'Cinnamoon',
		'slug': 'cinnamoon',
		'symbol': 'CIMO'
	},
	{
		'id': 14251,
		'name': 'Freedom. Jobs. Business.',
		'slug': 'letsgobrandoncoin',
		'symbol': 'FJB'
	},
	{
		'id': 16710,
		'name': 'MetaBUSDCoin',
		'slug': 'metabusdcoin',
		'symbol': 'MBC'
	},
	{
		'id': 20426,
		'name': 'Rising Sun',
		'slug': 'rising-sun',
		'symbol': 'SUN'
	},
	{
		'id': 8780,
		'name': 'Umbria Network',
		'slug': 'umbria-network',
		'symbol': 'UMBR'
	},
	{
		'id': 20267,
		'name': 'Pollen Coin',
		'slug': 'pollen-coin',
		'symbol': 'PCN'
	},
	{
		'id': 3748,
		'name': 'Hxro',
		'slug': 'hxro',
		'symbol': 'HXRO'
	},
	{
		'id': 18403,
		'name': 'SOLIDsex: Tokenized veSOLID',
		'slug': 'solidsex-tokenized-vesolid',
		'symbol': 'SOLIDSEX'
	},
	{
		'id': 21095,
		'name': 'Tales of Xtalnia',
		'slug': 'tales-of-xtalnia',
		'symbol': 'XTAL'
	},
	{
		'id': 15700,
		'name': 'Cryptotem',
		'slug': 'cryptotem',
		'symbol': 'TOTEM'
	},
	{
		'id': 21293,
		'name': 'colR Coin',
		'slug': 'colr-coin',
		'symbol': '$colR'
	},
	{
		'id': 20969,
		'name': 'GEODNET',
		'slug': 'geodnet',
		'symbol': 'GEOD'
	},
	{
		'id': 18842,
		'name': 'Continuum Finance',
		'slug': 'continuum-finance',
		'symbol': 'CTN'
	},
	{
		'id': 15731,
		'name': 'SORA Synthetic USD',
		'slug': 'sora-synthetic-usd',
		'symbol': 'XSTUSD'
	},
	{
		'id': 22501,
		'name': 'PoorPleb',
		'slug': 'poorpleb',
		'symbol': 'PP'
	},
	{
		'id': 12345,
		'name': 'Steam Exchange',
		'slug': 'steam-exchange',
		'symbol': 'STEAMX'
	},
	{
		'id': 16589,
		'name': 'Dogewhale',
		'slug': 'dogewhale',
		'symbol': 'DOGEWHALE'
	},
	{
		'id': 22297,
		'name': 'BlockRock',
		'slug': 'blockrock',
		'symbol': 'BRO$'
	},
	{
		'id': 17629,
		'name': 'Exponential Capital',
		'slug': 'exponential-capital',
		'symbol': 'EXPO'
	},
	{
		'id': 14796,
		'name': 'Cultiplan(CTPL)',
		'slug': 'cultiplan',
		'symbol': 'CTPL'
	},
	{
		'id': 13429,
		'name': 'Doge Floki Coin',
		'slug': 'doge-floki-coin',
		'symbol': 'DOFI'
	},
	{
		'id': 21160,
		'name': 'Lulu Market',
		'slug': 'lulu-market',
		'symbol': 'LUCK'
	},
	{
		'id': 11395,
		'name': 'BOHR',
		'slug': 'bohr',
		'symbol': 'BR'
	},
	{
		'id': 14665,
		'name': 'Centaurify',
		'slug': 'centaurify',
		'symbol': 'CENT'
	},
	{
		'id': 23129,
		'name': 'Babyrabbit',
		'slug': 'babyrabbit',
		'symbol': 'BABYRABBIT'
	},
	{
		'id': 20730,
		'name': 'CHI Coin',
		'slug': 'chi-coin',
		'symbol': 'CHI'
	},
	{
		'id': 15758,
		'name': 'LimoCoin Swap',
		'slug': 'limocoin-swap',
		'symbol': 'LMCSWAP'
	},
	{
		'id': 12675,
		'name': 'Dark Matter DeFi',
		'slug': 'dark-matter-defi',
		'symbol': 'DMD'
	},
	{
		'id': 18530,
		'name': 'Grave',
		'slug': 'grave',
		'symbol': 'GRVE'
	},
	{
		'id': 16058,
		'name': 'Captain Inu',
		'slug': 'captain-inu',
		'symbol': 'CPTINU'
	},
	{
		'id': 20723,
		'name': 'Kintsugi BTC',
		'slug': 'kintsugi-btc',
		'symbol': 'KBTC'
	},
	{
		'id': 11317,
		'name': 'Relay Token',
		'slug': 'relay-token',
		'symbol': 'RELAY'
	},
	{
		'id': 12578,
		'name': 'AnchorSwap',
		'slug': 'anchorswap',
		'symbol': 'ANCHOR'
	},
	{
		'id': 22576,
		'name': 'LeverageInu',
		'slug': 'leverageinu',
		'symbol': 'LEVI'
	},
	{
		'id': 16936,
		'name': '2omb Finance',
		'slug': '2omb-finance',
		'symbol': '2OMB'
	},
	{
		'id': 6564,
		'name': 'ZenSports',
		'slug': 'zensports',
		'symbol': 'SPORTS'
	},
	{
		'id': 20792,
		'name': 'Ramestta',
		'slug': 'ramestta',
		'symbol': 'RAMA'
	},
	{
		'id': 18884,
		'name': 'Vanguard Real Estate Tokenized Stock Defichain',
		'slug': 'vanguard-real-estate-tokenized-stock-defichain',
		'symbol': 'DVNQ'
	},
	{
		'id': 21848,
		'name': 'Point Network',
		'slug': 'point-network',
		'symbol': 'POINT'
	},
	{
		'id': 7669,
		'name': 'UNCL',
		'slug': 'uncl',
		'symbol': 'UNCL'
	},
	{
		'id': 10888,
		'name': 'NewB.Farm',
		'slug': 'newb-farm',
		'symbol': 'NEWB'
	},
	{
		'id': 22234,
		'name': 'MELEGA',
		'slug': 'melega',
		'symbol': 'MARCO'
	},
	{
		'id': 14235,
		'name': 'Shiba Interstellar',
		'slug': 'shiba-interstellar',
		'symbol': 'SHINT'
	},
	{
		'id': 12074,
		'name': 'Gem Guardian',
		'slug': 'gemguardian',
		'symbol': 'GEMG'
	},
	{
		'id': 17054,
		'name': 'Comb Finance',
		'slug': 'comb-finance',
		'symbol': 'COMB'
	},
	{
		'id': 11053,
		'name': 'Cogecoin',
		'slug': 'cogecoin',
		'symbol': 'COGE'
	},
	{
		'id': 16408,
		'name': 'Mechanium',
		'slug': 'mechachain',
		'symbol': 'MECHA'
	},
	{
		'id': 5673,
		'name': 'EYES Protocol',
		'slug': 'eyes-protocol',
		'symbol': 'EYES'
	},
	{
		'id': 15236,
		'name': 'CheersLand',
		'slug': 'cheersland',
		'symbol': 'CHEERS'
	},
	{
		'id': 5924,
		'name': 'Pantos',
		'slug': 'pantos',
		'symbol': 'PAN'
	},
	{
		'id': 4552,
		'name': 'Aircoins',
		'slug': 'aircoins',
		'symbol': 'AIRX'
	},
	{
		'id': 15492,
		'name': 'humanDAO',
		'slug': 'humandao',
		'symbol': 'HDAO'
	},
	{
		'id': 22891,
		'name': 'Super Athletes Token',
		'slug': 'super-athletes',
		'symbol': 'SAT'
	},
	{
		'id': 21397,
		'name': 'Sturgeon Moon',
		'slug': 'sturgeon-moon',
		'symbol': 'MOON'
	},
	{
		'id': 18754,
		'name': 'Staked NEAR',
		'slug': 'staked-near',
		'symbol': 'STNEAR'
	},
	{
		'id': 8198,
		'name': 'Happiness Token',
		'slug': 'happinesstoken',
		'symbol': 'HPS'
	},
	{
		'id': 13018,
		'name': 'Paras',
		'slug': 'paras',
		'symbol': 'PARAS'
	},
	{
		'id': 20361,
		'name': 'Cricket Star Manager',
		'slug': 'cricket-star-manager',
		'symbol': 'CSM'
	},
	{
		'id': 5633,
		'name': 'UCROWDME',
		'slug': 'ucrowdme',
		'symbol': 'UCM'
	},
	{
		'id': 18148,
		'name': 'WigoSwap',
		'slug': 'wigoswap',
		'symbol': 'WIGO'
	},
	{
		'id': 22455,
		'name': 'JackpotDoge',
		'slug': 'jackpotdoge',
		'symbol': 'JPD'
	},
	{
		'id': 14246,
		'name': 'Aidi Finance (BSC)',
		'slug': 'aidi-finance-bsc',
		'symbol': 'AIDI'
	},
	{
		'id': 15601,
		'name': 'Floshin Token',
		'slug': 'floshin-token',
		'symbol': 'FLOSHIN'
	},
	{
		'id': 12121,
		'name': 'Electric Vehicle Direct Currency',
		'slug': 'electric-vehicle-direct-currency',
		'symbol': 'EVDC'
	},
	{
		'id': 12090,
		'name': 'YoCoin',
		'slug': 'yocoin-yoco',
		'symbol': 'YOCO'
	},
	{
		'id': 20795,
		'name': 'CZshares',
		'slug': 'czshares',
		'symbol': 'CZSHARES'
	},
	{
		'id': 1750,
		'name': 'GXChain',
		'slug': 'gxchain',
		'symbol': 'GXC'
	},
	{
		'id': 20364,
		'name': 'Gooeys',
		'slug': 'gooeys',
		'symbol': 'GOO'
	},
	{
		'id': 16260,
		'name': 'impactMarket',
		'slug': 'impactmarket',
		'symbol': 'PACT'
	},
	{
		'id': 17733,
		'name': 'More Token',
		'slug': 'moremoney-finance',
		'symbol': 'MORE'
	},
	{
		'id': 23249,
		'name': 'Vege Token',
		'slug': 'vege-token',
		'symbol': 'VEGE'
	},
	{
		'id': 21082,
		'name': 'Layer2DAO',
		'slug': 'layer2dao',
		'symbol': 'L2DAO'
	},
	{
		'id': 20642,
		'name': 'CSR',
		'slug': 'csr',
		'symbol': 'CSR'
	},
	{
		'id': 21305,
		'name': 'Algomint',
		'slug': 'algomint-gobtc',
		'symbol': 'GOBTC'
	},
	{
		'id': 17916,
		'name': 'Vulture Peak',
		'slug': 'vulture-peak',
		'symbol': 'VPK'
	},
	{
		'id': 10902,
		'name': 'TruBadger',
		'slug': 'trubadger',
		'symbol': 'TRUBGR'
	},
	{
		'id': 12954,
		'name': 'Vetter Token',
		'slug': 'vetter-token',
		'symbol': 'VETTER'
	},
	{
		'id': 22185,
		'name': 'Chronoly',
		'slug': 'chronoly',
		'symbol': 'CRNO'
	},
	{
		'id': 20820,
		'name': 'Bonded Cronos',
		'slug': 'bonded-cronos',
		'symbol': 'BCRO'
	},
	{
		'id': 22172,
		'name': 'PiBridge',
		'slug': 'pibridge',
		'symbol': 'PIB'
	},
	{
		'id': 15323,
		'name': 'GamingShiba',
		'slug': 'gamingshiba',
		'symbol': 'GAMINGSHIBA'
	},
	{
		'id': 16517,
		'name': 'VaporNodes',
		'slug': 'vapornodes',
		'symbol': 'VPND'
	},
	{
		'id': 13893,
		'name': 'Gamma',
		'slug': 'metawars-gam',
		'symbol': 'GAM'
	},
	{
		'id': 19205,
		'name': 'Sifu Vision',
		'slug': 'sifu-vision',
		'symbol': 'SIFU'
	},
	{
		'id': 17999,
		'name': 'MEME KONG',
		'slug': 'meme-kong',
		'symbol': 'MKONG'
	},
	{
		'id': 20990,
		'name': 'Martin Shkreli Inu',
		'slug': 'martin-shkreli-inu',
		'symbol': 'MSI'
	},
	{
		'id': 11318,
		'name': 'Goldex Token',
		'slug': 'goldex-token',
		'symbol': 'GLDX'
	},
	{
		'id': 23155,
		'name': 'TonexCoin',
		'slug': 'tonex',
		'symbol': 'TNX'
	},
	{
		'id': 22244,
		'name': 'BizAuto',
		'slug': 'bizauto',
		'symbol': 'BIZA'
	},
	{
		'id': 20610,
		'name': 'StarFish OS',
		'slug': 'starfish-os',
		'symbol': 'SFO'
	},
	{
		'id': 20389,
		'name': 'Sports 2K75',
		'slug': 'sports-2k75',
		'symbol': 'S2K'
	},
	{
		'id': 7844,
		'name': 'ACryptoS',
		'slug': 'acryptos',
		'symbol': 'ACS'
	},
	{
		'id': 21610,
		'name': 'TokenBot',
		'slug': 'tokenbot',
		'symbol': 'TKB'
	},
	{
		'id': 19330,
		'name': 'Bitcoin Asset',
		'slug': 'bitcoin-asset-new',
		'symbol': 'BTA'
	},
	{
		'id': 16927,
		'name': '1peco',
		'slug': '1peco',
		'symbol': '1PECO'
	},
	{
		'id': 16023,
		'name': 'NFTshootout',
		'slug': 'nftshootout',
		'symbol': 'SHOO'
	},
	{
		'id': 7212,
		'name': 'Consensus Cell Network',
		'slug': 'consensus-cell-network',
		'symbol': 'ECELL'
	},
	{
		'id': 3035,
		'name': 'Blocksquare Token',
		'slug': 'blocksquare-token',
		'symbol': 'BST'
	},
	{
		'id': 8964,
		'name': 'Blizzard.money',
		'slug': 'blizzard-money',
		'symbol': 'xBLZD'
	},
	{
		'id': 12754,
		'name': 'Revault Network',
		'slug': 'revault-network',
		'symbol': 'REVA'
	},
	{
		'id': 16206,
		'name': 'Eroverse',
		'slug': 'eroverse',
		'symbol': 'ERO'
	},
	{
		'id': 20360,
		'name': 'Aarma',
		'slug': 'aarma',
		'symbol': 'ARMA'
	},
	{
		'id': 10093,
		'name': 'Gold Secured Currency',
		'slug': 'gold-secured-currency',
		'symbol': 'GSX'
	},
	{
		'id': 8879,
		'name': 'Pika',
		'slug': 'pika',
		'symbol': 'PIKA'
	},
	{
		'id': 21326,
		'name': 'XPROJECT',
		'slug': 'xproject',
		'symbol': 'XPRO'
	},
	{
		'id': 10029,
		'name': 'USD mars',
		'slug': 'usd-mars',
		'symbol': 'USDm'
	},
	{
		'id': 17382,
		'name': 'HeroBook',
		'slug': 'herobook',
		'symbol': 'HBG'
	},
	{
		'id': 10756,
		'name': 'Omni Real Estate Token',
		'slug': 'omni-real-estate-token',
		'symbol': 'ORT'
	},
	{
		'id': 11042,
		'name': 'NFTBooks',
		'slug': 'nftbooks',
		'symbol': 'NFTBS'
	},
	{
		'id': 9848,
		'name': 'Moonlight Token',
		'slug': 'moonlight-token',
		'symbol': 'MOONLIGHT'
	},
	{
		'id': 17377,
		'name': 'ImmortalDAO Finance',
		'slug': 'immortaldao-finance',
		'symbol': 'IMMO'
	},
	{
		'id': 17111,
		'name': 'TheSolanDAO',
		'slug': 'thesolandao',
		'symbol': 'SDO'
	},
	{
		'id': 18474,
		'name': 'YASHA',
		'slug': 'yasha-dao',
		'symbol': 'YASHA'
	},
	{
		'id': 8534,
		'name': 'Chintai',
		'slug': 'chex-token',
		'symbol': 'CHEX'
	},
	{
		'id': 8930,
		'name': 'ebox',
		'slug': 'ebox',
		'symbol': 'EBOX'
	},
	{
		'id': 12898,
		'name': 'GooseFX',
		'slug': 'goosefx',
		'symbol': 'GOFX'
	},
	{
		'id': 17420,
		'name': 'Grape Finance',
		'slug': 'grape-finance',
		'symbol': 'GRAPE'
	},
	{
		'id': 22734,
		'name': 'Perp Inu',
		'slug': 'perp-inu',
		'symbol': 'PERPI'
	},
	{
		'id': 18697,
		'name': 'Wrapped Syscoin',
		'slug': 'wrapped-syscoin',
		'symbol': 'WSYS'
	},
	{
		'id': 22747,
		'name': 'FibSWAP DEx',
		'slug': 'fibswap-dex-v2',
		'symbol': 'FIBO'
	},
	{
		'id': 10207,
		'name': 'Zinari',
		'slug': 'zinari',
		'symbol': 'ZINA'
	},
	{
		'id': 18630,
		'name': 'Vexchange',
		'slug': 'vexchange',
		'symbol': 'VEX'
	},
	{
		'id': 11107,
		'name': 'Birb',
		'slug': 'birb',
		'symbol': 'BIRB'
	},
	{
		'id': 22659,
		'name': 'Morphswap',
		'slug': 'morphswap',
		'symbol': 'MS'
	},
	{
		'id': 23021,
		'name': 'Very Special Dragon',
		'slug': 'very-special-dragon',
		'symbol': 'VITO'
	},
	{
		'id': 20655,
		'name': 'BlockAura',
		'slug': 'blockaura',
		'symbol': 'TBAC'
	},
	{
		'id': 18119,
		'name': 'Saitoki Inu',
		'slug': 'saitoki-inu',
		'symbol': 'SAITOKI'
	},
	{
		'id': 16427,
		'name': 'iCommunity Labs',
		'slug': 'icommunity-blockchain-solutions-ibs',
		'symbol': 'ICOM'
	},
	{
		'id': 16421,
		'name': 'TinyBits',
		'slug': 'tiny-colony',
		'symbol': 'TINY'
	},
	{
		'id': 8978,
		'name': 'PooCoin',
		'slug': 'poocoin',
		'symbol': 'POOCOIN'
	},
	{
		'id': 22906,
		'name': 'stake.link',
		'slug': 'stake-link',
		'symbol': 'SDL'
	},
	{
		'id': 22938,
		'name': 'MegaWorld',
		'slug': 'megaworld',
		'symbol': 'MEGA'
	},
	{
		'id': 22539,
		'name': 'MetaSetGO',
		'slug': 'metasetgo',
		'symbol': 'MSGO'
	},
	{
		'id': 3589,
		'name': 'Ethereum Meta',
		'slug': 'ethereum-meta',
		'symbol': 'ETHM'
	},
	{
		'id': 11305,
		'name': 'SafuYield Protocol',
		'slug': 'safuyield-protocol',
		'symbol': 'SAFUYIELD'
	},
	{
		'id': 19625,
		'name': 'Hummus',
		'slug': 'hummus',
		'symbol': 'HUM'
	},
	{
		'id': 14399,
		'name': 'Cross-Chain Bridge Token',
		'slug': 'cross-chain-bridge-token',
		'symbol': 'BRIDGE'
	},
	{
		'id': 22667,
		'name': 'Bitratoken',
		'slug': 'bitratoken',
		'symbol': 'BITRA'
	},
	{
		'id': 20520,
		'name': 'HOME Coin',
		'slug': 'baconcoin-token',
		'symbol': 'HOME'
	},
	{
		'id': 6450,
		'name': 'Gbrick',
		'slug': 'gbrick',
		'symbol': 'GBX'
	},
	{
		'id': 19615,
		'name': 'Tom Coin',
		'slug': 'tom-coin',
		'symbol': 'TMC'
	},
	{
		'id': 21061,
		'name': 'Saudi Shiba Inu',
		'slug': 'saudishibainu',
		'symbol': 'SAUDISHIB'
	},
	{
		'id': 17118,
		'name': 'DarkCrypto',
		'slug': 'darkcrypto',
		'symbol': 'DARK'
	},
	{
		'id': 15907,
		'name': 'HarryPotterObamaSonic10Inu',
		'slug': 'harrypotterobamasonic10inu',
		'symbol': 'BITCOIN'
	},
	{
		'id': 19744,
		'name': 'Dot Dot Finance',
		'slug': 'dot-dot-finance',
		'symbol': 'DDD'
	},
	{
		'id': 13829,
		'name': 'Infomatix',
		'slug': 'informatix',
		'symbol': 'INFO'
	},
	{
		'id': 22954,
		'name': 'Y5 Crypto',
		'slug': 'y5-crypto',
		'symbol': 'Y5'
	},
	{
		'id': 4715,
		'name': 'Tokenize Xchange',
		'slug': 'tokenize-xchange',
		'symbol': 'TKX'
	},
	{
		'id': 9016,
		'name': 'DAOhaus',
		'slug': 'daohaus',
		'symbol': 'HAUS'
	},
	{
		'id': 22972,
		'name': 'Nitro Frens Army',
		'slug': 'nitro-frens-army',
		'symbol': 'NFA'
	},
	{
		'id': 22966,
		'name': 'Orbit Bridge Klaytn Handy',
		'slug': 'orbit-bridge-klaytn-handy',
		'symbol': 'OHANDY'
	},
	{
		'id': 18853,
		'name': 'MonoMoney',
		'slug': 'monomoney',
		'symbol': 'MONO'
	},
	{
		'id': 14053,
		'name': 'GovWorld',
		'slug': 'govworld',
		'symbol': 'GOV'
	},
	{
		'id': 22732,
		'name': 'Protectors of the Realm',
		'slug': 'protectors-of-the-realm',
		'symbol': 'WER1'
	},
	{
		'id': 7570,
		'name': 'Blurt',
		'slug': 'blurt',
		'symbol': 'BLURT'
	},
	{
		'id': 17496,
		'name': 'BitValley',
		'slug': 'bitvalley',
		'symbol': 'BITV'
	},
	{
		'id': 11464,
		'name': 'ApeXit Finance',
		'slug': 'apexit-finance',
		'symbol': 'APEX'
	},
	{
		'id': 15589,
		'name': 'The Crypto You',
		'slug': 'the-crypto-you',
		'symbol': 'MILK'
	},
	{
		'id': 7271,
		'name': 'Starname',
		'slug': 'starname',
		'symbol': 'IOV'
	},
	{
		'id': 19427,
		'name': 'WOOP',
		'slug': 'woop',
		'symbol': 'WOOP'
	},
	{
		'id': 19234,
		'name': 'TroveDAO',
		'slug': 'treasure-token-finance',
		'symbol': 'TROVE'
	},
	{
		'id': 22952,
		'name': 'GEMX',
		'slug': 'gemx',
		'symbol': 'GEMX'
	},
	{
		'id': 15097,
		'name': 'Boryoku Dragonz',
		'slug': 'boku',
		'symbol': 'BOKU'
	},
	{
		'id': 18650,
		'name': 'V3S Share',
		'slug': 'v3s-share',
		'symbol': 'VSHARE'
	},
	{
		'id': 14421,
		'name': 'SpritzMoon Crypto Token',
		'slug': 'spritzmoon-crypto-token',
		'symbol': 'spritzmoon'
	},
	{
		'id': 22686,
		'name': 'KIRA',
		'slug': 'kira',
		'symbol': 'KIRA'
	},
	{
		'id': 17939,
		'name': 'ZEUS10000 (NEW)',
		'slug': 'zeus10000-new',
		'symbol': 'ZEUS'
	},
	{
		'id': 21231,
		'name': 'BullBankers',
		'slug': 'bullbankers',
		'symbol': 'BANKERS'
	},
	{
		'id': 18352,
		'name': 'Time Raiders',
		'slug': 'time-raiders',
		'symbol': 'XPND'
	},
	{
		'id': 18840,
		'name': 'Degis',
		'slug': 'degis',
		'symbol': 'DEG'
	},
	{
		'id': 22390,
		'name': 'Glowston',
		'slug': 'glowston',
		'symbol': 'GLON'
	},
	{
		'id': 17573,
		'name': 'Ripio Coin',
		'slug': 'ripio-coin',
		'symbol': 'RPC'
	},
	{
		'id': 12395,
		'name': 'Merchant Token',
		'slug': 'merchant-token',
		'symbol': 'MTO'
	},
	{
		'id': 11569,
		'name': 'Ovato',
		'slug': 'ovato',
		'symbol': 'OVO'
	},
	{
		'id': 21847,
		'name': 'Raresama',
		'slug': 'raresama',
		'symbol': 'POOP'
	},
	{
		'id': 19151,
		'name': 'MsgSender',
		'slug': 'msgsender',
		'symbol': 'MSG'
	},
	{
		'id': 22887,
		'name': 'Primal (new)',
		'slug': 'primal-new',
		'symbol': 'PRM'
	},
	{
		'id': 20335,
		'name': 'Galaxy Finance',
		'slug': 'galaxy-finance',
		'symbol': 'GFT'
	},
	{
		'id': 17311,
		'name': 'GamiFi.GG',
		'slug': 'gamifi-gg',
		'symbol': 'GMI'
	},
	{
		'id': 9558,
		'name': 'ZionLabs Token',
		'slug': 'rasta-finance',
		'symbol': 'RASTA'
	},
	{
		'id': 17941,
		'name': 'Magik Finance',
		'slug': 'magik-finance',
		'symbol': 'MAGIK'
	},
	{
		'id': 15163,
		'name': 'Billionaire Plus',
		'slug': 'billionaire-plus',
		'symbol': 'BPLUS'
	},
	{
		'id': 10644,
		'name': 'SafeBull',
		'slug': 'safebull',
		'symbol': 'SAFEBULL'
	},
	{
		'id': 11849,
		'name': 'MarX',
		'slug': 'marx',
		'symbol': 'MARX'
	},
	{
		'id': 11253,
		'name': 'Doont Buy',
		'slug': 'doont-buy',
		'symbol': 'DBUY'
	},
	{
		'id': 21385,
		'name': 'Champion',
		'slug': 'champion',
		'symbol': 'CHAM'
	},
	{
		'id': 13020,
		'name': 'Flare Token',
		'slug': 'flare-token',
		'symbol': '1FLR'
	},
	{
		'id': 12844,
		'name': 'The Flash Currency',
		'slug': 'flash-currency',
		'symbol': 'TFC'
	},
	{
		'id': 17781,
		'name': 'EverEarn',
		'slug': 'everearn',
		'symbol': 'EARN'
	},
	{
		'id': 17814,
		'name': 'TTX METAVERSE',
		'slug': 'ttx-games',
		'symbol': 'XMETA'
	},
	{
		'id': 23140,
		'name': 'Virtual Reality Glasses',
		'slug': 'virtual-reality-glasses',
		'symbol': 'VRG'
	},
	{
		'id': 21647,
		'name': 'NEMO',
		'slug': 'galixcity',
		'symbol': 'NEMO'
	},
	{
		'id': 20844,
		'name': 'KOLnet',
		'slug': 'kolnet',
		'symbol': 'KOLNET'
	},
	{
		'id': 10514,
		'name': 'HUNNY FINANCE',
		'slug': 'pancake-hunny',
		'symbol': 'HUNNY'
	},
	{
		'id': 22152,
		'name': 'TYV Coin',
		'slug': 'tyv-coin',
		'symbol': 'TYV'
	},
	{
		'id': 8733,
		'name': 'BasketCoin',
		'slug': 'basketcoin',
		'symbol': 'BSKT'
	},
	{
		'id': 11469,
		'name': 'Solpad Finance',
		'slug': 'solpad-finance',
		'symbol': 'SOLPAD'
	},
	{
		'id': 17200,
		'name': 'Exchange Genesis Ethlas Medium',
		'slug': 'exchange-genesis-ethlas-medium',
		'symbol': 'XGEM'
	},
	{
		'id': 15980,
		'name': 'Shuna Inuverse',
		'slug': 'shuna-inuverse',
		'symbol': 'SHUNAV2'
	},
	{
		'id': 12996,
		'name': 'FastSwap (BSC)',
		'slug': 'fastswap-bsc',
		'symbol': 'FAST'
	},
	{
		'id': 12150,
		'name': 'Little Angry Bunny v2',
		'slug': 'little-angry-bunny-v2',
		'symbol': 'LAB v2'
	},
	{
		'id': 4229,
		'name': 'Yobit Token',
		'slug': 'yobit-token',
		'symbol': 'YO'
	},
	{
		'id': 6118,
		'name': 'BitoPro Exchange Token',
		'slug': 'bitopro-exchange-token',
		'symbol': 'BITO'
	},
	{
		'id': 18453,
		'name': 'BetSwirl',
		'slug': 'betswirl',
		'symbol': 'BETS'
	},
	{
		'id': 22919,
		'name': 'All in',
		'slug': 'all-in',
		'symbol': 'ALLIN'
	},
	{
		'id': 19331,
		'name': 'Superciety',
		'slug': 'superciety',
		'symbol': 'SUPER'
	},
	{
		'id': 14437,
		'name': 'Totoro Inu',
		'slug': 'totoro-inu',
		'symbol': 'TOTORO'
	},
	{
		'id': 17206,
		'name': 'Sacred Tails',
		'slug': 'sacred-tails',
		'symbol': 'ST'
	},
	{
		'id': 17192,
		'name': 'PAW',
		'slug': 'paw',
		'symbol': 'PAW'
	},
	{
		'id': 15090,
		'name': 'Cirrus',
		'slug': 'cirrus',
		'symbol': 'CIRRUS'
	},
	{
		'id': 17571,
		'name': 'BLOKPAD',
		'slug': 'blokpad',
		'symbol': 'BPAD'
	},
	{
		'id': 18626,
		'name': 'Ape In Records',
		'slug': 'ape-in-records',
		'symbol': 'AIR'
	},
	{
		'id': 12641,
		'name': 'OBRok Token',
		'slug': 'obrok-token',
		'symbol': 'OBROK'
	},
	{
		'id': 18400,
		'name': 'Endless Battlefield',
		'slug': 'endless-battlefield',
		'symbol': 'EB'
	},
	{
		'id': 21192,
		'name': 'Shepherd Inu',
		'slug': 'shepherd-inu',
		'symbol': 'SINU'
	},
	{
		'id': 11661,
		'name': 'DeXit Network',
		'slug': 'dexit-finance',
		'symbol': 'DXT'
	},
	{
		'id': 20887,
		'name': 'Son of Doge',
		'slug': 'son-of-doge-new',
		'symbol': 'SOD'
	},
	{
		'id': 19850,
		'name': 'Avaxtars Token',
		'slug': 'avaxtars-token',
		'symbol': 'AVXT'
	},
	{
		'id': 16575,
		'name': 'Walter Inu',
		'slug': 'walterinu',
		'symbol': '$WINU'
	},
	{
		'id': 19370,
		'name': 'BABYOKX',
		'slug': 'babyokx',
		'symbol': 'BABYOKX'
	},
	{
		'id': 20798,
		'name': 'CZbnb',
		'slug': 'czbnb',
		'symbol': 'CZBNB'
	},
	{
		'id': 19952,
		'name': 'Shack Token',
		'slug': 'shack-token',
		'symbol': 'SHACK'
	},
	{
		'id': 14452,
		'name': 'Transhuman Coin',
		'slug': 'transhuman-coin',
		'symbol': 'THC'
	},
	{
		'id': 14449,
		'name': 'Jaiho Crypto',
		'slug': 'jaiho-crypto',
		'symbol': 'JAIHO'
	},
	{
		'id': 17888,
		'name': 'Crypto Inu',
		'slug': 'crypto-inu',
		'symbol': 'ABCD'
	},
	{
		'id': 16283,
		'name': 'ARTi Project',
		'slug': 'arti-project',
		'symbol': 'ARTI'
	},
	{
		'id': 19023,
		'name': 'Dripto',
		'slug': 'dripto',
		'symbol': 'DRYP'
	},
	{
		'id': 20870,
		'name': 'Freebie Life Finance',
		'slug': 'freebie-life-finance',
		'symbol': 'FRB'
	},
	{
		'id': 19770,
		'name': 'CortexDAO',
		'slug': 'cortexdao',
		'symbol': 'CXD'
	},
	{
		'id': 22227,
		'name': 'Pinkie Inu',
		'slug': 'pinkie-inu',
		'symbol': 'PINKIE'
	},
	{
		'id': 9590,
		'name': 'Obortech',
		'slug': 'obortech',
		'symbol': 'OBOT'
	},
	{
		'id': 8940,
		'name': 'ParaState',
		'slug': 'parastate',
		'symbol': 'STATE'
	},
	{
		'id': 20822,
		'name': 'Twoge Inu',
		'slug': 'twoge-inu',
		'symbol': 'TWOGE'
	},
	{
		'id': 23056,
		'name': 'Protocol Zero',
		'slug': 'protocol-zero',
		'symbol': 'ZRO'
	},
	{
		'id': 10311,
		'name': 'NFT STARS',
		'slug': 'nft-stars',
		'symbol': 'NFTS'
	},
	{
		'id': 8398,
		'name': 'YFIONE',
		'slug': 'yfione',
		'symbol': 'YFO'
	},
	{
		'id': 15873,
		'name': 'UNIVERSE ISLAND',
		'slug': 'universe-island',
		'symbol': 'UIM'
	},
	{
		'id': 15687,
		'name': 'Grim Finance',
		'slug': 'grim-finance',
		'symbol': 'REAPER'
	},
	{
		'id': 20710,
		'name': 'AlgoStake',
		'slug': 'algostake',
		'symbol': 'STKE'
	},
	{
		'id': 19675,
		'name': 'Betero',
		'slug': 'betero',
		'symbol': 'BTE'
	},
	{
		'id': 17220,
		'name': 'Croking',
		'slug': 'croking',
		'symbol': 'CRK'
	},
	{
		'id': 14723,
		'name': 'GenshinFlokiInu',
		'slug': 'genshinflokiinu-token',
		'symbol': 'GFloki'
	},
	{
		'id': 14522,
		'name': 'Moonscape',
		'slug': 'moonscape',
		'symbol': 'MSCP'
	},
	{
		'id': 17960,
		'name': 'ORIGYN Foundation',
		'slug': 'origyn-foundation',
		'symbol': 'OGY'
	},
	{
		'id': 20141,
		'name': 'Smart Block Chain City',
		'slug': 'smart-block-chain-city',
		'symbol': 'SBCC'
	},
	{
		'id': 16160,
		'name': 'Multi-Chain Capital (new)',
		'slug': 'multi-chain-capital-new',
		'symbol': 'MCC'
	},
	{
		'id': 11273,
		'name': 'Polylauncher',
		'slug': 'polylauncher',
		'symbol': 'ANGEL'
	},
	{
		'id': 22211,
		'name': 'Asgard Games',
		'slug': 'asgard-games',
		'symbol': 'ASG'
	},
	{
		'id': 15641,
		'name': 'Kounotori',
		'slug': 'kounotori',
		'symbol': 'KTO'
	},
	{
		'id': 17338,
		'name': 'Desmos',
		'slug': 'desmos',
		'symbol': 'DSM'
	},
	{
		'id': 21915,
		'name': 'Chihuahua In Space',
		'slug': 'chihuahua-in-space',
		'symbol': 'CIS'
	},
	{
		'id': 18344,
		'name': 'Santa Floki v2.0',
		'slug': 'santa-floki-v2',
		'symbol': 'HOHOHO V2.0'
	},
	{
		'id': 20966,
		'name': 'Bankera V2',
		'slug': 'bankera-v2',
		'symbol': 'BNK'
	},
	{
		'id': 15572,
		'name': 'Charm',
		'slug': 'charm',
		'symbol': 'CHARM'
	},
	{
		'id': 19035,
		'name': 'Telefy',
		'slug': 'telefy',
		'symbol': 'TELE'
	},
	{
		'id': 16502,
		'name': 'Nest Arcade',
		'slug': 'nest-arcade',
		'symbol': 'NESTA'
	},
	{
		'id': 20905,
		'name': 'H2O Securities',
		'slug': 'h2o-securities',
		'symbol': 'H2ON'
	},
	{
		'id': 23247,
		'name': 'TrueFreeze',
		'slug': 'truefreeze',
		'symbol': 'FRZ'
	},
	{
		'id': 19781,
		'name': 'CharityDAO',
		'slug': 'charitydao',
		'symbol': 'CHD'
	},
	{
		'id': 13243,
		'name': 'FoxGirl',
		'slug': 'foxgirl',
		'symbol': 'FOXGIRL'
	},
	{
		'id': 6392,
		'name': 'BTS Chain',
		'slug': 'bts-chain',
		'symbol': 'BTSC'
	},
	{
		'id': 16219,
		'name': 'FireBotToken',
		'slug': 'firebottoken',
		'symbol': 'FBX'
	},
	{
		'id': 21786,
		'name': 'TechTrees',
		'slug': 'techtreescoin',
		'symbol': 'TTC'
	},
	{
		'id': 17109,
		'name': 'Pay It Now',
		'slug': 'pay-it-now',
		'symbol': 'PIN'
	},
	{
		'id': 12193,
		'name': 'AquaGoat.Finance',
		'slug': 'aquagoat-finance-new',
		'symbol': 'AQUAGOAT'
	},
	{
		'id': 23147,
		'name': 'ShopNEXT',
		'slug': 'shopnext-reward-token',
		'symbol': 'STE'
	},
	{
		'id': 22816,
		'name': 'Nusa',
		'slug': 'nusa',
		'symbol': 'NUSA'
	},
	{
		'id': 11299,
		'name': 'POTENT',
		'slug': 'potent',
		'symbol': 'PTT'
	},
	{
		'id': 20598,
		'name': 'USDi',
		'slug': 'interest-protocol',
		'symbol': 'USDI'
	},
	{
		'id': 12218,
		'name': 'Continuum World',
		'slug': 'continuum-world',
		'symbol': 'UM'
	},
	{
		'id': 20599,
		'name': 'Interest Protocol',
		'slug': 'interest-protocol-token',
		'symbol': 'IPT'
	},
	{
		'id': 22859,
		'name': 'Drunk Skunks DC',
		'slug': 'drunk-skunks-dc',
		'symbol': 'STINK'
	},
	{
		'id': 12953,
		'name': 'MOVE Network',
		'slug': 'move-network',
		'symbol': 'MOVD'
	},
	{
		'id': 22318,
		'name': 'Boop',
		'slug': 'boop',
		'symbol': 'BOOP'
	},
	{
		'id': 16832,
		'name': 'Web3 Inu',
		'slug': 'web3-inu',
		'symbol': 'WEB3'
	},
	{
		'id': 15028,
		'name': 'UXD Protocol',
		'slug': 'uxd-protocol',
		'symbol': 'UXP'
	},
	{
		'id': 8020,
		'name': 'DeFiato',
		'slug': 'defiato',
		'symbol': 'DFIAT'
	},
	{
		'id': 14239,
		'name': 'Snake Token',
		'slug': 'snake-token',
		'symbol': 'SNK'
	},
	{
		'id': 12472,
		'name': 'Elysian',
		'slug': 'elysian-els',
		'symbol': 'ELS'
	},
	{
		'id': 20816,
		'name': 'BURNZ',
		'slug': 'burnz',
		'symbol': 'BURNZ'
	},
	{
		'id': 17454,
		'name': 'GhostMarket',
		'slug': 'ghostmarket',
		'symbol': 'GM'
	},
	{
		'id': 13858,
		'name': 'Muslim Coins',
		'slug': 'muslim-coins',
		'symbol': 'MUSC'
	},
	{
		'id': 16693,
		'name': 'Paycer Protocol',
		'slug': 'paycer-protocol',
		'symbol': 'PCR'
	},
	{
		'id': 8442,
		'name': 'EthicHub',
		'slug': 'ethichub',
		'symbol': 'ETHIX'
	},
	{
		'id': 4915,
		'name': 'UCX',
		'slug': 'utilies-cryptocurrency-exchange',
		'symbol': 'UCX'
	},
	{
		'id': 11394,
		'name': 'Green Climate World',
		'slug': 'green-climate-world',
		'symbol': 'WGC'
	},
	{
		'id': 17468,
		'name': 'Dhabi Coin',
		'slug': 'dhabi-coin',
		'symbol': 'DBC'
	},
	{
		'id': 21609,
		'name': 'Rocket Raccoon',
		'slug': 'rocket-raccoon-roc',
		'symbol': 'ROC'
	},
	{
		'id': 13827,
		'name': 'SavePlanetEarth',
		'slug': 'saveplanetearth',
		'symbol': 'SPE'
	},
	{
		'id': 18132,
		'name': 'DogeFather',
		'slug': 'dogefather-token',
		'symbol': 'FATHER'
	},
	{
		'id': 22342,
		'name': 'Winterdog',
		'slug': 'winterdog',
		'symbol': 'WDOG'
	},
	{
		'id': 21775,
		'name': 'Yield Yak AVAX',
		'slug': 'yield-yak-avax',
		'symbol': 'YYAVAX'
	},
	{
		'id': 14896,
		'name': 'Tag Protocol',
		'slug': 'tag-protocol',
		'symbol': 'TAG'
	},
	{
		'id': 14625,
		'name': 'CronaSwap',
		'slug': 'cronaswap',
		'symbol': 'CRONA'
	},
	{
		'id': 21214,
		'name': 'lasrever',
		'slug': 'lasrever',
		'symbol': 'LSVR'
	},
	{
		'id': 22883,
		'name': 'Archie Neko',
		'slug': 'archie-neko',
		'symbol': 'ARCHIE'
	},
	{
		'id': 23089,
		'name': 'TETHEREUM',
		'slug': 'tethereum',
		'symbol': 'T99'
	},
	{
		'id': 13641,
		'name': 'PulseDoge',
		'slug': 'pulsedoge',
		'symbol': 'PULSEDOGE'
	},
	{
		'id': 15438,
		'name': 'ForthBox',
		'slug': 'forthbox',
		'symbol': 'FBX'
	},
	{
		'id': 19062,
		'name': 'UNIUM',
		'slug': 'unium',
		'symbol': 'UNM'
	},
	{
		'id': 23108,
		'name': 'Bloody Bunny',
		'slug': 'bloody-bunny',
		'symbol': 'BONY'
	},
	{
		'id': 10385,
		'name': 'Ally Direct Token',
		'slug': 'ally-direct-token',
		'symbol': 'DRCT'
	},
	{
		'id': 18800,
		'name': 'Staked TAROT',
		'slug': 'staked-tarot',
		'symbol': 'XTAROT'
	},
	{
		'id': 22615,
		'name': 'Fasttoken',
		'slug': 'fasttoken',
		'symbol': 'FTN'
	},
	{
		'id': 16945,
		'name': 'Puzzle Hunters',
		'slug': 'creature-hunters',
		'symbol': 'CHTS'
	},
	{
		'id': 6541,
		'name': 'Relevant',
		'slug': 'relevant',
		'symbol': 'REL'
	},
	{
		'id': 19398,
		'name': 'Glide Finance',
		'slug': 'glide-finance',
		'symbol': 'GLIDE'
	},
	{
		'id': 8031,
		'name': 'governance ZIL',
		'slug': 'governance-zil',
		'symbol': 'GZIL'
	},
	{
		'id': 19526,
		'name': 'Pi Network DeFi',
		'slug': 'pi-network-defi',
		'symbol': 'PI NETWORK DEFI'
	},
	{
		'id': 21111,
		'name': 'The Dragon Gate',
		'slug': 'the-dragon-gate',
		'symbol': 'KOI'
	},
	{
		'id': 20049,
		'name': 'FIT Token',
		'slug': 'calo',
		'symbol': 'FIT'
	},
	{
		'id': 12919,
		'name': 'Universal Basic Income',
		'slug': 'universal-basic-income',
		'symbol': 'UBI'
	},
	{
		'id': 5365,
		'name': 'Historia',
		'slug': 'historia',
		'symbol': 'HTA'
	},
	{
		'id': 18525,
		'name': 'Wolf Works DAO',
		'slug': 'wlitidao',
		'symbol': 'WLD'
	},
	{
		'id': 14676,
		'name': 'TrustNFT',
		'slug': 'trustnft',
		'symbol': 'TRUSTNFT'
	},
	{
		'id': 22583,
		'name': 'OXM Protocol',
		'slug': 'oxm-protocol',
		'symbol': 'OXM'
	},
	{
		'id': 4112,
		'name': 'Eco Value Coin',
		'slug': 'eco-value-coin',
		'symbol': 'EVC'
	},
	{
		'id': 14357,
		'name': 'The Dynasty',
		'slug': 'the-dynasty',
		'symbol': 'DYT'
	},
	{
		'id': 19363,
		'name': 'Honey',
		'slug': 'honey-hive-investments',
		'symbol': 'HNY'
	},
	{
		'id': 22597,
		'name': 'Bondly',
		'slug': 'bondly-',
		'symbol': 'BOND'
	},
	{
		'id': 4254,
		'name': 'Hintchain',
		'slug': 'hintchain',
		'symbol': 'HINT'
	},
	{
		'id': 19932,
		'name': 'Xodex',
		'slug': 'xodex',
		'symbol': 'XODEX'
	},
	{
		'id': 12690,
		'name': 'Wrapped PKT',
		'slug': 'wrapped-pkt',
		'symbol': 'WPKT'
	},
	{
		'id': 21216,
		'name': 'The Revolution Token',
		'slug': 'the-revolution-token',
		'symbol': 'TRT'
	},
	{
		'id': 11341,
		'name': 'delta.theta',
		'slug': 'delta-theta',
		'symbol': 'DLTA'
	},
	{
		'id': 17161,
		'name': 'SUPA Foundation',
		'slug': 'supa-foundation',
		'symbol': 'SUPA'
	},
	{
		'id': 9984,
		'name': 'CluCoin',
		'slug': 'clucoin',
		'symbol': 'CLU'
	},
	{
		'id': 15862,
		'name': 'Dash Diamond',
		'slug': 'dash-diamond',
		'symbol': 'DASHD'
	},
	{
		'id': 16627,
		'name': 'IOTEN',
		'slug': 'ioten',
		'symbol': 'IOTN'
	},
	{
		'id': 22637,
		'name': 'CoinFarm (new)',
		'slug': 'coinfarm-new',
		'symbol': 'CFARM'
	},
	{
		'id': 11340,
		'name': 'Immutable',
		'slug': 'immutable',
		'symbol': 'DARA'
	},
	{
		'id': 13121,
		'name': 'Atlantis Loans',
		'slug': 'atlantis-loans',
		'symbol': 'ATL'
	},
	{
		'id': 22746,
		'name': 'Tail',
		'slug': 'tail',
		'symbol': 'TAIL'
	},
	{
		'id': 20628,
		'name': 'DRIVEZ',
		'slug': 'drivez',
		'symbol': 'DRIV'
	},
	{
		'id': 20169,
		'name': 'Meshswap Protocol',
		'slug': 'meshswap-protocol',
		'symbol': 'MESH'
	},
	{
		'id': 21674,
		'name': 'Game of Dragons',
		'slug': 'game-of-dragons',
		'symbol': 'GOD'
	},
	{
		'id': 20408,
		'name': 'MDB Plus',
		'slug': 'mdb-plus',
		'symbol': 'MDB+'
	},
	{
		'id': 17370,
		'name': 'Lucrosus Capital',
		'slug': 'lucrosus-capital',
		'symbol': 'LUCA'
	},
	{
		'id': 10557,
		'name': 'Swapz',
		'slug': 'swapz',
		'symbol': 'SWAPZ'
	},
	{
		'id': 13913,
		'name': 'Blockster',
		'slug': 'blockster',
		'symbol': 'BXR'
	},
	{
		'id': 19477,
		'name': 'Speed Star STAR',
		'slug': 'speed-star-star',
		'symbol': 'STAR'
	},
	{
		'id': 19101,
		'name': 'MetaMate',
		'slug': 'metamatenft',
		'symbol': 'MTM'
	},
	{
		'id': 23109,
		'name': 'Vaulteum',
		'slug': 'vaulteum',
		'symbol': 'VAULT'
	},
	{
		'id': 21996,
		'name': 'Crypto Legions V3',
		'slug': 'crypto-legions-v3',
		'symbol': 'BLV3'
	},
	{
		'id': 23024,
		'name': 'TCG Verse',
		'slug': 'tcgc',
		'symbol': 'TCGC'
	},
	{
		'id': 14276,
		'name': 'ZoomSwap',
		'slug': 'zoomswap',
		'symbol': 'ZM'
	},
	{
		'id': 14611,
		'name': 'Rice Wallet',
		'slug': 'rice-wallet',
		'symbol': 'RICE'
	},
	{
		'id': 19078,
		'name': 'Wrapped Bitcoin Cash',
		'slug': 'wrapped-bitcoin-cash',
		'symbol': 'WBCH'
	},
	{
		'id': 22476,
		'name': 'Shiwa',
		'slug': 'shiwa',
		'symbol': 'SHIWA'
	},
	{
		'id': 12710,
		'name': 'Shakita Inu',
		'slug': 'shakita-inu',
		'symbol': 'SHAK'
	},
	{
		'id': 18707,
		'name': 'PolyCub',
		'slug': 'polycub',
		'symbol': 'POLYCUB'
	},
	{
		'id': 17783,
		'name': 'Valentine Floki',
		'slug': 'valentine-floki',
		'symbol': 'FLOV'
	},
	{
		'id': 8768,
		'name': 'Roxe Cash',
		'slug': 'roxe-cash',
		'symbol': 'ROC'
	},
	{
		'id': 12397,
		'name': 'MoonBeans',
		'slug': 'moonbeans',
		'symbol': 'BEANS'
	},
	{
		'id': 8905,
		'name': 'BitSong',
		'slug': 'bitsong',
		'symbol': 'BTSG'
	},
	{
		'id': 6237,
		'name': 'MDsquare',
		'slug': 'mdsquare',
		'symbol': 'TMED'
	},
	{
		'id': 19080,
		'name': 'Wrapped KardiaChain',
		'slug': 'wrapped-kardiachain',
		'symbol': 'WKAI'
	},
	{
		'id': 18691,
		'name': 'WOLFCOIN',
		'slug': 'wolfcoin-wolf',
		'symbol': 'WOLF'
	},
	{
		'id': 22712,
		'name': 'Pomerium',
		'slug': 'pomerium',
		'symbol': 'PMR'
	},
	{
		'id': 11672,
		'name': 'Pocoland',
		'slug': 'pocoland',
		'symbol': 'POCO'
	},
	{
		'id': 19914,
		'name': 'Scorefam',
		'slug': 'scorefam',
		'symbol': 'SFT'
	},
	{
		'id': 20051,
		'name': 'ELON CAT COIN',
		'slug': 'elon-cat-coin',
		'symbol': 'ELONCAT'
	},
	{
		'id': 5563,
		'name': 'CryptoBharatCoin',
		'slug': 'cryptobharatcoin',
		'symbol': 'CBC'
	},
	{
		'id': 13685,
		'name': 'Quartz',
		'slug': 'quartz-token',
		'symbol': 'QTZ'
	},
	{
		'id': 12373,
		'name': 'ArchAngel Token',
		'slug': 'archangel-token',
		'symbol': 'ARCHA'
	},
	{
		'id': 19301,
		'name': 'Fantom Libero Financial',
		'slug': 'fantom-libero-financial',
		'symbol': 'FLIBERO'
	},
	{
		'id': 9639,
		'name': 'Pussy Financial',
		'slug': 'pussy-financial',
		'symbol': 'PUSSY'
	},
	{
		'id': 10468,
		'name': 'InvestDex',
		'slug': 'investdex',
		'symbol': 'INVEST'
	},
	{
		'id': 17580,
		'name': 'KRED',
		'slug': 'kred',
		'symbol': 'KRED'
	},
	{
		'id': 12418,
		'name': 'Jax.Network',
		'slug': 'jax-network',
		'symbol': 'WJXN'
	},
	{
		'id': 21161,
		'name': 'Dragon Crypto Argenti',
		'slug': 'dragon-crypto-argenti',
		'symbol': 'DCAR'
	},
	{
		'id': 19662,
		'name': 'StepD',
		'slug': 'stepd',
		'symbol': 'STEPD'
	},
	{
		'id': 19025,
		'name': 'Derify Protocol',
		'slug': 'derify-protocol',
		'symbol': 'DRF'
	},
	{
		'id': 21675,
		'name': 'IMMOPET Token',
		'slug': 'immopet-token',
		'symbol': 'IMPT'
	},
	{
		'id': 12038,
		'name': 'Voltage',
		'slug': 'voltage',
		'symbol': 'VOLT'
	},
	{
		'id': 12201,
		'name': 'Portify',
		'slug': 'portify',
		'symbol': 'PFY'
	},
	{
		'id': 20703,
		'name': 'KlayUniverse',
		'slug': 'klayuniverse',
		'symbol': 'KUT'
	},
	{
		'id': 19651,
		'name': 'Galaxy Heroes',
		'slug': 'galaxy-heroes-coin-new',
		'symbol': 'GHC'
	},
	{
		'id': 11191,
		'name': 'Lydia Finance',
		'slug': 'lydia-finance',
		'symbol': 'LYD'
	},
	{
		'id': 21960,
		'name': 'Dwagon',
		'slug': 'dwagon',
		'symbol': 'BABYTSUKA'
	},
	{
		'id': 19113,
		'name': 'Techpay Coin',
		'slug': 'techpay',
		'symbol': 'TPC'
	},
	{
		'id': 18402,
		'name': 'Orkan',
		'slug': 'orkan',
		'symbol': 'ORKAN'
	},
	{
		'id': 21273,
		'name': 'Custodiy',
		'slug': 'custodiy',
		'symbol': 'CTY'
	},
	{
		'id': 10434,
		'name': 'SafeLaunch',
		'slug': 'safelaunch',
		'symbol': 'SFEX'
	},
	{
		'id': 21224,
		'name': 'PYROMATIC',
		'slug': 'pyromatic',
		'symbol': 'PYRO'
	},
	{
		'id': 14447,
		'name': 'Swole Doge',
		'slug': 'swole-doge',
		'symbol': 'SWOLE'
	},
	{
		'id': 17734,
		'name': 'Immortl',
		'slug': 'immortl',
		'symbol': 'IMRTL'
	},
	{
		'id': 16108,
		'name': 'xUSD',
		'slug': 'xusd',
		'symbol': 'XUSD'
	},
	{
		'id': 17912,
		'name': 'Musk Gold',
		'slug': 'musk-gold',
		'symbol': 'MUSK'
	},
	{
		'id': 23098,
		'name': 'Compound Meta',
		'slug': 'compound-metaverse',
		'symbol': 'COMA'
	},
	{
		'id': 12368,
		'name': 'Swapr',
		'slug': 'swapr',
		'symbol': 'SWPR'
	},
	{
		'id': 23154,
		'name': 'Ambra',
		'slug': 'ambra',
		'symbol': 'AMBR'
	},
	{
		'id': 10869,
		'name': 'Baby Bitcoin',
		'slug': 'baby-bitcoin',
		'symbol': 'BBTC'
	},
	{
		'id': 22022,
		'name': 'Project CareCoin',
		'slug': 'project-carecoin',
		'symbol': 'CARESV2'
	},
	{
		'id': 20094,
		'name': 'Swinca',
		'slug': 'swinca',
		'symbol': 'SWI'
	},
	{
		'id': 21625,
		'name': 'Monsterra (MAG)',
		'slug': 'monsterra-nft-game',
		'symbol': 'MAG'
	},
	{
		'id': 9522,
		'name': 'Bonfire',
		'slug': 'bonfire',
		'symbol': 'BONFIRE'
	},
	{
		'id': 7676,
		'name': 'Axion',
		'slug': 'axion',
		'symbol': 'AXN'
	},
	{
		'id': 8002,
		'name': 'SpiderDAO',
		'slug': 'spiderdao',
		'symbol': 'SPDR'
	},
	{
		'id': 5858,
		'name': 'QANplatform',
		'slug': 'qanplatform',
		'symbol': 'QANX'
	},
	{
		'id': 19288,
		'name': 'PathFundV2',
		'slug': 'pathfundv2',
		'symbol': 'PATH'
	},
	{
		'id': 14926,
		'name': 'JPool Staked SOL (JSOL)',
		'slug': 'jpool',
		'symbol': 'JSOL'
	},
	{
		'id': 17300,
		'name': 'Warena',
		'slug': 'warena-ware',
		'symbol': 'WARE'
	},
	{
		'id': 6444,
		'name': 'FANZY',
		'slug': 'fanzy',
		'symbol': 'FX1'
	},
	{
		'id': 20124,
		'name': 'Minato',
		'slug': 'minato',
		'symbol': 'MNTO'
	},
	{
		'id': 4571,
		'name': 'HEdpAY',
		'slug': 'hedpay',
		'symbol': 'HDP.ф'
	},
	{
		'id': 13545,
		'name': 'KingSpeed',
		'slug': 'kingspeed',
		'symbol': 'KSC'
	},
	{
		'id': 15592,
		'name': 'MetaBrands',
		'slug': 'metabrands',
		'symbol': 'MAGE'
	},
	{
		'id': 17511,
		'name': 'Shinji Inu',
		'slug': 'shinji-inu',
		'symbol': 'SHINJI'
	},
	{
		'id': 10185,
		'name': 'Moonlana',
		'slug': 'moonlana',
		'symbol': 'MOLA'
	},
	{
		'id': 19713,
		'name': 'Artik',
		'slug': 'artik',
		'symbol': 'ARTK'
	},
	{
		'id': 18742,
		'name': 'DiveWallet Token',
		'slug': 'divewallet-token',
		'symbol': 'DWT'
	},
	{
		'id': 16604,
		'name': '1eco',
		'slug': '1eco',
		'symbol': '1ECO'
	},
	{
		'id': 15483,
		'name': 'LocalTrade',
		'slug': 'localtrade',
		'symbol': 'LTT'
	},
	{
		'id': 8168,
		'name': 'Bao Finance (old)',
		'slug': 'bao-finance',
		'symbol': 'BAO'
	},
	{
		'id': 16859,
		'name': 'Metamall',
		'slug': 'metamall',
		'symbol': 'MALL'
	},
	{
		'id': 16902,
		'name': 'Verve',
		'slug': 'verve',
		'symbol': 'VERVE'
	},
	{
		'id': 4105,
		'name': 'Coinmetro Token',
		'slug': 'coinmetro-token',
		'symbol': 'XCM'
	},
	{
		'id': 20563,
		'name': 'ToxicDeer Share',
		'slug': 'toxicdeer-share',
		'symbol': 'XDSHARE'
	},
	{
		'id': 22640,
		'name': 'BSC BETS',
		'slug': 'bsc-bets',
		'symbol': 'BETS'
	},
	{
		'id': 11373,
		'name': 'Metaverse Miner',
		'slug': 'metaverse-miner',
		'symbol': 'META'
	},
	{
		'id': 11770,
		'name': 'EverETH',
		'slug': 'evereth',
		'symbol': 'EVERETH'
	},
	{
		'id': 7133,
		'name': 'Ducato Finance Token',
		'slug': 'ducato-protocol-token',
		'symbol': 'DUCATO'
	},
	{
		'id': 21080,
		'name': 'PEGONetwork',
		'slug': 'pegonetwork',
		'symbol': 'OSK-DAO'
	},
	{
		'id': 19569,
		'name': 'Web3 Game',
		'slug': 'web3-game',
		'symbol': 'WEB3'
	},
	{
		'id': 21726,
		'name': 'Colony Avalanche Index',
		'slug': 'colony-avalanche-index',
		'symbol': 'CAI'
	},
	{
		'id': 19192,
		'name': 'Meishu',
		'slug': 'meishu',
		'symbol': 'MEISHU'
	},
	{
		'id': 8674,
		'name': 'OFFLINE',
		'slug': 'allohash',
		'symbol': 'OFF'
	},
	{
		'id': 8149,
		'name': 'Finance.Vote',
		'slug': 'finance-vote',
		'symbol': 'FVT'
	},
	{
		'id': 9710,
		'name': 'Kabosu',
		'slug': 'kabosu',
		'symbol': 'KABOSU'
	},
	{
		'id': 13256,
		'name': 'Flokimooni',
		'slug': 'flokimooni',
		'symbol': 'FLOKIM'
	},
	{
		'id': 17228,
		'name': 'Shitcoin',
		'slug': 'shitcoin',
		'symbol': 'STC'
	},
	{
		'id': 15864,
		'name': 'Bloomify Static',
		'slug': 'chargedefi-static',
		'symbol': 'STATIC'
	},
	{
		'id': 10134,
		'name': 'Polycat Finance',
		'slug': 'polycat-finance',
		'symbol': 'FISH'
	},
	{
		'id': 11076,
		'name': 'JOJO',
		'slug': 'jojo',
		'symbol': 'JOJO'
	},
	{
		'id': 20913,
		'name': 'EAGLE MINING NETWORK',
		'slug': 'eagle-mining-network',
		'symbol': 'EGON'
	},
	{
		'id': 15015,
		'name': 'Mithrilverse',
		'slug': 'bsc-mithril',
		'symbol': 'MITHRIL'
	},
	{
		'id': 22209,
		'name': 'Brokkr',
		'slug': 'brokkr',
		'symbol': 'BRO'
	},
	{
		'id': 16521,
		'name': 'Exobots',
		'slug': 'exobots',
		'symbol': 'EXOS'
	},
	{
		'id': 22800,
		'name': 'OpenXSwap Gov. Token',
		'slug': 'openxswap-gov-token',
		'symbol': 'XOPENX'
	},
	{
		'id': 15669,
		'name': 'The Parallel',
		'slug': 'the-parallel',
		'symbol': 'PRL'
	},
	{
		'id': 17596,
		'name': 'Baby WOJ',
		'slug': 'baby-woj',
		'symbol': 'BWJ'
	},
	{
		'id': 8981,
		'name': 'WardenSwap',
		'slug': 'wardenswap',
		'symbol': 'WAD'
	},
	{
		'id': 22089,
		'name': 'ADO.Network',
		'slug': 'ado-network',
		'symbol': 'ADO'
	},
	{
		'id': 18471,
		'name': 'Lets Go Brandon',
		'slug': 'lgb',
		'symbol': 'LETSGO'
	},
	{
		'id': 3234,
		'name': 'Xriba',
		'slug': 'xriba',
		'symbol': 'XRA'
	},
	{
		'id': 22071,
		'name': 'Proton Loan',
		'slug': 'proton-loan',
		'symbol': 'LOAN'
	},
	{
		'id': 8566,
		'name': 'Ballswap',
		'slug': 'ballswap',
		'symbol': 'BSP'
	},
	{
		'id': 19693,
		'name': 'MetaFame',
		'slug': 'metafame',
		'symbol': 'BMF'
	},
	{
		'id': 16227,
		'name': 'myMessage',
		'slug': 'mymessage',
		'symbol': 'MESA'
	},
	{
		'id': 20110,
		'name': 'Blitz Labs',
		'slug': 'blitz-labs',
		'symbol': 'BLITZ'
	},
	{
		'id': 16091,
		'name': 'MetaGods',
		'slug': 'metagods',
		'symbol': 'MGOD'
	},
	{
		'id': 16456,
		'name': 'HeroPark',
		'slug': 'heropark',
		'symbol': 'HP'
	},
	{
		'id': 14660,
		'name': 'Reflecto',
		'slug': 'reflecto',
		'symbol': 'RTO'
	},
	{
		'id': 11625,
		'name': 'CityStates: Medieval',
		'slug': 'citystates-medieval',
		'symbol': 'CSM'
	},
	{
		'id': 22253,
		'name': 'Meowcoin',
		'slug': 'meowcoin',
		'symbol': 'MEWC'
	},
	{
		'id': 8662,
		'name': 'Starter',
		'slug': 'bscstarter',
		'symbol': 'START'
	},
	{
		'id': 7355,
		'name': 'Reflex',
		'slug': 'reflex',
		'symbol': 'RFX'
	},
	{
		'id': 12644,
		'name': 'The Three Kingdoms',
		'slug': 'the-three-kingdoms',
		'symbol': 'TTK'
	},
	{
		'id': 10117,
		'name': 'Moonarch.app',
		'slug': 'moonarch-app',
		'symbol': 'MOONARCH'
	},
	{
		'id': 11676,
		'name': 'Varen',
		'slug': 'varen',
		'symbol': 'VRN'
	},
	{
		'id': 9007,
		'name': 'ZooCoin',
		'slug': 'zoocoin',
		'symbol': 'ZOO'
	},
	{
		'id': 22147,
		'name': 'Crazy Treasure Token',
		'slug': 'crazy-treasure',
		'symbol': 'CTT'
	},
	{
		'id': 22196,
		'name': 'Global Innovative Solutions',
		'slug': 'global-innovative-solutions',
		'symbol': 'GSI'
	},
	{
		'id': 20774,
		'name': 'RunBlox',
		'slug': 'runblox',
		'symbol': 'RUX'
	},
	{
		'id': 19195,
		'name': 'GaStream',
		'slug': 'gastream',
		'symbol': 'GSTRM'
	},
	{
		'id': 15845,
		'name': 'DOEX',
		'slug': 'doex',
		'symbol': 'DOEX'
	},
	{
		'id': 20951,
		'name': 'Stable One Rocket',
		'slug': 'stable-one-rocket',
		'symbol': 'SROCKET'
	},
	{
		'id': 13520,
		'name': 'Pocket Arena',
		'slug': 'pocket-arena',
		'symbol': 'POC'
	},
	{
		'id': 22173,
		'name': 'Genesys Token',
		'slug': 'genesys-token',
		'symbol': 'GSYS'
	},
	{
		'id': 19756,
		'name': 'CheckerChain',
		'slug': 'checkerchain',
		'symbol': 'CHECKR'
	},
	{
		'id': 18748,
		'name': 'Yawww',
		'slug': 'yawww',
		'symbol': 'YAW'
	},
	{
		'id': 16775,
		'name': 'Digichain',
		'slug': 'digichain',
		'symbol': 'DIGICHAIN'
	},
	{
		'id': 18965,
		'name': 'MapMetrics',
		'slug': 'mapmetrics',
		'symbol': 'MMAPS'
	},
	{
		'id': 11149,
		'name': 'Tenshi',
		'slug': 'tenshi-new',
		'symbol': 'TENSHI'
	},
	{
		'id': 15069,
		'name': 'CRODEX',
		'slug': 'crodex',
		'symbol': 'CRX'
	},
	{
		'id': 22344,
		'name': '1ETH',
		'slug': '1eth',
		'symbol': '1ETH'
	},
	{
		'id': 19683,
		'name': 'ELON BUYS TWITTER',
		'slug': 'elon-buys-twitter',
		'symbol': 'EBT'
	},
	{
		'id': 21464,
		'name': 'Kodachi Token',
		'slug': 'kodachi-token',
		'symbol': 'KODACHI'
	},
	{
		'id': 16466,
		'name': 'BALI TOKEN',
		'slug': 'bali-token',
		'symbol': 'BLI'
	},
	{
		'id': 18812,
		'name': 'AVATA Network',
		'slug': 'avata-network',
		'symbol': 'AVAT'
	},
	{
		'id': 21636,
		'name': 'Okaleido',
		'slug': 'okaleido',
		'symbol': 'OKA'
	},
	{
		'id': 18398,
		'name': 'Solidex',
		'slug': 'solidex',
		'symbol': 'SEX'
	},
	{
		'id': 17574,
		'name': 'CryptoJetski',
		'slug': 'cryptojetski',
		'symbol': 'CJET'
	},
	{
		'id': 9921,
		'name': 'Aquari',
		'slug': 'aquari',
		'symbol': 'AQUARI'
	},
	{
		'id': 20319,
		'name': 'DeFi Land Gold',
		'slug': 'defi-land-gold',
		'symbol': 'GOLDY'
	},
	{
		'id': 6330,
		'name': 'TUNE TOKEN',
		'slug': 'tune-token',
		'symbol': 'TUNE'
	},
	{
		'id': 9178,
		'name': 'ELONGATE',
		'slug': 'elongate',
		'symbol': 'ELONGATE'
	},
	{
		'id': 7673,
		'name': 'AGOV (ANSWER Governance)',
		'slug': 'agov-answer-governance',
		'symbol': 'AGOV'
	},
	{
		'id': 23113,
		'name': 'DogeTrend',
		'slug': 'dogetrend',
		'symbol': 'DOGETREND'
	},
	{
		'id': 22248,
		'name': 'GenesisDefi',
		'slug': 'genesisdefi',
		'symbol': 'GENF'
	},
	{
		'id': 16978,
		'name': 'Flash Technologies',
		'slug': 'flash-technologies',
		'symbol': 'FLASH'
	},
	{
		'id': 18627,
		'name': 'Cornatto',
		'slug': 'cornatto',
		'symbol': 'CNC'
	},
	{
		'id': 21438,
		'name': 'Phoenix Protocol Dao',
		'slug': 'pheonix-protocol-dao',
		'symbol': 'PP'
	},
	{
		'id': 19518,
		'name': 'DragonMaster',
		'slug': 'dragonmaster',
		'symbol': 'TOTEM'
	},
	{
		'id': 18397,
		'name': 'Hare Plus',
		'slug': 'hare-plus',
		'symbol': 'HARE PLUS'
	},
	{
		'id': 20707,
		'name': 'Penrose Finance',
		'slug': 'penrose-finance',
		'symbol': 'PEN'
	},
	{
		'id': 21189,
		'name': 'Metahamster',
		'slug': 'metahamster',
		'symbol': 'MHAM'
	},
	{
		'id': 15235,
		'name': 'GoldenWspp',
		'slug': 'goldenwspp',
		'symbol': 'GWSPP'
	},
	{
		'id': 19459,
		'name': 'Vesta Finance',
		'slug': 'vesta-finance',
		'symbol': 'VSTA'
	},
	{
		'id': 11300,
		'name': 'Baby Saitama Inu',
		'slug': 'baby-saitama-inu',
		'symbol': 'BABYSAITAMA'
	},
	{
		'id': 19678,
		'name': 'Medano',
		'slug': 'medano',
		'symbol': 'MDO'
	},
	{
		'id': 19267,
		'name': 'MStation',
		'slug': 'mstation',
		'symbol': 'MST'
	},
	{
		'id': 19494,
		'name': 'Pieme',
		'slug': 'pieme',
		'symbol': 'PIE'
	},
	{
		'id': 23272,
		'name': 'BOXA',
		'slug': 'boxa',
		'symbol': 'BOXA'
	},
	{
		'id': 21906,
		'name': 'CORN DecaSwap',
		'slug': 'corn-decaswap',
		'symbol': 'CORN'
	},
	{
		'id': 10723,
		'name': 'Waves Ducks',
		'slug': 'waves-ducks',
		'symbol': 'EGG'
	},
	{
		'id': 22510,
		'name': 'Kuwa Oracle',
		'slug': 'kuwa-oracle',
		'symbol': 'KUOR'
	},
	{
		'id': 15557,
		'name': 'Mother of Memes',
		'slug': 'mother-of-memes',
		'symbol': 'MOM'
	},
	{
		'id': 22236,
		'name': 'TSANGNYON HERUKA',
		'slug': 'tsangnyon-heruka',
		'symbol': 'TSANGNYON'
	},
	{
		'id': 17310,
		'name': 'Glitter Finance',
		'slug': 'glitter-finance',
		'symbol': 'XGLI'
	},
	{
		'id': 13973,
		'name': 'nSights DeFi Trader',
		'slug': 'nsights-defi-trader',
		'symbol': 'NSI'
	},
	{
		'id': 8540,
		'name': 'HecoFi',
		'slug': 'hecofi',
		'symbol': 'HFI'
	},
	{
		'id': 21434,
		'name': 'Starfish OS',
		'slug': 'starfish-token',
		'symbol': 'IGT'
	},
	{
		'id': 16298,
		'name': 'Hummingbot',
		'slug': 'hummingbot',
		'symbol': 'HBOT'
	},
	{
		'id': 11751,
		'name': 'StaySAFU',
		'slug': 'staysafu',
		'symbol': 'SAFU'
	},
	{
		'id': 9062,
		'name': 'LinkPool',
		'slug': 'linkpool',
		'symbol': 'LPL'
	},
	{
		'id': 12518,
		'name': 'Morphie Network',
		'slug': 'morphie-network',
		'symbol': 'MRFI'
	},
	{
		'id': 13326,
		'name': 'RBX',
		'slug': 'rbx',
		'symbol': 'RBX'
	},
	{
		'id': 18486,
		'name': 'Fountain Protocol',
		'slug': 'fountain-protocol',
		'symbol': 'FTP'
	},
	{
		'id': 10594,
		'name': 'Liquidifty',
		'slug': 'liquidifty',
		'symbol': 'LQT'
	},
	{
		'id': 19092,
		'name': 'MetaQ',
		'slug': 'metaq',
		'symbol': 'METAQ'
	},
	{
		'id': 7276,
		'name': 'Kirobo',
		'slug': 'kirobo',
		'symbol': 'KIRO'
	},
	{
		'id': 14499,
		'name': 'DeVolution',
		'slug': 'devolution',
		'symbol': 'DEVO'
	},
	{
		'id': 17876,
		'name': 'FONE',
		'slug': 'fone',
		'symbol': 'FONE'
	},
	{
		'id': 17810,
		'name': 'Charlie Finance',
		'slug': 'charlie-finance',
		'symbol': 'CHT'
	},
	{
		'id': 21788,
		'name': 'xPERPS',
		'slug': 'xperps',
		'symbol': 'XPERPS'
	},
	{
		'id': 21435,
		'name': 'Shush Club',
		'slug': 'shush-club',
		'symbol': 'SHUSH'
	},
	{
		'id': 20507,
		'name': 'CloudChat',
		'slug': 'cloudchat',
		'symbol': 'CC'
	},
	{
		'id': 9304,
		'name': 'DAIN',
		'slug': 'dain',
		'symbol': 'DAIN'
	},
	{
		'id': 13548,
		'name': 'BecoSwap Token',
		'slug': 'becoswap-token',
		'symbol': 'BECO'
	},
	{
		'id': 22971,
		'name': 'Starz',
		'slug': 'starz',
		'symbol': 'STZ'
	},
	{
		'id': 18782,
		'name': 'XR Shiba Inu',
		'slug': 'xr-shiba-inu',
		'symbol': 'XRSHIB'
	},
	{
		'id': 18164,
		'name': 'Akita Inu',
		'slug': 'akita-inu-akta',
		'symbol': 'AKTA'
	},
	{
		'id': 18760,
		'name': 'random',
		'slug': 'random',
		'symbol': 'RND'
	},
	{
		'id': 21339,
		'name': 'BuyMORE',
		'slug': 'buymore',
		'symbol': 'MORE'
	},
	{
		'id': 22777,
		'name': 'Big Crypto Game',
		'slug': 'big-crypto-game',
		'symbol': 'CRYPTO'
	},
	{
		'id': 23243,
		'name': 'RewardTax',
		'slug': 'rewardtax',
		'symbol': 'REWARD'
	},
	{
		'id': 11279,
		'name': 'Block Ape Scissors',
		'slug': 'block-ape-scissors',
		'symbol': 'BAS'
	},
	{
		'id': 19750,
		'name': 'Nomadland',
		'slug': 'nomadland',
		'symbol': 'NOMAD'
	},
	{
		'id': 22404,
		'name': 'Melody',
		'slug': 'melody',
		'symbol': 'SNS'
	},
	{
		'id': 11701,
		'name': 'Copycat Finance',
		'slug': 'copycat-finance',
		'symbol': 'COPYCAT'
	},
	{
		'id': 16806,
		'name': 'SeanceCircle',
		'slug': 'seancecircle',
		'symbol': 'SEANCE'
	},
	{
		'id': 18723,
		'name': 'C2X',
		'slug': 'c2x',
		'symbol': 'CTX'
	},
	{
		'id': 22857,
		'name': 'Wallet Defi',
		'slug': 'wallet-defi',
		'symbol': 'WDF'
	},
	{
		'id': 19963,
		'name': 'Metaderby Hoof',
		'slug': 'metaderby-hoof',
		'symbol': 'HOOF'
	},
	{
		'id': 16387,
		'name': 'Poopsicle',
		'slug': 'poopsicle',
		'symbol': 'POOP'
	},
	{
		'id': 15183,
		'name': 'Star Wars Cat',
		'slug': 'star-wars-cat',
		'symbol': 'SWCAT'
	},
	{
		'id': 12671,
		'name': 'FANG Token',
		'slug': 'fang-token',
		'symbol': 'FANG'
	},
	{
		'id': 18051,
		'name': 'Konstellation Network',
		'slug': 'konstellation-network',
		'symbol': 'DARC'
	},
	{
		'id': 3466,
		'name': 'Insureum',
		'slug': 'insureum',
		'symbol': 'ISR'
	},
	{
		'id': 13324,
		'name': 'AmpleSwap',
		'slug': 'ampleswap',
		'symbol': 'AMPLE'
	},
	{
		'id': 15333,
		'name': 'Guzzler',
		'slug': 'guzzler',
		'symbol': 'GZLR'
	},
	{
		'id': 22908,
		'name': 'Grantsville',
		'slug': 'grantsville',
		'symbol': 'GVILLE'
	},
	{
		'id': 19773,
		'name': 'Stone',
		'slug': 'stone',
		'symbol': '0NE'
	},
	{
		'id': 2603,
		'name': 'Pundi X (Old)',
		'slug': 'pundi-x',
		'symbol': 'NPXS'
	},
	{
		'id': 5508,
		'name': 'Algory Project',
		'slug': 'algory-project',
		'symbol': 'ALG'
	},
	{
		'id': 14493,
		'name': 'Undead Finance',
		'slug': 'undead-finance',
		'symbol': 'UNDEAD'
	},
	{
		'id': 14425,
		'name': 'DragonSea',
		'slug': 'dragonsea',
		'symbol': 'DGE'
	},
	{
		'id': 20132,
		'name': 'Algodex Token',
		'slug': 'algodex-token',
		'symbol': 'ALGX'
	},
	{
		'id': 20020,
		'name': 'LetCoinShop',
		'slug': 'letcoinshop',
		'symbol': 'LCS'
	},
	{
		'id': 16228,
		'name': 'MetaPlayers.gg',
		'slug': 'metaplayers-gg',
		'symbol': 'FPS'
	},
	{
		'id': 21672,
		'name': 'NADA Protocol Token',
		'slug': 'nada-protocol-token',
		'symbol': 'NADA'
	},
	{
		'id': 22565,
		'name': 'PANGOLINU',
		'slug': 'pangolinu',
		'symbol': 'PANGO'
	},
	{
		'id': 15898,
		'name': 'Metakings',
		'slug': 'metakings',
		'symbol': 'MTK'
	},
	{
		'id': 11062,
		'name': 'MaticVerse',
		'slug': 'maticverse',
		'symbol': 'Mverse'
	},
	{
		'id': 18798,
		'name': 'Curve.fi gDAI/gUSDC/gUSDT',
		'slug': 'curve-fi-gdai-gusdc-gusdt',
		'symbol': 'G3CRV'
	},
	{
		'id': 10725,
		'name': 'WaultSwap Polygon',
		'slug': 'waultswap-polygon',
		'symbol': 'WEXPOLY'
	},
	{
		'id': 16991,
		'name': 'Aelin',
		'slug': 'aelin',
		'symbol': 'AELIN'
	},
	{
		'id': 17567,
		'name': 'Metaverse lab',
		'slug': 'metaverse-lab',
		'symbol': 'MVP'
	},
	{
		'id': 15493,
		'name': 'Multiverse Capital',
		'slug': 'multiverse-capital',
		'symbol': 'MVC'
	},
	{
		'id': 19692,
		'name': 'Plutonians',
		'slug': 'plutonians',
		'symbol': 'RPC'
	},
	{
		'id': 16780,
		'name': 'BerylBit',
		'slug': 'berylbit',
		'symbol': 'BRB'
	},
	{
		'id': 19560,
		'name': 'Cens World',
		'slug': 'cens-world',
		'symbol': 'CENS'
	},
	{
		'id': 15842,
		'name': 'Bedrock',
		'slug': 'bedrock',
		'symbol': 'ROCK'
	},
	{
		'id': 15597,
		'name': 'Honey Deluxe Token',
		'slug': 'honey-deluxe-token',
		'symbol': 'HONEYD'
	},
	{
		'id': 10277,
		'name': 'TRONPAD',
		'slug': 'tronpad',
		'symbol': 'TRONPAD'
	},
	{
		'id': 15486,
		'name': 'PumpETH',
		'slug': 'pumpeth',
		'symbol': 'PETH'
	},
	{
		'id': 19633,
		'name': 'MIDA Token',
		'slug': 'mida',
		'symbol': 'MIDA'
	},
	{
		'id': 22507,
		'name': 'The meme finance',
		'slug': 'the-meme-finance',
		'symbol': 'MEFI'
	},
	{
		'id': 20429,
		'name': 'Definder Network',
		'slug': 'smartlands-network-new',
		'symbol': 'DNT'
	},
	{
		'id': 10452,
		'name': 'SolAPE Token',
		'slug': 'solapefinance',
		'symbol': 'SOLAPE'
	},
	{
		'id': 7200,
		'name': 'Bidao',
		'slug': 'bidao',
		'symbol': 'BID'
	},
	{
		'id': 18388,
		'name': 'Catcoin',
		'slug': 'cat-coin',
		'symbol': 'CATS'
	},
	{
		'id': 9045,
		'name': 'JPY Coin v1',
		'slug': 'jpycoin',
		'symbol': 'JPYC'
	},
	{
		'id': 14538,
		'name': 'Pundi X PURSE',
		'slug': 'purse',
		'symbol': 'PURSE'
	},
	{
		'id': 3820,
		'name': 'BuckHathCoin',
		'slug': 'buck-hath-coin',
		'symbol': 'BHIG'
	},
	{
		'id': 22902,
		'name': 'UpBots(New)',
		'slug': 'upbots1',
		'symbol': 'UBXN'
	},
	{
		'id': 3083,
		'name': 'Lina Network',
		'slug': 'lina-network',
		'symbol': 'LINA'
	},
	{
		'id': 21757,
		'name': 'ShitGame (POOP)',
		'slug': 'poop',
		'symbol': 'POOP'
	},
	{
		'id': 11147,
		'name': 'DeFi11',
		'slug': 'defi11',
		'symbol': 'D11'
	},
	{
		'id': 2219,
		'name': 'SpankChain',
		'slug': 'spankchain',
		'symbol': 'SPANK'
	},
	{
		'id': 21720,
		'name': 'BeerusCat',
		'slug': 'beeruscat',
		'symbol': 'BCAT'
	},
	{
		'id': 6542,
		'name': 'happy birthday coin',
		'slug': 'happy-birthday-coin',
		'symbol': 'HBDC'
	},
	{
		'id': 11032,
		'name': 'BabyBitcoin',
		'slug': 'babybitcoin',
		'symbol': 'BABYBITC'
	},
	{
		'id': 10274,
		'name': 'Catge coin',
		'slug': 'catge-coin',
		'symbol': 'CATGE'
	},
	{
		'id': 13124,
		'name': 'FREEMOON',
		'slug': 'freemoon',
		'symbol': 'FMB'
	},
	{
		'id': 22788,
		'name': 'LODE Token',
		'slug': 'lode-token',
		'symbol': 'LODE'
	},
	{
		'id': 9747,
		'name': 'Cryption Network',
		'slug': 'cryption-network',
		'symbol': 'CNT'
	},
	{
		'id': 13352,
		'name': 'Dinger Token',
		'slug': 'dinger-token',
		'symbol': 'DINGER'
	},
	{
		'id': 22315,
		'name': 'CookieSale',
		'slug': 'cookiesale',
		'symbol': 'COOKIE'
	},
	{
		'id': 15906,
		'name': 'Snap Token',
		'slug': 'snapex',
		'symbol': 'SNAP'
	},
	{
		'id': 13576,
		'name': 'Kitty Coin',
		'slug': 'kitty-coin',
		'symbol': 'KITTY'
	},
	{
		'id': 10657,
		'name': 'YetiSwap',
		'slug': 'yetiswap',
		'symbol': 'YTS'
	},
	{
		'id': 10901,
		'name': 'Shiba Floki Inu',
		'slug': 'shiba-floki',
		'symbol': 'FLOKI'
	},
	{
		'id': 15288,
		'name': 'TemplarDAO',
		'slug': 'templardao',
		'symbol': 'TEM'
	},
	{
		'id': 22058,
		'name': 'CALO INDOOR',
		'slug': 'calo-indoor',
		'symbol': 'IFIT'
	},
	{
		'id': 19418,
		'name': 'Assent Protocol',
		'slug': 'assent-protocol',
		'symbol': 'ASNT'
	},
	{
		'id': 13609,
		'name': 'Ghospers Game',
		'slug': 'ghospers-game',
		'symbol': 'GHSP'
	},
	{
		'id': 19958,
		'name': 'Snail Trail',
		'slug': 'snail-trail',
		'symbol': 'SLIME'
	},
	{
		'id': 10987,
		'name': 'AVME',
		'slug': 'avme',
		'symbol': 'AVME'
	},
	{
		'id': 13449,
		'name': 'GameStation',
		'slug': 'gamestation',
		'symbol': 'GAMER'
	},
	{
		'id': 16768,
		'name': 'Dibs Share',
		'slug': 'dibs-share',
		'symbol': 'DSHARE'
	},
	{
		'id': 22261,
		'name': 'Clash',
		'slug': 'clash',
		'symbol': 'CLH'
	},
	{
		'id': 11553,
		'name': 'WEYU',
		'slug': 'weyu',
		'symbol': 'WEYU'
	},
	{
		'id': 16671,
		'name': 'Multiverse',
		'slug': 'multiverse-token',
		'symbol': 'MVS'
	},
	{
		'id': 18349,
		'name': 'FantomPAD',
		'slug': 'fantompad',
		'symbol': 'FPAD'
	},
	{
		'id': 7789,
		'name': 'OASISBloc',
		'slug': 'oasisbloc',
		'symbol': 'OSB'
	},
	{
		'id': 18292,
		'name': 'Supremacy',
		'slug': 'supremacy',
		'symbol': 'SUPS'
	},
	{
		'id': 14960,
		'name': 'HunnyDAO',
		'slug': 'hunnydao',
		'symbol': 'LOVE'
	},
	{
		'id': 13286,
		'name': 'CorgiCoin',
		'slug': 'corgicoin-net',
		'symbol': 'CORGI'
	},
	{
		'id': 16290,
		'name': 'GreenTek',
		'slug': 'greentek',
		'symbol': 'GTE'
	},
	{
		'id': 21026,
		'name': 'Noah\'s Ark Coin',
		'slug': 'noah-s-ark-coin',
		'symbol': 'NAC'
	},
	{
		'id': 22785,
		'name': 'Risecoin',
		'slug': 'risecoin',
		'symbol': 'RSC'
	},
	{
		'id': 18006,
		'name': 'FUTURECOIN',
		'slug': 'futurecoin',
		'symbol': 'FUTURE'
	},
	{
		'id': 16484,
		'name': 'MYTE',
		'slug': 'myte',
		'symbol': 'MYTE'
	},
	{
		'id': 16182,
		'name': 'ManuFactory',
		'slug': 'manufactory-2',
		'symbol': 'MNFT'
	},
	{
		'id': 22807,
		'name': 'BattleForTEN',
		'slug': 'battleforten',
		'symbol': 'BFT'
	},
	{
		'id': 7425,
		'name': 'PayAccept',
		'slug': 'payaccept',
		'symbol': 'PAYT'
	},
	{
		'id': 14265,
		'name': 'MetaDoge',
		'slug': 'metadoge-token',
		'symbol': 'METADOGE'
	},
	{
		'id': 15786,
		'name': 'Luniverse',
		'slug': 'lady-uni',
		'symbol': 'LUNI'
	},
	{
		'id': 18315,
		'name': 'Kling',
		'slug': 'kling',
		'symbol': 'KLING'
	},
	{
		'id': 12083,
		'name': 'CDzExchange',
		'slug': 'cdzexchange',
		'symbol': 'CDZ'
	},
	{
		'id': 22195,
		'name': 'Klaymore Stakehouse',
		'slug': 'klaymore-stakehouse',
		'symbol': 'HOUSE'
	},
	{
		'id': 14104,
		'name': 'Hellsing Inu',
		'slug': 'hellsing-inu',
		'symbol': 'HELLSING'
	},
	{
		'id': 22893,
		'name': 'Alpha Shares (New)',
		'slug': 'alpha-shares',
		'symbol': '$ALPHA'
	},
	{
		'id': 5516,
		'name': 'LOA Protocol',
		'slug': 'loa-protocol',
		'symbol': 'LOA'
	},
	{
		'id': 21826,
		'name': 'JAIL KWON TOKEN',
		'slug': 'jail-kwon-token',
		'symbol': 'JKWON'
	},
	{
		'id': 22151,
		'name': 'AKITSUKI',
		'slug': 'akitsuki',
		'symbol': 'AKI'
	},
	{
		'id': 19350,
		'name': 'NUDES',
		'slug': 'nudes',
		'symbol': 'NUDES'
	},
	{
		'id': 22108,
		'name': 'The Standard Token',
		'slug': 'thestandard-io',
		'symbol': 'TST'
	},
	{
		'id': 8868,
		'name': '50x.com',
		'slug': '50x-com',
		'symbol': '50X'
	},
	{
		'id': 16703,
		'name': 'Floki Musk',
		'slug': 'floki-musk',
		'symbol': 'FLOKI'
	},
	{
		'id': 11069,
		'name': 'Bumper',
		'slug': 'bumper',
		'symbol': 'BUMP'
	},
	{
		'id': 9855,
		'name': 'EthereumMax',
		'slug': 'ethereummax',
		'symbol': 'EMAX'
	},
	{
		'id': 16696,
		'name': 'Vconomics - Decentralized Digital Economy',
		'slug': 'vconomics-decentralized-digital-economy',
		'symbol': 'MICS'
	},
	{
		'id': 10576,
		'name': 'MoonLift Capital',
		'slug': 'moonlift-protocol',
		'symbol': 'MLTPX'
	},
	{
		'id': 9618,
		'name': 'DogeMoon',
		'slug': 'dogemoon',
		'symbol': 'DGMOON'
	},
	{
		'id': 12697,
		'name': 'Elon\'s Marvin',
		'slug': 'elons-marvin',
		'symbol': 'MARVIN'
	},
	{
		'id': 19184,
		'name': 'Wrapped Fuse',
		'slug': 'wrapped-fuse-network',
		'symbol': 'WFUSE'
	},
	{
		'id': 10952,
		'name': 'The People\'s Coin',
		'slug': 'the-peoples-coin',
		'symbol': 'PEEPS'
	},
	{
		'id': 8517,
		'name': 'BiTToken',
		'slug': 'bittoken',
		'symbol': 'BITT'
	},
	{
		'id': 11621,
		'name': 'Punk Vault (NFTX)',
		'slug': 'punk-vault-nftx',
		'symbol': 'PUNK'
	},
	{
		'id': 17041,
		'name': 'Seedling Token',
		'slug': 'seedling',
		'symbol': 'SDLN'
	},
	{
		'id': 13868,
		'name': 'Baby Squid Game',
		'slug': 'baby-squid-game',
		'symbol': 'BSG'
	},
	{
		'id': 18769,
		'name': 'ARTIC Foundation',
		'slug': 'artic-foundation',
		'symbol': 'ARTIC'
	},
	{
		'id': 22832,
		'name': 'VoxNET',
		'slug': 'voxnet',
		'symbol': 'VXON'
	},
	{
		'id': 19155,
		'name': 'Bluca',
		'slug': 'bluca',
		'symbol': 'BLUC'
	},
	{
		'id': 20889,
		'name': 'Slime Royale Cupid Essence',
		'slug': 'slime-royale',
		'symbol': 'SCE'
	},
	{
		'id': 16326,
		'name': 'Kitsumon',
		'slug': 'kitsumon',
		'symbol': '$KMC'
	},
	{
		'id': 21088,
		'name': 'Good Driver Reward Token',
		'slug': 'good-driver-reward-token',
		'symbol': 'GDRT'
	},
	{
		'id': 19372,
		'name': 'Speed Star JOC',
		'slug': 'speed-star-joc',
		'symbol': 'JOC'
	},
	{
		'id': 10818,
		'name': 'Penguin Finance',
		'slug': 'penguin-finance',
		'symbol': 'PEFI'
	},
	{
		'id': 19916,
		'name': 'Galaxy',
		'slug': 'galaxy-dao',
		'symbol': 'GLXY'
	},
	{
		'id': 22909,
		'name': 'WAGIE',
		'slug': 'wagie',
		'symbol': 'WAGIE'
	},
	{
		'id': 19066,
		'name': 'GNFT',
		'slug': 'gnft',
		'symbol': 'GNFT'
	},
	{
		'id': 11336,
		'name': 'Nobility',
		'slug': 'nobility-new',
		'symbol': 'NBL'
	},
	{
		'id': 20752,
		'name': 'Reflecto USD',
		'slug': 'reflecto-usd',
		'symbol': 'RUSD'
	},
	{
		'id': 7305,
		'name': 'Jackpot',
		'slug': 'jackpot',
		'symbol': '777'
	},
	{
		'id': 21723,
		'name': 'ShadowFi',
		'slug': 'shadowfi',
		'symbol': 'SDF'
	},
	{
		'id': 9576,
		'name': 'Vulkania',
		'slug': 'vulkania',
		'symbol': 'VLK'
	},
	{
		'id': 21417,
		'name': 'FitR',
		'slug': 'fitr',
		'symbol': 'FMT'
	},
	{
		'id': 19405,
		'name': 'SolanaPrime',
		'slug': 'solanaprime',
		'symbol': 'PRIME'
	},
	{
		'id': 15962,
		'name': 'SCROOGE',
		'slug': 'scrooge',
		'symbol': 'SCROOGE'
	},
	{
		'id': 16321,
		'name': 'Evoverse Power',
		'slug': 'evoverse-power',
		'symbol': 'EPW'
	},
	{
		'id': 19892,
		'name': 'Clear Water',
		'slug': 'clear-water',
		'symbol': '$CLEAR'
	},
	{
		'id': 10011,
		'name': 'CoinWind',
		'slug': 'coinwind',
		'symbol': 'COW'
	},
	{
		'id': 9374,
		'name': 'Myteamcoin',
		'slug': 'myteamcoin',
		'symbol': 'MYC'
	},
	{
		'id': 15426,
		'name': 'CollectCoin',
		'slug': 'collectcoin',
		'symbol': 'CLCT'
	},
	{
		'id': 6697,
		'name': 'TriipMiles',
		'slug': 'triipmiles',
		'symbol': 'TIIM'
	},
	{
		'id': 22159,
		'name': 'Football Decentralized',
		'slug': 'football-decentralized',
		'symbol': 'FBD'
	},
	{
		'id': 13649,
		'name': 'Energy8',
		'slug': 'energy8',
		'symbol': 'E8'
	},
	{
		'id': 23103,
		'name': 'RABBIT TECHNOLOGY',
		'slug': 'rabbit-technology',
		'symbol': 'RABBIT'
	},
	{
		'id': 17548,
		'name': '0xDAO',
		'slug': '0xdao',
		'symbol': 'OXD'
	},
	{
		'id': 23197,
		'name': 'Kinect Finance',
		'slug': 'kinect-finance',
		'symbol': 'KNT'
	},
	{
		'id': 22445,
		'name': 'Fragmint',
		'slug': 'fragmint',
		'symbol': 'FRAG'
	},
	{
		'id': 18770,
		'name': 'Gemlink',
		'slug': 'gemlink',
		'symbol': 'GLINK'
	},
	{
		'id': 21367,
		'name': 'DecaSwap',
		'slug': 'decaswap',
		'symbol': 'DECA'
	},
	{
		'id': 8610,
		'name': 'DMEX (Decentralized Mining Exchange)',
		'slug': 'decentralized-mining-exchange',
		'symbol': 'DMC'
	},
	{
		'id': 12851,
		'name': 'BODA Token',
		'slug': 'boda-token',
		'symbol': 'BODAV2'
	},
	{
		'id': 21914,
		'name': 'SaucerSwap',
		'slug': 'saucerswap',
		'symbol': 'SAUCE'
	},
	{
		'id': 14161,
		'name': '1NFT',
		'slug': '1nft',
		'symbol': '1NFT'
	},
	{
		'id': 17350,
		'name': 'Widi Soul',
		'slug': 'wso',
		'symbol': 'WSO'
	},
	{
		'id': 17504,
		'name': 'Librium Tech',
		'slug': 'librium-tech',
		'symbol': 'LIB'
	},
	{
		'id': 20422,
		'name': 'Star Chain',
		'slug': 'star-chain',
		'symbol': 'STAR1'
	},
	{
		'id': 12430,
		'name': 'Rogue Coin',
		'slug': 'rogue-west',
		'symbol': 'ROGUE'
	},
	{
		'id': 8117,
		'name': 'Dymmax',
		'slug': 'dymmax',
		'symbol': 'DMX'
	},
	{
		'id': 10392,
		'name': 'The Everlasting Parachain',
		'slug': 'the-everlasting-parachain',
		'symbol': 'ELP'
	},
	{
		'id': 13850,
		'name': 'Santa Coin',
		'slug': 'santa-coin-2',
		'symbol': 'SANTA'
	},
	{
		'id': 21982,
		'name': 'Amatsu-Mikaboshi',
		'slug': 'amatsu-mikaboshi',
		'symbol': 'MIKABOSHI'
	},
	{
		'id': 9879,
		'name': 'Exohood',
		'slug': 'exohood',
		'symbol': 'EXO'
	},
	{
		'id': 8447,
		'name': 'Wrapped ILCOIN',
		'slug': 'wrapped-ilcoin',
		'symbol': 'WILC'
	},
	{
		'id': 14567,
		'name': 'MetaCash',
		'slug': 'metacash',
		'symbol': 'META'
	},
	{
		'id': 22114,
		'name': 'SMPCOIN',
		'slug': 'smpcoin',
		'symbol': 'SMPC'
	},
	{
		'id': 19289,
		'name': 'Vitteey',
		'slug': 'vitteey',
		'symbol': 'VITY'
	},
	{
		'id': 9287,
		'name': 'Uniqly',
		'slug': 'uniqly',
		'symbol': 'UNIQ'
	},
	{
		'id': 15439,
		'name': 'Age of Tanks',
		'slug': 'age-of-tanks',
		'symbol': 'A.O.T'
	},
	{
		'id': 20992,
		'name': 'Ripae pMATIC',
		'slug': 'ripae-pmatic',
		'symbol': 'PMATIC'
	},
	{
		'id': 12820,
		'name': 'Treat DAO [new]',
		'slug': 'treat-dao-new',
		'symbol': 'TREAT'
	},
	{
		'id': 19282,
		'name': 'MondayClub',
		'slug': 'mondayclub',
		'symbol': 'MONDAY'
	},
	{
		'id': 4491,
		'name': 'Flits',
		'slug': 'flits',
		'symbol': 'FLS'
	},
	{
		'id': 20280,
		'name': 'CronosNode',
		'slug': 'cronosnode',
		'symbol': 'CRON'
	},
	{
		'id': 21866,
		'name': 'HerityNetwork',
		'slug': 'heritynetwork',
		'symbol': 'HER'
	},
	{
		'id': 18590,
		'name': 'Sugar Kingdom',
		'slug': 'sugar-kingdom',
		'symbol': 'CANDY'
	},
	{
		'id': 16381,
		'name': 'OragonX',
		'slug': 'oragonx',
		'symbol': 'ORGN'
	},
	{
		'id': 9302,
		'name': 'MoMo KEY',
		'slug': 'momo-key',
		'symbol': 'KEY'
	},
	{
		'id': 21381,
		'name': 'ADAM',
		'slug': 'adam',
		'symbol': 'ADAM'
	},
	{
		'id': 19642,
		'name': 'Massive Protocol',
		'slug': 'massive-protocol',
		'symbol': 'MAV'
	},
	{
		'id': 17837,
		'name': 'Perion',
		'slug': 'perion',
		'symbol': 'PERC'
	},
	{
		'id': 12932,
		'name': 'Little Bunny Rocket',
		'slug': 'little-bunny-rocket',
		'symbol': 'LBR'
	},
	{
		'id': 17793,
		'name': 'AddMeFast',
		'slug': 'addmefast',
		'symbol': 'AMF'
	},
	{
		'id': 17699,
		'name': 'The Reaper',
		'slug': 'the-reaper',
		'symbol': 'RPR'
	},
	{
		'id': 12997,
		'name': 'Fuma Finance',
		'slug': 'fuma-finance',
		'symbol': 'FUMA'
	},
	{
		'id': 21072,
		'name': 'Num ARS',
		'slug': 'num-ars',
		'symbol': 'NUARS'
	},
	{
		'id': 16800,
		'name': 'JEFE TOKEN',
		'slug': 'jefe-token',
		'symbol': 'JEFE'
	},
	{
		'id': 22035,
		'name': 'PartyFi',
		'slug': 'partyfi',
		'symbol': 'PFI'
	},
	{
		'id': 11896,
		'name': 'Morpheus Token',
		'slug': 'morpheus-token',
		'symbol': 'MORPH'
	},
	{
		'id': 20155,
		'name': 'Aalto Protocol',
		'slug': 'aalto-protocol',
		'symbol': 'AALTO'
	},
	{
		'id': 20022,
		'name': 'Sensi',
		'slug': 'sensi',
		'symbol': 'SENSI'
	},
	{
		'id': 17899,
		'name': 'ICHELLO Music & Technology',
		'slug': 'ichello-music-technology',
		'symbol': 'ELLO'
	},
	{
		'id': 9240,
		'name': 'Vangold',
		'slug': 'vangold-token',
		'symbol': 'VGD'
	},
	{
		'id': 12023,
		'name': 'JEDSTAR',
		'slug': 'jedstar',
		'symbol': 'JED'
	},
	{
		'id': 21890,
		'name': 'Governance ALGO',
		'slug': 'governance-algo',
		'symbol': 'gALGO'
	},
	{
		'id': 22191,
		'name': 'Maximus TRIO',
		'slug': 'maximus-trio',
		'symbol': 'TRIO'
	},
	{
		'id': 10798,
		'name': 'MiniDOGE',
		'slug': 'minidoge',
		'symbol': 'MINIDOGE'
	},
	{
		'id': 9742,
		'name': 'ElonTech',
		'slug': 'elontech',
		'symbol': 'ETCH'
	},
	{
		'id': 6976,
		'name': 'French Digital Reserve',
		'slug': 'french-digital-reserve',
		'symbol': 'FDR'
	},
	{
		'id': 18070,
		'name': 'ARTE',
		'slug': 'arte',
		'symbol': 'ARTE'
	},
	{
		'id': 17945,
		'name': 'Restore Truth Token',
		'slug': 'restoretruthtoken',
		'symbol': 'RTT'
	},
	{
		'id': 19616,
		'name': 'GreenFuel',
		'slug': 'greenfuel',
		'symbol': 'GREENFUEL'
	},
	{
		'id': 3786,
		'name': 'Lunes',
		'slug': 'lunes',
		'symbol': 'LUNES'
	},
	{
		'id': 17186,
		'name': 'Mindfolk Wood',
		'slug': 'mindfolk-wood',
		'symbol': '$WOOD'
	},
	{
		'id': 17100,
		'name': 'Anonverse',
		'slug': 'anonverse',
		'symbol': 'ANON'
	},
	{
		'id': 16620,
		'name': 'SnakeCity',
		'slug': 'snakecity',
		'symbol': 'SNCT'
	},
	{
		'id': 12338,
		'name': 'ShibaCorgi',
		'slug': 'shibacorgi',
		'symbol': 'SHICO'
	},
	{
		'id': 18866,
		'name': 'Cry Cat Coin',
		'slug': 'cry-cat-coin',
		'symbol': 'CRYY'
	},
	{
		'id': 11888,
		'name': 'Matrix Labs',
		'slug': 'matrixswap',
		'symbol': 'MATRIX'
	},
	{
		'id': 16933,
		'name': 'Phonon DAO',
		'slug': 'phonon-dao',
		'symbol': 'PHONON'
	},
	{
		'id': 13994,
		'name': 'MetaDoge V2',
		'slug': 'metadoge',
		'symbol': 'METADOGEV2'
	},
	{
		'id': 15602,
		'name': 'Energyfi',
		'slug': 'energyfi',
		'symbol': 'EFT'
	},
	{
		'id': 10826,
		'name': 'ProjectMars',
		'slug': 'projectmars',
		'symbol': 'MARS'
	},
	{
		'id': 7661,
		'name': 'GYSR',
		'slug': 'gysr',
		'symbol': 'GYSR'
	},
	{
		'id': 19293,
		'name': 'Dabb Doge',
		'slug': 'dabb-doge',
		'symbol': 'DDOGE'
	},
	{
		'id': 14418,
		'name': 'Milky Token',
		'slug': 'milky-token',
		'symbol': 'MILKY'
	},
	{
		'id': 8599,
		'name': 'xToken',
		'slug': 'xtoken',
		'symbol': 'XTK'
	},
	{
		'id': 14069,
		'name': 'FIA Protocol',
		'slug': 'fia-protocol',
		'symbol': 'FIA'
	},
	{
		'id': 21578,
		'name': 'NPC Coin',
		'slug': 'npc-coin',
		'symbol': 'NPC'
	},
	{
		'id': 9685,
		'name': 'Jomon Shiba',
		'slug': 'jomon-shiba',
		'symbol': 'JSHIBA'
	},
	{
		'id': 7474,
		'name': 'Axia Protocol',
		'slug': 'axia-protocol',
		'symbol': 'AXIA'
	},
	{
		'id': 4043,
		'name': 'PayRue (Propel)',
		'slug': 'payrue-propel',
		'symbol': 'PROPEL'
	},
	{
		'id': 20692,
		'name': 'Karmaverse Zombie',
		'slug': 'karmaverse-zombie',
		'symbol': 'SERUM'
	},
	{
		'id': 21480,
		'name': 'Monkex',
		'slug': 'monkex',
		'symbol': 'MONKEX'
	},
	{
		'id': 3325,
		'name': 'Robotina',
		'slug': 'robotina',
		'symbol': 'ROX'
	},
	{
		'id': 22405,
		'name': 'Melody',
		'slug': 'melody-sgs',
		'symbol': 'SGS'
	},
	{
		'id': 10393,
		'name': 'LEOPARD',
		'slug': 'leopard',
		'symbol': 'LEOPARD'
	},
	{
		'id': 15683,
		'name': 'Musk Metaverse',
		'slug': 'musk-metaverse',
		'symbol': 'METAMUSK'
	},
	{
		'id': 12481,
		'name': 'ROI Token',
		'slug': 'roi-token',
		'symbol': 'ROI'
	},
	{
		'id': 20917,
		'name': 'Wrapped ALGO',
		'slug': 'wrapped-algo',
		'symbol': 'XALGO'
	},
	{
		'id': 11862,
		'name': 'Arix',
		'slug': 'arix',
		'symbol': 'ARIX'
	},
	{
		'id': 11887,
		'name': 'Mission Helios',
		'slug': 'mission-helios',
		'symbol': 'HELIOS'
	},
	{
		'id': 17487,
		'name': 'DarkMatter',
		'slug': 'darkmatter-token',
		'symbol': 'DMT'
	},
	{
		'id': 21209,
		'name': 'Ape Finance',
		'slug': 'apefinance',
		'symbol': 'APEFI'
	},
	{
		'id': 7864,
		'name': 'DGPayment',
		'slug': 'dgpayment',
		'symbol': 'DGP'
	},
	{
		'id': 12168,
		'name': 'MoneydefiSwap',
		'slug': 'moneydefiswap',
		'symbol': 'MSD'
	},
	{
		'id': 14479,
		'name': 'CryptoBlast',
		'slug': 'cryptoblast',
		'symbol': 'CBT'
	},
	{
		'id': 11348,
		'name': 'Identity',
		'slug': 'identity',
		'symbol': 'IDTT'
	},
	{
		'id': 19951,
		'name': 'Universal Store of Value',
		'slug': 'universal-store-of-value',
		'symbol': 'USV'
	},
	{
		'id': 22701,
		'name': 'Masterpiece Maker',
		'slug': 'masterpiece-maker',
		'symbol': 'MAMA'
	},
	{
		'id': 12703,
		'name': 'Gyro',
		'slug': 'gyro',
		'symbol': 'GYRO'
	},
	{
		'id': 4540,
		'name': 'Neeo',
		'slug': 'neeo',
		'symbol': 'NEEO'
	},
	{
		'id': 14122,
		'name': 'CryptoDrop',
		'slug': 'cryptodrop',
		'symbol': 'JUICE'
	},
	{
		'id': 14229,
		'name': 'WealthSecrets',
		'slug': 'wealthsecrets',
		'symbol': 'WSC'
	},
	{
		'id': 15006,
		'name': 'MetalSwap',
		'slug': 'metalswap',
		'symbol': 'XMT'
	},
	{
		'id': 18218,
		'name': 'AvocadoCoin',
		'slug': 'avocadocoin',
		'symbol': 'AVDO'
	},
	{
		'id': 17284,
		'name': 'Dogelana',
		'slug': 'dogelana-com',
		'symbol': 'DGLN'
	},
	{
		'id': 4233,
		'name': 'Membrana',
		'slug': 'membrana',
		'symbol': 'MBN'
	},
	{
		'id': 19775,
		'name': 'DiversiFi Blue',
		'slug': 'diversifi-blue',
		'symbol': 'DVFB'
	},
	{
		'id': 13543,
		'name': 'Bamboo Coin',
		'slug': 'bamboo-coin',
		'symbol': 'BMBO'
	},
	{
		'id': 20029,
		'name': 'Sexn',
		'slug': 'sexn',
		'symbol': 'SST'
	},
	{
		'id': 10545,
		'name': 'H2Finance',
		'slug': 'h2finance',
		'symbol': 'YFIH2'
	},
	{
		'id': 12361,
		'name': 'Space Vikings',
		'slug': 'space-vikings',
		'symbol': 'SVT'
	},
	{
		'id': 22229,
		'name': 'Avoteo',
		'slug': 'avoteo',
		'symbol': 'AVO'
	},
	{
		'id': 13778,
		'name': 'Leonicorn Swap ( LEON )',
		'slug': 'leon-token',
		'symbol': 'LEON'
	},
	{
		'id': 22524,
		'name': 'Shibird',
		'slug': 'shibird',
		'symbol': 'SHIRD'
	},
	{
		'id': 9085,
		'name': 'fBomb',
		'slug': 'fbomb',
		'symbol': 'BOMB'
	},
	{
		'id': 9498,
		'name': 'EnreachDAO',
		'slug': 'enreachdao',
		'symbol': 'NRCH'
	},
	{
		'id': 22362,
		'name': 'Golden Eagle',
		'slug': 'golden-eagle',
		'symbol': 'GDE'
	},
	{
		'id': 5399,
		'name': 'TILWIKI',
		'slug': 'tilwiki',
		'symbol': 'TLW'
	},
	{
		'id': 16230,
		'name': 'ETH Fan Token Ecosystem',
		'slug': 'eth-fan-token',
		'symbol': 'EFT'
	},
	{
		'id': 21057,
		'name': 'NBOX',
		'slug': 'nbox',
		'symbol': 'NBOX'
	},
	{
		'id': 21433,
		'name': 'Sakura Planet',
		'slug': 'sakura-planet',
		'symbol': 'SAK'
	},
	{
		'id': 6585,
		'name': 'Endless Board Game',
		'slug': 'endless-board-game',
		'symbol': 'ENG'
	},
	{
		'id': 14948,
		'name': 'AtomPad',
		'slug': 'atompad',
		'symbol': 'ATPAD'
	},
	{
		'id': 11814,
		'name': 'Potato',
		'slug': 'potato',
		'symbol': 'POTATO'
	},
	{
		'id': 6482,
		'name': 'Jur',
		'slug': 'jur',
		'symbol': 'JUR'
	},
	{
		'id': 21484,
		'name': 'XList',
		'slug': 'xlist',
		'symbol': 'XLIST'
	},
	{
		'id': 16402,
		'name': 'Smart Marketing Token',
		'slug': 'smart-marketing-token',
		'symbol': 'SMT'
	},
	{
		'id': 18753,
		'name': 'Darkness Share',
		'slug': 'darkness-share',
		'symbol': 'NESS'
	},
	{
		'id': 17887,
		'name': 'ShibaNFT',
		'slug': 'shibanft',
		'symbol': 'SHIBANFT'
	},
	{
		'id': 16003,
		'name': 'TATA Coin',
		'slug': 'tata-coin',
		'symbol': 'TATA'
	},
	{
		'id': 9318,
		'name': 'BeforeCoinMarketCap',
		'slug': 'beforecoinmarketcap',
		'symbol': 'BCMC1'
	},
	{
		'id': 16802,
		'name': 'Seed Club',
		'slug': 'seed-club',
		'symbol': 'CLUB'
	},
	{
		'id': 12475,
		'name': 'BEUROP',
		'slug': 'beurop',
		'symbol': 'BEPR'
	},
	{
		'id': 22596,
		'name': 'KodexPay',
		'slug': 'kodexpay',
		'symbol': 'KXP'
	},
	{
		'id': 10189,
		'name': 'Hina Inu',
		'slug': 'hina-inu',
		'symbol': 'HINA'
	},
	{
		'id': 19488,
		'name': 'Helena Financial',
		'slug': 'helena-financial',
		'symbol': 'HELENA'
	},
	{
		'id': 22967,
		'name': 'BIB Token',
		'slug': 'bib-token',
		'symbol': 'BIB'
	},
	{
		'id': 10868,
		'name': 'Super Floki',
		'slug': 'super-floki',
		'symbol': 'SLOKI'
	},
	{
		'id': 16410,
		'name': 'Animverse',
		'slug': 'animverse',
		'symbol': 'ANM'
	},
	{
		'id': 20035,
		'name': 'Era7: Game of Truth',
		'slug': 'era7-game-of-truth',
		'symbol': 'GOT'
	},
	{
		'id': 17252,
		'name': 'WatchDO',
		'slug': 'watchdo',
		'symbol': 'WDO'
	},
	{
		'id': 22470,
		'name': 'Babacoin',
		'slug': 'babacoin',
		'symbol': 'BBC'
	},
	{
		'id': 19328,
		'name': 'Toobcoin',
		'slug': 'toobemi',
		'symbol': 'TOOB'
	},
	{
		'id': 18500,
		'name': 'CatBoy',
		'slug': 'catboy-token',
		'symbol': 'CATBOY'
	},
	{
		'id': 12728,
		'name': 'Pulse Predictions Market',
		'slug': 'pulse-token',
		'symbol': 'PULSE'
	},
	{
		'id': 18109,
		'name': 'Ruby Play Network',
		'slug': 'ruby-play-network',
		'symbol': 'RUBY'
	},
	{
		'id': 11314,
		'name': 'CWallet',
		'slug': 'cardwallet',
		'symbol': 'CW'
	},
	{
		'id': 12284,
		'name': 'Bantu',
		'slug': 'bantu',
		'symbol': 'XBN'
	},
	{
		'id': 13351,
		'name': 'ADACash',
		'slug': 'adacash',
		'symbol': 'ADACASH'
	},
	{
		'id': 9790,
		'name': 'Coco Swap',
		'slug': 'coco-swap',
		'symbol': 'COCO'
	},
	{
		'id': 12659,
		'name': 'Next Token',
		'slug': 'next-token',
		'symbol': 'NXT'
	},
	{
		'id': 13534,
		'name': 'xDollar Stablecoin',
		'slug': 'xdollar-stablecoin',
		'symbol': 'XUSD'
	},
	{
		'id': 13157,
		'name': 'PolkaPets',
		'slug': 'polkapets',
		'symbol': 'PETS'
	},
	{
		'id': 10914,
		'name': 'BABY DOGE INU',
		'slug': 'baby-doge-inu',
		'symbol': '$BABYDOGEINU'
	},
	{
		'id': 15957,
		'name': 'Goblin',
		'slug': 'goblin',
		'symbol': 'GOBLIN'
	},
	{
		'id': 17565,
		'name': 'EverReflect',
		'slug': 'everreflect',
		'symbol': 'EVRF'
	},
	{
		'id': 19339,
		'name': 'Speedex',
		'slug': 'speedex',
		'symbol': 'SPDX'
	},
	{
		'id': 20328,
		'name': 'Spice Trade',
		'slug': 'spice-trade',
		'symbol': 'SPICE'
	},
	{
		'id': 19128,
		'name': 'Dominium',
		'slug': 'dominium',
		'symbol': 'DOM'
	},
	{
		'id': 11331,
		'name': 'Eloin',
		'slug': 'eloin',
		'symbol': 'ELOIN'
	},
	{
		'id': 15784,
		'name': 'LIT',
		'slug': 'lit',
		'symbol': 'LIT'
	},
	{
		'id': 15336,
		'name': 'MEDPING',
		'slug': 'medping',
		'symbol': 'MPG'
	},
	{
		'id': 11690,
		'name': 'Magic Beasties',
		'slug': 'magic-beasties',
		'symbol': 'BSTS'
	},
	{
		'id': 21638,
		'name': 'Qatar Inu',
		'slug': 'qatar-inu',
		'symbol': 'QATAR'
	},
	{
		'id': 4135,
		'name': 'STIPS',
		'slug': 'stips',
		'symbol': 'STIPS'
	},
	{
		'id': 11502,
		'name': 'CryptoCars',
		'slug': 'cryptocars',
		'symbol': 'CCAR'
	},
	{
		'id': 22676,
		'name': 'Kostren Finance',
		'slug': 'kostren-finance',
		'symbol': 'KTN'
	},
	{
		'id': 10675,
		'name': 'Hare Token',
		'slug': 'hare-token',
		'symbol': 'HARE'
	},
	{
		'id': 17909,
		'name': 'Cronosphere',
		'slug': 'cronosphere',
		'symbol': 'SPHERE'
	},
	{
		'id': 21805,
		'name': 'Optical Bitcoin',
		'slug': 'optical-bitcoin',
		'symbol': 'OBTC'
	},
	{
		'id': 23161,
		'name': 'Jimizz',
		'slug': 'jimizz',
		'symbol': 'JMZ'
	},
	{
		'id': 3846,
		'name': 'VeriBlock',
		'slug': 'veriblock',
		'symbol': 'VBK'
	},
	{
		'id': 15199,
		'name': 'CatBonk',
		'slug': 'catbonk',
		'symbol': 'CABO'
	},
	{
		'id': 5744,
		'name': 'Compound Wrapped BTC',
		'slug': 'compound-wrapped-btc',
		'symbol': 'CWBTC'
	},
	{
		'id': 17029,
		'name': 'Crystal Powder',
		'slug': 'crystal-powder',
		'symbol': 'CP'
	},
	{
		'id': 17813,
		'name': 'Grim EVO',
		'slug': 'grim-evo',
		'symbol': 'GRIM EVO'
	},
	{
		'id': 16353,
		'name': 'BunnyVerse',
		'slug': 'bunnyverse',
		'symbol': 'BNV'
	},
	{
		'id': 21616,
		'name': 'AutoSingle',
		'slug': 'auto-single',
		'symbol': 'AUTOS'
	},
	{
		'id': 15501,
		'name': 'DeFiHorse',
		'slug': 'defihorse',
		'symbol': 'DFH'
	},
	{
		'id': 12693,
		'name': 'Metacourt',
		'slug': 'blocsport-one',
		'symbol': 'BLS'
	},
	{
		'id': 16103,
		'name': 'SOLCash',
		'slug': 'solcash',
		'symbol': 'SOLCASH'
	},
	{
		'id': 16921,
		'name': 'Ricnatum',
		'slug': 'ricnatum',
		'symbol': 'RCNT'
	},
	{
		'id': 20445,
		'name': 'Vegasino',
		'slug': 'vegasino',
		'symbol': 'VEGAS'
	},
	{
		'id': 20747,
		'name': 'Plant Empires',
		'slug': 'plant-empires',
		'symbol': 'PEFI'
	},
	{
		'id': 19646,
		'name': 'Luzion Protocol',
		'slug': 'luzion-protocol',
		'symbol': 'LZN'
	},
	{
		'id': 15816,
		'name': 'Zombie World Z',
		'slug': 'zombie-world-z',
		'symbol': 'ZWZ'
	},
	{
		'id': 17782,
		'name': 'SideKick Token',
		'slug': 'sidekick-token',
		'symbol': 'SK'
	},
	{
		'id': 22441,
		'name': 'XRPFarm',
		'slug': 'xrpfarm',
		'symbol': 'XF'
	},
	{
		'id': 16136,
		'name': 'Crypto Birds',
		'slug': 'crypto-birds',
		'symbol': 'XCB'
	},
	{
		'id': 11293,
		'name': 'Avaware',
		'slug': 'avaware',
		'symbol': 'AVE'
	},
	{
		'id': 8213,
		'name': 'Venus Filecoin',
		'slug': 'venus-filecoin',
		'symbol': 'vFIL'
	},
	{
		'id': 20436,
		'name': 'Apex Nodes',
		'slug': 'apex-nodes',
		'symbol': 'APEX'
	},
	{
		'id': 12624,
		'name': 'Women Empowerment Token',
		'slug': 'women-empowerment-token',
		'symbol': 'WEMP'
	},
	{
		'id': 16407,
		'name': 'XX Platform',
		'slug': 'xx-platform',
		'symbol': 'XXP'
	},
	{
		'id': 14382,
		'name': 'Kitty Solana',
		'slug': 'kitty-solana',
		'symbol': 'KITTY'
	},
	{
		'id': 12495,
		'name': 'XGOLD COIN',
		'slug': 'xgold-coin',
		'symbol': 'XGOLD'
	},
	{
		'id': 17028,
		'name': 'Nerian Network',
		'slug': 'nerian-network',
		'symbol': 'NERIAN'
	},
	{
		'id': 12875,
		'name': 'CrypterToken',
		'slug': 'cryptertoken',
		'symbol': 'CRYPT'
	},
	{
		'id': 22280,
		'name': 'ProtocolX',
		'slug': 'protocolx',
		'symbol': 'PTX'
	},
	{
		'id': 20955,
		'name': 'RocketFi',
		'slug': 'rocketfi',
		'symbol': 'ROCKETFI'
	},
	{
		'id': 22872,
		'name': 'Fable Of The Shiba',
		'slug': 'fable-of-the-shiba',
		'symbol': 'SYRANT'
	},
	{
		'id': 20308,
		'name': 'KUY Token',
		'slug': 'kuy-token',
		'symbol': 'KUY'
	},
	{
		'id': 14868,
		'name': 'xMooney',
		'slug': 'xmooney',
		'symbol': 'XM'
	},
	{
		'id': 22651,
		'name': 'NutsDAO',
		'slug': 'nutsdao',
		'symbol': 'NUTS'
	},
	{
		'id': 5219,
		'name': 'USD Bancor',
		'slug': 'usd-bancor',
		'symbol': 'USDB'
	},
	{
		'id': 13990,
		'name': 'Matic Launchpad',
		'slug': 'matic-launchpad',
		'symbol': 'MATICPAD'
	},
	{
		'id': 2208,
		'name': 'EncrypGen',
		'slug': 'encrypgen',
		'symbol': 'DNA'
	},
	{
		'id': 19003,
		'name': 'CryptoMines Reborn',
		'slug': 'cryptomines-reborn',
		'symbol': 'CRUX'
	},
	{
		'id': 20915,
		'name': 'SpookyShiba',
		'slug': 'spooky-shiba-new',
		'symbol': 'SPKY'
	},
	{
		'id': 12991,
		'name': 'MagnetGold',
		'slug': 'magnet-gold',
		'symbol': 'MTG'
	},
	{
		'id': 11397,
		'name': 'Kaiken Shiba',
		'slug': 'kaiken-shiba',
		'symbol': 'KSHIB'
	},
	{
		'id': 23124,
		'name': 'Peak Token',
		'slug': 'peak-token',
		'symbol': 'PKTK'
	},
	{
		'id': 23001,
		'name': 'Alien Squid',
		'slug': 'alien-squid',
		'symbol': 'ALIENSQUID'
	},
	{
		'id': 14045,
		'name': 'LinkSync',
		'slug': 'linksync',
		'symbol': 'SYNC'
	},
	{
		'id': 21042,
		'name': 'Afrep',
		'slug': 'afrep',
		'symbol': 'AFREP'
	},
	{
		'id': 20760,
		'name': 'SO CAL Token',
		'slug': 'so-cal-token',
		'symbol': 'SCT'
	},
	{
		'id': 14699,
		'name': 'RaceX',
		'slug': 'racex',
		'symbol': 'RACEX'
	},
	{
		'id': 22307,
		'name': 'ACEToken',
		'slug': 'acetoken',
		'symbol': 'ACE'
	},
	{
		'id': 22277,
		'name': 'Wrapped Pi',
		'slug': 'wrapped-pi',
		'symbol': 'WPI'
	},
	{
		'id': 18979,
		'name': 'Taroverse',
		'slug': 'taroverse',
		'symbol': 'TARO'
	},
	{
		'id': 3758,
		'name': 'MCF Token',
		'slug': 'max-crowdfund',
		'symbol': 'MCF'
	},
	{
		'id': 21137,
		'name': 'Anarchy',
		'slug': 'anarchy',
		'symbol': 'ANARCHY'
	},
	{
		'id': 6944,
		'name': 'Millimeter',
		'slug': 'millimeter',
		'symbol': 'MM'
	},
	{
		'id': 13431,
		'name': 'Agricoin',
		'slug': 'agricoin',
		'symbol': 'AGX'
	},
	{
		'id': 16355,
		'name': 'Tranquil Staked ONE',
		'slug': 'tranquil-staked-one',
		'symbol': 'STONE'
	},
	{
		'id': 15398,
		'name': 'Rome',
		'slug': 'rome',
		'symbol': 'ROME'
	},
	{
		'id': 21780,
		'name': 'O5O',
		'slug': 'o5o',
		'symbol': 'O5O'
	},
	{
		'id': 12355,
		'name': 'Baby Floki Billionaire',
		'slug': 'baby-floki-billionaire',
		'symbol': 'BabyFB'
	},
	{
		'id': 19565,
		'name': 'Prometheus',
		'slug': 'prometheus-pro',
		'symbol': 'PRO'
	},
	{
		'id': 13657,
		'name': 'MemeWars',
		'slug': 'memewars',
		'symbol': 'MWAR'
	},
	{
		'id': 10877,
		'name': 'Ainu Token',
		'slug': 'ainu-token',
		'symbol': 'AINU'
	},
	{
		'id': 21860,
		'name': 'CYBER SOCCER',
		'slug': 'cyber-soccer',
		'symbol': 'COCA'
	},
	{
		'id': 12264,
		'name': 'XMINE',
		'slug': 'xmine',
		'symbol': 'XMN'
	},
	{
		'id': 21888,
		'name': 'ApeJet',
		'slug': 'apejet',
		'symbol': 'JET'
	},
	{
		'id': 14257,
		'name': 'WalletNow',
		'slug': 'walletnow',
		'symbol': 'WNOW'
	},
	{
		'id': 21357,
		'name': 'Adamant',
		'slug': 'adamant-finance',
		'symbol': 'ADDY'
	},
	{
		'id': 12452,
		'name': 'TETU',
		'slug': 'tetu',
		'symbol': 'TETU'
	},
	{
		'id': 21047,
		'name': 'Owloper Owl',
		'slug': 'owloper',
		'symbol': 'OWL'
	},
	{
		'id': 21727,
		'name': 'MUSE ENT NFT',
		'slug': 'muse-ent-nft',
		'symbol': 'MSCT'
	},
	{
		'id': 22030,
		'name': 'Genesis Finance',
		'slug': 'genesis-finance',
		'symbol': 'GEFI'
	},
	{
		'id': 16137,
		'name': 'BTC 2x Flexible Leverage Index',
		'slug': 'index-coop',
		'symbol': 'BTC2X-FLI'
	},
	{
		'id': 22994,
		'name': 'Huckleberry Inu',
		'slug': 'huckleberry-inu',
		'symbol': 'HKBY'
	},
	{
		'id': 22197,
		'name': 'SoccerInu',
		'slug': 'soccerinu',
		'symbol': 'SOCCER'
	},
	{
		'id': 16900,
		'name': 'Optimus',
		'slug': 'optimus',
		'symbol': 'OPTCM'
	},
	{
		'id': 16143,
		'name': 'EternalFlow',
		'slug': 'eternalflow',
		'symbol': 'EFT'
	},
	{
		'id': 10045,
		'name': 'Polars',
		'slug': 'polars',
		'symbol': 'POL'
	},
	{
		'id': 14079,
		'name': 'Shibalana',
		'slug': 'shibalana',
		'symbol': 'SHIBA'
	},
	{
		'id': 22395,
		'name': 'IdleTreasureParty',
		'slug': 'idletreasureparty',
		'symbol': 'DTEVIL'
	},
	{
		'id': 10674,
		'name': 'Synapse Network',
		'slug': 'synapse-network',
		'symbol': 'SNP'
	},
	{
		'id': 21503,
		'name': 'DecentralizedUnited',
		'slug': 'decentralizedunited',
		'symbol': 'DCU'
	},
	{
		'id': 18701,
		'name': 'CowCoin',
		'slug': 'cowcoin',
		'symbol': 'CC'
	},
	{
		'id': 12344,
		'name': 'Affinity',
		'slug': 'safeaffinity',
		'symbol': 'AFNTY'
	},
	{
		'id': 18421,
		'name': 'Rice',
		'slug': 'rice',
		'symbol': 'RICE'
	},
	{
		'id': 11678,
		'name': 'Lumenswap',
		'slug': 'lumenswap',
		'symbol': 'LSP'
	},
	{
		'id': 8699,
		'name': 'DEGEN Index',
		'slug': 'degen-index',
		'symbol': 'DEGEN'
	},
	{
		'id': 19994,
		'name': 'Knights & Peasants',
		'slug': 'knights-peasants',
		'symbol': 'KNIGHT'
	},
	{
		'id': 23237,
		'name': 'RANBASED',
		'slug': 'ranbased',
		'symbol': 'RANB'
	},
	{
		'id': 23167,
		'name': 'ShibaInu Finance',
		'slug': 'shibainu-finance',
		'symbol': 'SHIF'
	},
	{
		'id': 20556,
		'name': 'VisaMetaFi',
		'slug': 'visametafi',
		'symbol': 'VISA'
	},
	{
		'id': 7881,
		'name': 'sKLAY',
		'slug': 'sklay',
		'symbol': 'SKLAY'
	},
	{
		'id': 5434,
		'name': 'pTokens BTC',
		'slug': 'ptokens-btc',
		'symbol': 'pBTC'
	},
	{
		'id': 19715,
		'name': 'BeglobalDAO',
		'slug': 'beglobaldao',
		'symbol': 'GLBD'
	},
	{
		'id': 13746,
		'name': 'FLOOF',
		'slug': 'floof',
		'symbol': 'FLOOF'
	},
	{
		'id': 22378,
		'name': 'Listenify',
		'slug': 'listenify',
		'symbol': 'AUDIO'
	},
	{
		'id': 12238,
		'name': 'OwlDAO',
		'slug': 'owldao',
		'symbol': 'OWL'
	},
	{
		'id': 18618,
		'name': 'MicroCreditToken',
		'slug': 'microcredittoken',
		'symbol': '1MCT'
	},
	{
		'id': 10155,
		'name': 'Vanity',
		'slug': 'vanity',
		'symbol': 'VNY'
	},
	{
		'id': 21983,
		'name': 'Balance Network',
		'slug': 'balance-network',
		'symbol': 'BLN'
	},
	{
		'id': 21695,
		'name': 'Duck Punkz Universe Floor Index',
		'slug': 'duck-punkz-universe-floor-index',
		'symbol': 'DPUNKZ'
	},
	{
		'id': 13840,
		'name': 'Collector Coin',
		'slug': 'collector-coin',
		'symbol': 'AGS'
	},
	{
		'id': 10771,
		'name': 'Cannumo',
		'slug': 'cannumo',
		'symbol': 'CANU'
	},
	{
		'id': 10386,
		'name': 'Bitcoin Latinum',
		'slug': 'bitcoin-latinum',
		'symbol': 'LTNM'
	},
	{
		'id': 20239,
		'name': 'Hedge',
		'slug': 'hedge-hdg',
		'symbol': 'HDG'
	},
	{
		'id': 21325,
		'name': 'BananaClubToken',
		'slug': 'bananaclubtoken',
		'symbol': 'BCT'
	},
	{
		'id': 18107,
		'name': 'Dark Land Survival',
		'slug': 'dark-land-survival',
		'symbol': 'BIG'
	},
	{
		'id': 15138,
		'name': 'Koda Cryptocurrency',
		'slug': 'summit-koda-token-new',
		'symbol': 'KODA'
	},
	{
		'id': 9932,
		'name': 'ElonDoge',
		'slug': 'elondoge',
		'symbol': 'EDOGE'
	},
	{
		'id': 9943,
		'name': 'American Shiba',
		'slug': 'american-shiba',
		'symbol': 'USHIBA'
	},
	{
		'id': 12500,
		'name': 'Orca AVAI',
		'slug': 'orca-avai',
		'symbol': 'AVAI'
	},
	{
		'id': 21962,
		'name': 'WORLD CUP INU',
		'slug': 'world-cup-inu',
		'symbol': 'WCI'
	},
	{
		'id': 19333,
		'name': 'MarbleVerse',
		'slug': 'marbleverse',
		'symbol': 'RLM'
	},
	{
		'id': 14041,
		'name': 'Himalayan Cat Coin',
		'slug': 'himalayan-cat-coin',
		'symbol': 'HIMA'
	},
	{
		'id': 22560,
		'name': 'My Points E-Commerce',
		'slug': 'my-points-e-commerce',
		'symbol': 'MYPO'
	},
	{
		'id': 5900,
		'name': 'DigiDinar',
		'slug': 'digidinar',
		'symbol': 'DDR'
	},
	{
		'id': 20111,
		'name': 'Green Life Energy',
		'slug': 'green-life-energy-token',
		'symbol': 'GLE'
	},
	{
		'id': 20883,
		'name': 'BabyApe',
		'slug': 'babyape-',
		'symbol': 'BABYAPE'
	},
	{
		'id': 11616,
		'name': 'Score Token',
		'slug': 'score-token',
		'symbol': 'SCO'
	},
	{
		'id': 18556,
		'name': 'The Underground',
		'slug': 'the-underground',
		'symbol': 'BLOOD'
	},
	{
		'id': 11582,
		'name': 'Lumi Credits',
		'slug': 'lumi-credits',
		'symbol': 'LUMI'
	},
	{
		'id': 17613,
		'name': 'EMP Shares',
		'slug': 'emp-shares',
		'symbol': 'ESHARE'
	},
	{
		'id': 14941,
		'name': 'Harmonylauncher',
		'slug': 'harmonylauncher',
		'symbol': 'HARL'
	},
	{
		'id': 22120,
		'name': 'Yofune Nushi',
		'slug': 'yofune-nushi',
		'symbol': 'KOYO'
	},
	{
		'id': 9548,
		'name': 'CroxSwap',
		'slug': 'croxswap',
		'symbol': 'CROX'
	},
	{
		'id': 15231,
		'name': 'Baby Bali',
		'slug': 'baby-bali',
		'symbol': 'BB'
	},
	{
		'id': 14902,
		'name': 'Chain Wars',
		'slug': 'chain-wars',
		'symbol': 'CWE'
	},
	{
		'id': 17273,
		'name': 'DefiBay',
		'slug': 'defibay',
		'symbol': 'DBAY'
	},
	{
		'id': 5282,
		'name': 'Kepler Network',
		'slug': 'kepler-network',
		'symbol': 'KMW'
	},
	{
		'id': 14132,
		'name': 'Shoppi Coin',
		'slug': 'shoppi-coin',
		'symbol': 'SHOP'
	},
	{
		'id': 10928,
		'name': 'DOJO',
		'slug': 'dojo',
		'symbol': 'DOJO'
	},
	{
		'id': 10665,
		'name': 'KogeCoin.io',
		'slug': 'kogecoin',
		'symbol': 'KOGECOIN'
	},
	{
		'id': 18490,
		'name': 'SweetToken',
		'slug': 'sweetpad',
		'symbol': 'SWT'
	},
	{
		'id': 12588,
		'name': 'ProjectOasis',
		'slug': 'projectoasis',
		'symbol': 'OASIS'
	},
	{
		'id': 12436,
		'name': 'Timeleap Finance',
		'slug': 'timeleap',
		'symbol': 'TIME'
	},
	{
		'id': 5038,
		'name': 'Litecash',
		'slug': 'litecash',
		'symbol': 'CASH'
	},
	{
		'id': 8844,
		'name': 'SPRINK',
		'slug': 'sprink',
		'symbol': 'SPRINK'
	},
	{
		'id': 14495,
		'name': 'HappyLand',
		'slug': 'happy-land',
		'symbol': 'HPL'
	},
	{
		'id': 7739,
		'name': 'DexKit',
		'slug': 'dexkit',
		'symbol': 'KIT'
	},
	{
		'id': 12652,
		'name': 'Hanu Yokia',
		'slug': 'goji-crypto',
		'symbol': 'HANU'
	},
	{
		'id': 20771,
		'name': 'SpartaCats',
		'slug': 'spartacats',
		'symbol': 'PURR'
	},
	{
		'id': 20904,
		'name': 'Perseus Fintech',
		'slug': 'perseus-fintech',
		'symbol': 'PRS'
	},
	{
		'id': 12752,
		'name': 'ORE Token',
		'slug': 'ore-token',
		'symbol': 'ORE'
	},
	{
		'id': 13943,
		'name': 'GINZA NETWORK',
		'slug': 'ginza-network',
		'symbol': 'GINZA'
	},
	{
		'id': 20696,
		'name': 'MetaVerse-M',
		'slug': 'metaverse-m',
		'symbol': 'M'
	},
	{
		'id': 17626,
		'name': 'Spartans',
		'slug': 'spartan-token',
		'symbol': 'SPA'
	},
	{
		'id': 18361,
		'name': 'TEN Wallet',
		'slug': 'ten-wallet',
		'symbol': 'TENW'
	},
	{
		'id': 20745,
		'name': 'StoneDAO',
		'slug': 'stonedao',
		'symbol': 'SDT'
	},
	{
		'id': 13493,
		'name': 'Wanaka Farm WAIRERE Token',
		'slug': 'wairere-token',
		'symbol': 'WAI'
	},
	{
		'id': 19908,
		'name': 'H2O',
		'slug': 'h2o-poseidon',
		'symbol': 'PSDN'
	},
	{
		'id': 17172,
		'name': 'Revolution',
		'slug': 'revolution',
		'symbol': 'REV'
	},
	{
		'id': 11880,
		'name': 'EpicHero 3D NFT',
		'slug': 'epichero-3d-nft',
		'symbol': 'EPICHERO'
	},
	{
		'id': 12893,
		'name': 'The Monopolist',
		'slug': 'the-monopolist',
		'symbol': 'MONO'
	},
	{
		'id': 19855,
		'name': 'Joltify',
		'slug': 'joltify',
		'symbol': 'JOLT'
	},
	{
		'id': 16032,
		'name': 'HUH Token',
		'slug': 'huh',
		'symbol': 'HUH'
	},
	{
		'id': 14518,
		'name': 'NiftyPays',
		'slug': 'niftypays',
		'symbol': 'NIFTY'
	},
	{
		'id': 12510,
		'name': 'DeFido',
		'slug': 'defido',
		'symbol': 'DEFIDO'
	},
	{
		'id': 19311,
		'name': 'Meta Continental',
		'slug': 'metacontinental',
		'symbol': 'CON'
	},
	{
		'id': 9377,
		'name': 'TreeDefi',
		'slug': 'treedefi',
		'symbol': 'SEED'
	},
	{
		'id': 21891,
		'name': 'VICDAO NELUM',
		'slug': 'vicdao-nelum',
		'symbol': 'NELUM'
	},
	{
		'id': 4102,
		'name': 'TranslateMe Network Token',
		'slug': 'translateme-network-token',
		'symbol': 'TMN'
	},
	{
		'id': 18430,
		'name': 'DYAKON',
		'slug': 'dyakon',
		'symbol': 'DYN'
	},
	{
		'id': 19038,
		'name': 'Web3 ALL BEST ICO',
		'slug': 'web3-all-best-ico',
		'symbol': 'WEB3ALLBI'
	},
	{
		'id': 22988,
		'name': 'GOLDEN REGENT INVESTMENT',
		'slug': 'golden-regent-investment',
		'symbol': 'GRI'
	},
	{
		'id': 16277,
		'name': 'Ari Swap',
		'slug': 'ari-swap',
		'symbol': 'ARI'
	},
	{
		'id': 11205,
		'name': 'TrusterCoin',
		'slug': 'trustercoin',
		'symbol': 'TSC'
	},
	{
		'id': 17702,
		'name': 'Gunstar Metaverse Currency',
		'slug': 'gunstar-metaverse-currency',
		'symbol': 'GSC'
	},
	{
		'id': 12366,
		'name': 'Demeter',
		'slug': 'demeter-usd',
		'symbol': 'DUSD'
	},
	{
		'id': 21865,
		'name': 'Catverse',
		'slug': 'catverse',
		'symbol': 'CATVERSE'
	},
	{
		'id': 20977,
		'name': 'Bullet App',
		'slug': 'bullet-app',
		'symbol': 'BLT'
	},
	{
		'id': 16753,
		'name': 'Wild Island Game',
		'slug': 'wild-island-game',
		'symbol': 'WILD'
	},
	{
		'id': 22870,
		'name': 'Digihealth',
		'slug': 'digihealth',
		'symbol': 'DGH'
	},
	{
		'id': 19782,
		'name': 'MetaDerby',
		'slug': 'metaderby',
		'symbol': 'DBY'
	},
	{
		'id': 17446,
		'name': 'VeldoraBSC',
		'slug': 'veldorabsc',
		'symbol': 'VDORA'
	},
	{
		'id': 21785,
		'name': 'Tosa Inu',
		'slug': 'tosa-inu',
		'symbol': 'TOS'
	},
	{
		'id': 12272,
		'name': 'Boo Finance',
		'slug': 'boo-finance',
		'symbol': 'BOOFI'
	},
	{
		'id': 18289,
		'name': 'QuinCoin',
		'slug': 'quincoin',
		'symbol': 'QIN'
	},
	{
		'id': 16444,
		'name': 'MetaFootball',
		'slug': 'metafootball',
		'symbol': 'MTF'
	},
	{
		'id': 21602,
		'name': 'Triflex',
		'slug': 'triflex-token',
		'symbol': 'TRFX'
	},
	{
		'id': 17545,
		'name': 'Cipher',
		'slug': 'cipher-v2',
		'symbol': 'CPR'
	},
	{
		'id': 15917,
		'name': 'TOKEN SHELBY',
		'slug': 'token-shelby',
		'symbol': 'TSY'
	},
	{
		'id': 17270,
		'name': 'MetaSpace REIT',
		'slug': 'metaspace-reit',
		'symbol': 'MREIT'
	},
	{
		'id': 22499,
		'name': 'Fortuneum',
		'slug': 'fortuneum',
		'symbol': 'FORTUNE'
	},
	{
		'id': 18024,
		'name': 'Kodi Coin',
		'slug': 'kodicoin',
		'symbol': 'KODI'
	},
	{
		'id': 19862,
		'name': 'Jetset',
		'slug': 'jetset',
		'symbol': 'JTS'
	},
	{
		'id': 20306,
		'name': 'SpiceUSD',
		'slug': 'spiceusd',
		'symbol': 'USDS'
	},
	{
		'id': 22715,
		'name': 'Venera',
		'slug': 'veneraswap',
		'symbol': 'VSW'
	},
	{
		'id': 19805,
		'name': 'NPICK BLOCK',
		'slug': 'npick-block',
		'symbol': 'NPICK'
	},
	{
		'id': 11820,
		'name': 'TORG',
		'slug': 'torg',
		'symbol': 'TORG'
	},
	{
		'id': 18198,
		'name': 'Sincere Doge',
		'slug': 'sincere-doge',
		'symbol': 'SDOGE'
	},
	{
		'id': 19264,
		'name': 'SolChicks Shards',
		'slug': 'solchicks-shards',
		'symbol': 'SHARDS'
	},
	{
		'id': 16030,
		'name': 'DEEPMAZE Finance',
		'slug': 'deepmaze-finance',
		'symbol': 'DPZ'
	},
	{
		'id': 17356,
		'name': 'Cyber Crystal',
		'slug': 'cyber-crystal',
		'symbol': 'CRYSTAL'
	},
	{
		'id': 18910,
		'name': 'LAW TOKEN',
		'slug': 'law-token',
		'symbol': 'LAW'
	},
	{
		'id': 22347,
		'name': 'Relaxable',
		'slug': 'relaxable',
		'symbol': 'RELAX'
	},
	{
		'id': 23096,
		'name': 'Shichi',
		'slug': 'shichi',
		'symbol': '七'
	},
	{
		'id': 18401,
		'name': 'Oogear',
		'slug': 'oogear',
		'symbol': 'OG'
	},
	{
		'id': 20874,
		'name': 'MilkyWay',
		'slug': 'milkyway',
		'symbol': 'MILKY'
	},
	{
		'id': 14749,
		'name': 'Onyx',
		'slug': 'onyx',
		'symbol': 'ONYX'
	},
	{
		'id': 13974,
		'name': 'NFTStyle',
		'slug': 'nftstyle',
		'symbol': 'NFTSTYLE'
	},
	{
		'id': 5474,
		'name': 'Ixinium',
		'slug': 'ixinium',
		'symbol': 'XXA'
	},
	{
		'id': 21341,
		'name': 'PooGrow',
		'slug': 'poogrow',
		'symbol': 'POOGROW'
	},
	{
		'id': 14568,
		'name': 'Baby CateCoin',
		'slug': 'baby-catecoin',
		'symbol': 'BABYCATE'
	},
	{
		'id': 5088,
		'name': 'Guapcoin',
		'slug': 'guapcoin',
		'symbol': 'GUAP'
	},
	{
		'id': 16625,
		'name': 'BabyKitty',
		'slug': 'babykitty',
		'symbol': 'BABYKITTY'
	},
	{
		'id': 15212,
		'name': 'RPS LEAGUE',
		'slug': 'rps-league',
		'symbol': 'RPS'
	},
	{
		'id': 20800,
		'name': 'CronosVerse',
		'slug': 'cronosverse',
		'symbol': 'VRSE'
	},
	{
		'id': 17144,
		'name': 'Moonshots Farm',
		'slug': 'moonshots-farm',
		'symbol': 'BONES'
	},
	{
		'id': 8741,
		'name': 'Sovi Finance',
		'slug': 'sovi-finance',
		'symbol': 'SOVI'
	},
	{
		'id': 17294,
		'name': 'Cheesus',
		'slug': 'cheesus',
		'symbol': 'CHEESUS'
	},
	{
		'id': 16526,
		'name': 'NanoMeter Bitcoin',
		'slug': 'nanometer-bitcoin',
		'symbol': 'NMBTC'
	},
	{
		'id': 2371,
		'name': 'United Traders Token',
		'slug': 'uttoken',
		'symbol': 'UTT'
	},
	{
		'id': 12775,
		'name': 'Waste Digital Coin',
		'slug': 'waste-coin',
		'symbol': 'WACO'
	},
	{
		'id': 21316,
		'name': 'Algomint',
		'slug': 'goeth',
		'symbol': 'GOETH'
	},
	{
		'id': 16043,
		'name': 'BYTZ',
		'slug': 'bytz',
		'symbol': 'BYTZ'
	},
	{
		'id': 21278,
		'name': 'FIFA Champs',
		'slug': 'fifa-champs',
		'symbol': 'CHAMPS'
	},
	{
		'id': 16626,
		'name': 'GScarab',
		'slug': 'gscarab',
		'symbol': 'GSCARAB'
	},
	{
		'id': 7579,
		'name': 'Mars Network',
		'slug': 'mars-network',
		'symbol': 'MARS'
	},
	{
		'id': 12153,
		'name': 'Kurobi',
		'slug': 'kurobi',
		'symbol': 'KURO'
	},
	{
		'id': 23099,
		'name': 'zkNFTex',
		'slug': 'zknftex',
		'symbol': 'ZKN'
	},
	{
		'id': 17863,
		'name': 'Pochi Inu',
		'slug': 'pochi-inu',
		'symbol': 'POCHI'
	},
	{
		'id': 13718,
		'name': 'GAMINGDOGE',
		'slug': 'gamingdoge',
		'symbol': 'GAMINGDOGE'
	},
	{
		'id': 19504,
		'name': 'Seesaw',
		'slug': 'seesaw',
		'symbol': 'SSW'
	},
	{
		'id': 14378,
		'name': 'Meta',
		'slug': 'meta-bsc',
		'symbol': 'META'
	},
	{
		'id': 11017,
		'name': 'PolygonFarm Finance',
		'slug': 'polygonfarm-finance',
		'symbol': 'SPADE'
	},
	{
		'id': 22534,
		'name': 'GENZ Token',
		'slug': 'genz-token',
		'symbol': 'GENZ'
	},
	{
		'id': 6692,
		'name': 'MORK',
		'slug': 'mork',
		'symbol': 'MORK'
	},
	{
		'id': 8046,
		'name': 'Cybertronchain',
		'slug': 'cybertronchain',
		'symbol': 'CTC'
	},
	{
		'id': 16937,
		'name': '2SHARE',
		'slug': '2share',
		'symbol': '2SHARES'
	},
	{
		'id': 22823,
		'name': 'Setter Protocol',
		'slug': 'setter-protocol',
		'symbol': 'SET'
	},
	{
		'id': 20892,
		'name': 'Global Trading Xenocurrency',
		'slug': 'global-trading-xenocurrency',
		'symbol': 'GTX'
	},
	{
		'id': 14160,
		'name': 'Matrix Protocol',
		'slug': 'matrix-protocol',
		'symbol': 'MTX'
	},
	{
		'id': 20673,
		'name': 'Ripae AVAX',
		'slug': 'ripae-avax',
		'symbol': 'PAVAX'
	},
	{
		'id': 22364,
		'name': 'FAHRENHEIT CHAIN',
		'slug': 'fahrenheit-chain',
		'symbol': 'WFAC'
	},
	{
		'id': 12194,
		'name': 'Baby Floki (BSC)',
		'slug': 'baby-floki',
		'symbol': 'BABYFLOKI'
	},
	{
		'id': 8904,
		'name': 'renZEC',
		'slug': 'renzec',
		'symbol': 'RENZEC'
	},
	{
		'id': 15313,
		'name': 'BunnyPark Game',
		'slug': 'bunnypark-bg',
		'symbol': 'BG'
	},
	{
		'id': 22609,
		'name': 'Fish',
		'slug': 'fish',
		'symbol': 'FISH'
	},
	{
		'id': 12964,
		'name': 'Arbis Finance',
		'slug': 'arbis-finance',
		'symbol': 'ARBIS'
	},
	{
		'id': 19160,
		'name': 'VoltSwap',
		'slug': 'voltswap',
		'symbol': 'VOLT'
	},
	{
		'id': 18381,
		'name': 'Baby Cat Coin',
		'slug': 'baby-cat-coin',
		'symbol': 'BABYCATS'
	},
	{
		'id': 6105,
		'name': 'HAPY Coin',
		'slug': 'hapy-coin',
		'symbol': 'HAPY'
	},
	{
		'id': 19284,
		'name': 'FIDELIS',
		'slug': 'fidelis',
		'symbol': 'FDLS'
	},
	{
		'id': 19190,
		'name': 'ElonBank',
		'slug': 'elonbank',
		'symbol': 'ELONBANK'
	},
	{
		'id': 14467,
		'name': 'IoTexShiba',
		'slug': 'iotexshiba',
		'symbol': 'IOSHIB'
	},
	{
		'id': 21991,
		'name': 'HatchyPocket',
		'slug': 'hatchypocket',
		'symbol': 'HATCHY'
	},
	{
		'id': 18661,
		'name': 'Smart Donation Coin',
		'slug': 'smart-donation',
		'symbol': 'SDC'
	},
	{
		'id': 11801,
		'name': 'Daily COP',
		'slug': 'daily-cop',
		'symbol': 'DLYCOP'
	},
	{
		'id': 8106,
		'name': 'Dynamic Set Dollar',
		'slug': 'dynamic-set-dollar',
		'symbol': 'DSD'
	},
	{
		'id': 9057,
		'name': 'VYNK CHAIN',
		'slug': 'vynk-chain',
		'symbol': 'VYNC'
	},
	{
		'id': 18374,
		'name': 'Metawar',
		'slug': 'metawar',
		'symbol': 'METAWAR'
	},
	{
		'id': 20821,
		'name': 'Useless (V3)',
		'slug': 'useless-new',
		'symbol': 'USE'
	},
	{
		'id': 11993,
		'name': 'HappyFans',
		'slug': 'happy-fans',
		'symbol': 'HAPPY'
	},
	{
		'id': 21588,
		'name': 'Crolon Mars',
		'slug': 'crolon-mars',
		'symbol': 'CLMRS'
	},
	{
		'id': 16147,
		'name': 'MONNFTS',
		'slug': 'monnfts',
		'symbol': 'MON'
	},
	{
		'id': 11029,
		'name': 'Artex',
		'slug': 'artex',
		'symbol': 'ARTEX'
	},
	{
		'id': 12265,
		'name': 'Investin',
		'slug': 'investin',
		'symbol': 'IVN'
	},
	{
		'id': 21483,
		'name': 'RimsofLegend',
		'slug': 'rimsoflegend',
		'symbol': 'ROL'
	},
	{
		'id': 16792,
		'name': 'Mafagafo',
		'slug': 'mafagafo',
		'symbol': 'MAFA'
	},
	{
		'id': 19374,
		'name': 'Iotex Monster Go',
		'slug': 'iotex-monster-go',
		'symbol': 'MTGO'
	},
	{
		'id': 13560,
		'name': 'ShibaZilla',
		'slug': 'shibazillacoin',
		'symbol': 'SHIBAZILLA'
	},
	{
		'id': 19096,
		'name': 'Moonseer',
		'slug': 'moonseer',
		'symbol': 'MOON'
	},
	{
		'id': 16726,
		'name': 'Himo World',
		'slug': 'himo-world',
		'symbol': 'HIMO'
	},
	{
		'id': 11774,
		'name': 'Steak Token',
		'slug': 'steak-token',
		'symbol': 'STEAK'
	},
	{
		'id': 18758,
		'name': 'Moremoney USD',
		'slug': 'moremoney-usd',
		'symbol': 'MONEY'
	},
	{
		'id': 11910,
		'name': 'SokuSwap',
		'slug': 'sokuswap',
		'symbol': 'SOKU'
	},
	{
		'id': 11772,
		'name': 'DeMon Token',
		'slug': 'dmz-token',
		'symbol': 'DMZ'
	},
	{
		'id': 20342,
		'name': 'Ignite',
		'slug': 'ignite',
		'symbol': 'IGT'
	},
	{
		'id': 22422,
		'name': 'VENO',
		'slug': 'veno',
		'symbol': 'VENO'
	},
	{
		'id': 20114,
		'name': 'Moox',
		'slug': 'moox',
		'symbol': 'MOOX'
	},
	{
		'id': 19478,
		'name': 'Speed Star SPEED',
		'slug': 'speed-star-speed',
		'symbol': 'SPEED'
	},
	{
		'id': 5914,
		'name': 'Intexcoin',
		'slug': 'intexcoin',
		'symbol': 'INTX'
	},
	{
		'id': 14105,
		'name': 'Lemonn',
		'slug': 'lemonn',
		'symbol': 'LMN'
	},
	{
		'id': 8294,
		'name': 'Cometh',
		'slug': 'cometh',
		'symbol': 'MUST'
	},
	{
		'id': 13630,
		'name': 'OOGI',
		'slug': 'oogi',
		'symbol': 'OOGI'
	},
	{
		'id': 19345,
		'name': 'PlayPoseidon NFT',
		'slug': 'playposeidon-nft',
		'symbol': 'PPP'
	},
	{
		'id': 16096,
		'name': 'Dinoland',
		'slug': 'dinoland',
		'symbol': 'DNL'
	},
	{
		'id': 17453,
		'name': 'FirstHare',
		'slug': 'firsthare',
		'symbol': 'FirstHare'
	},
	{
		'id': 12926,
		'name': 'Merkle Network',
		'slug': 'merkle-network',
		'symbol': 'MERKLE'
	},
	{
		'id': 19299,
		'name': 'MetaBomb',
		'slug': 'metabomb',
		'symbol': 'MTB'
	},
	{
		'id': 22343,
		'name': 'SDAO',
		'slug': 'sdao',
		'symbol': 'SDAO'
	},
	{
		'id': 13074,
		'name': 'Baby Moon Floki',
		'slug': 'baby-moon-floki',
		'symbol': 'FLOKI'
	},
	{
		'id': 18635,
		'name': 'Generous Robots DAO',
		'slug': 'generous-robots-dao',
		'symbol': 'GEAR'
	},
	{
		'id': 16350,
		'name': 'Phaeton',
		'slug': 'phaeton',
		'symbol': 'PHAE'
	},
	{
		'id': 13471,
		'name': 'Omni Consumer Protocols',
		'slug': 'omni-consumer-protocols',
		'symbol': 'OCP'
	},
	{
		'id': 20817,
		'name': 'Dragoma',
		'slug': 'dragoma',
		'symbol': 'DMA'
	},
	{
		'id': 15788,
		'name': 'Royal Gold',
		'slug': 'royal-gold',
		'symbol': 'RGOLD'
	},
	{
		'id': 11810,
		'name': 'Pirate Coin Games',
		'slug': 'pirate-coin-games',
		'symbol': 'PirateCoin☠'
	},
	{
		'id': 19583,
		'name': 'Nirvana NIRV',
		'slug': 'nirvana-nirv',
		'symbol': 'NIRV'
	},
	{
		'id': 13021,
		'name': 'Moola Market',
		'slug': 'moola-market',
		'symbol': 'MOO'
	},
	{
		'id': 18883,
		'name': 'Vanguard S&P 500 ETF Tokenized Stock Defichain',
		'slug': 'vanguard-sp-500-etf-tokenized-stock-defichain',
		'symbol': 'DVOO'
	},
	{
		'id': 18923,
		'name': 'Krogan',
		'slug': 'krogan',
		'symbol': 'KRO'
	},
	{
		'id': 14458,
		'name': 'Kaby Gaming Token',
		'slug': 'kaby-gaming-token',
		'symbol': 'KGT'
	},
	{
		'id': 15848,
		'name': 'MetaRacers',
		'slug': 'metaracers',
		'symbol': 'MRS'
	},
	{
		'id': 15238,
		'name': 'marmaj',
		'slug': 'marmaj',
		'symbol': 'MARMAJ'
	},
	{
		'id': 14223,
		'name': 'ixirswap',
		'slug': 'ixirswap',
		'symbol': 'IXIR'
	},
	{
		'id': 19808,
		'name': 'Polygon HBD',
		'slug': 'polygon-hbd',
		'symbol': 'pHBD'
	},
	{
		'id': 15803,
		'name': 'ETH 2x Flexible Leverage Index (Polygon)',
		'slug': 'eth-2x-flexible-leverage-index-polygon',
		'symbol': 'ETH2X-FLI-P'
	},
	{
		'id': 12904,
		'name': 'Wrapped Staked Olympus',
		'slug': 'wrapped-staked-olympus',
		'symbol': 'WSOHM'
	},
	{
		'id': 6111,
		'name': 'Ecoin official',
		'slug': 'ecoin-2',
		'symbol': 'ECOIN'
	},
	{
		'id': 18371,
		'name': 'ClaimSwap',
		'slug': 'claimswap',
		'symbol': 'CLA'
	},
	{
		'id': 5538,
		'name': 'Buzzshow',
		'slug': 'buzzshow',
		'symbol': 'GLDY'
	},
	{
		'id': 10463,
		'name': 'Anypad',
		'slug': 'anypad',
		'symbol': 'APAD'
	},
	{
		'id': 11041,
		'name': 'Kross Chain LaunchPad',
		'slug': 'kucoin-launchpad',
		'symbol': 'KCLP'
	},
	{
		'id': 14649,
		'name': 'GemUni',
		'slug': 'gemuni',
		'symbol': 'GENI'
	},
	{
		'id': 20763,
		'name': 'LooksCoin',
		'slug': 'lookscoin',
		'symbol': 'LOOK'
	},
	{
		'id': 14800,
		'name': 'Anomus',
		'slug': 'anomus',
		'symbol': 'ANOM'
	},
	{
		'id': 10814,
		'name': 'One Basis',
		'slug': 'one-basis-cash',
		'symbol': 'OBS'
	},
	{
		'id': 10325,
		'name': 'Safe Energy',
		'slug': 'safe-energy',
		'symbol': 'EnergyX'
	},
	{
		'id': 13432,
		'name': 'DRIVENx',
		'slug': 'drivenx',
		'symbol': 'DVX'
	},
	{
		'id': 11109,
		'name': 'Electric Cash',
		'slug': 'electric-cash',
		'symbol': 'ELCASH'
	},
	{
		'id': 19831,
		'name': 'Cashera',
		'slug': 'cashera',
		'symbol': 'CSR'
	},
	{
		'id': 12109,
		'name': 'Poof.cash',
		'slug': 'poof-cash',
		'symbol': 'POOF'
	},
	{
		'id': 18666,
		'name': 'Ideamarket',
		'slug': 'ideamarket',
		'symbol': 'IMO'
	},
	{
		'id': 21199,
		'name': 'Surf Live',
		'slug': 'surf-live',
		'symbol': 'SURF'
	},
	{
		'id': 22480,
		'name': 'ETHW ID',
		'slug': 'ethw-id',
		'symbol': 'EID'
	},
	{
		'id': 18084,
		'name': 'MinerBlox',
		'slug': 'minerblox',
		'symbol': 'MBLOX'
	},
	{
		'id': 17515,
		'name': 'CitaDAO',
		'slug': 'citadao',
		'symbol': 'KNIGHT'
	},
	{
		'id': 23276,
		'name': 'Quieroganar Audits',
		'slug': 'quieroganar-audits',
		'symbol': 'QG'
	},
	{
		'id': 19106,
		'name': 'Bitcoin City Coin',
		'slug': 'bitcoin-city-coin',
		'symbol': 'BCITY'
	},
	{
		'id': 18814,
		'name': 'MetaUFO',
		'slug': 'metaufo',
		'symbol': 'METAUFO'
	},
	{
		'id': 14834,
		'name': 'Crypto Shield',
		'slug': 'crypto-shield',
		'symbol': 'SHIELD'
	},
	{
		'id': 20807,
		'name': 'My Liquidity Partner',
		'slug': 'my-liquidity-partner',
		'symbol': 'MLP'
	},
	{
		'id': 20976,
		'name': 'ROBOCOCK UWU',
		'slug': 'robocock-uwu',
		'symbol': 'GKEN'
	},
	{
		'id': 21033,
		'name': 'ALL BEST ICO SATOSHI',
		'slug': 'all-best-ico-satoshi',
		'symbol': 'SATSALL'
	},
	{
		'id': 20483,
		'name': 'Athos Finance',
		'slug': 'athos-finance',
		'symbol': 'ATH'
	},
	{
		'id': 19741,
		'name': 'Movey Token',
		'slug': 'movey-token',
		'symbol': 'MOVEY'
	},
	{
		'id': 19566,
		'name': 'Forge Finance',
		'slug': 'forge-finance',
		'symbol': 'FORGE'
	},
	{
		'id': 15346,
		'name': 'DogyRace',
		'slug': 'dogyrace',
		'symbol': 'DOR'
	},
	{
		'id': 13987,
		'name': 'DYOR Token',
		'slug': 'dyor-token',
		'symbol': 'DYOR'
	},
	{
		'id': 17831,
		'name': 'Deliq Finance',
		'slug': 'deliq-finance',
		'symbol': 'DLQ'
	},
	{
		'id': 15107,
		'name': 'Regular Presale',
		'slug': 'regular-presale',
		'symbol': 'REGU'
	},
	{
		'id': 18810,
		'name': 'Hoppers Game',
		'slug': 'hoppers-game',
		'symbol': 'FLY'
	},
	{
		'id': 18192,
		'name': 'Pirate X Pirate',
		'slug': 'pirate-x-pirate',
		'symbol': 'PXP'
	},
	{
		'id': 17962,
		'name': 'Binance Multi-Chain Capital',
		'slug': 'binance-multi-chain-capital',
		'symbol': 'BMCC'
	},
	{
		'id': 17223,
		'name': 'TigerQueen',
		'slug': 'tigerqueen',
		'symbol': 'TQUEEN'
	},
	{
		'id': 6761,
		'name': 'ReFork',
		'slug': 'refork',
		'symbol': 'EFK'
	},
	{
		'id': 10482,
		'name': 'BULL FINANCE',
		'slug': 'bull-finance',
		'symbol': 'BULL'
	},
	{
		'id': 11380,
		'name': 'Dogecoin 2.0',
		'slug': 'dogecoin-2',
		'symbol': 'DOGE2'
	},
	{
		'id': 19181,
		'name': 'Kyte.One',
		'slug': 'kyte-one',
		'symbol': 'KTE'
	},
	{
		'id': 23052,
		'name': '2023 MOON',
		'slug': '2023-moon',
		'symbol': '2023MOON'
	},
	{
		'id': 18929,
		'name': 'MjackSwap',
		'slug': 'mjackswap',
		'symbol': 'MJACK'
	},
	{
		'id': 19329,
		'name': 'Polychain Monsters Land Genesis Token',
		'slug': 'polychain-monsters-land',
		'symbol': 'PMLG'
	},
	{
		'id': 10552,
		'name': 'DUKE INU TOKEN',
		'slug': 'duke-inu-token',
		'symbol': 'DUKE'
	},
	{
		'id': 7414,
		'name': 'Behodler',
		'slug': 'beholder',
		'symbol': 'EYE'
	},
	{
		'id': 14230,
		'name': 'Nora Token',
		'slug': 'nora-token',
		'symbol': 'NRA'
	},
	{
		'id': 9326,
		'name': 'ROPE Token',
		'slug': 'rope-token',
		'symbol': 'ROPE'
	},
	{
		'id': 20405,
		'name': 'Pembrock',
		'slug': 'pembrock',
		'symbol': 'PEM'
	},
	{
		'id': 14224,
		'name': 'Dogggo',
		'slug': 'dogggo',
		'symbol': 'DOGGGO'
	},
	{
		'id': 15985,
		'name': 'Mongoose',
		'slug': 'mongoose',
		'symbol': 'MONGOOSE'
	},
	{
		'id': 10195,
		'name': 'UltraSafe Token',
		'slug': 'ultrasafe',
		'symbol': 'ULTRA'
	},
	{
		'id': 18304,
		'name': 'Survive',
		'slug': 'survive',
		'symbol': 'SURV'
	},
	{
		'id': 11797,
		'name': 'Cricket Foundation',
		'slug': 'cricket-foundation',
		'symbol': 'CRIC'
	},
	{
		'id': 22210,
		'name': 'Optimus OPT3',
		'slug': 'optimus-opt3',
		'symbol': 'OPT3'
	},
	{
		'id': 20644,
		'name': 'Cronospad',
		'slug': 'cronospad',
		'symbol': 'CPAD'
	},
	{
		'id': 5776,
		'name': 'tBTC',
		'slug': 'tbtc',
		'symbol': 'TBTC'
	},
	{
		'id': 9231,
		'name': 'Hungry Bear',
		'slug': 'hungry-bear',
		'symbol': 'HUNGRY'
	},
	{
		'id': 14259,
		'name': 'KittyShiba',
		'slug': 'kittyshiba',
		'symbol': 'KSHIBA'
	},
	{
		'id': 9759,
		'name': 'BSC Gold',
		'slug': 'bsc-gold',
		'symbol': 'BSCGOLD'
	},
	{
		'id': 19512,
		'name': 'WOLF PUPS',
		'slug': 'wolf-pups-new',
		'symbol': 'WOLFIES'
	},
	{
		'id': 20629,
		'name': 'beFITTER',
		'slug': 'befitter-token',
		'symbol': 'HEE'
	},
	{
		'id': 16947,
		'name': 'Pomicoin',
		'slug': 'pomicoin',
		'symbol': 'POMI'
	},
	{
		'id': 9766,
		'name': 'Rentible',
		'slug': 'rentible',
		'symbol': 'RNB'
	},
	{
		'id': 19687,
		'name': 'DragonMaster',
		'slug': 'dragonmaster-dmt',
		'symbol': 'DMT'
	},
	{
		'id': 15574,
		'name': 'KaraStar UMY',
		'slug': 'karastar-umy',
		'symbol': 'UMY'
	},
	{
		'id': 9086,
		'name': 'Minter HUB',
		'slug': 'minter-hub',
		'symbol': 'HUB'
	},
	{
		'id': 13403,
		'name': 'Howl City',
		'slug': 'howl-city',
		'symbol': 'HWL'
	},
	{
		'id': 9657,
		'name': 'Pinknode',
		'slug': 'pinknode',
		'symbol': 'PNODE'
	},
	{
		'id': 12385,
		'name': 'Solster Finance',
		'slug': 'solster-finance',
		'symbol': 'STR'
	},
	{
		'id': 16222,
		'name': 'MotionWreck Games',
		'slug': 'motionwreck-games',
		'symbol': 'MWG'
	},
	{
		'id': 19552,
		'name': 'WOW-token',
		'slug': 'wow-token',
		'symbol': 'WOW'
	},
	{
		'id': 14976,
		'name': 'ROBOT SHIB',
		'slug': 'robot-shib',
		'symbol': 'RSHIB'
	},
	{
		'id': 21942,
		'name': 'Unkai',
		'slug': 'unkai',
		'symbol': 'UNKAI'
	},
	{
		'id': 12242,
		'name': 'Grape Network',
		'slug': 'grape-network',
		'symbol': 'GRAPE'
	},
	{
		'id': 12581,
		'name': 'CZodiac Farming Token',
		'slug': 'czfarm',
		'symbol': 'CZF'
	},
	{
		'id': 14027,
		'name': 'Snowbank',
		'slug': 'snowbank',
		'symbol': 'SB'
	},
	{
		'id': 22273,
		'name': 'PiConnect',
		'slug': 'piconnect',
		'symbol': 'PICO'
	},
	{
		'id': 14263,
		'name': 'Froggies Token',
		'slug': 'froggies',
		'symbol': 'FRGST'
	},
	{
		'id': 12536,
		'name': 'Decentralized Community Investment Protocol',
		'slug': 'decentralized-community-investment-protocol',
		'symbol': 'DCIP'
	},
	{
		'id': 12670,
		'name': 'Surge Inu',
		'slug': 'surge-inu',
		'symbol': 'SURGE'
	},
	{
		'id': 12784,
		'name': 'Red Floki',
		'slug': 'red-floki',
		'symbol': 'REDFLOKI'
	},
	{
		'id': 20706,
		'name': 'SaharaDAO',
		'slug': 'saharadao',
		'symbol': 'MNG'
	},
	{
		'id': 18597,
		'name': 'Travel Care',
		'slug': 'travel-care-v2',
		'symbol': 'TRAVEL'
	},
	{
		'id': 14973,
		'name': 'IXO',
		'slug': 'ixo',
		'symbol': 'IXO'
	},
	{
		'id': 12526,
		'name': 'USD Open Dollar',
		'slug': 'usd-open-dollar',
		'symbol': 'USDO'
	},
	{
		'id': 18659,
		'name': 'CyBloc Battery Token',
		'slug': 'cybloc-battery-token',
		'symbol': 'CBT'
	},
	{
		'id': 11265,
		'name': 'NFTBlackMarket',
		'slug': 'nftblackmarket',
		'symbol': 'NBM'
	},
	{
		'id': 20545,
		'name': 'Shiny Ore',
		'slug': 'shiny-ore',
		'symbol': 'SO'
	},
	{
		'id': 3018,
		'name': 'Kalkulus',
		'slug': 'kalkulus',
		'symbol': 'KLKS'
	},
	{
		'id': 16672,
		'name': 'The Essential Coin',
		'slug': 'the-essential-coin',
		'symbol': 'ESC'
	},
	{
		'id': 21167,
		'name': 'Based Finance Next Gen',
		'slug': 'based-finance-next-gen',
		'symbol': 'OBOL'
	},
	{
		'id': 9632,
		'name': 'UMI',
		'slug': 'umi',
		'symbol': 'UMI'
	},
	{
		'id': 12347,
		'name': 'Dough',
		'slug': 'dough',
		'symbol': 'DOUGH'
	},
	{
		'id': 13924,
		'name': 'Urubit',
		'slug': 'urubit',
		'symbol': 'URUB'
	},
	{
		'id': 9479,
		'name': 'KSwap',
		'slug': 'kswap',
		'symbol': 'KST'
	},
	{
		'id': 10555,
		'name': 'Canary',
		'slug': 'canary',
		'symbol': 'CNR'
	},
	{
		'id': 12330,
		'name': 'Envelop',
		'slug': 'envelop',
		'symbol': 'NIFTSY'
	},
	{
		'id': 13667,
		'name': 'POLYX',
		'slug': 'polyx',
		'symbol': 'PXT'
	},
	{
		'id': 18539,
		'name': 'Homerun Token',
		'slug': 'homerun-token',
		'symbol': 'HMRN'
	},
	{
		'id': 19617,
		'name': 'World of Masters',
		'slug': 'world-of-masters',
		'symbol': 'WOFM'
	},
	{
		'id': 9158,
		'name': 'moonwolf.io',
		'slug': 'moonwolf',
		'symbol': 'WOLF'
	},
	{
		'id': 22339,
		'name': 'Hayya Qatar',
		'slug': 'hayya-qatar',
		'symbol': 'HQR'
	},
	{
		'id': 21386,
		'name': 'Token Runner',
		'slug': 'token-runner',
		'symbol': 'TKRN'
	},
	{
		'id': 20802,
		'name': 'AstroGrow',
		'slug': 'astrogrow',
		'symbol': 'ATG'
	},
	{
		'id': 18276,
		'name': 'Metabolic',
		'slug': 'metabolic',
		'symbol': 'MTBC'
	},
	{
		'id': 17994,
		'name': 'pFTM',
		'slug': 'pftm',
		'symbol': 'PFTM'
	},
	{
		'id': 19043,
		'name': 'Cylum Finance',
		'slug': 'cylum-finance',
		'symbol': 'CYM'
	},
	{
		'id': 20539,
		'name': 'One Pearl',
		'slug': 'one-pearl',
		'symbol': '(Δ)'
	},
	{
		'id': 12739,
		'name': 'Revolotto',
		'slug': 'revolotto',
		'symbol': 'RVL'
	},
	{
		'id': 16273,
		'name': 'PLUSPAD',
		'slug': 'pluspad',
		'symbol': 'PLUS'
	},
	{
		'id': 13479,
		'name': 'WePiggy Coin',
		'slug': 'wepiggy',
		'symbol': 'WPC'
	},
	{
		'id': 18266,
		'name': 'KoaCombat',
		'slug': 'koakombat',
		'symbol': 'KOACOMBAT'
	},
	{
		'id': 22286,
		'name': 'FROGGO',
		'slug': 'froggo',
		'symbol': 'FROGGO'
	},
	{
		'id': 13308,
		'name': 'Carbon',
		'slug': 'carb',
		'symbol': 'CARB'
	},
	{
		'id': 7301,
		'name': 'AurusX',
		'slug': 'aurusx',
		'symbol': 'AX'
	},
	{
		'id': 15221,
		'name': 'WidiLand',
		'slug': 'widiland',
		'symbol': 'WIDI'
	},
	{
		'id': 21909,
		'name': 'JPGold Coin',
		'slug': 'jpgold-coin',
		'symbol': 'JPGC'
	},
	{
		'id': 20047,
		'name': 'Echelon',
		'slug': 'echelon',
		'symbol': 'ECH'
	},
	{
		'id': 16525,
		'name': 'Scarab Finance',
		'slug': 'scarab-finance',
		'symbol': 'SCARAB'
	},
	{
		'id': 18985,
		'name': 'Random',
		'slug': 'random-token',
		'symbol': 'RNDM'
	},
	{
		'id': 5518,
		'name': 'Torex',
		'slug': 'torex',
		'symbol': 'TOR'
	},
	{
		'id': 12607,
		'name': 'Solberg',
		'slug': 'solberg',
		'symbol': 'SLB'
	},
	{
		'id': 16981,
		'name': 'Moola Celo',
		'slug': 'moola-celo',
		'symbol': 'mCELO'
	},
	{
		'id': 14685,
		'name': 'Heros Token',
		'slug': 'hero-inu',
		'symbol': 'HEROS'
	},
	{
		'id': 16215,
		'name': 'CryptoGuards',
		'slug': 'cryptoguards',
		'symbol': 'CGAR'
	},
	{
		'id': 18779,
		'name': 'Alpha Capital (New)',
		'slug': 'alpha-brain-capital-2',
		'symbol': 'ACAP'
	},
	{
		'id': 5165,
		'name': 'Freight Trust & Clearing Network',
		'slug': 'freight-trust-clearing-network',
		'symbol': 'EDI'
	},
	{
		'id': 13106,
		'name': 'Cougar',
		'slug': 'cougar',
		'symbol': 'CGS'
	},
	{
		'id': 6490,
		'name': 'ITAM Games',
		'slug': 'itam-games',
		'symbol': 'ITAM'
	},
	{
		'id': 5404,
		'name': 'Bitcurate',
		'slug': 'bitcurate',
		'symbol': 'BTCR'
	},
	{
		'id': 21855,
		'name': 'ShibChain',
		'slug': 'shibchain',
		'symbol': 'SC'
	},
	{
		'id': 20900,
		'name': 'ThreeOh DAO',
		'slug': 'threeoh-dao',
		'symbol': '3OH'
	},
	{
		'id': 20876,
		'name': 'Artificial Intelligence Technology Network',
		'slug': 'artificial-intelligence-technology-network',
		'symbol': 'AITN'
	},
	{
		'id': 21832,
		'name': 'HubGame',
		'slug': 'hubgame',
		'symbol': 'HUB'
	},
	{
		'id': 16769,
		'name': 'Sunflower Farm',
		'slug': 'sunflower-farm',
		'symbol': 'SFF'
	},
	{
		'id': 20933,
		'name': 'New Community Luna',
		'slug': 'new-community-luna',
		'symbol': '$CLUNA'
	},
	{
		'id': 22990,
		'name': 'Tsuki no usagi',
		'slug': 'tsuki-no-usagi',
		'symbol': 'GYOKUTO'
	},
	{
		'id': 21754,
		'name': 'DigiSwap',
		'slug': 'digiswap',
		'symbol': 'DIGIS'
	},
	{
		'id': 9193,
		'name': 'Prostarter',
		'slug': 'prostarter',
		'symbol': 'PROT'
	},
	{
		'id': 22575,
		'name': 'ZillaCoin',
		'slug': 'zillacoin',
		'symbol': 'ZILLACOIN'
	},
	{
		'id': 22921,
		'name': 'Pi Protocol',
		'slug': 'pi-protocol',
		'symbol': 'PIP'
	},
	{
		'id': 14645,
		'name': 'EFUN',
		'slug': 'e-fun-token',
		'symbol': 'EFUN'
	},
	{
		'id': 11105,
		'name': 'PearZap',
		'slug': 'pearzap',
		'symbol': 'PEAR'
	},
	{
		'id': 23133,
		'name': 'Y2B Finance',
		'slug': 'y2b-finance',
		'symbol': 'Y2B'
	},
	{
		'id': 16750,
		'name': 'Dogeon',
		'slug': 'dogeon',
		'symbol': 'DON'
	},
	{
		'id': 11082,
		'name': 'Arena Token',
		'slug': 'arena-token',
		'symbol': 'ARENA'
	},
	{
		'id': 20510,
		'name': 'Defilancer token',
		'slug': 'defilancer-token',
		'symbol': 'DEFILANCER'
	},
	{
		'id': 22167,
		'name': 'GrapeVine',
		'slug': 'grapevine',
		'symbol': 'XGRAPE'
	},
	{
		'id': 20198,
		'name': 'LocoMeta',
		'slug': 'locometa',
		'symbol': 'LOCO'
	},
	{
		'id': 14811,
		'name': 'Netcoincapital',
		'slug': 'netcoincapital',
		'symbol': 'NCC'
	},
	{
		'id': 22775,
		'name': 'CR7DAO',
		'slug': 'cr7dao',
		'symbol': 'CR7'
	},
	{
		'id': 19658,
		'name': 'The Bend',
		'slug': 'the-bend',
		'symbol': 'BEND'
	},
	{
		'id': 21142,
		'name': 'ROIMA INC TOKEN',
		'slug': 'roima-inc-token',
		'symbol': 'RMAI'
	},
	{
		'id': 18162,
		'name': 'Choice Coin',
		'slug': 'choice-coin',
		'symbol': 'CHOICE'
	},
	{
		'id': 17025,
		'name': 'MarsColony',
		'slug': 'marscolony',
		'symbol': 'CLNY'
	},
	{
		'id': 14169,
		'name': 'Spookeletons Token',
		'slug': 'spookeletons-token',
		'symbol': 'SPKL'
	},
	{
		'id': 8569,
		'name': 'Libonomy',
		'slug': 'libonomy',
		'symbol': 'LBY'
	},
	{
		'id': 5184,
		'name': 'Bitcoin Pro',
		'slug': 'bitcoin-pro',
		'symbol': 'BTCP'
	},
	{
		'id': 19766,
		'name': 'Dante Finance',
		'slug': 'dante-finance',
		'symbol': 'DANTE'
	},
	{
		'id': 13336,
		'name': 'Newsolution2.0',
		'slug': 'newsolution-token',
		'symbol': 'NSTE'
	},
	{
		'id': 20936,
		'name': 'Hiroki',
		'slug': 'hiroki',
		'symbol': 'HIRO'
	},
	{
		'id': 20934,
		'name': 'MXM Token',
		'slug': 'mxm-token',
		'symbol': 'MXM'
	},
	{
		'id': 22079,
		'name': 'Presale.World',
		'slug': 'presale-world',
		'symbol': 'PRESALE'
	},
	{
		'id': 12494,
		'name': 'Melo Token',
		'slug': 'melo-token',
		'symbol': 'MELO'
	},
	{
		'id': 10668,
		'name': 'Mac&Cheese',
		'slug': 'mac-and-cheese-finance',
		'symbol': 'XVMC'
	},
	{
		'id': 8156,
		'name': 'GGDApp',
		'slug': 'ggdapp',
		'symbol': 'GGTK'
	},
	{
		'id': 3731,
		'name': 'PlayChip',
		'slug': 'playchip',
		'symbol': 'PLA'
	},
	{
		'id': 22739,
		'name': 'LOCKER Token',
		'slug': 'locker-token',
		'symbol': 'LKT'
	},
	{
		'id': 14730,
		'name': 'Everlens',
		'slug': 'everlens',
		'symbol': 'ELEN'
	},
	{
		'id': 22619,
		'name': 'Tip Me A Coffee',
		'slug': 'tip-me-a-coffee',
		'symbol': 'TMAC'
	},
	{
		'id': 15094,
		'name': 'Coinflect',
		'slug': 'coinflect',
		'symbol': 'WCFLT'
	},
	{
		'id': 12981,
		'name': 'BHAX Token',
		'slug': 'bithashex',
		'symbol': 'BHAX'
	},
	{
		'id': 14321,
		'name': 'NFTFundArt',
		'slug': 'nftfundart',
		'symbol': 'NFA'
	},
	{
		'id': 12537,
		'name': 'PolyBeta Finance',
		'slug': 'polybeta-finance',
		'symbol': 'BETA'
	},
	{
		'id': 13391,
		'name': 'IoTex Pad',
		'slug': 'iotex-pad',
		'symbol': 'TEX'
	},
	{
		'id': 18933,
		'name': 'Class Coin',
		'slug': 'class-coin',
		'symbol': 'CLASS'
	},
	{
		'id': 9082,
		'name': 'Swampy',
		'slug': 'swampy',
		'symbol': 'SWAMP'
	},
	{
		'id': 19825,
		'name': 'Firework Games',
		'slug': 'firework-games',
		'symbol': 'FIRE'
	},
	{
		'id': 14046,
		'name': 'BlueSparrow Token (Old)',
		'slug': 'bluesparrow-token',
		'symbol': 'BLUESPARROW'
	},
	{
		'id': 22135,
		'name': 'Texas Protocol',
		'slug': 'texas-protocol',
		'symbol': 'TXS'
	},
	{
		'id': 21599,
		'name': 'Octorand',
		'slug': 'octorand',
		'symbol': 'OCTO'
	},
	{
		'id': 15639,
		'name': 'Synex Coin',
		'slug': 'synex-coin',
		'symbol': 'MINECRAFT'
	},
	{
		'id': 14869,
		'name': 'The Moon Shiba',
		'slug': 'the-moon-shiba',
		'symbol': 'MOONSHIB'
	},
	{
		'id': 22087,
		'name': 'BullDog Inu',
		'slug': 'bulldog-inu-bsc',
		'symbol': 'BULL'
	},
	{
		'id': 22599,
		'name': 'Arnoya classic',
		'slug': 'arnoya-classic',
		'symbol': 'ARNC'
	},
	{
		'id': 2724,
		'name': 'Zippie',
		'slug': 'zippie',
		'symbol': 'ZIPT'
	},
	{
		'id': 14923,
		'name': 'DeFlyBall',
		'slug': 'deflyball',
		'symbol': 'DEFLY'
	},
	{
		'id': 22582,
		'name': 'Forever Burn',
		'slug': 'forever-burn',
		'symbol': 'FBURN'
	},
	{
		'id': 13873,
		'name': 'Tanks For Playing',
		'slug': 'tanks-for-playing',
		'symbol': 'TANKS'
	},
	{
		'id': 17235,
		'name': 'BNBTiger',
		'slug': 'bnbtiger',
		'symbol': 'BNBTIGER'
	},
	{
		'id': 13841,
		'name': 'Diviner Protocol',
		'slug': 'diviner-protocol',
		'symbol': 'DPT'
	},
	{
		'id': 8131,
		'name': 'Curio Governance',
		'slug': 'curio-governance',
		'symbol': 'CGT'
	},
	{
		'id': 10676,
		'name': 'Rikkei Finance',
		'slug': 'rikkei-finance',
		'symbol': 'RIFI'
	},
	{
		'id': 22874,
		'name': 'STRX Finance',
		'slug': 'strx-finance',
		'symbol': 'SFI'
	},
	{
		'id': 13473,
		'name': 'Apricot Finance',
		'slug': 'apricot',
		'symbol': 'APT'
	},
	{
		'id': 10081,
		'name': 'SafeMoonCash',
		'slug': 'safemooncash',
		'symbol': 'SAFEMOONCASH'
	},
	{
		'id': 18177,
		'name': 'MyTVchain [New]',
		'slug': 'mytvchain-2',
		'symbol': 'MYTV'
	},
	{
		'id': 21844,
		'name': 'Prime Chain',
		'slug': 'prime-chain',
		'symbol': 'PMC'
	},
	{
		'id': 18725,
		'name': 'Excalibur',
		'slug': 'excalibur-exchange',
		'symbol': 'EXC'
	},
	{
		'id': 14551,
		'name': 'ok.lets.go.',
		'slug': 'ok-lets-go',
		'symbol': 'OKLG'
	},
	{
		'id': 22115,
		'name': 'Z Versus Project',
		'slug': 'z-versus-project',
		'symbol': 'ZVERSUS'
	},
	{
		'id': 17829,
		'name': 'DEFIAI',
		'slug': 'defiai',
		'symbol': 'DFAI'
	},
	{
		'id': 17476,
		'name': 'Trillium',
		'slug': 'trillium',
		'symbol': 'TT'
	},
	{
		'id': 21512,
		'name': 'DollarBack',
		'slug': 'dollarback',
		'symbol': 'BACK'
	},
	{
		'id': 13544,
		'name': 'Rogue Doge',
		'slug': 'rogue-doge',
		'symbol': 'ROGE'
	},
	{
		'id': 16495,
		'name': 'Pagan Gods',
		'slug': 'pagan-gods',
		'symbol': 'FUR'
	},
	{
		'id': 16676,
		'name': 'KlayFi Finance',
		'slug': 'klayfi-finance',
		'symbol': 'KFI'
	},
	{
		'id': 6935,
		'name': 'Fiscus.fyi',
		'slug': 'fiscus-fyi',
		'symbol': 'FFYI'
	},
	{
		'id': 5702,
		'name': 'MONNOS',
		'slug': 'monnos',
		'symbol': 'MNS'
	},
	{
		'id': 17748,
		'name': 'Dig Chain',
		'slug': 'dig-chain',
		'symbol': 'DIG'
	},
	{
		'id': 19703,
		'name': 'Moon Robots',
		'slug': 'moon-robots',
		'symbol': 'OIL'
	},
	{
		'id': 20759,
		'name': 'Source Token',
		'slug': 'source-token',
		'symbol': 'SRCX'
	},
	{
		'id': 18017,
		'name': 'Infinity Arena',
		'slug': 'infinity-arena',
		'symbol': 'INAZ'
	},
	{
		'id': 19098,
		'name': 'LeisurePay',
		'slug': 'leisurepay',
		'symbol': 'LPY'
	},
	{
		'id': 16592,
		'name': 'MOTHEREARTH',
		'slug': 'motherearth',
		'symbol': 'MOT'
	},
	{
		'id': 21650,
		'name': 'Golddoge Sachs',
		'slug': 'golddoge-sachs',
		'symbol': 'GDS'
	},
	{
		'id': 18460,
		'name': 'SamuraiBattle',
		'slug': 'samuraibattle',
		'symbol': 'SMB'
	},
	{
		'id': 15455,
		'name': 'ImpactXP',
		'slug': 'impactxp',
		'symbol': 'IMPACTXP'
	},
	{
		'id': 7764,
		'name': 'Simbcoin Swap',
		'slug': 'simbcoin-swap',
		'symbol': 'SMBSWAP'
	},
	{
		'id': 16720,
		'name': 'Shiro Inu',
		'slug': 'shiro-inu',
		'symbol': 'SHIR'
	},
	{
		'id': 13920,
		'name': 'Popcorn',
		'slug': 'popcorn-network',
		'symbol': 'POP'
	},
	{
		'id': 22440,
		'name': 'SpaceRobotDao',
		'slug': 'spacerobotdao',
		'symbol': 'SRD'
	},
	{
		'id': 19419,
		'name': 'Green Meta',
		'slug': 'green-beli-gmeta',
		'symbol': 'GMETA'
	},
	{
		'id': 22357,
		'name': 'BOXCASINO',
		'slug': 'boxcasino',
		'symbol': 'BOXC'
	},
	{
		'id': 17325,
		'name': 'ByteEx',
		'slug': 'byteex',
		'symbol': 'BX'
	},
	{
		'id': 8865,
		'name': 'vBSWAP',
		'slug': 'vbswap',
		'symbol': 'VBSWAP'
	},
	{
		'id': 16582,
		'name': 'SouloCoin',
		'slug': 'soulocoin',
		'symbol': 'SOULO'
	},
	{
		'id': 22979,
		'name': 'Dogepad Finance',
		'slug': 'dogepad-finance',
		'symbol': 'DPF'
	},
	{
		'id': 18921,
		'name': 'Ecowatt',
		'slug': 'ecowatt',
		'symbol': 'EWT'
	},
	{
		'id': 10257,
		'name': 'Shibaken Finance',
		'slug': 'shibaken-finance',
		'symbol': 'SHIBAKEN'
	},
	{
		'id': 12060,
		'name': 'XTblock',
		'slug': 'xtblock',
		'symbol': 'XTT-B20'
	},
	{
		'id': 18100,
		'name': 'Battle Inu',
		'slug': 'battle-inu',
		'symbol': 'BINU'
	},
	{
		'id': 19764,
		'name': 'MAIN',
		'slug': 'main-community',
		'symbol': 'MAIN'
	},
	{
		'id': 14717,
		'name': 'JP3Gvault',
		'slug': 'jpegvault',
		'symbol': 'JP3G'
	},
	{
		'id': 4909,
		'name': 'Merge',
		'slug': 'project-merge',
		'symbol': 'MERGE'
	},
	{
		'id': 12818,
		'name': 'gotEM',
		'slug': 'gotem',
		'symbol': 'GOTEM'
	},
	{
		'id': 10120,
		'name': 'Chocoswap',
		'slug': 'chocoswap',
		'symbol': 'VNLA'
	},
	{
		'id': 10109,
		'name': 'Feeder.finance',
		'slug': 'feeder-finance',
		'symbol': 'FEED'
	},
	{
		'id': 15652,
		'name': 'GOGOcoin',
		'slug': 'gogocoin',
		'symbol': 'GOGO'
	},
	{
		'id': 12695,
		'name': 'PolyPup Finance',
		'slug': 'polypup-finance',
		'symbol': 'COLLAR'
	},
	{
		'id': 16932,
		'name': 'PoorQuack',
		'slug': 'poorquack-com',
		'symbol': 'POOR'
	},
	{
		'id': 14591,
		'name': 'Brinc.fi',
		'slug': 'brinc-fi',
		'symbol': 'BRC'
	},
	{
		'id': 9182,
		'name': 'ZilPay Wallet / Dragon Zil Token',
		'slug': 'zilpay-wallet',
		'symbol': 'ZLP'
	},
	{
		'id': 15411,
		'name': 'New Year Token',
		'slug': 'new-year-token',
		'symbol': 'NYT'
	},
	{
		'id': 2876,
		'name': 'Ternio',
		'slug': 'ternio',
		'symbol': 'TERN'
	},
	{
		'id': 18783,
		'name': 'Dx Spot',
		'slug': 'dx-spot',
		'symbol': 'DXS'
	},
	{
		'id': 22947,
		'name': 'StableFund USD',
		'slug': 'stablefund-usd',
		'symbol': 'SFUSD'
	},
	{
		'id': 17851,
		'name': 'IceCream Shares',
		'slug': 'icecream-shares',
		'symbol': 'CSHARE'
	},
	{
		'id': 22010,
		'name': 'Iris Ecosystem',
		'slug': 'iris-ecosystem',
		'symbol': 'IRISTOKEN'
	},
	{
		'id': 19052,
		'name': 'UpDeFi',
		'slug': 'updefi',
		'symbol': 'UP'
	},
	{
		'id': 20797,
		'name': 'CZbusd',
		'slug': 'czbusd',
		'symbol': 'CZBUSD'
	},
	{
		'id': 1159,
		'name': 'SaluS',
		'slug': 'salus',
		'symbol': 'SLS'
	},
	{
		'id': 19997,
		'name': 'Shiba Universe',
		'slug': 'shiba-universe',
		'symbol': 'SHIBU'
	},
	{
		'id': 22287,
		'name': 'France Fan Token',
		'slug': 'france-fan-token',
		'symbol': 'FRA'
	},
	{
		'id': 5513,
		'name': 'Crypto Holding Frank Token',
		'slug': 'crypto-holding-frank-token',
		'symbol': 'CHFT'
	},
	{
		'id': 12423,
		'name': 'Litherium',
		'slug': 'litherium',
		'symbol': 'LITH'
	},
	{
		'id': 16128,
		'name': 'Predictcoin',
		'slug': 'predictcoin',
		'symbol': 'PRED'
	},
	{
		'id': 14099,
		'name': 'Mobius Money',
		'slug': 'mobius-money',
		'symbol': 'MOBI'
	},
	{
		'id': 19389,
		'name': 'Fayre',
		'slug': 'fayre',
		'symbol': 'FAYRE'
	},
	{
		'id': 18730,
		'name': 'Xave Coin',
		'slug': 'xave-coin',
		'symbol': 'XVC'
	},
	{
		'id': 5810,
		'name': 'bZx Protocol',
		'slug': 'bzx-protocol',
		'symbol': 'BZRX'
	},
	{
		'id': 20796,
		'name': 'CZbomb',
		'slug': 'czbomb',
		'symbol': 'CZBOMB'
	},
	{
		'id': 19600,
		'name': 'AlgoDAO',
		'slug': 'algodao',
		'symbol': 'ADAO'
	},
	{
		'id': 5722,
		'name': 'HOMT',
		'slug': 'homt',
		'symbol': 'HOMT'
	},
	{
		'id': 12808,
		'name': 'GameStar',
		'slug': 'gamestar',
		'symbol': 'GMS'
	},
	{
		'id': 21682,
		'name': 'BeagleInu',
		'slug': 'beagleinu',
		'symbol': 'BIC'
	},
	{
		'id': 17215,
		'name': 'Flag Network',
		'slug': 'flag-network',
		'symbol': 'FLAG'
	},
	{
		'id': 18181,
		'name': 'PanicSwap',
		'slug': 'panicswap',
		'symbol': 'PANIC'
	},
	{
		'id': 19411,
		'name': 'Tycoon Zone',
		'slug': 'tycoon-zone',
		'symbol': 'TYCOON'
	},
	{
		'id': 13989,
		'name': 'BabyFlokiZilla',
		'slug': 'babyflokizilla',
		'symbol': 'BABYFLOKIZILLA'
	},
	{
		'id': 16441,
		'name': 'Mound Token',
		'slug': 'mound-token',
		'symbol': 'MND'
	},
	{
		'id': 22485,
		'name': 'RODO',
		'slug': 'rodo',
		'symbol': 'RODO'
	},
	{
		'id': 18715,
		'name': 'ARize',
		'slug': 'arize',
		'symbol': 'ARZ'
	},
	{
		'id': 23028,
		'name': 'Propland',
		'slug': 'propland',
		'symbol': 'PROP'
	},
	{
		'id': 16663,
		'name': 'FADO Go',
		'slug': 'fado-go',
		'symbol': 'FADO'
	},
	{
		'id': 18178,
		'name': 'AppleSwap',
		'slug': 'appleswap-token',
		'symbol': 'APPLE'
	},
	{
		'id': 15495,
		'name': 'Bloomify',
		'slug': 'chargedefi',
		'symbol': 'CHARGE'
	},
	{
		'id': 20241,
		'name': 'X-Metaverse',
		'slug': 'x-metaverse',
		'symbol': 'XMETA'
	},
	{
		'id': 18505,
		'name': 'AmazingDoge',
		'slug': 'amazingdoge',
		'symbol': 'ADOGE'
	},
	{
		'id': 18581,
		'name': 'Zoro Inu',
		'slug': 'zoro-inu',
		'symbol': 'ZORO'
	},
	{
		'id': 12825,
		'name': 'Spinada.cash',
		'slug': 'spinada-cash',
		'symbol': 'SPIN'
	},
	{
		'id': 11790,
		'name': 'Ape In',
		'slug': 'ape-in',
		'symbol': 'APEIN'
	},
	{
		'id': 21157,
		'name': 'D-Drops',
		'slug': 'd-drops',
		'symbol': 'DOP'
	},
	{
		'id': 18639,
		'name': 'Metaverse ALL BEST ICO',
		'slug': 'metaverse-all-best-ico',
		'symbol': 'METAALLBI'
	},
	{
		'id': 18149,
		'name': 'Space Crypto (SPE)',
		'slug': 'space-crypto-spe',
		'symbol': 'SPE'
	},
	{
		'id': 19221,
		'name': 'FiboDex',
		'slug': 'fibodex',
		'symbol': 'FIBO'
	},
	{
		'id': 19581,
		'name': 'SkyBridger',
		'slug': 'skybridger',
		'symbol': 'SKBR'
	},
	{
		'id': 22374,
		'name': 'Lucky Roo',
		'slug': 'lucky-roo',
		'symbol': 'ROO'
	},
	{
		'id': 19349,
		'name': 'Algomint',
		'slug': 'gomint',
		'symbol': 'GOMINT'
	},
	{
		'id': 20519,
		'name': 'Cube Network',
		'slug': 'cube-network',
		'symbol': 'CUBE'
	},
	{
		'id': 18357,
		'name': 'InsureDAO',
		'slug': 'insuredao',
		'symbol': 'INSURE'
	},
	{
		'id': 16459,
		'name': 'Incognito',
		'slug': 'incognito',
		'symbol': 'PRV'
	},
	{
		'id': 2631,
		'name': 'ODEM',
		'slug': 'odem',
		'symbol': 'ODE'
	},
	{
		'id': 21779,
		'name': 'Shiba Classic',
		'slug': 'shibc',
		'symbol': 'SHIBC'
	},
	{
		'id': 19717,
		'name': 'CAKEPAD LaunchPAD',
		'slug': 'cakepad',
		'symbol': 'CKP'
	},
	{
		'id': 14850,
		'name': 'Buff Samo',
		'slug': 'buff-samo',
		'symbol': 'BSAMO'
	},
	{
		'id': 14198,
		'name': 'BabyEthereum',
		'slug': 'babyethereum',
		'symbol': 'BBETH'
	},
	{
		'id': 11915,
		'name': 'Binopoly',
		'slug': 'binopoly',
		'symbol': 'BINO'
	},
	{
		'id': 22060,
		'name': 'Bontecoin',
		'slug': 'bontecoin',
		'symbol': 'BONTE'
	},
	{
		'id': 22215,
		'name': 'CrazySharo',
		'slug': 'crazysharo',
		'symbol': 'SHARO'
	},
	{
		'id': 11486,
		'name': 'WifeDoge',
		'slug': 'wifedoge',
		'symbol': 'WIFEDOGE'
	},
	{
		'id': 21084,
		'name': 'CryptosTribe',
		'slug': 'cryptostribe',
		'symbol': 'CSTC'
	},
	{
		'id': 22348,
		'name': 'BITCOIN BOY',
		'slug': 'bitcoin-boy',
		'symbol': 'BITBOY'
	},
	{
		'id': 11868,
		'name': 'Ulti Arena',
		'slug': 'ulti-arena',
		'symbol': 'ULTI'
	},
	{
		'id': 14342,
		'name': 'DKEY BANK',
		'slug': 'dkey-bank',
		'symbol': 'DKEY'
	},
	{
		'id': 15204,
		'name': 'MetaSafeMoon',
		'slug': 'metasafemoon',
		'symbol': 'METASFM'
	},
	{
		'id': 8548,
		'name': 'Aloha',
		'slug': 'aloha',
		'symbol': 'ALOHA'
	},
	{
		'id': 15645,
		'name': 'AstroDonkey',
		'slug': 'astrodonkey',
		'symbol': 'DNKY'
	},
	{
		'id': 19931,
		'name': 'Power Of Deep Ocean',
		'slug': 'power-of-deep-ocean',
		'symbol': 'PODO'
	},
	{
		'id': 20062,
		'name': 'Asuna Hentai',
		'slug': 'asuna-hentai',
		'symbol': 'ASUNA'
	},
	{
		'id': 22675,
		'name': 'Soccers Dog',
		'slug': 'soccers-dog',
		'symbol': 'SD'
	},
	{
		'id': 15513,
		'name': 'Defi Coin',
		'slug': 'defi-coin',
		'symbol': 'DEFC'
	},
	{
		'id': 18561,
		'name': 'ASIMI',
		'slug': 'asimi',
		'symbol': 'ASIMI'
	},
	{
		'id': 16988,
		'name': 'Artemis Protocol',
		'slug': 'artemis-protocol',
		'symbol': 'MIS'
	},
	{
		'id': 18942,
		'name': 'Eterna',
		'slug': 'eterna',
		'symbol': 'EHX'
	},
	{
		'id': 20404,
		'name': 'Frog Inu',
		'slug': 'frog-inu',
		'symbol': 'FGI'
	},
	{
		'id': 21730,
		'name': 'DogeZone',
		'slug': 'dogezone',
		'symbol': 'DGZ'
	},
	{
		'id': 7199,
		'name': 'Ultra Clear',
		'slug': 'ultra-clear',
		'symbol': 'UCR'
	},
	{
		'id': 14594,
		'name': 'Maximus',
		'slug': 'maximus',
		'symbol': 'MAXI'
	},
	{
		'id': 16563,
		'name': 'Hachiko',
		'slug': 'hachiko',
		'symbol': 'HACHIKO'
	},
	{
		'id': 12351,
		'name': 'GreenZoneX',
		'slug': 'greenzonex',
		'symbol': 'GZX'
	},
	{
		'id': 12583,
		'name': 'BuffSwap',
		'slug': 'buffswap',
		'symbol': 'BUFFS'
	},
	{
		'id': 12341,
		'name': 'Tracer DAO',
		'slug': 'tracer-dao',
		'symbol': 'TCR'
	},
	{
		'id': 19470,
		'name': 'ChikinCoin',
		'slug': 'chikincoin',
		'symbol': 'CKC'
	},
	{
		'id': 16184,
		'name': 'KING FOREVER',
		'slug': 'king-forever',
		'symbol': 'KFR'
	},
	{
		'id': 21889,
		'name': 'NEWTOWNGAMING',
		'slug': 'newtowngaming',
		'symbol': 'NTG'
	},
	{
		'id': 5623,
		'name': 'Skillchain',
		'slug': 'skillchain',
		'symbol': 'SKI'
	},
	{
		'id': 5052,
		'name': 'Apple Network',
		'slug': 'apple-network',
		'symbol': 'ANK'
	},
	{
		'id': 16080,
		'name': 'Power Cash',
		'slug': 'power-cash',
		'symbol': 'PRCH'
	},
	{
		'id': 22317,
		'name': 'GO2E Token',
		'slug': 'go2e-token',
		'symbol': 'GTE'
	},
	{
		'id': 22200,
		'name': 'BUZZ',
		'slug': 'buzz',
		'symbol': 'BUZZ'
	},
	{
		'id': 17642,
		'name': 'Bankers Dream',
		'slug': 'bankers-dream',
		'symbol': 'BANK$'
	},
	{
		'id': 10350,
		'name': 'Black Eye Galaxy',
		'slug': 'black-eye-galaxy',
		'symbol': 'BYG'
	},
	{
		'id': 20543,
		'name': 'Safcoin',
		'slug': 'safcoin',
		'symbol': 'SAF'
	},
	{
		'id': 20296,
		'name': 'AtEM',
		'slug': 'atem',
		'symbol': 'ATEM'
	},
	{
		'id': 9295,
		'name': 'CLIMB TOKEN FINANCE',
		'slug': 'climb-token-finance',
		'symbol': 'CLIMB'
	},
	{
		'id': 9316,
		'name': 'Shipit pro',
		'slug': 'shipit-pro',
		'symbol': 'SHPP'
	},
	{
		'id': 9081,
		'name': 'SafeEarth',
		'slug': 'safeearth',
		'symbol': 'SAFEEARTH'
	},
	{
		'id': 10722,
		'name': 'SolanaSail',
		'slug': 'solanasail',
		'symbol': 'SAIL'
	},
	{
		'id': 20188,
		'name': 'MBD Financials',
		'slug': 'mbd-financials',
		'symbol': 'MBD'
	},
	{
		'id': 21479,
		'name': 'TOP ONE',
		'slug': 'top-one',
		'symbol': 'TOP1'
	},
	{
		'id': 11682,
		'name': 'DeathRoad',
		'slug': 'deathroad',
		'symbol': 'DRACE'
	},
	{
		'id': 15068,
		'name': 'Solar Bear',
		'slug': 'solar-bear',
		'symbol': 'SOLBEAR'
	},
	{
		'id': 22124,
		'name': 'EverChain',
		'slug': 'everchain',
		'symbol': 'EC'
	},
	{
		'id': 20895,
		'name': 'Movn',
		'slug': 'movn',
		'symbol': 'MOV'
	},
	{
		'id': 10160,
		'name': 'Swaperry',
		'slug': 'swaperry',
		'symbol': 'PERRY'
	},
	{
		'id': 5521,
		'name': 'EzyStayz',
		'slug': 'ezystayz',
		'symbol': 'EZY'
	},
	{
		'id': 19445,
		'name': 'PDDOLLAR',
		'slug': 'pddollar',
		'symbol': 'PDD'
	},
	{
		'id': 19655,
		'name': 'Lots Gaming',
		'slug': 'lots-gaming',
		'symbol': 'LTSG'
	},
	{
		'id': 18904,
		'name': 'Playground',
		'slug': 'playground',
		'symbol': 'PLAYA'
	},
	{
		'id': 17923,
		'name': 'LiveNFT',
		'slug': 'livenft',
		'symbol': 'LIVENFT'
	},
	{
		'id': 18634,
		'name': 'METAROBOX',
		'slug': 'metarobox',
		'symbol': 'RBX'
	},
	{
		'id': 20080,
		'name': 'Chaotic Finance',
		'slug': 'chaotic-finance',
		'symbol': 'CHAOS'
	},
	{
		'id': 9140,
		'name': 'Moonshot',
		'slug': 'moonshot',
		'symbol': 'MSHOT'
	},
	{
		'id': 22116,
		'name': 'AMETA',
		'slug': 'ameta',
		'symbol': '$APLUS'
	},
	{
		'id': 16635,
		'name': 'NFT4Play',
		'slug': 'nft4play',
		'symbol': '4PLAY'
	},
	{
		'id': 19446,
		'name': 'PDSHARE',
		'slug': 'pdshare',
		'symbol': 'PDSHARE'
	},
	{
		'id': 20434,
		'name': 'Sealem Token',
		'slug': 'sealem-token',
		'symbol': 'ST'
	},
	{
		'id': 21833,
		'name': 'iTube',
		'slug': 'itube',
		'symbol': 'ITUBE'
	},
	{
		'id': 6766,
		'name': 'Satopay Network',
		'slug': 'satopay-network',
		'symbol': 'STOP'
	},
	{
		'id': 19857,
		'name': 'Bitmon',
		'slug': 'bitmon',
		'symbol': 'BIT'
	},
	{
		'id': 20492,
		'name': 'LOFI',
		'slug': 'lofi',
		'symbol': 'LOFI'
	},
	{
		'id': 14895,
		'name': 'Santa Inu',
		'slug': 'santa-inu',
		'symbol': 'SANINU'
	},
	{
		'id': 10512,
		'name': 'SAFETREES',
		'slug': 'safetrees',
		'symbol': 'TREES'
	},
	{
		'id': 3432,
		'name': 'Rapids',
		'slug': 'rapids',
		'symbol': 'RPD'
	},
	{
		'id': 10900,
		'name': 'Hachiko Inu',
		'slug': 'hachikoinu',
		'symbol': 'INU'
	},
	{
		'id': 21268,
		'name': 'BikeN',
		'slug': 'biken',
		'symbol': 'BKN'
	},
	{
		'id': 20831,
		'name': 'JOCK',
		'slug': 'jock-token',
		'symbol': 'JOCK'
	},
	{
		'id': 12050,
		'name': 'Symmetric',
		'slug': 'symmetric',
		'symbol': 'SYMM'
	},
	{
		'id': 11713,
		'name': 'Shambala',
		'slug': 'shambala',
		'symbol': 'BALA'
	},
	{
		'id': 3914,
		'name': 'GlitzKoin',
		'slug': 'glitzkoin',
		'symbol': 'GTN'
	},
	{
		'id': 16940,
		'name': 'Musk Doge',
		'slug': 'musk-doge',
		'symbol': 'MKD'
	},
	{
		'id': 15826,
		'name': 'Piratera',
		'slug': 'piratera',
		'symbol': 'PIRA'
	},
	{
		'id': 18522,
		'name': 'Maneki-neko',
		'slug': 'maneki-neko',
		'symbol': 'NEKI'
	},
	{
		'id': 16237,
		'name': 'Astro Verse',
		'slug': 'astro-verse',
		'symbol': 'ASV'
	},
	{
		'id': 6600,
		'name': 'Bitalgo',
		'slug': 'bitalgo',
		'symbol': 'ALG'
	},
	{
		'id': 10570,
		'name': 'Binance Smart Chain Girl',
		'slug': 'binance-smart-chain-girl',
		'symbol': 'BSCGIRL'
	},
	{
		'id': 9765,
		'name': 'Hanzo',
		'slug': 'hanzo-inu',
		'symbol': 'HANZO'
	},
	{
		'id': 17402,
		'name': 'FishingTownGilToken',
		'slug': 'fishingtowngiltoken',
		'symbol': 'GIL'
	},
	{
		'id': 19636,
		'name': 'HODLX',
		'slug': 'hodlx',
		'symbol': 'HODLX'
	},
	{
		'id': 20780,
		'name': 'COMMUNIQUE',
		'slug': 'communique',
		'symbol': 'CMQ'
	},
	{
		'id': 6657,
		'name': 'YAM V2',
		'slug': 'yam-v2',
		'symbol': 'YAMV2'
	},
	{
		'id': 15799,
		'name': 'LIFEBIRD',
		'slug': 'lifebird',
		'symbol': 'LIFEBIRD'
	},
	{
		'id': 12774,
		'name': 'JetSwap pWings',
		'slug': 'jetswap-pwings',
		'symbol': 'pWINGS'
	},
	{
		'id': 17494,
		'name': 'SelfBar',
		'slug': 'selfbar',
		'symbol': 'SBAR'
	},
	{
		'id': 12951,
		'name': 'Riot Racers',
		'slug': 'riot-racers',
		'symbol': 'RIOT'
	},
	{
		'id': 17505,
		'name': 'DiemLibre',
		'slug': 'diemlibre',
		'symbol': 'DLB'
	},
	{
		'id': 17536,
		'name': 'Ruyi',
		'slug': 'ruyi',
		'symbol': 'RUYI'
	},
	{
		'id': 7116,
		'name': 'Crypto Accept',
		'slug': 'crypto-accept',
		'symbol': 'ACPT'
	},
	{
		'id': 20240,
		'name': '$FiPi',
		'slug': 'fipi',
		'symbol': 'FIPI'
	},
	{
		'id': 16727,
		'name': 'X',
		'slug': 'x',
		'symbol': 'X'
	},
	{
		'id': 21823,
		'name': 'Point Coin',
		'slug': 'point-coin',
		'symbol': 'POINT'
	},
	{
		'id': 17447,
		'name': 'Nova finance',
		'slug': 'nova-finance',
		'symbol': 'NOVA'
	},
	{
		'id': 19509,
		'name': 'PAYZ PAYMENTS',
		'slug': 'payz-payments',
		'symbol': 'PAYZ'
	},
	{
		'id': 12737,
		'name': 'Umi Digital',
		'slug': 'umi-digital',
		'symbol': 'UMI'
	},
	{
		'id': 10516,
		'name': 'Promise',
		'slug': 'promise',
		'symbol': 'PROMISE'
	},
	{
		'id': 9628,
		'name': 'Raptor Finance',
		'slug': 'raptor-token',
		'symbol': 'RPTR'
	},
	{
		'id': 14001,
		'name': 'RocketBUSD',
		'slug': 'rocketbusd',
		'symbol': 'RocketBUSD'
	},
	{
		'id': 11599,
		'name': 'Alita Finance',
		'slug': 'alita-finance',
		'symbol': 'ALI'
	},
	{
		'id': 17082,
		'name': 'DOGEFOOD',
		'slug': 'dogefood',
		'symbol': 'DOGEFOOD'
	},
	{
		'id': 12608,
		'name': 'Artwork NFT',
		'slug': 'artwork-nft',
		'symbol': 'ANFT'
	},
	{
		'id': 20284,
		'name': 'DriftDelivery.CC',
		'slug': 'driftdelivery-cc',
		'symbol': 'DRIFT'
	},
	{
		'id': 10050,
		'name': 'HOPPY',
		'slug': 'hoppy',
		'symbol': 'HOP'
	},
	{
		'id': 11503,
		'name': 'Manga Token',
		'slug': 'manga-token',
		'symbol': '$MANGA'
	},
	{
		'id': 12730,
		'name': 'ForceCowBoy',
		'slug': 'forcecowboy',
		'symbol': 'FCB'
	},
	{
		'id': 12063,
		'name': 'MintySwap',
		'slug': 'mintyswap',
		'symbol': 'MINTYS'
	},
	{
		'id': 7611,
		'name': 'Zuplo',
		'slug': 'zuplo',
		'symbol': 'ZLP'
	},
	{
		'id': 8244,
		'name': 'Coinstox',
		'slug': 'coinstox',
		'symbol': 'CSX'
	},
	{
		'id': 8622,
		'name': 'Bancor Governance Token',
		'slug': 'bancor-governance-token',
		'symbol': 'VBNT'
	},
	{
		'id': 20373,
		'name': 'Fat Cat Killer',
		'slug': 'fat-cat-killer',
		'symbol': 'KILLER'
	},
	{
		'id': 11247,
		'name': 'Kephi Gallery',
		'slug': 'kephi-gallery',
		'symbol': 'KPHI'
	},
	{
		'id': 11453,
		'name': 'NFT Tech',
		'slug': 'nft-tech',
		'symbol': 'NFTT'
	},
	{
		'id': 20954,
		'name': 'A-NATION',
		'slug': 'a-nation',
		'symbol': 'ANATION'
	},
	{
		'id': 22006,
		'name': 'Fenix Inu',
		'slug': 'fenix-inu',
		'symbol': 'FNIX'
	},
	{
		'id': 18809,
		'name': 'METAVILL',
		'slug': 'metavill',
		'symbol': 'MV'
	},
	{
		'id': 22805,
		'name': 'aUSDC',
		'slug': 'ausdc',
		'symbol': 'AUSDC'
	},
	{
		'id': 21587,
		'name': 'rainSPIRIT',
		'slug': 'rainspirit',
		'symbol': 'RAINSPIRIT'
	},
	{
		'id': 12833,
		'name': 'Mech Master',
		'slug': 'mech-master',
		'symbol': 'MECH'
	},
	{
		'id': 8745,
		'name': 'A2A',
		'slug': 'a2a-50x-com',
		'symbol': 'A2A'
	},
	{
		'id': 21201,
		'name': 'Miku',
		'slug': 'miku',
		'symbol': 'MIKU'
	},
	{
		'id': 16555,
		'name': 'ULAND',
		'slug': 'uland',
		'symbol': 'ULAND'
	},
	{
		'id': 21466,
		'name': 'Ninenoble',
		'slug': 'ninenoble',
		'symbol': 'NNN'
	},
	{
		'id': 21802,
		'name': 'Tazor',
		'slug': 'tazor',
		'symbol': 'TAZOR'
	},
	{
		'id': 18514,
		'name': 'Ape Universe',
		'slug': 'ape-universe',
		'symbol': 'APEU'
	},
	{
		'id': 21121,
		'name': 'MetFX Watch To Earn',
		'slug': 'metfx-watch-to-earn',
		'symbol': 'MFX'
	},
	{
		'id': 11596,
		'name': 'SingularFarm',
		'slug': 'singularfarm',
		'symbol': 'SING'
	},
	{
		'id': 10016,
		'name': 'PocketRocket',
		'slug': 'pocketrocket',
		'symbol': 'POCROC'
	},
	{
		'id': 14218,
		'name': 'Amun Polygon Ecosystem Index',
		'slug': 'amun-polygon-ecosystem-index',
		'symbol': 'PECO'
	},
	{
		'id': 11292,
		'name': 'Unreal Finance',
		'slug': 'unreal-finance',
		'symbol': 'UGT'
	},
	{
		'id': 19794,
		'name': 'Equinox',
		'slug': 'equinox',
		'symbol': 'ENX'
	},
	{
		'id': 22479,
		'name': 'FIFADOGE',
		'slug': 'fifadoge',
		'symbol': 'FDOGE'
	},
	{
		'id': 9849,
		'name': 'Safegem',
		'slug': 'safegem-finance',
		'symbol': 'GEMS'
	},
	{
		'id': 21840,
		'name': 'OutPost',
		'slug': 'outpost',
		'symbol': 'OUT'
	},
	{
		'id': 17432,
		'name': 'Octafarm',
		'slug': 'octafarm',
		'symbol': 'OCTF'
	},
	{
		'id': 11675,
		'name': 'Dope Wars Paper',
		'slug': 'dope-wars-paper',
		'symbol': 'PAPER'
	},
	{
		'id': 21001,
		'name': 'WSB.sh',
		'slug': 'wsb-sh',
		'symbol': 'WSBT'
	},
	{
		'id': 10060,
		'name': 'SafeHamsters',
		'slug': 'safehamsters',
		'symbol': 'SAFEHAMSTERS'
	},
	{
		'id': 19086,
		'name': 'Bulldog Billionaires',
		'slug': 'bulldog-billionaires',
		'symbol': 'BONE'
	},
	{
		'id': 17455,
		'name': '1SAFU',
		'slug': '1safu',
		'symbol': 'SAFU'
	},
	{
		'id': 18615,
		'name': 'Coin Fast Alert V2',
		'slug': 'coin-fast-alert',
		'symbol': 'CFA'
	},
	{
		'id': 17789,
		'name': 'AceStarter',
		'slug': 'acestarter',
		'symbol': 'ASTAR'
	},
	{
		'id': 13748,
		'name': 'Spartacus',
		'slug': 'spartacus',
		'symbol': 'SPA'
	},
	{
		'id': 21462,
		'name': 'Arbitrage Token',
		'slug': 'arbitrage-token',
		'symbol': 'RBTR'
	},
	{
		'id': 10005,
		'name': 'Zoo Token',
		'slug': 'zoo-token',
		'symbol': 'ZOOT'
	},
	{
		'id': 4508,
		'name': 'Voltz',
		'slug': 'voltz',
		'symbol': 'VOLTZ'
	},
	{
		'id': 9188,
		'name': 'Globe Derivative Exchange',
		'slug': 'globe-derivative-exchange',
		'symbol': 'GDT'
	},
	{
		'id': 11780,
		'name': 'MaskDoge',
		'slug': 'maskdoge',
		'symbol': 'MASKDOGE'
	},
	{
		'id': 13780,
		'name': 'Degen Dex',
		'slug': 'degen-dex',
		'symbol': 'DEGN'
	},
	{
		'id': 21605,
		'name': 'GreatDane',
		'slug': 'greatdane',
		'symbol': 'GREATDANE'
	},
	{
		'id': 17979,
		'name': 'HedgePay',
		'slug': 'hedgepay',
		'symbol': 'HPAY'
	},
	{
		'id': 13014,
		'name': 'DotOracle',
		'slug': 'dotoracle',
		'symbol': 'DTO'
	},
	{
		'id': 3716,
		'name': 'Amoveo',
		'slug': 'amoveo',
		'symbol': 'VEO'
	},
	{
		'id': 12498,
		'name': 'POLYDeFI',
		'slug': 'polydefi',
		'symbol': 'OCTAGON'
	},
	{
		'id': 18815,
		'name': 'Utopia (utility Token)',
		'slug': 'utopia-utility-token',
		'symbol': 'UTO'
	},
	{
		'id': 19291,
		'name': 'MetaToll',
		'slug': 'metatoll',
		'symbol': 'TAX'
	},
	{
		'id': 8871,
		'name': 'RYI Unity',
		'slug': 'ryi-unity',
		'symbol': 'RYIU'
	},
	{
		'id': 20140,
		'name': 'AnonyDoxx',
		'slug': 'anonydoxx',
		'symbol': 'ADXX'
	},
	{
		'id': 22754,
		'name': 'Parrotly',
		'slug': 'parrotly',
		'symbol': 'PBIRB'
	},
	{
		'id': 6684,
		'name': 'Dextoken',
		'slug': 'dextoken',
		'symbol': 'DEXG'
	},
	{
		'id': 16642,
		'name': 'Fragments of arker',
		'slug': 'fragments-of-arker',
		'symbol': 'FOA'
	},
	{
		'id': 21498,
		'name': 'LABS Protocol',
		'slug': 'labs-protocol',
		'symbol': 'LABS'
	},
	{
		'id': 11994,
		'name': 'Death Token',
		'slug': 'death-token',
		'symbol': 'DEATH'
	},
	{
		'id': 21618,
		'name': 'Genesis Universe',
		'slug': 'genesis-universe',
		'symbol': 'GUT'
	},
	{
		'id': 13439,
		'name': 'CashCow',
		'slug': 'cashcow',
		'symbol': 'COW'
	},
	{
		'id': 21055,
		'name': 'Oceans Swap',
		'slug': 'oceans-swap',
		'symbol': 'ODEX'
	},
	{
		'id': 22100,
		'name': 'Doge Gold Floki',
		'slug': 'doge-gold-floki',
		'symbol': '$DGF'
	},
	{
		'id': 18158,
		'name': 'GADGETWAR',
		'slug': 'gadgetwar',
		'symbol': 'GWAR'
	},
	{
		'id': 8506,
		'name': 'HASH Token',
		'slug': 'hash-token',
		'symbol': 'HASH'
	},
	{
		'id': 19165,
		'name': 'DAO Farmer DFW',
		'slug': 'dao-farmer-dfw',
		'symbol': 'DFW'
	},
	{
		'id': 19123,
		'name': 'MetaSpets',
		'slug': 'metaspets',
		'symbol': 'MSP'
	},
	{
		'id': 7073,
		'name': 'Hybrid Bank Cash',
		'slug': 'hybrid-bank-cash',
		'symbol': 'HBC'
	},
	{
		'id': 20399,
		'name': 'Tribalpunk Cryptoverse',
		'slug': 'tribalpunk-cryptoverse',
		'symbol': 'ANTA'
	},
	{
		'id': 12613,
		'name': 'Solareum Wallet',
		'slug': 'solareum-wallet',
		'symbol': 'XSB'
	},
	{
		'id': 15374,
		'name': 'YTizer',
		'slug': 'ytizer',
		'symbol': 'YTZ'
	},
	{
		'id': 5857,
		'name': 'FLAMA',
		'slug': 'flama',
		'symbol': 'FMA'
	},
	{
		'id': 5782,
		'name': 'Bestay',
		'slug': 'bestay',
		'symbol': 'BSY'
	},
	{
		'id': 18358,
		'name': 'Quoth',
		'slug': 'quoth',
		'symbol': 'QUOTH'
	},
	{
		'id': 14380,
		'name': 'Floki Rocket',
		'slug': 'floki-rocket',
		'symbol': 'RLOKI'
	},
	{
		'id': 8522,
		'name': 'TOZEX',
		'slug': 'tozex',
		'symbol': 'TOZ'
	},
	{
		'id': 21115,
		'name': 'Alora',
		'slug': 'alora',
		'symbol': 'ALORA'
	},
	{
		'id': 9647,
		'name': 'ANUBI Token',
		'slug': 'anubi-token',
		'symbol': 'ANUBI'
	},
	{
		'id': 19906,
		'name': 'ChoccySwap',
		'slug': 'choccyswap',
		'symbol': 'CCY'
	},
	{
		'id': 15587,
		'name': 'Cowboy Snake',
		'slug': 'cowboy-snake',
		'symbol': 'COWS'
	},
	{
		'id': 22636,
		'name': 'LegioDAO',
		'slug': 'legiodao-',
		'symbol': 'LGD'
	},
	{
		'id': 14094,
		'name': 'AlgoGems',
		'slug': 'algogems',
		'symbol': 'GEMS'
	},
	{
		'id': 11882,
		'name': 'Bitcashpay (new)',
		'slug': 'bitcashpay-new',
		'symbol': 'BCP'
	},
	{
		'id': 15421,
		'name': 'Zomfi',
		'slug': 'zomfi',
		'symbol': 'ZOMFI'
	},
	{
		'id': 12248,
		'name': 'Solcubator',
		'slug': 'solcubator',
		'symbol': 'SOLC'
	},
	{
		'id': 11385,
		'name': 'NFTPad',
		'slug': 'nftpad',
		'symbol': 'NFTPAD'
	},
	{
		'id': 15427,
		'name': 'Rocket',
		'slug': 'rocket',
		'symbol': 'ROCKET'
	},
	{
		'id': 9812,
		'name': 'Gorilla Diamond',
		'slug': 'gorilla-diamond',
		'symbol': 'GDT'
	},
	{
		'id': 2112,
		'name': 'Phoenix Global [old]',
		'slug': 'phoenix-global',
		'symbol': 'PHX'
	},
	{
		'id': 1505,
		'name': 'Alias',
		'slug': 'alias',
		'symbol': 'ALIAS'
	},
	{
		'id': 17120,
		'name': 'Safemoon Zilla',
		'slug': 'safemoon-zilla',
		'symbol': 'SFZ'
	},
	{
		'id': 20461,
		'name': 'CV SHOTS',
		'slug': 'cv-shots',
		'symbol': 'CVSHOT'
	},
	{
		'id': 4984,
		'name': 'MACH Project',
		'slug': 'mach-project',
		'symbol': 'MACH'
	},
	{
		'id': 20536,
		'name': 'Sourceless',
		'slug': 'sourceless',
		'symbol': 'STR'
	},
	{
		'id': 21745,
		'name': 'Orlando Chain',
		'slug': 'orlando-chain',
		'symbol': 'ORL'
	},
	{
		'id': 22829,
		'name': 'NEXUSPAD PROTOCOL',
		'slug': 'nexuspad-protocol',
		'symbol': 'NEXUS'
	},
	{
		'id': 15446,
		'name': 'Baby Shark Tank',
		'slug': 'baby-shark-tank',
		'symbol': 'BASHTANK'
	},
	{
		'id': 10951,
		'name': 'Tokyo AU',
		'slug': 'tokyo-au',
		'symbol': 'TOKAU'
	},
	{
		'id': 12336,
		'name': 'SOLA Token',
		'slug': 'sola',
		'symbol': 'SOLA'
	},
	{
		'id': 23041,
		'name': 'CriptoVille',
		'slug': 'criptoville',
		'symbol': 'CVLC'
	},
	{
		'id': 22153,
		'name': 'ELF Wallet',
		'slug': 'elf-wallet',
		'symbol': 'ELF'
	},
	{
		'id': 19313,
		'name': 'Suuper',
		'slug': 'suuper',
		'symbol': 'SUUPER'
	},
	{
		'id': 16692,
		'name': 'DECENT Database',
		'slug': 'decent-database',
		'symbol': 'DECENT'
	},
	{
		'id': 21767,
		'name': 'Risu',
		'slug': 'risu',
		'symbol': 'RISU'
	},
	{
		'id': 10753,
		'name': 'Evodefi',
		'slug': 'evodefi',
		'symbol': 'GENX'
	},
	{
		'id': 6714,
		'name': 'Libfx',
		'slug': 'libfx',
		'symbol': 'LIBFX'
	},
	{
		'id': 18064,
		'name': 'Plata Network',
		'slug': 'plata-network',
		'symbol': 'PLATA'
	},
	{
		'id': 15723,
		'name': 'HorizonDollar',
		'slug': 'horizondollar',
		'symbol': 'HZD'
	},
	{
		'id': 14509,
		'name': 'HeroCatGamefi',
		'slug': 'herocatgamefi',
		'symbol': 'HCT'
	},
	{
		'id': 17804,
		'name': 'Galatic Kitty Fighters',
		'slug': 'galatic-kitty-fighters',
		'symbol': 'GKF'
	},
	{
		'id': 9118,
		'name': 'Scaleswap',
		'slug': 'scaleswap',
		'symbol': 'SCA'
	},
	{
		'id': 6989,
		'name': 'Zeedex',
		'slug': 'zeedex',
		'symbol': 'ZDEX'
	},
	{
		'id': 9941,
		'name': 'Chihuahua',
		'slug': 'chihuahua',
		'symbol': 'HUA'
	},
	{
		'id': 23025,
		'name': 'CHRISTMAS SHIBA',
		'slug': 'christmas-shiba',
		'symbol': 'XSHIB'
	},
	{
		'id': 11418,
		'name': 'Kanaloa Network',
		'slug': 'kanaloa-network',
		'symbol': 'KANA'
	},
	{
		'id': 18258,
		'name': 'Baby Pokemoon',
		'slug': 'baby-pokemoon',
		'symbol': 'BPM'
	},
	{
		'id': 5220,
		'name': 'QURAS',
		'slug': 'quras',
		'symbol': 'XQC'
	},
	{
		'id': 5697,
		'name': 'DigiDinar Token',
		'slug': 'digidinar-token',
		'symbol': 'DDRT'
	},
	{
		'id': 15609,
		'name': 'Shibana',
		'slug': 'shibana',
		'symbol': 'BANA'
	},
	{
		'id': 21643,
		'name': 'VXXL',
		'slug': 'vxxl',
		'symbol': 'VXXL'
	},
	{
		'id': 12549,
		'name': 'Dinosaureggs',
		'slug': 'dinosaureggs',
		'symbol': 'DSG'
	},
	{
		'id': 21395,
		'name': 'OKEYCOIN',
		'slug': 'okeycoin',
		'symbol': 'OKEY'
	},
	{
		'id': 21266,
		'name': 'Landboard',
		'slug': 'landboard',
		'symbol': 'LAND'
	},
	{
		'id': 16425,
		'name': 'Metaxy',
		'slug': 'metaxy',
		'symbol': 'MXY'
	},
	{
		'id': 15837,
		'name': 'Recast1 Coin',
		'slug': 'recast1-coin',
		'symbol': 'R1'
	},
	{
		'id': 16545,
		'name': 'MetaFinance',
		'slug': 'metafinance-1',
		'symbol': 'MF1'
	},
	{
		'id': 10971,
		'name': 'BabyCake',
		'slug': 'baby-cake',
		'symbol': 'BC2.1'
	},
	{
		'id': 12255,
		'name': 'BitOrbit',
		'slug': 'bitorbit',
		'symbol': 'BITORB'
	},
	{
		'id': 4151,
		'name': 'MERLIN COINS',
		'slug': 'merlin-coins',
		'symbol': 'MERC'
	},
	{
		'id': 16038,
		'name': 'Minereum BSC',
		'slug': 'minereum-bsc',
		'symbol': 'MNEB'
	},
	{
		'id': 19308,
		'name': 'Charactbit',
		'slug': 'charactbit',
		'symbol': 'CHB'
	},
	{
		'id': 21693,
		'name': 'Burrito Boyz Floor Index',
		'slug': 'burrito-boyz-floor-index',
		'symbol': 'BURR'
	},
	{
		'id': 18313,
		'name': 'Hearn.fi',
		'slug': 'hearn-fi',
		'symbol': 'HEARN'
	},
	{
		'id': 16749,
		'name': 'FOX TOKEN',
		'slug': 'fox-coxswap',
		'symbol': 'FOX'
	},
	{
		'id': 10132,
		'name': 'Duet Protocol',
		'slug': 'duet-protocol',
		'symbol': 'DUET'
	},
	{
		'id': 16638,
		'name': 'Metoshi',
		'slug': 'metoshi',
		'symbol': 'METO'
	},
	{
		'id': 7273,
		'name': 'Unlimited FiscusFYI',
		'slug': 'unlimited-fiscusfyi',
		'symbol': 'UFFYI'
	},
	{
		'id': 20952,
		'name': 'Page Network',
		'slug': 'page-network',
		'symbol': 'PGX'
	},
	{
		'id': 22180,
		'name': 'Decentralized Liquidity Program',
		'slug': 'decentralized-liquidity-program',
		'symbol': 'DLP'
	},
	{
		'id': 11586,
		'name': 'Story',
		'slug': 'story',
		'symbol': 'STORY'
	},
	{
		'id': 20674,
		'name': 'Ratio Stable Coin',
		'slug': 'ratio-stable-coin',
		'symbol': 'USDR'
	},
	{
		'id': 19596,
		'name': 'Musk Melon',
		'slug': 'musk-melon',
		'symbol': 'MELON'
	},
	{
		'id': 10104,
		'name': 'YaySwap',
		'slug': 'yayswap',
		'symbol': 'YAY'
	},
	{
		'id': 14726,
		'name': 'Life Token V2',
		'slug': 'life-token-v2',
		'symbol': 'LTNV2'
	},
	{
		'id': 19167,
		'name': 'DAO Farmer DFM',
		'slug': 'dao-farmer-dfm',
		'symbol': 'DFM'
	},
	{
		'id': 19147,
		'name': 'LYFE GOLD',
		'slug': 'lyfe-gold',
		'symbol': 'LGOLD'
	},
	{
		'id': 12558,
		'name': 'Xbullion',
		'slug': 'xbullion',
		'symbol': 'GOLD'
	},
	{
		'id': 19037,
		'name': 'Green Blue Coin',
		'slug': 'green-blue-coin',
		'symbol': 'GBC'
	},
	{
		'id': 21032,
		'name': 'Redluna',
		'slug': 'redluna',
		'symbol': 'REDLUNA'
	},
	{
		'id': 19691,
		'name': 'DeepBlueSea',
		'slug': 'deepbluesea',
		'symbol': 'DBEA'
	},
	{
		'id': 18239,
		'name': 'Sunny Side up',
		'slug': 'sunny-side-up',
		'symbol': 'SSU'
	},
	{
		'id': 11429,
		'name': 'Tundra Token',
		'slug': 'tundra-token',
		'symbol': 'TUNDRA'
	},
	{
		'id': 6907,
		'name': 'Upper Dollar',
		'slug': 'upper-dollar',
		'symbol': 'USDU'
	},
	{
		'id': 18846,
		'name': 'AntGold',
		'slug': 'antgold',
		'symbol': 'ANTG'
	},
	{
		'id': 14063,
		'name': 'FantOHM',
		'slug': 'fantohm',
		'symbol': 'FHM'
	},
	{
		'id': 12584,
		'name': 'Yarloo',
		'slug': 'yarloo',
		'symbol': 'YARL'
	},
	{
		'id': 10847,
		'name': 'TurboTrix Finance',
		'slug': 'turbotrix-finance',
		'symbol': 'TTF'
	},
	{
		'id': 15260,
		'name': 'Talkado',
		'slug': 'talkado',
		'symbol': 'TALK'
	},
	{
		'id': 13428,
		'name': 'MetaDubai',
		'slug': 'metadubai',
		'symbol': 'MDB'
	},
	{
		'id': 9413,
		'name': 'Vira-lata Finance',
		'slug': 'vira-lata-finance',
		'symbol': 'REAU'
	},
	{
		'id': 19371,
		'name': 'Gale Network',
		'slug': 'gale-network',
		'symbol': 'GALE'
	},
	{
		'id': 19007,
		'name': 'MetaMatic',
		'slug': 'metamatic',
		'symbol': 'META'
	},
	{
		'id': 22631,
		'name': 'Futuball',
		'slug': 'futuball',
		'symbol': 'FB'
	},
	{
		'id': 19542,
		'name': 'Bold Point',
		'slug': 'bold-point',
		'symbol': 'BPT'
	},
	{
		'id': 18873,
		'name': 'Overmoon',
		'slug': 'overmoon',
		'symbol': 'OVM'
	},
	{
		'id': 16051,
		'name': 'Rise of Defenders',
		'slug': 'rise-of-defenders',
		'symbol': 'RDR'
	},
	{
		'id': 22063,
		'name': 'Windex',
		'slug': 'windex',
		'symbol': 'WDEX'
	},
	{
		'id': 5796,
		'name': 'Doctors Coin',
		'slug': 'doctors-coin',
		'symbol': 'DRS'
	},
	{
		'id': 11334,
		'name': 'YSL.IO',
		'slug': 'ysl-sysl',
		'symbol': 'SYSL'
	},
	{
		'id': 13736,
		'name': 'Boorio',
		'slug': 'boorio',
		'symbol': 'ORIO'
	},
	{
		'id': 17225,
		'name': 'Limited USD',
		'slug': 'limited-usd',
		'symbol': 'LUSD'
	},
	{
		'id': 18987,
		'name': 'Alpha Petto Shells',
		'slug': 'alpha-petto-shells',
		'symbol': 'APES'
	},
	{
		'id': 22477,
		'name': 'Shiba World Cup',
		'slug': 'shiba-world-cup',
		'symbol': 'SWC'
	},
	{
		'id': 14182,
		'name': 'CollegeCoinNetwork',
		'slug': 'collegecoinnetwork',
		'symbol': 'CCN'
	},
	{
		'id': 10518,
		'name': 'wShiba',
		'slug': 'wshiba',
		'symbol': 'WSHIB'
	},
	{
		'id': 14795,
		'name': 'SappChat',
		'slug': 'sappchat',
		'symbol': 'APP'
	},
	{
		'id': 15839,
		'name': 'La Peseta',
		'slug': 'la-peseta',
		'symbol': 'PTA'
	},
	{
		'id': 22371,
		'name': 'Tikky Inu',
		'slug': 'tikky-inu',
		'symbol': 'TIKKY'
	},
	{
		'id': 9551,
		'name': 'Digible',
		'slug': 'digible',
		'symbol': 'DIGI'
	},
	{
		'id': 21790,
		'name': 'Sportsverse',
		'slug': 'sportverse',
		'symbol': 'SV'
	},
	{
		'id': 22578,
		'name': 'Football INU',
		'slug': 'football-inu',
		'symbol': 'FOOTBALL'
	},
	{
		'id': 5204,
		'name': 'CitiOs',
		'slug': 'citios',
		'symbol': 'R2R'
	},
	{
		'id': 19821,
		'name': 'LuckyDoge',
		'slug': 'luckydoge',
		'symbol': 'LUCKYDOGE'
	},
	{
		'id': 9079,
		'name': 'Chip',
		'slug': 'chip',
		'symbol': 'CHIP'
	},
	{
		'id': 14416,
		'name': 'OneBit',
		'slug': 'onebit',
		'symbol': '1BIT'
	},
	{
		'id': 22590,
		'name': 'Univaults',
		'slug': 'univaults',
		'symbol': 'UNVT'
	},
	{
		'id': 18517,
		'name': 'SOMDEJ',
		'slug': 'somdej',
		'symbol': 'SDC'
	},
	{
		'id': 10695,
		'name': 'MoonEdge',
		'slug': 'moonedge',
		'symbol': 'MOONED'
	},
	{
		'id': 11139,
		'name': 'Tokenplay',
		'slug': 'tokenplay',
		'symbol': 'TOP'
	},
	{
		'id': 21994,
		'name': 'Proof Of Memes',
		'slug': 'proof-of-memes',
		'symbol': 'ETH2.0'
	},
	{
		'id': 18532,
		'name': 'Chain Estate DAO',
		'slug': 'chain-estate-dao',
		'symbol': 'CHES'
	},
	{
		'id': 9578,
		'name': 'Dungeonswap',
		'slug': 'dungeonswap',
		'symbol': 'DND'
	},
	{
		'id': 10484,
		'name': 'Iron',
		'slug': 'iron-finance',
		'symbol': 'IRON'
	},
	{
		'id': 14428,
		'name': 'Sound BSC',
		'slug': 'sound-bsc',
		'symbol': 'SOUND'
	},
	{
		'id': 17369,
		'name': 'Dot Arcade',
		'slug': 'dot-arcade',
		'symbol': 'ADT'
	},
	{
		'id': 22801,
		'name': 'OpenX Locked Velo',
		'slug': 'openx-locked-velo',
		'symbol': 'OPXVEVELO'
	},
	{
		'id': 20907,
		'name': 'Hayya',
		'slug': 'hayya',
		'symbol': 'HAYYA'
	},
	{
		'id': 12450,
		'name': 'Influencer',
		'slug': 'imi',
		'symbol': 'IMI'
	},
	{
		'id': 15982,
		'name': 'Monster of God',
		'slug': 'monster-of-god',
		'symbol': 'MONX'
	},
	{
		'id': 16113,
		'name': 'Clifford Inu',
		'slug': 'clifford-inu',
		'symbol': 'CLIFF'
	},
	{
		'id': 15125,
		'name': 'Ecio',
		'slug': 'ecio',
		'symbol': 'ECIO'
	},
	{
		'id': 12575,
		'name': 'Parrot Egg',
		'slug': 'parrot-egg',
		'symbol': 'IPEGG'
	},
	{
		'id': 13937,
		'name': 'Catena X',
		'slug': 'catena-x',
		'symbol': 'CEX'
	},
	{
		'id': 18209,
		'name': 'UangMarket',
		'slug': 'uangmarket',
		'symbol': 'UANG'
	},
	{
		'id': 13611,
		'name': 'MetaPlay',
		'slug': 'metaplay',
		'symbol': 'MPLAY'
	},
	{
		'id': 12511,
		'name': 'Wrapped NewYorkCoin',
		'slug': 'wrapped-newyorkcoin',
		'symbol': 'WNYC'
	},
	{
		'id': 5143,
		'name': 'Documentchain',
		'slug': 'documentchain',
		'symbol': 'DMS'
	},
	{
		'id': 15888,
		'name': 'Baby Ripple',
		'slug': 'baby-ripple',
		'symbol': 'BABYXRP'
	},
	{
		'id': 6824,
		'name': 'Epanus',
		'slug': 'epanus',
		'symbol': 'EPS'
	},
	{
		'id': 13217,
		'name': 'ONE PIECE',
		'slug': 'one-piece',
		'symbol': 'ONEPIECE'
	},
	{
		'id': 2255,
		'name': 'Social Send',
		'slug': 'social-send',
		'symbol': 'SEND'
	},
	{
		'id': 15050,
		'name': 'Milk',
		'slug': 'milk',
		'symbol': 'MILK'
	},
	{
		'id': 12246,
		'name': 'Social Swap Token',
		'slug': 'socialswap',
		'symbol': 'SST'
	},
	{
		'id': 20843,
		'name': 'Brayzin Heist',
		'slug': 'brayzin-heist',
		'symbol': 'BRZH'
	},
	{
		'id': 18601,
		'name': '5table Finance',
		'slug': '5table-finance',
		'symbol': '5TABLE'
	},
	{
		'id': 4027,
		'name': 'DeVault',
		'slug': 'devault',
		'symbol': 'DVT'
	},
	{
		'id': 12912,
		'name': 'Digital Bank of Africa',
		'slug': 'digital-bank-of-africa',
		'symbol': 'DBA'
	},
	{
		'id': 8939,
		'name': 'Nimbus',
		'slug': 'nimbus',
		'symbol': 'NBU'
	},
	{
		'id': 15565,
		'name': 'CheeseSwap',
		'slug': 'cheese-swap',
		'symbol': 'CHEESE'
	},
	{
		'id': 15517,
		'name': 'WoopMoney',
		'slug': 'woopmoney',
		'symbol': 'WMW'
	},
	{
		'id': 19435,
		'name': 'DNA(RXC)',
		'slug': 'rxc-dna',
		'symbol': 'DNA'
	},
	{
		'id': 9015,
		'name': 'Cope',
		'slug': 'cope',
		'symbol': 'COPE'
	},
	{
		'id': 9271,
		'name': 'Momo Protocol',
		'slug': 'momo-protocol',
		'symbol': 'MOMO'
	},
	{
		'id': 15686,
		'name': 'Metaverse Exchange',
		'slug': 'metaverse-exchange',
		'symbol': 'METACEX'
	},
	{
		'id': 20527,
		'name': 'Mangamon',
		'slug': 'mangamon',
		'symbol': 'MAN'
	},
	{
		'id': 17074,
		'name': 'Mones',
		'slug': 'mones',
		'symbol': 'MONES'
	},
	{
		'id': 12234,
		'name': 'Torii Finance',
		'slug': 'torii-finance',
		'symbol': 'TORII'
	},
	{
		'id': 15677,
		'name': 'Simpli Finance',
		'slug': 'simpli-finance',
		'symbol': 'SIMPLI'
	},
	{
		'id': 20927,
		'name': 'NFTL',
		'slug': 'nftl',
		'symbol': 'NFTL'
	},
	{
		'id': 18033,
		'name': 'Solana Ecosystem Index',
		'slug': 'solana-ecosystem-index',
		'symbol': 'SOLI'
	},
	{
		'id': 21172,
		'name': 'APEmove',
		'slug': 'apemove',
		'symbol': 'APE'
	},
	{
		'id': 16276,
		'name': 'nOFTEN',
		'slug': 'noften',
		'symbol': 'NOF'
	},
	{
		'id': 13433,
		'name': 'LovePot Token',
		'slug': 'lovepot-token',
		'symbol': 'LOVE'
	},
	{
		'id': 13212,
		'name': 'Ethera',
		'slug': 'ethera',
		'symbol': 'ETA'
	},
	{
		'id': 20929,
		'name': 'WEB3Token',
		'slug': 'web3token',
		'symbol': 'WEB3.0'
	},
	{
		'id': 20998,
		'name': 'Loop X Network',
		'slug': 'loop-x-network',
		'symbol': 'LOOP'
	},
	{
		'id': 15811,
		'name': 'Keeshond Coin',
		'slug': 'keeshond-coin',
		'symbol': 'KSH'
	},
	{
		'id': 2318,
		'name': 'Neumark',
		'slug': 'neumark',
		'symbol': 'NEU'
	},
	{
		'id': 15151,
		'name': 'SWERVE Protocol',
		'slug': 'swerve-protocol',
		'symbol': 'SWERVE'
	},
	{
		'id': 5792,
		'name': 'Bananatok',
		'slug': 'bananatok',
		'symbol': 'BNA'
	},
	{
		'id': 19439,
		'name': 'Kittens & Puppies',
		'slug': 'kittens-puppies',
		'symbol': 'KAP'
	},
	{
		'id': 16984,
		'name': 'BAPE Social Club',
		'slug': 'bored-ape-social-club',
		'symbol': 'BAPE'
	},
	{
		'id': 7483,
		'name': 'DeFi Gold',
		'slug': 'defi-gold',
		'symbol': 'DFGL'
	},
	{
		'id': 8448,
		'name': 'MCOBIT',
		'slug': 'mcobit',
		'symbol': 'MCT'
	},
	{
		'id': 3939,
		'name': 'Tronipay',
		'slug': 'tronipay',
		'symbol': 'TRP'
	},
	{
		'id': 12136,
		'name': 'IjasCoin',
		'slug': 'ijascoin',
		'symbol': 'IJC'
	},
	{
		'id': 5746,
		'name': 'Compound Augur',
		'slug': 'compound-augur',
		'symbol': 'CREP'
	},
	{
		'id': 13064,
		'name': 'CorgiNFTGame',
		'slug': 'corginftgame',
		'symbol': 'COR'
	},
	{
		'id': 22512,
		'name': 'TWITTERDOGE',
		'slug': 'twitterdoge',
		'symbol': 'TDOGE'
	},
	{
		'id': 10661,
		'name': 'Definix',
		'slug': 'definix',
		'symbol': 'FINIX'
	},
	{
		'id': 16286,
		'name': 'ERON',
		'slug': 'eron-project',
		'symbol': 'ERON'
	},
	{
		'id': 9819,
		'name': 'PalGold',
		'slug': 'palgold',
		'symbol': 'PALG'
	},
	{
		'id': 16204,
		'name': 'Solana Nut',
		'slug': 'solana-nut',
		'symbol': 'SOLNUT'
	},
	{
		'id': 11893,
		'name': 'Teddy Cash',
		'slug': 'teddy-cash',
		'symbol': 'TEDDY'
	},
	{
		'id': 15632,
		'name': 'Meta Rewards Token',
		'slug': 'meta-rewards-token',
		'symbol': 'MRT'
	},
	{
		'id': 22845,
		'name': 'Pokemon Play',
		'slug': 'poke-play',
		'symbol': 'PPC'
	},
	{
		'id': 22028,
		'name': 'Dosa',
		'slug': 'dosa',
		'symbol': '$DOSA'
	},
	{
		'id': 18095,
		'name': 'Cherish',
		'slug': 'cherish',
		'symbol': 'CHC'
	},
	{
		'id': 11626,
		'name': 'Hermes Defi',
		'slug': 'hermes-defi',
		'symbol': 'IRIS'
	},
	{
		'id': 19830,
		'name': 'Falcon9',
		'slug': 'falcon9',
		'symbol': 'FALCON9'
	},
	{
		'id': 20358,
		'name': 'Drover Inu',
		'slug': 'drover-inu',
		'symbol': 'DROVERS'
	},
	{
		'id': 20253,
		'name': 'Diamond Love',
		'slug': 'diamond-love',
		'symbol': 'LOVE'
	},
	{
		'id': 15529,
		'name': 'Space Crypto',
		'slug': 'space-crypto',
		'symbol': 'SPG'
	},
	{
		'id': 17612,
		'name': 'Moneyrain Finance',
		'slug': 'moneyrain-finance',
		'symbol': 'MONEYRAIN'
	},
	{
		'id': 21692,
		'name': 'Pett Network',
		'slug': 'pett-network',
		'symbol': 'PETT'
	},
	{
		'id': 12804,
		'name': 'PokeDX',
		'slug': 'pokedx',
		'symbol': 'PDX'
	},
	{
		'id': 17259,
		'name': 'UMetaWorld',
		'slug': 'umetaworld',
		'symbol': 'UMW'
	},
	{
		'id': 12318,
		'name': 'Community Doge Coin',
		'slug': 'community-doge-coin',
		'symbol': 'CCDOGE'
	},
	{
		'id': 14558,
		'name': 'Scientia',
		'slug': 'scientia',
		'symbol': 'SCIE'
	},
	{
		'id': 21431,
		'name': 'STEED',
		'slug': 'steed',
		'symbol': 'STD'
	},
	{
		'id': 18820,
		'name': 'Leprechaun Finance',
		'slug': 'leprechaun-finance',
		'symbol': 'LEP'
	},
	{
		'id': 17395,
		'name': 'POLARNODES',
		'slug': 'polar-finance',
		'symbol': 'POLAR'
	},
	{
		'id': 14553,
		'name': 'Panda Coin',
		'slug': 'panda-coin',
		'symbol': 'PANDA'
	},
	{
		'id': 5160,
		'name': 'Dune Network',
		'slug': 'dune-network',
		'symbol': 'DUN'
	},
	{
		'id': 148,
		'name': 'Auroracoin',
		'slug': 'auroracoin',
		'symbol': 'AUR'
	},
	{
		'id': 16139,
		'name': 'Dragon Verse',
		'slug': 'dragon-verse',
		'symbol': 'DRV'
	},
	{
		'id': 20283,
		'name': 'Hesman Shard',
		'slug': 'hesman-legend',
		'symbol': 'HES'
	},
	{
		'id': 6905,
		'name': 'Upper Euro',
		'slug': 'upper-euro',
		'symbol': 'EURU'
	},
	{
		'id': 14029,
		'name': 'FTM PUP Token',
		'slug': 'ftm-pup-token',
		'symbol': 'FPUP'
	},
	{
		'id': 19074,
		'name': 'CorgiNFTGame',
		'slug': 'corginftgame-spet',
		'symbol': 'SPET'
	},
	{
		'id': 13453,
		'name': 'Waifer',
		'slug': 'waifer',
		'symbol': 'WAIFER'
	},
	{
		'id': 19529,
		'name': 'Llamaverse',
		'slug': 'llamaverse',
		'symbol': 'SPIT'
	},
	{
		'id': 16435,
		'name': 'Metaworld',
		'slug': 'metaworld',
		'symbol': 'MW'
	},
	{
		'id': 19228,
		'name': 'Vulcano',
		'slug': 'vulcano',
		'symbol': 'VULC'
	},
	{
		'id': 13419,
		'name': 'Pizza Pug Coin',
		'slug': 'pizza-pug-coin',
		'symbol': 'PPUG'
	},
	{
		'id': 12130,
		'name': 'Decentralized data crypto system',
		'slug': 'decentralized-data-crypto-system',
		'symbol': 'DCS'
	},
	{
		'id': 5698,
		'name': 'GM Holding',
		'slug': 'gm-holding',
		'symbol': 'GM'
	},
	{
		'id': 18927,
		'name': 'Mooner',
		'slug': 'mooner',
		'symbol': 'MNR'
	},
	{
		'id': 9837,
		'name': 'Flux Protocol',
		'slug': 'flux-protocol',
		'symbol': 'FLUX'
	},
	{
		'id': 20130,
		'name': 'Blockearth',
		'slug': 'blockearth',
		'symbol': 'BLET'
	},
	{
		'id': 13862,
		'name': 'Flashloans.com',
		'slug': 'flashloans',
		'symbol': 'FLASH'
	},
	{
		'id': 20288,
		'name': 'JustCarbon',
		'slug': 'justcarbon',
		'symbol': 'JCG'
	},
	{
		'id': 12631,
		'name': 'Euphoria',
		'slug': 'euphoriagames',
		'symbol': 'EUPH'
	},
	{
		'id': 13711,
		'name': 'IDM Token',
		'slug': 'idm-token',
		'symbol': 'IDM'
	},
	{
		'id': 18175,
		'name': 'MyRichFarm',
		'slug': 'myrichfarm',
		'symbol': 'RCH'
	},
	{
		'id': 8681,
		'name': 'Funder One Capital',
		'slug': 'funder-one-capital',
		'symbol': 'FUNDX'
	},
	{
		'id': 16467,
		'name': 'FishingTown',
		'slug': 'fishingtown',
		'symbol': 'FHTN'
	},
	{
		'id': 10829,
		'name': 'NEFTiPEDiA',
		'slug': 'neftipedia',
		'symbol': 'NFT'
	},
	{
		'id': 18971,
		'name': 'EverSAFU',
		'slug': 'eversafu',
		'symbol': 'EVERSAFU'
	},
	{
		'id': 12332,
		'name': 'Space Hamster',
		'slug': 'space-hamster',
		'symbol': 'HAMS'
	},
	{
		'id': 11912,
		'name': 'Round Dollar',
		'slug': 'round-dollar',
		'symbol': 'RD'
	},
	{
		'id': 13673,
		'name': 'Chihiro Inu',
		'slug': 'chihiro-inu',
		'symbol': 'CHIRO'
	},
	{
		'id': 11298,
		'name': 'CrossSwap',
		'slug': 'crossswap',
		'symbol': 'CSWAP'
	},
	{
		'id': 12100,
		'name': 'Crystl Finance',
		'slug': 'polycrystal-finance',
		'symbol': 'CRYSTL'
	},
	{
		'id': 22729,
		'name': 'Reach DAO',
		'slug': 'reach-dao',
		'symbol': 'READ'
	},
	{
		'id': 23044,
		'name': 'N Protocol',
		'slug': 'n-protocol',
		'symbol': 'N'
	},
	{
		'id': 5132,
		'name': 'Universe Coin',
		'slug': 'universe-coin',
		'symbol': 'UNIS'
	},
	{
		'id': 13434,
		'name': 'Solex Finance',
		'slug': 'solex-finance',
		'symbol': 'SLX'
	},
	{
		'id': 16335,
		'name': 'MiniGame',
		'slug': 'minigame',
		'symbol': 'MINIGAME'
	},
	{
		'id': 12736,
		'name': 'CRB Coin',
		'slug': 'crb-coin',
		'symbol': 'CRB'
	},
	{
		'id': 20522,
		'name': 'MemeBank',
		'slug': 'memebank',
		'symbol': 'MBK'
	},
	{
		'id': 11908,
		'name': 'HiFi Gaming Society',
		'slug': 'hifi-gaming-society',
		'symbol': 'HIFI'
	},
	{
		'id': 15695,
		'name': 'Tank Battle',
		'slug': 'tank-battle',
		'symbol': 'TBL'
	},
	{
		'id': 15730,
		'name': 'Twelve Legions',
		'slug': 'twelve-legions',
		'symbol': 'CTL'
	},
	{
		'id': 4222,
		'name': '1Million Token',
		'slug': '1million-token',
		'symbol': '1MT'
	},
	{
		'id': 21446,
		'name': 'Boulpik Token',
		'slug': 'boulpik-token',
		'symbol': 'BOULPIK'
	},
	{
		'id': 6906,
		'name': 'Upper Pound',
		'slug': 'upper-pound',
		'symbol': 'GBPU'
	},
	{
		'id': 9300,
		'name': 'Zeppelin DAO',
		'slug': 'zeppelin-dao',
		'symbol': 'ZEP'
	},
	{
		'id': 9465,
		'name': 'Mooni DeFi',
		'slug': 'mooni-defi',
		'symbol': 'MOONI'
	},
	{
		'id': 15175,
		'name': 'DAWG',
		'slug': 'dawg',
		'symbol': 'DAWG'
	},
	{
		'id': 14500,
		'name': 'Cryptogodz',
		'slug': 'cryptogodz',
		'symbol': 'GODZ'
	},
	{
		'id': 15396,
		'name': 'Creator Protocol',
		'slug': 'creator-protocol',
		'symbol': 'CRE'
	},
	{
		'id': 9969,
		'name': 'SaylorMoon',
		'slug': 'saylormoon',
		'symbol': 'SMOON'
	},
	{
		'id': 12380,
		'name': 'PolyDragon',
		'slug': 'polydragon',
		'symbol': 'DGOLD'
	},
	{
		'id': 17908,
		'name': 'Codi Finance',
		'slug': 'codi-finance',
		'symbol': 'CODI'
	},
	{
		'id': 17302,
		'name': 'ChinaZilla',
		'slug': 'chinazilla',
		'symbol': 'CHINAZILLA'
	},
	{
		'id': 7684,
		'name': 'ORO',
		'slug': 'oro',
		'symbol': 'ORO'
	},
	{
		'id': 5131,
		'name': 'The Universal Settlement Coin',
		'slug': 'the-universal-settlement-coin',
		'symbol': 'TUSC'
	},
	{
		'id': 15961,
		'name': 'Gold Nugget',
		'slug': 'cryptomines-classic',
		'symbol': 'NGT'
	},
	{
		'id': 12249,
		'name': 'Health Potion',
		'slug': 'health-potion',
		'symbol': 'HEP'
	},
	{
		'id': 20164,
		'name': 'The Fire Token',
		'slug': 'the-fire-token',
		'symbol': 'XFR'
	},
	{
		'id': 18930,
		'name': 'DarleyGo Essence',
		'slug': 'darleygo-essence',
		'symbol': 'DGE'
	},
	{
		'id': 22553,
		'name': 'SHUMI',
		'slug': 'shumi',
		'symbol': 'SHUMI'
	},
	{
		'id': 10960,
		'name': 'WIZARD',
		'slug': 'wizard',
		'symbol': 'WIZARD'
	},
	{
		'id': 7399,
		'name': 'Global Gaming',
		'slug': 'global-gaming',
		'symbol': 'GMNG'
	},
	{
		'id': 14768,
		'name': 'HashLand Coin',
		'slug': 'hashland',
		'symbol': 'HC'
	},
	{
		'id': 7366,
		'name': 'Stabilize',
		'slug': 'stabilize',
		'symbol': 'STBZ'
	},
	{
		'id': 19468,
		'name': 'Bounty',
		'slug': 'bounty',
		'symbol': 'BNTY'
	},
	{
		'id': 12223,
		'name': 'Bulldogswap',
		'slug': 'bulldogswap',
		'symbol': 'BUDG'
	},
	{
		'id': 10918,
		'name': 'Crypto Village Accelerator',
		'slug': 'new-crypto-village-accelerator',
		'symbol': 'CVAG'
	},
	{
		'id': 20149,
		'name': 'PYRAMIDWALK',
		'slug': 'pyramidwalk',
		'symbol': 'PYRA'
	},
	{
		'id': 21670,
		'name': 'Laeeb Inu',
		'slug': 'laeeb-inu',
		'symbol': 'LAEEB'
	},
	{
		'id': 12559,
		'name': 'Aquarius Protocol',
		'slug': 'aquarius-protocol',
		'symbol': 'AQU'
	},
	{
		'id': 18908,
		'name': 'TokenBank',
		'slug': 'tokenbank',
		'symbol': 'TBANK'
	},
	{
		'id': 17845,
		'name': 'Carb0n.fi',
		'slug': 'carb0n-fi',
		'symbol': 'ZRO'
	},
	{
		'id': 12085,
		'name': 'Rose Finance',
		'slug': 'rose-finance',
		'symbol': 'ROF'
	},
	{
		'id': 14324,
		'name': 'Shiba Inu Empire',
		'slug': 'shiba-inu-empire',
		'symbol': 'SHIBEMP'
	},
	{
		'id': 14313,
		'name': 'Lockness',
		'slug': 'lockness',
		'symbol': 'LKN'
	},
	{
		'id': 22382,
		'name': 'MoonwayV2',
		'slug': 'moonwayv2',
		'symbol': 'MW2'
	},
	{
		'id': 10715,
		'name': 'AirCoin',
		'slug': 'air',
		'symbol': 'AIR'
	},
	{
		'id': 14329,
		'name': 'MetaZilla',
		'slug': 'metazilla',
		'symbol': 'MZ'
	},
	{
		'id': 11468,
		'name': 'Future',
		'slug': 'future',
		'symbol': 'FTR'
	},
	{
		'id': 15108,
		'name': 'BUSDX',
		'slug': 'busdx',
		'symbol': 'BUSDX'
	},
	{
		'id': 12233,
		'name': 'Lucky Lion',
		'slug': 'lucky-lion',
		'symbol': 'LUCKY'
	},
	{
		'id': 4983,
		'name': 'Demeter Chain',
		'slug': 'demeter-chain',
		'symbol': 'DMTC'
	},
	{
		'id': 19585,
		'name': 'Online Cold Wallet',
		'slug': 'online-cold-wallet',
		'symbol': 'OCW'
	},
	{
		'id': 21469,
		'name': 'AniFi World',
		'slug': 'anifi-world',
		'symbol': 'ANIFI'
	},
	{
		'id': 5599,
		'name': 'XTRM COIN',
		'slug': 'xtrm-coin',
		'symbol': 'XTRM'
	},
	{
		'id': 4460,
		'name': 'PirateCash',
		'slug': 'piratecash',
		'symbol': 'PIRATE'
	},
	{
		'id': 4928,
		'name': 'Medium',
		'slug': 'medium',
		'symbol': 'MDM'
	},
	{
		'id': 22547,
		'name': 'Upload Token',
		'slug': 'upload-token',
		'symbol': 'UPLOAD'
	},
	{
		'id': 14721,
		'name': 'RealLink',
		'slug': 'reallink',
		'symbol': 'REAL'
	},
	{
		'id': 15275,
		'name': 'RXCGames',
		'slug': 'rxcgames',
		'symbol': 'RXCG'
	},
	{
		'id': 21954,
		'name': 'MetaWar Token',
		'slug': 'metawar-token',
		'symbol': 'MTWR'
	},
	{
		'id': 23040,
		'name': 'Morpho Network',
		'slug': 'morpho-network',
		'symbol': 'MORPHO'
	},
	{
		'id': 5253,
		'name': 'The Hustle App',
		'slug': 'the-hustle-app',
		'symbol': 'HUSL'
	},
	{
		'id': 17502,
		'name': 'MetaPlanet',
		'slug': 'metaplanet',
		'symbol': 'MPL'
	},
	{
		'id': 15239,
		'name': 'Lord Arena',
		'slug': 'lord-arena',
		'symbol': 'LORDA'
	},
	{
		'id': 16576,
		'name': 'ScarpaCoin',
		'slug': 'scarpacoin',
		'symbol': 'SC'
	},
	{
		'id': 19987,
		'name': 'ASIX+',
		'slug': 'asix',
		'symbol': 'ASIX+'
	},
	{
		'id': 13960,
		'name': 'KOROMARU',
		'slug': 'koromaru',
		'symbol': 'KOROMARU'
	},
	{
		'id': 12273,
		'name': 'SPACE SIP',
		'slug': 'space-sip',
		'symbol': 'SIP'
	},
	{
		'id': 19723,
		'name': 'APPLECHAIN',
		'slug': 'applechain',
		'symbol': 'APPLE'
	},
	{
		'id': 10764,
		'name': 'OLYMPUS',
		'slug': 'olympus-token',
		'symbol': 'OLYMPUS'
	},
	{
		'id': 7475,
		'name': 'Camp',
		'slug': 'camp',
		'symbol': 'CAMP'
	},
	{
		'id': 16990,
		'name': 'Community Token',
		'slug': 'community-token-comt',
		'symbol': 'COMT'
	},
	{
		'id': 13009,
		'name': 'ITSMYNE',
		'slug': 'itsmyne',
		'symbol': 'MYNE'
	},
	{
		'id': 18982,
		'name': 'Bountie Hunter',
		'slug': 'bountie',
		'symbol': 'BOUNTIE'
	},
	{
		'id': 12765,
		'name': 'Coffin Finance',
		'slug': 'coffin-finance',
		'symbol': 'COFFIN'
	},
	{
		'id': 21511,
		'name': 'SYLTARE',
		'slug': 'syltare',
		'symbol': 'SYL'
	},
	{
		'id': 14905,
		'name': 'Fluffy Coin',
		'slug': 'fluffy-coin',
		'symbol': 'FLUF'
	},
	{
		'id': 6680,
		'name': 'Digex',
		'slug': 'digex',
		'symbol': 'DIGEX'
	},
	{
		'id': 20530,
		'name': 'Bmail',
		'slug': 'bmail',
		'symbol': 'BML'
	},
	{
		'id': 22561,
		'name': 'MetaDancingCrew',
		'slug': 'metadancingcrew',
		'symbol': 'MDC'
	},
	{
		'id': 11684,
		'name': 'Totem Finance',
		'slug': 'totem-finance',
		'symbol': 'TOTEM'
	},
	{
		'id': 5985,
		'name': 'Limestone Network',
		'slug': 'limestone-network',
		'symbol': 'LIMEX'
	},
	{
		'id': 5533,
		'name': 'SKINCHAIN',
		'slug': 'skinchain',
		'symbol': 'SKC'
	},
	{
		'id': 11539,
		'name': 'Vendit',
		'slug': 'vendit',
		'symbol': 'VNDT'
	},
	{
		'id': 16242,
		'name': 'Cryptowolf Finance',
		'slug': 'cryptowolf-finance',
		'symbol': '$CWOLF'
	},
	{
		'id': 10158,
		'name': 'SpaceGrime',
		'slug': 'spacegrime',
		'symbol': 'GRIMEX'
	},
	{
		'id': 6446,
		'name': 'Fashion Coin',
		'slug': 'fashion-coin',
		'symbol': 'FSHN'
	},
	{
		'id': 19231,
		'name': 'Magic Elpis Gem',
		'slug': 'magic-elpis-gem',
		'symbol': 'MEG'
	},
	{
		'id': 14035,
		'name': 'Premio',
		'slug': 'premio',
		'symbol': 'PREMIO'
	},
	{
		'id': 12377,
		'name': 'SOLBERRY',
		'slug': 'solberry',
		'symbol': 'SOLBERRY'
	},
	{
		'id': 16819,
		'name': 'Recovery Right Token',
		'slug': 'recovery-right-token',
		'symbol': 'RRT'
	},
	{
		'id': 17761,
		'name': 'IceCream Finance',
		'slug': 'icecream-finance',
		'symbol': 'CREAM'
	},
	{
		'id': 15136,
		'name': 'SeamlessSwap',
		'slug': 'seamlessswap',
		'symbol': 'SEAMLESS'
	},
	{
		'id': 10620,
		'name': 'FarmHero',
		'slug': 'farm-hero',
		'symbol': 'HONOR'
	},
	{
		'id': 16212,
		'name': 'DEHR Network',
		'slug': 'dehr-network',
		'symbol': 'DHR'
	},
	{
		'id': 11311,
		'name': 'Intersola',
		'slug': 'intersola',
		'symbol': 'ISOLA'
	},
	{
		'id': 17014,
		'name': 'AstroSpaces.io',
		'slug': 'astrospaces',
		'symbol': 'SPACES'
	},
	{
		'id': 7423,
		'name': 'RUSH',
		'slug': 'rush',
		'symbol': 'RUC'
	},
	{
		'id': 11610,
		'name': 'BitcoMine Token',
		'slug': 'bitcomine-token',
		'symbol': 'BME'
	},
	{
		'id': 16458,
		'name': 'Obsidium',
		'slug': 'obsidium',
		'symbol': 'OBS'
	},
	{
		'id': 21573,
		'name': 'The Sprint Token',
		'slug': 'the-sprint-token',
		'symbol': 'TST'
	},
	{
		'id': 4013,
		'name': 'SpectreSecurityCoin',
		'slug': 'spectre-security-coin',
		'symbol': 'XSPC'
	},
	{
		'id': 21333,
		'name': 'Aki Inu',
		'slug': 'aki-inu',
		'symbol': 'AKI'
	},
	{
		'id': 22953,
		'name': 'Zibu',
		'slug': 'zibu',
		'symbol': 'ZIBU'
	},
	{
		'id': 22918,
		'name': 'Vega sport',
		'slug': 'vega-sport',
		'symbol': 'VEGA'
	},
	{
		'id': 4261,
		'name': 'Sucrecoin',
		'slug': 'sucrecoin',
		'symbol': 'XSR'
	},
	{
		'id': 22566,
		'name': 'Tether Pow',
		'slug': 'tether-pow',
		'symbol': 'USDW'
	},
	{
		'id': 10174,
		'name': 'CreamPYE',
		'slug': 'creampye',
		'symbol': 'PYE'
	},
	{
		'id': 14972,
		'name': 'SOLFINA PROTOCOL',
		'slug': 'solfina-protocol',
		'symbol': 'SOLFI'
	},
	{
		'id': 18277,
		'name': 'ChinaOM',
		'slug': 'chinaom',
		'symbol': 'COM'
	},
	{
		'id': 10379,
		'name': 'Kekwcoin',
		'slug': 'kekwcoin',
		'symbol': 'KEKW'
	},
	{
		'id': 18458,
		'name': 'FaniTrade',
		'slug': 'fanitrade',
		'symbol': 'FANI'
	},
	{
		'id': 16523,
		'name': 'Mad Viking Games',
		'slug': 'mad-viking-games',
		'symbol': 'MVG'
	},
	{
		'id': 20801,
		'name': 'Famous Fox Federation',
		'slug': 'famous-fox-federation',
		'symbol': 'FOXY'
	},
	{
		'id': 9294,
		'name': 'SAFESUN',
		'slug': 'safesun-crypto',
		'symbol': 'SAFESUN'
	},
	{
		'id': 15771,
		'name': 'ELEF  WORLD',
		'slug': 'elef--world',
		'symbol': 'ELEF'
	},
	{
		'id': 14200,
		'name': 'Bozkurt Token',
		'slug': 'bozkurt-token',
		'symbol': 'BT'
	},
	{
		'id': 11953,
		'name': 'Crypto Island',
		'slug': 'crypto-island',
		'symbol': 'CISLA'
	},
	{
		'id': 20040,
		'name': 'Metatrone',
		'slug': 'metatrone',
		'symbol': 'MET'
	},
	{
		'id': 2419,
		'name': 'Profile Utility Token',
		'slug': 'profile-utility-token',
		'symbol': 'PUT'
	},
	{
		'id': 21881,
		'name': 'Safe Universe',
		'slug': 'safe-universe',
		'symbol': 'SFU'
	},
	{
		'id': 17988,
		'name': 'Monopoly Millionaire Game',
		'slug': 'monopoly-millionaire-game',
		'symbol': 'MMG'
	},
	{
		'id': 20972,
		'name': 'PiFinance',
		'slug': 'pifinance',
		'symbol': 'PIFI'
	},
	{
		'id': 13026,
		'name': 'FOHO Coin',
		'slug': 'foho-coin',
		'symbol': 'FOHO'
	},
	{
		'id': 13205,
		'name': 'Ashera',
		'slug': 'ashera',
		'symbol': 'ASH'
	},
	{
		'id': 13944,
		'name': 'Otter Finance',
		'slug': 'otter-finance',
		'symbol': 'OTR'
	},
	{
		'id': 12393,
		'name': 'Lightcoin',
		'slug': 'lightcoin-lhc',
		'symbol': 'LHC'
	},
	{
		'id': 14396,
		'name': 'Axial',
		'slug': 'axial',
		'symbol': 'AXIAL'
	},
	{
		'id': 5814,
		'name': 'Rivermount',
		'slug': 'rivermount',
		'symbol': 'RM'
	},
	{
		'id': 12439,
		'name': 'BRCP TOKEN',
		'slug': 'brcp-token',
		'symbol': 'BRCP'
	},
	{
		'id': 14477,
		'name': 'WGMI',
		'slug': 'wgmi',
		'symbol': 'WGMI'
	},
	{
		'id': 19653,
		'name': 'LadderCaster',
		'slug': 'laddercaster',
		'symbol': 'LADA'
	},
	{
		'id': 6211,
		'name': 'Dionpay',
		'slug': 'dionpay',
		'symbol': 'DION'
	},
	{
		'id': 16081,
		'name': 'USNOTA',
		'slug': 'nota',
		'symbol': 'USNOTA'
	},
	{
		'id': 19754,
		'name': 'Articoin solana',
		'slug': 'articoin-solana',
		'symbol': 'ATC'
	},
	{
		'id': 14962,
		'name': 'Oppa',
		'slug': 'oppa',
		'symbol': 'OPPA'
	},
	{
		'id': 16853,
		'name': 'Atlantis Loans Polygon',
		'slug': 'atlantis-loans-polygon',
		'symbol': 'ATLX'
	},
	{
		'id': 21950,
		'name': 'Cat Sphynx',
		'slug': 'cat-sphynx',
		'symbol': 'CPX'
	},
	{
		'id': 7539,
		'name': 'Colibri Protocol',
		'slug': 'colibri',
		'symbol': 'CLBR'
	},
	{
		'id': 19166,
		'name': 'DAO Farmer DFG',
		'slug': 'dao-farmer-dfg',
		'symbol': 'DFG'
	},
	{
		'id': 20942,
		'name': 'COXSWAP V2',
		'slug': 'coxswap-v2',
		'symbol': 'COX'
	},
	{
		'id': 11033,
		'name': 'RedFEG',
		'slug': 'redfeg',
		'symbol': 'REDFEG'
	},
	{
		'id': 15734,
		'name': 'bePAY Finance',
		'slug': 'bepay',
		'symbol': 'BECOIN'
	},
	{
		'id': 16085,
		'name': 'Plato Farm (PLATO)',
		'slug': 'plato-farm-plato',
		'symbol': 'PLATO'
	},
	{
		'id': 18768,
		'name': 'RingFi',
		'slug': 'ring',
		'symbol': 'RING'
	},
	{
		'id': 22961,
		'name': 'Soccer Crypto',
		'slug': 'soccer-crypto',
		'symbol': 'SOT'
	},
	{
		'id': 11832,
		'name': 'Corgiswap',
		'slug': 'corgiswap',
		'symbol': 'CORIS'
	},
	{
		'id': 17306,
		'name': 'LaserEyes',
		'slug': 'lasereyes',
		'symbol': 'LSR'
	},
	{
		'id': 13783,
		'name': 'Afrostar',
		'slug': 'afrostar',
		'symbol': 'AFRO'
	},
	{
		'id': 13779,
		'name': 'Oly Sport',
		'slug': 'oly-sport',
		'symbol': 'OLY'
	},
	{
		'id': 14968,
		'name': 'Viral Inu',
		'slug': 'viral-inu',
		'symbol': 'VINU'
	},
	{
		'id': 12897,
		'name': 'Chimeras',
		'slug': 'chimeras',
		'symbol': 'CHIM'
	},
	{
		'id': 22299,
		'name': 'La´eeb',
		'slug': 'la-eeb',
		'symbol': 'LA´EEB'
	},
	{
		'id': 17264,
		'name': 'KAPEX Cryptocurrency Token',
		'slug': 'kapex-cryptocurrency-token',
		'symbol': 'KAPEX'
	},
	{
		'id': 19847,
		'name': 'panKUKU',
		'slug': 'pankuku',
		'symbol': 'KUKU'
	},
	{
		'id': 16433,
		'name': 'Ghost Trader',
		'slug': 'ghost-trader',
		'symbol': 'GTR'
	},
	{
		'id': 16825,
		'name': 'Nesten',
		'slug': 'nesten',
		'symbol': 'NIT'
	},
	{
		'id': 6543,
		'name': 'Barter',
		'slug': 'barter',
		'symbol': 'BRTR'
	},
	{
		'id': 11207,
		'name': 'Bitcoin Asia',
		'slug': 'bitcoin-asia',
		'symbol': 'BTCA'
	},
	{
		'id': 12524,
		'name': 'Farmers Only',
		'slug': 'farmers-only',
		'symbol': 'FOX'
	},
	{
		'id': 11022,
		'name': 'PackagePortal',
		'slug': 'packageportal',
		'symbol': 'PORT'
	},
	{
		'id': 14278,
		'name': 'Invictus',
		'slug': 'invictus',
		'symbol': 'IN'
	},
	{
		'id': 22379,
		'name': 'KRAKENPAD',
		'slug': 'krakenpad',
		'symbol': 'KRP'
	},
	{
		'id': 12911,
		'name': 'LimeOdysseyM with ITAM',
		'slug': 'limeodyssey',
		'symbol': 'LOM'
	},
	{
		'id': 15852,
		'name': 'SIF Token',
		'slug': 'sif',
		'symbol': 'SIF'
	},
	{
		'id': 5078,
		'name': 'THENODE',
		'slug': 'thenode',
		'symbol': 'THE'
	},
	{
		'id': 21919,
		'name': 'Meetin Token',
		'slug': 'meetin-token',
		'symbol': 'METI'
	},
	{
		'id': 11414,
		'name': 'Qubit',
		'slug': 'qubit',
		'symbol': 'QBT'
	},
	{
		'id': 20096,
		'name': 'Generation',
		'slug': 'generation',
		'symbol': 'GEN'
	},
	{
		'id': 16892,
		'name': 'Fish Crypto',
		'slug': 'fish-crypto',
		'symbol': 'FICO'
	},
	{
		'id': 11163,
		'name': 'YSL',
		'slug': 'ysl-io',
		'symbol': 'YSL'
	},
	{
		'id': 11169,
		'name': 'DogemonGo',
		'slug': 'dogemon-go',
		'symbol': 'DOGO'
	},
	{
		'id': 13281,
		'name': 'ZilStream',
		'slug': 'zilstream',
		'symbol': 'STREAM'
	},
	{
		'id': 21562,
		'name': 'Minionverse',
		'slug': 'minionverse',
		'symbol': 'MIVRS'
	},
	{
		'id': 14384,
		'name': 'GN',
		'slug': 'gn',
		'symbol': 'GN'
	},
	{
		'id': 14091,
		'name': 'Diamond DND',
		'slug': 'diamond-dnd',
		'symbol': 'DND'
	},
	{
		'id': 16251,
		'name': 'BitcoinBR',
		'slug': 'bitcoinbr',
		'symbol': 'BTCBR'
	},
	{
		'id': 10492,
		'name': 'Genebank Token',
		'slug': 'genebank-token',
		'symbol': 'GNBT'
	},
	{
		'id': 21898,
		'name': 'Versatile Finance',
		'slug': 'versatile-finance',
		'symbol': '$VERSA'
	},
	{
		'id': 18759,
		'name': 'Super Cat Coin',
		'slug': 'super-cat-coin',
		'symbol': 'SuperCat'
	},
	{
		'id': 20348,
		'name': 'SMART MONEY COIN',
		'slug': 'smart-money-coin',
		'symbol': 'SMC'
	},
	{
		'id': 10881,
		'name': 'UltimoGG',
		'slug': 'ultimogg',
		'symbol': 'ULTGG'
	},
	{
		'id': 23077,
		'name': 'NEW YEAR APE',
		'slug': 'new-year-ape',
		'symbol': 'NYAPE'
	},
	{
		'id': 5659,
		'name': 'Xank',
		'slug': 'xank',
		'symbol': 'XANK'
	},
	{
		'id': 15147,
		'name': 'Vodka Token',
		'slug': 'vodka-token',
		'symbol': 'VODKA'
	},
	{
		'id': 9169,
		'name': 'MMAON',
		'slug': 'mmaon',
		'symbol': 'MMAON'
	},
	{
		'id': 8943,
		'name': 'WHITEX',
		'slug': 'whitex',
		'symbol': 'WHX'
	},
	{
		'id': 67,
		'name': 'Unobtanium',
		'slug': 'unobtanium',
		'symbol': 'UNO'
	},
	{
		'id': 16600,
		'name': 'NftEyez',
		'slug': 'nfteyez',
		'symbol': 'EYE'
	},
	{
		'id': 21607,
		'name': 'Pitbull Inu',
		'slug': 'pitbull-inu',
		'symbol': 'PITI'
	},
	{
		'id': 11777,
		'name': 'Block Monsters',
		'slug': 'block-monsters',
		'symbol': 'MNSTRS'
	},
	{
		'id': 12346,
		'name': 'Goku',
		'slug': 'goku',
		'symbol': 'GOKU'
	},
	{
		'id': 11705,
		'name': 'Overlord',
		'slug': 'overlord',
		'symbol': 'LORD'
	},
	{
		'id': 13992,
		'name': 'Hero Essence',
		'slug': 'heroverse-hes',
		'symbol': 'HES'
	},
	{
		'id': 19177,
		'name': 'Yieldzilla',
		'slug': 'yieldzilla',
		'symbol': 'YDZ'
	},
	{
		'id': 11356,
		'name': 'Hashmasks',
		'slug': 'hashmasks',
		'symbol': 'MASK20'
	},
	{
		'id': 16198,
		'name': 'MongooseCoin',
		'slug': 'mongoosecoin',
		'symbol': 'MONGOOSE'
	},
	{
		'id': 19541,
		'name': 'PegasusDollar',
		'slug': 'pegasusdollar',
		'symbol': 'PES'
	},
	{
		'id': 9367,
		'name': 'Bafe io',
		'slug': 'bafe-io',
		'symbol': 'BAFE'
	},
	{
		'id': 9323,
		'name': 'GrafenoCoin',
		'slug': 'grafeno',
		'symbol': 'GFNC'
	},
	{
		'id': 19785,
		'name': 'Baby Zoro Inu',
		'slug': 'baby-zoro-inu',
		'symbol': 'BABYZOROINU'
	},
	{
		'id': 18943,
		'name': '0xDAO V2',
		'slug': '0xdao-v2',
		'symbol': 'OXD V2'
	},
	{
		'id': 16446,
		'name': 'Orakler',
		'slug': 'orakler',
		'symbol': 'ORKL'
	},
	{
		'id': 20430,
		'name': 'WingStep',
		'slug': 'wingstep',
		'symbol': 'WST'
	},
	{
		'id': 10850,
		'name': 'CFL 365 Finance',
		'slug': 'cfl-365-finance',
		'symbol': 'CFL365'
	},
	{
		'id': 17805,
		'name': 'VSolidus',
		'slug': 'vsolidus',
		'symbol': 'VSOL'
	},
	{
		'id': 16756,
		'name': 'Dibs Money',
		'slug': 'dibs-money',
		'symbol': 'DIBS'
	},
	{
		'id': 10169,
		'name': 'NFTTONE',
		'slug': 'nfttone',
		'symbol': 'TONE'
	},
	{
		'id': 20916,
		'name': 'Wrapped SOL',
		'slug': 'wrapped-sol',
		'symbol': 'XSOL'
	},
	{
		'id': 4089,
		'name': 'Blockmason Link',
		'slug': 'blockmason-link',
		'symbol': 'BLINK'
	},
	{
		'id': 12343,
		'name': 'PremiumBlock',
		'slug': 'premiumblock',
		'symbol': 'PRB'
	},
	{
		'id': 22838,
		'name': 'Wrestling Shiba',
		'slug': 'wrestling-shiba',
		'symbol': 'WWE'
	},
	{
		'id': 10127,
		'name': 'JINDO INU',
		'slug': 'jindo-inu',
		'symbol': 'JIND'
	},
	{
		'id': 15899,
		'name': 'Last Survivor',
		'slug': 'last-survivor',
		'symbol': 'LSC'
	},
	{
		'id': 17092,
		'name': 'ZION',
		'slug': 'zion',
		'symbol': 'ZION'
	},
	{
		'id': 4380,
		'name': 'Kalkicoin',
		'slug': 'kalkicoin',
		'symbol': 'KLC'
	},
	{
		'id': 16331,
		'name': 'SolCondoms',
		'slug': 'solcondoms',
		'symbol': 'CONDOMS'
	},
	{
		'id': 16887,
		'name': 'Clash Of Cars',
		'slug': 'clash-of-cars',
		'symbol': 'CLASH'
	},
	{
		'id': 23138,
		'name': 'GameGaw',
		'slug': 'gamegaw',
		'symbol': 'GAW'
	},
	{
		'id': 460,
		'name': 'Clams',
		'slug': 'clams',
		'symbol': 'CLAM'
	},
	{
		'id': 20000,
		'name': 'SolanaLite',
		'slug': 'solanalite',
		'symbol': 'SLITE'
	},
	{
		'id': 13512,
		'name': 'ParadiseFi',
		'slug': 'paradisefi',
		'symbol': 'EDEN'
	},
	{
		'id': 15065,
		'name': 'Solit',
		'slug': 'solit',
		'symbol': 'SLT'
	},
	{
		'id': 20087,
		'name': 'ASSARA',
		'slug': 'assara',
		'symbol': 'ASSA'
	},
	{
		'id': 12922,
		'name': 'Huckleberry',
		'slug': 'huckleberry',
		'symbol': 'FINN'
	},
	{
		'id': 22386,
		'name': 'GTI Token',
		'slug': 'gti-token',
		'symbol': 'GTI'
	},
	{
		'id': 16314,
		'name': 'CryptoNeur Network foundation',
		'slug': 'cryptoneur-network-foundation',
		'symbol': 'CNF'
	},
	{
		'id': 22094,
		'name': 'ShibaForest',
		'slug': 'shibaforest',
		'symbol': 'SHF'
	},
	{
		'id': 14675,
		'name': 'SOLVIEW',
		'slug': 'solview',
		'symbol': 'SOLV'
	},
	{
		'id': 20879,
		'name': 'KAWAII',
		'slug': 'kawaii',
		'symbol': 'KAWAII'
	},
	{
		'id': 20962,
		'name': 'USP',
		'slug': 'usp',
		'symbol': 'USP'
	},
	{
		'id': 15104,
		'name': 'DoggyStyle Coin',
		'slug': 'doggystyle-coin',
		'symbol': 'DSC'
	},
	{
		'id': 17526,
		'name': 'Paw V2',
		'slug': 'paw-v2',
		'symbol': 'PAW'
	},
	{
		'id': 22693,
		'name': 'Tora Inu',
		'slug': 'tora-inu',
		'symbol': 'TORA'
	},
	{
		'id': 18917,
		'name': 'Greenhouse',
		'slug': 'greenhouse',
		'symbol': 'GREEN'
	},
	{
		'id': 18022,
		'name': 'Beskar',
		'slug': 'beskar',
		'symbol': 'BSK-BAA025'
	},
	{
		'id': 14379,
		'name': 'Mars Inu',
		'slug': 'mars-inu',
		'symbol': 'MARSINU'
	},
	{
		'id': 4546,
		'name': '01coin',
		'slug': '01coin',
		'symbol': 'ZOC'
	},
	{
		'id': 13911,
		'name': 'GinSpirit',
		'slug': 'ginspirit',
		'symbol': 'GINSPIRIT'
	},
	{
		'id': 16098,
		'name': 'SolClout',
		'slug': 'solclout',
		'symbol': 'SCT'
	},
	{
		'id': 8570,
		'name': 'Grapeswap',
		'slug': 'grapeswap',
		'symbol': 'GRAPE'
	},
	{
		'id': 12144,
		'name': 'Happiness',
		'slug': 'happiness',
		'symbol': 'HPNS'
	},
	{
		'id': 17078,
		'name': 'Chimp Fight',
		'slug': 'chimp-fight',
		'symbol': 'NANA'
	},
	{
		'id': 22433,
		'name': 'Baby Shark',
		'slug': 'baby-shark-token',
		'symbol': 'BSHARK'
	},
	{
		'id': 18690,
		'name': 'BabyWhale',
		'slug': 'babywhale',
		'symbol': 'BBW'
	},
	{
		'id': 20170,
		'name': 'LuckyChip',
		'slug': 'luckychip',
		'symbol': 'LC'
	},
	{
		'id': 16144,
		'name': 'Hippo Coin',
		'slug': 'hippo-coin',
		'symbol': 'HIPPO'
	},
	{
		'id': 14561,
		'name': 'SwapTracker',
		'slug': 'swaptracker',
		'symbol': 'SWPT'
	},
	{
		'id': 16151,
		'name': 'DUSD Network',
		'slug': 'dusd-network',
		'symbol': 'DUSD'
	},
	{
		'id': 17489,
		'name': 'Gladian',
		'slug': 'gladian',
		'symbol': 'GLD'
	},
	{
		'id': 14967,
		'name': 'Roar Soltigers Token',
		'slug': 'roar-token',
		'symbol': 'ROAR'
	},
	{
		'id': 9214,
		'name': 'MoonStar',
		'slug': 'moonstar',
		'symbol': 'MOONSTAR'
	},
	{
		'id': 20799,
		'name': 'Nirvana prANA',
		'slug': 'nirvana-prana',
		'symbol': 'PRANA'
	},
	{
		'id': 17460,
		'name': 'Mini Tiger',
		'slug': 'minitiger',
		'symbol': 'MINITIGER'
	},
	{
		'id': 12753,
		'name': 'Solum',
		'slug': 'solum',
		'symbol': 'SOLUM'
	},
	{
		'id': 12349,
		'name': 'Swanlana',
		'slug': 'swanlana',
		'symbol': 'SWAN'
	},
	{
		'id': 18645,
		'name': 'Mytrade',
		'slug': 'mytrade',
		'symbol': 'MYT'
	},
	{
		'id': 7074,
		'name': 'Oracolxor',
		'slug': 'oracolxor',
		'symbol': 'XOR'
	},
	{
		'id': 21553,
		'name': 'Joe-Yo Coin',
		'slug': 'joe-yo-coin',
		'symbol': 'JYC'
	},
	{
		'id': 20242,
		'name': 'Rens Token',
		'slug': 'rens-token',
		'symbol': 'RENS'
	},
	{
		'id': 19219,
		'name': 'USD Velero Stablecoin',
		'slug': 'usdv',
		'symbol': 'USDV'
	},
	{
		'id': 16236,
		'name': 'Redacted Cartel',
		'slug': 'butterflydao',
		'symbol': 'BTRFLY'
	},
	{
		'id': 15051,
		'name': 'Solar Energy',
		'slug': 'solar-energy',
		'symbol': 'SEG'
	},
	{
		'id': 4033,
		'name': 'Native Utility Token',
		'slug': 'native-utility-token',
		'symbol': 'NUT'
	},
	{
		'id': 17222,
		'name': 'Shikage',
		'slug': 'shikage',
		'symbol': 'SHKG'
	},
	{
		'id': 20931,
		'name': 'Optimus',
		'slug': 'optimus-opt',
		'symbol': 'OPT'
	},
	{
		'id': 3456,
		'name': 'PlusOneCoin',
		'slug': 'plusonecoin',
		'symbol': 'PLUS1'
	},
	{
		'id': 18509,
		'name': 'The Xenobots Project',
		'slug': 'the-xenobots-project',
		'symbol': 'XENO'
	},
	{
		'id': 22551,
		'name': 'DOGE WORLD CUP',
		'slug': 'doge-world-cup',
		'symbol': 'DWC'
	},
	{
		'id': 5560,
		'name': 'Idea Chain Coin',
		'slug': 'idea-chain-coin',
		'symbol': 'ICH'
	},
	{
		'id': 18278,
		'name': 'Cubo',
		'slug': 'cubo',
		'symbol': 'CUBO'
	},
	{
		'id': 18155,
		'name': 'Metablackout',
		'slug': 'metablackout',
		'symbol': 'MBT'
	},
	{
		'id': 14615,
		'name': 'Circlepod',
		'slug': 'circlepod',
		'symbol': 'CPX'
	},
	{
		'id': 11026,
		'name': 'Spacelens',
		'slug': 'spacelens',
		'symbol': 'SPACE'
	},
	{
		'id': 20568,
		'name': 'CoinGhost',
		'slug': 'coinghost',
		'symbol': 'GST'
	},
	{
		'id': 14153,
		'name': 'Euphoria',
		'slug': 'wagmi',
		'symbol': 'WAGMI'
	},
	{
		'id': 5437,
		'name': 'BIZZCOIN',
		'slug': 'bizzcoin',
		'symbol': 'BIZZ'
	},
	{
		'id': 11771,
		'name': 'Rewardeum',
		'slug': 'rewardeum',
		'symbol': 'REUM'
	},
	{
		'id': 15277,
		'name': 'Crypto Mushroomz',
		'slug': 'crypto-mushroomz',
		'symbol': 'SHROOMZ'
	},
	{
		'id': 13207,
		'name': 'BITCOIN INTERNATIONAL',
		'slug': 'bitcoin-international',
		'symbol': 'BTCI'
	},
	{
		'id': 16074,
		'name': 'The Starship Finance',
		'slug': 'the-starship-finance',
		'symbol': 'BIP'
	},
	{
		'id': 15994,
		'name': 'Tribeland',
		'slug': 'tribeland',
		'symbol': 'TRBL'
	},
	{
		'id': 19441,
		'name': 'Moshiheads',
		'slug': 'moshiheads',
		'symbol': 'MOSHI'
	},
	{
		'id': 14073,
		'name': 'Vagabond',
		'slug': 'vagabond',
		'symbol': 'VGO'
	},
	{
		'id': 19922,
		'name': 'Fitmint',
		'slug': 'fitmint',
		'symbol': 'FITT'
	},
	{
		'id': 14470,
		'name': 'TokenBook',
		'slug': 'tokenbook',
		'symbol': 'TBK'
	},
	{
		'id': 15391,
		'name': 'Rich Santa',
		'slug': 'rich-santa',
		'symbol': 'SANTA'
	},
	{
		'id': 168,
		'name': 'Uniform Fiscal Object',
		'slug': 'uniform-fiscal-object',
		'symbol': 'UFO'
	},
	{
		'id': 18194,
		'name': 'LogiTron',
		'slug': 'logitron',
		'symbol': 'LTR'
	},
	{
		'id': 12987,
		'name': 'SatoshiStreetBets Token',
		'slug': 'satoshistreetbets',
		'symbol': 'SSB'
	},
	{
		'id': 9187,
		'name': 'MY IDENTITY COIN',
		'slug': 'my-identity-coin',
		'symbol': 'MYID'
	},
	{
		'id': 7625,
		'name': 'gAsp',
		'slug': 'gasp',
		'symbol': 'GASP'
	},
	{
		'id': 15887,
		'name': 'Solabrador',
		'slug': 'solabrador',
		'symbol': 'SOLAB'
	},
	{
		'id': 18482,
		'name': 'Hello Gophers',
		'slug': 'hello-gophers',
		'symbol': 'SHARD'
	},
	{
		'id': 19858,
		'name': 'SafeDogeCoin V2',
		'slug': 'safedogecoin-v2',
		'symbol': 'SAFEDOGE'
	},
	{
		'id': 15551,
		'name': 'Dogelana',
		'slug': 'dogelana',
		'symbol': 'DLANA'
	},
	{
		'id': 17303,
		'name': 'Fossil',
		'slug': 'fossil',
		'symbol': 'FOSSIL'
	},
	{
		'id': 9167,
		'name': 'BaTorrent',
		'slug': 'batorrent',
		'symbol': 'BA'
	},
	{
		'id': 11047,
		'name': 'GameX',
		'slug': 'gamex',
		'symbol': 'GMX'
	},
	{
		'id': 14606,
		'name': 'Quid Token',
		'slug': 'quid-token',
		'symbol': 'QUID'
	},
	{
		'id': 18692,
		'name': 'Krill',
		'slug': 'krill-token',
		'symbol': 'KRILL'
	},
	{
		'id': 15546,
		'name': 'Kronos DAO',
		'slug': 'kronos-dao',
		'symbol': 'KRNO'
	},
	{
		'id': 17431,
		'name': 'Ticket Finance',
		'slug': 'ticket-finance',
		'symbol': 'TICKET'
	},
	{
		'id': 20548,
		'name': 'M7V2',
		'slug': 'm7v2',
		'symbol': 'M7V2'
	},
	{
		'id': 8653,
		'name': 'wanSUSHI',
		'slug': 'wansushi',
		'symbol': 'WANSUSHI'
	},
	{
		'id': 20336,
		'name': 'Gnome Mines',
		'slug': 'gnome-mines',
		'symbol': 'GMINES'
	},
	{
		'id': 14939,
		'name': 'Seeded Network',
		'slug': 'seeded-network',
		'symbol': 'SEEDED'
	},
	{
		'id': 16072,
		'name': 'XQuake',
		'slug': 'xquake',
		'symbol': 'XQK'
	},
	{
		'id': 22425,
		'name': 'Happy Duck Farm',
		'slug': 'happy-duck-farm',
		'symbol': 'HDF'
	},
	{
		'id': 12080,
		'name': 'Kingdom Coin',
		'slug': 'kingdom-coin-',
		'symbol': 'KDC'
	},
	{
		'id': 18376,
		'name': 'ChorusX',
		'slug': 'chorusx',
		'symbol': 'CX1'
	},
	{
		'id': 15434,
		'name': 'DIAMOND',
		'slug': 'diamond-xrpl',
		'symbol': 'DIAMOND'
	},
	{
		'id': 13407,
		'name': 'Soltato FRIES',
		'slug': 'soltato-fries',
		'symbol': 'FRIES'
	},
	{
		'id': 9274,
		'name': 'RocketMoon',
		'slug': 'rocketmoon',
		'symbol': 'RMOON'
	},
	{
		'id': 18996,
		'name': 'BB Gaming',
		'slug': 'bb-gaming',
		'symbol': 'BB'
	},
	{
		'id': 6107,
		'name': 'Eight Hours',
		'slug': 'eight-hours',
		'symbol': 'EHRT'
	},
	{
		'id': 21147,
		'name': 'Project202',
		'slug': 'project202',
		'symbol': 'P202'
	},
	{
		'id': 14621,
		'name': 'Leonidas Token',
		'slug': 'leonidas-token',
		'symbol': 'LEONIDAS'
	},
	{
		'id': 10357,
		'name': 'DATACHAIN FOUNDATION (DC)',
		'slug': 'datachain-foundation',
		'symbol': 'DC'
	},
	{
		'id': 17486,
		'name': 'NVL',
		'slug': 'nvl-project',
		'symbol': 'NVL'
	},
	{
		'id': 17258,
		'name': 'Kangaroo Token',
		'slug': 'kangaroo',
		'symbol': 'GAR'
	},
	{
		'id': 18763,
		'name': 'Mad Meerkat ETF',
		'slug': 'mad-meerkat-etf',
		'symbol': 'METF'
	},
	{
		'id': 19788,
		'name': 'Gravis Finance',
		'slug': 'gravis-finance',
		'symbol': 'GRVS'
	},
	{
		'id': 19961,
		'name': 'JustCarbon Removal',
		'slug': 'justcarbon-removal',
		'symbol': 'JCR'
	},
	{
		'id': 7986,
		'name': 'Hub - Human Trust Protocol',
		'slug': 'hub-human-trust-protocol',
		'symbol': 'HUB'
	},
	{
		'id': 18950,
		'name': 'Doaibu',
		'slug': 'doaibu',
		'symbol': 'DOA'
	},
	{
		'id': 11943,
		'name': 'Promodio',
		'slug': 'promodio',
		'symbol': 'PMD'
	},
	{
		'id': 17105,
		'name': 'GreenCoin.AI',
		'slug': 'greencoin-ai',
		'symbol': 'GRC'
	},
	{
		'id': 12883,
		'name': 'Chellitcoin',
		'slug': 'chellitcoin',
		'symbol': 'CHLT'
	},
	{
		'id': 13942,
		'name': 'Wipe My ASS',
		'slug': 'wipe-my-ass',
		'symbol': 'WIPE'
	},
	{
		'id': 11024,
		'name': 'KingDeFi',
		'slug': 'kingdefi',
		'symbol': 'KRW'
	},
	{
		'id': 9736,
		'name': 'ShibaCash',
		'slug': 'shibacash',
		'symbol': 'SHIBACASH'
	},
	{
		'id': 20179,
		'name': 'NoblessCoin',
		'slug': 'noblesscoin',
		'symbol': 'NBLS'
	},
	{
		'id': 19232,
		'name': 'LifeTime',
		'slug': 'lifetime',
		'symbol': 'LFT'
	},
	{
		'id': 11597,
		'name': 'Lillion',
		'slug': 'lillion',
		'symbol': 'LIL'
	},
	{
		'id': 19496,
		'name': 'Banana Task Force Ape',
		'slug': 'banana-task-force-ape',
		'symbol': 'BTFA'
	},
	{
		'id': 3296,
		'name': 'MINDOL',
		'slug': 'mindol',
		'symbol': 'MIN'
	},
	{
		'id': 22594,
		'name': 'Fanverse',
		'slug': 'fanverse-',
		'symbol': 'FT'
	},
	{
		'id': 17655,
		'name': 'HUMAN',
		'slug': 'human-coin',
		'symbol': 'HUMAN'
	},
	{
		'id': 19416,
		'name': 'Hunter Crypto Coin',
		'slug': 'hunter-crypto-coin',
		'symbol': 'HCC'
	},
	{
		'id': 7598,
		'name': 'Tessla Coin',
		'slug': 'tessla-coin',
		'symbol': 'TSLA'
	},
	{
		'id': 7762,
		'name': 'Lyra',
		'slug': 'lyra',
		'symbol': 'LYR'
	},
	{
		'id': 16969,
		'name': 'Metapplay',
		'slug': 'metapplay',
		'symbol': 'METAP'
	},
	{
		'id': 18924,
		'name': 'Noah',
		'slug': 'noah',
		'symbol': 'NOAH'
	},
	{
		'id': 20157,
		'name': 'SeatlabNFT',
		'slug': 'seatlabnft',
		'symbol': 'SEAT'
	},
	{
		'id': 19967,
		'name': 'Banana Index',
		'slug': 'banana-index',
		'symbol': 'BANDEX'
	},
	{
		'id': 78,
		'name': 'HoboNickels',
		'slug': 'hobonickels',
		'symbol': 'HBN'
	},
	{
		'id': 141,
		'name': 'MintCoin',
		'slug': 'mintcoin',
		'symbol': 'MINT'
	},
	{
		'id': 215,
		'name': 'Rubycoin',
		'slug': 'rubycoin',
		'symbol': 'RBY'
	},
	{
		'id': 572,
		'name': 'RabbitCoin',
		'slug': 'rabbitcoin',
		'symbol': 'RBBT'
	},
	{
		'id': 733,
		'name': 'Quotient',
		'slug': 'quotient',
		'symbol': 'XQN'
	},
	{
		'id': 911,
		'name': 'Advanced Internet Blocks',
		'slug': 'advanced-internet-blocks',
		'symbol': 'AIB'
	},
	{
		'id': 918,
		'name': 'Bubble',
		'slug': 'bubble',
		'symbol': 'BUB'
	},
	{
		'id': 1020,
		'name': 'Axiom',
		'slug': 'axiom',
		'symbol': 'AXIOM'
	},
	{
		'id': 1135,
		'name': 'ClubCoin',
		'slug': 'clubcoin',
		'symbol': 'CLUB'
	},
	{
		'id': 1146,
		'name': 'AvatarCoin',
		'slug': 'avatarcoin',
		'symbol': 'AV'
	},
	{
		'id': 1164,
		'name': 'Francs',
		'slug': 'francs',
		'symbol': 'FRN'
	},
	{
		'id': 1250,
		'name': 'Zurcoin',
		'slug': 'zurcoin',
		'symbol': 'ZUR'
	},
	{
		'id': 1351,
		'name': 'Aces',
		'slug': 'aces',
		'symbol': 'ACES'
	},
	{
		'id': 1623,
		'name': 'BlazerCoin',
		'slug': 'blazercoin',
		'symbol': 'BLAZR'
	},
	{
		'id': 1745,
		'name': 'Dinastycoin',
		'slug': 'dinastycoin',
		'symbol': 'DCY'
	},
	{
		'id': 1784,
		'name': 'Polybius',
		'slug': 'polybius',
		'symbol': 'PLBT'
	},
	{
		'id': 2091,
		'name': 'Exchange Union',
		'slug': 'exchange-union',
		'symbol': 'XUC'
	},
	{
		'id': 2293,
		'name': 'United Bitcoin',
		'slug': 'united-bitcoin',
		'symbol': 'UBTC'
	},
	{
		'id': 2329,
		'name': 'Hyper Pay',
		'slug': 'hyper-pay',
		'symbol': 'HPY'
	},
	{
		'id': 2343,
		'name': 'CanYaCoin',
		'slug': 'canyacoin',
		'symbol': 'CAN'
	},
	{
		'id': 2349,
		'name': 'Mixin',
		'slug': 'mixin',
		'symbol': 'XIN'
	},
	{
		'id': 2459,
		'name': 'indaHash',
		'slug': 'indahash',
		'symbol': 'IDH'
	},
	{
		'id': 2746,
		'name': 'GreenPower',
		'slug': 'greenpower',
		'symbol': 'GRN'
	},
	{
		'id': 2846,
		'name': 'FuturoCoin',
		'slug': 'futurocoin',
		'symbol': 'FTO'
	},
	{
		'id': 2907,
		'name': 'Karatgold Coin',
		'slug': 'karatgold-coin',
		'symbol': 'KBC'
	},
	{
		'id': 2914,
		'name': 'BeeKan',
		'slug': 'beekan',
		'symbol': 'BKBT'
	},
	{
		'id': 2986,
		'name': 'DACC',
		'slug': 'dacc',
		'symbol': 'DACC'
	},
	{
		'id': 2990,
		'name': 'EXMR FDN',
		'slug': 'exmr-fdn',
		'symbol': 'EXMR'
	},
	{
		'id': 3006,
		'name': 'Niobio',
		'slug': 'niobio',
		'symbol': 'NBR'
	},
	{
		'id': 3013,
		'name': 'PRiVCY',
		'slug': 'privcy',
		'symbol': 'PRIV'
	},
	{
		'id': 3060,
		'name': 'Yuan Chain Coin',
		'slug': 'yuan-chain-coin',
		'symbol': 'YCC'
	},
	{
		'id': 3085,
		'name': 'Ino Coin',
		'slug': 'ino-coin',
		'symbol': 'INO'
	},
	{
		'id': 3149,
		'name': 'Netkoin',
		'slug': 'netkoin',
		'symbol': 'NTK'
	},
	{
		'id': 3152,
		'name': 'Obitan Chain',
		'slug': 'obitan-chain',
		'symbol': 'OBTC'
	},
	{
		'id': 3198,
		'name': 'KingXChain',
		'slug': 'kingxchain',
		'symbol': 'KXC'
	},
	{
		'id': 3208,
		'name': 'YUKI',
		'slug': 'yuki',
		'symbol': 'YUKI'
	},
	{
		'id': 3238,
		'name': 'ABCC Token',
		'slug': 'abcc-token',
		'symbol': 'AT'
	},
	{
		'id': 3295,
		'name': 'BUMO',
		'slug': 'bumo',
		'symbol': 'BU'
	},
	{
		'id': 3304,
		'name': 'MobilinkToken',
		'slug': 'mobilinktoken',
		'symbol': 'MOLK'
	},
	{
		'id': 3328,
		'name': 'CMITCOIN',
		'slug': 'cmitcoin',
		'symbol': 'CMIT'
	},
	{
		'id': 3354,
		'name': 'TRONCLASSIC',
		'slug': 'tronclassic',
		'symbol': 'TRXC'
	},
	{
		'id': 3404,
		'name': 'Wixlar',
		'slug': 'wixlar',
		'symbol': 'WIX'
	},
	{
		'id': 3417,
		'name': 'Future1coin',
		'slug': 'future1coin',
		'symbol': 'F1C'
	},
	{
		'id': 3664,
		'name': 'AgaveCoin',
		'slug': 'agavecoin',
		'symbol': 'AGVC'
	},
	{
		'id': 3679,
		'name': 'Earneo',
		'slug': 'earneo',
		'symbol': 'RNO'
	},
	{
		'id': 3695,
		'name': 'Hyperion',
		'slug': 'hyperion',
		'symbol': 'HYN'
	},
	{
		'id': 3737,
		'name': 'BTU Protocol',
		'slug': 'btu-protocol',
		'symbol': 'BTU'
	},
	{
		'id': 3891,
		'name': 'V-Dimension',
		'slug': 'v-dimension',
		'symbol': 'VOLLAR'
	},
	{
		'id': 3918,
		'name': 'Safe',
		'slug': 'safe',
		'symbol': 'SAFE'
	},
	{
		'id': 3920,
		'name': 'Diamond Platform Token',
		'slug': 'diamond-platform-token',
		'symbol': 'DPT'
	},
	{
		'id': 3925,
		'name': 'Tratok',
		'slug': 'tratok',
		'symbol': 'TRAT'
	},
	{
		'id': 3962,
		'name': 'Vodi X',
		'slug': 'vodi-x',
		'symbol': 'VDX'
	},
	{
		'id': 4103,
		'name': 'FLETA',
		'slug': 'fleta',
		'symbol': 'FLETA'
	},
	{
		'id': 4122,
		'name': 'CCA',
		'slug': 'counos-coin',
		'symbol': 'CCA'
	},
	{
		'id': 4125,
		'name': 'NOIZ',
		'slug': 'noizchain',
		'symbol': 'NOIZ'
	},
	{
		'id': 4150,
		'name': 'GLOBEX',
		'slug': 'globex',
		'symbol': 'GEX'
	},
	{
		'id': 4174,
		'name': 'BitcoinRegular',
		'slug': 'bitcoinregular',
		'symbol': 'BTRL'
	},
	{
		'id': 4224,
		'name': 'Mcashchain',
		'slug': 'mcashchain',
		'symbol': 'MCASH'
	},
	{
		'id': 4262,
		'name': 'UltrAlpha',
		'slug': 'ultralpha',
		'symbol': 'UAT'
	},
	{
		'id': 4276,
		'name': 'Defi',
		'slug': 'defi',
		'symbol': 'DEFI'
	},
	{
		'id': 4289,
		'name': 'IOEX',
		'slug': 'ioex',
		'symbol': 'IOEX'
	},
	{
		'id': 4306,
		'name': 'BitcoinSoV',
		'slug': 'bitcoinsov',
		'symbol': 'BSOV'
	},
	{
		'id': 4370,
		'name': 'concertVR-Token',
		'slug': 'concertvr-token',
		'symbol': 'CVT'
	},
	{
		'id': 4381,
		'name': 'MYCE',
		'slug': 'myce',
		'symbol': 'YCE'
	},
	{
		'id': 4448,
		'name': 'Electronero',
		'slug': 'electronero',
		'symbol': 'ETNX'
	},
	{
		'id': 4487,
		'name': 'Secure Cash',
		'slug': 'secure-cash',
		'symbol': 'SCSX'
	},
	{
		'id': 4502,
		'name': 'Altbet',
		'slug': 'altbet',
		'symbol': 'ABET'
	},
	{
		'id': 4506,
		'name': 'Hotbit Token',
		'slug': 'hotbit-token',
		'symbol': 'HTB'
	},
	{
		'id': 4525,
		'name': 'Lightyears',
		'slug': 'lightyears',
		'symbol': 'YEAR'
	},
	{
		'id': 4545,
		'name': 'City Coin',
		'slug': 'city-coin',
		'symbol': 'CITY'
	},
	{
		'id': 4596,
		'name': 'Cryptyk Token',
		'slug': 'cryptyk-token',
		'symbol': 'CTK'
	},
	{
		'id': 4630,
		'name': 'Sierracoin',
		'slug': 'sierracoin',
		'symbol': 'SIERRA'
	},
	{
		'id': 4677,
		'name': 'Tepleton',
		'slug': 'tepleton',
		'symbol': 'TEP'
	},
	{
		'id': 4787,
		'name': 'BitcoinV',
		'slug': 'bitcoinv',
		'symbol': 'BTCV'
	},
	{
		'id': 4794,
		'name': 'FinexboxToken',
		'slug': 'finexboxtoken',
		'symbol': 'FNB'
	},
	{
		'id': 4797,
		'name': 'SMILE',
		'slug': 'swapcoinz',
		'symbol': 'SMILE'
	},
	{
		'id': 4800,
		'name': 'Mogu',
		'slug': 'mogu',
		'symbol': 'MOGX'
	},
	{
		'id': 4803,
		'name': 'XRP-BF2',
		'slug': 'xrp-bf2',
		'symbol': 'XRP-BF2'
	},
	{
		'id': 4864,
		'name': 'Schilling-Coin',
		'slug': 'schilling-coin',
		'symbol': 'SCH'
	},
	{
		'id': 4914,
		'name': 'Bitcoin & Company Network',
		'slug': 'bitcoin-and-company-network',
		'symbol': 'BITN'
	},
	{
		'id': 4918,
		'name': 'Bankroll Network',
		'slug': 'bankroll-network',
		'symbol': 'BNKR'
	},
	{
		'id': 4920,
		'name': 'Aerotoken',
		'slug': 'aerotoken',
		'symbol': 'AET'
	},
	{
		'id': 4936,
		'name': 'LOLTOKEN',
		'slug': 'loltoken',
		'symbol': 'LOL'
	},
	{
		'id': 5109,
		'name': 'FRED Energy',
		'slug': 'fred-energy',
		'symbol': 'FRED'
	},
	{
		'id': 5135,
		'name': 'AfroDex',
		'slug': 'afrodex',
		'symbol': 'AfroX'
	},
	{
		'id': 5208,
		'name': 'Wallet Plus X',
		'slug': 'wallet-plus-x',
		'symbol': 'WPX'
	},
	{
		'id': 5267,
		'name': 'QUEENBEE',
		'slug': 'queenbee',
		'symbol': 'QBZ'
	},
	{
		'id': 5287,
		'name': 'Zent Cash',
		'slug': 'zent-cash',
		'symbol': 'ZTC'
	},
	{
		'id': 5320,
		'name': 'Bonorum',
		'slug': 'bonorum',
		'symbol': 'BONO'
	},
	{
		'id': 5332,
		'name': 'Cofinex',
		'slug': 'cofinex-coin',
		'symbol': 'CNX'
	},
	{
		'id': 5334,
		'name': 'RAKUN',
		'slug': 'rakun',
		'symbol': 'RAKU'
	},
	{
		'id': 5343,
		'name': 'Five Star Coin',
		'slug': 'five-star-coin',
		'symbol': 'FSC'
	},
	{
		'id': 5355,
		'name': 'Chainpay',
		'slug': 'chainpay',
		'symbol': 'CPAY'
	},
	{
		'id': 5362,
		'name': 'StellarPayGlobal',
		'slug': 'stellarpayglobal',
		'symbol': 'XLPG'
	},
	{
		'id': 5366,
		'name': 'GoalTime N',
		'slug': 'goaltime-n',
		'symbol': 'GTX'
	},
	{
		'id': 5383,
		'name': 'B ONE PAYMENT',
		'slug': 'b-one-payment',
		'symbol': 'B1P'
	},
	{
		'id': 5392,
		'name': 'Scopuly',
		'slug': 'scopuly-coin',
		'symbol': 'SCOP'
	},
	{
		'id': 5400,
		'name': 'Charg Coin',
		'slug': 'charg-coin',
		'symbol': 'CHG'
	},
	{
		'id': 5433,
		'name': 'Mega Lottery Services Global',
		'slug': 'mega-lottery-services-global',
		'symbol': 'MLR'
	},
	{
		'id': 5486,
		'name': 'Jack Token',
		'slug': 'jack-token',
		'symbol': 'JACK'
	},
	{
		'id': 5487,
		'name': 'EarnBet',
		'slug': 'earnbet',
		'symbol': 'BET'
	},
	{
		'id': 5530,
		'name': 'REBIT',
		'slug': 'rebit',
		'symbol': 'KEYT'
	},
	{
		'id': 5542,
		'name': '1x Long Bitcoin Implied Volatility Token',
		'slug': '1x-long-bitcoin-implied-volatility-token',
		'symbol': 'BVOL'
	},
	{
		'id': 5556,
		'name': 'Resfinex Token',
		'slug': 'resfinex-token',
		'symbol': 'RES'
	},
	{
		'id': 5577,
		'name': 'Litecoin SV',
		'slug': 'litecoin-sv',
		'symbol': 'LSV'
	},
	{
		'id': 5651,
		'name': 'CryptoBet',
		'slug': 'cryptobet',
		'symbol': 'CBET'
	},
	{
		'id': 5686,
		'name': 'Vectorium',
		'slug': 'vectorium',
		'symbol': 'VECT'
	},
	{
		'id': 5721,
		'name': 'SorachanCoin',
		'slug': 'sorachancoin',
		'symbol': 'SORA'
	},
	{
		'id': 5732,
		'name': 'BITCOINHEDGE',
		'slug': 'bitcoinhedge',
		'symbol': 'BTCHG'
	},
	{
		'id': 5749,
		'name': 'Aave TUSD',
		'slug': 'aave-tusd',
		'symbol': 'ATUSD'
	},
	{
		'id': 5751,
		'name': 'Aave LINK',
		'slug': 'aave-link',
		'symbol': 'ALINK'
	},
	{
		'id': 5752,
		'name': 'Aave SNX',
		'slug': 'aave-snx',
		'symbol': 'ASNX'
	},
	{
		'id': 5753,
		'name': 'Aave MKR',
		'slug': 'aave-mkr',
		'symbol': 'AMKR'
	},
	{
		'id': 5754,
		'name': 'Aave BAT',
		'slug': 'aave-bat',
		'symbol': 'ABAT'
	},
	{
		'id': 5755,
		'name': 'Aave BUSD',
		'slug': 'aave-busd',
		'symbol': 'ABUSD'
	},
	{
		'id': 5763,
		'name': 'Aave DAI',
		'slug': 'aave-dai',
		'symbol': 'ADAI'
	},
	{
		'id': 5770,
		'name': 'rDAI',
		'slug': 'rdai',
		'symbol': 'RDAI'
	},
	{
		'id': 5779,
		'name': 'Ystar',
		'slug': 'ystar',
		'symbol': 'YSR'
	},
	{
		'id': 5785,
		'name': 'STPAY',
		'slug': 'stpay',
		'symbol': 'STP'
	},
	{
		'id': 5828,
		'name': 'VN Token',
		'slug': 'vn-token',
		'symbol': 'VN'
	},
	{
		'id': 5884,
		'name': 'Decurian',
		'slug': 'decurian',
		'symbol': 'ECU'
	},
	{
		'id': 5926,
		'name': 'CoinZoom',
		'slug': 'coinzoom',
		'symbol': 'ZOOM'
	},
	{
		'id': 5949,
		'name': 'Ulgen Hash Power',
		'slug': 'ulgen-hash-power',
		'symbol': 'UHP'
	},
	{
		'id': 5955,
		'name': 'FME',
		'slug': 'fme',
		'symbol': 'FME'
	},
	{
		'id': 5973,
		'name': 'Vision Network',
		'slug': 'vision-network',
		'symbol': 'VSN'
	},
	{
		'id': 6025,
		'name': 'DigiMax DGMT',
		'slug': 'digimax-dgmt',
		'symbol': 'DGMT'
	},
	{
		'id': 6040,
		'name': '3X Short Cardano Token',
		'slug': '3x-short-cardano-token',
		'symbol': 'ADABEAR'
	},
	{
		'id': 6075,
		'name': 'GIVLY Coin',
		'slug': 'givly-coin',
		'symbol': 'GIV'
	},
	{
		'id': 6094,
		'name': '3X Short Chainlink Token',
		'slug': '3x-short-chainlink-token',
		'symbol': 'LINKBEAR'
	},
	{
		'id': 6126,
		'name': 'BTC Network Demand Set II',
		'slug': 'btc-network-demand-set-ii',
		'symbol': 'BYTE'
	},
	{
		'id': 6129,
		'name': 'ETH 20 Day MA Crossover Set',
		'slug': 'eth-20-day-ma-crossover-set',
		'symbol': 'ETH20SMACO'
	},
	{
		'id': 6130,
		'name': 'ETH 20 Day MA Crossover Yield Set',
		'slug': 'eth-20-day-ma-crossover-yield-set',
		'symbol': 'ETHMACOAPY'
	},
	{
		'id': 6131,
		'name': 'ZYX',
		'slug': 'zyx',
		'symbol': 'ZYX'
	},
	{
		'id': 6139,
		'name': 'ETH/BTC RSI Ratio Trading Set',
		'slug': 'eth-btc-rsi-ratio-trading-set',
		'symbol': 'ETHBTCRSI'
	},
	{
		'id': 6140,
		'name': 'ETH/LINK Price Action Candlestick Set',
		'slug': 'eth-link-price-action-candlestick-set',
		'symbol': 'LINKETHPA'
	},
	{
		'id': 6141,
		'name': 'ETH Price Action Candlestick Set',
		'slug': 'eth-price-action-candlestick-set',
		'symbol': 'ETHPA'
	},
	{
		'id': 6143,
		'name': 'ETH RSI 60/40 Crossover Set',
		'slug': 'eth-rsi-60-40-crossover-set',
		'symbol': 'ETHRSI6040'
	},
	{
		'id': 6155,
		'name': 'Intelligent Ratio Set',
		'slug': 'intelligent-ratio-set',
		'symbol': 'INTRATIO'
	},
	{
		'id': 6158,
		'name': 'LINK/ETH RSI Ratio Trading Set',
		'slug': 'link-eth-rsi-ratio-trading-set',
		'symbol': 'LINKETHRSI'
	},
	{
		'id': 6159,
		'name': 'LINK Profit Taker Set',
		'slug': 'link-profit-taker-set',
		'symbol': 'LINKPT'
	},
	{
		'id': 6225,
		'name': 'Blockchain Exchange Alliance',
		'slug': 'blockchain-exchange-alliance',
		'symbol': 'BXA'
	},
	{
		'id': 6243,
		'name': 'DeFiPie',
		'slug': 'defipie',
		'symbol': 'PIE'
	},
	{
		'id': 6262,
		'name': 'Jubi Token',
		'slug': 'jubi-token',
		'symbol': 'JT'
	},
	{
		'id': 6376,
		'name': 'AVCCOIN',
		'slug': 'avccoin',
		'symbol': 'AVC'
	},
	{
		'id': 6395,
		'name': 'Cherry Token',
		'slug': 'cherry-token',
		'symbol': 'YT'
	},
	{
		'id': 6457,
		'name': 'GLOBALTRUSTFUND TOKEN',
		'slug': 'globaltrustfund-token',
		'symbol': 'GTF'
	},
	{
		'id': 6468,
		'name': 'PeerEx',
		'slug': 'peerex',
		'symbol': 'PERX'
	},
	{
		'id': 6507,
		'name': 'Kulupu',
		'slug': 'kulupu',
		'symbol': 'KLP'
	},
	{
		'id': 6532,
		'name': 'Mandi Token',
		'slug': 'mandi-token',
		'symbol': 'MANDI'
	},
	{
		'id': 6558,
		'name': 'Xrpalike Gene',
		'slug': 'xrpalike-gene',
		'symbol': 'XAG'
	},
	{
		'id': 6565,
		'name': 'TideBit Token',
		'slug': 'tidebit-token',
		'symbol': 'TBT'
	},
	{
		'id': 6591,
		'name': 'SBET',
		'slug': 'sbet',
		'symbol': 'SBET'
	},
	{
		'id': 6602,
		'name': 'XFUEL',
		'slug': 'xfuel',
		'symbol': 'XFUEL'
	},
	{
		'id': 6626,
		'name': 'SPACE-iZ',
		'slug': 'space-iz',
		'symbol': 'SPIZ'
	},
	{
		'id': 6653,
		'name': 'FolgoryUSD',
		'slug': 'folgoryusd',
		'symbol': 'USDF'
	},
	{
		'id': 6655,
		'name': 'Krosscoin',
		'slug': 'krosscoin',
		'symbol': 'KSS'
	},
	{
		'id': 6664,
		'name': 'GRAP',
		'slug': 'grap',
		'symbol': 'GRAP'
	},
	{
		'id': 6682,
		'name': 'Pollux Coin',
		'slug': 'pollux-coin',
		'symbol': 'POX'
	},
	{
		'id': 6685,
		'name': 'Newtonium',
		'slug': 'newtonium',
		'symbol': 'NEWTON'
	},
	{
		'id': 6686,
		'name': 'yVault LP-yCurve',
		'slug': 'yvault-lp-ycurve',
		'symbol': 'yVault LP-yCurve(YYCRV)'
	},
	{
		'id': 6693,
		'name': 'OC Protocol',
		'slug': 'oc-protocol',
		'symbol': 'OCP'
	},
	{
		'id': 6704,
		'name': 'JBOX',
		'slug': 'jboxcoin',
		'symbol': 'JBX'
	},
	{
		'id': 6732,
		'name': 'Deonex Token',
		'slug': 'deonex-token',
		'symbol': 'DON'
	},
	{
		'id': 6760,
		'name': 'Easticoin',
		'slug': 'easticoin',
		'symbol': 'ESTI'
	},
	{
		'id': 6765,
		'name': 'ESR Coin',
		'slug': 'esr-coin',
		'symbol': 'ESRC'
	},
	{
		'id': 6775,
		'name': 'Dipper Network',
		'slug': 'dipper-network',
		'symbol': 'DIP'
	},
	{
		'id': 6909,
		'name': 'YFA Finance',
		'slug': 'yfa-finance',
		'symbol': 'YFA'
	},
	{
		'id': 6978,
		'name': 'Candela Coin',
		'slug': 'candelacoin',
		'symbol': 'CLA'
	},
	{
		'id': 7030,
		'name': 'Betherchip',
		'slug': 'betherchip',
		'symbol': 'BEC'
	},
	{
		'id': 7036,
		'name': 'Lottonation',
		'slug': 'lottonation',
		'symbol': 'LNT'
	},
	{
		'id': 7077,
		'name': 'UniFi Protocol',
		'slug': 'unifi-protocol',
		'symbol': 'UP'
	},
	{
		'id': 7241,
		'name': 'AmericanHorror.Finance',
		'slug': 'americanhorror-finance',
		'symbol': 'AHF'
	},
	{
		'id': 7257,
		'name': 'APEcoin.dev',
		'slug': 'apecoin',
		'symbol': 'APE'
	},
	{
		'id': 7263,
		'name': 'HLP Token',
		'slug': 'help-coin',
		'symbol': 'HLP'
	},
	{
		'id': 7333,
		'name': 'DeFi Insurance Protocol',
		'slug': 'defi-insurance-protocol',
		'symbol': 'DFIP'
	},
	{
		'id': 7379,
		'name': 'LimitSwap',
		'slug': 'limitswap',
		'symbol': 'LIMIT'
	},
	{
		'id': 7448,
		'name': 'LCG',
		'slug': 'lcg',
		'symbol': 'LCG'
	},
	{
		'id': 7510,
		'name': 'QuiverX',
		'slug': 'quiverx',
		'symbol': 'QRX'
	},
	{
		'id': 7513,
		'name': 'BitOnyx',
		'slug': 'bitonyx',
		'symbol': 'BTNYX'
	},
	{
		'id': 7536,
		'name': 'Aspire',
		'slug': 'aspire',
		'symbol': 'ASP'
	},
	{
		'id': 7558,
		'name': 'Dollar on Chain',
		'slug': 'dollar-on-chain',
		'symbol': 'DOC'
	},
	{
		'id': 7583,
		'name': 'Auric Network',
		'slug': 'auric-network',
		'symbol': 'AUSCM'
	},
	{
		'id': 7597,
		'name': 'CSP DAO',
		'slug': 'csp-dao',
		'symbol': 'NEBO'
	},
	{
		'id': 7623,
		'name': 'Libartysharetoken',
		'slug': 'libartysharetoken',
		'symbol': 'LST'
	},
	{
		'id': 7687,
		'name': 'Folder Protocol',
		'slug': 'folder-protocol',
		'symbol': 'FOL'
	},
	{
		'id': 7748,
		'name': 'BSC FARM',
		'slug': 'bsc-farm',
		'symbol': 'BSC'
	},
	{
		'id': 7753,
		'name': 'BIOKKOIN',
		'slug': 'biokkoin',
		'symbol': 'BKKG'
	},
	{
		'id': 7763,
		'name': 'BlackDragon',
		'slug': 'blackdragon',
		'symbol': 'BDT'
	},
	{
		'id': 7815,
		'name': 'DefiCliq',
		'slug': 'deficliq',
		'symbol': 'CLIQ'
	},
	{
		'id': 7819,
		'name': 'Unicap.finance',
		'slug': 'unicap-finance',
		'symbol': 'UCAP'
	},
	{
		'id': 7828,
		'name': 'KING OF DEFI',
		'slug': 'king-of-defi',
		'symbol': 'KODX'
	},
	{
		'id': 7880,
		'name': 'YFIDapp',
		'slug': 'yfidapp',
		'symbol': 'YFID'
	},
	{
		'id': 7947,
		'name': 'Rank Token',
		'slug': 'rank-token',
		'symbol': 'RANK'
	},
	{
		'id': 7972,
		'name': 'Honey',
		'slug': 'honey-token',
		'symbol': 'HNY'
	},
	{
		'id': 7985,
		'name': 'Global Smart Asset',
		'slug': 'global-smart-asset',
		'symbol': 'GSA'
	},
	{
		'id': 8014,
		'name': 'FNK wallet',
		'slug': 'fnk-wallet',
		'symbol': 'FNK'
	},
	{
		'id': 8079,
		'name': 'Dexfin',
		'slug': 'dexfin',
		'symbol': 'DXF'
	},
	{
		'id': 8087,
		'name': 'FastSwap',
		'slug': 'fastswap',
		'symbol': 'FAST'
	},
	{
		'id': 8112,
		'name': 'Bankcoin',
		'slug': 'the-bank-coin',
		'symbol': 'BANK'
	},
	{
		'id': 8121,
		'name': 'Themis',
		'slug': 'themis-oracle',
		'symbol': 'MIS'
	},
	{
		'id': 8125,
		'name': 'Unique One',
		'slug': 'unique-one',
		'symbol': 'RARE'
	},
	{
		'id': 8180,
		'name': 'Action Coin',
		'slug': 'action-coin',
		'symbol': 'ACTN'
	},
	{
		'id': 8184,
		'name': 'Havens Nook',
		'slug': 'havens-nook',
		'symbol': 'HXN'
	},
	{
		'id': 8185,
		'name': 'Trism',
		'slug': 'trism',
		'symbol': 'TRISM'
	},
	{
		'id': 8186,
		'name': 'Banana.finance',
		'slug': 'banana-finance',
		'symbol': 'BANANA'
	},
	{
		'id': 8189,
		'name': 'Shabu Shabu Finance',
		'slug': 'shabu-shabu-finance',
		'symbol': 'KOBE'
	},
	{
		'id': 8196,
		'name': 'Mantis',
		'slug': 'mantis',
		'symbol': 'MNTIS'
	},
	{
		'id': 8215,
		'name': 'PrimeFinance',
		'slug': 'primefinance',
		'symbol': 'PFI'
	},
	{
		'id': 8224,
		'name': 'Dequant',
		'slug': 'dequant',
		'symbol': 'DEQ'
	},
	{
		'id': 8243,
		'name': 'Passive Income',
		'slug': 'passive-income',
		'symbol': 'PSI'
	},
	{
		'id': 8252,
		'name': 'pBTC35A',
		'slug': 'pbtc35a',
		'symbol': 'pBTC35A'
	},
	{
		'id': 8266,
		'name': 'Mandala Exchange Token',
		'slug': 'mandala-exchange-token',
		'symbol': 'MDXT'
	},
	{
		'id': 8287,
		'name': 'Universal Gold',
		'slug': 'universal-gold',
		'symbol': 'UPXAU'
	},
	{
		'id': 8293,
		'name': 'Zero Exchange',
		'slug': 'zero-exchange',
		'symbol': 'ZERO'
	},
	{
		'id': 8372,
		'name': 'XNODE',
		'slug': 'xnode',
		'symbol': 'XNODE'
	},
	{
		'id': 8375,
		'name': 'GOGO.finance',
		'slug': 'gogo-finance',
		'symbol': 'GOGO'
	},
	{
		'id': 8390,
		'name': 'Strudel Finance',
		'slug': 'strudel-finance',
		'symbol': '$TRDL'
	},
	{
		'id': 8441,
		'name': 'XCF Token',
		'slug': 'cenfura-token',
		'symbol': 'XCF'
	},
	{
		'id': 8453,
		'name': 'Tigerfinance',
		'slug': 'tigerfinance',
		'symbol': 'TIGER'
	},
	{
		'id': 8454,
		'name': 'Radar',
		'slug': 'radar',
		'symbol': 'RADAR'
	},
	{
		'id': 8518,
		'name': 'Chickenkebab Finance',
		'slug': 'chickenkebab-finance',
		'symbol': 'CHIK'
	},
	{
		'id': 8560,
		'name': 'WhaleRoom',
		'slug': 'whaleroom',
		'symbol': 'WHL'
	},
	{
		'id': 8594,
		'name': 'Aave Enjin',
		'slug': 'aave-enjin',
		'symbol': 'aENJ'
	},
	{
		'id': 8595,
		'name': 'Aave Ethereum',
		'slug': 'aave-ethereum',
		'symbol': 'aETH'
	},
	{
		'id': 8619,
		'name': 'Moola',
		'slug': 'moola',
		'symbol': 'MLA'
	},
	{
		'id': 8625,
		'name': 'SaltSwap Finance',
		'slug': 'saltswap-finance',
		'symbol': 'SALT'
	},
	{
		'id': 8633,
		'name': 'Nodestats',
		'slug': 'nodestats',
		'symbol': 'NS'
	},
	{
		'id': 8638,
		'name': 'MIMOSA',
		'slug': 'mimosa',
		'symbol': 'MIMO'
	},
	{
		'id': 8659,
		'name': 'Jetfuel Finance',
		'slug': 'jetfuel-finance',
		'symbol': 'FUEL'
	},
	{
		'id': 8682,
		'name': 'Warrior Token',
		'slug': 'warrior-token-spartan-casino',
		'symbol': 'WAR'
	},
	{
		'id': 8740,
		'name': 'SHD CASH',
		'slug': 'shd-cash',
		'symbol': 'SHDC'
	},
	{
		'id': 8761,
		'name': 'Decentralized Nations',
		'slug': 'decentralized-nations',
		'symbol': 'DENA'
	},
	{
		'id': 8814,
		'name': 'Donnie Finance',
		'slug': 'donnie-finance',
		'symbol': 'DON'
	},
	{
		'id': 8835,
		'name': 'xMARK',
		'slug': 'xmark',
		'symbol': 'XMARK'
	},
	{
		'id': 8840,
		'name': 'DailySwap Token',
		'slug': 'dailyswap-token',
		'symbol': 'DAILYS'
	},
	{
		'id': 8850,
		'name': 'Viper Protocol',
		'slug': 'viper-protocol',
		'symbol': 'VIPER'
	},
	{
		'id': 8852,
		'name': 'UME Token',
		'slug': 'ume-token',
		'symbol': 'UME'
	},
	{
		'id': 8854,
		'name': 'FXT Token',
		'slug': 'fxt-token',
		'symbol': 'FXT'
	},
	{
		'id': 8902,
		'name': 'FM Gallery',
		'slug': 'fm-gallery',
		'symbol': 'FMG'
	},
	{
		'id': 8908,
		'name': 'ImpulseVen',
		'slug': 'impulseven',
		'symbol': 'VEN'
	},
	{
		'id': 8910,
		'name': 'Daily',
		'slug': 'daily',
		'symbol': 'DAILY'
	},
	{
		'id': 9008,
		'name': 'AMMYI Coin',
		'slug': 'ammyi-coin',
		'symbol': 'AMI'
	},
	{
		'id': 9022,
		'name': 'Satoshi',
		'slug': 'satoshi',
		'symbol': 'SATS'
	},
	{
		'id': 9023,
		'name': 'Bit',
		'slug': 'bit',
		'symbol': 'BITS'
	},
	{
		'id': 9055,
		'name': 'BerrySwap',
		'slug': 'berryswap',
		'symbol': 'BERRY'
	},
	{
		'id': 9075,
		'name': 'Bafi Finance',
		'slug': 'bafi-finance',
		'symbol': 'BAFI'
	},
	{
		'id': 9124,
		'name': 'Manyswap',
		'slug': 'manyswap',
		'symbol': 'MANY'
	},
	{
		'id': 9138,
		'name': 'PhoenixDefi.Finance',
		'slug': 'phoenixdefi-finance',
		'symbol': 'PNIX'
	},
	{
		'id': 9150,
		'name': 'Orakuru',
		'slug': 'orakuru',
		'symbol': 'ORK'
	},
	{
		'id': 9208,
		'name': 'SafeLight',
		'slug': 'safelight',
		'symbol': 'SAFELIGHT'
	},
	{
		'id': 9215,
		'name': 'Smartlink',
		'slug': 'smartlink',
		'symbol': 'SMAK'
	},
	{
		'id': 9272,
		'name': 'Munch Token',
		'slug': 'munch-token',
		'symbol': 'MUNCH'
	},
	{
		'id': 9292,
		'name': 'Bitsz',
		'slug': 'bitsz',
		'symbol': 'BITSZ'
	},
	{
		'id': 9330,
		'name': 'BIXBCOIN',
		'slug': 'bixbcoin',
		'symbol': 'BIXB'
	},
	{
		'id': 9355,
		'name': 'DoveSwap Finance',
		'slug': 'doveswap-finance',
		'symbol': 'DOVE'
	},
	{
		'id': 9387,
		'name': 'Husky',
		'slug': 'husky',
		'symbol': 'HUSKY'
	},
	{
		'id': 9407,
		'name': 'AlgOil',
		'slug': 'algoil',
		'symbol': 'AGOLP'
	},
	{
		'id': 9433,
		'name': 'GazeTV',
		'slug': 'gazetv',
		'symbol': 'GAZE'
	},
	{
		'id': 9453,
		'name': 'Agave',
		'slug': 'agave',
		'symbol': 'AGVE'
	},
	{
		'id': 9480,
		'name': 'Hope',
		'slug': 'hope-token',
		'symbol': 'HOPE'
	},
	{
		'id': 9502,
		'name': 'Pippi Finance',
		'slug': 'pippi-finance',
		'symbol': 'PIPI'
	},
	{
		'id': 9554,
		'name': 'EtherSmart',
		'slug': 'ethersmart',
		'symbol': 'ETM'
	},
	{
		'id': 9569,
		'name': 'OXO.Farm',
		'slug': 'oxo-farm',
		'symbol': 'OXO'
	},
	{
		'id': 9592,
		'name': 'Fortress Lending',
		'slug': 'fortress-lending',
		'symbol': 'FTS'
	},
	{
		'id': 9620,
		'name': 'Wrapped Statera',
		'slug': 'wrapped-statera',
		'symbol': 'WSTA'
	},
	{
		'id': 9631,
		'name': 'Kally',
		'slug': 'polkally',
		'symbol': 'KALLY'
	},
	{
		'id': 9660,
		'name': 'Parasset',
		'slug': 'parasset',
		'symbol': 'ASET'
	},
	{
		'id': 9678,
		'name': 'Total Crypto Market Cap Token',
		'slug': 'total-crypto-market-cap-token',
		'symbol': 'TCAP'
	},
	{
		'id': 9708,
		'name': 'ShibaPup',
		'slug': 'shibapup',
		'symbol': 'SHIBAPUP'
	},
	{
		'id': 9719,
		'name': 'Woofy',
		'slug': 'woofy',
		'symbol': 'WOOFY'
	},
	{
		'id': 9801,
		'name': 'Celestial Finance',
		'slug': 'celestial-finance',
		'symbol': 'CELES'
	},
	{
		'id': 9820,
		'name': 'Metaverse NFT Index',
		'slug': 'metaverse-nft-index',
		'symbol': 'PLAY'
	},
	{
		'id': 9844,
		'name': 'Atlantic Finance Token',
		'slug': 'atlantic-finance-token',
		'symbol': 'ATFI'
	},
	{
		'id': 9859,
		'name': 'YUMMY',
		'slug': 'yummy',
		'symbol': 'YUMMY'
	},
	{
		'id': 9872,
		'name': 'TheFutbolCoin',
		'slug': 'thefutbolcoin',
		'symbol': 'TFC'
	},
	{
		'id': 9898,
		'name': 'Wenlambo',
		'slug': 'wenlambo',
		'symbol': 'WLBO'
	},
	{
		'id': 9904,
		'name': 'GeroWallet',
		'slug': 'gerowallet',
		'symbol': 'GERO'
	},
	{
		'id': 9910,
		'name': 'Football Stars',
		'slug': 'football-stars',
		'symbol': 'FootballStars'
	},
	{
		'id': 9925,
		'name': 'Pampther',
		'slug': 'pampther',
		'symbol': 'PAMPTHER'
	},
	{
		'id': 9981,
		'name': 'Weentar',
		'slug': 'weentar',
		'symbol': '$WNTR'
	},
	{
		'id': 9991,
		'name': 'Charli3',
		'slug': 'charli3',
		'symbol': 'C3'
	},
	{
		'id': 10079,
		'name': 'Quidax Token',
		'slug': 'quidax',
		'symbol': 'QDX'
	},
	{
		'id': 10114,
		'name': 'NFT Starter',
		'slug': 'nft-starter',
		'symbol': 'NST'
	},
	{
		'id': 10123,
		'name': 'NFT TOKEN PILOT',
		'slug': 'nft-token-pilot',
		'symbol': 'NFTP'
	},
	{
		'id': 10136,
		'name': 'SIL Finance',
		'slug': 'sil-finance',
		'symbol': 'SIL'
	},
	{
		'id': 10145,
		'name': 'DeFinity',
		'slug': 'definity',
		'symbol': 'DEFX'
	},
	{
		'id': 10151,
		'name': 'Foliowatch',
		'slug': 'foliowatch',
		'symbol': 'FWATCH'
	},
	{
		'id': 10157,
		'name': 'Sustainable Energy Token',
		'slug': 'sustainable-energy-token',
		'symbol': 'SET'
	},
	{
		'id': 10208,
		'name': 'Aerdrop',
		'slug': 'aerdrop',
		'symbol': 'AER'
	},
	{
		'id': 10234,
		'name': 'Draken',
		'slug': 'draken',
		'symbol': 'DRK'
	},
	{
		'id': 10303,
		'name': 'AutoShark',
		'slug': 'autoshark',
		'symbol': 'JAWS'
	},
	{
		'id': 10348,
		'name': 'Sarcophagus',
		'slug': 'sarcophagus',
		'symbol': 'SARCO'
	},
	{
		'id': 10351,
		'name': 'HTMOON',
		'slug': 'htmoon',
		'symbol': 'HTMOON'
	},
	{
		'id': 10353,
		'name': 'POKELON',
		'slug': 'pokelon',
		'symbol': 'POKELON'
	},
	{
		'id': 10361,
		'name': 'Feyorra',
		'slug': 'feyorra',
		'symbol': 'FEY'
	},
	{
		'id': 10378,
		'name': 'KarenCoin',
		'slug': 'karencoin',
		'symbol': 'KAREN'
	},
	{
		'id': 10384,
		'name': 'DAO1',
		'slug': 'dao1',
		'symbol': 'DAO1'
	},
	{
		'id': 10387,
		'name': 'Star Foxx',
		'slug': 'star-foxx',
		'symbol': 'FOXX'
	},
	{
		'id': 10388,
		'name': 'SupremeX',
		'slug': 'supremex',
		'symbol': 'SXC'
	},
	{
		'id': 10402,
		'name': 'BlackPool',
		'slug': 'blackpool',
		'symbol': 'BPT'
	},
	{
		'id': 10443,
		'name': 'BarbecueSwap Finance',
		'slug': 'barbecueswap-finance',
		'symbol': 'BBQ'
	},
	{
		'id': 10519,
		'name': 'Curio Stable Coin',
		'slug': 'curio-stable-coin',
		'symbol': 'CSC'
	},
	{
		'id': 10578,
		'name': 'Myōbu',
		'slug': 'myobu',
		'symbol': 'MYOBU'
	},
	{
		'id': 10592,
		'name': 'Lith Token',
		'slug': 'lith-token',
		'symbol': 'LITx'
	},
	{
		'id': 10604,
		'name': 'Kika',
		'slug': 'kika',
		'symbol': 'KIKA'
	},
	{
		'id': 10609,
		'name': 'Fanspel',
		'slug': 'fanspel',
		'symbol': 'FAN'
	},
	{
		'id': 10632,
		'name': 'Nimbus Governance Token',
		'slug': 'nimbus-governance-token',
		'symbol': 'GNBU'
	},
	{
		'id': 10682,
		'name': 'EverMars',
		'slug': 'evermars',
		'symbol': 'EVM'
	},
	{
		'id': 10703,
		'name': 'HyperAurora',
		'slug': 'hyperjump-aurora',
		'symbol': 'AURORA'
	},
	{
		'id': 10705,
		'name': 'CoinSwap Space',
		'slug': 'coinswap-space',
		'symbol': 'CSS'
	},
	{
		'id': 10721,
		'name': 'TacoCat Token',
		'slug': 'tacocat-token',
		'symbol': 'TCT'
	},
	{
		'id': 10797,
		'name': 'ACryptoSI',
		'slug': 'acryptosi',
		'symbol': 'ACSI'
	},
	{
		'id': 10807,
		'name': 'CoinW Token',
		'slug': 'coinw-token',
		'symbol': 'CWT'
	},
	{
		'id': 10810,
		'name': 'Jetswap.finance',
		'slug': 'jetswap-finance',
		'symbol': 'WINGS'
	},
	{
		'id': 10839,
		'name': 'Yield Parrot',
		'slug': 'yield-parrot',
		'symbol': 'LORY'
	},
	{
		'id': 10921,
		'name': 'Rise Of Nebula',
		'slug': 'rise-of-nebula',
		'symbol': 'RON'
	},
	{
		'id': 10965,
		'name': 'XXT-Token',
		'slug': 'xxt-token',
		'symbol': 'XXT'
	},
	{
		'id': 10978,
		'name': 'PolkaCipher',
		'slug': 'polkacipher',
		'symbol': 'CPHR'
	},
	{
		'id': 10990,
		'name': 'DAppNode',
		'slug': 'dappnode',
		'symbol': 'NODE'
	},
	{
		'id': 11009,
		'name': 'Military Finance',
		'slug': 'military-finance',
		'symbol': 'MIL'
	},
	{
		'id': 11043,
		'name': 'Gambler Shiba',
		'slug': 'gambler-shiba',
		'symbol': 'GSHIBA'
	},
	{
		'id': 11106,
		'name': 'Binamars',
		'slug': 'binamars',
		'symbol': 'BMARS'
	},
	{
		'id': 11119,
		'name': 'Bimp.Finance',
		'slug': 'bimp-finance',
		'symbol': 'BIMP'
	},
	{
		'id': 11146,
		'name': 'Jswap.Finance',
		'slug': 'jswap-finance',
		'symbol': 'JF'
	},
	{
		'id': 11185,
		'name': 'TABANK',
		'slug': 'tabank',
		'symbol': 'TAB'
	},
	{
		'id': 11194,
		'name': 'Wallet Swap',
		'slug': 'wallet-swap',
		'symbol': 'WSWAP'
	},
	{
		'id': 11216,
		'name': 'Boost Coin',
		'slug': 'boost-coin',
		'symbol': 'BOOST'
	},
	{
		'id': 11219,
		'name': 'Baby Doug',
		'slug': 'baby-doug',
		'symbol': 'BABYDOUG'
	},
	{
		'id': 11235,
		'name': 'BUMooN',
		'slug': 'bumoon',
		'symbol': 'BUMN'
	},
	{
		'id': 11313,
		'name': 'Beast Token',
		'slug': 'beast-token',
		'symbol': 'BEAST'
	},
	{
		'id': 11321,
		'name': 'YDragon',
		'slug': 'ydragon',
		'symbol': 'YDR'
	},
	{
		'id': 11326,
		'name': 'SoccerHub',
		'slug': 'soccerhub',
		'symbol': 'SCH'
	},
	{
		'id': 11347,
		'name': 'Nuketoken',
		'slug': 'nuketoken',
		'symbol': 'NUKE'
	},
	{
		'id': 11355,
		'name': 'Bzzone',
		'slug': 'bzzone',
		'symbol': 'BZZONE'
	},
	{
		'id': 11359,
		'name': 'Dragon Slayer',
		'slug': 'dragon-slayer',
		'symbol': 'DRS'
	},
	{
		'id': 11363,
		'name': 'GrimToken',
		'slug': 'grimtoken',
		'symbol': 'GRIM'
	},
	{
		'id': 11364,
		'name': 'RoboDoge Coin',
		'slug': 'robodoge-coin',
		'symbol': 'ROBODOGE'
	},
	{
		'id': 11377,
		'name': '1Doge',
		'slug': '1doge',
		'symbol': '1DOGE'
	},
	{
		'id': 11378,
		'name': 'Covid Token',
		'slug': 'covid-token',
		'symbol': 'COVIDTOKEN'
	},
	{
		'id': 11407,
		'name': 'Pocket',
		'slug': 'pocket-doge',
		'symbol': 'PCKT'
	},
	{
		'id': 11431,
		'name': 'Minimals',
		'slug': 'minimals',
		'symbol': 'MMS'
	},
	{
		'id': 11433,
		'name': 'Ape Fun Token',
		'slug': 'ape-fun-token',
		'symbol': 'AFT'
	},
	{
		'id': 11505,
		'name': 'Pet Games',
		'slug': 'pet-games',
		'symbol': 'PETG'
	},
	{
		'id': 11525,
		'name': 'Entropyfi',
		'slug': 'entropyfi',
		'symbol': 'ERP'
	},
	{
		'id': 11537,
		'name': 'GridZone.io',
		'slug': 'gridzone',
		'symbol': 'ZONE'
	},
	{
		'id': 11555,
		'name': 'UnderMineGold',
		'slug': 'underinegold',
		'symbol': 'UMG'
	},
	{
		'id': 11559,
		'name': 'Wault USD',
		'slug': 'wault-usd',
		'symbol': 'WUSD'
	},
	{
		'id': 11591,
		'name': 'Raid Token',
		'slug': 'raid-token',
		'symbol': 'RAID'
	},
	{
		'id': 11619,
		'name': 'Deswap',
		'slug': 'deswap',
		'symbol': 'DAW'
	},
	{
		'id': 11669,
		'name': 'Footie Plus',
		'slug': 'footie-plus',
		'symbol': 'FOOTIE'
	},
	{
		'id': 11698,
		'name': 'Club Donkey',
		'slug': 'club-donkey',
		'symbol': 'CDONK'
	},
	{
		'id': 11707,
		'name': 'Sona Network',
		'slug': 'sona-network',
		'symbol': 'SONA'
	},
	{
		'id': 11728,
		'name': 'Attrace',
		'slug': 'attrace',
		'symbol': 'ATTR'
	},
	{
		'id': 11753,
		'name': 'Cycle Finance',
		'slug': 'cycle-finance',
		'symbol': 'CYCLE'
	},
	{
		'id': 11784,
		'name': 'Scientix',
		'slug': 'scientix',
		'symbol': 'SCIX'
	},
	{
		'id': 11806,
		'name': 'Eternal Oasis',
		'slug': 'eternal-oasis',
		'symbol': 'ETOS'
	},
	{
		'id': 11813,
		'name': 'Afreum',
		'slug': 'afreum',
		'symbol': 'AFR'
	},
	{
		'id': 11822,
		'name': 'Good Bridging',
		'slug': 'good-bridging',
		'symbol': 'GB'
	},
	{
		'id': 11854,
		'name': 'ArbiNYAN',
		'slug': 'arbinyan',
		'symbol': 'NYAN'
	},
	{
		'id': 11889,
		'name': 'Solminter',
		'slug': 'solminter',
		'symbol': 'SMRT'
	},
	{
		'id': 11894,
		'name': 'Ecochaintoken',
		'slug': 'ecochaintoken',
		'symbol': 'ECT'
	},
	{
		'id': 11914,
		'name': 'Phat Doge Givings',
		'slug': 'phat-doge-givings',
		'symbol': 'GIVING'
	},
	{
		'id': 11916,
		'name': 'Minerva Wallet',
		'slug': 'minerva-wallet',
		'symbol': 'MIVA'
	},
	{
		'id': 11924,
		'name': 'Amasa',
		'slug': 'amasa',
		'symbol': 'AMAS'
	},
	{
		'id': 11937,
		'name': 'ArbiFarm',
		'slug': 'arbifarm',
		'symbol': 'AFARM'
	},
	{
		'id': 11947,
		'name': 'HeroVerse',
		'slug': 'heroverse',
		'symbol': 'HER'
	},
	{
		'id': 11962,
		'name': 'Bright Token',
		'slug': 'bright-token',
		'symbol': 'BRIGHT'
	},
	{
		'id': 11969,
		'name': 'SolDate Token',
		'slug': 'soldate-token',
		'symbol': 'DATE'
	},
	{
		'id': 11981,
		'name': 'Lucky Unicorn Token',
		'slug': 'lucky-unicorn-token',
		'symbol': 'L99'
	},
	{
		'id': 12020,
		'name': 'Solbank Token',
		'slug': 'solbank-token',
		'symbol': 'SBNK'
	},
	{
		'id': 12047,
		'name': 'Agrinoble',
		'slug': 'agrinoble',
		'symbol': 'AGN'
	},
	{
		'id': 12059,
		'name': 'ShibaNova',
		'slug': 'shibanova',
		'symbol': 'NOVA'
	},
	{
		'id': 12096,
		'name': 'CRIR MSH',
		'slug': 'crir-msh',
		'symbol': 'MSH'
	},
	{
		'id': 12116,
		'name': 'Diamond Boyz Coin',
		'slug': 'diamond-boyz-coin',
		'symbol': 'DBZ'
	},
	{
		'id': 12117,
		'name': 'Ecosystem Coin Network',
		'slug': 'ec-bet-network',
		'symbol': 'ECN'
	},
	{
		'id': 12154,
		'name': 'Everest Token',
		'slug': 'everest-token',
		'symbol': 'EVRT'
	},
	{
		'id': 12183,
		'name': 'Loki Variants Fan',
		'slug': 'loki-variants-fan',
		'symbol': 'VARIANTS'
	},
	{
		'id': 12192,
		'name': 'RugZombie',
		'slug': 'rugzombie',
		'symbol': 'ZMBE'
	},
	{
		'id': 12227,
		'name': 'DareNFT',
		'slug': 'darenft',
		'symbol': 'DNFT'
	},
	{
		'id': 12237,
		'name': 'Dragon Egg',
		'slug': 'dragon-egg',
		'symbol': 'DREGG'
	},
	{
		'id': 12254,
		'name': 'Gro DAO Token',
		'slug': 'gro-dao-token',
		'symbol': 'GRO'
	},
	{
		'id': 12257,
		'name': 'XTRA Token',
		'slug': 'xtra-token',
		'symbol': 'XTRA'
	},
	{
		'id': 12285,
		'name': 'Plenty DeFi',
		'slug': 'plenty-dao',
		'symbol': 'PLENTY'
	},
	{
		'id': 12287,
		'name': 'Bankless BED Index',
		'slug': 'bankless-bed-index',
		'symbol': 'BED'
	},
	{
		'id': 12314,
		'name': 'WonderHero',
		'slug': 'wonderhero',
		'symbol': 'WND'
	},
	{
		'id': 12342,
		'name': 'SAVE CARDANO',
		'slug': 'save-cardano',
		'symbol': 'SADA'
	},
	{
		'id': 12390,
		'name': 'Octane Finance',
		'slug': 'octane-finance',
		'symbol': 'OCTANE'
	},
	{
		'id': 12391,
		'name': 'Pokmonsters',
		'slug': 'pokmonsters',
		'symbol': 'POK'
	},
	{
		'id': 12410,
		'name': 'WHACKD',
		'slug': 'whackd',
		'symbol': 'WHACKD'
	},
	{
		'id': 12420,
		'name': 'LuckyPig',
		'slug': 'luckypig',
		'symbol': 'LuckyPig'
	},
	{
		'id': 12434,
		'name': 'Unity Protocol',
		'slug': 'unity-protocol',
		'symbol': 'UNITY'
	},
	{
		'id': 12438,
		'name': 'zkTube Protocol',
		'slug': 'zktube-protocol',
		'symbol': 'ZKT'
	},
	{
		'id': 12467,
		'name': 'RISQ Protocol',
		'slug': 'risq-protocol',
		'symbol': 'RISQ'
	},
	{
		'id': 12477,
		'name': 'Sewer Rat Social Club CHIZ Token',
		'slug': 'sewer-rat-social-club-chiz-token',
		'symbol': 'CHIZ'
	},
	{
		'id': 12513,
		'name': 'Dino',
		'slug': 'dino',
		'symbol': 'DINO'
	},
	{
		'id': 12523,
		'name': 'BurningMoon',
		'slug': 'burningmoon',
		'symbol': 'BM'
	},
	{
		'id': 12530,
		'name': 'Project DogeX',
		'slug': 'project-dogex-v2',
		'symbol': '$DOGEX'
	},
	{
		'id': 12590,
		'name': 'AutoShark DEX',
		'slug': 'autoshark-dex',
		'symbol': 'FINS'
	},
	{
		'id': 12648,
		'name': 'Wrapped Curio Ferrari F12tdf',
		'slug': 'wrapped-curio-ferrari-f12tdf',
		'symbol': 'WCT1'
	},
	{
		'id': 12702,
		'name': 'TAPME Token',
		'slug': 'taptoken',
		'symbol': 'TAP'
	},
	{
		'id': 12713,
		'name': 'Rijent Coin',
		'slug': 'rijent-coin',
		'symbol': 'RTC'
	},
	{
		'id': 12724,
		'name': 'Soakmont',
		'slug': 'soakmont',
		'symbol': 'SKMT'
	},
	{
		'id': 12731,
		'name': 'Ideanet Token',
		'slug': 'ideanet-token',
		'symbol': 'INET'
	},
	{
		'id': 12738,
		'name': 'DEIP Protocol',
		'slug': 'deip-protocol',
		'symbol': 'DEIP'
	},
	{
		'id': 12757,
		'name': 'Worthwhile',
		'slug': 'worthwhile',
		'symbol': 'WHE'
	},
	{
		'id': 12792,
		'name': 'Nexus Crypto Services',
		'slug': 'nexus-folio',
		'symbol': '$NEXUS'
	},
	{
		'id': 12798,
		'name': 'Duelist King',
		'slug': 'duelist-king',
		'symbol': 'DKT'
	},
	{
		'id': 12802,
		'name': 'Futura Finance',
		'slug': 'futura-finance',
		'symbol': 'FFT'
	},
	{
		'id': 12810,
		'name': 'Devikins',
		'slug': 'devikins',
		'symbol': 'DVK'
	},
	{
		'id': 12839,
		'name': 'Kintaman',
		'slug': 'kintaman',
		'symbol': 'KINTA'
	},
	{
		'id': 12854,
		'name': 'PAPPAY',
		'slug': 'pappay',
		'symbol': 'PAPPAY'
	},
	{
		'id': 12868,
		'name': 'Pikachu Inu',
		'slug': 'pikachu-inu',
		'symbol': 'PIKACHU'
	},
	{
		'id': 12870,
		'name': 'CocktailBar',
		'slug': 'cocktail-bar',
		'symbol': 'COC'
	},
	{
		'id': 12907,
		'name': 'Vires Finance',
		'slug': 'vires-finance',
		'symbol': 'VIRES'
	},
	{
		'id': 12909,
		'name': 'Moby Dick',
		'slug': 'moby-dick',
		'symbol': 'WOT'
	},
	{
		'id': 12928,
		'name': 'Pangolin Swap',
		'slug': 'pangolin-swap',
		'symbol': 'PANGOLIN'
	},
	{
		'id': 12944,
		'name': 'ShibaWallet',
		'slug': 'shiba-wallet',
		'symbol': 'SHWA'
	},
	{
		'id': 12956,
		'name': 'Wanda Exchange',
		'slug': 'wanda-exchange',
		'symbol': 'WE'
	},
	{
		'id': 12984,
		'name': 'Rumito',
		'slug': 'rumito',
		'symbol': 'RUTC'
	},
	{
		'id': 13005,
		'name': 'BNPL Pay',
		'slug': 'bnpl-pay',
		'symbol': 'BNPL'
	},
	{
		'id': 13025,
		'name': 'zilSurvey',
		'slug': 'zilsurvey',
		'symbol': 'SRV'
	},
	{
		'id': 13036,
		'name': 'Etherrock#72',
		'slug': 'etherrock-72',
		'symbol': 'PEBBLE'
	},
	{
		'id': 13071,
		'name': 'SquidGameToken',
		'slug': 'squidgametoken',
		'symbol': 'SGT'
	},
	{
		'id': 13078,
		'name': 'DogeZilla',
		'slug': 'dogezilla',
		'symbol': 'DOGEZILLA'
	},
	{
		'id': 13135,
		'name': 'Ariadne',
		'slug': 'ariadne',
		'symbol': 'ARDN'
	},
	{
		'id': 13143,
		'name': 'Oh! Finance',
		'slug': 'oh-finance',
		'symbol': 'OH'
	},
	{
		'id': 13175,
		'name': 'pSTAKE Staked ATOM',
		'slug': 'pstake',
		'symbol': 'STKATOM'
	},
	{
		'id': 13197,
		'name': 'KnoxDAO',
		'slug': 'knoxedge',
		'symbol': 'KNOX'
	},
	{
		'id': 13252,
		'name': 'WOLVERINU',
		'slug': 'wolverinu',
		'symbol': 'WOLVERINU'
	},
	{
		'id': 13277,
		'name': 'UNIFEES',
		'slug': 'unifees',
		'symbol': 'FEES'
	},
	{
		'id': 13316,
		'name': 'QuipuSwap Governance Token',
		'slug': 'quipuswap-governance-token',
		'symbol': 'QUIPU'
	},
	{
		'id': 13320,
		'name': 'ZilWall Paint',
		'slug': 'zilwall-paint',
		'symbol': 'ZPAINT'
	},
	{
		'id': 13322,
		'name': 'DuckDuck',
		'slug': 'duckduck',
		'symbol': 'DUCK'
	},
	{
		'id': 13325,
		'name': 'ZilWall',
		'slug': 'zilwall',
		'symbol': 'ZWALL'
	},
	{
		'id': 13329,
		'name': 'Pelenia',
		'slug': 'pele-network',
		'symbol': 'PELE'
	},
	{
		'id': 13333,
		'name': 'NFT Global',
		'slug': 'nft-global',
		'symbol': 'NFTG'
	},
	{
		'id': 13337,
		'name': 'MMScash',
		'slug': 'mmscash',
		'symbol': 'MCASH'
	},
	{
		'id': 13357,
		'name': 'COBAN',
		'slug': 'coban',
		'symbol': 'COBAN'
	},
	{
		'id': 13366,
		'name': 'Winry Inu',
		'slug': 'winry-inu',
		'symbol': 'WINRY'
	},
	{
		'id': 13374,
		'name': 'MOONGAME',
		'slug': 'moongame',
		'symbol': 'MGT'
	},
	{
		'id': 13399,
		'name': 'BrandPad Finance',
		'slug': 'brandpad-finance',
		'symbol': 'BRAND'
	},
	{
		'id': 13426,
		'name': 'Pixl Coin',
		'slug': 'pixl-coin',
		'symbol': 'PXLC'
	},
	{
		'id': 13427,
		'name': 'CoinMooner',
		'slug': 'coinmooner',
		'symbol': 'MOONER'
	},
	{
		'id': 13435,
		'name': 'Nfans',
		'slug': 'nfans',
		'symbol': 'NFS'
	},
	{
		'id': 13467,
		'name': 'PancakePoll',
		'slug': 'pancakepoll',
		'symbol': 'PPOLL'
	},
	{
		'id': 13497,
		'name': 'Navigator DAO',
		'slug': 'navigator',
		'symbol': 'NTTC'
	},
	{
		'id': 13504,
		'name': 'Augmented Finance',
		'slug': 'augmented-finance',
		'symbol': 'AGF'
	},
	{
		'id': 13517,
		'name': 'Rolaz Gold',
		'slug': 'rolaz-gold',
		'symbol': 'rGLD'
	},
	{
		'id': 13525,
		'name': 'Meland.ai',
		'slug': 'meland',
		'symbol': 'MELD'
	},
	{
		'id': 13532,
		'name': 'xDollar',
		'slug': 'xdollar',
		'symbol': 'XDO'
	},
	{
		'id': 13567,
		'name': 'SmarterCoin (SMRTr)',
		'slug': 'smartcoin-farm-smrtr',
		'symbol': 'SMRTR'
	},
	{
		'id': 13570,
		'name': 'blockWRK',
		'slug': 'blockwrk',
		'symbol': 'WRK'
	},
	{
		'id': 13573,
		'name': 'NerveFlux',
		'slug': 'nerveflux',
		'symbol': 'NERVE'
	},
	{
		'id': 13578,
		'name': 'Ponyo Impact',
		'slug': 'ponyo-inu',
		'symbol': 'PONYO'
	},
	{
		'id': 13582,
		'name': 'Ray Network',
		'slug': 'ray-network',
		'symbol': 'XRAY'
	},
	{
		'id': 13591,
		'name': 'HEXAGON Pay',
		'slug': 'hexagon-pay',
		'symbol': 'HXP'
	},
	{
		'id': 13633,
		'name': 'Luna-Pad',
		'slug': 'luna-pad',
		'symbol': 'LUNAPAD'
	},
	{
		'id': 13635,
		'name': 'AlgoPad',
		'slug': 'algopad',
		'symbol': 'ALGOPAD'
	},
	{
		'id': 13651,
		'name': 'BABY WHITE HAMSTER',
		'slug': 'baby-white-hamster',
		'symbol': 'BWH'
	},
	{
		'id': 13680,
		'name': 'DePocket',
		'slug': 'depocket',
		'symbol': 'DEPO'
	},
	{
		'id': 13691,
		'name': 'Artverse Token',
		'slug': 'artverse-token',
		'symbol': 'AVT'
	},
	{
		'id': 13721,
		'name': 'NovaXSolar',
		'slug': 'novaxsolar',
		'symbol': 'XSLR'
	},
	{
		'id': 13728,
		'name': 'Sola Ninja',
		'slug': 'sola-ninja',
		'symbol': 'SNJ'
	},
	{
		'id': 13729,
		'name': 'Sadbaby',
		'slug': 'sadbaby',
		'symbol': 'SDBY'
	},
	{
		'id': 13732,
		'name': 'Rugpull Prevention',
		'slug': 'rugpull-prevention',
		'symbol': 'RUGPULL'
	},
	{
		'id': 13743,
		'name': 'TaiChi',
		'slug': 'taichi',
		'symbol': 'TAC'
	},
	{
		'id': 13749,
		'name': 'BabyXape',
		'slug': 'babyxape',
		'symbol': 'BABYX'
	},
	{
		'id': 13752,
		'name': 'Baby Floki Up',
		'slug': 'baby-floki-up',
		'symbol': 'BFU'
	},
	{
		'id': 13753,
		'name': 'Drachma',
		'slug': 'drachma',
		'symbol': 'DRA'
	},
	{
		'id': 13788,
		'name': 'BuffedShiba',
		'slug': 'buffedshiba',
		'symbol': 'BSHIB'
	},
	{
		'id': 13808,
		'name': 'Cockapoo',
		'slug': 'cockapoo',
		'symbol': 'CPOO'
	},
	{
		'id': 13809,
		'name': 'Void',
		'slug': 'void-games',
		'symbol': 'VOID'
	},
	{
		'id': 13835,
		'name': 'Coin of Nature',
		'slug': 'coin-of-nature',
		'symbol': 'CON'
	},
	{
		'id': 13842,
		'name': 'Bunscake',
		'slug': 'bunscake',
		'symbol': 'BSCAKE'
	},
	{
		'id': 13843,
		'name': 'Ethernal Finance',
		'slug': 'ethernal-finance',
		'symbol': 'ETHFIN'
	},
	{
		'id': 13866,
		'name': 'RIFI United',
		'slug': 'rifi-united',
		'symbol': 'RU'
	},
	{
		'id': 13903,
		'name': 'SleepEarn Finance',
		'slug': 'sleepearn-finance',
		'symbol': 'SEN'
	},
	{
		'id': 13915,
		'name': '1Swap',
		'slug': '1swap',
		'symbol': '1SWAP'
	},
	{
		'id': 13921,
		'name': 'Atmosphere CCG',
		'slug': 'atmosphere-ccg',
		'symbol': 'ATMSSFT'
	},
	{
		'id': 13929,
		'name': 'Balisari',
		'slug': 'balisari',
		'symbol': 'BST'
	},
	{
		'id': 13948,
		'name': 'Schrodinger',
		'slug': 'schrodinger',
		'symbol': 'KITTY DINGER'
	},
	{
		'id': 13950,
		'name': 'Dentrocoin',
		'slug': 'dentrocoin',
		'symbol': 'DENTRO'
	},
	{
		'id': 13997,
		'name': 'Hodl Finance',
		'slug': 'hodl-finance',
		'symbol': 'HFT'
	},
	{
		'id': 14011,
		'name': 'BIG ETH',
		'slug': 'big-eth',
		'symbol': 'BIGETH'
	},
	{
		'id': 14019,
		'name': 'Lizard Token',
		'slug': 'lizard-token',
		'symbol': 'LIZARD'
	},
	{
		'id': 14030,
		'name': 'Evagrow Coin',
		'slug': 'evagrow-coin',
		'symbol': 'EVA'
	},
	{
		'id': 14031,
		'name': 'Bork',
		'slug': 'bork',
		'symbol': 'BORK'
	},
	{
		'id': 14067,
		'name': 'Dickcoin',
		'slug': 'dickcoinmoon',
		'symbol': 'DICK'
	},
	{
		'id': 14077,
		'name': 'Kaiba DeFi',
		'slug': 'kaiba-inu',
		'symbol': 'KAIBA'
	},
	{
		'id': 14085,
		'name': 'Buff Shiba Inu',
		'slug': 'buff-shiba-inu',
		'symbol': 'BUFFSHIBA'
	},
	{
		'id': 14086,
		'name': 'Binancedog',
		'slug': 'binancedog',
		'symbol': 'Bidog'
	},
	{
		'id': 14097,
		'name': 'Koreadoge',
		'slug': 'koreadoge',
		'symbol': 'KDOGE'
	},
	{
		'id': 14109,
		'name': 'Alien Shiba Inu',
		'slug': 'alien-shiba-inu',
		'symbol': 'ASHIB'
	},
	{
		'id': 14119,
		'name': 'Upper Swiss Franc',
		'slug': 'upper-swiss-franc',
		'symbol': 'CHFU'
	},
	{
		'id': 14156,
		'name': 'DogeBNB.org',
		'slug': 'dogebnb-org',
		'symbol': 'DOGEBNB'
	},
	{
		'id': 14172,
		'name': 'ADToken',
		'slug': 'ad-token',
		'symbol': 'AD'
	},
	{
		'id': 14186,
		'name': 'Perpetuum',
		'slug': 'perpetuum',
		'symbol': 'PRP'
	},
	{
		'id': 14197,
		'name': 'FlokiBonk',
		'slug': 'flokibonk',
		'symbol': 'FLOBO'
	},
	{
		'id': 14204,
		'name': 'eaglecoin',
		'slug': 'eagle-coin',
		'symbol': 'ELC'
	},
	{
		'id': 14211,
		'name': 'Spike Inu',
		'slug': 'spike-inu',
		'symbol': 'SPKI'
	},
	{
		'id': 14256,
		'name': 'QuizDrop',
		'slug': 'quizdrop',
		'symbol': 'QDROP'
	},
	{
		'id': 14268,
		'name': 'Whive Protocol',
		'slug': 'the-whive-protocol',
		'symbol': 'WHIVE'
	},
	{
		'id': 14287,
		'name': 'La Casa De Papel',
		'slug': 'la-casa-de-papel',
		'symbol': 'LCDP'
	},
	{
		'id': 14315,
		'name': 'Mochi Inu',
		'slug': 'mochi-inu',
		'symbol': 'MOCHI'
	},
	{
		'id': 14319,
		'name': 'dHealth',
		'slug': 'dhealth',
		'symbol': 'DHP'
	},
	{
		'id': 14332,
		'name': 'Adonis',
		'slug': 'adonis',
		'symbol': 'ADON'
	},
	{
		'id': 14407,
		'name': 'Dukecoin',
		'slug': 'dukecoin',
		'symbol': 'DKC'
	},
	{
		'id': 14413,
		'name': 'BuyMainStreet',
		'slug': 'buymainstreet',
		'symbol': '$MAINST'
	},
	{
		'id': 14414,
		'name': 'IC DEFI',
		'slug': 'icdefi',
		'symbol': 'ICD'
	},
	{
		'id': 14427,
		'name': 'ZillaMatrix',
		'slug': 'zillamatrix',
		'symbol': 'ZMAX'
	},
	{
		'id': 14476,
		'name': 'Fren',
		'slug': 'fren-token',
		'symbol': 'FREN'
	},
	{
		'id': 14487,
		'name': 'AxieDoge',
		'slug': 'axiedoge',
		'symbol': 'AXSD'
	},
	{
		'id': 14507,
		'name': 'Zoints',
		'slug': 'zoints',
		'symbol': 'ZEE'
	},
	{
		'id': 14529,
		'name': 'NPC DAO',
		'slug': 'npc-dao',
		'symbol': 'NPC'
	},
	{
		'id': 14562,
		'name': 'VIP Token',
		'slug': 'vip-token',
		'symbol': 'VIP'
	},
	{
		'id': 14566,
		'name': 'Fortune',
		'slug': 'fortune',
		'symbol': 'FORTUNE'
	},
	{
		'id': 14585,
		'name': 'EagonSwap Token',
		'slug': 'eagonswap-token',
		'symbol': 'EAGON'
	},
	{
		'id': 14663,
		'name': 'Zuki',
		'slug': 'zuki',
		'symbol': 'ZUKI'
	},
	{
		'id': 14674,
		'name': 'Refugees Token',
		'slug': 'refugees-token',
		'symbol': 'RFG'
	},
	{
		'id': 14702,
		'name': 'ShibaBNB.org',
		'slug': 'shibabnb-org',
		'symbol': 'SHIBABNB'
	},
	{
		'id': 14741,
		'name': 'Trusted Node',
		'slug': 'trusted-node',
		'symbol': 'TNODE'
	},
	{
		'id': 14747,
		'name': 'Salary',
		'slug': 'salary',
		'symbol': 'SLR'
	},
	{
		'id': 14757,
		'name': 'NFTPunk',
		'slug': 'nftpunk',
		'symbol': 'NFTPUNK2.0'
	},
	{
		'id': 14766,
		'name': 'Doge Gay Son',
		'slug': 'dogegayson',
		'symbol': 'GOGE'
	},
	{
		'id': 14779,
		'name': 'MicroPee',
		'slug': 'micropee',
		'symbol': 'PEE'
	},
	{
		'id': 14809,
		'name': 'Zada',
		'slug': 'zada',
		'symbol': 'ZADA'
	},
	{
		'id': 14814,
		'name': 'BNB Hero Token',
		'slug': 'bnb-hero-token',
		'symbol': 'BNBH'
	},
	{
		'id': 14836,
		'name': 'Day Of Defeat 2.0',
		'slug': 'day-of-defeat',
		'symbol': 'DOD'
	},
	{
		'id': 14839,
		'name': 'Canon Crypto',
		'slug': 'canon-crypto',
		'symbol': 'CATO'
	},
	{
		'id': 14844,
		'name': 'MetaGameHub DAO',
		'slug': 'metagamehub-dao',
		'symbol': 'MGH'
	},
	{
		'id': 14848,
		'name': 'Banana Bucks',
		'slug': 'banana-bucks',
		'symbol': 'BAB'
	},
	{
		'id': 14856,
		'name': 'BLACK SHIBA INU',
		'slug': 'black-shiba-inu',
		'symbol': 'SHIBB'
	},
	{
		'id': 14858,
		'name': 'Baby Yooshi',
		'slug': 'baby-yooshi',
		'symbol': 'BABY YOOSHI'
	},
	{
		'id': 14866,
		'name': 'Meta Shiba',
		'slug': 'meta-shibaa',
		'symbol': 'METASHIB'
	},
	{
		'id': 14901,
		'name': 'CryptoVsZombie',
		'slug': 'cryptovszombie',
		'symbol': 'CVZ'
	},
	{
		'id': 14921,
		'name': 'Microverse',
		'slug': 'microverse',
		'symbol': 'MVP'
	},
	{
		'id': 14930,
		'name': 'MegaToken',
		'slug': 'megatoken',
		'symbol': 'MEGA'
	},
	{
		'id': 14942,
		'name': 'BrowniesSwap',
		'slug': 'browniesswap',
		'symbol': 'BROWN'
	},
	{
		'id': 14955,
		'name': 'GOinfluencer',
		'slug': 'goinfluencer',
		'symbol': 'GOIN'
	},
	{
		'id': 14958,
		'name': 'LOT.TRADE',
		'slug': 'lot-trade',
		'symbol': 'LOTT'
	},
	{
		'id': 14989,
		'name': 'Chainlist',
		'slug': 'chainlist',
		'symbol': 'CLIST'
	},
	{
		'id': 14997,
		'name': 'Outrace',
		'slug': 'outrace',
		'symbol': 'ORE'
	},
	{
		'id': 15035,
		'name': 'KEYS',
		'slug': 'keys-token',
		'symbol': 'KEYS'
	},
	{
		'id': 15041,
		'name': 'youves uUSD',
		'slug': 'youves',
		'symbol': 'UUSD'
	},
	{
		'id': 15073,
		'name': 'SHIBA LIGHT',
		'slug': 'shiba-light',
		'symbol': 'SHIBT'
	},
	{
		'id': 15080,
		'name': 'Suteku',
		'slug': 'suteku',
		'symbol': 'SUTEKU'
	},
	{
		'id': 15115,
		'name': 'youves',
		'slug': 'you',
		'symbol': 'YOU'
	},
	{
		'id': 15150,
		'name': 'Cross Chain Farming',
		'slug': 'cross-chain-farming',
		'symbol': 'CCF'
	},
	{
		'id': 15191,
		'name': 'Defrost Finance',
		'slug': 'defrost-finance',
		'symbol': 'MELT'
	},
	{
		'id': 15196,
		'name': 'Unus Dao',
		'slug': 'unus-dao',
		'symbol': 'UDO'
	},
	{
		'id': 15211,
		'name': 'Atlantis',
		'slug': 'atlantis',
		'symbol': 'ATLAS'
	},
	{
		'id': 15214,
		'name': 'Mars Doge',
		'slug': 'mars-doge',
		'symbol': 'MARSDOGE'
	},
	{
		'id': 15246,
		'name': 'Surviving Soldiers',
		'slug': 'surviving-soldiers',
		'symbol': 'SSG'
	},
	{
		'id': 15262,
		'name': 'DART Inu',
		'slug': 'dart-inu',
		'symbol': 'DART'
	},
	{
		'id': 15268,
		'name': 'GalaxyGoggle DAO',
		'slug': 'galaxygoggle-dao',
		'symbol': 'GG'
	},
	{
		'id': 15282,
		'name': 'RxC',
		'slug': 'rxc',
		'symbol': 'RXC'
	},
	{
		'id': 15283,
		'name': 'Artemis Vision',
		'slug': 'artemis-vision',
		'symbol': 'ARV'
	},
	{
		'id': 15289,
		'name': 'Life DAO',
		'slug': 'life-dao',
		'symbol': 'LF'
	},
	{
		'id': 15300,
		'name': 'Autobusd',
		'slug': 'autobusd',
		'symbol': 'ABS'
	},
	{
		'id': 15334,
		'name': 'Metavice',
		'slug': 'metavice',
		'symbol': 'SERVE'
	},
	{
		'id': 15340,
		'name': 'Metanoom',
		'slug': 'metanoom',
		'symbol': 'MTN'
	},
	{
		'id': 15344,
		'name': 'Unvaxxed Sperm',
		'slug': 'unvaxxed-sperm',
		'symbol': 'NUBTC'
	},
	{
		'id': 15347,
		'name': '99DEFI.NETWORK',
		'slug': '99defi-network',
		'symbol': '99DEFI'
	},
	{
		'id': 15370,
		'name': 'AggregatedFinance',
		'slug': 'aggregatedfinance',
		'symbol': 'AGFI'
	},
	{
		'id': 15397,
		'name': 'Firulais',
		'slug': 'firulais',
		'symbol': 'FIRU'
	},
	{
		'id': 15399,
		'name': 'Supernova Token',
		'slug': 'snt',
		'symbol': 'SNT'
	},
	{
		'id': 15487,
		'name': 'PopDoge',
		'slug': 'popdoge',
		'symbol': 'POPDOGE'
	},
	{
		'id': 15509,
		'name': 'Studio Shibli',
		'slug': 'studio-shibli',
		'symbol': 'SHIBLI'
	},
	{
		'id': 15583,
		'name': 'Studyum',
		'slug': 'studyum',
		'symbol': 'STUD'
	},
	{
		'id': 15586,
		'name': 'AngelsCreed',
		'slug': 'angelscreed',
		'symbol': 'ANGEL'
	},
	{
		'id': 15594,
		'name': 'BlackPoker',
		'slug': 'blackpoker',
		'symbol': 'BPKR'
	},
	{
		'id': 15596,
		'name': 'Xtremcoin',
		'slug': 'xtremcoin',
		'symbol': 'XTR'
	},
	{
		'id': 15603,
		'name': 'Monster Adventure Token',
		'slug': 'monster-adventure-token',
		'symbol': 'MAT'
	},
	{
		'id': 15613,
		'name': 'WMT',
		'slug': 'wmt',
		'symbol': 'WMT'
	},
	{
		'id': 15672,
		'name': 'InfinityCash',
		'slug': 'infinitycash',
		'symbol': 'IFC'
	},
	{
		'id': 15690,
		'name': 'Defrost Finance',
		'slug': 'defrost-finance-h20',
		'symbol': 'H2O'
	},
	{
		'id': 15698,
		'name': 'GFORCE',
		'slug': 'gforce',
		'symbol': 'GFCE'
	},
	{
		'id': 15709,
		'name': 'Genius Yield',
		'slug': 'genius-yield',
		'symbol': 'GENS'
	},
	{
		'id': 15715,
		'name': 'Cardashift',
		'slug': 'cardashift',
		'symbol': 'CLAP'
	},
	{
		'id': 15719,
		'name': 'SmashCash',
		'slug': 'smashcash',
		'symbol': 'SMASH'
	},
	{
		'id': 15728,
		'name': 'BitGoo',
		'slug': 'bitgoo',
		'symbol': 'BTG'
	},
	{
		'id': 15732,
		'name': 'Monster Battle',
		'slug': 'monster-battle',
		'symbol': 'MBS'
	},
	{
		'id': 15768,
		'name': 'WAGMI on Solana',
		'slug': 'wagmi-on-solana',
		'symbol': 'WAGMI'
	},
	{
		'id': 15792,
		'name': 'Paricle Technology',
		'slug': 'paricle-technology',
		'symbol': 'PART'
	},
	{
		'id': 15831,
		'name': 'Yearnlab',
		'slug': 'yearnlab',
		'symbol': 'YLB'
	},
	{
		'id': 15866,
		'name': 'PayNet Coin',
		'slug': 'paynet-coin',
		'symbol': 'PAYN'
	},
	{
		'id': 15878,
		'name': 'DAOLand',
		'slug': 'daoland',
		'symbol': 'DLD'
	},
	{
		'id': 15891,
		'name': 'CryptoCart V2',
		'slug': 'cryptocart-v2',
		'symbol': 'CCV2'
	},
	{
		'id': 15892,
		'name': 'Kitty Coin Solana',
		'slug': 'kitty-coin-solana',
		'symbol': 'KITTY'
	},
	{
		'id': 15895,
		'name': 'Capital DAO Protocol',
		'slug': 'capital-dao-protocol',
		'symbol': 'CDS'
	},
	{
		'id': 15944,
		'name': 'Eterland',
		'slug': 'eterland',
		'symbol': 'ETER'
	},
	{
		'id': 15964,
		'name': 'Akil Coin',
		'slug': 'akil-coin',
		'symbol': 'AKL'
	},
	{
		'id': 15973,
		'name': 'Zero',
		'slug': 'zero-tech',
		'symbol': 'ZERO'
	},
	{
		'id': 15991,
		'name': 'GNAR TOKEN',
		'slug': 'gnar-token',
		'symbol': 'GNAR'
	},
	{
		'id': 15997,
		'name': 'Xpansion Game',
		'slug': 'xpansion-game',
		'symbol': 'XPS'
	},
	{
		'id': 16024,
		'name': 'WAMO',
		'slug': 'wamo',
		'symbol': 'WAMO'
	},
	{
		'id': 16044,
		'name': 'nUSD (HotBit)',
		'slug': 'nusd-token-hb',
		'symbol': 'nUSD'
	},
	{
		'id': 16052,
		'name': 'TempleDAO',
		'slug': 'templedao',
		'symbol': 'TEMPLE'
	},
	{
		'id': 16055,
		'name': 'MetaMounts',
		'slug': 'metamounts',
		'symbol': 'MOUNT'
	},
	{
		'id': 16089,
		'name': 'Plato Farm (MARK)',
		'slug': 'plato-farm-mark',
		'symbol': 'MARK'
	},
	{
		'id': 16145,
		'name': 'MoonTrustBSC',
		'slug': 'moontrustbsc',
		'symbol': 'MNTTBSC'
	},
	{
		'id': 16183,
		'name': 'EarnHub',
		'slug': 'earnhub',
		'symbol': 'EHB'
	},
	{
		'id': 16190,
		'name': 'H-Space Metaverse',
		'slug': 'h-space-metaverse',
		'symbol': 'HKSM'
	},
	{
		'id': 16191,
		'name': 'TravGoPV',
		'slug': 'travgopv',
		'symbol': 'TPV'
	},
	{
		'id': 16196,
		'name': 'Xverse',
		'slug': 'xverse',
		'symbol': 'XVC'
	},
	{
		'id': 16203,
		'name': 'Roboots',
		'slug': 'roboots',
		'symbol': 'RBO'
	},
	{
		'id': 16207,
		'name': 'Phant',
		'slug': 'phant',
		'symbol': 'PNT'
	},
	{
		'id': 16208,
		'name': 'BofB',
		'slug': 'bofb',
		'symbol': 'BOFB'
	},
	{
		'id': 16240,
		'name': 'Ravendex',
		'slug': 'ravendex',
		'symbol': 'RAVE'
	},
	{
		'id': 16255,
		'name': 'Hakuna Matata',
		'slug': 'hakuna-matata',
		'symbol': 'MATATA'
	},
	{
		'id': 16257,
		'name': 'Monaco Planet',
		'slug': 'mona',
		'symbol': 'MONA'
	},
	{
		'id': 16271,
		'name': 'Jolofcoin',
		'slug': 'jolofcoin',
		'symbol': 'JOL'
	},
	{
		'id': 16278,
		'name': 'Mickey',
		'slug': 'mickey',
		'symbol': 'MCK'
	},
	{
		'id': 16306,
		'name': 'Theca',
		'slug': 'theca',
		'symbol': 'THECA'
	},
	{
		'id': 16338,
		'name': 'Meta Decentraland',
		'slug': 'meta-decentraland',
		'symbol': 'MDL'
	},
	{
		'id': 16341,
		'name': 'Tip.Blue',
		'slug': 'tip-blue',
		'symbol': 'BLUE'
	},
	{
		'id': 16344,
		'name': 'LaunchZone (LZP)',
		'slug': 'launchzone-lzp',
		'symbol': 'LZP'
	},
	{
		'id': 16354,
		'name': 'KunoichiX',
		'slug': 'kunoichix',
		'symbol': 'KUNO'
	},
	{
		'id': 16366,
		'name': 'Phoenix Blockchain',
		'slug': 'phoenix',
		'symbol': 'PHX'
	},
	{
		'id': 16377,
		'name': 'Solana Fren',
		'slug': 'solana-fren',
		'symbol': 'FREN'
	},
	{
		'id': 16378,
		'name': 'MetaverseMGL',
		'slug': 'metaversemgl',
		'symbol': 'MGLC'
	},
	{
		'id': 16398,
		'name': 'Whalemap',
		'slug': 'whalemap',
		'symbol': 'WMP'
	},
	{
		'id': 16400,
		'name': 'CryptoPlants Club',
		'slug': 'cryptoplants',
		'symbol': 'CPC'
	},
	{
		'id': 16406,
		'name': 'CakeSwap',
		'slug': 'cakeswap',
		'symbol': 'CAKESWAP'
	},
	{
		'id': 16409,
		'name': 'Agile Finance',
		'slug': 'agile-finance',
		'symbol': 'AGL'
	},
	{
		'id': 16411,
		'name': 'iPulse',
		'slug': 'ipulse',
		'symbol': 'PLS'
	},
	{
		'id': 16412,
		'name': 'Conjee',
		'slug': 'conjee',
		'symbol': 'CONJ'
	},
	{
		'id': 16464,
		'name': 'Gamesta',
		'slug': 'gamesta',
		'symbol': 'GSG'
	},
	{
		'id': 16470,
		'name': 'KILLTHEZERO',
		'slug': 'killthezero',
		'symbol': 'KTZ'
	},
	{
		'id': 16471,
		'name': 'Shiba Samurai',
		'slug': 'shiba-samurai',
		'symbol': 'SHIBURAI'
	},
	{
		'id': 16475,
		'name': 'OPPA Token',
		'slug': 'oppa-token',
		'symbol': 'OPPA'
	},
	{
		'id': 16505,
		'name': 'Turnt Up Tikis',
		'slug': 'turnt-up-tikis',
		'symbol': 'TUT'
	},
	{
		'id': 16506,
		'name': 'UBGToken',
		'slug': 'ubgtoken',
		'symbol': 'UBG'
	},
	{
		'id': 16511,
		'name': 'ARTM',
		'slug': 'artm',
		'symbol': 'ARTM'
	},
	{
		'id': 16518,
		'name': 'FTMlaunch',
		'slug': 'ftmlaunch',
		'symbol': 'FTML'
	},
	{
		'id': 16535,
		'name': 'Floki New Year',
		'slug': 'floki-new-year',
		'symbol': 'FLOKINY'
	},
	{
		'id': 16558,
		'name': 'Moon Light Night',
		'slug': 'moon-light-night',
		'symbol': 'MLNT'
	},
	{
		'id': 16560,
		'name': 'Quiz Arena',
		'slug': 'quiz-arena',
		'symbol': 'QZA'
	},
	{
		'id': 16571,
		'name': 'Solid Protocol',
		'slug': 'solid-protocol',
		'symbol': 'SOLID'
	},
	{
		'id': 16580,
		'name': 'Traverse',
		'slug': 'traverse',
		'symbol': 'VERSE'
	},
	{
		'id': 16594,
		'name': 'Fisher Vs Pirate',
		'slug': 'fisher-vs-pirate',
		'symbol': 'FVP'
	},
	{
		'id': 16636,
		'name': 'Capybara',
		'slug': 'capybara',
		'symbol': 'CAPY'
	},
	{
		'id': 16686,
		'name': 'AvaOne Finance',
		'slug': 'avaone-finance',
		'symbol': 'AVAO'
	},
	{
		'id': 16705,
		'name': 'Exotix',
		'slug': 'exotix',
		'symbol': 'EXOTIX'
	},
	{
		'id': 16708,
		'name': 'ZAT Project',
		'slug': 'zatcoin',
		'symbol': 'ZPRO'
	},
	{
		'id': 16712,
		'name': 'Tranquility City',
		'slug': 'tranquility-city',
		'symbol': 'LUMEN'
	},
	{
		'id': 16714,
		'name': 'AstroBirdz',
		'slug': 'astrobirdz',
		'symbol': 'ABZ'
	},
	{
		'id': 16721,
		'name': 'Pavia',
		'slug': 'pavia',
		'symbol': 'PAVIA'
	},
	{
		'id': 16735,
		'name': 'Domain',
		'slug': 'domain-coin',
		'symbol': 'DMN'
	},
	{
		'id': 16760,
		'name': 'Zelda Inu',
		'slug': 'zelda-inu',
		'symbol': 'ZLDA'
	},
	{
		'id': 16779,
		'name': 'CrazyMiner',
		'slug': 'crazyminer',
		'symbol': 'PWR'
	},
	{
		'id': 16783,
		'name': 'Tiger Token',
		'slug': 'tiger-token',
		'symbol': 'TGNB'
	},
	{
		'id': 16807,
		'name': 'Ninja Squad Token',
		'slug': 'ninja-squad-token',
		'symbol': 'NST'
	},
	{
		'id': 16860,
		'name': 'GenCoin Capital',
		'slug': 'gencoin-capital',
		'symbol': 'GENCAP'
	},
	{
		'id': 16867,
		'name': 'Milk and Butter',
		'slug': 'milk-and-butter',
		'symbol': 'MB'
	},
	{
		'id': 16869,
		'name': 'BabylonDAO',
		'slug': 'babylondao',
		'symbol': 'BBY'
	},
	{
		'id': 16880,
		'name': 'Orclands Metaverse',
		'slug': 'orclands-metaverse',
		'symbol': 'ORC'
	},
	{
		'id': 16889,
		'name': 'Solfire Protocol',
		'slug': 'solfire-protocol',
		'symbol': 'FIRE'
	},
	{
		'id': 16899,
		'name': 'Unilab',
		'slug': 'unilab',
		'symbol': 'ULAB'
	},
	{
		'id': 16901,
		'name': 'Thorus',
		'slug': 'thorusfi',
		'symbol': 'THO'
	},
	{
		'id': 16906,
		'name': 'Polka Classic',
		'slug': 'polka-classic',
		'symbol': 'DOTC'
	},
	{
		'id': 16942,
		'name': 'Meta Capital',
		'slug': 'meta-capital',
		'symbol': 'MCAP'
	},
	{
		'id': 16957,
		'name': 'BullDog Coin',
		'slug': 'bulldog-coin',
		'symbol': 'BULLDOG'
	},
	{
		'id': 16959,
		'name': 'RBXS Marketing Samurai',
		'slug': 'matrix-samurai-rbxs',
		'symbol': 'RBXSamurai'
	},
	{
		'id': 17002,
		'name': 'BAHA',
		'slug': 'baha',
		'symbol': 'BA'
	},
	{
		'id': 17015,
		'name': 'Statik',
		'slug': 'statik',
		'symbol': 'STATIK'
	},
	{
		'id': 17022,
		'name': 'USHARE',
		'slug': 'ushare',
		'symbol': 'USHARE'
	},
	{
		'id': 17087,
		'name': 'PSY Coin',
		'slug': 'psy-coin',
		'symbol': 'PSY'
	},
	{
		'id': 17093,
		'name': 'Lazy Horse Race Club',
		'slug': 'lazy-horse-race-club',
		'symbol': 'LHRC'
	},
	{
		'id': 17122,
		'name': 'iPay',
		'slug': 'ipay',
		'symbol': 'IPAY'
	},
	{
		'id': 17147,
		'name': 'Kols Offering Token',
		'slug': 'kols-offering-token',
		'symbol': 'KOT'
	},
	{
		'id': 17160,
		'name': 'VyFinance',
		'slug': 'vyfinance',
		'symbol': 'VYFI'
	},
	{
		'id': 17219,
		'name': 'HakuSwap',
		'slug': 'hakuswap',
		'symbol': 'HAKU'
	},
	{
		'id': 17237,
		'name': 'Weboo Swap',
		'slug': 'weboo-token',
		'symbol': 'WEBOO'
	},
	{
		'id': 17246,
		'name': 'Infinite Ecosystem',
		'slug': 'infinite-ecosystem',
		'symbol': 'INFINITY'
	},
	{
		'id': 17266,
		'name': 'Harmony Play',
		'slug': 'harmony-play',
		'symbol': 'HPLAY'
	},
	{
		'id': 17279,
		'name': 'WTF Token',
		'slug': 'wtf-token',
		'symbol': 'WTF'
	},
	{
		'id': 17286,
		'name': 'Cosmic Ape Coin',
		'slug': 'cosmic-ape-coin',
		'symbol': 'CAC'
	},
	{
		'id': 17292,
		'name': 'SHIBA2K22',
		'slug': 'shiba2k22',
		'symbol': 'SHIBA22'
	},
	{
		'id': 17301,
		'name': 'Dignity Gold',
		'slug': 'dignity-gold',
		'symbol': 'DIGAU'
	},
	{
		'id': 17346,
		'name': 'MegaBitcoin',
		'slug': 'megabitcoin',
		'symbol': 'MBC'
	},
	{
		'id': 17388,
		'name': 'Solootbox DAO',
		'slug': 'solootbox-dao',
		'symbol': 'BOX'
	},
	{
		'id': 17391,
		'name': 'SolX Gaming Guild',
		'slug': 'solx-gaming-guild',
		'symbol': 'SGG'
	},
	{
		'id': 17394,
		'name': 'Tiger Coin',
		'slug': 'tiger-coin',
		'symbol': 'TIGER'
	},
	{
		'id': 17399,
		'name': 'Moebius',
		'slug': 'moebius',
		'symbol': 'MOBI'
	},
	{
		'id': 17403,
		'name': 'Vitall Markets',
		'slug': 'vitall-markets',
		'symbol': 'VITAL'
	},
	{
		'id': 17407,
		'name': 'The Phoenix',
		'slug': 'the-phoenix',
		'symbol': 'FIRE'
	},
	{
		'id': 17411,
		'name': 'Baby Shiba Coin',
		'slug': 'baby-shiba-coin',
		'symbol': 'BABYSHIBA'
	},
	{
		'id': 17422,
		'name': 'METABULLRAGE',
		'slug': 'metabullrage',
		'symbol': 'BERAGE'
	},
	{
		'id': 17428,
		'name': 'Jungle',
		'slug': 'jungle',
		'symbol': 'JUNGLE'
	},
	{
		'id': 17430,
		'name': 'Aada Finance',
		'slug': 'aada-finance',
		'symbol': 'AADA'
	},
	{
		'id': 17437,
		'name': 'Civic Power',
		'slug': 'civic-power',
		'symbol': 'POWER'
	},
	{
		'id': 17448,
		'name': 'SuperBonds',
		'slug': 'superbonds',
		'symbol': 'SB'
	},
	{
		'id': 17451,
		'name': 'Microtick',
		'slug': 'microtick',
		'symbol': 'TICK'
	},
	{
		'id': 17473,
		'name': 'Baby Tiger GOLD',
		'slug': 'baby-tiger-gold',
		'symbol': 'BABYTIGER'
	},
	{
		'id': 17491,
		'name': 'Chain Lords',
		'slug': 'chain-lords',
		'symbol': 'GLORY'
	},
	{
		'id': 17493,
		'name': 'MonsterQuest',
		'slug': 'monsterquest',
		'symbol': 'MQST'
	},
	{
		'id': 17508,
		'name': 'HeroesTD CGC',
		'slug': 'heroestd-cgc',
		'symbol': 'CGC'
	},
	{
		'id': 17529,
		'name': 'DaFIN',
		'slug': 'dafin',
		'symbol': 'DAF'
	},
	{
		'id': 17541,
		'name': 'Persia',
		'slug': 'persia',
		'symbol': 'PERSIA'
	},
	{
		'id': 17543,
		'name': 'MongolNFT Coin',
		'slug': 'mongolnft-coin',
		'symbol': 'MNFT'
	},
	{
		'id': 17551,
		'name': 'MonkeDAO',
		'slug': 'monkedao',
		'symbol': 'DAOSOL'
	},
	{
		'id': 17553,
		'name': 'Tokenfy',
		'slug': 'tokenfy',
		'symbol': 'TKNFY'
	},
	{
		'id': 17582,
		'name': 'MetaniaGames',
		'slug': 'metaniagames',
		'symbol': 'METANIA'
	},
	{
		'id': 17586,
		'name': 'Loomi',
		'slug': 'loomi',
		'symbol': 'LOOMI'
	},
	{
		'id': 17608,
		'name': 'Medi Token',
		'slug': 'medi-token',
		'symbol': 'MEDI'
	},
	{
		'id': 17614,
		'name': 'Loot Token',
		'slug': 'loot-token',
		'symbol': 'LOOT'
	},
	{
		'id': 17619,
		'name': 'Eagle Token',
		'slug': 'eagle-token',
		'symbol': 'EAGLE'
	},
	{
		'id': 17621,
		'name': 'ETNA Metabolism',
		'slug': 'etna-metabolism',
		'symbol': 'MTB'
	},
	{
		'id': 17672,
		'name': 'King Dog Inu',
		'slug': 'king-dog-inu',
		'symbol': 'KINGDOG'
	},
	{
		'id': 17688,
		'name': 'AnetaBTC',
		'slug': 'anetabtc',
		'symbol': 'cNETA'
	},
	{
		'id': 17697,
		'name': 'Cardano Gold',
		'slug': 'cardano-gold',
		'symbol': 'CARGO'
	},
	{
		'id': 17723,
		'name': 'Survival Game Online',
		'slug': 'survival-game-online',
		'symbol': 'SURV'
	},
	{
		'id': 17763,
		'name': 'Snowtomb LOT',
		'slug': 'snowtomb-lot',
		'symbol': 'SLOT'
	},
	{
		'id': 17777,
		'name': 'Dogecolony',
		'slug': 'dogecolony',
		'symbol': 'DOGECO'
	},
	{
		'id': 17790,
		'name': 'Snowtomb',
		'slug': 'snowtomb',
		'symbol': 'STOMB'
	},
	{
		'id': 17819,
		'name': 'Value Finance',
		'slug': 'value-finance',
		'symbol': 'VFT'
	},
	{
		'id': 17882,
		'name': 'Reflex Finance',
		'slug': 'reflex-finance',
		'symbol': 'REFLEX V2'
	},
	{
		'id': 17893,
		'name': 'Carbon',
		'slug': 'carbon-co2',
		'symbol': 'CO2'
	},
	{
		'id': 17976,
		'name': 'Planet',
		'slug': 'planet-gamma',
		'symbol': 'GAMMA'
	},
	{
		'id': 17984,
		'name': 'Healthify',
		'slug': 'healthify',
		'symbol': 'HTF'
	},
	{
		'id': 18001,
		'name': 'Rabet',
		'slug': 'rabet',
		'symbol': 'RBT'
	},
	{
		'id': 18003,
		'name': 'DeltaFlare',
		'slug': 'deltaflare',
		'symbol': 'HONR'
	},
	{
		'id': 18014,
		'name': 'Elvantis',
		'slug': 'elvantis',
		'symbol': 'ELV'
	},
	{
		'id': 18016,
		'name': 'Community Vote Power',
		'slug': 'community-vote-power',
		'symbol': 'CVP'
	},
	{
		'id': 18035,
		'name': 'Doge-1 Mission to the moon',
		'slug': 'doge-1-mission-to-the-moon',
		'symbol': 'DOGE-1'
	},
	{
		'id': 18061,
		'name': 'Fino DAO',
		'slug': 'fino-dao',
		'symbol': 'FINO'
	},
	{
		'id': 18113,
		'name': 'HappyLand Reward',
		'slug': 'happyland',
		'symbol': 'HPW'
	},
	{
		'id': 18123,
		'name': 'Robot Warriors',
		'slug': 'robot-warriors',
		'symbol': 'METABOT'
	},
	{
		'id': 18124,
		'name': 'TOURIST SHIBA INU',
		'slug': 'tourist-shiba-inu',
		'symbol': 'TOURISTS'
	},
	{
		'id': 18135,
		'name': 'BABYDRIP',
		'slug': 'babydrip',
		'symbol': 'BABYDRIP'
	},
	{
		'id': 18140,
		'name': 'MetaNFT',
		'slug': 'metanft',
		'symbol': 'MNFT'
	},
	{
		'id': 18166,
		'name': 'MMA Gaming',
		'slug': 'mma-gaming',
		'symbol': 'MMA'
	},
	{
		'id': 18186,
		'name': 'ELYFI',
		'slug': 'elyfi',
		'symbol': 'ELFI'
	},
	{
		'id': 18189,
		'name': 'Solhero Finance',
		'slug': 'solhero-finance',
		'symbol': 'HERO'
	},
	{
		'id': 18190,
		'name': 'For Meta World',
		'slug': 'for-meta-world',
		'symbol': '4MW'
	},
	{
		'id': 18196,
		'name': 'Forus',
		'slug': 'forus',
		'symbol': 'FORS'
	},
	{
		'id': 18204,
		'name': 'MegaMoon',
		'slug': 'megamoon',
		'symbol': 'MGMOON'
	},
	{
		'id': 18215,
		'name': 'GambleFi',
		'slug': 'gamblefi',
		'symbol': 'BETIFY'
	},
	{
		'id': 18219,
		'name': 'CargoLink',
		'slug': 'cargolink',
		'symbol': 'CLX'
	},
	{
		'id': 18230,
		'name': 'ZeroFi',
		'slug': 'zerofi',
		'symbol': 'ZERI'
	},
	{
		'id': 18247,
		'name': 'XStorage',
		'slug': 'xstorage',
		'symbol': 'XSTX'
	},
	{
		'id': 18269,
		'name': 'THIS',
		'slug': 'this',
		'symbol': 'THIS'
	},
	{
		'id': 18284,
		'name': 'Zappy',
		'slug': 'zappy',
		'symbol': 'ZAP'
	},
	{
		'id': 18295,
		'name': 'DChess',
		'slug': 'dchess',
		'symbol': 'KING'
	},
	{
		'id': 18298,
		'name': 'BNBBack',
		'slug': 'bnbback',
		'symbol': 'BNBBACK'
	},
	{
		'id': 18320,
		'name': 'Teneo',
		'slug': 'teneo',
		'symbol': 'TEN'
	},
	{
		'id': 18327,
		'name': 'Candle',
		'slug': 'candle',
		'symbol': 'CNDL'
	},
	{
		'id': 18341,
		'name': 'CMF DAO',
		'slug': 'cmf-dao',
		'symbol': 'CMF'
	},
	{
		'id': 18348,
		'name': 'Envision',
		'slug': 'envision',
		'symbol': 'VIS'
	},
	{
		'id': 18350,
		'name': 'Bitazza',
		'slug': 'bitazza',
		'symbol': 'BTZ'
	},
	{
		'id': 18356,
		'name': 'Voltage Finance',
		'slug': 'voltage-finance',
		'symbol': 'VOLT'
	},
	{
		'id': 18362,
		'name': 'Covid Cutter',
		'slug': 'covid-cutter',
		'symbol': 'CVC'
	},
	{
		'id': 18368,
		'name': 'CoolGas',
		'slug': 'coolgas',
		'symbol': 'COOGA'
	},
	{
		'id': 18392,
		'name': 'Quantic',
		'slug': 'quantic',
		'symbol': 'QUANTIC'
	},
	{
		'id': 18411,
		'name': 'TIA',
		'slug': 'tia',
		'symbol': 'TIA'
	},
	{
		'id': 18412,
		'name': 'ENERGY',
		'slug': 'energy',
		'symbol': 'NRGY'
	},
	{
		'id': 18424,
		'name': 'BattleMechs',
		'slug': 'battlemechs',
		'symbol': 'GEMZ'
	},
	{
		'id': 18468,
		'name': 'Amara Finance',
		'slug': 'amara-finance',
		'symbol': 'MARA'
	},
	{
		'id': 18472,
		'name': 'Meerkat Shares',
		'slug': 'meerkat-shares',
		'symbol': 'MSHARE'
	},
	{
		'id': 18477,
		'name': 'XERIUM',
		'slug': 'xerium',
		'symbol': 'XERM'
	},
	{
		'id': 18495,
		'name': 'Harmonyville',
		'slug': 'harmonyville',
		'symbol': 'HVILLE'
	},
	{
		'id': 18496,
		'name': 'OLA',
		'slug': 'ola-city',
		'symbol': 'OLA'
	},
	{
		'id': 18528,
		'name': 'Mundo',
		'slug': 'mundo',
		'symbol': '$MUNDO'
	},
	{
		'id': 18543,
		'name': 'Hungry Bees',
		'slug': 'hungry-bees',
		'symbol': 'HBEE'
	},
	{
		'id': 18550,
		'name': 'ETHFan Burn',
		'slug': 'ethfan-burn',
		'symbol': '$EFB'
	},
	{
		'id': 18564,
		'name': 'Kevin',
		'slug': 'kevin',
		'symbol': 'KEVIN'
	},
	{
		'id': 18566,
		'name': 'Piggy Share',
		'slug': 'piggy-share',
		'symbol': 'PSHARE'
	},
	{
		'id': 18605,
		'name': 'Flying Colours',
		'slug': 'flying-colours',
		'symbol': 'OURS'
	},
	{
		'id': 18609,
		'name': 'Food Bank',
		'slug': 'food-bank',
		'symbol': 'FOOD'
	},
	{
		'id': 18628,
		'name': 'ORBIS',
		'slug': 'orbis',
		'symbol': 'ORBC'
	},
	{
		'id': 18642,
		'name': 'BitCoke Token',
		'slug': 'bitcoke-token',
		'symbol': 'COKE'
	},
	{
		'id': 18647,
		'name': 'EURONIN',
		'slug': 'euronin',
		'symbol': 'EURONIN'
	},
	{
		'id': 18667,
		'name': 'ShibaFameV2',
		'slug': 'shiba-fame',
		'symbol': 'SFV2'
	},
	{
		'id': 18669,
		'name': 'BLASTER TOKEN',
		'slug': 'blaster-token',
		'symbol': 'BLT'
	},
	{
		'id': 18674,
		'name': 'Vase Token',
		'slug': 'vase-token',
		'symbol': 'VASE'
	},
	{
		'id': 18685,
		'name': 'EarnX V2',
		'slug': 'earnx-v2',
		'symbol': 'EARNX'
	},
	{
		'id': 18757,
		'name': 'Ascend Node Club',
		'slug': 'ascend-node-club',
		'symbol': 'ASND'
	},
	{
		'id': 18765,
		'name': 'Exp',
		'slug': 'exp',
		'symbol': 'EXP'
	},
	{
		'id': 18771,
		'name': 'Space Ore',
		'slug': 'space-ore',
		'symbol': 'SPO'
	},
	{
		'id': 18774,
		'name': 'Liqwid Finance',
		'slug': 'liqwid-finance',
		'symbol': 'LQ'
	},
	{
		'id': 18799,
		'name': 'Metaversero',
		'slug': 'metaversero',
		'symbol': 'MVR'
	},
	{
		'id': 18807,
		'name': 'Mollector',
		'slug': 'mollector',
		'symbol': 'MOL'
	},
	{
		'id': 18808,
		'name': 'Secretworld',
		'slug': 'secretworld-network',
		'symbol': 'SSD'
	},
	{
		'id': 18834,
		'name': 'META Gaming',
		'slug': 'real-metagaming',
		'symbol': 'RMG'
	},
	{
		'id': 18841,
		'name': '.Alpha',
		'slug': 'alphatoken',
		'symbol': '.ALPHA'
	},
	{
		'id': 18849,
		'name': 'Crypto Vault',
		'slug': 'crypto-vault',
		'symbol': 'CVT'
	},
	{
		'id': 18889,
		'name': 'MetaTariff',
		'slug': 'metatariff',
		'symbol': 'RIFF'
	},
	{
		'id': 18896,
		'name': 'MetaRare',
		'slug': 'metarare',
		'symbol': 'MTRA'
	},
	{
		'id': 18902,
		'name': 'Stoned Ape Crew Index',
		'slug': 'stoned-ape-crew-index',
		'symbol': 'SAC'
	},
	{
		'id': 18903,
		'name': 'Boryoku Genesis Dragonz Index',
		'slug': 'boryoku-genesis-dragonz-index',
		'symbol': 'DRGNZ'
	},
	{
		'id': 18952,
		'name': 'Calvex',
		'slug': 'calvex',
		'symbol': 'CLVX'
	},
	{
		'id': 18956,
		'name': 'Marsupilamii',
		'slug': 'marsupilamii',
		'symbol': 'MARS'
	},
	{
		'id': 18958,
		'name': 'Tartarus Finance',
		'slug': 'tartarus-finance',
		'symbol': 'TART'
	},
	{
		'id': 19039,
		'name': 'forbitspace',
		'slug': 'forbitspace',
		'symbol': 'FBS'
	},
	{
		'id': 19049,
		'name': 'Crypviser',
		'slug': 'crypviser',
		'symbol': 'CVNX'
	},
	{
		'id': 19083,
		'name': 'Vision Metaverse',
		'slug': 'vision-metaverse',
		'symbol': 'VS'
	},
	{
		'id': 19114,
		'name': 'Metroverse',
		'slug': 'metroverse',
		'symbol': 'MET'
	},
	{
		'id': 19117,
		'name': 'CRYN',
		'slug': 'cryn',
		'symbol': 'CRYN'
	},
	{
		'id': 19135,
		'name': 'Wolf Town Wool',
		'slug': 'wolf-town-wool',
		'symbol': 'WTWOOL'
	},
	{
		'id': 19173,
		'name': 'Myriad Social',
		'slug': 'myriad-social',
		'symbol': 'MYRIA'
	},
	{
		'id': 19186,
		'name': 'ScarySwap.Io',
		'slug': 'scaryswap',
		'symbol': 'SCARYSWAP'
	},
	{
		'id': 19196,
		'name': 'TiraVerse',
		'slug': 'tiraverse',
		'symbol': 'TVRS'
	},
	{
		'id': 19286,
		'name': 'Honey Finance',
		'slug': 'honey-finance',
		'symbol': 'HONEY'
	},
	{
		'id': 19287,
		'name': 'Joe Hat Token',
		'slug': 'joe-hat-token',
		'symbol': 'HAT'
	},
	{
		'id': 19320,
		'name': 'Dogger Token',
		'slug': 'dogger-token',
		'symbol': 'DOGGER'
	},
	{
		'id': 19347,
		'name': 'Shiba Hunter',
		'slug': 'shiba-hunter-falqom',
		'symbol': 'FALQOM'
	},
	{
		'id': 19378,
		'name': 'Zirve Coin',
		'slug': 'zirve-coin',
		'symbol': 'ZIRVE'
	},
	{
		'id': 19385,
		'name': 'Kitty Kat Coin',
		'slug': 'kitty-kat-coin',
		'symbol': 'KATS'
	},
	{
		'id': 19417,
		'name': 'Metasphere',
		'slug': 'metasphere',
		'symbol': 'MTSP'
	},
	{
		'id': 19444,
		'name': 'New Frontier Presents',
		'slug': 'new-frontier-presents',
		'symbol': 'NFP'
	},
	{
		'id': 19521,
		'name': 'ZorgApp',
		'slug': 'zorgapp',
		'symbol': 'ZORG'
	},
	{
		'id': 19545,
		'name': 'DecentraWorld Ecosystem',
		'slug': 'decentraworld',
		'symbol': '$DEWO'
	},
	{
		'id': 19606,
		'name': 'Empowa',
		'slug': 'empowa',
		'symbol': 'EMP'
	},
	{
		'id': 19626,
		'name': 'Kragger Inu',
		'slug': 'kragger-inu',
		'symbol': 'KINU'
	},
	{
		'id': 19631,
		'name': 'Sword Art Online',
		'slug': 'sword-art-online',
		'symbol': 'SAO'
	},
	{
		'id': 19634,
		'name': 'SkyDOS',
		'slug': 'skydos',
		'symbol': 'SDC'
	},
	{
		'id': 19656,
		'name': 'CROC BOY',
		'slug': 'croc-boy',
		'symbol': 'CROC'
	},
	{
		'id': 19657,
		'name': 'Poriverse',
		'slug': 'poriverse',
		'symbol': 'RIKEN'
	},
	{
		'id': 19667,
		'name': 'VIKTAMA',
		'slug': 'viktama',
		'symbol': 'VIK'
	},
	{
		'id': 19682,
		'name': 'USN',
		'slug': 'usn',
		'symbol': 'USN'
	},
	{
		'id': 19706,
		'name': 'GOMA Finance',
		'slug': 'goma',
		'symbol': 'GOMA'
	},
	{
		'id': 19711,
		'name': 'Meta Business',
		'slug': 'meta-business',
		'symbol': 'MEFI'
	},
	{
		'id': 19730,
		'name': 'Alpha Kongs Club',
		'slug': 'alpha-kongs-club',
		'symbol': 'AKC'
	},
	{
		'id': 19751,
		'name': 'Poriverse',
		'slug': 'rigy',
		'symbol': 'RIGY'
	},
	{
		'id': 19772,
		'name': 'Kyuubi',
		'slug': 'kyuubi',
		'symbol': '$KYUB'
	},
	{
		'id': 19799,
		'name': 'iZUMi Bond USD',
		'slug': 'izumi-bond-usd',
		'symbol': 'IUSD'
	},
	{
		'id': 19816,
		'name': 'PIXEL NFT',
		'slug': 'pixel-nft',
		'symbol': 'PNT'
	},
	{
		'id': 19818,
		'name': 'TOKAMAK',
		'slug': 'tokamak',
		'symbol': 'TKMK'
	},
	{
		'id': 19863,
		'name': 'YellowHeart Protocol',
		'slug': 'yellowheart-protocol',
		'symbol': 'HRTS'
	},
	{
		'id': 19884,
		'name': 'ethcoin',
		'slug': 'ethcoin',
		'symbol': 'ETHCOIN'
	},
	{
		'id': 19885,
		'name': 'MetaKeeper',
		'slug': 'metakeeper',
		'symbol': 'MKP'
	},
	{
		'id': 19895,
		'name': 'Utility NFT Coin',
		'slug': 'utility-nft-coin',
		'symbol': 'UNC'
	},
	{
		'id': 19896,
		'name': 'Pando USD',
		'slug': 'pando-usd',
		'symbol': 'pUSD'
	},
	{
		'id': 19904,
		'name': 'Meta Course',
		'slug': 'meta-course',
		'symbol': 'COURSE'
	},
	{
		'id': 19933,
		'name': 'DigitalDollar',
		'slug': 'digitaldollar',
		'symbol': 'DUSD'
	},
	{
		'id': 19953,
		'name': 'MEV Repellent',
		'slug': 'mev-repellent',
		'symbol': 'MEVREPEL'
	},
	{
		'id': 19962,
		'name': 'THE BIG FIVE',
		'slug': 'the-big-five',
		'symbol': 'TBF'
	},
	{
		'id': 19983,
		'name': 'Graphen',
		'slug': 'graphen',
		'symbol': 'ELTG'
	},
	{
		'id': 19984,
		'name': 'Demy Games',
		'slug': 'demy-games',
		'symbol': 'DEMY'
	},
	{
		'id': 19985,
		'name': 'Slam Token',
		'slug': 'slam-token-new',
		'symbol': 'SLAM'
	},
	{
		'id': 19989,
		'name': 'Omnisphere DAO',
		'slug': 'omnisphere-dao',
		'symbol': 'OSPD'
	},
	{
		'id': 19991,
		'name': 'Twittelon BOSS',
		'slug': 'twittelon-boss',
		'symbol': 'TBOSS'
	},
	{
		'id': 20043,
		'name': 'UKA DOGE COIN',
		'slug': 'uka-doge-coin',
		'symbol': 'UDOGE'
	},
	{
		'id': 20057,
		'name': 'Metapocket',
		'slug': 'metapocket',
		'symbol': 'METAPK'
	},
	{
		'id': 20063,
		'name': 'MetaMerce',
		'slug': 'metamerce',
		'symbol': 'MERCE'
	},
	{
		'id': 20078,
		'name': 'Kingdomswap (New)',
		'slug': 'kingdomswap-2',
		'symbol': 'KS2'
	},
	{
		'id': 20103,
		'name': 'Sleep Ecosystem',
		'slug': 'sleep-ecosystem',
		'symbol': 'SLEEP'
	},
	{
		'id': 20118,
		'name': 'SOS Amazonia',
		'slug': 'sos-amazonia',
		'symbol': 'SOSAMZ'
	},
	{
		'id': 20133,
		'name': 'Yummi Universe',
		'slug': 'yummi-universe',
		'symbol': 'YUMMI'
	},
	{
		'id': 20137,
		'name': 'ImminentVerse',
		'slug': 'imminentverse',
		'symbol': 'IMV'
	},
	{
		'id': 20153,
		'name': 'Solily Protocol',
		'slug': 'solily-protocol',
		'symbol': 'LILY'
	},
	{
		'id': 20162,
		'name': 'STEPINU',
		'slug': 'stepinu',
		'symbol': 'STEPI'
	},
	{
		'id': 20184,
		'name': 'Triveum',
		'slug': 'triveum',
		'symbol': 'TRV'
	},
	{
		'id': 20192,
		'name': 'VentiSwap Token',
		'slug': 'ventiswap-token',
		'symbol': 'VST'
	},
	{
		'id': 20194,
		'name': 'LESLARVERSE',
		'slug': 'leslarverse',
		'symbol': 'LLVERSE'
	},
	{
		'id': 20228,
		'name': 'Ezillion',
		'slug': 'ezillion',
		'symbol': 'EZI'
	},
	{
		'id': 20251,
		'name': 'BicycleFi',
		'slug': 'bicyclefi',
		'symbol': 'BCF'
	},
	{
		'id': 20277,
		'name': 'AZ World SocialFi',
		'slug': 'az-world',
		'symbol': 'AZW'
	},
	{
		'id': 20316,
		'name': 'Galaxy Essential',
		'slug': 'galaxy-essential',
		'symbol': 'GXE'
	},
	{
		'id': 20320,
		'name': 'Bridgesplit Brand Index',
		'slug': 'bridgesplit-brand-index',
		'symbol': 'BBI'
	},
	{
		'id': 20321,
		'name': 'Bancambios AX',
		'slug': 'bancambios-ax',
		'symbol': 'BXS'
	},
	{
		'id': 20331,
		'name': 'Richverse',
		'slug': 'richverse',
		'symbol': 'RIV'
	},
	{
		'id': 20339,
		'name': 'NumisMe',
		'slug': 'numisme',
		'symbol': 'NUME'
	},
	{
		'id': 20391,
		'name': 'BlockSAFU',
		'slug': 'blocksafu',
		'symbol': 'BSAFU'
	},
	{
		'id': 20413,
		'name': 'Super Rare Ball Shares',
		'slug': 'super-rare-ball-shares',
		'symbol': 'SRBS'
	},
	{
		'id': 20415,
		'name': 'Rare Ball Shares',
		'slug': 'rare-ball-shares',
		'symbol': 'RBS'
	},
	{
		'id': 20416,
		'name': 'Calaswap',
		'slug': 'calaswap',
		'symbol': 'CLS'
	},
	{
		'id': 20476,
		'name': 'JIMNGAME',
		'slug': 'jimngame',
		'symbol': 'JIMN'
	},
	{
		'id': 20486,
		'name': 'MetaOneVerse',
		'slug': 'metaoneverse',
		'symbol': 'M1VERSE'
	},
	{
		'id': 20493,
		'name': 'HyperOne',
		'slug': 'hyperone',
		'symbol': 'HOT'
	},
	{
		'id': 20503,
		'name': 'Infinite Arcade',
		'slug': 'infinite-arcade',
		'symbol': 'TIC'
	},
	{
		'id': 20504,
		'name': 'Fasst',
		'slug': 'fasst',
		'symbol': 'FAS'
	},
	{
		'id': 20529,
		'name': 'Kalycoin',
		'slug': 'kalycoin',
		'symbol': 'KLC'
	},
	{
		'id': 20564,
		'name': 'OLOID',
		'slug': 'oloid',
		'symbol': 'OLOID'
	},
	{
		'id': 20583,
		'name': 'Lithium Ventures',
		'slug': 'lithium-ventures',
		'symbol': 'IONS'
	},
	{
		'id': 20585,
		'name': 'Dii Coin',
		'slug': 'dii-coin',
		'symbol': 'DIIC'
	},
	{
		'id': 20604,
		'name': 'Burrow',
		'slug': 'burrow',
		'symbol': 'BRRR'
	},
	{
		'id': 20607,
		'name': 'Kakashi Sensei',
		'slug': 'kakashi-sensei',
		'symbol': 'KAKASHI'
	},
	{
		'id': 20621,
		'name': 'İstanbul Wild Cats Fan Token',
		'slug': 'istanbul-wild-cats-fan-token',
		'symbol': 'IWFT'
	},
	{
		'id': 20630,
		'name': 'Crypto Legions Bloodstone',
		'slug': 'crypto-legions-bloodstone',
		'symbol': 'BLST'
	},
	{
		'id': 20634,
		'name': 'Emit Water Element',
		'slug': 'emit-water-element',
		'symbol': 'WATER'
	},
	{
		'id': 20677,
		'name': 'Earthling',
		'slug': 'earthling',
		'symbol': 'ETLG'
	},
	{
		'id': 20711,
		'name': 'CASHTHAI',
		'slug': 'cashthai',
		'symbol': 'CTHAI'
	},
	{
		'id': 20714,
		'name': 'Metagamble',
		'slug': 'metagamble',
		'symbol': 'GAMBL'
	},
	{
		'id': 20737,
		'name': 'ICC',
		'slug': 'icc',
		'symbol': 'ICC'
	},
	{
		'id': 20741,
		'name': 'Football Battle',
		'slug': 'football-battle',
		'symbol': 'FBL'
	},
	{
		'id': 20750,
		'name': 'Metaegg DeFi',
		'slug': 'metaegg',
		'symbol': 'MDEFI'
	},
	{
		'id': 20764,
		'name': 'USD Freedom',
		'slug': 'usd-freedom',
		'symbol': 'USDF'
	},
	{
		'id': 20770,
		'name': 'EverStart',
		'slug': 'everstart',
		'symbol': 'START'
	},
	{
		'id': 20772,
		'name': 'OryxFi',
		'slug': 'oryxfi',
		'symbol': 'ORYX'
	},
	{
		'id': 20773,
		'name': 'Fidlecoin',
		'slug': 'fidlecoin',
		'symbol': 'FIDLE'
	},
	{
		'id': 20775,
		'name': 'Mudra MDR',
		'slug': 'mudra-mdr',
		'symbol': 'MDR'
	},
	{
		'id': 20782,
		'name': 'Klever Finance',
		'slug': 'klever-finance',
		'symbol': 'KFI'
	},
	{
		'id': 20785,
		'name': 'CraneMiners.co',
		'slug': 'craneminers',
		'symbol': 'CRANE'
	},
	{
		'id': 20803,
		'name': 'X ECOSYSTEM',
		'slug': 'x-ecosystem',
		'symbol': 'XECO'
	},
	{
		'id': 20827,
		'name': 'Nowar',
		'slug': 'nowar',
		'symbol': 'NOWAR'
	},
	{
		'id': 20841,
		'name': 'Nody',
		'slug': 'nody',
		'symbol': 'NODY'
	},
	{
		'id': 20847,
		'name': 'Mocossi Planet',
		'slug': 'mocossi-planet',
		'symbol': 'MCOS'
	},
	{
		'id': 20857,
		'name': '10SHARE',
		'slug': '10share',
		'symbol': '10SHARE'
	},
	{
		'id': 20861,
		'name': 'Cards of BSC',
		'slug': 'cards-of-bsc',
		'symbol': 'COB'
	},
	{
		'id': 20862,
		'name': 'KROME Shares',
		'slug': 'krome-shares',
		'symbol': 'KROME'
	},
	{
		'id': 20871,
		'name': 'Park Star',
		'slug': 'park-star',
		'symbol': 'P-S-T-A-R'
	},
	{
		'id': 20898,
		'name': 'Encyclopedia wTa',
		'slug': 'encyclopedia-wta',
		'symbol': 'ENCwTa'
	},
	{
		'id': 20938,
		'name': 'SincereDogeDAO',
		'slug': 'sinceredogedao',
		'symbol': 'SDAO'
	},
	{
		'id': 20943,
		'name': 'EggPlus',
		'slug': 'eggplus',
		'symbol': 'EGGPLUS'
	},
	{
		'id': 20948,
		'name': 'AveFarm',
		'slug': 'avefarm',
		'symbol': 'AVE'
	},
	{
		'id': 20959,
		'name': 'TLabs',
		'slug': 'tlabs',
		'symbol': 'TBS'
	},
	{
		'id': 20961,
		'name': 'WORKIT',
		'slug': 'workit',
		'symbol': 'WKIT'
	},
	{
		'id': 20967,
		'name': 'Zest Synthetic Protocol',
		'slug': 'zest-synthetic-protocol',
		'symbol': 'ZSP'
	},
	{
		'id': 20985,
		'name': 'Slime Royale Gold',
		'slug': 'slime-royale-gold',
		'symbol': 'SRG'
	},
	{
		'id': 20994,
		'name': 'ZelaaNFT',
		'slug': 'zelaanft',
		'symbol': 'NFTZ'
	},
	{
		'id': 21010,
		'name': 'Krabots',
		'slug': 'krabots',
		'symbol': 'KRAC'
	},
	{
		'id': 21012,
		'name': 'Modden',
		'slug': 'modden',
		'symbol': 'MDDN'
	},
	{
		'id': 21050,
		'name': 'Neuron Chain',
		'slug': 'neuron-chain',
		'symbol': 'NEURON'
	},
	{
		'id': 21056,
		'name': 'Pecora Network',
		'slug': 'pecora-network',
		'symbol': 'PEN'
	},
	{
		'id': 21070,
		'name': 'Black Box',
		'slug': 'black-box',
		'symbol': 'BBOX'
	},
	{
		'id': 21086,
		'name': 'GIF DAO',
		'slug': 'gif-dao',
		'symbol': '$GIF'
	},
	{
		'id': 21092,
		'name': 'Dragonairenfts',
		'slug': 'dragonairenfts',
		'symbol': 'DEAR'
	},
	{
		'id': 21120,
		'name': 'CrossX',
		'slug': 'crossx',
		'symbol': 'CRX'
	},
	{
		'id': 21132,
		'name': 'MetaHome',
		'slug': 'metahome',
		'symbol': 'METAHOME'
	},
	{
		'id': 21171,
		'name': 'Vendetta Finance',
		'slug': 'vendetta-finance',
		'symbol': 'VEN'
	},
	{
		'id': 21175,
		'name': 'EcoSmart',
		'slug': 'ecosmart-gold',
		'symbol': 'ECG'
	},
	{
		'id': 21179,
		'name': 'Up Spiral',
		'slug': 'up-spiral',
		'symbol': 'SPIRAL'
	},
	{
		'id': 21213,
		'name': 'PegHub',
		'slug': 'peghub',
		'symbol': 'PHUB'
	},
	{
		'id': 21222,
		'name': 'KAIDEX',
		'slug': 'kaidex',
		'symbol': 'KDX'
	},
	{
		'id': 21282,
		'name': 'sKCS.io Staked KCS',
		'slug': 'skcsio',
		'symbol': 'SKCS'
	},
	{
		'id': 21287,
		'name': 'Victory',
		'slug': 'victory',
		'symbol': 'AVIC'
	},
	{
		'id': 21295,
		'name': 'Free Speech',
		'slug': 'free-speech',
		'symbol': '1AMD'
	},
	{
		'id': 21300,
		'name': 'pSTAKE Staked BNB',
		'slug': 'stkbnb',
		'symbol': 'STKBNB'
	},
	{
		'id': 21302,
		'name': 'World Football',
		'slug': 'world-football',
		'symbol': 'WOFO'
	},
	{
		'id': 21304,
		'name': 'ETHPoS (IOU)',
		'slug': 'ethereum-pos',
		'symbol': 'ETHS'
	},
	{
		'id': 21307,
		'name': 'WETC',
		'slug': 'wetc',
		'symbol': 'WETC'
	},
	{
		'id': 21321,
		'name': 'ALTPAY FINANCE',
		'slug': 'altpay-finance',
		'symbol': 'ALTPAY'
	},
	{
		'id': 21331,
		'name': 'BlockXpress',
		'slug': 'blockxpress',
		'symbol': 'BX'
	},
	{
		'id': 21343,
		'name': 'Hectagon',
		'slug': 'hectagon',
		'symbol': 'HECTA'
	},
	{
		'id': 21363,
		'name': 'SmurfsINU',
		'slug': 'smurfsinu',
		'symbol': 'SMURF'
	},
	{
		'id': 21382,
		'name': 'Cleeps',
		'slug': 'cleeps',
		'symbol': 'CLPS'
	},
	{
		'id': 21424,
		'name': 'Mops',
		'slug': 'mops',
		'symbol': 'MOPS'
	},
	{
		'id': 21425,
		'name': 'FiFaSport',
		'slug': 'fifasport',
		'symbol': 'FFS'
	},
	{
		'id': 21432,
		'name': 'AETHR',
		'slug': 'aethr',
		'symbol': 'ATH'
	},
	{
		'id': 21447,
		'name': 'Million Pixel',
		'slug': 'million-pixel',
		'symbol': 'XIX'
	},
	{
		'id': 21463,
		'name': 'Doge Pup Token',
		'slug': 'doge-pup-token',
		'symbol': 'DOGEPUP'
	},
	{
		'id': 21468,
		'name': 'APEmove Governance Token',
		'slug': 'apemove-bape',
		'symbol': 'BAPE'
	},
	{
		'id': 21507,
		'name': 'GO HAYYA',
		'slug': 'go-hayya',
		'symbol': 'HAYYA'
	},
	{
		'id': 21523,
		'name': 'Eng Crypto',
		'slug': 'eng-crypto',
		'symbol': 'ENG'
	},
	{
		'id': 21540,
		'name': 'Note',
		'slug': 'note-io',
		'symbol': 'NOTE'
	},
	{
		'id': 21543,
		'name': 'NEO FANTASY',
		'slug': 'neo-fantasy',
		'symbol': 'ERT'
	},
	{
		'id': 21550,
		'name': 'Powabit',
		'slug': 'powabit',
		'symbol': 'POWA'
	},
	{
		'id': 21552,
		'name': 'Poo Doge',
		'slug': 'poo-doge',
		'symbol': 'POO DOGE'
	},
	{
		'id': 21554,
		'name': 'Canto Inu',
		'slug': 'canto-inu',
		'symbol': 'CINU'
	},
	{
		'id': 21556,
		'name': 'Telegram Inu',
		'slug': 'telegram-inu',
		'symbol': 'TINU'
	},
	{
		'id': 21568,
		'name': 'Kolibri USD',
		'slug': 'kolibri-usd',
		'symbol': 'KUSD'
	},
	{
		'id': 21572,
		'name': 'USDtez',
		'slug': 'usdtez',
		'symbol': 'USDTZ'
	},
	{
		'id': 21575,
		'name': 'BabyPitbull',
		'slug': 'babypitbull',
		'symbol': 'BPIT'
	},
	{
		'id': 21580,
		'name': 'Okidoki Social',
		'slug': 'okidoki-social',
		'symbol': 'DOKI'
	},
	{
		'id': 21583,
		'name': 'Wrapped CANTO',
		'slug': 'wrapped-canto',
		'symbol': 'WCANTO'
	},
	{
		'id': 21593,
		'name': 'THE ATLAS COIN',
		'slug': 'the-atlas-coin',
		'symbol': 'ATLAS'
	},
	{
		'id': 21603,
		'name': 'DPiXchange',
		'slug': 'dpixchange',
		'symbol': '$DPIX'
	},
	{
		'id': 21627,
		'name': 'LAMEA',
		'slug': 'lamea',
		'symbol': 'LAMEA'
	},
	{
		'id': 21631,
		'name': 'Vanesse',
		'slug': 'vanesse',
		'symbol': 'VNES'
	},
	{
		'id': 21640,
		'name': 'Realms of Ruby',
		'slug': 'realms-of-ruby',
		'symbol': 'RUBY'
	},
	{
		'id': 21644,
		'name': 'Catch Up',
		'slug': 'catch-up',
		'symbol': 'CU'
	},
	{
		'id': 21645,
		'name': 'TRONADO',
		'slug': 'tronado',
		'symbol': 'TRDO'
	},
	{
		'id': 21669,
		'name': 'Degenerate Ape Academy Floor Index',
		'slug': 'degenerate-ape-academy-floor-index',
		'symbol': 'DAPE'
	},
	{
		'id': 21671,
		'name': 'Catalina Whales Index',
		'slug': 'catalina-whales-index',
		'symbol': 'WHALES'
	},
	{
		'id': 21679,
		'name': 'InsuranceFi',
		'slug': 'insurancefi',
		'symbol': 'IF'
	},
	{
		'id': 21688,
		'name': 'Legends of Aria',
		'slug': 'legends-of-aria',
		'symbol': 'ARIA'
	},
	{
		'id': 21694,
		'name': 'Okay Bears Floor Index',
		'slug': 'okay-bears-floor-index',
		'symbol': 'OKAYB'
	},
	{
		'id': 21696,
		'name': 'ABC Floor Index',
		'slug': 'abc-floor-index',
		'symbol': 'ABC'
	},
	{
		'id': 21712,
		'name': 'DEADPXLZ',
		'slug': 'deadpxlz',
		'symbol': 'DING'
	},
	{
		'id': 21752,
		'name': 'Metaweds',
		'slug': 'metaweds',
		'symbol': 'MWEDS'
	},
	{
		'id': 21756,
		'name': 'Shanum',
		'slug': 'shanum',
		'symbol': 'SHAN'
	},
	{
		'id': 21782,
		'name': 'Soccer Galaxy',
		'slug': 'soccer-galaxy',
		'symbol': 'SOG'
	},
	{
		'id': 21792,
		'name': 'MuscleX',
		'slug': 'musclex',
		'symbol': 'M-X'
	},
	{
		'id': 21803,
		'name': 'Artizen',
		'slug': 'artizen',
		'symbol': 'ATNT'
	},
	{
		'id': 21839,
		'name': 'Kaddex',
		'slug': 'kaddex',
		'symbol': 'KDX'
	},
	{
		'id': 21869,
		'name': 'BETCOIN',
		'slug': 'betcoin',
		'symbol': 'BET'
	},
	{
		'id': 21871,
		'name': 'Coin98 Dollar',
		'slug': 'coin98-dollar',
		'symbol': 'CUSD'
	},
	{
		'id': 21875,
		'name': 'Good Doge',
		'slug': 'good-doge',
		'symbol': '$TREAT'
	},
	{
		'id': 21877,
		'name': 'Tax Haven Inu',
		'slug': 'tax-haven-inu',
		'symbol': 'TAXHAVENINU'
	},
	{
		'id': 21886,
		'name': 'JoJos Adventure',
		'slug': 'jojos-adventure',
		'symbol': 'JOJO'
	},
	{
		'id': 21921,
		'name': 'MetaX',
		'slug': 'metax',
		'symbol': 'X1'
	},
	{
		'id': 21937,
		'name': 'Nippon Lagoon',
		'slug': 'nippon-lagoon',
		'symbol': 'NLC'
	},
	{
		'id': 21948,
		'name': 'Matrak Fan Token',
		'slug': 'matrak-fan-token',
		'symbol': 'MTRK'
	},
	{
		'id': 21966,
		'name': 'Fight 4 Hope',
		'slug': 'fight-for-hope',
		'symbol': 'F4H'
	},
	{
		'id': 21971,
		'name': 'eCredits',
		'slug': 'ecredits',
		'symbol': 'ECS'
	},
	{
		'id': 21975,
		'name': 'Coin Edelweis',
		'slug': 'coin-edelweis',
		'symbol': 'EDEL'
	},
	{
		'id': 21995,
		'name': 'microNFT',
		'slug': 'micronft',
		'symbol': 'MNT'
	},
	{
		'id': 22007,
		'name': 'Qroni',
		'slug': 'qroni',
		'symbol': 'QNI'
	},
	{
		'id': 22015,
		'name': 'TitsGrow',
		'slug': 'titsgrow',
		'symbol': 'TITS'
	},
	{
		'id': 22021,
		'name': 'Doge Solar',
		'slug': 'doge-solar',
		'symbol': 'DSOLAR'
	},
	{
		'id': 22049,
		'name': 'Saint Ligne',
		'slug': 'saint-ligne',
		'symbol': 'STLE'
	},
	{
		'id': 22064,
		'name': 'Swap TC',
		'slug': 'swap-tc',
		'symbol': 'SWAPTC'
	},
	{
		'id': 22069,
		'name': 'Extraterrestrial Token',
		'slug': 'extraterrestrial-token',
		'symbol': 'ET'
	},
	{
		'id': 22074,
		'name': 'ALEX Lab',
		'slug': 'alex-lab',
		'symbol': 'ALEX'
	},
	{
		'id': 22126,
		'name': 'Inusanity',
		'slug': 'inusanity',
		'symbol': 'INUSANITY'
	},
	{
		'id': 22134,
		'name': 'Face Meta 2.0',
		'slug': 'face-meta-2',
		'symbol': 'FACEMETA'
	},
	{
		'id': 22136,
		'name': 'Karbun',
		'slug': 'karbun',
		'symbol': 'KBN'
	},
	{
		'id': 22138,
		'name': 'Diolaunch',
		'slug': 'diolaunch',
		'symbol': 'DLA'
	},
	{
		'id': 22179,
		'name': 'Proof Of Degen',
		'slug': 'proof-of-degen',
		'symbol': 'BNB2.0'
	},
	{
		'id': 22188,
		'name': 'Decentralized Activism',
		'slug': 'decentralized-activism',
		'symbol': 'DACT'
	},
	{
		'id': 22194,
		'name': 'Upsorber',
		'slug': 'upsorber',
		'symbol': 'UP'
	},
	{
		'id': 22233,
		'name': 'Me-in',
		'slug': 'me-in',
		'symbol': 'MEIN'
	},
	{
		'id': 22250,
		'name': 'Buhund',
		'slug': 'buhund',
		'symbol': 'BUH'
	},
	{
		'id': 22257,
		'name': 'Wrapped Stacks',
		'slug': 'wrapped-stacks',
		'symbol': 'WSTX'
	},
	{
		'id': 22268,
		'name': 'Evmos Domains',
		'slug': 'evmos-domains',
		'symbol': 'EVD'
	},
	{
		'id': 22279,
		'name': 'TwitterX',
		'slug': 'twitterx',
		'symbol': 'TWITTERX'
	},
	{
		'id': 22300,
		'name': 'King of Legends',
		'slug': 'king-of-legends-2',
		'symbol': 'KOL'
	},
	{
		'id': 22310,
		'name': 'Marosca Inu',
		'slug': 'marosca-inu',
		'symbol': 'MAROSCA'
	},
	{
		'id': 22345,
		'name': 'Pixel Doge',
		'slug': 'pixel-doge',
		'symbol': 'PXDOGE'
	},
	{
		'id': 22351,
		'name': 'Rabona',
		'slug': 'rabona',
		'symbol': 'RA'
	},
	{
		'id': 22358,
		'name': 'Nowarshiba',
		'slug': 'nowarshiba',
		'symbol': 'NSHIBA'
	},
	{
		'id': 22372,
		'name': 'Shinigami',
		'slug': 'shinigami',
		'symbol': '$DEATH'
	},
	{
		'id': 22373,
		'name': 'NUTGAIN',
		'slug': 'nutgain',
		'symbol': 'NUTGV2'
	},
	{
		'id': 22375,
		'name': 'Shopdi',
		'slug': 'shopdi',
		'symbol': 'SHOD'
	},
	{
		'id': 22398,
		'name': 'The Next World Coin',
		'slug': 'the-next-world',
		'symbol': 'TNC'
	},
	{
		'id': 22402,
		'name': 'Kaeri',
		'slug': 'kaeri',
		'symbol': 'KAERI'
	},
	{
		'id': 22410,
		'name': '1Shoot Game',
		'slug': '1shoot-game',
		'symbol': '1SH'
	},
	{
		'id': 22427,
		'name': 'RadioShack New World Order',
		'slug': 'radioshack-new-world-order',
		'symbol': 'RSTATE'
	},
	{
		'id': 22447,
		'name': 'xShare',
		'slug': 'xshare',
		'symbol': 'XSHARE'
	},
	{
		'id': 22448,
		'name': 'Decentralized Pirates',
		'slug': 'decentralized-pirates',
		'symbol': 'DEPI'
	},
	{
		'id': 22449,
		'name': 'Nirvana Chain',
		'slug': 'nirvana-chain',
		'symbol': 'NAC'
	},
	{
		'id': 22504,
		'name': 'MatsuSwap',
		'slug': 'matsuswap',
		'symbol': 'MATSUSWAP'
	},
	{
		'id': 22515,
		'name': 'Bluejay Finance',
		'slug': 'bluejay-finance',
		'symbol': 'BLU'
	},
	{
		'id': 22526,
		'name': 'Run&Burn',
		'slug': 'runandburn',
		'symbol': 'RBT'
	},
	{
		'id': 22542,
		'name': 'Snapy',
		'slug': 'snapy',
		'symbol': 'SPY'
	},
	{
		'id': 22544,
		'name': 'JPEX',
		'slug': 'jpex',
		'symbol': 'JPC'
	},
	{
		'id': 22568,
		'name': 'Chains of War',
		'slug': 'chains-of-war',
		'symbol': 'MIRA'
	},
	{
		'id': 22589,
		'name': 'ZooDAO',
		'slug': 'zoodao',
		'symbol': 'ZOO'
	},
	{
		'id': 22593,
		'name': 'TLChain',
		'slug': 'tlchain',
		'symbol': 'TLC'
	},
	{
		'id': 22608,
		'name': 'Swiss NFT Fund',
		'slug': 'swiss-nft-fund',
		'symbol': 'SWISSNFTFUND'
	},
	{
		'id': 22613,
		'name': 'Pegasus PoW',
		'slug': 'pegasus-pow',
		'symbol': '$PGS'
	},
	{
		'id': 22617,
		'name': 'THANKSGIVING FLOKI',
		'slug': 'thanksgiving-floki',
		'symbol': 'TFLOKI'
	},
	{
		'id': 22649,
		'name': 'Meta Sports',
		'slug': 'meta-sports',
		'symbol': 'MSG'
	},
	{
		'id': 22731,
		'name': 'XAI Silo Finance',
		'slug': 'xai-silo-finance',
		'symbol': 'XAI'
	},
	{
		'id': 22740,
		'name': 'SBF Goes to Prison',
		'slug': 'sbf-goes-to-prison',
		'symbol': 'SBFP'
	},
	{
		'id': 22752,
		'name': 'Goal Champion',
		'slug': 'goal-champion',
		'symbol': 'GC'
	},
	{
		'id': 22762,
		'name': 'Snowflake',
		'slug': 'snowflake',
		'symbol': '$SNOW'
	},
	{
		'id': 22771,
		'name': 'Indigo Protocol',
		'slug': 'indigo-protocol',
		'symbol': 'INDY'
	},
	{
		'id': 22774,
		'name': 'Cash Driver',
		'slug': 'cash-driver',
		'symbol': 'CD'
	},
	{
		'id': 22781,
		'name': 'Wrapped Evmos',
		'slug': 'wrapped-evmos',
		'symbol': 'WEVMOS'
	},
	{
		'id': 22808,
		'name': 'QatarGrow',
		'slug': 'qatargrow',
		'symbol': 'QATARGROW'
	},
	{
		'id': 22813,
		'name': 'CentroFi',
		'slug': 'centrofi',
		'symbol': 'CENTRO'
	},
	{
		'id': 22814,
		'name': 'MarblePrix',
		'slug': 'marbleprix',
		'symbol': 'MARBLEX7'
	},
	{
		'id': 22834,
		'name': 'Space Xmitter',
		'slug': 'space-xmitter',
		'symbol': 'SX'
	},
	{
		'id': 22836,
		'name': 'GianniDoge Esport',
		'slug': 'giannidoge-esport',
		'symbol': 'GDE'
	},
	{
		'id': 22842,
		'name': 'DeFi²',
		'slug': 'defi-squared',
		'symbol': 'DFX'
	},
	{
		'id': 22844,
		'name': 'NUGEN COIN',
		'slug': 'nugen-coin',
		'symbol': 'NUGEN'
	},
	{
		'id': 22849,
		'name': 'Smart Link Solution',
		'slug': 'smart-link-solution',
		'symbol': 'SLS'
	},
	{
		'id': 22852,
		'name': 'SwapFish',
		'slug': 'swapfish',
		'symbol': 'FISH'
	},
	{
		'id': 22856,
		'name': 'X-MASK Coin',
		'slug': 'x-mask-coin',
		'symbol': 'XMC'
	},
	{
		'id': 22862,
		'name': 'MaidSafeCoin',
		'slug': 'maidsafecoin-',
		'symbol': 'EMAID'
	},
	{
		'id': 22868,
		'name': 'Fireal',
		'slug': 'fireal',
		'symbol': 'FRL'
	},
	{
		'id': 22877,
		'name': 'Interport Token',
		'slug': 'interport-token',
		'symbol': 'ITP'
	},
	{
		'id': 22879,
		'name': 'Christmas Floki',
		'slug': 'christmas-floki',
		'symbol': 'FLOC'
	},
	{
		'id': 22901,
		'name': 'illumiShare SRG',
		'slug': 'illumishare-srg',
		'symbol': 'SRG'
	},
	{
		'id': 22925,
		'name': 'AzaCoin',
		'slug': 'azacoin',
		'symbol': 'AZA'
	},
	{
		'id': 22928,
		'name': 'Stylike',
		'slug': 'stylike',
		'symbol': 'STL'
	},
	{
		'id': 22929,
		'name': 'Verse',
		'slug': 'verse-token',
		'symbol': 'VERSE'
	},
	{
		'id': 22932,
		'name': 'Negative Tax',
		'slug': 'negative-tax',
		'symbol': '$NETA'
	},
	{
		'id': 22933,
		'name': 'Electronic USD',
		'slug': 'electronic-usd',
		'symbol': 'eUSD'
	},
	{
		'id': 22980,
		'name': 'CHRISTMAS DOGE',
		'slug': 'christmas-doge',
		'symbol': 'XDOGE'
	},
	{
		'id': 22989,
		'name': 'Indigo Protocol - iUSD',
		'slug': 'indigo-protocol-iusd',
		'symbol': 'IUSD'
	},
	{
		'id': 22996,
		'name': 'Dogu Inu',
		'slug': 'dogu-inu',
		'symbol': 'DOGU'
	},
	{
		'id': 23003,
		'name': 'Bored Token',
		'slug': 'bored-token',
		'symbol': '$BORED'
	},
	{
		'id': 23006,
		'name': 'DOLA Borrowing Right',
		'slug': 'dola-borrowing-right',
		'symbol': 'DBR'
	},
	{
		'id': 23048,
		'name': 'Retsuko',
		'slug': 'retsuko',
		'symbol': 'SUKO'
	},
	{
		'id': 23057,
		'name': 'OreoSwap',
		'slug': 'oreoswap',
		'symbol': 'OREO'
	},
	{
		'id': 23065,
		'name': 'Santa Musk',
		'slug': 'santa-musk',
		'symbol': 'MUSK'
	},
	{
		'id': 23166,
		'name': 'Wrapped Avian',
		'slug': 'wrapped-avian',
		'symbol': 'WAVN'
	},
	{
		'id': 23214,
		'name': 'Wednesday',
		'slug': 'wednesday',
		'symbol': 'WD'
	},
	{
		'id': 23271,
		'name': 'SO-COL',
		'slug': 'so-col',
		'symbol': 'SIMP'
	},
	{
		'id': 23283,
		'name': 'Crunchy Network',
		'slug': 'crunchy-network',
		'symbol': 'CRNCHY'
	}
];

module.exports = {
  fiatMap,
  cryptoMap
};