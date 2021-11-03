const router = require("express").Router();
const {
  books: { createBook },
} = require("../../../controllers");
const {
  auth: { isLibrarian },
} = require("../../../middlewares");

router.post("/", [isLibrarian], createBook);

module.exports = router;
