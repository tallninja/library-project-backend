const router = require("express").Router();
const {
  books: { getAllDefaultedBooks },
} = require("../../../controllers");

router.get("/", getAllDefaultedBooks);

module.exports = router;
