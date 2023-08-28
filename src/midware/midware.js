const books = require("../data/books");


const checkValidNumber = (req, res, next) => {
    const { id } = req.params


    if (isNaN(id) || id < 0 || id >= books.length) {
        return res.status(400).json({ message:  "The URL ID parameter value is not a valid number."});
    }
    next();
}

module.exports = {
    checkValidNumber
};