const router = require("express").Router();

const {
  auth: { forgotPassword },
} = require("../../controllers");

router.post("/", forgotPassword);

module.exports = router;
