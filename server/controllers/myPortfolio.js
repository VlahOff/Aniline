const { getCoin } = require('../api/cryptoApi');
const { getAllUserTransactions } = require('../service/transactionService');
const errorParser = require('../utils/errorParser');

const myPortfolio = require('express').Router();

myPortfolio.get('/value', async (req, res) => {
  try {
    const result = await getTransactionsValue(req.query.userId);

    async function getTransactionsValue(userId) {
      let transactions = await getAllUserTransactions(userId);

      transactions = transactions.map(t => {
        return t.coinId = getCoin(t.coinId, 10);
      });

      let total = 0;
      await Promise.all(transactions)
        .then((data) => {
          data.forEach(t => {
            console.log(t);
            total += t.usd;
          });
        });

      return total;
    }
    console.log(result);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

module.exports = myPortfolio;