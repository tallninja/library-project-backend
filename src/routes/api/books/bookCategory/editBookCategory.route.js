const router = require("express").Router();
const {
  books: {
    bookCategory: { editBookCategory },
  },
} = require("../../../../controllers");
const {
  auth: { isLibrarian },
} = require("../../../../middlewares");

router.patch("/", [isLibrarian], editBookCategory);

module.exports = router;
