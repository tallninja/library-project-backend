const router = require("express").Router();
const {
  books: { getAllBorrowedBooks },
} = require("../../../controllers");
const {
  auth: { isLibrarian },
} = require("../../../middlewares");

router.get("/", [isLibrarian], getAllBorrowedBooks);

module.exports = router;
