const { getCoinDetailed } = require('../api/cryptoApi');
const { createTransaction, getAllUserTransactions, getTransaction, deleteTransaction } = require('../service/transactionService');
const errorParser = require('../utils/errorParser');

const portfolioController = require('express').Router();

portfolioController.get('/getTransactions', async (req, res) => {
  try {
    if (!req.user) {
      throw new Error('NO_USER');
    }
    const userId = req.user.userId;
    let transactions = await getAllUserTransactions(userId);
    transactions = transactions.map(t => { return t = t._id.toString(); });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

portfolioController.get('/getTransaction', async (req, res) => {
  try {
    if (!req.user) {
      throw new Error('NO_USER');
    }

    const transactionData = await getTransaction(req.query.transactionId);
    const details = await getCoinDetailed(transactionData.coinId);

    const transaction = createTransactionDetail(transactionData, details);

    res.status(200).json(transaction);
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

    if (req.body.data.coinId === '') {
      throw new Error('ENTER_COIN_ID');
    }

    if (req.body.data.coinPrice <= 0) {
      throw new Error('COIN_PRICE_NOT_POSITIVE');
    }

    if (req.body.data.quantity <= 0) {
      throw new Error('QUANTITY_LEAST_ONES');
    }

    const transactionData = await createTransaction(req.body.data, req.user.userId);
    const details = await getCoinDetailed(transactionData.coinId);

    const transaction = createTransactionDetail(transactionData, details);

    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

portfolioController.delete('/removeTransaction', async (req, res) => {
  try {
    if (!req.user) {
      throw new Error('NO_USER');
    }

    await deleteTransaction(req.query.transactionId);
    res.status(200).end();
  } catch (error) {
    res.status(400).json({
      message: errorParser(error)
    });
  }
});

function createTransactionDetail(transactionData, details) {
  return {
    coinId: transactionData.coinId,
    boughtPrice: transactionData.coinPrice,
    quantity: transactionData.quantity,
    transactionId: transactionData._id,
    value: transactionData.quantity * details.current_price,
    pnlValue: (details.current_price - transactionData.coinPrice) * transactionData.quantity,
    pnlPercent: ((details.current_price * transactionData.quantity) - (transactionData.coinPrice * transactionData.quantity)) / (transactionData.coinPrice * transactionData.quantity) * 100,
    id: details.id,
    symbol: details.symbol,
    name: details.name,
    image: details.image.small,
    current_price: details.current_price,
    price_change_24h: details.price_change_24h,
    price_change_percentage_24h: details.price_change_percentage_24h
  };
}

module.exports = portfolioController;