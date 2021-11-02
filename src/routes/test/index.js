const router = require("express").Router();

const {
  auth: { jwt },
} = require("../../middlewares");
const { test } = require("../../controllers");

router.use((req, res, next) => {
  res.header(
    "Access-Control-Headers",
    "Authorization, Origin, Content-Type, Accept"
  );
  next();
});

router.get("/", (req, res) => {
  res.status(200).json({ message: "You have reached the test endpoint !" });
});

router.get("/all", test.allAccess);
router.get("/user", [jwt.verifyToken], test.userAccess);
router.get(
  "/librarian",
  [jwt.verifyToken, jwt.isLibrarian],
  test.librarianAccess
);
router.get("/admin", [jwt.verifyToken, jwt.isAdmin], test.adminAccess);

module.exports = router;
