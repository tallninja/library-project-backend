const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");

const { auth: authSerializers } = require("../../serializers");
const {
  auth: { user: User },
} = require("../../models");

const customFields = {
  usernameField: "email",
  passwordField: "password",
};

const verifyCallback = (username, password, done) => {
  User.findOne({
    email: username,
  })
    .populate("roles", "-__v")
    .exec(async (err, user) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      if (!user) {
        return done(null, false, {
          message: "Incorrect email or password !",
        });
      }

      let passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        return done(null, false, {
          message: "Incorrect email or password !",
        });
      }

      return done(null, user);
    });
};

const strategy = new LocalStrategy(customFields, verifyCallback);

authSerializers();
passport.use(strategy);

module.exports = passport;
