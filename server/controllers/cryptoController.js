const cryptoController = require('express').Router();
const cryptoApi = require('../api/cryptoApi');
const errorParser = require('../utils/errorParser');

cryptoController.get('/topThree', async (req, res) => {
  try {
    const temp = await cryptoApi.getTopThree();
    res.json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

cryptoController.get('/topHundred', async (req, res) => {
  try {
    const temp = await cryptoApi.getTopHundred();
    res.json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

cryptoController.get('/newCoins', async (req, res) => {
  try {
    const temp = await cryptoApi.newCoinsToday();
    res.json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

cryptoController.get('/cryptoMap', async (req, res) => {
  try {
    const temp = await cryptoApi.cryptoMap();
    res.json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

cryptoController.get('/fiatMap', async (req, res) => {
  try {
    const temp = await cryptoApi.fiatMap();
    res.json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

cryptoController.get('/allCoins', async (req, res) => {
  try {
    const temp = await cryptoApi.getListCoins();
    res.json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

cryptoController.get('/convert', async (req, res) => {
  try {
    const temp = await cryptoApi.convert(req.query.amount, req.query.from, req.query.to);
    res.json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

cryptoController.get('/getGlobalData', async (req, res) => {
  try {
    const temp = await cryptoApi.getGlobal();
    res.json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

cryptoController.get('/getCoinDetails', async (req, res) => {
  try {
    const temp = await cryptoApi.getCoinDetailed(req.query.coinId);
    res.json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

module.exports = cryptoController;