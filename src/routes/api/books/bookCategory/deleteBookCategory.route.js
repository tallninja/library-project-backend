const router = require("express").Router();
const {
  books: {
    bookCategory: { deleteBookCategory },
  },
} = require("../../../../controllers");
const {
  auth: { isLibrarian },
} = require("../../../../middlewares");

router.delete("/", [isLibrarian], deleteBookCategory);

module.exports = router;
