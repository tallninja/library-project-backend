const router = require("express").Router();
const {
  auth: { isUser },
} = require("../../middlewares");
const {
  auth: { profile },
} = require("../../controllers");

router.get("/", [isUser], profile);

module.exports = router;
