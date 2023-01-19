const cryptoController = require('express').Router();
const cryptoApi = require('../api/cryptoApi');
const errorParser = require('../utils/errorParser');

cryptoController.get('/topThree', async (req, res) => {
  try {
    const temp = await cryptoApi.getTopThree();
    res.status(200).json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

cryptoController.get('/topHundred', async (req, res) => {
  try {
    const temp = await cryptoApi.getTopHundred();
    res.status(200).json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

cryptoController.get('/newCoins', async (req, res) => {
  try {
    const temp = await cryptoApi.newCoinsToday();
    res.status(200).json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

cryptoController.get('/cryptoMap', async (req, res) => {
  try {
    const temp = await cryptoApi.cryptoMap();
    res.status(200).json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

cryptoController.get('/fiatMap', async (req, res) => {
  try {
    const temp = await cryptoApi.fiatMap();
    res.status(200).json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

cryptoController.get('/allCoins', async (req, res) => {
  try {
    const temp = await cryptoApi.getListCoins();
    res.status(200).json(temp).end();
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

cryptoController.get('/convert', async (req, res) => {
  try {
    const temp = await cryptoApi.convert(req.query.amount, req.query.from, req.query.to);
    res.status(200).json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

cryptoController.get('/getGlobalData', async (req, res) => {
  try {
    const temp = await cryptoApi.getGlobal();
    res.status(200).json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

cryptoController.get('/getCoinDetails', async (req, res) => {
  try {
    // const temp = await cryptoApi.getCoinDetailed(req.query.coinId);
    const temp = {
      'id': 'bitcoin',
      'symbol': 'btc',
      'name': 'Bitcoin',
      'image': {
        'thumb': 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579',
        'small': 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
        'large': 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
      },
      'current_price': 20844,
      'market_cap': 401334506364,
      'total_volume': 38408707756,
      'high_24h': 21484,
      'low_24h': 20533,
      'low_high_value': 32.70241850683491,
      'price_change_24h': -640.1811279779,
      'price_change_percentage_24h': -2.9798,
      'market_cap_change_24h': -12720047856.944,
      'market_cap_change_percentage_24h': -3.07207,
      'circulating_supply': 19266818,
      'total_supply': 21000000,
      'max_supply': 21000000,
      'ath': 69045,
      'ath_change_percentage': -69.81854,
      'ath_date': '2021-11-10T14:24:11.849Z',
      'atl': 67.81,
      'atl_change_percentage': 30631.49363,
      'atl_date': '2013-07-06T00:00:00.000Z',
      'last_updated': '2023-01-19T15:23:36.310Z',
      'chartData': [
        {
          'time': 1674057726503,
          'price': 21255.367139697784
        },
        {
          'time': 1674061375107,
          'price': 20532.907207838653
        },
        {
          'time': 1674064890458,
          'price': 20934.37579434191
        },
        {
          'time': 1674068482624,
          'price': 20937.39396072067
        },
        {
          'time': 1674072241972,
          'price': 20910.1451870655
        },
        {
          'time': 1674075725145,
          'price': 20694.121613021045
        },
        {
          'time': 1674079319433,
          'price': 20792.951370835992
        },
        {
          'time': 1674082972558,
          'price': 20831.950823406285
        },
        {
          'time': 1674086576052,
          'price': 20721.040207375805
        },
        {
          'time': 1674090026388,
          'price': 20699.21555980322
        },
        {
          'time': 1674093721829,
          'price': 20703.005937204824
        },
        {
          'time': 1674097317236,
          'price': 20756.20479654092
        },
        {
          'time': 1674100929846,
          'price': 20760.651852365685
        },
        {
          'time': 1674104462248,
          'price': 20804.53758389287
        },
        {
          'time': 1674108020672,
          'price': 20812.424364733422
        },
        {
          'time': 1674111778228,
          'price': 20848.790124063587
        },
        {
          'time': 1674115307945,
          'price': 20832.22709301364
        },
        {
          'time': 1674118890232,
          'price': 20793.46276269477
        },
        {
          'time': 1674122511934,
          'price': 20807.582649363158
        },
        {
          'time': 1674126121446,
          'price': 20799.08306475155
        },
        {
          'time': 1674129771549,
          'price': 20748.392092374652
        },
        {
          'time': 1674133320116,
          'price': 20719.48660369809
        },
        {
          'time': 1674136924827,
          'price': 20786.970374848017
        },
        {
          'time': 1674140522696,
          'price': 20860.104147415946
        },
        {
          'time': 1674141816000,
          'price': 20843.840341590636
        }
      ]
    };

    res.status(200).json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

module.exports = cryptoController;