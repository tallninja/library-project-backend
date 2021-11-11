const router = require("express").Router();

const signupRoute = require("./signup.route");
const signinRoute = require("./signin.route");
const signoutRoute = require("./signout.route");
const profileRoute = require("./profile.route");
const forgotPasswordRoute = require("./forgotPassword.route");
const resetPasswordRoute = require("./resetPassword.route");

router.use("/signup", signupRoute);
router.use("/signin", signinRoute);
router.use("/signout", signoutRoute);
router.use("/profile", profileRoute);
router.use("/forgot-password", forgotPasswordRoute);
router.use("/reset-password", resetPasswordRoute);

module.exports = router;
