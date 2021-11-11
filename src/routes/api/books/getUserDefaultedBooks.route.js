const router = require("express").Router();
const {
  books: { getUserDefaultedBooks },
} = require("../../../controllers");
const {
  auth: { isUser },
} = require("../../../middlewares");

router.get("/", [isUser], getUserDefaultedBooks);

module.exports = router;
