const Transaction = require('../models/Transaction');
const User = require('../models/User');

async function getAllUserTransactions(userId) {
  return Transaction.find({ owner: userId }).lean();
}

async function getTransaction(transactionId) {
  return Transaction.findById(transactionId).lean();
}

async function createTransaction(data, userId) {
  const user = await User.findById(userId);

  return Transaction.create({
    coinId: data.coinId,
    coinPrice: data.coinPrice,
    quantity: data.quantity,
    owner: user._id
  });
}

async function editTransaction(data, transactionId) {
  const transaction = {
    coinId: data.coinId,
    coinPrice: data.coinPrice,
    quantity: data.quantity
  };

  return Transaction.findByIdAndUpdate(transactionId, transaction);
}

async function deleteTransaction(transactionId) {
  return Transaction.findByIdAndRemove(transactionId);
}

module.exports = {
  getAllUserTransactions,
  getTransaction,
  createTransaction,
  // editTransaction,
  deleteTransaction
};