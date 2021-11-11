const router = require("express").Router();
const {
  books: { getUserBorrowedBooks },
} = require("../../../controllers");
const {
  auth: { isUser },
} = require("../../../middlewares");

router.get("/", [isUser], getUserBorrowedBooks);

module.exports = router;
