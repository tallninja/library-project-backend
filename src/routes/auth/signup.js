const router = require("express").Router();

const {
  auth: {
    signup: { checkDuplicateEmail, checkRolesExist },
  },
} = require("../../middlewares");

const {
  auth: { signup },
} = require("../../controllers");

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/", [checkDuplicateEmail, checkRolesExist], signup);

module.exports = router;
