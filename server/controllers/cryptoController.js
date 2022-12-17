const cryptoApi = require('../api/cryptoApi');

const cryptoController = require('express').Router();

cryptoController.get('/topThree', async (req, res) => {
  const temp = await cryptoApi.getTopThree();
  res.json(temp);
});

cryptoController.get('/topHundred', async (req, res) => {
  const temp = await cryptoApi.getTopHundred();
  res.json(temp);
});

cryptoController.get('/newCoins', async (req, res) => {
  const temp = await cryptoApi.newCoinsToday();
  res.json(temp);
});

cryptoController.get('/cryptoMap', async (req, res) => {
  const temp = await cryptoApi.cryptoMap();
  res.json(temp);
});

cryptoController.get('/fiatMap', async (req, res) => {
  const temp = await cryptoApi.fiatMap();
  res.json(temp);
});

cryptoController.get('/convert', async (req, res) => {
  const temp = await cryptoApi.convert(req.query.amount, req.query.from, req.query.to);
  res.json(temp);
});

cryptoController.get('/getGlobalData', async (req, res) => {
  const temp = await cryptoApi.getGlobal();
  res.json(temp);
});

module.exports = cryptoController;