const router = require("express").Router();
const {
  books: { getUserCurrentlyDefaultedBooks },
} = require("../../../controllers");

router.get("/", getUserCurrentlyDefaultedBooks);

module.exports = router;
