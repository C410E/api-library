let { books } = require("../data/books")

const deleteBook = (req, res) => {
    const bookId = parseInt(req.params.id);

    const indexBook = books.findIndex((book) => {
        return book.id === bookId;
    })

    try {
        if (indexBook !== -1) {
            books.splice(indexBook, 1)
            return res.status(200).json({message: "book removed"});
        } else {
            return res.status(400).json({message: "There is no book to remove for the given ID."});
        }
    } catch (error) {
        return res.status(500).json({error: "problem to remove book"});
    }
}

module.exports = {
    deleteBook
}