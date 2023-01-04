module.exports = (error) => {
    console.log(error);
    if (Array.isArray(error)) {
        const res = error.map(e => e.msg);
        return res.join('\n');
    } else {
        return error.message;
    }
};