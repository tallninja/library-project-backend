const db = require("../../models");

const ROLES = db.ROLES;
const User = db.user;

const checkDuplicateEmail = (req, res, next) => {
  const { email } = req.body;
  User.findOne({
    email: email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).json({ message: err });
      return;
    }
    if (user) {
      res.status(400).json({ message: `${email} is taken !` });
      return;
    }
    next();
  });
};

const checkRolesExist = (req, res, next) => {
  const { roles } = req.body;
  if (roles) {
    for (let i = 0; i < roles.length; i++) {
      if (!ROLES.includes(roles[i])) {
        res
          .status(400)
          .json({ message: `Role '${roles[i]}' does not exist !` });
        return;
      }
    }
  }
  next();
};

module.exports = {
  checkDuplicateEmail,
  checkRolesExist,
};
