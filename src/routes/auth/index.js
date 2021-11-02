const router = require("express").Router();

const signupRoute = require("./signup");
const signinRoute = require("./signin");
const refreshTokenRoute = require("./refreshToken");

router.use("/signup", signupRoute);
router.use("/signin", signinRoute);
router.use("/refresh-token", refreshTokenRoute);

module.exports = router;
