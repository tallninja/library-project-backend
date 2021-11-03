const router = require("express").Router();
const {
  books: {
    bookCategory: { createBookCategory },
  },
} = require("../../../../controllers");
const {
  auth: { isLibrarian },
} = require("../../../../middlewares");

router.post("/", [isLibrarian], createBookCategory);

module.exports = router;
