const jwt = require('jsonwebtoken');
const Token = require('../models/Token');

const JWT_SECRET_TOKEN = process.env.JWT_SECRET_TOKEN;

async function parseToken(token) {
    const data = await Token.findOne({ token });

    if (data) {
        throw new Error('BLACKLISTED_TOKEN');
    }

    const result = jwt.verify(token, JWT_SECRET_TOKEN);
    if (!result) {
        console.log('The ban hammer struck!');
        banToken(token);
    }
    return result;
}

function createToken(user) {
    const data = {
        userId: user._id,
        email: user.email,
        username: user.username
    };

    const t = new Date();
    t.setHours(new Date().getHours() + 8);

    return {
        userId: user._id,
        email: user.email,
        username: user.username,
        accessToken: jwt.sign(data, JWT_SECRET_TOKEN),
        expiriesIn: Date.parse(t)
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