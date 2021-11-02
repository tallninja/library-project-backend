const router = require("express").Router();

const {
  auth: { signin },
} = require("../../controllers");

router.post("/", signin);

module.exports = router;
