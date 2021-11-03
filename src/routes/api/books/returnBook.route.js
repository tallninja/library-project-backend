const router = require("express").Router();
const {
  books: { returnBook },
} = require("../../../controllers");
const {
  auth: { isLibrarian },
} = require("../../../middlewares");

router.post("/", [isLibrarian], returnBook);

module.exports = router;
