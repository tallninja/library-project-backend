const express = require("express");

const router = express.Router();

const booksRoutes = require("./books");
const payments = require("./payments");

router.use("/books", booksRoutes);
router.use("/payments", payments);

module.exports = router;
