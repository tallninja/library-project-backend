const router = require("express").Router();

const {
  auth: {
    signup: { checkDuplicateEmail, checkRolesExist },
  },
} = require("../../middlewares");

const {
  auth: { signup },
} = require("../../controllers");

router.post("/", [checkDuplicateEmail, checkRolesExist], signup);

module.exports = router;
