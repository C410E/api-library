let { books, idBooks } = require("../data/books")

const addBooks = (req, res) => {
    const {
        title,
        author,
        year,
        numberOfPages
    } = req.body

   try {
    if (!title) {
        return res.status(400).json({message: "the title is required"});
    }
    if (!author) {
        return res.status(400).json({message: "the author is required"});
    }
    if (!year) {
        return res.status(400).json({message: "the year is required"});
    }
    if (!numberOfPages) {
        return res.status(400).json({message: "the number of pages is required"});
    }

    const book = {
        id: idBooks++,
        title,
        author,
        year,
        numberOfPages
    }

    books.push(book);

    res.status(200).json(book);
   } catch (error) {
    return res.status(500).json({error: "Error adding book"});
   }
}

module.exports = {
    addBooks
}