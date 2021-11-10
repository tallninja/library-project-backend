const router = require("express").Router();
const {
  auth: { resetPassword },
} = require("../../controllers");

router.patch("/", resetPassword);

module.exports = router;
