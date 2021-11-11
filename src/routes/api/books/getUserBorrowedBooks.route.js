const router = require("express").Router();
const {
  books: { getUserBorrowedBooks },
} = require("../../../controllers");

router.get("/", getUserBorrowedBooks);

module.exports = router;
