const router = require("express").Router();

const {
  auth: { isUser, isLibrarian, isAdmin },
} = require("../../middlewares");
const { test } = require("../../controllers");

router.get("/all", test.allAccess);
router.get("/user", [isUser], test.userAccess);
router.get("/librarian", [isUser, isLibrarian], test.librarianAccess);
router.get("/admin", [isUser, isAdmin], test.adminAccess);

module.exports = router;
