const router = require("express").Router();
const {
  books: { getUserDefaultedBooks },
} = require("../../../controllers");

router.get("/", getUserDefaultedBooks);

module.exports = router;
