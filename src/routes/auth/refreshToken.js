const router = require("express").Router();

const {
  auth: { refreshToken },
} = require("../../controllers");

router.post("/", refreshToken);

module.exports = router;
