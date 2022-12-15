const cryptoApi = require('../api/cryptoApi');

const cryptoController = require('express').Router();

cryptoController.get('/topThree', async (req, res) => {
  const temp = await cryptoApi.getTopThree();
  res.json(temp);
});

module.exports = cryptoController;