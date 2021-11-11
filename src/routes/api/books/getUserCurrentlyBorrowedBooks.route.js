const router = require("express").Router();
const {
  books: { getUserCurrentlyBorrowedBooks },
} = require("../../../controllers");

router.get("/", getUserCurrentlyBorrowedBooks);

module.exports = router;
