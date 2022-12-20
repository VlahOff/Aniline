const { createTransaction, getAllUserTransactions } = require('../service/transactionService');
const errorParser = require('../utils/errorParser');

const portfolioController = require('express').Router();

portfolioController.get('/getTransactions', async (req, res) => {
  try {
    if (!req.user) {
      throw new Error('NO_USER');
    }

    const userId = req.user._id;
    const transactions = await getAllUserTransactions(userId);
    res.json(transactions);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

portfolioController.post('/addTransaction', async (req, res) => {
  try {
    if (!req.user) {
      throw new Error('NO_USER');
    }

    const transaction = req.body.data;
    const userId = req.user._id;

    if (transaction.coinId === '') {
      throw new Error('ENTER_COIN_ID');
    }

    if (transaction.coinPrice <= 0) {
      throw new Error('COIN_PRICE_NOT_POSITIVE');
    }

    if (transaction.quantity <= 0) {
      throw new Error('QUANTITY_LEAST_ONES');
    }

    await createTransaction(transaction, userId);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

portfolioController.delete('/removeTransaction', async (req, res) => {

});

module.exports = portfolioController;