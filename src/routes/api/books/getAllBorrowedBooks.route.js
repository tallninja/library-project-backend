const router = require("express").Router();
const {
  books: { getAllBorrowedBooks },
} = require("../../../controllers");

router.get("/", getAllBorrowedBooks);

module.exports = router;
