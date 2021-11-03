const router = require("express").Router();
const {
  books: { editBook },
} = require("../../../controllers");
const {
  auth: { isLibrarian },
} = require("../../../middlewares");

router.patch("/", [isLibrarian], editBook);

module.exports = router;
