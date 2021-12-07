const router = require("express").Router();
const {
  books: { deleteBook },
} = require("../../../controllers");
const {
  auth: { isLibrarian, isUser },
} = require("../../../middlewares");

router.delete("/", [isUser, isLibrarian], deleteBook);

module.exports = router;
