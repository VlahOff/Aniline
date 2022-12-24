const authController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { register, login, logout } = require('../service/userService');
const errorParser = require('../utils/errorParser');

authController.post('/register',
    body('email').isEmail().withMessage('Invalid Email'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw errors;
            }

            const token = await register(req.body.email, req.body.password);
            res.status(200).json(token);
        } catch (error) {
            res.status(400).json({
                message: errorParser(error)
            });
        }
    });

authController.post('/login', async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password);
        res.json(token);
    } catch (error) {
        res.status(401).json({
            message: errorParser(error)
        });
    }
});

authController.get('/logout', async (req, res) => {
    await logout(req.token);
    res.status(200).end();
});

module.exports = authController;