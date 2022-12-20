const Transaction = require('../models/Transaction');
const User = require('../models/User');

async function getAllUserTransactions(userId) {
  return Transaction.find({ owner: userId }).lean();
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

async function deleteTransaction() {

}

module.exports = {
  getAllUserTransactions,
  createTransaction
};