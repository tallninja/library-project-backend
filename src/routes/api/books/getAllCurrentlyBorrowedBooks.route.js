const router = require("express").Router();
const {
  books: { getAllCurrentlyBorrowedBooks },
} = require("../../../controllers");

router.get("/", getAllCurrentlyBorrowedBooks);

module.exports = router;
