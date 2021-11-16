const router = require("express").Router();
const {
  auth: { signout },
} = require("../../controllers");
const {
  auth: { isUser },
} = require("../../middlewares");

router.get("/", [isUser], signout);

module.exports = router;
