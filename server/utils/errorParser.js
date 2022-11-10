module.exports = (error) => {
    if (Array.isArray(error)) {
        return error.map(e => e.msg).join('\n');
    } else {
        return error.message;
    }
};