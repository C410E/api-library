const express = require("express");

const { informations } = require("./controllers/informationBook");

const { queryId } = require("./controllers/queryId");

const { checkValidNumber } = require("./midware/midware");

const { addBooks } = require("./controllers/addBook");

const router = express();


router.get("/books", informations);

router.get("/books/:id", checkValidNumber, queryId);

router.post("/books", addBooks);

module.exports = router;