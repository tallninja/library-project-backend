const router = require("express").Router();
const {
  books: {
    bookCategory: { getAllBookCategories },
  },
} = require("../../../../controllers");

router.get("/", getAllBookCategories);

module.exports = router;
