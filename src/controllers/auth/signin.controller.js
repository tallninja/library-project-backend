const {
  passport: { local },
} = require("../../services");

const signin = (req, res, next) => {
  local.authenticate("local", (e, user, info) => {
    if (e) {
      return next(e);
    }
    if (info) {
      return res.status(403).json(info);
    }
    req.logIn(user, (e) => {
      if (e) {
        return next(e);
      }
      return res.status(200).json({ message: "Login Successfull !", user });
    });
  })(req, res, next);
};

module.exports = signin;
