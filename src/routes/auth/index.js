const router = require("express").Router();

const signupRoute = require("./signup.route");
const signinRoute = require("./signin.route");
const signoutRoute = require("./signout.route");
const profileRoute = require("./profile.route");

router.use("/signup", signupRoute);
router.use("/signin", signinRoute);
router.use("/signout", signoutRoute);
router.use("/profile", profileRoute);

module.exports = router;
