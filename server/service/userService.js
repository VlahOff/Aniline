const bcrypt = require('bcrypt');
const User = require('../models/User');
const { createToken, banToken } = require('./tokenService');

async function register(email, username, password) {
    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (existing) {
        throw new Error('EMAIL_TAKEN');
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
        throw new Error('INVALID_CREDENTIALS');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);

    if (!match) {
        throw new Error('INVALID_CREDENTIALS');
    }

    return createToken(user);
}

async function logout(token) {
    banToken(token);
}

module.exports = {
    register,
    login,
    logout,
};