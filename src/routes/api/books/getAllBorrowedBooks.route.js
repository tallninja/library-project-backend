const router = require("express").Router();
const {
  books: { getAllBorrowedBooks },
} = require("../../../controllers");
const {
  auth: { isLibrarian, isUser },
} = require("../../../middlewares");

router.get("/", [isUser, isLibrarian], getAllBorrowedBooks);

module.exports = router;
