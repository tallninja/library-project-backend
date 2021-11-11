const router = require("express").Router();
const {
  books: { getAllCurrentlyDefaultedBooks },
} = require("../../../controllers");

router.get("/", getAllCurrentlyDefaultedBooks);

module.exports = router;
