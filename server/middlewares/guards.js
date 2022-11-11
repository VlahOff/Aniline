function isUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.status(401).json({ message: 'Please login' });
        }
    };
}

module.exports = {
    isUser
};