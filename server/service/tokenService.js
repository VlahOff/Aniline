const jwt = require('jsonwebtoken');
const Token = require('../models/Token');

// TODO: add to env variable
const JWT_SECRET = 'nQ5^LZ!AaGf^&d#9Dt5';

async function parseToken(token) {
    const data = await Token.findOne({ token });

    if (data) {
        throw new Error('Token is blacklisted');
    }

    const result = jwt.verify(token, JWT_SECRET);
    if (!result) {
        console.log('The ban hammer struck!');
        banToken(token);
    }
    return result;
}

function createToken(user) {
    const data = {
        _id: user._id,
        email: user.email,
        username: user.username,
    };

    return {
        _id: user._id,
        email: user.email,
        username: user.username,
        accessToken: jwt.sign(data, JWT_SECRET)
    };
}

async function banToken(token) {
    return Token.create({ token });
}

module.exports = {
    parseToken,
    createToken,
    banToken
};