const router = require("express").Router();
const {
  books: { getAllCurrentlyDefaultedBooks },
} = require("../../../controllers");
const {
  auth: { isLibrarian },
} = require("../../../middlewares");

router.get("/", [isLibrarian], getAllCurrentlyDefaultedBooks);

module.exports = router;
