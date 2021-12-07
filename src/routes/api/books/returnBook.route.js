const router = require("express").Router();
const {
  books: { returnBook },
} = require("../../../controllers");
const {
  auth: { isLibrarian, isUser },
} = require("../../../middlewares");

router.post("/", [isUser, isLibrarian], returnBook);

module.exports = router;
