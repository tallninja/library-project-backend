const router = require("express").Router();
const {
  books: { getUserCurrentlyBorrowedBooks },
} = require("../../../controllers");
const {
  auth: { isUser },
} = require("../../../middlewares");

router.get("/", [isUser], getUserCurrentlyBorrowedBooks);

module.exports = router;
