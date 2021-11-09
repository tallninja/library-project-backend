const router = require("express").Router();
const {
  books: { getBook },
} = require("../../../controllers");

router.get("/", getBook);

module.exports = router;
