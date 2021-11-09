const router = require("express").Router();

const getAllBooksRoute = require("./getAllBooks.route");
const getBookRoute = require("./getBook.route");
const createBookRoute = require("./createBook.route");
const editBookRoute = require("./editBook.route");
const deleteBookRoute = require("./deleteBook.route");
const borrowBookRoute = require("./borrowBook.route");
const returnBookRoute = require("./returnBook.route");
const bookCategoryRoute = require("./bookCategory");

router.use("/all", getAllBooksRoute);
router.use("/book", getBookRoute);
router.use("/create", createBookRoute);
router.use("/edit", editBookRoute);
router.use("/delete", deleteBookRoute);
router.use("/borrow", borrowBookRoute);
router.use("/return", returnBookRoute);
router.use("/category", bookCategoryRoute);

module.exports = router;
