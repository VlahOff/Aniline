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
        _id: user._id,
        email: user.email
    };

    return {
        _id: user._id,
        email: user.email,
        accessToken: jwt.sign(data, JWT_SECRET_TOKEN)
    };
}

async function banToken(token) {
    // console.log(token);
    return Token.create({ token });
}

module.exports = {
    parseToken,
    createToken,
    banToken
};