let { books } = require("../data/books");


const updateBook = (req, res) => {
    const { id } = req.params
    const {
        title,
        author,
        year,
        numberOfPages
    } = req.body

    const book = books.find((book) => {
        return book.id === Number(id)
    })

    try {
        if (!book) {
            return res.status(400).json({message: "There is no book to be replaced for the entered ID"})
        }

        book.title = title
        book.author = author
        book.year = year
        book.numberOfPages = numberOfPages

        res.status(200).json({message: "updated book"})
    } catch (error) {
        return res.status(500).json({error: "error when updating book"})
    }
}

module.exports = {
    updateBook
}