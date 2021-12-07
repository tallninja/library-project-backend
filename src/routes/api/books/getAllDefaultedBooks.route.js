const router = require("express").Router();
const {
  books: { getAllDefaultedBooks },
} = require("../../../controllers");
const {
  auth: { isLibrarian, isUser },
} = require("../../../middlewares");

router.get("/", [isUser, isLibrarian], getAllDefaultedBooks);

module.exports = router;
