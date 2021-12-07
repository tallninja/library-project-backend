const router = require("express").Router();
const {
  books: { getAllCurrentlyBorrowedBooks },
} = require("../../../controllers");
const {
  auth: { isLibrarian, isUser },
} = require("../../../middlewares");

router.get("/", [isUser, isLibrarian], getAllCurrentlyBorrowedBooks);

module.exports = router;
