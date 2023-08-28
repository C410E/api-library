const  { books }  = require("../data/books");

const queryId = (req, res) => {
    const { id } = req.params 

    try {
        
    const book = books.find((book) =>  {
        return book.id === Number(id);
    })

    if (!book) {
        return res.status(400).json({message: "There is no id for the given book"});
    }

    return res.status(200).json(book)
    } catch (error) {
        return res.status(500).json({error: "problem finding book by query"});
    }
}

module.exports = {
    queryId
}