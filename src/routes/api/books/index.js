const router = require("express").Router();

const getAllBooksRoute = require("./getAllBooks.route");
const getBookRoute = require("./getBook.route");
const createBookRoute = require("./createBook.route");
const editBookRoute = require("./editBook.route");
const deleteBookRoute = require("./deleteBook.route");
const borrowBookRoute = require("./borrowBook.route");
const returnBookRoute = require("./returnBook.route");
const bookCategoryRoute = require("./bookCategory");
const getAllBorrowedBooksRoute = require("./getAllBorrowedBooks.route");
const getAllDefaultedBooksRoute = require("./getAllDefaultedBooks.route");
const getUserBorrowedBooksRoute = require("./getUserBorrowedBooks.route");
const getUserDefaultedBooksRoute = require("./getUserDefaultedBooks.route");
const getAllCurrentlyBorrowedBooksRoute = require("./getAllCurrentlyBorrowedBooks.route");
const getAllCurrentlyDefaultedBooksRoute = require("./getAllCurrentlyDefaultedBooks.route");
const getUserCurrentlyBorrowedBooksRoute = require("./getUserCurrentlyBorrowedBooks.route");
const getUserCurrentlyDefaultedBooksRoute = require("./getUserCurrentlyDefaultedBooks.route");

router.use("/all", getAllBooksRoute);
router.use("/book", getBookRoute);
router.use("/create", createBookRoute);
router.use("/edit", editBookRoute);
router.use("/delete", deleteBookRoute);
router.use("/borrow", borrowBookRoute);
router.use("/return", returnBookRoute);
router.use("/category", bookCategoryRoute);
router.use("/borrowed/all", getAllBorrowedBooksRoute);
router.use("/defaulted/all", getAllDefaultedBooksRoute);
router.use("/borrowed/user/all", getUserBorrowedBooksRoute);
router.use("/defaulted/user/all", getUserDefaultedBooksRoute);
router.use("/borrowed", getAllCurrentlyBorrowedBooksRoute);
router.use("/defaulted", getAllCurrentlyDefaultedBooksRoute);
router.use("/borrowed/user", getUserCurrentlyBorrowedBooksRoute);
router.use("/defaulted/user", getUserCurrentlyDefaultedBooksRoute);

module.exports = router;
