const express = require("express");

const { informations } = require("./controllers/informationBook");

const { queryId } = require("./controllers/queryId");

const { checkValidNumber } = require("./midware/midware");

const { addBooks } = require("./controllers/addBook");

const { updateBook } = require("./controllers/updateBook");

const { partialUpdate } = require("./controllers/partialUpdate");

const { deleteBook } = require("./controllers/deteletBook");

const router = express();


router.get("/books", informations);

router.get("/books/:id", checkValidNumber, queryId);

router.post("/books", addBooks);

router.put("/books/:id", updateBook);

router.patch("/books/:id", partialUpdate);

router.delete("/books/:id", deleteBook);

module.exports = router;