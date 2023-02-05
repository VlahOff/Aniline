const Transaction = require('../models/Transaction');
const User = require('../models/User');

async function getAllUserTransactions(userId) {
  return Transaction.find({ owner: userId }).lean();
}

async function createTransaction(data, userId) {
  const user = await User.findById(userId);

  const transaction = await Transaction.create({
    coinId: data.coinId,
    coinPrice: data.coinPrice,
    quantity: data.quantity,
    owner: user._id
  });

  return transaction;
}

async function editTransaction(data, transactionId) {
  const transaction = {
    coinId: data.coinId,
    coinPrice: data.boughtPrice,
    quantity: data.quantity
  };
  await Transaction.findByIdAndUpdate(transactionId, transaction);

  return await Transaction.findById(transactionId);
}

async function deleteTransaction(transactionId) {
  return Transaction.findByIdAndRemove(transactionId);
}

module.exports = {
  getAllUserTransactions,
  createTransaction,
  editTransaction,
  deleteTransaction
};