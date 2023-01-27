const cryptoController = require('express').Router();
const cryptoApi = require('../api/cryptoApi');
const errorParser = require('../utils/errorParser');
const { cryptoMap, fiatMap } = require('./temp');

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
    // const temp = await cryptoApi.cryptoMap();
    const temp = cryptoMap;
    res.status(200).json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

cryptoController.get('/fiatMap', async (req, res) => {
  try {
    // const temp = await cryptoApi.fiatMap();
    const temp = fiatMap;
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
    const temp = await cryptoApi.getCoinDetailed(req.query.coinId);
    res.status(200).json(temp);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

cryptoController.get('/getCoinChartData', async (req, res) => {
  try {
    const temp = await cryptoApi.getCoinChartData(req.query.coinId, req.query.days);
    res.status(200).json({ chartData: temp });
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

module.exports = cryptoController;