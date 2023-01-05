const authController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { register, login, logout } = require('../service/userService');
const errorParser = require('../utils/errorParser');

authController.post('/register',
    body('email').trim().isEmail().withMessage('INVALID_EMAIL'),
    body('username').trim().isLength({ min: 3, max: 30 }).withMessage('USERNAME_INVALID_LENGTH'),
    body('password')
        .trim()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
        .withMessage('INVALID_PASSWORD'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw errors;
            }

            const token = await register(req.body.email, req.body.username, req.body.password);
            res.status(201).json(token);
        } catch (error) {
            res.status(400).json({
                message: errorParser(error)
            });
        }
    });

authController.post('/login',
    body('email').trim().isEmail().withMessage('INVALID_EMAIL'),
    body('password')
        .trim()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
        .withMessage('INVALID_PASSWORD'),
    async (req, res) => {
        try {
            const token = await login(req.body.email, req.body.password);
            res.status(200).json(token);
        } catch (error) {
            res.status(401).json({
                message: errorParser(error)
            });
        }
    });

authController.get('/logout', async (req, res) => {
    await logout(req.query.token);
    res.status(202).end();
});

module.exports = authController;