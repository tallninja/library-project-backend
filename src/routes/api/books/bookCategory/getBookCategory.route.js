const router = require("express").Router();
const {
  books: {
    bookCategory: { getBookCategory },
  },
} = require("../../../../controllers");

router.get("/", getBookCategory);

module.exports = router;
