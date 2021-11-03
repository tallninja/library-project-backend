const router = require("express").Router();
const {
  books: { borrowBook },
} = require("../../../controllers");
const {
  auth: { isUser },
} = require("../../../middlewares");

router.post("/", [isUser], borrowBook);

module.exports = router;
