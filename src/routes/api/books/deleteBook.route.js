const router = require("express").Router();
const {
  books: { deleteBook },
} = require("../../../controllers");
const {
  auth: { isLibrarian },
} = require("../../../middlewares");

router.delete("/", [isLibrarian], deleteBook);

module.exports = router;
