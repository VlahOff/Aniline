const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = 'nQ5^LZ!AaGf^&d#9Dt5';

async function register(email, username, password) {
    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (existing) {
        throw new Error('Email is already taken');
    }

    const user = await User.create({
        email,
        username,
        hashedPassword: await bcrypt.hash(password, 10)
    });

    return createToken(user);
}

async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (!user) {
        throw new Error('Email or password is invalid');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);

    if (!match) {
        throw new Error('Email or password is invalid');
    }

    return createToken(user);
}

async function logout() {
    // TODO: Token blacklist
}

function parseToken(token) {
    // if () { token in black list
    // throw new Error('Token is blacklisted');
    // }

    return jwt.verify(token, JWT_SECRET);
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

module.exports = {
    register,
    login,
    logout,
    parseToken
};