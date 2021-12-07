const router = require("express").Router();

const {
  books: { searchBook },
} = require("../../../controllers");

router.get("/", searchBook);

module.exports = router;
