let { books } = require("../data/books");


const partialUpdate = (req, res) => {
    const { id } = req.params
    const {
        title,
        author,
        year,
        numberOfPages
    } = req.body

    const book = books.find((book) => {
        return book.id === Number(id);
    })

    try {
        if (!book) {
            return res.status(400).json({message: "There is no book to be changed for the given ID."});
        }
        if (title !== undefined) {
            book.title = title
        }
        if (author !== undefined) {
            book.author = author
        }
        if (year !== undefined) {
            book.year = year
        }
        if (numberOfPages !== undefined) {
            book.numberOfPages = numberOfPages
        }

        res.status(200).json({message: "altered book"});
    } catch (error) {
        return res.status(500).json({error: "partial update error"});
    }
}

module.exports = {
    partialUpdate
}