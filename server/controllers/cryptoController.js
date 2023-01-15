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
      'current_price': 20755,
      'market_cap': 398968852218,
      'total_volume': 55066894578,
      'high_24h': 21095,
      'low_24h': 19268.04,
      'price_change_24h': 1484,
      'price_change_percentage_24h': 7.70047,
      'market_cap_change_24h': 26696856229,
      'market_cap_change_percentage_24h': 7.17133,
      'circulating_supply': 19262162,
      'total_supply': 21000000,
      'max_supply': 21000000,
      'ath': 69045,
      'ath_change_percentage': -69.95105,
      'ath_date': '2021-11-10T14:24:11.849Z',
      'atl': 67.81,
      'atl_change_percentage': 30496.56861,
      'atl_date': '2013-07-06T00:00:00.000Z',
      'last_updated': '2023-01-14T19:00:06.763Z',
      'chartData': [
        {
          'time': 1673640026877,
          'price': 19344.381315584644
        },
        {
          'time': 1673643705367,
          'price': 19488.670094239948
        },
        {
          'time': 1673647287053,
          'price': 19802.819122963443
        },
        {
          'time': 1673650847768,
          'price': 19932.61800284748
        },
        {
          'time': 1673654434508,
          'price': 19941.780543296303
        },
        {
          'time': 1673658038266,
          'price': 21083.034366769927
        },
        {
          'time': 1673661708352,
          'price': 20867.38917379548
        },
        {
          'time': 1673665221840,
          'price': 20956.582685807767
        },
        {
          'time': 1673668887738,
          'price': 20950.58423585899
        },
        {
          'time': 1673672503831,
          'price': 20898.831046175128
        },
        {
          'time': 1673676011987,
          'price': 20869.370693984514
        },
        {
          'time': 1673679602027,
          'price': 20962.260990938234
        },
        {
          'time': 1673683282224,
          'price': 20883.91006002229
        },
        {
          'time': 1673686917784,
          'price': 21026.330445118678
        },
        {
          'time': 1673690502090,
          'price': 20528.6132126577
        },
        {
          'time': 1673694115899,
          'price': 20449.8809385511
        },
        {
          'time': 1673697725531,
          'price': 20738.586235636016
        },
        {
          'time': 1673701242779,
          'price': 20916.015790269255
        },
        {
          'time': 1673704820623,
          'price': 20925.89867644994
        },
        {
          'time': 1673708520043,
          'price': 20843.138978816634
        },
        {
          'time': 1673712057258,
          'price': 20782.577828131904
        },
        {
          'time': 1673715609549,
          'price': 20810.253612457294
        },
        {
          'time': 1673719209493,
          'price': 20743.696201708284
        },
        {
          'time': 1673722806000,
          'price': 20754.500109660865
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