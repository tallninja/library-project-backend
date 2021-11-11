const router = require("express").Router();
const {
  books: { getAllDefaultedBooks },
} = require("../../../controllers");
const {
  auth: { isLibrarian },
} = require("../../../middlewares");

router.get("/", [isLibrarian], getAllDefaultedBooks);

module.exports = router;
