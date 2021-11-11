const router = require("express").Router();
const {
  books: { getUserCurrentlyDefaultedBooks },
} = require("../../../controllers");
const {
  auth: { isUser },
} = require("../../../middlewares");

router.get("/", [isUser], getUserCurrentlyDefaultedBooks);

module.exports = router;
