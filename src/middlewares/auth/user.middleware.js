const {
  auth: { user: User, role: Role },
} = require("../../models");

const isUser = (req, res, next) => {
  if (!req.user) {
    return res
      .status(403)
      .json({ message: "You are not authenticated! Please login!" });
  }
  User.findById(req.user._id).exec((err, user) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).json({ message: err });
        }
        for (let i = 0; i < roles.length; i++) {
          if (
            roles[i].name === "user" ||
            roles[i].name === "librarian" ||
            roles[i].name === "admin"
          ) {
            next();
            return;
          }
        }
        res.status(403).json({ message: "User privilleges required !" });
        return;
      }
    );
  });
};

module.exports = isUser;
