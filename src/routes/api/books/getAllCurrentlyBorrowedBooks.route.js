const router = require("express").Router();
const {
  books: { getAllCurrentlyBorrowedBooks },
} = require("../../../controllers");
const {
  auth: { isLibrarian },
} = require("../../../middlewares");

router.get("/", [isLibrarian], getAllCurrentlyBorrowedBooks);

module.exports = router;
