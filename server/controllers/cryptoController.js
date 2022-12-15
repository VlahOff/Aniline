const cryptoApi = require('../api/cryptoApi');

const cryptoController = require('express').Router();

cryptoController.get('/topThree', async (req, res) => {
  const temp = await cryptoApi.getTopThree();
  console.log(temp);
  res.json({ data: temp });
});

module.exports = cryptoController;