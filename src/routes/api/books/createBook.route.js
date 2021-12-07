const router = require("express").Router();
const {
  books: { createBook },
} = require("../../../controllers");
const {
  auth: { isLibrarian, isUser },
} = require("../../../middlewares");

router.post("/", [isUser, isLibrarian], createBook);

module.exports = router;
