const { user: User, role: Role } = require("../../models");

const isAdmin = (req, res, next) => {
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
          return res.status(500).json({ message: err });
        }
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "admin") {
            next();
            return;
          }
        }
        res.status(403).json({ message: "Admin privilleges required !" });
        return;
      }
    );
  });
};

module.exports = isAdmin;
