const router = require("express").Router();
const {
  books: { editBook },
} = require("../../../controllers");
const {
  auth: { isLibrarian, isUser },
} = require("../../../middlewares");

router.patch("/", [isUser, isLibrarian], editBook);

module.exports = router;
