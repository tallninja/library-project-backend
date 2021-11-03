const router = require("express").Router();
const {
  books: { getAllBooks },
} = require("../../../controllers");

router.get("/", getAllBooks);

module.exports = router;
