const { isUser } = require('../middlewares/guards');

const testController = require('express').Router();

testController.get('/protected', isUser(), (req, res) => {
    res.json({ message: 'You are authorized' });
});

module.exports = testController;