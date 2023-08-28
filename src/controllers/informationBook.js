const books = require("../data/books");

const informations = (req, res) => {

    res.status(200).json(books)
}

module.exports = {
    informations
}