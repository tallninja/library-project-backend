const router = require("express").Router();
const {
  books: { getAllCurrentlyDefaultedBooks },
} = require("../../../controllers");
const {
  auth: { isLibrarian, isUser },
} = require("../../../middlewares");

router.get("/", [isUser, isLibrarian], getAllCurrentlyDefaultedBooks);

module.exports = router;
