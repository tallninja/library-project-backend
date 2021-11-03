const router = require("express").Router();
const {
  auth: { signout },
} = require("../../controllers");

router.get("/", signout);

module.exports = router;
